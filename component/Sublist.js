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

    toggleSubmenu(evt) {
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
        this.addEventListener('click', (evt) => {
            const target = document.querySelector('.header__navigation--dropdown2');
            if(target) {
                evt.preventDefault();
                this.dispatch('it-toggleSubSubMenu');
                evt.stopPropagation()
            }
        })
    }

    static get observedAttributes() {
        return ['sublinks'];
    }

    render() {
        return `
            <ul class="mobile-navigation__catalog mobile-navigation__subMenu ${this.state.isActive ? 'open' : 'closed'}">
                ${this.props.map((item) => {
                        return `
                            <li class="mobile-catalog__submenu--item mobile-navigation-for-children__link">
                                <a href="${item.href}" class='header__navigation--dropdown2'>${item.label}</a>
                                ${item.sublinks ? `<it-subsublist subsublinks='${JSON.stringify(item.sublinks)}'></it-subsublist>` : ''}  
                            </li>
                        `                    
                }).join(' ')} 
            </ul>
        `
    }
}

customElements.define('it-sublist', Sublist)