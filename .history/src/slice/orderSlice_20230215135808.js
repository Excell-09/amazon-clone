import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
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

export const { addToCart, removeToCart } = cartSlice.actions;

export const selectItem = (state) => state.cart.items;
export const selectTotalItem = (state) => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
