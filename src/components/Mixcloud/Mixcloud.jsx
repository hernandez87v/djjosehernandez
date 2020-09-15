import React from 'react';
import ReactPlayer from 'react-player/mixcloud';
import './Mixcloud.css';

function Mixcloud() {
  return (
    <div className="mixcloud-player">
      <ReactPlayer
        height="200px"
        width="100%"
        url="https://www.mixcloud.com/vancouvertrancefamily/vtf-radio-66-jose-hernandez/"
        config={{
          options: {
            autoplay: true,
          },
        }}
      />
    </div>
  );
}

export default Mixcloud;
