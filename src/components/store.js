import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/addtocartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
