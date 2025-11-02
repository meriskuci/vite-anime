import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMangaByCategory, getMangaByName } from "../../services/animeService";
import { AnimeContainer, SearchContainer, CategoryWrapper, CategoryLabel, CategorySelect, SearchBar, AnimeCard, AnimeList } from "../Anime/Anime.styles";


export const Manga = () => {
    const [mangaList, setMangaList] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const navigate = useNavigate();
    const loader = useRef(null);

    const fetchManga = async (pageNum = 1, chosenCategory = "", searchTerm = "") => {
        if (loading) return;
        setLoading(true);

        let data = [];
        try {
            if (searchTerm) {
                data = await getMangaByName(searchTerm, pageNum);
            } else {
                data = await getMangaByCategory(chosenCategory, pageNum);
            }

            if (pageNum === 1) {
                setMangaList(data);
            } else {
                const uniqueData = data.filter(d => !mangaList.some(a => a.id === d.id));
                setMangaList(prev => [...prev, ...uniqueData]);
            }

            setHasMore(data.length > 0);
        } catch (err) {
            console.error("Error fetching manga:", err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setPage(1);
        fetchManga(1, category, search);
    }, [category, search]);


    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !loading) {
                fetchManga(page + 1, category, search);
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
                    <CategoryLabel>Choose Category</CategoryLabel>
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
                    placeholder="Search manga..."
                    value={search}
                    onChange={handleSearch}
                />
            </SearchContainer>

            <AnimeList>
                {mangaList.map((manga, index) => (
                    <AnimeCard
                        key={`${manga.id}-${index}`}
                        onClick={() => navigate(`/manga/${manga.id}`)}
                    >
                        <img src={manga.attributes.posterImage.small} alt={manga.attributes.canonicalTitle} />
                        <p>{manga.attributes.canonicalTitle}</p>
                    </AnimeCard>
                ))}
            </AnimeList>

            <div ref={loader} />
        </AnimeContainer>
    );
};
