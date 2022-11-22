import { createSlice, nanoid } from "@reduxjs/toolkit";
import { contactsInitialState } from "redux/contacts/contactsConstants";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) { 
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;