$(document).ready(function() {
  $('#carouselExampleControls').on('slid.bs.carousel', function () {
    var activeIndex = $('.carousel-item.active').index();
    if (activeIndex === 0) {
      $('#boton-continuar').show();
    } else {
      $('#boton-continuar').hide();
    }
  });
});
