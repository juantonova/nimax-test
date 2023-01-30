import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import orderSlice from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    order: orderSlice,
    modal: modalSlice,
  },
});
