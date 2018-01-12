/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
    a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
    .clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';

        options.domain = '10010.com';

        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};if (!this.UacPrefix) {
    this.UacPrefix = {};
    UacPrefix.PRXFIX_HTTPS_URL = "https://uac.10010.com";
    UacPrefix.PRXFIX_HTTP_URL = "http://uac.10010.com";
}if (!this.CommonConstants) {
    this.CommonConstants = {};
    CommonConstants.IS_EMPTY_USERNAME_ME = "请输入手机号码或邮箱";
    CommonConstants.IS_EMPTY_USERNAME_M = "请输入手机号码";
    CommonConstants.IS_EMPTY_USERNAME_S = "请输入手机号码或固网号码";
    CommonConstants.IS_EMPTY_USERNAME = "请输入手机号码、邮箱或固网号码";
    CommonConstants.IS_EMPTY_USERPWD = "请输入用户密码";
    CommonConstants.IS_EMPTY_USERPWD_MN = "请输入服务密码";
    CommonConstants.IS_EMPTY_USERPWD_R = "请输入随机密码";
    CommonConstants.IS_EMPTY_USERPWD_E = "请输入登录密码";
    CommonConstants.IS_EMPTY_VERIFYCODE = "请输入验证码";
    CommonConstants.IS_EMPTY_REGISTERCODE = "请输入注册码";
    CommonConstants.IS_EMPTY_USERNAME_E = "请输入邮箱";
    CommonConstants.IS_EMPTY_VERIFYEMAILCODE="请输入注册码";
    CommonConstants.IS_EMPTY_USERPWD_RE = "请设置注册密码";
    CommonConstants.IS_EMPTY_USERPWD_C = "请确认注册密码";
    CommonConstants.IS_EMPTY_AREACITY = "请输入地市";
    CommonConstants.IS_EMPTY_MILITOKEN = "请输入手机密令";
    CommonConstants.IS_EMPTY_USERNAME_U = "请输入身份证号或统一账号";
    CommonConstants.IS_EMPTY_CKVERIFYCODE = "请输入短信验证码";
    CommonConstants.IS_CKVERIFYCODE = "短信验证码";
    CommonConstants.IS_BIZERROR_BLACKLIST="您的账号登录受限，请联系客服！";
    CommonConstants.IS_BIZERROR_LESS_VERIFYCODE = "验证码是4位字符";
    CommonConstants.IS_BIZERROR_LESS_REGISTERCODE = "注册码是6位字符";
    CommonConstants.IS_BIZERROR_WRONG_ME = "请输入正确的手机号码或邮箱";
    CommonConstants.IS_BIZERROR_WRONG_M = "请输入正确的手机号码";
    CommonConstants.IS_BIZERROR_WRONG_E = "请输入正确格式的邮箱";
    CommonConstants.IS_BIZERROR_FORBIDDEN_YACN = "请勿使用中国雅虎邮箱";
    CommonConstants.IS_BIZERROR_OL_E = "您输入的邮箱长度超过50位";
    CommonConstants.IS_BIZERROR_VALID_VC = "验证码已过期";
    CommonConstants.IS_BIZERROR_WRONG_VC = "验证码错误";
    CommonConstants.IS_BIZERROR_EMAILWRONG_VC = "注册码错误";
    CommonConstants.IS_BIZERROR_W_PWD_MR = "请输入正确的随机密码";
    CommonConstants.IS_BIZERROR_W_PWD_E = "请输入正确的登录密码";
    CommonConstants.IS_BIZERROR_W_PWD_S = "请输入正确的服务密码";
    CommonConstants.IS_BIZERROR_AREACITY = "请输入正确的地市";
    CommonConstants.IS_BIZERROR_INIT_PWD = '您输入的为初始密码，不能登录，请先<a href=\"https://uac.10010.com/cust/resetpwd/inputName" target="_blank" style="color: #36c;cursor: pointer;text-decoration:underline;">重置密码</a>';
    CommonConstants.IS_BIZERROR_SIMPLE_PWD = '您输入的为简单密码，不能登录，请先<a href=\"https://uac.10010.com/cust/resetpwd/inputName" target="_blank" style="color: #36c;cursor: pointer;text-decoration:underline;">重置密码</a>';
    CommonConstants.IS_BIZERROR_ACCOUNT_LOCKED = '登录密码出错已达上限，请<a href="https://uac.10010.com/cust/resetpwd/inputName" target="_blank" style="color: #36c;cursor: pointer;text-decoration:underline;">找回登录密码</a>后登录，或3小时后重试。';
    CommonConstants.IS_BIZERROR_PRO_RELEASE = "您的号码所属省分正在升级，请稍后再试！";
    CommonConstants.IS_BIZERROR_INVALID_REQ = "您输入的参数中含有非法字符！";
    CommonConstants.IS_BIZERROR_SYSTEM_RELEASE = "系统正在升级，请稍后再试！";
    CommonConstants.IS_BIZERROR_THREAD_FULL = "系统繁忙，请您稍后再试！";
    CommonConstants.IS_BIZERROR_SYSTEM_ERROR = "系统繁忙，请稍后再试！";
    CommonConstants.IS_BIZERROR_LESS_MILI = "手机密令是6位数字";
    CommonConstants.IS_BIZERROR_W_MILI = "请输入正确的手机密令";
    CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR = "随机码发送异常，请稍后再试！";
    CommonConstants.IS_BIZERROR_SEND_SUCESS = "随机码发送成功，请注意查收！";
    CommonConstants.IS_BIZERROR_SEND_OFTEN = "随机码发送频繁，请稍后再试！";
    CommonConstants.IS_BIZERROR_SEND_MORE = "当日随机码 发送次数已达上限，请明日再试！";
    CommonConstants.IS_BIZERROR_SENDEMAIL_SUCESS = "密令解绑邮件已发送至预留邮箱{0},请登录查看。";
    CommonConstants.IS_BIZERROR_SENDEMAIL_FAILED = "密令遗失解绑邮件发送失败，请稍候再试！";
    CommonConstants.IS_BIZERROR_WU = "请输入正确的统一账号";
    CommonConstants.IS_BIZERROR_WU_IDC = "请输入正确的身份证号";
    CommonConstants.IS_BIZERROR_WPWD = "请输入6位数字密码";
    CommonConstants.IS_BIZERROR_HR = '此邮箱已注册中国联通，<a href="javascript:void(0);" onclick="loginCommon.loginImt();" style="color: #36c;cursor: pointer;text-decoration:underline;">立即登录</a>';
    CommonConstants.IS_BIZERROR_W_PWD_E = "请输入6到16位密码";
    CommonConstants.IS_BIZERROR_W_PWD_RP = "密码只能由数字或字母组成";
    CommonConstants.IS_BIZERROR_W_PWD_UD = "两次输入的密码不一致";
    CommonConstants.IS_BIZERROR_BUSY = "活动入口堵满了来自星星的人，请稍后再试试。";
    CommonConstants.IS_4G_PERIOD = "由于本月您将升级成4G，请您在账期后（4日8:00）再使用系统。";
    CommonConstants.IS_BIZERROR_SUBSCRBTYPE_MORE="对不起，您是合账用户，办理业务请前往营业厅！";
    CommonConstants.IS_BIZERROR_LOGIN_LIMIT="登录过于频繁，为保障账号安全，请稍后再试！";
    CommonConstants.IS_BIZERROR_LOGIN_HOMOLOGOUSIP_LIMIT="账号登录异常，请稍后再试！";
    CommonConstants.IS_PLAT_TOUT_STOP = "很抱歉，暂时无法为您提供服务，请稍后再试，感谢您的使用！";
    CommonConstants.IS_BIZERROR_OVER_MAXCOUNT="登录达到上限";
    CommonConstants.IS_BIZERROR_OVER_ERROR_NUMBER="尝试次数过多，请次日重试";
    CommonConstants.IS_BIZERROR_SMS_ERROR="短信验证码不正确";
    CommonConstants.IS_NULL_NUMBER="用户名或者密码不正确!";
    CommonConstants.IS_BIZERROR_LESS_CKVERIFYCODE = "短信验证码是6位字符";
    CommonConstants.USER_TYPE_MOBILE = "01";
    CommonConstants.USER_TYPE_EMAIL = "05";
    CommonConstants.USER_TYPE_NET = "02";
    CommonConstants.USER_TYPE_IDC = "20";
    CommonConstants.USER_TYPE_UNICOM = "21";
    CommonConstants.PWD_TIPS_DEFAULT = "登录密码";
    CommonConstants.PWD_TIPS_SERVICE = "服务密码";
    CommonConstants.PWD_TIPS_RND = "随机密码";
    CommonConstants.SERVICE_PWD_TIPS = "服务密码登录";
    CommonConstants.RANDOM_PWD_TIPS = "随机码登录";
    CommonConstants.NET_TIPS = "固话";
    CommonConstants.PWD_MINLENGTH_DEFAULT = 6;
    CommonConstants.PWD_MINLENGTH_NET = 4;
    CommonConstants.PWD_MAXLENGTH = 16;
    CommonConstants.PWD_TYPE_SERVICE = "01";
    CommonConstants.PWD_TYPE_RND = "02";
    CommonConstants.CLEAR_TIMER_INTI_TIME = 60;
    CommonConstants.VERIFY_VALID_TIME = 300000;
    CommonConstants.DEFAULT_TO_URL = "http://www.10010.com";
    CommonConstants.RESET_PWD_URL = "https://uac.10010.com/cust/resetpwd/inputName";
    CommonConstants.QW_USER_INFO = "https://uac.10010.com/cust/infomgr/infomgrInit";
    CommonConstants.QW_USER_ORDER = "https://uac.10010.com/cust/order/myorderinfo";
    CommonConstants.QW_USER_ADDR = "https://uac.10010.com/cust/postaddr/postAddrInit";
    CommonConstants.QW_USER_CONTACT = "https://uac.10010.com/cust/userticket/userticketInit";
    CommonConstants.QW_SECURITY = "https://uac.10010.com/cust/secure/index/security_account";
    CommonConstants.QW_PWD_MANAGMENT = "https://uac.10010.com/cust/alterpass/alterpassInit";
    CommonConstants.QW_USER_VOUCHER = "https://uac.10010.com/cust/access/moneyticketInit";
    CommonConstants.QW_BIND = "https://uac.10010.com/cust/bindnum/bindnumInit";
    CommonConstants.LOGIN_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/MallLogin?callback=?";
    CommonConstants.LOGIN_URL_OAUTH ="/oauth2/new_auth";
    CommonConstants.SEND_RNDCODE_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/SendMSG?callback=?";
    CommonConstants.SEND_CKCODE_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/SendCkMSG?callback=?";
    CommonConstants.VERIFY_IMTCHK_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/CtaIdyChk?callback=?";
    CommonConstants.MILI_CHECK_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/CheckSecureAndLogin?callback=?";
    CommonConstants.LOST_MILI_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/SecureMOLostMail?callback=?";
    CommonConstants.CHECK_SHOW_VERIFY_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/CheckNeedVerify?callback=?";
    CommonConstants.LOGIN_UNICOM_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/LoginUnicom?callback=?";
    CommonConstants.REGISTERED_CHECK_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/CheckEmailHasCust?callback=?";
    CommonConstants.REGISTER_URL = UacPrefix.PRXFIX_HTTPS_URL + "/portal/Service/RegisterCust?callback=?";
    CommonConstants.REGRESENDEMAIL_URL=UacPrefix.PRXFIX_HTTPS_URL+"/portal/SendEmail?callback=?";
}﻿//初始化城市
var commoncitys=new Array();

commoncitys[0]=new Array('PEK','北京','BEIJING','BJ','110');
commoncitys[1]=new Array('TSN','天津','TIANJIN','TJ','130');
commoncitys[2]=new Array('HRB','哈尔滨','HAERBIN','HRB','971');
commoncitys[3]=new Array('SHA','上海','SHANGHAI','SH','310');
commoncitys[4]=new Array('SHE','沈阳','SHENYANG','SY','910');
commoncitys[5]=new Array('SJW','石家庄','SHIJIAZHUANG','SJZ','188');
commoncitys[6]=new Array('CKG','重庆','CHONGQING','CQ','831');
commoncitys[7]=new Array('CGO','郑州','ZHENGZHOU','ZZ','760');
commoncitys[8]=new Array('CAN','广州','GUANGZHOU','GZ','510');
commoncitys[9]=new Array('DLC','大连','DALIAN','DL','940');
commoncitys[10]=new Array('TAO','青岛','QINGDAO','QD','166');
commoncitys[11]=new Array('SZX','深圳','SHENZHEN','SZ','540');
commoncitys[12]=new Array('WUH','武汉','WUHAN','WH','710');
commoncitys[13]=new Array('CTU','成都','CHENGDU','CD','810');
commoncitys[14]=new Array('TNA','济南','JINAN','JN','170');
commoncitys[15]=new Array('NKG','南京','NANJING','NJ','340');

//初始化所有城市
var citys=new Array();

