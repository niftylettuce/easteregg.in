// ## Invert Colors*
// If query = **"duck duck invert"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/invert-colors.min.js" defer></script>`
function easterEggInvertColors() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/invert-colors/invert-colors.js", function() {
          $("body").invert();
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
  YAHOO.util.Event.onDOMReady(easterEggInvertColors);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggInvertColors);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
