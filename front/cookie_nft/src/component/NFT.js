import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NFTindexAction } from "../redux/slice/IndexSlice";
import { NFTaction } from "../redux/slice/NFTslice";


const NFT = ({ index, element }) => {
  // Hook 불러오기
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 이미지 클릭 함수
  const click = () => {
    // 현재 인덱스값을 리듀서에 저장
    // dispatch(NFTindexAction.SET_INDEX(index));
    dispatch(NFTaction.MY_NFT(element))
    nav(`/NftInfo/?=${element.name}`);
  };

  return (
    <div>
      <img src={element.image} alt="img" onClick={click} />
    </div>
  );
};

export default NFT;
