
var o = $;

o(function(){
  var help = o('#help').hide();

  var drag
    , start;

  o('body *').mousedown(function(e){
    drag = o(this);
    start = e;
    help.find('.name').text(drag.attr('id') + ' - ');
  }).hover(function(){
    o(this).css('-webkit-box-shadow', 'inset 0 0 0 1px rgba(255,0,0,.5)');
  }).mouseout(function(){
    o(this).css('-webkit-box-shadow', 'none');
  });

  o(document).mousemove(function(e){
    if (!drag) return;
    var x = e.clientX - start.offsetX
      , y = e.clientY - start.offsetY;

    drag.css({
        left: x + 'px'
      , top: y + 'px'
    });

    help.show();
    help.find('.pos').text('top: ' + y + 'px; left: ' + x + 'px;');

    x += 5;
    y += 5;
    help.css({
        left: x + 'px'
      , top: y + 'px'
    });
  });

  o(document).mouseup(function(){
    if (drag) drag.css('border', 'none');
    drag = null;
  });
});