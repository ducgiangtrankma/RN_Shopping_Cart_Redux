import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface CartSate {
  items: {id: number; name: string; price: number}[];
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
    ADD_TO_CART: (
      state,
      {payload}: PayloadAction<{id: number; name: string; price: number}>,
    ) => {
      console.log('Add to cart', payload);
    },
  },
});
const cartReducer = slice.reducer;
export default cartReducer;
export const {ADD_TO_CART} = slice.actions;
