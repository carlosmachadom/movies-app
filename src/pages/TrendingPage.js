import createMovieCardsLoadingSkeletons from "@utils/dom/renderMovieCardSkeletons";

const TrendingPage = () => {
    const skeletons = createMovieCardsLoadingSkeletons({cardsQuantity: 20});

    return `
        <section class="page-container">
            <div class="page--title">
                <h2>Trending Movies</h2>
            </div>

            <ul class="trending--list">
                ${skeletons.map((skeleton) => {return `<li>${skeleton.outerHTML}</li>`}).join('')}
            </ul>
        <section>
    `;
}

export default TrendingPage;