import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export const Zone = styled.div`
    height: 100%;
    width: ${props => props.width}%;
    border: 1px solid green;
    box-sizing: border-box;
`;