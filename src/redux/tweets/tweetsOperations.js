import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchTweets, updateTweet } from 'services/fetchTweets';

export const fetchTweetsAsync = createAsyncThunk(
  'tweets/fetchTweets',
  async (_, thunkAPI) => {
    try {
      const tweets = await fetchTweets();
      return tweets;
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
