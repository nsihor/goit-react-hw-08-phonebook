import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.contacts;

export const getFilter = state => state.phonebook.filter;

export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ) || contacts
);

export const selectIsLoggedIn = state => state.phonebook.isLoggedIn;

export const selectIsLoading = state => state.phonebook.isLoading;

export const selectIsRefreshing = state => state.phonebook.isRefreshing;

export const selectUser = state => state.phonebook.user;

export const getError = state => state.phonebook.error;
