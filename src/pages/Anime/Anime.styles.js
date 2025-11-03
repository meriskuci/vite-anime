import styled from "styled-components";

export const AnimeContainer = styled.div`
    padding: 20px;
    padding-left: 270px; 
    padding-top: 100px; 
    background-color: #3d3c3a;
    min-height: 100vh;
    color: white;   
    box-sizing: border-box;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap; 
    gap: 15px;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 180px;
    
`;



export const CategorySelect = styled.select`
    padding: 10px 14px;
    border-radius: 8px;
    border: none;
    background-color: #4a4846;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    width: 600px;
    height: 45px;
    

    &:focus {
        outline: none;
       
    }

    option {
        background-color: #5a5957;
        color: white;
    }
`;

export const SearchBar = styled.input`
    padding: 6px 10px; 
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-color: white;
    width: 170px;
    height: 30px;
   
  
    background-color: #5a5957;
    &:focus {
        outline: none;
        
    }
`;

export const AnimeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const AnimeCard = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Overlay efekat */
  .overlay {
    position: absolute;
    inset: 0; /* isto kao top: 0; left: 0; right: 0; bottom: 0 */
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 10px;
  }

  &:hover .overlay {
    opacity: 1;
  }

  p {
    margin: 0;
    font-size: 16px;
    text-align: center;
  }
`;
