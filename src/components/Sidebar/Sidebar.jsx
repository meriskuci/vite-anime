import { Link } from "react-router-dom"
import { SidebarContainer, NavList, NavItem, NavLinkStyled } from "./Sidebar.styles"


export const Sidebar = () => {
    return(
        <SidebarContainer>
            <NavList>
                <NavItem>
                    <NavLinkStyled as={Link} to="/">Home</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled as={Link} to="/anime">Anime</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled as={Link} to="/manga">Manga</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled as={Link} to="/about">About Us</NavLinkStyled>
                </NavItem>
                <NavItem>
                    <NavLinkStyled as={Link} to="/favorites">Favorites</NavLinkStyled>
                </NavItem>
            </NavList>
        </SidebarContainer>
    )
}