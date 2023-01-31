import Swiper, { Navigation, Pagination } from 'swiper';
import './about.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { api } from '../../js/Api.js';
import { CommitList } from '../../js/CommitList.js';
const commitList = new CommitList();

const commitsCallback = async () => {
  const response = await api.getCommits();

  try {
    const result = await response.json();
    commitList.init(result);
  } catch (error) {
    console.log(error);
  }
};
commitsCallback();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 16,
  centerInsufficientSlides: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
