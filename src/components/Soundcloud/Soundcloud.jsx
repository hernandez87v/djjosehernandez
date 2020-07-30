import React from 'react';
import ReactPlayer from 'react-player/soundcloud';

// ,Loads Soundcloud Player
function Soundcloud() {
  return (
    <div className="soundcloud-player">
      <ReactPlayer
        height="175px"
        url="https://soundcloud.com/djjosehernandez/making-progress-036"
      />
    </div>
  );
}

export default Soundcloud;
