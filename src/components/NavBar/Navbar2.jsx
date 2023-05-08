import React from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';

export default function Soundcloud() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo" target="_blank">
        <div id='jh-logo'>
          <a href to="/">
            {/* <img
            alt="/"
            src="/joseh-white-logo.png"
            width="384"
            height="71"
            className="align-top"
          /> */}
          </a>
        </div>
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
