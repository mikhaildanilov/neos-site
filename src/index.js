import './styles/main.sass';
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // закрытие попапа
  $('.popup__close').click(function () {
    $('.popup__wrap').removeClass('active');
  });

  // выбор решения
  $('#firstBlock > .radio__wrap > .radio').click(function () {
    $('#secondBlock').slideDown(400);
  });

  $('#secondBlock > .radio__wrap > .radio').click(function () {
    $('#thirdBlock').css('display', 'flex');
  });

  $('#openOrderPopup').click(function () {
    $('#orderPopup').addClass('active');
  });

  $('#openProductsPopup').click(function () {
    $('#productsPopup').addClass('active');
  });

  $('#orderSubmit').click(function () {
    $('#orderPopup').removeClass('active');
    $('#orderAccess').addClass('active');
    // setTimeout($('#orderAccess').removeClass('active'), 3000);
  });
});

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    $('.popup__wrap').removeClass('active');
  }
});
