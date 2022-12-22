import React from "react";
import { MainSlide, SellNftList } from "../component";

const Main = () => {
  return (
    <>
      <div style={{ width: "88.5vw", margin: "auto" }}>
        <h3>높은 등급의 카드를 뽑아보세요!</h3>
        <MainSlide />
        <SellNftList />
      </div>
    </>
  );
};

export default Main;
