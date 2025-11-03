import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #3d3c3a;
  color: white;
 padding: 20px 40px 40px 40px; /* donji padding 40px */
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* razmak između logo i teksta */
  margin-right: 50px;
  transform: translateY(-19px); 
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const LogoText = styled.span`
  font-weight: bold;
  font-size: 27px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  transform: translateY(-19px); 

  a {
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
      color: #f0a500;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 17px;
  border-top: 1px solid #e42b97ff;
  padding-top: 20px;
  margin-top: 30px;
`;