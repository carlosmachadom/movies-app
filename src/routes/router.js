/* Home Utils */
import insertTrendingMoviesPreview from "@views/renderTrendingMoviesPreview.js";
import insertCategoriesPreview from "@views/renderCategoriesPreview";
import insertPopularMoviesPreview from "@views/renderPopularMoviesPreview";
import insertUpcomingMoviesPreview from "@views/renderUpcomingMoviesPreview";
import HomePage from "@pages/HomePage";

const mainContainer = document.getElementById('main');

const Home = () => {
    console.log('Home');
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = HomePage();

    insertTrendingMoviesPreview();
    insertCategoriesPreview();
    insertPopularMoviesPreview();
    insertUpcomingMoviesPreview();
}

const Trending = () => {
    console.log('Trends');
}

const Popular = () => {
    console.log('Popular');
}

const Upcoming = () => {
    console.log('Upcoming');
}

const Category = () => {
    console.log('Category');
}

const Search = () => {
    console.log('Search');
}

const Movie = () => {
    console.log('Movie');
}

const NotFound = () => {
    console.log('Not Found');
}

const routes = {
    '/': () => Home(),
    '#trends': () => Trending(),
    '#popular': () => Popular(),
    '#upcoming': () => Upcoming(),
    '#category=': () => Category(),
    '#search=': () => Search(),
    '#movie=': () => Movie(),
    '*': () => NotFound()
}

const resolveRoute = async (route) => {
    let r = route;

    if (r.includes('=')) {
        r = r.split("=")[0] + "="
    }

    routes[r] ? routes[r]() : routes['*']();
}

const router = async () => {
    let hash = await location.hash;
    (hash == "") ? hash = "/" : hash;
    resolveRoute(hash)
}

export default router;