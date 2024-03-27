import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from '../components/Router/ProtectedRoute';
import { PublicRoute } from '../components/Router/PublicRoute';

const Home = lazy(() => import('../components/pages/Home'));
const RegistrationPage = lazy(() =>
  import('../components/pages/RegistrationPage')
);
const LoginPage = lazy(() => import('../components/pages/LoginPage'));
// const CurrencyPage = lazy(() =>
//   import('../components/pages/CurrencyMob/CurrencyMobile')
// );
// const StatisticsTab = lazy(() =>
//   import('../components/pages/StatisticsTab/StatisticsTab')
// );

function AppRouter() {
  return (
    <BrowserRouter basename="/Money-Guard-App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/home"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/Money-Guard-App" replace={true} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
