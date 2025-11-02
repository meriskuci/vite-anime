import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimeContainer, AnimeList, AnimeCard } from "../Anime/Anime.styles"
import { Header, RemoveButton } from "./Favorites.styles";


export const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    const handleClick = (item) => {
        navigate(`/${item.type}/${item.id}`);
    };

    const handleRemove = (id) => {
        const updated = favorites.filter(item => item.id !== id);
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    return (
        <AnimeContainer>
            <Header>Favorites</Header>

            {favorites.length === 0 ? (
                <p style={{ color: "white" }}>No favorites yet.</p>
            ) : (
                <AnimeList>
                    {favorites.map((item, index) => (
                        <AnimeCard key={`${item.id}-${index}`}>
                            <img
                                src={item.image}
                                alt={item.title}
                                onClick={() => handleClick(item)}
                                style={{ cursor: "pointer" }}
                            />
                            <p>{item.title}</p>
                            <RemoveButton onClick={() => handleRemove(item.id)}>
                                Remove
                            </RemoveButton>
                        </AnimeCard>
                    ))}
                </AnimeList>
            )}
        </AnimeContainer>
    );
};
