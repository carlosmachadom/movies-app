class MovieCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['movie-title', 'image-src'];
    }

    attributeChangedCallback(attr, oldAttr, newAttr) {
        if (oldAttr !== newAttr) { 
            this[attr] = newAttr;
        }
    }

    getStyles() {
        return `
            <style>
                :host {
                    --base-font-size: 1rem;
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-size: var(--base-font-size);
                }
            </style>
        `;
    }

    getTemplate() { 
        const template = document.createElement('template');

        template.innerHTML = `
            <article class="movie-card">
                <figure class="card-image">
                    <img
                        src="${this.dataset.movieSrc}"
                        alt="${this.dataset.movieTitle}"
                    />
                </figure>

                <h3 class="movie-title">${this.dataset.movieTitle}</h3>
            </article>

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

customElements.define("movie-card", MovieCard);