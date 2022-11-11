import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  topCoursesData: [],
  courseSuggestData: [],
  topRatedCourseData: [],
  singleCoursePublicData: [],
  //   categoriesList: [],
  //   categoryWiseProduct: [],
  //   singleProductData: [],
  //   cartData: [],
};

export const CourseSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    getTopCourseData: (state, { payload }) => {
      state.topCoursesData = payload;
    },
    getSuggestCourseData: (state, { payload }) => {
      state.courseSuggestData = payload;
    },
    getTopRatedCourseData: (state, { payload }) => {
      state.topRatedCourseData = payload;
    },
    getSingleCoursePublicData: (state, { payload }) => {
      state.singleCoursePublicData = payload;
    },
  },
});

export const {
  getTopCourseData,
  getSuggestCourseData,
  getTopRatedCourseData,
  getSingleCoursePublicData,
} = CourseSlices.actions;
export default CourseSlices.reducer;
