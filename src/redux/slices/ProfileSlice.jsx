// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  city: [],
  country: [],
  singleData: [],
  singleLawyerData: [],
  singleAgentData: [],

  skinTone: [],
  jobs: [],
  hobbies: [],
  aboutProfile: [],
  topProfile: "Activity",
  certificates: [],
  sidebar: "profile",
  profileHeader: "User Profile Info",
  lawyerFavourite: [],
  agentFavourite: []
};

export const ProfileSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    cityData: (state, { payload }) => {
      state.city = payload;
    },
    singleProfileData: (state, { payload }) => {
      state.singleData = payload;
    },
    singleLawyerProfileData: (state, { payload }) => {
      state.singleLawyerData = payload;
    },
    singleAgentProfileData: (state, { payload }) => {
      state.singleAgentData = payload;
    },

    countryData: (state, { payload }) => {
      state.country = payload;
    },
    skinToneData: (state, { payload }) => {
      state.skinTone = payload;
    },
    jobsData: (state, { payload }) => {
      state.jobs = payload;
    },
    hobbiesData: (state, { payload }) => {
      state.hobbies = payload;
    },
    aboutProfileData: (state, { payload }) => {
      state.aboutProfile = payload;
    },
    topProfileData: (state, { payload }) => {
      state.topProfile = payload;
    },
    getCertificateUserData: (state, { payload }) => {
      state.certificates = payload;
    },
    sidebarData: (state, { payload }) => {
      state.sidebar = payload;
    },
    profileHeaderData: (state, { payload }) => {
      state.profileHeader = payload;
    },
    getLawyerFavourite: (state, { payload }) => {
      state.lawyerFavourite = payload;
    },
    getAgentFavourite: (state, { payload }) => {
      state.agentFavourite = payload;
    },
  },
});

export const {
  cityData,
  singleProfileData,
  countryData,
  skinToneData,
  jobsData,
  hobbiesData,
  topProfileData,
  aboutProfileData,
  getCertificateUserData,
  singleLawyerProfileData,
  sidebarData,
  singleAgentProfileData,
  profileHeaderData,
  getLawyerFavourite,
  getAgentFavourite,
} = ProfileSlices.actions;

export default ProfileSlices.reducer;
