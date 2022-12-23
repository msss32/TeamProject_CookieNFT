import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #f9cf93;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 88.5vw;
    margin: auto;
  }
`;

const MainLink = styled.div`
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
  justify-content: flex-end;
  & > div {
    font-family: "CookieRun";
    font-weight: 400;
    font-size: 2vw;
    text-align: center;
    line-height: 10vh;
    margin-left: 3.5vw;
  }
  & > div:hover {
    cursor: pointer;
  }
`;

export { HeaderWrap, MainLink, MenuWrap };
