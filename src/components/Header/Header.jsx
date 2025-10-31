import logo from "../../assets/images/fuji-logo.b2e177cb35db12ecb859.png"
import { HeaderContainer, LogoImage, LogoText } from "./Header.styles";

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoImage src={logo} alt="Logo" />
            <LogoText>Anime App</LogoText>
        </HeaderContainer>
    );
};