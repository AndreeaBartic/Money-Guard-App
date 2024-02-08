import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../components/hooks';

import { SpinnerLoader } from '../components/Spinner/Spinner';
import { refreshUser } from '../redux/authReducer/operations';
import { PrivateRoute, RestrictedRoute } from './Routes';
import GlobalStyles from '../styles/GlobalStyles';

// Import your pages with correct paths
const Home = lazy(() => import('../pages/HomePage/Home'));
const Login = lazy(() => import('../Auth/LoginPage/LoginForm'));
const Register = lazy(() =>
  import('../Auth/RegistrationPage/RegistrationForm')
);
const StatiscticsPage = lazy(() =>
  import('../pages/StatisticsPage/Statistics')
);
const CurrencyPage = lazy(() =>
  import('../pages/CurrencyMobilePage/CurrencyMobile')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  useEffect(() => {
    if (!isLoggedIn && token) dispatch(refreshUser());
  }, [dispatch, isLoggedIn, token]);

  return (
    <>
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/home" component={<Register />} />
            }
          />

          <Route
            element={<Home />} // Set a default route for /home
          >
            <Route
              path="/statistics"
              element={
                <PrivateRoute>
                  <StatiscticsPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/currency"
              element={
                isMobile ? (
                  <PrivateRoute>
                    <CurrencyPage />
                  </PrivateRoute>
                ) : (
                  <Navigate to={'/home'} />
                )
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};
