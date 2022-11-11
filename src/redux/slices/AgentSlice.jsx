import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  singleAgentData: [],
  agentCategory: [],
  topAgentData: [],
  suggestedAgentData: [],
  ratedAgentData: [],
  agentComponentNow: "componentAgent",
};

export const AgentSlice = createSlice({
  name: "agentSlice",
  initialState,
  reducers: {
    getSingleAgentData: (state, { payload }) => {
      state.singleAgentData = payload;
    },
    getAgentCategory: (state, { payload }) => {
      state.agentCategory = payload;
    },
    getTopAgentData: (state, { payload }) => {
      state.topAgentData = payload;
    },
    getSuggestedAgentData: (state, { payload }) => {
      state.suggestedAgentData = payload;
    },
    getAgentRatedData: (state, { payload }) => {
      state.ratedAgentData = payload;
    },
    getAgentComponentNowData: (state, { payload }) => {
      state.agentComponentNow = payload;
    },
  },
});

export const {
  getSingleAgentData,
  getAgentCategory,
  getAgentRatedData,
  getSuggestedAgentData,
  getTopAgentData,
  getAgentComponentNowData,
} = AgentSlice.actions;

export default AgentSlice.reducer;
