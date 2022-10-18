class App extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                id: 1,
                title: "Xiaomi 10C",
                previev: "./images/1",
                descriptions: "Xiaomi 10C hgdcghhhhhhhhhhhhhhhg hhhhhhh",
                price: 150,
            },
            {
                id: 1,
                title: "Xiaomi 20C",
                previev: "./images/2",
                descriptions: "Xiaomi 20C hgdcghhhhhhhhhhhhhhhg hhhhhhh",
                price: 300,
            },
            {
                id: 1,
                title: "Xiaomi 5X",
                previev: "./images/3",
                descriptions: "Xiaomi 5X hgdcghhhhhhhhhhhhhhhg hhhhhhh",
                price: 600,
            },
            {
                id: 1,
                title: "Xiaomi 12B",
                previev: "./images/4",
                descriptions: "Xiaomi 12B hgdcghhhhhhhhhhhhhhhg hhhhhhh",
                price: 150,
            },
            {
                id: 1,
                title: "Xiaomi 15U",
                previev: "./images/5",
                descriptions: "Xiaomi 15U hgdcghhhhhhhhhhhhhhhg hhhhhhh",
                price: 250,
            },
      
        ]
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `IT works!`
    }
}

customElements.define('it-app', App)