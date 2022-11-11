import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userPostData: [],
};

export const PostSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    getUserPostData: (state, { payload }) => {
      state.userPostData = payload;
    },
    // getSingleProductData: (state, { payload }) => {
    //   state.singleProductData = payload;
    // },

    // getSuggestProductData: (state, { payload }) => {
    //   state.productSuggestData = payload;
    // },
    // getBestRatedProductData: (state, { payload }) => {
    //   state.bestRatedCourseData = payload;
    // },
  },
});

export const { getUserPostData } = PostSlices.actions;
export default PostSlices.reducer;
