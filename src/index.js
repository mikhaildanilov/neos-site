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
  $('#firstBlock > .main__product > .radio').click(function () {
    $('#secondBlock').css('display', 'grid');
  });

  $('#secondBlock > .main__product-wrap > .main__product > .radio').click(function () {
    $('#thirdBlock').css('display', 'flex');
  });

  $('#openOrderPopup').click(function () {
    $('#orderPopup').addClass('active');
  });

  $('#openOrderPopup2').click(function () {
    $('#orderPopup').addClass('active');
  });

  $('#openProductsPopup').click(function () {
    $('#productsPopup').addClass('active');
  });

  $('#orderSubmit').click(function () {
    $('#orderPopup').removeClass('active');
    $('#orderAccess').addClass('active');
  });

  // выбор радио
  let radio = $('.radio');
  radio.click(function () {
    $('input:radio').parent('.main__product').css('background', '#fff');
    $('input:radio:checked').parent('.main__product').css('background', '#27b7bf');
  });
});

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    $('.popup__wrap').removeClass('active');
  }
});
