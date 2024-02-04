// Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/dashboard/home"
        className="nav-link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard/statistics"
        className="nav-link"
        activeClassName="active"
      >
        Statistics
      </NavLink>
      <NavLink
        to="/dashboard/currency"
        className="nav-link"
        activeClassName="active"
      >
        Currency
      </NavLink>
    </nav>
  );
};

export default Navigation;
