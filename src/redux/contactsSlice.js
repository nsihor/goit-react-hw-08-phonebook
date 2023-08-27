import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  fetchContacts,
  login,
  logout,
  register,
  addContact,
  deleteContact,
  refreshUser,
} from './operations';

const tasksInitialState = {
  contacts: [],
  filter: '',
  error: null,
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = state => {
  state.isLoading = false;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.error;
};

const contactSlice = createSlice({
  name: 'phonebook',
  initialState: tasksInitialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.unshift(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected),
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { setFilter } = contactSlice.actions;
