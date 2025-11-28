import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AddPage from '../pages/AddPage.jsx';
import ArchivePage from '../pages/ArchivePage.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import HomePage from '../pages/HomePage.jsx';

import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';

function Main({ authedUser, loginSuccess, language }) {
  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage loginSuccess={loginSuccess} language={language} />} />
          <Route path="/register" element={<RegisterPage language={language} />} />
          <Route path="*" element={<LoginPage loginSuccess={loginSuccess} language={language} />} />
        </Routes>
      </main>
    );
  }

  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/new-note" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/archives" element={<ArchivePage language={language} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
  );
}

export default Main;
