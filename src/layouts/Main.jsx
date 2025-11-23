import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';

function Main() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/archieve" element={<ArchievePage />} /> */}
        </Routes>
      </main>
  );
}

export default Main;
