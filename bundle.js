!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){t.exports=n.p+"770215dbd9b69655f696c7ea00a0f577.json"},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,a);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(!1);var r=n(4),a=r(n(5)),o=r(n(6)),i=r(n(7)),s=r(n(8)),l=r(n(9)),d=r(n(10));e.push([t.i,"@font-face {\n  font-family: 'Noto Sans Thai UI';\n  src: url("+a+") format('woff2'),\n  url("+o+") format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Noto Sans Thai UI';\n  src: url("+i+") format('woff2'),\n  url("+s+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'The Matter';\n  font-weight: 700;\n  src: url("+l+') format("woff2"),\n  url('+d+") format(\"woff\");\n}\n\nhtml, body {\n  background: #000;\n  color: #fff;\n  font-family: 'Noto Sans Thai UI', serif;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  line-height: 1.5;\n  font-size: 16px;\n  font-weight: normal;\n}\n\nsvg text {\n  font-family: 'Noto Sans Thai UI', 'Libre Baskerville', 'The Matter', serif;\n  font-weight: normal;\n}\n\nh1, h2, h3 {\n  font-family: 'Libre Baskerville', 'The Matter', serif;\n  text-align: center;\n}\n\na {\n  color: inherit;\n  /* blue colors for links too */\n  text-decoration: inherit;\n  /* no underline */\n}\n\n.hidden {\n  display: none;\n}\n\n#editorial {\n  text-align: center;\n  margin: 40px auto;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#footnote {\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n  padding-top: 24px;\n}\n\n#legend {\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 20px;\n  padding: 0 10px;\n}\n\n#legend div {\n  display: inline-block;\n  padding-right: 20px;\n  font-family: 'Libre Baskerville', 'The Matter', serif;\n  font-size: 12px;\n}\n\n#legend i {\n  padding-right: 4px;\n}\n\n#instruction {\n  font-size: 12px;\n  margin-top: 28px;\n  margin-bottom: 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.sunday {\n  font-size: 10px;\n  /* font-weight: bold; */\n  font-family: 'Noto Sans Thai UI', 'The Matter', serif;\n  fill: rgba(255, 255, 255, 0.7);\n}\n\n#streamgraph {\n  display: inline-block;\n  text-align: center;\n  width: 49%;\n  margin-top: 28px;\n}\n\n.grid, .xaxis path, .xaxis line {\n  stroke: rgba(255, 255, 255,1);\n  stroke-opacity: 0.25;\n  stroke-width: 1px;\n}\n\n.hoverarea {\n  fill-opacity: 0;\n  cursor: pointer;\n}\n.highlight-area {\n  color: rgba(255, 255, 255, 0.5);\n  fill: #cdd0c7;\n  fill-opacity: 0.4;\n}\n\n#date {\n  display: inline-block;\n  border-bottom: 1px solid #ef314a;\n  font-family: 'Libre Baskerville', 'The Matter', serif;\n  font-style: italic;\n  line-height: 1.4;\n  margin: 15px 0;\n  padding: 5px 0;\n}\n\n#reference-container {\n  display: inline-block;\n  width: 49%;\n  text-align: center;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  vertical-align: top;\n  overflow: hidden;\n}\n\n.xaxis2 .tick line {\n  stroke: #000;\n  stroke-width: 1px;\n}\n\n.xaxis2 path {\n  opacity: 0;\n}\n\n.xaxis .tick text, .bar-label {\n  font-weight: 400;\n  font-size: 10px;\n  fill: rgba(255, 255, 255, 0.7);\n  text-anchor: middle;\n}\n\n.bar-label-x, .bar-label-y {\n  font-size: 12px;\n  fill: rgba(255, 255, 255, 0.7); \n}\n\n.bar-label-y {\n  /* font-weight: bold; */\n}\n\n#top-post {\n  text-align: left;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n\n#top-post .channel {\n  float: right;\n  padding-left: 8px;\n}\n\n.post-container {\n  background-color: rgba(255, 255, 255, .9);\n  border-bottom-color: rgb(221, 223, 226);\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-image-outset: 0px;\n  border-image-repeat: stretch;\n  border-image-slice: 100%;\n  border-image-source: none;\n  border-image-width: 1;\n  border-left-color: rgb(221, 223, 226);\n  border-left-style: solid;\n  border-left-width: 1px;\n  border-right-color: rgb(221, 223, 226);\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-top-color: rgb(221, 223, 226);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-top-style: solid;\n  border-top-width: 1px;\n  color: rgb(29, 33, 41);\n  direction: ltr;\n  display: block;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 10px;\n  overflow-wrap: break-word;\n  position: relative;\n  text-size-adjust: 100%;\n  max-width: 480px; \n  margin-left: auto; \n  margin-right: auto; \n}\n\n.post-author {\n  font-size: 14px;\n  font-weight: 600;\n  height: 18px;\n  letter-spacing: 0.15px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  position: relative;\n}\n\n.post-author .username {\n  position: absolute;\n  left: 0;\n  right: 24px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n}\n\n.post-author .channel {\n  position: absolute;\n  right: 0;\n  width: 16px;\n}\n\n.post-content {\n  direction: ltr;\n  display: block;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 12px;\n}\n\n.post {\n  clear: both;\n}\n\n#credits {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  font-family: 'Libre Baskerville', 'The Matter', serif;\n  font-size: 12px; \n  padding-top: 48px;\n  padding-bottom: 24px; \n}\n\n#credits a {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.divider {\n  padding: 0 12px; \n}\n\n@media screen and (max-device-width: 667px){\n  html, body {\n    padding: 0px;\n    margin: 0px;\n  }\n\n  h1, h2, h3 {\n    padding: 0 20px;\n  }\n\n  #editorial {\n    padding: 0 20px;\n  }\n\n  #streamgraph {\n    width: 100%;\n  }\n\n  #reference-container {\n    box-shadow: 0 5px 15px #cdd0c733;\n    max-height: 400px;\n    width: 100%;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.75);\n  }\n\n  #top-post {\n    padding: 0 10px;\n  }\n}\n\n@media screen and (max-device-width: 667px) and (orientation: landscape) {\n  #reference-container {\n    max-height: 200px;\n  }\n}\n\n@media screen and (min-width: 1024px){\n  #editorial {\n    width: 75%;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  #minibar {\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"9c202a73fd29ef78ed3a59fce91c9872.woff2"},function(t,e,n){t.exports=n.p+"65519fbef154d4a1b6be84c30a35b1df.woff"},function(t,e,n){t.exports=n.p+"6ec2be458736afe1b535f92c95ad46e7.woff2"},function(t,e,n){t.exports=n.p+"73ec7c074f89985ab3dc5cbe7fdc1b11.woff"},function(t,e,n){t.exports=n.p+"6c43ee7379487caf2ea5104f200c0e93.woff2"},function(t,e,n){t.exports=n.p+"a41f650df22ec7f640d943b2c7ecc401.woff"},function(t,e,n){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,d=0,c=[],p=n(12);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(m(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function g(t,e){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(t.insertAt.before,n);n.insertBefore(e,a)}}function u(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return x(e,t.attrs),h(t,e),e}function x(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,a,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var i=d++;n=l||(l=b(e)),r=v.bind(null,n,i,!1),a=v.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",x(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,a=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||o)&&(r=p(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),a=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){u(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=g(t,e);return f(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a];(s=o[i.id]).refs--,r.push(s)}t&&f(g(t,e),e);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function v(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var a,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(t,e,n){"use strict";n.r(e);const r=d3.timeFormatLocale({dateTime:"%A, %e %B %Y г. %X",date:"%d %m %Y",time:"%H:%M:%S",periods:["",""],days:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัส","วันศุกร์","วันเสาร์"],shortDays:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],shortMonths:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."]});function a(t){return 0===t.getDay()}const o=["ชาติไทยพัฒนา","เพื่อไทย","อนาคตใหม่","ไทยรักษาชาติ","รวมพลังประชาชาติไทย","พลังประชารัฐ","ประชาธิปัตย์","ภูมิใจไทย","ประชาชาติ","เพื่อชาติ","เพื่อธรรม"];n(1);var i=n(0),s=n.n(i);const l=d3.scaleOrdinal().domain(o).range(["#1F5D52","#DE0505","#F47932","#FA9BCC","#F6CD4A","#546D40","#40BDE7","#005FFF","#0C3B86","#7077C5","#EB1970"]),d=d3.timeParse("%Y-%m-%d"),c={width:321,sideMargin:30,betweenDayDistance:32,svg:d3.select("#streamgraph svg"),x:d3.scaleLinear(),y:d3.scaleLinear(),stack:d3.stack().keys(o).order(d3.stackOrderInsideOut).offset(d3.stackOffsetWiggle),area:d3.area().curve(d3.curveBasis)},p={width:321,margin:{top:20,bottom:10,left:12,right:12},betweenBarDistance:36,nTop:3,svg:d3.select("#minibar svg"),x:d3.scaleLinear(),transition:d3.transition().duration(250)};let f;function g(t,e){if(0==e)return;var n;d3.select("#date").text((n=t.date,`${r.format("%a %_d %b")(n)} ${n.getFullYear()+543}`)),d3.selectAll(".highlight").classed("hidden",e=>e.created_date_bkk!=t.created_date_bkk),c.clipRect.attr("x",c.x(e)-c.betweenDayDistance/2-2),function(t){const e=p.bars.selectAll(".bar").data(t,(t,e)=>e);e.exit().remove(),e.enter().append("rect").attr("class","bar").attr("height",Math.floor(.3*p.betweenBarDistance)).attr("rx",3).attr("ry",3).attr("y",(t,e)=>(e-.5+.45)*p.betweenBarDistance).attr("fill",t=>l(t.party)).attr("width",(t,e)=>p.x(t.total_engagement)),e.attr("y",(t,e)=>(e-.5+.45)*p.betweenBarDistance).attr("fill",t=>l(t.party)).attr("width",t=>p.x(t.total_engagement));const n=p.g.selectAll(".bar-label-y").data(t,(t,e)=>e);n.exit().remove(),n.enter().append("text").attr("class","bar-label-y").attr("x",-p.margin.left).attr("y",(t,e)=>e*p.betweenBarDistance).attr("dx",p.margin.left).attr("dy",-8).attr("text-anchor","start").text(t=>t.party),n.text(t=>t.party).attr("y",(t,e)=>e*p.betweenBarDistance)}(t.stats.slice(0,p.nTop)),d3.select("#top-post .username").text(t.top_post.user_name),d3.select("#top-post .channel i").attr("class","twitter"==t.top_post.channel?"fab fa-twitter":"fab fa-facebook-f");const a=t.top_post.text.replace(/http/gi," http");d3.select("#top-post .post").text(a.length>300?a.substr(0,300)+" ...":a),d3.select("#top-post a").attr("href",t.top_post.permalink)}d3.json(s.a).then(t=>{!function(t){let e=0;(function(t){c.g.append("g").classed("highlight-layer",!0).selectAll(".highlight").data(f).enter().append("g").attr("class","highlight hidden").attr("transform",(t,e)=>`translate(${c.x(e)-c.betweenDayDistance/2-2}, 0)`).append("rect").attr("class","highlight-area").attr("width",c.betweenDayDistance+2).attr("height",c.width).attr("rx",3).attr("ry",3);const e=Math.floor(t.length/2);function n(t){return t===e?0:0*(e-t)}c.g.append("g").classed("path-layer",!0).style("opacity",.3).selectAll("g").data(t).enter().append("g").attr("transform",(t,e)=>`translate(0, ${n(e)})`).append("path").attr("d",c.area).attr("fill",t=>l(t.key)).attr("stroke","#e7e9e4").attr("stroke-width",1).attr("stroke-opacity",.25),c.clipRect=c.svg.append("defs").append("clipPath").attr("id","clip-selection").append("rect").attr("rx",3).attr("ry",3).attr("x",c.x(1)-c.betweenDayDistance/2-2).attr("width",c.betweenDayDistance+2).attr("height",c.width),c.g.append("g").classed("path2-layer",!0).attr("clip-path","url(#clip-selection)").selectAll("g").data(t).enter().append("g").attr("transform",(t,e)=>`translate(0, ${n(e)})`).append("path").attr("d",c.area).attr("fill",t=>l(t.key)).attr("stroke","#e7e9e4").attr("stroke-width",1).attr("stroke-opacity",.25),c.g.append("g").classed("grid-layer",!0).selectAll(".grid").data(f).enter().append("line").classed("grid",!0).attr("x1",(t,e)=>c.x(e)+c.betweenDayDistance/2).attr("x2",(t,e)=>c.x(e)+c.betweenDayDistance/2).attr("y1",t=>a(t.date)?0:15).attr("y2",t=>a(t.date)?c.width:35),c.g.append("g").classed("sunday-layer",!0).selectAll(".sunday").data(f).enter().filter(t=>a(t.date)).append("g").classed("sunday",!0).attr("transform",t=>`translate(${c.x(t.index)+c.betweenDayDistance/2-4}, 10)`).append("g").attr("transform","rotate(-90)").append("text").attr("y",-4).style("text-anchor","end").text(t=>(function(t){return`${r.format("%_d %b")(t)} ${t.getFullYear()+543}`})(t.date)),c.g.append("g").classed("glass-layer",!0).selectAll(".hoverarea").data(f).enter().append("rect").classed("hoverarea",!0).attr("x",(t,e)=>c.x(e)-c.betweenDayDistance/2).attr("y",0).attr("width",c.betweenDayDistance).attr("height",c.width).on("mouseover",g),c.g.attr("transform",`rotate(90 ${c.width/2} ${c.width/2}) translate(${c.betweenDayDistance/2} 0)`)})(function(t){const e=c.stack(t);c.svg.attr("width",c.width).attr("height",t.length*c.betweenDayDistance),c.g=c.svg.append("g").attr("transform","translate(0.5,0.5)");let n=d3.extent(d3.merge(d3.merge(e)));console.log(n);let r=(n[0]+n[1])/2;return c.x.domain([0,t.length-1]).range([0,t.length*c.betweenDayDistance]),c.y.domain([n[0]+.3*(r-n[0]),n[1]-.3*(n[1]-r)]).range([c.width-c.sideMargin,c.sideMargin]),c.area.x((t,e)=>c.x(e)).y0(t=>c.y(t[0])).y1(t=>c.y(t[1])),e}(t.map(t=>{let n={};return n.date=t.created_date_bkk,o.forEach(t=>{n[t]=5}),t.stats.forEach(t=>{n[t.party]=++t.total_engagement}),e=Math.max(e,d3.max(t.stats.map(t=>t.total_engagement))),n}))),function(t){p.svg.attr("width",p.width).attr("height",p.betweenBarDistance*p.nTop+p.margin.top+p.margin.bottom),p.g=p.svg.append("g").attr("transform",`translate(${p.margin.left} ${p.margin.top})`),p.x.domain([0,t]).nice(10).range([0,p.width-p.margin.left-p.margin.right]);const e=d3.axisBottom(p.x).ticks(5,"s").tickSizeInner(4).tickSizeOuter(0).tickPadding(6),n=d3.axisBottom(p.x).ticks(5).tickSizeInner(-p.betweenBarDistance*p.nTop).tickSizeOuter(0).tickPadding(12);p.bars=p.g.append("g"),p.g.append("g").attr("class","xaxis").attr("transform",`translate(0, ${p.betweenBarDistance*(p.nTop-.5)})`).call(e).selectAll("text").attr("dx",4),p.g.append("g").attr("class","xaxis2").attr("transform",`translate(0, ${p.betweenBarDistance*(p.nTop-.5)})`).call(n).selectAll("text").remove(),p.g.append("text").attr("class","bar-label-x").attr("x",p.width-p.margin.right-p.margin.left).attr("dx",3).attr("y",p.betweenBarDistance*p.nTop-20).attr("dy",-4).attr("text-anchor","end").text("การมีส่วนร่วม")}(e),g(t[1],1)}(f=t.reverse().map((t,e)=>({...t,index:e,date:d(t.created_date_bkk)})))}),d3.select("#legend").selectAll("div").data(o).enter().append("div").html(t=>`\n    <i class="fas fa-circle" style="color:${l(t)};"></i>\n    ${t}\n  `)}]);