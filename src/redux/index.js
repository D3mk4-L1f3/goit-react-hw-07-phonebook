import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});