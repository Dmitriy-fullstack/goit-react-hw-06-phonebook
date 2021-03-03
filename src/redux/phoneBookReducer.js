import { combineReducers } from "redux";
// import types from "./phoneBookTypes";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phoneBookActions";
// import { act } from "react-dom/test-utils";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],

  [actions.removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.REMOVE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
