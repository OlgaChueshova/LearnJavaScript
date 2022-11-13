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
    }

    removeSelf() {
        window.addEventListener('click', () => {
            if (!this) {
                this.remove();
            }
        })
    }

    connectedCallback() {
        const target = document.querySelector('.header__navigation--dropdown');
        window.addEventListener('click', (evt) => {
            if(target) {
                return this.render();
            }
        })
        this.removeSelf();
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



// this.links = {
//     allCourses: {
//         label: 'Все курсы',
//         subLinks: [
//             {
//                 label: 'Детям',
//                 subSubLinks: ['Робототехника', 'Создание игр', 'Программирование', 'Мультимедиа', 'Шахматы', 'Блогинг']
//             },
//             {
//                 label: 'Подросткам',
//                 subSubLinks: ['WEB-разработка', 'Графическое моделирование', 'Game Development', 'Soft skills', 'Шахматы', 'Блогинг']
//             },
//             {
//                 label: 'Взрослым',
//                 subSubLinks: ['Разработчик игр на Unity', 'Графическй дизайн', 'Тестировщик ПО', 'JAVA-разработчик', 'IOS-разработчик', 'Phyton-разработчик']
//             },
//         ]
//     },
//     otherLinks: [
//         {
//         label: 'Об академии',
//         href: '//'
//         },
//         {
//         label: 'Мероприятия',
//         href: '//'
//         },
//         {
//         label: 'Новости',
//         href: '//'
//         },
//         {
//         label: 'База знаний',
//         href: '//'
//         },
//         {
//         label: 'Карьера',
//         href: '//'
//         },
//         {
//         label: 'Все контакты',
//         href: '//'
//         },
//     ],
//     location:  {
//         label: 'Нижний Новгород',
//         subLinks: [
//             {
//                 label: 'Москва',
//                 href: '//'
//             },
//             {
//                 label: 'Ростов-на-Дону',
//                 href: '//'
//             },
//             {
//                 label: 'Санкт-Петербург',
//                 href: '//'
//             },
//             {
//                 label: 'Рязань',
//                 href: '//'
//             },
//             {
//                 label: 'Тюмень',
//                 href: '//'
//             },
//         ]
//     },
//     signIn: {
//         label: 'Войти',
//         href: '//'
//         },
//     tel: {
//         label: '8 800 950-33-98',
//         href: 'tel:88009503398'
//         },
//     adress: {
//         label: 'г.Москва, ул.Ленина, 50',
//         href: ''
//         },
//     email: {
//         label: 'info@futureacademy.ru',
//         href: 'Mailto:info@futureacademy.ru'
//         },
//     networks: [
//             {
//                 label: './images/networks/vk.svg',
//                 href: '//',
//             },
//             {
//                 image: './images/networks/instagram.svg',
//                 href: '//',
//             },
//             {
//                 image: './images/networks/facebook.svg',
//                 href: '//',
//             },
//             {
//                 image: './images/networks/youtube.svg',
//                 href: '//',
//             },
//             {
//                 image: './images/networks/telegram.svg',
//                 href: '//',
//             },
//         ],
//     yandex: {
//         label: './images/yandex.svg',
//         href: '//',
//         },
// };