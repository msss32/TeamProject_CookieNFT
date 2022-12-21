import { createSlice } from "@reduxjs/toolkit";

const NFTslice = createSlice({
    name: "NFT",
    initialState: [],
    reducers: {
        // MY_NFT: (_, {payload}) => payload //이렇게 줄여서 가능함
        MY_NFT: (state, action) => {
            //state.push(action.payload);
            return action.payload;
        },
    },
});

export const NFTaction = NFTslice.actions;

export default NFTslice.reducer;

// dispatch(NFTaction.MY_NFT(payload값));
// useSelector(state=> state.MY_NFT);
