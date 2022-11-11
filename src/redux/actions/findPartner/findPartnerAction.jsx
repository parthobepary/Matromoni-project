import FindPartnerService from "../../../api/Findpartner";
import { FindPartnerSlice } from "../../slices/FindPartnerSlice";

// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = FindPartnerSlice;

// suggested Kazi action
export const newestPartnerAction = () => async (dispatch) => {
  try {
    const res = await FindPartnerService.newestPartner();

    if (res.status == 200) {
      dispatch(slice.getPartnerNewesttData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};
export const suggestedPartnerAction = () => async (dispatch) => {
  try {
    const res = await FindPartnerService.suggestedPartner();

    if (res.status == 200) {
      dispatch(slice.getSuggestedPartnerData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

export const topPartnerAction = () => async (dispatch) => {
  try {
    const res = await FindPartnerService.topPartner();

    if (res.status == 200) {
      dispatch(slice.geTopPartnerData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};
