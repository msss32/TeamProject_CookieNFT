// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "./CookieToken.sol";

contract EthSwap {
    CookieToken public token;
    uint public rate = 100;

    constructor(CookieToken _token) {
        token = _token;
    }

    function getToken() public view returns (address) {
        return address(token);
    }

    function getSwapBalance() public view returns(uint) {
        return token.balanceOf(msg.sender);
    } 

    function getMsgSender() public view returns(address) {
        return msg.sender;
    }

    // 토큰 구매 함수
    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;
        token.mintEther(msg.sender, tokenAmount);
    }

    // 토큰 판매 함수
    function sellToken(uint256 tokenAmount) public payable {
        require(token.balanceOf(msg.sender) >= tokenAmount);
        uint256 etherAmount = tokenAmount/rate;
        require(address(this).balance >= etherAmount);
        token.tokenBurn(msg.sender, tokenAmount);
        payable(msg.sender).transfer(etherAmount);
    }
}