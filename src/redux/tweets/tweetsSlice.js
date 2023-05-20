import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, toggleIsFollowing } from "../tweets/tweetsOperations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
// const onLoadMore = (state) => {
//   state.page += 1;
// };

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
  },

  extraReducers: {
    [fetchTweets.pending]: handlePending,
    [fetchTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTweets.rejected]: handleRejected,

    [toggleIsFollowing.pending]: handlePending,
    [toggleIsFollowing.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const index = state.items.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      state.items.push(action.payload);
    },
    [toggleIsFollowing.rejected]: handleRejected,
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
