import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async (_, thunkAPI) => {
    try {
      const openExchangeRes = await axios.get(
        'https://openexchangerates.org/api/latest.json',
        {
          params: {
            app_id: '4a01d4d7638b44f48c6b3bb9566a2fad',
          },
        }
      );

      const fetchedCurrency = ['USD', 'EUR'].reduce((result, currency) => {
        result[currency] = {
          buy: openExchangeRes.rates[currency],
          sale: openExchangeRes.rates[currency],
        };
        return result;
      }, {});

      const fetchingTime = new Date().toString();
      return { data: fetchedCurrency, fetchingTime };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
