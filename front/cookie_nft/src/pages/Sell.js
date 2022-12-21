import React from "react";
import { useSelector } from "react-redux";

const Sell = () => {
    // reducer에서 값 가져오기
    const NFTs = useSelector((state) => state.MY_NFT);
    const index = useSelector((state) => state.SET_INDEX);

    return (
        <div>
            <img src={NFTs[index]} alt="img" />
            판매하기
        </div>
    );
};

export default Sell;
