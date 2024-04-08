import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from '../components/Router/ProtectedRoute';
import { PublicRoute } from '../components/Router/PublicRoute';
import { DesignContainer } from '../components/DesignContainer/DesignContainer';
import { setAuthToken } from '../Redux/authReducers/authOperations';
import loadable from '@loadable/component';
import Loader from 'components/Loader/Loader';

const LoginPage = loadable(() => import('../components/pages/LoginPage'), {
  fallback: <Loader type="bars" color="#0000ff" />,
});
const RegistrationPage = loadable(
  () => import('../components/pages/RegistrationPage'),
  {
    fallback: <Loader type="bars" color="#0000ff" />,
  }
);
const Home = loadable(() => import('../components/pages/Home'), {
  fallback: <Loader type="bars" color="#0000ff" />,
});

const CurrencyMob = loadable(
  () => import('../components/pages/CurrencyMob/CurrencyMobile'),
  { fallback: <Loader type="bars" color="#0000ff" /> }
);
const StatisticsPage = loadable(
  () => import('../components/pages/StatisticsPage'),
  { fallback: <Loader type="bars" color="#0000ff" /> }
);

function App() {
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setAuthToken(authToken);
    }
  }, []);

  return (
    <BrowserRouter basename="/Money-Guard-App">
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/home" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/home" component={<LoginPage />} />}
        />
        <Route
          path="/"
          element={<PublicRoute redirectTo="/home" component={<LoginPage />} />}
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
    </BrowserRouter>
  );
}

export default App;
