import getTrendingMovies from "@api/getTrendingMovies";
import renderMovies from "@utils/dom/renderMovies";
import { $, $$ } from "@utils/dom/selectors";
import createObserver from "@utils/observer";

export default async function insertTrendingMovies() { 
    try {
        const movies = await getTrendingMovies();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderMovies({ movies, selector: '.trending--list' });
            createObserver({parentNode: $('.trending--list')});
        }
    } catch (error) {
        console.error(error);
    }
}