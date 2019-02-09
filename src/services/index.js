import axios from 'axios'
import store from '../redux/store';
import {startLoading, stopLoading, notify} from '../redux/actions';

const JWT_TOKEN = 'JWT_TOKEN';

// have a base api instance to avoid repeating common config - like the base URL
// https://github.com/axios/axios#custom-instance-defaults
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT
});

// add the Auth header to the base API instance once here to avoid repeated code
if (localStorage.getItem(JWT_TOKEN)) {
  const token = localStorage.getItem(JWT_TOKEN);
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

// keep networking logic - like handling headers and tokens - in the network layer
export function login(token) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
  localStorage.setItem(JWT_TOKEN, token);
  window.location = "/";
}

export function logout() {
  delete api.defaults.headers.Authorization;
  localStorage.removeItem(JWT_TOKEN);
  window.location = "/";
}

export function isAuth(){
  return Boolean(localStorage.getItem(JWT_TOKEN));
}

// handle generic events - like loading and 500 type errors - in API interceptors
api.interceptors.request.use(config => {
  // display a single subtle loader on the top of the page when there is networking in progress
  // avoid multiple loaders, use placeholders or consistent updates instead
  store.dispatch(startLoading());
  return config
});

api.interceptors.response.use(
  resp => {
    store.dispatch(stopLoading());
    return resp
  },
  err => {
    store.dispatch(stopLoading());
    // if you have no specific plan B for errors, let them be handled here with a notification
    const {data, status} = err.response;
    if (500 < status) {
      const message = data.message || 'Ooops, something bad happened.';
      store.dispatch(notify({message, color: 'danger'}))
    }
    throw err
  }
);

export default api;
