import getMoviesByCategory from "@api/getMoviesByCategory";
import renderMovies from "@utils/dom/renderMovies";
import { $ } from "@utils/dom/selectors.js";

export default async function insertMoviesByCategory() {
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
            renderMovies({ movies, selector: '.movies--list' });
        }
    } catch (error) {
        console.error(error);
    }
}