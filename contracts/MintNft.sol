// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// 상속만 받으면 배포 진행할 때 owner 상태 변수에 컨트랙트 배포자의 EOA 계정이 담긴다.
// ERC721에서는 owner가 제일 중요!!
import "@openzeppelin/contracts/access/Ownable.sol";

import "./cookieToken.sol";

contract NFTminting is ERC721Enumerable, Ownable {
    // NFT 발행량을 제한할 상태변수
    uint constant public MAX_NFT_COUNT = 30;

    // cookieToken 컨트랙트와 상호작용할 상태변수
    cookieToken public Ctoken;

    // 메타데이터의 uri를 받아올 상태변수
    string public metadataURI;

    // 배포 단계에 상호작용을 하기위해 NftToken의 CA를 매개변수로 받아서 전달
    // 토큰의 이름과 단위는 정해주고 uri만 매개변수로 받아서 전달!
    constructor(address _tokenAddress, string memory _metadataURI) ERC721("cooken", "COK") {
        Ctoken = cookieToken(_tokenAddress);
        metadataURI = _metadataURI;
    }

    // 랜덤함수 정의
    // function getRandomTokenData

    // uint randomNum = uint(keccak256(abi.encodePacked(_owner, _tokenId))) % 100;
    
    // _allTokens 함수를 사용해서 소유자가 있는 nft를 구분해줌
    // 민팅된 NFT와 NFT의 아이디를 비교해서 민팅이 된건지 아닌지 판별해줌
    // 함수명에 is를 붙이면 통상적으로 return 값이 bool 형태로 반환해주는 것이라고 생각하면 된다.
        function isExist(uint checkTokenId) public view returns (bool) {
        // totalSupply()는 민팅된 nft의 length가 나온다
        uint allToken = totalSupply();
        for (uint256 idx = 0; idx < allToken; idx++) {
            // tokenByIndex() : allTokens함수를 꺼내 쓸 수 있는 public 함수
            if(tokenByIndex(idx) == checkTokenId) return true;
        }
        return false;
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }


    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}