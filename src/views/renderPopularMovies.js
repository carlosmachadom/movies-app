import getPopularMovies from "@api/getPopularMovies.js";
import renderMovies from "@utils/dom/renderMovies";
import { $ } from "@utils/dom/selectors";
import createObserver from "@utils/observer";

export default async function insertPopularMovies({isLazy = false} = {}) { 
    try {
        const movies = await getPopularMovies();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            const renderProps = { movies, selector: '.popular--list', isLazy }
            renderMovies(renderProps);
            if (renderProps.isLazy) createObserver({parentNode: $('.popular--list')});
        }
    } catch (error) {
        console.error(error);
    }
}