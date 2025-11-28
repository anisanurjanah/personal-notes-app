import React from 'react';
import Navigation from '../components/Navigation.jsx';
import { Link } from 'react-router-dom';

function Header({ authedUser, logout, name, language }) {
  return (
      <header>
        <h1><Link Link to="/">{language === 'id' ? 'Catatan Saya' : 'MyNotes'}</Link></h1>
        {authedUser !== null ? <Navigation logout={logout} name={name} /> : null}
      </header>
  );
}

export default Header;
