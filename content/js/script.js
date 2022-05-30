AOS.init();

$(".carousel-fotos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 580,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$(".menu-icon").click(function() {
    $(".nav").toggleClass("ativo");
});

$('.carousel-fotos').lightGallery({
    selector: '.slick-slide:not(.slick-cloned) .lightgallery',
});

$(document).ready(function() {
    $('#lightgallerydois').lightGallery();
    $('#lightgallery3').lightGallery();
});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 100) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".navbar").removeClass("large").addClass("small"); //TROCA P CLASSE MENOR
    } else {
        $(".navbar").removeClass("small").addClass("large"); //VOLTA P MENU GRANDE ORIGINAL
    }
});