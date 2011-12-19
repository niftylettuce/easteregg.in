function easterEggSnowy() {
  $getMinScript = document.createElement("script");
  $getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
  document.getElementsByTagName('body')[0].appendChild($getMinScript);
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
      // Add the stylesheet to the &lt;head&gt; element
      $head.appendChild($snowyStyle);
      // Prepend the &lt;canvas&gt; snowflakes to the &lt;body&gt; element
      $body.insertBefore($snowFlurry, $body);
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggSnowy);
