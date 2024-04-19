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
        product: action.payload,
      };
      state.cart.push(data);
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    REMOVE_FROM_CART: (state, action) => {
      console.log("action", action.payload);
      state.cart = state.cart.filter((d) => d.product.id !== action.payload);

      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    INCREASE_QTY: (state, action) => {
      console.log(action.payload);
      state.cart.map((d, i) => {
        if (d?.product?.id === action.payload) {
          d.qty += 1;
        }
      });
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    DECREASE_QTY: (state, action) => {
      state.cart.map((d, i) => {
        if (d?.product?.id === action.payload && d.qty > 1) {
          d.qty -= 1;
        }
      });
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QTY, DECREASE_QTY } =
  cartSlice.actions;

export default cartSlice.reducer;
