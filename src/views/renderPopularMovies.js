import getPopularMovies from "@api/getPopularMovies.js";
import renderMovies from "@utils/dom/renderMovies";

export default async function insertPopularMovies() { 
    try {
        const movies = await getPopularMovies();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderMovies({ movies, selector: '.popular--list'});
        }
    } catch (error) {
        console.error(error);
    }
}