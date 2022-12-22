import React from "react";
import "./App.css";
import { Main, MyNFT, Mint, NftInfo } from "./pages";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";

function App() {
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
