// redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    indonesia: {},
    programming: {},
    covid19: {},
    entertainment: {},
    sports: {},
    technology: {},
    saved: [],
    searchResult: {},
    detailNews: {},
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveThisNews: (state, action) => {
      state.data.saved.push(action.payload);
    },
    addNewsIndonesia: (state, action) => {
      state.data.indonesia = action.payload;
    },
    addNewsProgramming: (state, action) => {
      state.data.programming = action.payload;
    },
    addNewsCovid19: (state, action) => {
      state.data.covid19 = action.payload;
    },
    addNewsEntertainment: (state, action) => {
      state.data.entertainment = action.payload;
    },
    addNewsSports: (state, action) => {
      state.data.sports = action.payload;
    },
    addNewsTechnology: (state, action) => {
      state.data.technology = action.payload;
    },
    addNewsByKeyword: (state, action) => {
      state.data.searchResult = action.payload;
    },
  },
});

export const {
  saveThisNews,
  addNewsIndonesia,
  addNewsProgramming,
  addNewsCovid19,
  addNewsEntertainment,
  addNewsSports,
  addNewsTechnology,
  addNewsByKeyword
} = newsSlice.actions;

export default newsSlice.reducer;
