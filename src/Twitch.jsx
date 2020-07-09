import React from 'react';

function Twitch() {
  // <!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
  new Twitch.Embed('twitch-embed', {
    width: 854,
    height: 480,
    channel: 'monstercat',
    // only needed if your site is also embedded on embed.example.com and othersite.example.com
    parent: ['embed.example.com', 'othersite.example.com'],
  });

  return (
    <>
      <div id="twitch-embed"></div>
      <a src="https://embed.twitch.tv/embed/v1.js"></a>
    </>
  );
}

export default Twitch;
