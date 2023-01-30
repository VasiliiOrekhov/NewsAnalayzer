import Swiper, { Navigation, Pagination } from 'swiper';
import './about.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { api } from '../../js/Api.js';

api.getCommits();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 16,
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
