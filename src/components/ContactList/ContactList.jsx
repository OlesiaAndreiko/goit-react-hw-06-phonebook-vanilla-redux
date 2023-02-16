import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import { List } from './ContactList.staled';
import { Heading } from 'components/Heading/Hading';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const search = useSelector(getFilter);

  const newContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  return (
    <>
      <Heading title={'contacts'}></Heading>
      <List>
        {newContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};
