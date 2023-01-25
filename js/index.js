import '../style/style.scss';
import '../style/about.scss';
import '../style/analytics.scss';
import { api } from './Api.js';
import { FormSearch } from './FormSearch.js';
import { FormValidator } from './FormValidator.js';
import { changeSection } from './ChangeSection.js';
import { CardList } from './CardList.js';

const cardList = new CardList();

export const formValidator = new FormValidator();
const searchNewsCallback = async (value) => {
  try {
    changeSection.removeCard();
    changeSection.removeNoResult();
    changeSection.toggleLoading();
    const response = await api.getCards(value);
    const result = await response.json();
    changeSection.addCard();
    cardList.init(result.articles);
  } catch (error) {
    changeSection.addNoResult();
    console.log(error);
  }
  changeSection.toggleLoading();
};

export const form = new FormSearch(searchNewsCallback);
