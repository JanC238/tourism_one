/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);;
/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Draggable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.draggable", $.ui.mouse, {
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,
		concernAngle: false
	},
	_create: function() {

		if (this.options.helper == 'original' && !(/^(?:r|a|f)/).test(this.element.css("position")))
			this.element[0].style.position = 'relative';

		(this.options.addClasses && this.element.addClass("ui-draggable"));
		(this.options.disabled && this.element.addClass("ui-draggable-disabled"));

		this._mouseInit();

	},

	destroy: function() {
		if(!this.element.data('draggable')) return;
		this.element
			.removeData("draggable")
			.unbind(".draggable")
			.removeClass("ui-draggable"
				+ " ui-draggable-dragging"
				+ " ui-draggable-disabled");
		this._mouseDestroy();

		return this;
	},

	_mouseCapture: function(event) {

		var o = this.options;

		// among others, prevent a drag on a resizable-handle
		if (this.helper || o.disabled || $(event.target).is('.ui-resizable-handle,.ui-resizable-handle>.knob'))
			return false;

		//Quit if we're not on a valid handle
		this.handle = this._getHandle(event);
		if (!this.handle)
			return false;
		
		if ( o.iframeFix ) {
			$(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
				$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>')
				.css({
					width: this.offsetWidth+"px", height: this.offsetHeight+"px",
					position: "absolute", opacity: "0.001", zIndex: 1000
				})
				.css($(this).offset())
				.appendTo("body");
			});
		}

		return true;

	},

	_mouseStart: function(event) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if($.ui.ddmanager)
			$.ui.ddmanager.current = this;

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css("position");
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.positionAbs = this.element.offset();
		if(o.concernAngle){
			var parentoffset=this.element.parent().offset();
			this.offset = this.positionAbs = {
				left:parentoffset.left+$.parseInteger(this.element.css('left')),
				top:parentoffset.top+$.parseInteger(this.element.css('top'))
			}
		} 
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition(event);
		if(o.concernAngle){
			this.originalPosition.left=$.parseInteger(this.element.css('left'));
		}
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Set a containment if given in the options
		if(o.containment)
			this._setContainment();

		//Trigger event + callbacks
		if(this._trigger("start", event) === false) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ($.ui.ddmanager && !o.dropBehaviour)
			$.ui.ddmanager.prepareOffsets(this, event);

		this.helper.addClass("ui-draggable-dragging");
		this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		
		//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
		if ( $.ui.ddmanager ) $.ui.ddmanager.dragStart(this, event);
		
		return true;
	},

	_mouseDrag: function(event, noPropagation) {

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		//Call plugins and callbacks and use the resulting position if something is returned
		if (!noPropagation) {
			var ui = this._uiHash();
			if(this._trigger('drag', event, ui) === false) {
				this._mouseUp({});
				return false;
			}
			this.position = ui.position;
		}

		if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
		if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';
		if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

		return false;
	},

	_mouseStop: function(event) {

		//If we are using droppables, inform the manager about the drop
		var dropped = false;
		if ($.ui.ddmanager && !this.options.dropBehaviour)
			dropped = $.ui.ddmanager.drop(this, event);

		//if a drop comes from outside (a sortable)
		if(this.dropped) {
			dropped = this.dropped;
			this.dropped = false;
		}
		
		//if the original element is removed, don't bother to continue if helper is set to "original"
		if((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original")
			return false;

		if((this.options.revert == "invalid" && !dropped) || (this.options.revert == "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
			var self = this;
			$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				if(self._trigger("stop", event) !== false) {
					self._clear();
				}
			});
		} else {
			if(this._trigger("stop", event) !== false) {
				this._clear();
			}
		}

		return false;
	},
	
	_mouseUp: function(event) {
		if (this.options.iframeFix === true) {
			$("div.ui-draggable-iframeFix").each(function() { 
				this.parentNode.removeChild(this); 
			}); //Remove frame helpers
		}
		
		//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
		if( $.ui.ddmanager ) $.ui.ddmanager.dragStop(this, event);
		
		return $.ui.mouse.prototype._mouseUp.call(this, event);
	},
	
	cancel: function() {
		
		if(this.helper.is(".ui-draggable-dragging")) {
			this._mouseUp({});
		} else {
			this._clear();
		}
		
		return this;
		
	},

	_getHandle: function(event) {

		var handle = !this.options.handle || !$(this.options.handle, this.element).length ? true : false;
		$(this.options.handle, this.element)
			.find("*")
			.andSelf()
			.each(function() {
				if(this == event.target) handle = true;
			});

		return handle;

	},

	_createHelper: function(event) {

		var o = this.options;
		var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper == 'clone' ? this.element.clone().removeAttr('id') : this.element);

		if(!helper.parents('body').length)
			helper.appendTo((o.appendTo == 'parent' ? this.element[0].parentNode : o.appendTo));

		if(helper[0] != this.element[0] && !(/(fixed|absolute)/).test(helper.css("position")))
			helper.css("position", "absolute");

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj == 'string') {
			obj = obj.split(' ');
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ('left' in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ('right' in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ('top' in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ('bottom' in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition == 'absolute' && this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if((this.offsetParent[0] == document.body) //This needs to be actually done for all browsers, since pageX/pageY includes this information
		|| (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.browser.msie)) //Ugly IE fix
			po = { top: 0, left: 0 };

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition == "relative") {
			var p = this.element.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.element.css("marginLeft"),10) || 0),
			top: (parseInt(this.element.css("marginTop"),10) || 0),
			right: (parseInt(this.element.css("marginRight"),10) || 0),
			bottom: (parseInt(this.element.css("marginBottom"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var o = this.options;
		if(o.containment == 'parent') o.containment = this.helper[0].parentNode;
		if(o.containment == 'document' || o.containment == 'window') this.containment = [
			o.containment == 'document' ? 0 : $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
			o.containment == 'document' ? 0 : $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
			(o.containment == 'document' ? 0 : $(window).scrollLeft()) + $(o.containment == 'document' ? document : window).width() - this.helperProportions.width - this.margins.left,
			(o.containment == 'document' ? 0 : $(window).scrollTop()) + ($(o.containment == 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
		];

		if(!(/^(document|window|parent)$/).test(o.containment) && o.containment.constructor != Array) {
		        var c = $(o.containment);
			var ce = c[0]; if(!ce) return;
			var co = c.offset();
			var over = ($(ce).css("overflow") != 'hidden');

			this.containment = [
				(parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0),
				(parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0),
				(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
				(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top  - this.margins.bottom
			];
			this.relative_container = c;

		} else if(o.containment.constructor == Array) {
			this.containment = o.containment;
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) pos = this.position;
		var mod = d == "absolute" ? 1 : -1;
		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top																	// The absolute mouse position
				+ this.offset.relative.top * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.top * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left																// The absolute mouse position
				+ this.offset.relative.left * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.left * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
		var pageX = event.pageX;
		var pageY = event.pageY;

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options
		         var containment;
		         if(this.containment) {
				 if (this.relative_container){
				     var co = this.relative_container.offset();
				     containment = [ this.containment[0] + co.left,
						     this.containment[1] + co.top,
						     this.containment[2] + co.left,
						     this.containment[3] + co.top ];
				 }
				 else {
				     containment = this.containment;
				 }

				if(event.pageX - this.offset.click.left < containment[0]) pageX = containment[0] + this.offset.click.left;
				if(event.pageY - this.offset.click.top < containment[1]) pageY = containment[1] + this.offset.click.top;
				if(event.pageX - this.offset.click.left > containment[2]) pageX = containment[2] + this.offset.click.left;
				if(event.pageY - this.offset.click.top > containment[3]) pageY = containment[3] + this.offset.click.top;
			}

			if(o.grid) {
				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
				var top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
				pageY = containment ? (!(top - this.offset.click.top < containment[1] || top - this.offset.click.top > containment[3]) ? top : (!(top - this.offset.click.top < containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				var left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
				pageX = containment ? (!(left - this.offset.click.left < containment[0] || left - this.offset.click.left > containment[2]) ? left : (!(left - this.offset.click.left < containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY																// The absolute mouse position
				- this.offset.click.top													// Click offset (relative to the element)
				- this.offset.relative.top												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.top												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX																// The absolute mouse position
				- this.offset.click.left												// Click offset (relative to the element)
				- this.offset.relative.left												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.left												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_clear: function() {
		this.helper.removeClass("ui-draggable-dragging");
		if(this.helper[0] != this.element[0] && !this.cancelHelperRemoval) this.helper.remove();
		//if($.ui.ddmanager) $.ui.ddmanager.current = null;
		this.helper = null;
		this.cancelHelperRemoval = false;
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function(type, event, ui) {
		ui = ui || this._uiHash();
		$.ui.plugin.call(this, type, [event, ui]);
		if(type == "drag") this.positionAbs = this._convertPositionTo("absolute"); //The absolute position has to be recalculated after plugins
		return $.Widget.prototype._trigger.call(this, type, event, ui);
	},

	plugins: {},

	_uiHash: function(event) {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

});

$.extend($.ui.draggable, {
	version: "1.8.17"
});

$.ui.plugin.add("draggable", "connectToSortable", {
	start: function(event, ui) {

		var inst = $(this).data("draggable"), o = inst.options,
			uiSortable = $.extend({}, ui, { item: inst.element });
		inst.sortables = [];
		$(o.connectToSortable).each(function() {
			var sortable = $.data(this, 'sortable');
			if (sortable && !sortable.options.disabled) {
				inst.sortables.push({
					instance: sortable,
					shouldRevert: sortable.options.revert
				});
				sortable.refreshPositions();	// Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
				sortable._trigger("activate", event, uiSortable);
			}
		});

	},
	stop: function(event, ui) {

		//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
		var inst = $(this).data("draggable"),
			uiSortable = $.extend({}, ui, { item: inst.element });

		$.each(inst.sortables, function() {
			if(this.instance.isOver) {

				this.instance.isOver = 0;

				inst.cancelHelperRemoval = true; //Don't remove the helper in the draggable instance
				this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)

				//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: 'valid/invalid'
				if(this.shouldRevert) this.instance.options.revert = true;

				//Trigger the stop of the sortable
				this.instance._mouseStop(event);

				this.instance.options.helper = this.instance.options._helper;

				//If the helper has been the original item, restore properties in the sortable
				if(inst.options.helper == 'original')
					this.instance.currentItem.css({ top: 'auto', left: 'auto' });

			} else {
				this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance
				this.instance._trigger("deactivate", event, uiSortable);
			}

		});

	},
	drag: function(event, ui) {

		var inst = $(this).data("draggable"), self = this;

		var checkPos = function(o) {
			var dyClick = this.offset.click.top, dxClick = this.offset.click.left;
			var helperTop = this.positionAbs.top, helperLeft = this.positionAbs.left;
			var itemHeight = o.height, itemWidth = o.width;
			var itemTop = o.top, itemLeft = o.left;

			return $.ui.isOver(helperTop + dyClick, helperLeft + dxClick, itemTop, itemLeft, itemHeight, itemWidth);
		};

		$.each(inst.sortables, function(i) {
			
			//Copy over some variables to allow calling the sortable's native _intersectsWith
			this.instance.positionAbs = inst.positionAbs;
			this.instance.helperProportions = inst.helperProportions;
			this.instance.offset.click = inst.offset.click;
			
			if(this.instance._intersectsWith(this.instance.containerCache)) {

				//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
				if(!this.instance.isOver) {

					this.instance.isOver = 1;
					//Now we fake the start of dragging for the sortable instance,
					//by cloning the list group item, appending it to the sortable and using it as inst.currentItem
					//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
					this.instance.currentItem = $(self).clone().removeAttr('id').appendTo(this.instance.element).data("sortable-item", true);
					this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it
					this.instance.options.helper = function() { return ui.helper[0]; };

					event.target = this.instance.currentItem[0];
					this.instance._mouseCapture(event, true);
					this.instance._mouseStart(event, true, true);

					//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
					this.instance.offset.click.top = inst.offset.click.top;
					this.instance.offset.click.left = inst.offset.click.left;
					this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
					this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;

					inst._trigger("toSortable", event);
					inst.dropped = this.instance.element; //draggable revert needs that
					//hack so receive/update callbacks work (mostly)
					inst.currentItem = inst.element;
					this.instance.fromOutside = inst;

				}

				//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
				if(this.instance.currentItem) this.instance._mouseDrag(event);

			} else {

				//If it doesn't intersect with the sortable, and it intersected before,
				//we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
				if(this.instance.isOver) {

					this.instance.isOver = 0;
					this.instance.cancelHelperRemoval = true;
					
					//Prevent reverting on this forced stop
					this.instance.options.revert = false;
					
					// The out event needs to be triggered independently
					this.instance._trigger('out', event, this.instance._uiHash(this.instance));
					
					this.instance._mouseStop(event, true);
					this.instance.options.helper = this.instance.options._helper;

					//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
					this.instance.currentItem.remove();
					if(this.instance.placeholder) this.instance.placeholder.remove();

					inst._trigger("fromSortable", event);
					inst.dropped = false; //draggable revert needs that
				}

			};

		});

	}
});

$.ui.plugin.add("draggable", "cursor", {
	start: function(event, ui) {
		var t = $('body'), o = $(this).data('draggable').options;
		if (t.css("cursor")) o._cursor = t.css("cursor");
		t.css("cursor", o.cursor);
	},
	stop: function(event, ui) {
		var o = $(this).data('draggable').options;
		if (o._cursor) $('body').css("cursor", o._cursor);
	}
});

$.ui.plugin.add("draggable", "opacity", {
	start: function(event, ui) {
		var t = $(ui.helper), o = $(this).data('draggable').options;
		if(t.css("opacity")) o._opacity = t.css("opacity");
		t.css('opacity', o.opacity);
	},
	stop: function(event, ui) {
		var o = $(this).data('draggable').options;
		if(o._opacity) $(ui.helper).css('opacity', o._opacity);
	}
});

$.ui.plugin.add("draggable", "scroll", {
	start: function(event, ui) {
		var i = $(this).data("draggable");
		if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') i.overflowOffset = i.scrollParent.offset();
	},
	drag: function(event, ui) {

		var i = $(this).data("draggable"), o = i.options, scrolled = false;

		if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') {

			if(!o.axis || o.axis != 'x') {
				if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
				else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity)
					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
			}

			if(!o.axis || o.axis != 'y') {
				if((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
				else if(event.pageX - i.overflowOffset.left < o.scrollSensitivity)
					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
			}

		} else {

			if(!o.axis || o.axis != 'x') {
				if(event.pageY - $(document).scrollTop() < o.scrollSensitivity)
					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity)
					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
			}

			if(!o.axis || o.axis != 'y') {
				if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity)
					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity)
					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
			}

		}

		if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
			$.ui.ddmanager.prepareOffsets(i, event);

	}
});

$.ui.plugin.add("draggable", "snap", {
	start: function(event, ui) {

		var i = $(this).data("draggable"), o = i.options;
		i.snapElements = [];

		$(o.snap.constructor != String ? ( o.snap.items || ':data(draggable)' ) : o.snap).each(function() {
			var $t = $(this); var $o = $t.offset();
			if(this != i.element[0]) i.snapElements.push({
				item: this,
				width: $t.outerWidth(), height: $t.outerHeight(),
				top: $o.top, left: $o.left
			});
		});

	},
	drag: function(event, ui) {

		var inst = $(this).data("draggable"), o = inst.options;
		var d = o.snapTolerance;

		var x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for (var i = inst.snapElements.length - 1; i >= 0; i--){

			var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width,
				t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;

			//Yes, I know, this is insane ;)
			if(!((l-d < x1 && x1 < r+d && t-d < y1 && y1 < b+d) || (l-d < x1 && x1 < r+d && t-d < y2 && y2 < b+d) || (l-d < x2 && x2 < r+d && t-d < y1 && y1 < b+d) || (l-d < x2 && x2 < r+d && t-d < y2 && y2 < b+d))) {
				if(inst.snapElements[i].snapping) (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
				inst.snapElements[i].snapping = false;
				continue;
			}

			if(o.snapMode != 'inner') {
				var ts = Math.abs(t - y2) <= d;
				var bs = Math.abs(b - y1) <= d;
				var ls = Math.abs(l - x2) <= d;
				var rs = Math.abs(r - x1) <= d;
				if(ts) ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
				if(bs) ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
				if(ls) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
				if(rs) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
			}

			var first = (ts || bs || ls || rs);

			if(o.snapMode != 'outer') {
				var ts = Math.abs(t - y1) <= d;
				var bs = Math.abs(b - y2) <= d;
				var ls = Math.abs(l - x1) <= d;
				var rs = Math.abs(r - x2) <= d;
				if(ts) ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top - inst.margins.top;
				if(bs) ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
				if(ls) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left - inst.margins.left;
				if(rs) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;
			}

			if(!inst.snapElements[i].snapping && (ts || bs || ls || rs || first))
				(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
			inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

		};

	}
});

//wopop cstlyer 
$.ui.plugin.add("draggable", "wopop_snap", {
	start: function(event, ui) {
		return;
		var i = $(this).data("draggable"), o = i.options;
		var wopop_snap=o.wopop_snap;
		if(!wopop_snap) return;
		if($(this).data('deg')) return;
		if(!$(this).is('.cstlayer')) return; 
		//判断是否包含锁定元素
		var has_layer_lock=false;
		$('.ui-modselected').each(function(){
			$(this).data('left',$(this).css('left'));
			$(this).data('top',$(this).css('top'));
			$(this).data('width',$(this).css('width'));
			$(this).data('height',$(this).css('height'));

				if($(this).data('cstlayerstatus') == 'unlock' ){
					has_layer_lock=true;
				}
		});
		if(has_layer_lock) return;
		if($(this).closest('.fullpagesection').length) return;
		
		i.snapElements = [];
		var abs_top=$(this).ab_pos_cnter('top')-i.originalPosition.top;
		i.wopop_ab_top=abs_top;
		
		var vsnap=[];
	     var hsnap=[];
		function in_array(num,snaparr){
			for(var i=0;i<snaparr.length;i++){
				var snapnum=snaparr[i];
				if(Math.abs(snapnum-num)<2) return 1;
			}
			return -1;
		}
		
		function clear_snap(){
			vsnap=[];
			hsnap=[];
			$('.wopop_snap').remove();
			i.snapElements=[];
		}
		
		 function getLayerSnap(layer){
				 var t=parseInt(layer.ab_pos_cnter('top'))||0;
				 var b=t+parseInt(layer.css('height'))||0;
				 var l=parseInt(layer.css('left'))||0;
				 var r=l+parseInt(layer.css('width'))||0;
				 var offsetl=$('#canvas').offset().left-$('#scroll_container').offset().left;
				 var totalh=$('#scroll_container_bg').height();
				 var scct=$('#scroll_container').scrollTop();
				 i.ori_scct=scct;
//				 if(!((t>scct&&t<scct+$(window).height())||(b>scct&&b<scct+$(window).height()))){
//					 return;
//				 }
				 if(in_array(t, hsnap)==-1){
						 hsnap.push(t);
						 var snapstr="<div class='wopop_snap_horizon wopop_snap' style='top:"+t+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
				 if(in_array(b, hsnap)==-1){
						 hsnap.push(b);
						 var snapstr="<div class='wopop_snap_horizon wopop_snap' style='top:"+b+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
				 if(in_array(l, vsnap)==-1){
						 vsnap.push(l);
						 var snapstr="<div class='wopop_snap_vertical wopop_snap' style='left:"+(offsetl+l)+"px;height:"+totalh+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
				 if(in_array(r, vsnap)==-1){
						 vsnap.push(r);
						 var snapstr="<div class='wopop_snap_vertical wopop_snap' style='left:"+(offsetl+r)+"px;height:"+totalh+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
		 }

		$(this).unbind('layersnapstart').bind('layersnapstart',function(){
			clear_snap();
			if($.getElementAreaInf($(this))=='canvas'){
				$('#canvas .cstlayer:not(.ui-modselected)').each(function(){
					getLayerSnap($(this));
				})
			}else{
				$('#scroll_container .cstlayer:not(.ui-modselected)').each(function(){
					getLayerSnap($(this));
				})
			}

			i.snapElements=[];
			var scct=$('#scroll_container').scrollTop();
			var offsetl=$('#canvas').offset().left;
			$('.wopop_snap').each(function(){
				var $t = $(this); var $o = $t.offset();
				if($t.is('.wopop_snap_vertical')){
					var obj={
						item: this,
						width: 0, height: $t.outerHeight(),
						top: 0, left: $o.left-offsetl
					};
					i.snapElements.push(obj);
					$(this).data('snapel',obj);
				}else{
					var obj={
						item: this,
						width: $t.outerWidth(), height: 0,
						top: parseInt($t.css('top'))||0, left: 0
					}
					i.snapElements.push(obj);
					$(this).data('snapel',obj);
				}

			})
		})
		$(this).trigger('layersnapstart');


	},
	drag: function(event, ui) {
		return;
		var inst = $(this).data("draggable"), o = inst.options;
		var wopop_snap=o.wopop_snap;
		if(!wopop_snap) return;
		if($(this).data('deg')) return;
		if(!$(this).is('.cstlayer')) return; 
		var snapMode='outer';
		var d = 3; //snapTolerance :5,
		var scct=$('#scroll_container').scrollTop();
		var ori_scct=inst.ori_scct;
		if(scct !=ori_scct ){
			$(this).trigger('layersnapstart');
		}
		var ab_top=inst.wopop_ab_top;

		for (var i = inst.snapElements.length - 1; i >= 0; i--){
			var x1 = ui.position.left, x2 = x1 + inst.helperProportions.width,
			y1 =  ui.position.top+ab_top, y2 = y1 + inst.helperProportions.height;

			var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width,
				t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;

			var ls=Math.abs(l-x1)<=d;
			var rs=Math.abs(l-x2)<=d;
			var ts=Math.abs(t-y1)<=d;
			var bs=Math.abs(t-y2)<=d;
			if(ls) ui.position.left =ui.position.left+l-x1;
			if(rs) ui.position.left =ui.position.left+(l-x2);
			if(ts) ui.position.top =ui.position.top+t-y1;
			if(bs) ui.position.top =ui.position.top+t-y2;

			var first = (ts || bs || ls || rs);

			if( (ts || bs || ls || rs || first)){
				if($(inst.snapElements[i].item).is('.wopop_snap_vertical')){
					$('.wopop_snap_vertical.showline').each(function(){
						var snapinfo=$(this).data('snapel');
						var l=snapinfo.left;
						var x1 = ui.position.left, x2 = x1 + inst.helperProportions.width;
						if(!(Math.abs(l-x1)<0.5 || Math.abs(l-x2)<0.5)) $(this).removeClass('showline');
					})
				}else{
					$('.wopop_snap_horizon.showline').each(function(){
						var snapinfo=$(this).data('snapel');
						var t=snapinfo.top;
						var y1 =  ui.position.top+ab_top, y2 = y1 + inst.helperProportions.height;
						if(!(Math.abs(t-y1)<0.5 || Math.abs(t-y2)<0.5)) $(this).removeClass('showline');
					})
				}
				$(inst.snapElements[i].item).addClass('showline');
			}else{
				inst.snapElements[i].snapping = false;
				$(inst.snapElements[i].item).removeClass('showline');
				continue;
			}
			inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

		};

	},
	stop: function(event, ui) {
		return;
		$('.wopop_snap').remove();
		$(this).unbind('layersnapstart');
	}
});

$.ui.plugin.add("draggable", "stack", {
	start: function(event, ui) {

		var o = $(this).data("draggable").options;

		var group = $.makeArray($(o.stack)).sort(function(a,b) {
			return (parseInt($(a).css("zIndex"),10) || 0) - (parseInt($(b).css("zIndex"),10) || 0);
		});
		if (!group.length) { return; }
		
		var min = parseInt(group[0].style.zIndex) || 0;
		$(group).each(function(i) {
			this.style.zIndex = min + i;
		});

		this[0].style.zIndex = min + group.length;

	}
});

$.ui.plugin.add("draggable", "zIndex", {
	start: function(event, ui) {
		var t = $(ui.helper), o = $(this).data("draggable").options;
		if(t.css("zIndex")) o._zIndex = t.css("zIndex");
		t.css('zIndex', o.zIndex);
	},
	stop: function(event, ui) {
		var o = $(this).data("draggable").options;
		if(o._zIndex) $(ui.helper).css('zIndex', o._zIndex);
	}
});

})(jQuery);
/* jQuery UI Droppable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;!!c&&(c.currentItem||c.element)[0]!=this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;!!c&&(c.currentItem||c.element)[0]!=this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance)){e=!0;return!1}});if(e)return!1;if(this.accept.call(this.element[0],d.currentItem||d.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d));return this.element}return!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.17"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();droppablesLoop:for(var g=0;g<d.length;g++){if(d[g].options.disabled||b&&!d[g].accept.call(d[g].element[0],b.currentItem||b.element))continue;for(var h=0;h<f.length;h++)if(f[h]==d[g].element[0]){d[g].proportions.height=0;continue droppablesLoop}d[g].visible=d[g].element.css("display")!="none";if(!d[g].visible)continue;e=="mousedown"&&d[g]._activate.call(d[g],c),d[g].offset=d[g].element.offset(),d[g].proportions={width:d[g].element[0].offsetWidth,height:d[g].element[0].offsetHeight}}},drop:function(b,c){var d=!1;a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){!this.options||(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c)))});return d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))}})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);/*
 * jQuery UI Resizable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.resizable", $.ui.mouse, {
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		aspectFunc:false,
		autoHide: false,
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		scroll: false,
		scrollSensitivity:20,
		scrollSpeed: 20,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,
		zIndex: 1000,
		concernAngle: false,
		concernLock:false
	},
	_create: function() {

		var self = this, o = this.options;
		this.element.addClass("ui-resizable");

		$.extend(this, {
			_aspectRatio: !!(o.aspectRatio),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || 'ui-resizable-helper' : null
		});

		//Wrap the element if it cannot hold child nodes
		if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

			//Opera fix for relative positioning
			if (/relative/.test(this.element.css('position')) && $.browser.opera)
				this.element.css({ position: 'relative', top: 'auto', left: 'auto' });

			//Create a wrapper element and set the wrapper to the new current internal element
			this.element.wrap(
				$('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css('position'),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css('top'),
					left: this.element.css('left')
				})
			);

			//Overwrite the original this.element
			this.element = this.element.parent().data(
				"resizable", this.element.data('resizable')
			);

			this.elementIsWrapper = true;

			//Move margins to the wrapper
			this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") });
			this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});

			//Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css('resize');
			this.originalElement.css('resize', 'none');

			//Push the actual element to our proportionallyResize internal array
			this._proportionallyResizeElements.push(this.originalElement.css({ position: 'static', zoom: 1, display: 'block' }));

			// avoid IE jump (hard set the margin)
			this.originalElement.css({ margin: this.originalElement.css('margin') });

			// fix handlers offset
			this._proportionallyResize();

		}

		this.handles = o.handles || (!$('.ui-resizable-handle', this.element).length ? "e,s,se" : { n: '.ui-resizable-n', e: '.ui-resizable-e', s: '.ui-resizable-s', w: '.ui-resizable-w', se: '.ui-resizable-se', sw: '.ui-resizable-sw', ne: '.ui-resizable-ne', nw: '.ui-resizable-nw' });
		if(this.handles.constructor == String) {

			if(this.handles == 'all') this.handles = 'n,e,s,w,se,sw,ne,nw';
			var n = this.handles.split(","); this.handles = {};

			for(var i = 0; i < n.length; i++) {

				var handle = $.trim(n[i]), hname = 'ui-resizable-'+handle;
				var axis = $('<div class="ui-resizable-handle ' + hname + '"></div>');

				// increase zIndex of sw, se, ne, nw axis
				//TODO : this modifies original option
				if(/sw|se|ne|nw/.test(handle)) axis.css({ zIndex: ++o.zIndex });

				//TODO : What's going on here?
				if ('se' == handle) {
					axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');
				};

				//Insert into internal handles object and append to element
				this.handles[handle] = '.ui-resizable-'+handle;
				this.element.append(axis);
			}

		}

		this._renderAxis = function(target) {

			target = target || this.element;

			for(var i in this.handles) {

				if(this.handles[i].constructor == String)
					this.handles[i] = $(this.handles[i], this.element).show();

				//Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
				if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {

					var axis = $(this.handles[i], this.element), padWrapper = 0;

					//Checking the correct pad and border
					padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

					//The padding type i have to apply...
					var padPos = [ 'padding',
						/ne|nw|n/.test(i) ? 'Top' :
						/se|sw|s/.test(i) ? 'Bottom' :
						/^e$/.test(i) ? 'Right' : 'Left' ].join("");

					target.css(padPos, padWrapper);

					this._proportionallyResize();

				}

				//TODO: What's that good for? There's not anything to be executed left
				if(!$(this.handles[i]).length)
					continue;

			}
		};

		//TODO: make renderAxis a prototype function
		this._renderAxis(this.element);

		this._handles = $('.ui-resizable-handle', this.element)
			.disableSelection();

		//Matching axis name
		this._handles.mouseover(function() {
			if (!self.resizing) {
				if (this.className)
					var axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
				//Axis, default = se
				self.axis = axis && axis[1] ? axis[1] : 'se';
			}
		});

		//If we want to auto hide the elements
		if (o.autoHide) {
			this._handles.hide();
			$(this.element)
				.addClass("ui-resizable-autohide")
				.hover(function() {
					if (o.disabled) return;
					$(this).removeClass("ui-resizable-autohide");
					self._handles.show();
				},
				function(){
					if (o.disabled) return;
					if (!self.resizing) {
						$(this).addClass("ui-resizable-autohide");
						self._handles.hide();
					}
				});
		}

		//Initialize the mouse interaction
		this._mouseInit();

	},

	destroy: function() {

		this._mouseDestroy();

		var _destroy = function(exp) {
			$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
				.removeData("resizable").unbind(".resizable").find('.ui-resizable-handle').remove();
		};

		//TODO: Unwrap at same DOM position
		if (this.elementIsWrapper) {
			_destroy(this.element);
			var wrapper = this.element;
			wrapper.after(
				this.originalElement.css({
					position: wrapper.css('position'),
					width: wrapper.outerWidth(),
					height: wrapper.outerHeight(),
					top: wrapper.css('top'),
					left: wrapper.css('left')
				})
			).remove();
		}

		this.originalElement.css('resize', this.originalResizeStyle);
		_destroy(this.originalElement);

		return this;
	},

	_mouseCapture: function(event) {
		var handle = false;
		for (var i in this.handles) {
			if ($(this.handles[i])[0] == event.target || $(this.handles[i])[0] == event.target.parentNode) {
				handle = true;
			}
		}

		var lockcondition=true;
		if(this.options.concernLock && this.element.data('cstlayerstatus') == 'unlock'){
			lockcondition=false;
		}
		return !this.options.disabled && handle && lockcondition;
	},

	_mouseStart: function(event) {

		var o = this.options, iniPos = this.element.position(), el = this.element;

		this.resizing = true;
		this.documentScroll = { top: $(document).scrollTop(), left: $(document).scrollLeft() };
		
		// bugfix for http://dev.jquery.com/ticket/1749
		if(!o.concernAngle&&!o.noinit){
			if (el.is('.ui-draggable') || (/absolute/).test(el.css('position'))) {
				el.css({ position: 'absolute', top: iniPos.top, left: iniPos.left });
			}
		}
		
		//Opera fixing relative position
		if ($.browser.opera && (/relative/).test(el.css('position')))
			el.css({ position: 'relative', top: 'auto', left: 'auto' });
		
		this._renderProxy();
		
		var curleft = num(this.helper.css('left')), curtop = num(this.helper.css('top'));
		
		if (o.containment) {
			curleft += $(o.containment).scrollLeft() || 0;
			curtop += $(o.containment).scrollTop() || 0;
		}

		//Store needed variables
		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };
		if($.browser.msie && $.browser.version < 9 && el.data('deg') % 360 != 0)
			this.size = {width:el.data('IEWidth'),height:el.data('IEHeight')};
		else
			this.size = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
		this.originalSize = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
		this.originalPosition = { left: curleft, top: curtop };
		this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		if(o.scroll &&(!o.concernAngle||o.concernAngle&&!this.element.data('deg'))){
			this.scrollParent =this.element.scrollParent();
			this.originalMousePosition.top+=this.scrollParent.scrollTop();
		}
		//Aspect Ratio
		this.aspectRatio = (typeof o.aspectRatio == 'number') ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);

		if(o.concernAngle){
			//处理旋转模块Resize鼠标cursor样式
			$.divrotate.getDegreeResizeCursor(this.element);
		}
	    var cursor = this.element.find('.ui-resizable-' + this.axis).css('cursor');
	    $('body').css('cursor', cursor == 'auto' ? this.axis + '-resize' : cursor);
	    
		el.addClass("ui-resizable-resizing");
		this._propagate("start", event);
		return true;
	},

	_mouseDrag: function(event) {

		//Increase performance, avoid regex
		var el = this.helper, o = this.options, props = {},
			self = this, smp = this.originalMousePosition, a = this.axis;
		var ypos=event.pageY;
		if(o.scroll &&(!o.concernAngle||o.concernAngle&&!this.element.data('deg'))){
			ypos+=this.scrollParent.scrollTop();
		}
		var dx = (event.pageX-smp.left)||0, dy = (ypos-smp.top)||0;
		var trigger = this._change[a];
		if (!trigger) return false;

		// Calculate the attrs that will be change
		var data = trigger.apply(this, [event, dx, dy]), ie6 = $.browser.msie && $.browser.version < 7, csdif = this.sizeDiff;

		// Put this in the mouseDrag handler since the user can start pressing shift while resizing
		this._updateVirtualBoundaries(event.shiftKey);
		if (!$.isFunction(o.aspectFunc)&&(this._aspectRatio || event.shiftKey)){
			data = this._updateRatio(data, event);
		}else if($.isFunction(o.aspectFunc)){
			data = this._updateAFunc(data, event);
		}

		data = this._respectSize(data, event);

		// plugins callbacks need to be called first
		this._propagate("resize", event);

		el.css({
			top: this.position.top + "px", left: this.position.left + "px",
			width: this.size.width + "px", height: this.size.height + "px"
		});

		if (!this._helper && this._proportionallyResizeElements.length)
			this._proportionallyResize();

		this._updateCache(data);

		// calling the user callback at the end
		this._trigger('resize', event, this.ui());
	
		return false;
	},

	_mouseStop: function(event) {

		this.resizing = false;
		var o = this.options, self = this;

		if(this._helper) {
			var pr = this._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
				soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : self.sizeDiff.height,
				soffsetw = ista ? 0 : self.sizeDiff.width;

			var s = { width: (self.helper.width()  - soffsetw), height: (self.helper.height() - soffseth) },
				left = (parseInt(self.element.css('left'), 10) + (self.position.left - self.originalPosition.left)) || null,
				top = (parseInt(self.element.css('top'), 10) + (self.position.top - self.originalPosition.top)) || null;

			if (!o.animate)
				this.element.css($.extend(s, { top: top, left: left }));

			self.helper.height(self.size.height);
			self.helper.width(self.size.width);

			if (this._helper && !o.animate) this._proportionallyResize();
		}

		$('body').css('cursor', 'auto');

		this.element.removeClass("ui-resizable-resizing");

		this._propagate("stop", event);

		if (this._helper) this.helper.remove();
		return false;

	},

    _updateVirtualBoundaries: function(forceAspectRatio) {
        var o = this.options, pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b;

        b = {
            minWidth: isNumber(o.minWidth) ? o.minWidth : 0,
            maxWidth: isNumber(o.maxWidth) ? o.maxWidth : Infinity,
            minHeight: isNumber(o.minHeight) ? o.minHeight : 0,
            maxHeight: isNumber(o.maxHeight) ? o.maxHeight : Infinity
        };

        if(this._aspectRatio || forceAspectRatio) {
            // We want to create an enclosing box whose aspect ration is the requested one
            // First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
            pMinWidth = b.minHeight * this.aspectRatio;
            pMinHeight = b.minWidth / this.aspectRatio;
            pMaxWidth = b.maxHeight * this.aspectRatio;
            pMaxHeight = b.maxWidth / this.aspectRatio;

            if(pMinWidth > b.minWidth) b.minWidth = pMinWidth;
            if(pMinHeight > b.minHeight) b.minHeight = pMinHeight;
            if(pMaxWidth < b.maxWidth) b.maxWidth = pMaxWidth;
            if(pMaxHeight < b.maxHeight) b.maxHeight = pMaxHeight;
        }
        this._vBoundaries = b;
    },

	_updateCache: function(data) {
		var o = this.options;
		this.offset = this.helper.offset();
		if (isNumber(data.left)) this.position.left = data.left;
		if (isNumber(data.top)) this.position.top = data.top;
		if (isNumber(data.height)) this.size.height = data.height;
		if (isNumber(data.width)) this.size.width = data.width;
	},

	_updateRatio: function(data, event) {

		var o = this.options, cpos = this.position, csize = this.size, a = this.axis;

		if (isNumber(data.height)) data.width = (data.height * this.aspectRatio);
		else if (isNumber(data.width)) data.height = (data.width / this.aspectRatio);

		if (a == 'sw') {
			data.left = cpos.left + (csize.width - data.width);
			data.top = null;
		}
		if (a == 'nw') {
			data.top = cpos.top + (csize.height - data.height);
			data.left = cpos.left + (csize.width - data.width);
		}

		return data;
	},				
	_updateAFunc: function(data, event) {

		var o = this.options, cpos = this.position, csize = this.size, a = this.axis;
		var el=this.element;var aspectFunc=o.aspectFunc;
         
		if (isNumber(data.height)) data.width = aspectFunc(el,data.height,'height');
		else if (isNumber(data.width)) data.height = aspectFunc(el,data.width,'width');

		if (a == 'sw') {
			data.left = cpos.left + (csize.width - data.width);
			data.top = null;
		}
		if (a == 'nw') {
			data.top = cpos.top + (csize.height - data.height);
			data.left = cpos.left + (csize.width - data.width);
		}

		return data;
	},

	_respectSize: function(data, event) {

		var el = this.helper, o = this._vBoundaries, pRatio = this._aspectRatio || event.shiftKey, a = this.axis,
				ismaxw = isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
					isminw = isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = isNumber(data.height) && o.minHeight && (o.minHeight > data.height);

		if (isminw) data.width = o.minWidth;
		if (isminh) data.height = o.minHeight;
		if (ismaxw) data.width = o.maxWidth;
		if (ismaxh) data.height = o.maxHeight;

		var dw = this.originalPosition.left + this.originalSize.width, dh = this.position.top + this.size.height;
		var cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);

		if (isminw && cw) data.left = dw - o.minWidth;
		if (ismaxw && cw) data.left = dw - o.maxWidth;
		if (isminh && ch)	data.top = dh - o.minHeight;
		if (ismaxh && ch)	data.top = dh - o.maxHeight;

		// fixing jump error on top/left - bug #2330
		var isNotwh = !data.width && !data.height;
		if (isNotwh && !data.left && data.top) data.top = null;
		else if (isNotwh && !data.top && data.left) data.left = null;

		return data;
	},

	_proportionallyResize: function() {

		var o = this.options;
		if (!this._proportionallyResizeElements.length) return;
		var element = this.helper || this.element;

		for (var i=0; i < this._proportionallyResizeElements.length; i++) {

			var prel = this._proportionallyResizeElements[i];

			if (!this.borderDif) {
				var b = [prel.css('borderTopWidth'), prel.css('borderRightWidth'), prel.css('borderBottomWidth'), prel.css('borderLeftWidth')],
					p = [prel.css('paddingTop'), prel.css('paddingRight'), prel.css('paddingBottom'), prel.css('paddingLeft')];

				this.borderDif = $.map(b, function(v, i) {
					var border = parseInt(v,10)||0, padding = parseInt(p[i],10)||0;
					return border + padding;
				});
			}

			if ($.browser.msie && !(!($(element).is(':hidden') || $(element).parents(':hidden').length)))
				continue;

			prel.css({
				height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
				width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
			});

		};

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if(this._helper) {

			this.helper = this.helper || $('<div style="overflow:hidden;"></div>');

			// fix ie6 offset TODO: This seems broken
			var ie6 = $.browser.msie && $.browser.version < 7, ie6offset = (ie6 ? 1 : 0),
			pxyoffset = ( ie6 ? 2 : -1 );

			this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() + pxyoffset,
				height: this.element.outerHeight() + pxyoffset,
				position: 'absolute',
				left: this.elementOffset.left - ie6offset +'px',
				top: this.elementOffset.top - ie6offset +'px',
				zIndex: ++o.zIndex //TODO: Don't modify option
			});

			this.helper
				.appendTo("body")
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},
	
	_change: {
		e: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			if(o.concernAngle&&this.element.data('deg')){
				return $.divrotate.getDegreeResizeChange(this.element,[dx,dy],sp,cs,'e');
			}
			return { width: this.originalSize.width + dx };
		},
		w: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			if(o.concernAngle&&this.element.data('deg')){
				return $.divrotate.getDegreeResizeChange(this.element,[dx,dy],sp,cs,'w');
			}
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			if(o.concernAngle&&this.element.data('deg')){
				return $.divrotate.getDegreeResizeChange(this.element,[dx,dy],sp,cs,'n');
			}
			else return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			if(o.concernAngle&&this.element.data('deg')){
				return $.divrotate.getDegreeResizeChange(this.element,[dx,dy],sp,cs,'s');
			}
			return { height: this.originalSize.height + dy };
		},
		se: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
		},
		sw: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
		},
		ne: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
		},
		nw: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			if(o.concernAngle&&this.element.data('deg')){
				var l=sp.left,t=sp.top;
				var nchange=this._change.n.apply(this, arguments);
				var wchange=this._change.w.apply(this, arguments);
				var nwchange=$.extend({},nchange,wchange);
				nwchange.left=nchange.left+wchange.left-l;
				nwchange.top=nchange.top+wchange.top-t;
				return nwchange;
			}
			return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
		}
	},

	_propagate: function(n, event) {
		$.ui.plugin.call(this, n, [event, this.ui()]);
		(n != "resize" && this._trigger(n, event, this.ui()));
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

});

$.extend($.ui.resizable, {
	version: "1.8.17"
});

/*
 * Resizable Extensions
 */

$.ui.plugin.add("resizable", "alsoResize", {

	start: function (event, ui) {
		var self = $(this).data("resizable"), o = self.options;

		var _store = function (exp) {
			$(exp).each(function() {
				var el = $(this);
				el.data("resizable-alsoresize", {
					width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
					left: parseInt(el.css('left'), 10), top: parseInt(el.css('top'), 10),
					position: el.css('position') // to reset Opera on stop()
				});
			});
		};

		if (typeof(o.alsoResize) == 'object' && !o.alsoResize.parentNode) {
			if (o.alsoResize.length) { o.alsoResize = o.alsoResize[0]; _store(o.alsoResize); }
			else { $.each(o.alsoResize, function (exp) { _store(exp); }); }
		}else{
			_store(o.alsoResize);
		}
	},

	resize: function (event, ui) {
		var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

		var delta = {
			height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
			top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
		},

		_alsoResize = function (exp, c) {
			$(exp).each(function() {
				var el = $(this), start = $(this).data("resizable-alsoresize"), style = {}, 
					css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ['width', 'height'] : ['width', 'height', 'top', 'left'];

				$.each(css, function (i, prop) {
					var sum = (start[prop]||0) + (delta[prop]||0);
					if (sum && sum >= 0)
						style[prop] = sum || null;
				});

				// Opera fixing relative position
				if ($.browser.opera && /relative/.test(el.css('position'))) {
					self._revertToRelativePosition = true;
					el.css({ position: 'absolute', top: 'auto', left: 'auto' });
				}

				el.css(style);
			});
		};

		if (typeof(o.alsoResize) == 'object' && !o.alsoResize.nodeType) {
			$.each(o.alsoResize, function (exp, c) { _alsoResize(exp, c); });
		}else{
			_alsoResize(o.alsoResize);
		}
	},

	stop: function (event, ui) {
		var self = $(this).data("resizable"), o = self.options;

		var _reset = function (exp) {
			$(exp).each(function() {
				var el = $(this);
				// reset position for Opera - no need to verify it was changed
				el.css({ position: el.data("resizable-alsoresize").position });
			});
		};

		if (self._revertToRelativePosition) {
			self._revertToRelativePosition = false;
			if (typeof(o.alsoResize) == 'object' && !o.alsoResize.nodeType) {
				$.each(o.alsoResize, function (exp) { _reset(exp); });
			}else{
				_reset(o.alsoResize);
			}
		}

		$(this).removeData("resizable-alsoresize");
	}
});

$.ui.plugin.add("resizable", "animate", {

	stop: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options;

		var pr = self._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
					soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : self.sizeDiff.height,
						soffsetw = ista ? 0 : self.sizeDiff.width;

		var style = { width: (self.size.width - soffsetw), height: (self.size.height - soffseth) },
					left = (parseInt(self.element.css('left'), 10) + (self.position.left - self.originalPosition.left)) || null,
						top = (parseInt(self.element.css('top'), 10) + (self.position.top - self.originalPosition.top)) || null;

		self.element.animate(
			$.extend(style, top && left ? { top: top, left: left } : {}), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseInt(self.element.css('width'), 10),
						height: parseInt(self.element.css('height'), 10),
						top: parseInt(self.element.css('top'), 10),
						left: parseInt(self.element.css('left'), 10)
					};

					if (pr && pr.length) $(pr[0]).css({ width: data.width, height: data.height });

					// propagating resize, and updating values for each animation step
					self._updateCache(data);
					self._propagate("resize", event);

				}
			}
		);
	}

});

$.ui.plugin.add("resizable", "containment", {

	start: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options, el = self.element;
		var oc = o.containment,	ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;
		if (!ce) return;

		self.containerElement = $(ce);

		if (/document/.test(oc) || oc == document) {
			self.containerOffset = { left: 0, top: 0 };
			self.containerPosition = { left: 0, top: 0 };

			self.parentData = {
				element: $(document), left: 0, top: 0,
				width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight
			};
		}

		// i'm a node, so compute top, left, right, bottom
		else {
			var element = $(ce), p = [];
			$([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) { p[i] = num(element.css("padding" + name)); });

			self.containerOffset = element.offset();
			self.containerPosition = element.position();
			self.containerSize = { height: (element.innerHeight() - p[3]), width: (element.innerWidth() - p[1]) };

			var co = self.containerOffset, ch = self.containerSize.height,	cw = self.containerSize.width,
						width = ($.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw ), height = ($.ui.hasScroll(ce) ? ce.scrollHeight : ch);

			self.parentData = {
				element: ce, left: co.left, top: co.top, width: width, height: height
			};
		}
	},

	resize: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options,
				ps = self.containerSize, co = self.containerOffset, cs = self.size, cp = self.position,
				pRatio = self._aspectRatio || event.shiftKey, cop = { top:0, left:0 }, ce = self.containerElement;

		if (ce[0] != document && (/static/).test(ce.css('position'))) cop = co;

		if (cp.left < (self._helper ? co.left : 0)) {
			self.size.width = self.size.width + (self._helper ? (self.position.left - co.left) : (self.position.left - cop.left));
			if (pRatio) self.size.height = self.size.width / o.aspectRatio;
			self.position.left = o.helper ? co.left : 0;
		}

		if (cp.top < (self._helper ? co.top : 0)) {
			self.size.height = self.size.height + (self._helper ? (self.position.top - co.top) : self.position.top);
			if (pRatio) self.size.width = self.size.height * o.aspectRatio;
			self.position.top = self._helper ? co.top : 0;
		}

		self.offset.left = self.parentData.left+self.position.left;
		self.offset.top = self.parentData.top+self.position.top;

		var woset = Math.abs( (self._helper ? self.offset.left - cop.left : (self.offset.left - cop.left)) + self.sizeDiff.width ),
					hoset = Math.abs( (self._helper ? self.offset.top - cop.top : (self.offset.top - co.top)) + self.sizeDiff.height );

		var isParent = self.containerElement.get(0) == self.element.parent().get(0),
		    isOffsetRelative = /relative|absolute/.test(self.containerElement.css('position'));

		if(isParent && isOffsetRelative) woset -= self.parentData.left;

		if (woset + self.size.width >= self.parentData.width) {
			self.size.width = self.parentData.width - woset;
			if (pRatio) self.size.height = self.size.width / self.aspectRatio;
		}

		if (hoset + self.size.height >= self.parentData.height) {
			self.size.height = self.parentData.height - hoset;
			if (pRatio) self.size.width = self.size.height * self.aspectRatio;
		}
	},

	stop: function(event, ui){
		var self = $(this).data("resizable"), o = self.options, cp = self.position,
				co = self.containerOffset, cop = self.containerPosition, ce = self.containerElement;

		var helper = $(self.helper), ho = helper.offset(), w = helper.outerWidth() - self.sizeDiff.width, h = helper.outerHeight() - self.sizeDiff.height;

		if (self._helper && !o.animate && (/relative/).test(ce.css('position')))
			$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

		if (self._helper && !o.animate && (/static/).test(ce.css('position')))
			$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

	}
});

$.ui.plugin.add("resizable", "scroll", {
	start: function(event, ui) {
		var i = $(this).data("resizable");o=i.options;
		if(o.scroll &&(!o.concernAngle||o.concernAngle&&!i.element.data('deg'))){
			i.scrollout=1;
			if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') i.overflowOffset = i.scrollParent.offset();
		}
	},
	resize: function(event, ui) {

		var i = $(this).data("resizable"), o = i.options, scrolled = false;
		if(o.scroll &&(!o.concernAngle||o.concernAngle&&!i.element.data('deg'))){
			if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') {
					var oriscrolltop= i.scrollParent[0].scrollTop;
					i.element.data('resize_oriscrolltop',oriscrolltop);
					var lastheightval=i.lastheightval||0;
					if((i.axis=='s' || i.axis=='n')&&lastheightval-i.size.height !=0){
						i.lastheightval=i.size.height;
						var delta=0;
						var func=function(type){
							delta=i.scrollParent[0].scrollTop-oriscrolltop;
							if(i.axis=='s'){
								if(i.scrollout==1){
									i.size.height +=delta;
									i.scrollout=type;
								}else{
									i.size.height +=delta*2;
								}
							}else{
								if(i.scrollout==1){
									i.size.height -=delta;
									i.position.top+=delta;
									i.scrollout=type;
								}else{
									i.size.height -=delta*2;
									i.position.top+=delta*2;
								}
							}
						}
						if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity){
							i.scrollParent[0].scrollTop = scrolled =oriscrolltop + o.scrollSpeed;
							func(2);
						}else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity){
							i.scrollParent[0].scrollTop = scrolled = oriscrolltop - o.scrollSpeed;
							func(3);
						}else{
							i.scrollout=1;
						}
					}
			} 
		}


	}
});

$.ui.plugin.add("resizable", "ghost", {

	start: function(event, ui) {

		var self = $(this).data("resizable"), o = self.options, cs = self.size;

		self.ghost = self.originalElement.clone();
		self.ghost
			.css({ opacity: .25, display: 'block', position: 'relative', height: cs.height, width: cs.width, margin: 0, left: 0, top: 0 })
			.addClass('ui-resizable-ghost')
			.addClass(typeof o.ghost == 'string' ? o.ghost : '');

		self.ghost.appendTo(self.helper);

	},

	resize: function(event, ui){
		var self = $(this).data("resizable"), o = self.options;
		if (self.ghost) self.ghost.css({ position: 'relative', height: self.size.height, width: self.size.width });
	},

	stop: function(event, ui){
		var self = $(this).data("resizable"), o = self.options;
		if (self.ghost && self.helper) self.helper.get(0).removeChild(self.ghost.get(0));
	}

});

$.ui.plugin.add("resizable", "grid", {

	resize: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options, cs = self.size, os = self.originalSize, op = self.originalPosition, a = self.axis, ratio = o._aspectRatio || event.shiftKey;
		o.grid = typeof o.grid == "number" ? [o.grid, o.grid] : o.grid;
		var ox = Math.round((cs.width - os.width) / (o.grid[0]||1)) * (o.grid[0]||1), oy = Math.round((cs.height - os.height) / (o.grid[1]||1)) * (o.grid[1]||1);

		if (/^(se|s|e)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
		}
		else if (/^(ne)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.top = op.top - oy;
		}
		else if (/^(sw)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.left = op.left - ox;
		}
		else {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.top = op.top - oy;
			self.position.left = op.left - ox;
		}
	}

});

//wopop cstlyer 
$.ui.plugin.add("resizable", "wopop_snap", {
	start: function(event, ui) {
		return;
		var i = $(this).data("resizable"), o = i.options;
		var wopop_snap=o.wopop_snap;
		if(!wopop_snap) return;
		if($(this).data('deg')) return;
		if(!$(this).is('.cstlayer')) return; 
		if($(this).closest('.fullpagesection').length) return;
		
		i.snapElements = [];
		var abs_top=$(this).ab_pos_cnter('top')-i.originalPosition.top;
		i.wopop_ab_top=abs_top;
		
		var vsnap=[];
	     var hsnap=[];
		function in_array(num,snaparr){
			for(var i=0;i<snaparr.length;i++){
				var snapnum=snaparr[i];
				if(Math.abs(snapnum-num)<2) return 1;
			}
			return -1;
		}
		
		function clear_snap(){
			vsnap=[];
			hsnap=[];
			$('.wopop_snap').remove();
			i.snapElements=[];
		}
		
		 function getLayerSnap(layer){
				 var t=parseInt(layer.ab_pos_cnter('top'))||0;
				 var b=t+parseInt(layer.css('height'))||0;
				 var l=parseInt(layer.css('left'))||0;
				 var r=l+parseInt(layer.css('width'))||0;
				 var offsetl=$('#canvas').offset().left-$('#scroll_container').offset().left;
				 var totalh=$('#scroll_container_bg').height();
				 var scct=$('#scroll_container').scrollTop();
				 i.ori_scct=scct;
//				 if(!((t>scct&&t<scct+$(window).height())||(b>scct&&b<scct+$(window).height()))){
//					 return;
//				 }
				 if(in_array(t, hsnap)==-1){
						 hsnap.push(t);
						 var snapstr="<div class='wopop_snap_horizon wopop_snap' style='top:"+t+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
				 if(in_array(b, hsnap)==-1){
						 hsnap.push(b);
						 var snapstr="<div class='wopop_snap_horizon wopop_snap' style='top:"+b+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
				 if(in_array(l, vsnap)==-1){
						 vsnap.push(l);
						 var snapstr="<div class='wopop_snap_vertical wopop_snap' style='left:"+(offsetl+l)+"px;height:"+totalh+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
				 if(in_array(r, vsnap)==-1){
						 vsnap.push(r);
						 var snapstr="<div class='wopop_snap_vertical wopop_snap' style='left:"+(offsetl+r)+"px;height:"+totalh+"px;'></div>";
						 $('#scroll_container').append(snapstr);
				 }
		 }

		$(this).unbind('layersnapstart').bind('layersnapstart',function(){
			clear_snap();
			if($.getElementAreaInf($(this))=='canvas'){
				$('#canvas .cstlayer:not(.ui-modselected)').each(function(){
					getLayerSnap($(this));
				})
			}else{
				$('#scroll_container .cstlayer:not(.ui-modselected)').each(function(){
					getLayerSnap($(this));
				})
			}
			

			i.snapElements=[];
			var scct=$('#scroll_container').scrollTop();
			var offsetl=$('#canvas').offset().left;
			$('.wopop_snap').each(function(){
				var $t = $(this); var $o = $t.offset();
				if($t.is('.wopop_snap_vertical')){
					i.snapElements.push({
						item: this,
						width: 0, height: $t.outerHeight(),
						top: 0, left: $o.left-offsetl
					});
				}else{
					i.snapElements.push({
						item: this,
						width: $t.outerWidth(), height: 0,
						top: parseInt($t.css('top'))||0, left: 0
					});
				}

			})
		})
		$(this).trigger('layersnapstart');
		

	},
	resize: function(event, ui) {
		return;
		var inst = $(this).data("resizable"), o = inst.options;
		var wopop_snap=o.wopop_snap;
		if(!wopop_snap) return;
		if($(this).data('deg')) return;
		if(!$(this).is('.cstlayer')) return; 
		var snapMode='outer';
		var d = 3; //snapTolerance :5,
		var scct=$('#scroll_container').scrollTop();
		var ori_scct=inst.ori_scct;
		if(scct !=ori_scct ){
			$(this).trigger('layersnapstart');
		}
		var self = inst;var offsetminus=0;//canvas 值存在小数导致模块left对齐有偏差
		var cs = self.size, os = self.originalSize, op = self.originalPosition,a = self.axis;
		var ab_top=inst.wopop_ab_top;

		
		for (var i = inst.snapElements.length - 1; i >= 0; i--){

			var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width,
				t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;
			var snapel=$(inst.snapElements[i].item);
			var is_snap=false;

			if(a=='e' || a=='w'){
				if(!snapel.is('.wopop_snap_vertical')){
					inst.snapElements[i].snapping = false;
					snapel.removeClass('showline');
					continue;
				}
				if(a=='e'){
					var y2=op.left+self.size.width;
					var rs = Math.abs(l -y2) <= d;
					if(rs){
						self.size.width = self.size.width + (l -y2)-offsetminus;
						is_snap=true;
					}
				}else{
					var y=self.position.left;
					var ls = Math.abs(l -y) <= d;
					if(ls){
						self.size.width = self.size.width - (l -y)+offsetminus;
						self.position.left=self.position.left+(l -y)-offsetminus;
						is_snap=true;
					}
				}
			}else if(a=='n' || a=='s'){
				if(!snapel.is('.wopop_snap_horizon')){
					inst.snapElements[i].snapping = false;
					snapel.removeClass('showline');
					continue;
				}
				if(a=='n'){
					var y2=self.position.top+ab_top;
					var ts = Math.abs(t -y2) <= d;
					if(ts){
						self.size.height = self.size.height - (t -y2);
						self.position.top=self.position.top+ (t -y2);
						is_snap=true;
					}
				}else{
					var y2=self.position.top+ab_top+self.size.height;
					var bs = Math.abs(b -y2) <= d;
					if(bs){
						self.size.height = self.size.height +(b -y2);
						is_snap=true;
					}
				}
			}else{
				var axisarr=a.match(/./g);
				for(var ii=0;ii<axisarr.length;ii++){
					var axis2=axisarr[ii];
					if(axis2=='e'){
						var y2=op.left+self.size.width;
						var rs = Math.abs(r -y2) <= d;
						if(rs){
							self.size.width = self.size.width + (r -y2)-offsetminus;
							is_snap=true;
						}
					}else if(axis2=='w'){
						var y=self.position.left;
						var ls = Math.abs(l -y) <= d;
						if(ls){
							self.size.width = self.size.width - (l -y)+offsetminus;
							self.position.left=self.position.left+(l -y)-offsetminus;
							is_snap=true;
						}
					}else if(axis2=='n'){
						var y2=self.position.top+ab_top;
						var ts = Math.abs(t -y2) <= d;
						if(ts){
							self.size.height = self.size.height - (t -y2);
							self.position.top=self.position.top+ (t -y2);
							is_snap=true;
						}
					}else if(axis2=='s'){
						var y2=self.position.top+self.size.height+ab_top;
						var bs = Math.abs(b -y2) <= d;
						if(bs){
							self.size.height = self.size.height +(b -y2);
							is_snap=true;
						}
					}
				}
			}
			if(is_snap){
				inst.snapElements[i].snapping = true;
				if($(inst.snapElements[i].item).is('.wopop_snap_vertical')){
					$('.wopop_snap_vertical').removeClass('showline');
				}else{
					$('.wopop_snap_horizon').removeClass('showline');
				}
				$(inst.snapElements[i].item).addClass('showline');
			}else{
				inst.snapElements[i].snapping = false;
				snapel.removeClass('showline');
				continue;
			}
               continue;

		};

	},
	stop: function(event, ui) {
		return;
		$('.wopop_snap').remove();
	}
});

var num = function(v) {
	return parseInt(v, 10) || 0;
};

var isNumber = function(value) {
	return !isNaN(parseInt(value, 10));
};

})(jQuery);
 /*
 * jQuery UI Slider 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=!0,f=a(this).data("index.ui-slider-handle"),g,h,i,j;if(!b.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:e=!1;if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),g=b._start(d,f);if(g===!1)return}}j=b.options.step,b.options.values&&b.options.values.length?h=i=b.values(f):h=i=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:i=b._valueMin();break;case a.ui.keyCode.END:i=b._valueMax();break;case a.ui.keyCode.PAGE_UP:i=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:i=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===b._valueMax())return;i=b._trimAlignValue(h+j);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===b._valueMin())return;i=b._trimAlignValue(h-j)}b._slide(d,f,i);return e}}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;if(c.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i);if(j===!1)return!1;this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0;return!0},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);this._slide(a,this._handleIndex,c);return!1},_mouseStop:function(a){this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e;return this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values());return this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);else return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);else{if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()}},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,c,d;if(arguments.length){b=this.options.values[a],b=this._trimAlignValue(b);return b}c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;Math.abs(c)*2>=b&&(d+=c>0?b:-b);return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.17"})})(jQuery);

 /*
 * jQuery UI Position 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1];return this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]!==e){var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0}},top:function(b,c){if(c.at[1]!==e){var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];if(!c||!c.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&jQuery.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);

/********************************************
 * 
 */
 /*
 * jQuery UI Autocomplete 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
 (function(B,C){var A=0;B.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,width:"auto",position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var F=this,D=this.element[0].ownerDocument,E;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(H){if(F.options.disabled||F.element.propAttr("readOnly")){return}E=false;var G=B.ui.keyCode;switch(H.keyCode){case G.PAGE_UP:F._move("previousPage",H);break;case G.PAGE_DOWN:F._move("nextPage",H);break;case G.UP:F._move("previous",H);H.preventDefault();break;case G.DOWN:F._move("next",H);H.preventDefault();break;case G.ENTER:case G.NUMPAD_ENTER:if(F.menu.active){E=true;H.preventDefault()}case G.TAB:if(!F.menu.active){return}F.menu.select(H);break;case G.ESCAPE:F.element.val(F.term);F.close(H);break;default:clearTimeout(F.searching);F.searching=setTimeout(function(){if(F.term!=F.element.val()){F.selectedItem=null;F.search(null,H)}},F.options.delay);break}}).bind("keypress.autocomplete",function(G){if(E){E=false;G.preventDefault()}}).bind("focus.autocomplete",function(){if(F.options.disabled){return}F.selectedItem=null;F.previous=F.element.val()}).bind("blur.autocomplete",function(G){if(F.options.disabled){return}clearTimeout(F.searching);F.closing=setTimeout(function(){F.close(G);F._change(G)},150)});this._initSource();this.response=function(){return F._response.apply(F,arguments)};this.menu=B("<ul></ul>").addClass("ui-autocomplete").appendTo(B(this.options.appendTo||"body",D)[0]).mousedown(function(G){var H=F.menu.element[0];if(!B(G.target).closest(".ui-menu-item").length){setTimeout(function(){B(document).one("mousedown",function(I){if(I.target!==F.element[0]&&I.target!==H&&!B.ui.contains(H,I.target)){F.close()}})},1)}setTimeout(function(){clearTimeout(F.closing)},13)}).menu({focus:function(H,G){var I=G.item.data("item.autocomplete");if(false!==F._trigger("focus",H,{item:I})){if(/^key/.test(H.originalEvent.type)){F.element.val(I.value)}}},selected:function(H,G){var J=G.item.data("item.autocomplete"),I=F.previous;if(F.element[0]!==D.activeElement){F.element.focus();F.previous=I;setTimeout(function(){F.previous=I;F.selectedItem=J},1)}if(false!==F._trigger("select",H,{item:J})){F.element.val(J.value)}F.term=F.element.val();F.close(H);F.selectedItem=J},blur:function(H,G){if(F.menu.element.is(":visible")&&(F.element.val()!==F.term)){F.element.val(F.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(B.fn.bgiframe){this.menu.element.bgiframe()}F.beforeunloadHandler=function(){F.element.removeAttr("autocomplete")};B(window).bind("beforeunload",F.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();B(window).unbind("beforeunload",this.beforeunloadHandler);B.Widget.prototype.destroy.call(this)},_setOption:function(E,D){B.Widget.prototype._setOption.apply(this,arguments);if(E==="source"){this._initSource()}if(E==="appendTo"){this.menu.element.appendTo(B(D||"body",this.element[0].ownerDocument)[0])}if(E==="disabled"&&D&&this.xhr){this.xhr.abort()}},_initSource:function(){var E=this,F,D;if(B.isArray(this.options.source)){F=this.options.source;this.source=function(H,G){G(B.ui.autocomplete.filter(F,H.term))}}else{if(typeof this.options.source==="string"){D=this.options.source;this.source=function(H,G){if(E.xhr){E.xhr.abort()}E.xhr=B.ajax({url:D,data:H,dataType:"json",autocompleteRequest:++A,success:function(J,I){if(this.autocompleteRequest===A){G(J)}},error:function(){if(this.autocompleteRequest===A){G([])}}})}}else{this.source=this.options.source}}},search:function(D,E){D=D!=null?D:this.element.val();this.term=this.element.val();if(D.length<this.options.minLength){return this.close(E)}clearTimeout(this.closing);if(this._trigger("search",E)===false){return}return this._search(D)},_search:function(D){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:D},this.response)},_response:function(D){if(!this.options.disabled&&D&&D.length){D=this._normalize(D);this._suggest(D);this._trigger("open")}else{this.close()}this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},close:function(D){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",D)}},_change:function(D){if(this.previous!==this.element.val()){this._trigger("change",D,{item:this.selectedItem})}},_normalize:function(D){if(D.length&&D[0].label&&D[0].value){return D}return B.map(D,function(E){if(typeof E==="string"){return{label:E,value:E}}return B.extend({label:E.label||E.value,value:E.value||E.label},E)})},_suggest:function(D){var E=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(E,D);this.menu.deactivate();this.menu.refresh();E.show();this._resizeMenu();E.position(B.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new B.Event("mouseover"))}},_resizeMenu:function(){var D=this.menu.element;if(this.options.width=="auto"){D.outerWidth(Math.max(D.width("").outerWidth()+1,this.element.outerWidth()))}else{D.outerWidth(this.options.width).css({"overflow-x":"hidden"})}},_renderMenu:function(F,D){var E=this;B.each(D,function(H,G){E._renderItem(F,G)})},_renderItem:function(E,D){return B("<li></li>").data("item.autocomplete",D).append(B("<a></a>").text(D.label)).appendTo(E)},_move:function(D,E){if(!this.menu.element.is(":visible")){this.search(null,E);return}if(this.menu.first()&&/^previous/.test(D)||this.menu.last()&&/^next/.test(D)){this.element.val(this.term);this.menu.deactivate();return}this.menu[D](E)},widget:function(){return this.menu.element}});B.extend(B.ui.autocomplete,{escapeRegex:function(D){return D.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(F,E){var D=new RegExp(B.ui.autocomplete.escapeRegex(E),"i");return B.grep(F,function(G){return D.test(G.label||G.value||G)})}})}(jQuery));

/*
 * jQuery UI Menu (not officially released)
 * 
 * This widget isn't yet finished and the API is subject to change. We plan to finish
 * it for the next release. You're welcome to give it a try anyway and give us feedback,
 * as long as you're okay with migrating your code later on. We can help with that, too.
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Menu
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.widget.js
 */
(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return}C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(C,F){this.deactivate();if(this.hasScroll()){var D=F.offset().top-this.element.offset().top,E=this.element.scrollTop(),B=this.element.height();if(D<0){this.element.scrollTop(E+D)}else{if(D>=B){this.element.scrollTop(E+D-B+F.height())}}}this.active=F.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",C,{item:F})},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(C,B,D){if(!this.active){this.activate(D,this.element.children(B));return}var E=this.active[C+"All"](".ui-menu-item").eq(0);if(E.length){this.activate(D,E)}else{this.activate(D,this.element.children(B))}},nextPage:function(E){if(this.hasScroll()){if(!this.active||this.last()){this.activate(E,this.element.children(".ui-menu-item:first"));return}var B=this.active.offset().top,D=this.element.height(),C=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-B-D+A(this).height();return F<10&&F>-10});if(!C.length){C=this.element.children(".ui-menu-item:last")}this.activate(E,C)}else{this.activate(E,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(D){if(this.hasScroll()){if(!this.active||this.first()){this.activate(D,this.element.children(".ui-menu-item:last"));return}var B=this.active.offset().top,C=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var E=A(this).offset().top-B+C-A(this).height();return E<10&&E>-10});if(!result.length){result=this.element.children(".ui-menu-item:first")}this.activate(D,result)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[A.fn.prop?"prop":"attr"]("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));

/*
 * jQuery UI Selectable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.selectable", $.ui.mouse, {
	options: {
		appendTo: 'body',
		autoRefresh: true,
		distance: 0,
		filter: '*',
		tolerance: 'touch'
	},
	_create: function() {
		var self = this;

		this.element.addClass("ui-selectable");

		this.dragged = false;

		// cache selectee children based on filter
		var selectees;
		this.refresh = function() {
			selectees = $(self.options.filter, self.element[0]);
			selectees.addClass("ui-selectee");
			selectees.each(function() {
				var $this = $(this);
				var pos = $this.offset();
				$.data(this, "selectable-item", {
					element: this,
					$element: $this,
					left: pos.left,
					top: pos.top,
					right: pos.left + $this.outerWidth(),
					bottom: pos.top + $this.outerHeight(),
					startselected: false,
					selected: $this.hasClass('ui-selected'),
					selecting: $this.hasClass('ui-selecting'),
					unselecting: $this.hasClass('ui-unselecting')
				});
			});
		};
		this.refresh();

		this.selectees = selectees.addClass("ui-selectee");

		this._mouseInit();

		this.helper = $("<div class='ui-selectable-helper'></div>");
	},

	destroy: function() {
		this.selectees
			.removeClass("ui-selectee")
			.removeData("selectable-item");
		this.element
			.removeClass("ui-selectable ui-selectable-disabled")
			.removeData("selectable")
			.unbind(".selectable");
		this._mouseDestroy();

		return this;
	},

	_mouseStart: function(event) {
		var self = this;

		this.opos = [event.pageX, event.pageY];

		if (this.options.disabled)
			return;

		var options = this.options;

		this.selectees = $(options.filter, this.element[0]);

		this._trigger("start", event);

		$(options.appendTo).append(this.helper);
		// position helper (lasso)
		this.helper.css({
			"left": event.clientX,
			"top": event.clientY,
			"width": 0,
			"height": 0
		});

		if (options.autoRefresh) {
			this.refresh();
		}

		this.selectees.filter('.ui-selected').each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.startselected = true;
			if (!event.metaKey && !event.ctrlKey) {
				selectee.$element.removeClass('ui-selected');
				selectee.selected = false;
				selectee.$element.addClass('ui-unselecting');
				selectee.unselecting = true;
				// selectable UNSELECTING callback
				self._trigger("unselecting", event, {
					unselecting: selectee.element
				});
			}
		});

		$(event.target).parents().andSelf().each(function() {
			var selectee = $.data(this, "selectable-item");
			if (selectee) {
				var doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass('ui-selected');
				selectee.$element
					.removeClass(doSelect ? "ui-unselecting" : "ui-selected")
					.addClass(doSelect ? "ui-selecting" : "ui-unselecting");
				selectee.unselecting = !doSelect;
				selectee.selecting = doSelect;
				selectee.selected = doSelect;
				// selectable (UN)SELECTING callback
				if (doSelect) {
					self._trigger("selecting", event, {
						selecting: selectee.element
					});
				} else {
					self._trigger("unselecting", event, {
						unselecting: selectee.element
					});
				}
				return false;
			}
		});

	},

	_mouseDrag: function(event) {
		var self = this;
		this.dragged = true;

		if (this.options.disabled)
			return;

		var options = this.options;

		var x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
		if (x1 > x2) { var tmp = x2; x2 = x1; x1 = tmp; }
		if (y1 > y2) { var tmp = y2; y2 = y1; y1 = tmp; }
		this.helper.css({left: x1, top: y1, width: x2-x1, height: y2-y1});

		this.selectees.each(function() {
			var selectee = $.data(this, "selectable-item");
			//prevent helper from being selected if appendTo: selectable
			if (!selectee || selectee.element == self.element[0])
				return;
			var hit = false;
			if (options.tolerance == 'touch') {
				hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
			} else if (options.tolerance == 'fit') {
				hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
			}

			if (hit) {
				// SELECT
				if (selectee.selected) {
					selectee.$element.removeClass('ui-selected');
					selectee.selected = false;
				}
				if (selectee.unselecting) {
					selectee.$element.removeClass('ui-unselecting');
					selectee.unselecting = false;
				}
				if (!selectee.selecting) {
					selectee.$element.addClass('ui-selecting');
					selectee.selecting = true;
					// selectable SELECTING callback
					self._trigger("selecting", event, {
						selecting: selectee.element
					});
				}
			} else {
				// UNSELECT
				if (selectee.selecting) {
					if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
						selectee.$element.removeClass('ui-selecting');
						selectee.selecting = false;
						selectee.$element.addClass('ui-selected');
						selectee.selected = true;
					} else {
						selectee.$element.removeClass('ui-selecting');
						selectee.selecting = false;
						if (selectee.startselected) {
							selectee.$element.addClass('ui-unselecting');
							selectee.unselecting = true;
						}
						// selectable UNSELECTING callback
						self._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
				}
				if (selectee.selected) {
					if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
						selectee.$element.removeClass('ui-selected');
						selectee.selected = false;

						selectee.$element.addClass('ui-unselecting');
						selectee.unselecting = true;
						// selectable UNSELECTING callback
						self._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
				}
			}
		});

		return false;
	},

	_mouseStop: function(event) {
		var self = this;

		this.dragged = false;

		var options = this.options;

		$('.ui-unselecting', this.element[0]).each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.$element.removeClass('ui-unselecting');
			selectee.unselecting = false;
			selectee.startselected = false;
			self._trigger("unselected", event, {
				unselected: selectee.element
			});
		});
		$('.ui-selecting', this.element[0]).each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.$element.removeClass('ui-selecting').addClass('ui-selected');
			selectee.selecting = false;
			selectee.selected = true;
			selectee.startselected = true;
			self._trigger("selected", event, {
				selected: selectee.element
			});
		});
		this._trigger("stop", event);

		this.helper.remove();

		return false;
	}

});

$.extend($.ui.selectable, {
	version: "1.8.17"
});

})(jQuery);;
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
			if($('.fullpage_alllist').length){
				$this.trigger("appear");
				counter = 0;
			}else{
				if (settings.container === undefined || settings.container === window) {
						var fold = $window.scrollTop();
				} else {
						var fold = $(settings.container).offset().top;
				}
				if($this.offset().top-fold<0){
					$this.trigger("appear");
					/* if we found an image we'll load, reset the counter */
					counter = 0;
				}else if ($.abovethetop(this, settings) ||
						$.leftofbegin(this, settings)) {
								/* Nothing. */
				} else if (!$.belowthefold(this, settings) &&
						!$.rightoffold(this, settings)) {
								$this.trigger("appear");
								/* if we found an image we'll load, reset the counter */
								counter = 0;
				} else {
						if (++counter > settings.failure_limit) {
								return false;
						}
				}
			}
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
		  var ret=true;
		  var timer;
            $container.bind(settings.event, function() {
			if(timer) clearTimeout(timer);				
			 timer=setTimeout(function(){
				 ret= update();
			 },200)
			 return ret;
                
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }
            /* fixed bug#1630 */
            //if(parseInt($self.css("top"))<-100) $self.css("top","");
            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
				});
			}
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }
	  update();
        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }
        //bug#2660
        var eleparwid = $(element).height();
        if(eleparwid==0&&$(element).parents().parents().attr('class')=='img_over'){
        	var eleparwid = $(element).parents().parents().height();
        }
        return fold >= $(element).offset().top + settings.threshold  + eleparwid;
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= Math.max($(element).offset().left + $(element).width(),2)+ settings.threshold ;
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);;
(function( $, undefined ) {
	var sin_cache={0:0};
	var cos_cache={0:1};
	var tan_cache={0:0};
	
	$.math={};
	$.math.sin=function(degree){
		if(degree<0) degree=degree+360;
		if(degree>=360) degree=degree%360;
		if(sin_cache[degree]==undefined){
			var value=Math.sin(degree*Math.PI/180);
			sin_cache[degree]=value;
		}
		return sin_cache[degree];
	}
	
	$.math.cos=function(degree){
		if(degree<0) degree=degree+360;
		if(degree>=360) degree=degree%360;
		if(cos_cache[degree]==undefined){
			var value=Math.cos(degree*Math.PI/180);
			cos_cache[degree]=value;
		}
		return cos_cache[degree];
	}
	
	$.math.tan=function(degree){
		if(degree<0) degree=degree+360;
		if(degree>=360) degree=degree%360;
		if(tan_cache[degree]==undefined){
			var value=Math.tan(degree*Math.PI/180);
			tan_cache[degree]=value;
		}
		return tan_cache[degree];
	}
	
	$.math.acos=function(cosdegree){
		var deg=Math.acos(cosdegree);
		return Math.round(deg*180/Math.PI);
	}
	
	$.parseInteger = function(str){
		var i = parseInt(str);
		if(isNaN(i)) return 0;
		return i;
	}
	
	//跨浏览器旋转css设置	
	$.divrotate=function(dom,degree,initpos,sizearr){
		dom=$(dom);
		var w=dom.width();
		var h=dom.height();
		if(sizearr){
			w=sizearr[0];
			h=sizearr[1];
		}
		
		if(initpos){
			var left=initpos[0];
			var top=initpos[1];
			
			if($.browser.msie && $.browser.version < 9){
				w = parseInt(dom.data('IEWidth'));
				h = parseInt(dom.data('IEHeight'));
				
				left = dom.data('IELeft');
				if(left == undefined)
				{
					left = initpos[0];
					dom.data('IELeft',left);
				}
				
				top = dom.data('IETop');
				if(top == undefined)
				{
					top = initpos[1];
					dom.data('IETop',top);
				}
				
				ieRotate({
					degree:degree,
					left:left,
					top:top,
					width:w,
					height:h,
					dom:dom
				});
			}else{
				dom[0].style.left=Math.round(left)+'px';
				dom[0].style.top=Math.round(top)+'px';
			}
		}
		
		if($.browser.safari || $.browser.mozilla || $.browser.opera || ($.browser.msie && $.browser.version == '9.0')){
			ieRotate({
				degree:degree,
				dom:dom
			});
		}
	}
	
	$.fn.modattr=function(keyname,value){
		if(keyname=='leftpos'){
			var oldpos=this.data('prop_leftpos');
			if(!oldpos){
				oldpos=[parseInt(this.css('left')),parseInt(this.css('top'))];
			}
			if(value!=undefined) this.data('prop_leftpos',value);
			return oldpos;
		}
		if(keyname=='degree'){
			var oldpos=this.data('deg');
			if(!oldpos){
				oldpos=0;
			}
			if(value!=undefined) this.data('deg',value);
			return oldpos;
		}
		
		if(keyname=='size'){
			var oldpos=this.data('prop_size');
			if(!oldpos){
				oldpos=[this.width(),this.height()];
			}
			if(value!=undefined) this.data('prop_size',value);
			return oldpos;
		}
	}
	
	//IE实际左点和定位的左点转换函数
	$.divrotate.reversePos=function(pos,degree,w,h){
				var left=pos[0];
				var top=pos[1];
				var costheta = $.math.cos(degree);
				var sintheta = $.math.sin(degree);
				if($.browser.msie && $.browser.version < 9){
					var newl=left;
					if(degree<90) newl=left+h*sintheta;
					else if(degree<180) newl=left+h*sintheta-w*costheta;
					else if(degree<270) newl=left-w*costheta;
					else newl=left;

					var newt=top;
					if(degree<90) newt=top;
					else if(degree<180) newt=top-h*costheta;
					else if(degree<270) newt=top-h*costheta-w*sintheta;
					else newt=top-w*sintheta;
					return [newl,newt];
				}else{
					return pos;
				}
		}
		
		//计算旋转模块离各个边界的距离
		$.divrotate.getMaxDistance=function(dom){
			var degree=dom.data('deg');
			var left=parseInt(dom.css('left'));
			var top=parseInt(dom.css('top'));
			
			var w=dom.width();
			var h=dom.height();
			var canvaswidth = canv.width();
			var maxleft,maxright,maxtop;
			
			//没有旋转
			if(!degree){
				maxleft=left;
				maxright=canvaswidth-w-left;
				maxtop=top;
			}else{
				if(degree>360) degree=degree%360;
				var cosa=$.math.cos(degree);
				var sina=$.math.sin(degree);
				if(degree<=90){
					maxleft=left-h*sina;
					maxright=canvaswidth-left-w*cosa;
					maxtop=top;
				}else if(degree>90 && degree<=180){
					maxleft=left-h*sina+w*cosa;
					maxright=canvaswidth-left;
					maxtop=top+h*cosa;
				}else if(degree>180 && degree<=270){
					maxleft=left+w*cosa;
					maxright=canvaswidth-left+h*sina;
					maxtop=top+h*cosa+w*sina;
				}else if(degree>270 && degree<=360){
					maxleft=left;
					maxright=canvaswidth-left+h*sina-w*cosa;
					maxtop=top+w*sina;
				}
			}
			return {left:maxleft,right:maxright,top:maxtop};
			
		}
		
		//计算旋转模块
		//postype: left right,top, buttom
		$.divrotate.getDegreeModMaxPointOrigin=function(dom,degree,pos,sizearr,postype){
			var fatherid=$.getElementFatherid(dom);
			var fathertoppos=$('#'+fatherid).ab_pos_cnter('top');
			var fatherleftpos=$('#'+fatherid).ab_pos_cnter('left') || 0;
			var degree=degree;
			//没有旋转
			if(!degree){
				var maxval=0;
				var w=sizearr[0];
				var h=sizearr[1];
				switch (postype) {
					case 'left':
						maxval=pos[0]+fatherleftpos;
						break;
					case 'right':
						maxval=pos[0]+w+fatherleftpos;
						break;
					case 'top':
						maxval=pos[1]+fathertoppos;
						break;
					case 'buttom':
						maxval=pos[1]+h+fathertoppos;
						break;
				}
				return maxval;

			}else{
				if($.browser.msie && $.browser.version < 9){
					var maxval=0;
					switch (postype) {
						case 'left':
							maxval = dom.position().left;
							break;
						case 'right':
							maxval = dom.position().left+dom.width();
							break;
						case 'top':
							maxval = dom.position().top;
							break;
						case 'buttom':
							maxval = dom.position().top+dom.height();
							break;
					}
					return maxval;
				}
				var maxval=0;
				var w=sizearr[0];
				var h=sizearr[1];
				var l=pos[0];
				var t=pos[1];
				if(degree>360) degree=degree%360;
				var cosa=$.math.cos(degree);
				var sina=$.math.sin(degree);
				switch (postype) {
					case 'left':
						if(degree<=90){
							maxval=l-h*sina;
						}else if(degree>90 && degree<=180){
							maxval=l-h*sina+w*cosa;
						}else if(degree>180 && degree<=270){
							maxval=l+w*cosa;
						}else if(degree>270 && degree<=360){
							maxval=l;
						}
						maxval+=fatherleftpos;
						break;
					case 'right':
						if(degree<=90){
							maxval=l+w*cosa;
						}else if(degree>90 && degree<=180){
							maxval=l;
						}else if(degree>180 && degree<=270){
							maxval=l-h*sina;
						}else if(degree>270 && degree<=360){
							maxval=l-h*sina+w*cosa;
						}
						maxval+=fatherleftpos;
						break;
					case 'top':
						if(degree<=90){
							maxval=t;
						}else if(degree>90 && degree<=180){
							maxval=t+h*cosa;
						}else if(degree>180 && degree<=270){
							maxval=t+h*cosa+w*sina;
						}else if(degree>270 && degree<=360){
							maxval=t+w*sina;
						}
						maxval=maxval+fathertoppos;
						break;
					case 'buttom':
						if(degree<=90){
							maxval=t+h*cosa+w*sina;
						}else if(degree>90 && degree<=180){
							maxval=t+w*sina;
						}else if(degree>180 && degree<=270){
							maxval=t;
						}else if(degree>270 && degree<=360){
							maxval=t+h*cosa;
						}
						maxval=maxval+fathertoppos;
						break;
				}
				return maxval;
			}
		}
		
		//计算旋转模块
		//postype: left right,top, buttom
		$.divrotate.getDegreeModMaxPoint=function(dom,pos,postype){
			var degree=dom.data('deg');
			if(pos==null) pos=[$.parseInteger(dom.css('left')),$.parseInteger(dom.css('top'))]
			var w=dom.width();
			var h=dom.height();
			return $.divrotate.getDegreeModMaxPointOrigin(dom,degree,pos,[w,h],postype);

		}
		
		//计算旋转模块
		//postype: left right,top, buttom
		$.divrotate.getDegreeModMaxPointForRotate=function(dom,degree,pos,postype){
			var w=dom.width();
			var h=dom.height();
			return $.divrotate.getDegreeModMaxPointOrigin(dom,degree,pos,[w,h],postype);

		}
		
		// Get Resize Mouse Cursor
		$.divrotate.getDegreeResizeCursor=function(dom){
			var degree=dom.data('deg');
			if(degree==null) degree=0;
			if(degree>360) degree=degree%360;
			
			if(degree<=22||degree>=338){
				dom.find('.ui-resizable-n').css('cursor','n-resize');
				dom.find('.ui-resizable-e').css('cursor','e-resize');
				dom.find('.ui-resizable-w').css('cursor','w-resize');
				dom.find('.ui-resizable-s').css('cursor','s-resize');
				dom.find('.ui-resizable-ne').css('cursor','ne-resize');
				dom.find('.ui-resizable-se').css('cursor','se-resize');
				dom.find('.ui-resizable-nw').css('cursor','nw-resize');
				dom.find('.ui-resizable-sw').css('cursor','sw-resize');
			}else if(degree>22&&degree<=67){
				dom.find('.ui-resizable-n').css('cursor','ne-resize');
				dom.find('.ui-resizable-e').css('cursor','se-resize');
				dom.find('.ui-resizable-w').css('cursor','nw-resize');
				dom.find('.ui-resizable-s').css('cursor','sw-resize');
				dom.find('.ui-resizable-ne').css('cursor','e-resize');
				dom.find('.ui-resizable-se').css('cursor','s-resize');
				dom.find('.ui-resizable-nw').css('cursor','n-resize');
				dom.find('.ui-resizable-sw').css('cursor','w-resize');
			}else if(degree>67&&degree<=112){
				dom.find('.ui-resizable-n').css('cursor','e-resize');
				dom.find('.ui-resizable-e').css('cursor','s-resize');
				dom.find('.ui-resizable-w').css('cursor','n-resize');
				dom.find('.ui-resizable-s').css('cursor','w-resize');
				dom.find('.ui-resizable-ne').css('cursor','se-resize');
				dom.find('.ui-resizable-se').css('cursor','sw-resize');
				dom.find('.ui-resizable-nw').css('cursor','ne-resize');
				dom.find('.ui-resizable-sw').css('cursor','nw-resize');
			}else if(degree>112&&degree<=157){
				dom.find('.ui-resizable-n').css('cursor','se-resize');
				dom.find('.ui-resizable-e').css('cursor','sw-resize');
				dom.find('.ui-resizable-w').css('cursor','ne-resize');
				dom.find('.ui-resizable-s').css('cursor','nw-resize');
				dom.find('.ui-resizable-ne').css('cursor','s-resize');
				dom.find('.ui-resizable-se').css('cursor','w-resize');
				dom.find('.ui-resizable-nw').css('cursor','e-resize');
				dom.find('.ui-resizable-sw').css('cursor','n-resize');
			}else if(degree>157&&degree<=202){
				dom.find('.ui-resizable-n').css('cursor','s-resize');
				dom.find('.ui-resizable-e').css('cursor','w-resize');
				dom.find('.ui-resizable-w').css('cursor','e-resize');
				dom.find('.ui-resizable-s').css('cursor','n-resize');
				dom.find('.ui-resizable-ne').css('cursor','sw-resize');
				dom.find('.ui-resizable-se').css('cursor','nw-resize');
				dom.find('.ui-resizable-nw').css('cursor','se-resize');
				dom.find('.ui-resizable-sw').css('cursor','ne-resize');
			}else if(degree>202&&degree<=247){
				dom.find('.ui-resizable-n').css('cursor','sw-resize');
				dom.find('.ui-resizable-e').css('cursor','nw-resize');
				dom.find('.ui-resizable-w').css('cursor','se-resize');
				dom.find('.ui-resizable-s').css('cursor','ne-resize');
				dom.find('.ui-resizable-ne').css('cursor','w-resize');
				dom.find('.ui-resizable-se').css('cursor','n-resize');
				dom.find('.ui-resizable-nw').css('cursor','s-resize');
				dom.find('.ui-resizable-sw').css('cursor','e-resize');
			}else if(degree>247&&degree<=292){
				dom.find('.ui-resizable-n').css('cursor','w-resize');
				dom.find('.ui-resizable-e').css('cursor','n-resize');
				dom.find('.ui-resizable-w').css('cursor','s-resize');
				dom.find('.ui-resizable-s').css('cursor','e-resize');
				dom.find('.ui-resizable-ne').css('cursor','nw-resize');
				dom.find('.ui-resizable-se').css('cursor','ne-resize');
				dom.find('.ui-resizable-nw').css('cursor','sw-resize');
				dom.find('.ui-resizable-sw').css('cursor','se-resize');
			}else if(degree>292&&degree<=337){
				dom.find('.ui-resizable-n').css('cursor','nw-resize');
				dom.find('.ui-resizable-e').css('cursor','ne-resize');
				dom.find('.ui-resizable-w').css('cursor','sw-resize');
				dom.find('.ui-resizable-s').css('cursor','se-resize');
				dom.find('.ui-resizable-ne').css('cursor','n-resize');
				dom.find('.ui-resizable-se').css('cursor','e-resize');
				dom.find('.ui-resizable-nw').css('cursor','w-resize');
				dom.find('.ui-resizable-sw').css('cursor','s-resize');
			}
		}
		
		// Get Resize Change Property
		$.divrotate.getDegreeResizeChange=function(dom,pos,oriPos,oriSize,postype){
			//pos[dx,dy]鼠标移动时与刚开始拉伸鼠标相对偏移量,oriPos[l,t]鼠标拖动前模块坐标,oriSize[w,h]鼠标拖动前模块宽高
			var degree=dom.data('deg');
			if(degree>360) degree=degree%360;
			
			var sinx = Math.sin(degree*Math.PI/180);
			var cosx = Math.cos(degree*Math.PI/180);
			if($.browser.msie && $.browser.version < 9)
			{
				//模块宽高
				var w = dom.data('IEWidth');
				var h = dom.data('IEHeight');
				//左上顶点坐标
				if(degree >= 0 && degree < 90)
					var l = oriPos.left + h*sinx,t = oriPos.top;
				else if(degree >= 90 && degree < 180)
					var l = h*sinx - w*cosx + oriPos.left,t = oriPos.top - h*cosx;
				else if(degree > 180 && degree <= 270)
					var l = oriPos.left - w*cosx,t = oriPos.top - w*sinx - h*cosx;
				else if(degree > 270 && degree < 360)
					var l = oriPos.left,t = w*cosx + oriPos.top;
			}
			else
			{
				var w=oriSize.width;
				var h=oriSize.height;
				var l=oriPos.left,t=oriPos.top;
			}
			
			//鼠标滑行偏移量
			var dx=pos[0];
			var dy=pos[1];
			
			var tana=$.math.tan(degree);
			var bgree,height,rotateOrigin;
			
			var heplerfunc=function(ypos){
				bgree=$.math.acos((dx+ypos*dy)/(Math.sqrt(dx*dx+dy*dy)*Math.sqrt(1+ypos*ypos)));
				height=Math.sqrt(dx*dx+dy*dy)*$.math.sin(bgree);
				rotateOrigin=dx*ypos-dy;
			}
			
			var heplerfunc2=function(ypos){
				bgree=$.math.acos((dx-ypos*dy)/(Math.sqrt(dx*dx+dy*dy)*Math.sqrt(1+ypos*ypos)));
				height=Math.sqrt(dx*dx+dy*dy)*$.math.sin(bgree);
				rotateOrigin=0-(dx*ypos+dy);
			}
			
			if($.browser.msie && $.browser.version < 9)
			{
				var return_str = null;
				switch (postype) {
					case 'n':
						heplerfunc(tana);
						if(rotateOrigin==0) return {};
						if(degree <= 90)
						{
							if(rotateOrigin>0){
								return_str = {height:Math.round(h+height),left:Math.round(l+height*$.math.sin(degree)-(h+height)*$.math.sin(degree)),top:Math.round(t-height*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {height:Math.round(h-height),left:Math.round(l-height*$.math.sin(degree)-(h-height)*$.math.sin(degree)),top:Math.round(t+height*$.math.cos(degree))}
							}
						}
						else if(degree>270 && degree<360)
						{
							if(rotateOrigin>0){
								return_str = {height:Math.round(h+height),left:Math.round(l+height*$.math.sin(degree)),top:Math.round(t-height*$.math.cos(degree)-w*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {height:Math.round(h-height),left:Math.round(l-height*$.math.sin(degree)),top:Math.round(t+height*$.math.cos(degree)-w*$.math.cos(degree))}
							}
						}
						else if(degree > 90 && degree <= 180)
						{
							if(rotateOrigin>0){
								return_str = {height:Math.round(h-height),left:Math.round(l-height*$.math.sin(degree)-(h-height)*$.math.sin(degree)+w*$.math.cos(degree)),top:Math.round(t+height*$.math.cos(degree)+(h-height)*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {height:Math.round(h+height),left:Math.round(l+height*$.math.sin(degree)-(h+height)*$.math.sin(degree)+w*$.math.cos(degree)),top:Math.round(t-height*$.math.cos(degree)+(h+height)*$.math.cos(degree))}
							}
						}
						else if(degree > 180 && degree <= 270)
						{
							if(rotateOrigin>0){
								return_str = {height:Math.round(h-height),left:Math.round(l-height*$.math.sin(degree)+w*$.math.cos(degree)),top:Math.round(t+height*$.math.cos(degree)+(h-height)*$.math.cos(degree)+w*$.math.sin(degree))}
							}else if(rotateOrigin<0){
								return_str = {height:Math.round(h+height),left:Math.round(l+height*$.math.sin(degree)+w*$.math.cos(degree)),top:Math.round(t-height*$.math.cos(degree)+(h+height)*$.math.cos(degree)+w*$.math.sin(degree))}
							}
						}
						break;
					case 's':
						heplerfunc(tana);
						if(rotateOrigin==0) return {};
						if(degree <= 90)
						{
							if(rotateOrigin>0){
								return_str = {width:w,height:Math.round(h-height),left:Math.round(l-(h-height)*$.math.sin(degree)),top:t}
							}else if(rotateOrigin<0){
								return_str = {width:w,height:Math.round(h+height),left:Math.round(l-(h+height)*$.math.sin(degree)),top:t}
							}
						}
						else if(degree > 90 && degree <= 180)
						{
							if(rotateOrigin>0){
								return_str = {width:w,height:Math.round(h+height),left:Math.round(l-(h+height)*$.math.sin(degree)+w*$.math.cos(degree)),top:Math.round(t+(h+height)*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:w,height:Math.round(h-height),left:Math.round(l-(h-height)*$.math.sin(degree)+w*$.math.cos(degree)),top:Math.round(t+(h-height)*$.math.cos(degree))}
							}
						}
						else if(degree > 180 && degree <= 270)
						{
							if(rotateOrigin>0){
								return_str = {width:w,height:Math.round(h+height),left:Math.round(l+w*$.math.cos(degree)),top:Math.round(t+(h+height)*$.math.cos(degree)+w*$.math.sin(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:w,height:Math.round(h-height),left:Math.round(l+w*$.math.cos(degree)),top:Math.round(t+(h-height)*$.math.cos(degree)+w*$.math.sin(degree))}
							}
						}
						else if(degree>270 && degree<360)
						{
							if(rotateOrigin>0){
								return_str = {width:w,height:Math.round(h-height),left:l,top:Math.round(t-w*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:w,height:Math.round(h+height),left:l,top:Math.round(t-w*$.math.cos(degree))}
							}
						}
						break;
					case 'w':
						heplerfunc2(1/tana);
						if(rotateOrigin==0) return {};
						if(degree <= 90)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w+height),height:h,left:Math.round(l-height*$.math.cos(degree)-h*$.math.sin(degree)),top:Math.round(t-height*$.math.sin(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w-height),height:h,left:Math.round(l+height*$.math.cos(degree)-h*$.math.sin(degree)),top:Math.round(t+height*$.math.sin(degree))}
							}
						}
						else if(degree > 90 && degree <= 180)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w+height),height:h,left:Math.round(l-height*$.math.cos(degree)-h*$.math.sin(degree)+(w+height)*$.math.cos(degree)),top:Math.round(t-height*$.math.sin(degree)+h*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w-height),height:h,left:Math.round(l+height*$.math.cos(degree)-h*$.math.sin(degree)+(w-height)*$.math.cos(degree)),top:Math.round(t+height*$.math.sin(degree)+h*$.math.cos(degree))}
							}
						}
						else if(degree > 180 && degree <= 270)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w-height),height:h,left:Math.round(l+height*$.math.cos(degree)+(w-height)*$.math.cos(degree)),top:Math.round(t+height*$.math.sin(degree)+(w-height)*$.math.sin(degree)+h*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w+height),height:h,left:Math.round(l-height*$.math.cos(degree)+(w+height)*$.math.cos(degree)),top:Math.round(t-height*$.math.sin(degree)+(w+height)*$.math.sin(degree)+h*$.math.cos(degree))}
							}
						}
						else if(degree > 270 && degree < 360)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w-height),height:h,left:Math.round(l+height*$.math.cos(degree)),top:Math.round(t+height*$.math.sin(degree)-(w-height)*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w+height),height:h,left:Math.round(l-height*$.math.cos(degree)),top:Math.round(t-height*$.math.sin(degree)-(w+height)*$.math.cos(degree))}
							}
						}
						break;
					case 'e':
						heplerfunc2(1/tana);
						if(rotateOrigin==0) return {};
						if(degree <= 90)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w-height),height:h,left:l-h*$.math.sin(degree),top:t}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w+height),height:h,left:l-h*$.math.sin(degree),top:t}
							}
						}
						else if(degree > 90 && degree <= 180)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w-height),height:h,left:l-h*$.math.sin(degree)+(w-height)*$.math.cos(degree),top:t+h*$.math.cos(degree)}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w+height),height:h,left:l-h*$.math.sin(degree)+(w+height)*$.math.cos(degree),top:t+h*$.math.cos(degree)}
							}
						}
						else if(degree > 180 && degree <= 270)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w+height),height:h,left:l+(w+height)*$.math.cos(degree),top:t+(w+height)*$.math.sin(degree)+h*$.math.cos(degree)}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w-height),height:h,left:l+(w-height)*$.math.cos(degree),top:t+(w-height)*$.math.sin(degree)+h*$.math.cos(degree)}
							}
						}
						else if(degree > 270 && degree < 360)
						{
							if(rotateOrigin>0){
								return_str = {width:Math.round(w+height),height:h,left:l,top:t-(w+height)*$.math.cos(degree)}
							}else if(rotateOrigin<0){
								return_str = {width:Math.round(w-height),height:h,left:l,top:t-(w-height)*$.math.cos(degree)}
							}
						}
						break;
				}
				dom.data('IEWidth_tmp',return_str.width||w).data('IEHeight_tmp',return_str.height||h);
				$('.propblk,.posblk').remove();
				return return_str;
			}
			else
			{
				switch (postype) {
					case 'n':
						heplerfunc(tana);
						if(rotateOrigin==0) return {};
						if(degree<=90||(degree>270 && degree<=360)){
							if(rotateOrigin>0){
								return {height:Math.round(h+height),left:Math.round(l+height*$.math.sin(degree)),top:Math.round(t-height*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return {height:Math.round(h-height),left:Math.round(l-height*$.math.sin(degree)),top:Math.round(t+height*$.math.cos(degree))}
							}
						}else if(degree>90 && degree<=270){
							if(rotateOrigin>0){
								return {height:Math.round(h-height),left:Math.round(l-height*$.math.sin(degree)),top:Math.round(t+height*$.math.cos(degree))}
							}else if(rotateOrigin<0){
								return {height:Math.round(h+height),left:Math.round(l+height*$.math.sin(degree)),top:Math.round(t-height*$.math.cos(degree))}
							}
						}
						break;
					case 's':
						heplerfunc(tana);
						if(rotateOrigin==0) return {};
						if(degree<=90||(degree>270 && degree<=360)){
							if(rotateOrigin>0){
								return {height:Math.round(h-height)}
							}else if(rotateOrigin<0){
								return {height:Math.round(h+height)}
							}
						}else if(degree>90 && degree<=270){
							if(rotateOrigin>0){
								return {height:Math.round(h+height)}
							}else if(rotateOrigin<0){
								return {height:Math.round(h-height)}
							}
						}
						break;
					case 'w':
						heplerfunc2(1/tana);
						if(rotateOrigin==0) return {};
						if(degree<=180){
							if(rotateOrigin>0){
								return {width:Math.round(w+height),left:Math.round(l-height*$.math.cos(degree)),top:Math.round(t-height*$.math.sin(degree))}
							}else if(rotateOrigin<0){
								return {width:Math.round(w-height),left:Math.round(l+height*$.math.cos(degree)),top:Math.round(t+height*$.math.sin(degree))}
							}
						}else if(degree>180 && degree<=360){
							if(rotateOrigin>0){
								return {width:Math.round(w-height),left:Math.round(l+height*$.math.cos(degree)),top:Math.round(t+height*$.math.sin(degree))}
							}else if(rotateOrigin<0){
								return {width:Math.round(w+height),left:Math.round(l-height*$.math.cos(degree)),top:Math.round(t-height*$.math.sin(degree))}
							}
						}
						break;
					case 'e':
						heplerfunc2(1/tana);
						if(rotateOrigin==0) return {};
						if(degree<=180){
							if(rotateOrigin>0){
								return {width:Math.round(w-height)}
							}else if(rotateOrigin<0){
								return {width:Math.round(w+height)}
							}
						}else if(degree>180 && degree<=360){
							if(rotateOrigin>0){
								return {width:Math.round(w+height)}
							}else if(rotateOrigin<0){
								return {width:Math.round(w-height)}
							}
						}
						break;
				}
			}
		}
		
	
})(jQuery);
function rotateWithCenter(dom,degree){
	dom=$(dom);
	var oldpos=dom.modattr('leftpos');
		var oldleft=oldpos[0];
		var oldtop=oldpos[1];

	
	var olddegree=dom.modattr('degree');
	
	var w=dom.width();
	var h=dom.height();
	
	var sinolddegree=$.math.sin(olddegree);
	var cosolddegree=$.math.cos(olddegree);
	var centerPoint=[oldleft+w/2*cosolddegree-h/2*sinolddegree,oldtop+h/2*cosolddegree+w/2*sinolddegree];
	
	var sinnewdegree=$.math.sin(degree);
	var cosnewdegree=$.math.cos(degree);
	var newleft=centerPoint[0]+h/2*sinnewdegree-w/2*cosnewdegree;
	var newtop=centerPoint[1]-w/2*sinnewdegree-h/2*cosnewdegree;

	//dom.modattr('leftpos',[newleft,newtop]);
	//dom.modattr('size',[w,h]);
	$.divrotate(dom,degree,[newleft,newtop]);
	
	toolbarRotate(dom,degree,{w:w,h:h});
	
}

