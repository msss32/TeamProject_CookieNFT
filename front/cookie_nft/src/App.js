import React, { useEffect, useState } from "react";
import "./App.css";
import { Main, MyNFT, Mint, NftInfo } from "./pages";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Web3 from "web3/dist/web3.min.js";
// import CookieTokenContract from "./contracts/CookieToken.json";
import EthSwapContract from "./contracts/EthSwap.json"; //
import MintNFTcontract from "./contracts/MintNft.json"; //

function App() {
    const [swapInstance, setSwapInstance] = useState(); //
    const [mintNFTinstance, setMintNFTinstance] = useState();

    const web3 = new Web3(window.ethereum);

    useEffect(() => {
        (async () => {
            const swapDeployed = await new web3.eth.Contract( //
                EthSwapContract.abi, //
                EthSwapContract.networks[5].address //
            );
            const mintDeployed = await new web3.eth.Contract(
                MintNFTcontract.abi,
                MintNFTcontract.networks[5].address
            );

            setSwapInstance(swapDeployed); //
            setMintNFTinstance(mintDeployed);
            console.log(swapInstance); //
            console.log(mintNFTinstance);
        })();
    }, []);

    /* 
const login = async () => {
    try {
      const [_accounts] = await getAccounts();
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const CA = MintNFT.networks[networkId].address;
      const _abi = MintNFT.abi;
      const Deployed = await new web3.eth.Contract(_abi, CA);
      const count = await Deployed.methods.getTokenCount().call();
      const getOwnerBalance = await web3.eth.getBalance(_accounts);
      if (_accounts) setIsLogin(true);
      // let tokenURI = [];
      // for (let i = 1; i < 60; i++) {
      //   let a = await Deployed.methods.tokenURI(i).call();
      //   tokenURI.push(a);
      // }
      // setTokenURI(tokenURI);
      setCA(CA);
      setABI(_abi);
      setDeployed(Deployed);
      setWeb3(web3);
      setCount(count);
      setGetBalance(getOwnerBalance);
    } catch (err) {
      console.log(err);
    }
  };
*/
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path="/mynft" element={<MyNFT />} />
                <Route path="/mint" element={<Mint />} />
                <Route path="/NftInfo" element={<NftInfo />} />
            </Routes>
        </>
    );
}

export default App;
