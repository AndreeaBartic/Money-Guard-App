import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomeTab from '../HomeTab/HomeTab';

import './DashboardPage.scss';

const DashboardPage = () => {

  return (
    <div className="main-content">
      <Routes>
        <Route path="/dashboard/home" element={<HomeTab />} />
        <Route
          path="/dashboard/*"
          element={<Navigate to="/dashboard/home" />}
        />
      </Routes>
    </div>
  );
};

export default DashboardPage;