function toolbarRotate(dom,degree,domSize,actualel){
	if(!actualel) actualel=$(".propblk");
	if(actualel.length==0) return;
	dom=$(dom);
	if(actualel.is('.propblk')) var sizearr=dom.data('toolbarsize');
	else{
		sizearr=dom.data('posizeblksize');
		if(degree) actualel.data('rotatedegree',degree);
	}
	if(!sizearr){
		sizearr=[actualel.width(),actualel.height()];
		dom.data('toolbarsize',sizearr);
	}
	
	if($.browser.msie && $.browser.version < 9)
	{
		var pw = sizearr[0];
		var ph = sizearr[1];
		var w = $("#"+dom.attr('id')).width();
		var h = $("#"+dom.attr('id')).height();
		var left = $.resetModToolbarLeft($("#"+dom.attr('id')).position().left);
		var top = $("#"+dom.attr('id')).position().top;
		var angle = degree % 360;
		var oldModW = dom.data('IEWidth');
		var oldModH = dom.data('IEHeight'); 
		
		if(dom.data('sinx') == undefined)
		{
			var rotation = Math.PI * angle / 180;
			var cosx = Math.cos(rotation);
			var sinx = Math.sin(rotation);
			dom.data('sinx',sinx);
			dom.data('cosx',cosx);
		}
		else//获取模块三角函数值，不需要在属性栏旋转重新计算
		{
			var cosx = dom.data('cosx');
			var sinx = dom.data('sinx');
		}
		
		if(angle > 0 && angle <= 90)
		{
			var propLeftNew = (w+left)-ph*sinx;
			var propTopNew = top+(h-oldModH*cosx);
		}
		else if(angle > 90 && angle <= 180)
		{
			var propLeftNew = w + left - (ph*sinx-pw*cosx) - (-1*cosx*oldModW);
			var propTopNew =h + top + ph*cosx;
		}
		else if(angle > 180 && angle <= 270)
		{
			var propLeftNew = left+pw*cosx;
			var propTopNew = top-oldModH*cosx+ph*cosx+pw*sinx;
		}
		else if(angle > 270 && angle < 360)
		{
			var propLeftNew = left+oldModW*cosx;
			var propTopNew = top+pw*sinx;
		}
		actualel.css({filter : "progid:DXImageTransform.Microsoft.Matrix(M11="+cosx+",M12="+(-sinx)+",M21="+sinx+",M22="+cosx+",SizingMethod='auto expand')",'left':propLeftNew+'px','top':propTopNew+'px'});
	}
	else
	{
		var oldsize=dom.data('prop_size');
		var w=0;
		if(oldsize){
			w=oldsize[0];
		}else{
			w=dom.width();
		}
		
		if(!degree) degree=0;
		var oldpos=dom.data('prop_leftpos');
		var oldleft=parseInt(dom.css('left'));
		var oldleft2=$.resetModToolbarLeft(parseInt(oldleft));
		if(dom.attr('fatherid')&&dom.attr('fatherid')!=''&&$('#'+dom.attr('fatherid')).is('.cstlayer')){
			oldleft2=oldleft;
		}
		var oldtop=parseInt(dom.css('top'));
		if(oldpos){
			oldleft=oldpos[0];
			oldtop=oldpos[1];
		}

		var h=35;
		var left1 = $.math.sin(degree)*h +oldleft2 +canv.offset().left-(window.MobileOffsetLeft||0)+$('#'+$.getElementFatherid(dom)).ab_pos_cnter('left');
		var top1 =  parseInt(oldtop)-$.math.cos(degree)*h+$('#'+$.getElementFatherid(dom)).ab_pos_cnter('top');
		$.divrotate(actualel,degree,[left1,top1],sizearr);
	}
}

