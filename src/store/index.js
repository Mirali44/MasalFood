import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import mealSlice from "./meal-slice";
import filtersSlice from "./filter-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    meal: mealSlice.reducer,
    filters: filtersSlice.reducer
  },
});

export default store;
