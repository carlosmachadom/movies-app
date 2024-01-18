import "@components/MovieCardSkeleton.js";

function createMovieCardsLoadingSkeletons({ cardsQuantity = 8 } = {}) {
    let skeletons = [];

    for (let i = 0; i < cardsQuantity; i++) {
        const card = document.createElement('movie-card-skeleton');
        skeletons.push(card);
    }

    return skeletons;
}

export default createMovieCardsLoadingSkeletons