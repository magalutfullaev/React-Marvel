(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[3],{36:function(e,c,t){"use strict";var a=t.p+"static/media/error.42292aa1.gif",n=t(2);c.a=function(){return Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error"})}},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},46:function(e,c,t){"use strict";t.r(c);var a=t(5),n=t(7);function s(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);c&&(a=a.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?s(Object(t),!0).forEach((function(c){Object(n.a)(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}t(37);var i=t.p+"static/media/mjolnir.61f31e18.png",l=t(0),o=t(24),j=t(36),b=t(26),d=t(2),m=function(e){var c=e.name,t=e.description,a=e.thumbnail,n=e.homepage,s=e.wiki;return Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img".concat("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?" not-found":"")}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:c}),Object(d.jsx)("p",{className:"randomchar__descr",children:t}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:n,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(l.useState)({}),c=Object(a.a)(e,2),t=c[0],n=c[1],s=Object(b.a)(),h=s.loading,u=s.error,O=s.getCharacter,_=s.clearError,x=function(){_();var e=Math.floor(400*Math.random()+1011e3);O(e).then((function(e){return n(e)}))};Object(l.useEffect)((function(){x()}),[]);var f=u?Object(d.jsx)(j.a,{}):null,p=h?Object(d.jsx)(o.a,{}):null,v=h||u?null:Object(d.jsx)(m,r({},t));return Object(d.jsxs)("div",{className:"randomchar",children:[f,p,v,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",children:Object(d.jsx)("div",{onClick:x,className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},u=t(8),O=(t(38),function(e){var c=Object(l.useState)([]),t=Object(a.a)(c,2),n=t[0],s=t[1],r=Object(l.useState)(!1),i=Object(a.a)(r,2),m=i[0],h=i[1],O=Object(l.useState)(210),_=Object(a.a)(O,2),x=_[0],f=_[1],p=Object(l.useState)(!1),v=Object(a.a)(p,2),g=v[0],N=v[1],k=Object(l.useState)(0),y=Object(a.a)(k,2),w=y[0],S=y[1],C=Object(b.a)(),P=C.loading,E=C.error,D=C.getAllCharacters;Object(l.useEffect)((function(){F(x,!0)}),[]);var F=function(e,c){h(!c),D(e).then(I)},I=function(e){var c=!1;e.length<9&&(c=!0),s((function(c){return[].concat(Object(u.a)(c),Object(u.a)(e))})),h(!1),f((function(e){return e+9})),N(c)},J=E?Object(d.jsx)(j.a,{}):null,M=P&&!m?Object(d.jsx)(o.a,{}):null;return Object(d.jsxs)("div",{className:"char__list",children:[J,M,Object(d.jsx)("ul",{className:"char__grid",children:n.map((function(c){return Object(d.jsxs)("li",{onClick:function(){e.onCharSelected(c.id),S(c.id)},className:"char__item".concat(w===c.id?" char__item_selected":""),children:[Object(d.jsx)("img",{src:c.thumbnail,alt:"abyss",className:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c.thumbnail?"not-found":""}),Object(d.jsx)("div",{className:"char__name",children:c.name})]},c.id)}))}),Object(d.jsx)("button",{onClick:function(){return F(x)},disabled:m,className:"button button__main button__long",style:{display:g?"none":"block"},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}),_=(t(39),t(40),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),x=function(e){var c=e.name,t=e.description,a=e.thumbnail,n=e.homepage,s=e.wiki,r=e.comics;return r=r.length>10?r.slice(10):r,Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:a,className:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?" not-found":"",alt:"abyss"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:c}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:n,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:t}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsx)("ul",{className:"char__comics-list",children:r.length?r.map((function(e,c){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},c)})):Object(d.jsx)("p",{children:"There is no comics with this character"})})]})},f=function(e){var c=Object(l.useState)(null),t=Object(a.a)(c,2),n=t[0],s=t[1],i=Object(b.a)(),m=i.loading,h=i.error,u=i.getCharacter,O=i.clearError;Object(l.useEffect)((function(){f()}),[]),Object(l.useEffect)((function(){f()}),[e.charId]);var f=function(){var c=e.charId;c&&(O(),u(c).then((function(e){return s(e)})))},p=n||m||h?null:Object(d.jsx)(_,{}),v=h?Object(d.jsx)(j.a,{}):null,g=m?Object(d.jsx)(o.a,{}):null,N=m||h||!n?null:Object(d.jsx)(x,r({},n));return Object(d.jsxs)("div",{className:"char__info",children:[p,v,g,N]})},p=t.p+"static/media/vision.067d4ae1.png";c.default=function(){var e=Object(l.useState)(null),c=Object(a.a)(e,2),t=c[0],n=c[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(O,{onCharSelected:function(e){n(e)}}),Object(d.jsx)(f,{charId:t})]}),Object(d.jsx)("img",{className:"bg-decoration",src:p,alt:"vision"})]})}}}]);
//# sourceMappingURL=3.88ec929c.chunk.js.map