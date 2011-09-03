
o = $;

/**
 * Guy.
 */

o(function(){
  var head = o('#guy-head')[0]
    , balloons = o('#balloons')
    , max = Math.max;

  function lookat(x, y) {
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
  var x = Math.random() * window.innerWidth
    , y = Math.random() * window.innerHeight;

  drop.css({ left: x, top: y });
}