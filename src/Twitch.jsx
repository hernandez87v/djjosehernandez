import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import './Twitch.css';

function Twitch() {
  return (
    <div className="twitch-player">
      <ReactTwitchEmbedVideo theme="dark" channel="djjosehernandez_" />
    </div>
  );
}

export default Twitch;
