import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.gif';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__linkList">
        <li className="header__link logo">
          <Link to="/" className="header__logoLink">
            <img className="header__logo" src={logo} alt="" />
            <span
              className="header__companyName"
            >
              ADVOKATENE I BØRSGÅRDEN&nbsp;
              <span className="header__companyType">DA</span>
            </span>
          </Link>
        </li>
        <li className="header__link">
          <Link to="/fri-rettshjelp">
            Fri rettshjelp
          </Link>
        </li>
        <li className="header__link">
          <Link to="/priser">
            Priser
          </Link>
        </li>
        <li className="header__link">
          <Link to="/kontakt">
            Kontakt oss
          </Link>
        </li>
        <li className="header__link">
          <Link to="/personvern">
            Personvern
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
