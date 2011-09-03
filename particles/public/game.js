
o = $;

o(function(){

  var head = o('#guy-head')[0]
    , balloons = o('#balloons');

  function lookat(x, y) {
    move('#guy-head')
      .rotate(-(x * .2))
      .end();
  }

  setInterval(function(){
    var off = balloons.offset();
    lookat(off.left|0, off.top|0);
  }, 200);
})