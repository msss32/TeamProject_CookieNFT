import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { SellNftListSlice } from "./SellNftListSlice";

const rootReducer = combineReducers({
  Sell: SellNftListSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
