import { Component } from "./Component.js";

export class Button extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
        this.changeButton = this.changeButton.bind(this)
    }

    changeButton() {
        return this.setState((state) => {
            return {
                ...state,
                isActive: !this.state.isActive
            }
        });
    }

    connectedCallback() {
        this.render();
        window.addEventListener('toggle-menu', this.changeButton);
        this.addEventListener('click', ()=> {
            return this.dispatch('toggle-menu')
        })
    }

    static get observedAttributes() {
        return ['src1', 'src2'];
    }

    render() {
        return this.innerHTML = `
        <button class="header-mobile-wrapper__menu--button">
            <img src="${this.state.isActive ? this.props.src2 : this.props.src1}" alt="hamburger"
                class="header-mobile-wrapper__menu--button-hmb header-mobile-wrapper__menu--button-close">
        </button>
        `
    }

    disconnectedCallback() {
    }
}

customElements.define('it-button', Button)