import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function Gallery() {
  const [post, setPosts] = useState([]);
  // api with data
  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp,caption&access_token=${process.env.REACT_APP_IG_TOKEN}`
      )
      .then((response) => setPosts(response.data.data))
      .catch(function (error) {
        console.log('API Error: ', error.message);
      });
  }, []);
  // console.log('this is posts:', post);

  return (
    <div className="all-cards">
      {post.map((posts) => (
        <div className="card-content" key={posts.id}>
          <div className="post-container">
            {posts.media_type === 'IMAGE' ||
            posts.media_type === 'CAROUSEL_ALBUM' ? (
              <img className="single-post" src={posts.media_url} />
            ) : (
              <video
                controls
                autoPlay
                loop
                muted
                className="video-post"
                width="127.75"
                height="127.75"
              >
                <source src={posts.media_url} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="post-info">
            <span className="user-name">{posts.username}</span>
            <span className="post-timestamp">{posts.timestamp}</span>
          </div>
          {/* <div className="caption-container">
            <span className="user-caption">{posts.caption}</span>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
