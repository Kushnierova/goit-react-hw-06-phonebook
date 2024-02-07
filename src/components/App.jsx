import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export function App() {
  return (
    <div className={css.container}>
      <div className={css.phonebook}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <h2 className={css.titleContacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
