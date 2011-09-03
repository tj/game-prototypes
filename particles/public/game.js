
o = $;

/**
 * Guy.
 */

o(function(){
  var head = o('#guy-head')[0]
    , balloons = o('#balloons')
    , max = Math.max;

  function lookat(x, y) {
    move('#guy-head')
      .rotate(max(-(x * .15), -22))
      .duration(500)
      .end();
  }

  setInterval(function(){
    var off = balloons.offset();
    lookat(off.left|0, off.top|0);
  }, 200);
})