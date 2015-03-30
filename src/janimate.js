(function($) {

  var __ = {
    class: "animated ",
    data: "data-janimate",
    animationend: "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
  };

  function jSequence(el, effects, callback){
    this.effects = effects;
    this.el = el;
    this.indx = 0;
    this.callback = callback;
    var self = this;
    this.next = function(){
      $(this.el).jAnimateOnce(this.effects[this.indx], function(){
        self.indx++;
        if(typeof self.effects[self.indx] != 'undefined') {
          self.next();
        } else {
          if(typeof self.callback != "undefined" && $.isFunction(self.callback)){
            self.callback(self.el, self.effects);
          }
        }
      });
    }
  }

  function jAnimate(options){
    var defaults = {once: false, el: false, effect: false, callback: false};
    var opt = $.extend({}, defaults, options);
    var older = $(opt.el).attr('data-janimate');
    var newer = __.class + opt.effect;
    var once = opt.once;
    $(opt.el).removeClass(older).removeAttr(__.data);
    opt.el.offsetWidth = opt.el.offsetWidth; //the magic
    $(opt.el).addClass(newer).attr(__.data, newer);
    $(opt.el).one(__.animationend, function(){
        if(opt.once){
          $(opt.el).removeClass(newer).removeAttr(__.data);
        }
        if(typeof opt.callback != "undefined" && $.isFunction(opt.callback)){
          opt.callback(this, opt.effect);
        }
    });
  }

  $.fn.jAnimate = function(effect, callback) {
    return this.each(function() {
      jAnimate({el: this, effect: effect, callback: callback});
    });
  }

  $.fn.jAnimateOnce = function(effect, callback) {
    return this.each(function() {
      jAnimate({el: this, effect: effect, callback: callback, once: true});
    });
  }

  $.fn.jAnimateSequence = function(effects, callback) {
    return this.each(function() {
      if($.isArray(effects)){
        new jSequence(this, effects, callback).next();
      } else {
        return false;
      }
    });
  }

})(jQuery);
