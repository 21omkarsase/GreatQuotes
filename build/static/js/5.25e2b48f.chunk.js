(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,s){e.exports={item:"QuoteItem_item__20kHM"}},50:function(e,t,s){e.exports={list:"QuoteList_list__2eYS3",sorting:"QuoteList_sorting__Vb812"}},51:function(e,t,s){e.exports={noquotes:"NoQuotesFound_noquotes__1Iyl5"}},54:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(36),i=s(35),o=s(2),r=s(49),a=s.n(r),u=s(8),d=s(1),j=function(e){return Object(d.jsxs)("li",{className:a.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(u.b,{className:"btn",to:"/GreatQuotes/".concat(e.id),children:"View Fullscreen"})]})},l=s(50),b=s.n(l),h=function(e){var t,s,n=Object(o.h)(),i=Object(o.i)(),r="asc"===new URLSearchParams(i.search).get("sort"),a=(t=e.quotes,s=r,t.sort((function(e,t){return s?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("div",{className:b.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){n.push({pathname:i.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:b.a.list,children:a.map((function(e){return Object(d.jsx)(j,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=s(51),O=s.n(x),f=function(){return Object(d.jsxs)("div",{className:O.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(u.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},p=s(14);t.default=function(){var e=Object(n.a)(i.d,!0),t=e.sendRequest,s=e.status,o=e.data,r=e.error;return Object(c.useEffect)((function(){t()}),[t]),"pending"===s&&p.a,r?Object(d.jsx)("p",{className:"centered focused",children:r}):null==o||0===o.length?Object(d.jsx)(f,{}):Object(d.jsx)(h,{quotes:o})}}}]);
//# sourceMappingURL=5.25e2b48f.chunk.js.map