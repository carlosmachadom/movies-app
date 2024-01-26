/* Dom manipulation utils */
import { $, $$ } from "@utils/dom/selectors";

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
import insertSearchResuls from "@views/renderSearchResults";
import getSearchValue from "@utils/getSearchValue";
import SearchPage from "@pages/SearchPage";

/* Movie Details */
import MovieDetailsPage from "@pages/MovieDetailsPage";
import insertSimilarMovies from "@views/renderSimilarMovies";

/* Layout */
const headerContainer = null || $('#header');
const footerContainer = null || $('#footer');
const mainContainer = null || $('#main');

/* Pages Logic */
const Home = () => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = HomePage();

    insertTrendingMovies({isLazy: true});
    insertCategories();
    insertPopularMovies({isLazy: true});
    insertUpcomingMovies({isLazy: true});

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
    } else {
        insertMoviesByCategory();
    }
}

const Search = () => {
    if (!$('.search-page')) {
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = SearchPage();    
        insertSearchResuls();
    } else {
        insertSearchResuls();
    }
}

const MovieSelected = async () => {
    if (!$('details-page')) {
        mainContainer.innerHTML = "";
        mainContainer.innerHTML = await MovieDetailsPage();
        const movieId = location.hash.split('=')[1];

        const categoriesList = null || $('.categories--list');
        
        categoriesList.addEventListener('click', (e) => {
            const categoryId = e.target.getAttribute('data-id');
            const categoryTitle = e.target.getAttribute('data-title');

            if (categoryId != null) {
                location.hash = `#category=${categoryId}-${categoryTitle.split(' ').join('')}`;
                insertMoviesByCategory();
            }
        });

        insertSimilarMovies({ id: movieId, isLazy: true });
    }
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
    $(".search-container form > input[type=button]").addEventListener('click', async (e) => {
        e.preventDefault();
        const searchValue = await getSearchValue();

        if (searchValue != null) {
            location.hash = `search=${searchValue}`;
        } else {
            console.log("empty");
        }
    });

    footerContainer.innerHTML = Footer();

    let hash = await location.hash;
    (hash == "") ? hash = "/" : hash;
    resolveRoute(hash);
}




export default router;