import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const openExchangeRes = axios.create({
  baseURL: `https://openexchangerates.org/api`,
});

const currencyID = {
  usd: 'USD',
  eur: 'EUR',
};

export const fetchCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async (_, thunkAPI) => {
    try {
      const { data } = await openExchangeRes.get(
        '/latest.json?app_id=9b79216d8d764472b67cc1574e5e9154'
      );
      if (data && data.rates) {
        const rates = data.rates;

        const currencyRates = [
          {
            currencyName: currencyID.usd,
            rateBuy: rates.RON,
            rateSell: rates.RON,
          },
          {
            currencyName: currencyID.eur,
            rateBuy: rates.RON / rates.EUR,
            rateSell: rates.RON / rates.EUR,
          },
        ];

        const fetchedCurrency = currencyRates.reduce((result, currency) => {
          result[currency.currencyName] = {
            buy: currency.rateBuy,
            sale: currency.rateSell,
          };
          return result;
        }, {});

        const fetchingTime = new Date().toString();
        return { data: fetchedCurrency, fetchingTime };
      } else {
        throw new Error('Date invalide.');
      }
    } catch (error) {
      console.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
