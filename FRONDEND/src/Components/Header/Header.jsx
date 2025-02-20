import './Header.css';
import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import logo from './logo.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)} // Corrected here
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "Open" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/View-Properties">View Properties</NavLink>
          </li>
          <li>
            <NavLink to="/Add-Property">Add Property</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;