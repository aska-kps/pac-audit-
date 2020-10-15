
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
    
});