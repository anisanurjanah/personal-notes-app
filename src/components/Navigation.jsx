import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { LocaleConsumer } from '../contexts/LocaleContext';
import ToggleTheme from './ToggleTheme.jsx';

function Navigation({ logout, name, language }) {
    return (
        <LocaleConsumer>
            {
                ({ locale, toggleLocale}) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archives'}</Link></li>
                                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                                <li><ToggleTheme /></li>
                                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;