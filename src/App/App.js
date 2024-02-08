// AppRouter.js

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = lazy(() => import('../components/pages/Home'));
const RegistrationPage = lazy(() =>
  import('../Auth/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../Auth/LoginPage/LoginPage'));
const CurrencyPage = lazy(() =>
  import('../components/pages/CurrencyMob/CurrencyMobile')
);

function AppRouter() {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/Money-Guard-App" element={<Home />} />
        <Route
          path="/Money-Guard-App/register"
          element={<RegistrationPage />}
        />
        <Route path="/Money-Guard-App/login" element={<LoginPage />} />
        <Route
          path="/Money-Guard-App/currency"
          element={
            isMobile ? <CurrencyPage /> : <Navigate to={'/Money-Guard-App'} />
          }
        />

        {/* Alte rute */}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
