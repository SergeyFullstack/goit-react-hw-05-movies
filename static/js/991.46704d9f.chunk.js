"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[991],{787:function(t,n,e){e.d(n,{Hx:function(){return d},I2:function(){return m},Tg:function(){return o},Yi:function(){return f},kK:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3",s="?api_key=9847875051785604eaeffb37b3c87ef0";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day").concat(s));case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n).concat(s));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews").concat(s));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits").concat(s));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie").concat(s,"&query=").concat(n));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},3991:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a,c=e(9439),u=e(2791),i=e(7689),s=e(787),o=e(168),p=e(6444),f=p.default.div(r||(r=(0,o.Z)(["\n  padding-top: 20px;\n"]))),h=p.default.li(a||(a=(0,o.Z)(["\n  & h3 {\n    margin-bottom: 5px;\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),d=e(184);var l=function(){var t=(0,u.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,i.UO)();return(0,u.useEffect)((function(){(0,s.Hx)(a.id).then((function(t){r(t.results)}))}),[a.id]),e.length?(0,d.jsx)(f,{children:(0,d.jsx)("ul",{children:e.map((function(t){return(0,d.jsxs)(h,{children:[(0,d.jsxs)("h3",{children:["Author: ",t.author]}),(0,d.jsx)("p",{children:t.content})]},t.id)}))})}):(0,d.jsx)(f,{children:(0,d.jsx)("h3",{children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=991.46704d9f.chunk.js.map