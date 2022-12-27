import { createSlice } from "@reduxjs/toolkit";

export const NFTslice = createSlice({
  name: "NFT",
  initialState: {
    img: [],
    name: [],
    price: [],
    list: [],
  },
  reducers: {
    // MY_NFT: (_, {payload}) => payload //이렇게 줄여서 가능함
    MY_NFT: (state, action) => {
      //state.push(action.payload);
      state.img = action.payload.img;
      state.name = action.payload.name;
      state.price = action.payload.price;
    },
    MY_NFTS: (state, action) => {
      state.list = action.payload;
    }
    // 윗부분 extraReducers로 사용할 수 있지 않을깡...
  },
});

export const NFTaction = NFTslice.actions;

// dispatch(NFTaction.MY_NFT(payload값));
// useSelector(state=> state.MY_NFT);
