"use strict";

$(document).ready(function () {
  var owl = $('.product-show');
  owl.owlCarousel({
    nav: true,
    loop: true,
    autoplay: true,
    responsive: {
      1000: {
        items: 1
      },
      600: {
        items: 1
      },
      0: {
        items: 1
      }
    }
  });
  owl.on('changed.owl.carousel', function (e) {
    var index = e.page.index;

    for (i = 0; i <= 3; i++) {
      $('#dot' + i).removeClass("border");
    }

    $('#dot' + index).addClass("border");
  });
});