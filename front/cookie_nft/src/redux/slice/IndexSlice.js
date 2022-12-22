import { createSlice } from "@reduxjs/toolkit";

export const NFTindex = createSlice({
  name: "NFTindex",
  initialState: 0,
  reducers: {
    SET_INDEX: (state, action) => action.payload,
  },
});

export const NFTindexAction = NFTindex.actions;
