import { Component } from "./Component.js";

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
        console.log('bgcfx')
        return this.setState((state) => {
            return {
                ...state,
                isActive: !this.state.isActive
            }
        })
    }

    connectedCallback() {
        this.render();
        window.addEventListener('toggle-submenu', this.toggleSubmenu);
    }

    static get observedAttributes() {
        return ['sublinks'];
    }

    render() {
        return `
            <ul class="mobile-navigation__subMenu ${this.state.isActive ? 'open' : 'closed'}">
                ${this.props.map((item) => {
                    return `
                        <li class="mobile-catalog__submenu--item header__navigation--dropdown">
                            <a href="${item.href}">${item.label}</a>
                        </li>
                    `
                }).join(' ')} 
            </ul>
        `
    }
}

customElements.define('it-sublist', Sublist)