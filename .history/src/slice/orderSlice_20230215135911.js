import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addTCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart, removeToCart } = orderSlice.actions;

export default orderSlice.reducer;