citys[0]=new Array( ' ','北京','BEIJING','BJ','110','010');
citys[1]=new Array( ' ','广州','GUANGZHOU','GZ','510','020');
citys[2]=new Array( ' ','上海','SHANGHAI','SH','310','021');
citys[3]=new Array( ' ','天津','TIANJIN','TJ','130','022');
citys[4]=new Array( ' ','重庆','CHONGQING','CQ','831','023');
citys[5]=new Array( ' ','巫山','WUSHAN','WS','835','023');
citys[6]=new Array( ' ','沈阳','SHENYANG','SY','910','024');
citys[7]=new Array( ' ','铁岭','TIELING','TL','911','024');
citys[8]=new Array( ' ','抚顺','FUSHUN','FS','913','024');
citys[9]=new Array( ' ','南京','NANJING','NJ','340','025');
citys[10]=new Array( ' ','武汉','WUHAN','WH','710','027');
citys[11]=new Array( ' ','成都','CHENGDU','CD','810','028');
citys[12]=new Array( ' ','眉山','MEISHAN','MS','819','028');
citys[13]=new Array( ' ','资阳','ZIYANG','ZY','830','028');
citys[14]=new Array( ' ','西安','XIAN','XA','841','029');
citys[15]=new Array( ' ','咸阳','XIANYANG','XY','844','029');
citys[16]=new Array( ' ','邯郸','HANDAN','HD','186','0310');
citys[17]=new Array( ' ','石家庄','SHIJIAZHUANG','SJZ','188','0311');
citys[18]=new Array( ' ','保定','BAODING','BD','187','0312');
citys[19]=new Array( ' ','张家口','ZHANGJIAKOU','ZJK','184','0313');
citys[20]=new Array( ' ','承德','CHENGDE','CD','189','0314');
citys[21]=new Array( ' ','唐山','TANGSHAN','TS','181','0315');
citys[22]=new Array( ' ','廊坊','LANGFANG','LF','183','0316');
citys[23]=new Array( ' ','沧州','CANGZHOU','CZ','180','0317');
citys[24]=new Array( ' ','衡水','HENGSHUI','HS','720','0318');
citys[25]=new Array( ' ','邢台','XINGTAI','XT','185','0319');
citys[26]=new Array( ' ','秦皇岛','QINHUANGDAO','QHD','182','0335');
citys[27]=new Array( ' ','朔州','SHUOZHOU','SZ','199','0349');
citys[28]=new Array( ' ','忻州','XINZHOU','XZ','198','0350');
citys[29]=new Array( ' ','太原','TAIYUAN','TY','190','0351');
citys[30]=new Array( ' ','大同','DATONG','DT','193','0352');
citys[31]=new Array( ' ','阳泉','YANGQUAN','YQ','192','0353');
citys[32]=new Array( ' ','晋中','JINZHONG','JZ','191','0354');
citys[33]=new Array( ' ','长治','CHANGZHI','CZ','195','0355');
citys[34]=new Array( ' ','晋城','JINCHENG','JC','194','0356');
citys[35]=new Array( ' ','临汾','LINFEN','LF','197','0357');
citys[36]=new Array( ' ','吕梁','LVLIANG','LL','200','0358');
citys[37]=new Array( ' ','运城','YUNCHENG','YC','196','0359');
citys[38]=new Array( ' ','商丘','SHANGQIU','SQ','768','0370');
citys[39]=new Array( ' ','郑州','ZHENGZHOU','ZZ','760','0371');
citys[40]=new Array( ' ','开封','KAIFENG','KF','762','0371');
citys[41]=new Array( ' ','安阳','ANYANG','AY','767','0372');
citys[42]=new Array( ' ','新乡','XINXIANG','XX','764','0373');
citys[43]=new Array( ' ','许昌','XUCHANG','XC','765','0374');
citys[44]=new Array( ' ','平顶山','PINGDINGSHAN','PDS','769','0375');
citys[45]=new Array( ' ','信阳','XINYANG','XY','776','0376');
citys[46]=new Array( ' ','南阳','NANYANG','NY','777','0377');
citys[47]=new Array( ' ','洛阳','LUOYANG','LY','761','0379');
citys[48]=new Array( ' ','焦作','JIAOZUO','JZ','763','0391');
citys[49]=new Array( ' ','济源','JIYUAN','JY','775','0391');
citys[50]=new Array( ' ','鹤壁','HEBI','HB','774','0392');
citys[51]=new Array( ' ','濮阳','PUYANG','PY','773','0393');
citys[52]=new Array( ' ','周口','ZHOUKOU','ZK','770','0394');
citys[53]=new Array( ' ','漯河','LUOHE','LH','766','0395');
citys[54]=new Array( ' ','驻马店','ZHUMADIAN','ZMD','771','0396');
citys[55]=new Array( ' ','三门峡','SANMENXIA','SMX','772','0398');
citys[56]=new Array( ' ','大连','DALIAN','DL','940','0411');
citys[57]=new Array( ' ','鞍山','ANSHAN','AS','912','0412');
citys[58]=new Array( ' ','本溪','BENXI','BX','914','024');
citys[59]=new Array( ' ','丹东','DANDONG','DD','915','0415');
citys[60]=new Array( ' ','锦州','JINZHOU','JZ','916','0416');
citys[61]=new Array( ' ','营口','YINGKOU','YK','917','0417');
citys[62]=new Array( ' ','阜新','FUXIN','FX','918','0418');
citys[63]=new Array( ' ','辽阳','LIAOYANG','LY','919','0419');
citys[64]=new Array( ' ','朝阳','CHAOYANG','CY','920','0421');
citys[65]=new Array( ' ','盘锦','PANJIN','PJ','921','0427');
citys[66]=new Array( ' ','葫芦岛','HULUDAO','HLD','922','0429');
citys[67]=new Array( ' ','长春','CHANGCHUN','CC','901','0431');
citys[68]=new Array( ' ','吉林','JILIN','JL','902','0432');
citys[69]=new Array( ' ','延边','YANBIAN','YB','909','0433');
citys[70]=new Array( ' ','四平','SIPING','SP','903','0434');
citys[71]=new Array( ' ','通化','TONGHUA','TH','905','0435');
citys[72]=new Array( ' ','白城','BAICHENG','BC','907','0436');
citys[73]=new Array( ' ','辽源','LIAOYUAN','LY','906','0437');
citys[74]=new Array( ' ','松原','SONGYUAN','SY','904','0438');
citys[75]=new Array( ' ','白山','BAISHAN','BS','908','0439');
citys[76]=new Array( ' ','哈尔滨','HAERBIN','HEB','971','0451');
citys[77]=new Array( ' ','齐齐哈尔','QIQIHAER','QQHE','973','0452');
citys[78]=new Array( ' ','牡丹江','MUDANJIANG','MDJ','988','0453');
citys[79]=new Array( ' ','佳木斯','JIAMUSI','JMS','976','0454');
citys[80]=new Array( ' ','绥化','SUIHUA','SH','989','0455');
citys[81]=new Array( ' ','黑河','HEIHE','HH','990','0456');
citys[82]=new Array( ' ','大兴安岭','DAXINGANLING','DXAL','995','0457');
citys[83]=new Array( ' ','伊春','YICHUN','YC','996','0458');
citys[84]=new Array( ' ','大庆','DAQING','DQ','981','0459');
citys[85]=new Array( ' ','七台河','QITAIHE','QTH','992','0464');
citys[86]=new Array( ' ','鸡西','JIXI','JX','991','0467');
citys[87]=new Array( ' ','鹤岗','HEGANG','HG','993','0468');
citys[88]=new Array( ' ','双鸭山','SHUANGYASHAN','SYS','994','0469');
citys[89]=new Array( ' ','呼伦贝尔','HULUNBEIER','HLBE','108','0470');
citys[90]=new Array( ' ','呼和浩特','HUHEHAOTE','HHHT','101','0471');
citys[91]=new Array( ' ','包头','BAOTOU','BT','102','0472');
citys[92]=new Array( ' ','乌海','WUHAI','WH','106','0473');
citys[93]=new Array( ' ','乌兰察布盟','WULANCHABUMENG','WLCBM','103','0474');
citys[94]=new Array( ' ','通辽','TONGLIAO','TL','109','0475');
citys[95]=new Array( ' ','赤峰','CHIFENG','CF','107','0476');
citys[96]=new Array( ' ','鄂尔多斯','EERDUOSI','EEDS','104','0477');
citys[97]=new Array( ' ','巴彦淖尔','BAYANNAOER','BYNE','105','0478');
citys[98]=new Array( ' ','锡林郭勒盟','XILINGUOLEMENG','XLGLM','111','0479');
citys[99]=new Array( ' ','兴安盟','XINGANMENG','XAM','113','0482');
citys[100]=new Array( ' ','阿拉善盟','ALASHANMENG','ALSM','114','0483');
citys[101]=new Array( ' ','无锡','WUXI','WX','330','0510');
citys[102]=new Array( ' ','镇江','ZHENJIANG','ZJ','343','0511');
citys[103]=new Array( ' ','苏州','SUZHOU','SZ','450','0512');
citys[104]=new Array( ' ','南通','NANTONG','NT','358','0513');
citys[105]=new Array( ' ','扬州','YANGZHOU','YZ','430','0514');
citys[106]=new Array( ' ','盐城','YANCHENG','YC','348','0515');
citys[107]=new Array( ' ','徐州','XUZHOU','XZ','350','0516');
citys[108]=new Array( ' ','淮安','HUAIAN','HA','354','0517');
citys[109]=new Array( ' ','连云港','LIANYUNGANG','LYG','346','0518');
citys[110]=new Array( ' ','常州','CHANGZHOU','CZ','440','0519');
citys[111]=new Array( ' ','泰州','TAIZHOU','TZ','445','0523');
citys[112]=new Array( ' ','宿迁','SUQIAN','SQ','349','0527');
citys[113]=new Array( ' ','菏泽','HEZE','HZ','159','0530');
citys[114]=new Array( ' ','济南','JINAN','JN','170','0531');
citys[115]=new Array( ' ','青岛','QINGDAO','QD','166','0532');
citys[116]=new Array( ' ','淄博','ZIBO','ZB','150','0533');
citys[117]=new Array( ' ','德州','DEZHOU','DZ','173','0534');
citys[118]=new Array( ' ','烟台','YANTAI','YT','161','0535');
citys[119]=new Array( ' ','潍坊','WEIFANG','WF','155','0536');
citys[120]=new Array( ' ','济宁','JINING','JN','158','0537');
citys[121]=new Array( ' ','泰安','TAIAN','TA','172','0538');
citys[122]=new Array( ' ','临沂','LINYI','LY','153','0539');
citys[123]=new Array( ' ','滨州','BINZHOU','BZ','151','0543');
citys[124]=new Array( ' ','东营','DONGYING','DY','156','0546');
citys[125]=new Array( ' ','滁州','CHUZHOU','CZ','312','0550');
citys[126]=new Array( ' ','合肥','HEFEI','HF','305','0551');
citys[127]=new Array( ' ','蚌埠','BANGBU','BB','301','0552');
citys[128]=new Array( ' ','芜湖','WUHU','WH','303','0553');
citys[129]=new Array( ' ','淮南','HUAINAN','HN','307','0554');
citys[130]=new Array( ' ','马鞍山','MAANSHAN','MAS','300','0555');
citys[131]=new Array( ' ','安庆','ANQING','AQ','302','0556');
citys[132]=new Array( ' ','宿州','SUZHOU','SZ','313','0557');
citys[133]=new Array( ' ','阜阳','FUYANG','FY','306','0558');
citys[134]=new Array( ' ','亳州','BOZHOU','BZ','318','0558');
citys[135]=new Array( ' ','黄山','HUANGSHAN','HS','316','0559');
citys[136]=new Array( ' ','淮北','HUAIBEI','HB','314','0561');
citys[137]=new Array( ' ','铜陵','TONGLING','TL','308','0562');
citys[138]=new Array( ' ','宣城','XUANCHENG','XC','311','0563');
citys[139]=new Array( ' ','六安','LIUAN','LA','304','0564');
citys[140]=new Array( ' ','巢湖','CHAOHU','CH','309','0565');
citys[141]=new Array( ' ','池州','CHIZHOU','CZ','317','0566');
citys[142]=new Array( ' ','衢州','QUZHOU','QZ','468','0570');
citys[143]=new Array( ' ','杭州','HANGZHOU','HZ','360','0571');
citys[144]=new Array( ' ','湖州','HUZHOU','HZ','362','0572');
citys[145]=new Array( ' ','嘉兴','JIAXING','JX','363','0573');
citys[146]=new Array( ' ','宁波','NINGBO','NB','370','0574');
citys[147]=new Array( ' ','绍兴','SHAOXING','SX','365','0575');
citys[148]=new Array( ' ','台州','TAIZHOU','TZ','476','0576');
citys[149]=new Array( ' ','温州','WENZHOU','WZ','470','0577');
citys[150]=new Array( ' ','丽水','LISHUI','LS','469','0578');
citys[151]=new Array( ' ','金华','JINHUA','JH','367','0579');
citys[152]=new Array( ' ','舟山','ZHOUSHAN','ZS','364','0580');
citys[153]=new Array( ' ','福州','FUZHOU','FZ','380','0591');
citys[154]=new Array( ' ','厦门','XIAMEN','XM','390','0592');
citys[155]=new Array( ' ','宁德','NINGDE','ND','386','0593');
citys[156]=new Array( ' ','莆田','PUTIAN','PT','385','0594');
citys[157]=new Array( ' ','泉州','QUANZHOU','QZ','480','0595');
citys[158]=new Array( ' ','漳州','ZHANGZHOU','ZZ','395','0596');
citys[159]=new Array( ' ','龙岩','LONGYAN','LY','384','0597');
citys[160]=new Array( ' ','三明','SANMING','SM','389','0598');
citys[161]=new Array( ' ','南平','NANPING','NP','387','0599');
citys[162]=new Array( ' ','威海','WEIHAI','WH','152','0631');
citys[163]=new Array( ' ','枣庄','ZAOZHUANG','ZZ','157','0632');
citys[164]=new Array( ' ','日照','RIZHAO','RZ','154','0633');
citys[165]=new Array( ' ','莱芜','LAIWU','LW','160','0634');
citys[166]=new Array( ' ','聊城','LIAOCHENG','LC','174','0635');
citys[167]=new Array( ' ','汕尾','SHANWEI','SW','525','0660');
citys[168]=new Array( ' ','阳江','YANGJIANG','YJ','565','0662');
citys[169]=new Array( ' ','揭阳','JIEYANG','JY','526','0663');
citys[170]=new Array( ' ','茂名','MAOMING','MM','568','0668');
citys[171]=new Array( ' ','西双版纳','XISHUANGBANNA','XSBN','736','0691');
citys[172]=new Array( ' ','德宏','DEHONG','DH','730','0692');
citys[173]=new Array( ' ','鹰潭','YINGTAN','YT','754','0701');
citys[174]=new Array( ' ','襄阳','XIANGYANG','XY','716','0710');
citys[175]=new Array( ' ','鄂州','EZHOU','EZ','718','0711');
citys[176]=new Array( ' ','孝感','XIAOGAN','XG','717','0712');
citys[177]=new Array( ' ','黄冈','HUANGGANG','HG','714','0713');
citys[178]=new Array( ' ','黄石','HUANGSHI','HS','715','0714');
citys[179]=new Array( ' ','咸宁','XIANNING','XN','719','0715');
citys[180]=new Array( ' ','荆州','JINGZHOU','JZ','712','0716');
citys[181]=new Array( ' ','宜昌','YICHANG','YC','711','0717');
citys[182]=new Array( ' ','恩施','ENSHI','ES','727','0718');
citys[183]=new Array( ' ','十堰','SHIYAN','SY','721','0719');
citys[184]=new Array( ' ','随州','SUIZHOU','SZ','723','0722');
citys[185]=new Array( ' ','荆门','JINGMEN','JM','724','0724');
citys[186]=new Array( ' ','江汉','JIANGHAN','JH','713','0728');
citys[187]=new Array( ' ','岳阳','YUEYANG','YY','745','0730');
citys[188]=new Array( ' ','长沙','CHANGSHA','CS','741','0731');
citys[189]=new Array( ' ','株洲','ZHUZHOU','ZZ','742','0731');
citys[190]=new Array( ' ','湘潭','XIANGTAN','XT','743','0731');
citys[191]=new Array( ' ','衡阳','HENGYANG','HY','744','0734');
citys[192]=new Array( ' ','郴州','CHENZHOU','CZ','748','0735');
citys[193]=new Array( ' ','常德','CHANGDE','CD','749','0736');
citys[194]=new Array( ' ','益阳','YIYANG','YY','747','0737');
citys[195]=new Array( ' ','娄底','LOUDI','LD','791','0738');
citys[196]=new Array( ' ','邵阳','SHAOYANG','SY','792','0739');
citys[197]=new Array( ' ','湘西','XIANGXI','XX','793','0743');
citys[198]=new Array( ' ','张家界','ZHANGJIAJIE','ZJJ','794','0744');
citys[199]=new Array( ' ','怀化','HUAIHUA','HH','795','0745');
citys[200]=new Array( ' ','永州','YONGZHOU','YZ','796','0746');
citys[201]=new Array( ' ','江门','JIANGMEN','JM','550','0750');
citys[202]=new Array( ' ','韶关','SHAOGUAN','SG','558','0751');
citys[203]=new Array( ' ','惠州','HUIZHOU','HZ','570','0752');
citys[204]=new Array( ' ','梅州','MEIZHOU','MZ','528','0753');
citys[205]=new Array( ' ','汕头','SHANTOU','ST','560','0754');
citys[206]=new Array( ' ','深圳','SHENZHEN','SZ','540','0755');
citys[207]=new Array( ' ','珠海','ZHUHAI','ZH','620','0756');
citys[208]=new Array( ' ','佛山','FOSHAN','FS','530','0757');
citys[209]=new Array( ' ','肇庆','ZHAOQING','ZQ','536','0758');
citys[210]=new Array( ' ','湛江','ZHANJIANG','ZJ','520','0759');
citys[211]=new Array( ' ','中山','ZHONGSHAN','ZS','556','0760');
citys[212]=new Array( ' ','河源','HEYUAN','HY','670','0762');
citys[213]=new Array( ' ','清远','QINGYUAN','QY','535','0763');
citys[214]=new Array( ' ','云浮','YUNFU','YF','538','0766');
citys[215]=new Array( ' ','潮州','CHAOZHOU','CZ','531','0768');
citys[216]=new Array( ' ','东莞','DONGGUAN','DG','580','0769');
citys[217]=new Array( ' ','防城港','FANGCHENGGANG','FCG','590','0770');
citys[218]=new Array( ' ','南宁','NANNING','NN','591','0771');
citys[219]=new Array( ' ','崇左','CHONGZUO','CZ','600','0771');
citys[220]=new Array( ' ','柳州','LIUZHOU','LZ','593','0772');
citys[221]=new Array( ' ','来宾','LAIBIN','LB','601','0772');
citys[222]=new Array( ' ','桂林','GUILIN','GL','592','0773');
citys[223]=new Array( ' ','贺州','HEZHOU','HZ','588','0774');
citys[224]=new Array( ' ','梧州','WUZHOU','WZ','594','0774');
citys[225]=new Array( ' ','贵港','GUIGANG','GG','589','0775');
citys[226]=new Array( ' ','玉林','YULIN','YL','595','0775');
citys[227]=new Array( ' ','百色','BAISE','BS','596','0776');
citys[228]=new Array( ' ','钦州','QINZHOU','QZ','597','0777');
citys[229]=new Array( ' ','河池','HECHI','HC','598','0778');
citys[230]=new Array( ' ','北海','BEIHAI','BH','599','0779');
citys[231]=new Array( ' ','新余','XINYU','XY','753','0790');
citys[232]=new Array( ' ','南昌','NANCHANG','NC','750','0791');
citys[233]=new Array( ' ','九江','JIUJIANG','JJ','755','0792');
citys[234]=new Array( ' ','上饶','SHANGRAO','SR','757','0793');
citys[235]=new Array( ' ','抚州','FUZHOU','FZ','759','0794');
citys[236]=new Array( ' ','宜春','YICHUN','YC','756','0795');
citys[237]=new Array( ' ','吉安','JIAN','JA','751','0796');
citys[238]=new Array( ' ','赣州','GANZHOU','GZ','752','0797');
citys[239]=new Array( ' ','景德镇','JINGDEZHEN','JDZ','740','0798');
citys[240]=new Array( ' ','萍乡','PINGXIANG','PX','758','0799');
citys[241]=new Array( ' ','攀枝花','PANZHIHUA','PZH','813','0812');
citys[242]=new Array( ' ','自贡','ZIGONG','ZG','818','0813');
citys[243]=new Array( ' ','绵阳','MIANYANG','MY','824','0816');
citys[244]=new Array( ' ','南充','NANCHONG','NC','822','0817');
citys[245]=new Array( ' ','达州','DAZHOU','DZ','820','0818');
citys[246]=new Array( ' ','遂宁','SUINING','SN','821','0825');
citys[247]=new Array( ' ','广安','GUANGAN','GA','823','0826');
citys[248]=new Array( ' ','巴中','BAZHONG','BZ','827','0827');
citys[249]=new Array( ' ','泸州','LUZHOU','LZ','815','0830');
citys[250]=new Array( ' ','宜宾','YIBIN','YB','817','0831');
citys[251]=new Array( ' ','内江','NAJIANG','NJ','816','0832');
citys[252]=new Array( ' ','乐山','LESHAN','LS','814','0833');
citys[253]=new Array( ' ','凉山','LIANGSHAN','LS','812','0834');
citys[254]=new Array( ' ','雅安','YAAN','YA','811','0835');
citys[255]=new Array( ' ','甘孜','GANZI','GZ','828','0836');
citys[256]=new Array( ' ','阿坝','ABA','AB','829','0837');
citys[257]=new Array( ' ','德阳','DEYANG','DY','825','0838');
citys[258]=new Array( ' ','广元','GUANGYUAN','GY','826','0839');
citys[259]=new Array( ' ','贵阳','GUIYANG','GY','850','0851');
citys[260]=new Array( ' ','遵义','ZUNYI','ZY','787','0851');
citys[261]=new Array( ' ','安顺','ANSHUN','AS','789','0851');
citys[262]=new Array( ' ','黔南','QIANNAN','QN','788','0854');
citys[263]=new Array( ' ','黔东南','QIANDONGNAN','QDN','786','0855');
citys[264]=new Array( ' ','铜仁','TONGREN','TR','785','0856');
citys[265]=new Array( ' ','毕节','BIJIE','BJ','851','0857');
citys[266]=new Array( ' ','六盘水','LIUPANSHUI','LPS','853','0858');
citys[267]=new Array( ' ','黔西南','QIANXINAN','QXN','852','0859');
citys[268]=new Array( ' ','昭通','ZHAOTONG','ZT','867','0870');
citys[269]=new Array( ' ','昆明','KUNMING','KM','860','0871');
citys[270]=new Array( ' ','大理','DALI','DL','862','0872');
citys[271]=new Array( ' ','红河','HONGHE','HH','861','0873');
citys[272]=new Array( ' ','曲靖','QUJING','QJ','866','0874');
citys[273]=new Array( ' ','保山','BAOSHAN','BS','731','0875');
citys[274]=new Array( ' ','文山','WENSHAN','WS','732','0876');
citys[275]=new Array( ' ','玉溪','YUXI','YX','865','0877');
citys[276]=new Array( ' ','楚雄','CHUXIONG','CX','864','0878');
citys[277]=new Array( ' ','普洱','PUER','PE','869','0879');
citys[278]=new Array( ' ','临沧','LINCANG','LC','733','0883');
citys[279]=new Array( ' ','怒江','NUJIANG','NJ','734','0886');
citys[280]=new Array( ' ','迪庆','DIQING','DQ','735','0887');
citys[281]=new Array( ' ','丽江','LIJIANG','LJ','863','0888');
citys[282]=new Array( ' ','拉萨','LASA','LS','790','0891');
citys[283]=new Array( ' ','日喀则','RIKAZE','RKZ','797','0892');
citys[284]=new Array( ' ','山南','SHANNAN','SN','798','0893');
citys[285]=new Array( ' ','林芝','LINZHI','LZ','799','0894');
citys[286]=new Array( ' ','昌都','CHANGDU','CD','800','0895');
citys[287]=new Array( ' ','那曲','NAQU','NQ','801','0896');
citys[288]=new Array( ' ','阿里','ALI','AL','802','0897');
citys[289]=new Array( ' ','海口','HAIKOU','HK','501','0898');
citys[290]=new Array( ' ','三亚','SANYA','SY','502','0898');
citys[291]=new Array( ' ','儋州','DANZHOU','DZ','503','0898');
citys[292]=new Array( ' ','琼海','QIONGHAI','QH','504','0898');
citys[293]=new Array( ' ','文昌','WENCHANG','WC','505','0898');
citys[294]=new Array( ' ','东方','DONGFANG','DF','506','0898');
citys[295]=new Array( ' ','五指山','WUZHISHAN','WZS','507','0898');
citys[296]=new Array( ' ','万宁','WANNING','WN','508','0898');
citys[297]=new Array( ' ','定安','DINGAN','DA','509','0898');
citys[298]=new Array( ' ','澄迈','CHENGMAI','CM','511','0898');
citys[299]=new Array( ' ','临高','LINGAO','LG','512','0898');
citys[300]=new Array( ' ','陵水','LINGSHUI','LS','513','0898');
citys[301]=new Array( ' ','琼中','QIONGZHONG','QZ','514','0898');
citys[302]=new Array( ' ','保亭','BAOTING','BT','515','0898');
citys[303]=new Array( ' ','乐东','LEDONG','LD','516','0898');
citys[304]=new Array( ' ','昌江','CHANGJIANG','CJ','517','0898');
citys[305]=new Array( ' ','白沙','BAISHA','BS','518','0898');
citys[306]=new Array( ' ','屯昌','TUNCHANG','TC','519','0898');
citys[307]=new Array( ' ','塔城','TACHENG','TC','952','0901');
citys[308]=new Array( ' ','哈密','HAMI','HM','900','0902');
citys[309]=new Array( ' ','和田','HETIAN','HT','955','0903');
citys[310]=new Array( ' ','阿勒泰','ALETAI','ALT','953','0906');
citys[311]=new Array( ' ','克州','KEZHOU','KZ','954','0908');
citys[312]=new Array( ' ','博乐','BOLE','BL','951','0909');
citys[313]=new Array( ' ','延安','YANAN','YA','842','0911');
citys[314]=new Array( ' ','榆林','YULIN','YL','845','0912');
citys[315]=new Array( ' ','渭南','WEINAN','WN','843','0913');
citys[316]=new Array( ' ','商洛','SHANGLUO','SL','847','0914');
citys[317]=new Array( ' ','安康','ANKANG','AK','848','0915');
citys[318]=new Array( ' ','汉中','HANZHONG','HZ','849','0916');
citys[319]=new Array( ' ','宝鸡','BAOJI','BJ','840','0917');
citys[320]=new Array( ' ','铜川','TONGCHUAN','TC','846','0919');
citys[321]=new Array( ' ','临夏','LINXIA','LX','878','0930');
citys[322]=new Array( ' ','兰州','LANZHOU','LZ','870','0931');
citys[323]=new Array( ' ','定西','DINGXI','DX','871','0932');
citys[324]=new Array( ' ','平凉','PINGLIANG','PL','872','0933');
citys[325]=new Array( ' ','庆阳','QINGYANG','QY','873','0934');
citys[326]=new Array( ' ','武威','WUWEI','WW','874','0935');
citys[327]=new Array( ' ','金昌','JINCHANG','JC','930','0935');
citys[328]=new Array( ' ','张掖','ZHANGYE','ZY','875','0936');
citys[329]=new Array( ' ','嘉峪关','JIAYUGUAN','JYG','876','0937');
citys[330]=new Array( ' ','酒泉','JIUQUAN','JQ','931','0937');
citys[331]=new Array( ' ','天水','TIANSHUI','TS','877','0938');
citys[332]=new Array( ' ','陇南','LONGNAN','LN','960','0939');
citys[333]=new Array( ' ','甘南','GANNAN','GN','961','0941');
citys[334]=new Array( ' ','白银','BAIYIN','BY','879','0943');
citys[335]=new Array( ' ','银川','YINCHUAN','YC','880','0951');
citys[336]=new Array( ' ','石嘴山','SHIZUISHAN','SZS','884','0952');
citys[337]=new Array( ' ','吴忠','WUZHONG','WZ','883','0953');
citys[338]=new Array( ' ','固原','GUYUAN','GY','885','0954');
citys[339]=new Array( ' ','中卫','ZHONGWEI','ZW','886','0955');
citys[340]=new Array( ' ','海北洲','HAIBEIZHOU','HBZ','706','0970');
citys[341]=new Array( ' ','西宁','XINING','XN','700','0971');
citys[342]=new Array( ' ','海东','HAIDONG','HD','701','0972');
citys[343]=new Array( ' ','黄南州','HUANGNANZHOU','HNZ','707','0973');
citys[344]=new Array( ' ','海南洲','HAINANZHOU','HNZ','705','0974');
citys[345]=new Array( ' ','果洛州','GUOLUOZHOU','GLZ','708','0975');
citys[346]=new Array( ' ','玉树州','YUSHUZHOU','YSZ','709','0976');
citys[347]=new Array( ' ','海西洲','HAIXIZHOU','HXZ','704','0977');
citys[348]=new Array( ' ','格尔木','GEERMU','GEM','702','0979');
citys[349]=new Array( ' ','克拉玛依','KELAMAYI','KLMY','899','0990');
citys[350]=new Array( ' ','乌鲁木齐','WULUMUQI','WLMQ','890','0991');
citys[351]=new Array( ' ','奎屯','KUITUN','KT','892','0992');
citys[352]=new Array( ' ','石河子','SHIHEZI','SHZ','893','0993');
citys[353]=new Array( ' ','昌吉','CHANGJI','CJ','891','0994');
citys[354]=new Array( ' ','吐鲁番','TULUFAN','TLF','894','0995');
citys[355]=new Array( ' ','巴州','BAZHOU','BZ','895','0996');
citys[356]=new Array( ' ','阿克苏','AKESU','AKS','896','0997');
citys[357]=new Array( ' ','喀什','KASHI','KS','897','0998');
citys[358]=new Array( ' ','伊犁','YILI','YL','898','0999');
citys[359]=new Array( ' ','浏阳','LIUYANG','LY','746','0731');
citys[360]=new Array( ' ','景洪','JINGHONG','JH','868','0691');

/* Copyright (c) 2007 Paul Bakaus (paul.bakaus@googlemail.com) and Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * download by http://www.codefans.net
 * $LastChangedDate: 2007-12-20 08:46:55 -0600 (Thu, 20 Dec 2007) $
 * $Rev: 4259 $
 *
 * Version: 1.2
 *
 * Requires: jQuery 1.2+
 */

