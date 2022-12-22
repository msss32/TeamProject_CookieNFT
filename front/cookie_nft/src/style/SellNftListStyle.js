import styled from "styled-components";

const SellBox = styled.div`
  display: flex;
  /* margin: auto; */
`;

const SellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  background-color: #ffffff;
  box-shadow: 0.2vw 0.1vh 1vw #c6c6c6;
  border-radius: 10%;
  padding: 3vh 0;
  margin-right: 2vw;
`;

const SellTextBox = styled.div`
  text-align: center;
`;

const SellNftName = styled.div`
  font-family: "CookieRun";
  font-size: 1.5rem;
  font-weight: 900;
`;

const SellNftPrice = styled.div`
  font-family: "CookieRun";
  font-size: 0.8rem;
  font-weight: 600;
`;

export { SellBox, SellContainer, SellNftName, SellNftPrice, SellTextBox };
