/* Dom manipulation utils */
import { $ } from "@utils/dom/selectors";

/* Layout Utils*/
import Header from "@templates/Header";
import Footer from "@templates/Footer";

/* Home Utils */
import insertTrendingMovies from "@views/renderTrendingMovies";
import insertCategories from "@views/renderCategories";
import insertPopularMovies from "@views/renderPopularMovies";
import insertUpcomingMovies from "@views/renderUpcomingMovies";
import HomePage from "@pages/HomePage";

/* Trending Utils */
import TrendingPage from "@pages/TrendingPage";

/* Popular Utils */
import PopularMoviesPage from "@pages/PopularMoviesPage";

/* Upcoming Utils */
import UpcomingMoviesPage from "@pages/UpcomingMoviesPage";

/* Categories Utils */
import insertMoviesByCategory from "@views/renderMoviesByCategory";
import CategoriesPage from "@pages/CateriesPage";

/* Search Utils */
import SearchPage from "@pages/SearchPage";


/* Layout */
const headerContainer = null || $('#header');
const footerContainer = null || $('#footer');
const mainContainer = null || $('#main');

/* Pages Logic */
const Home = () => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = HomePage();

    insertTrendingMovies();
    insertCategories();
    insertPopularMovies();
    insertUpcomingMovies();

    const trendingButton = null || $('.trending-btn');
    const categoriesList = null || $('.categories--list');
    const popularButton = null || $('.popular-btn');
    const upcomingButton = null || $('.upcoming-btn');

    trendingButton.addEventListener('click', () => location.hash = '#trends');
    popularButton.addEventListener('click', () => location.hash = '#popular');
    upcomingButton.addEventListener('click', () => location.hash = '#upcoming');

    categoriesList.addEventListener('click', (e) => {
        const categoryId = e.target.getAttribute('data-id');
        const categoryTitle = e.target.getAttribute('data-title');

        if (categoryId != null) {
            location.hash = `#category=${categoryId}-${categoryTitle.split(' ').join('')}`;
        }
    });
}

const Trending = () => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = TrendingPage();

    insertTrendingMovies();
}

const Popular = () => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = PopularMoviesPage();

    insertPopularMovies();
}

const Upcoming = () => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = UpcomingMoviesPage();

    insertUpcomingMovies();
}

const Categories = () => {
    if (!$('.categories-page')) {
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = CategoriesPage();        
        
        insertCategories();
        insertMoviesByCategory();
    
        const categoriesList = null || $('.categories--list');
        categoriesList.addEventListener('click', (e) => {
            const categoryId = e.target.getAttribute('data-id');
            const categoryTitle = e.target.getAttribute('data-title');
    
            if (categoryId != null) {
                location.hash = `#category=${categoryId}-${categoryTitle.split(' ').join('')}`;
                insertMoviesByCategory();
            }
        });
    }
}

const Search = () => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = SearchPage();
}

const MovieSelected = () => {
    console.log('Movie selected');
}

const NotFound = () => {
    console.log('Not Found');
}

/* Router */
const routes = {
    '/': () => Home(),
    '#trends': () => Trending(),
    '#popular': () => Popular(),
    '#upcoming': () => Upcoming(),
    '#categories': () => Categories(),
    '#category=': () => Categories(),
    '#search=': () => Search(),
    '#movie=': () => MovieSelected(),
    '*': () => NotFound()
}

const resolveRoute = async (route) => {
    let r = route;

    r.includes('=') ? r = r.split("=")[0] + "=" : r;

    routes[r] ? routes[r]() : routes['*']();
}

const router = async () => {
    headerContainer.innerHTML = Header();
    footerContainer.innerHTML = Footer();

    let hash = await location.hash;
    (hash == "") ? hash = "/" : hash;
    resolveRoute(hash)
}

export default router;