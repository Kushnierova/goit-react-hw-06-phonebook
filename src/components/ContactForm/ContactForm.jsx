import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/contactsSlice';
import { getContacts } from "redux/selectors";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)

  const checkName = (name) => {
    if (contacts.find(contact => contact.contactName === name
    )) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const contactName = e.currentTarget.elements.name.value;
    const contactNumber = e.currentTarget.elements.number.value;
    if (checkName(contactName)) {
      dispatch(addContact(contactName, contactNumber));
    }
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={css.input}
        />
      </label>
      <label className={css.label} htmlFor="number">
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          className={css.input}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
