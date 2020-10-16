
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





$('.btn-link').click(function() {
  $(this).toggleClass('active');
  
})

var $frame  = $('#basic');
var $slidee = $frame.children('ul').eq(0);
var $wrap   = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: 'basic',
  smart: 1,
  activateOn: 'click',
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 3,
  scrollBar: $wrap.find('.scrollbar'),
  scrollBy: 1,
  pagesBar: $wrap.find('.pages'),
  activatePageOn: 'click',
  speed: 300,
  elasticBounds: 1,
  easing: 'easeOutExpo',
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

  // Buttons
  forward: $wrap.find('.forward'),
  backward: $wrap.find('.backward'),
  prev: $wrap.find('.prev'),
  next: $wrap.find('.next'),
  prevPage: $wrap.find('.prevPage'),
  nextPage: $wrap.find('.nextPage')
});

// To Start button
$wrap.find('.toStart').on('click', function () {
  var item = $(this).data('item');
  // Animate a particular item to the start of the frame.
  // If no item is provided, the whole content will be animated.
  $frame.sly('toStart', item);
});

// To Center button
$wrap.find('.toCenter').on('click', function () {
  var item = $(this).data('item');
  // Animate a particular item to the center of the frame.
  // If no item is provided, the whole content will be animated.
  $frame.sly('toCenter', item);
});

// To End button
$wrap.find('.toEnd').on('click', function () {
  var item = $(this).data('item');
  // Animate a particular item to the end of the frame.
  // If no item is provided, the whole content will be animated.
  $frame.sly('toEnd', item);
});

// Add item
$wrap.find('.add').on('click', function () {
  $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
});

// Remove item
$wrap.find('.remove').on('click', function () {
  $frame.sly('remove', -1);
});

$('.scrollbar').css("width","329px");

if ($(window).width() == 768) {
  $('.scrollbar').css("width","250px");
} else if ($(window).width() < 767) {
  $('.scrollbar').css("width","107.5px");
}
 