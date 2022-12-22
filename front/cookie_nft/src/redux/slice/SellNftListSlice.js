import { createSlice } from "@reduxjs/toolkit";

export const SellNftListSlice = createSlice({
  name: "sellSlice",
  initialState: {
    img: [
      { imguri: "https://gateway.pinata.cloud/ipfs/QmZ3NactULgeU7PGa7s6PJcaRAFBRA2dwz4RkwRwyrwbQP", name: "Brave Cookie", price: "0.01" },
      { imguri: "https://gateway.pinata.cloud/ipfs/QmeMo6Q6Zpy1mucBjwwTuyW2hPjf7FoYv4PbFpLHXZj1hM", name: "2", price: "0.05" },
      { imguri: "https://gateway.pinata.cloud/ipfs/QmNdKgdpt52rr1n4LcPVbDJrtLq75Uy1Mw9CFR7tN53Jeg", name: "3", price: "0.03" },
    ],
  },
});
