import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../components/hooks';
// import { SpinnerLoader } from '../components/Spinner/Spinner';
import { refreshUser } from '../Redux/authReducers/operations';
import ProtectedRoute from '../components/Router/ProtectedRoute';
import PublicRoute from '../components/Router/PublicRoute';
// import { useAuth } from '../components/hooks';
import StatisticsTab from '../components/pages/StatisticsTab/StatisticsTab';

const Home = lazy(() => import('../components/pages/Home'));
const RegistrationPage = lazy(() =>
  import('../components/pages/RegistrationPage')
);
const LoginPage = lazy(() => import('../components/pages/LoginPage'));
const CurrencyPage = lazy(() =>
  import('../components/pages/CurrencyMob/CurrencyMobile')
);

function AppRouter() {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/Money-Guard-App/login"
            element={
              <PublicRoute redirectTo="/Money-Guard-App/home">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/Money-Guard-App/register"
            element={
              <PublicRoute redirectTo="/Money-Guard-App/home">
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
            path="/Money-Guard-App/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />


          {/* Public or Protected Route based on Mobile */}
          <Route
            path="currency"
            element={
              isMobile ? (
                <PublicRoute redirectTo="/Money-Guard-App/home">
                  <CurrencyPage />
                </PublicRoute>
              ) : (
                <Navigate to={'/Money-Guard-App'} />
              )
            }
          />

          {isLoggedIn ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
           <Route
          path="/currency"
          element={
            isMobile ? <CurrencyPage /> : <Navigate to={'/'} />
          }
        />
          { <Route
              path="/statistics"
              element={
                  <StatisticsTab/>
              }
            /> }


          {/* Redirect to Home for any unknown routes */}
          <Route path="*" element={<Navigate to="/Money-Guard-App/home" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
