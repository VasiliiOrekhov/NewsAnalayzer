import { CommitCard } from './CommitCard.js';

export class CommitList {
  constructor() {
    this.commitsContainer = document.querySelector('.swiper-wrapper');
    this.loadedCommits = [];
  }
  init(loadedCommits) {
    const container = document.createDocumentFragment();
    loadedCommits.forEach(({ commit, author }) => {
      const commitCard = new CommitCard(commit, author);
      const node = commitCard.create();
      container.append(node);
    });
    this.render(container);
  }

  render(node) {
    this.commitsContainer.append(node);
  }
}
