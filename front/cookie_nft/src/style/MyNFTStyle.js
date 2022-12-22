import styled from "styled-components";

const MyNFTwrap = styled.div`
    width: 88.5vw;
    margin: auto;
    font-family: "CookieRun";
    font-weight: 400;
`;

const NFTwrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & > div {
        margin: auto;
    }
    & > div > img {
        transition: all 0.3s ease-in-out;
        margin-top: 2vh;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`;

export { NFTwrap, MyNFTwrap };
