const API_KEY = process.env.MDB_API_KEY;
const API_URL = process.env.MDB_API_URL;

export default async function getTrendingMoviesPreview() {
    try {
        const options = {
        method: 'GET',
        headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };

        const response = await fetch(`${API_URL}/trending/movie/day?language=en-US`, options);        
        const data = await response.json();

        if (response.status != 200) {
            throw new Error(data.message);
        } else { 
            const { results } = data;
            return results;            
        }
    } catch (error) {
        return error;
    }
}