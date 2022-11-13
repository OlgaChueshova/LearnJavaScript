export class Button extends HTMLElement {
    constructor() {
        super();
        this.props = [];
    }

    removeSelf() {
        this.render(this.props.src2);
        this.addEventListener('click', () => {
            this.connectedCallback();
        })
    }

    connectedCallback() {
        this.render(this.props.src1);
        this.addEventListener('click', () => {
            return this.removeSelf();
        })
    }

    static get observedAttributes() {
        return ['src1', 'src2'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.getAttributeNames(name).forEach((name) => {
            return this.props[name] = this.getAttribute(name);
        })
    }

    render(props) {
        this.innerHTML = `
        <button class="header-mobile-wrapper__menu--button">
            <img src="${props}" alt="hamburger"
                class="header-mobile-wrapper__menu--button-hmb header-mobile-wrapper__menu--button-close">
        </button>
        `
    }

    disconnectedCallback() {
        this.addEventListener('click', this.removeSelf)
    }
}

customElements.define('it-button', Button)