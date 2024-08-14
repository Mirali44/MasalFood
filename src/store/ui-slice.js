import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : {};
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    checkoutIsVisible: false,
    favorites: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    goToCheckout(state) {
      state.checkoutIsVisible = !state.checkoutIsVisible;
    },
    addFavorite(state, action) {
      const meal = action.payload;
      state.favorites[meal.id] = meal;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      const id = action.payload;
      delete state.favorites[id];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
