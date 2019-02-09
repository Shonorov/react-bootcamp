import { combineReducers } from "redux";

const loading = (state = false, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return true;
    case 'STOP_LOADING':
      return false;
    default:
      return state;
  }
};

const notify = (state = {}, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return {
        message: action.payload &&  action.payload.message
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  loading,
  notify
});

export default rootReducer;

