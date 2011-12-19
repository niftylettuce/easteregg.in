function easterEggRaptorize() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/raptorize/jquery.raptorize.1.0.js", function() {
          $("body").raptorize({delayTime: 0});
        });
      });
      $.noConflict();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggRaptorize);
