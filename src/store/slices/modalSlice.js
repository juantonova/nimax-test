import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceForm: true,
  customerForm: false,
  totalForm: false,
  finalForm: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOtherPage: (state, action) => {
      for (const key in state) {
        state[key] = false
      }
      state[action.payload] = true;
    },
  },
});

export const { setOtherPage } = modalSlice.actions;

export default modalSlice.reducer;
