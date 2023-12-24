import "@components/MovieCard.js"
import { $ } from "@utils/dom/selectors.js";

export default function renderMovies({ movies = [], selector = "" } = {}) { 
    if (movies.length != 0 && selector != "") {
        $(selector).innerHTML = "";

        movies.forEach(movie => {
            const movieListItem = document.createElement('li');
            movieListItem.classList.add('list-item');

            const movieLink = document.createElement('a');
            movieLink.classList.add('item--link');
            movieLink.href = `#movie=${movie.id}`;

            const movieCard = document.createElement('movie-card');
            movieCard.dataset.movieTitle = movie.title;
            movieCard.dataset.movieSrc = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

            movieLink.appendChild(movieCard);
            movieListItem.appendChild(movieLink);

            $(selector).appendChild(movieListItem); 
        });
    }
}