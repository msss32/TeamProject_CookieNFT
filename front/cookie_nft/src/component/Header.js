import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderWrap, MainLink, MenuWrap } from "../style/HeaderStyle";

const Header = () => {
    const nav = useNavigate();
    return (
        <HeaderWrap>
            <MainLink onClick={() => nav("/")}>Cookie NFT</MainLink>
            <MenuWrap>
                <div onClick={() => nav("/mynft")}>내 토큰 보기</div>
                <div onClick={() => nav("/mint")}>뽑기 minting</div>
                <div onClick={() => nav("/sell")}>판매 등록</div>
            </MenuWrap>
        </HeaderWrap>
    );
};

export default Header;
