function easterEggSnake() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/snake/snake3.js", function() {
          var snake = { width: 20, timeout: 100 }
            , snakes = [];
          // TODO: This can be customed as much as you want
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
YAHOO.util.Event.onDOMReady(easterEggSnake);
