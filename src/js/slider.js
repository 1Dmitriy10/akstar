import Swiper from 'swiper/bundle';

export const catalogSlider = new Swiper('.catalog__slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3.7,
        },
        768: {
            slidesPerView: 3.2,
        },
        576: {
            slidesPerView: 3.2,
        },
        400: {
            slidesPerView: 1.8,
        },
    },
});