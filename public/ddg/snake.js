function easterEggSnake() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/snake/snake3.js", function() {
          var snake = { width: 20, timeout: 100 }
            , snakes = [];
          // **TODO:** This can be **[customized][1]** into a complex snake game
          // [2]: http://elliottkember.com/snake.html
          snakes.push(new Snake({
            width: snake.width,
            timeout: snake.timeout
          }));
        });
      });
      $.noConflict();
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
