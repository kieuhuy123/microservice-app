import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  isLoading: false,
  currentProduct: false,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    // landingProducts(state, action) {
    //   state.products = action.payload.products;
    //   state.categories = action.payload.categories;
    // },
    landingProductsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    landingProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload.products;
      state.categories = action.payload.categories;
    },
    landingProductsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // productDetails(state, action) {
    //   state.currentProduct = action.payload;
    // },
    productDetailsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    productDetailsSuccess(state, action) {
      state.isLoading = false;
      state.currentProduct = action.payload;
    },
    productDetailsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  landingProductsStart,
  landingProductsSuccess,
  landingProductsFailure,
  productDetailsStart,
  productDetailsSuccess,
  productDetailsFailure,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
