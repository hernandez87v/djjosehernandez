import React from 'react';
import ReactPlayer from 'react-player/soundcloud';

// ,Loads Soundcloud Player
function Soundcloud() {
  return (
    <div className="twitch-player">
      <ReactTwitchEmbedVideo theme="dark" channel="djjosehernandez_" />
      <ReactPlayer
        height="175px"
        url="https://soundcloud.com/djjosehernandez/making-progress-036"
      />
    </div>
  );
}

export default Soundcloud;
