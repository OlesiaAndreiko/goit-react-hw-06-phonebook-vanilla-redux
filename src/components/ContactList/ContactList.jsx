// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import { Heading } from 'components/Heading/Hading';
import { List } from './ContactList.staled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const search = useSelector(getFilter);

  const newContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  // useEffect(
  //   () => localStorage.setItem('contacts', JSON.stringify(contacts)),
  //   [contacts]
  // );

  return (
    <>
      <Heading title={'contacts'}/>
      {newContacts.length ? (
        <List>
          {newContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <p>Start adding contacts!</p>
      )}
    </>
  );
};
