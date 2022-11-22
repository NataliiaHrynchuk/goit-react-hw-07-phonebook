import React from 'react';
import ContactForm from 'components/ContactForm';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/contacts/contactsSelectors';
import { Box } from 'components/Box.styled';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export default function App() {
  const contacts = useSelector(getContact);
  return (
    <Box pad="20px">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
          <>
          <Filter/>
          <ContactList/>
          </>
        )}
    </Box>
  );
};
