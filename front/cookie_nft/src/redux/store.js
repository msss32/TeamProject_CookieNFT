import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { SellNftListSlice } from "./SellNftListSlice";
import { NFTReducer, NFTindexReducer } from "./slice";

const rootReducer = combineReducers({
  MY_NFT: NFTReducer,
  SET_INDEX: NFTindexReducer,
  Sell: SellNftListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
