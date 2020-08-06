import React from 'react';
import ReactPlayer from 'react-player/mixcloud';
import './Mixcloud.css';

// ,Loads Mixcloud Player
function Mixcloud() {
  return (
    <div className="mixcloud-player">
      <ReactPlayer
        height="160px"
        width="100%"
        url="https://www.mixcloud.com/vancouvertrancefamily/vtf-radio-66-jose-hernandez/"
      />
    </div>
  );
}

export default Mixcloud;
