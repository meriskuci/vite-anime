import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background-color: #3d3c3a;
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`

export const LogoImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`

export const LogoText = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
`