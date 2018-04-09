!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("fs"),require("path")):"function"==typeof define&&define.amd?define(["fs","path"],t):"object"==typeof exports?exports.asmDom=t(require("fs"),require("path")):e.asmDom=t(e.fs,e.path)}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={},n={2:0};return t.e=function(t){if(0!==n[t]){var o=require("./"+t+".asm-dom.js"),r=o.modules,i=o.ids;for(var a in r)e[a]=r[a];for(var s=0;i.length>s;s++)n[i[s]]=0}return Promise.resolve()},t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){process.nextTick(function(){throw e})},t(t.s=7)}([function(e,t,o){"use strict";t.__esModule=!0,t.nodes=void 0;var n=o(6),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=t.nodes={0:null},a=0,s=function(e){if(null===e)return 0;if(void 0!==e.asmDomPtr)return e.asmDomPtr;var t=++a;return i[t]=e,e.asmDomPtr=t,t};t.default={addNode:function(e){return s(e.parentNode),s(e.nextSibling),s(e)},createElement:function(e){return s(r.default.create(e))},createElementNS:function(e,t){return s(r.default.createNS(t,e))},createTextNode:function(e){return s(r.default.createText(e))},createComment:function(e){return s(r.default.createComment(e))},createDocumentFragment:function(){return s(document.createDocumentFragment())},insertBefore:function(e,t,o){i[e].insertBefore(i[t],i[o])},removeChild:function(e){null!==i[e]&&void 0!==i[e]&&r.default.collect(i[e])},appendChild:function(e,t){i[e].appendChild(i[t])},removeAttribute:function(e,t){i[e].removeAttribute(t)},setAttribute:function(e,t,o){120!==t.charCodeAt(0)?i[e].setAttribute(t,o):58===t.charCodeAt(3)?i[e].setAttributeNS("http://www.w3.org/XML/1998/namespace",t,o):58===t.charCodeAt(5)?i[e].setAttributeNS("http://www.w3.org/1999/xlink",t,o):i[e].setAttribute(t,o)},parentNode:function(e){return null!==i[e]&&void 0!==i[e]&&null!==i[e].parentNode?i[e].parentNode.asmDomPtr:0},nextSibling:function(e){return null!==i[e]&&void 0!==i[e]&&null!==i[e].nextSibling?i[e].nextSibling.asmDomPtr:0},setNodeValue:function(e,t){i[e].nodeValue=t}}},function(e,t,o){"use strict";function n(e){return this.asmDomEvents[e.type](e)}t.__esModule=!0,t.eventProxy=n;var r=o(0),i={};t.default=function(e,t,o){var a=r.nodes[o],s=window.asmDomHelpers.vnodesData[e],u=window.asmDomHelpers.vnodesData[t],d=void 0!==s&&void 0!==s.raw?s.raw:i,c=void 0!==u&&void 0!==u.raw?u.raw:i;if(d!==c){for(var l in d)void 0===c[l]&&(a[l]=void 0);a.asmDomRaws=[];for(var m in c)a.asmDomRaws.push(m),d[m]===c[m]&&("value"!==m&&"checked"!==m||a[m]===c[m])||(a[m]=c[m])}if(d=void 0!==s&&void 0!==s.events?s.events:i,c=void 0!==u&&void 0!==u.events?u.events:i,d!==c){for(var f in d)void 0===c[f]&&(a.removeEventListener(f,n,!1),delete a.asmDomEvents[f]);void 0===a.asmDomEvents&&(a.asmDomEvents={});for(var v in c)void 0===d[v]&&a.addEventListener(v,n,!1),a.asmDomEvents[v]=c[v]}d=void 0!==s&&void 0!==s.ref?s.ref:void 0,c=void 0!==u&&void 0!==u.ref?u.ref:void 0,d!==c&&void 0!==c&&c(a)}},function(e,t,o){"use strict";t.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Array.prototype.instanceofArray=!0;var r=function(e){for(var t=new window.asmDom.VNodePtrVector,o=0;e.length>o;o++)"string"==typeof e[o]?t.push_back(window.asmDom._h_ti(e[o],!0)):!1!==e[o]&&null!==e[o]&&void 0!==e[o]&&t.push_back(e[o]);return t},i=function(e){var t=void 0!==e.raw,o=!1,n=void 0,r=new window.asmDom.MapStringString,i=void 0!==e.raw?e.raw:{},a={};"string"==typeof e.className&&r.set("class",e.className);for(var s=Object.keys(e),u=s.length;u--;){var d=s[u],c=e[d];"value"===d||"checked"===d?(i[d]=c,t=!0):"function"==typeof c?"ref"===d?n=c:(a[d.replace(/^on/,"")]=c,o=!0):!1!==c&&"raw"!==d&&"className"!==d&&r.set(d,""+c)}return{ref:n,raw:t?i:void 0,events:o?a:void 0,attrs:r}};t.default=function(e,t,o,a){var s=void 0,u=void 0;if(void 0===t)s=window.asmDom._h_s(e);else if(void 0===o)if(!0===t.instanceofArray)s=window.asmDom._h_sc(e,t=r(t)),t.delete();else switch(void 0===t?"undefined":n(t)){case"boolean":s=window.asmDom._h_ti(e,t);break;case"string":s=window.asmDom._h_st(e,t);break;case"number":s=window.asmDom._h_sn(e,t);break;case"object":u=i(t),s=window.asmDom._h_sd(e,u.attrs);break;default:throw Error("Invalid argument: ",t)}else{if(void 0!==a)throw Error("Invalid arguments provided to h function");if(u=i(t),!0===o.instanceofArray)s=window.asmDom._h_sdc(e,u.attrs,o=r(o)),o.delete();else switch(void 0===o?"undefined":n(o)){case"string":s=window.asmDom._h_sdt(e,u.attrs,o);break;case"number":s=window.asmDom._h_sdn(e,u.attrs,o);break;default:throw Error("Invalid argument: ",o)}}return void 0!==u&&(u.attrs.delete(),void 0===u.raw&&void 0===u.events&&void 0===u.ref||(delete u.attrs,window.asmDomHelpers.vnodesData[s]=u)),s}},function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){if(!1!==window.asmDom.unsafePatch||window.asmDomHelpers.currentNode===e||void 0===window.asmDomHelpers.currentNode){if(e===t)return t;window.asmDomHelpers.currentNode=t;var o=window.asmDom.clearMemory;return"number"!=typeof e&&(o=!0,e=window.asmDom.toVNode(e)),window.asmDom._patch(e,t),!0===o&&setTimeout(window.asmDom.deleteVNode.bind(null,e)),t}}},function(e,t,o){"use strict";t.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={attributes:!0,childElementCount:!0,children:!0,classList:!0,clientHeight:!0,clientLeft:!0,clientTop:!0,clientWidth:!0,currentStyle:!0,firstElementChild:!0,innerHTML:!0,lastElementChild:!0,nextElementSibling:!0,ongotpointercapture:!0,onlostpointercapture:!0,onwheel:!0,outerHTML:!0,previousElementSibling:!0,runtimeStyle:!0,scrollHeight:!0,scrollLeft:!0,scrollLeftMax:!0,scrollTop:!0,scrollTopMax:!0,scrollWidth:!0,tabStop:!0,tagName:!0},i={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;","`":"&#96;"},a=function(e){return(e+"").replace(/[&<>"'`]/g,function(e){return i[e]})};t.appendProps=function(e){var t=window.asmDomHelpers.vnodesData[e];if(void 0===t)return"";if(void 0===(t=t.raw))return"";var o="";for(var i in t){var s=n(t[i]);void 0===r[i]&&"function"!==s&&"undefined"!==s&&(o+=" "+i+'="'+a(t[i])+'"')}return o},t.insertInnerHTML=function(e){var t=window.asmDomHelpers.vnodesData[e];return void 0!==t&&void 0!==t.raw&&void 0!==t.raw.innerHTML?t.raw.innerHTML+"":""},t.toHTML=function(e){if("number"!=typeof e)return"";var t=window.asmDom._toHTML(e);return!0===window.asmDom.clearMemory&&setTimeout(window.asmDom.deleteVNode.bind(null,e)),t}},,function(e,t,o){"use strict";t.__esModule=!0;var n={collect:function(e){n.clean(e);var t=e.nodeName;void 0!==e.asmDomNS&&(t+=e.namespaceURI);var o=n.nodes[t];void 0!==o?o.push(e):n.nodes[t]=[e]},create:function(e){e=e.toUpperCase();var t=n.nodes[e];if(void 0!==t){var o=t.pop();if(void 0!==o)return o}return document.createElement(e)},createNS:function(e,t){e=e.toUpperCase();var o=n.nodes[e+t];if(void 0!==o){var r=o.pop();if(void 0!==r)return r}var i=document.createElementNS(t,e);return i.asmDomNS=t,i},createText:function(e){var t=n.nodes["#text"];if(void 0!==t){var o=t.pop();if(void 0!==o)return o.nodeValue=e,o}return document.createTextNode(e)},createComment:function(e){var t=n.nodes["#comment"];if(void 0!==t){var o=t.pop();if(void 0!==o)return o.nodeValue=e,o}return document.createComment(e)},clean:function(e){e.remove();for(var t=void 0;t=e.lastChild;)n.collect(t);for(t=void 0!==e.attributes?e.attributes.length:0;t--;)e.removeAttribute(e.attributes[t].name);if(e.asmDomVNode=void 0,void 0!==e.asmDomRaws&&(e.asmDomRaws.forEach(function(t){e[t]=void 0}),e.asmDomRaws=void 0),void 0!==e.asmDomEvents){var o=Object.keys(e.asmDomEvents);for(t=o.length;t--;)e.removeEventListener(o[t],e.asmDomEvents[o[t]],!1);e.asmDomEvents=void 0}null!==e.nodeValue&&""!==e.nodeValue&&(e.nodeValue=""),Object.keys(e).forEach(function(t){"a"===t[0]&&"s"===t[1]&&"m"===t[2]&&"D"===t[3]&&"o"===t[4]&&"m"===t[5]||(e[t]=void 0)})},nodes:{}};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o(2),i=n(r),a=o(3),s=n(a),u=o(4),d=o(1),c=n(d),l=o(0),m=n(l),f={};"undefined"!=typeof global&&void 0===global.window&&(global.window={}),t.default=function(e){if(void 0===e&&(e={}),void 0!==f.lib&&!0!==e.hardReload)return Promise.resolve(f.lib);void 0===e.clearMemory&&(e.clearMemory=!0),void 0===e.unsafePatch&&(e.unsafePatch=!1);var t=void 0,n=new Promise(function(t){e.onRuntimeInitialized=function(){return t(f)}});return t=(!0===e.useWasm||"WebAssembly"in window||"undefined"!=typeof global&&"WebAssembly"in global)&&!0!==e.useAsmJS?new Promise(function(e){o.e(0).then(function(t){e(o(8))}.bind(null,o)).catch(o.oe)}).then(function(t){return t.default(e)}):new Promise(function(e){o.e(1).then(function(t){e(o(5))}.bind(null,o)).catch(o.oe)}),t.then(function(t){return t(e)}).then(function(e){return f.lib=e,window.asmDom=e,e.h=i.default,e.patch=s.default,e.toHTML=u.toHTML,e.getNode=function(t){return l.nodes[e._getNode(t)]},e.deleteVNode=function(t){window.asmDomHelpers.vnodesData[t]=void 0,e._deleteVNode(t)},e.reset=function(){window.asmDomHelpers={currentNode:void 0,domApi:m.default,vnodesData:{},diff:c.default,eventProxy:d.eventProxy,appendProps:u.appendProps,insertInnerHTML:u.insertInnerHTML,nodes:l.nodes}},e.reset(),n}).then(function(e){return e.lib})}},,,function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")}])});