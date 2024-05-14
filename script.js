window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var circles = document.querySelectorAll(".circle");
  var name = document.querySelector(".name");
  var circle_cntr = document.querySelector(".circle-container");

  circles.forEach(function (circle, index) {
      var offset = scrollPosition / 3 * (index - 1) * 0.3;
      circle.style.transform =
          "translate(" + offset + "px, -" + scrollPosition / 3 + "px)";
  });

  name.style.transform = "translateY(" + (-18 - scrollPosition / 3) + "px)";

  circle_cntr.style.setProperty("--blursize", Math.max(50 - (scrollPosition / 2), 20) + "px");
});