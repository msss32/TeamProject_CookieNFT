import React from "react";
import { Brave } from "../image";
import { SellBox, SellContainer, SellNftName, SellNftPrice, SellTextBox } from "../style/SellNftListStyle";
import { useSelector } from "react-redux";
const SellNftList = () => {
  const sellList = useSelector((state) => state.SellSlice.img);
  console.log(sellList);
  return (
    <div>
      <div style={{ fontFamily: "CookieRun", fontWeight: 600, fontSize: "3rem" }}>판매중인 NFT</div>
      <SellBox>
        {sellList.map((el) => (
          <SellContainer>
            <div>
              <img src={el.imguri} alt="용감한 쿠키" style={{ width: "15vw" }} />
            </div>
            <SellTextBox>
              <SellNftName>{el.name}</SellNftName>
              <SellNftPrice>{el.price}</SellNftPrice>
            </SellTextBox>
            <div>
              <button>구매하기</button>
            </div>
          </SellContainer>
        ))}
      </SellBox>
    </div>
  );
};

export default SellNftList;
