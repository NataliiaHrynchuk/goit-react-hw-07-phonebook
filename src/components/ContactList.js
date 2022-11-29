import {Box} from 'components/Box.styled';
import { Button } from 'components/Button.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
    
            
    return (
            
        <Box
            as="ul"
            pad="0">
            {contacts.map(({ id, name, number }) => (
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
