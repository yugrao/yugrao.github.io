window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var circles = document.querySelectorAll('.circle');
    var name = document.querySelector('.name');

    circles.forEach(function(circle, index) {
        var offset = scrollPosition * (index - 1) * 0.3;
        circle.style.transform = 'translate(' + offset + 'px, -' + scrollPosition + 'px)';
    });
});
