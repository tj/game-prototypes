
# Game Prototypes

 A collection (currently one) of game prototypes built
 with "html 5" technologies. Read more in this [blog post](http://tjholowaychuk.com/post/9524129814/game-prototyping-with-javascript-css3).

## Character

  ![](http://f.cl.ly/items/1L1Z1v1J0N2Y2r2L2h0w/Screenshot.png) 

  This prototype consists of a character with some crude
  CSS animation, as well as looking at the cursor. Using
  CSS transitions on the eyes they move smooth like you
  might expect. When the character is idle he'll look at the cat (just because).
  
  The birds have some lame randomization to simulate flying to/from
  the foreground, and across the scene. Same with the cat, he just
  walks around at random.
  
  The hills display slight parallax displacement, however I made
  it very tame for now as I forgot that my images are transparent
  so the hills overlay and look all messed up.
  
  You can also include _tool.js_ allowing you to position assets.


## Todo

  - proper engine structure
  - ditch jQuery, no need for it
  - preload scene assets
  - more character interaction
  - less spaghetti