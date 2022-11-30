import React from 'react';
import ContactForm from 'components/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { selectError, selectIsloading } from 'redux/contacts/contactsSelectors';
import { Box } from 'components/Box.styled';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box pad="20px">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && (
          <>
          <Filter/>
          <ContactList/>
          </>
        )}
    </Box>
  );
};
