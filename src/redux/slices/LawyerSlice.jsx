import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  singleLawyerData: [],
  lawyerCategory: [],
  topLawyerData: [],
  suggestedLawyerData: [],
  ratedLawyerData: [],
  lawyerComponentNow: "componentLawyer",
};

export const LawyerSlice = createSlice({
  name: "LawyerSlcie",
  initialState,
  reducers: {
    getSingleLawyerData: (state, { payload }) => {
      state.singleLawyerData = payload;
    },
    getLawyerCategory: (state, { payload }) => {
      state.lawyerCategory = payload;
    },
    geTopLawyerData: (state, { payload }) => {
      state.topLawyerData = payload;
    },
    getSuggestedLawyerData: (state, { payload }) => {
      state.suggestedLawyerData = payload;
    },
    getLawyerRatedData: (state, { payload }) => {
      state.ratedLawyerData = payload;
    },
    getLawyerComponentNowData: (state, { payload }) => {
      state.lawyerComponentNow = payload;
    },
  },
});

export const {
  getSingleLawyerData,
  getLawyerCategory,
  geTopLawyerData,
  getSuggestedLawyerData,
  getLawyerRatedData,
  getLawyerComponentNowData,
} = LawyerSlice.actions;

export default LawyerSlice.reducer;
