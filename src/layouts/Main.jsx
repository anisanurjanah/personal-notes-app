import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AddPage from '../pages/AddPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import DetailPage from '../pages/DetailPage.jsx';

function Main() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-note" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          {/* <Route path="/archived" element={<ArchivePage />} /> */}
        </Routes>
      </main>
  );
}

export default Main;
