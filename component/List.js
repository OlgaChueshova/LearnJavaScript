import { Link } from "./Link.js";

export class List extends HTMLElement {
    constructor() {
        super();
        this.links = [
            {
                label: 'Все курсы',
                href: '//'
            },
            {
                label: 'Об академии',
                href: '//'
            },
            {
                label: 'Мероприятия',
                href: '//'
            },
            {
                label: 'Новости',
                href: '//'
            },
            {
                label: 'База знаний',
                href: '//'
            },
            {
                label: 'Карьера',
                href: '//'
            },
            {
                label: 'Все контакты',
                href: '//'
            },
            {
                label: 'Нижний Новгород',
                href: '//',
            },
            {
                label: 'Войти',
                href: '//'
            },
            {
                label: '8 800 950-33-98',
                href: 'tel:88009503398'
            },
            {
                label: 'г.Москва, ул.Ленина, 50',
                href: ''
            },
            {
                label: 'info@futureacademy.ru',
                href: 'Mailto:info@futureacademy.ru'
            },
        ];
        this.state = {
            display: 'none'
        }
    }

    removeSelf() {
        const header = document.querySelector('.header-mobile');
        // const list = evt.target.closest('.mobile-navigation');
        header.addEventListener('click', () => {
            if (!this) {
                return this.remove();
            }
        })
    }

    connectedCallback() {
        const header = document.querySelector('.header-mobile');
        const dropdown = document.querySelector('.header__navigation--dropdown');
        header.addEventListener('click', () => {
            if (dropdown) {
                return this.render();
            }
            this.removeSelf();
        })
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.removeSelf);
    }

    render() {
        this.innerHTML = `
            <ul class="header-mobile-wrapper__menu--list mobile-navigation">
                <it-link  links='${JSON.stringify(this.links)}'></it-link>
            </ul>
        `
    }

}

customElements.define('it-list', List)



