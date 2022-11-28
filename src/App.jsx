import React from 'react';
import ContactForm from 'components/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsloading } from 'redux/contacts/contactsSelectors';
import { Box } from 'components/Box.styled';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box pad="20px">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
          
          <Filter/>
          <ContactList/>
          
        
    </Box>
  );
};