(function($){

    $.dimensions = {
        version: '1.2'
    };

// Create innerHeight, innerWidth, outerHeight and outerWidth methods
    $.each( [ 'Height', 'Width' ], function(i, name){

        // innerHeight and innerWidth
        $.fn[ 'inner' + name ] = function() {
            if (!this[0]) return;

            var torl = name == 'Height' ? 'Top'    : 'Left',  // top or left
                borr = name == 'Height' ? 'Bottom' : 'Right'; // bottom or right

            return this.is(':visible') ? this[0]['client' + name] : num( this, name.toLowerCase() ) + num(this, 'padding' + torl) + num(this, 'padding' + borr);
        };

        // outerHeight and outerWidth
        $.fn[ 'outer' + name ] = function(options) {
            if (!this[0]) return;

            var torl = name == 'Height' ? 'Top'    : 'Left',  // top or left
                borr = name == 'Height' ? 'Bottom' : 'Right'; // bottom or right

            options = $.extend({ margin: false }, options || {});

            var val = this.is(':visible') ?
                this[0]['offset' + name] :
                num( this, name.toLowerCase() )
                + num(this, 'border' + torl + 'Width') + num(this, 'border' + borr + 'Width')
                + num(this, 'padding' + torl) + num(this, 'padding' + borr);

            return val + (options.margin ? (num(this, 'margin' + torl) + num(this, 'margin' + borr)) : 0);
        };
    });

// Create scrollLeft and scrollTop methods
    $.each( ['Left', 'Top'], function(i, name) {
        $.fn[ 'scroll' + name ] = function(val) {
            if (!this[0]) return;

            return val != undefined ?

                // Set the scroll offset
                this.each(function() {
                    this == window || this == document ?
                        window.scrollTo(
                            name == 'Left' ? val : $(window)[ 'scrollLeft' ](),
                            name == 'Top'  ? val : $(window)[ 'scrollTop'  ]()
                        ) :
                        this[ 'scroll' + name ] = val;
                }) :

                // Return the scroll offset
                this[0] == window || this[0] == document ?
                    self[ (name == 'Left' ? 'pageXOffset' : 'pageYOffset') ] ||
                    $.boxModel && document.documentElement[ 'scroll' + name ] ||
                    document.body[ 'scroll' + name ] :
                    this[0][ 'scroll' + name ];
        };
    });

    $.fn.extend({
        position: function() {
            var left = 0, top = 0, elem = this[0], offset, parentOffset, offsetParent, results;

            if (elem) {
                // Get *real* offsetParent
                offsetParent = this.offsetParent();

                // Get correct offsets
                offset       = this.offset();
                parentOffset = offsetParent.offset();

                // Subtract element margins
                offset.top  -= num(elem, 'marginTop');
                offset.left -= num(elem, 'marginLeft');

                // Add offsetParent borders
                parentOffset.top  += num(offsetParent, 'borderTopWidth');
                parentOffset.left += num(offsetParent, 'borderLeftWidth');

                // Subtract the two offsets
                results = {
                    top:  offset.top  - parentOffset.top,
                    left: offset.left - parentOffset.left
                };
            }

            return results;
        },

        offsetParent: function() {
            var offsetParent = this[0].offsetParent;
            while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && $.css(offsetParent, 'position') == 'static') )
                offsetParent = offsetParent.offsetParent;
            return $(offsetParent);
        }
    });

    function num(el, prop) {
        return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0;
    };

})(jQuery);(function($) {

    $.suggest = function(input, options) {

        var $input = $(input).attr("autocomplete", "off");
        var $results;
        var timeout = false;
        var prevLength = 0;
        var cache = [];
        var cacheSize = 0;
        var validCityFlag = true;
        var hideDiv = true;
        var isSuggestShow = false;

        if($.trim($input.val())=='' || $.trim($input.val())==options.hintText) $input.val(options.hintText);
        if( ! options.attachObject ) {
            options.attachObject = $(document.createElement("ul")).appendTo('body');
        }

        $results = $(options.attachObject);
        $results.addClass(options.resultsClass);

        resetPosition();
        $(window)
            .load(resetPosition)    // just in case user is changing size of page while loading
            .resize(resetPosition);

        $input.blur(function() {
            setTimeout(function() { if (hideDiv){$results.hide()} }, 200);
            setTimeout(function() { $(options.hotObject).hide() }, 200);
            if($input.val()==""){
                $input.val(options.hintText);
                $(options.hideCode).val('');
                $(options.dataContainer).val('');
            } else if (isSuggestShow){
                selectCurrentResult();
            }
        });
        $(options.attachObject).live("mouseover", function(){
            hideDiv = false;
        });
        $(options.attachObject).mouseout(function(){
            hideDiv = true;
        });
        $input.focus(function(){
            if($.trim($(this).val())==options.hintText){
                $(this).val('');
            }
        });
        $input.click(function(){
            hideSuggestCity();
            showHotCity();
        });

        $input.keyup(processKey);

        function hideHotCity() {
            $(options.hotObject).hide();
        }
        function showHotCity() {
            if (!isSuggestShow) {
                $(options.hotObject).show();
            }
        }
        function hideSuggestCity() {
            if($.trim($input.val())=='' || $.trim($input.val())==options.hintText){
                $(options.attachObject).hide();
                isSuggestShow = false;
            }
        }
        function showSuggestCity() {
            $(options.attachObject).show();
            isSuggestShow = true;
            hideHotCity();
        }
        function resetPosition() {
            // requires jquery.dimension plugin
            var offset = $input.offset();
        }
        function processKey(e) {
            // handling up/down/escape requires results to be visible
            // handling enter/tab requires that AND a result to be selected
            if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) || (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                e.cancelBubble = true;
                e.returnValue = false;
                switch(e.keyCode) {
                    case 38: // up
                        prevResult();
                        break;
                    case 40: // down
                        nextResult();
                        break;
                    case 13: // return
                        selectCurrentResult();
                        break;
                    case 27: //  escape
                        $results.hide();
                        break;
                }
            } else if ($input.val().length != prevLength) {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(suggest, options.delay);
                prevLength = $input.val().length;
            }
        }
        function suggest() {
            var q = $.trim($input.val());
            hideHotCity();
            displayItems(q);
        }
        function displayItems(items) {
            var html = '';
            var countTotal = 0;
            if (items=='') {
                $results.html(html);
                hideSuggestCity();
                $(options.hideCode).val('');
                $(options.dataContainer).val('');
                return;
            }
            else {
                for (var i = 0; i < options.source.length; i++) {//国内城市匹配
                    var reg = new RegExp('^' + items + '.*$', 'im');
                    if (reg.test(options.source[i][1])) {
                        var content = '<label class="inputlabel">'+items+'</label>'+options.source[i][1].substring(items.length);
                        html += '<li class="ac" rel="' + options.source[i][0] + '"><a href="javascript:void();" rel="'+options.source[i][1]+'" id="'+options.source[i][4]+'" >' + content + '</a></li>';
                        countTotal = countTotal + 1;
                        if (countTotal >= Number(options.maxItems)) {
                            break;
                        } else {
                            continue;
                        }
                    }
                    if (reg.test(options.source[i][2])) {
                        var content = '<label class="inputlabel">'+items.toLowerCase()+'</label>'+options.source[i][2].substring(items.length).toLowerCase();
                        html += '<li class="ac" rel="' + options.source[i][0] + '"><a href="javascript:void();"rel="'+options.source[i][1]+'" id="'+options.source[i][4]+'" >' + content + '(' + options.source[i][1] + ')</a></li>';
                        countTotal = countTotal + 1;
                        if (countTotal >= Number(options.maxItems)) {
                            break;
                        } else {
                            continue;
                        }
                    }
                    if (reg.test(options.source[i][3])) {
                        var content = '<label class="inputlabel">'+items.toLowerCase()+'</label>'+options.source[i][3].substring(items.length).toLowerCase();
                        html += '<li class="ac" rel="' + options.source[i][0] + '"><a href="javascript:void();"rel="'+options.source[i][1]+'" id="'+options.source[i][4]+'" >' + content + '(' + options.source[i][1] + ')</a></li>';
                        countTotal = countTotal + 1;
                        if (countTotal >= Number(options.maxItems)) {
                            break;
                        } else {
                            continue;
                        }
                    }
                }
                if (html == '') {
                    html = '<div class="gray acResultTip"><ul class="nonedisplay"><li class="ac_over nonedisplay"><a rel="'+options.hintText+'"></a></li></ul>对不起，找不到该地市</div>';
                    validCityFlag = false;
                }
                else {
                    html = '<div id="scrollDiv"><ul>' + html + '</ul></div>';
                }
            }

            $results.html(html);
            showSuggestCity();
            $results.children('div').children('ul').children('li:first-child').addClass(options.selectClass);
            $results.children('div').children('ul').children('li')
                .mouseover(function() {
                    $results.children('div').children('ul').children('li').removeClass(options.selectClass);
                    $(this).addClass(options.selectClass);
                })
                .click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    selectCurrentResult();
                });
        }
        function getCurrentResult() {
            if (!$results.is(':visible')){
                return false;
            }
            var $currentResult = $results.children('div').children('ul').children('li.' + options.selectClass);
            if (!$currentResult.length){
                $currentResult = false;
            }
            return $currentResult;
        }

        function selectCurrentResult() {
            isSuggestShow = false;
            $currentResult = getCurrentResult();
            if ($currentResult) {
                var areaCode = $currentResult.children('a').attr("id");
                $(options.hideCode).val(areaCode);
                $input.val($currentResult.children('a').attr('rel'));
                prevLength = $input.val().length;
                if ($input.val()==options.hintText) {
                    $input.attr("style","");
                }
                $results.hide();

                if( $(options.dataContainer) ) {
                    $(options.dataContainer).val($currentResult.attr('rel'));
                }

                if (options.onSelect) {
                    options.onSelect.apply($input[0]);
                }
                options.change();
            }
        }
        function nextResult() {
            $currentResult = getCurrentResult();
            if ($currentResult && $currentResult.next().length) {
                $currentResult.removeClass(options.selectClass).next().addClass(options.selectClass);
            }
            else {
                $currentResult.removeClass(options.selectClass);
                $results.children('div').children('ul').children('li:first-child').addClass(options.selectClass);
            }
        }
        function prevResult() {
            $currentResult = getCurrentResult();
            if ($currentResult && $currentResult.prev().length){
                $currentResult.removeClass(options.selectClass).prev().addClass(options.selectClass);
            }
            else {
                $currentResult.removeClass(options.selectClass);
                $results.children('div').children('ul').children('li:last-child').addClass(options.selectClass);
            }
        }
    }
    $.fn.suggest = function(source, options) {
        if (!source){
            return;
        }
        options = options || {};
        options.source = source;
        options.hot_list=options.hot_list || [];
        options.delay = options.delay || 0;
        options.resultsClass = options.resultsClass || 'suggestcity';
        options.selectClass = options.selectClass || 'ac_over';
        options.matchClass = options.matchClass || 'ac_match';
        options.minchars = options.minchars || 1;
        options.delimiter = options.delimiter || '\n';
        options.onSelect = options.onSelect || false;
        options.dataDelimiter = options.dataDelimiter || '\t';
        options.dataContainer = options.dataContainer || '#arrcityWord';
        options.attachObject = options.attachObject || '#suggestCity';
        options.hotObject = options.hotObject || '#hotCity';
        options.hintText = options.hintText || '';
        options.maxItems = options.maxItems || 10;
        options.hideCode = options.hideCode || '#areaCode'
        this.each(function() {
            new $.suggest(this, options);
        });
        return this;
    };
})(jQuery);﻿var mails=new Array();

