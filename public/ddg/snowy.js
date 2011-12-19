function easterEggSnowy() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/snowy/snow.min.js", {
    onSuccess: function() {
      var $snowyStyle = document.createElement("style")
        , $snowFlurry = document.createElement('div')
        , $head = document.getElementsByTagName('head')[0]
        , $body = document.getElementsByTagName('body')[0];
      $snowyStyle.rel = 'stylesheet';
      $snowyStyle.href = 'http://cdn.easteregg.in/outcomes/snowy/snowy.css';
      $snowyStyle.type = 'text/css';
      $snowyStyle.media = 'screen';
      $snowFlurry.id = 'snow_flurry';
      // Add the stylesheet to the <head> section
      $head.appendChild($snowyStyle);
      // Prepend the <canvas> snowflakes to <body>
      $body.insertBefore($snowFlurry, $body);
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggSnowy);
