import styled from "styled-components";

const NftInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5em;
    margin: 1em;
`;

const NftName = styled.div`
    font-family: "CookieRun";
    font-size: 4rem;
    font-weight: 900;
    margin-top: 10vh;
`;

const OwendBox = styled.div`
    display: flex;
    align-items: center;
    font-family: "CookieRun";
    position: relative;
    left: 17em;

    div {
        :first-child {
            margin-right: 0.3vw;
        }
        :last-child {
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
`;

const NftPrice = styled.div`
    font-family: "CookieRun";
    font-weight: 700;
    font-size: 3rem;
    text-align: right;
    margin-top: 5vh;
`;

export { NftName, OwendBox, NftPrice, NftInfoContainer };
