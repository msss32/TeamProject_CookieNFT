import { createSlice } from "@reduxjs/toolkit";

const NFTindex = createSlice({
    name: "NFTindex",
    initialState: 0,
    reducers: {
        SET_INDEX: (state, action) => action.payload,
    },
});

export const NFTindexAction = NFTindex.actions;

export default NFTindex.reducer;
