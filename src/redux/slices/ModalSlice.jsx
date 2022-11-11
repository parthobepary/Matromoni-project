import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginModalData: false,
  registerModalData: false,
  singleModalData: {},
  isDetailsModalOpen: false
};

export const ModalSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    getLoginModalData: (state, { payload }) => {
      state.loginModalData = payload;
    },
    getRegisterModalData: (state, { payload }) => {
      state.registerModalData = payload;
    },
    getSingleModalData: (state, { payload }) => {
      state.singleModalData = payload
    },
    getOpenModal: (state, { payload }) => {
      state.isDetailsModalOpen = payload
    }


  },
});

export const { getLoginModalData, getRegisterModalData, getSingleModalData, getOpenModal } = ModalSlices.actions;
export default ModalSlices.reducer;
