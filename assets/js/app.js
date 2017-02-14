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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG5cbiAgLy9UQUJTXG4gIGZ1bmN0aW9uIG9uVGFiQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhY3RpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZXMpO1xuXG4gICAgXG4gICAgZm9yKGxldCBpPTA7IGkgPCBhY3RpdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyhhY3RpdmVzW2ldKTtcbiAgICAgIGFjdGl2ZXNbaV0uY2xhc3NOYW1lID0gYWN0aXZlc1tpXS5jbGFzc05hbWUucmVwbGFjZSgnYWN0aXZlJywgJycpXG5cbiAgICB9XG5cbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5ocmVmLnNwbGl0KCcjJylbMV0pLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG4gIH1cbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi10YWInKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRhYkNsaWNrLCBmYWxzZSk7XG5cbiAgLy9TbGljayBzbGlkZXIgaW5pdGlhbGl6YXRpb25cbiAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgY3NzRWFzZTogJ2xpbmVhcidcbiAgfSk7XG5cbiAgfSkoKTtcblxuJChmdW5jdGlvbigpe1xuICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8g0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3QvtC1INC00LXQudGB0YLQstC40LVcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHNjID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcbiAgICAgIGRuID0gJChzYykub2Zmc2V0KCkudG9wO1xuICAgIC8qXG4gICAgICogc2MgLSDQsiDQv9C10YDQtdC80LXQvdC90YPRjiDQt9Cw0L3QvtGB0LjQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDRgtC+0LwsINC6INC60LDQutC+0LzRgyDQsdC70L7QutGDINC90LDQtNC+INC/0LXRgNC10LnRgtC4XG4gICAgICogZG4gLSDQvtC/0YDQtdC00LXQu9GP0LXQvCDQv9C+0LvQvtC20LXQvdC40LUg0LHQu9C+0LrQsCDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICAgKi9cblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IGRufSwgMTAwMCk7XG5cbiAgICAvKlxuICAgICAqIDEwMDAg0YHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdGF0L7QtNCwINCyINC80LjQu9C70LjRgdC10LrRg9C90LTQsNGFXG4gICAgICovXG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
