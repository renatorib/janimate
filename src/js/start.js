/*!
 * jAnimate v@VERSION
 * https://github.com/renatorib/janimate
 *
 * Copyright (c) 2014-@YEAR Renato Ribeiro
 * Released under the MIT license
 *
 * Date: @DATE
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
