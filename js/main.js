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

// Middle image text caption
$('#image-middle .portfolio-item').hover(
   function() {
  	 $(this).find('.image-text').fadeIn(250);
   },
   function() {
  	 $(this).find('.image-text').fadeOut(250);
   }
);

$( document ).ready(function() {
  // toastr options
  toastr.options = {
    "positionClass": "toast-bottom-center",
    "preventDuplicates": true,
    "timeOut": "2000"
  }
});


// Email signup modal
$('#submitEmail').click(function(){

  $('#emailAlert').hide();

  var email = $('#emailInput').val();

  // Valid Email
  if (validateEmail(email)) {
    $('#emailModal').modal('hide');

    // Display info toast
    $('#emailModal').on('hidden.bs.modal', function(e) {
      toastr.info('Email successfully submitted!')
    })
  }

  // Invalid Email
  else {
    $('#emailAlert').fadeIn(250);
  }
});

// When text input occurs
$('#emailInput').on('input', function() {
  console.log('change');
  $('#emailAlert').fadeOut(100);
});

// When modal is closed
$('#emailModal').on('hidden.bs.modal', function(e) {
  $('#emailInput').val("");
  $('#emailAlert').hide();
})

// Validate email
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};