mails[0]=new Array('wo.com.cn');
mails[1]=new Array('qq.com');
mails[2]=new Array('gmail.com');
mails[3]=new Array('126.com');
mails[4]=new Array('163.com');
mails[5]=new Array('hotmail.com');
mails[6]=new Array('live.com');
mails[7]=new Array('sohu.com');
mails[8]=new Array('sina.com');(function($) {

    $.loginmailsuggest = function(input, options) {

        var $input = $(input).attr("autocomplete", "off");
        var $results;
        var timeout = false;
        var prevLength = 0;
        var cache = [];
        var cacheSize = 0;
        var hideDiv = true;
        var isSuggestShow = false;

        if($.trim($input.val())=='' || $.trim($input.val())==options.hintText) $input.val(options.hintText);
        if( ! options.attachObject ) {
            options.attachObject = $(document.createElement("ul")).appendTo('body');
        }

        $results = $(options.attachObject);
        $results.addClass(options.resultsClass);

        resetPosition();
        $(window)
            .load(resetPosition)    // just in case user is changing size of page while loading
            .resize(resetPosition);

        $input.blur(function() {
            setTimeout(function() { if (hideDiv){$results.hide()} }, 200);
            if($input.val()==""){
                $input.val(options.hintText);
            } else if (isSuggestShow){
                selectCurrentResult();
            }
        });
        $(options.attachObject).live("mouseover", function(){
            hideDiv = false;
        });
        $(options.attachObject).mouseout(function(){
            hideDiv = true;
        });
        $input.focus(function(){
            if($.trim($(this).val())==options.hintText){
                $(this).val('');
            }
        });

        $input.keyup(processKey);
        function hideSuggestCity() {
            $(options.attachObject).hide();
            isSuggestShow = false;
        }
        function showSuggestCity() {
            $(options.attachObject).show();
            isSuggestShow = true;
        }
        function resetPosition() {
            // requires jquery.dimension plugin
            var offset = $input.offset();
        }
        function processKey(e) {
            // handling up/down/escape requires results to be visible
            // handling enter/tab requires that AND a result to be selected
            if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) || (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                e.cancelBubble = true;
                e.returnValue = false;
                switch(e.keyCode) {
                    case 38: // up
                        prevResult();
                        break;
                    case 40: // down
                        nextResult();
                        break;
                    case 13: // return
                        selectCurrentResult();
                        break;
                    case 27: //  escape
                        $results.hide();
                        break;
                }
            } else if ($input.val().length != prevLength) {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(suggest, options.delay);
                prevLength = $input.val().length;
            }
        }
        function suggest() {
            var q = $.trim($input.val());
            if(q==""){
                $results.html("");
                hideSuggestCity();
                return;
            }
            var qs=q.split("@");
            if(qs.length<=2&&q.indexOf("@")>0){
                displayItems(q);
            }else{
                $results.html("");
                hideSuggestCity();
                return;
            }
        }
        function displayItems(items) {
            var countTotal = 0;
            var inputs=items.split("@");
            var flag = inputs.length == 2;
            var html = '<li class="mailc"><a href="javascript:void();" >' + items + '</a></li>';
            for (var i = 0; i < options.source.length; i++){
                if(flag){
                    var reg = new RegExp('^' + inputs[1] + '.*$', 'im');
                    if (reg.test(options.source[i][0])){
                        var content = inputs[0]+'@'+options.source[i][0];
                        html += '<li class="mailc"><a href="javascript:void();" >' + content + '</a></li>';
                        countTotal = countTotal + 1;
                        if (countTotal >= Number(options.maxItems)) {
                            break;
                        } else {
                            continue;
                        }
                    }
                }else{
                    var content = inputs[0]+'@'+options.source[i][0];
                    html += '<li class="mailc"><a href="javascript:void();" >' + content + '</a></li>';
                    countTotal = countTotal + 1;
                    if (countTotal >= Number(options.maxItems)) {
                        break;
                    } else {
                        continue;
                    }
                }
            }
            html = '<div id="scrollDiv"><ul>' + html + '</ul></div>';

            $results.html(html);
            showSuggestCity();
            $results.children('div').children('ul').children('li:first-child').addClass(options.selectClass);
            $results.children('div').children('ul').children('li')
                .mouseover(function() {
                    $results.children('div').children('ul').children('li').removeClass(options.selectClass);
                    $(this).addClass(options.selectClass);
                })
                .click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    selectCurrentResult();
                });
        }
        function getCurrentResult() {
            if (!$results.is(':visible')){
                return false;
            }
            var $currentResult = $results.children('div').children('ul').children('li.' + options.selectClass);
            if (!$currentResult.length){
                $currentResult = false;
            }
            return $currentResult;
        }

        function selectCurrentResult() {
            isSuggestShow = false;
            $currentResult = getCurrentResult();
            if ($currentResult) {
                $input.val($currentResult.children('a').html());
                prevLength = $input.val().length;
                if ($input.val()==options.hintText) {
                    $input.attr("style","");
                }
                $results.hide();

                if (options.onSelect) {
                    options.onSelect.apply($input[0]);
                }
            }
        }
        function nextResult() {
            $currentResult = getCurrentResult();
            if ($currentResult && $currentResult.next().length) {
                $currentResult.removeClass(options.selectClass).next().addClass(options.selectClass);
            }
            else {
                $currentResult.removeClass(options.selectClass);
                $results.children('div').children('ul').children('li:first-child').addClass(options.selectClass);
            }
        }
        function prevResult() {
            $currentResult = getCurrentResult();
            if ($currentResult && $currentResult.prev().length){
                $currentResult.removeClass(options.selectClass).prev().addClass(options.selectClass);
            }
            else {
                $currentResult.removeClass(options.selectClass);
                $results.children('div').children('ul').children('li:last-child').addClass(options.selectClass);
            }
        }
    }
    $.fn.loginmailsuggest = function(options) {
        options = options || {};
        options.source = options.source||[];
        options.delay = options.delay || 0;
        options.resultsClass = options.resultsClass || 'mailauto';
        options.selectClass = options.selectClass || 'mail_over';
        options.matchClass = options.matchClass || 'ac_match';
        options.minchars = options.minchars || 1;
        options.delimiter = options.delimiter || '\n';
        options.onSelect = options.onSelect || false;
        options.dataDelimiter = options.dataDelimiter || '\t';
        options.attachObject = options.attachObject || '#mailauto';
        options.hintText = options.hintText || '';
        options.maxItems = options.maxItems || 10;
        this.each(function() {
            new $.loginmailsuggest(this, options);
        });
        return this;
    };
})(jQuery);(function($) {

    $.mailsuggest = function(input, options) {

        var $input = $(input).attr("autocomplete", "off");
        var $results;
        var timeout = false;
        var prevLength = 0;
        var cache = [];
        var cacheSize = 0;
        var hideDiv = true;
        var isSuggestShow = false;

        if($.trim($input.val())=='' || $.trim($input.val())==options.hintText) $input.val(options.hintText);
        if( ! options.attachObject ) {
            options.attachObject = $(document.createElement("ul")).appendTo('body');
        }

        $results = $(options.attachObject);
        $results.addClass(options.resultsClass);

        resetPosition();
        $(window)
            .load(resetPosition)    // just in case user is changing size of page while loading
            .resize(resetPosition);

        $input.blur(function() {
            setTimeout(function() { if (hideDiv){$results.hide()} }, 200);
            if($input.val()==""){
                $input.val(options.hintText);
            } else if (isSuggestShow){
                selectCurrentResult();
            }
        });
        $(options.attachObject).live("mouseover", function(){
            hideDiv = false;
        });
        $(options.attachObject).mouseout(function(){
            hideDiv = true;
        });
        $input.focus(function(){
            if($.trim($(this).val())==options.hintText){
                $(this).val('');
            }
        });

        $input.keyup(processKey);
        function hideSuggestCity() {
            $(options.attachObject).hide();
            isSuggestShow = false;
        }
        function showSuggestCity() {
            $(options.attachObject).show();
            isSuggestShow = true;
        }
        function resetPosition() {
            // requires jquery.dimension plugin
            var offset = $input.offset();
        }
        function processKey(e) {
            // handling up/down/escape requires results to be visible
            // handling enter/tab requires that AND a result to be selected
            if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) || (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                e.cancelBubble = true;
                e.returnValue = false;
                switch(e.keyCode) {
                    case 38: // up
                        prevResult();
                        break;
                    case 40: // down
                        nextResult();
                        break;
                    case 13: // return
                        selectCurrentResult();
                        break;
                    case 27: //  escape
                        $results.hide();
                        break;
                }
            } else if ($input.val().length != prevLength) {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(suggest, options.delay);
                prevLength = $input.val().length;
            }
        }
        function suggest() {
            var q = $.trim($input.val());
            displayItems(q);
        }
        function displayItems(items) {
            var html = '';
            var countTotal = 0;
            if (items=='') {
                $results.html(html);
                hideSuggestCity();
                return;
            }
            else {
                var inputs=items.split("@");
                if(inputs.length>2){
                    $results.html(html);
                    hideSuggestCity();
                    return;
                }
                var flag = inputs.length == 2;
                for (var i = 0; i < options.source.length; i++) {
                    if(flag){
                        var reg = new RegExp('^' + inputs[1] + '.*$', 'im');
                        if (reg.test(options.source[i][0])){
                            var content = inputs[0]+'@'+options.source[i][0];
                            html += '<li class="mailc"><a href="javascript:void();" >' + content + '</a></li>';
                            countTotal = countTotal + 1;
                            if (countTotal >= Number(options.maxItems)) {
                                break;
                            } else {
                                continue;
                            }
                        }
                    }else{
                        var content = inputs[0]+'@'+options.source[i][0];
                        html += '<li class="mailc"><a href="javascript:void();" >' + content + '</a></li>';
                        countTotal = countTotal + 1;
                        if (countTotal >= Number(options.maxItems)) {
                            break;
                        } else {
                            continue;
                        }
                    }
                }
                if (html == '') {
                    $results.html(html);
                    hideSuggestCity();
                    return;
                }
                else {
                    html = '<div id="scrollDiv"><ul>' + html + '</ul></div>';
                }
            }

            $results.html(html);
            showSuggestCity();
            $results.children('div').children('ul').children('li:first-child').addClass(options.selectClass);
            $results.children('div').children('ul').children('li')
                .mouseover(function() {
                    $results.children('div').children('ul').children('li').removeClass(options.selectClass);
                    $(this).addClass(options.selectClass);
                })
                .click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    selectCurrentResult();
                });
        }
        function getCurrentResult() {
            if (!$results.is(':visible')){
                return false;
            }
            var $currentResult = $results.children('div').children('ul').children('li.' + options.selectClass);
            if (!$currentResult.length){
                $currentResult = false;
            }
            return $currentResult;
        }

        function selectCurrentResult() {
            isSuggestShow = false;
            $currentResult = getCurrentResult();
            if ($currentResult) {
                $input.val($currentResult.children('a').html());
                prevLength = $input.val().length;
                if ($input.val()==options.hintText) {
                    $input.attr("style","");
                }
                $results.hide();

                if (options.onSelect) {
                    options.onSelect.apply($input[0]);
                }
            }
        }
        function nextResult() {
            $currentResult = getCurrentResult();
            if ($currentResult && $currentResult.next().length) {
                $currentResult.removeClass(options.selectClass).next().addClass(options.selectClass);
            }
            else {
                $currentResult.removeClass(options.selectClass);
                $results.children('div').children('ul').children('li:first-child').addClass(options.selectClass);
            }
        }
        function prevResult() {
            $currentResult = getCurrentResult();
            if ($currentResult && $currentResult.prev().length){
                $currentResult.removeClass(options.selectClass).prev().addClass(options.selectClass);
            }
            else {
                $currentResult.removeClass(options.selectClass);
                $results.children('div').children('ul').children('li:last-child').addClass(options.selectClass);
            }
        }
    }
    $.fn.mailsuggest = function(options) {
        options = options || {};
        options.source = options.source||[];
        options.delay = options.delay || 0;
        options.resultsClass = options.resultsClass || 'registermailauto';
        options.selectClass = options.selectClass || 'mail_over';
        options.matchClass = options.matchClass || 'ac_match';
        options.minchars = options.minchars || 1;
        options.delimiter = options.delimiter || '\n';
        options.onSelect = options.onSelect || false;
        options.dataDelimiter = options.dataDelimiter || '\t';
        options.attachObject = options.attachObject || '#registerMailAuto';
        options.hintText = options.hintText || '';
        options.maxItems = options.maxItems || 10;
        this.each(function() {
            new $.mailsuggest(this, options);
        });
        return this;
    };
})(jQuery);﻿document.domain="10010.com";var loginCommon = {};
$(function(){
    $(".gofl").live('click', function() {
        $(".mpLogin").hide();
        $(".fixedLineLogin").show();
        loginCommon.hideErrorTips();
        loginCommon.initUnicomLoginBox();
        loginCommon.resizeUnicomBoxHeight();
        if (loginCommon.isShowVerifyUnicom == "0") {
            loginCommon.refreshUnicomVerify();
        }
        loginCommon.hideDrop();
    });
    $(".gomp").live('click', function() {
        $(".fixedLineLogin").hide();
        $(".mpLogin").show();
        loginCommon.resizeLoginBoxHeight();
        loginCommon.hideErrorTips();
        if (loginCommon.isShowVerify == "0") {
            loginCommon.refreshLoginVerify();
        }
    });
    $("#userName").loginmailsuggest({
        source:mails,
        attachObject:'#mailauto',
        hintText:$("#userName").attr("data-value"),
        maxItems:10
    });
    $("#arrcity").suggest(citys,{
        hot_list:commoncitys,
        dataContainer:'#arrcityWord',
        attachObject:'#suggestCity',
        hotObject:'#hotCity',
        hintText:$("#arrcity").attr("data-value"),
        maxItems:10,
        hideCode:'#areaCode',
        change:function(){
            loginCommon.checkNeedVerify();
        }
    });
    $(".checkNum,#arrcity,#userPwd,#tokenPwd,#userCK").live({
        focus:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==datav)_this.val("").css({"color":"#333","font-weight":"bold"});
        },blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==""){
                _this.val(datav).css({"color":"","font-weight":""});
            }
        }
    });
    $(".username").live({
        focus:function() {
            var _this = $(this), datav = _this.attr("data-value"), val = _this.val();
            if (val == datav) _this.val("").css({"color": "#333", "font-weight": "bold"});
            if ($("#pwdType").val() == "02" && val == "手机号码") _this.val("").css({
                "color": "#333",
                "font-weight": "bold"
            });
        }
        // },blur:function(){
        //     var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
        //     if(val==""){
        //         if ($("#pwdType").val() == "02") {
        //             _this.val("手机号码").css({"color":"","font-weight":""});
        //         } else {
        //             _this.val(datav).css({"color":"","font-weight":""});
        //         }
        //     }
        // }
    });
    $("#userName").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==""){
                if ($("#pwdType").val() == "02") {
                    _this.val("手机号码").css({"color":"","font-weight":""});
                } else {
                    _this.val(datav).css({"color":"","font-weight":""});
                }
            }
            if(val=="" || val==datav || val == "手机号码"){
                loginCommon.hideArea();
                loginCommon.hideForgotUsername();
                loginCommon.showErrorTips(loginCommon.userNameError,loginCommon.getUserNameErrorMsg());
                loginCommon.hideVerify();
                loginCommon.hideCKVerify();
                return;
            }
            setTimeout(function(){

                if(!loginCommon.checkUserName()&&loginCommon.lastUserName!=val){
                    loginCommon.lastUserName=val;
                    loginCommon.checkNeedVerify();
                }
                if(!(loginCommon.isMobile($("#userName").val()) && $("#pwdType").val() == "01")){
                    loginCommon.hideCKVerify();
                }
            },100);
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
        },keyup:function(){
            var _this = $(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                _this.parents("dd").find(".sl-delect").hide();
            } else {
                _this.parents("dd").find(".sl-delect").show();
            }
        }
    });
    $(".sl-delect").live({
        click:function(){
            var inputObj=$(this).parents("dd").find("input"),datav=$(inputObj).attr("data-value"),objId=$(inputObj).attr("id");
            if (objId=="userName" && $("#pwdType").val() == "02") {
                $(inputObj).val("手机号码").css({"color":"","font-weight":""});
            } else {
                $(inputObj).val(datav).css({"color":"","font-weight":""});
            }
            $(this).hide();
            loginCommon.hideErrorTips();
            if(objId=="userName"){
                setTimeout(function(){
                    loginCommon.initLoginWithoutRm();
                },150);
                loginCommon.hideDrop();
                loginCommon.hideCKVerify();
            }
        }
    });
    $('#userPwd').bind('input propertychange', function() {
        if($(this).val().length >0){
            $("#pwdPlaceholder").hide();
        }
    });
    $("#userPwd").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                $("#userPwdDiv").addClass("showPlaceholder");
                loginCommon.showErrorTips(loginCommon.userPwdError,loginCommon.getUserPwdErrorTips());
                return;
            }
            loginCommon.checkPwd();
        },focus:function() {
            $("#userPwdDiv").removeClass("showPlaceholder");
        },keyup:function() {
            var _this=$(this),val=_this.val();
            _this.val(val.replace(/[^\w\.\/]/ig,''));
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
            if (currKey == 13) {
                if (loginCommon.isShowVerify != "0" || loginCommon.isShowVerify == "0" && $("#verifyCode").val() != "" && loginCommon.rightVerify == $("#verifyCode").val()) {
                    $("#login1").focus();
                    $("#login1").trigger("click");
                }
            }
        }
    });

    $('#userCK').bind('input propertychange', function() {
        if($(this).val().length >0){
            $("#CKPlaceholder").hide();
        }
    });
    $("#userCK").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                $("#userCKDiv").addClass("showPlaceholder");
                loginCommon.showErrorTips(loginCommon.userCKError,CommonConstants.IS_EMPTY_CKVERIFYCODE );
                return;
            }
        },focus:function() {
            $("#userCKDiv").removeClass("showPlaceholder");
        },keyup:function() {
            var _this=$(this),val=_this.val();
            _this.val(val.replace(/[^\w\.\/]/ig,''));
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
        }
    });
    $(".checkNum").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val(),len=_this.attr("maxlength");
            if(val=="" || val==datav){
                loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_EMPTY_VERIFYCODE);
            }else if(val.length!=len){
                _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
                loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_LESS_VERIFYCODE);
            }
        },keyup:function(){
            var _this=$(this),val=_this.val(),len=_this.attr("maxlength");
            if (val.length==len) {
                var verifyId = _this.attr("id");
                loginCommon.hideErrorTips();
                if (verifyId == "verifyCode" || verifyId == "verifyCodeUnicom") {
                    loginCommon.checkVerifyCodeImt(this);
                } else if (verifyId == "verifyCodeRegister") {
                    loginCommon.checkVerifyCodeRImt(this);
                }
            } else {
                _this.parents("dl").find("dt").removeClass("icon04 icon05").addClass("icon03");
            }
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
            if (currKey == 13) {
                var _this=$(this),verifyId = _this.attr("id");
                if (verifyId == "verifyCode") {
                    $("#login1").focus();
                    $("#login1").trigger("click");
                } else if (verifyId == "verifyCodeUnicom") {
                    $("#login2").focus();
                    $("#login2").trigger("click");
                } else {
                    $("#registerBtn").focus();
                    $("#registerBtn").trigger("click");
                }
            }
        }
    });
    $(".login01").live('click', function() {
        $(".fixedLineLogin").hide();
        $(".register").hide();
        $(".mpLogin").show();
        loginCommon.hideErrorTips();
        loginCommon.resizeLoginBoxHeight();
    });
    $(".quickRegist, #quickRegist").live('click', function() {
        $(".fixedLineLogin").hide();
        $(".mpLogin").hide();
        $(".register").show();
        loginCommon.hideErrorTips();
        loginCommon.resizeRegisterHeight();
        loginCommon.refreshRegisterVerify();
    });
    $(".typeText").click(function(){
        if (loginCommon.isShowDrop) {
            loginCommon.showDrop();
        } else {
            loginCommon.hideDrop();
        }
    });
    $("input").focus(function(){
        loginCommon.hideDrop();
        $(this).parents("dl").removeClass("boxStyle boxStyleError").addClass("boxStyleHighLight");
    }).blur(function(){
        $(this).parents("dl").removeClass("boxStyleError boxStyleHighLight").addClass("boxStyle");
    });
    $("#arrcity").focus(function(){
        $(this).parents(".selRegion").removeClass("boxStyle boxStyleError").addClass("boxStyleHighLight");
    }).blur(function(){
        $(this).parents(".selRegion").removeClass("boxStyleError boxStyleHighLight").addClass("boxStyle");
    }).keydown(function(e){
        var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
        if(currKey==32){
            return false;
        }
        var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
        if(val==datav)_this.val("").css({"color":"#333","font-weight":"bold"});
    });
    $(".selType li").hover(
        function(){
            $(this).addClass("hover");
        },
        function(){
            $(this).removeClass("hover");
        }
    );

    $(".selType li").click(function(){
        var _this=$(this),_thisLabelHtml=_this.find("label").html();
        $(".typeText label").html(_thisLabelHtml);
        $("#userType").val("0" + _this.val());
        if($("#userType").val() == "03"){
            loginCommon.showForgotUsername();
        } else {
            loginCommon.hideForgotUsername();
        }
        loginCommon.hideDrop();
    });
    $("#freeRegist").live('click', function() {
        loginCommon.registerAction();
    });
    $("#loginVerifyImg").click(function(){
        loginCommon.refreshLoginVerify();
    });
    $("#unicomVerifyImg").click(function(){
        loginCommon.refreshUnicomVerify();
    });
    $("#registerVerifyImg").click(function(){
        loginCommon.refreshRegisterVerify();
    });
    $(".qq").click(function(){
        loginCommon.loginThird("1000");
    });
    $(".sina").click(function(){
        loginCommon.loginThird("1001");
    });
    $(".tencentweibo").click(function(){
        loginCommon.loginThird("1006");
    });
    $(".netease").click(function(){
        loginCommon.loginThird("1003");
    });
    $(".alipay").click(function(){
        loginCommon.loginThird("1005");
    });
    $("#forgotPwd").click(function(){
        $(this).attr("href",CommonConstants.RESET_PWD_URL);
    });
    $(".close-ico").click(function(){
        $("#hotCity").hide();
    });
    $(".js-hotcitylist").mouseover(function(){
        $(this).addClass("htc-hover");
    }).mouseout(function(){
        $(this).removeClass("htc-hover");
    }).click(function(){
        var selectedCity = $(this).html().trim();
        $("#arrcity").val(selectedCity);
        $("#arrcity").attr("style","color: rgb(51, 51, 51); font-weight: bold;");
        for(var i=0;i<citys.length;i++){
            if (selectedCity ==citys[i][1]){
                $("#areaCode").val(citys[i][4]);
                $("#arrcityWord").val(citys[i][0]);
                break;
            }
        }
        $("#arrcity").focus();
        loginCommon.checkNeedVerify();
    });
    $("#login1").click(function(){
        loginCommon.disableLoginBtn();
        loginCommon.login();
    });
    $("#tokenPwd").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                loginCommon.showErrorTips(loginCommon.tokenError,CommonConstants.IS_EMPTY_MILITOKEN);
                return;
            }
            loginCommon.checkTokenPwd();
        },keyup:function() {
            var _this=$(this),val=_this.val();
            _this.val(val.replace(/[^\w\.\/]/ig,''));
        },keydown:function(e){
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
            if (currKey == 13) {
                var obj=$("#tokenPwd"),len=obj.attr("maxlength"),val=obj.val();
                if (val.length==Number(len)) {
                    $("#miliConfirm").focus();
                    $("#miliConfirm").trigger("click");
                }
            }
        }
    });
    $(".randomCode").click(function(){
        loginCommon.showServiceTips();
        loginCommon.sendRndCode();
        loginCommon.checkNeedVerify();
    });
    $(".serviceCode").click(function(){
        loginCommon.showRndTips();
        loginCommon.hideErrorTips();
        loginCommon.checkNeedVerify();
    });
    $(".randomCodeLogin").click(function(){
        $(".tips").show();
        $(".error").hide();
        $(".randomCodeLogin").hide();
        $(".serviceCodeLogin").show();
        $("#randomCode").show();
        $("#pwdType").val(CommonConstants.PWD_TYPE_RND);
        $("#userPwd").val("").css({"color":"","font-weight":""});
        $("#userPwdDiv").addClass("showPlaceholder");
        $("#pwdPlaceholder").removeClass("placeholdermargintop").addClass("placeholdermargintoprandom").html(CommonConstants.PWD_TIPS_RND);
        $("#pwdPlaceholder").show();
        if (!loginCommon.isMobile($("#userName").val())) {
            $("#userName").val("手机号码").css({"color":"","font-weight":""});
            $("#userName").parents("dd").find(".sl-delect").hide();
            loginCommon.hideArea();
            loginCommon.hideForgotUsername();
            loginCommon.hideVerify();
        } else {
            loginCommon.hideCKVerify();
            loginCommon.sendRndCode();
            loginCommon.checkNeedVerify();
        }
    });
    $(".serviceCodeLogin").click(function(){
        $(".tips").show();
        $(".error").hide();
        $(".serviceCodeLogin").hide();
        $(".randomCodeLogin").show();
        $("#randomCode").hide();
        $("#userPwd").val("").css({"color":"","font-weight":""});
        $("#userPwdDiv").addClass("showPlaceholder");
        $("#pwdPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").html(CommonConstants.PWD_TIPS_SERVICE);
        $("#pwdPlaceholder").show();
        $("#pwdType").val(CommonConstants.PWD_TYPE_SERVICE);
        if ($("#userName").val() == "手机号码") {
            $("#userName").val($("#userName").attr("data-value"));
            $("#userName").parents("dd").find(".sl-delect").hide();

        } else {
            $("#randomCKCode").text("获取短信验证码").removeClass("countdown").addClass("randomfont");
            $("#userCK").val("").css({"color":"","font-weight":""});
            $("#userCKDiv").addClass("showPlaceholder");
            $("#CKPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").html(CommonConstants.IS_CKVERIFYCODE);
            $("#CKPlaceholder").show();
            loginCommon.checkNeedVerify();
        }
        loginCommon.resizeLoginBoxHeight();

    });
    $("#randomCode").click(function(){
        var userName = $("#userName").val();
        if (loginCommon.isMobile(userName)) {
            loginCommon.sendRndCode();
        } else {
            loginCommon.showErrorTips(loginCommon.userNameError,CommonConstants.IS_BIZERROR_WRONG_M);
        }

    });
    $("#miliConfirm").click(function(){
        loginCommon.disableMilicfmBtn();
        loginCommon.checkMili();
    });
    $(".lostmili").click(function(){
        loginCommon.lostMili();
    });
    $(".quickway .user_info").click(function(){
        window.parent.location=CommonConstants.QW_USER_INFO;
    });
    $(".quickway .user_order").click(function(){
        window.parent.location=CommonConstants.QW_USER_ORDER;
    });
    $(".quickway .user_addr").click(function(){
        window.parent.location=CommonConstants.QW_USER_ADDR;
    });
    $(".quickway .user_contact").click(function(){
        window.parent.location=CommonConstants.QW_USER_CONTACT;
    });
    $(".quickway .security").click(function(){
        window.parent.location=CommonConstants.QW_SECURITY;
    });
    $(".quickway .pwd_managment").click(function(){
        window.parent.location=CommonConstants.QW_PWD_MANAGMENT;
    });
    $(".quickway .user_voucher").click(function(){
        window.parent.location=CommonConstants.QW_USER_VOUCHER;
    });
    $(".quickway .bind").click(function(){
        window.parent.location=CommonConstants.QW_BIND;
    });
    /**统一账号**/
    $("#userNameUnicom").live({
        focus:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==datav)_this.val("").css({"color":"#333","font-weight":"bold"});
        },blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                _this.val(datav).css({"color":"","font-weight":""});
                loginCommon.showErrorTips(loginCommon.userNameUnicomError,CommonConstants.IS_EMPTY_USERNAME_U);
                loginCommon.hideVerifyUnicom();
                return;
            }
            loginCommon.checkUserNameUnicom();
            loginCommon.checkNeedVerify();
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
        },keyup:function(){
            var _this = $(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                _this.parents("dd").find(".sl-delect").hide();
            } else {
                _this.parents("dd").find(".sl-delect").show();
            }
        }
    });
    $("#userPwdUnicom").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                _this.val(datav).css({"color":"","font-weight":""});
                $("#userPwdUnicomDiv").addClass("showPlaceholder");
                loginCommon.showErrorTips(loginCommon.userPwdUnicomError,CommonConstants.IS_EMPTY_USERPWD_E);
                return;
            }
            loginCommon.checkPwdUnicom();
        },focus:function() {
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==datav)_this.val("").css({"color":"#333","font-weight":"bold"});
            $("#userPwdUnicomDiv").removeClass("showPlaceholder");
        },keyup:function() {
            var _this=$(this),val=_this.val(),id=_this.attr("id");
            _this.val(val.replace(/[^\d]/ig,''));
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
            if (currKey == 13) {
                if (loginCommon.isShowVerifyUnicom != "0" || loginCommon.isShowVerifyUnicom == "0" && $("verifyCodeUnicom").val() != "" && loginCommon.rightVerify == $("verifyCodeUnicom").val()) {
                    $("#login2").focus();
                    $("#login2").trigger("click");
                }
            }
        }
    });
    $(".register03").live('click', function() {
        loginCommon.registerUnicomAction();
    });
    $("#login2").click(function(){
        loginCommon.disableUnicomLoginBtn();
        loginCommon.loginUnicom();
    });
    /**快速注册**/
    $("#registerPwd,#confirmPwd").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val(),id=_this.attr("id");
            if(val=="" || val==datav){
                _this.val(datav).css({"color":"","font-weight":""});
                _this.parents("dl").addClass("showPlaceholder");
                if(id=="registerPwd"){
                    loginCommon.showErrorTips(loginCommon.registerPwdError,CommonConstants.IS_EMPTY_USERPWD_RE);
                }else{
                    loginCommon.showErrorTips(loginCommon.confirmPwdError,CommonConstants.IS_EMPTY_USERPWD_C);
                }
                return;
            }
            if(id=="registerPwd"){
                loginCommon.checkRegisterPwd();
                loginCommon.checkStrong();
            }else{
                loginCommon.checkConfirmPwd();
            }
        },focus:function() {
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==datav)_this.val("").css({"color":"#333","font-weight":"bold"});
            _this.parents("dl").removeClass("showPlaceholder");
        },keyup:function() {
            var _this=$(this),val=_this.val(),id=_this.attr("id");
            _this.val(val.replace(/[^a-z0-9]/ig,''));
            if(id=="registerPwd"){
                loginCommon.checkStrong();
            }
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
        }
    });
    $("#registerEmail").mailsuggest({
        source:mails,
        attachObject:'#registerMailAuto',
        hintText:$("#registerEmail").attr("data-value"),
        maxItems:10
    });
    $("#registerEmail").live({
        blur:function(){
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            _this.parents("dl").addClass("showPlaceholder");
            if(val==""){
                _this.val(datav).css({"color":"","font-weight":""});
            }
            setTimeout(function(){
                if(!loginCommon.checkRegisterEmail()){
                    loginCommon.checkEmailRegistered();
                }
            },100);
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
        },keyup:function(){
            var _this = $(this),datav=_this.attr("data-value"),val=_this.val();
            if(val=="" || val==datav){
                _this.parents("dd").find(".sl-delect").hide();
            } else {
                _this.parents("dd").find(".sl-delect").show();
            }
        }
    });
    $("#verifyEmailReg").live({
        focus:function() {
            var _this=$(this),datav=_this.attr("data-value"),val=_this.val();
            if(val==datav)_this.val("").css({"color":"#333","font-weight":"bold"});
            _this.parents("dl").removeClass("showPlaceholder");
        },
        blur:function(){
            var _this=$(this),val=_this.val();
            if(val==""){
                $("#emailDiv").addClass("showPlaceholder");
                loginCommon.showErrorTips(_this,CommonConstants.IS_EMPTY_VERIFYEMAILCODE);
                return;
            }
        },keyup:function() {
            var _this=$(this),val=_this.val(),id=_this.attr("id");
            _this.val(val.replace(/[^a-z0-9]/ig,''));
        },keydown:function(e) {
            var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
            if(currKey==32) {
                return false;
            }
        }
    });
    $("#accessCodeBtn").click(function(){
        var registerEmail = $("#registerEmail").val();
        if(registerEmail == "" || registerEmail=="邮箱"){
            loginCommon.showErrorTips($("#registerEmail"),CommonConstants.IS_EMPTY_USERNAME_E);
        } else {
            loginCommon.resendCode();
        }
    });
    $("#registerBtn").click(function(){
        loginCommon.disableRegisterBtn()
        loginCommon.register();
    });
    $(".switchuser").click(function(){
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie="JUT=;path=/;domain=.10010.com;expires="+date.toGMTString();
        $(".loginAl").hide();
        $(".mpLogin").show();
        loginCommon.initLoginWithoutRm();
        loginCommon.resizeLoginBoxHeight();
    });
    $("#login3").click(function(){
        $("#login3").attr("disabled","disabled");
        var url = parent.window.location.href;
        var redirectURL = loginCommon.getTourl(url);
        redirectURL = redirectURL.replace(/\+/g,'%20');
        redirectURL = decodeURIComponent(redirectURL);
        loginCommon.successAction(redirectURL,"0000");
        $("#login3").attr("disabled",false);
    });
    loginCommon.init();
    loginCommon.initLoginInfo();
    loginCommon.initHostList();
});
loginCommon.init = function() {
    this.isShowDrop = true; // 是否显示固网类型下拉框
    this.isShowThird = $("#isThirdLogin").val(); // 是否显示第三方
    this.isShowNet = 1; // 是否显示固网类型和地市，0 显示，1 不显示
    this.isShowVerify = 1; // 是否显示验证码，0 显示，1 不显示
    this.isShowCKVerify=1;//是否显示短信验证码  0 显示，1 不显示
    this.isShowVerifyUnicom = 1; //是否显示验证码，0 显示，1 不显示
    this.isValidVerify = 0; // 验证码是否过期，0 未过期，1 过期
    this.rightVerify = ""; // 正确的验证码值
    this.clearTimerVerify; // 验证码定时器id
    this.verifyValidTime = CommonConstants.VERIFY_VALID_TIME; // 验证码有效时间
    this.clearTimer; //随机码发送定时器id
    this.clearCKTimer;
    this.sendCKRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
    this.sendRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME; //定时器初始时间
    this.userNameError = $("#userName").parents("dl");
    this.userPwdError = $("#userPwd").parents("dl");
    this.userCKError = $("#userCK").parents("dl");
    this.arryCityError = $("#arrcity").parents(".selRegion");
    this.verifyError = $("#verifyCode").parents("dl");
    this.tokenError = $("#tokenPwd").parents("dl");
    this.verifyUnicomError = $("#verifyCodeUnicom").parents("dl");
    this.userNameUnicomError = $("#userNameUnicom").parents("dl");
    this.userPwdUnicomError = $("#userPwdUnicom").parents("dl");
    this.registerEmailError = $("#registerEmail").parents("dl");
    this.registerPwdError = $("#registerPwd").parents("dl");
    this.confirmPwdError = $("#confirmPwd").parents("dl");
    this.verifyRegisterError = $("#verifyCodeRegister").parents("dl");
    this.nonObjError = undefined;
    this.registerState = "0";//邮箱是否被注册状态,0 初始状态,1 已注册,2 未注册
    this.lastCorrectEmail = "";
    this.isShowVerifyRegister = 1;//是否显示验证码，0 显示，1 不显示
    this.isValidVerifyRegister = 0;//验证码是否过期，0 未过期，1 过期
    this.rightVerifyRegister = "";// 正确的验证码值
    this.clearTimerVerifyRegister; // 验证码定时器id
    this.lastUserName = "";
    this.sendEmailCodeCount=CommonConstants.CLEAR_TIMER_INTI_TIME;//60s
    this.sendCodeClearTimer;
}
loginCommon.resizeLoginBoxHeight = function() {
    var delta = loginCommon.isShowVerify * 40 + loginCommon.isShowThird * 50 + loginCommon.isShowNet * 64+ loginCommon.isShowCKVerify * 64;
    var height = 530 - delta;
    var top = 384 - delta;
    loginCommon.resizeBg("height:" + height + "px;"); // 重设登录框高度
    if ($("#isRandom").val() == "0") {
        var pwdType = $("#pwdType").val();
        if (pwdType == "02") {
            $(".serviceCodeLogin").attr("style","top:" + top + "px;");
        } else {
            $(".randomCodeLogin").attr("style","top:" + top + "px;");
        }
    }
}
loginCommon.resizeUnicomBoxHeight = function() {
    var delta = loginCommon.isShowVerifyUnicom * 40 + loginCommon.isShowThird * 50;
    var height = 402 - delta;
    var top = 276 - delta;
    loginCommon.resizeBg("height:" + height + "px;"); // 重设登录框高度
    if ($("#isRegister").val() == "0") {
        $(".register03").attr("style","top:" + top + "px;"); // 重设注册的高度
    }
}
loginCommon.resizeRegisterHeight = function() {
    loginCommon.resizeBg("height:420px;"); // 重设登录框高度
    $(".login01").attr("style","top:313px;")
}
loginCommon.strToJson = function(str){
    var json = eval('(' + str + ')');
    return json;
}
loginCommon.isMobile = function(theForm) {
    return /^1[345678]\d{9}$/.test(theForm.trim());
}
loginCommon.trendMobile = function (theForm) {
    return /^1[345678]\d{1,8}$/.test(theForm.trim()) || /^1[345678]\d{10,}$/.test(theForm.trim());
}
loginCommon.isRandom = function() {
    return $("#isRandom").val() == "0";
}
loginCommon.isQuick = function() {
    return $("#isQuick").val() == "0";
}
loginCommon.isNet = function() {
    var loginType = $("#loginType").val();
    return loginType == "3" || loginType == "4";
}
loginCommon.isEmail = function() {
    var loginType = $("#loginType").val();
    return loginType == "2" || loginType == "4";
}
loginCommon.showErrorTips = function(obj,msg,flag,errorFrom) {
    $(".tips").hide();
    if (flag == "2") {
        $(".error").removeClass("mt35mf32 mt10mf32").addClass("mt10mf32");
    } else {
        $(".error").removeClass("mt35mf32 mt10mf32").addClass("mt35mf32");
    }
    $(".error").show().html('<i></i>' + msg);
    if (obj != undefined){
        $(obj).removeClass("boxStyle boxStyleHighLight").addClass("boxStyleError")
    }
    if(errorFrom==""||errorFrom==null||errorFrom=="null"){
        return;
    }
    loginCommon.changeErrorIcon(errorFrom);
}
loginCommon.changeErrorIcon = function(errorFrom) {
    if (errorFrom == "hub") {
        $(".error i").removeClass("hub_icon").addClass("hub_icon");
    } else if (errorFrom == "cb"){
        $(".error i").removeClass("cb_icon").addClass("cb_icon");
    } else if (errorFrom == "bss"){
        $(".error i").removeClass("bss_icon").addClass("bss_icon");
    } else if (errorFrom == "intpf"){
        $(".error i").removeClass("intpf_icon").addClass("intpf_icon");
    }
}
loginCommon.showSuccessTips = function(msg, flag) {
    $(".tips").hide();
    if (flag == "2") {
        $(".error").removeClass("mt35mf32 mt10mf32").addClass("mt10mf32");
    } else {
        $(".error").removeClass("mt35mf32 mt10mf32").addClass("mt35mf32");
    }
    $(".error").show().html('<i class="tipscussess ie6Png"></i>' + msg);
}
loginCommon.hideErrorTips = function() {
    $(".error").hide();
    $(".tips").show();
}
loginCommon.showArea = function(flag) {
    if (flag != "1") {
        var arrcityObj = $("#arrcity"),arrcityDataV = arrcityObj.attr("data-value");
        arrcityObj.val(arrcityDataV).css({"color":"","font-weight":""});
        $(".typeText label").html(CommonConstants.NET_TIPS);
        $("#areaCode").val("");
        $("#arrcityWord").val("");
    }
    if (loginCommon.isShowNet != "0") {
        if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
            $("#areaDiv").show();
            $("#areaInterval").show();
        }else{
            $("#areaDiv").show('slow');
            $("#areaInterval").show('slow');
        }
    }
    loginCommon.isShowNet = 0;
    loginCommon.resizeLoginBoxHeight();
}
loginCommon.hideArea = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#areaDiv").hide();
        $("#areaInterval").hide();
    }else{
        $("#areaDiv").hide('slow');
        $("#areaInterval").hide('slow');
    }
    loginCommon.isShowNet = 1;
    loginCommon.resizeLoginBoxHeight();
}

