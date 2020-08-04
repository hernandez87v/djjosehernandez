import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      {/* Socials */}
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/djjosehernandez/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-instagram"
        >
          {' '}
        </a>
        <a
          href="https://www.twitch.tv/djjosehernandez_"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-twitch"
        >
          {' '}
        </a>
        <a
          href="https://soundcloud.com/djjosehernandez"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-soundcloud"
        >
          {' '}
        </a>
        <a
          href="https://www.mixcloud.com/DjJoseHernandez/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-mixcloud"
        >
          {' '}
        </a>
      </div>
      <footer id="footer">
        {/* < !--Copyright -- > */}
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: DJ Jose Hernandez
        </div>
        {/* <!--Copyright --> */}
      </footer>
      {/* // < !--Footer --> */}
    </>
  );
}

export default Footer;
