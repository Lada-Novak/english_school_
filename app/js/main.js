  //catalog btn
  $('.menu-extra__btn').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
  });

  //slick-slider curses
  $(function () {
    $('.courses__slider').slick({
      dots:true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 3
    })
  });

  //slick-slider curses
  $(function () {
    $('.aboutus__slider').slick({
      dots: true,
      arrows: false
    })
  });