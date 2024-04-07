import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://wallet.b.goit.study';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/transactions');
      const data = response.data;
      localStorage.setItem('transactions', JSON.stringify(data));

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteItem = createAsyncThunk(
  'transactions/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/transactions/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (data, { rejectWithValue }) => {
    try {
      if (data.type === 'income') {
        const { categoryId, ...incomeData } = data;
        const response = await axios.post('/api/transactions', incomeData);
        return response.data;
      } else {
        const response = await axios.post('/api/transactions', data);
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error('Error posting transaction:', error.response.data);
      return rejectWithValue(error.message);
    }
  }
);
export const editItem = createAsyncThunk(
  'transactions/editItem',
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/transactions/${id}`, values);

      return response.data;
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getStatistics = createAsyncThunk(
  'statistics/getStatistics',
  async ({ month = null, year = null }, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/transactions-summary', {
        params: { month, year },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCategories = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/transaction-categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'statistics/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/transactions-categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
