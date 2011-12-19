function easterEggNifty() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/niftylettuce/niftylettuce.js", function() {
          $("body").niftylettuce({delayTime: 0});
        });
      });
      $.noConflict();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggNifty);
