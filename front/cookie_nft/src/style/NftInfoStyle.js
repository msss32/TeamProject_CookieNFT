import styled from "styled-components";

const NftInfoContainer = styled.div`
  display: flex;
`;

const NftName = styled.div`
  font-family: "CookieRun";
  font-size: 4rem;
  font-weight: 900;
`;

const OwendBox = styled.div`
  display: flex;
  align-items: center;
  font-family: "CookieRun";
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
`;

export { NftName, OwendBox, NftPrice, NftInfoContainer };
