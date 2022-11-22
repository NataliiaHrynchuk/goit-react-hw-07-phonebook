import {Box} from 'components/Box.styled';
import { Button } from 'components/Button.styled';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/contacts/contactsSelectors';
import { getFilter } from 'redux/filter/filterSelectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContact);
    const filter = useSelector(getFilter).toLowerCase();
    const getVisibleContacts =
        filter ?
            (contacts.filter(contact => contact.name.toLowerCase().includes(filter)))
            :
            (contacts);
            
    return (
            
        <Box
            as="ul"
            pad="0">
            {getVisibleContacts.map(({ id, name, number }) => (
                <Box
                    key={id}
                    as="li"
                    display="flex"
                    gap="10px"
                    alIt="center"
                >
                    <p>{name}:</p>
                    <p>{number}</p>
                    <Button
                        type="button"
                        w="60px"
                        onClick={() => dispatch(deleteContact(id))}
                    >Delete
                    </Button>
                </Box>
            ))}
        </Box>
    )
};
