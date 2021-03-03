import types from "./phoneBookTypes";
import shortid from "shortid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const removeContact = (contactId) => ({
  type: types.REMOVE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const phoneBookActions = {
  addContact,
  removeContact,
  changeFilter,
};

export default phoneBookActions;
