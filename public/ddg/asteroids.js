function easterEggAsteroids() {
  $getMinScript = document.createElement("script");
  $getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
  document.getElementsByTagName('body')[0].appendChild($getMinScript);
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/asteroids/asteroids.min.js");
}
YAHOO.util.Event.onDOMReady(easterEggAsteroids);
