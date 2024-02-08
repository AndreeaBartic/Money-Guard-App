import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { modalReducer } from './modal/modalSlice';

import { PersistedCurrencyReducer } from './currencyReducer/currencySlice';
import { authReducer } from './authReducers/slice'; // Updated import
import balanceReducer from './balance/balanceSlice';
import { PersistedTransactionReducer } from './transactions/transactionsSlice';

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    currency: PersistedCurrencyReducer,
    transactions: PersistedTransactionReducer,
    auth: authReducer, // Updated reducer
    modal: modalReducer,
    balance: balanceReducer,
    transactions: PersistedTransactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Ignore certain actions for redux-persist compatibility
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create and export a persistor to enable state persistence
export const persistor = persistStore(store);
