import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperation } from '../../redux/contacts';
import { List, ListItem } from './ContactsStyledComponent';

function Contacts() {
  const contacts = useSelector(contactsSelectors.visibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
              type="button"
              onClick={() => dispatch(contactsOperation.deleteContact(id))}
            >
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Contacts;
