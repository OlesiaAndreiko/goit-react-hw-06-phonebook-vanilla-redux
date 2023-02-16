// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts } from '../../redux/selectors';
import { List } from './ContactList.staled';

export const ContactList = ({onDelete}) => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
      ))}
    </List>
  );
};

// export const ContactList = ({ contacts, onDelete }) => {

//   return (
//     <List>
//       {contacts.map(contact => (
//         <Contact key={contact.id} contact={contact} onDelete={onDelete} />
//       ))}
//     </List>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
