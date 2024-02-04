// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import transactionReducer from './reducers/transactionReducer';
import modalReducer from './reducers/modalReducer';
import globalReducer from './reducers/globalReducer';

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionReducer,
  modal: modalReducer,
  global: globalReducer,
});

// Middleware: Redux Thunk
const middleware = [thunk];

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
