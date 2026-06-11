import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/mixcloud';
import './Mixcloud.css';

const MIXCLOUD_USERNAME = 'DjJoseHernandez';

function Mixcloud() {
  const [url, setUrl] = useState(null);

useEffect(() => {
  const cached = sessionStorage.getItem('latestMix');
  if (cached) {
    setUrl(cached);
    return;
  }
  fetch(`https://api.mixcloud.com/${MIXCLOUD_USERNAME}/cloudcasts/?limit=1`)
    .then((res) => res.json())
    .then((data) => {
      if (data.data && data.data.length > 0) {
        const latest = data.data[0].url;
        setUrl(latest);
        sessionStorage.setItem('latestMix', latest);
      }
    })
    .catch((err) =>
      console.error('Failed to fetch latest Mixcloud upload:', err)
    );
}, []);

  if (!url) {
    return <div className="mixcloud-player">Loading latest mix…</div>;
  }

  return (
    <div className="mixcloud-player">
      <ReactPlayer
        height="200px"
        width="100%"
        url={url}
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