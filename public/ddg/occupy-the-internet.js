// ## Occupy the Internet*
// If query = **"the 99 percent of the internet"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/occupy-the-internet.min.js" defer></script>`
function easterEggOccupyTheInternet() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://occupyinter.net/embed.json?callback=_ee_occupy");
        window._ee_occupy = function(data) {
          $("body").append(data.html);
          load_protest();
        };
      });
      $.noConflict();
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggOccupyTheInternet);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggOccupyTheInternet);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
