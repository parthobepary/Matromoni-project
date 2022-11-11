import LawyerService from "../../../api/lawyerService";
import { LawyerSlice } from "../../slices/LawyerSlice";

const { actions: slice } = LawyerSlice;

export const singleLawyerAction = (id) => async (dispatch) => {
  try {
    const res = await LawyerService.show(id);
    // console.log("calling from Agent action", res);
    if (res.status == 200) {
      const data = res.data ?? [];
      dispatch(slice.getSingleLawyerData(data));
    }
  } catch (err) {
    console.log(err, "error from kazi show");
    // log("errr from kazi action", err);
  }
};
export const LawyerCategoryAction = () => async (dispatch) => {
  try {
    const res = await LawyerService.category();
    // console.log(res.data, "res from lawyer category");
    if (res.status == 200) {
      dispatch(slice.getLawyerCategory(res.data));
    }
  } catch (err) {
    console.log(err, "error from kazi show");
  }
};

export const LawyerTopAction = () => async (dispatch) => {
  try {
    const res = await LawyerService.TopLawyer();
    // console.log(res, "res from lawyer category");
    if (res.status == 200) {
      dispatch(slice.geTopLawyerData(res.data));
    }
  } catch (err) {
    console.log(err, "error from kazi show");
  }
};

export const LawyerSuggestedAction = () => async (dispatch) => {
  try {
    const res = await LawyerService.LawyerSuggested();
    // console.log(res, "res from lawyer category");
    if (res.status === 200) {
      dispatch(slice.getSuggestedLawyerData(res.data));
    }
  } catch (err) {
    console.log(err, "error from kazi show");
  }
};

export const LawyerRatedAction = () => async (dispatch) => {
  try {
    const res = await LawyerService.LawyerRated();
    // console.log(res, "res from lawyer category");
    if (res.status === 200) {
      dispatch(slice.getLawyerRatedData(res.data));
    }
  } catch (err) {
    console.log(err, "error from kazi show");
  }
};

export const LawyerComponentNowAction = (data) => (dispatch) => {
  dispatch(slice.getLawyerComponentNowData(data));
};
