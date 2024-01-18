import createMovieCardsLoadingSkeletons from "@utils/dom/renderMovieCardSkeletons";
import categoryTagLoadingSkeletons from "@utils/dom/renderCategoryTagSkeleton";

const CategoriesPage = () => {
    const skeletons = createMovieCardsLoadingSkeletons({ cardsQuantity: 20 });
    const categorySkeletons = categoryTagLoadingSkeletons();

    return `
        <section class="page-container categories-page">
            <div class="page--title">
                <h2>Categories: <span class="title__selection"></span></h2>
            </div>

            <ul class="categories--list">
                ${categorySkeletons.map((skeleton) => {return `<li>${skeleton.outerHTML}</li>`}).join('')}
            </ul>

            <ul class="movies--list">
                ${skeletons.map((skeleton) => {return `<li>${skeleton.outerHTML}</li>`}).join('')}
            </ul>
        <section>
    `;
}

export default CategoriesPage;