import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <h3>DJ Jose Hernandez</h3>
        </div>
        <ul className="nav-links">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.twitch.tv/djjosehernandez_"
              target="_blank"
            >
              Twitch
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://soundcloud.com/djjosehernandez"
              target="_blank"
            >
              Soundcloud
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.mixcloud.com/DjJoseHernandez/"
              target="_blank"
            >
              Mixcloud
            </a>
          </li>
          <li>
            <a href="mailto:name@email.com">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
