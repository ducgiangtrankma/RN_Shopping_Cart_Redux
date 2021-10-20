import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../screens';
export interface CartSate {
  items: {
    id: number;
    name: string;
    price: number;
    like: boolean;
    img: any;
  }[];
  total: number;
  count: number;
}

const initialState: CartSate = {
  items: [],
  total: 0,
  count: 0,
};
const slice = createSlice({
  name: 'CART_STATE',
  initialState: initialState,
  reducers: {
    ADD_TO_CART: (state, {payload}: PayloadAction<Product>) => {
      state.items = state.items.concat(payload);
    },
  },
});
const cartReducer = slice.reducer;
export default cartReducer;
export const {ADD_TO_CART} = slice.actions;
