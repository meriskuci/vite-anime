import axios from "axios";

const API_URL = "https://kitsu.io/api/edge";

export const getTrendingAnime = async () => {
    try {
        const res = await axios.get(`${API_URL}/trending/anime`);
        return res.data.data;
    } catch (error) {
        console.log("Error fetching trending anime:", error);
        return [];
    }
};

export const getAnimeByName = async (name) => {
    try{
        const res = await axios.get(`${API_URL}/anime`, {
            params: {
                "filter[text]": name,
                "page[limit]": 20,
            },
        });
        return res.data.data;
    }catch(error){
        console.log("Error searching by name", error);
        return [];
    }
}

export const getAnimeByCategory = async (category) => {
    try {
        const res = await axios.get(`${API_URL}/anime`, {
            params: {
                "filter[categories]": category,
                "page[limit]": 10,
            },
        });
        return res.data.data;
    } catch (error) {
        console.log(`Error fetching anime by category ${category}`, error);
        return [];
    }
};

export const getTrendingManga = async () => {
    try {
        const res = await axios.get(`${API_URL}/trending/manga`);
        return res.data.data;
    } catch (error) {
        console.log("Error fetching trending manga:", error);
        return [];
    }
};

export const getMangaByCategory = async (category) => {
    try {
        const res = await axios.get(`${API_URL}/manga`, {
            params: {
                "filter[categories]": category,
                "page[limit]": 10,
            },
        });
        return res.data.data;
    } catch (error) {
        console.log(`Error fetching manga by category ${category}`, error);
        return [];
    }
}