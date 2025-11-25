import React from 'react';
import Navigation from '../components/Navigation.jsx';
import { Link } from 'react-router-dom';

function Header({ authedUser }) {
  return (
      <header>
        <h1>
          <Link Link to="/">MyNotes</Link>
        </h1>
        {authedUser !== null ? <Navigation /> : null}
      </header>
  );
}

export default Header;
