$(window).on('load', function() {
  let $mapContainer = $('.map-container');

  let $area1 = $('#area1');
  $area1.on('mouseover', function(event) {
    event.preventDefault();
    console.log(event);
    $(event.target).toggleClass('hello');

    $mapContainer.append('<div id="temp">Here is stuff</div>');
    // console.log(event.pageY);
    $('#temp').attr('position', 'absolute');
    $('#temp').css({
      'top': event.pageY + 'px',
      'left': event.pageX + 'px'
    });
  });
});