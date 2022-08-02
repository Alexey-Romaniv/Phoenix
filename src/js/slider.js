$(document).ready(function () {
  $('.reviews__slider-big').slick({
    asNavFor: '.reviews__slider-small',

    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
    mobileFirst: true, //max-width
  });
  $('.reviews__slider-small').slick({
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: false,
        },
      },
    ],
    mobileFirst: true,
    asNavFor: '.reviews__slider-big',
  });
});

// -----------------------------

$('.show').click(function () {
  $('.read-more-target').show(250);
  $('.hide').show(250);
  $('.dots').hide(250);
  $('.show').hide(250);
});
$('.hide').click(function () {
  $('.read-more-target').hide(250);
  $('.hide').hide(250);
  $('.dots').show(250);
  $('.show').show(250);
});
