import CourseServices from "../../../api/CourseServices";
import { CourseSlices } from "../../slices/CourseSlice";
// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = CourseSlices;

export const topCourseList = () => async (dispatch) => {
  let res = await CourseServices.topCourseList();
  // //console.log("resdsfsdfsdfsd :>> ", res.data);
  dispatch(slice.getTopCourseData(res));
};

export const suggestCourseList = () => async (dispatch) => {
  let res = await CourseServices.suggestCourseListApi();
  dispatch(slice.getSuggestCourseData(res));
};

export const topRatedCourseList = () => async (dispatch) => {
  let res = await CourseServices.topRatedCourseListApi();
  dispatch(slice.getTopRatedCourseData(res));
};

export const singlePublicCourseList = (id) => async (dispatch) => {
  let res = await CourseServices.singlePublicCourseListApi(id);
  dispatch(slice.getSingleCoursePublicData(res.data));
};
