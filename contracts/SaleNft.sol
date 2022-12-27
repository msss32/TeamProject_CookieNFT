// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import "openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./MintNft.sol";
import "./CookieToken.sol";

contract SaleNft {
    MintNft public minting;
    CookieToken public cookieT;

    constructor(address _tokenAddress, address _mintAddress) {
        cookieT = CookieToken(_tokenAddress);
        minting = MintNft(_mintAddress);
    }

    // 판매중인 NFT의 토큰 아이디 값들을 담아놓은 상태변수
    uint[] public SellNftList;

    // token의 아이디 => price(토큰의 가격)
    mapping (uint => uint) public nftPrices;

    struct CookieCard {
        uint nftId;
        uint price;
    }


    // nft 판매 등록 함수
    function sellNft(uint _nftId, uint _price) public {
        address nftOwner = minting.ownerOf(_nftId);
        require(nftOwner == msg.sender);
        require(0 < _price);
        // 여기는 앞단에서 처리하기
        // minting.setApprovalForAll(address(this), true);
        require(minting.isApprovedForAll(msg.sender, address(this)));
        nftPrices[_nftId] = _price * (10 ** 18);
        SellNftList.push(_nftId);
    }

    // nft 구매 함수
    function buyNft(uint _nftId) public {
        address nftOwner = minting.ownerOf(_nftId); // 토큰 소유자 계정
        require(nftOwner != msg.sender);
        require(nftPrices[_nftId] > 0);
        require(nftPrices[_nftId] <= cookieT.balanceOf(nftOwner));
        cookieT.mintNFT(msg.sender,nftOwner,nftPrices[_nftId]);
        // cookieT.transferFrom(msg.sender, nftOwner, nftPrices[_nftId]);
        minting.safeTransferFrom(nftOwner, msg.sender, _nftId);
        nftPrices[_nftId] = 0;
        removeNftList(_nftId);
    }

    // 판매 리스트 제거 함수
    function removeNftList(uint _nftId) private returns(bool) {
        for(uint256 i = 0; i < SellNftList.length; i++){
            if(SellNftList[i] == _nftId){
                SellNftList[i] = SellNftList[SellNftList.length -1];
                SellNftList.pop();
                return true;
            }
        }
            return false;
    }

    // 판매 리스트 확인 함수
    function getSellNftList() public view returns (uint[] memory) {
        return SellNftList;
    }
}