import "@styles/templates/Header.css";

const Header = () => {
    return `
        <nav class="navigation-container">
            <div class="navigation-wrapper">
                <section>
                    <a href="/" title="logo">
                        <img src="" alt="" class="hidden">
                        <h1>Movies</h1>
                    </a>
                </section>

                <ul class="navigation-list">
                    <li class="list-item">
                        <a href="/" class="item--link">Home</a>
                    </li>

                    <li class="list-item">
                        <a href="#trends" class="item--link">Trending</a>
                    </li>

                    <li class="list-item">
                        <a href="#categories" class="item--link">Categories</a>
                    </li>

                    <li class="list-item">
                        <a href="#popular" class="item--link">Popular</a>
                    </li>

                    <li class="list-item">
                        <a href="#upcoming" class="item--link">Upcoming</a>
                    </li>                
                </ul>
            </div>
            
            <section class="search-container">
                <form action="">
                    <label for="search">
                        <input type="text" id="search" name="search">
                    </label>
    
                    <input type="button" value="Find"/>
                </form>
            </section>
        </nav>
    `;
}

export default Header;