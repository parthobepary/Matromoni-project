import PostServices from "../../api/PostServices";
import { PostSlices } from "../slices/PostSlices";

const { actions: slice } = PostSlices;

export const userPostFunction = () => async (dispatch) => {
  let res = await PostServices.getUserPost();
  dispatch(slice.getUserPostData(res.data));
};
