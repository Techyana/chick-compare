$(document).ready(function() {
    $('.carousel').carousel({
        interval: 5000
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('hero-video');
    if (video) {
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
    }
});