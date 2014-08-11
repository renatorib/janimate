/* 
  Copyright (c) 2014 Renato Ribeiro <renato@lugri.com>
   
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

(function($) {

  var __ = {
    class: "animated ",
    animationEvent: "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  };

  // animate(effect) 
  // will add class to an element

  $.fn.animate = function(effect) {
    return this.each(function() {
      $(this).addClass(__.class + effect);
    });
  }

  // animateEnd(effect)
  // will remove animation classes

  $.fn.animateEnd = function(effect) {
    return this.each(function() {
      $(this).removeClass(__.class + effect + ' infinite');
    });
  }  

  // animateAndCall(effect, callback) 
  // will add animation to an element and call the passed callback when animation was finished

  $.fn.animateAndCall = function(effect, callback) {
    return this.each(function() {
      var self = this;
      $(this)
        .animate(effect)
        .one(__.animationEvent, function(){
          callback(self, effect);
      });
    });
  }

  // animateAndEnd(effect) 
  // will add animation to an element and remove same when animation was finished

  $.fn.animateAndEnd = function(effect) {
    return this.each(function() {
      $(this).animateAndCall(effect, function(self){
        $(self).animateEnd(effect);
      });
    });
  }

  // animateAndRemove(effect)
  // will add animation to an element and remove element when animation was finished

  $.fn.animateAndRemove = function(effect) {
    return this.each(function() {
      $(this).animateAndCall(effect, function(self){
        $(self).remove();
      });
    });
  }

})(jQuery);