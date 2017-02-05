(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

  $('.slider').slick({
    dots: true,
    speed: 500,
    //fade: true,
    cssEase: 'linear'
  });
})();