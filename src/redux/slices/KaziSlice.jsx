// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  singleKaziData: [],
  topKaziData: [],
  suggestedKaziData: [],
  ratedKaziData: [],
  kaziComponentNow: "componentKazi",
};


export const KaziSlice = createSlice({
  name: "kazi",
  initialState,
  reducers: {
    getSingleKaziData: (state, { payload }) => {
      state.singleKaziData = payload;
    },
    geTopKaziData: (state, { payload }) => {
      state.topKaziData = payload;
    },
    getSuggestedKaziData: (state, { payload }) => {
      state.suggestedKaziData = payload;
    },
    getKaziRatedData: (state, { payload }) => {
      state.ratedKaziData = payload;
    },
    getKaziComponentNowData: (state, { payload }) => {
      state.kaziComponentNow = payload;
    },
  },
});

export const {
  getSingleKaziData,
  geTopKaziData,
  getKaziRatedData,
  getSuggestedKaziData,
  getKaziComponentNowData,
} = KaziSlice.actions;

export default KaziSlice.reducer;
