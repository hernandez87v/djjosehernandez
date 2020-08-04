import React from 'react';
import './Navbar2.css';
export default function Soundcloud() {
  return (
    <header>
      <h2 class="logo" alt="logo">
        DJ Jose Hernandez
      </h2>
      <nav>
        <ul class="nav__links">
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
      <a class="cta" href="mailto:djjosehernandez@hotmail.com">
        <button>Contact</button>
      </a>
    </header>
  );
}