function modPosRotate(dom,degree,domSize){
	if($(".posblk").length==0) return;
	dom=$(dom);
	var sizearr=dom.data('modpossize');
	if(!sizearr){
		sizearr=[$(".posblk").width(),$(".posblk").height()];
		dom.data('modpossize',sizearr);
	}
	
	if(!degree) degree=0;
	var oldpos=dom.data('prop_leftpos');
	var oldleft=parseInt(dom.css('left'));
	var oldtop=parseInt(dom.css('top'));
	if(oldpos){
		oldleft=oldpos[0];
		oldtop=oldpos[1];
	}
	
	dom.data('deg',degree);
	$(".posblk").find('.posblk-position').html(Math.round(oldleft)+","+Math.round(oldtop)).andSelf().find('.posblk-deg').html(dom.data('deg')%360);
	
	
	if($.browser.msie && $.browser.version < 9)
	{
		var pow = sizearr[0];
		var poh = sizearr[1];
		var w = $("#"+dom.attr('id')).width();
		var h = $("#"+dom.attr('id')).height();
		var left = $("#"+dom.attr('id')).position().left;
		var top = $("#"+dom.attr('id')).position().top;
		var angle = degree % 360;
		var oldModW = dom.data('IEWidth');
		var oldModH = dom.data('IEHeight');
		if(dom.data('sinx') == undefined)
		{
			var rotation = Math.PI * angle / 180;
			var cosx = Math.cos(rotation);
			var sinx = Math.sin(rotation);
			dom.data('sinx',sinx);
			dom.data('cosx',cosx);
		}
		else//获取模块三角函数值，不需要在属性栏旋转重新计算
		{
			var cosx = dom.data('cosx');
			var sinx = dom.data('sinx');
		}
		
		if(angle >= 0 && angle <= 90)
		{
			var posLeftNew = left + oldModH*sinx;
			var posTopNew = top - poh*cosx;
		}
		else if(angle > 90 && angle <= 180)
		{
			var posLeftNew = left + w + pow*cosx;
			var posTopNew = top - oldModH*cosx;
		}
		else if(angle > 180 && angle <= 270)
		{
			var posLeftNew = left - oldModW*cosx + pow*cosx + poh*sinx;
			var posTopNew = top + h + pow*sinx;
		}
		else if(angle > 270 && angle < 360)
		{
			var posLeftNew = left + poh*sinx;
			var posTopNew = top - oldModW*sinx-poh*cosx+pow*sinx;
		}
		$(".posblk").css({filter : "progid:DXImageTransform.Microsoft.Matrix(M11="+cosx+",M12="+(-sinx)+",M21="+sinx+",M22="+cosx+",SizingMethod='auto expand')",'left':posLeftNew+'px','top':posTopNew+'px'});
	}
	else
	{
//		var h=$(".posblk").height()+2;
//		var left1 = $.math.sin(degree)*h + parseInt(oldleft)+canv.offset().left;
//		var top1 =  parseInt(oldtop)-$.math.cos(degree)*h+$('#'+$.getElementFatherid(dom)).ab_pos_cnter('top');
//		$.divrotate($(".posblk"),degree,[left1,top1],sizearr);
		var oldsize=dom.data('prop_size');
		var w=0;
		if(oldsize){
			w=oldsize[0] + 10;
		}else{
			w=dom.width() + 10;
		}
		var left1 = $.math.cos(degree)*w + parseInt(oldleft)+canv.offset().left-(window.MobileOffsetLeft||0)+$('#'+$.getElementFatherid(dom)).ab_pos_cnter('left');
		var top1 =  $.math.sin(degree)*w + parseInt(oldtop)+$('#'+$.getElementFatherid(dom)).ab_pos_cnter('top');
	
		$.divrotate($(".posblk"),degree,[left1,top1],sizearr);
	}
}

