import SliderServices from "../../../api/SliderServices";
import { log } from "../../../utils/functions";
import { SliderSlices } from "../../slices/SliderSlice";
// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = SliderSlices;

export const backGroundSliderList = () => async (dispatch) => {
  let res = await SliderServices.sliderList();
  // //console.log("resdsfsdfsdfsd :>> ", res.data);
  dispatch(slice.getSliderData(res.data));
};

export const latestMemberSliderList = () => async (dispatch) => {
  let res = await SliderServices.latestMemberList();
  dispatch(slice.getLatestMemberData(res.data));
};

export const successStoriesSliderList = () => async (dispatch) => {
  let res = await SliderServices.successStoriesList();
  dispatch(slice.getSuccessStoriesData(res.data));
};

// top profile slider

export const topProfileSuggestAction = () => async (dispatch) => {
  let res = await SliderServices.profileSuggested();
  dispatch(slice.getTopProfileSuggestData(res.data ?? []));
};

export const topProfileBrideAction = () => async (dispatch) => {
  let res = await SliderServices.topBride();
  dispatch(slice.getTopProfileBrideData(res.data ?? []));
};

export const topProfileGroomAction = () => async (dispatch) => {
  let res = await SliderServices.topGroom();
  dispatch(slice.getTopProfileGroomData(res.data ?? []));
};

// top hire data

export const topKaziAction = () => async (dispatch) => {
  let res = await SliderServices.topKazi();
  dispatch(slice.getTopKaziData(res.data ?? []));
};

export const topAgentAction = () => async (dispatch) => {
  let res = await SliderServices.topAgent();
  dispatch(slice.getTopAgentData(res.data ?? []));
};

export const topLawyerAction = () => async (dispatch) => {
  let res = await SliderServices.topLawyer();
  // log(res, "ressss");
  dispatch(slice.getTopLawyerData(res.data ?? []));
};
