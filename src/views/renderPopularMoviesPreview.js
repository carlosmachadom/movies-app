import "@components/MovieCard.js"
import getPopularMoviesPreview from "@api/getPopularMoviesPreview.js";

function renderPopularMoviesPreview({ movies = [] } = {}) { 
    if (movies.length != 0) {
        movies.forEach(movie => {
            const movieListItem = document.createElement('li');
            movieListItem.classList.add('list-item');
            const movieCard = document.createElement('movie-card');
            movieCard.dataset.movieTitle = movie.title;
            movieCard.dataset.movieSrc = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
            movieListItem.appendChild(movieCard);

            document.querySelector('.popular-wrapper').appendChild(movieListItem); 
        });
    }
}

export default async function insertPopularMoviesPreview() { 
    try {
        const movies = await getPopularMoviesPreview();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderPopularMoviesPreview({ movies });
        }
    } catch (error) {
        console.error(error);
    }
}