  //catalog btn
  $('.menu-extra__btn').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
  });