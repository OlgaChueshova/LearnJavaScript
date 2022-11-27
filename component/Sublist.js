import { Component } from "./Component.js";
import { Subsublist } from "./SubSubList.js";

export class Sublist extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('sublinks'));
        this.state = {
            isActive: false
        }
        this.toggleSubmenu = this.toggleSubmenu.bind(this)
    }

    toggleSubmenu() {
        this.setState((state) => {
            return {
                ...state,
                isActive: !this.state.isActive
            }
        })
    }

    onClick(evt) {
        const target = evt.target.closest('.header__navigation--dropdown2');
        if (target) {
            target.classList.toggle('header__navigation--dropdown2--active');
            evt.preventDefault();
            this.dispatch('it-toggleSubSubMenu');
            evt.stopPropagation();
        }
    }

    componentDidMount() {
        window.addEventListener('toggle-submenu', this.toggleSubmenu);
        this.addEventListener('click', this.onClick);
    }

    static get observedAttributes() {
        return ['newProps', 'id', 'sublinks'];
    }

    render() {
        return `
            <ul class="mobile-navigation__catalog mobile-navigation__subMenu ${this.state.isActive ? 'open' : 'closed'}">
                ${this.props.map((item) => {
                    if (item.sublinks) {
                        return `
                            <li class="mobile-catalog__submenu--item ">
                                <a href="${item.href}" class='mobile-navigation-for-children__link header__navigation--dropdown2'>${item.label}</a>
                                <it-subsublist subsublinks='${JSON.stringify(item.sublinks)}'></it-subsublist> 
                            </li>
                        `
                    }
                    return `
                        <li class="mobile-catalog__submenu--item">
                            <a href="${item.href}" class='header__navigation--dropdown2'>${item.label}</a> 
                        </li>
                `
                }).join(' ')} 
            </ul>
        `
    }

    componentWillUnmount() {
        window.removeEventListener('toggle-submenu', this.toggleSubmenu);
        this.removeEventListener('click', this.onClick);
    }
}

customElements.define('it-sublist', Sublist)