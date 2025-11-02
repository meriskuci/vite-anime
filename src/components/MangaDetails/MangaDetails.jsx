import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMangaById } from "../../services/animeService";
import { DetailsContainer, AnimeImage, Title, Description, Button, ContentWrapper, InfoWrapper } from "../AnimeDetails/AnimeDetails.styles";

export const MangaDetails = () => {
    const { id } = useParams();
    const [manga, setManga] = useState(null);

     const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    
    const newItem = {
        id: manga.id, 
        title: manga.attributes.canonicalTitle, 
        image: manga.attributes.posterImage.small, 
        type: "manga" 
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
            const data = await getMangaById(id);
            setManga(data);
        };
        fetch();
    }, [id]);

    if (!manga) return <DetailsContainer>Loading...</DetailsContainer>

    return (
        <DetailsContainer>
            <ContentWrapper>
                <AnimeImage src={manga.attributes.posterImage.large} alt={manga.attributes.canonicalTitle} />
                <InfoWrapper>
                    <Title>{manga.attributes.canonicalTitle}</Title>
                    <Description>{manga.attributes.description}</Description>
                    <Button onClick={handleAddToFavorites}>Add to Favorites</Button>
                </InfoWrapper>
            </ContentWrapper>
        </DetailsContainer>

    )

}