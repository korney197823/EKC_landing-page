(function() {
  'use strict';



  //TABS
  function onTabClick(event) {
    event.preventDefault();
    let actives = document.querySelectorAll('.active');
    console.log(actives);

    
    for(let i=0; i < actives.length; i++) {
      console.log(actives[i]);
      actives[i].className = actives[i].className.replace('active', '')

    }

    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  }
  let el = document.getElementById('nav-tab');
  el.addEventListener('click', onTabClick, false);

  //Slick slider initialization
  $('.slider').slick({
    dots: true,
    speed: 500,
    cssEase: 'linear'
  });

  })();

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();

    let sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $('html, body').animate({scrollTop: dn}, 1000);

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});