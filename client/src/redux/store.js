import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const ProcessReducer = (state = {}, action) => {
  switch (action.type) {
    case "PROCESS":
      return { ...action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  ProcessReducer: ProcessReducer,
});

const store = createStore(reducer);

export default store;
