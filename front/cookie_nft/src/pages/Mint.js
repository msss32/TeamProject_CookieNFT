import React, { useEffect, useRef, useState } from "react";
import CardPick from "../component/CardPick";
import "../style/MintCss.css";
import { ETH_SWAP } from "../web3.config";
import Loading from "../component/Loading";

const Mint = ({ web3, account }) => {
    const cardPickRef = useRef();
    const cardPick = () => {
        cardPickRef.current.cardPick();
    };

    // 로딩페이지 활성화 변수
    const [loading, setLoading] = useState(false);

    const [token, setToken] = useState(0);

    const [tokenCount, setTokenCount] = useState(0);
    const [ethCount, setEthCount] = useState(0);

    const [swapToken, setSwapToken] = useState(0);
    const [swapEth, setSwapEth] = useState(0);

    const [buySwapSell, setBuySwapSell] = useState(true);

    // console.log(props.account);

    const contractBuyToken = async () => {
        setLoading(true);
        await ETH_SWAP.methods.buyToken().send({
            from: account, // msg.sender
            value: web3.utils.toWei(tokenCount, "ether"), // 교환할 돈
        });
        setLoading(false);
    };

    const contractSellToken = async () => {
        setLoading(true);
        await ETH_SWAP.methods.sellToken(ethCount).send({
            from: account, // msg.sender
            value: ethCount, // 교환할 돈
        });
        setLoading(false);
    };

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

    // const buyToken = async () => {
    //   await deployed.methods.buyToken().send({
    //     from: account,
    //     to: CA,
    //     value: web3.utils.toWei(tokenCount.toString(), "ether"),
    //   });
    //   const currentToken = await deployed.methods.getSwapBalance().call();
    //   setToken(currentToken);
    // };

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
            {loading ? <Loading /> : null}
            <div style={{ width: "88.5vw", margin: "auto" }}>
                <div className="mintPage">
                    <div className="ownToken">보유 토큰 : {token}</div>
                    <button className="cardPickBtnMain third" onClick={cardPick}>
                        카드 뽑기
                    </button>
                </div>
                {buySwapSell ? (
                    <>
                        <div className="buyToken">
                            <button
                                className="tokenSwap third"
                                onClick={contractBuyToken}
                            >
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
                            <input
                                type="text"
                                placeholder="Giv me ur Ether"
                                onChange={swapTokenCount}
                                className="tokenInput"
                                style={{ textAlign: "center" }}
                            />
                            <div style={{ fontFamily: "CookieRun", fontSize: "35px" }}>
                                ETH
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "30px",
                            }}
                        >
                            <div className="hoverImg">
                                <img
                                    src="image/exchange.png"
                                    alt="교환아이콘"
                                    width={"55px"}
                                    onClick={buySellSwap}
                                />
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
                            <img
                                src="image/braveCookie.png"
                                alt="쿠키아이콘"
                                width={"55px"}
                            />
                            {swapToken} Token
                        </div>
                    </>
                ) : (
                    <>
                        <div className="buyToken">
                            <button
                                className="tokenSwap third"
                                onClick={contractSellToken}
                            >
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
                            <img
                                src="image/braveCookie.png"
                                alt="쿠키아이콘"
                                width={"55px"}
                            />
                            <input
                                type="text"
                                placeholder="Giv me ur CTK"
                                onChange={swapEthCount}
                                className="tokenInput"
                                style={{ textAlign: "center" }}
                            />
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
                                <img
                                    src="image/exchange.png"
                                    alt="교환아이콘"
                                    width={"55px"}
                                    onClick={buySellSwap}
                                />
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
                            <div style={{ fontFamily: "CookieRun", fontSize: "35px" }}>
                                {swapEth} ETH
                            </div>
                        </div>
                    </>
                )}
                <CardPick ref={cardPickRef} />
            </div>
        </>
    );
};

export default Mint;
