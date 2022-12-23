// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract CookieToken is ERC20 {
    string public _name = "CookieToken";
    string public _symbol = "CTK";
    uint private _totalSupply = 10000 * (10 ** decimals());
    
    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, _totalSupply);
    }
    function mintEther(address minter, uint amount) public payable{
        _mint(minter, amount);
    }
    function totalSupply() public override view returns (uint) {
        return _totalSupply;
    }
    function tokenBurn(address burner, uint amount) public {
        _burn(burner, amount);
    }
}