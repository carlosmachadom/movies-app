import "@styles/pages/GeneralPages.css";
import getMovieMyId from "@api/getMovieById";
import getSimilarMovies from "@api/getSimilaMovies";
import categoryColors from "@utils/constants/category-colors";

const MovieDetailsPage = async () => {
    const id = location.hash.split('=')[1];
    
    const {
        title,
        vote_average,
        overview,
        poster_path,
        backdrop_path,
        release_date,
        genres
    } = await getMovieMyId({ id });

    const similarMovies = await getSimilarMovies({ id });

    return `
        <section class="page-container movie-page">
            <div class="movie-background" style="
                background: url(${`https://image.tmdb.org/t/p/original${backdrop_path}`});
                box-shadow: 0px 0px 104px 80px #020208 inset;
            ">
                <article>
                    <figure>
                        <img src="https://image.tmdb.org/t/p/w300${poster_path}" title=""/>
                    </figure>

                    <div class="page--title">
                        <div>${vote_average}</div>
                        <h2>${title}</h2>
                        <p>${overview}</p>
                        <span>${release_date.split("-")[0]}</span>
                        <button>Play Trailer</button>

                        <div>
                            <h3>Categories</h3>
                            <ul class="categories--list">
                                ${genres.map(genre => {
                                    const categoryTag = document.createElement('category-tag');
                                    categoryTag.dataset.title = genre.name;
                                    categoryTag.dataset.id = genre.id;
                                    categoryTag.dataset.bgColor = categoryColors[genre.name];

                                    return `<li class="list-item">${categoryTag.outerHTML}</li>`;
                                }).join('')}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>

            <div class="similar-movies">
                <h3>Similar Movies</h3>
                <ul class="movies--list">
                    ${similarMovies.map(movie => {
                        const movieLink = document.createElement('a');
                        movieLink.classList.add('item--link');
                        movieLink.href = `#movie=${movie.id}`;

                        const movieCard = document.createElement('movie-card');
                        movieCard.dataset.movieTitle = movie.title;
                        movieCard.dataset.movieSrc = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

                        movieLink.appendChild(movieCard);

                        return `<li class="list-item">${movieLink.outerHTML}</li>`;
                    }).join('')}
                </ul>
            <div>
        <section>
    `;
}

export default MovieDetailsPage;