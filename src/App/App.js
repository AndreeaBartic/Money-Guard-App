import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerLoader } from '../components/Spiner/Spiner';
import { refreshUser } from '../Redux/authReducers/operations';
import { PrivateRoute, RestrictedRoute } from '../components/Router';

import { useAuth } from '../components/hooks';
import { useMediaQuery } from 'react-responsive';

const Home = lazy(() => import('../components/pages/Home'));
const Login = lazy(() => import('../components/pages/LoginPage'));
const Register = lazy(() => import('../components/pages/RegistrationPage'));
const StatiscticsPage = lazy(() => import('../components/pages/StatisticsPage/StatisticsPage'));

const CurrencyPage = lazy(() =>
  import('../components/pages/CurrencyMob/CurrencyMobile')
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
            path="Money-Guard-App/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />
          <Route
            path="Money-Guard-App/register"
            element={
              <RestrictedRoute redirectTo="/home" component={<Register />} />
            }
          />

          <Route
            path="Money-Guard-App/"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />

          <Route
            path="Money-Guard-App/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="Money-Guard-App/statistics"
            element={
              <PrivateRoute>
                <StatiscticsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="Money-Guard-App/currency"
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
        </Routes>
      </Suspense>
    </>
  );
};