$(document).ready(function () {

  // Sticky navbar + scroll-up button
  $(window).scroll(function () {

    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Scroll to top
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll for menu
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Mobile menu toggle
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animation (refined)
  var typed = new Typed(".typing", {
    strings: [
      "Mechanical Professional",
      "Thermal & Nuclear Projects",
      "24+ Years Experience"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });

});
