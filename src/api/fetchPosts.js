import axios from 'axios';
const URL =
  'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYR1RGWm9sYzc1ZAl9aSi1nTmljQVg0THlUbU84Tl9qb2dEUXotaDBycThPajhqX1RXVW9iU1g4cDVRcmFtekIyMHNTSDlvek5NM2xuYzQwR0FVTm9EekxnWjRxZAENORjR4al9Ody1RTjB3QlBsZAAZDZD';
const API_KEY = '';

export const fetchPosts = async () => {
  const { data } = await axios.get(URL, {
    params: {
      // q: query,
      fields: ['id', 'media_type', 'media_url', 'username', 'timestamp'],
      access_token: API_KEY,
    },
  });
  return data;
};
