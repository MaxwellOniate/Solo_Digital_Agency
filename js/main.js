// Remove preloader once page is fully loaded.
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

// Show & Hide White Navigation Bar
$(function () {
  showHideNav();

  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $('nav').addClass('white-nav');
      // Show dark logo
      $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
    } else {
      // Hide white nav
      $('nav').removeClass('white-nav');
      // Show white logo
      $('.navbar-brand img').attr('src', 'img/logo/logo.png');
    }
  }
});

// Init scrollspy
$('body').scrollspy({ target: '.navbar' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value.
  if (this.hash !== '') {
    // Prevent default behaviors.
    e.preventDefault();
    // Store hash.
    const hash = this.hash;
    // Animate smooth scroll.
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900
    );
  }
});
// Add smooth scrolling
$('#main-nav a, .home-content a').on('click', function (e) {
  // Check for a hash value.
  if (this.hash !== '') {
    // Prevent default behaviors.
    e.preventDefault();
    // Store hash.
    const hash = this.hash;
    // Animate smooth scroll.
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900
    );
  }
});

// Team Owl Carousel Slider
$(function () {
  $('#team-members').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
  });
});

// Team Progress Bars
$(function () {
  $('#progress-bars').waypoint(
    function () {
      $('.progress-bar').each(function () {
        $(this).animate(
          {
            width: $(this).attr('aria-valuenow') + '%',
          },
          2000
        );
      });
      this.destroy();
    },
    { offset: 'bottom-in-view' }
  );
});

// Portfolio Filter
$(window).on('load', function () {
  // Init Isotope
  $('#isotope-container').isotope({});
  // Filter items on button click
  $('#isotope-filters').on('click', 'button', function () {
    // Get filter value
    const filterValue = $(this).attr('data-filter');
    // Filter portfolio items
    $('#isotope-container').isotope({
      filter: filterValue,
    });
    // Active button
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

// Magnific Popup
$(function () {
  $('#isotope-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
});

// Testimonial Slider
$(function () {
  $('#testimonial-slider').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
  });
});

// Stats Count Up

$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });
});

// Clients

$(function () {
  $('#client-list').owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
  });
});
