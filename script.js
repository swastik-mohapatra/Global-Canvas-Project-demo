const btnFunc=()=>{
    alert('You need to create an account')
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#scrolller").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $("#scrolller").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });
  $("i").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});