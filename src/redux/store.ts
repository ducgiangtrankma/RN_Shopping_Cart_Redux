import {combineReducers, configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export {store};
export type RootState = ReturnType<typeof rootReducer>;
