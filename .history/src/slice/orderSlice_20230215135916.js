import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = orderSlice.actions;

export default orderSlice.reducer;
