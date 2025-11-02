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

export const CategoryLabel = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    color: #fff;
`;

export const CategorySelect = styled.select`
    padding: 10px 14px;
    border-radius: 8px;
    border: none;
    background-color: #4a4846;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    width: 100%;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ff6f61;
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
    width: 200px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ff6f61;
    }
`;

export const AnimeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const AnimeCard = styled.div`
    flex: 0 0 22%;
    cursor: pointer;
    text-align: center;
    background-color: #4a4846;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    p {
        margin: 10px 0;
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
`;
