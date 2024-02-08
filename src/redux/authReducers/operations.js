import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk('auth/register', async credentials => {
  const response = await axios.post('/users/register', credentials);
  setAuthHeader(response.data.token);
  return response.data;
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  const response = await axios.post('/users/login', credentials);
  setAuthHeader(response.data.token);
  return response.data;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  setAuthHeader('');
});

export const refreshUser = createAsyncThunk('auth/refresh', async () => {
  const response = await axios.get('/users/current');
  return response.data;
});
