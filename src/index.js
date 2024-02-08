import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/Money-Guard-App">
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
