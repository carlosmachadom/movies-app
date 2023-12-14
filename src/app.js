import router from "./routes/router";

(async function App() {
    window.addEventListener('load', router, false);
    window.addEventListener('hashchange', router, false);
})();