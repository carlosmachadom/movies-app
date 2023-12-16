import getUpcomingMovies from "@api/getUpcomingMovies.js";
import renderMovies from "@utils/dom/renderMovies";

export default async function insertUpcomingMovies() { 
    try {
        const movies = await getUpcomingMovies();
        
        if (movies instanceof Error) {
            console.error(movies);
        } else if (movies != null) {
            renderMovies({ movies, selector: '.upcoming--list' });
        }
    } catch (error) {
        console.error(error);
    }
}