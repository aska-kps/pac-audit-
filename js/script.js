
const headerIcon = $('.header__icon');
const mobileMenu = $('.menu');

headerIcon.on('click', function() {
    headerIcon.toggleClass('active');
    mobileMenu.toggleClass('active');
});

$(".header__menu").on("click","a", function (event) {
  event.preventDefault(); 
  headerIcon.removeClass('active');
  mobileMenu.removeClass('active');
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});



$( document ).ready(function() {
  var swiper = new Swiper('.reviews-slider', {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.reviews-arrow',
      prevEl: '.swiper-button-prev.reviews-arrow',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,

        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
        }
      },
  });

  // TRUST SCROLLBAR SLIDER



  var swiper3 = new Swiper('.teachers-slider', {
    slidesPerView: 3,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,

        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
        }
      },
  });
});


