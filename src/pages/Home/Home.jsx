import { useNavigate } from "react-router-dom"
import { getAnimeByCategory, getMangaByCategory, getTrendingAnime } from "../../services/animeService";
import { HomeContainer, Section, HeroCarousel, CarouselItem, HorizontalScroll, SectionTitle, CarouselNavButton, HeroImage } from "./Home.styles";
import { useState, useEffect } from "react";


export const Home = () => {
    const [trendingAnime, setTrendingAnime] = useState([]);
    const [adventureAnime, setAdventureAnime] = useState([]);
    const [romanceAnime, setRomanceAnime] = useState([]);
    const [horrorAnime, setHorrorAnime] = useState([]);
    const [adventureManga, setAdventureManga] = useState([]);
    const [actionManga, setActionManga] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setTrendingAnime(await getTrendingAnime());
            setAdventureAnime(await getAnimeByCategory("Adventure"));
            setRomanceAnime(await getAnimeByCategory("Romance"));
            setHorrorAnime(await getAnimeByCategory("Horror"));
            setAdventureManga(await getMangaByCategory("Adventure Manga"));
            setActionManga(await getMangaByCategory("Action Manga"));
        };

        fetchData();
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? trendingAnime.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === trendingAnime.length - 1 ? 0 : prev + 1));
    }

    return (
        <HomeContainer>
            <Section>
                {trendingAnime.length > 0 && (
                    <HeroCarousel>
                        <CarouselNavButton onClick={prevSlide}>&lt;</CarouselNavButton>
                        <HeroImage
                            src={trendingAnime[currentSlide].attributes.posterImage.large}
                            alt={trendingAnime[currentSlide].attributes.canonicalTitle}
                            onClick={() => navigate(`/anime/${trendingAnime[currentSlide].id}`)}
                        />
                        <CarouselNavButton onClick={nextSlide}>&gt;</CarouselNavButton>
                    </HeroCarousel>
                )}
            </Section>

            {/* Adventure kategorija */}
            <Section>
                <SectionTitle>Adventure</SectionTitle>
                <HorizontalScroll>
                    {adventureAnime.map((anime) => (
                        <CarouselItem
                            key={anime.id}
                            onClick={() => navigate(`/anime/${anime.id}`)}
                        >
                            <img
                                src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </CarouselItem>
                    ))}
                </HorizontalScroll>
            </Section>

            {/* Romance kategorija */}

            <Section>
                <SectionTitle>Romance</SectionTitle>
                <HorizontalScroll>
                    {romanceAnime.map((anime) => (
                        <CarouselItem
                            key={anime.id}
                            onClick={() => navigate(`/anime/${anime.id}`)}
                        >
                            <img
                                src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </CarouselItem>
                    ))}
                </HorizontalScroll>
            </Section>

            {/* Horror kategorija */}
            <Section>
                <SectionTitle>Horror</SectionTitle>
                <HorizontalScroll>
                    {horrorAnime.map((anime) => (
                        <CarouselItem
                            key={anime.id}
                            onClick={() => navigate(`/anime/${anime.id}`)}
                        >
                            <img
                                src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </CarouselItem>
                    ))}
                </HorizontalScroll>
            </Section>

            {/* Adventure Manga */}

            <Section>
                <SectionTitle>Adventure Manga</SectionTitle>
                <HorizontalScroll>
                    {adventureManga.map((manga) => (
                        <CarouselItem
                            key={manga.id}
                            onClick={() => navigate(`/anime/${manga.id}`)}
                        >
                            <img
                                src={manga.attributes.posterImage.small}
                                alt={manga.attributes.canonicalTitle}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </CarouselItem>
                    ))}
                </HorizontalScroll>
            </Section>

            {/* Action Manga */}
            <Section>
                <SectionTitle>Action Manga</SectionTitle>
                <HorizontalScroll>
                    {actionManga.map((manga) => (
                        <CarouselItem
                            key={manga.id}
                            onClick={() => navigate(`/anime/${manga.id}`)}
                        >
                            <img
                                src={manga.attributes.posterImage.small}
                                alt={manga.attributes.canonicalTitle}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </CarouselItem>
                    ))}
                </HorizontalScroll>
            </Section>

        </HomeContainer>
    )
}