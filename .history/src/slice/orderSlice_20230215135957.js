import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setResponse: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setResponse } = orderSlice.actions;

export default orderSlice.reducer;
