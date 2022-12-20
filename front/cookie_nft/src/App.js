import React from "react";
import "./App.css";
import { Main, MyNFT, Mint, Sell } from "./pages";
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
                <Route path="/sell" element={<Sell />} />
            </Routes>
        </>
    );
}

export default App;
