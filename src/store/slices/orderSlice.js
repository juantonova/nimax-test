import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calcSumOrder } from '../../utils/calcSumOrder';
import * as api from '../../api/makeOrder';

const initialState = {
  order: {
    numberOfAdults: 1,
    numberOfTeenagers: 0,
    numberOfChildren: 0,
    typeOfRoom: 'Эконом',
    numberOfNights: 1,
    insurance: true,
    sum: 1980,
  },
  customer: {
    surname: '',
    name: '',
    middleName: '',
    phonenumber: '+7',
    dateOfBirth: '',
  },
  error: {
    error: {
      numberOfAdults: undefined,
      numberOfTeenagers: undefined,
      numberOfChildren: undefined,
      numberOfNights: undefined,
      name: undefined,
      surname: undefined,
    },
  },
};

export const makeOrder = createAsyncThunk(
  'order/makeOrder',
  async (order) => {
    const orderResult = await api.makeOrder(order);
    if (orderResult.status === 'ok') {
      return orderResult.page;
    }
    throw new Error(orderResult.status);
  },
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order[action.payload.info] = action.payload.order;
      state.order.sum = calcSumOrder(state.order);
    },
    setCustomer: (state, action) => {
      state.customer[action.payload.info] = action.payload.customerData;
    },
    setError: (state, action) => {
      state.error.error[action.payload?.errorObj] = action.payload?.error;
    },
    deleteError: (state, action) => {
      state.error.error[action.payload] = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeOrder.fulfilled, (state) => {
        state.order = initialState.order;
        state.customer = initialState.customer;
      })
      .addCase(makeOrder.rejected, (_, action) => console.log(action.error.message));
  },
});

export const {
  setOrder, setCustomer, setError, deleteError,
} = orderSlice.actions;

export default orderSlice.reducer;
