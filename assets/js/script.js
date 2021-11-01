//  -------Initialize Swiper---------
var swiper = new Swiper(".my_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });