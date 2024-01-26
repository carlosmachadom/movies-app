import { $ } from "@utils/dom/selectors";
import getSearchResults from "@api/getSearchResults";
import renderMovies from "@utils/dom/renderMovies.js";

export default async function insertSearchResuls({ isLazy = false } = {}) {
    const hash = location.hash;

    const [_, searchValue] = hash.split("=");

    try {
        const movies = await getSearchResults({search: searchValue});
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            $('.search--title > span').innerText = searchValue.split('%20').join(" ").toLocaleUpperCase();
            const renderProps = { movies, selector: '.search--list', isLazy }
            renderMovies(renderProps);
            if(isLazy) createObserver({parentNode: $('.search--list')});
        }
    } catch (error) {
        console.error(error);
    }
}