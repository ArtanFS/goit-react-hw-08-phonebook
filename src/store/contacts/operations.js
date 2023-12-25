import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      toast.success('Contacts successfully loaded');
      return data;
    } catch (e) {
      toast.error('Oops! Failed to get contacts. Try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', contact);
      toast.success('Contact successfully added');
      return data;
    } catch (e) {
      toast.error('Oops! Failed to add contact. Try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${contactId}`);
      toast.success('Contact successfully deleteded');
      return data;
    } catch (e) {
      toast.error('Oops! Failed to delete contact. Try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
