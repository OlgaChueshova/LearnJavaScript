import { Component } from "./Component.js";
import { Sublist } from "./Sublist.js";

export class List extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('links'))
        this.state = {
            isOpen: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(evt) {
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
        this.addEventListener('click', (evt) => {
            const target = evt.target.closest('.header__navigation--dropdown');
            if (target) {
                evt.preventDefault();
                this.dispatch('toggle-submenu');
                evt.stopPropagation()  
            }
        })
    }

    static get observedAttributes() {
        return ['links'];
    }

    render() {
        return `
            <aside class=${this.state.isOpen ? 'open' : 'closed'}>
                <ul class="header-mobile-wrapper__menu--list mobile-navigation">
                    ${this.props.map((item) => {
                        if (item.href) {
                            return `
                                <li class="mobile-navigation__item">
                                    <a href="${item.href}" class="mobile-navigation__link">
                                    <img src="${item.icon ? item.icon : ''}" class="mobile-navigation__link--icon">
                                    ${item.label}</a>
                                </li>`
                        }
                        if (item.sublinks) {
                            return `
                                <li class="mobile-navigation__item mobile-catalog">
                                    <a href="${item.href}" class="mobile-navigation__link  header__navigation--dropdown">
                                        <img src="${item.icon}" class="mobile-navigation__link--icon">
                                        ${item.label}
                                    </a>
                                    <it-sublist sublinks='${JSON.stringify(item.sublinks)}'></it-sublist>
                                </li>  
                            `
                        }
                        return `<li class="mobile-navigation__item">${item.label}</li>`
                    }).join(' ')}
                </ul>
            </aside>
        `
    }

}

customElements.define('it-list', List)



