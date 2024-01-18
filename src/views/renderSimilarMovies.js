import getSimilarMovies from "@api/getSimilaMovies";
import renderMovies from "@utils/dom/renderMovies";

export default async function insertSimilarMovies({ id }) { 
    try {
        const movies = await getSimilarMovies({ id });
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderMovies({ movies, selector: '.movies--list'});
        }
    } catch (error) {
        console.error(error);
    }
}