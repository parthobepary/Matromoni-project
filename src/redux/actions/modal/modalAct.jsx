import { ModalSlices } from "../../slices/ModalSlice";
// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = ModalSlices;

export const loginModal = (data) => (dispatch) => {
  dispatch(slice.getLoginModalData(data));
};

export const registerModal = (data) => (dispatch) => {
  dispatch(slice.getRegisterModalData(data));
};

export const singleModalDataAction = (data) => (dispatch) => {
  dispatch(slice.getSingleModalData(data))
}

export const openDetailsModal = (data) => (dispatch) => {
  dispatch(slice.getOpenModal(data))
}