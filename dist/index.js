/*!
 * shenjian tools v2.0.0
 * (c) 2019 楼教主 <fe.52cik@gmail.com> (http://www.52cik.com/)
 * Released under the MIT License.
 */
(function(e){"use strict";var r=Object.freeze({isDeep:function(e){return 1700<e}}),t={};var n=Object.freeze({set:function(e,r){t[e]=r},get:function(e){return t[e]},del:function(e){delete t[e]},clear:function(){t={}}}),i=1e3,u=60*i,c=60*u,a=24*c,o=7*a,s=365.25*a,f=/^((?:\d+)?-?\d?\.?\d+) *(ms|s|m|h|d|w|y)?$/i;function g(e){return e=+e,String(e<10?"0"+e:e)}var p=/<img[^>]+?src="([^"]+)"[^>]*>(?:<\/img>)?/gi;function d(e,r){return void 0===r&&(r=!0),!1===r?e:""===e.trim()?e:/\.(jpe?g|gif|a?png|bmp|webp)@/i.test(e)?e.replace(/(\.\w+)@.+/,"$&$1"):/\.(jpe?g|gif|a?png|bmp|webp)/i.test(e)?e:e.replace(/(\?.+)?$/,".jpg$&")}function l(e){return""===e.trim()?e:e.replace(/(?=^\/\/)/,"http:")}function m(e,r){return void 0===r&&(r=!0),""===e.trim()?e:d(l(e),r)}var v=new RegExp("[\\x00-\\xff]+","g");var w={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ldquo;":"“","&rdquo;":"”","&lsquo;":"‘","&rsquo;":"’","&middot;":"·","&mdash;":"—","&copy;":"©","&reg;":"®","&tradel;":"™","&times;":"×","&divide;":"÷"},h=new RegExp("("+Object.keys(w).join("|")+")","gi");return e.store=n,e.helper=r,e.getTime=function(e){var a="";if(e.replace(/(20\d{1,2})\D(\d{1,2})\D(\d{1,2})(?:\D+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/,function(e,r,t,n,i,u,c){return a=r+"-"+g(t)+"-"+g(n),i&&(a+=" "+g(i)),u&&(a+=":"+g(u)),c&&(a+=":"+g(c)),""}),!/^20\d+-\d+-\d+/.test(a))return new Date(0);var r="0000-00-00 00:00:00".slice(a.length);return a+=r,new Date(a)},e.expired=function(e,r){return"string"==typeof e&&(e=new Date(e)),+e<Date.now()-function(e){if(100<(e=String(e)).length)return 0;var r=f.exec(e);if(!r)return 0;var t=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"y":return t*s;case"w":return t*o;case"d":return t*a;case"h":return t*c;case"m":return t*u;case"s":return t*i;case"ms":return t;default:return 0}}(r)},e.getJSON=function(e,r){void 0===r&&(r={}),e=e.replace(/^[^{[]+/,"").replace(/[^}\]]+$/,"");try{return JSON.parse(e)}catch(e){return r}},e.clearImg=function(e,t){return void 0===t&&(t=!0),e.replace(p,function(e,r){return'<img src="'+m(r,t)+'">'})},e.fixImgExt=d,e.fixHttp=l,e.fixImg=m,e.strLen=function(e){return e?String(e).replace(v,"").length:0},e.entities=function(e){return String(e).replace(h,function(e){return r=e,t=String(r).toLowerCase(),w[t]||r;var r,t})},e})({});
