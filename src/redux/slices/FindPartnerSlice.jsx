import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  topPartnerData: [],
  suggestedPartnerData: [],
  nearestPartnerData: [],
};

export const FindPartnerSlice = createSlice({
  name: "FindPartnerSlcie",
  initialState,
  reducers: {
    geTopPartnerData: (state, { payload }) => {
      state.topPartnerData = payload;
    },
    getSuggestedPartnerData: (state, { payload }) => {
      state.suggestedPartnerData = payload;
    },
    getPartnerNewesttData: (state, { payload }) => {
      state.nearestPartnerData = payload;
    },
  },
});

export const {
  geTopPartnerData,
  getSuggestedPartnerData,
  getPartnerNearestData,
} = FindPartnerSlice.actions;

export default FindPartnerSlice.reducer;
