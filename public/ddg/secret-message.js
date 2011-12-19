function easterEggSecretMessage() {
  YAHOO.util.Get.script("http://yui.yahooapis.com/combo?2.7.0/build/yahoo-dom-event/yahoo-dom-event.js&2.7.0/build/animation/animation-min.js", {
    onSuccess: function() {
      Secret.fnMessage("yegg was here");
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggSecretMessage);
