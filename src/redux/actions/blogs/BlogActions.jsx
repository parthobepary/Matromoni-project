import BlogServices from "../../../api/BlogServices";
import { BlogSlices } from "../../slices/BlogSlice";

const { actions: slice } = BlogSlices;

export const blogListAction = () => async (dispatch) => {
  let res = await BlogServices.blogDataList();
  // console.log(res.status, "blog data actions");
  if (res.status === 200) {
    dispatch(slice.getAllBlogData(res.data ?? []));
  } else {
    // console.log(res, "blog data actions");
    dispatch(slice.getBlogError(res.error ?? null));
  }
};