loginCommon.hideForgotUsername = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#forgotUsernumber").hide();
    }else{
        $("#forgotUsernumber").hide('slow');
    }
}

loginCommon.showForgotUsername = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#forgotUsernumber").show();
    }else{
        $("#forgotUsernumber").show('slow');
    }
}
loginCommon.showDrop = function() {
    $(".selectType").show();
    loginCommon.isShowDrop = false;
}
loginCommon.hideDrop = function() {
    $(".selectType").hide();
    loginCommon.isShowDrop = true;
}
loginCommon.registerAction = function() {
    window.parent.location = "/portal/register.html";
}
loginCommon.showVerify = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#verifyDiv").show();
    }else{
        $("#verifyDiv").show('slow');
    }
    loginCommon.isShowVerify = 0;
    loginCommon.resizeLoginBoxHeight();
}
loginCommon.hideVerify = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#verifyDiv").hide();
    }else{
        $("#verifyDiv").hide('slow');
    }
    loginCommon.isShowVerify = 1;
    loginCommon.resizeLoginBoxHeight();
    clearInterval(loginCommon.clearTimerVerify);
}
loginCommon.showVerifyUnicom = function() {
    $("#verifyDivUnicom").show();
    loginCommon.isShowVerifyUnicom = 0;
    loginCommon.resizeUnicomBoxHeight();
}
loginCommon.hideVerifyUnicom = function() {
    $("#verifyDivUnicom").hide();
    loginCommon.isShowVerifyUnicom = 1;
    loginCommon.resizeUnicomBoxHeight();
    clearInterval(loginCommon.clearTimerVerify);
}
loginCommon.refreshLoginVerify = function() {
    var _this = $("#verifyCode"),datav = _this.attr("data-value");
    _this.val(datav).attr("style","");
    $("#verifyDiv").find("dl").find("dt").removeClass("icon04 icon05").addClass("icon03");
    $("#loginVerifyImg").attr("src","/portal/Service/CreateImage?t="+new Date().getTime());
    loginCommon.rightVerify = "";
    loginCommon.isValidVerify = 0;
    clearInterval(loginCommon.clearTimerVerify);
    loginCommon.clearTimerVerify = setInterval(invalidVerifyCode, loginCommon.verifyValidTime);
    function invalidVerifyCode() {
        var rightCode = loginCommon.rightVerify;
        var verifyCode = $("#verifyCode").val();
        loginCommon.isValidVerify = 1;
        if (verifyCode == ""||verifyCode==$("#verifyCode").attr("data-value")) {
            loginCommon.refreshLoginVerify();
        } else if (rightCode == verifyCode) {
            $("#verifyCode").parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
            loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_VALID_VC);
        }
    }
}
loginCommon.refreshUnicomVerify = function() {
    var _this = $("#verifyCodeUnicom"),datav = _this.attr("data-value");
    _this.val(datav).attr("style","");
    $("#verifyUnicomDiv").find("dl").find("dt").removeClass("icon04 icon05").addClass("icon03");
    $("#unicomVerifyImg").attr("src","/portal/Service/CreateImage?t="+new Date().getTime());
    loginCommon.rightVerify = "";
    loginCommon.isValidVerify = 0;
    clearInterval(loginCommon.clearTimerVerify);
    loginCommon.clearTimerVerify = setInterval(invalidVerifyCode, loginCommon.verifyValidTime);
    function invalidVerifyCode() {
        var rightCode = loginCommon.rightVerify;
        var verifyCode = $("#verifyCodeUnicom").val();
        loginCommon.isValidVerify = 1;
        if (verifyCode == ""||verifyCode==$("#verifyCodeUnicom").attr("data-value")) {
            loginCommon.refreshUnicomVerify();
        } else if (rightCode == verifyCode) {
            $("#verifyCodeUnicom").parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
            loginCommon.showErrorTips(loginCommon.verifyUnicomError,CommonConstants.IS_BIZERROR_VALID_VC);
        }
    }
}
loginCommon.refreshRegisterVerify = function() {
    var _this = $("#verifyCodeRegister"),datav = _this.attr("data-value");
    _this.val(datav).attr("style","");
    $("#registerDiv").find("dl").find("dt").removeClass("icon04 icon05").addClass("icon03");
    $("#registerVerifyImg").attr("src","/portal/Service/CreateImageRegister?t="+new Date().getTime());
    loginCommon.rightVerifyRegister = "";
    loginCommon.isValidVerifyRegister = 0;
    clearInterval(loginCommon.clearTimerVerifyRegister);
    loginCommon.clearTimerVerifyRegister = setInterval(invalidVerifyCode, loginCommon.verifyValidTime);
    function invalidVerifyCode() {
        var rightCode = loginCommon.rightVerifyRegister;
        var verifyCode = $("#verifyCodeRegister").val();
        loginCommon.isValidVerifyRegister = 1;
        if (verifyCode == ""||verifyCode==$("#verifyCodeRegister").attr("data-value")) {
            loginCommon.refreshRegisterVerify();
        } else if (rightCode == verifyCode) {
            $("#verifyCodeRegister").parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
            loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_BIZERROR_VALID_VC);
        }
    }
}
loginCommon.loginThird = function(thirdType) {
    var url = window.parent.location.href;
    var backUrl = "";
    if($("#loginFrom").val() == "02"){
        backUrl = encodeURIComponent(url);
    }else{
        backUrl = loginCommon.getTourl(url);
    }
    window.parent.location = "/portal/Service/ThirdPartyLogin?type="+thirdType+"&loginType="+$("#loginFrom").val()+"&backUrl="+backUrl;
}
loginCommon.getTourl = function(url) {
    var backUrl = CommonConstants.DEFAULT_TO_URL;
    var position = url.indexOf("?");
    if (position < 0) {
        return backUrl;
    }
    var paras = url.substring(position+1);
    var paraArray = paras.split("&");
    for(var i =0; i<paraArray.length;i++) {
        var para = paraArray[i].trim();
        var tmpArray = para.split("=");
        if (tmpArray[0] == "redirectURL") {
            backUrl = tmpArray[1];
            break;
        }
    }
    return backUrl;
}
loginCommon.getUserNameErrorMsg = function() {
    var pwdType = $("#pwdType").val();
    if (pwdType == "02") {
        return CommonConstants.IS_EMPTY_USERNAME_M;
    }
    var loginType = $("#loginType").val();
    var errorMsg = "";
    if (loginType == "1") {
        errorMsg = CommonConstants.IS_EMPTY_USERNAME_M;
    } else if (loginType == "2") {
        errorMsg = CommonConstants.IS_EMPTY_USERNAME_ME;
    } else if (loginType == "3") {
        errorMsg = CommonConstants.IS_EMPTY_USERNAME_S;
    } else if (loginType == "4") {
        errorMsg = CommonConstants.IS_EMPTY_USERNAME;
    }
    return errorMsg;
}
loginCommon.checkUserName = function(flag) {
    var userName = $("#userName").val();
    userName = userName.trim();
    loginCommon.hideErrorTips();
    //loginCommon.hideRndTips();
    if ($("#pwdType").val() == "02") {
        if(!loginCommon.isMobile(userName)) {
            loginCommon.showErrorTips(loginCommon.userNameError,CommonConstants.IS_BIZERROR_WRONG_M);
            return true;
        }
        return false;
    }
    if (loginCommon.isMobile(userName)) {
        loginCommon.hideArea();
        loginCommon.hideForgotUsername();
        $("#userType").val(CommonConstants.USER_TYPE_MOBILE);
        loginCommon.resetPwdInputTips();
        loginCommon.showMobileTips();
        return false;
    }
    if (loginCommon.trendMobile(userName)|| !loginCommon.isEmail() && !loginCommon.isNet()) {
        loginCommon.hideArea();
        loginCommon.hideForgotUsername();
        loginCommon.showErrorTips(loginCommon.userNameError,CommonConstants.IS_BIZERROR_WRONG_M);
        return true;
    }
    $("#pwdType").val(CommonConstants.PWD_TYPE_SERVICE);
    if (loginCommon.isEmail() && userName.isEmail()) {
        loginCommon.hideArea();
        loginCommon.hideForgotUsername();
        $("#userType").val(CommonConstants.USER_TYPE_EMAIL);
        loginCommon.resetPwdInputTips();
        return false;
    }
    if (loginCommon.isNet()) {
        if (flag != "1"){
            $("#userType").val(CommonConstants.USER_TYPE_NET);
        }
        loginCommon.resetPwdInputTips();
        loginCommon.showArea(flag);
        loginCommon.resizeLoginBoxHeight();
        return false;
    }
    loginCommon.showErrorTips(loginCommon.userNameError,loginCommon.getUserNameErrorMsg());
    return true;
}
loginCommon.mobileAction = function() {
    if (loginCommon.isRandom()) {
        $("#randomPwdTips").show();
    }
}
loginCommon.resetPwdInputTips = function() {
    var userType = $("#userType").val();
    var _this=$("#userName"),datav=_this.attr("data-value"),val=_this.val();
    if (userType == "01" && $("#pwdType").val() == "02") {
        $("#pwdPlaceholder").removeClass("placeholdermargintop").addClass("placeholdermargintoprandom").html(CommonConstants.PWD_TIPS_RND);
    } else  if (userType == "05" || val == "" || datav == val) {
        $("#pwdPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").html(CommonConstants.PWD_TIPS_DEFAULT);
    } else {
        $("#pwdPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").html(CommonConstants.PWD_TIPS_SERVICE);
    }
}
loginCommon.getUserPwdErrorTips = function() {
    var userType = $("#userType").val();
    var userName=$("#userName"),userNameDataV=userName.attr("data-value"),userNameVal=userName.val();
    var errorMsg = "";
    if (userType == "05" || userNameVal == "" || userNameDataV == userNameVal) {
        errorMsg = CommonConstants.IS_EMPTY_USERPWD_E;
    } else if (userType == "01" && $("#pwdType").val() == "02") {
        errorMsg = CommonConstants.IS_EMPTY_USERPWD_R;
    } else {
        errorMsg = CommonConstants.IS_EMPTY_USERPWD_MN;
    }
    return errorMsg;
}
loginCommon.checkPwd = function() {
    var userType = $("#userType").val();
    loginCommon.hideErrorTips();
    if (userType == "01" && $("#pwdType").val() == "01") {
        if (loginCommon.isMobileInitPwd()) {
            loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_INIT_PWD, "2");
            return true;
        }
        if (loginCommon.isSimplePwd()) {
            loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_SIMPLE_PWD, "2");
            return true;
        }
    }
    if (userType == "02" || userType == "03" || userType == "04" || userType == "08") {
        if (loginCommon.isNetInitPwd()) {
            loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_INIT_PWD, "2");
            return true;
        }
        if (loginCommon.isSimplePwd()) {
            loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_SIMPLE_PWD, "2");
            return true;
        }
    }
    return false;
}
loginCommon.isMobileInitPwd = function() {
    var _userName=$("#userName"),datav=_userName.attr("data-value"),userName=_userName.val().trim();
    if (userName == "" || userName == datav) {
        return false;
    }
    var userPwd = $("#userPwd").val().trim();
    if (userPwd == "") {
        return false;
    }
    var pwdLen = userPwd.length - (1);
    var initPwd = userName.substring(pwdLen);
    return initPwd == userPwd;
}
loginCommon.isNetInitPwd = function() {
    var _userName=$("#userName"),datav=_userName.attr("data-value"),userName=_userName.val().trim();
    if (userName == "" || userName == datav) {
        return false;
    }
    var userPwd = $("#userPwd").val().trim();
    if (userPwd == "") {
        return false;
    }
    return userName.indexOf(userPwd) >= 0;
}
loginCommon.isSimplePwd = function() {
    var userPwd = $("#userPwd").val().trim();
    var regularNumber = /^(?!(\d)\1+$)(\d{2,3})\2+$/;// 有规律数字：ABABAB、ABCABC
    var allTheSame = /^(\d)\1+$/;
    var incrNumber = userPwd.replace(/\d/g, function($0, pos) {
        return parseInt($0)-pos;
    });
    var decrNumber = userPwd.replace(/\d/g, function($0, pos) {
        return parseInt($0)+pos;
    });
    return regularNumber.test(userPwd) || allTheSame.test(userPwd) || allTheSame.test(incrNumber) || allTheSame.test(decrNumber);
}
loginCommon.showRndTips = function(){
    var isRandom = $("#isRandom").val();
    if (isRandom == "0") {
        $("#randomPwdTips").show();
        $("#servicePwdTips").hide();
        $("#resendTips").hide();
        $("#forgotPwd").show();
        $("#pwdPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").html(CommonConstants.PWD_TIPS_SERVICE);
        $("#pwdType").val(CommonConstants.PWD_TYPE_SERVICE);
    }
}
loginCommon.showMobileTips = function(){
    var isRandom = $("#isRandom").val();
    var pwdType = $("#pwdType").val();
    if (isRandom == "0" && pwdType == CommonConstants.PWD_TYPE_SERVICE) {
        $("#pwdPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").html(CommonConstants.PWD_TIPS_SERVICE);
        $("#pwdType").val(CommonConstants.PWD_TYPE_SERVICE);
    } else if (isRandom == "0" && pwdType == CommonConstants.PWD_TYPE_RND) {
        $("#pwdPlaceholder").removeClass("placeholdermargintop").addClass("placeholdermargintoprandom").html(CommonConstants.PWD_TIPS_RND);
        $("#pwdType").val(CommonConstants.PWD_TYPE_RND);
    }
}
loginCommon.hideRndTips = function(){
    var isRandom = $("#isRandom").val();
    if (isRandom == "0") {
        $("#randomPwdTips").hide();
        $("#servicePwdTips").hide();
        $("#resendTips").hide();
        $("#forgotPwd").show();
    }
}
loginCommon.showServiceTips = function() {
    var isRandom = $("#isRandom").val();
    if (isRandom == "0") {
        $("#randomPwdTips").hide();
        $("#servicePwdTips").show();
        $("#pwdType").val(CommonConstants.PWD_TYPE_RND);
        $("#forgotPwd").hide();
        $("#resendTips").show();
        $("#pwdPlaceholder").removeClass("placeholdermargintop").addClass("placeholdermargintoprandom").html(CommonConstants.PWD_TIPS_RND);
    }
}
loginCommon.isEmptyUserName = function() {
    var _this=$("#userName"),datav=_this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.userNameError,loginCommon.getUserNameErrorMsg());
        return true;
    }
    return false;
}
loginCommon.isEmptyUserPwd = function() {
    var _this=$("#userPwd"),datav=_this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.userPwdError,loginCommon.getUserPwdErrorTips());
        return true;
    }
    var userType = $("#userType").val();
    var minLength = CommonConstants.PWD_MINLENGTH_NET;
    if (userType == CommonConstants.USER_TYPE_MOBILE || userType == CommonConstants.USER_TYPE_EMAIL) {
        minLength = CommonConstants.PWD_MINLENGTH_DEFAULT;
    }
    if (val.trim().length < minLength || val.trim().length > CommonConstants.PWD_MAXLENGTH) {
        loginCommon.showErrorTips(loginCommon.userPwdError,loginCommon.getUserPwdErrorTips4Less());
        return true;
    }
    return false;
}
loginCommon.getUserPwdErrorTips4Less = function() {
    var userType = $("#userType").val();
    var pwdType = $("#pwdType").val();
    if (userType == CommonConstants.USER_TYPE_MOBILE && pwdType == CommonConstants.PWD_TYPE_RND) {
        return CommonConstants.IS_BIZERROR_W_PWD_MR;
    } else if (userType == CommonConstants.USER_TYPE_EMAIL) {
        return CommonConstants.IS_BIZERROR_W_PWD_E;
    } else {
        return CommonConstants.IS_BIZERROR_W_PWD_S;
    }
}
loginCommon.checkCity = function() {
    var userType = $("#userType").val();
    if (userType == CommonConstants.USER_TYPE_MOBILE || userType == CommonConstants.USER_TYPE_EMAIL) {
        return false;
    }
    var _this=$("#arrcity"),datav=_this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.arryCityError,CommonConstants.IS_EMPTY_AREACITY);
        return true;
    }
    var areaCode = $("#areaCode").val();
    if (areaCode == "") {
        loginCommon.showErrorTips(loginCommon.arryCityError,CommonConstants.IS_BIZERROR_AREACITY);
        return true;
    }
    return false;
}
loginCommon.checkVerify = function() {
    var needVerify = loginCommon.isShowVerify;
    if (needVerify == "1") {
        return false;
    }
    var _this = $("#verifyCode"),datav = _this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_EMPTY_VERIFYCODE);
        return true;
    }
    var verifyLen = Number(_this.attr("maxlength"));
    if (val.trim().length < verifyLen) {
        loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_LESS_VERIFYCODE);
        return true;
    }
    if (loginCommon.isValidVerify == "1") {
        loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_VALID_VC);
        return true;
    }
    if(val != loginCommon.rightVerify) {
        loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_WRONG_VC);
        return true;
    }
    return false;
}
loginCommon.getLoginParas = function() {
    var params = {};
    var url = parent.window.location.href;
    var redirectURL = loginCommon.getTourl(url);
    redirectURL = redirectURL.replace(/\+/g,'%20');
    redirectURL = decodeURIComponent(redirectURL);
    params.redirectURL = redirectURL;
    params.userName = $("#userName").val().trim();
    params.password = $("#userPwd").val().trim();
    params.pwdType = $("#pwdType").val();
    params.productType = $("#userType").val();
    if (loginCommon.isShowVerify == "0") {
        params.verifyCode = $("#verifyCode").val().trim();
        params.uvc = $.cookie('uacverifykey');
    }
    params.redirectType = $("#loginFrom").val();
    params.rememberMe = "1";
    if (params.productType != CommonConstants.USER_TYPE_MOBILE && params.productType != CommonConstants.USER_TYPE_EMAIL){
        params.areaCode = $("#areaCode").val();
        params.arrcity = $("#arrcity").val();
    }
    if (loginCommon.isShowCKVerify == "0") {
        params.verifyCKCode = $("#userCK").val().trim();
    }

    return params;
}
loginCommon.login = function(){
    if(loginCommon.isEmptyUserName() || loginCommon.checkUserName("1")) {// 校验用户名的有效性
        loginCommon.enableLoginBtn();
        return true;
    }
    if(loginCommon.checkCity()) {// 校验地市的有效性
        loginCommon.enableLoginBtn();
        return true;
    }
    if(loginCommon.isEmptyUserPwd() || loginCommon.checkPwd()) {// 校验密码是的有效性
        loginCommon.enableLoginBtn();
        return true;
    }
    if(loginCommon.checkCKVerify()) {// 校验短信验证码的有效性
        loginCommon.enableLoginBtn();
        return true;
    }
    if(loginCommon.checkVerify()) {// 校验验证码的有效性
        loginCommon.enableLoginBtn();
        return true;
    }

    loginCommon.loginSubmit();
    return false;
}
loginCommon.checkCKVerify = function() {
    var needVerify = loginCommon.isShowCKVerify;
    if (needVerify == "1") {
        return false;
    }
    var _this = $("#userCK"),datav = _this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.userCKError,CommonConstants.IS_EMPTY_CKVERIFYCODE);
        return true;
    }
    var verifyLen = Number(_this.attr("maxlength"));
    if (val.trim().length < verifyLen) {
        loginCommon.showErrorTips(loginCommon.userCKError,CommonConstants.IS_BIZERROR_LESS_CKVERIFYCODE);
        return true;
    }

    return false;
}
loginCommon.getUrlPara = function(paraName){
    var sUrl  =  window.parent.location.href;
    var sReg  =  "(?:\\?|&){1}"+paraName+"=([^&]*)"
    var re=new RegExp(sReg,"gi");
    re.exec(sUrl);
    return RegExp.$1;
}
loginCommon.successAction = function(url,code) {
    var loginFrom = $("#loginFrom").val();
    if (loginFrom == "01") {// 登录首页
        if(code=="0000"){
            loginCommon.successRedirect(url);
        }else{
            window.parent.location=UacPrefix.PRXFIX_HTTPS_URL+"/portal/yahooMailVerify.html?toUrl="+url;
        }
    } else if (loginFrom == "02") {// 商城小页面
        loginCommon.successCallback4Mall();
    } else if (loginFrom == "03") {// 网厅2.0
        loginCommon.successCallback4Hall();
    } else if (loginFrom == "04") {// 积分商城
        loginCommon.successCallback4JF();
    } else if (loginFrom == "05") {// 安全中心
        loginCommon.successCallback4Security();
    }  else if (loginFrom == "06") {// 客户中心
        loginCommon.successCallback4Cust();
    }
    else if (loginFrom == "30") {
        loginCommon.successDefault();
    } else {
        loginCommon.successRedirect(url);
    }
}
loginCommon.successDefault = function() {
    window.parent.loginSuccess();
}
loginCommon.successRedirect = function(url) {
    window.parent.location = url;
}
loginCommon.successCallback4Mall = function() {
    window.parent.mallWebBaseCommon.loginSuccess();
}
loginCommon.successCallback4Hall = function() {
    window.parent.wt2BaseCommon.loginSuccess();
}
loginCommon.successCallback4JF = function() {
    window.parent.wt2BaseCommon.loginSuccess();
}
loginCommon.successCallback4Cust = function() {
    window.parent.wt2BaseCommon.loginSuccess();
}
loginCommon.successCallback4Security = function() {
    var redirectURL = loginCommon.getUrlPara("redirectURL");
    if (redirectURL == "") {
        window.parent.location.reload();
        return;
    }
    redirectURL = redirectURL.replace(/\+/g,'%20');
    redirectURL = decodeURIComponent(redirectURL);
    var checkUrlPattern = /^(http|https):\/\/[a-z0-9\.]{1,}.10010.com(:[0-9]{2,}){0,1}(\/[-A-Z0-9+&@#\/%=~_|!:,.;]*)?(\?[A-Z0-9+&@#\/%=~_|!:,.;]*)?/i;
    if (checkUrlPattern.test(redirectURL)) {
        window.parent.location = redirectURL;
    } else {
        window.parent.location.reload();
    }
}
loginCommon.initPwd = function() {
    $("#userPwd").val("");
    $("#userPwdDiv").addClass("showPlaceholder");
    if ($("#pwdType").val() == "02") {
        $("#pwdPlaceholder").removeClass("placeholdermargintop").addClass("placeholdermargintoprandom").show();
    } else {
        $("#pwdPlaceholder").removeClass("placeholdermargintoprandom").addClass("placeholdermargintop").show();
    }
}
loginCommon.initVerify = function(flag) {
    if (loginCommon.isShowVerify == "1") {
        return;
    }
    loginCommon.refreshLoginVerify();
    if(flag == "1") {
        $("#verifyCode").focus();
    }
}
loginCommon.loginSubmit = function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                loginCommon.initVerify();
                loginCommon.enableLoginBtn();
            }
        });
        $.getJSON(
            CommonConstants.LOGIN_URL+"&req_time="+new Date().getTime(),
            loginCommon.getLoginParas(),
            function(jsonData){
                loginCommon.enableLoginBtn();
                if (jsonData.resultCode == "0000" || jsonData.resultCode == "0301") {// 成功
                    loginCommon.successAction(jsonData.redirectURL,jsonData.resultCode);
                    return;
                } else if (jsonData.resultCode =='7007' || jsonData.resultCode =='7006' || jsonData.resultCode =='7038' || jsonData.resultCode =='7110') {
                    var flag = "";
                    if (jsonData.msg.len() != 167&&jsonData.msg.len()!=11) {
                        flag = "2";
                    }
                    var obj = jsonData.resultCode =='7007' || jsonData.resultCode =='7006'?loginCommon.userPwdError:loginCommon.nonObjError;
                    loginCommon.showErrorTips(obj,jsonData.msg,flag,jsonData.errorFrom);
                    loginCommon.initPwd();
                    loginCommon.isShowVerify = jsonData.needvode; // 初始化是否需要展示验证码
                    loginCommon.initVerify();
                    if (loginCommon.isShowVerify == "0") {
                        loginCommon.showVerify();
                    } else {
                        loginCommon.hideVerify();
                    }
                    return;
                } else if (jsonData.resultCode =='7001') {
                    loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_WRONG_VC,"",jsonData.errorFrom);
                    loginCommon.initVerify("1");
                    return;
                } else if (jsonData.resultCode =='7003') {
                    loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_INIT_PWD,"2",jsonData.errorFrom);
                    loginCommon.initPwd();
                    loginCommon.initVerify();
                    return;
                } else if (jsonData.resultCode =='7002') {
                    loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_SIMPLE_PWD,"2",jsonData.errorFrom);
                    loginCommon.initPwd();
                    loginCommon.initVerify();
                    return;
                } else if (jsonData.resultCode =='7005') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,jsonData.msg,jsonData.msg.len()>30?"2":"",jsonData.errorFrom);
                    loginCommon.initVerify();
                    return;
                } else if (jsonData.resultCode =='7004') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_ACCOUNT_LOCKED,"2",jsonData.errorFrom);
                    loginCommon.initVerify();
                    return;
                } else if(jsonData.resultCode =='7207'){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_4G_PERIOD,"2",jsonData.errorFrom);
                    loginCommon.initVerify();
                } else if(jsonData.resultCode =='7208'){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_LOGIN_LIMIT,"2",jsonData.errorFrom);
                    loginCommon.initVerify();
                }else if(jsonData.resultCode =='7209'){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_LOGIN_HOMOLOGOUSIP_LIMIT,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                }else if (jsonData.resultCode =='8888') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_INVALID_REQ,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                    return;
                } else if (jsonData.resultCode =='9999') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_BUSY,"2",jsonData.errorFrom);
                    loginCommon.initVerify();
                    return;
                } else if (jsonData.resultCode =='7099') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_RELEASE,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                    return;
                } else if (jsonData.resultCode == "0300") {
                    loginCommon.showMili();
                    return;
                } else if (jsonData.resultCode == "7206") {
                    loginCommon.showErrorTips(loginCommon.nonObjError, CommonConstants.IS_BIZERROR_SUBSCRBTYPE_MORE,"2",jsonData.errorFrom);
                    loginCommon.initVerify();
                } else if(jsonData.resultCode == "7008"){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_BLACKLIST,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                } else if(jsonData.resultCode == "7215"){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_THREAD_FULL,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                }else if(jsonData.resultCode == "7218"){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_PLAT_TOUT_STOP,"2",jsonData.errorFrom);
                    loginCommon.initVerify();
                }else if(jsonData.resultCode == "7298"){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_OVER_MAXCOUNT,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                }else if(jsonData.resultCode=="7299"){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_OVER_ERROR_NUMBER,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                }else if(jsonData.resultCode=="7231"){
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SMS_ERROR,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                }
                else{
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR,"",jsonData.errorFrom);
                    loginCommon.initVerify();
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
        loginCommon.initVerify();
        loginCommon.enableLoginBtn();
    }
}
loginCommon.checkTokenPwd = function() {
    var tokenPwdObj = $("#tokenPwd"),toeknlen = tokenPwdObj.attr("maxlength"),tokenPwd = tokenPwdObj.val();
    loginCommon.hideErrorTips();
    tokenPwd = tokenPwd.trim();
    if (tokenPwd.length != Number(toeknlen)) {
        loginCommon.showErrorTips(loginCommon.tokenError,CommonConstants.IS_BIZERROR_LESS_MILI);
        return true;
    }
    if (!/[0-9]{6}/.test(tokenPwd)) {
        loginCommon.showErrorTips(loginCommon.tokenError,CommonConstants.IS_BIZERROR_W_MILI);
        return true;
    }
    return false;
}
loginCommon.showMili = function() {
    $(".mpLogin").hide();
    $(".miliCheck").show();
    loginCommon.resizeBg("height:302px;");
    loginCommon.miliBoxInit();
    clearInterval(loginCommon.clearTimerVerify);
}
loginCommon.miliBoxInit = function() {
    var tokenPwdObj = $("#tokenPwd"),tokenPwdDataV = tokenPwdObj.attr("data-value");
    tokenPwdObj.val(tokenPwdDataV).attr("style","");
}
loginCommon.sendRandom = function() {
    loginCommon.sendRndCode();
}
loginCommon.sendAction = function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR);
                loginCommon.sendRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
                clearInterval(loginCommon.clearTimer);
                $("#resendTips").text("重新获取").removeClass("resendRndCodeDis").addClass("resendRndCode");
                resendRnd.addEventListener("click", loginCommon.sendRandom, false);
            }
        });
        var paras = {};
        paras.mobile = $("#userName").val().trim();
        $.getJSON(
            CommonConstants.SEND_RNDCODE_URL+"&req_time="+new Date().getTime(),
            paras,
            function(jsonData){
                if (jsonData.resultCode == "0000") {// 成功
                    loginCommon.showSuccessTips(CommonConstants.IS_BIZERROR_SEND_SUCESS);
                    return;
                } else if (jsonData.resultCode == "7096") {// 距离上次发送不足1分钟
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_OFTEN);
                    return;
                } else if (jsonData.resultCode == "7098") {// 发送次数超过限制
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_MORE,"2");
                    return;
                } else {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR);
        loginCommon.sendRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
        clearInterval(loginCommon.clearTimer);
        $("#resendTips").text("重新获取").removeClass("resendRndCodeDis").addClass("resendRndCode");
        resendRnd.addEventListener("click", loginCommon.sendRandom, false);
    }
}

