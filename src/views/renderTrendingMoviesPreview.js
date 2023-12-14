import "@components/MovieCard.js"
import getTrendingMoviesPreview from "@api/getTrendingMoviesPreview";

function renderTrendingMoviesPreview({ movies = [] } = {}) { 
    if (movies.length != 0) {
        movies.forEach(movie => {
            const movieListItem = document.createElement('li');
            movieListItem.classList.add('list-item');
            const movieCard = document.createElement('movie-card');
            movieCard.dataset.movieTitle = movie.title;
            movieCard.dataset.movieSrc = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
            movieListItem.appendChild(movieCard);

            document.querySelector('.trending-wrapper').appendChild(movieListItem); 
        });
    }
}

export default async function insertTrendingMoviesPreview() { 
    try {
        const movies = await getTrendingMoviesPreview();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderTrendingMoviesPreview({ movies });
        }
    } catch (error) {
        console.error(error);
    }
}