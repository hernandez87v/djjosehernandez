import React, { Component } from 'react';
import { ReactNavbar } from 'react-responsive-animate-navbar';

class Navbar extends Component {
  render() {
    return (
      <>
        <ReactNavbar
          color="rgb(255, 255, 255)"
          logo="https://github.com/hernandez87v/djjosehernandez/blob/master/public/jh-white-logo.jpg?raw=true"
          menu={[
            { name: 'TWITCH', to: '/' },
            {
              name: 'SOUNDCLOUD',
              to: '/',
            },
            {
              name: 'MIXCLOUD',
              to: '/',
            },
            // { name: 'CONTACT', to: 'mailto:djjosehernandez@hotmail.com' },
          ]}
          social={[
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/djjosehernandez/',
              icon: ['fab', 'instagram'],
            },
            {
              name: 'Twitch',
              url: 'https://www.twitch.tv/djjosehernandez_',
              icon: ['fab', 'twitch'],
            },
            {
              name: 'Soundcloud',
              url: 'https://soundcloud.com/djjosehernandez',
              icon: ['fab', 'soundcloud'],
            },
            {
              name: 'Mixcloud',
              url: 'https://www.mixcloud.com/DjJoseHernandez/',
              icon: ['fab', 'mixcloud'],
            },
            // {
            //   name: 'Email',
            //   url: 'mailto:djjosehernandez@hotmail.com',
            //   icon: ['fab', 'envelope-o'],
            // },
          ]}
        />
      </>
    );
  }
}

export default Navbar;
