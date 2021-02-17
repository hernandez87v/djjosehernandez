import axios from 'axios';
const URL =
  'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=';
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