//ie下根据模块实际宽高获取模块在0度时的左上顶点
function getOldProxyFromSize(dom,degree,w,h)
{
	var angle = degree % 360;
	var oldX = $("#"+dom.attr('id')).position().left;
	var oldY = $("#"+dom.attr('id')).position().top;
	var newDom = $("#"+dom.attr('id'));
	if(dom.data('sinx') == undefined)
	{
		var rotation = Math.PI * angle / 180;
		var cosx = Math.cos(rotation);
		var sinx = Math.sin(rotation);
		dom.data('sinx',sinx);
		dom.data('cosx',cosx);
	}
	else
	{
		var sinx = dom.data('sinx');
		var cosx = dom.data('cosx');
	}
	
	if(angle == 0)
	{
		var x = oldX;
		var y = oldY;
	}
	else if(angle >= 0 && angle <= 90)
	{
		var x = (h*sinx+w*cosx-w)/2+oldX;
		var y = (w*sinx+h*cosx-h)/2+oldY;
	}
	else if(angle > 90 && angle <= 180)
	{
		var x = (h*sinx-w*cosx-w)/2+oldX;
		var y = (w*sinx-h*cosx-h)/2+oldY;
	}
	else if(angle > 180 && angle <= 270)
	{
		var x = (-1*h*sinx-w*cosx-w)/2+oldX;
		var y = (-1*w*sinx-h*cosx-h)/2+oldY;
	}
	else if(angle > 270 && angle < 360)
	{
		var x = (-1*h*sinx+w*cosx-w)/2+oldX;
		var y = (-1*w*sinx+h*cosx-h)/2+oldY;
	}
	
	return [x,y];
}

//ie下获取左上顶点与标准浏览器兼容
function getLeftPointProxy(dom,degree)
{
	var angle = degree % 360;
	var x0 = dom.position().left,y0 = dom.position().top;//[x0,y0]ie下面的左上顶点需要转换成标准浏览器顶点
	var reg = Math.PI * angle / 180;
	var sinx = Math.sin(reg),cosx = Math.cos(reg);
	var w = dom.data('IEWidth'),h = dom.data('IEHeight');
	if(angle >= 0 && angle < 90)
		return [Math.round(x0+h*sinx),Math.round(y0)];
	else if(angle >= 90 && angle < 180)
		return [Math.round(x0+h*sinx-w*cosx),Math.round(y0-h*cosx)];
	else if(angle >= 180 && angle < 270)
		return [Math.round(x0-w*cosx),Math.round(y0-h*cosx-w*sinx)];
	else if(angle >= 270 && angle < 360)
		return [Math.round(x0),Math.round(y0-w*sinx)];
};
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);;
var mclick = 'click',mtouchstart = 'mousedown',mtouchend = 'mouseup',mtouchmove = 'mousemove';
if (window.ontouchstart !== undefined) {
	mclick = 'click';mtouchstart = 'touchstart';mtouchend = 'touchend';mtouchmove = 'touchmove';
}
/**Global Function**/
function getSessionExpiredUrl()
{
	$(window).unbind('beforeunload');
	alert(translate('page.sessionTimeout')); 
	window.close();
	return null;
}

function wp_heightAdapt(dom,oldHeight){}

function is_website_mobile(){
	var type=getWebSiteType();
	return type=='mobile';
}

function layer_img_lzld(layerid){
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('#'+layerid+'  img.img_lazy_load').lazyload({
		     threshold  : 200,
			failure_limit : $('#'+layerid+'  img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
}

function initScrollcontainerHeight(){
	var container=$('#scroll_container');
	var cvhgt = window.innerHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	container.height(cvhgt);
	$('#scroll_container_bg').css('height',cvhgt);
}

function noRightClick(){
	//禁用鼠标右键  CTRL+C 复制   CTRL+V  粘贴   CTRL+S 保存
	$(function(){
		document.body.oncontextmenu=function(){return false;}
		$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86)) {
							return false;
					}        
			})
			$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86) || (event.ctrlKey&&event.which==83)) {
							return false;
					}        
			})
	})
}

function doc_end_exec(){
	$(function(){
		$(document).triggerHandler('lastexec');
	})
	$('#scroll_container').css("visibility", 'visible');
	$('.mloading-mask').remove();
	$(window).load(function(){ 
		var heightadaptel=$("#canvas").find(".cstlayer[type='article_detail'],.cstlayer[type='product_detail'],.cstlayer[type='wzl'],.cstlayer[type='fxdp'],.cstlayer[type='tb_product_detail'],.cstlayer[type='tb_product_list'],.cstlayer[type='product_list'],.cstlayer[type='wkj'],.cstlayer[type='crowdfunding'],.cstlayer[type='btag'],.cstlayer[type='greetingcard'],.cstlayer[type='weiredpack'],.cstlayer[type='mseckill_detail'],.cstlayer[type='mgroupon_detail'],.cstlayer[type='mgroupons_detail'],.cstlayer[type='groupon_detail']");
		if(heightadaptel.length){
			heightadaptel.each(function(){
				if($(this).data('not_need_heightadapt')) return;
				wp_heightAdapt($(this));
			}) 		
			window.scroll_container_adjust();
		}
	});
	
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('img.img_lazy_load').lazyload({
		     threshold  : 0,
			failure_limit : $('img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
	
	$(window).load(function(){
		$('.cstlayer').showEffects();
	})
}

function wpfullcolumn_float(){
    var wp_ibody = $('#scroll_container'),wp_icontent = $('#canvas'),wp_icontent_foot = $('#site_footer #footer_content');
    $('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
        var fc_lid = '#'+$(this).attr('id');
        var $fc_lid = $(this);
        var wp_layer_abs = $('#canvas '+fc_lid),wp_layer_abs_footer = $('#site_footer #footer_content '+fc_lid),wp_layer_fix= $('#scroll_container '+fc_lid);
        var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
        var isinfixed = $fc_lid.attr('infixed');
        if(isinfixed==1) {
            var nPos = $('#scroll_container').scrollTop() ;
		  var container=$('#scroll_container');
		  var is_mobile_preview=false;
		  if(is_website_mobile()){
				nPos = $(window).scrollTop() ;
			}
		if($('.wp-mobile-device-premask').length){
			is_mobile_preview=true;
		}
            //oPos get第一次正确的值,以后不再获得
            var oPos_tmp = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
		  var inbuttom=$(document).data("fixed_"+$(this).attr('id')+"_inbuttom");
            if(!oPos_tmp){
                oPos_tmp =  $fc_lid.ab_pos_cnter('top');
                $(document).data("fixed_"+$(this).attr('id')+"_oPos",oPos_tmp);
            }
		if(inbuttom==null){
                inbuttom =  $fc_lid.attr('inbuttom');
                $(document).data("fixed_"+$(this).attr('id')+"_inbuttom",inbuttom);
            }
            var oPos = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
            if(oPos==0 && $fc_lid.parent().is('#canvas')) return;
            if(oPos==0){
				var oldsty = $fc_lid.attr('oldstyle')||'';
				if(oldsty.match(/top:\d+px/)){
					var oldtop = oldsty.match(/top:\d+px/);
					oldtop = oldtop[0].match(/\d+/);
					oPos = oldtop[0];
				}
            }
            if(inbuttom>0){
                //存在页脚中
                if(nPos > oPos){
                    var newleft = $('.full_column').ab_pos('left') + currpoor ;
				if(wp_layer_abs_footer.is('.cstlayer')){
					newleft =wp_layer_abs_footer.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs_footer .ab_pos_cnter('left');
					}
				}
                    if(wp_layer_abs_footer.length>0){
                        var oldstyle = wp_layer_abs_footer.attr('style');
                        wp_layer_fix = wp_layer_abs_footer.clone(true).appendTo(container)
                        .attr('oldstyle',oldstyle).attr('inbuttom','1')
                        .addClass('full_column-fixed');
				if(wp_layer_abs_footer.attr('fatherid')) wp_layer_fix.attr('fatherid',wp_layer_abs.attr('fatherid'));
                    wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
				if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
				}
                    wp_layer_abs_footer.remove();
                    }else{
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}							
				}
                }else{
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(wp_layer_abs_footer.length==0){
					wp_icontent_foot=$('#site_footer #footer_content');
					if(wp_layer_fix.attr('fatherid')){
						wp_icontent_foot=$('#'+wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer = wp_layer_fix.clone(true).appendTo(wp_icontent_foot)
                        .attr('style',oldstyle).attr('inbuttom','1').removeClass('full_column-fixed');
					if(wp_layer_fix.attr('fatherid')){
						wp_layer_abs_footer.attr('fatherid',wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer.show();wp_layer_fix.remove();
                    }
                }
            }else{
                var infixed_html = $('#canvas').data('infixed_content');
                if(!infixed_html){
                    infixed_html =wp_layer_abs.html(); $('#canvas').data('infixed_content',infixed_html);
                }
                if(nPos > oPos){
                    var newleft = Math.abs(parseFloat($('.full_column').find('.full_width').css('left')));
				if(wp_layer_abs.is('.cstlayer')){
					newleft =wp_layer_abs.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs.ab_pos_cnter('left');
					}
				}
				var fatherid=$.getElementFatherid(wp_layer_abs);
				$(document).data("fixed_"+wp_layer_abs.attr('id')+"_father",$('#'+fatherid));
                    //clone(true) has true 可以存储data
                    if(wp_layer_abs.length>0){
                        //////////////////////
                        var oldstyle = wp_layer_abs.attr('style');
                        var func=function(){ //未加载完拖拽滚动条为空异常处理
                            var success=true;
                            var newleft = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(newleft)){success=false;}
                            if(success){
                                $(fc_lid).css('left',newleft);
                            }else {
                                setTimeout(func,100);
                            }
                         }
                         func();
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_abs.attr('id'),'class':wp_layer_abs.attr('class'),'infixed':1,'style':wp_layer_abs.attr('style')});
				    if(wp_layer_abs.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_abs.attr('fatherid'));
                        container.append(layerdiv);
                        wp_layer_abs.remove();
                        var wp_layer_fix =$(fc_lid).html(infixed_html)
                        .attr('oldstyle',oldstyle)
                        .addClass('full_column-fixed');
                        wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
				    if(is_mobile_preview){
							wp_layer_fix.css({top:nPos+'px'});
					}
                        ////fix时 full_width宽为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!full_width_val){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
                        //////////
					var imgcontainer=$('#scroll_container');
					var ismobile=is_website_mobile();
					if(!ismobile){
						var chromebug=$('#scroll_container').data('chrome_bug');
						if(chromebug){
							imgcontainer=window;
						}
					}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 0,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }else{
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}						
				}
                }else{
                    if( wp_layer_fix.data('always_fix')){
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}	
					return;
				}
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(!wp_layer_abs.length>0){
                        //////////////////////////////
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_fix.attr('id'),'class':wp_layer_fix.attr('class'),'infixed':1,'style':wp_layer_fix.attr('oldstyle')});
				    if(wp_layer_fix.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_fix.attr('fatherid'));
				    wp_icontent = $(document).data("fixed_"+wp_layer_fix.attr('id')+"_father");
				    if(!wp_icontent.length) wp_icontent=$('#canvas');
                        wp_icontent.append(layerdiv);
                        wp_layer_fix.remove();
                        wp_layer_abs =$(fc_lid).html(infixed_html)
                        .attr('oldstyle',oldstyle)
                        .removeClass('full_column-fixed');
                        wp_layer_abs.show();
                        //为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(full_width_val)){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
                        //////////////////////////////
				    var imgcontainer=$('#scroll_container');
					var ismobile=is_website_mobile();
					if(!ismobile){
						var chromebug=$('#scroll_container').data('chrome_bug');
						if(chromebug){
							imgcontainer=window;
						}
					}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 0,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }
                }
            }
        }
    });
}

function getTop(){//for ie6 css hack
  return document.documentElement.scrollTop;
}

function init_fullcolumn_fixed_code(){
	$(function(){
			setTimeout(function(){
					$('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
					var self=$(this);
					 var container=$('#scroll_container');
					 var is_mobile_preview=false;
					 if($('.wp-mobile-device-premask').length){
						is_mobile_preview=true;
					}
					if(self.parent().is('#canvas')&&parseInt(self.css('top'))==0){
					var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
					var newleft = self.ab_pos('left') + currpoor ;
					if(self.is('.cstlayer')){
						newleft =self.offset().left+$('#scroll_container').scrollLeft();
						if(is_mobile_preview){
							newleft =self.ab_pos_cnter('left');
						}
					}
					var wp_layer_abs=self;
					var layerid=wp_layer_abs.attr('id');
					 var oldstyle = wp_layer_abs.attr('style');
					var layerhtml=wp_layer_abs.html();
					var layerdiv=$("<div/>").attr({
						id:wp_layer_abs.attr('id'),
						'class':wp_layer_abs.attr('class'),
						infixed:1,
						style:wp_layer_abs.attr('style'),
					});
					wp_layer_abs.remove();
					container.append(layerdiv);
					var wp_layer_fix =$('#'+layerid).html(layerhtml)
					.attr('oldstyle',oldstyle)
					.addClass('full_column-fixed');
					wp_layer_fix.data('always_fix',true);
					wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'})
					if($.browser.msie && ($.browser.version < 9)){
						wp_layer_fix.css({'top':'0px'});
						wp_layer_fix.find('.full_width').css({'top':'0px'});
					}
					var ismobile=is_website_mobile();
					var imgcontainer=window;
					if(!ismobile) imgcontainer=$('#scroll_container').add(window);
					wp_layer_fix.find('img.img_lazy_load').lazyload({
							threshold  : 0,
							failure_limit : wp_layer_fix.find('img.img_lazy_load').length,
							container : imgcontainer,
							placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
							load:function(){
								 var self=$(this);
								 var id=self.closest('.cstlayer').prop('id');
								if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
							 }
					});	
					// 固定通栏里显示动画
					wp_layer_fix.find('.cstlayer:not(.now_effecting)').showEffects();
									//explain:修复bug(2282多语言模块放置固定的通栏后异常),author:fpf,date:2015/03/30,action:add;
									var $multilingual = $(document).find('.wp-multilingual_content');
									if($multilingual.get(0) != 'undefined'){
											var $multilingual_content = $multilingual.find('.wp-content > .overz');
											if(parseInt($multilingual_content.length) > 1){
													$multilingual.find('.wp-content > .overz:last').remove();
											}
									}
							}
					});
		// 修复“通栏设置‘固定显示’后导致‘鼠标滚轮’事件异常（bug#4230）”
		$(document).bind("mousewheel DomMouseScroll MozMousePixelScroll", function(e){
			e = e || window.event;			
			var $target = $(e.target).closest('.full_column[infixed="1"],.cstlayer[infixed="1"]');
			if ($target.length > 0) {
				var wheeldelta=e.wheelDelta;
				var detail=e.detail||e.originalEvent.detail;
				if(e.type=='mousewheel'){
					var wheeldelta=e.deltaY || e.originalEvent.deltaY;
					wheeldelta=(wheeldelta>0)?1:-1;
				}else{
					var wheeldelta=e.wheelDelta || e.originalEvent.wheelDelta;
					if(!wheeldelta) wheeldelta=detail;
				}
				var $win = $(window),$stainer = $('#scroll_container'),
				$scroll = $stainer.height() <= $win.height() ? $stainer : $win,
				movey = wheeldelta * -(Math.abs(detail) > 3 ? 1 : 40);
				$scroll.scrollTop($scroll.scrollTop() - movey);
				$win = $stainer = $scroll = movey = null;
			}
			$target = null;
		});
					//explain:修复flash模块在360安全浏览器极速模式下鼠标:hover后无法触发滚动效果，该事件在采用Webkit内核的浏览器下都会触发,author:fpf,date:2015-01-15,action:add;
					$('div.wp-flash_content').each(function(){
							$(this).unbind('mousewheel').bind('mousewheel',function(event){
									var scrolltop=$('#scroll_container').scrollTop();
									if(event.wheelDelta>0){
											$('#scroll_container').scrollTop(scrolltop-50);
									} else{
											$('#scroll_container').scrollTop(scrolltop+50);
									}
							});
					});

			},300);
	})
	
	if(is_website_mobile()){
		$(window).scroll(function(){
			wpfullcolumn_float();
		});
	}else{
		$('#scroll_container').scroll(function(){
			wpfullcolumn_float();
		});
	}
}

function initCanvasHeight(){
	var maxheight=0;
	var helperfunc=function(dom){
		var degree=dom.data('deg')||dom.attr('deg');
		var pos=[parseInt(dom.css('left')),parseInt(dom.css('top'))]
		var w=dom.width();
		var h=dom.height();
		if(dom.hasClass('cstlayer')){
			var buttompos=$.divrotate.getDegreeModMaxPointOrigin(dom,degree,pos,[w,h],'buttom');
		}else{
			var buttompos=dom.ab_pos_cnter('top')+parseInt(dom.css('height'));
		}
		return buttompos;
	}
	var filterfunc=function(){
		return $(this).is(":not(div[deleted='deleted'])") && $(this).attr('childdel') != 'del';
	}
	$('#canvas  .cstlayer,#canvas  .full_column').filter(filterfunc).each(function(){
		var canvheight=helperfunc($(this));
		if(canvheight>maxheight) maxheight=canvheight;
	})
	$("#canvas").data('layermaxheight',maxheight);
	//#5460
	setTimeout(function(){
		$('#site_footer').find('.cstlayer').each(function(){
			var sitetop = parseInt($('#site_footer').css('top'));
			var thistop = parseInt($(this).css('top'))
			if(thistop<0&&sitetop<-thistop) {$(this).css('top',-sitetop);}
		})
	},100)
}

$.fn.layer_ready=function(func){
	var is_exec=false;
	var execfunc=function(){
		if(is_exec) return;
		func();
		is_exec=true;
	}
	$(this).bind('layer_ready',function(){
		execfunc();
	})
	
	$(function(){
		execfunc();
	})
};

(function(){
	var is_init=false;
	var init_pageinfo={}
	var is_layer_add={};
	var PageHistory={
		init:function(layerid,pageid){
			if(history && history.pushState){
				init_pageinfo[layerid]=pageid;
				if(is_init) return;
				window.onpopstate=function(e){
					var state=e.state;
					if(state && state.action=='page'){
						var layerid=state.layerid;
						$('#'+layerid).trigger('to_page',state.page);
					}
				}
				is_init=true;
			}
		},
		add_page:function(layerid,pageid){
			if(history && history.pushState){
				var loc=window.location.href;
				var layerend=layerid.replace(/.+(\w{5})$/,'$1');
				var paramregexp=new RegExp(layerend+'_p=[^&]+');
				var newloc='';
				if(loc.match(paramregexp)){
					newloc=loc.replace(paramregexp,layerend+'_p='+pageid);
				}else{
					if(loc.indexOf('?')>0){
						newloc=loc+'&'+layerend+"_p="+pageid
					}else{
						newloc=loc+'?'+layerend+"_p="+pageid
					}
				}
				newloc=newloc.replace(/.+?\?/,'?');
				if(!is_layer_add[layerid] && pageid != init_pageinfo[layerid]){
					history.replaceState({action:'page',layerid:layerid,page:init_pageinfo[layerid]}, document.title, loc);
					is_layer_add[layerid]=true;
				}
				history.pushState({action:'page',layerid:layerid,page:pageid}, document.title, newloc);
			}
		}
	};
	window.PageHistory=PageHistory;
})();

/**document ready js**/
$(document).bind('lastexec',function(){

	// Mobile device 2014/01/06
	if (window.MobileModel) {
		var $scontainer = $('#scroll_container'),canvaswidth = $('#canvas').width();
		$scontainer.unbind(".mbprevredhat.tmpredhat");
		if ($('#wp-mobile-device-header').length > 0) {
			// 手机模型定位
			var screenWidth = window.innerWidth||self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
			deviceOtherHeight = $('#wp-mobile-device-header').closest('.wp-new-manage-toolbar-position').height() + $('#wp-mobile-device-footer').height();
			var onlyOnce_resize_width = false;
			$(window).bind("resize.mbeditor", function(e, status){
				var screenHeight = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
				$('#wp-mobile-device-sides').height(screenHeight - deviceOtherHeight).children('.mwrapper').height(screenHeight - deviceOtherHeight - 2);
				// 自定义滚动条样式
				var sidewidth = 14;/* 手机模型边缘宽度 */
				var mbtimer = setTimeout(function(){
					var newleft = ($._parseFloat($('#wp-mobile-device-header').css("left"))||0) + sidewidth;
					$scontainer.css({"left": (newleft - 10)+'px',"width": function(){/*-10是为了修复"缩放句柄被遮"问题*/
						if( onlyOnce_resize_width == false ){
							onlyOnce_resize_width = true;
							return ($(this).width() + (status?(sidewidth + 15 + 10):0))+'px';
						}else{
							return ;
						}
					},"margin": '0',"padding-left": '11px',"top": '-6px',"overflow-y": 'scroll'});
					$('#site_footer').css("left", '11px');/*11px是为了修复"缩放句柄被遮"问题*/
					if (status == undefined) $scontainer.mscroll("destroy");
					$scontainer.mscroll({difleft: 10,maskbg: '#ccc'});clearTimeout(mbtimer);
				}, 100);
			}).triggerHandler("resize.mbeditor", ['init']);
			$('#wp-mobile-device-header,#wp-mobile-device-sides,#wp-mobile-device-footer').css({"left": function(){
				return ((screenWidth - $(this).width()) / 2)+'px';
			}, "visibility": 'visible'});
			// 保存布局
			$('#wp-mobile-device-footer > span').click(function(){
				wp_floatpanel(parseToURL('wp_widgets','save_page'),{
					title: translate('page.saveLayout'),width: 418,overlay: true,isCenter: true,
					contentClass: 'wp-site-set_panel_c',id: 'wp-page_save',zIndex: 9999
				});
			});
		} else {/* 预览模式 */
			$scontainer.css("visibility", 'visible');
			$(window).load(function(){
				var $win = $(this),frmwidth = $win.width(),frmheight = window.getdeviceheight||565;
				$scontainer.height(frmheight);
				var mprevtimer = setTimeout(function(){
					$scontainer.mscroll({"maskcname": 'wp-mobile-device-premask',"difleft": -6,
					"height": frmheight,"barcname": 'wp-mobile-prescrollbar',"maskleft": frmwidth,"barleft": frmwidth});
					$win.triggerHandler("pageloaded");clearTimeout(mprevtimer);
					// 模拟“触屏”模式
					var maxtop = frmheight - $('.wp-mobile-prescrollbar > span.pane').height();
					$scontainer.bind("mousedown.mbprevredhat", function(e){
						e.preventDefault();
						var $prebar = $('.wp-mobile-prescrollbar'),pagey = e.pageY;
						$scontainer.bind("mousemove.tmpredhat", function(e){
							e.preventDefault();
							var scrltop = $scontainer.scrollTop(),movey = e.pageY - pagey;
							if (scrltop < 0) scrltop = 0;
							$scontainer.scrollTop(scrltop - movey);
						}).bind("mouseup.tmpredhat", function(e){
							e.preventDefault();$scontainer.unbind(".tmpredhat");
							$(parent.document).unbind(".rmredhat");
						});
						$(parent.document).bind("mouseup.rmredhat",function(){$scontainer.unbind(".tmpredhat")});
					});
				}, 150);
			});
		}
		$('#site_footer,#footer_content').width(canvaswidth);
	}
	
	function resizeCanvasHeight(){
		window.canv = $("#canvas");
		var container=$('#scroll_container');
		// 画布高度
		var cvhgt = window.getdeviceheight || window.innerHeight || self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//$(window).height();
		var ua = /micromessenger/i.test(navigator.userAgent.toLowerCase());
		if (window.isHandheld&&!ua) cvhgt = Math.min(cvhgt, MobileUtils.getScreenHeight());
		cvhgt -= container.offset().top,mfooterheight = $('#wp-mobile-device-footer').height()||0;
		container.height(cvhgt - mfooterheight);
		if($('#site_footer').length>0){
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-$('#site_footer').height()-mfooterheight);
			if($('#site_footer:not(.only_copyright)').length>0){
				canvheight=Math.max(canvheight,$("#canvas").height());
			}
		}else{
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt);
			canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-mfooterheight);//没有页脚时去设备底部高度，防没有任何模块时有滚动条bug/4574
		}
		// 重置bSlider模块高度 2013/03/25
		$('.cstlayer[type="bslider"]:not(.isplate)').each(function(i, dom){
			$(dom).triggerHandler('resetbsliderheight', [canvheight]);
		});
		if(!canv) var canv = $("#canvas");
		canv.css('height',canvheight+'px');
		$('#scroll_container_bg').css('height',(canvheight+$('#site_footer').height())+'px');
		if($(window).width()-canv.width()<0) $('#scroll_container_bg').width(canv.width());
		else  $('#scroll_container_bg').css('width','100%');
		// 更新标尺位置Start 2012/3/2
		var canvleft = canv.offset().left;
		if (typeof $.fn.ruler_locate != 'undefined') {
			$.fn.ruler_locate({
				x : {left:canvleft+'px'},
				y : {height:canvheight+'px', left:(canvleft>17?canvleft-17:0)+'px'}
			});
			$('.line_y').height(canvheight);// 辅助线高度
		}
		// 在手机设备上访问 2014/02/08
		if (window.isHandheld) {
			var $container = $('#scroll_container'),$footer = $('#site_footer'),
			maxheight = $('#scroll_container_bg').height() + $('>.mblank_placeholder',$container).height();
			$container.css({"height": maxheight+'px',"overflow-x": 'hidden',"overflow-y": 'hidden'});
			if($footer.length) {
				if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
					$footer.css({'position':'absolute','top':$('#canvas').height()});
				}
				$footer.find('#footer_content').andSelf().width($('#canvas').width());
			}
			/*adpHandheld();*/$('.mloading-mask').remove();
			$container.css("visibility", 'visible');$(window).triggerHandler("pageloaded");
			// 修复ipad中iframe touchmove冲突问题(bug#97) 2014/09/16
			if (/ipad/.test(navigator.userAgent.toLowerCase())) {
				$(document.body).parent().andSelf().css({"overflow-x": 'hidden',"overflow-y": 'auto'});
				container.css({"height": 'auto',"overflow-y": 'auto'});
			}
		}
	}
	
	function correctFooterPos(){
		var canv = $("#canvas");
		var canvheight=canv.height();
		var canvwidth=canv.width();
		var containerOffsetLeft = $('#scroll_container').offset().left;
		$('#site_footer').css({left:canv.offset().left-containerOffsetLeft+$('#scroll_container').scrollLeft()+$.parseInteger($('#canvas').css("borderLeftWidth")),top:canvheight});
		$('#site_footer >.full_width').css({left:0-canv.offset().left+containerOffsetLeft-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$(window.MobileModel?'#canvas':'#scroll_container_bg').width()});
		if($('#wp-mobile-device-header').length) $('#site_footer >.full_width').css("left", '0px');
	}
	window.correctFooterPos=correctFooterPos;
	
	window.scroll_container_adjust=function(){
		initCanvasHeight();
		//resizeCanvasHeight();
        //微信下初始化加载cvans高度过大出现滚动条。bug/4574
        if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
            setTimeout(function(){
            // fixed bug#1107
            var fxdpstr = $(window).data("fxdp_scrollpage")||'',_scrtop = $(window).scrollTop();
            resizeCanvasHeight();
            if(fxdpstr == 'fxdp') $(window).scrollTop(_scrtop);
            correctFooterPos();
            // 修复"微信浏览器中锚点异常(bug#1059)"问题
            var hstr = location.hash||'';
            if(hstr.length > 0){location.href = location.href;location.hash = hstr.substr(1)}
            },600)
        }else {
            resizeCanvasHeight();
            correctFooterPos();
        }
		
	}
	window.scroll_container_adjust();
	if(!canv) var canv = $("#canvas");
	$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	//浏览器缩放是自动调整高度
	var me = "orientation" in window && "onorientationchange" in window ? "orientationchange" : "resize"
	$(window).bind(me, function(e){
		if(e.target==window||e.target==document){
			resizeCanvasHeight();
			correctFooterPos();
			$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
			if($('.full_column-fixed').length){
				var full_column_left = 0-$('.full_column-fixed>.full_width').position().left;
				$('.full_column-fixed').css("left",full_column_left+"px");
			}
		}
	})
	
	if (!window.isHandheld) rotateDom($('.cstlayer'));
	//Preview need resize window
	if(window.opener){
		var winH = screen.availHeight || 768,winW = screen.availWidth || 1024;
		window.resizeTo(winW, winH);
	}
	// 新窗口打开超链接
	$.extend({
		openNewWin: function(URI){
			var win = window.open(URI,'_blank');
			win.focus;
		}
	});
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
;
/*
 * SimpleModal 1.4.3 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2012 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sat, Sep 8 2012 07:52:31 -0700
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],l=b(document),m=b.browser.msie&&6===parseInt(b.browser.version)&&"object"!==typeof window.XMLHttpRequest,o=b.browser.msie&&7===parseInt(b.browser.version),n=null,k=b(window),h=[];b.modal=function(a,d){return b.modal.impl.init(a,d)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=function(){b.modal.impl.setContainerDimensions()};
b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,d){b.modal.impl.update(a,d)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',
closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,d){if(this.d.data)return!1;n=b.browser.msie&&!b.support.boxModel;this.o=b.extend({},b.modal.defaults,d);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),
this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:h[0],width:h[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||n)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});l.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});k.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||n?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:h[0],width:h[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");l.unbind("keydown.simplemodal");k.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,f){if(f){var g=f[0].style;g.position="absolute";if(2>b)g.removeExpression("height"),g.removeExpression("width"),g.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),g.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,e;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):f.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(e="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),e=-1===e.indexOf("%")?e+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(e.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
e='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');g.removeExpression("top");g.removeExpression("left");g.setExpression("top",c);g.setExpression("left",e)}}})},focus:function(a){var d=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",f=b(":input:enabled:visible:"+a,d.d.wrap);setTimeout(function(){0<f.length?f.focus():d.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?k.height():window.innerHeight;j=[l.height(),l.width()];h=[a,k.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?h[0]:h[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||o,d=this.d.origHeight?this.d.origHeight:b.browser.opera?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:b.browser.opera?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),f=this.d.data.outerHeight(!0),
g=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||d;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,e=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<h[0]?c:h[0],e=e&&e<h[1]?e:h[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",d=d?this.o.autoResize&&d>c?c:d<i?i:d:f?f>c?c:this.o.minHeight&&"auto"!==i&&f<i?i:f:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>e?e:a<c?c:a:
g?g>e?e:this.o.minWidth&&"auto"!==c&&g<c?c:g:c;this.d.container.css({height:d,width:a});this.d.wrap.css({overflow:f>d||g>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=h[0]/2-this.d.container.outerHeight(!0)/2;b=h[1]/2-this.d.container.outerWidth(!0)/2;var f="fixed"!==this.d.container.css("position")?k.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=f+(this.o.position[0]||a),b=this.o.position[1]||
b):a=f+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});

/**
 * Confirm对话框
 * (String)message - 欲显示的内容
 * (Function)callback - 回调函数
 */
