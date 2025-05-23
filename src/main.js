import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.mySwiperCourses', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
        nextEl: ".swiperCourses-button-next",
        prevEl: ".swiperCourses-button-prev",
      },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
    }
});
const swiperstudent = new Swiper(".mySwiperStudent", {
  modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 30,
      loop: true,
    });