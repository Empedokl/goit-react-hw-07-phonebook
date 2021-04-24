import { createSelector } from '@reduxjs/toolkit';
const getContacts = state => state.contacts;
const getFilter = state => state.filter;

const visibleContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) =>
    allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

const selectors = {
  getContacts,
  getFilter,
  visibleContacts,
};

export default selectors;
