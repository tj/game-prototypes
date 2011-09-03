
o = $;

/**
 * Guy.
 */

o(function(){
  var head = o('#guy-head')[0]
    , balloons = o('#balloons')
    , max = Math.max
    , min = Math.min;

  function lookat(x, y) {
    move('#guy-arm-right')
      .rotate(max(-(x * .10), -13))
      .duration(500)
      .end();

    move('#guy-arm-left')
      .rotate(min(x * .05, 8))
      .duration(500)
      .end();

    move(head)
      .rotate(max(-(x * .15), -22))
      .duration(500)
      .end();
  }

  setInterval(function(){
    var off = balloons.offset();
    lookat(off.left|0, off.top|0);
  }, 200);
})

/**
 * Rain.
 */

o(function(){
  var drops = 30
    , drop;
  while (drops--) {
    drop = o('<div class="rain"></div>');
    o('body').append(drop);
    moveDrop(drop);
  }
});

function moveDrop(drop) {
  var x = Math.random() * window.innerWidth * 1.5
    , y = Math.random() * window.innerHeight * 1.5;

  drop.css({ left: x, top: y });

  function loop() {
    move(drop)
      .add('left', 1000)
      .add('top', 1000)
      .set('opacity', 0)
      .duration(Math.random() * 1000 | 0)
      .then()
        .set('left', x-1000)
        .set('top', y-1000)
        .set('opacity', 1)
        .duration(0)
        .pop()
      .end(loop);
  }

  loop();
}