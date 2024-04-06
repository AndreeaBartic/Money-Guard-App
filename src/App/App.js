import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from '../components/Router/ProtectedRoute';
import { PublicRoute } from '../components/Router/PublicRoute';
import { DesignContainer } from '../components/DesignContainer/DesignContainer';
import { setAuthToken } from '../Redux/authReducers/authOperations';

const Home = lazy(() => import('../components/pages/Home'));
const RegistrationPage = lazy(() =>
  import('../components/pages/RegistrationPage')
);
const LoginPage = lazy(() => import('../components/pages/LoginPage'));

const CurrencyMob = lazy(() =>
  import('../components/pages/CurrencyMob/CurrencyMobile')
);
const StatisticsPage = lazy(() => import('../components/pages/StatisticsPage'));

function App() {
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setAuthToken(authToken);
    }
  }, []);

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
          <Route element={<DesignContainer />}>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <ProtectedRoute>
                  <StatisticsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/currency"
              element={
                <ProtectedRoute>
                  <CurrencyMob />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path="*"
            element={<Navigate to="/Money-Guard-App" replace={true} />}
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
