
$(document).ready( () => {
  $('svg').on('click', function() {
    $(".blade").addClass("rotate").delay(1000).queue(function(next){
      $(this).removeClass("rotate");
      next();
    });
    // $('.blade').addClass('rotate').delay(1000).removeClass('rotate')
    // $('.blade')
  });
});

function addRotateClass(el) {
  $(el).addClass('rotate');
}
