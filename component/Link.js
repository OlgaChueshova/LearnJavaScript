import { Component } from "./Component.js";

export class Link extends Component {
    constructor() {
        super();
        this.links = JSON.parse(this.props.items)
        console.log(this.links)
    }

    static get observedAttributes() {
        return ['links'];
    }

    render() {
        return  `
        ${this.links.map((item) => {
            return `
            <li class="mobile-navigation__item header__navigation--dropdown mobile-catalog">
                <a href="${item.href}" class="mobile-navigation__link">${item.label}</a>
            </li>
            `
        }).join(' ')}
        `
    }
}

customElements.define('it-link', Link)

