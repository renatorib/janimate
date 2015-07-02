/*!
 * jAnimate v0.2.0
 * https://github.com/renatorib/janimate
 *
 * Copyright (c) 2014-2015 Renato Ribeiro
 * Released under the MIT license
 *
 * Date: 2015-07-02T11:43:03.268Z
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(b){var c=this;this.opt=a.extend({},{el:!1,effects:!1,callback:!1},b),this.effects=this.opt.effects,this.el=this.opt.el,this.indx=0,this.callback=this.opt.callback,this.next=function(){a(this.el).jAnimateOnce(this.effects[this.indx],function(){c.indx++,"undefined"!=typeof c.effects[c.indx]?c.next():"undefined"!=typeof c.callback&&a.isFunction(c.callback)&&c.callback(c.el,c.effects)})}}function c(b){var c=this;this.opt=a.extend({},{once:!1,el:!1,effect:!1,callback:!1},b),this.older=a(this.opt.el).attr("data-janimate"),this.newer=d["class"]+this.opt.effect,this.once=this.opt.once,a(this.opt.el).removeClass(this.older).removeAttr(d.data),this.opt.el.offsetWidth=this.opt.el.offsetWidth,a(this.opt.el).addClass(this.newer).attr(d.data,this.newer),a(this.opt.el).one(d.animationend,function(){c.opt.once&&a(c.opt.el).removeClass(c.newer).removeAttr(d.data),"undefined"!=typeof c.opt.callback&&a.isFunction(c.opt.callback)&&c.opt.callback(c,c.opt.effect)})}var d={"class":"animated ",data:"data-janimate",animationend:"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"};a.fn.jAnimate=function(a,b){return this.each(function(){new c({el:this,effect:a,callback:b})})},a.fn.jAnimateOnce=function(a,b){return this.each(function(){new c({el:this,effect:a,callback:b,once:!0})})},a.fn.jAnimateSequence=function(c,d){return this.each(function(){return a.isArray(c)?void new b({el:this,effects:c,callback:d}).next():!1})}});