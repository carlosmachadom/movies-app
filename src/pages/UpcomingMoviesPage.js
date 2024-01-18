import createMovieCardsLoadingSkeletons from "@utils/dom/renderMovieCardSkeletons";

const UpcomingMoviesPage = () => {
    const skeletons = createMovieCardsLoadingSkeletons({cardsQuantity: 20});

    return `
        <section class="page-container">
            <div class="page--title">
                <h2>Upcoming Movies</h2>
            </div>

            <ul class="upcoming--list">
                ${skeletons.map((skeleton) => {return `<li>${skeleton.outerHTML}</li>`}).join('')}
            </ul>
        <section>
    `;
}

export default UpcomingMoviesPage;