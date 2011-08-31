
  var min = Math.min
  , max = Math.max;

// cat

$(function(){
  function walk() {
    var dirx = ['sub', 'add'][Math.random() * 2 | 0]
      , diry = ['sub', 'add'][Math.random() * 2 | 0];

    move('#cat')
      .contain({
        top : '+430' // maintain cat at least 430px from top
      })
      [dirx]('left', Math.random() * 30 | 0)
      [diry]('top', Math.random() * 30 | 0)
      .duration('1s')
      .ease('out')
      .then()
        .delay(Math.random() * 2000 | 0)
        .then(walk)
        .pop()
      .end();
  }

  walk();
});

// bird sprites

$(function(){
  var birds = document.querySelectorAll('.bird');
  birds.each = [].forEach;
  birds.each(function(bird){
    var n = Math.random() * 6 | 0;
    setInterval(function(){
      bird.className = 'bird bird-' + ++n % 6;
    }, 110);
  });
});

// bird movement

$(function(){
  var birds = document.querySelectorAll('.bird');
  birds.each = [].forEach;

  function loop(el) {
    var width = window.innerWidth
      , duration = max(5000, Math.random() * 8000 | 0)
      , x = max(width / 2, Math.random() * width | 0)
      , y = Math.random() * 200 | 0
      , scale = Math.random();
    
    move(el)
      .y(y)
      .x(x)
      .scale(scale)
      .duration(duration)
      .then()
        .duration(duration)
        .x(-x)
        .then(function(){ loop(el); })
        .pop()
      .end();
  }

  birds.each(loop);
});

// hills

$(function(){
  // TODO: separate fences for different intensities
  var hills = $('.hill')
    , intensity = .005
    , offsets = hills.map(function(i){
      off = $(this).offset();
      off.intensity = intensity / ++i;
      return off;
    });

  $(document).mousemove(function(e){
    var x = e.clientX
      , y = e.clientY;

    hills.each(function(i){
      var off = offsets[i];
      $(this).css({
          top: off.top
        , left: off.left - x * off.intensity
      });
    });
  });
});

// guy

$(function(){
  var guy = $('#guy')
    , cat = $('#cat')
    , hat = $('#guy-hat')
    , leftEye = $('#guy-eye-left')
    , rightEye = $('#guy-eye-right')
    , leftEyeBounds = $('#guy-eye-left-bounds')
    , rightEyeBounds = $('#guy-eye-right-bounds')
    , min = Math.min
    , max = Math.max
    , dx = 10
    , dy = 2;

  cat.click(function() {
    alert('mrrrrrow');
  });

  var go = guy.offset()
    , gox = go.left
    , goy = go.top;

  function lookat(x, y) {
    var lebo = leftEyeBounds.offset()
      , leby = lebo.top
      , lebx = lebo.left
      , lebw = leftEyeBounds.width()
      , lebh = leftEyeBounds.height();

    var rebo = rightEyeBounds.offset()
      , reby = rebo.top
      , rebx = rebo.left
      , rebw = rightEyeBounds.width()
      , rebh = rightEyeBounds.height();

    x += 5;
    y += 5;

    var skew = max(-10, min(2, (gox - x) *.02));
    guy.css('-webkit-transform', 'skew(' + skew + 'deg)');
    guy.css('left', gox + x * .06);
    // guy.css('top', goy + y * .005);

    leftEye.css('top', min(lebh, max(0, y - leby)));
    leftEye.css('left', min(lebw, max(0, x - lebx)));

    rightEye.css('top', min(rebh, max(0, y - reby)));
    rightEye.css('left', min(rebw, max(0, x - rebx)));
  }

  // when idle look at the chaton
  setInterval(function(){
    if (!prev) {
      // TODO: transition
      var off = $('#cat').offset();
      lookat(off.left, off.top);
    }
    prev = null;
  }, 500);

  // look at cursor
  var prev;
  $(document).mousemove(function(e){
    prev = e;
    lookat(e.clientX, e.clientY);
  });
});
