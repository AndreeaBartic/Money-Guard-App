import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useMediaQuery } from 'react-responsive';
// import { useAuth } from '../components/hooks';
// import { SpinnerLoader } from '../components/Spinner/Spinner';
// import { refreshUser } from '../Redux/authReducers/operations';
import { ProtectedRoute } from '../components/Router/ProtectedRoute';
import { PublicRoute } from '../components/Router/PublicRoute';
// import { useAuth } from '../components/hooks';
// import StatisticsTab from '../components/pages/StatisticsTab/StatisticsTab';
// import { DesignContainer } from '../components/DesignContainer/DesignContainer';

// import { Sidebar } from 'components/Sidebar/Sidebar';

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
  // const dispatch = useDispatch();
  // const { isLoggedIn, token } = useAuth();
  // // const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  // useEffect(() => {
  //   if (!isLoggedIn && token) dispatch(refreshUser());
  // }, [dispatch, isLoggedIn, token]);

  return (
    <BrowserRouter basename="/Money-Guard-App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/home"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
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
          {/* <Route
              path="/statistics"
              element={
                <ProtectedRoute>
                  <StatiscticsPage />
                </ProtectedRoute>
              }
            /> */}

          {/* <Route
              path="/currency"
              element={
                isMobile ? (
                  <ProtectedRoute>
                    <CurrencyPage />
                  </ProtectedRoute>
                ) : (
                  <Navigate to={'/home'} />
                )
              }
            /> */}
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
