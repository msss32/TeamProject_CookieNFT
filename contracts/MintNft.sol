// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
// import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./CookieToken.sol";

contract MintNft is ERC721Enumerable, Ownable {

    CookieToken public cookieT;

    uint constant public MAX_NFT_COUNT = 30;

    uint public mint_price = 10 * (10 ** 18);

    uint public Common = 1;
    uint public Magic = 6;
    uint public Rare = 11;
    uint public Unique = 16;
    uint public Epic = 21;
    uint public Legendary = 26;

    uint public randomNum;
    uint public randNonce;

    string public metadataURI;

    constructor(address _tokenAddress, string memory _metadataURI) ERC721("cooken", "COK") {
        cookieT = CookieToken(_tokenAddress);
        metadataURI = _metadataURI;
    }

    // 민팅 함수
    function cookieMint() public {
        require(MAX_NFT_COUNT >= totalSupply());
        require(cookieT.balanceOf(msg.sender) >= mint_price, "err");
        // cookieToken에 external함수로 만들어둠!
        cookieT.mintNFT(msg.sender,address(this),mint_price);

        getRandomTokenData(msg.sender);
    }

      // 랜덤함수 정의
    function getRandomTokenData(address _owner) internal {
        randNonce++;
        // uint randomNum = uint(keccak256(abi.encodePacked(_owner, randNonce))) % 1000;
        randomNum = uint(keccak256(abi.encodePacked(block.timestamp, _owner, randNonce))) % 1000;
        if( 995 <= randomNum ){
            _legendary();
        }
        else if(970 <= randomNum) {
            _epic();
        }
        else if(900 <= randomNum) {
            _unique();
        }
        else if( 800 <= randomNum) {
            _rare();
        }
        else if( 600 <= randomNum) {
            _magic();
        }
        else if( 0 <= randomNum) {
            _common();
        }
    }
    
    // 등급별 민팅된 쿠키카드 함수
    // 여기서 숫자가 더 올라가지 않으면 민팅 자체가 안되고 꽝 반환하게!
    function _legendary() private {
        require(Legendary <= 30, "Legendary sold out"); // 26~30
        _mint(msg.sender,Legendary);
        Legendary++;
    }
    function _epic() private {
        require(Epic <= 25,"Epic sold out"); // 21~25
        _mint(msg.sender,Epic);
        Epic++;
    }
    function _unique() private {
        require(Unique <= 20,"Unique sold out"); // 16~20
        _mint(msg.sender,Unique);
        Unique++;
    }
    function _rare() private {
        require(Rare <= 15,"Rare sold out"); // 10~15
        _mint(msg.sender,Rare);
        Rare++;
    }
    function _magic() private {
        require(Magic <= 10,"Magic sold out"); // 6~10
        _mint(msg.sender,Magic);
        Magic++;
    }
    function _common() private {
        require(Common <= 5,"Common sold out"); // 1~5
        _mint(msg.sender,Common);
        Common++;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory){
        string memory _tokenIdString = string(Strings.toString(_tokenId));
        return string(abi.encodePacked(metadataURI, "/",_tokenIdString, ".json"));
    }
}