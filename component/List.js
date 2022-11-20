import { Component } from "./Component.js";

export class List extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'))
        this.state = {
            isOpen: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        return this.setState((state) => {
            return {
                ...state,
                isOpen: !this.state.isOpen
            }
        })
    }

    connectedCallback() {
        this.render();
        window.addEventListener('toggle-menu', this.toggleMenu);
    }

    static get observedAttributes() {
        return ['links'];
    }

    render() {
        return `
            <aside class=${this.state.isOpen ? 'open' : 'closed'}>
                <ul class="header-mobile-wrapper__menu--list">
                ${this.props.map((item) => {
                    return `<li class="mobile-navigation__item">
                                <a href="${item.href}" class="mobile-navigation__link">${item.label}</a>
                            </li>`
                }).join(' ')}
                </ul>
            </aside>
        `
    }

}

customElements.define('it-list', List)



