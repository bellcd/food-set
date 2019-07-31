$(window).on('load', function() {
  let $mapContainer = $('.map-container');
  let $close, $temp;
  let spiceList = $('area');
  const spiceLinks = [

  ];
  for (let i = 0; i < spiceList.length; i++) {
    $(spiceList[i]).on('mouseover', function(event) {
      event.preventDefault();

      if ($temp) {
        removeTemp();
      }

      $temp = $('<div id="temp"></div>').appendTo($mapContainer);
      const name1 = event.target.id;
      const name2 = event.target.classList[0];

      const $tempTitle = $(`<a href="${event.target.href}"><h3>${name2 === undefined ? name1 : name2}</h3></a>`).appendTo($temp);
      $tempTitle.addClass('temp-title');

      $temp.attr('position', 'absolute');
      $temp.css({
        'top': event.pageY + 'px',
        'left': event.pageX + 'px'
      });

      $temp.addClass()

      $close = $('<p>close</p>').appendTo($temp);
      $close.css({
        cursor: 'pointer'
      })

      $close.on('click', removeTemp);
    });
  }

  const removeTemp = function() {
    $temp.remove();
  }
});