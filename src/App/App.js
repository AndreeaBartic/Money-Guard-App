// AppRouter.js
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const DashboardPage = lazy(() =>
  import('../Dashboard/DashboardPage/DashboardPage')
);
const HomePage = lazy(() => import('../Dashboard/HomeTab/HomeTab'));
const RegistrationPage = lazy(() =>
  import('../Auth/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../Auth/LoginPage/LoginPage.jsx'));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/Money-Guard-App" element={<Navigate to="/home" />} />
         
          <Route path="/Money-Guard-App/home" element={<HomePage />} />
          <Route path="/Money-Guard-App/register" element={<RegistrationPage />} />
          <Route path="/Money-Guard-App/login" element={<LoginPage />} />
          <Route path="/Money-Guard-App/dashboard" element={<DashboardPage />} />
          {/* Alte rute */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRouter;
