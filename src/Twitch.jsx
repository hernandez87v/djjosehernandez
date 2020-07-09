import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import './Twitch.css';

function Twitch() {
  return (
    <div class="twitch-player">
      <ReactTwitchEmbedVideo channel="djjosehernandez_" />
    </div>
  );
}

export default Twitch;
