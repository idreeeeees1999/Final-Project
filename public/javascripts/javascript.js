$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 40) {
        $("#nav").addClass("test");
        $("#nav2").removeClass("test");
        $("#nav2").addClass("test2");
      } else {
        $("#nav").removeClass("test");
        $("#nav2").addClass("test");
        $("#nav2").removeClass("test2");
      }
    });
  });

