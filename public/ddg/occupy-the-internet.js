function easterEggOccupyTheInternet() {
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
