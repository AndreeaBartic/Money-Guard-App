// AppRouter.js

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../components/pages/Home'));
const RegistrationPage = lazy(() =>
  import('../Auth/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../Auth/LoginPage/LoginPage'));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/Money-Guard-App" element={<Home />} />
        <Route
          path="/Money-Guard-App/register"
          element={<RegistrationPage />}
        />
        <Route path="/Money-Guard-App/login" element={<LoginPage />} />

        {/* Alte rute */}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
