// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract CookieToken is ERC20 {
    string public _name = "CookieToken";
    string public _symbol = "CTK";
    uint private _totalSupply = 10000 * (10 ** decimals());
    
    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, _totalSupply);
    }
    function mintEther(address minter, uint amount) public{
        // 이 방식이 되면 총 공급량을 넘어서도 발행이 가능
        // 1. 배포자의 계정에 10000개를 넣어주고 배포자의 계정에서 빼는 방식
        // 2. 10000개를 넘지 않게 발행조건을 걸고 토큰 스왑을 요청 할때마다 발행 (유통량을 확인하는 함수가 필요할듯)
        _mint(minter, amount);
    }
    function totalSupply() public override view returns (uint) {
        return _totalSupply;
    }
    function tokenBurn(address burner, uint amount) public {
        _burn(burner, amount);
    }
}