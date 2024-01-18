import "@components/CategoryTag.js"
import { $ } from "@utils/dom/selectors.js";
import categoryColors from "@utils/constants/category-colors";

export default function renderCategories({ categories = [], selector = "" } = {}) { 
    $('.categories--list').innerHTML = "";

    if (categories.length != 0 && selector != "") {
        categories.forEach(category => {
            const categoryListItem = document.createElement('li');
            categoryListItem.classList.add('list-item');

            const categoryTag = document.createElement('category-tag');
            categoryTag.dataset.title = category.name;
            categoryTag.dataset.id = category.id;
            categoryTag.dataset.bgColor = categoryColors[category.name];
            categoryListItem.appendChild(categoryTag);

            $('.categories--list').appendChild(categoryListItem); 
        });
    }
}