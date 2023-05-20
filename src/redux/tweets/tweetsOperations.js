import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://64526ae6bce0b0a0f7466290.mockapi.io/contacts';

export const fetchTweetsAsync = createAsyncThunk(
  'tweets/fetchTweets',
  async (_, thunkAPI) => {
    // const currentState = thunkAPI.getState();
    // const currentPage = currentState.tweets.currentPage;
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateTweet = async (id, newData) => {
  const response = await axios.put(`/users/${id}`, newData);

  return response.data;
};

export const updateTweetAsync = createAsyncThunk(
  'tweets/updateTweet',
  async (data, thunkAPI) => {
    try {
      const tweet = await updateTweet(data.id, data.newData);

      return tweet;
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// ======================================
// frTai
export const fetchUsers = async (page, limit, selected) => {
  try {
    if (page && limit) {
      return await axios
        .get(`/?page=${page}&limit=${limit}&isFollowing=${selected}`)
        .then(({ data }) => {
          return data;
        });
    }
    return await axios.get(`/?isFollowing=${selected}`).then(({ data }) => {
      return data;
    });
  } catch (error) {
    alert(error);
  }
};
export const updateUser = async (id, userData) => {
  try {
    await axios.put(`/${id}`, { ...userData }).then(({ data }) => {
      return data;
    });
  } catch (error) {
    alert(error);
  }
};

// Toggle button
export const toggleIsFollowing = createAsyncThunk(
  'item/toggleIsFollowing',
  async (item, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${item.id}`, {
        IsFollowing: !item.IsFollowing,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
