import styled from "styled-components";

export const SidebarContainer = styled.nav`
    width: 200px;
    height: 100vh;
    background-color: #3d3c3a;
    position: fixed;
    top: 60px;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`

export const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`
export const NavItem = styled.li`
    width: 100%;
    padding: 20px;
`
export const NavLinkStyled = styled.a`
    text-decoration: none;
    color: white;
    padding: 10px 10px;
    font-weight: 500;


    &:hover{
        color: grey;
    }
`