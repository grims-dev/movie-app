(this.webpackJsonpreact_movie_db_course=this.webpackJsonpreact_movie_db_course||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/reactMovie_logo.08494abf.png"},19:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},24:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(16),c=t.n(i),o=t(5),l=t(18),m=t.n(l),s=t(19),p=t.n(s),u=t(1),d=t(2);function f(){var n=Object(u.a)(["\n  width: 122px;\n  margin-top: 25px;\n  float: right;\n\n  @media screen and (max-width: 500px) {\n    display: inline-block;\n    width: 80px;\n    margin-top: 0px;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(u.a)(["\n  width: 250px;\n  margin-top: 20px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n    margin-top: 5px;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(u.a)(["\n  background: #1c1c1c;\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  .header-content {\n    max-width: 1280px;\n    min-height: 120px;\n    padding: 20px 0px;\n    margin: 0 auto;\n    box-sizing: border-box;\n\n    @media screen and (max-width: 500px) {\n      max-width: 1280px;\n      min-height: 0px;\n    }\n  }\n"]);return g=function(){return n},n}var b=d.b.div(g()),h=d.b.img(x()),v=d.b.img(f()),E=function(){return r.a.createElement(b,null,r.a.createElement("div",{className:"header-content"},r.a.createElement(o.a,{to:"/"},r.a.createElement(h,{src:m.a,alt:"rmdb-logo"})),r.a.createElement(v,{src:p.a,alt:"tmdb-logo"})))},w=t(3),y="https://api.themoviedb.org/3/",j="b996d3167cfa59ec922922da0592ec08",k="".concat(y,"search/movie?api_key=").concat(j,"&query="),O="".concat(y,"movie/popular?api_key=").concat(j),z="http://image.tmdb.org/t/p/";function N(){var n=Object(u.a)(["\n  background: ",";\n  background-size: 100%, cover !important;\n  background-position: center, center !important;\n  width: 100%;\n  height: 600px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  .heroimage-content {\n    max-width: 1280px;\n    padding: 20px;\n    margin: 0 auto;\n  }\n\n  .heroimage-text {\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 38px;\n        color: #fff;\n      }\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      line-height: 26px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 16px;\n        line-height: 20px;\n        color: #fff;\n      }\n    }\n\n    @media screen and (max-width: 720px) {\n      max-width: 100%;\n    }\n  }\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return N=function(){return n},n}var _=d.b.div(N(),(function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), #1c1c1c")})),S=function(n){var e=n.image,t=n.title,a=n.text;return r.a.createElement(_,{image:e},r.a.createElement("div",{className:"heroimage-content"},r.a.createElement("div",{className:"heroimage-text"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a))))},I=t(8),A=t.n(I);function M(){var n=Object(u.a)(["\n  max-width: 1280px;\n  width: 100%;\n  height: 55px;\n  background: #353535;\n  margin: 0 auto;\n  border-radius: 40px;\n  position: relative;\n  color: #fff;\n\n  .fa-search {\n    position: absolute;\n    left: 20px;\n    top: 12px;\n    color: #fff;\n    z-index: 1000;\n  }\n\n  input {\n    font-family: 'Abel', sans-serif;\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: #fff;\n    box-sizing: border-box;\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n"]);return M=function(){return n},n}function T(){var n=Object(u.a)(["\n  width: 100%;\n  height: 105px;\n  background: #1c1c1c;\n  padding: 25px 20px 0px 20px;\n  box-sizing: border-box;\n  color: #fff;\n"]);return T=function(){return n},n}var R=d.b.div(T()),J=d.b.div(M()),P=function(n){var e=n.callback,t=Object(a.useState)(""),i=Object(w.a)(t,2),c=i[0],o=i[1],l=Object(a.useRef)(null);return r.a.createElement(R,null,r.a.createElement(J,null,r.a.createElement(A.a,{className:"fa-search",name:"search",size:"2x"}),r.a.createElement("input",{type:"text",placeholder:"Search Movies",onChange:function(n){var t=n.target.value;clearTimeout(l.current),o(t),l.current=setTimeout((function(){e(t)}),500)},value:c})))};function D(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, minmax(100px, 1fr));\n  grid-gap: 40px;\n  position: relative;\n\n  .grid-element {\n    animation: animateGrid 0.5s;\n  }\n\n  @keyframes animateGrid {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 375px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return D=function(){return n},n}function F(){var n=Object(u.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  h1 {\n    font-family: 'Abel', sans-serif;\n    font-size: 42px;\n\n    @media screen and (max-width: 768px) {\n      font-size: 22px;\n    }\n  }\n"]);return F=function(){return n},n}var B=d.b.div(F()),C=d.b.div(D()),H=function(n){var e=n.header,t=n.children;return r.a.createElement(B,null,r.a.createElement("h1",null,e),r.a.createElement(C,null,t))};function G(){var n=Object(u.a)(["\n  img {\n    width: 100%;\n    height: auto;\n    /* max-height: 350px; */\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n\n    :hover {\n      opacity: 0.8;\n    }\n\n    /* @media screen and (max-width: 1024px) {\n      height: 300px;\n    }\n\n    @media screen and (max-width: 768px) {\n      height: 350px;\n    }\n\n    @media screen and (max-width: 600px) {\n      max-height: 300px;\n    }\n\n    @media screen and (max-width: 375px) {\n      max-height: 450px;\n    } */\n\n    .clickable {\n      cursor: pointer;\n    }\n  }\n"]);return G=function(){return n},n}var L=d.b.div(G()),U=function(n){var e=n.movieId,t=n.movieTitle,a=n.movieImage,i=n.clickable;return r.a.createElement(L,null,i?r.a.createElement(o.a,{to:"/".concat(e)},r.a.createElement("img",{src:a,alt:t,className:"clickable"})):r.a.createElement("img",{src:a,alt:t}))};function q(){var n=Object(u.a)(["\n  background: #000;\n  width: 25%;\n  min-width: 200px;\n  height: 70px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-radius: 40px;\n  font-family: 'Abel', sans-serif;\n  font-size: 28px;\n  max-width: 1280px;\n  display: block;\n  margin: 20px auto;\n  padding: 0 20px;\n  outline: none;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return q=function(){return n},n}var K=d.b.button(q()),Q=function(n){var e=n.text,t=n.callback;return r.a.createElement(K,{type:"button",onClick:t},e)};function V(){var n=Object(u.a)(["\n  border: 5px solid #f3f3f3; /* Light grey */\n  border-top: 5px solid #16d47b; /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return V=function(){return n},n}var W=d.b.div(V()),X=function(){return r.a.createElement(W,null)},Y=t(4),Z=t.n(Y),$=t(11),nn=t(10),en=t(6),tn=t.n(en),an=function(){var n=Object(a.useState)(""),e=Object(w.a)(n,2),t=e[0],i=e[1],c=function(n){var e=Object(a.useState)({movies:[]}),t=Object(w.a)(e,2),r=t[0],i=t[1],c=Object(a.useState)(!1),o=Object(w.a)(c,2),l=o[0],m=o[1],s=Object(a.useState)(!1),p=Object(w.a)(s,2),u=p[0],d=p[1],f=function(n){var e,t;return Z.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return d(!1),m(!0),e=n.search("page"),a.prev=3,a.t0=Z.a,a.next=7,Z.a.awrap(fetch(n));case 7:return a.t1=a.sent.json(),a.next=10,a.t0.awrap.call(a.t0,a.t1);case 10:t=a.sent,i((function(n){return Object(nn.a)({},n,{movies:-1!==e?[].concat(Object($.a)(n.movies),Object($.a)(t.results)):Object($.a)(t.results),heroImage:n.heroImage||t.results[0],currentPage:t.page,totalPages:t.total_pages})})),a.next=18;break;case 14:a.prev=14,a.t2=a.catch(3),d(!0),console.log(a.t2);case 18:m(!1);case 19:case"end":return a.stop()}}),null,null,[[3,14]])};return Object(a.useEffect)((function(){sessionStorage.homeState?(i(JSON.parse(sessionStorage.homeState)),m(!1)):f(O)}),[]),Object(a.useEffect)((function(){n||sessionStorage.setItem("homeState",JSON.stringify(r))}),[n,r]),[{state:r,loading:l,error:u},f]}(t),o=Object(w.a)(c,2),l=o[0],m=l.state,s=m.movies,p=m.currentPage,u=m.totalPages,d=m.heroImage,f=l.loading,x=l.error,g=o[1];return x?r.a.createElement("div",null,"An error occured..."):s[0]?r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(S,{image:"".concat(z).concat("w1280").concat(d.backdrop_path),title:d.original_title,text:d.overview}),r.a.createElement(P,{callback:function(n){var e=n?k+n:O;i(n),g(e)}}),r.a.createElement(H,{header:t?"Search Result":"Popular Movies"},s.map((function(n){return r.a.createElement(U,{clickable:!0,key:n.id,movieId:n.id,movieTitle:n.original_title,movieImage:n.poster_path?"".concat(z).concat("w500").concat(n.poster_path):tn.a})}))),f&&r.a.createElement(X,null),p<u&&!f&&r.a.createElement(Q,{text:"Load More",callback:function(){var n="".concat(k).concat(t,"&page=").concat(p+1),e="".concat(O,"&page=").concat(p+1);g(t?n:e)}})):r.a.createElement(X,null)};function rn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  background: #353535;\n  color: #fff;\n\n  .navigation-content {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 20px;\n    width: 100%;\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      float: left;\n      color: #fff;\n      padding-right: 10px;\n      text-decoration: none;\n\n      @media screen and (max-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n"]);return rn=function(){return n},n}var cn=d.b.div(rn()),on=function(n){var e=n.movie;return r.a.createElement(cn,null,r.a.createElement("div",{className:"navigation-content"},r.a.createElement(o.a,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("p",null,"|"),r.a.createElement("p",null,e)))};function ln(){var n=Object(u.a)(["\n  background: ",";\n  background-size: cover !important;\n  background-position: center !important;\n  width: 100%;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  animation: animateMovieinfo 1s;\n\n  .movieinfo-content {\n    max-width: 1280px;\n    min-height: 450px;\n    margin: 0 auto;\n    background: rgb(0, 0, 0, 0.7);\n    border-radius: 20px;\n    position: relative;\n  }\n\n  .movieinfo-thumb {\n    width: 300px;\n    float: left;\n\n    @media screen and (max-width: 768px) {\n      width: 100% !important;\n    }\n  }\n\n  .movieinfo-text {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 40px;\n    color: #fff;\n    overflow: hidden;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      margin: 0;\n\n      @media screen and (max-width: 1000px) {\n        font-size: 32px !important;\n      }\n    }\n\n    h3 {\n      font-size: 16px;\n      line-height: 0;\n      margin-top: 30px;\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 18px;\n      line-height: 26px;\n    }\n  }\n\n  .rating-director {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 25px;\n    margin: 0px 0 0 0;\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    min-height: 600px;\n    height: auto;\n  }\n\n  @keyframes animateMovieinfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return ln=function(){return n},n}var mn=d.b.div(ln(),(function(n){return n.backdrop?"url('".concat(z).concat("w1280").concat(n.backdrop,"')"):"#000"})),sn=function(n){var e=n.movie;return r.a.createElement(mn,{backdrop:e.backdrop_path},r.a.createElement("div",{className:"movieinfo-content"},r.a.createElement("div",{className:"movieinfo-thumb"},r.a.createElement(U,{movieImage:e.poster_path?"".concat(z).concat("w500").concat(e.poster_path):tn.a,clickable:!1})),r.a.createElement("div",{className:"movieinfo-text"},r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.overview),r.a.createElement("div",{className:"rating-director"},r.a.createElement("div",null,r.a.createElement("h3",null,"IMDB RATING"),r.a.createElement("div",{className:"score"},e.vote_average)),r.a.createElement("div",{className:"director"},r.a.createElement("h3",null,"DIRECTOR",e.directors.length>1?"S":""),e.directors.map((function(n){return r.a.createElement("p",{key:n.credit_id},n.name)})))))))},pn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)};function un(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  background: #1c1c1c;\n  padding: 20px;\n  box-sizing: border-box;\n  font-family: 'Abel', sans-serif;\n  font-size: 20px;\n\n  .movieinfobar-content {\n    max-width: 1280px;\n    width: 100%;\n    margin: 0 auto;\n    color: #fff;\n  }\n\n  .movieinfobar-content-col {\n    float: left;\n    width: 33.33%;\n    box-sizing: border-box;\n    padding: 10px 20px 0 0;\n  }\n\n  .movieinfobar-info {\n    padding: 5px 0 0 10px;\n    float: left;\n  }\n\n  .fa-time,\n  .fa-revenue {\n    float: left;\n    margin-top: -4px;\n  }\n\n  .fa-budget {\n    float: left;\n    margin-top: -3px;\n  }\n\n  @media screen and (max-width: 768px) {\n    .fa-time,\n    .fa-revenue,\n    .fa-budget {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 425px) {\n    font-size: 14px;\n  }\n"]);return un=function(){return n},n}var dn=d.b.div(un()),fn=function(n){var e=n.time,t=n.budget,a=n.revenue;return r.a.createElement(dn,null,r.a.createElement("div",{className:"movieinfobar-content"},r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(A.a,{className:"fa-time",name:"clock-o",size:"2x"}),r.a.createElement("span",{className:"movieinfobar-info"},"Running time: ",function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")}(e))),r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(A.a,{className:"fa-budget",name:"money",size:"2x"}),r.a.createElement("span",{className:"movieinfobar-info"},"Budget: ",pn(t))),r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(A.a,{className:"fa-revenue",name:"ticket",size:"2x"}),r.a.createElement("span",{className:"movieinfobar-info"},"Revenue: ",pn(a)))))};function xn(){var n=Object(u.a)(["\n  font-family: 'Abel', sans-serif;\n  color: #fff;\n  background: #1c1c1c;\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n\n  img {\n    display: block;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n\n  .actor-name {\n    display: block;\n    font-size: 18px;\n    margin: 10px 0 0 0;\n  }\n\n  .actor-character {\n    display: block;\n    font-size: 16px;\n    margin: 0 0 10px 0;\n  }\n"]);return xn=function(){return n},n}var gn=d.b.div(xn()),bn=function(n){var e=n.actor;return r.a.createElement(gn,null,r.a.createElement("img",{src:e.profile_path?"".concat(z).concat("w500").concat(e.profile_path):tn.a,alt:e.name}),r.a.createElement("span",{className:"actor-name"},e.name),r.a.createElement("span",{className:"actor-character"},e.character))},hn=function(n){var e=function(n){var e=Object(a.useState)({}),t=Object(w.a)(e,2),r=t[0],i=t[1],c=Object(a.useState)(!0),o=Object(w.a)(c,2),l=o[0],m=o[1],s=Object(a.useState)(!1),p=Object(w.a)(s,2),u=p[0],d=p[1],f=Object(a.useCallback)((function(){var e,t,a,r,c;return Z.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return d(!1),m(!0),o.prev=2,e="".concat(y,"movie/").concat(n,"?api_key=").concat(j),o.t0=Z.a,o.next=7,Z.a.awrap(fetch(e));case 7:return o.t1=o.sent.json(),o.next=10,o.t0.awrap.call(o.t0,o.t1);case 10:return t=o.sent,a="".concat(y,"movie/").concat(n,"/credits?api_key=").concat(j),o.t2=Z.a,o.next=15,Z.a.awrap(fetch(a));case 15:return o.t3=o.sent.json(),o.next=18,o.t2.awrap.call(o.t2,o.t3);case 18:r=o.sent,c=r.crew.filter((function(n){return"Director"===n.job})),i(Object(nn.a)({},t,{actors:r.cast,directors:c})),o.next=26;break;case 23:o.prev=23,o.t4=o.catch(2),d(!0);case 26:m(!1);case 27:case"end":return o.stop()}}),null,null,[[2,23]])}),[n]);return Object(a.useEffect)((function(){localStorage[n]?(i(JSON.parse(localStorage[n])),m(!1)):f()}),[f,n]),Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,l,u]}(n.movieId),t=Object(w.a)(e,3),i=t[0],c=t[1];return t[2]?r.a.createElement("div",null,"There was an error."):c?r.a.createElement(X,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(on,{movie:i.original_title}),r.a.createElement(sn,{movie:i}),r.a.createElement(fn,{time:i.runtime,budget:i.budget,revenue:i.revenue}),r.a.createElement(H,{header:"Actors"},i.actors.map((function(n){return r.a.createElement(bn,{key:n.credit_id,actor:n})}))))},vn=function(){return r.a.createElement("div",null,"Nothing found here.")};function En(){var n=Object(u.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]);return En=function(){return n},n}var wn=Object(d.a)(En()),yn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(o.b,null,r.a.createElement(an,{path:"/"}),r.a.createElement(hn,{path:"/:movieId"}),r.a.createElement(vn,{default:!0})),r.a.createElement(wn,null))};c.a.render(r.a.createElement(yn,null),document.getElementById("root"))},6:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"}},[[24,1,2]]]);
//# sourceMappingURL=main.1614d099.chunk.js.map