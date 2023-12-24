import { api } from "@utils/constants/apiCommons.js";

export default async function getSimilarMovies({ id } = {}) { 
    try {
        const { data, status } = await api(`/movie/${id}/similar`);

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