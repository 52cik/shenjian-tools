/*!
 * shenjian tools v1.4.3
 * (c) 2018 楼教主 <fe.52cik@gmail.com> (http://www.52cik.com/)
 * Released under the MIT License.
 */
(function(e){"use strict";var s=1e3,r=60*s,t=60*r,c=24*t,n=7*c,a=365.25*c;function i(e){return(e=+e)<10?"0"+e:e}function u(e){return""===e.trim()?e:/\.(jpe?g|gif|a?png|bmp|webp)@/i.test(e)?e.replace(/(\.\w+)@.+/,"$&$1"):/\.(jpe?g|gif|a?png|bmp|webp)/i.test(e)?e:e.replace(/(\?.+)?$/,".jpg$&")}function o(e){return""===e.trim()?e:e.replace(/(?=^\/\/)/,"http:")}function m(e){return""===e.trim()?e:u(o(e))}var d={};var f={set:function(e,s){d[e]=s},get:function(e){return d[e]},del:function(e){delete d[e]},clear:function(){d={}}};return e.store=f,e.getTime=function(e){var s="";if(e.replace(/(20\d{1,2})\D(\d{1,2})\D(\d{1,2})(?:\D+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/,function(e,r,t,c,n,a,u){s=r+"-"+i(t)+"-"+i(c),n&&(s+=" "+i(n)),a&&(s+=":"+i(a)),u&&(s+=":"+i(u))}),!/^20\d+-\d+-\d+/.test(s))return null;var r="0000-00-00 00:00:00".slice(s.length);return s+=r,new Date(s)},e.expired=function(e,i){return"string"==typeof e&&(e=new Date(e)),+e<Date.now()-function(e){if(!((e=String(e)).length>100)){var i=/^((?:\d+)?-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(i){var u=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*a;case"weeks":case"week":case"w":return u*n;case"days":case"day":case"d":return u*c;case"hours":case"hour":case"hrs":case"hr":case"h":return u*t;case"minutes":case"minute":case"mins":case"min":case"m":return u*r;case"seconds":case"second":case"secs":case"sec":case"s":return u*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}(i)},e.getJSON=function(e,s){e=e.replace(/^[^{[]+/,"").replace(/[^}\]]+$/,"");try{return JSON.parse(e)}catch(e){return s||{}}},e.clearImg=function(e){return e.replace(/<img[^>]+?src="([^"]+)"[^>]*>(?:<\/img>)?/gi,function(e,s){return'<img src="'+m(s)+'">'})},e.fixImgExt=u,e.fixHttp=o,e.fixImg=m,e})({});
