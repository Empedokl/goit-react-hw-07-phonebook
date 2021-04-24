import { configureStore } from '@reduxjs/toolkit';
import { contacts, filter, isLoading } from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    isLoading,
  },
});
