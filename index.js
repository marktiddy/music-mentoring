//Some script to implement smooth scrolling on all browsers

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function(event) {
  $(".navbar-brand").hide();
});

//Let's try and capture the data spy
$(window).scroll(function(event) {
  var scrolled_val = $(document)
    .scrollTop()
    .valueOf();

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
    $(".navbar-brand").show({
      duration: 200
    });
  } else {
    $(".navbar-brand").hide({
      duration: 200
    });
  }
}
