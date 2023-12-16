import getCategories from "@api/getCategories";
import renderCategories from "@utils/dom/renderCategories";

export default async function insertCategories() { 
    try {
        const categories = await getCategories();
        
        if (categories instanceof Error) {
            console.error(categories);
        } else if (categories != null) {
            renderCategories({ categories, selector: '.categories--list'});
        }
    } catch (error) {
        console.error(error);
    }
}