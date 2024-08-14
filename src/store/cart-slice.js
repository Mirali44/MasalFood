import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalQuantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalQuantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (!existingItem) return;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalQuantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    refreshCart: (state, action) => {
      state.cartItems = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
