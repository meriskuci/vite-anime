import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMangaById } from "../../services/animeService";
import { DetailsContainer, AnimeImage, Title, Description, Button, ContentWrapper, InfoWrapper } from "../AnimeDetails/AnimeDetails.styles";

export const MangaDetails = () => {
     const { id } = useParams();
    const [manga, setManga] = useState(null);

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
                    <Button>Add to Favorites</Button>
                </InfoWrapper>
            </ContentWrapper>
        </DetailsContainer>

    )

}