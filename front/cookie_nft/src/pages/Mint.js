import React, { useRef } from "react";
import CardPick from "../component/CardPick";

const Mint = () => {
  const cardPickRef = useRef();
  const cardPick = () => {
    cardPickRef.current.cardPick();
  };
  return (
    <>
      <button className="cardPickBtnMain" onClick={cardPick}>
        카드뽑기
      </button>
      <CardPick ref={cardPickRef} />
    </>
  );
};

export default Mint;