loginCommon.sendCKMAction = function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR);
                loginCommon.sendCKRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
                clearInterval(loginCommon.clearCKTimer);
                $("#randomCKCode").text("重新获取").removeClass("resendRndCodeDis").addClass("resendRndCode");
                document.getElementById("randomCKCode").addEventListener("click", loginCommon.sendCKMCode, false);
            }
        });
        var paras = {};
        paras.mobile = $("#userName").val().trim();
        $.getJSON(
            CommonConstants.SEND_CKCODE_URL+"&req_time="+new Date().getTime(),
            paras,
            function(jsonData){
                if (jsonData.resultCode == "0000") {// 成功
                    loginCommon.showSuccessTips(CommonConstants.IS_BIZERROR_SEND_SUCESS);
                    return;
                } else if (jsonData.resultCode == "7096") {// 距离上次发送不足1分钟
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_OFTEN);
                    return;
                } else if (jsonData.resultCode == "7098") {// 发送次数超过限制
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_MORE,"2");
                    return;
                } else {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR);
        loginCommon.sendCKRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
        clearInterval(loginCommon.clearCKTimer);
        $("#randomCKCode").text("重新获取").removeClass("resendRndCodeDis").addClass("resendRndCode");
        document.getElementById("randomCKCode").addEventListener("click", loginCommon.sendCKMCode, false);
    }
}
loginCommon.sendRndCode = function() {
    var resendRnd = document.getElementById("randomCode");
    if (loginCommon.sendRndCount > 0 && loginCommon.sendRndCount < CommonConstants.CLEAR_TIMER_INTI_TIME) {
        return;
    }
    loginCommon.sendRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
    clearInterval(loginCommon.clearTimer);
    loginCommon.clearTimer = setInterval(changeTime, 1000);
    $("#randomCode").text(+loginCommon.sendRndCount + "秒后重新获取").removeClass("randomfont").addClass("countdown");
    if(resendRnd.removeEventListener){
        resendRnd.removeEventListener("click", loginCommon.sendRandom, false);
    }else if(resendRnd.detachEvent){
        resendRnd.detachEvent("onclick",loginCommon.sendRandom);
    }
    loginCommon.sendAction();
    function changeTime() {
        if (loginCommon.sendRndCount > 0) {
            loginCommon.sendRndCount = loginCommon.sendRndCount - 1;
            $("#randomCode").text(+loginCommon.sendRndCount + "秒后重新获取").removeClass("randomfont").addClass("countdown");
        } else {
            if (loginCommon.sendRndCount == 0) {
                $("#randomCode").text("获取随机码").removeClass("countdown").addClass("randomfont");
                if(resendRnd.removeEventListener){
                    resendRnd.addEventListener("click", loginCommon.sendRandom, false);
                }else{
                    resendRnd.attachEvent('onclick',loginCommon.sendRandom);
                }
                clearInterval(loginCommon.clearTimer);
                loginCommon.sendRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
            }
        }
    }
}
loginCommon.checkVerifyCodeImt = function(obj) {
    var _this = $(obj),val = _this.val();
    if (loginCommon.isValidVerify == "1") {
        loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_VALID_VC);
        _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
        return true;
    }
    if (loginCommon.rightVerify != "" && loginCommon.rightVerify != val) {
        loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_WRONG_VC);
        _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
        _this.select();
        return true;
    }
    var params = {};
    params.verifyCode = val;
    params.verifyType = "1";
    $.getJSON(
        CommonConstants.VERIFY_IMTCHK_URL,
        params,
        function(jsonData){
            if (jsonData.resultCode=="true") {
                loginCommon.rightVerify = val;
                _this.parents("dl").find("dt").removeClass("icon03 icon04").addClass("icon05");
            } else {
                _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
                _this.select();
            }
        }
    );
}
loginCommon.checkVerifyCodeRImt = function(obj) {
    var _this = $(obj),val = _this.val();
    if (loginCommon.isValidVerifyRegister == "1") {
        loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_BIZERROR_VALID_VC);
        _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
        return true;
    }
    if (loginCommon.rightVerifyRegister != "" && loginCommon.rightVerifyRegister != val) {
        loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_BIZERROR_WRONG_VC);
        _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
        _this.select();
        return true;
    }
    var params = {};
    params.verifyCode = val;
    params.verifyType = "2";
    $.getJSON(
        CommonConstants.VERIFY_IMTCHK_URL,
        params,
        function(jsonData){
            if (jsonData.resultCode=="true") {
                loginCommon.rightVerifyRegister = val;
                _this.parents("dl").find("dt").removeClass("icon03 icon04").addClass("icon05");
            } else {
                _this.parents("dl").find("dt").removeClass("icon03 icon05").addClass("icon04");
                _this.select();
            }
        }
    );
}
loginCommon.getMiliCheckParams = function() {
    var params = {};
    var url = window.parent.location.href;
    var redirectURL = loginCommon.getTourl(url);
    redirectURL = redirectURL.replace(/\+/g,'%20');
    redirectURL = decodeURIComponent(redirectURL);
    params.redirectURL = redirectURL;
    params.token_password = $("#tokenPwd").val();
    return params;
}
loginCommon.miliCheckAction = function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                loginCommon.enableMilicfmBtn();
            }
        });
        $.getJSON(
            CommonConstants.MILI_CHECK_URL+"&req_time="+new Date().getTime(),
            loginCommon.getMiliCheckParams(),
            function(jsonData) {
                loginCommon.enableMilicfmBtn();
                if (jsonData.resultCode == "0000") {
                    loginCommon.successAction(jsonData.redirectURL,jsonData.resultCode);
                    return;
                } else if (jsonData.resultCode == "7090") {// 未取到登录信息
                    loginCommon.showLoginBox();
                    return;
                } else {
                    var desc = "null" == jsonData.msg || jsonData.msg == null || jsonData.msg == "" || jsonData.msg == undefined ? CommonConstants.IS_BIZERROR_SYSTEM_ERROR: jsonData.msg;
                    loginCommon.showErrorTips(loginCommon.tokenError,desc);
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
        loginCommon.enableMilicfmBtn();
    }
}
loginCommon.showLoginBox = function() {
    $(".mpLogin").show();
    $(".miliCheck").hide();
    loginCommon.resizeLoginBoxHeight();
    if (loginCommon.isShowVerify == "0") {
        loginCommon.refreshLoginVerify();
    }
}
loginCommon.checkMili = function() {
    if (loginCommon.checkTokenPwd()) {
        loginCommon.enableMilicfmBtn();
        return;
    }
    loginCommon.miliCheckAction();
}
loginCommon.splitEmail = function(email){
    if("" != email ){
        var nEmail = email.substring(email.indexOf("@")).length>14?email.substr(0,email.indexOf("@")+15):email;
        return '<span title="'+email+'">'+nEmail+'</span>';
    }else{
        "";
    }
}
loginCommon.lostMili = function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.tokenError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
            }
        });
        $.getJSON(
            CommonConstants.LOST_MILI_URL+"&req_time="+new Date().getTime(),
            {},
            function(jsonData){
                if (jsonData.resultCode == "0000") {// 成功
                    var desc = CommonConstants.IS_BIZERROR_SENDEMAIL_SUCESS;
                    var eamilStr = "";
                    if("" != jsonData.emailAddr){
                        eamilStr = "<a target=\"_blank\" style='color:#f60;' id=\"emailAddr\" href=\""+jsonData.emailAddr+"\">"+
                            desc.replace('{0}',loginCommon.splitEmail(jsonData.secEmail))+"</a>";
                    }else{
                        eamilStr = desc.replace('{0}',loginCommon.splitEmail(jsonData.secEmail));
                    }
                    $(".error").css("width","280px");
                    loginCommon.showSuccessTips(eamilStr,"2");
                    return;
                } else {
                    var desc = CommonConstants.IS_BIZERROR_SENDEMAIL_FAILED;
                    if(jsonData.errDesc!="") {
                        desc = jsonData.errDesc;
                    }
                    var flag="";
                    if(desc.len()>30){
                        flag="2";
                    }
                    loginCommon.showErrorTips(loginCommon.tokenError,desc,flag);
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.tokenError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
    }
}
loginCommon.checkNeedVerify = function() {
    loginCommon.isShowVerify = "1";
    loginCommon.hideVerify();
    var userType = $("#userType").val();
    var _this = $("#userName"),datav = _this.attr("data-value"),val = _this.val();
    if (val == "" || val == datav || val == "手机号码") {
        return;
    }
    if (userType !=CommonConstants.USER_TYPE_MOBILE && userType != CommonConstants.USER_TYPE_EMAIL && $("#areaCode").val() == "") {
        return;
    }
    loginCommon.showVerifyAction();
}
loginCommon.showVerifyAction = function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.isShowVerify = "1";
                loginCommon.hideVerify();
            }
        });
        $.getJSON(
            CommonConstants.CHECK_SHOW_VERIFY_URL,
            loginCommon.getShowVerifyParas(),
            function(jsonData){
                if (jsonData.resultCode == "true") {// 显示
                    loginCommon.isShowVerify = "0";
                    loginCommon.refreshLoginVerify();
                    loginCommon.showVerify();
                    // return;
                } else {
                    loginCommon.isShowVerify = "1";
                    loginCommon.hideVerify();
                    // return;
                }

                //
                if ( $("#userType").val() == "01" && $("#pwdType").val() =="01" && (jsonData.ckCode == "2" || jsonData.ckCode == "3")) {// 显示
                    loginCommon.isShowCKVerify = "0";
                    loginCommon.refreshLoginVerify();
                    loginCommon.showCKVerify();
                    return;
                } else{
                    loginCommon.isShowCKVerify = "1";
                    loginCommon.hideCKVerify();
                    return;
                }
                //
            }
        );
    }catch(ex){
        loginCommon.isShowVerify = "1";
        loginCommon.hideVerify();
    }
}
loginCommon.hideCKVerify = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#userCKDiv").hide();
    }else{
        $("#userCKDiv").hide('slow');
    }
    $("#userCKPwd").hide();
    loginCommon.isShowCKVerify = 1;
    loginCommon.resizeLoginBoxHeight();
    clearInterval(loginCommon.clearTimerVerify);
}
loginCommon.showCKVerify = function() {
    if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
        $("#userCKDiv").show();
    }else{
        $("#userCKDiv").show('slow');
    }
    $("#userCKPwd").show();
    loginCommon.isShowCKVerify = 0;
    loginCommon.resizeLoginBoxHeight();
}
$("#randomCKCode").click(function(){
    var userName = $("#userName").val();
    if (loginCommon.isMobile(userName)) {
        loginCommon.sendCKMCode();
    } else {
        loginCommon.showErrorTips(loginCommon.userNameError,CommonConstants.IS_BIZERROR_WRONG_M);
    }

});

