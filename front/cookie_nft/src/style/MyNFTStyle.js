import styled from "styled-components";

const NFTwrap = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;

    & > div {
        margin: 30px;
    }
    & > div > img:hover {
        cursor: pointer;
    }
`;

export { NFTwrap };
