function easterEggCornify() {
  $getMinScript = document.createElement("script");
  $getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
  document.getElementsByTagName('body')[0].appendChild($getMinScript);
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/cornify/cornify.js", {
    onSuccess: function() {
      cornify_add();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggCornify);
