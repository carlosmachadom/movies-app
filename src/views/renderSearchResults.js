import getSearchResults from "@api/getSearchResults";
import renderMovies from "@utils/dom/renderMovies.js";

export default async function insertSearchResuls() {
    const hash = location.hash;

    const [_, searchValue] = hash.split("=");

    try {
        const movies = await getSearchResults({search: searchValue});
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderMovies({ movies, selector: '.search--list' });
        }
    } catch (error) {
        console.error(error);
    }
}