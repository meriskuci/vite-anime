import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAnimeById } from "../../services/animeService";
import { DetailsContainer, AnimeImage, Title, Description, Button, ContentWrapper, InfoWrapper } from "./AnimeDetails.styles";

export const AnimeDetails = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    
    const newItem = {
        id: anime.id, 
        title: anime.attributes.canonicalTitle, 
        image: anime.attributes.posterImage.small, 
        type: "anime" 
    };

    const exists = favorites.some(item => item.id === newItem.id && item.type === newItem.type);
    if (!exists) {
        favorites.push(newItem);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        console.log(`${newItem.title} added to favorites!`);
    } else {
        console.log(`${newItem.title} is already in favorites!`);
    }
};

    useEffect(() => {
        const fetch = async () => {
            const data = await getAnimeById(id);
            setAnime(data);
        };
        fetch();
    }, [id]);

    if (!anime) return <DetailsContainer>Loading...</DetailsContainer>

    return (
        <DetailsContainer>
            <ContentWrapper>
                <AnimeImage src={anime.attributes.posterImage.large} alt={anime.attributes.canonicalTitle} />
                <InfoWrapper>
                    <Title>{anime.attributes.canonicalTitle}</Title>
                    <Description>{anime.attributes.description}</Description>
                    <Button onClick={handleAddToFavorites}>Add to Favorites</Button>
                </InfoWrapper>
            </ContentWrapper>
        </DetailsContainer>

    )

}