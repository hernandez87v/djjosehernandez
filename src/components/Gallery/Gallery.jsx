import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Gallery.css';

function Gallery() {
  const [post, setPosts] = useState([]);
  // api with data
  useEffect(() => {
    axios
      .get(
        'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token='
      )
      .then((response) => setPosts(response.data.data));
  }, []);
  console.log('this is posts:', post);

  return (
    <div className="gallery">
      {post.map((posts) => (
        <div className="card-content" key={posts.id}>
          <ul>
            <li>id: {posts.id}</li>
          </ul>
          <img className="feed" src={posts.media_url} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