loginCommon.sendCKMCode = function() {
    var resendRnd = document.getElementById("randomCKCode");
    if (loginCommon.sendCKRndCount > 0 && loginCommon.sendCKRndCount < CommonConstants.CLEAR_TIMER_INTI_TIME) {
        return;
    }
    loginCommon.sendCKRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
    clearInterval(loginCommon.clearCKTimer);
    loginCommon.clearCKTimer = setInterval(changeTime, 1000);
    $("#randomCKCode").text(+loginCommon.sendCKRndCount + "秒后重新获取").removeClass("randomfont").addClass("countdown");
    if(resendRnd.removeEventListener){
        resendRnd.removeEventListener("click", loginCommon.sendCKMCode, false);
    }else if(resendRnd.detachEvent){
        resendRnd.detachEvent("onclick",loginCommon.sendCKMCode);
    }
    loginCommon.sendCKMAction();
    function changeTime() {
        if (loginCommon.sendCKRndCount > 0) {
            loginCommon.sendCKRndCount = loginCommon.sendCKRndCount - 1;
            $("#randomCKCode").text(+loginCommon.sendCKRndCount + "秒后重新获取").removeClass("randomfont").addClass("countdown");
        } else {
            if (loginCommon.sendCKRndCount == 0) {
                $("#randomCKCode").text("获取短信验证码").removeClass("countdown").addClass("randomfont");
                if(resendRnd.removeEventListener){
                    resendRnd.addEventListener("click", loginCommon.sendCKMCode, false);
                }else{
                    resendRnd.attachEvent('onclick',loginCommon.sendCKMCode);
                }
                clearInterval(loginCommon.clearCKTimer);
                loginCommon.sendCKRndCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
            }
        }
    }
}
loginCommon.getShowVerifyParas = function() {
    var params = {};
    var userType = $("#userType").val();
    var userName = "";
    if (userType ==CommonConstants.USER_TYPE_MOBILE || userType == CommonConstants.USER_TYPE_EMAIL) {
        userName = $("#userName").val().trim();
    } else {
        var areaCode = $("#areaCode").val();
        for(var i=0;i<citys.length;i++) {
            if (areaCode == citys[i][4]) {
                userName = citys[i][5] + "-" + $("#userName").val().trim();
                break;
            }
        }
    }
    params.userName = userName;
    params.pwdType = $("#pwdType").val();
    return params;
}
loginCommon.initLoginBox = function() {
    var params = $.cookie("piw");
    if (params == null || params == "" || params == "null" || params == undefined) {
        loginCommon.initLoginWithoutRm();
        return;
    }
    params = loginCommon.strToJson(params);
    if (params.rme == null || params.rme == "" || params.rme == "null" || params.rme == undefined) {
        loginCommon.initLoginWithoutRm();
        return;
    }
    params = params.rme;
    var loginType = $("#loginType").val();
    var userType = params.pt;
    if (!loginCommon.isAutoCompete(loginType,userType) || !loginCommon.isUniformity(params.u,userType) || loginCommon.isUnicomLogin(userType)) {
        loginCommon.initLoginWithoutRm();
        return;
    }
    $("#userName").val(params.u).css({"color":"#333","font-weight":"bold"});
    loginCommon.lastUserName=params.u;
    $("#userName").parents("dd").find(".sl-delect").show();
    $("#userPwd").val("");
    loginCommon.checkUserName();
    $("#userType").val(userType);
    $("#userPwdDiv").addClass("showPlaceholder");
    loginCommon.resetPwdInputTips();
    if ($("#userType").val() != CommonConstants.USER_TYPE_MOBILE && $("#userType").val() != CommonConstants.USER_TYPE_EMAIL) {
        $("#arrcity").val(params.at).css({"color":"#333","font-weight":"bold"});
        $("#areaCode").val(params.ac);
        var lis = $(".selType").find("li");
        for (var i=0;i<lis.length;i++){
            var _this=$(lis[i]);
            var _thisType="0" + _this.val();
            if ($("#userType").val() == _thisType) {
                _thisLabelHtml=_this.find("label").html()
                $(".typeText label").html(_thisLabelHtml);
                break;
            }
        }
        loginCommon.showArea("1");
    }
    loginCommon.checkNeedVerify();
}
loginCommon.initLoginWithoutRm = function() {
    var userNameObj = $("#userName"),userNameDataV = userNameObj.attr("data-value");
    if ($("#pwdType").val() == "02") {
        userNameObj.val("手机号码").css({"color":"","font-weight":""});
    } else  {
        userNameObj.val(userNameDataV).css({"color":"","font-weight":""});
    }
    $("#userName").parents("dd").find(".sl-delect").hide();
    $("#userType").val("01");
    //$("#pwdType").val("01");
    $("#userPwd").val("");
    $("#areaCode").val("");
    $("#arrcityWord").val("");
    $("#userPwdDiv").addClass("showPlaceholder");
    loginCommon.resetPwdInputTips();
    loginCommon.init();
    //loginCommon.hideRndTips();
    loginCommon.hideArea();
    loginCommon.hideForgotUsername();
    loginCommon.hideVerify();
    if (loginCommon.isNet()) {
        var arrcityObj = $("#arrcity"),arrcityDataV = arrcityObj.attr("data-value");
        arrcityObj.val(arrcityDataV).css({"color":"","font-weight":""});
        $(".typeText label").html(CommonConstants.NET_TIPS);
    }
}
loginCommon.isUniformity = function(userName,userType) {
    if (userName.isEmail() && userType != CommonConstants.USER_TYPE_EMAIL) {
        return false;
    }
    if (loginCommon.isMobile(userName) && userType != CommonConstants.USER_TYPE_MOBILE) {
        return false;
    }
    return true;
}
loginCommon.isAutoCompete = function(loginType,userType) {
    if (loginType == "1" && userType == CommonConstants.USER_TYPE_MOBILE) {
        return true;
    }
    if (loginType == "2" && (userType == CommonConstants.USER_TYPE_MOBILE || userType == CommonConstants.USER_TYPE_EMAIL)) {
        return true;
    }
    if (loginType == "3" && userType != CommonConstants.USER_TYPE_EMAIL) {
        return true;
    }
    if (loginType == "4") {
        return true;
    }
    return false;
}
loginCommon.checkUserNameUnicom = function(){
    var userNameUnicom = $("#userNameUnicom").val();
    userNameUnicom = userNameUnicom.trim();
    loginCommon.hideErrorTips();
    if(loginCommon.isIDCard(userNameUnicom)) {
        $("#userTypeUnicom").val(CommonConstants.USER_TYPE_IDC);
        return false;
    }else if(loginCommon.isTrendIDCard(userNameUnicom)){
        $("#userTypeUnicom").val(CommonConstants.USER_TYPE_IDC);
        loginCommon.showErrorTips(loginCommon.userNameUnicomError,CommonConstants.IS_BIZERROR_WU_IDC);
        return true;
    }else if(loginCommon.isUnicom(userNameUnicom)){
        $("#userTypeUnicom").val(CommonConstants.USER_TYPE_UNICOM);
        return false;
    }else{
        loginCommon.showErrorTips(loginCommon.userNameUnicomError,CommonConstants.IS_BIZERROR_WU);
        return true;
    }
}
loginCommon.isUnicom = function(userName){
    return /^[a-z][a-z0-9|\_]{5,14}$/i.test(userName);
}
loginCommon.isTrendIDCard = function(num){
    return /(^\d{1,15}$)|(^\d{1,17}([0-9]|X)$)/.test(num.toUpperCase().trim());
}
loginCommon.isIDCard = function(num){
    num = num.toUpperCase().trim();
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))){
        return false;
    }
    var len, re;
    len = num.length;
    if (len == 15){
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay){
            return false;
        }else{
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for(i = 0; i < 17; i ++){
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
        }
    }else if (len == 18){
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay){
            return false;
        }else{
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for(i = 0; i < 17; i ++){
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)){
                return false;
            }
        }
    }
    var sBirthday=num.substr(6,4)+"-"+Number(num.substr(10,2))+"-"+Number(num.substr(12,2));
    var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
    if(aCity[parseInt(num.substr(0,2))]==null){
        return false;
    }
    if(Number(num.substr(6,2))<19){
        return false;
    }
    return true;
}
loginCommon.initUnicomLoginBox = function() {
    var obj=$("#userNameUnicom"),datav=obj.attr("data-value"),val=obj.val();
    if(val!=""&&val!=datav){
        return;
    }
    var params = $.cookie("piw");
    if (params == null || params == "" || params == "null" || params == undefined) {
        loginCommon.initUnicomWithoutRm();
        return;
    }
    params = loginCommon.strToJson(params);
    if (params.rme == null || params.rme == "" || params.rme == "null" || params.rme == undefined) {
        loginCommon.initUnicomWithoutRm();
        return;
    }
    params = params.rme;
    var userType = params.pt;
    if (!loginCommon.isUnicomLogin(userType)) {
        loginCommon.initUnicomWithoutRm();
        return;
    }
    $("#userNameUnicom").val(params.u).css({"color":"#333","font-weight":"bold"});
    $("#userNameUnicom").parents("dd").find(".sl-delect").show();
    $("#userPwdUnicom").val("");
    $("#userTypeUnicom").val(userType);
    loginCommon.checkNeedVerify();
}
loginCommon.initUnicomWithoutRm = function(){
    var obj=$("#userNameUnicom"),datav=obj.attr("data-value");
    obj.val(datav).css({"color":"","font-weight":""});
    obj.parents("dd").find(".sl-delect").hide();
    $("#userPwdUnicom").val("");
    $("#userTypeUnicom").val(CommonConstants.USER_TYPE_UNICOM);
}
loginCommon.isUnicomLogin = function(userType){
    return userType==CommonConstants.USER_TYPE_IDC || userType==CommonConstants.USER_TYPE_UNICOM;
}
loginCommon.checkPwdUnicom = function(){
    var userPwdUnicom = $("#userPwdUnicom").val().trim();
    if (!/^\d{6}$/.test(userPwdUnicom)){
        loginCommon.showErrorTips(loginCommon.userPwdUnicomError, CommonConstants.IS_BIZERROR_WPWD);
        return true;
    }
    return false;
}
loginCommon.isEmptyUserNameUnicom = function(){
    var _this=$("#userNameUnicom"),datav=_this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.userNameUnicomError,CommonConstants.IS_EMPTY_USERNAME_U);
        return true;
    }
    return false;
}
loginCommon.isEmptyUserPwdUnicom = function(){
    var _this=$("#userPwdUnicom"),datav=_this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.userPwdUnicomError,CommonConstants.IS_EMPTY_USERPWD_E);
        return true;
    }
    return false;
}
loginCommon.checkVerifyUnicom = function(){
    var needVerify = loginCommon.isShowVerifyUnicom;
    if (needVerify == "1") {
        return false;
    }
    var _this = $("#verifyCodeUnicom"),datav = _this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.verifyUnicomError,CommonConstants.IS_EMPTY_VERIFYCODE);
        return true;
    }
    var verifyLen = Number(_this.attr("maxlength"));
    if (val.trim().length < verifyLen) {
        loginCommon.showErrorTips(loginCommon.verifyUnicomError,CommonConstants.IS_BIZERROR_LESS_VERIFYCODE);
        return true;
    }
    if (loginCommon.isValidVerify == "1") {
        loginCommon.showErrorTips(loginCommon.verifyUnicomError,CommonConstants.IS_BIZERROR_VALID_VC);
        return true;
    }
    if(val != loginCommon.rightVerify) {
        loginCommon.showErrorTips(loginCommon.verifyUnicomError,CommonConstants.IS_BIZERROR_WRONG_VC);
        return true;
    }
    return false;
}
loginCommon.loginUnicom = function(){
    if(loginCommon.isEmptyUserNameUnicom()||loginCommon.checkUserNameUnicom()){
        loginCommon.enableUnicomLoginBtn();
        return true;
    }
    if(loginCommon.isEmptyUserPwdUnicom()||loginCommon.checkPwdUnicom()){
        loginCommon.enableUnicomLoginBtn();
        return true;
    }
    if(loginCommon.checkVerifyUnicom()){
        loginCommon.enableUnicomLoginBtn();
        return true;
    }
    loginCommon.loginUnicomSubmit();
    return false;
}
loginCommon.loginUnicomSubmit = function(){
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                loginCommon.initVerifyUnicom();
                loginCommon.enableUnicomLoginBtn();
            }
        });
        $.getJSON(
            CommonConstants.LOGIN_UNICOM_URL+"&req_time="+new Date().getTime(),
            loginCommon.getLoginUnicomParas(),
            function(jsonData){
                loginCommon.enableUnicomLoginBtn();
                if (jsonData.resultCode == "0000") {// 成功
                    loginCommon.successAction(jsonData.redirectURL,jsonData.resultCode);
                    return;
                } else if (jsonData.resultCode =='7072' ||jsonData.resultCode =='7007' || jsonData.resultCode =='7006' || jsonData.resultCode =='7038' || jsonData.resultCode =='7110') {
                    var flag = "";
                    if (jsonData.msg.length != 143) {
                        flag = "2";
                    }
                    var obj = jsonData.resultCode =='7007' || jsonData.resultCode =='7006'?loginCommon.userPwdError:loginCommon.nonObjError;
                    loginCommon.showErrorTips(obj,jsonData.msg,flag);
                    loginCommon.initPwd();
                    loginCommon.isShowVerify = jsonData.needvode; // 初始化是否需要展示验证码
                    loginCommon.initVerify();
                    if (loginCommon.isShowVerify == "0") {
                        loginCommon.showVerify();
                    } else {
                        loginCommon.hideVerify();
                    }
                    return;
                } else if (jsonData.resultCode =='7001') {
                    loginCommon.showErrorTips(loginCommon.verifyError,CommonConstants.IS_BIZERROR_WRONG_VC);
                    loginCommon.initVerifyUnicom();
                    return;
                } else if (jsonData.resultCode =='7003') {
                    loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_INIT_PWD,"2");
                    loginCommon.initPwd();
                    loginCommon.initVerifyUnicom();
                    return;
                } else if (jsonData.resultCode =='7002') {
                    loginCommon.showErrorTips(loginCommon.userPwdError,CommonConstants.IS_BIZERROR_SIMPLE_PWD,"2");
                    loginCommon.initPwd();
                    loginCommon.initVerifyUnicom();
                    return;
                } else if (jsonData.resultCode =='7005') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,jsonData.msg,jsonData.msg.len()>30?"2":"");
                    loginCommon.initVerifyUnicom();
                    return;
                } else if (jsonData.resultCode =='7004') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_ACCOUNT_LOCKED,"2");
                    loginCommon.initVerifyUnicom();
                    return;
                } else if (jsonData.resultCode =='8888') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_INVALID_REQ);
                    loginCommon.initVerifyUnicom();
                    return;
                } else if (jsonData.resultCode =='7099') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_RELEASE);
                    loginCommon.initVerifyUnicom();
                    return;
                } else{
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                    loginCommon.initVerifyUnicom();
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
        loginCommon.initVerifyUnicom();
        loginCommon.enableUnicomLoginBtn();
    }
}
loginCommon.initVerifyUnicom = function(flag){
    if (loginCommon.isShowVerifyUnicom == "1") {
        return;
    }
    loginCommon.refreshUnicomVerify();
    if(flag == "1") {
        $("#verifyCodeUnicom").focus();
    }
}
loginCommon.getLoginUnicomParas = function(){
    var params = {};
    params.userName=$("#userNameUnicom").val();
    params.userPwd=$("#userPwdUnicom").val();
    if(loginCommon.isShowVerifyUnicom == "0"){
        params.verifyCode=$("#verifyCodeUnicom").val();
    }
    return params;
}
loginCommon.registerUnicomAction = function(){
    window.parent.location = "/portal/register.html";//TODO
}
loginCommon.checkRegisterEmail = function(){
    var obj=$("#registerEmail"),dataV=obj.attr("data-value"),val=obj.val();
    if(val==""||dataV==val){
        loginCommon.showErrorTips(loginCommon.registerEmailError, CommonConstants.IS_EMPTY_USERNAME_E);
        return true;
    }
    if(val.trim().length>Number(obj.attr("maxlength"))){
        loginCommon.showErrorTips(loginCommon.registerEmailError, CommonConstants.IS_BIZERROR_OL_E);
        return true;
    }
    if(!val.isEmailStrict()){
        loginCommon.showErrorTips(loginCommon.registerEmailError, CommonConstants.IS_BIZERROR_WRONG_E);
        return true;
    }
    if(loginCommon.isYahoo(val)){
        loginCommon.showErrorTips(loginCommon.registerEmailError, CommonConstants.IS_BIZERROR_FORBIDDEN_YACN);
        return true;
    }
    return false;
}
loginCommon.isYahoo = function(email){
    return /@yahoo.cn$/i.test(email.trim()) || /@yahoo.com.cn$/i.test(email.trim());
}
loginCommon.checkEmailRegistered = function(){
    if(loginCommon.lastCorrectEmail==$("#registerEmail").val().trim().toLowerCase()&&loginCommon.registerState=="1"){
        loginCommon.showErrorTips(loginCommon.registerEmailError, CommonConstants.IS_BIZERROR_HR);
        return true;
    }
    if(loginCommon.lastCorrectEmail==$("#registerEmail").val().trim().toLowerCase()&&loginCommon.registerState=="2"){
        loginCommon.hideErrorTips();
        return false;
    }
    if(loginCommon.isEmailChanged()){
        loginCommon.checkRegisteredAction();
    }
    return false;
}
loginCommon.checkRegisteredAction = function(){
    var params={};
    params.loginName=$("#registerEmail").val();
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.registerState="0";
            }
        });
        $.getJSON(
            CommonConstants.REGISTERED_CHECK_URL,
            params,
            function(jsonData){
                if (jsonData.HAS_CUST) {
                    loginCommon.showErrorTips(loginCommon.registerEmailError, CommonConstants.IS_BIZERROR_HR);
                    loginCommon.registerState="1";
                    return;
                } else {
                    loginCommon.hideErrorTips();
                    loginCommon.registerState="2";
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.registerState="0";
    }
}
loginCommon.loginImt = function(){
    $(".register").hide();
    $(".fixedLineLogin").hide();
    $(".mpLogin").show();
    $("#userName").val($("#registerEmail").val()).css({"color":"#333","font-weight":"bold"});
    loginCommon.lastUserName=$("#registerEmail").val();
    $("#userName").parents("dd").find(".sl-delect").show();
    loginCommon.checkUserName();
    $("#userPwd").val("");
    loginCommon.checkNeedVerify();
    loginCommon.hideErrorTips();
    loginCommon.resizeLoginBoxHeight();
}
loginCommon.isEmailChanged = function(){
    var currentEmail=$("#registerEmail").val().trim().toLowerCase();
    if(loginCommon.lastCorrectEmail == "" || loginCommon.lastCorrectEmail!=currentEmail){
        loginCommon.lastCorrectEmail = currentEmail;
        return true;
    }
    return false;
}
loginCommon.checkStrong = function(){
    var registerPwd=$("#registerPwd").val().trim();
    if(registerPwd.length>=6 && registerPwd.match(/[\da-zA-Z]+/)){
        $("#mainPwdStatus").show();
        var strength=0;
        if(registerPwd.match(/\d+/)){
            strength=strength+1;
        }
        if(registerPwd.match(/[a-z]+/)){
            strength=strength+1;
        }
        if(registerPwd.match(/[A-Z]+/)){
            strength=strength+1;
        }
        if(strength==3){
            $(".s3").removeClass("specials2").addClass("specials3");
            $(".s2").removeClass("specials2").addClass("specials3").html("");
            $(".s1").removeClass("specials1").addClass("specials3").html("");
        }else if(strength==2){
            $(".s3").removeClass("specials3");
            $(".s2").removeClass("specials2").addClass("specials2").html("中");
            $(".s1").removeClass("specials1").addClass("specials2").html("");
        }else if(strength==1){
            $(".s3").removeClass("specials3");
            $(".s2").removeClass("specials2").html("中");
            $(".s1").removeClass("specials1").addClass("specials1").html("弱");
        }else{
            $(".s3").removeClass("specials3");
            $(".s2").removeClass("specials2").html("中");
            $(".s1").removeClass("specials1").html("弱");
        }
    }else{
        $("#mainPwdStatus").hide();
    }
}
loginCommon.checkRegisterPwd = function(){
    loginCommon.hideErrorTips();
    var registerPwd=$("#registerPwd").val().trim();
    if(registerPwd.length<6||registerPwd.length>16){
        loginCommon.showErrorTips(loginCommon.registerPwdError, CommonConstants.IS_BIZERROR_W_PWD_E);
        return true;
    }
    if(registerPwd.match(/[^a-zA-Z0-9]/g)){
        loginCommon.showErrorTips(loginCommon.registerPwdError, CommonConstants.IS_BIZERROR_W_PWD_RP);
        return true;
    }
    var confirmPwd=$("#confirmPwd").val().trim();
    if(confirmPwd!="" && registerPwd!=confirmPwd){
        loginCommon.showErrorTips(loginCommon.confirmPwdError, CommonConstants.IS_BIZERROR_W_PWD_UD);
        return true;
    }
    return false;
}
loginCommon.checkConfirmPwd = function(){
    var confirmPwd=$("#confirmPwd").val().trim();
    if(confirmPwd==""){
        loginCommon.showErrorTips(loginCommon.confirmPwdError, CommonConstants.IS_EMPTY_USERPWD_C);
        return true;
    }
    var registerPwd=$("#registerPwd").val().trim();
    if(registerPwd!=confirmPwd){
        loginCommon.showErrorTips(loginCommon.confirmPwdError, CommonConstants.IS_BIZERROR_W_PWD_UD);
        return true;
    }
    return false;
}
loginCommon.checkRegisterVerify = function(){
    var _this = $("#verifyCodeRegister"),datav = _this.attr("data-value"),val=_this.val();
    if(val=="" || val==datav){
        loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_EMPTY_VERIFYCODE);
        return true;
    }
    var verifyLen = Number(_this.attr("maxlength"));
    if (val.trim().length < verifyLen) {
        loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_BIZERROR_LESS_VERIFYCODE);
        return true;
    }
    if (loginCommon.isValidVerifyRegister == "1") {
        loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_BIZERROR_VALID_VC);
        return true;
    }
    if(val != loginCommon.rightVerifyRegister) {
        loginCommon.showErrorTips(loginCommon.verifyRegisterError,CommonConstants.IS_BIZERROR_WRONG_VC);
        return true;
    }
    return false;
}
loginCommon.register = function(){
    if(loginCommon.checkRegisterEmail()||loginCommon.checkEmailRegistered()){//校验注册邮箱
        loginCommon.enableRegisterBtn();
        return true;
    }
    if(loginCommon.checkRegisterPwd()){//校验注册密码
        loginCommon.enableRegisterBtn();
        return true;
    }
    if(loginCommon.checkConfirmPwd()){//校验确认密码
        loginCommon.enableRegisterBtn();
        return true;
    }
    // if(loginCommon.checkRegisterVerify()){//校验注册验证码
    //   loginCommon.enableRegisterBtn();
    //   return true;
    // }
    if(loginCommon.checkRegisterEmailVerify()){//校验注册码
        loginCommon.enableRegisterBtn();
        return true;
    }
    loginCommon.registerSubmit();
    return false;
}
loginCommon.getRegisterParas = function(){
    var params ={};
    params.loginName = $('#registerEmail').val();
    params.userPassword = $('#registerPwd').val();
    params.newPasswordRepeat = $('#confirmPwd').val();
    // params.inputCode = $('#verifyCodeRegister').val();
    params.inputCode = $('#verifyEmailReg').val();
    params.redirectType = '13';
    params.uvc = $.cookie('registerkey');
    return params;
}
loginCommon.checkRegisterEmailVerify=function(){
    var _this=$("#verifyEmailReg"),datav=_this.attr("data-value"),val=_this.val();
    if(val==""){
        loginCommon.showErrorTips(_this,CommonConstants.IS_EMPTY_REGISTERCODE);
        return true;
    }
    var verifyLen=Number(_this.attr("maxlength"));
    if (val.trim().length<verifyLen) {
        loginCommon.showErrorTips(_this,CommonConstants.IS_BIZERROR_LESS_REGISTERCODE);
        return true;
    }
    return false;
};
loginCommon.registerSubmit = function(){
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                loginCommon.refreshRegisterVerify();
                loginCommon.enableRegisterBtn();
            }
        });
        $.getJSON(
            CommonConstants.REGISTER_URL+"&req_time="+new Date().getTime(),
            loginCommon.getRegisterParas(),
            function(jsonData){
                loginCommon.enableRegisterBtn();
                if (jsonData.resultCode == "0000") {// 成功
                    loginCommon.successAction(jsonData.redirectURL,jsonData.resultCode);
                    return;
                } else if (jsonData.resultCode =='7235') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_EMAILWRONG_VC);
                    loginCommon.refreshRegisterVerify();
                    return;
                } else if (jsonData.resultCode =='8888') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_INVALID_REQ);
                    loginCommon.refreshRegisterVerify();
                    return;
                } else if (jsonData.resultCode =='7099') {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_RELEASE);
                    loginCommon.refreshRegisterVerify();
                    return;
                } else {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                    loginCommon.refreshRegisterVerify();
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
        loginCommon.refreshRegisterVerify();
        loginCommon.enableRegisterBtn();
    }
}
loginCommon.resendEmailCode=function(){
    var resendEmail=document.getElementById("accessCodeBtn");
    if(loginCommon.sendEmailCodeCount>0&&loginCommon.sendEmailCodeCount<CommonConstants.CLEAR_TIMER_INTI_TIME){
        return;
    }
    loginCommon.sendEmailCodeCount=CommonConstants.CLEAR_TIMER_INTI_TIME;
    clearInterval(loginCommon.sendCodeClearTimer);
    loginCommon.sendCodeClearTimer=setInterval(changeTime, 1000);
    $("#accessCodeBtn").text(+loginCommon.sendEmailCodeCount+"秒").addClass("resendEmailDis");
    if(resendEmail.removeEventListener){
        resendEmail.removeEventListener("click",loginCommon.resendCode, false);
    }else if(resendEmail.detachEvent){
        resendEmail.detachEvent("onclick",loginCommon.resendCode);
    }
    loginCommon.resendCodeAction();
    function changeTime(){
        if(loginCommon.sendEmailCodeCount>0){
            loginCommon.sendEmailCodeCount=loginCommon.sendEmailCodeCount - 1;
            $("#accessCodeBtn").text(+loginCommon.sendEmailCodeCount+"秒").addClass("resendEmailDis");
        } else {
            if(loginCommon.sendEmailCodeCount==0){
                $("#accessCodeBtn").text("获取注册码").removeClass("resendEmailDis");
                if(resendEmail.removeEventListener){
                    resendEmail.addEventListener("click",loginCommon.resendCode,false);
                }else{
                    resendEmail.attachEvent('onclick',loginCommon.resendCode);
                }
                clearInterval(loginCommon.sendCodeClearTimer);
                loginCommon.sendEmailCodeCount=CommonConstants.CLEAR_TIMER_INTI_TIME;
            }else{
                loginCommon.sendEmailCodeCount=loginCommon.sendEmailCodeCount-1;
            }
        }
    }
};
loginCommon.resendCodeAction=function() {
    try{
        $.ajaxSetup({
            error:function(x,e){
                loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR);
                loginCommon.sendEmailCodeCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
                clearInterval(loginCommon.sendCodeClearTimer);
                $("#accessCodeBtn").text("获取注册码").removeClass("resendEmailDis");
                document.getElementById("accessCodeBtn").addEventListener("click", loginCommon.resendCode, false);
            }
        });
        var paras = {};
        paras.email = $("#registerEmail").val().trim();
        $.getJSON(
            CommonConstants.REGRESENDEMAIL_URL+"&req_time="+new Date().getTime(),
            paras,
            function(jsonData){
                if (jsonData.resultCode == "0000") {// 成功
                    loginCommon.showSuccessTips(CommonConstants.IS_BIZERROR_SEND_SUCESS);
                    return;
                } else if (jsonData.resultCode == "7082") {// 距离上次发送不足1分钟
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_OFTEN);
                    return;
                } else if (jsonData.resultCode == "7081") {// 发送次数超过限制
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_MORE,"2");
                    return;
                } else {
                    loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SYSTEM_ERROR);
                    return;
                }
            }
        );
    }catch(ex){
        loginCommon.showErrorTips(loginCommon.nonObjError,CommonConstants.IS_BIZERROR_SEND_SYSTEM_ERROR);
        loginCommon.sendEmailCodeCount = CommonConstants.CLEAR_TIMER_INTI_TIME;
        clearInterval(loginCommon.sendCodeClearTimer);
        $("#accessCodeBtn").text("获取注册码").removeClass("resendEmailDis");
        document.getElementById("accessCodeBtn").addEventListener("click", loginCommon.resendCode, false);
    }
}
loginCommon.resendCode=function(){
    loginCommon.resendEmailCode();
};
loginCommon.initLoginInfo = function(){
    var loginCookie=$.cookie("JUT"),loginUser=$("#loginUserName").val();
    if(loginCookie!=""&&loginUser!=""){
        if($("#loginFrom").val()=="01"){
            loginCommon.showAlreadyLoginBox();
        }else{
            loginCommon.successAction("","");
        }
    }else{
        loginCommon.resizeLoginBoxHeight();
        loginCommon.initLoginBox();
    }
}
loginCommon.showAlreadyLoginBox = function(){
    $(".mpLogin").hide();
    $(".loginAl").show();
    $(".currentLoginUser").html(loginCommon.hideUserName($("#loginUserName").val()));
    var total=Number($("#userInfo").val())+Number($("#security").val())+Number($("#pwdManagment").val())+Number($("#bind").val());
    var heightStr=total==0||total==1?"height:430px;":"height:400px;";
    loginCommon.resizeBg(heightStr);
}
loginCommon.hideUserName = function(userName){
    var loginUserType=$("#loginUserType").val(),result="";
    if(loginUserType=="01"||loginUserType=="06"||loginUserType=="11"||loginUserType=="16"){
        result='<i class="loginsevice"></i>'+userName.substring(0,3)+"****"+userName.substring(7);
    }else if(loginUserType==CommonConstants.USER_TYPE_EMAIL){
        var splits=userName.split("@");
        if(splits[0].length<=4){
            result=splits[0]+"@"+splits[1];
        }else if(splits[0].length==5){
            result=splits[0].substring(0,4)+"*@"+splits[1];
        }else if(splits[0].length==6){
            result=splits[0].substring(0,4)+"**@"+splits[1];
        }else if(splits[0].length==7){
            result=splits[0].substring(0,4)+"***@"+splits[1];
        }else{
            result=splits[0].substring(0,4)+"****@"+splits[1];
        }
        result='<i class="loginsevice"></i>'+result;
    }else if(loginUserType==99){
        result='<i class="loginqq"></i>'+loginCommon.getThirdNickName($("#loginNickname").val());
    }else if(loginUserType==98){
        result='<i class="loginsina"></i>'+loginCommon.getThirdNickName($("#loginNickname").val());
    }else if(loginUserType==96){
        result='<i class="loginnetbase"></i>'+loginCommon.getThirdNickName($("#loginNickname").val());
    }else if(loginUserType==94){
        result='<i class="loginalipay"></i>'+loginCommon.getThirdNickName($("#loginNickname").val());
    }else if(loginUserType==93){
        result='<i class="logintenctweibo"></i>'+loginCommon.getThirdNickName($("#loginNickname").val());
    }else{
        var splits=userName.split("-");
        result='<i class="loginsevice"></i>'+splits[0]+"-"+splits[1].substring(0,2)+"****"+splits[1].substring(splits[1].length-4);
    }
    return result;
}
loginCommon.getThirdNickName = function(nickName){
    var names=nickName.split("(");
    if(names.length<2){
        if(nickName.length>12){
            return nickName.substring(0,4)+"****"+nickName.substring(nickName.length-4)
        }else{
            return nickName;
        }
    }
    var result="";
    for(var i=0;i<names.length-1;i++){
        result=result+names[i];
        if(i<names.length-2){
            result=result+"(";
        }
    }
    if(result.length>12){
        return result.substring(0,4)+"****"+result.substring(result.length-4)
    }else{
        return result;
    }
}
loginCommon.disableLoginBtn = function(){
    $("#login1").attr("disabled","disabled").removeClass("loginBtn").addClass("loginBtnDisable");
}
loginCommon.enableLoginBtn = function(){
    $("#login1").attr("disabled",false).removeClass("loginBtnDisable").addClass("loginBtn");
}
loginCommon.disableRegisterBtn = function(){
    $("#registerBtn").attr("disabled","disabled").removeClass("registerBtn").addClass("registerBtnDisabled");
}
loginCommon.enableRegisterBtn = function(){
    $("#registerBtn").removeAttr("disabled").removeClass("registerBtnDisabled").addClass("registerBtn");
}
loginCommon.disableUnicomLoginBtn = function(){
    $("#login2").attr("disabled","disabled").removeClass("loginBtn").addClass("loginBtnDisable");
}
loginCommon.enableUnicomLoginBtn = function(){
    $("#login2").attr("disabled",false).removeClass("loginBtnDisable").addClass("loginBtn");
}
loginCommon.disableMilicfmBtn = function(){
    $("#miliConfirm").attr("disabled","disabled").removeClass("milicfmBtn").addClass("milicfmBtnDisable");
}
loginCommon.enableMilicfmBtn = function(){
    $("#miliConfirm").attr("disabled",false).removeClass("milicfmBtnDisable").addClass("milicfmBtn");
}
loginCommon.initHostList = function(){
    if(!loginCommon.isNet()){
        return;
    }
    var areaName="";
    var currentAreaCode=$("#loginAreaCode").val();
    for(var i=0;i<citys.length;i++){
        if(currentAreaCode==citys[i][4]){
            areaName=citys[i][1];
            break;
        }
    }
    if(areaName==""){
        return;
    }
    var hotCitys=$(".js-hotcitylist");
    var m=0;
    for(var i=0;i<hotCitys.length;i++){
        var obj=$(hotCitys[i]);
        if(i==0){
            obj.html(areaName);
        }else{
            if(currentAreaCode==commoncitys[m][4]){
                m++;
            }
            obj.html(commoncitys[m][1]);
            m++;
        }
    }
}
loginCommon.resizeBg=function(style){
    if($("#isTransparent").val()=="t"){
        style=style+"opacity:1;filter:alpha(opacity=100);"
    }
    $(".areaBg").attr("style",style);
}
String.prototype.len=function(){
    return this.replace(/[\u4E00-\u9FA5]/g,"aa").length;
};
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
String.prototype.isEmailStrict = function () {
    return /^[a-z0-9][\w+|\-\.]{2,}@(?:[a-z0-9](?:[-]?[a-z0-9]+)*\.){1,3}(?:com|org|edu|net|gov|cn|hk|tw|jp|de|uk|fr|mo|eu|sg|kr)$/i.test(this.trim());
};
String.prototype.isEmail = function () {
    return /[\w+|\-\.]{1,}\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/i.test(this.trim()) && !/@169.gx$/i.test(this.trim()) && !/@16900.gd$/i.test(this.trim());
};
;
/*
 * this is used for /protal/login/qrcodeLogin.html
 */

