class CategoryTagSkeleton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
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

                .category-tag {
                    width: 60px;
                    background-color: gray;
                    border-radius: 6px;
                    padding: 1.6rem;
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="category-tag">
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

customElements.define("category-tag-skeleton", CategoryTagSkeleton);