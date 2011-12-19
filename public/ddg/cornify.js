function easterEggCornify() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/cornify/cornify.js", {
    onSuccess: function() {
      cornify_add();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggCornify);
