import getTrendingMovies from "@api/getTrendingMovies";
import renderMovies from "@utils/dom/renderMovies";
import { $, $$ } from "@utils/dom/selectors";
import createObserver from "@utils/observer";

export default async function insertTrendingMovies({isLazy = false} = {}) { 
    try {
        const movies = await getTrendingMovies();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            const renderProps = { movies, selector: '.trending--list', isLazy }
            renderMovies(renderProps);
            if (renderProps.isLazy) createObserver({parentNode: $('.trending--list')});
        }
    } catch (error) {
        console.error(error);
    }
}