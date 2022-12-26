// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract CookieToken is ERC20 {
    string public _name = "CookieToken";
    string public _symbol = "CTK";
    uint private _totalSupply = 10000 * (10 ** decimals());
    
    constructor() ERC20(_name, _symbol) {
    }

    function mintEther(address minter, uint amount) public payable {
        require(totalSupply() <= _totalSupply);
        _mint(minter, amount); 
    }
    function tokenBurn(address burner, uint amount) public {
        _burn(burner, amount);
    }
}