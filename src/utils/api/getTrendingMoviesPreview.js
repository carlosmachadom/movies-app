import { api } from "@utils/constants/apiCommons.js";

export default async function getTrendingMoviesPreview() {
    try {
        const { data, status } = await api('/trending/movie/day');

        if (status != 200) {
            throw new Error(data.message);
        } else { 
            const { results } = data;
            return results;            
        }
    } catch (error) {
        return error;
    }
}