const HomePage = () => {
    return `
        <div class="home-layout">
            <section class="hero-container">
                <h2>Hero section</h2>
            </section>

            <section class="trending-container">
                <header class="trending-header">
                    <h2>Trending</h2>

                    <button>See all</button>
                </header>

                <div class="trending-carousel">
                    <button class="arrow left hidden"></button>

                    <ul class="trending-wrapper">
                        
                    </ul>

                    <button class="arrow right hidden"></button>
                </div>
            </section>

            <section class="categories-container">
                <h2>Categories</h2>

                <ul class="categories-list">

                </ul>
            </section>

            <section class="popular-container">
                <header class="popular-header">
                    <h2>Popular</h2>
            
                    <button>See all</button>
                </header>
            
                <div class="popular-carousel">
                    <button class="arrow left hidden"></button>
            
                    <ul class="popular-wrapper">
            
                    </ul>
            
                    <button class="arrow right hidden"></button>
                </div>
            </section>

            <section class="upcoming-container">
                <header class="upcoming-header">
                    <h2>Upcoming</h2>
            
                    <button>See all</button>
                </header>
            
                <div class="upcoming-carousel">
                    <button class="arrow left hidden"></button>
            
                    <ul class="upcoming-wrapper">
            
                    </ul>
            
                    <button class="arrow right hidden"></button>
                </div>
            </section>
        </div>
    `;
}

export default HomePage;