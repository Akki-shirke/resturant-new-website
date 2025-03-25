$(document).ready(function () {
  var $window = $(window);
  var $header = $("header");
  var $autodate = $("#autodate");

  $window.scroll(function () {
    if ($window.scrollTop() > 50) {
      $header.addClass("sticky");
    } else {
      $header.removeClass("sticky");
    }
  });

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  $autodate.text(getCurrentYear());
});