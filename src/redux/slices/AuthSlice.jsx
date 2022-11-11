// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  authenticated: false,
  loading: true,
  currentUser: {},
  loginShow: false,
  type: "",
};

export const AuthSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticatedData: (state, { payload }) => {
      state.authenticated = payload;
    },
    getCurrentUserData: (state, { payload }) => {
      state.currentUser = payload;
    },
    getLoadingData: (state, { payload }) => {
      state.loading = payload;
    },
    getloginShow: (state, { payload }) => {
      state.loginShow = payload;
    },
    getTypeShow: (state, { payload }) => {
      state.type = payload;
    },
  },
});

export const {
  authenticatedData,
  getCurrentUserData,
  getLoadingData,
  getloginShow,
  getTypeShow,
} = AuthSlices.actions;

export default AuthSlices.reducer;
