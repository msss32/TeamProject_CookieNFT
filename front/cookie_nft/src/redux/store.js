import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NFTReducer, NFTindexReducer } from "./slice";

const rootReducer = combineReducers({
    MY_NFT: NFTReducer,
    SET_INDEX: NFTindexReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export default store;
