import { Card } from './Card.js';
import { xDayAgo } from './constants.js';

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
    this.showedCards = 0;
    this.moreButton.classList.remove('find-result_show-more-button_close');
    this.loadedCards = loadedCards;
    const threeCard = this.loadedCards.articles.slice(0, this.showedCards + 3);
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
    const threeCard = this.loadedCards.articles.slice(this.showedCards, this.showedCards + 3);
    const container = document.createDocumentFragment();
    threeCard.forEach(({ title, publishedAt, description, source, urlToImage, url }) => {
      const card = new Card(title, publishedAt, description, source, urlToImage, url);
      const node = card.create();
      container.append(node);
    });
    this.renderMore(container);
    if (this.showedCards + 3 > this.loadedCards.articles.length) {
      this.moreButton.classList.add('find-result_show-more-button_close');
    }
  }
  renderMore(node) {
    this.findResult.append(node);
  }
  analytics() {
    localStorage.setItem('totalResults', this.loadedCards.totalResults);
    localStorage.setItem('cards', this.loadedCards.articles);

    let titleCounter = 0;
    let titleAndTextCounterOfDay = [0, 0, 0, 0, 0, 0, 0];

    //проверка заголовков
    for (let i = 0; i < this.loadedCards.articles.length; i++) {
      let posTitle = this.loadedCards.articles[i].title
        .toLowerCase()
        .indexOf(localStorage.getItem('request'));
      while (posTitle != -1) {
        titleCounter++;
        for (let x = 0; x < 7; x++) {
          if (this.loadedCards.articles[i].publishedAt.substr(0, 10) === xDayAgo(x)) {
            titleAndTextCounterOfDay[x]++;
          }
        }
        posTitle = this.loadedCards.articles[i].title
          .toLowerCase()
          .indexOf(localStorage.getItem('request'), posTitle + 1);
      }
    }
    // проверка текста
    for (let k = 0; k < this.loadedCards.articles.length; k++) {
      let posTitle = this.loadedCards.articles[k].description
        .toLowerCase()
        .indexOf(localStorage.getItem('request'));
      while (posTitle != -1) {
        for (let n = 0; n < 7; n++) {
          if (this.loadedCards.articles[k].publishedAt.substr(0, 10) === xDayAgo(n)) {
            titleAndTextCounterOfDay[n]++;
          }
        }
        posTitle = this.loadedCards.articles[k].description
          .toLowerCase()
          .indexOf(localStorage.getItem('request'), posTitle + 1);
      }
    }

    localStorage.setItem('titleCounter', titleCounter);
    localStorage.setItem('titleAndTextCounterOfDay', titleAndTextCounterOfDay);
  }
  counter() {}

  listners() {
    this.moreButton.addEventListener('click', this.showMore.bind(this));
    this.analyticButton.addEventListener('click', this.analytics.bind(this));
  }
}
