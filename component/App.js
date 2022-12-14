import { Dropdown } from "./Dropdown.js";
import { List } from "./List.js";
import { Button } from "./Button.js";
import { Component } from "./Component.js";

export class App extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="header-mobile">
            <div class="header-mobile-wrapper">
                <div class="header__logo header-mobile-wrapper__logo">
                    <img src="./images/logo-white.svg" alt="logo">
                </div>
                <it-dropdown></it-dropdown>
            </div>
        </div>
        `
    }

}

customElements.define('it-header', App);