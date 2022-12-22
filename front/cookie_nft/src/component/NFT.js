import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NFTindexAction } from "../redux/slice/IndexSlice";

const NFT = ({ index, element }) => {
  // Hook 불러오기
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 이미지 클릭 함수
  const click = () => {
    // 현재 인덱스값을 리듀서에 저장
    dispatch(NFTindexAction.SET_INDEX(index));
    nav(`/NftInfo/?=${index}`);
  };

  return (
    <div>
      <img src={element} alt="img" onClick={click} />
    </div>
  );
};

export default NFT;
