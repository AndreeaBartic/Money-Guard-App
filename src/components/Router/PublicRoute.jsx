import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const shouldRedirect = isAuth && restricted;
  const location = useLocation();

  return shouldRedirect ? <Navigate to={location.state ?? redirectTo} /> : children;
};

export default PublicRoute;
