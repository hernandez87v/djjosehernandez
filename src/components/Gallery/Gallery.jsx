import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Gallery.css';

function Gallery() {
  const [data, setPosts] = useState([]);
  // api with data
  useEffect(() => {
    axios
      .get(
        'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token='
      )
      .then((response) => setPosts(response.data));
  }, []);
  console.log('this is posts:', data.media_url);

  return (
    <div className="gallery">
      {/* {data.map((post) => (
        <div className="card-content" key={data}>
          <ul>
            <li>id: {post.id}</li>
          </ul>
          <img className="feed" src={data(1).media_url} />
        </div>
      ))} */}
    </div>
  );
}

export default Gallery;
