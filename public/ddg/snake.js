// ## Snake*
// If query = **"eat all the fruit"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/snake.min.js" defer></script>`
function easterEggSnake() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $.getScript("http://cdn.easteregg.in/js/libs/jqueryui.js", function() {
        $.getScript("http://cdn.easteregg.in/outcomes/snake/snake3.js", function() {
          var snake = { width: 20, timeout: 100 }
            , npc = { width: 20, timeout: 100 }
            , fruit
            , snakes = [];
          npc.skynet_only = true;
          // **TODO:** This can be **[customized][2]** into a complex snake game
          // [2]: http://elliottkember.com/snake.html
          $('html').css('background-color', '#efefef'); // contrast
          snakes.push(new Snake(snake));
          $("#snake-stadium").css({position:'absolute',"z-index":9999});
          var $snakeOptions = $('<div style="position: fixed;z-index:9998;'
            + 'left:0;right:0;bottom:0;height:50px;line-height:50px;font-size'
            + ':24px;text-align:center;background-color:#1168CC;color:'
            + '#ffffff;"><button id="btn-easy">Easy Mode</button><button id="'
            + 'btn-normal">Normal Mode</button><button id="btn-hard">Hard '
            + 'Mode</button><strong style="font-weight: bold;margin-left: 50p'
            + 'x;">Tip:</strong> Use the arrow keys on your keyboard to contr'
            + 'ol the snake. Have fun :)</div>');
          $('body').append($snakeOptions);
          $("#btn-easy").live("click", function() {
            $.each(snakes, function(i,s) { s.stop(); });
            fruit = false;
            snake.width = 30;
            snakes.push(new Snake(snake));
            for(var i=0;i<1;i++) {snakes.push(new Snake(npc));}
          });
          $("#btn-normal").live("click", function() {
            $.each(snakes, function(i,s) { s.stop(); });
            fruit = false;
            snake.width = 20;
            snakes.push(new Snake(snake));
            for(var i=0;i<2;i++) {snakes.push(new Snake(npc));}
          });
          $("#btn-hard").live("click", function() {
            $.each(snakes, function(i,s) { s.stop(); });
            fruit = false;
            snake.width = 15;
            snakes.push(new Snake(snake));
            for(var i=0;i<4;i++) {snakes.push(new Snake(npc));}
          });
        });
      });
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggSnake);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggSnake);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
