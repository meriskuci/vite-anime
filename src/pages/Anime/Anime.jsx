import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAnimeByCategory, getAnimeByName } from "../../services/animeService";
import { AnimeContainer, SearchContainer, SearchBar, CategorySelect, AnimeList, AnimeCard, CategoryWrapper, } from "./Anime.styles";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";

export const Anime = () => {
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const navigate = useNavigate();
    const loader = useRef(null);

    
    const fetchAnime = async (pageNum = 1, chosenCategory = "", searchTerm = "") => {
        if (loading) return;
        setLoading(true);

        let data = [];
        try {
            if (searchTerm) {
                data = await getAnimeByName(searchTerm, pageNum);
            } else {
                data = await getAnimeByCategory(chosenCategory, pageNum);
            }

            if (pageNum === 1) {
                setAnimeList(data);
            } else {
                
                const uniqueData = data.filter(d => !animeList.some(a => a.id === d.id));
                setAnimeList(prev => [...prev, ...uniqueData]);
            }

            setHasMore(data.length > 0);
        } catch (err) {
            console.error("Error fetching anime:", err);
        } finally {
            setLoading(false);
        }
    };

    
    useEffect(() => {
        setPage(1);
        fetchAnime(1, category, search);
    }, [category, search]);

    
    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !loading) {
                fetchAnime(page + 1, category, search);
                setPage(prev => prev + 1);
            }
        }, { threshold: 1 });

        if (loader.current) observer.observe(loader.current);
        return () => loader.current && observer.unobserve(loader.current);
    }, [page, category, search, hasMore, loading]);

    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleSearch = (e) => setSearch(e.target.value);

    return (
        <AnimeContainer>
            <SearchContainer>
                <CategoryWrapper>
                    
                    <CategorySelect value={category} onChange={handleCategoryChange}>
                        <option value="">All</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Action">Action</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Romance">Romance</option>
                        <option value="Supernatural">Supernatural</option>
                        <option value="Magic">Magic</option>
                        <option value="Horror">Horror</option>
                    </CategorySelect>
                </CategoryWrapper>

                <SearchBar
                    type="text"
                    placeholder="Search anime..."
                    value={search}
                    onChange={handleSearch}
                />
            </SearchContainer>

            <AnimeList>
                {animeList.map((anime, index) => (
                    <AnimeCard
                        key={`${anime.id}-${index}`} 
                        onClick={() => navigate(`/anime/${anime.id}`)}
                    >
                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                       <div className="overlay">
                        <p>{anime.attributes.canonicalTitle}</p>
                        <div className="click-more">Click to see more</div>
                        </div>
                    </AnimeCard>
                ))}
            </AnimeList>

            <div ref={loader} />
            <ScrollToTopButton/>
        </AnimeContainer>
    );
};
