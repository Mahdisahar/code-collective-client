import logo from "../../assets/logos/commerce-site-logo_22.png";
import profile from "../../assets/icons/happy.png";
import bag from "../../assets/icons/shopping-bag.png";
import search from "../../assets/icons/search-interface-symbol.png";
import country from "../../assets/icons/canada.png";

import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="lush-logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <img className="header__search" src={search} alt="search-icon" />
          <NavLink to="/profile">
            <img className="header__profile" src={profile} alt="profile-icon" />
          </NavLink>
          <img className="header__country" src={country} alt="canada-flag" />
          <NavLink to="/checkout">
            <img className="header__bag" src={bag} alt="bag-icon" />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
