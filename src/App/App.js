// AppRouter.js
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() =>
//   import('../components/DesignContainer/DesignContainer')
// );
const RegistrationPage = lazy(() =>
  import('../Auth/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../Auth/LoginPage/LoginPage.jsx'));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/Money-Guard-App" element={<HomePage />} /> */}
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
