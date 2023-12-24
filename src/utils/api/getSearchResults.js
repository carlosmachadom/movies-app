import { api } from "@utils/constants/apiCommons.js";

export default async function getSearchResults({ search = "" } = {}) {
    let query = search.split("%20").join(" ");

    try { 
        const { data, status } = await api('/search/movie', {
            params: {
                query
            }
        });

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