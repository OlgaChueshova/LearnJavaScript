import { Component } from "./Component.js";

export class Subsublist extends Component {
    constructor() {
        super();
        this.props = JSON.parse(this.getAttribute('subsublinks'));
        this.state = {
            isOpen: false
        }
        this.toggleSubSubMenu = this.toggleSubSubMenu.bind(this)
    }

    toggleSubSubMenu() {
        return this.setState((state) => {
            return {
                isOpen: !this.state.isOpen
            }
        })
    }

    connectedCallback() {
        this.render();
        window.addEventListener('it-toggleSubSubMenu', this.toggleSubSubMenu);
    }

    static get observedAttributes() {
        return ['subsublinks'];
    }

    render() {
        return `
            <ul class="mobile-navigation__subMenu ${this.state.isOpen ? 'open' : 'closed'}">
                ${this.props.map((item) => {
                    return `
                        <li class="mobile-navigation-for-children__sub-list--item">
                            <a href="${item.href}" class="mobile-navigation-for-children__sub-list--link">${item.label}</a>
                        </li>
                    `
                }).join(' ')}
            </ul>
        `
    }

    disconnectedCallback() {
        window.removeEventListener('it-toggleSubSubMenu');
    }
}

customElements.define('it-subsublist', Subsublist)