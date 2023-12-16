class CategoryTag extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['id', 'title', 'bg-color'];
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
                    --main-white: hsla(259, 58%, 95%, 1);
                    --font-size-regular: clamp(1.2rem, 1.4rem, 1.8rem);
                    --font-weight-regular: 400;
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    color: var(--main-white);
                    font-size: var(--font-size.regular);
                    font-weight: var(--font-weight-regular);
                }

                .category-tag {
                    background-color: ${this.dataset.bgColor};
                    border-radius: 6px;
                    padding: 1rem 1.4rem;
                    cursor: pointer;
                }
            </style>
        `;
    }

    getTemplate() {
        const template = document.createElement('template');

        template.innerHTML = `
            <div class="category-tag" data-id="${this.dataset.id}">
                <h3 class="tag--title">${this.dataset.title}</h3>
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

customElements.define("category-tag", CategoryTag);