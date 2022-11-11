import AgentService from "../../../api/agentService";

import { AgentSlice } from "../../slices/AgentSlice";

// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = AgentSlice;

export const singleAgentAction = (id) => async (dispatch) => {
  try {
    const res = await AgentService.show(id);
    // console.log("calling from Agent action", res);
    if (res.status == 200) {
      const data = res.data ?? [];
      dispatch(slice.getSingleAgentData(data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
    // log("errr from kazi action", err);
  }
};

export const AgentCategoryAction = () => async (dispatch) => {
  try {
    const res = await AgentService.category();
    // console.log(res, "response from kazi category");
    if (res.status == 200) {
      dispatch(slice.getAgentCategory(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

// top agent action
export const topAgentAction = () => async (dispatch) => {
  try {
    const res = await AgentService.TopAgent();
    console.log(res, "topAgent");

    if (res.status == 200) {
      dispatch(slice.getTopAgentData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

// suggested agent action
export const suggestedAgentAction = () => async (dispatch) => {
  try {
    const res = await AgentService.AgentSuggested();

    if (res.status == 200) {
      dispatch(slice.getSuggestedAgentData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

// suggested agent action
export const RatedAgentAction = () => async (dispatch) => {
  try {
    const res = await AgentService.RatedAgent();

    if (res.status == 200) {
      dispatch(slice.getAgentRatedData(res.data));
    }
  } catch (err) {
    console.error(err, "error from kazi show");
  }
};

// suggested agent action
export const AgentComponentNowAction = (data) => (dispatch) => {
  dispatch(slice.getAgentComponentNowData(data));
};
