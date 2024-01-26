import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().phonebook;

    try {
      if (!token) return rejectWithValue('No token');

      setToken(token);
      const { data } = await axios('/users/current');
      return { data, token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteTask',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
