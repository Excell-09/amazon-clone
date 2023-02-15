import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/slice/cartSlice';
import orderSlice from '@/slice/orderSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    
  },
});
