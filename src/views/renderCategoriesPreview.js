import "@components/CategoryTag.js"
import getCategoriesPreview from "@api/getCategoriesPreview";
import categoryColors from "@utils/constants/category-colors";

function renderCategoriesPreview({ categories = [] } = {}) { 
    if (categories.length != 0) {
        categories.forEach(category => {
            const categoryListItem = document.createElement('li');
            categoryListItem.classList.add('list-item');

            const categoryTag = document.createElement('category-tag');
            categoryTag.dataset.title = category.name;
            categoryTag.dataset.id = category.id;
            categoryTag.dataset.bgColor = categoryColors[category.name];
            categoryListItem.appendChild(categoryTag);

            document.querySelector('#main .categories-container .categories-list').appendChild(categoryListItem); 
        });
    }
}

export default async function insertCategoriesPreview() { 
    try {
        const categories = await getCategoriesPreview();
        
        if (categories instanceof Error) {
            console.error(categories);
        } else if (categories != null) {
            renderCategoriesPreview({ categories });
        }
    } catch (error) {
        console.error(error);
    }
}