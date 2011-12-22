// ## Cornify
// If query = **"The Underground Cabal of Mirthful Protectors of the Corn"**
// (from <http://paulirish.com/2009/cornify-easter-egg-with-jquery/>), then
// embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/cornify.min.js" defer></script>`
function easterEggCornify() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/cornify/cornify.js", {
    onSuccess: function() {
      cornify_add();
      YAHOO.util.Event.addListener(window, "keydown", cornify_add);
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggCornify);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggCornify);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
