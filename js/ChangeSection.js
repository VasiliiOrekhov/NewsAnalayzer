class ChangeSection {
  constructor() {
    this.findResultLoading = document.querySelector('.find-result_loading');
    this.findResultCard = document.querySelector('.find-result_card-section');
    this.findResultNoResult = document.querySelector('.find-result_noresult');
  }
  toggleLoading() {
    this.findResultLoading.classList.toggle('find-result_close');
  }
  addCard() {
    this.findResultCard.classList.remove('find-result_close');
  }
  removeCard() {
    this.findResultCard.classList.add('find-result_close');
  }
  addNoResult() {
    this.findResultNoResult.classList.remove('find-result_close');
  }
  removeNoResult() {
    this.findResultNoResult.classList.add('find-result_close');
  }
}
export const changeSection = new ChangeSection();
Object.freeze(changeSection);
