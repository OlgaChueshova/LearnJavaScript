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

    onClick() {
        return this.dispatch('toggle-menu');
    }

    componentDidMount() {
        this.addEventListener('toggle-menu', this.changeButton);
        this.addEventListener('click', this.onClick);
    }

    static get observedAttributes() {
        return ['src1', 'src2'];
    }

    render() {
        return this.innerHTML = `
        <button type="button" class="header-mobile-wrapper__menu--button">
            <img src="${this.state.isActive ? this.props.src2 : this.props.src1}" alt="hamburger">
        </button>
        `
    }

    componentWillUnmount() {
        this.removeEventListener('toggle-menu', this.changeButton);
        this.removeEventListener('click', this.onClick)
    }
}

customElements.define('it-button', Button)