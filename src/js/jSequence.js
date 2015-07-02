  function jSequence(options){
    var self = this;
    this.opt = $.extend({}, {
      el: false,
      effects: false,
      callback: false
    }, options);
    this.effects = this.opt.effects;
    this.el = this.opt.el;
    this.indx = 0;
    this.callback = this.opt.callback;
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
