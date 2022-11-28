// export const getContact = state => state.contacts;
export const selectContacts = state => state.contacts.items;
export const selectIsloading = state => state.contacts.isloading;
export const selectError = state => state.contacts.error;