import "@styles/pages/GeneralPages.css";

const SearchPage = () => {
    return `
        <section class="page-container">
            <div class="page--title">
                <h2>Search: <span class="title__selection"></span></h2>
            </div>

            <form action="">
                <label for="">
                    <input type="text">
                </label>

                <input type="button" />
            </form>

            <ul class="search--list">

            </ul>
        <section>
    `;
}

export default SearchPage;