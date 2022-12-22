import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { SellNftListSlice } from "./slice/SellNftListSlice";
import { NFTslice } from "./slice/NFTslice";
import { NFTindex } from "./slice/IndexSlice";

const rootReducer = combineReducers({
  MY_NFT: NFTslice.reducer,
  SET_INDEX: NFTindex.reducer,
  SellSlice: SellNftListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
