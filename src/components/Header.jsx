import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../logo.gif';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__linkList">
        <li className="header__link logo">
          <NavLink
            exact
            activeClassName="isActive"
            className="header__logoLink"
            to="/"
          >
            <img className="header__logo" src={logo} alt="" />
            <span
              className="header__companyName"
            >
              ADVOKATENE I BØRSGÅRDEN&nbsp;
              <span className="header__companyType">DA</span>
            </span>
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink
            exact
            activeClassName="isActive"
            to="/fri-rettshjelp"
          >
            Fri rettshjelp
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink
            exact
            activeClassName="isActive"
            to="/priser"
          >
            Priser
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink
            exact
            activeClassName="isActive"
            to="/kontakt"
          >
            Kontakt oss
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink
            exact
            activeClassName="isActive"
            to="/personvern"
          >
            Personvern
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
