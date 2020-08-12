import React from 'react';
import './Navbar2.css';
// import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function Soundcloud() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <a href="/">DJ Jose Hernandez</a>
      </h2>
      <nav>
        <ul className="nav__links">
          <li>
            <ReactGA.OutboundLink eventLabel="Twitch_toPage" to="/Twitch">
              Twitch
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink
              eventLabel="Soundcloud_toPage"
              to="/Soundcloud"
            >
              Soundcloud
            </ReactGA.OutboundLink>
          </li>
          <li>
            <ReactGA.OutboundLink eventLabel="Mixcloud_toPage" to="/Mixcloud">
              Mixcloud
            </ReactGA.OutboundLink>
          </li>
        </ul>
      </nav>
      <ReactGA.OutboundLink
        className="cta"
        eventLabel="Email_Contact"
        to="mailto:djjosehernandez@hotmail.com"
      >
        <button>Contact</button>
      </ReactGA.OutboundLink>
    </header>
  );
}
