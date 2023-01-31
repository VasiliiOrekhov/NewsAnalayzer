import { Card } from './Card.js';
import { xDayAgo } from './utils.js';

export class CardList {
  constructor() {
    this.moreButton = document.querySelector('.find-result_show-more-button');
    this.findResult = document.querySelector('.find-result_grid');
    this.analyticButton = document.querySelector('.find-result_analitic-link');
    this.loadedCards = [];
    this.showedCards = 0;
    this.listners();
  }
  init(loadedCards) {
    this.findResult.textContent = '';
    this.showedCards = 0;
    this.moreButton.classList.remove('find-result_show-more-button_close');
    this.loadedCards = loadedCards;
    const threeCard = this.loadedCards.slice(this.showedCards, this.showedCards + 3);

    this.render(threeCard);
  }

  showMore() {
    this.showedCards = this.showedCards + 3;
    const threeCard = this.loadedCards.slice(this.showedCards, this.showedCards + 3);
    this.render(threeCard);
    if (this.showedCards + 4 > this.loadedCards.length) {
      this.moreButton.classList.add('find-result_show-more-button_close');
    }
  }

  render(threeCard) {
    const container = document.createDocumentFragment();
    threeCard.forEach(({ title, publishedAt, description, source, urlToImage, url }) => {
      const card = new Card(title, publishedAt, description, source, urlToImage, url);
      const node = card.create();
      container.append(node);
    });
    this.findResult.append(container);
  }

  analytics() {
    sessionStorage.setItem('totalResults', this.loadedCards.length);
    sessionStorage.setItem('cards', this.loadedCards);

    let titleCounter = 0;
    const titleAndTextCounterOfDay = {};
    for (let i = 0; i < 7; i++) {
      titleAndTextCounterOfDay[xDayAgo(i)] = 0;
    }

    this.loadedCards.forEach((el) => {
      const strTitle = el.title.toLowerCase();
      const strText = el.description.toLowerCase();
      const regexp = new RegExp(`${sessionStorage.getItem('request')}`, 'gi');
      const arrayTitle = [...strTitle.matchAll(regexp)];
      const arrayText = [...strText.matchAll(regexp)];

      titleAndTextCounterOfDay[el.publishedAt.substring(0, 10)] =
        titleAndTextCounterOfDay[el.publishedAt.substring(0, 10)] +
        arrayTitle.length +
        arrayText.length;

      titleCounter = titleCounter + arrayTitle.length;
    });
    sessionStorage.setItem('titleCounter', titleCounter);
    sessionStorage.setItem('titleAndTextCounterOfDay', JSON.stringify(titleAndTextCounterOfDay));
    console.log(titleAndTextCounterOfDay);
  }

  listners() {
    this.moreButton.addEventListener('click', this.showMore.bind(this));
    this.analyticButton.addEventListener('click', this.analytics.bind(this));
  }
}