function wp_confirm(message, callback, cancelBack){
	if ($('#wp-confirmpnl_overlay,#wp-confirm_panel').size()) return;
	var width = 286,pnl = '',ol = '<div id="wp-confirmpnl_overlay"></div>';
	pnl = '<div id="wp-confirm_panel" class="overz wp-manage_panel wp-alert-panel" style="position:absolute;width:'+width+'px;z-index:10001;">'
	+'<div class="wp-panel_outpadding overz"><div class="wp-manage_panel_block_one wp-manage-link overz"><h2 class="overz">'+message+'</h2></div>'
	+'<div class="wp-alert_button overz"><a href="javascript:;" class="wp-alert-sure">'+translate('Sure')+'</a><a href="javascript:;" class="wp-alert-cancel">'+translate('Cancel')+'</a></div></div></div>';
	$(ol+pnl).appendTo('body');
	var $cpnl = $('#wp-confirm_panel');
		// 动态设置wp-alert_button宽度
	var resetWtimer = setTimeout(function(){
		var $altbtn = $cpnl.find('.wp-alert_button');
		$altbtn.width($altbtn.outerWidth());
//		var maxw = 0,$altbtn = $cpnl.find('.wp-alert_button');
//		$altbtn.children('a').each(function(i,a){
//			maxw += $(this).outerWidth(true);
//		});
//		if(maxw) $altbtn.width(maxw);
	},30);
	// 定位Dialog
	panel_position($cpnl,width,'auto',true,'wp-confirmpnl_overlay');
	// Bind window resize
	$(window).resize(function(){
		panel_position($cpnl,width,'auto',true,'wp-confirmpnl_overlay');
	});
	$cpnl.bind('rename',function(e,name){
		if (name.length) {
			var self = this;			
			if(name.match(/,/)){
				var  btnstr = '<a href="javascript:;" class="wp-alert-sure">'+translate('Sure')+'</a><a href="javascript:;" style="margin-right:10px" class="wp-alert-edit">'+translate('Edit')+'</a><a href="javascript:;" class="wp-alert-cancel">'+translate('Cancel')+'</a>';
				//var str_edit =  $('.wp-manage-link',self).html();		
				var page = message.match(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/);
					page = page[0];
				var edit = name.split(',')[1];
				var sure = name.split(',')[0];
				$('.wp-alert_button',self).html(btnstr);
				$('a.wp-alert-edit',self).html(edit);
				$('a.wp-alert-sure',self).html(sure);
				$('a.wp-alert-edit',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");
				$('a.wp-alert-edit',self).hover(function(){
					$('a.wp-alert-sure',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");
					$('a.wp-alert-edit',self).css({ "color":"#FFF", "background":"url(../images/wp-button-bg-hover.gif) repeat-x #366bbc"});
					$('a.wp-alert-cancel',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");
				});
				$('a.wp-alert-sure',self).hover(function(){
					$('a.wp-alert-edit',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");
					$('a.wp-alert-sure',self).css({ "color":"#FFF", "background":"url(../images/wp-button-bg-hover.gif) repeat-x #366bbc"});
					$('a.wp-alert-cancel',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");
				
				});
				$('a.wp-alert-cancel',self).hover(function(){
					$('a.wp-alert-cancel',self).css({ "color":"#FFF", "background":"url(../images/wp-button-bg-hover.gif) repeat-x #366bbc"});
					$('a.wp-alert-sure',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");
					$('a.wp-alert-edit',self).css("background","url(../images/wp-button-black-bg.gif) repeat-x #383838");

				});
				var timerid = setTimeout(function(){
					var newidth = $('a.wp-alert-edit',self).outerWidth(true) +$('a.wp-alert-sure',self).outerWidth(true) + $('a.wp-alert-cancel',self).outerWidth(true);
					$('.wp-alert_button',self).width(newidth);newidth = null;
					clearTimeout(timerid);
				}, 50);
				// 绑定"OK|Cancel"按钮
				$cpnl.find('a.wp-alert-sure').click(function(e){
					if(callback && $.isFunction(callback)) callback();
					$cpnl.add('#wp-confirmpnl_overlay').remove();
					if(resetWtimer) clearTimeout(resetWtimer);
					e.preventDefault();
				}).end().find('a.wp-alert-cancel').click(function(e){
					if(cancelBack && $.isFunction(cancelBack)) cancelBack();
					$cpnl.add('#wp-confirmpnl_overlay').remove();
					if(resetWtimer) clearTimeout(resetWtimer);
					e.preventDefault();
				}).end().find('a.wp-alert-edit').click(function(e){
					if(page){
						window.location.href = page;
					}
				});
		}else{
			$('a.wp-alert-sure',self).html(name);
			var timerid = setTimeout(function(){
				var newidth = $('a.wp-alert-sure',self).outerWidth(true) + $('a.wp-alert-cancel',self).outerWidth(true);
				$('.wp-alert_button',self).width(newidth);newidth = null;clearTimeout(timerid);
			}, 50);
		}
	}
	});
	// 绑定"OK|Cancel"按钮
	$cpnl.find('a.wp-alert-sure').click(function(e){
		if(callback && $.isFunction(callback)) callback();
		$cpnl.add('#wp-confirmpnl_overlay').remove();
		if(resetWtimer) clearTimeout(resetWtimer);
		e.preventDefault();
	}).end().find('a.wp-alert-cancel').click(function(e){
		if(cancelBack && $.isFunction(cancelBack)) cancelBack();
		$cpnl.add('#wp-confirmpnl_overlay').remove();
		if(resetWtimer) clearTimeout(resetWtimer);
		e.preventDefault();
	});
	// 绑定Enter事件
	$(document).keydown(function(e){
		if(e.keyCode == 13) $cpnl.find('a.wp-alert-sure').trigger('click');
	});
	return false;
}

function wp_editPicOnline(param)
{
	var imgtype=parseInt(getImageProcessType())||0; //图片处理  0 使用aviary处理  1 使用美图秀秀处理
	var imgprocess=['feather','xiuxiu'];
	if(imgtype >= imgprocess.length) imgtype=0;
	var imgtypestr=imgprocess[imgtype];
	
	$LAB.script(relativeToAbsoluteURL('script/wopop2_'+imgtypestr+'.js'))
	.wait(function(){
		wp_editPicOnlineActual(param);
	})
}

/**
 * Alert对话框
 * (String)message - 欲显示的内容
 */
function wp_alert(message,callback){
	if ($('#wp-alertpnl_overlay,#wp-alert_panel').size()) return;
	var width = 286,pnl = '',ol = '<div id="wp-alertpnl_overlay"></div>';	
	pnl = '<div id="wp-alert_panel" class="overz wp-manage_panel wp-alert-panel" style="position:absolute;width:'+width+'px;z-index:10001;">'
	+'<div class="wp-panel_outpadding overz"><div class="wp-manage_panel_block_one wp-manage-link overz"><h2 class="overz">'+message+'</h2></div>'
	+'<div class="wp-alert_button overz" style="width:55px;"><a href="javascript:;" class="wp-alert-sure">'+translate('Sure')+'</a></div></div></div>';
	$(ol+pnl).appendTo('body');
	var $apnl = $('#wp-alert_panel');
	// 定位Dialog
	panel_position($apnl,width,'auto',true,'wp-alertpnl_overlay');
	// Bind window resize
	$(window).resize(function(){
		panel_position($apnl,width,'auto',true,'wp-alertpnl_overlay');
	});
	// 绑定"OK"按钮
	$apnl.find('a.wp-alert-sure').click(function(e){
		$apnl.add('#wp-alertpnl_overlay').remove();
		if($.isFunction(callback)) callback();
		e.preventDefault();
	});
	// 绑定Enter事件
	$(document).keydown(function(e){
		if(e.keyCode == 13) $apnl.find('a.wp-alert-sure').trigger('click');
	});

	return false;
}

/**
 * --------------------------------------------------------
 * Popup对话框(临时函数)
 * --------------------------------------------------------
 */
function show_dialog(load_url, title, width, height, callback, opentype){
	var fn = $.extend({}, {
		open: function(d){},
		close: function(d){}
	}, callback || {});
	$('#osx-modal-content').modal({
		overlayId: 'osx-overlay',
		containerId: 'osx-container',
		closeHTML: null,
		zIndex: 1000,
		opacity: 25,
		onOpen: function(d){
			fn.open(d);
			var self = this, $container = d.container, container = $container[0];
			var $data = $('#osx-modal-data', container);
			if (opentype == 'iframe') {								
				$data.html('<iframe src="'+load_url+'" frameborder="0" width="'+width+'" onload="this.height=this.contentWindow.document.documentElement.scrollHeight" scrolling="no"></iframe>');
				d.overlay.show();
				$data.show();
				$('#osx-modal-content,div.close', container).show();
				$('#osx-modal-title', container).html(title).show();
				$container.fadeTo('fast',1).draggable({handle: '#osx-modal-title',cursor: 'move'});
			} else {
				var $ajaxload = $('#wp-ajaxsend_loading2'),$win = $(window);
				if($ajaxload.size()==0)  $('<div id="wp-ajaxsend_loading2" style="width:'+$win.width()+'px;height:'+$win.height()+'px;z-index:9999;"><img src="'+relativeToAbsoluteURL('template/default/images/loading.gif')+'" width="16" height="16" /></div>').appendTo('body');
				$.get(load_url, function(data){
					$data.html(data);
					d.overlay.show();
					$data.show();
					$('#osx-modal-content,div.close', container).show();
					$('#osx-modal-title', container).html(title).show();
					$container.fadeTo('fast',1).draggable({handle: '#osx-modal-title',cursor: 'move'});
					self.setPosition();
					$('#wp-ajaxsend_loading2').remove();
				}).error(function(){
					$('#wp-ajaxsend_loading2').remove();
					alert(translate('Request failed!')); 
					self.close();return;
				});
			}
			if(width > 0) $container.css('width', width);
			$container.css('height', height || '');
			$('#osx-modal-content').bind('add_loading',function(){
				var loading=$data.children('.loading');
				if(loading.size()) loading.remove();
				$('<div class="loading" style="width:'+$data.width()+'px;height:'+$data.outerHeight()+'px;z-index:9999;"><img src="'+relativeToAbsoluteURL('template/default/images/loading.gif')+'" width="16" height="16" /></div>').appendTo($data);
			})

//			d.overlay.fadeIn('slow', function(){
//				$data.show();
//				$('#osx-modal-content,div.close', container).show();
//				$('#osx-modal-title', container).html(title).show();
//
//				$container.fadeTo('fast',1).draggable({handle: '#osx-modal-title',cursor: 'move'});
//			});
		},
		onClose: function(d){
			fn.close(d);
			var self = this;
			d.container.hide();
			d.overlay.hide();
			$("#osx-modal-content").triggerHandler('dialogclose', d);
			$("#osx-modal-content").unbind('dialogclose');
			$('#osx-modal-content').unbind('add_loading');
			setTimeout(function(){
				self.close();
			},500)
			
//			d.container.fadeOut('slow', function(){
//				d.overlay.fadeOut('slow', function(){
//					$("#osx-modal-content").triggerHandler('dialogclose', d);
//					$("#osx-modal-content").unbind('dialogclose');
//					self.close();
//				});
//			});
		}
	});
}

/*获取样式*/
function get_plugin_css(tagid,css){
	var editmode=false;
	if($.saveLayout) editmode=true;
	var setcss=$("#page_set_css").html();
	setcss=setcss.replace(/<style>/ig,'').replace(/<\/style>/ig,'').replace(/[\r]/g, " ").replace(/[\n]/g, " ").replace(/[\r\n]/g, " ").replace(/\s+/g, " "); 
	var reg = eval("/\\/\\*"+tagid+"\\*\\/(.*)\\/\\*"+tagid+"\\*\\//ig");
	setcss=setcss.replace(reg,'');	
	if(setcss&&$.trim(setcss) != '') css=css.replace(/@charset [^;]+;/i,'');
	var tempcss=setcss + ' /*'+ tagid +'*/ '+css+' /*'+ tagid +'*/ ';
	tempcss=tempcss.replace(/&gt;/ig,'>');
	if(editmode) $("#page_set_css").html('<style> '+tempcss + '</style>');
	else{
		$("#page_set_css").after($("#page_set_css").clone().attr('id','page_set_css2').html('<style> '+tempcss + '</style>'));
		$("#page_set_css").remove();
		$("#page_set_css2").attr('id','page_set_css');
	}
}

(function( $, undefined ) {
	var callbackhash={};
	var mod_property={};
	
	$.modplugin={
		addCallBack:function(type,funcname,func){
			if($.isFunction(func)){
				if(!callbackhash[type]) callbackhash[type]={};
				callbackhash[type][funcname]=func;
			}
		},
		fireCallBack:function(type,funcname,dom,data){
			var func=callbackhash[type];
			if(!func) return false;
			func=func[funcname];
			if($.isFunction(func)){
				return func(dom,data);
			}else{
				return false;
			}
		}
	}
	
	$.fn.execPluginCallBack=function(funcname,data){
			return $.modplugin.fireCallBack(this.attr('type'),funcname,this,data);
	}
	
	$.fn.mod_property=function(key,val){
		     if($.isPlainObject(key)){
					for(var inkey in key){
						this.mod_property(inkey,key[inkey]);
					}
					return ;
			 }
			var id=this.prop('id');
			if(!id) return null;
			var propertydata=mod_property[id];
			if(!propertydata){
				mod_property[id]=propertydata={};
			}
			if(val !== undefined){
				propertydata[key]=val;
				return val;
			}else{
				return propertydata[key];
			}
	}
	
	
	var PropertyCommand=null;
	function initPropCommand(){
		if(PropertyCommand) return;
		PropertyCommand=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			if(val.propval!=undefined) blockel.mod_property(val.propkey,val.propval);
			else blockel.del_mod_property(val.propkey);
			blockel.execPluginCallBack('property_undo',val); 
		},null,{returntype:'class'});
	}
	
	var PropertyCommand2=null;
	function initPropCommand2(){
		if(PropertyCommand2) return;
		PropertyCommand2=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			mod_property[blockid]=val.propval;
			blockel.execPluginCallBack('property_undo',val); 
		},null,{returntype:'class'});
	}
	$.fn.autoundo_mod_property2=function(val){
		if(val === undefined) return this.get_mod_property();
		initPropCommand2();
		var oldval=this.get_mod_property();
		mod_property[this.attr("id")]=val;
		var oldvalue={propval:oldval,act:'set',cmdtype:'undo'}
		var newvalue={propval:val,act:'set',cmdtype:'redo'}
		if(!Undo.Command.DefaultEqAct(oldval,val)) new PropertyCommand2(this.attr('id')).insertWithVals(oldvalue, newvalue);
	}
	
	$.fn.autoundo_mod_property=function(key,val){
		if(val === undefined) return this.mod_property(key);
		initPropCommand();
		var oldval=this.mod_property(key);
		this.mod_property(key,val);
		var oldvalue={propkey:key,propval:oldval,act:'set',cmdtype:'undo'}
		var newvalue={propkey:key,propval:val,act:'set',cmdtype:'redo'}
		if(!Undo.Command.DefaultEqAct(oldval,val)) new PropertyCommand(this.attr('id')).insertWithVals(oldvalue, newvalue);
	}
	
	$.fn.autoundo_del_mod_property=function(key){
		initPropCommand();
		var oldval=this.mod_property(key);
		this.del_mod_property(key);
		var oldvalue={propkey:key,propval:oldval,act:'del',cmdtype:'undo'}
		var newvalue={propkey:key,act:'del',cmdtype:'redo'}
		if(oldval != undefined)  new PropertyCommand(this.attr('id')).insertWithVals(oldvalue, newvalue);
	}
	
	$.fn.del_mod_property=function(key){
		var id=this.prop('id');
		if(!id) return null;
		var propertydata=mod_property[id];
		if($.isPlainObject(propertydata)){
			var oldval=propertydata[key];
			delete propertydata[key];
			return oldval;
		}
	}
	
	$.fn.get_mod_property=function(){
		var id=this.prop('id');
		if(!id) return null;
		var propertydata=mod_property[id];
		return propertydata||{};
	}
	
})(jQuery);;
function footerinit(){
	footerdrag();
	footerresize();
	
	$.showSiteFooterTips();
	$('.full_column').each(function(){
		fullcolumninit($(this));
	})
}

function fullcolumninit(dom){
	dom.children('.full_width').css({left:0-canv.offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	dom.wp_rightkey(); 
	if(dom.is(':not(.isplate)')){
		dom.wp_layerhover();
		fullcolumndrag(dom);
		fullcolumnresize(dom);
		fullcolumndrop(dom);
	}
	
}

function footerdrag(){
	var maxminusheight=0;
	var curcanvheight=canv.height();
	var Command=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			blockel.css('top',val.top);
			canv.height(val.canvheight);
			$('#scroll_container_bg').css('height',(val.canvheight+blockel.height())+'px');
			$.updateselectbgopt();
			$.updatepospropblk();
			$.canvasHeightChange();
	 },null,{returntype:'class'});
	 
	 var undoobj=null;
	$('#site_footer').draggable({
			cursor: 'move',
			axis: "y",
			start: function(event, ui){
				$(this).find('.ui-resizable-handle > .knob').hide();
				$(this).find('.ui-resizable-n').css('border-top-color', '#83c521');
				$(this).find('.ui-resizable-s').css('border-bottom-color', '#83c521');
				$(this).find('.ui-resizable-e').css('border-right-color', '#83c521');
				$(this).find('.ui-resizable-w').css('border-left-color', '#83c521');
				
				initCanvasHeight();
				var canvasminheight=canv.data('layermaxheight')||0;
				curcanvheight=canv.height();
				maxminusheight=curcanvheight-canvasminheight;
				undoobj=new Command('site_footer');
				undoobj.setOldVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight});
			},
			drag: function(event, ui){

				var topmovepx = ui.position.top - ui.originalPosition.top;
				if(topmovepx<0){
					var delta=0-topmovepx;
					if(delta>maxminusheight){
						var canvasminheight=canv.data('layermaxheight')||0;
						ui.position.top=ui.originalPosition.top-maxminusheight;
						canv.height(canvasminheight);
						$('#scroll_container_bg').css('height',(canvasminheight+$(this).height()+100)+'px');
						$.showselectbgopt($(this));
						$('.bgblk').hide();
						$('.posizeblk').html("x:"+(parseFloat($(this).css('left'))||0)+", y:"+ui.position.top).show();
						$(this).triggerHandler('drag_progress',[{left:0,top:ui.position.top}]);
						return;
					} 
				}
				$(this).triggerHandler('drag_progress',[{left:0,top:ui.position.top}]);
				canv.height(curcanvheight+topmovepx);
				$.showselectbgopt($(this));
				$('.bgblk').hide();
				$('.posizeblk').html("x:"+(parseFloat($(this).css('left'))||0)+", y:"+ui.position.top).show();
				$('#scroll_container_bg').css('height',(curcanvheight+topmovepx+$(this).height()+100)+'px');
			},
			stop:function(event, ui){
				$(this).find('.ui-resizable-handle > .knob').show();
				$(this).find('.ui-resizable-n').css('border-top-color', '#ff872e');
				$(this).find('.ui-resizable-s').css('border-bottom-color', '#ff872e');
				$(this).find('.ui-resizable-e').css('border-right-color', '#ff872e');
				$(this).find('.ui-resizable-w').css('border-left-color', '#ff872e');
				
				var topmovepx = ui.position.top - ui.originalPosition.top;
				canv.height(curcanvheight+topmovepx);
				$('#scroll_container_bg').css('height',(curcanvheight+topmovepx+$(this).height()+100)+'px');
				$.canvasHeightChange();
				correctFooterPos();
				undoobj.insertWithNewVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight+topmovepx});		
				undoobj=null;
				$('.bgblk').show();
				$('.posizeblk').hide();
				$(this).trigger('drag_stop',[{left:parseInt($(this).css('left')),top:parseInt($(this).css('top'))}]);
			}
			
	});
}

function fullcolumndrag(dom){
	dom.wp_drag();
}

function fullcolumnresize(dom){
	var createhandlefunc=function(handle){
		     dom.each(function(){
					 var hname = 'ui-resizable-'+handle;
					var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
					
					axis.css({zIndex: 1000});
					$(this).children('.full_width').append(axis);
			 })
				
	}
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000}).hide();
					$(this).children('.full_width').append(axis);
			  })
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var fullcolumnbuttompos;
	dom.resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			canvascontain: '#canvas',
			distance: 0,
		     concernLock:true,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				fullcolumnbuttompos=$.getFullColChildMaxButtom(dom);
				var self=$(this);
				var resizeundo=new ResizeCommand(self.attr('id'));
				var oldcssarr=['top','height'];
				var oldval={};
				for(var i=0;i<oldcssarr.length;i++){
					oldval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				resizeundo.setOldVal(oldval);
				$(document).data('resizeundo',resizeundo);
			},
			resize: function(event, ui){
				
				var curtop=dom.ab_pos_cnter('top');
				var curheight=$.parseInteger(dom.css('height'));
				if($.getElementAreaInf($(this))=='canvas'){
					var maxbuttom=Math.max(curtop+fullcolumnbuttompos,curtop+curheight);
					$.canvasheightresizeOrigin(maxbuttom);
				}
				
				$(this).children('.full_content,.full_width').height($(this).height());
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
				$.showselectbgopt($(this));
				$('.bgblk').hide();
				$('.posizeblk').html("W:"+$(this).width()+", H:"+$(this).height()).show();
			},
			stop:function(event, ui){
				$(this).children('.full_content,.full_width').height($(this).height());
				$.showselectbgopt($(this));
				var resizeundo=$(document).data('resizeundo');
				$(document).removeData('resizeundo');
				var self=$(this);
				var oldcssarr=['top','height'];
				var newval={};
				for(var i=0;i<oldcssarr.length;i++){
					newval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
				resizeundo.insertWithNewVal(newval);	
				$('.bgblk').show();
				$('.posizeblk').hide();
			}
			
	});
}

function footerresize(){
	var createhandlefunc=function(handle){
				var hname = 'ui-resizable-'+handle;
				var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
				axis.css({zIndex: 1000});
				$('#site_footer >.full_width').append(axis);
	}
	var createplaceholderfunc=function(handle){
				var hname = 'placeholder-'+handle;
				var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
				axis.css({zIndex: 1000});
				$('#site_footer> .full_width').append(axis);
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	
	var maxminusheight=0;
	var curcanvheight=canv.height();
	var canvasminheight=0;
	
	var Command=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			blockel.css('top',val.top);
			blockel.css('height',val.height);
			canv.height(val.canvheight);
			blockel.children('.full_content,.full_width').height(val.height);
			$('#scroll_container_bg').css('height',(val.canvheight+blockel.height())+'px');
			$.updateselectbgopt();
			$.updatepospropblk();
			$.canvasHeightChange();
	 },null,{returntype:'class'});
	 
	 var undoobj=null;
	 var resizertimer=null;
	$('#site_footer').resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			distance: 0,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				initCanvasHeight();
				if(resizertimer){
					clearTimeout(resizertimer);
					resizertimer=null;
				}
				canvasminheight=canv.data('layermaxheight')||0;
				curcanvheight=canv.height();
				maxminusheight=curcanvheight-canvasminheight;
				
				undoobj=new Command('site_footer');
				undoobj.setOldVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight,height:$(this).height()});
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
			},
			resize: function(event, ui){
				var resizeobj=$(this).data('resizable');
				var theaxis=resizeobj.axis;
				if(theaxis=='n'){
					var changey= $(this).height()-ui.originalSize.height;
					if(changey>maxminusheight){
						var mintop=canvasminheight;
						$(this).css({top:mintop,height:ui.originalSize.height+maxminusheight});
						var oriscrolltop=$(this).data('resize_oriscrolltop');
						$(this).scrollParent().scrollTop(oriscrolltop);
						$(this).children('.full_content,.full_width').height($(this).height());
						canv.height(canvasminheight);
						$('#scroll_container_bg').css('height',(canvasminheight+$(this).height()+100)+'px');
						$.showselectbgopt($(this));
						$('.bgblk').hide();
						$('.posizeblk').html("W:"+$(this).width()+", H:"+$(this).height()).show();
						return;
					}
					canv.height(curcanvheight-changey);
					$(this).children('.full_content,.full_width').height($(this).height());
					$('#scroll_container_bg').css('height',(canv.height()+$(this).height()+100)+'px');
				}else{
					$(this).children('.full_content,.full_width').height($(this).height());
					$('#scroll_container_bg').css('height',(canv.height()+$(this).height()+100)+'px');
				}
				$.showselectbgopt($(this));
				$('.bgblk').hide();
				$('.posizeblk').html("W:"+$(this).width()+", H:"+$(this).height()).show();
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
			},
			stop:function(event, ui){
				var self=$(this);
				undoobj.insertWithNewVal({top:$.parseInteger(self.css('top')),canvheight:canv.height(),height:self.height()});		
				undoobj=null;
				$('.bgblk').show();
				$('.posizeblk').hide();
				$.canvasHeightChange();
			}
			
	});
}

function fullcolumndrop(dom){
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000});
					$(this).children('.full_content').append(axis);
			  })
	}
	createplaceholderfunc('n');
	createplaceholderfunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var contentblock=dom.children('.full_content');
	contentblock.children('.li-placeholder').hide();
	contentblock.children('.placeholder-n').css({'border-top':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-s').css({'border-bottom':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-e').css({'border-right':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-w').css({'border-left':'#FF9900 dashed 4px'});
	
	contentblock.droppable({
			tolerance: 'pointer',
			accept:'.full_column,.cstlayer',
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')){
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));
						
						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')){
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									if(!existcolumnel.is('.wp_droppable')){
										var dropobj=existcolumnel.children('.full_content').data('droppable');
									}else{
										var dropobj=existcolumnel.children('.drop_box').data('droppable');
									}
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected') ){
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});

}

function fullcolumn_propblk_init(){
	var lvtimer;
	for(var key in $.backgroundPropDefaults){
		(function(){	
			var curkey=key;
			var otherfunc=null;
			if($.inArray(curkey,['bg_moveto_prevop','bg_moveto_nextop']) != -1){
				var innertxt ='', lvtype = '';
				switch(curkey){
					case 'bg_moveto_prevop':
						lvtype = 'top';
						innertxt = '<div class="wp-moveto_fstlevel"><a class="property-bar-top" href="###" title="'+translate('Move to top')+'"><span>&nbsp;</span></a></div>';
						break;
					case 'bg_moveto_nextop':
						lvtype = 'bottom';
						innertxt = '<div class="wp-moveto_lstlevel"><a class="property-bar-bottom" href="###" title="'+translate('Move to bottom')+'"><span>&nbsp;</span></a></div>';
						break;
				}
				otherfunc={
					mousedown:function(){
						var $target = $(this)
						var apos =$target.offset();
						var scrollctner=$('#scroll_container');
						var scrolltop=scrollctner.scrollTop();

						$(innertxt).appendTo(scrollctner).css({
							top: function(){
								return (apos.top+scrolltop - 25-39)+'px'
							},left: apos.left+'px'
						}).click(function(e){
							$('#'+$.bgselectedid).wp_setorder(lvtype,$.bgselectedid);
							$(this).remove();
							$target.removeClass('local');
							e.preventDefault();
						});

					},
					mouseup:function(){

					}
				}
			}
			$('#'+curkey).mousedown(function(e){
					var $target = $(this);	
					$target.addClass('local');
					if($('.wp-moveto_fstlevel,.wp-moveto_lstlevel').size()) $('.wp-moveto_fstlevel,.wp-moveto_lstlevel').remove();
					if(otherfunc != null){
						otherfunc.mousedown.apply(this);
					}
					e.preventDefault();
			}).mouseup(function(e){
					var self = this,$target = $(self);
					$target.removeClass('local');
					$.backgroundPropDefaults[curkey].apply(this);
					if(otherfunc != null){
						otherfunc.mouseup.apply(this);
					}
					e.preventDefault();
			})
		})();
	}
}

(function($){
function getAllParents(el){
	var parents={};
	parents[el.prop('id')]='null';
	var curel=el;
	while(true){
		var parentid=$.getElementFatherid(curel);
		if(parentid =='none') break;
		parents[parentid]=curel.prop('id');
		curel=$('#'+parentid);
	}
	return parents;
}

$.chooseBiggerColumn=function(existcolumnid,newcolumnid){
	var biggercolumnid=newcolumnid;
	if(existcolumnid==newcolumnid) return biggercolumnid;
	if(existcolumnid){
		var existcolumnel=$('#'+existcolumnid);
		var newcolumnel=$('#'+newcolumnid);
		
		var existcolumnfathers=getAllParents(existcolumnel);
		var newcolumnfathers=getAllParents(newcolumnel);
		var rootid='canvas';
		if(!existcolumnfathers[rootid])  rootid='site_footer';
		var existdifffather=rootid;
		var newdifffather=rootid;
		while(existdifffather == newdifffather){
			existdifffather =existcolumnfathers[existdifffather];
			newdifffather =newcolumnfathers[newdifffather];
			if(existdifffather=='null' || newdifffather=='null') break;
		}
		if(existdifffather=='null') biggercolumnid=newcolumnid;
		else if(newdifffather=='null') biggercolumnid=existcolumnid;
		else{
			var existfatherzindex=$.parseInteger($('#'+existdifffather).css('z-index'));
			var newfatherzindex=$.parseInteger($('#'+newdifffather).css('z-index'));
			if(existfatherzindex > newfatherzindex) biggercolumnid=existcolumnid;
		}
	}
	return biggercolumnid;
}	

$.transferToColumn=function(dom,fathercolid){
	var oldfatherid=$.getElementFatherid(dom);
	if(oldfatherid!=fathercolid){
		var newfatherel=$('#'+fathercolid);
		var domabpos=dom.ab_pos('top');
		var newfatherabpos=newfatherel.ab_pos('top');
		var domableft=dom.ab_pos('left');
		var newfatherl=newfatherel.ab_pos('left');
		var contentblock=newfatherel;
		if(fathercolid!='canvas'){
			if(newfatherel.is('.wp_droppable')){
				contentblock=newfatherel.children('.drop_box');
			}else contentblock=newfatherel.children('.full_content');
		}
		dom.detach().attr('fatherid',fathercolid).css({'top':(domabpos-newfatherabpos),'left':(domableft-newfatherl)}).appendTo(contentblock);
		if(fathercolid=='site_footer'||fathercolid=='canvas') dom.removeAttr('fatherid');
	}
}

$.getElementAreaInf=function(dom){
	return dom.attr('inbuttom')=='1'?'site_footer':'canvas';
}

$.transferToArea=function(dom,from,to,isInUndo){
	var domabpos=dom.ab_pos('top');
	var domableft=dom.ab_pos('left');
	var footertop=$.parseInteger($('#site_footer').css('top'));
	if(to=='site_footer'){
		var curmodtop=domabpos-footertop;
		dom.css('top',curmodtop);dom.css('left',domableft);
		dom.attr('inbuttom','1');
		dom.detach().removeAttr('fatherid').appendTo($('#site_footer').children('.full_content'));
		if(dom.hasClass('full_pagescroll')||dom.hasClass('full_column')||dom.hasClass('wp_droppable')){ 
			dom.find('.cstlayer,.full_pagescroll,.full_column').attr('inbuttom','1').attr('data-model', 'edit');
		}
	}else{
		var curmodtop=domabpos+footertop;
		dom.css('top',curmodtop);dom.css('left',domableft);
		var canvheight=$('#canvas').height();
		if(canvheight<curmodtop+dom.height()&&!isInUndo){
			$.canvasheightresizeOrigin(curmodtop+dom.height());
		}
		dom.removeAttr('inbuttom');
		dom.detach().removeAttr('fatherid').appendTo($('#canvas'));
		if(dom.hasClass('full_pagescroll')||dom.hasClass('full_column')||dom.hasClass('wp_droppable')){ 
			dom.find('.cstlayer,.full_pagescroll,.full_column').removeAttr('inbuttom').attr('data-model', 'edit');
		}
	}
	if(dom.is('.ui-modselected')){
		$.hidWidgetBorder(dom);
		$.showWidgetBorder(dom);
	}
	if(dom.is('.full_pagescroll,.full_column,.wp_droppable')){
		dom.find('.cstlayer,.full_pagescroll,.full_column').each(function(){
			if($(this).is('.ui-modselected')){
				$.hidWidgetBorder($(this));
				$.showWidgetBorder($(this));
			}
		})
	}
	// for 'breakpoint save'
	breakpoint_save.setObj({});
}

$.addFullColumn=function(top){
    //fullpage plugin exist 时禁fullcolumn 拖拽.
        if($('.fullpage_alllist:not([deleted="deleted"])').length > 0){
            wp_alert(translate('fullpage.already can not add fullcolumn'));
            return false;
        }
         var successfunc=function(resp,needchangeid){
				var fullcolumnhtml=resp;
				if(needchangeid){
					var fullcolumnels=$(fullcolumnhtml).filter('.full_column');
					var nowid=fullcolumnels.prop('id');
					var newid='layer'+fGuid();
					fullcolumnhtml=fullcolumnhtml.replace(new RegExp(nowid,"g"),newid);
				}
				var fullcolumnel=$(fullcolumnhtml).appendTo('#canvas').css('top',top);
				fullcolumnel=fullcolumnel.filter('.full_column');
				fullcolumninit(fullcolumnel);
				fullcolumnel.css('z-index',100);
				$('.ui-modselected').each(function(){
					$.hidWidgetBorder($(this));
					// 图文模块相关 2012/2/14
					if($(this).hasClass('graphic_edited')) actived_graphic();
				});	
				$.selectbgdiv(fullcolumnel);
				new AddCommand(fullcolumnel.prop('id')).insert();
				
				var objarray=new Array();
				objarray[0]=new Array(parseInt($('#'+fullcolumnel.prop('id')).css('z-index')),fullcolumnel.prop('id'));
				$.zindexsort_new(objarray);				
		}	
		
		if($.addFullColumn.html_cache){
			successfunc($.addFullColumn.html_cache,true);
			return;
		}
		
		$.ajax({
	        type: "GET",
	        url: parseToURL("wp_widgets","gtfullcolumn"),
	        success: function(response){
				$.addFullColumn.html_cache=response;
				successfunc(response,false);
			},
			error: function(xhr, textStatus, errorThrown){
				wp_alert((errorThrown||textStatus)+"(add a fullcolumn).<br/>"+translate("Request failed!"));
				return false;
			}
	    });
}

$.curSelectableFather=function(){
	var selmods=$('.ui-modselected');
	if(selmods.length==0){
		$(document).data('cur_selectable_father',null);
		return null;
	}else{
		var fatherid=$.getElementFatherid(selmods.filter(':first'));
		$(document).data('cur_selectable_father',fatherid);
		return fatherid;
		
	}
}

$.getElementFatherid=function(dom){
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 'none';
	var fatherid=dom.attr('fatherid');
	if(!fatherid||fatherid==''){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
	}
	if(!$('#'+fatherid).length){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
		dom.removeAttr('fatherid');
	}
	return fatherid;
}

$.fn.ab_pos=function(direct){
	var dom=$(this);
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 0;
	if(direct=='left'||direct=='top'){
		if(!dom.attr('fatherid')||dom.attr('fatherid')=='') return dom.rel_pos(direct);
		return dom.rel_pos(direct)+$('#'+dom.attr('fatherid')).ab_pos(direct);
	}
}

$.fn.ab_pos_cnter=function(direct){
	var abpos=$(this).ab_pos(direct);
	if($(this).closest('#site_footer').length>0&&direct=='top'){
		return abpos+$.parseInteger($('#site_footer').css(direct));
	}
	return abpos;
}

$.fn.rel_pos=function(direct){
	if(direct=='left'||direct=='top'){
		return $.parseInteger($(this).css(direct));
	}
}

$.getFullColChildMaxButtom=function(dom){
		var parenttoppos=dom.ab_pos_cnter('top');
		var maxbuttompos=parenttoppos;
		dom.find('.cstlayer,.full_column').each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos-parenttoppos;
	
}

$.getFullColumnButtomPos=function(dom){
	if(dom.hasClass('cstlayer')){
		return $.divrotate.getDegreeModMaxPoint(dom,null,'buttom');
	}else if(dom.hasClass('full_column')){
		var maxbuttompos=0;
		dom.find('.cstlayer,.full_column').andSelf().each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos;
	}
}

$.saveFullColumnObj=function(dom){
	var fullbackprop=dom.children('.full_width').data('backgroundprops')||{};
	var contentbackprop=dom.find('.full_content').data('backgroundprops')||{};
	var margintopheight=dom.children('.full_width').attr("margintopheight");
	var footerheight=dom.height();
	var otherparam={};
	if(dom.prop('id') != 'site_footer') otherparam={top:$.parseInteger(dom.css('top')),zindex:$.parseInteger(dom.css('z-index')),lock:dom.data('cstlayerstatus'),fixdisplay:dom.attr('infixed')};
	return $.extend({
		fullbackgroundprop:fullbackprop,
		contentbackgroundprop:contentbackprop,
		margintopheight:margintopheight,
		footerheight:footerheight
	},otherparam);
}

$.processDropMask=function(dom){
	if(!dom.is('.wp_droppable')) return;
	var $target=dom;
	if($target.find('.ui-modselected').length || $target.is('.ui-modselected')){
		$target.find('.drop_mask').hide();
		var timer=setInterval(function(){
			if(!$target.find('.ui-modselected').length && !$target.is('.ui-modselected')){
				$target.find('.drop_mask').show();
						clearInterval(timer);
			}
		},300)
	}
}
})(jQuery)


