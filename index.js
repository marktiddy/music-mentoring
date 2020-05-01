//Some script to implement smooth scrolling on all browsers

$(document).ready(function () {
  ScrollReveal().reveal('.text-center');
  ScrollReveal().reveal('.highlight-card');
  ScrollReveal().reveal('.testimonals-section');
  ScrollReveal().reveal('#contact-us');

  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function (event) {
  $('.navbar-brand').hide();
});

//Let's try and capture the data spy
$(window).scroll(function (event) {
  var scrolled_val = $(document).scrollTop().valueOf();

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    logoDisplay(scrolled_val, 200);
  } else {
    logoDisplay(scrolled_val, 500);
  }
});

function logoDisplay(val, param) {
  if (val > param) {
    $('.navbar-brand').show({
      duration: 200,
    });
  } else {
    $('.navbar-brand').hide({
      duration: 200,
    });
  }
}

//Email script
import token from './js_config/mail';

$('#mentoring-contact-form').on('submit', (event) => {
  event.preventDefault();
  submitContactForm();
});

const submitContactForm = (event) => {
  //jquery to get content

  const name = $('#name-input').val();
  const email = $('#email-input').val();
  const message = $('#message-input').val();
  console.log(token);
  // Send the email and display success
  Email.send({
    SecureToken: 'b2525a9a-f4ca-4bcb-8f4b-74595ae6fb7f',
    To: 'dan@musicmentoring.live',
    From: email,
    Subject: `Website message from ${name}`,
    Body: message,
  }).then((message) => {
    if (message === 'OK') {
      $('#success-message').fadeIn();
      $('#mentoring-contact-form').fadeOut();
      resetFormFields();
    } else {
      $('#error-message').fadeIn();
      $('#mentoring-contact-form').fadeOut();
      resetFormFields();
    }
  });

  //empty fields and show empty form after time period
};

const resetFormFields = () => {
  setTimeout(() => {
    $('#success-message').fadeOut();
    $('#error-message').fadeOut();
    $('#mentoring-contact-form').fadeIn();
    $('#name-input').val('');
    $('#email-input').val('');
    $('#message-input').val('');
    name = '';
    email = '';
    message = '';
  }, 6000);
};
