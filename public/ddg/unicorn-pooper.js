// ## Unicorn Pooper
// If query = **"unicorns plot rainbows"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/unicorn-pooper.min.js" defer></script>`
function easterEggUnicornPooper() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/unicorn-pooper/unicorn.js?");
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggUnicornPooper);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggUnicornPooper);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
