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
    removeToCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (state.items.length > -1) {
        state.items.splice(index, 1);
      } else {
        console.warn('cant to remove, cause no item in here');
      }
    },
  },
});

export const { addToCart, removeToCart } = orderSlice.actions;

export default orderSlice.reducer;
