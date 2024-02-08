import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../components/hooks';

// import { SpinnerLoader } from '../components/Spinner/Spinner';
import { refreshUser } from '../Redux/authReducers/operations';
import ProtectedRoute from '../components/Router/ProtectedRoute';
// import PublicRoute from '../components/Router/PublicRoute';
import GlobalStyles from '../styles/GlobalStyles';

// Import your pages with correct paths
const Home = lazy(() => import('../components/pages/Home'));
const Login = lazy(() => import('../Auth/LoginPage/LoginForm'));
const Register = lazy(() =>
  import('../Auth/RegistrationPage/RegistrationForm')
);
// const StatiscticsPage = lazy(() =>
//   import('')
// );
// const CurrencyPage = lazy(() =>
//   import('../pages/CurrencyMobilePage/CurrencyMobile')
// );

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();
  // const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  useEffect(() => {
    if (!isLoggedIn && token) dispatch(refreshUser());
  }, [dispatch, isLoggedIn, token]);

  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute redirectTo="/login" component={<Login />} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {isLoggedIn ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          {/* <Route
              path="/Money-Guard-App/statistics"
              element={
                <PublicRoute>
                  <StatiscticsPage />
                </PublicRoute>
              }
            /> */}

          {/* <Route
              path="/Money-Guard-App/currency"
              element={
                isMobile ? (
                  <PublicRoute>
                    <CurrencyPage />
                  </PublicRoute>
                ) : (
                  <Navigate to={'/Money-Guard-App/home'} />
                )
              }
            /> */}
        </Routes>
      </Suspense>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};
