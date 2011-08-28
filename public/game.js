
var o = $;

// cat

o(function(){
  function walk() {
    var dirx = ['sub', 'add'][Math.random() * 2 | 0]
      , diry = ['sub', 'add'][Math.random() * 2 | 0];

    move('#cat')
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

o(function(){
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

o(function(){
  var birds = document.querySelectorAll('.bird');
  birds.each = [].forEach;
  function loop() {
    birds.each(function(el, i){
      var x = window.innerWidth / 2 + i * 50;
      move(el)
        .y(0)
        .x(x)
        .duration('8s')
        .then()
          .duration('8s')
          .x(-x)
          .then(loop)
          .pop()
        .end();
    });
  }

  loop();
});

// hills

o(function(){
  var hills = o('.hill, #fence')
    , intensity = .005
    , offsets = hills.map(function(i){
      off = o(this).offset();
      off.intensity = intensity / ++i;
      return off;
    });

  o(document).mousemove(function(e){
    var x = e.clientX
      , y = e.clientY;

    hills.each(function(i){
      var off = offsets[i];
      o(this).css({
          top: off.top
        , left: off.left - x * off.intensity
      });
    });
  });
});

// guy

o(function(){
  var guy = o('#guy')
    , cat = o('#cat')
    , hat = o('#guy-hat')
    , leftEye = o('#guy-eye-left')
    , rightEye = o('#guy-eye-right')
    , leftEyeBounds = o('#guy-eye-left-bounds')
    , rightEyeBounds = o('#guy-eye-right-bounds')
    , min = Math.min
    , max = Math.max
    , dx = 10
    , dy = 2;

  var go = guy.offset()
    , gox = go.left
    , goy = go.top;

  o(document).mousemove(function(e){
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

    var x = e.clientX + 5
      , y = e.clientY + 5;

    var skew = max(-10, min(2, (gox - x) *.02));
    guy.css('-webkit-transform', 'skew(' + skew + 'deg)');
    guy.css('left', gox + x * .06);
    // guy.css('top', goy + y * .005);

    leftEye.css('top', min(lebh, max(0, y - leby)));
    leftEye.css('left', min(lebw, max(0, x - lebx)));

    rightEye.css('top', min(rebh, max(0, y - reby)));
    rightEye.css('left', min(rebw, max(0, x - rebx)));
  });
});