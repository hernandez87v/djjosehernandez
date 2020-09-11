import React from 'react';
import ReactPlayer from 'react-player/soundcloud';
import './Soundcloud.css';

export default function Soundcloud() {
  return (
    <div className="soundcloud-player">
      <ReactPlayer
        height="100%"
        width="100%"
        url="https://soundcloud.com/djjosehernandez/making-progress-036"
        config={{
          options: {
            auto_play: true,
          },
        }}
      />
    </div>
  );
}
