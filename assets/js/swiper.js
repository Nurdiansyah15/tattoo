var swiper = new Swiper(".mySwiper", {
  loop: "true",
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 0 hp
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768 tablet
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 992 dekstop
    992: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});
