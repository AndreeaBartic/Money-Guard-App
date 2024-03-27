import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { modalReducer } from './Redux/modal/modalSlice';

import { PersistedCurrencyReducer } from './Redux/currencyReducer/currencySlice';
import authReducer from './Redux/authReducers/slice';
import balanceReducer from './Redux/balance/balanceSlice';
import { PersistedTransactionReducer } from './Redux/transactions/transactionsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    transactions: PersistedTransactionReducer,
    currency: PersistedCurrencyReducer,
    balance: balanceReducer,
    modal: modalReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistStor = persistStore(store);