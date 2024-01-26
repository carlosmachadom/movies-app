import getMovieMyId from "@api/getMovieById";

import categoryColors from "@utils/constants/category-colors";
import createMovieCardsLoadingSkeletons from "@utils/dom/renderMovieCardSkeletons";

import notFoundImage from '@images/image_not_found.png';
const BASE_CARD_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

import notFoundBackgroundImage from '@images/background_image_not_found.png';
const BASE_BACKGROUND_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

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
    
    const skeletons = createMovieCardsLoadingSkeletons();

    return `
        <section class="page-container movie-page details-page">
            <header class="movie-header" style="
                background-image: url(${backdrop_path !== null ? `${BASE_BACKGROUND_IMAGE_URL}${backdrop_path}` : notFoundBackgroundImage});
            ">
                <article class="header--info">
                    <figure class="info-image">
                        <img src="${poster_path !== null ? `${BASE_CARD_IMAGE_URL}${poster_path}` : notFoundImage}" title="${title}"/>
                    </figure>

                    <div class="details-container">
                        <div class="info-details">
                            <div class="details--vote">${vote_average}</div>
                            <h2 class="details--title">${title}</h2>
                            <p class="details--description">${overview}</p>
                            <div class="details--release"><strong>Release date:</strong> ${release_date.split("-")[0]}</div>
                            <button class="details--button">Play Trailer</button>

                            <div class="categories-section">
                                <h3 class="categories--title">Categories</h3>
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
                    </div>
                </article>
            </header>

            <div class="similar-movies">
                <h3 class="similar-movies--title">Similar Movies</h3>
                <div class="movies-wrapper"> 
                    <ul class="wrapper movies--list">
                        ${skeletons.map((skeleton) => { return `<li>${skeleton.outerHTML}</li>`}).join('')}
                    </ul>                
                </div>
            <div>
        <section>
    `;
}

export default MovieDetailsPage;