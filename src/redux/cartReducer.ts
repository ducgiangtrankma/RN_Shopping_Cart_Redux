import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
export interface CartSate {
  items: {
    id: number;
    name: string;
    price: number;
    like: boolean;
    img: any;
    quantity: number;
  }[];
  total: number;
  count: number;
}
export interface Item {
  id: number;
  name: string;
  price: number;
  like: boolean;
  img: any;
  quantity: number;
}
const initialState: CartSate = {
  items: [],
  total: 0,
  count: 0,
};
const getItemIndex = (state: Item[], idToFind: number): number => {
  const ids = state.map(item => item.id);
  return ids.indexOf(idToFind);
};

const slice = createSlice({
  name: 'CART_STATE',
  initialState: initialState,
  reducers: {
    addToCart: (state, {payload}: PayloadAction<Item>) => {
      // using current import to @reduxjs/toolkit fix Proxy - https://stackoverflow.com/questions/64739894/redux-toolkit-state-is-a-proxy-inside-a-createslice-reducer
      const itemIndex = getItemIndex(state.items, payload.id);
      if (itemIndex && itemIndex < 0) {
        state.items = state.items.concat(payload);
      } else {
        state.items[itemIndex].quantity += payload.quantity;
      }
    },
    incrementQuantity: (state, {payload}: PayloadAction<Item>) => {
      const itemIndex = getItemIndex(state.items, payload.id);
      state.items[itemIndex].quantity += 1;
    },
    decrementQuantity: (state, {payload}: PayloadAction<Item>) => {
      const itemIndex = getItemIndex(state.items, payload.id);

      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else {
        const temp = current(state.items).filter(
          item => item.id !== payload.id,
        );
        // state.items.filter(item => item.id !== payload.id);
        state.items = temp;
      }
    },
    removeFromCart: (state, {payload}: PayloadAction<Item>) => {
      const temp = current(state.items).filter(item => item.id !== payload.id);
      // state.items.filter(item => item.id !== payload.id);
      state.items = temp;
    },
    batchRemove: (state, {payload}: PayloadAction<any[]>) => {
      const temp = current(state.items).filter(item =>
        payload.includes(item.id),
      );
      state.items = temp;
    },
  },
});
const cartReducer = slice.reducer;
export default cartReducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  batchRemove,
} = slice.actions;
