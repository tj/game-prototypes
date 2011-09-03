
o(function(){
  var loading = o('<div id="loading"><p>Loading</p></div>');
  o('body').append(loading);
  o(window).load(function(){
    move('#loading')
      .set('opacity', 0)
      .duration(2000)
      .end(function(){
        loading.remove();
      });
  });
});