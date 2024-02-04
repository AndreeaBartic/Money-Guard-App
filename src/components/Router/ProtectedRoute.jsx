import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const location = useLocation();

  return isAuth ? children : <Navigate state={location} to={redirectTo} />;
};

export default ProtectedRoute;
