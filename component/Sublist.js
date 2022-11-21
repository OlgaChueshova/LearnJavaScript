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
            const target = evt.target.closest('.header__navigation--dropdown2');
            if(target) {
                target.classList.toggle('mobile-navigation-for-children__link--active');
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
                    if(item.sublinks){
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

    disconnectedCallback() {
        window.removeEventListener('toggle-submenu');
    }
}

customElements.define('it-sublist', Sublist)