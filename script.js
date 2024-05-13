window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var circles = document.querySelectorAll(".circle");
    var name = document.querySelector(".name");
    var circle_cntr = document.querySelector(".circle-container");
  
    circles.forEach(function (circle, index) {
      var offset = scrollPosition * (index - 1) * 0.3;
      circle.style.transform =
        "translate(" + offset + "px, -" + scrollPosition + "px)";
    });
  
    name.style.transform = "translateY(" + (-18 - scrollPosition) + "px)";
  
    circle_cntr.style.setProperty("--blursize", Math.max(50 - (scrollPosition/2), 20) + "px");
  });