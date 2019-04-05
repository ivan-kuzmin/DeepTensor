$( document ).ready(function() {
  $(".anchor").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 400,
      easing: "swing"
    });
    return false;
  });
});
