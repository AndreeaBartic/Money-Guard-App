// operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL =
  'https://wallet.b.goit.study/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/sign-up',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/sign-up', credentials);
      setAuthHeader(response.data.token);
      if (response.data && response.status === 201) {
        const name = credentials.name;
        toast.success(`Welcome to Money Guard, ${name}!`, {
          autoClose: 1200,
        });
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error('Email is already in use!', {
            position: 'top-right',
            autoClose: 1200,
          });
          return rejectWithValue(error.message);
        }
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/sign-in',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/sign-in', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/sign-out',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/sign-out');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
