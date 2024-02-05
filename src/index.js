import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
