function easterEggOccupyTheInternet() {
  $getMinScript = document.createElement("script");
  $getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
  document.getElementsByTagName('body')[0].appendChild($getMinScript);
  YAHOO.util.Get.script("http://occupyinter.net/embed.json?callback=_ee_occupy", {
    onSuccess: function() {
      window._ee_occupy = function(data) {
        document.getElementsByTagName('body')[0].appendChild(data.html);
        load_protest();
      };
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggOccupyTheInternet);
