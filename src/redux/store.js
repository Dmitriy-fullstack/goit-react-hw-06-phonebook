import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phoneBookReducer from "./phoneBookReducer";

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
