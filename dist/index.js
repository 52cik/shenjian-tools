/*!
 * shenjian tools v2.1.0
 * (c) 2019 楼教主 <fe.52cik@gmail.com> (http://www.52cik.com/)
 * Released under the MIT License.
 */
(function(e){"use strict";var t=/<img[^>]+?src="([^"]+)"[^>]*>(?:<\/img>)?/gi;function r(e,r){return void 0===r&&(r=!0),e.replace(t,function(e,t){return'<img src="'+u(t,r)+'">'})}function n(e,t){return void 0===t&&(t=!0),!1===t?e:""===e.trim()?e:/\.(jpe?g|gif|a?png|bmp|webp)@/i.test(e)?e.replace(/(\.\w+)@.+/,"$&$1"):/\.(jpe?g|gif|a?png|bmp|webp)/i.test(e)?e:e.replace(/(\?.+)?$/,".jpg$&")}function i(e){return""===e.trim()?e:e.replace(/(?=^\/\/)/,"http:")}function u(e,t){return void 0===t&&(t=!0),""===e.trim()?e:n(i(e),t)}var c=new RegExp("[\\x00-\\xff]+","g");var a={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ldquo;":"“","&rdquo;":"”","&lsquo;":"‘","&rsquo;":"’","&middot;":"·","&mdash;":"—","&copy;":"©","&reg;":"®","&tradel;":"™","&times;":"×","&divide;":"÷"},o=new RegExp("("+Object.keys(a).join("|")+")","gi");function s(e){return String(e).replace(o,function(e){return t=e,r=String(t).toLowerCase(),a[r]||t;var t,r})}var f=Object.freeze({isDeep:function(e){return 1700<e},content:function(e){return r(s(e))}}),g={};var p=Object.freeze({set:function(e,t){g[e]=t},get:function(e){return g[e]},del:function(e){delete g[e]},clear:function(){g={}}}),d=1e3,l=60*d,m=60*l,v=24*m,w=7*v,h=365.25*v,x=/^((?:\d+)?-?\d?\.?\d+) *(ms|s|m|h|d|w|y)?$/i;function b(e){return e=+e,String(e<10?"0"+e:e)}return e.store=p,e.helper=f,e.getTime=function(e){var a="";if(e.replace(/(20\d{1,2})\D(\d{1,2})\D(\d{1,2})(?:\D+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/,function(e,t,r,n,i,u,c){return a=t+"-"+b(r)+"-"+b(n),i&&(a+=" "+b(i)),u&&(a+=":"+b(u)),c&&(a+=":"+b(c)),""}),!/^20\d+-\d+-\d+/.test(a))return new Date(0);var t="0000-00-00 00:00:00".slice(a.length);return a+=t,new Date(a)},e.expired=function(e,t){return"string"==typeof e&&(e=new Date(e)),+e<Date.now()-function(e){if(100<(e=String(e)).length)return 0;var t=x.exec(e);if(!t)return 0;var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"y":return r*h;case"w":return r*w;case"d":return r*v;case"h":return r*m;case"m":return r*l;case"s":return r*d;case"ms":return r;default:return 0}}(t)},e.getJSON=function(e,t){void 0===t&&(t={}),e=e.replace(/^[^{[]+/,"").replace(/[^}\]]+$/,"");try{return JSON.parse(e)}catch(e){return t}},e.clearImg=r,e.fixImgExt=n,e.fixHttp=i,e.fixImg=u,e.strLen=function(e){return e?String(e).replace(c,"").length:0},e.entities=s,e})({});
