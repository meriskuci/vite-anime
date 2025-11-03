import styled from "styled-components";

export const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
  color: white;
  
`;

export const EmptyMessage = styled.h1`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RemoveButton = styled.button`
  background: none;      
  border: none;        
  color: white;         
  padding: 0;       
  font: inherit;        
  cursor: pointer;       
  text-decoration: none; 

  &:hover {
    color: #ffffffff;      
  }
`;