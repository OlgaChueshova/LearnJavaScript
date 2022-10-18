export default class Card extends HTMLElement {
    constructor() {
        super()
    }


    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${this.dataset.previev}" class="card-img-top" alt="${this.dataset.previev}">
  <div class="card-body">
    <h5 class="card-title">${this.dataset.title}</h5>
    <p class="card-text">${this.dataset.description}</p>
    <p><strong>${this.dataset.price}<strong></p>
    <button href="#" class="btn btn-primary">Add to cart</button>
  </div>
</div>
    `
    }

}