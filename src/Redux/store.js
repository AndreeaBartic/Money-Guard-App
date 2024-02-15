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
import { PersistedAuthReducer } from '../Redux/authReducers/slice';
import balanceReducer from './balance/balanceSlice';
import { PersistedTransactionReducer } from './transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    auth: PersistedAuthReducer,
    modal: modalReducer,
    currency: PersistedCurrencyReducer,
    balance: balanceReducer,
    transactions: PersistedTransactionReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const peristor = persistStore(store);
