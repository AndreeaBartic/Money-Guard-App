import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DesignContainer } from './DesignContainer/DesignContainer';

const Home = React.lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <div>
      <DesignContainer />
      <Home />
    </div>
    // <Routes>
    //   <Route element={<DesignContainer />}>
    //     <Route path="/home" element={<Home />} />
    //   </Route>
    // </Routes>
  );
};
