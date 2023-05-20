import { createSlice } from '@reduxjs/toolkit';
import { fetchTweetsAsync, updateTweetAsync } from '../tweets/tweetsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFullfiled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    isFollowing: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTweetsAsync.pending, handlePending)
      .addCase(fetchTweetsAsync.fulfilled, handleFullfiled)
      .addCase(fetchTweetsAsync.rejected, handleRejected)
      .addCase(updateTweetAsync.pending, handlePending)
      .addCase(updateTweetAsync.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
        state.isLoading = false;
      })
      .addCase(updateTweetAsync.rejected, handleRejected);
  },
});

export const tweetsReducer = tweetsSlice.reducer;
