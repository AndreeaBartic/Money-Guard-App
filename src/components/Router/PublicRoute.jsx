// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom';

// export const PublicRoute = ({ children, restricted = false, redirectTo }) => {
//   const isAuth = useSelector(state => state.auth.isAuth);
//   const shouldRedirect = isAuth && restricted;
//   const location = useLocation();

//   return shouldRedirect ? (
//     <Navigate to={location.state ?? redirectTo} />
//   ) : (
//     children
//   );
// };

// export default PublicRoute;
// import { useAuth } from '../hooks/useAuth';
// import { Navigate } from 'react-router-dom';

// export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
