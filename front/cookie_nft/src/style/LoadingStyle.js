import styled, { keyframes } from "styled-components";

const rainbow = keyframes`
0% {
    color: black;
}
14% {
    color: red;
}
28% {
    color: orange;
}
42% {
    color: yellow;
}
56% {
    color: green;
}
70% {
    color: blue;
}
84% {
    color: navy;
}
100% {
    color: purple;
}
`;

const fading = keyframes`
0% {
    color: black;
}
50% {
    color: white;
}
100% {
    color: black;
}
`;

export const LoadingWrap_div = styled.div`
    font-family: "CookieRun";
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImgWrap_div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & > h1 {
        text-align: center;
        font-size: 3em;
    }
    & > h1 > span {
        animation: ${rainbow} 1.5s infinite linear;
    }
`;

export const Loading_img = styled.img``;

export const LoadingText_div = styled.div`
    font-size: 5em;
    text-align: center;
    animation: ${fading} 2s infinite linear;
`;
