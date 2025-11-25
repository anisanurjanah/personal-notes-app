import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AddPage from '../pages/AddPage.jsx';
import ArchivePage from '../pages/ArchivePage.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import HomePage from '../pages/HomePage.jsx';

import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';

function Main({ authedUser, loginSuccess }) {
  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={loginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-note" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
  );
}

export default Main;
