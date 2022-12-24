// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


import "openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// 상속만 받으면 배포 진행할 때 owner 상태 변수에 컨트랙트 배포자의 EOA 계정이 담긴다.
// ERC721에서는 owner가 제일 중요!!
import "openzeppelin-solidity/contracts/access/Ownable.sol";

import "./EthSwap.sol";
import "./CookieToken.sol";

// 테스트 할 때 쿠키토큰 컨트랙트부터 하나씩 배포하면서 CA를 복사해서 넣어주면서 minting까지 오기!

contract NFTminting is ERC721Enumerable, Ownable {

    // EthSwap 컨트랙트와 상호작용할 상태변수
    EthSwap public TokenSwap;

    // CookieToken 컨트랙트와 상호작용할 상태변수
    CookieToken public cookieT;

    // NFT 발행량을 제한할 상태변수
    uint constant public MAX_NFT_COUNT = 30;

    // 상태변수인 mint_price는 NFT 민팅시 지불할 CTK(민팅의 가격을 나타내주는 상태변수)
    uint public mint_price = 100;

    // 쿠키카드 등급
    uint public Common = 1;
    uint public Magic = 6;
    uint public Rare = 11;
    uint public Unique = 16;
    uint public Epic = 21;
    uint public Legendary = 26;

    
    // 메타데이터의 uri를 받아올 상태변수
    string public metadataURI;

    // 배포 단계에 상호작용을 하기위해 NftToken의 CA를 매개변수로 받아서 전달
    // 토큰의 이름과 단위는 정해주고 uri만 매개변수로 받아서 전달!
    constructor(address _swapAddress, address _tokenAddress, string memory _metadataURI) ERC721("cooken", "COK") {
        TokenSwap = EthSwap(_swapAddress);
        cookieT = CookieToken(_tokenAddress);
        metadataURI = _metadataURI;
    }


    // 민팅 함수
    function cookieMint() public payable {
        // 본인의 계좌 잔액이 mint price 보다 클 때
        require(msg.value >= mint_price,"money soldout");
        // 총 발행량이 민팅한 nft양이랑 같거나 작을 때
        require(MAX_NFT_COUNT <= ERC721Enumerable.totalSupply());

        uint tokenId = ERC721Enumerable.totalSupply() + 1;

        getRandomTokenData(msg.sender, tokenId);

        // uint price = TokenSwap.getSwapBalance() - mint_price;

        // uint ownerWallet = "0xdeofsdkaflkejoqrdsfknklcxzv" + mint_price;
    }


    // 랜덤함수 정의
    function getRandomTokenData(address _owner, uint _tokenId) public {
        // 솔리디티에서는 랜덤함수가 없기 때문에 특정한 값을 해싱해서 나머지 연산으로 랜덤을 구해야한다.

        // abi.encodePacked(_owner, _tokenId); // 타입과 상관없이 합쳐주는 메서드
        uint randomNum = uint(keccak256(abi.encodePacked(_owner, _tokenId))) % 999;
        // 위의 방법이 솔리디티에서 랜덤 값을 구하는 방법
        // keccak256() 함수는 문자를 32byte로 변환해준다.

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
    
    // _allTokens 함수를 사용해서 소유자가 있는 nft를 구분해줌
    // 민팅된 NFT와 NFT의 아이디를 비교해서 민팅이 된건지 아닌지 판별해줌
    // 함수명에 is를 붙이면 통상적으로 return 값이 bool 형태로 반환해주는 것이라고 생각하면 된다.
    function isExist(uint _checkTokenId) public view returns (bool) {
        // totalSupply()는 민팅된 nft의 length가 나온다
        uint allToken = totalSupply();
        for (uint256 idx = 0; idx < allToken; idx++) {
            // tokenByIndex() : allTokens함수를 꺼내 쓸 수 있는 public 함수
            if(tokenByIndex(idx) == _checkTokenId) return true;
        }
        return false;
    }

    
}