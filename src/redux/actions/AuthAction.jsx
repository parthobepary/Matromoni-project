import { AuthSlices } from "../slices/AuthSlice";

const { actions: slice } = AuthSlices;

export const loadingFunction = (data) => (dispatch) => {
  dispatch(slice.getLoadingData(data));
};

export const authenticatedFunction = (data) => (dispatch) => {
  dispatch(slice.authenticatedData(data));
};

export const typeFunction = (data) => (dispatch) => {
  dispatch(slice.getTypeShow(data));
};

export const setUserFunction = (data) => (dispatch) => {
  dispatch(slice.getCurrentUserData(data));
};

export const loginModalShowAction = (show) => (dispatch) => {
  console.log(show);
  dispatch(slice.getloginShow(show));
};
