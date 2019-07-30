$(window).on('load', function() {
  let $mapContainer = $('.map-container');
  let $close, $temp;

  let $area1 = $('#area1');
  $area1.on('mouseover', function(event) {
    event.preventDefault();

    if ($temp) {
      removeTemp();
    }
    console.log(event);
    $(event.target).toggleClass('hello');
    $temp = $('<div id="temp">Here is stuff</div>').appendTo($mapContainer);
    $temp.attr('position', 'absolute');
    $temp.css({
      'top': event.pageY + 'px',
      'left': event.pageX + 'px'
    });

    $close = $('<p>close</p>').appendTo($temp);
    $close.css({
      cursor: 'pointer'
    })

    $close.on('click', removeTemp);
  });

  const removeTemp = function() {
    $temp.remove();
  }
});