import React from 'react';
import './Footer.css';
import ReactGA from 'react-ga';

function Footer() {
  return (
    <>
      {/* Socials */}
      <div className="footer__socials">
        <ReactGA.OutboundLink
          eventLabel="Instagram_toSocial"
          to="https://www.instagram.com/djjosehernandez/"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-instagram"
          aria-label="Instagram"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Twitch_toSocial"
          to="https://www.twitch.tv/djjosehernandez_"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-twitch"
          aria-label="Twitch"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Soundcloud_toSocial"
          to="https://soundcloud.com/djjosehernandez"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-soundcloud"
          aria-label="Soundcloud"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Mixcloud_toSocial"
          to="https://www.mixcloud.com/DjJoseHernandez/"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-mixcloud"
          aria-label="Mixcloud"
        >
          {' '}
        </ReactGA.OutboundLink>
      </div>
      <footer id="footer">
        <div className="footer-copyright text-center py-3">
          © {(new Date().getFullYear())} DJ Jose Hernandez
        </div>
      </footer>
    </>
  );
}

export default Footer;
