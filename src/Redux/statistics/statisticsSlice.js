import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  getCategories,
  getStatistics,
} from '../transactions/transactionsOperations';

const initialState = {
  totalBalance: 0,
  categories: null,
  categoriesSummary: [],
  incomeSummary: null,
  expenseSummary: null,
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getStatistics.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.totalBalance = action.payload.periodTotal;
        state.incomeSummary = action.payload.incomeSummary;
        state.expenseSummary = action.payload.expenseSummary;
        state.categoriesSummary = action.payload.categoriesSummary;
        state.isLoading = false;
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      });
  },
});

const statisticsPersistConfig = {
  key: 'statistics',
  storage,
  whitelist: ['statisticsData'],
};

const statisticsReducer = statisticsSlice.reducer;

export const PersistedStatisticsReducer = persistReducer(
  statisticsPersistConfig,
  statisticsReducer
);
