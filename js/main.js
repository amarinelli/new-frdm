// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});


// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});


// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $('html,body').animate({
              scrollTop: target.offset().top
          }, 1000);
          return false;
      }
    }
  });
});

// Middle image text caption on HOVER
$('#image-middle .portfolio-item').hover(
   function() {
  	 $(this).find('.image-text-extra').fadeIn(350);
     $(this).find('.image-text').fadeOut(350);
   },
   function() {
  	 $(this).find('.image-text-extra').fadeOut(350);
     $(this).find('.image-text').fadeIn(350);
   }
);

// Mobile click for text instead of hover
$('.image-text').click(
  function() {
    $('.image-text-extra').fadeIn(250);
    $('.image-text').fadeOut(250);
  });

$('.image-text-extra').click(
  function() {
  $('.image-text-extra').fadeOut(250);
  $('.image-text').fadeIn(250);
})

// Element visible when scroll into view
// $(window).scroll(function() {
//   if ($('#image-middle .portfolio-item').visible()) {
//     $('#image-middle .portfolio-item').find('.image-text').fadeIn(250);
//   } else {
//     $('#image-middle .portfolio-item').find('.image-text').fadeOut(1000);
//   }
// });

// Hide modal when user subscribes (opens new tab)
$('#mc-embedded-subscribe').click(function() {
  $('#emailModal').modal('hide');
})

// Textfill for welcome message
$(function() {
    $('#welcome-text').textfill({
      maxFontPixels: -1
    });
});

$( window ).resize(function() {
  $('#welcome-text').textfill({
    maxFontPixels: -1
  });
});


$(function() {
    $('#launching-text').textfill({
      maxFontPixels: -1
    });
});

$( window ).resize(function() {
  $('#launching-text').textfill({
    maxFontPixels: -1
  });
});

$(function() {
    $('#poem').textfill({
      maxFontPixels: -1
    });
});

$( window ).resize(function() {
  $('#poem').textfill({
    maxFontPixels: -1
  });
});
