import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NFT from "../component/NFT";
import { NFTaction } from "../redux/slice/NFTslice";
import { NFTwrap } from "../style/MyNFTStyle";
import { DarknessWitch, FireFairy, FrostQueen, MoonLight, SeaFairy, WindArcher } from "../test_img";

const MyNFT = () => {
  // test images
  const myNFT = [DarknessWitch, FireFairy, FrostQueen, MoonLight, SeaFairy, WindArcher];

  // Hook 할당
  const dispatch = useDispatch();

  // redecer에서 내 NFT가 들어있는 배열 가져오기
  const NFTs = useSelector((state) => state.MY_NFT.img);

  // 랜더링시 실행ㄱ
  useEffect(() => {
    dispatch(NFTaction.MY_NFT(myNFT));
  }, []);

  return (
    <div>
      <div>보유중인 NFT</div>
      <NFTwrap>{NFTs && NFTs.map((element, index) => <NFT key={index} index={index} element={element} />)}</NFTwrap>
    </div>
  );
};

export default MyNFT;
