import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Gallery.css';

function Gallery() {
  const [post, setPosts] = useState([]);
  // api with data
  useEffect(() => {
    axios
      .get(
        'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYR1RGWm9sYzc1ZAl9aSi1nTmljQVg0THlUbU84Tl9qb2dEUXotaDBycThPajhqX1RXVW9iU1g4cDVRcmFtekIyMHNTSDlvek5NM2xuYzQwR0FVTm9EekxnWjRxZAENORjR4al9Ody1RTjB3QlBsZAAZDZD'
      )
      .then((response) => setPosts(response.data.data));
  }, []);
  // console.log('this is posts:', post);

  return (
    <div className="gallery">
      {post.map((posts) => (
        <div className="card-content" key={posts}>
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
