export class Card {
  constructor(title, publishedAt, description, source, urlToImage, url) {
    this.title = title;
    this.publishedAt = publishedAt.substr(0, 10);
    this.description = description;
    this.source = source;
    this.urlToImage = urlToImage;
    this.urlCard = url;
    this.card = null;
  }
  create() {
    const template = `
        <div class="find-result_card">
        <img
          src=${this.urlToImage}
          alt="card-image"
          class="find-result_card-image"
        />
        <div class="find-result_card-description">
          <h3 class="find-result_card-date">${this.publishedAt}</h3>
          <h3 class="find-result_card-title">${this.title}</h3>
          <h4 class="find-result_card-text">${this.description}</h4>
          <h3 class="find-result_card-media">${this.source.name}</h3>
        </div>
      </div>`;

    const node = document.createRange().createContextualFragment(template);
    this.card = node.firstChild;
    this.listner();
    return node;
  }

  listner() {
    this.card.nextElementSibling.addEventListener('click', () => window.open(this.urlCard));
  }
}
