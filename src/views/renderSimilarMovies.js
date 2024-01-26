import { $ } from "@utils/dom/selectors";
import getSimilarMovies from "@api/getSimilaMovies";
import renderMovies from "@utils/dom/renderMovies";
import createObserver from "@utils/observer";

export default async function insertSimilarMovies({ id, isLazy = false }) { 
    try {
        const movies = await getSimilarMovies({ id });
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            const renderProps = { movies, selector: '.movies--list', isLazy }
            renderMovies(renderProps);
            if (renderProps.isLazy) createObserver({parentNode: $('.movies--list')});
        }
    } catch (error) {
        console.error(error);
    }
}