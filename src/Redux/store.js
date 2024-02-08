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
import { PersistedTransactionReducer } from './transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    currency: PersistedCurrencyReducer,
    transactions: PersistedTransactionReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
