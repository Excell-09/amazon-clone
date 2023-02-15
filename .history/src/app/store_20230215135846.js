import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/slice/cartSlice';
import 

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
