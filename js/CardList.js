import { Card } from './Card.js';

export class CardList {
  constructor() {
    this.moreButton = document.querySelector('.find-result_show-more-button');
    this.findResult = document.querySelector('.find-result_grid');
    this.loadedCards = [];
    this.showedCards = 0;
    this.listners();
  }
  init(loadedCards) {
    this.showedCards = 0;
    this.moreButton.classList.remove('find-result_show-more-button_close');

    this.loadedCards = loadedCards;
    const threeCard = this.loadedCards.slice(0, this.showedCards + 3);
    const container = document.createDocumentFragment();
    threeCard.forEach(({ title, publishedAt, description, source, urlToImage, url }) => {
      const card = new Card(title, publishedAt, description, source, urlToImage, url);
      const node = card.create();
      container.append(node);
    });
    this.render(container);
  }

  render(node) {
    this.findResult.textContent = '';
    this.findResult.append(node);
  }
  showMore() {
    this.showedCards = this.showedCards + 3;
    const threeCard = this.loadedCards.slice(this.showedCards, this.showedCards + 3);
    const container = document.createDocumentFragment();
    threeCard.forEach(({ title, publishedAt, description, source, urlToImage, url }) => {
      const card = new Card(title, publishedAt, description, source, urlToImage, url);
      const node = card.create();
      container.append(node);
    });
    this.renderMore(container);
    if (this.showedCards + 3 > this.loadedCards.length) {
      this.moreButton.classList.add('find-result_show-more-button_close');
    }
  }
  renderMore(node) {
    this.findResult.append(node);
  }
  listners() {
    this.moreButton.addEventListener('click', this.showMore.bind(this));
  }
}
