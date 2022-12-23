import React, { useRef } from "react";
import CardPick from "../component/CardPick";
import "../style/MintCss.css";

const Mint = () => {
  const cardPickRef = useRef();
  const cardPick = () => {
    cardPickRef.current.cardPick();
  };
  const buyToken = () => {};

  return (
    <>
      <div style={{ width: "88.5vw", margin: "auto" }}>
        <div className="mintPage">
          <button className="cardPickBtnMain" onClick={cardPick}>
            카드 뽑기
          </button>
          <button className="tokenSwap" onClick={buyToken}>
            토큰 구매
          </button>
        </div>
        <CardPick ref={cardPickRef} />
      </div>
    </>
  );
};

export default Mint;
