import React from "react";
import { useSelector } from "react-redux";
import { TransferForm } from "../component";
import {
  NftName,
  OwendBox,
  NftPrice,
  NftInfoContainer,
} from "../style/NftInfoStyle";

const NftInfo = () => {
  // reducer에서 값 가져오기
  const NFTs = useSelector((state) => state.MY_NFT);
  const index = useSelector((state) => state.SET_INDEX);

  return (
    <div>
      <div style={{ width: "88.5vw", margin: "auto" }}>
        <NftInfoContainer>
          <div>
            <img src={NFTs.img[index]} alt="img" />
          </div>
          <div>
            <NftName>{NFTs.name[index]}</NftName>
            <OwendBox>
              <div>owned by</div>
              <div>Dori</div>
            </OwendBox>
            <NftPrice>{NFTs.price[index]} ETH</NftPrice>
          </div>
        </NftInfoContainer>
        <TransferForm />
      </div>
    </div>
  );
};

export default NftInfo;
