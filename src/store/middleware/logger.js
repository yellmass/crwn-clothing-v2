

export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("Current State: ", store.getState());
  
    next(action);
  
    console.log("Next State: ", store.getState());
  };