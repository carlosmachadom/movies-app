import getTrendingMoviesPreview from "@api/getTendingMoviesPreview";

function renderTrendingMoviesPreview({ movies = [] } = {}) { 
    if (movies.length != 0) {
        movies.forEach(movie => {
            const movieListItem = document.createElement('li');

            const movieCard = document.createElement('article');
            const movieImageContainer = document.createElement('figure');
            const movieImage = document.createElement('img');
            movieImage.setAttribute('alt', movie.title);
            movieImage.setAttribute(
                'src',
                `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            )
            movieImageContainer.append(movieImage);

            const movieTitle = document.createElement('p');
            movieTitle.innerText = movie.title;

            movieCard.appendChild(movieImageContainer);
            movieCard.appendChild(movieTitle)

            movieListItem.appendChild(movieCard);

            document.querySelector('.trending-wrapper').appendChild(movieListItem); 
        });
    }
}

async function insertTrendingMoviesPreview() { 
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

async function runApp() {
    insertTrendingMoviesPreview();
}

(async function App() {
    runApp();
})();