import React from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';

export default function Soundcloud() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <Link to="/">Jose Hernandez</Link>
      </h2>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/Twitch">Twitch</Link>
          </li>
          <li>
            <Link to="/Soundcloud">Soundcloud</Link>
          </li>
          <li>
            <Link to="/Mixcloud">Mixcloud</Link>
          </li>
        </ul>
      </nav>
      <a className="cta" href="mailto:djjosehernandez@hotmail.com">
        <button>Contact</button>
      </a>
    </header>
  );
}
