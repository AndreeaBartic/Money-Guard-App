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

// import { modalReducer } from './modal/modalSlice';

import { PersistedCurrencyReducer } from './currencyReducer/currencySlice';
import { authReducer } from './authReducers/slice'; // Updated import
import balanceReducer from './balance/balanceSlice';
import { PersistedTransactionReducer } from './transactions/transactionsSlice';

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
    auth: persistReducer(authPersistConfig, authReducer),
    // transactions: financeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistStor = persistStore(store);
