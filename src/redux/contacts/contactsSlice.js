import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "redux/contacts/contactsConstants";
import { fetchContacts, addContact, deleteContact } from "redux/contacts/contactsOperations";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null; 
            state.items = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.filter(contact => contact.id !== action.payload);
        }
    }
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             state.push(action.payload);
    //         },
    //         prepare({ name, number }) {
    //             return {
    //                 payload: {
    //                     name,
    //                     number,
    //                     id: nanoid(),
    //                 },
    //             };
    //         },
    //     },
    //     deleteContact(state, action) { 
    //         return state.filter(contact => contact.id !== action.payload);
    //     },
    // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;