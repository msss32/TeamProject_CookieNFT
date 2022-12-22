import { createSlice } from "@reduxjs/toolkit";

export const NFTslice = createSlice({
  name: "NFT",
  initialState: {
    img: [],
    name: "",
    price: 0,
  },
  reducers: {
    // MY_NFT: (_, {payload}) => payload //이렇게 줄여서 가능함
    MY_NFT: (state, action) => {
      //state.push(action.payload);
      state.img = action.payload;
    },
  },
});

export const NFTaction = NFTslice.actions;

// dispatch(NFTaction.MY_NFT(payload값));
// useSelector(state=> state.MY_NFT);
