// getSingleKaziData

import KaziService from "../../../api/kaziService";

import { KaziSlice } from "../../slices/KaziSlice";

// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = KaziSlice;

export const singleKaziAction = (id) => async (dispatch) => {
  try {
    const res = await KaziService.show(id);
    // console.log("calling from action", res);
    if (res.status == 200) {
      const data = res.data ?? [];
      dispatch(slice.getSingleKaziData(data));
    }
  } catch (err) {
    console.log(err, "error from kazi show");
    // log("errr from kazi action", err);
  }
};

// top Kazi action
export const topKaziAction = () => async (dispatch) => {
  try {
    const res = await KaziService.TopKazi();
    // console.log(res, "topKazi");

    if (res.status == 200) {
      dispatch(slice.geTopKaziData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

// suggested Kazi action
export const suggestedKaziAction = () => async (dispatch) => {
  try {
    const res = await KaziService.KaziSuggested();

    if (res.status == 200) {
      dispatch(slice.getSuggestedKaziData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

// suggested Kazi action
export const RatedKaziAction = () => async (dispatch) => {
  try {
    const res = await KaziService.RatedKazi();

    if (res.status == 200) {
      dispatch(slice.getKaziRatedData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};




export const KaziComponentAction = (data) => (dispatch) => {
  dispatch(slice.getKaziComponentNowData(data));
};
