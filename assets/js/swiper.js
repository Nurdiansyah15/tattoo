var swiper = new Swiper(".mySwiper", {
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
      spaceBetween: 20,
    },
    // when window width is >= 768 tablet
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 992 dekstop
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
