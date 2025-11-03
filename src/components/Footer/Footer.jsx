import logo from "../../assets/images/fuji-logo.b2e177cb35db12ecb859.png";
import {
  FooterContainer,
  FooterTop,
  FooterBrand,
  LogoImage,
  LogoText,
  FooterLinks,
  FooterBottom
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterBrand>
          <LogoImage src={logo} alt="Logo" />
          <LogoText>Anime App</LogoText>
        </FooterBrand>
       

        <FooterLinks>
          <a href="/">Home</a>
          <a href="/anime">Anime</a>
          <a href="/manga">Manga</a>
          <a href="/about">About Us</a>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        © 2022 Flowbite™. All Rights Reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;