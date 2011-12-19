function easterEggSnowy() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/snowy/snow.min.js", {
    onSuccess: function() {
      var $snowyStyle = document.createElement("link")
        , $snowFlurry = document.createElement('div')
        , $head = document.getElementsByTagName('head')[0]
        , $body = document.getElementsByTagName('body')[0];
      $snowyStyle.rel = 'stylesheet';
      $snowyStyle.href = 'http://cdn.easteregg.in/outcomes/snowy/ddg-snowy.css';
      $snowyStyle.type = 'text/css';
      $snowyStyle.media = 'screen';
      $snowFlurry.id = 'snow_flurry';
      $snowFlurry.innerHTML = '&nbsp;';
      // Add the stylesheet to the &lt;head&gt; element
      $head.appendChild($snowyStyle);
      // Prepend the &lt;canvas&gt; snowflakes to the &lt;body&gt; element
      $body.insertBefore($snowFlurry, $body.firstChild);
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggSnowy);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggSnowy);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
// Keep the user clicking
var $moreEggs = document.createElement('p');
$moreEggs.innerHTML = '<p style="text-align: center;">Have you searched for the '
  + 'other "outcomes" of <img src="http://easteregg.in/img/favicon.png" '
  + 'alt="eggs" style="display:inline;">\'s at <a href="http://easteregg.in" '
  + ' target="_blank">eastereggin.com</a> yet?</p>';
var $c2 = document.getElementById('c2');
$c2.insertBefore($moreEggs, $c2.firstChild);
