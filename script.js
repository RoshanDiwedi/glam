$(document).ready(function () {
  $(".nav-item").on("click", showSecondaryNav);
  function showSecondaryNav(event) {
    console.log("test");
    event.preventDefault();
    $(".secondory-nav").toggleClass("active");
  }

  /* Video Popup */

  $(".video img").on("click", function () {
    $(".video-popup").show(1000);
  });

  $(".video-popup p").on("click", function () {
    $(".video-popup").hide();
  });
});
