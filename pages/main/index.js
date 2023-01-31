import './style.scss';
import { api } from '../../js/Api.js';
import { FormSearch } from '../../js/FormSearch.js';
import { FormValidator } from '../../js/FormValidator.js';
import { changeSection } from '../../js/ChangeSection.js';
import { CardList } from '../../js/CardList.js';

const cardList = new CardList();

export const formValidator = new FormValidator();
const searchNewsCallback = async (value) => {
  try {
    changeSection.clearResult();
    changeSection.toggleLoading();
    const response = await api.getCards(value);
    const result = await response.json();
    if (result.articles.length > 0) {
      changeSection.addCard();
      cardList.init(result.articles);
    } else {
      changeSection.addNoResult();
    }
  } catch (error) {
    console.log(error);
  }
  changeSection.toggleLoading();
};

export const form = new FormSearch(searchNewsCallback);
