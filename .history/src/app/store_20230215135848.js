import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/slice/cartSlice';
import or

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
