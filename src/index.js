import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';
import GlobalStyles from './styles/GlobalStyles';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import 'index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ReduxProvider store={store}>
      <PersistGate
        loading={<Loader type="bars" color="#0000ff" />}
        persistor={persistor}
      >
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
