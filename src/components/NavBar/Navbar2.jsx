import React from 'react';
import './Navbar2.css';
export default function Soundcloud() {
  return (
    <header>
      <h2 className="logo" alt="logo">
        <a href="/">DJ Jose Hernandez</a>
      </h2>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="/Twitch">Twitch</a>
          </li>
          <li>
            <a href="/Soundcloud">Soundcloud</a>
          </li>
          <li>
            <a href="/Mixcloud">Mixcloud</a>
          </li>
        </ul>
      </nav>
      <a className="cta" href="mailto:djjosehernandez@hotmail.com">
        <button>Contact</button>
      </a>
    </header>
  );
}
