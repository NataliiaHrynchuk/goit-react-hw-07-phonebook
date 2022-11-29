import { selectFilter } from "redux/filter/filterSelectors"; 
export const selectContacts = state => state.contacts.items;
export const selectIsloading = state => state.contacts.isloading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state).toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
};