var genqrimg = UacPrefix.PRXFIX_HTTPS_URL + "/oauth2/genqr";
var urlstr = UacPrefix.PRXFIX_HTTPS_URL + "/qrcode/qrcode_gen?callback=?";
var heartbeaturl = UacPrefix.PRXFIX_HTTPS_URL + "/qrcode/qrcode_hbt?callback=?";
var logonurl = UacPrefix.PRXFIX_HTTPS_URL + "/portal/qrcode/qrcode_logon?callback=?";
var default_redirect_url = UacPrefix.PRXFIX_HTTPS_URL;

var flag_refresh = "0"; // 二维码刷新标识
var flag_heartbeat = "00";
var time_show;
var qrcode_mask = "0";  // 扫码成功遮罩层标识
var flag_qrcodegen = "0";

var unisecid = "";

$(function() {
    qrcode_mask = "0";
    flag_qrcodegen = "0";
    loadqrimg();
    $("#div_qrcodearea").on("show", function() {
        if (null == time_show || "" == time_show) {
            time_show = new Date();
        }
        heartbeat();
    });
    $("#div_qrcodearea").on("hide", function() {
        stophbt();
    });
});

function tologon () {

    var params = {};
    params.secsnid = $.cookie("unisecid");
    $.getJSON(
        logonurl,
        params,
        function(data){
            logonCallBack(data);
        }
    );
    $.ajaxSetup({
        error:function(x,e){
            qrimg_refresh_bind("登录异常，请点击刷新再试。");
        }
    });
}

function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ value + ";domain=.10010.com;path=/;expires=" + exp.toGMTString();
}

function logonCallBack (data) {
    if ("01" == data.resultcode) {
        var redurl = $.getParentUrlParam("redirectURL");
        if (null != redurl && "" != redurl) {
            setCookie("piw", data.piw);
            window.parent.location.href = redurl;
        } else {
            setCookie("piw", data.piw);
            window.parent.location.href = "http://www.10010.com";
        }
    } else {
        qrimg_refresh_bind("登录失败，请点击刷新再试。");
    }
}

var mapstr = "";
mapstr += "<map name=\"toreloadqrcode\" id=\"toreloadqrcode\">";
mapstr += "<area shape=\"circle\" coords=\"180,139,14\" href =\"test1.html\" alt=\"test1\" />";
mapstr += "</map>";
var beattimer;
function heartbeat() {
    beattimer = setInterval(function() {
        var time_hb = new Date();
        if ("00" == flag_heartbeat && (time_hb.getTime() - time_show.getTime()) > 1000 * 60 * 10) {
            stophbt();
            qrimg_refresh_bind("等待扫码超时，请点击刷新再试。");
            return;
        }

        var params = {};
        params.secsnid = $.cookie("unisecid");;
        $.getJSON(
            heartbeaturl,
            params,
            function(data){
                if ("-1" == data.resultcode) {
                    stophbt();
                    qrimg_refresh_bind("扫码登录失败，请稍候刷新再试。");
                }
                if ("10" == data.resultcode) {
                    flag_heartbeat = "10";
                    qrimg_succ_pro("扫码成功", "等待用户授权登录，请勿刷新本页面。");
                }
                if ("11" == data.resultcode) {
                    flag_heartbeat = "11";
                    qrimg_succ_pro("授权成功", "等待跳转登录，请勿刷新本页面。");
                    stophbt();
                    tologon();
                }
                if ("02" == data.resultcode) {
                    stophbt();
                    qrimg_refresh_bind("等待授权超时，请点击刷新再试。");
                }
            }
        );
    }, 3000);
}

function qrimg_succ_pro (msg_tit, msg_con) {
    if ("1" == qrcode_mask) {
        return;
    }
    qrcode_mask = "1";
    $("#qrimg").attr("src", "/portal/images/qrcodeLogin/qrcode_model.png");
    $("#div_qrcodearea").append("<div id=\"succ_mask\" style=\"z-index:999; position:absolute; filter:alpha(opacity=90); -moz-opacity:0.9; opacity: 0.9;"
        + " color:red; background:#fff; top:107px; left:92px;\">"
        + "<div style=\"margin-top:40px; margin-right:20px; margin-bottom:40px; margin-left:25px; height:70px; width:110px;\">"
        + "<div style=\"margin:20 20 20 20; color:black;\"><img src=\"/portal/images/qrcodeLogin/qrcode_success.gif\"/><b>" + msg_tit + "</b><br/>" + msg_con + "</div>"
        + "</div>"
        + "</div>");
}

function qrimg_refresh_bind (msg_con) {
    qrcode_mask = "0";
    flag_qrcodegen = "0";
    $("#succ_mask").remove();
    $("#msg_qr").empty().html(msg_con);
    $("#qrimg").hide();
    $("#qrlogo").hide();
    $(".qttt").show();
    $(".qtt-h").unbind();
    $(".qtt-h").bind("click", function () {
        if ("1" == flag_refresh) {
            return;
        }
        loadqrimg();
        time_show = new Date();
        heartbeat();
    });
}

function stophbt() {
    flag_refresh = "0";
    clearInterval(beattimer);
}

function loadqrimg() {

    if ("1" == flag_qrcodegen) {
        return;
    }
    $(".qttt").hide();
    $("#qrimg").attr("src", genqrimg + "?timestamp=" + new Date().getTime());
    $("#qrimg").show();
    $("#qrlogo").show();
    flag_qrcodegen = "1";
    flag_refresh = "1";
    $("#msg_qr").empty();

//    var params = {};
//    $.getJSON(
//        urlstr,
//        params,
//        function(data){
//            $(".qttt").hide();
//            $("#qrimg").show();
//            $("#qrlogo").show();
//            $("#qrimg").attr("src", data.qrimgstr);
//            unisecid = data.unisecid;
//            flag_refresh = "1";
//            $("#msg_qr").empty();
//        }
//    );
//    $.ajaxSetup({
//        error:function(x,e){
//            flag_refresh = "0";
////            stophbt();
//            qrimg_refresh_bind("获取二维码出错，请点击刷新再试。");
//        }
//    });

}

(function($) {
    $.fn._show = $.fn.show;
    $.fn.show = function() {
        var ret = $.fn._show.apply(this, arguments);
        this.contents().each(function() {
            $(this).triggerHandler("show");
        });
        return ret;
    };
    $.fn._hide = $.fn.hide;
    $.fn.hide = function() {
        var ret = $.fn._hide.apply(this, arguments);
        this.contents().each(function() {
            $(this).triggerHandler("hide");
        });
        return ret;
    };
})(jQuery);

(function($){
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) {
            return unescape(r[2]);
        } return null;
    };
    $.getParentUrlParam = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.parent.location.search.substr(1).match(reg);
        if (r!=null) {
            return unescape(r[2]);
        } return null;
    };
})(jQuery);

Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "H+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};
