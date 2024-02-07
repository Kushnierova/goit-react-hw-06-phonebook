import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.contactName.toLowerCase().includes(filter.value.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.items}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.contactId} className={css.item}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
