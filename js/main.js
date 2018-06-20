var overlayDark = false;

$(document).ready(function () {
  // Navbar related functions
  $('.navbar-toggler').click(function() {  
    $('.overlay').addClass('overlay-darken').removeClass('overlay-lighten');
    overlayDark = true;
  });
  
  $('.overlay, .nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('.overlay').addClass('overlay-lighten').removeClass('overlay-darken');
    overlayDark = false;    
  });
  
  $(window).resize(function () {
    if ($(window).width() > 768) {
      overlayDark = false;      
    }
    if (overlayDark == false)
      {
        $('.navbar-collapse').collapse('hide');
        $('.overlay').addClass('overlay-lighten').removeClass('overlay-darken');
      }
  });  
  
});