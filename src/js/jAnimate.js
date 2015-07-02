  function jAnimate(options){
    var self = this;
    this.opt = $.extend({}, {
      once: false,
      el: false,
      effect: false,
      callback: false
    }, options);
    this.older = $(this.opt.el).attr('data-janimate');
    this.newer = __.class + this.opt.effect;
    this.once = this.opt.once;
    $(this.opt.el).removeClass(this.older).removeAttr(__.data);
    this.opt.el.offsetWidth = this.opt.el.offsetWidth;
    $(this.opt.el).addClass(this.newer).attr(__.data, this.newer);
    $(this.opt.el).one(__.animationend, function(){
        if(self.opt.once){
          $(self.opt.el).removeClass(self.newer).removeAttr(__.data);
        }
        if(typeof self.opt.callback != "undefined" && $.isFunction(self.opt.callback)){
          self.opt.callback(self, self.opt.effect);
        }
    });
  }
