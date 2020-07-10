import React, { Component } from 'react';
import { ReactNavbar } from 'react-responsive-animate-navbar';

class Navbar extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://svgshare.com/i/MoZ.svg"
        menu={[
          { name: 'TWITCH', to: 'https://www.twitch.tv/djjosehernandez_' },
          { name: 'SOUNDCLOUD', to: 'https://soundcloud.com/djjosehernandez' },
          { name: 'MIXCLOUD', to: 'https://www.mixcloud.com/DjJoseHernandez/' },
          { name: 'CONTACT', to: 'mailto:djjosehernandez@hotmail.com' },
        ]}
        social={[
          {
            name: 'Instagram',
            url: 'https://www.instagram.com/djjosehernandez/',
            icon: ['fab', 'instagram'],
          },
        ]}
      />
    );
  }
}

export default Navbar;
