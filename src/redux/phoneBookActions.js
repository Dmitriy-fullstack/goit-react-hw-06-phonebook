import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");
// const addContact = createAction("contacts/add", (name, number) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// });

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const removeContact = createAction("contacts/remove");
export const removeContactRequest = createAction(
  "contacts/removeContactRequest"
);
export const removeContactSuccess = createAction(
  "contacts/removeContactSuccess"
);
export const removeContactError = createAction("contacts/removeContactError");

// const removeContact = (contactId) => ({
//   type: types.REMOVE,
//   payload: contactId,
// });

export const changeFilter = createAction("contacts/changeFilter");
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// const phoneBookActions = {
//   addContact,
//   removeContact,
//   changeFilter,
// };

// export default phoneBookActions;
