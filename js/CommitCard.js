export class CommitCard {
  constructor(commit, author) {
    this.commit = commit;
    this.author = author;
    this.card = null;
  }
  create() {
    const template = `
    <div class="swiper-slide">
    <h3 class="swiper-slide_date">${this.commit.committer.date.substring(0, 10)}</h3>
    <div class="swiper-slide_profile">
      <img
        src=${this.author.avatar_url}
        alt="author-image"
        class="swiper-slide_image"
      />
      <div class="swiper-slide_profile-info">
        <h3 class="swiper-slide_profile-name">${this.commit.committer.name}</h3>
        <h3 class="swiper-slide_profile-email">${this.commit.committer.email}</h3>
      </div>
    </div>
    <h4 class="swiper-slide_text">${this.commit.message}</h4>
  </div>`;

    const node = document.createRange().createContextualFragment(template);
    return node;
  }
}
