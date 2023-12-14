import "@components/MovieCard.js"
import getUpcomingMoviesPreview from "@api/getUpcomingMoviesPreview.js";

function renderUpcomingMoviesPreview({ movies = [] } = {}) { 
    if (movies.length != 0) {
        movies.forEach(movie => {
            const movieListItem = document.createElement('li');
            movieListItem.classList.add('list-item');
            const movieCard = document.createElement('movie-card');
            movieCard.dataset.movieTitle = movie.title;
            movieCard.dataset.movieSrc = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
            movieListItem.appendChild(movieCard);

            document.querySelector('.upcoming-wrapper').appendChild(movieListItem); 
        });
    }
}

export default async function insertUpcomingMoviesPreview() { 
    try {
        const movies = await getUpcomingMoviesPreview();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderUpcomingMoviesPreview({ movies });
        }
    } catch (error) {
        console.error(error);
    }
}