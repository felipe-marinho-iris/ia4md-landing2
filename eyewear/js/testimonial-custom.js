$(document).ready(function() {
    // Inicializa o carrossel de depoimentos
    $(".testimonial-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
    
    // Inicializa o carrossel de fotos do evento
    $(".event-photos-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
});
