$(function() {
  $('.menu-btn, .header-menu__close').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu-btn').toggleClass('menu-btn--active');
    $('body').toggleClass('lock');
  });
});