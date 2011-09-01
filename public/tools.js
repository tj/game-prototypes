// debug mode
(function($) {
	$(function(){
	  $('body').addClass('debug');

		// draggable assets
		var help = $('#help').hide();

	  var drag
		, start;

	  $('body *').mousedown(function(e){
		drag = $(this);
		start = e;
		help.find('.name').text(drag.attr('id') + ' - ');
	  }).hover(function(){
		$(this).css('-webkit-box-shadow', 'inset 0 0 0 1px rgba(255,0,0,.5)');
	  }).mouseout(function(){
		$(this).css('-webkit-box-shadow', 'none');
	  });

	  $(document).mousemove(function(e){
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

	  $(document).mouseup(function(){
		if (drag) drag.css('border', 'none');
		drag = null;
	  });
	});
})( jQuery );
