export const startLoading = () => {
  return {
    type: "START_LOADING",
    payload: {}
  }
};

export const stopLoading = () => {
  return {
    type: "STOP_LOADING",
    payload: {}
  }
};

export const notify = (message) => {
  return {
    type: "NOTIFY",
    payload: {
      message
    }
  }
};
