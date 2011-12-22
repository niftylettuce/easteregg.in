// ## Asteroids
// If query = **"QuadraScan"** (from <http://en.wikipedia.org/wiki/QuadraScan>),
// then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/asteroids.min.js" defer></script>`
function easterEggAsteroids() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/asteroids/asteroids.min.js");
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
    YAHOO.util.Event.onDOMReady(easterEggAsteroids);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggAsteroids, {});
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
