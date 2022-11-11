import ProfileServices from "../../api/ProfileServices";
import UtilsServices from "../../api/UtilsServices";
import { ProfileSlices } from "../slices/ProfileSlice";

const { actions: slice } = ProfileSlices;

export const cityFunction = () => async (dispatch) => {
  let res = await ProfileServices.city();
  dispatch(slice.cityData(res.data));
};
export const countryFunction = () => async (dispatch) => {
  let res = await ProfileServices.country();
  dispatch(slice.countryData(res.data));
};

export const singleProfileFunction = (id) => async (dispatch) => {
  let res = await ProfileServices.singleProfile(id);
  dispatch(slice.singleProfileData(res.data));
};

export const singleLawyerProfileFunction = (id) => async (dispatch) => {
  let res = await ProfileServices.singleLawyerProfile(id);
  dispatch(slice.singleLawyerProfileData(res.data));
};
export const singleAgentProfileFunction = (id) => async (dispatch) => {
  let res = await ProfileServices.singleAgentProfile(id);
  dispatch(slice.singleAgentProfileData(res.data));
};

export const skinToneFunction = () => async (dispatch) => {
  let res = await ProfileServices.skinTone();
  dispatch(slice.skinToneData(res.data));
};

export const jobListFunction = () => async (dispatch) => {
  let res = await ProfileServices.jobList();
  dispatch(slice.jobsData(res.data));
};
export const hobbyListFunction = () => async (dispatch) => {
  let res = await ProfileServices.hobbyList();
  dispatch(slice.hobbiesData(res.data));
};
export const aboutProfileFunction = (data) => (dispatch) => {
  dispatch(slice.aboutProfileData(data));
};

export const topProfileNow = (data) => (dispatch) => {
  dispatch(slice.topProfileData(data));
};

export const certificateData = () => async (dispatch) => {
  let res = await ProfileServices.certificateImages();
  // //console.log("resdsfsdfsdfsd :>> ", res.data);
  dispatch(slice.getCertificateUserData(res.data));
};

export const sidebarNow = (data) => (dispatch) => {
  dispatch(slice.sidebarData(data));
};
export const profileHeaderNow = (data) => (dispatch) => {
  dispatch(slice.profileHeaderData(data));
};


export const addFavouriteAction = (data) => async (dispatch) => {
  const res = await ProfileServices.addFavourite(data)

  return res

}


export const RemoveFavouriteAction = (id) => async (dispatch) => {

  const res = await ProfileServices.removeFavourite(id)
  return res

}



export const getFavouriteAgentAction = () => async (dispatch) => {
  const res = await ProfileServices.AgentfavouriteService()
  console.log(res)

  dispatch(slice.getAgentFavourite(res.data));

  return res

}

export const getFavouriteLawyerAction = () => async (dispatch) => {
  const res = await ProfileServices.LawyerfavouriteService()
  dispatch(slice.getLawyerFavourite(res.data));

  return res

}

