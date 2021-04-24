import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperation } from '../../redux/contacts';
import Contacts from '../Contacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

export default function App() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperation.fetchContacts()), [dispatch]);

  return (
    <section className="section">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length > 0 && <Filter />}
      {contacts?.length > 0 && <Contacts />}
    </section>
  );
}
