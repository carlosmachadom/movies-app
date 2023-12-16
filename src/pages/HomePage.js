import "@styles/pages/Home.css";

const HomePage = () => {
    return `
        <div class="home-page">
            <section class="hero-container">
                <h2>Hero section</h2>
            </section>

            <section class="trending-container">
                <header class="trending-header">
                    <h2>Trending</h2>

                    <button class="trending-btn">See all</button>
                </header>

                <div class="trending-carousel">
                    <button class="arrow left hidden"></button>

                    <ul class="wrapper trending--list">
                        
                    </ul>

                    <button class="arrow right hidden"></button>
                </div>
            </section>

            <section class="categories-container">
                <h2>Categories</h2>

                <ul class="categories--list">

                </ul>
            </section>

            <section class="popular-container">
                <header class="popular-header">
                    <h2>Popular</h2>
            
                    <button class="popular-btn">See all</button>
                </header>
            
                <div class="popular-carousel">
                    <button class="arrow left hidden"></button>
            
                    <ul class="wrapper popular--list">
            
                    </ul>
            
                    <button class="arrow right hidden"></button>
                </div>
            </section>

            <section class="upcoming-container">
                <header class="upcoming-header">
                    <h2>Upcoming</h2>
            
                    <button class="upcoming-btn">See all</button>
                </header>
            
                <div class="upcoming-carousel">
                    <button class="arrow left hidden"></button>
            
                    <ul class="wrapper upcoming--list">
            
                    </ul>
            
                    <button class="arrow right hidden"></button>
                </div>
            </section>
        </div>
    `;
}

export default HomePage;