;
eval(function(C,E,D,F,B,A){B=function(G){return(G<E?"":B(parseInt(G/E)))+((G=G%E)>35?String.fromCharCode(G+29):G.toString(36))};if(!"".replace(/^/,String)){while(D--){A[B(D)]=F[D]||B(D)}F=[function(G){return A[G]}];B=function(){return"\\w+"};D=1}while(D--){if(F[D]){C=C.replace(new RegExp("\\b"+B(D)+"\\b","g"),F[D])}}return C}("F S(s){4 g=s.g;4 e=s.e;4 d=s.d;4 w=s.D;4 h=s.C;4 a=s.a;4 n=g+'n';4 k=\"M(\"+n+\")\";6($.j.Q){6($.j.T>=9){a.5('-z-c',k);a.5(\"-z-c-p\",\"b b\")}f{4 H=v.Z*g/I; 4 7=v.13(H);4 8=v.10(H);4 m=g%J;a.x('8',8);a.x('7',7);6(m>=0&&m<=K){4 t=e-((h*8+w*7)/2-w/2);4 r=d-((w*8+h*7)/2-h/2)}6(m>K&&m<=I){6(h*8+w*7*-1>w)4 t=e-((h*8+w*7*-1)/2-w/2);f 4 t=e+(w/2-(h*8+w*7*-1)/2);6((h*7*-1+w*8)>h)4 r=d-((h*7*-1+w*8)/2-h/2);f 4 r=d+(h/2-(h*7*-1+w*8)/2)}6(m>I&&m<=N){4 t=e-((-1*h*8+-1*w*7)/2-w/2);4 r=d-((-1*w*8+-1*h*7)/2-h/2)}6(m>N&&m<J){4 t=e-((w*7+h*8*-1)/2-w/2);6(-1*w*8+h*7>h)4 r=d-(-1*w*8+h*7-h)/2;f 4 r=d+(h-(-1*w*8+h*7))/2}a.5({V:\"W:X.Y.14(1b=\"+7+\",1d=\"+(-8)+\",1e=\"+8+\",1f=\"+7+\",16='15 17')\"});a.5({'e':t+'L','d':r+'L'})}}f 6($.j.P){a.5('-B-c',k);a.5(\"-B-c-p\",\"b b\")}f 6($.j.U){a.5('-A-c',k);a.5(\"-A-c-p\",\"b b\")}f 6($.j.R){a.5('-o-c',k);a.5(\"-o-c-p\",\"b b\")}}F 1a(a){a.19(F(){4 g=11($(3).i('n'))||0;$(3).x('n',g);6(g!=0){4 n=g+'n';4 k=\"M(\"+n+\")\";6($.j.U){$(3).5('-A-c',k);$(3).5(\"-A-c-p\",\"b b\")}f 6($.j.P){$(3).5('-B-c',k);$(3).5(\"-B-c-p\",\"b b\")}f 6($.j.R){$(3).5('-o-c',k);$(3).5(\"-o-c-p\",\"b b\")}f 6($.j.Q){6($.j.T>=9){$(3).5('-z-c',k);$(3).5(\"-z-c-p\",\"b b\")}f{$(3).x('1c',$(3).D()).x('12',$(3).C());4 y=[$(3).q().e,$(3).q().d],u=[];S({g:g,e:$(3).q().e,d:$(3).q().d,D:$(3).D(),C:$(3).C(),a:$(3)});u=18($(\"#\"+$(3).i('l')),g);4 G=v.O(y[0]-u[0]),E=v.O(y[1]-u[1]);6(y[0]>u[0])$(\"#\"+$(3).i('l')).5('e',$(\"#\"+$(3).i('l')).q().e+G);f $(\"#\"+$(3).i('l')).5('e',$(\"#\"+$(3).i('l')).q().e-G);6(y[1]>u[1])$(\"#\"+$(3).i('l')).5('d',$(\"#\"+$(3).i('l')).q().d+E);f $(\"#\"+$(3).i('l')).5('d',$(\"#\"+$(3).i('l')).q().d-E)}}}})}",62,78,"|||this|var|css|if|cosx|sinx||dom|0px|transform|top|left|else|degree||attr|browser|degp|id|angle|deg||origin|position|topNew|json|leftNew|arr1|Math||data|arr|ms|moz|webkit|height|width|relativeTop|function|relativeLeft|rotation|180|360|90|px|rotate|270|abs|safari|msie|opera|ieRotate|version|mozilla|filter|progid|DXImageTransform|Microsoft|PI|sin|parseInt|IEHeight|cos|Matrix|auto|SizingMethod|expand|getLeftPointProxy|each|rotateDom|M11|IEWidth|M12|M21|M22".split("|"),0,{}));;
/*! VelocityJS.org (1.3.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;f<g&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;f<g&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(a){for(var b=a.offsetParent||document;b&&"html"!==b.nodeType.toLowerCase&&"static"===b.style.position;)b=b.offsetParent;return b||document}var b=this[0],d=a(b),e=this.offset(),f=/^(?:body|html)$/i.test(d.nodeName)?{top:0,left:0}:c(d).offset();return e.top-=parseFloat(b.style.marginTop)||0,e.left-=parseFloat(b.style.marginLeft)||0,d.style&&(f.top+=parseFloat(d.style.borderTopWidth)||0,f.left+=parseFloat(d.style.borderLeftWidth)||0),{top:e.top-f.top,left:e.left-f.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):!(!p.isArray(a)||4!==a.length)&&i.apply(null,a),c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls),c=t.State.calls.length);for(var f=0;f<c;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;s<u;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{var G;if(v.Hooks.registered[B]){G=v.Hooks.getRoot(B);var H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(v.Normalizations.registered[G]?g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]("extract",null,I[1]):g(y).rootPropertyValueCache[G]=I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility));var n=g(l);if(f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&n){n.isAnimating=!1,n.rootPropertyValueCache={};var o=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=n.transformCache[b];n.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(o=!0,delete n.transformCache[b])}),f.mobileHA&&(o=!0,delete n.transformCache.translate3d),o&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(p){setTimeout(function(){throw p},1)}h&&f.loop!==!0&&h(e),n&&f.loop===!0&&!b&&(m.each(n.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360===0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var q=0,r=t.State.calls.length;q<r;q++)if(t.State.calls[q]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,n<=8&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(n<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:3,patch:0},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var g in e){var h=c+e[g],i=g;v.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(n<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){n&&!(n>9)||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var b=0;b<v.Lists.colors.length;b++)!function(){var a=v.Lists.colors[b];v.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!n||n>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return n<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(n<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(n<=8)e=m.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(i=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a)));var j=function(){i&&v.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===n&&"filter"===c?o.getPropertyValue(c):o[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(e=m(a).position()[c]+"px")}return e}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i)){var p=g(a);if(p&&p.isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0])}return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],n<=8)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var l=g(a);l&&l.isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((n||t.State.isAndroid&&!t.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(v.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;m.each(g(a).transformCache,function(c){return f=g(a).transformCache[c],"transformPerspective"===c?(h=f,!0):(9===n&&"rotateZ"===c&&(c="rotate"),void(b+=c+f+" "))}),h&&(b="perspective"+h+" "+b)}v.setPropertyValue(a,"transform",b)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return i?C.promise||null:n}function e(a,e){function f(f){var n,o;if(i.begin&&0===z)try{i.begin.call(q,q)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===D){var w,x,A,B=/^x$/i.test(i.axis)?"Left":"Top",E=parseFloat(i.offset)||0;i.container?p.isWrapped(i.container)||p.isNode(i.container)?(i.container=i.container[0]||i.container,w=i.container["scroll"+B],A=w+m(a).position()[B.toLowerCase()]+E):i.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+B]],x=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===B?"Top":"Left")]],A=m(a).offset()[B.toLowerCase()]+E),l={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:B,alternateValue:x}},element:a},t.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===D){if(n=g(a),!n)return;if(!n.tweensContainer)return void m.dequeue(a,i.queue);"none"===n.opts.display&&(n.opts.display="auto"),"hidden"===n.opts.visibility&&(n.opts.visibility="visible"),n.opts.loop=!1,n.opts.begin=null,n.opts.complete=null,u.easing||delete i.easing,u.duration||delete i.duration,i=m.extend({},n.opts,i),o=m.extend(!0,{},n?n.tweensContainer:null);for(var F in o)if("element"!==F){var G=o[F].startValue;o[F].startValue=o[F].currentValue=o[F].endValue,o[F].endValue=G,p.isEmptyObject(u)||(o[F].easing=i.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(o[F]),a)}l=o}else if("start"===D){n=g(a),n&&n.tweensContainer&&n.isAnimating===!0&&(o=n.tweensContainer);var H=function(b,c){var f,g,h;return p.isArray(b)?(f=b[0],!p.isArray(b[1])&&/^[\d-]/.test(b[1])||p.isFunction(b[1])||v.RegEx.isHex.test(b[1])?h=b[1]:(p.isString(b[1])&&!v.RegEx.isHex.test(b[1])||p.isArray(b[1]))&&(g=c?b[1]:j(b[1],i.duration),b[2]!==d&&(h=b[2]))):f=b,c||(g=g||i.easing),p.isFunction(f)&&(f=f.call(a,e,y)),p.isFunction(h)&&(h=h.call(a,e,y)),[f||0,g,h]};m.each(s,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(v.Names.camelCase(a))){var c=H(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var l=[i[k]];f&&l.push(f),j!==d&&l.push(j[k]),s[v.Names.camelCase(a)+h[k]]=l}delete s[a]}}});for(var K in s){var L=H(s[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(n&&n.isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),i._cacheValues&&o&&o[K]?(O===d&&(O=o[K].endValue+o[K].unitType),Q=n.rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(a,P),O=v.getPropertyValue(a,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(a,K));var R,S,T,U=!1,V=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]};R=V(K,O),O=R[0],T=R[1],R=V(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S=""));var W=function(){var d={myParent:a.parentNode||c.body,position:v.getPropertyValue(a,"position"),fontSize:v.getPropertyValue(a,"fontSize")},e=d.position===I.lastPosition&&d.myParent===I.lastParent,f=d.fontSize===I.lastFontSize;I.lastParent=d.myParent,I.lastPosition=d.position,I.lastFontSize=d.fontSize;var g=100,h={};if(f&&e)h.emToPx=I.lastEmToPx,h.percentToPxWidth=I.lastPercentToPxWidth,h.percentToPxHeight=I.lastPercentToPxHeight;else{var i=n&&n.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(i),d.myParent.appendChild(i),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(i,b,"hidden")}),t.CSS.setPropertyValue(i,"position",d.position),t.CSS.setPropertyValue(i,"fontSize",d.fontSize),t.CSS.setPropertyValue(i,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(i,b,g+"%")}),t.CSS.setPropertyValue(i,"paddingLeft",g+"em"),h.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(i,"width",null,!0))||1)/g,h.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(i,"height",null,!0))||1)/g,h.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(i,"paddingLeft"))||1)/g,d.myParent.removeChild(i)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),h.remToPx=I.remToPx,h.vwToPx=I.vwToPx,h.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),a),h};if(/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{h=h||W();var X=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===X?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:O*=h[T+"ToPx"]}switch(S){case"%":O*=1/("x"===X?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:O*=1/h[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}l[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(l[K]),a)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}l.element=a}l.element&&(v.Values.addClass(a,"velocity-animating"),J.push(l),n=g(a),n&&(""===i.queue&&(n.tweensContainer=l,n.opts=i),n.isAnimating=!0),z===y-1?(t.State.calls.push([J,q,i,null,C.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):z++)}var h,i=m.extend({},t.defaults,u),l={};switch(g(a)===d&&t.init(a),parseFloat(i.delay)&&i.queue!==!1&&m.queue(a,i.queue,function(b){t.velocityQueueEntryFlag=!0,g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:b}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=r;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}t.mock!==!1&&(t.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(t.mock)||1,i.delay*=parseFloat(t.mock)||1)),i.easing=j(i.easing,i.duration),i.begin&&!p.isFunction(i.begin)&&(i.begin=null),i.progress&&!p.isFunction(i.progress)&&(i.progress=null),i.complete&&!p.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=t.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,i.queue===!1?i.delay?setTimeout(f,i.delay):f():m.queue(a,i.queue,function(a,b){return b===!0?(C.promise&&C.resolver(q),!0):(t.velocityQueueEntryFlag=!0,void f(a))}),""!==i.queue&&"fx"!==i.queue||"inprogress"===m.queue(a)[0]||m.dequeue(a)}var h,i,n,o,q,s,u,x=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(i=!1,o=0,q=this,n=this):(i=!0,o=1,q=x?arguments[0].elements||arguments[0].e:arguments[0]),q=f(q)){x?(s=arguments[0].properties||arguments[0].p,u=arguments[0].options||arguments[0].o):(s=arguments[o],u=arguments[o+1]);var y=q.length,z=0;if(!/^(stop|finish|finishAll)$/i.test(s)&&!m.isPlainObject(u)){var A=o+1;u={};for(var B=A;B<arguments.length;B++)p.isArray(arguments[B])||!/^(fast|normal|slow)$/i.test(arguments[B])&&!/^\d/.test(arguments[B])?p.isString(arguments[B])||p.isArray(arguments[B])?u.easing=arguments[B]:p.isFunction(arguments[B])&&(u.complete=arguments[B]):u.duration=arguments[B]}var C={promise:null,resolver:null,rejecter:null};i&&t.Promise&&(C.promise=new t.Promise(function(a,b){C.resolver=a,C.rejecter=b}));var D;switch(s){case"scroll":D="scroll";break;case"reverse":D="reverse";break;case"finish":case"finishAll":case"stop":m.each(q,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||u!==!0&&!p.isString(u)||(m.each(m.queue(b,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(u)?u:"",[]))});var E=[];return m.each(t.State.calls,function(a,b){
b&&m.each(b[1],function(c,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||void m.each(q,function(c,d){if(d===e)if((u===!0||p.isString(u))&&(m.each(m.queue(d,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(u)?u:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&m.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),E.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(m.each(E,function(a,b){l(b,!0)}),C.promise&&C.resolver(q)),a();default:if(!m.isPlainObject(s)||p.isEmptyObject(s)){if(p.isString(s)&&t.Redirects[s]){h=m.extend({},u);var F=h.duration,G=h.delay||0;return h.backwards===!0&&(q=m.extend(!0,[],q).reverse()),m.each(q,function(a,b){parseFloat(h.stagger)?h.delay=G+parseFloat(h.stagger)*a:p.isFunction(h.stagger)&&(h.delay=G+h.stagger.call(b,a,y)),h.drag&&(h.duration=parseFloat(F)||(/^(callout|transition)/.test(s)?1e3:r),h.duration=Math.max(h.duration*(h.backwards?1-a/y:(a+1)/y),.75*h.duration,200)),t.Redirects[s].call(b,b,h||{},a,y,q,C.promise?C:d)}),a()}var H="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return C.promise?C.rejecter(new Error(H)):console.log(H),a()}D="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(q,function(a,b){p.isNode(b)&&e(b,a)}),h=m.extend({},t.defaults,u),h.loop=parseInt(h.loop,10);var K=2*h.loop-1;if(h.loop)for(var L=0;L<K;L++){var M={delay:h.delay,progress:h.progress};L===K-1&&(M.display=h.display,M.visibility=h.visibility,M.complete=h.complete),w(q,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};e!==f-1?i.complete=i.begin=null:i.complete=function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,k,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});;
/**********************
   Velocity UI Pack
**********************/

