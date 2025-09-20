import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const existingItem = state.value.find((item) => item.title === action.payload.title);
      console.log(action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
        console.log("Existed")
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
        console.log("Existed22")
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.title !== action.payload);
    },
  },
});

export const { addtocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
