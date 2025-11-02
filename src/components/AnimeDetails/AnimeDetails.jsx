import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAnimeById } from "../../services/animeService";
import { DetailsContainer, AnimeImage, Title, Description, Button, ContentWrapper, InfoWrapper } from "./AnimeDetails.styles";

export const AnimeDetails = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

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
                    <Button>Add to Favorites</Button>
                </InfoWrapper>
            </ContentWrapper>
        </DetailsContainer>

    )

}