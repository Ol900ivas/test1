import axios from 'axios';

axios.defaults.baseURL = 'https://64526ae6bce0b0a0f7466290.mockapi.io/contacts';

export const fetchTweets = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};

export const updateTweet = async (id, newData) => {
  const response = await axios.put(`/users/${id}`, newData);

  return response.data;
};
