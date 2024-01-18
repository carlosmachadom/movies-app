import createMovieCardsLoadingSkeletons from "@utils/dom/renderMovieCardSkeletons";

const PopularMoviesPage = () => {
    const skeletons = createMovieCardsLoadingSkeletons({cardsQuantity: 20});

    return `
        <section class="page-container">
            <div class="page--title">
                <h2>Popular Movies</h2>
            </div>

            <ul class="popular--list">
                ${skeletons.map((skeleton) => {return `<li>${skeleton.outerHTML}</li>`}).join('')}
            </ul>
        <section>
    `;
}

export default PopularMoviesPage;