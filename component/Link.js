export class Link extends HTMLElement {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'));
        console.log(this.props)
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['links'];
    }

    attributeChangedCallback() {

    }

    render() {
        this.innerHTML =  `
        ${this.props.map((item) => {
            return `
            <li class="mobile-navigation__item header__navigation--dropdown mobile-catalog">
                <a href="${item.href}" class="mobile-navigation__link">${item.label}</a>
            </li>
            `
        })}
        `
    }
}

customElements.define('it-link', Link)

