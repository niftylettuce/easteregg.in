
// # Index of outcomes
// This is a collection of 11 outcomes converted to YUI onDOMReady snippets.

// JSHint Global Variables
/*globals YAHOO load_protest cornify_add Snake fruit*/

// **NOTE**: There are 3 ways we can include the `get-min.js`

// * include the script in the &lt;head&gt; after YUI with a generic &lt;script&gt; tag
// * use [YUILoader][1] w/callback as in `YAHOO.util.YUILoader` to load `['get']` module
// * append &lt;script&gt; to &lt;body&gt;, after DOM is ready using `readyState` **(currently used)**
// [1]: http://developer.yahoo.com/yui/yuiloader/

// &ast; = requires jQuery (which is automatically loaded in the script provided)

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


// ## Snowy
// If query = **"walking in a winter wonderland"** (from Dean Martin's song),
// then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/snowy.min.js" defer></script>`
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


// ## Invert Colors*
// If query = **"duck duck invert"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/invert-colors.min.js" defer></script>`
function easterEggInvertColors() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/invert-colors/invert-colors.js", function() {
          $("body").invert();
        });
      });
      $.noConflict();
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggInvertColors);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggInvertColors);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Raptorize*
// If query = **"unleash a raptor of jurassic proportions"**
// from (<http://www.zurb.com/playground/jquery-raptorize>),
// then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/raptorize.min.js" defer></script>`
function easterEggRaptorize() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/raptorize/jquery.raptorize.1.0.js", function() {
          $("body").raptorize({delayTime: 0});
        });
      });
      $.noConflict();
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggRaptorize);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggRaptorize);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Kathack*
// If query = **"play some katamari"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/kathack.min.js" defer></script>`
function kathack() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/kathack/kh.js");
      });
      $.noConflict();
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
    YAHOO.util.Event.onDOMReady(kathack);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(kathack);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Secret Message
// If query = **"tell me a secret"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/secret-message.min.js" defer></script>`
function easterEggSecretMessage() {
  YAHOO.util.Get.script("http://yui.yahooapis.com/combo?2.7.0/build/yahoo-dom-event/yahoo-dom-event.js&2.7.0/build/animation/animation-min.js", {
    onSuccess: function() {
      YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/secret-msg/secret.js", {
        onSuccess: function() {
          Secret.fnMessage("yegg ");
        }
      });
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
    YAHOO.util.Event.onDOMReady(easterEggSecretMessage);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggSecretMessage);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Asteroids
// If query = **"QuadraScan"** (from <http://en.wikipedia.org/wiki/QuadraScan>),
// then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/asteroids.min.js" defer></script>`
function easterEggAsteroids() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/asteroids/asteroids.min.js");
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
    YAHOO.util.Event.onDOMReady(easterEggAsteroids);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggAsteroids, {});
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Snake*
// If query = **"eat all the fruit"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/snake.min.js" defer></script>`
function easterEggSnake() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $.getScript("http://cdn.easteregg.in/js/libs/jqueryui.js", function() {
        $.getScript("http://cdn.easteregg.in/outcomes/snake/snake3.js", function() {
          var snake = { width: 20, timeout: 100 }
            , npc = { width: 20, timeout: 100 }
            , fruit
            , snakes = [];
          npc.skynet_only = true;
          // **TODO:** This can be **[customized][2]** into a complex snake game
          // [2]: http://elliottkember.com/snake.html
          $('html').css('background-color', '#efefef'); // contrast
          snakes.push(new Snake(snake));
          $("#snake-stadium").css({position:'absolute',"z-index":9999});
          var $snakeOptions = $('<div style="position: fixed;z-index:9998;'
            + 'left:0;right:0;bottom:0;height:50px;line-height:50px;font-size'
            + ':24px;text-align:center;background-color:#1168CC;color:'
            + '#ffffff;"><button id="btn-easy">Easy Mode</button><button id="'
            + 'btn-normal">Normal Mode</button><button id="btn-hard">Hard '
            + 'Mode</button><strong style="font-weight: bold;margin-left: 50p'
            + 'x;">Tip:</strong> Use the arrow keys on your keyboard to contr'
            + 'ol the snake. Have fun :)</div>');
          $('body').append($snakeOptions);
          $("#btn-easy").live("click", function() {
            $.each(snakes, function(i,s) { s.stop(); });
            fruit = false;
            snake.width = 30;
            snakes.push(new Snake(snake));
            for(var i=0;i<1;i++) {snakes.push(new Snake(npc));}
          });
          $("#btn-normal").live("click", function() {
            $.each(snakes, function(i,s) { s.stop(); });
            fruit = false;
            snake.width = 20;
            snakes.push(new Snake(snake));
            for(var i=0;i<2;i++) {snakes.push(new Snake(npc));}
          });
          $("#btn-hard").live("click", function() {
            $.each(snakes, function(i,s) { s.stop(); });
            fruit = false;
            snake.width = 15;
            snakes.push(new Snake(snake));
            for(var i=0;i<4;i++) {snakes.push(new Snake(npc));}
          });
        });
      });
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggSnake);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggSnake);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Nifty*
// If query = **"nifty piece of lettuce"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/nifty.min.js" defer></script>`
function easterEggNifty() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/niftylettuce/niftylettuce.js", function() {
          $("body").niftylettuce({delayTime: 0});
        });
      });
      $.noConflict();
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggNifty);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggNifty);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Unicorn Pooper
// If query = **"unicorns plot rainbows"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/unicorn-pooper.min.js" defer></script>`
function easterEggUnicornPooper() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/unicorn-pooper/unicorn.js?");
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggUnicornPooper);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggUnicornPooper);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);


// ## Occupy the Internet*
// If query = **"the 99 percent of the internet"**, then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/occupy-the-internet.min.js" defer></script>`
function easterEggOccupyTheInternet() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://occupyinter.net/embed.json?callback=_ee_occupy");
        window._ee_occupy = function(data) {
          $("body").append(data.html);
          load_protest();
        };
      });
      $.noConflict();
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
  YAHOO.util.Event.onDOMReady(easterEggOccupyTheInternet);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggOccupyTheInternet);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
