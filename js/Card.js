export class Card {
  constructor(title, publishedAt, description, source, urlToImage, url) {
    this.title = title;
    this.publishedAt = publishedAt.substring(0, 10);
    this.description = description;
    this.source = source;
    this.urlToImage = urlToImage;
    this.urlCard = url;
    this.card = null;
  }
  create() {
    const template = `<a class="find-result_card-link" href=${this.urlCard} target="_blank">
        <div class="find-result_card">
        <img
          src=${this.urlToImage}
          alt="card-image"
          class="find-result_card-image"
        />
        <div class="find-result_card-description">
          <div>
          <h3 class="find-result_card-date">${this.publishedAt}</h3>
          <h3 class="find-result_card-title">${this.title}</h3>
          <h4 class="find-result_card-text">${this.description}</h4>
          </div>
          <div class="find-result_card-media">${this.source.name}</div>
        </div>
      </div></a>`;

    const node = document.createRange().createContextualFragment(template);
    this.card = node.firstChild;
    return node;
  }
}
