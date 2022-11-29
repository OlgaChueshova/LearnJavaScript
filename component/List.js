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

    componentDidMount() {
        window.addEventListener('toggle-menu', this.toggleMenu);
    }

    componentWillUnmount() {
        window.removeEventListener('toggle-menu', this.toggleMenu);
    }

    static get observedAttributes() {
        return ['links'];
    }

    render() {
        return `
            <aside class="${this.state.isOpen ? 'open' : 'closed'}  mobile-navigation">
                <ul class="header-mobile-wrapper__menu--list">
                    ${this.props.map((item) => {
                        if (item.href || item.sublinks) {
                            return `
                                <li class="mobile-navigation__item ">
                                    <a href="${item.href}" class="mobile-navigation__link">
                                        <img src="${item.icon ? item.icon : ''}" class="mobile-navigation__link--icon">
                                        ${item.label ? item.label : ''}
                                    </a>
                                </li>
                            `
                        }
                        if (Array.isArray(item)) {
                            return `
                                <li class="mobile-navigation__item mobile-networks">
                                    <ul class="mobile-networks__list">
                                        ${item.map((subitem) => {
                                            return ` 
                                                <li class="mobile-networks__list--item">
                                                    <a href="${subitem.href}" class="mobile-networks__list--link">
                                                        <img src="${subitem.icon}" alt="${subitem.descriptions}">
                                                    </a>
                                                </li>
                                            `
                            }           ).join(' ')}
                                    </ul>
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



