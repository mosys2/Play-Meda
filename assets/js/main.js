let headerFixBox = document.querySelector(".herder-fix");
// document.addEventListener("scroll", () => {
//     if (window.pageYOffset > 174) {
//         headerFixBox.classList.add("scrolled");
//     } else {
//         headerFixBox.classList.remove("scrolled");
//     }
// })

// OWL Product****************
$(document).ready(function () {
    var discount = $("#owl-discount");
    var suggest = $("#owl-suggest");
    var bestSelling = $("#owl-best-selling");
    var secondHand = $("#owl-secondhand");


    discount.owlCarousel({
        items: 1, //10 items above 1000px browser width
        loop: true,
        autoplay: true,
        rtl: true,
        responsive: {
            480: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1200: { items: 4 },

        },
    });
    $('#next-discount-slide').click(function () {
        discount.trigger('next.owl.carousel');
    });

    suggest.owlCarousel({
        items: 1, //10 items above 1000px browser width
        loop: true,
        autoplay: true,
        rtl: true,
        responsive: {
            480: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1200: { items: 4 },

        },
    });
    $('#next-suggest-slide').click(function () {
        suggest.trigger('next.owl.carousel');
    });

    bestSelling.owlCarousel({
        items: 1, //10 items above 1000px browser width
        loop: true,
        rtl: true,
        responsive: {
            480: { items: 1.5 },
            768: { items: 1.5 },
            1024: { items: 2.5 },
            1200: { items: 3.1 },
        },
    });

    secondHand.owlCarousel({
        items: 1, //10 items above 1000px browser width
        loop: true,
        autoplay: true,
        rtl: true,
        responsive: {
            480: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1200: { items: 4 },

        },
    });
    $('#next-secondhand-slide').click(function () {
        secondHand.trigger('next.owl.carousel');
    });

});

//Like product
$('.like').click(function () {
    $(this).toggleClass('liked');
});