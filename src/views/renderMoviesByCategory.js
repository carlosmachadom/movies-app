import getMoviesByCategory from "@api/getMoviesByCategory";
import renderMovies from "@utils/dom/renderMovies";
import { $ } from "@utils/dom/selectors";
import createObserver from "@utils/observer";

export default async function insertMoviesByCategory({isLazy = false} = {}) {
    const categoryHash = location.hash;
    let categoryId = null;
    let categoryName = 'Action';

    if (categoryHash.includes('=')) {
        [categoryId, categoryName] = categoryHash.split("=")[1].split('-');
    }        

    try {
        const movies = await getMoviesByCategory({id: categoryId});
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            $('.categories-page .title__selection').innerText = categoryName;

            const renderProps = { movies, selector: '.movies--list', isLazy }
            renderMovies(renderProps);
            if(renderProps.isLazy) createObserver({parentNode: $('.movies--list')});
        }
    } catch (error) {
        console.error(error);
    }
}