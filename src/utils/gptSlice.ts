import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state, action) => {
      const { gptMovieResults, tmdbSearchResults } = action.payload;
      state.movieResults = tmdbSearchResults;
      state.movieNames = gptMovieResults;
    },
  },
});

export const { toggleGPTSearchView, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
