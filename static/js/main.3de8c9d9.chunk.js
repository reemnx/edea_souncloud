(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(41),a(2)),s=a(17),i=a.n(s),u=a(32),m=a(8),f=a(11);var v=a(34),p=a.n(v);var g=function(e){var t=Object(f.c)((function(e){return e.user.activeTrack})),a=Object(n.useState)(null),r=Object(m.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),u=i[0],v=i[1];return Object(n.useEffect)((function(){o(t||JSON.parse(localStorage.getItem("currTrack"))),localStorage.setItem("currTrack",JSON.stringify(t))}),[]),Object(n.useEffect)((function(){console.log("Track as been changed")}),[l]),l?c.a.createElement("div",{className:"active-track-screen flex align-center justify-center",onClick:function(){return e.history.push("/")}},c.a.createElement("div",{className:"active-track-modal flex column"},c.a.createElement("img",{src:l.artwork_url,onClick:function(e){e.stopPropagation(),v((function(e){return!e}))}}),u&&c.a.createElement("iframe",{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(l.id,"?auto_play=true"),width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay"}))):"Loading..."};var E=function(e){var t=e.isHistoryModalShown,a=e.searchHistory;return c.a.createElement("div",{className:"search-history flex align-center space-between",onClick:e.onClick},c.a.createElement("p",null,a.length>0?"Search History":"History Is Empty"),c.a.createElement("span",{className:t?"arrow-up":"arrow-down"}),t&&a.length>0&&c.a.createElement("div",{className:"searches flex column"},a.map((function(t,a){return c.a.createElement("div",{className:"history-item flex align-center"},c.a.createElement("p",null,a+1,")"),c.a.createElement("p",null,'"',c.a.createElement("span",null,t),'"'),c.a.createElement("p",{onClick:function(){return e.searchAgain(t)}},"Search Again"))}))))};var h={debounce:function(e,t){var a;return console.log("Debounce"),function(){a&&clearTimeout(a),a=setTimeout((function(){e()}),t)}},abbreviateNumber:function(e){var t=e;if(e>=1e3){for(var a=Math.floor((""+e).length/3),n="",c=2;c>=1;c--){if(((n=parseFloat((0!=a?e/Math.pow(1e3,a):e).toPrecision(c)))+"").replace(/[^a-zA-Z 0-9]+/g,"").length<=2)break}n%1!=0&&(n=n.toFixed(1)),t=n+["","k","m","b","t"][a]}return t}};var b=function(e){var t=e.track;return c.a.createElement("div",{className:"track-preview"},c.a.createElement("img",{src:t.artwork_url?t.artwork_url:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6"}),c.a.createElement("div",{className:"track-info"},c.a.createElement("div",null,c.a.createElement("p",null,t.user.username),c.a.createElement("h5",null,t.title.length>60?t.title.substring(0,60)+" ...":t.title)),c.a.createElement("div",{className:"track-tags"},c.a.createElement("div",{className:"flex align-center"},c.a.createElement("span",{className:"repeat"}),c.a.createElement("p",{style:{color:"#9a9c9b"}},h.abbreviateNumber(t.playback_count))),c.a.createElement("div",{className:"flex align-center"},c.a.createElement("span",{className:"downloads"}),c.a.createElement("p",{style:{color:"#9a9c9b"}},h.abbreviateNumber(t.download_count))),c.a.createElement("div",{className:"flex align-center"},c.a.createElement("span",{className:"star"}),c.a.createElement("p",{style:{color:"#9a9c9b"}},h.abbreviateNumber(t.favoritings_count))))),c.a.createElement("button",{onClick:function(){return e.onPlayTrack(t)}},"Play Me"))};var d=function(e){var t=e.tracks;return c.a.createElement(c.a.Fragment,null,t.map((function(t,a){return c.a.createElement(b,{onPlayTrack:e.onPlayTrack,track:t,key:a})})))};var k=function(e){var t=e.searchParam,a=e.isListView,n=e.tracks;return c.a.createElement("div",{className:"search-results-container"},c.a.createElement("h4",null,'Search Results for: "',c.a.createElement("span",null,t),'"'),c.a.createElement("div",{className:a?"list":"tile"},c.a.createElement(d,{onPlayTrack:e.onPlayTrack,tracks:n})))};var y=function(e){return c.a.createElement("div",{className:"results-options flex align-center space-between"},c.a.createElement("span",{className:"next",onClick:e.onNextPage}),c.a.createElement("div",{className:"flex align-center"},c.a.createElement("span",{className:"list-btn",onClick:function(){return e.toggleListView(!0)}}),c.a.createElement("span",{className:"tile-btn",onClick:function(){return e.toggleListView(!1)}})))};var N=function(e){var t=Object(f.b)(),a=Object(n.useState)("Michael Jackson"),r=Object(m.a)(a,2),l=r[0],s=r[1],v=Object(n.useState)([]),h=Object(m.a)(v,2),b=h[0],d=h[1],N=Object(n.useState)([]),w=Object(m.a)(N,2),O=w[0],j=w[1],S=Object(n.useState)(!0),x=Object(m.a)(S,2),T=x[0],_=x[1],C=Object(n.useState)(0),I=Object(m.a)(C,2),P=I[0],J=I[1],A=Object(n.useState)(!1),H=Object(m.a)(A,2),V=H[0],L=H[1];function M(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(i.a.mark((function e(){var t,a,n=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:"",l){e.next=3;break}return e.abrupt("return");case 3:return R(),e.prev=4,e.next=7,p.a.get("https://api.soundcloud.com/tracks?linked_partitioning=&client_id=ggX0UomnLs0VmW7qZnCzw&offset=".concat(P,"&q=").concat(t||l,"&limit=6"));case 7:a=e.sent,d(a.data.collection),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log("There is an error to fetch tracks:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function R(){"Michael Jackson"!==l&&(5===O.length&&O.splice(4,1),O.unshift(l),localStorage.setItem("searchHistory",JSON.stringify(O)))}return Object(n.useEffect)((function(){localStorage.getItem("layout")&&_(JSON.parse(localStorage.getItem("layout"))),localStorage.getItem("searchHistory")&&j(JSON.parse(localStorage.getItem("searchHistory")))}),[]),Object(n.useEffect)((function(){M()}),[P]),Object(n.useEffect)((function(){localStorage.setItem("layout",JSON.stringify(T))}),[T]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home-container flex justify-center"},c.a.createElement("div",{className:"content-wraper content flex column"},c.a.createElement("div",{className:"search-box flex align-center space-between"},c.a.createElement("div",{className:"flex align-center"},c.a.createElement("input",{type:"text",placeholder:"What whould you like to hear?",value:l,onInput:function(e){var t=e.target;s(t.value)}}),c.a.createElement("button",{onClick:M},"Go")),c.a.createElement(E,{onClick:function(){O.length&&L((function(e){return!e}))},isHistoryModalShown:V,searchHistory:O,searchAgain:function(e){s(e),M(e)}})),b.length>0&&c.a.createElement(k,{isListView:T,searchParam:l,tracks:b,onPlayTrack:function(a){t(function(e){return function(t){return t({type:"SET_ACTIVE_TRACK",track:e})}}(a)),e.history.push("/track/".concat(a.id))}}),b.length>0&&c.a.createElement(y,{onNextPage:function(){J((function(e){return e+6}))},toggleListView:_}))),c.a.createElement(o.c,null,c.a.createElement(o.a,{component:g,path:"/track/:id"})))};var w=function(){return c.a.createElement("div",{className:"nav-container flex align-center justify-center"},c.a.createElement("nav",{className:"flex align-center content"},c.a.createElement("span",{className:"nav-logo"})))};var O=function(){return c.a.createElement("div",{className:"app-container"},c.a.createElement(w,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{component:N,path:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(21),S={activeTrack:null};var x=a(9),T=a(35),_=Object(x.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_TRACK":return Object(j.a)(Object(j.a)({},e),{},{activeTrack:t.track});default:return e}}}),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,I=Object(x.e)(_,C(Object(x.a)(T.a))),P=a(15);l.a.render(c.a.createElement(f.a,{store:I},c.a.createElement(P.a,null,c.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.3de8c9d9.chunk.js.map