$(window).on('resize', function() {
  var win = $(this);
  if (win.width() < 736) {

    $('.jumbotron').addClass('jumbotron-fluid');

  } else {
    $('.jumbotron').removeClass('jumbotron-fluid');
  }
});