!function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e,a){t.exports=a.p+"8581aed5d0f6c664e9a2fa70cf8d1f00.json"},function(t,e,a){},function(t,e,a){"use strict";a.r(e);const r=d3.timeFormatLocale({dateTime:"%A, %e %B %Y г. %X",date:"%d %m %Y",time:"%H:%M:%S",periods:["",""],days:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัส","วันศุกร์","วันเสาร์"],shortDays:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],shortMonths:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."]});const n=["ชาติไทยพัฒนา","เพื่อไทย","อนาคตใหม่","ไทยรักษาชาติ","รวมพลังประชาชาติไทย","พลังประชารัฐ","ประชาธิปัตย์","ภูมิใจไทย","ประชาชาติ","เพื่อชาติ","เพื่อธรรม"];a(1);var d=a(0),s=a.n(d);const i=d3.scaleOrdinal().domain(n).range(["#a50026","#DE0505","#f47932","#fdae61","#F6CD4A","#546d40","#40BDE7","#4575b4","#313695","#B27E7D","#F9C8D9"]),o=d3.timeParse("%Y-%m-%d"),l={width:321,side_margin:30,between_day_distance:32,svg:d3.select("#streamgraph svg"),x:d3.scaleLinear(),y:d3.scaleLinear(),stack:d3.stack().keys(n).order(d3.stackOrderInsideOut).offset(d3.stackOffsetWiggle),area:d3.area().curve(d3.curveBasis)},c={width:321,margin:{top:24,bottom:48,left:10,right:10},between_bar_distance:24,n_top:3,svg:d3.select("#minibar svg"),x:d3.scaleLinear(),transition:d3.transition().duration(250)};let p;function g(t){var e;d3.select("#date").text((e=o(t.created_date_bkk),`${r.format("%a %_d %b")(e)} ${e.getFullYear()+543}`)),d3.selectAll(".highlight").classed("hidden",e=>e.created_date_bkk!=t.created_date_bkk),function(t){const e=c.bars.selectAll(".bar").data(t,(t,e)=>e);e.exit().remove(),e.enter().append("rect").attr("class","bar").attr("height",Math.floor(.3*c.between_bar_distance)).attr("rx",3).attr("ry",3).attr("y",(t,e)=>(e-.5+.3)*c.between_bar_distance).attr("fill",t=>i(t.party)).attr("width",(t,e)=>c.x(t.total_engagement)),e.attr("y",(t,e)=>(e-.5+.3)*c.between_bar_distance).attr("fill",t=>i(t.party)).attr("width",(t,e)=>c.x(t.total_engagement));const a=c.g.selectAll(".bar-label-y").data(t,(t,e)=>e);a.exit().remove(),a.enter().append("text").attr("class","bar-label-y").attr("x",-c.margin.left).attr("y",(t,e)=>e*c.between_bar_distance).attr("dx",10).attr("dy",-6).attr("text-anchor","start").text(t=>t.party),a.text(t=>t.party).attr("y",(t,e)=>e*c.between_bar_distance)}(t.stats.slice(0,c.n_top)),d3.select("#top-post .username").text(t.top_post.user_name),d3.select("#top-post .channel i").attr("class","twitter"==t.top_post.channel?"fab fa-twitter":"fab fa-facebook-f"),d3.select("#top-post .post").text(t.top_post.text.length>300?t.top_post.text.substr(0,300)+" ...":t.top_post.text),d3.select("#top-post a").attr("href",t.top_post.permalink)}d3.json(s.a).then(t=>{!function(t){let e=0;(function(t){l.g.selectAll(".highlight").data(p).enter().append("g").attr("class","highlight hidden").attr("transform",(t,e)=>`translate(${l.x(e)-l.between_day_distance/2-2}, 0)`).append("rect").attr("class","highlight-area").attr("width",l.between_day_distance+2).attr("height",l.width).attr("rx",3).attr("ry",3),l.g.selectAll("path").data(t).enter().append("path").attr("d",l.area).attr("fill",t=>i(t.key)).attr("stroke","#e7e9e4").attr("stroke-width",1).attr("stroke-opacity",.25),l.g.selectAll(".grid").data(d3.range(t[0].length)).enter().append("line").classed("grid",!0).attr("x1",(t,e)=>l.x(e)+l.between_day_distance/2).attr("x2",(t,e)=>l.x(e)+l.between_day_distance/2).attr("y1",(t,e)=>(e-2)%7==0?0:15).attr("y2",(t,e)=>(e-2)%7==0?l.width:35),l.g.selectAll(".sunday").data(p).enter().filter((t,e)=>(e-2)%7==0).append("g").classed("sunday",!0).attr("transform",(t,e)=>`translate(${l.x(7*e+2)+l.between_day_distance/2-4}, 10)`).append("g").attr("transform","rotate(-90)").append("text").style("text-anchor","end").text(t=>(function(t){return`${r.format("%_d %b")(t)} ${t.getFullYear()+543}`})(o(t.created_date_bkk))),l.g.selectAll(".hoverarea").data(p).enter().append("rect").classed("hoverarea",!0).attr("x",(t,e)=>l.x(e)-l.between_day_distance/2).attr("y",0).attr("width",l.between_day_distance).attr("height",l.width).on("mouseover",g),l.g.attr("transform",`rotate(90 ${l.width/2} ${l.width/2}) translate(${l.between_day_distance/2} 0)`)})(function(t){const e=l.stack(t);return l.svg.attr("width",l.width).attr("height",t.length*l.between_day_distance),l.g=l.svg.append("g"),l.x.domain([0,t.length-1]).range([0,t.length*l.between_day_distance]),l.y.domain(d3.extent(d3.merge(d3.merge(e)))).range([l.width-l.side_margin,l.side_margin]),l.area.x((t,e)=>l.x(e)).y0(t=>l.y(t[0])).y1(t=>l.y(t[1])),e}(t.map(t=>{let a={};return a.date=t.created_date_bkk,n.forEach(t=>{a[t]=5}),t.stats.forEach(t=>{a[t.party]=++t.total_engagement}),e=Math.max(e,d3.max(t.stats.map(t=>t.total_engagement))),a}))),function(t){c.svg.attr("width",c.width).attr("height",c.between_bar_distance*c.n_top+c.margin.top+c.margin.bottom),c.g=c.svg.append("g").attr("transform",`translate(${c.margin.left} ${c.margin.top})`),c.x.domain([0,t]).range([0,c.width-c.margin.left-c.margin.right]),c.xAxis=d3.axisBottom(c.x).ticks(4,"s").tickSizeInner(-c.between_bar_distance*c.n_top).tickSizeOuter(4).tickPadding(12),c.bars=c.g.append("g"),c.g.append("g").attr("class","xaxis").attr("transform",`translate(0, ${c.between_bar_distance*(c.n_top-.5)})`).call(c.xAxis),c.g.append("text").attr("class","bar-label-x").attr("x",(c.width-c.margin.left-c.margin.right)/2).attr("y",c.between_bar_distance*c.n_top+36).attr("text-anchor","middle").text("การมีส่วนร่วม")}(e),g(t[0])}(p=t.reverse())}),d3.select("#legend").selectAll("div").data(n).enter().append("div").html(t=>`\n        <i class="fas fa-circle" style="color:${i(t)};"></i>\n        ${t}\n    `)}]);