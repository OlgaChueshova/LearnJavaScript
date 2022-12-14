import { Button } from "./Button.js";
import { Component } from "./Component.js";

export class Dropdown extends Component {
    constructor() {
        super();
        this.links = [
            {
                label: 'Все курсы',
                href: '',
                icon: './images/hamburger.svg',
                sublinks: [
                    {
                        label: 'Детям',
                        href: '',
                        sublinks: [
                            {
                                label: 'Робототехника',
                                href: '//'
                            },  
                            {
                                label: 'Шахматы',
                                href: '//'
                            },  
                            {
                                label: 'Программирование',
                                href: '//'
                            },  
                        ]
                    },
                    {
                        label: 'Подросткам',
                        href: '',
                        sublinks: [
                            {
                                label: 'Робототехника',
                                href: '//'
                            },  
                            {
                                label: 'Шахматы',
                                href: '//'
                            },  
                            {
                                label: 'Программирование',
                                href: '//'
                            },  
                        ]
                    },
                    {
                        label: 'Взрослым',
                        href: '',
                        sublinks: [
                            {
                                label: 'Робототехника',
                                href: '//'
                            },  
                            {
                                label: 'Шахматы',
                                href: '//'
                            },  
                            {
                                label: 'Программирование',
                                href: '//'
                            },  
                        ]
                    },
                ],
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
                href: '',
                icon: './images/location.svg',
                sublinks: [
                    {
                        label: 'Москва',
                        href: ''
                    },
                    {
                        label: 'Новосибирск',
                        href: ''
                    },
                    {
                        label: 'Санкт-Петербург',
                        href: ''
                    },
                    {
                        label: 'Астрахань',
                        href: ''
                    },
                    {
                        label: 'Азов',
                        href: ''
                    },
                ],
            },
            {
                label: 'Войти',
                icon: './images/person.svg',
                href: '//',
                icon: './images/person.svg',
            },
            {
                label: '8 800 950-33-98',
                href: 'tel:88009503398'
            },
            {
                label: 'г.Москва, ул.Ленина, 50',
            },
            {
                label: 'info@futureacademy.ru',
                href: 'Mailto:info@futureacademy.ru'
            },
            [
                {
                    label: 'instagram',
                    icon: './images/networks/instagram.svg',
                    href: '//'
                },
                {
                    label: 'facebook',
                    icon: './images/networks/facebook.svg',
                    href: '//'
                },
                {
                    label: 'youtube',
                    icon: './images/networks/youtube.svg',
                    href: '//'
                },
                {
                    label: 'telegram',
                    icon: './images/networks/telegram.svg',
                    href: '//'
                },
            ],
            {
                description: 'yandex',
                icon: './images/yandex.svg',
                href: '//'
            }
        ];
    }

    render() {
        return `
        <div class="header-mobile-wrapper__menu header__navigation--dropdown">
            <it-button src1="./images/hmb-mobile-white.svg" src2="./images/close-white.svg"></it-button>
            <it-list links='${JSON.stringify(this.links)}'></it-list>
        </div>
        `
    }
}

customElements.define('it-dropdown', Dropdown);