/* VelocityJS.org UI Pack (5.0.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

;(function (factory) {
    /* CommonJS module. */
    if (typeof require === "function" && typeof exports === "object" ) {
        module.exports = factory();
    /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define([ "velocity" ], factory);
    /* Browser globals. */
    } else {
        factory();
    }
}(function() {
return function (global, window, document, undefined) {

    /*************
        Checks
    *************/

    if (!global.Velocity || !global.Velocity.Utilities) {
        window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
        return;
    } else {
        var Velocity = global.Velocity,
            $ = Velocity.Utilities;
    }

    var velocityVersion = Velocity.version,
        requiredVersion = { major: 1, minor: 1, patch: 0 };

    function greaterSemver (primary, secondary) {
        var versionInts = [];

        if (!primary || !secondary) { return false; }

        $.each([ primary, secondary ], function(i, versionObject) {
            var versionIntsComponents = [];

            $.each(versionObject, function(component, value) {
                while (value.toString().length < 5) {
                    value = "0" + value;
                }
                versionIntsComponents.push(value);
            });

            versionInts.push(versionIntsComponents.join(""))
        });

        return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
    }

    if (greaterSemver(requiredVersion, velocityVersion)){
        var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
        alert(abortError);
        throw new Error(abortError);
    }

    /************************
       Effect Registration
    ************************/

    /* Note: RegisterUI is a legacy name. */
    Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {
        /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
        function animateParentHeight (elements, direction, totalDuration, stagger) {
            var totalHeightDelta = 0,
                parentNode;

            /* Sum the total height (including padding and margin) of all targeted elements. */
            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                if (stagger) {
                    /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
                    totalDuration += i * stagger;
                }

                parentNode = element.parentNode;

                $.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
                    totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
                });
            });

            /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
            Velocity.animate(
                parentNode,
                { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },
                { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }
            );
        }

        /* Register a custom redirect for each effect. */
        Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
            var finalElement = (elementsIndex === elementsSize - 1);

            if (typeof properties.defaultDuration === "function") {
                properties.defaultDuration = properties.defaultDuration.call(elements, elements);
            } else {
                properties.defaultDuration = parseFloat(properties.defaultDuration);
            }

            /* Iterate through each effect's call array. */
            for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
                var call = properties.calls[callIndex],
                    propertyMap = call[0],
                    redirectDuration = (redirectOptions.duration || properties.defaultDuration || 1000),
                    durationPercentage = call[1],
                    callOptions = call[2] || {},
                    opts = {};

                /* Assign the whitelisted per-call options. */
                opts.duration = redirectDuration * (durationPercentage || 1);
                opts.queue = redirectOptions.queue || "";
                opts.easing = callOptions.easing || "ease";
                opts.delay = parseFloat(callOptions.delay) || 0;
                opts._cacheValues = callOptions._cacheValues || true;

                /* Special processing for the first effect call. */
                if (callIndex === 0) {
                    /* If a delay was passed into the redirect, combine it with the first call's delay. */
                    opts.delay += (parseFloat(redirectOptions.delay) || 0);

                    if (elementsIndex === 0) {
                        opts.begin = function() {
                            /* Only trigger a begin callback on the first effect call with the first element in the set. */
                            redirectOptions.begin && redirectOptions.begin.call(elements, elements);

                            var direction = effectName.match(/(In|Out)$/);

                            /* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
                               and the first RAF tick. */
                            if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
                                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                    Velocity.CSS.setPropertyValue(element, "opacity", 0);
                                });
                            }

                            /* Only trigger animateParentHeight() if we're using an In/Out transition. */
                            if (redirectOptions.animateParentHeight && direction) {
                                animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
                            }
                        }
                    }

                    /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
                    if (redirectOptions.display !== null) {
                        if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
                            opts.display = redirectOptions.display;
                        } else if (/In$/.test(effectName)) {
                            /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
                            var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
                            opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
                        }
                    }

                    if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
                        opts.visibility = redirectOptions.visibility;
                    }
                }

                /* Special processing for the last effect call. */
                if (callIndex === properties.calls.length - 1) {
                    /* Append promise resolving onto the user's redirect callback. */
                    function injectFinalCallbacks () {
                        if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
                            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                Velocity.CSS.setPropertyValue(element, "display", "none");
                            });
                        }

                        redirectOptions.complete && redirectOptions.complete.call(elements, elements);

                        if (promiseData) {
                            promiseData.resolver(elements || element);
                        }
                    }

                    opts.complete = function() {
                        if (properties.reset) {
                            for (var resetProperty in properties.reset) {
                                var resetValue = properties.reset[resetProperty];

                                /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                   immediately and DOM querying is avoided (via forcefeeding). */
                                /* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
                                if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
                                    properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
                                }
                            }

                            /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
                            var resetOptions = { duration: 0, queue: false };

                            /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
                            if (finalElement) {
                                resetOptions.complete = injectFinalCallbacks;
                            }

                            Velocity.animate(element, properties.reset, resetOptions);
                        /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
                        } else if (finalElement) {
                            injectFinalCallbacks();
                        }
                    };

                    if (redirectOptions.visibility === "hidden") {
                        opts.visibility = redirectOptions.visibility;
                    }
                }

                Velocity.animate(element, propertyMap, opts);
            }
        };

        /* Return the Velocity object so that RegisterUI calls can be chained. */
        return Velocity;
    };

    /*********************
       Packaged Effects
    *********************/

    /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
    /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
    Velocity.RegisterEffect.packagedEffects =
        {
            /* Animate.css */
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [ { translateY: -30 }, 0.25 ],
                    [ { translateY: 0 }, 0.125 ],
                    [ { translateY: -15 }, 0.125 ],
                    [ { translateY: 0 }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 0 }, 0.125 ]
                ]
            },
            /* Animate.css */
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuad", 1 ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 0, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [ { scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" } ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [ { rotateZ: 15 }, 0.20 ],
                    [ { rotateZ: -10 }, 0.20 ],
                    [ { rotateZ: 5 }, 0.20 ],
                    [ { rotateZ: -5 }, 0.20 ],
                    [ { rotateZ: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "callout.tada": {
                defaultDuration: 1000,
                calls: [
                    [ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 1, 0 ] } ]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 0, 1 ] } ]
                ]
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -45 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateY: 10 }, 0.25 ],
                    [ { opacity: 1, rotateY: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],
                    [ { opacity: 0, rotateY: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateX: 10 }, 0.25 ],
                    [ { opacity: 1, rotateX: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],
                    [ { opacity: 0, rotateX: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Magic.css */
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "50%" ], transformOriginY: [ "100%", "100%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "100%" ], transformOriginY: [ "100%", "100%" ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 160 ] }, 1, { easing: "easeInOutSine" } ]
                ]
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuint", 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" } ]
                ],
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 1.5 ], scaleY: [ 1, 1.5 ], translateZ: 0 } ]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 1.3, scaleY: 1.3, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: 10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceUpOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: 20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: -10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceDownOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: -20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 30, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: -10 }, 0.20 ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [ { translateX: 30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            /* Animate.css */
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ -30, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: 10 }, 0.20 ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [ { translateX: -30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            /* Magic.css */
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: [ 0, -180 ] } ]
                ]
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            }
        };

    /* Register the packaged effects. */
    for (var effectName in Velocity.RegisterEffect.packagedEffects) {
        Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
    }

    /*********************
       Sequence Running
    **********************/

    /* Note: Sequence calls must use Velocity's single-object arguments syntax. */
    Velocity.RunSequence = function (originalSequence) {
        var sequence = $.extend(true, [], originalSequence);

        if (sequence.length > 1) {
            $.each(sequence.reverse(), function(i, currentCall) {
                var nextCall = sequence[i + 1];

                if (nextCall) {
                    /* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
                       in the previous call's begin callback. Otherwise, chained calls are normally triggered
                       in the previous call's complete callback. */
                    var timing = (currentCall.options && currentCall.options.sequenceQueue === false) ? "begin" : "complete",
                        callbackOriginal = nextCall.options && nextCall.options[timing],
                        options = {};

                    options[timing] = function() {
                        var nextCallElements = nextCall.elements || nextCall.e;
                        var elements = nextCallElements.nodeType ? [ nextCallElements ] : nextCallElements;

                        callbackOriginal && callbackOriginal.call(elements, elements);
                        Velocity(currentCall);
                    }

                    nextCall.options = $.extend({}, nextCall.options, options);
                }
            });

            sequence.reverse();
        }

        Velocity(sequence[0]);
    };
}((window.jQuery || window.Zepto || window), window, document);
}));;
;(function (window) {
	$.WOPOP_EFFECTS={};
	$.WOPOP_EFFECTS['fromleft']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',0-$(dom).width());
			dom.velocity({left:orileft+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['frombottom']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('top',container.scrollTop()+container.height()+$(dom).height());
			dom.velocity({top:oritop+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fromright']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',container.width()-$(dom).width());
			dom.velocity({left:orileft+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fromtop']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			// 考虑「通栏」元素（bug#4284）
			var $layer = $(dom),
			initop = ($layer.attr("fatherid")||"").length ? 0 : (container.scrollTop() - $(dom).height());
			$layer.css("top", initop);
			//$(dom).css('top',container.scrollTop()-$(dom).height());
			dom.velocity({top:oritop+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fade']=function(dom,options){
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('opacity',0);
			dom.velocity({opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-out',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['rotation']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "rotateY", "180deg");
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateY:["0deg","180deg"]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['rotation2d']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateZ:["360deg","0deg"]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'linear'})
			.velocity({rotateZ:["360deg","0deg"]},
			{delay:0,duration: (duration*1000),display: "block",loop:true,easing:'linear',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['bounceIn']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "0.3");
		$(dom).css('opacity',0);
		_getEffectDom(dom).done(function(dom){
			dom
			.velocity({scale:[1.05,0.3],opacity:[1,0]},{delay:(delay*1000),duration: (duration*333),display: "block"})
			.velocity({scale:[0.7,1.05]},{delay:0,duration: (duration*333),display: "block"})
			.velocity({scale:[1,0.7]},{delay:0,duration: (duration*333),display: "block",complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['big2small']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "2");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({scale:[1,2],opacity:[1,0]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['small2big']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "0.5");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({scale:[1,0.5],opacity:[1,0]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromLeft']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',0-$(dom).width());
			$(dom).css('opacity',0);
			dom.velocity({left:orileft+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromBottom']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('top',container.scrollTop()+container.height()+$(dom).height());
			$(dom).css('opacity',0);
			dom.velocity({top:oritop+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromRight']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',container.width()-$(dom).width());
			dom.velocity({left:orileft+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromTop']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('top',container.scrollTop()-$(dom).height());
			dom.velocity({top:oritop+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['light']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);

		_getEffectDom(dom).done(function(dom){
			dom.velocity({opacity: 1},
			{delay:(delay*1000),duration:(duration*500),display: "block",easing:'ease-in-out'})
			.velocity({opacity:[0,1]},
			{delay:0,duration: (duration*500),display: "block",loop:true,easing:'ease-in-out',complete:create_complete(options)})
		})
	}
	
	var effect_map = 'callout.bounce,callout.shake,callout.flash,callout.pulse,callout.swing,callout.tada,';
	effect_map += 'transition.flipBounceXOut,transition.flipBounceYOut,transition.whirlOut,transition.shrinkOut,transition.perspectiveLeftOut,';
	effect_map += 'transition.expandOut,transition.bounceOut,transition.slideUpBigOut,transition.slideDownBigOut,transition.perspectiveRightOut,';
	effect_map += 'transition.slideLeftBigOut,transition.slideRightBigOut,transition.perspectiveUpOut,transition.perspectiveDownOut';
	$.each(effect_map.split(','), function(i, effect_name){
		$.WOPOP_EFFECTS[effect_name] = function(dom, options){
			var delay = $.WOPOP_EFFECTS._parseNum(options['delay'], 1);
			var duration = $.WOPOP_EFFECTS._parseNum(options['duration'], 1);
			var l = 0,loop = $.WOPOP_EFFECTS._parseNum(options['loop'], 0),
			loop_infinite = $.WOPOP_EFFECTS._parseNum(options['loop_infinite'], 0);
			
			_getEffectDom(dom).done(function(dom){
				(function(){
					var self = arguments.callee;
					dom.velocity(effect_name, {
						delay: (delay * 1000),duration: (duration * 1000),
						display: 'block',complete: function(){
							if (loop_infinite ? true : l < loop) self();
							else create_complete(options).call(this);
							l++;
						}
					});
				})();
			});
		};
	});
	
	function create_complete(effects){
		//返回conplete函数
		return function(){
			var dom=$(this);
			if(dom.data('wopop_effect_oristyle')){
				dom.attr('style',dom.data('wopop_effect_oristyle')).show();
				dom.removeData('wopop_effect_oristyle');
			}
			dom.trigger('effect_complete');
			dom.removeClass('now_effecting');
		}
	}
	
	$.fn.showEffects=function(force_show,show_effects){
		$.Velocity.defaults.mobileHA=false;
		var fullpagedom=$('.fullpage_alllist');
		var browsersupport=!($.browser.msie && $.browser.version <9); //IE 9以下不支持动画效果
		if(!fullpagedom.length || force_show){
			return this.each(function() {
				var self = $(this); 
				var effects=show_effects;
				if(!(effects&&effects.effect)) effects=self.data('wopop_effects');
				if(effects&&effects.effect){
					var deg=self.data('deg')||0;
					// 固定通栏里显示动画
					var infixedparentel=self.closest('.full_column[infixed=1],.cstlayer[infixed=1]');
					if(infixedparentel.length){
						if(infixedparentel.parent().is('#canvas')&&parseInt(infixedparentel.css('top'))==0){
							return;
						}
						if(self.is('.now_effecting')) return;
					}
					var style=self.attr('style').replace(/display:\s*none\s*;?/,'');
					if(!deg){
						style=style.replace(/ (-\w+-)?transform-origin:[^;]+;/g,'');
					}
					if(!self.data('wopop_effect_oristyle')) self.data('wopop_effect_oristyle',style);
					
					$.Velocity.hook($(self), "rotateZ", deg+"deg");
					
					self.hide();
					if($.WOPOP_EFFECTS[effects.effect] && browsersupport){
						self.addClass('now_effecting');
						$.WOPOP_EFFECTS[effects.effect](self,effects);
					}else{
						self.show();
					}
				}
			});
		}
	}
	
	$.fn.wopop_effect_command=function(command,args){
		if(command=='stop'){
			return this.each(function() {
				stop_effect($(this));
			});
		}
	}
	
	$.WOPOP_EFFECTS._parseNum=function(num,orival){
		if(num==0) return 0;
		return num || orival;
	}
	
	function stop_effect(dom){
		dom.velocity("stop", true);
		if(dom.data('wopop_effect_oristyle')) {
			$.Velocity.hook($(dom), "scale", "1");
			$.Velocity.hook($(dom), "rotateY", "0deg");
			var deg=dom.data('deg')||0;
			$.Velocity.hook($(dom), "rotateZ", deg+"deg");

			dom.attr('style',dom.data('wopop_effect_oristyle'));
		}

//		if(dom.data('wopop_effect_oristyle')) console.log(dom,dom.data('wopop_effect_oristyle'))
		dom.removeData('wopop_effect_oristyle');
		dom.removeClass('now_effecting');
		dom.trigger('effect_complete');
	}
	
	function _getEffectDom(dom){
		var fullpagedom=$('.fullpage_alllist');
		var dfd=$.Deferred();
		if(fullpagedom.length){
			dfd.resolve($(dom));
		}else{
			var ismobile=(typeof(MobileUtils)=='object');
			if(!ismobile){
				var container=$('#scroll_container');
				/**
				 * 修复因“固定背景”而导致chrome下图片显示异常问题（bug#4394）
				 * bug#4394,bug#4162,bug#4172,bug#4208,bug#4322,bug#4337均由“固定背景”的修复方案导致的，伤不起呀！！！
				 */ 
				if (container.data('chrome_bug')) container = window;
			}else{
				var container=window;
			}
			if(isDomInView($(dom),container)){
				dfd.resolve($(dom));
			}else{
				$(container).bind('scroll',function(e){
					if(isDomInView($(dom),container)){
						dfd.resolve($(dom));
						$(this).unbind(e);
					}
				})
			}
		}
		return dfd;
	}
	
	function isDomInView(dom,container){
		var fold=0;var containerheight=0;
		if (container=== undefined || container === window) {
				fold = $(window).scrollTop();
				containerheight=$(window).height();
		} else {
				fold = $(container).scrollTop();
				containerheight=$(container).height();
		}
		var navheight=$('#wp-mobile_navhandler').height()+$('#wp-mobile_navhandler').height();
		return fold+containerheight-navheight > dom.ab_pos('top');//parseInt(dom.css('top'));
	}
	
	$.WOPOP_EFFECTS._hasEffectFilter=function(){
		var self=$(this);
		if(self.attr('deleted')=='deleted') return false;
		var effects=self.data('wopop_effects');
		if(effects&&effects.effect){
			return true;
		}
		return false;
	}
	
	$.WOPOP_EFFECTS._isEditMode=function(){
		if($.saveLayout&&$.isFunction($.saveLayout.save)) return true;
		return false;
	}
	
	var curfullpageindex;
	$.WOPOP_EFFECTS._setindex=function(index){
		curfullpageindex=index;
	}
	
	$.WOPOP_EFFECTS._getindex=function(){
		return curfullpageindex;
	}
	
	var effectparams={
		fromleft:{delay:0,duration:1.20},
		frombottom:{delay:0,duration:1.20},
		fromright:{delay:0,duration:1.20},
		fromtop:{delay:0,duration:1.20},
		fade:{delay:0,duration:0.90},
		rotation:{delay:0,duration:1.20},
		rotation2d:{delay:0,duration:1.20},
		bounceIn:{delay:0,duration:2.20},
		big2small:{delay:0,duration:1.20},
		small2big:{delay:0,duration:1.20},
		fadeFromLeft:{delay:0,duration:1.20},
		fadeFromBottom:{delay:0,duration:1.20},
		fadeFromRight:{delay:0,duration:1.20},
		fadeFromTop:{delay:0,duration:1.20},
		light:{delay:0,duration:1.20}
	}
	$.WOPOP_EFFECTS._getDefaultParam=function(effectname){
		var opts=effectparams[effectname];
		if(!opts) opts={delay:0,duration:1.20}
		return opts;
	}
})(window);

;
function fullpagefooterinit(){
	//fullpagefooterdrag();
	//fullpagefooterresize();
	//$.showSiteFooterTips();
	$('.fullpage_alllist').each(function(){
		if($('.full_column:not([deleted="deleted"])').length > 0){
	        wp_alert(translate('full_column.already in backplane'));
	    }
	})
	$('.full_pagescroll').each(function(){
		fullpagescrollinit($(this));
	})
        //点亮滚亮操作
        $(document).bind('fullpage_scroll_pro',function(e,section){
            setTimeout(function(){
                if($('#wp-property_settings2').length){
                    //var index=$.parseInteger(section.replace('page',''));
                    var index='';
                    $('#canvas #fullPage-nav li').each(function(e){
                       // if($(this).find('a.active').length>0) index = e + 1;
                    })
                    $('.fullpage_alllist .section').each(function(e){
                        if($(this).hasClass('active')) index = e + 1;
                    })
                    
                    if(index>0){
                        //$('#wp-property_settings2 .wp-manage-panel-album-img:eq('+(index-1)+')').css('border-color','red');
                        $('#all_extra_img_div .wp-manage-panel-album-img').each(function(i){
                            var j = i + 1;
                            if(j==index) $(this).addClass('action');
                            else         $(this).removeClass('action');
                        })
                    }
                }
            },100)
        })
}

function fullpagescrollinit(dom){
	dom.children('.full_width').css({left:0-canv.offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	dom.wp_rightkey(); 
	if(dom.is(':not(.isplate)')){
//		fullpagescrolldrag(dom);    
		fullpagescrollresize(dom);
                setTimeout(function(){
                        fullpagescrolldrop(dom);
                },1300);
		//fullpagescrolldrop(dom);
	}
	
}
/*
function fullpagefooterdrag(){
	var maxminusheight=0;
	var curcanvheight=canv.height();
	var Command=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			blockel.css('top',val.top);
			canv.height(val.canvheight);
			$('#scroll_container_bg').css('height',(val.canvheight+blockel.height())+'px');
			$.fullpageupdateselectbgopt();
			$.updatepospropblk();
			$.canvasHeightChange();
	 },null,{returntype:'class'});
	 
	 var undoobj=null;
	$('#site_footer').draggable({
			cursor: 'move',
			axis: "y",
			start: function(event, ui){
				initCanvasHeight();
				var canvasminheight=canv.data('layermaxheight')||0;
				curcanvheight=canv.height();
				maxminusheight=curcanvheight-canvasminheight;
				undoobj=new Command('site_footer');
				undoobj.setOldVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight});
			},
			drag: function(event, ui){

				var topmovepx = ui.position.top - ui.originalPosition.top;
				if(topmovepx<0){
					var delta=0-topmovepx;
					if(delta>maxminusheight){
						var canvasminheight=canv.data('layermaxheight')||0;
						ui.position.top=ui.originalPosition.top-maxminusheight;
						canv.height(canvasminheight);
						$('#scroll_container_bg').css('height',(canvasminheight+$(this).height()+100)+'px');
						$.fullpageshowselectbgopt($(this));
						$(this).triggerHandler('drag_progress',[{left:0,top:ui.position.top}]);
						return;
					} 
				}
				$(this).triggerHandler('drag_progress',[{left:0,top:ui.position.top}]);
				canv.height(curcanvheight+topmovepx);
				$.fullpageshowselectbgopt($(this));
				$('#scroll_container_bg').css('height',(curcanvheight+topmovepx+$(this).height()+100)+'px');
			},
			stop:function(event, ui){
				var topmovepx = ui.position.top - ui.originalPosition.top;
				canv.height(curcanvheight+topmovepx);
				$('#scroll_container_bg').css('height',(curcanvheight+topmovepx+$(this).height()+100)+'px');
				$.canvasHeightChange();
				correctFooterPos();
				undoobj.insertWithNewVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight+topmovepx});		
				undoobj=null;
				$(this).trigger('drag_stop',[{left:parseInt($(this).css('left')),top:parseInt($(this).css('top'))}]);
			}
			
	});
}
*/

function fullpagescrolldrag(dom){
	dom.wp_drag();
}

function fullpagescrollresize(dom){
	var createhandlefunc=function(handle){
		     dom.each(function(){
					 var hname = 'ui-resizable-'+handle;
					var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
					
					axis.css({zIndex: 1000});
					$(this).children('.full_width').append(axis);
			 })
				
	}
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000}).hide();
					$(this).children('.full_width').append(axis);
			  })
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var fullpagescrollbuttompos;
	dom.resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			canvascontain: '#canvas',
			distance: 0,
		     concernLock:true,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				fullpagescrollbuttompos=$.getFullColChildMaxButtomfullpage(dom);
				var self=$(this);
				var resizeundo=new ResizeCommand(self.attr('id'));
				var oldcssarr=['top','height'];
				var oldval={};
				for(var i=0;i<oldcssarr.length;i++){
					oldval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				resizeundo.setOldVal(oldval);
				$(document).data('resizeundo',resizeundo);
			},
			resize: function(event, ui){
				
				var curtop=dom.ab_pos_cnter('top');
				var curheight=$.parseInteger(dom.css('height'));
				if($.getElementAreaInf($(this))=='canvas'){
					var maxbuttom=Math.max(curtop+fullpagescrollbuttompos,curtop+curheight);
					$.canvasheightresizeOrigin(maxbuttom);
				}
				
				$(this).children('.full_content,.full_width').height($(this).height());
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
				$.fullpageshowselectbgopt($(this));
				
			},
			stop:function(event, ui){
				$(this).children('.full_content,.full_width').height($(this).height());
				$.fullpageshowselectbgopt($(this));
				var resizeundo=$(document).data('resizeundo');
				$(document).removeData('resizeundo');
				var self=$(this);
				var oldcssarr=['top','height'];
				var newval={};
				for(var i=0;i<oldcssarr.length;i++){
					newval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
				resizeundo.insertWithNewVal(newval);	
			}
			
	});
        //初始化resize 第一屏自适应处理
//        $(this).css({"width":($(window).width()-0) + "px","left":-$.fullpagecanvasleft() + "px"});//浏览器大小缩放处理
//        var $paragraph_image = $(this).find('.section .bg > img');
//        var maxjson = {width:$(window).width(),height:$(window).height()};
//        var json = {width:$paragraph_image.width(),height:$paragraph_image.height()};
//        $.wp_fullpagezoom($(this),maxjson,json,'noresize');
}
/*
function fullpagefooterresize(){
	var createhandlefunc=function(handle){
				var hname = 'ui-resizable-'+handle;
				var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
				axis.css({zIndex: 1000});
				$('#site_footer >.full_width').append(axis);
	}
	var createplaceholderfunc=function(handle){
				var hname = 'placeholder-'+handle;
				var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
				axis.css({zIndex: 1000});
				$('#site_footer> .full_width').append(axis);
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	
	var maxminusheight=0;
	var curcanvheight=canv.height();
	var canvasminheight=0;
	
	var Command=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			blockel.css('top',val.top);
			blockel.css('height',val.height);
			canv.height(val.canvheight);
			blockel.children('.full_content,.full_width').height(val.height);
			$('#scroll_container_bg').css('height',(val.canvheight+blockel.height())+'px');
			$.fullpageupdateselectbgopt();
			$.updatepospropblk();
			$.canvasHeightChange();
	 },null,{returntype:'class'});
	 
	 var undoobj=null;
	 var resizertimer=null;
	$('#site_footer').resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			distance: 0,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				initCanvasHeight();
				if(resizertimer){
					clearTimeout(resizertimer);
					resizertimer=null;
				}
				canvasminheight=canv.data('layermaxheight')||0;
				curcanvheight=canv.height();
				maxminusheight=curcanvheight-canvasminheight;
				
				undoobj=new Command('site_footer');
				undoobj.setOldVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight,height:$(this).height()});
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
			},
			resize: function(event, ui){
				var resizeobj=$(this).data('resizable');
				var theaxis=resizeobj.axis;
				if(theaxis=='n'){
					var changey= $(this).height()-ui.originalSize.height;
					if(changey>maxminusheight){
						var mintop=canvasminheight;
						$(this).css({top:mintop,height:ui.originalSize.height+maxminusheight});
						var oriscrolltop=$(this).data('resize_oriscrolltop');
						$(this).scrollParent().scrollTop(oriscrolltop);
						$(this).children('.full_content,.full_width').height($(this).height());
						canv.height(canvasminheight);
						$('#scroll_container_bg').css('height',(canvasminheight+$(this).height()+100)+'px');
						$.fullpageshowselectbgopt($(this));
						return;
					}
					canv.height(curcanvheight-changey);
					$(this).children('.full_content,.full_width').height($(this).height());
					$('#scroll_container_bg').css('height',(canv.height()+$(this).height()+100)+'px');
				}else{
					$(this).children('.full_content,.full_width').height($(this).height());
					$('#scroll_container_bg').css('height',(canv.height()+$(this).height()+100)+'px');
				}
				$.fullpageshowselectbgopt($(this));
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
			},
			stop:function(event, ui){
				var self=$(this);
				undoobj.insertWithNewVal({top:$.parseInteger(self.css('top')),canvheight:canv.height(),height:self.height()});		
				undoobj=null;
				$.canvasHeightChange();
			}
			
	});
}
*/
function fullpagescrolldrop(dom){
    if($.wismobile!=1) dom.css({'border':'dashed #AF6935 2px'});
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000});
					$(this).children('.full_content').append(axis);
			  })
	}
	createplaceholderfunc('n');
	createplaceholderfunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var contentblock=dom.children('.full_content');
	contentblock.children('.li-placeholder').hide();
	contentblock.children('.placeholder-n').css({'border-top':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-s').css({'border-bottom':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-e').css({'border-right':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-w').css({'border-left':'#FF9900 dashed 4px'});
	contentblock.droppable({
			tolerance: 'pointer',
			accept:'.full_pagescroll,.cstlayer,.wp-new-tool-second-link,.wp-manage-plugin-block',//fullpage拖拽即时响应
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));

						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom) ||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									var dropobj=existcolumnel.children('.full_content').data('droppable');
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});

}

function full_page_block_drop(contentBlock){
    var dom=contentBlock.closest('.full_pagescroll');
    contentBlock.droppable({
			tolerance: 'pointer',
			accept:'.full_pagescroll,.cstlayer,.wp-new-tool-second-link,.wp-manage-plugin-block',//fullpage拖拽即时响应
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));

						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
                                
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom) ||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									if(!existcolumnel.is('.wp_droppable')){
										var dropobj=existcolumnel.children('.full_content').data('droppable');
									}else{
										var dropobj=existcolumnel.children('.drop_box').data('droppable');
									}
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});
}

function fullpagescroll_propblk_init(){
	var lvtimer;
	for(var key in $.fullpagebackgroundPropDefaults){
		(function(){	
			var curkey=key;
			var otherfunc=null;
			if($.inArray(curkey,['fullpage_moveto_prevop','fullpage_moveto_nextop']) != -1){
				var innertxt ='', lvtype = '';
				switch(curkey){
					case 'fullpage_moveto_prevop':
						lvtype = 'top';
						innertxt = '<div class="wp-moveto_fstlevel"><a class="property-bar-top" href="###" title="'+translate('Move to top')+'"><span>&nbsp;</span></a></div>';
						break;
					case 'fullpage_moveto_nextop':
						lvtype = 'bottom';
						innertxt = '<div class="wp-moveto_lstlevel"><a class="property-bar-bottom" href="###" title="'+translate('Move to bottom')+'"><span>&nbsp;</span></a></div>';
						break;
				}
				otherfunc={
					mousedown:function(){
						var $target = $(this)
						var apos =$target.offset();
						var scrollctner=$('#scroll_container');
						var scrolltop=scrollctner.scrollTop();

						$(innertxt).appendTo(scrollctner).css({
							top: function(){
								return (apos.top+scrolltop - 25-39)+'px'
							},left: apos.left+'px'
						}).click(function(e){
							$('#'+$.bgselectedid).wp_setorder(lvtype,$.bgselectedid);
							$(this).remove();
							$target.removeClass('local');
							e.preventDefault();
						});

					},
					mouseup:function(){

					}
				}
			}
			$('#'+curkey).mousedown(function(e){
					var $target = $(this);	
					$target.addClass('local');
					if($('.wp-moveto_fstlevel,.wp-moveto_lstlevel').size()) $('.wp-moveto_fstlevel,.wp-moveto_lstlevel').remove();
					if(otherfunc != null){
						otherfunc.mousedown.apply(this);
					}
					e.preventDefault();
			}).mouseup(function(e){
					var self = this,$target = $(self);
					$target.removeClass('local');
					$.fullpagebackgroundPropDefaults[curkey].apply(this);
					if(otherfunc != null){
						otherfunc.mouseup.apply(this);
					}
					e.preventDefault();
			})
		})();
	}
}

(function($){
function fullpagegetAllParents(el){
	var parents={};
	parents[el.prop('id')]='null';
	var curel=el;
	while(true){
		var parentid=$.getElementFatherid(curel);
		if(parentid =='none') break;
		parents[parentid]=curel.prop('id');
		curel=$('#'+parentid);
	}
	return parents;
}

$.chooseBiggerColumn=function(existcolumnid,newcolumnid){
	var biggercolumnid=newcolumnid;
	if(existcolumnid==newcolumnid) return biggercolumnid;
	if(existcolumnid){
		var existcolumnel=$('#'+existcolumnid);
		var newcolumnel=$('#'+newcolumnid);
		
		var existcolumnfathers=fullpagegetAllParents(existcolumnel);
		var newcolumnfathers=fullpagegetAllParents(newcolumnel);
		var rootid='canvas';
		if(!existcolumnfathers[rootid])  rootid='site_footer';
		var existdifffather=rootid;
		var newdifffather=rootid;
		while(existdifffather == newdifffather){
			existdifffather =existcolumnfathers[existdifffather];
			newdifffather =newcolumnfathers[newdifffather];
			if(existdifffather=='null' || newdifffather=='null') break;
		}
		if(existdifffather=='null') biggercolumnid=newcolumnid;
		else if(newdifffather=='null') biggercolumnid=existcolumnid;
		else{
			var existfatherzindex=$.parseInteger($('#'+existdifffather).css('z-index'));
			var newfatherzindex=$.parseInteger($('#'+newdifffather).css('z-index'));
			if(existfatherzindex > newfatherzindex) biggercolumnid=existcolumnid;
		}
	}
	return biggercolumnid;
}	

$.transferToColumn=function(dom,fathercolid){
	var oldfatherid=$.getElementFatherid(dom);
	if(oldfatherid!=fathercolid){
		var newfatherel=$('#'+fathercolid);
		var domabpos=dom.ab_pos('top');
		var newfatherabpos=newfatherel.ab_pos('top');
		var domableft=dom.ab_pos('left');
		var newfatherl=newfatherel.ab_pos('left');
		var contentblock=newfatherel;
		if(fathercolid!='canvas'){
			if(newfatherel.is('.wp_droppable')){
				contentblock=newfatherel.children('.drop_box');
			}else contentblock=newfatherel.children('.full_content');
		}
		dom.detach().attr('fatherid',fathercolid).css({'top':(domabpos-newfatherabpos),'left':(domableft-newfatherl)}).appendTo(contentblock);
		if(fathercolid=='site_footer'||fathercolid=='canvas') dom.removeAttr('fatherid');
	}
}

$.getElementAreaInf=function(dom){
	return dom.attr('inbuttom')=='1'?'site_footer':'canvas';
}


$.addFullPagescroll=function(top){
    if($.wisplate){
        wp_alert(translate('fullpage.plate do not support add'));
        return false;
    }
    if($('.fullpage_alllist:not([deleted="deleted"])').length > 0){
        wp_alert(translate('fullpage.already plugin'));
        return false;
    }
    if($('.cstlayer[type="mads"]:not([deleted="deleted"])').length>0){
        wp_alert(translate('Multi-filter and fullpage.already plugin'));
        return false;
	}
    if($('.full_column:not([deleted="deleted"])').length > 0){
        wp_alert(translate('full_column.already Please remove'));
        return false;
    }
    //存在页脚元素时移除处理
    setTimeout(function(){
//    if($.wismobile){
    if($('#site_footer').length > 0){
        var fullpageClass='fullpage';
        if($.wismobile) fullpageClass='mfullpage';
        if (confirm(translate('fullpage.Please hide site_footer'))) {
                $.post(parseToURL(fullpageClass,"prosf"), {pid:$.page_id},function(response){
                    var o_result = $.parseJSON(response);
                    if(o_result.result == "OK") {
                        $('#site_footer').remove();
                    }else{
                        location.reload();
                        return false;
                    }
                }).error(function() {
                        location.reload();
                        return false;
                });
        }else{
            return false;
        }
    }
//    }
    },500)
         var successfunc=function(resp,needchangeid){
				var fullpagescrollhtml=resp;
				if(needchangeid){
					var fullpagescrollels=$(fullpagescrollhtml).filter('.full_pagescroll');
					var nowid=fullpagescrollels.prop('id');
					var newid='layer'+fGuid();
					fullpagescrollhtml=fullpagescrollhtml.replace(new RegExp(nowid,"g"),newid);
				}
				var fullpagescrollel=$(fullpagescrollhtml).appendTo('#canvas');
//				fullpagescrollel=fullpagescrollel.filter('.full_pagescroll');
                                fullpagescrollel.find('.full_pagescroll').each(function(){
                                    fullpagescrollinit($(this));
                                })
                                
				//初始化加截 默认模块内,内容模块加载样式
				fullpagescrollel.css('z-index',100);
				var titlecss=relativeToAbsoluteURL('plugin/title/css/title.css');
                                if($('body').data('title') !=titlecss){
						$('body').data('title',titlecss);
						var head = document.getElementsByTagName('head').item(0);
					    var css = document.createElement('link');
					    css.href = titlecss;
					    css.rel = 'stylesheet';
					    css.type = 'text/css';
					    head.appendChild(css);					 
				 }          
            
				$('.ui-modselected').each(function(){
					$.hidWidgetBorder($(this));
					// 图文模块相关 2012/2/14
					if($(this).hasClass('graphic_edited')) actived_graphic();
				});	
				$.fullpageunselectbgdiv(fullpagescrollel);
                                //显示属性 初始显示属性.ui-modselected绑定至第一屏上.再根id .fullpage_alllist初始存在问题
                                $.fullpageselectbgdiv(fullpagescrollel.find('.full_pagescroll:eq(0)'));
//                                $.showWidgetBorder(fullpagescrollel);
				new AddCommand(fullpagescrollel.prop('id')).insert();
				
				var objarray=new Array();
				objarray[0]=new Array(parseInt($('#'+fullpagescrollel.prop('id')).css('z-index')),fullpagescrollel.prop('id'));
				$.zindexsort_new(objarray);				
		}	
		//使用缓存有问题 停用
		if($.addFullPagescroll.html_cache){
			successfunc($.addFullPagescroll.html_cache,true);
			return;
		}
		
		$.ajax({
	        type: "GET",
	        url: parseToURL("wp_widgets","gtfullpagescroll"),
	        success: function(response){
//				$.addFullPagescroll.html_cache=response;
				successfunc(response,false);
			},
			error: function(xhr, textStatus, errorThrown){
				wp_alert((errorThrown||textStatus)+"(add a fullpagescroll).<br/>"+translate("Request failed!"));
				return false;
			}
	    });
           
}

$.curSelectableFather=function(){
	var selmods=$('.ui-modselected');
	if(selmods.length==0){
		$(document).data('cur_selectable_father',null);
		return null;
	}else{
		var fatherid=$.getElementFatherid(selmods.filter(':first'));
		$(document).data('cur_selectable_father',fatherid);
		return fatherid;
		
	}
}

$.getElementFatherid=function(dom){
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 'none';
	var fatherid=dom.attr('fatherid');
	if(!fatherid||fatherid==''){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
	}
	if(!$('#'+fatherid).length){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
		dom.removeAttr('fatherid');
	}
	return fatherid;
}


/*
$.fn.ab_pos=function(direct){
	var dom=$(this);
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 0;
	if(direct=='left'||direct=='top'){
		if(!dom.attr('fatherid')||dom.attr('fatherid')=='') return dom.rel_pos(direct);
		return dom.rel_pos(direct)+$('#'+dom.attr('fatherid')).ab_pos(direct);
	}
}

$.fn.ab_pos_cnter=function(direct){
	var abpos=$(this).ab_pos(direct);
	if($(this).closest('#site_footer').length>0&&direct=='top'){
		return abpos+$.parseInteger($('#site_footer').css(direct));
	}
	return abpos;
}

$.fn.rel_pos=function(direct){
	if(direct=='left'||direct=='top'){
		return $.parseInteger($(this).css(direct));
	}
}
*/
$.getFullColChildMaxButtomfullpage=function(dom){
		var parenttoppos=dom.ab_pos_cnter('top');
		var maxbuttompos=parenttoppos;
		dom.find('.cstlayer,.full_pagescroll').each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos-parenttoppos;
	
}

$.getFullPagescrollButtomPos=function(dom){
	if(dom.hasClass('cstlayer')){
		return $.divrotate.getDegreeModMaxPoint(dom,null,'buttom');
	}else if(dom.hasClass('full_pagescroll')){
		var maxbuttompos=0;
		dom.find('.cstlayer,.full_pagescroll').andSelf().each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos;
	}
}


$.saveFullPagescrollObj=function(dom){
	var footerheight=dom.height();
	var otherparam={};
	if(dom.prop('id') != 'site_footer') otherparam={fullpageext:dom.data('fullpageext'),top:$.parseInteger(dom.css('top'))};
	return $.extend({
		footerheight:footerheight
	},otherparam);
}
$.fullpagecanvasleft=function(){
    if($(window).width()<=$('#canvas').width()) return '0';
    else return ($(window).width()-$('#canvas').width())/2;
}
//fullpage 切屏图片自适应处理
$.wp_fullpagezoom=function(dom,size,originalSize,status){
        // 获取padding或border信息
        var $target = dom;
        var extw = 0,exth = 0,neww = size.width,newh = size.height;
        // 获取缩放信息
        var $img = $target.find('.fullimgc');
        $img.css("position", 'relative');// fixed bug#4459
        var lastw = neww - extw,lasth = newh - exth;
        var difw = neww - originalSize.width,difh = newh - originalSize.height;
        // 自适应处理
        var curdifw = 0,curdifh = 0;
        if (difw || (difw > difh)) {
                $img.width(lastw).height('auto');
                // 自动修复高度
                curdifh = lasth - $img.height();
//                if(curdifh < 0) $img.css({top:Math.ceil(curdifh/2)+'px',left:'0px',position:'relative'});
                if(curdifh < 0) $img.css({top:Math.ceil(curdifh/2)+'px',left:'0px'});
                else if(curdifh > 0){
                        $img.height(lasth).width('auto');
                        curdifw = lastw - $img.width();
//                        $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px',position:'relative'});
                        $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px'});
                }else $img.css({top:'',left:'',position:''});
        } else if (difh || (difw < difh)) {
                $img.height(lasth).width('auto');
                // 自动修复宽度
                curdifw = lastw - $img.width();
                //if(curdifw < 0) $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px',position:'relative'});
                if(curdifw < 0) $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px'});
                else if(curdifw > 0){
                        $img.width(lastw).height('auto');
                        curdifh = lasth - $img.height();
                        //$img.css({top:Math.ceil(curdifh/2)+'px',left:'0px',position:'relative'});
                        $img.css({top:Math.ceil(curdifh/2)+'px',left:'0px'});
                }else $img.css({top:'',left:'',position:''});
        }
}
//判断浏览（PC｜手机）
$.wp_fullpag_mobile=function(){
    return (/iphone|ipod|ipad|Macintosh|android|Windows phone/i.test(navigator.userAgent.toLowerCase()));
}

//初始化resize 第一屏自适应处理 手机预览，编辑不处理
setTimeout(function(){
    if($.wismobile&&$.wisviewmode){}else{
        var maxjson = {width:320,height:$(window).height()};
        if(!$.wiseditmode){
            maxjson = {width:$(window).width(),height:$(window).height()};
            var fullnode = $('.fullpage_alllist');
            var $paragraph_image = fullnode.find('.section.active .bg > img');
            //var maxjson = {width:$(window).width(),height:$(window).height()};
            var json = {width:0,height:0};
            $.wp_fullpagezoom(fullnode,maxjson,json,'noresize');
        }
    }
},800);

})(jQuery);
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function openImageChooserDialog(options){
		window._imageChooserDefered=new $.Deferred();
		options=$.extend({},options);
		var title=options.title||translate('fileManager.selectImage');
		var width=options.width||850;
		var filetype=options.filetype||'pic';
		var dialogid=options.id||'wp-picmanage_panel';
		var zindex=options.zIndex||1003;
        var multi=options.multi||0;
        var mask = options.overlay;
		if (typeof mask === 'undefined') mask = true;
		//show_dialog(parseToURL("wp_widgets","common_pic_chooser",{filetype:filetype}), title,width, 0);
		wp_floatpanel(parseToURL('wp_widgets','common_pic_chooser',{filetype:filetype,multi:multi}),{
			title: title,
			id: dialogid,
			width: width,
			overlay: mask,
			isCenter: true,
			swfFix: true,
			zIndex: zindex
		});
		if(!options.cancelNotCloseDialog){
			window._imageChooserDefered.fail(function(){
				$.modal.close();
			})
		}
		
		return window._imageChooserDefered.promise();

}

// Add 'link to file' function 2013/02/25
function openMyDocChooserDialog(options){
	window._myDocChooserDefered = new $.Deferred();options = $.extend({},options);
	var title = options.title||translate('fileManager.myFile'),dwidth = options.width||850,icenter = options.isCenter||true,
	dialogid = options.id||'wp-file_explore',zindex = options.zIndex||1003,mask = options.overlay;
	if (typeof mask === 'undefined') mask = true;
	wp_floatpanel(parseToURL('wp_fileexplore', 'file_explore', {"geturl": '1'}), {swfFix: true,
		title: title,width: dwidth,isCenter: icenter,id: dialogid,zIndex: zindex,overlay: mask
	});
	return window._myDocChooserDefered.promise();
}

function transferToPageSetDialog(showdiv,hidediv,options){
		window._pagesetDefered=new $.Deferred();
		options=$.extend({},options);
		var dialogwin=window;
		if(options.iframe) dialogwin=parent;
		var title=options.title||translate('page.add');
		var mode=options.mode||'create';
		var url ='';
		if(mode=='edit'){
			var pageid=options.pageid;
			url =parseToURL("wp_page","editpage",{id:pageid});
		}else{
			var additionparam=options.createparam||{};
			url =parseToURL("wp_page","addpage",additionparam);
		}
		$.get(url, function(data) {	
			$(showdiv).html(data).show();
			$(hidediv).hide();
			wp_update_floatpanel($('#wp-manage_menu'),title,376,function(dom){
				dom.find('.wp-panel_button').hide();
				dom.find('#page_set_prop_div .wp-panel_button').show();
			});
		}).error(function(xhr, textStatus, errorThrown) { 
			wp_alert((errorThrown||textStatus)+"(edit/add a page).<br/>"+translate("Request failed!")); 
		})
		return window._pagesetDefered.promise();
}

function transferToPageSetDialogcur(showdiv,hidediv,options){
		window._pagesetDefered=new $.Deferred();
		options=$.extend({},options);
		var dialogwin=window;
		if(options.iframe) dialogwin=parent;
		var title=options.title||translate('page.add');
		var mode=options.mode||'create';
		var url ='';
		var pageid=options.pageid;
		var modact=options.modact||'navigation';
		
		
		var page_id=options.page_id;
		var supid=options.blockid;

		if(mode=='edit'){			
			url =parseToURL(modact,"editpage",{id:pageid,page_id:page_id,blockid:supid});
		}else{
			var additionparam=options.createparam||{};
			url =parseToURL(modact,"addpage",{page_id:page_id,blockid:supid,parentid:pageid});
		}
		$.post(url, {menudata:$("#"+supid).data("menudata")}, function(data) {									
				$(showdiv).html(data).show();
				$(hidediv).hide();
				/*
				dialogwin.$('#osx-container').css('width',500);
				if(options.iframe) dialogwin.$('#osx-modal-data').find('iframe').width(500).height(480);
				dialogwin.$("#osx-modal-title").data('origin_title',dialogwin.$("#osx-modal-title").html());
				dialogwin.$("#osx-modal-title").html(title);
				dialogwin.$.modal.setPosition();
				*/
		}).error(function(xhr, textStatus, errorThrown) { 
			wp_alert((errorThrown||textStatus)+"(edit/add a navigation page).<br/>"+translate("Request failed!")); 
		})
		return window._pagesetDefered.promise();
}

function openPageSetDialog(options){
		window._pagesetDefered=new $.Deferred();
		options=$.extend({},options);
		var title=options.title||translate('page.add');
		var width=options.width||400;
		var mode=options.mode||'create';
		var url ='';
		if(mode=='edit'){
			var pageid=options.pageid;
			url =parseToURL("wp_page","editpage",{id:pageid});
		}else{
			width = 400;
			var opts={};
			if(options.mtype) opts._mtype=options.mtype;
			if(options.parentid) opts.parentid=options.parentid;
			url =parseToURL("wp_page","addpage",opts);
		}
		//show_dialog(url, title,width, 0);
		wp_floatpanel(url,{
			title: title,
			contentClass: 'wp-site-set_panel_c',
			id: 'wp-add_page',
			overlay: true,
			isCenter: true,
			width: width,
			zIndex: 1002,
			cache:false,
			open: function(dom){
				if(options.callback && $.isFunction(options.callback)){
					$(dom).bind('addPageLink',function(e,url){
						options.callback(url);
					});
				}
			}
		});
		if(!options.cancelDefaultOp){
			window._pagesetDefered.done(function(data){
				if(data.refresh){
			
					$.saveLayout.save(true);
					window.location.reload();
					 $('#wp-add_page').triggerHandler('wpdialogclose');
				}else{
					setTimeout(function(){
						$.saveLayout.save(true);
						window.location.href=data.forward;
					},100);
				}
			})
			window._pagesetDefered.fail(function(){
				$('#wp-add_page').triggerHandler('wpdialogclose');
			})
		}
		
		return window._pagesetDefered.promise();

}

// 创建“文章/产品分类、列表”链接相关 2012/07/16
function setModuleLink(mtype,callback){
	openPageSetDialog({"mtype":mtype,"callback":callback});
}

// IFRAME自适应高度 2012/07/12
function initFrame(frame,contentClass,height){
	var self = frame,bh = self.contentWindow.document.body.scrollHeight,
	dh = self.contentWindow.document.documentElement.scrollHeight,max = Math.max;
	var $parent = $(self).closest('.wp-floatpanel_dialog'),otherh = 0,temph = max(bh,dh);
	temph+=1;
	if($.browser.msie){
		temph = temph+25;
	}
	$parent.find('.'+contentClass).siblings().each(function(i,dom){
		otherh += $(dom).outerHeight(true);
	});
	var _float = function(numString){
		var number = parseFloat(numString);
		if(isNaN(number)) return 0;
		return number;
	};
	var seth = _float(height),maxh = seth ? seth : $(document).height(),
	difw = maxh - otherh - 10;// 上下间隔5像素
	if(difw < temph) temph = difw;
	frame.height = max(temph,200);
	$(self).closest('.wp-floatpanel_dialog').triggerHandler('wpdialogsetpos');
}

(function($){
	var cachedtimer={};
	$.multi_exec_once=function(key,func,interval){
		var timer=cachedtimer[key];
		if(timer != null){
			clearTimeout(timer);
			delete cachedtimer[key];
		} 
		timer=setTimeout(func, interval);
		cachedtimer[key]=timer;
	}
	
	// 注册beforeLoaded方法 2012/07/11
	var loadedhash = {};
	$.beforeLoaded = {
		add: function(type, event, func){
			if ($.isFunction(func)) {
				if(!loadedhash[type]) loadedhash[type] = {};
				loadedhash[type][event] = func;
			}
		},
		run: function(type, event, data){
			var func = loadedhash[type];
			if(typeof func == 'undefined') return false;
			func = func[event];
			if($.isFunction(func)) return func(data);
			return false;
		}
	};
})(jQuery);
	
// 更新并定位浮动窗口
function wp_update_floatpanel(dom, title, width, callback){
	var $title = dom.find('.wp-title > h2'),curtitle = $title.html();
	dom.width(width);
	if(title) $title.data('origin_title',curtitle);
	else title = curtitle;
	$title.html(title);
	if(callback && $.isFunction(callback)) callback(dom);
	// setPosition
	var win = window,winw = $(win).width(),winh = $(win).height(),
	floor = Math.floor,newh = dom.outerHeight(true);
	dom.css({'left': floor((winw-width)/2),'top': floor((winh-newh)/2)});
}

/**
 * 个性化下拉框
 */
;(function($,undefined){
	var namespace = '.wpcstselect';
	$.widget('wp.cstselect',{
		options : {
			selectclass:'wp-diy-selected'//样式
		}, // 配置项
		_create : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			// 忽略多选的SELECT控件
			if(self.element.prop("multiple")) return;
			self._doinit(self).done(function(dom,selopts){
				var $ctarget = dom,$diysel = $ctarget.next('.'+selectclass+'-outside').find('.'+selectclass+'');
				// 设置默认值
				setTimeout(function(){
					var $cursel = $diysel.children('.'+selectclass+'-left'),difw = $cursel.siblings('.'+selectclass+'-button').outerWidth() + 2,
					pad = self._int($cursel.css("paddingLeft")) + self._int($cursel.css("paddingRight")),finalw = $diysel.width() - difw - pad + 1;
					if (finalw <= 0) finalw = Math.max(65, $ctarget.width()) - pad - 16;
					$cursel.width(finalw).attr("val",$ctarget.val()).html($ctarget.find('option:selected').html());$cursel = difw = finalw = null;
				},50);
				// 绑定CLICK事件
				$diysel.bind('click'+namespace,function(e){
					if(self.options.disabled || !selopts.length) return;
					var $selectedcnt = $(selopts).appendTo('body'),maxheight = $selectedcnt.outerHeight(true);
					self._selected($selectedcnt, $ctarget.val()); // 设置默认值
					// 绑定LI:HOVER及CLICK事件
					if ($selectedcnt.is(':hidden')) {
						var $target = $(this);
						$selectedcnt.find('li').bind('mouseenter'+namespace, function(e){
							$(this).addClass('local').siblings().removeClass('local');
						}).bind('mouseleave'+namespace, function(e){
							$(this).removeClass('local');
						}).bind('click'+namespace, function(e){
							var $li = $(this),selval = $li.attr("val");
							$target.children('.'+selectclass+'-left').html($li.html()).attr("val", selval);
							$ctarget.val(selval).trigger('change');// 捕获已绑定SELECT事件
						}).end().slideDown('slow',function(){
							var $selcnt = $(this);
							// 定位滚动条 2012/11/09
							var selcnt = $selcnt[0],clienth = selcnt.clientHeight,$selected = $selcnt.find('li.local');
							if ($selected.size() > 0) {
								var seltop = $._parseFloat($selcnt.css("top")),
								litop = seltop + $selected[0].offsetTop - selcnt.offsetTop + $selected.height();
								if(clienth < litop) selcnt.scrollTop = litop - clienth;
							}
							// End
							$(document).one('click'+namespace,function(e){
								$selcnt.slideUp().remove();
								return false;
							});
						});
						setSeloptsPos($target,$selectedcnt,maxheight);
						// 绑定RESIZE事件
						$(window).resize(function(){
							setSeloptsPos($target,$selectedcnt,maxheight);
						});
					}
				});
				function setSeloptsPos(target,dom,maxh){
					var $target = target,pos = $target.offset();
					dom.css({
						"top": function(i,val){
							var wnh = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,
							_top = self._int(pos.top),_oh = $target.outerHeight(true),newtop = 0;
							if (wnh < _top + maxh + _oh) {
								newtop = Math.max(0, _top - maxh - 1);
								$(this).css({"border-bottom": 'none',"border-top": '1px solid #B5B5B5'});
							} else newtop = _top + _oh + 1;
							wnh = _top = _oh = null;
							return newtop+'px';
						},"left": function(i,val){
							return self._int(pos.left)+'px';
						}
					});
				}
			});
		},
	    value : function(value){
	    	var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $target = self.element,$select = $target.next('.'+selectclass+'-outside');
	    	$target.val(value);
	    	$select.find('.'+selectclass+'-left').attr("val",value).html($target.children('option:selected').html());
	    },
		_doinit : function(dom){
			var dtd = $.Deferred(),self = dom,$target = self.element;
			var selectclass=self.options.selectclass,_stripslashes = function(str){
				return (str + '').replace(/\\(.?)/g, function(s, $1){
				    switch ($1) {
				    	case '\\': return '\\';
				    	case '0': return '\u0000';
				    	case '': return '';
				    	default: return $1;
				    }
			  	});
			};
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			$target.hide();// 隐藏SELECT控件
			// 自定义类SELECT
			var selopt = '',selw = Math.max($target.width(), 65);
			var selhtm = '<div class="'+selectclass+'-outside overz" style="float:left;width:'+selw+'px;"><div class="'+selectclass+'">';
			$target.children('option').each(function(i,c){
				var self = c;
				selopt += '<li val="'+self.value+'">'+_stripslashes(self.innerHTML)+'</li>';
			});
			selhtm += '<div class="'+selectclass+'-left" val="0">&nbsp;</div><div class="'+selectclass+'-button"><a href="###" onclick="return false;"></a></div></div></div>';
			$target.after(selhtm);
			dtd.resolve($target,'<div class="'+selectclass+'-content overz" style="width:'+(selw-2)+'px;"><ul>'+selopt+'</ul></div>');
			return dtd.promise();
		},
		_int : function(numstr){
			var number = parseInt(numstr);
			if(isNaN(number)) return 0;
			return number;
		},
		_selected : function(dom,value){
			dom.find('li').each(function(i,c){
				var $target = $(c),ent = '';
				ent = ($target.attr("val") == value)?'addClass':'removeClass';
				$target[ent]('local');
			});
			return true;
		},
		enable : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $select = self.element.next('.'+selectclass+'-outside');
			$select.find('.'+selectclass+'-left').css("color","#5A5A5A");
			$select.find('.'+selectclass+'-button > a').removeClass('disabled');
			$.Widget.prototype.enable.call(self);
		},
		disable : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $target = self.element,$select = $target.next('.'+selectclass+'-outside');
			// 还原SELECT控件默认值
			var firstopt = $target.find('option')[0];
			$target[0].selectedIndex = 0;
			$select.find('.'+selectclass+'-left').css("color","#7C7C7C").attr("val",firstopt.value).html(firstopt.innerHTML);
			$select.find('.'+selectclass+'-button > a').addClass('disabled');
			$.Widget.prototype.disable.call(self);
		},
		destroy : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			$(document).unbind(namespace);
			self.element.next('.'+selectclass+'-outside').unbind(namespace).remove();
			$.Widget.prototype.destroy.call(self);
		}
	});
})(jQuery);

/**
 * 文本框绑定的事件
 * event(参数) - 触发回调的本地事件对象
 * -> onkeydown: function(event){
 * -> 	// do something
 * -> }
 * -> onkeyup: function(event){
 * -> 	// do something
 * -> }
 * -> onchange: function(event){
 * -> 	// do something
 * -> }
 * -> onfocus: function(event){
 * -> 	// do something
 * -> }
 * -> onblur: function(event){
 * -> 	// do something
 * -> }
 */
;(function($,undefined){
	var readyToOnBlur = true,
	  eventNamespace = '.wpcstinput';
	
	$.widget('wp.cstinput',{
		options : {
			value : '', // 文本默认值,
			regexp : /^\d+(\.\d+)?$/, // 输入值验证正则
			range : [0], // 可输入值范围[min,max](大于0)
			maxlength : 4, // 可输入值长度
			unit : 'px', // 可输入值单位(像素)
			step : 1, // 递增/减步长
			style : '', // 显示区域样式
			nmnode_style : '', // 文本框父节点样式
			btnnode_style : '', // 箭头父节点样式
			upbtn_style : '', // 上箭头节点样式
			downbtn_style : '', // 下箭头节点样式
			complete : function(){} // 方向键的回调函数(第一个参数为当前对象,第二个参数为递增/减的值)
		},
			
		_create : function(){
			var $this = this,
			  $input = $this.element,
			  options = $this.options;
			var uistyle = (options.hasOwnProperty('style') && options.style.length) ? ' style="'+options.style+'"' : '',
			nmstyle = (options.hasOwnProperty('nmnode_style') && options.nmnode_style.length) ? ' style="'+options.nmnode_style+'"' : '',
			btnstyle = (options.hasOwnProperty('btnnode_style') && options.btnnode_style.length) ? ' style="'+options.btnnode_style+'"' : '',
			upstyle = (options.hasOwnProperty('upbtn_style') && options.upbtn_style.length) ? ' style="'+options.upbtn_style+'"' : '',
			downstyle = (options.hasOwnProperty('downbtn_style') && options.downbtn_style.length) ? ' style="'+options.downbtn_style+'"' : '';
			$input.wrap('<div class="wp_cstinput_helper"'+uistyle+' unselectable="on"><div class="nminput_helper"'+nmstyle+' unselectable="on"></div>'
			+'<div class="minplus_helper"'+btnstyle+' unselectable="on"><span class="up"'+upstyle+' unselectable="on"></span><span class="down"'+downstyle+' unselectable="on"></span></div></div>');
			// Default value
			if(options.hasOwnProperty('value') && options.regexp.test(options.value)) $input.focus().val(options.value);
			// Maxlength
			if(options.hasOwnProperty('maxlength') && /^[1-9]{1}\d*$/.test(options.maxlength)) $input.attr('maxlength',options.maxlength);
			// Unit(像素)
			if(options.hasOwnProperty('unit') && options.unit.length)
			  $input.closest('.wp_cstinput_helper').after('<div class="wp_cstunit_helper" unselectable="on">'+options.unit+'</div>');
			
			// Bind input events
			$.each(['keydown','keyup','change','focus','blur'],function(i,event){
				$input.bind(event+eventNamespace,function(e){
					if(!readyToOnBlur && (event == 'blur')) return false;
					$this._trigger('on'+event, e, null);
				});
			});

			// Bind buttons events
			var $buttons, upbtn, downbtn;
			$buttons = $this.buttons = $input.closest('.wp_cstinput_helper').find('.minplus_helper > span');
			upbtn = $buttons[0];
			downbtn = $buttons[1];
			$buttons.mousedown(mouseDown).mouseup(mouseUp).mouseout(mouseUp);
			
			function mouseDown(){
				if(options.disabled) return;
				var step = (this === upbtn) ? options.step : -options.step;	
				$input.focus();
				$input.select();
				
				readyToOnBlur = false;
				$this._doCount(step);
				return false;
			}
			
			function mouseUp(){
				if (!readyToOnBlur) {
				//	$this._stopCount();					
					readyToOnBlur = true;
				}
				return false;
			}
		},
		
		_doCount : function(step){
			var newval,
			  range = this.options.range,
			  curval = this.element[0].value;
			if(!curval.length){ 
				// input值为空时，点击值变为0 leiminglin 2014/4/22 
				curval = this.element[0].value = 0;
			}
			newval = this._parseValue(curval) + step;
			// 范围限定
			if ($.isArray(range) && (range.length > 0)) {
				var min,max;
				if(typeof range[0] != 'undefined') min = range[0];
				if(typeof range[1] != 'undefined') max = range[1];
				// 溢出判断
				if((step < 0) && (typeof min === 'number') && (newval < min)) newval = min;
				if((step > 0) && (typeof max === 'number') && (newval > max)) newval = max;
			}
			this.element[0].value = newval;
			// 绑定方向键的回调函数
			if($.isFunction(this.options.complete)) this.options.complete(this.element,newval);
		},
			
		_parseValue : function(numString){
			var number = parseFloat(numString);
			if(isNaN(number)) return 0;
			return number;
		},
		
		enable : function(){
			this.buttons.removeClass('cstinput_disabled');
			$.Widget.prototype.enable.call(this);
		},
		
		disable : function(){
			this.buttons.addClass('cstinput_disabled');
			$.Widget.prototype.disable.call(this);
		},
		
		destroy : function(){
			var $this = this.element,
			  $cstinput_helper = $this.closest('.wp_cstinput_helper');
			$this.removeAttr('maxlength').unbind(eventNamespace);
			$cstinput_helper.before($this[0]);
			$cstinput_helper.siblings('.wp_cstunit_helper').remove().end().remove();
			$.Widget.prototype.destroy.call(this);
		}
	});
})(jQuery);

// 自定义垂直滚动条 2014/02/07
;(function($, undefined){
	var namespace = 'simroll',
	getMscrollWidth = function(){
		var noScroll,scroll,oDiv = document.createElement("DIV");
		oDiv.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px;overflow:hidden;";
		noScroll = document.body.appendChild(oDiv).clientWidth;
		oDiv.style.overflowY = "scroll";
		scroll = oDiv.clientWidth;
		document.body.removeChild(oDiv);
		return noScroll - scroll;
	};
	$.widget('wp.mscroll', {
		options : {
			difleft: 0,/*滚动条自定义偏移量*/
			maskleft: 0,/*滚动条遮罩层left*/
			barleft: 0,/*滚动条滑块left*/
			height: 0,/*滚动条height*/
			maskbg: '#fff',
			maskcname: 'wp-mobile-device-mask',/*滚动条遮罩层class*/
			barcname: 'wp-mobile-scrollbar'/*滚动条滑块class*/
		},
		_create : function(){
			var self = this,creatid = '-'+self._getRandomStr(),maskbg = (self.options.maskbg||'').length?'background:'+self.options.maskbg:'',
			barstr = '<div id="'+namespace+creatid+'-mask" class="'+self.options.maskcname+'" style="'+maskbg+'"></div>';
			barstr += '<div id="'+namespace+creatid+'-bar" class="'+self.options.barcname+'"><span class="pane"></span></div>';
			self.options.creatid = creatid;
			self.element.before(barstr);
			self._setScrollPos(creatid);
			self._bindScroll(creatid);
		},
		_setScrollPos : function(id){
			var prefid = namespace+id,barleft = 0,self = this,$target = self.element,
			$mask = $target.prevAll('#'+prefid+'-mask'),$bar = $target.prevAll('#'+prefid+'-bar');
			$mask.add($bar).css({"left": function(){
				var curtype = $(this).attr("id").replace(prefid+'-', '');
				if (self.options[curtype+'left']) barleft = self.options[curtype+'left'];
				else {
					var swidth = getMscrollWidth() || 16;
					barleft = self._parseFloat($target.css("left")) + $target.width() - swidth;
				}
				return barleft+'px';
			},"height": ($target.height() + 1)+'px',"visibility": 'visible'});
			$bar.css("left", function(){return (barleft + self._parseFloat(self.options.difleft||0))+'px'});
		},
		_bindScroll : function(id){
			var self = this,$target = self.element,$bar = $target.prevAll('#'+namespace+id+'-bar'),paneH = 0,
			$spane = $bar.children('span.pane'),containerH = $target.height(),paneContainerH = 0;
			$target.bind("scroll."+namespace, function(e){
		  		var contentH = this.scrollHeight;$bar.height(self.options.height||containerH);
		  		if (containerH < contentH) paneH = self._parseFloat(containerH*containerH / contentH);
		  		$spane.height(paneH);
		  		var maxtop = containerH - paneH,
		  		movey = self._parseFloat(this.scrollTop * containerH / contentH);
		  		$spane.css("top", Math.min(movey, maxtop)+'px');
		  	}).triggerHandler("scroll."+namespace);
			// Pane Handler
		  	(function(){
		  		var curtop,curpagey;
		        $spane.bind("mousedown."+namespace, function(e){
		            e.preventDefault();curpagey = e.pageY;
		            curtop = self._parseFloat($spane.css("top"));
		            $spane.addClass("scrolling");
		            $(document).bind("mousemove."+namespace, function(e){
			        	if (! $spane.hasClass("scrolling")) return;
			        	var newtop = curtop + e.pageY - curpagey,panetop = Math.max(0, newtop),
			        	target = $target.get(0),contentH = target.scrollHeight;
			        	// Reset pane-top
			        	var scrltop = self._parseFloat(panetop * contentH / containerH),
			        	maxtop = containerH - $spane.height();
			        	if (panetop >= maxtop) scrltop = contentH - target.clientHeight;
			        	$target.scrollTop(scrltop);return false;
			        }).bind("mouseup."+namespace, function(e){
			        	e.preventDefault();$(document).unbind("."+namespace);
			        	$(parent.document).unbind(".rmscroll");
			        	if (! $spane.hasClass("scrolling")) return;
			        	$spane.removeClass("scrolling");
			        });
			        $(parent.document).bind("mouseup.rmscroll",function(){$(document).unbind("."+namespace)});
		        }).bind("mouseup."+namespace, function(e){
		        	$(document).unbind("."+namespace);
		        	$(parent.document).unbind(".rmscroll");return false;
		        });
		  	})();
		},
		_getRandomStr : function(len){
		    len = len || 16;
		    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		    maxlen = chars.length,result = '';
		    for(var i = 0; i < len; i++){
		        result += chars.charAt(Math.floor(Math.random() * maxlen));
		    }
		    return result;
		},
		_parseFloat : function(numstr){
			var number = parseFloat(numstr);
			if (isNaN(number)) return 0;
			return number;
		},
		destroy : function(){
			var self = this,prefid = '#'+namespace+self.options.creatid;
			$(document).add(self.element).unbind("."+namespace);
			self.element.prevAll(prefid+'-mask,'+prefid+'-bar').remove();
			$.Widget.prototype.destroy.call(self);
		}
	});
})(jQuery);

//js生成guid
function fGuid(bOrg)
{
//	 try
//	 {
//		 var sGuid=new ActiveXObject('scriptlet.typelib').GUID
//	 } 
//	 catch(e)
//	 { 
//		 var sGuid=fGuidCst();
//	 }
	 var sGuid=fGuidCst();
	 if(bOrg) return sGuid;
	 return (sGuid+'').replace(/\{|\}|-/g,'');
	 
	 function fGuidCst()
	 {
		  var sGuid='';
		  for(var i=1; i<=32; i++)
		  {
			   var nNum=0;
			   nNum=parseInt(Math.random()*16);
			   sGuid+=nNum.toString(16);
			   if(i==8||i==12||i==16||i==20)sGuid+='-';
		  }
		  return '{'+sGuid.toUpperCase()+'}';
	 }
}

(function(window){
	/**
	 * 对话框缓存ajax请求
	 */
	var html_caches={};
	// 对话框ID
	var dialog_ids = [];
	
	/**
	 * Float对话框
	 * (String)load_url - 加载的地址
	 * (Object)option - 配置项(title|titlebg|contentClass|id|width|height|left|top|isCenter|overlay|showBottom|zIndex|open|close)
	 */
	function wp_floatpanel(load_url,option){
		var config = $.extend({},{
			title: 'Title',
			titlebg: true,
			contentClass: 'wp-panel_outpadding',
			id: 'wp-float_panel',
			width: 286,
			height: 'auto',
			left: 5,
			top: 60,
			isCenter: false,
			overlay: false,
			isIframe: false,
			contain:$('body'),
			zIndex: 1000,
			showBottom: false,
			cache: true,
			postbody:false,
			swfFix: false,
			open: function(){
				var id = this.id;
				id && dialog_ids.push(id);
			},
			close: function(){},
			data: option['data']||"{}",
		},option||{});
		// Remove old panel
		var pnl,$pnl,wp_timer,id = config.id,$target = id?$('#'+id):$('.wp-floatpanel_dialog'),$contain=config.contain;
		// Init parameters
		var rgx = /^\d+$/i,plw = config.width,plh = config.height,pllt = config.left,pltp = config.top,cc = config.contentClass,
		ct = config.isCenter,ol = config.overlay,z = config.zIndex,sm = config.showBottom,isfrm = config.isIframe;
		if (!$target.size()) {
			// Init overlay
			var ols = '';
			if (ol) {
				var $overlay = $('#wp-floatpanel_overlay');
				if($overlay.size() > 0) $overlay.remove();
				ols = '<div id="wp-floatpanel_overlay" style="z-index:'+z+';"></div>';
				z += 1;
			}
			// Show or not bottom
			var sms = '';
			if (sm) {
				sms += '<div class="wp-show_allpage"><input type="checkbox" name="show_allpage" value="" /><span>'+translate('property.showInBottom')+'</span></div>'
				+ '<div class="wp-coordinate"><span>x:<input type="text" name="xpos" value="0" id="xpos" /></span>'
				+ '<span>y:<input type="text" name="ypos" value="0" id="ypos" /></span>'
				+ '<span class="wp-coordinate-w">w:<input type="text" name="xwidth" value="0" id="xwidth" /></span>'
				+ '<span>h:<input type="text" name="xheight" value="0" id="xheight"/></span>'
				+ '<span class="wp-coordinate-lock overz"><img src="'+relativeToAbsoluteURL('template/default/images/un-lock.png')+'" width="16" height="15" /></span></div>';
			}
			// Loading area
			var $tmpwin = $(window),$load = $('#wp-floatpanel_loading'),loadstr = '<div id="wp-floatpanel_loading" style="z-index:'+(z-1)+';"><img src="'+relativeToAbsoluteURL('template/default/images/loading.gif')+'" width="16" height="16" /></div>';
			if($load.size() > 0) $load.remove();
			// Create panel
			var superid = $.options ? $.options.superid : 0;
			//<img src="'+relativeToAbsoluteURL("template/default/images/wp-help_icon.png")+'" width="16" height="16" class="wp-help" />
			var $ap = $('<div id="'+id+'" class="wp-floatpanel_dialog wp-manage_panel overz" style="display:none;position:absolute;z-index:'+z+';" belong="'+(superid||null)+'"><div class="wp-title overz'+(config.titlebg?' wp-title_black':'')+'"><h2>'+config.title+'</h2>'
			+'<div class="wp-icon" style="width:19px;"><a href="javascript:;" class="close"></a></div></div>'
			+'<div class="'+cc+' overz"></div>'+sms+'</div>'+ols+loadstr).appendTo($contain);
			pnl = $ap[0];$pnl = $(pnl);
			// Loading position
			var winWidth = $tmpwin.width(),pnlWidth = $pnl.width();
			$('#wp-floatpanel_loading').width(winWidth).height($tmpwin.height());
			// Events
			$pnl.draggable({handle: '.wp-title',cancel: '.wp-icon',cursor: 'move',scroll: false,iframeFix: true,start: function(e,ui){
				var $target = $(this),titleH = $target.find('.wp-title').outerHeight();
				$('.wp-diy-selected-content').slideUp().remove();// 拖拽弹窗时注销“自定义SELECT下拉框” 2012/11/09
				// SWF object ghost lines
				if (config.swfFix) {
					var $swf = $target.find('object');
					if ($swf.length > 0) {
						$swf.parent().data("wpswfsize",{"width": $swf.width(),"height": $swf.height()});
						$swf.css({"height": '0',"width": '0',"visibility": 'hidden'});
					}
					$swf = null;
				}
				if ($target.find('iframe').length > 0) {
					var $innerfrm = $target.find('.ui-resizable-innerIframeFix');
					($innerfrm.length > 0) && $innerfrm.remove();
					$('<div class="ui-resizable-innerIframeFix" style="background-color:#FFF;"></div>').css({
						left: 0,top: titleH+'px',position: 'absolute',opacity: '0.001',zIndex: 1000,
						width: $target.width()+'px', height: ($target.height() - titleH)+'px'
					}).appendTo($target);
				}
			},drag: function(e,ui){
				var pos = ui.position;// 防溢出 2012/10/29
				if(pos.top < 0) pos.top = 0;
				if(pos.left <0) pos.left = 0;
				if(winWidth < pnlWidth + pos.left) pos.left = winWidth - pnlWidth;
			},stop: function(){
				var $innerfrm = $('.ui-resizable-innerIframeFix', this);
				($innerfrm.length > 0) && $innerfrm.remove();
				// SWF object ghost lines
				if (config.swfFix) {
					var $swf = $(this).find('object');
					if ($swf.length > 0) {
						var $swfprt = $swf.parent(),swfsize = $swfprt.data('wpswfsize');
						$swf.css({"height": (swfsize.height||24)+'px',"width": (swfsize.width||82)+'px',"visibility": 'visible'});
						$swfprt.removeData('wpswfsize');$swfprt = swfsize = null;
					}
					$swf = null;
				}
			}}).bind('wpdialogclose',function(e){
				$pnl = {};// 注销$pnl对象
				clearTimeout(wp_timer);
				var dom = $(e.target);
				var dialogid = dom.attr("id")||'',
				cancelarr = ['wp-add_page','wp-page-obj-chooser','wp-file_explore','wp_settemplate',
					'wp-filecategory_panel','wp-manage_plugins','wp_multilang_setting','wp-backup',
					'wp-page_setting','wp-seo_setting','wp-watermark_setting','wp-mobile_setting',
					'wp-add_template','wp-ask_page_name','wp-page_save'];
				if(ol) dom = dom.add('#wp-floatpanel_overlay');
				if($.isFunction(config.close)) config.close(dom[0]);
				$(document).trigger('click');//IE8中无法移除cstselect插件的div.wp-diy-selected-content
				// Set storage-data
				for(var i = 0,l = dialog_ids.length;i < l;i++){
					if (dialog_ids[i] == dialogid) {
						dialog_ids.splice(i, 1);
						break;
					}
				}
				if (! dialog_ids.length && ($.inArray(dialogid, cancelarr) < 0)
				 && (typeof breakpoint_save != 'undefined')) {
					breakpoint_save.setObj({});/*for 'breakpoint save'*/
				}
				return dom.add('#wp-floatpanel_loading').remove();
			});
		} else {
			$pnl = $target;
			pnl = $target[0];
		}
		// Load content
		$.Deferred(function(dtd){
			// Modal setting
			if (isfrm == false) {
				if(config.cache && html_caches[load_url]){
					var data=html_caches[load_url];
					dtd.resolve(data);
				}else{
					var ajaxopts={};
					if(config.postbody)  ajaxopts={data:config.postbody};
					$.ajax($.extend({
						type: "POST",url: load_url,
						data: config.data,
						beforeSend: function(){
							// 取消全局设置属性以修复IE“闪屏”问题 2012/10/30
						},success: function(data){
							if(data.length > 0){
								if(data == 'Session expired')
									window.location.href = getSessionExpiredUrl();
								dtd.resolve(data);
								if(config.cache) html_caches[load_url]=data;
							} 
							else dtd.reject();
						},error: function(xhr, textStatus, errorThrown){
							wp_alert((errorThrown||textStatus)+'('+config.title+')'+".<br/>"+translate('Request failed!')); 
							$pnl.triggerHandler('wpdialogclose');
							return false;
						}
					},ajaxopts));
				}
			} else {
				var frmw = plw - 26/*左右padding值为2*13px*/,frame = '<div class="wp-iframe_beforloaded"><img src="'+relativeToAbsoluteURL('template/default/images/loading.gif')+'" width="16" height="16" /></div>'
				+'<iframe id="'+id+'_frame" name="'+id+'_frame" allowtransparency="true" frameborder="0" src="'+load_url+'" scrolling="auto" width="'+frmw+'" onload="this.height=200;$(\'.wp-iframe_beforloaded\',\'#'+id+'\').remove();initFrame(this,\''+cc+'\',\''+plh+'\');"></iframe>';
				dtd.resolve(frame);
			}
			return dtd.promise();
		}).done(function(data){
			$('#wp-floatpanel_loading').remove();
			// Append innerHTML
			var ocs = {};
			$('.'+cc,pnl).html(data);
			if(rgx.test(plw)) ocs['width'] = plw+'px';
			if(rgx.test(plh)) ocs['height'] = plh+'px';
			// Reset position
			if (ct || ol) {
				$pnl.show().css(ocs);
				wp_timer = setTimeout(function(){
					$pnl.triggerHandler('wpdialogsetpos');
				},30);
				// Bind window resize
				$(window).resize(function(){
					panel_position($pnl,plw,plh,ol,'wp-floatpanel_overlay');
				});
				$pnl.bind('wpdialogsetpos',function(e){
					panel_position($pnl,plw,plh,ol,'wp-floatpanel_overlay');
				});
			} else {
				if(rgx.test(pllt)) ocs['left'] = pllt+'px';
				if(rgx.test(pltp)) ocs['top'] = pltp+'px';
				$pnl.css(ocs).show();//.animate(ocs,'slow');
			}
			config.open(pnl);
		}).fail(function(){
			wp_alert(config.title+"(deferred fail).<br/>"+translate('Request failed!')); 
			$pnl.triggerHandler('wpdialogclose');
			return false;
		});
		// Bind close events
		$('.wp-title a.close',pnl).bind('click',function(e){
			$pnl.triggerHandler('wpdialogclose');
			// IE下禁止触发onbeforeunload
			e.preventDefault();
		});
		return null;
	}
	window.wp_floatpanel=wp_floatpanel;
})(window);

// Dialog定位
function panel_position(dom,width,height,isoverlay,overlayid){
	if(dom instanceof jQuery == false) return;
	var $target = dom,/*$win = $(window),*/tpw = $target.outerWidth(true),tph = $target.outerHeight(true),
	floor = Math.floor,rgx = /^\d+$/i,ocs = {};
	var scrolltop=$(document).scrollTop();
	// Parse
	if(rgx.test(height)) tph = height;
	tpw = Math.max(tpw,width);
//	var wnw = $win.width(),wnh = $win.height();
	var wnw = window.innerWidth || self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	wnh = window.innerHeight || self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	pltp = floor((wnh - tph)/2);
	pllt = floor((wnw - tpw)/2);
	// Overlay
	if(isoverlay) $('#'+overlayid).width(wnw).height(wnh);
	// Panel
	ocs['left'] = pllt+'px';
	ocs['top'] = ((pltp>0?pltp:0)+scrolltop)+'px';
	$target.css(ocs);//animate(ocs,'slow');
//	return ocs;
}

$._parseFloat = function(numString){
	var number = parseFloat(numString);
	if(isNaN(number)) return 0;
	return number;
}

function fix_img_url_path(imgurl){
	var escapeRegExp = (function () {
		var specials = [ '-','[',']', '/','{', '}', '(',')', '*','+','?', '.','\\', '^','$', '|' ];
		var regex = new RegExp('[' + specials.join('\\') + ']', 'g'); 
		return function escapeRegExp(str) {
			return str.replace(regex, '\\$&');
		};
	})();
	var imgfilenameregxp=/\/([^\/]+)$/;
	var matches=imgurl.match(imgfilenameregxp);
	var codedimgurl='';
	if(matches){
		var oldfilename=matches[1];
		var newfilename=encodeURIComponent(oldfilename);
		var oldfileregexp=new RegExp(escapeRegExp(oldfilename)+'$');
		codedimgurl=imgurl.replace(oldfileregexp,newfilename);
	}else{
		codedimgurl=encodeURIComponent(imgurl);
	}
	return codedimgurl;
}

/**
* 图片自适应 居中显示
*/
function set_pic(obj) {
	var img = new Image();
	img.src =$(obj).attr("src"); 
	var width=img.width;
	var height=img.height;
	if(width==0){
		width=107;
	}
	if(height==0){
		height=107;
	}
	var W=107;
	var H=107;
	var _width=107;
	var _height=107;
	var _top=0;
	if(width>height){
		_height=(height*H)/width;
		_top= (W-_height)/2;
		$(obj).attr('style','width: ' + _width + 'px;height:'+_height+'px;');
		$(obj).parent().css('top', _top);
	}else{
		_width=(width*H)/height;
		_top= (W-_width)/2;
		$(obj).attr('style','width: ' + _width + 'px;height:'+_height+'px;left:'+_top+'px;');
		$(obj).parent().css({'top':0,'left':_top});
	}
	
}	

/**
 * 手机站弹窗(模拟新窗口打开) 2014/06/09
 */
function msite_popup(url){
	var $container = $('#scroll_container'),maxh = $(window).height(),
	bgimg = relativeToAbsoluteURL('template/default/images/loading.gif'),
	css = 'position:absolute;top:0;left:0;width:320px;overflow:hidden;z-index:10000',
	ihtml = '<div class="mspopup_mask" style="background:url('+bgimg+') no-repeat 50% 20% #fff;height:'
	+maxh+'px;'+css+'"><iframe allowtransparency="true" frameborder="0" scrolling="no" width="320" height="'
	+maxh+'" src="'+url+'" onload="mspopup_onload(this)"></iframe></div>';
	
	var $mask = $container.children('.mspopup_mask');
	if(! $mask.length) $container.append(ihtml).attr("data-height", $container.height()).height(maxh);
}

function mspopup_onload(win){
	win.height = 'auto';
	var bodh = win.contentWindow.document.body.scrollHeight,
	doch = win.contentWindow.document.documentElement.scrollHeight,
	maxheight = Math.max(bodh, doch);
	
	// Reset height
	win.height = maxheight;
	$(win).parent('.mspopup_mask').height(maxheight)
	.parent('#scroll_container').height(maxheight);
}

function create_pc_media_set_pic(layer_id,editmode){
	var func=function(obj) {
		var callback=function(img){
				img.show();
				img.closest('.img_over').children('.imgloading').remove();
				if(!editmode){
					$(function(){			
						var super_id=layer_id;
						var dom_img=$("#"+super_id).find('.paragraph_image');
						var left_img=parseInt(dom_img.css('left'));
						var top_img=parseInt(dom_img.css('top'));
						var width_img=parseInt(dom_img.css("width"));
						var height_img=parseInt(dom_img.css("height"));
						if(isNaN(left_img)){ left_img=0; }
						if(isNaN(top_img)){ top_img=0; }
						var ii=0;
						$("#"+super_id).find(".wp_mapclass").each(function(){
							var shape="rect";
							shape=$(this).attr('shape');
							if(shape != "circle"){
								shape="rect";
							}

							var leftz=parseInt($(this).css("left"));
							var topz=parseInt($(this).css("top"));
							var widthz=parseInt($(this).css("width"));
							var heightz=parseInt($(this).css("height"));

							if(shape != "circle"){
								var coords='0,0,0,0';
							}else{
								var coords='0,0,0';
							}		
							if( (leftz+widthz) < left_img || (topz+heightz)< top_img){
							}else{
								var cleft=0;
								var ctop=0;
								var r=0;
								if(shape != "circle"){
									cleft=leftz-left_img;
									ctop=topz-top_img;
									coords=cleft+','+ctop+','+(cleft+widthz)+','+(ctop+heightz);
								}else{
									r=widthz/2;
									cleft=leftz-left_img+r;
									ctop=topz-top_img+r;
									coords=cleft+','+ctop+','+r;
								}
							}	

							//var classid=$(this).attr('id');
							var classid="map_arear_"+ii;
							ii++;
							var mapd=$(this).parent().find("."+classid);
							mapd.attr('coords',coords);
							$(this).remove();

						});
					})
				}
		}
		$(obj).each(function() {
			var img=$(this);
			callback(img);
		});      
	}
	window['set_thumb_'+layer_id]=func;
};
/*
 * 模块高度自适应，对外接口，功能待扩展
 * 
 */

/**
 * 高度自适应模块,预览模式下触发 TODO:面向对象写法
 */
function wp_heightAdapt(dom,oldHeight)
{	
	if(dom== undefined) return false;
	if ($.inArray(dom.attr("type"), ['bslider']) != -1) return;
	var heightfunc=function(){
		var before=dom.data('oriheight');
		if(!before){
			before=dom.children('div').eq(0).height();
			dom.data('oriheight',before);
		}
		return before;
	}
	
	var resetPos=function(el){
		var oritop=el.data('adaptoritop');
		var oriheight=el.data('adaptoriheight');
		var pressArr=el.data('adaptpress');
		var wrapArr=el.data('adaptwrap');
		var id=dom.prop('id');
		var toppos=$.parseInteger(el.css('top'));
		if(!oritop&&oritop !==0){
			el.data('adaptoritop',toppos);
			el.data('adaptoriheight',el.height());
			return;
		}

		if(pressArr && pressArr.length){
			for(var i=0;i<pressArr.length;i++){
				var press=pressArr[i];
				if(press.id !=id){
					oritop+=press.diffY;
				}
			}
		}
		
		if(wrapArr && wrapArr.length){
			var h=oriheight;
			for(var i=0;i<wrapArr.length;i++){
				var wrap=wrapArr[i];
				if(wrap.id !=id){
					h+=wrap.diffH;
				}
			}
			if(h!=el.height()){
				el.css('height',h+'px');
				var wrapListPadding = parseInt(el.children('div').eq(0).css('padding-top')) + parseInt(el.children('div').eq(0).css('padding-bottom'));
				var wrapListBorder = parseInt(el.children('div').eq(0).css('border-top-width')) + parseInt(el.children('div').eq(0).css('border-bottom-width'));
				el.children('div').eq(0).height(el.height() - wrapListPadding - wrapListBorder);
			}
		}
		if(oritop!=toppos){ 
			el.css('top',oritop+'px');
		}
	}
	
	var canvheight=$('#canvas').data('adaptoriheight');
	if(!canvheight){
		$('#canvas').data('adaptoriheight',$('#canvas').height());
		canvheight=$('#canvas').data('adaptoriheight');
	}
	var adaptModuleBefore = heightfunc();//自适应之前原始高度
	var actualContentHeight=dom.children('div').eq(0).height();
	resetPos(dom);
//	dom.children().eq(0).css('height','auto');//模块自适应
     //有些模块第一个元素不是div，比如：产品详情
	dom.children('div').eq(0).css('height','auto');//模块自适应
	var adaptModuleAfter = dom.children('div').eq(0).height();//自适应之后高度
	if(adaptModuleAfter < adaptModuleBefore){ 
		dom.children('div').eq(0).css('height',adaptModuleBefore+'px');
		if(adaptModuleBefore==actualContentHeight) return;
	}//还原
	else{
		var borderwidth=parseInt(dom.children('div').eq(0).css('border-top-width'))+parseInt(dom.children('div').eq(0).css('border-bottom-width'));
		if(borderwidth>0){
			adaptModuleAfter=adaptModuleAfter-borderwidth;
		}
		dom.children('div').eq(0).css('height',adaptModuleAfter+'px');
		if(adaptModuleAfter==actualContentHeight) return;
	}

	var domPadding = parseInt(dom.children('div').eq(0).css('padding-top')) + parseInt(dom.children('div').eq(0).css('padding-bottom'));
	var domBorder = parseInt(dom.children('div').eq(0).css('border-top-width')) + parseInt(dom.children('div').eq(0).css('border-bottom-width'));
	var moduleLayerHeight = oldHeight || adaptModuleBefore+domPadding+domBorder;
	var moduleHeight = dom.children('div').eq(0).outerHeight();//模块取 wp-模块名_content层的高度
	var moduleWidth = dom.outerWidth();
	var moduleTop = dom.ab_pos_cnter('top');//获取画布坐标系y值
	
	var left_boundray = dom.ab_pos_cnter('left');//左右边界
	var right_boundray = left_boundray + dom.outerWidth();
	
	var offsetY = 0;//发生重合后往下压位置与高度自适应模块空出原有高度
	var pressList = new Array();//记录往下压的模块列表
	var wrapList = new Array();//包在高度自适应外层模块列表
	
	var minTop = 0,minId = 0;
	//页面上的模块可能有不同坐标系，但往下压多少像素的相对偏移量都相同的，获取这些偏移量
	var diffY = 0;//向下移动偏移量
	
	$("#canvas").find('.cstlayer,.full_column').each(function(){
		//判断页面模块是不是在高度自适应模块左右边界中,通栏模块肯定在,不需要判断
		resetPos($(this));
		var tmp_left = $(this).ab_pos_cnter('left'),tmp_top =$(this).ab_pos_cnter('top'),tmp_width = $(this).outerWidth(),tmp_height = $(this).outerHeight();
		if($(this).hasClass('cstlayer'))
		{
			if(tmp_left + tmp_width < left_boundray) return true;
			if(tmp_left > right_boundray) return true;
			if(dom.attr('id') == $(this).attr('id'))  return true;//自己除外
			
			//包在高度自适应模块外面的模块也要改变高度
			if((tmp_left <= left_boundray && tmp_left+tmp_width >= right_boundray) && (tmp_top <= moduleTop && tmp_top+tmp_height >= moduleTop+moduleLayerHeight))
			{
				wrapList.push($(this).attr('id'));
				return true;
			}
			
			if($(this).parent().hasClass('full_content') || $(this).parent().hasClass('footer_content') || $(this).parent().hasClass('drop_box')) return true;//通栏和底部元素暂时不考虑
		}

		if(tmp_top >= (moduleTop + moduleLayerHeight))
		{
			pressList.push($(this).attr('id'));
			if(minTop == 0) {minTop = tmp_top;minId = $(this).attr('id');}
			else
			{
				if(minTop > tmp_top) {minTop = tmp_top;minId = $(this).attr('id');}
			}
		}
	});
	//ceshi
	offsetY = $("#"+minId).ab_pos_cnter('top') - (moduleTop + moduleLayerHeight);

	if(pressList.length > 0 && (moduleTop + moduleHeight) >= minTop)
	{
		diffY = moduleTop + moduleHeight + offsetY - minTop;
		for(var i = 0;i < pressList.length;i++)
		{
			var theel=$("#"+pressList[i]);
			
			theel.css('top',(parseInt(theel.ab_pos_cnter('top'))+diffY)+'px');
			
			var pressArrOld=theel.data('adaptpress');
			if(!pressArrOld) pressArrOld=[];
			var pressArr=[];
			for(var j=0;j<pressArrOld.length;j++){
				if(pressArrOld[j].id != dom.prop('id')) pressArr.push(pressArrOld[j]);
			}
			pressArr.push({id:dom.prop('id'),diffY:diffY});
			theel.data('adaptpress',pressArr);
		}
	}
	
	if(wrapList.length > 0)
	{
		for(var i = 0;i < wrapList.length;i++)
		{
			var diffH=moduleHeight-moduleLayerHeight;
			var theel=$("#"+wrapList[i]);
			theel.height($("#"+wrapList[i]).height()+(diffH));
			var wrapListPadding = parseInt(theel.children('div').eq(0).css('padding-top')) + parseInt($("#"+wrapList[i]).children('div').eq(0).css('padding-bottom'));
			var wrapListBorder = parseInt(theel.children('div').eq(0).css('border-top-width')) + parseInt($("#"+wrapList[i]).children('div').eq(0).css('border-bottom-width'));
			theel.children('div').eq(0).height(theel.height() - wrapListPadding - wrapListBorder);
			var wrapArrOld=theel.data('adaptwrap');
			if(!wrapArrOld) wrapArrOld=[];
			var wrapArr=[];
			for(var j=0;j<wrapArrOld.length;j++){
				if(wrapArrOld[j].id != dom.prop('id')) wrapArr.push(wrapArrOld[j]);
			}
			wrapArr.push({id:dom.prop('id'),diffH:diffH});
			theel.data('adaptwrap',wrapArr);
		}
	}
	
	if(dom.attr("type")=='fxdp'){
		dom.height(dom.children('div').eq(0).height() + domPadding + domBorder + 50);
	}else{
		dom.height(dom.children('div').eq(0).height() + domPadding + domBorder);
	}
	var nowcanvheight=$('#canvas').height();
	if(nowcanvheight != canvheight) $('#canvas').css('height',canvheight);
	scroll_container_adjust();
}