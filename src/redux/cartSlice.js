"use client";
import { createSlice } from "@reduxjs/toolkit";
let cart = JSON.parse(localStorage.getItem("cartData"));

const initialState = {
  cart: cart ? cart : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const data = {
        qty: 1,
        product: action.payload.payload,
      };
      state.cart.push(data);
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    REMOVE_FROM_CART: (state, action) => {
      const data = state.cart.filter((d) => d.product.id !== action.payload);

      localStorage.setItem("cartData", JSON.stringify(data));
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;
