class MovieCardSkeleton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getStyles() {
        return `
            <style>
                :host {
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                .movie-card--loader {
                    min-width: 190px;
                    width: 100%;
                    max-width: 220px;                    
                }

                .movie-card--loader .card-image {
                    width: 100%;
                    height: 330px;
                    background-color: gray;
                }
                
                .movie-card--loader .movie-title {
                    background-color: gray;
                }
            </style>
        `;
    }

    getTemplate() { 
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="movie-card--loader">
                <div class="card-image">                    
                </div>

                <div class="movie-title"></div>
            </div>

            ${this.getStyles()}
        `;

        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("movie-card-skeleton", MovieCardSkeleton);