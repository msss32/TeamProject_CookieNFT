import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NFT from "../component/NFT";
import { NFTaction } from "../redux/slice/NFTslice";
import { NFTwrap, MyNFTwrap } from "../style/MyNFTStyle";
import {
  DarknessWitch,
  FireFairy,
  FrostQueen,
  MoonLight,
  SeaFairy,
  WindArcher,
} from "../test_img";

const MyNFT = () => {
  // test images
  const myNFT = [
    DarknessWitch,
    FireFairy,
    FrostQueen,
    MoonLight,
    SeaFairy,
    WindArcher,
  ];
  const myNFTname = [
    "어둠마녀 쿠키",
    "불꽃정령 쿠키",
    "서리여왕 쿠키",
    "달빛술사 쿠키",
    "바다요정 쿠키",
    "바람궁수 쿠키",
  ];
  const myNFTprice = [0.05, 0.03, 0.04, 0.05, 0.04, 0.02];

  // Hook 할당
  const dispatch = useDispatch();

  // redecer에서 내 NFT가 들어있는 배열 가져오기
  const NFTs = useSelector((state) => state.MY_NFT.img);

  // 랜더링시 실행ㄱ
  useEffect(() => {
    dispatch(
      NFTaction.MY_NFT({ img: myNFT, name: myNFTname, price: myNFTprice })
    );
  }, []);

  /* 
    // TokenInfo 구조체
    struct TokenInfo {
        uint256 tokenId;
        uint256 Rank;
        uint256 Type;
        uint256 price;
    }

    // 소유하고 있는 NFT 리스트 view 함수
    function getOwnerToken(address _tokenOwner)
        public
        view
        returns (TokenInfo[] memory)
    {
        uint256 balance = Token.balanceOf(_tokenOwner);
        require(balance != 0);
        // balance크기의 빈배열 만들기 list
        TokenInfo[] memory list = new TokenInfo[](balance);

        for (uint256 i = 0; i < balance; i++) {
            // tokenOfOwnerByIndex(): 토큰 소유자의 토큰 인덱스를 순서대로 가져옴 tokenId
            uint256 tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
            uint256 Rank = Token.getTokenRank(tokenId);
            uint256 Type = Token.getTokenType(tokenId);
            uint256 price = tokenPrices[tokenId];

            list[i] = TokenInfo(tokenId, Rank, Type, price);
        }

        return list;
    }
  */

  return (
    <MyNFTwrap>
      <div
        style={{ fontFamily: "CookieRun", fontWeight: 600, fontSize: "3rem" }}
      >
        보유중인 NFT
      </div>
      <NFTwrap>
        {NFTs &&
          NFTs.map((element, index) => (
            <NFT key={index} index={index} element={element} />
          ))}
      </NFTwrap>
    </MyNFTwrap>
  );
};

export default MyNFT;
