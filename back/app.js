const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
const { sequelize } = require("./sequelize");

const app = express;

// sequelize 연결 및 테이블 생성
sequelize
    .sync({ force: false }) // 초기화 여부
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log(error);
    });

// 리액트 포트 연결
const options = { origin: "http://localhost:3000" };
app.use(cors(options));
app.use(express.json());

// web3 생성 및 연결
const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:9005"));

// 서버 포트 연결
app.listen(4000, () => {
    console.log("4000번 포트 연결")
})