import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  topProductsData: [],
  singleProductData: [],
  productSuggestData: [],
  bestRatedCourseData: [],
  //   categoriesList: [],
  relatedProducts: [],
  allProducts: [],
  //   singleProductData: [],
  cartData: [],
};

export const ShopSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    getTopProductData: (state, { payload }) => {
      state.topProductsData = payload;
    },
    getSingleProductData: (state, { payload }) => {
      state.singleProductData = payload;
    },

    getSuggestProductData: (state, { payload }) => {
      state.productSuggestData = payload;
    },
    getBestRatedProductData: (state, { payload }) => {
      state.bestRatedCourseData = payload;
    },
    getRelatedProduct: (state, { payload }) => {
      state.relatedProducts = payload;
    },
    getCartData: (state, { payload }) => {
      state.cartData = payload;
    },
    getAllProductData: (state, { payload }) => {
      state.allProducts = payload;
    },
  },
});

export const {
  getTopProductData,
  getSingleProductData,
  getSuggestProductData,
  getBestRatedProductData,
  getRelatedProduct,
  getCartData,
} = ShopSlices.actions;
export default ShopSlices.reducer;
