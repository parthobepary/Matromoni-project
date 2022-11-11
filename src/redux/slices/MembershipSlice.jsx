// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  membershipPackData: [],
  memberPackError: null,
};

export const MembershipSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    getAllMembershipPack: (state, { payload }) => {
      state.membershipPackData = payload;
    },
    getMembershipError: (state, { payload }) => {
      state.memberPackError = payload;
    },
  },
});

export const { membershipPackData, memberPackError } = MembershipSlice.actions;

export default MembershipSlice.reducer;
