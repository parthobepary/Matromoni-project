// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  blogsData: [],
  blogError: null,
};

export const BlogSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    getAllBlogData: (state, { payload }) => {
      state.blogsData = payload;
    },
    getBlogError: (state, { payload }) => {
      state.blogError = payload;
    },
  },
});

export const { getAllBlogData, getBlogError } = BlogSlices.actions;

export default BlogSlices.reducer;
