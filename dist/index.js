/*!
 * shenjian tools v1.0.0
 * (c) 2018 楼教主 <fe.52cik@gmail.com> (http://www.52cik.com/)
 * Released under the MIT License.
 */
(function(t){"use strict";return t.getTime=function(t){var e="";if(t.replace(/(20\d+)\D(\d+)\D(\d+)(?:\D+(\d+):(\d+)(?::(\d+))?)?/,function(t,n,r,d,u,c,i){e=n+"-"+r+"-"+d,u&&(e+=" "+u),c&&(e+=":"+c),i&&(e+=":"+i)}),!/^20\d+-\d+-\d+/.test(e))return null;e=e.replace(/(?=\b\d\b)/g,"0");var n="0000-00-00 00:00:00".slice(e.length);return e+=n,new Date(e)},t.test=function(){return"test"},t})({});
