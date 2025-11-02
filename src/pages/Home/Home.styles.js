import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #3d3c3a;
  padding: 20px;
  min-height: 100vh;
  color: white;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 220px; 
`;

export const HeroCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  margin-bottom: 40px;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 10px;
  cursor: pointer;
  padding-left: 10%;
`;

export const CarouselNavButton = styled.button`
  position: absolute;  
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0,0,0,0.8);
  }

  
  &:first-of-type {
    left: 10%;   /* levo dugme */
  }

  &:last-of-type {
    right: 2%;  /* desno dugme*/
  }
`;

export const CarouselItem = styled.div`
  min-width: 150px; 
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 0 20px 10px 220px; 
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #252424ff;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #3d3c3a;
  }
`;
