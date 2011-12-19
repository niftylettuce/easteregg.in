function easterEggSnake() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function(){
        $.getScript("http://cdn.easteregg.in/js/libs/jqueryui.js", function() {
          $.getScript("http://cdn.easteregg.in/outcomes/snake/snake3.js", function() {
            var snake = { width: 20, timeout: 100 }
              , snakes = []
              , npc = snake;
            // **TODO:** This can be **[customized][1]** into a complex snake game
            // [2]: http://elliottkember.com/snake.html
            // contrast for transparent snakes
            $('html').css('background-color', '#efefef');
            snakes.push(new Snake(snake));
            var $snakeStadium = document.getElementById('snake-stadium');
            $snakeStadium.style.position = 'absolute';
            $snakeStadium.style.zIndex = '9999';
            var $snakeOptions = $('<div style="position: fixed;z-index:9998;'
              + 'left:0;right:0;bottom:0;height:50px;line-height:50px;font-size'
              + ':24px;text-align:center;background-color:#fdd204;color:'
              + '#ec2027;"><button id="btn-easy">Easy Mode</button><button id="'
              + 'btn-normal">Normal Mode</button><button id="btn-hard">Hard '
              + 'Mode</button><strong style="font-weight: bold;margin-left: 50p'
              + 'x;">Tip:</strong> Use the arrow keys on your keyboard to contr'
              + 'ol the snake. Have fun :)</div>');
            $('body').append($snakeOptions);
            function stopSnakes() { $.each(snakes, function(i,s){s.stop();}); }
            $("#btn-easy, #btn-normal, #btn-hard").live("click", stopSnakes);
            $("#btn-easy").live("click", function() {
              snake.width = 30;
              fruit = false;
              snakes.push(new Snake(snake));
              npc = snake;
              npc.skynet_only = true;
              for(var i=0;i<1;i++) {snakes.push(new Snake(npc));}
            });
            $("#btn-normal").live("click", function() {
              snake.width = 20;
              fruit = false;
              snakes.push(new Snake(snake));
              npc = snake;
              npc.skynet_only = true;
              for(var i=0;i<2;i++) {snakes.push(new Snake(npc));}
            });
            $("#btn-hard").live("click", function() {
              snake.width = 15;
              fruit = false;
              snakes.push(new Snake(snake));
              npc = snake;
              npc.skynet_only = true;
              for(var i=0;i<4;i++) {snakes.push(new Snake(npc));}
            });
          });
        });
      });
      // $.noConflict(); (conflicts while snake is running, needs fixed)
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
// Keep the user clicking
var $moreEggs = document.createElement('p');
$moreEggs.innerHTML = '<p style="text-align: center;">Have you searched for the '
  + 'other "outcomes" of <img src="http://easteregg.in/img/favicon.png" '
  + 'alt="eggs" style="display:inline;">\'s at <a href="http://easteregg.in" '
  + ' target="_blank">eastereggin.com</a> yet?</p>';
var $c2 = document.getElementById('c2');
$c2.insertBefore($moreEggs, $c2.firstChild);
