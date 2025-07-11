import Swiper from 'swiper';
import 'swiper/css';
import { openBar } from './js/header.js';
import { cookiePolicy } from './js/cookiesPolicy.js';
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: -10,
  slidesPerView: 1,
  simulateTouch: true,
  grabCursor: true,
});
openBar();
cookiePolicy();
