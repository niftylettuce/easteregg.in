
// # Index of outcomes
// This is a collection of 11 outcomes converted to YUI onDOMReady snippets.

// JSHint Global Variables
/*globals YAHOO load_protest cornify_add Snake*/

// &ast; = requires jQuery

// ## Cornify
// If query = "cornify", then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/cornify.js" defer></script>`
function easterEggCornify() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/cornify/cornify.js", {
    onSuccess: function() {
      cornify_add();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggCornify);


// ## Snowy
// If query = "snowy", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/snowy.js" defer></script>`
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
      // Add the stylesheet to the &lt;head&gt; element
      $head.appendChild($snowyStyle);
      // Prepend the &lt;canvas&gt; snowflakes to the &lt;body&gt; element
      $body.insertBefore($snowFlurry, $body);
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggSnowy);


// ## Invert Colors*
// If query = "invert colors", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/invert-colors.js" defer></script>`
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
YAHOO.util.Event.onDOMReady(easterEggInvertColors);


// ## Raptorize*
// If query = "raptorize", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/raptorize.js" defer></script>`
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
YAHOO.util.Event.onDOMReady(easterEggRaptorize);



// ## Kathack*
// If query = "kathack", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/kathack.js" defer></script>`
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
YAHOO.util.Event.onDOMReady(kathack);


// ## Secret Message
// If query = "gabriel weinburg", then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/secret-message.js" defer></script>`
function easterEggSecretMessage() {
  YAHOO.util.Get.script("http://yui.yahooapis.com/combo?2.7.0/build/yahoo-dom-event/yahoo-dom-event.js&2.7.0/build/animation/animation-min.js", {
    onSuccess: function() {
      Secret.fnMessage("yegg was here");
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggSecretMessage);


// ## Asteroids
// If query = "asteroids", then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/asteroids.js" defer></script>`
function easterEggAsteroids() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/asteroids/asteroids.min.js");
}
YAHOO.util.Event.onDOMReady(easterEggAsteroids);


// ## Snake*
// If query = "snake", then embed this &lt;script&gt; after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/snake.js" defer></script>`
function easterEggSnake() {
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/snake/snake3.js", function() {
          var snake = { width: 20, timeout: 100 }
            , snakes = [];
          // **TODO:** This can be **[customized][1]** into a complex snake game
          // [1]: http://elliottkember.com/snake.html
          snakes.push(new Snake({
            width: snake.width,
            timeout: snake.timeout
          }));
        });
      });
      $.noConflict();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggSnake);


// ## Nifty*
// If query = "niftylettuce", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/nifty.js" defer></script>`
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
YAHOO.util.Event.onDOMReady(easterEggNifty);


// ## Unicorn Pooper
// If query = "unicorn pooper", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/unicorn-pooper.js" defer></script>`
function easterEggUnicornPooper() {
  YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/unicorn-pooper/unicorn.js?");
}
YAHOO.util.Event.onDOMReady(easterEggUnicornPooper);


// ## Occupy the Internet
// If query = "occupy the internet", then embed this &lt;script&gt; tag after YUI has loaded:
// `<script type="text/javascript" src="http://cdn.easteregg.in/ddg/occupy-the-internet.js" defer></script>`
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


// ### Enjoy :)
