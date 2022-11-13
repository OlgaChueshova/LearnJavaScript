import { Button } from "./Button.js";

export class Dropdown extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="header-mobile-wrapper__menu header__navigation--dropdown">
        <it-button src1="./images/hmb-mobile-white.svg" src2="./images/close-white.svg"></it-button>
        <it-list></it-list>
        </div>
        `
    }
}

customElements.define('it-dropdown', Dropdown);