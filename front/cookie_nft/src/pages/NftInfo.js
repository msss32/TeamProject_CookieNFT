import React from "react";
import { useSelector } from "react-redux";

const NftInfo = () => {
  // reducer에서 값 가져오기
  const NFTs = useSelector((state) => state.MY_NFT);
  const index = useSelector((state) => state.SET_INDEX);

  return (
    <div>
      <div>
        <img src={NFTs.img[index]} alt="img" />
      </div>
      <div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default NftInfo;
