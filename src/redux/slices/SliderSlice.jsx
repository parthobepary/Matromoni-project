import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sliderData: [],
  latestMemberData: [],
  successStoriesData: [],
  topProfileSuggestData: [],
  topProfileBrideData: [],
  topProfileGroomData: [],
  topKaziData: [],
  topLawyerData: [],
  topAgentData: [],
};

export const SliderSlices = createSlice({
  name: "slider",
  initialState,
  reducers: {
    getSliderData: (state, { payload }) => {
      state.sliderData = payload;
    },
    getLatestMemberData: (state, { payload }) => {
      state.latestMemberData = payload;
    },
    getSuccessStoriesData: (state, { payload }) => {
      state.successStoriesData = payload;
    },
    // top profile
    getTopProfileSuggestData: (state, { payload }) => {
      state.topProfileSuggestData = payload;
    },
    getTopProfileBrideData: (state, { payload }) => {
      state.topProfileBrideData = payload;
    },
    getTopProfileGroomData: (state, { payload }) => {
      state.topProfileGroomData = payload;
    },
    // top Hire
    getTopKaziData: (state, { payload }) => {
      state.topKaziData = payload;
    },
    getTopLawyerData: (state, { payload }) => {
      state.topLawyerData = payload;
    },
    getTopAgentData: (state, { payload }) => {
      state.topAgentData = payload;
    },
  },
});

export const {
  getSliderData,
  getLatestMemberData,
  getSuccessStoriesData,
  getTopProfileSuggestData,
  getTopProfileBrideData,
  getTopProfileGroomData,
  getTopAgentData,
  getTopKaziData,
  getTopLawyerData,
} = SliderSlices.actions;
export default SliderSlices.reducer;
