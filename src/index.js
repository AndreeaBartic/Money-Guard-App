import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './App/App';
import GlobalStyles from './styles/GlobalStyles';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ReduxProvider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <GlobalStyles />
//     <Provider store={store}>
//       <AppRouter />
//     </Provider>
// );
