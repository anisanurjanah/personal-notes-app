import React from 'react';
import Navigation from '../components/Navigation.jsx';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header>
        <h1>
          <Link Link to="/">My Notes</Link>
        </h1>
        <Navigation />
      </header>
  );
}

export default Header;
