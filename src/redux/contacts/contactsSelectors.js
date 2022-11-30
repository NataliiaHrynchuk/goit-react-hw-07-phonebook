import { selectFilter } from "redux/filter/filterSelectors"; 
import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.items;
export const selectIsloading = state => state.contacts.isloading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
)


