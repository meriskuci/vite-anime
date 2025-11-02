import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 20px;
  padding-left: 270px; 
  padding-top: 100px; 
  background-color: #3d3c3a;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const AnimeImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
`;

export const InfoWrapper = styled.div`
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid white;
  cursor: pointer;
  background-color: #3d3c3a;
  color: white;
  font-weight: bold;

`;
