import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './App/App';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyles />
    <Provider store={store}>
      <AppRouter />
    </Provider>
    ,
  </BrowserRouter>
);
