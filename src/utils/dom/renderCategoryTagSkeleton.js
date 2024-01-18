import "@components/CategoryTagSkeleton.js";

function categoryTagLoadingSkeletons({ categoriesQuantity = 18 } = {}) {
    let skeletons = [];

    for (let i = 0; i < categoriesQuantity; i++) {
        const card = document.createElement('category-tag-skeleton');
        skeletons.push(card);
    }

    return skeletons;
}

export default categoryTagLoadingSkeletons