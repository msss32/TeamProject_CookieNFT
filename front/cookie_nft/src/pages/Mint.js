import React, { useEffect, useRef, useState } from "react";
import CardPick from "../component/CardPick";
import "../style/MintCss.css";
import { ETH_SWAP, MINT_NFT } from "../web3.config";

const Mint = ({ web3, account }) => {
  const cardPickRef = useRef();
  const cardPick = () => {
    cardPickRef.current.cardPick();
  };

  const [deployed, setDeployed] = useState();
  const [CA, setCA] = useState();

  const [token, setToken] = useState(0);

  const [tokenCount, setTokenCount] = useState(0);
  const [ethCount, setEthCount] = useState(0);

  const [swapToken, setSwapToken] = useState(0);
  const [swapEth, setSwapEth] = useState(0);

  const [buySwapSell, setBuySwapSell] = useState(true);

  // console.log(props.account);

  /**토큰 구매함수 */
  const contractBuyToken = async () => {
    await ETH_SWAP.methods.buyToken().send({
      from: account, // msg.sender
      value: web3.utils.toWei(tokenCount, "ether"), // 교환할 돈
    });
  };

  /**토큰 판매함수 */
  const contractSellToken = async () => {
    await ETH_SWAP.methods.sellToken(ethCount).send({
      from: account, // msg.sender
      value: ethCount, // 교환할 돈
    });
  };

  /**카드 뽑기 함수 */
  const cardMinting = async () => {
    await MINT_NFT.methods.cookieMint().send({
      from: account,
    });
  };

  // console.log(MINT_NFT);

  const swapTokenCount = function (e) {
    setTokenCount(e.target.value);
  };

  const swapEthCount = function (e) {
    setEthCount(e.target.value);
  };

  useEffect(() => {
    setSwapToken(tokenCount * 100);
  }, [tokenCount]);

  useEffect(() => {
    setSwapEth(ethCount / 100);
  }, [ethCount]);

  const buySellSwap = function () {
    if (buySwapSell === true) {
      setBuySwapSell(false);
      setTokenCount(0);
      setEthCount(0);
    } else {
      setBuySwapSell(true);
      setTokenCount(0);
      setEthCount(0);
    }
  };

  return (
    <>
      <div style={{ width: "88.5vw", margin: "auto" }}>
        <div className="mintPage">
          <div className="ownToken">보유 토큰 : {token}</div>
          <button className="cardPickBtnMain third" onClick={cardMinting}>
            카드 뽑기
          </button>
        </div>
        {buySwapSell ? (
          <>
            <div className="buyToken">
              <button className="tokenSwap third" onClick={contractBuyToken}>
                토큰 구매
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <input type="text" placeholder="Giv me ur Ether" onChange={swapTokenCount} className="tokenInput" style={{ textAlign: "center" }} />
              <div style={{ fontFamily: "CookieRun", fontSize: "35px" }}>ETH</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div className="hoverImg">
                <img src="image/exchange.png" alt="교환아이콘" width={"55px"} onClick={buySellSwap} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "35px",
                fontFamily: "CookieRun",
                gap: "55px",
              }}
            >
              <img src="image/braveCookie.png" alt="쿠키아이콘" width={"55px"} />
              {swapToken} Token
            </div>
          </>
        ) : (
          <>
            <div className="buyToken">
              <button className="tokenSwap third" onClick={contractSellToken}>
                토큰 판매
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "35px",
                fontFamily: "CookieRun",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <img src="image/braveCookie.png" alt="쿠키아이콘" width={"55px"} />
              <input type="text" placeholder="Giv me ur CTK" onChange={swapEthCount} className="tokenInput" style={{ textAlign: "center" }} />
              Token
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div className="hoverImg">
                <img src="image/exchange.png" alt="교환아이콘" width={"55px"} onClick={buySellSwap} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div style={{ fontFamily: "CookieRun", fontSize: "35px" }}>{swapEth} ETH</div>
            </div>
          </>
        )}
        <CardPick ref={cardPickRef} />
      </div>
    </>
  );
};

export default Mint;
