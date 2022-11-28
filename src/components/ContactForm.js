import React from "react";
import { useState } from "react";
import {Box} from 'components/Box.styled';
import {Label} from 'components/Label.styled';
import {Text} from 'components/Text.styled';
import { Button } from 'components/Button.styled';
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contactsOperations";
import { useSelector } from "react-redux";
import { selectContacts } from 'redux/contacts/contactsSelectors';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectContacts);

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value.trim());
                break;
            case 'number':
                setNumber(value.trim());
                break;
            default:
                return;
        }
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const newContact = { name, number };
        const normalizedName = name.toLowerCase();
        const repeatedName = contacts.find(contact => contact.name.toLowerCase() === normalizedName);
        const repeatedNumber = contacts.find(contact => contact.number === number);
            
        if (repeatedName) {
            alert(`${name} is already in contacts.`);
        } else if (repeatedNumber) {
            alert(`${number} is already in contacts.`);
        } else {
            dispatch(addContact(newContact));
            setName(' ');
            setNumber(' ');
        };
    }

        return (
            <Box
                as="form"
                border="0.5px solid rgb(112, 111, 111)"
                display="inline-block"
                w="200px"
                pad="20px 250px 20px 20px"
                onSubmit={handleSubmit}
            >
                <Label htmlFor="id-name">
                    Name </Label>
                <Text
                    type="text"
                    name="name"
                    id="id-name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    mt="10px"
                    mb="10px"
                    onChange={handleChange}
                />
                
                <Label htmlFor="id-number">
                    Number </Label>
                <Text
                    type="tel"
                    name="number"
                    id="id-numder"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                    mt="10px"
                    mb="10px"
                    mr="120px" />
                
                <Button type="submit">Add contact</Button>
            </Box>
        )
    };