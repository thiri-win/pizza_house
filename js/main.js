const toggle = document.querySelector('#toggle')
const nav = document.querySelector('nav ul')

toggle.onclick = function () {
    nav.classList.toggle('active')
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
    });
});

AOS.init();