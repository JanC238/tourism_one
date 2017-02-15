/* Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(D){var B=["DOMMouseScroll","mousewheel"];if(D.event.fixHooks){for(var A=B.length;A;){D.event.fixHooks[B[--A]]=D.event.mouseHooks}}D.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var E=B.length;E;){this.addEventListener(B[--E],C,false)}}else{this.onmousewheel=C}},teardown:function(){if(this.removeEventListener){for(var E=B.length;E;){this.removeEventListener(B[--E],C,false)}}else{this.onmousewheel=null}}};D.fn.extend({mousewheel:function(E){return E?this.bind("mousewheel",E):this.trigger("mousewheel")},unmousewheel:function(E){return this.unbind("mousewheel",E)}});function C(I){var G=I||window.event,K=[].slice.call(arguments,1),F=0,E=true,J=0,H=0;I=D.event.fix(G);I.type="mousewheel";if(G.wheelDelta){F=G.wheelDelta/120}if(G.detail){F=-G.detail/3}H=F;if(G.axis!==undefined&&G.axis===G.HORIZONTAL_AXIS){H=0;J=-1*F}if(G.wheelDeltaY!==undefined){H=G.wheelDeltaY/120}if(G.wheelDeltaX!==undefined){J=-1*G.wheelDeltaX/120}K.unshift(I,F,J,H);return(D.event.dispatch||D.event.handle).apply(this,K)}})(jQuery);