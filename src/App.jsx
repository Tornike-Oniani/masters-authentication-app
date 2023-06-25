import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import './app.css';

const App = ({ onNavigate }) => {
  const location = useLocation();

  useEffect(() => {
    if (onNavigate) {
      onNavigate(location.pathname);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
