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
    changeSection.removeCard();
    changeSection.removeNoResult();
    changeSection.toggleLoading();
    const response = await api.getCards(value);
    const result = await response.json();
    console.log(result);

    //----------------------------------------------------------------------
    // let counter = 0;
    // console.log(localStorage.getItem('request'));
    // for (let i = 0; i < result.articles.length; i++) {
    //   let posTitle = result.articles[i].title
    //     .toLowerCase()
    //     .indexOf(localStorage.getItem('request'));
    //   while (posTitle != -1) {
    //     counter++;
    //     posTitle = result.articles[i].title
    //       .toLowerCase()
    //       .indexOf(localStorage.getItem('request'), posTitle + 1);
    //   }
    //   // let posText = result.articles[i].description
    //   //   .toLowerCase()
    //   //   .indexOf(localStorage.getItem('request'));
    //   // while (posText != -1) {
    //   //   counter++;
    //   //   posText = result.articles[i].description
    //   //     .toLowerCase()
    //   //     .indexOf(localStorage.getItem('request'), posText + 1);
    //   // }
    // }
    // console.log(counter);
    //----------------------------------------------------------------------

    if (result.articles.length > 0) {
      changeSection.addCard();
      cardList.init(result);
    } else {
      changeSection.addNoResult();
    }
  } catch (error) {
    console.log(error);
  }
  changeSection.toggleLoading();
};

export const form = new FormSearch(searchNewsCallback);
