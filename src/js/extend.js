  $.fn.jAnimate = function(effect, callback) {
    return this.each(function() {
      new jAnimate({el: this, effect: effect, callback: callback});
    });
  }

  $.fn.jAnimateOnce = function(effect, callback) {
    return this.each(function() {
      new jAnimate({el: this, effect: effect, callback: callback, once: true});
    });
  }

  $.fn.jAnimateSequence = function(effects, callback) {
    return this.each(function() {
      if(!$.isArray(effects)) return false;
      new jSequence({el: this, effects: effects, callback: callback}).next();
    });
  }
