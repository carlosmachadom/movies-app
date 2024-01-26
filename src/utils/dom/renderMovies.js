import "@components/MovieCard.js"
import { $ } from "@utils/dom/selectors.js";
import notFoundImage from '@images/image_not_found.png';
const BASE_CARD_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

export default function renderMovies({ movies = [], selector = "", isLazy = false } = {}) { 
    if (selector != "") {
        $(selector).innerHTML = "";

        movies.forEach(movie => {
            const movieListItem = document.createElement('li');
            movieListItem.classList.add('list-item');

            const movieLink = document.createElement('a');
            movieLink.classList.add('item--link');
            movieLink.href = `#movie=${movie.id}`;

            const movieCard = document.createElement('movie-card');
            movieCard.dataset.movieTitle = movie.title;
            movieCard.dataset.movieSrc = movie.poster_path !== null ? `${BASE_CARD_IMAGE_URL}${movie.poster_path}` : notFoundImage;
            movieCard.dataset.isLazy = isLazy;

            movieLink.appendChild(movieCard);
            movieListItem.appendChild(movieLink);

            $(selector).appendChild(movieListItem); 
        });
    }
}