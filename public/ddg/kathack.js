function kathack() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/kathack/kh.js");
      });
      $.noConflict();
    }
  });
}
YAHOO.util.Event.onDOMReady(kathack);
