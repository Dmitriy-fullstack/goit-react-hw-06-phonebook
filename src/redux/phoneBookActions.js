import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

const removeContact = createAction("contacts/remove");

// const removeContact = (contactId) => ({
//   type: types.REMOVE,
//   payload: contactId,
// });

const changeFilter = createAction("contacts/changeFilter");
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const phoneBookActions = {
  addContact,
  removeContact,
  changeFilter,
};

export default phoneBookActions;
