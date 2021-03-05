const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getAllContacts = (state) => state.contacts.items;
const getVisibleContacts = (state) => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalized = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalized)
  );
};

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
};
