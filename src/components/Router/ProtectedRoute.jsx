// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
//   const isAuth = useSelector(state => state.auth.isAuth);
//   console.log('isAuth:', isAuth);

//   return isAuth ? children : <Navigate to={redirectTo} />;
// };

// export default ProtectedRoute;
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { token, isLoggedIn, isRefreshing } = useAuth();
  const isRestricted = !isLoggedIn && !isRefreshing && !token;

  return isRestricted ? <Navigate to={'/login'} /> : children;
};
