import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  height: 10vh;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
`;

const MainLink = styled.div`
  width: 18vw;
  font-family: "CookieRun";
  font-weight: 700;
  font-size: 3vw;
  text-align: center;
  line-height: 10vh;
  &:hover {
    cursor: pointer;
  }
`;

const MenuWrap = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-around;
  & > div {
    font-family: "CookieRun";
    font-weight: 400;
    font-size: 2vw;
    text-align: center;
    line-height: 10vh;
  }
  & > div:hover {
    cursor: pointer;
  }
`;

export { HeaderWrap, MainLink, MenuWrap };
