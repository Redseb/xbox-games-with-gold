(this["webpackJsonpxbox-games-with-gold"]=this["webpackJsonpxbox-games-with-gold"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(6),c=a.n(s),r=(a(12),a(7)),l=a(4),o=(a(5),a(0)),h=function(e){var t=e.title,a=e.graphic,i=e.availability,n=e.link;return Object(o.jsxs)("div",{className:"GameCard",children:[Object(o.jsx)("a",{href:n,children:Object(o.jsx)("img",{src:a,alt:t})}),Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{href:n,children:t}),Object(o.jsx)("br",{})," Available ",i]})]})};var j=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];if(console.log(a),Object(i.useEffect)((function(){fetch("http://xbox-games-with-gold.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),0===a.length)return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("h1",{children:"Fetching Available Games..."})});var s,c=[],j=Object(r.a)(a.entries());try{for(j.s();!(s=j.n()).done;){var b=Object(l.a)(s.value,2),d=b[0],m=b[1];c.push(Object(o.jsx)(h,{title:m.name,graphic:m.image,availability:m.availability,link:m.link},d))}}catch(g){j.e(g)}finally{j.f()}return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Xbox Games With Gold"}),Object(o.jsx)("div",{className:"CurrentGames",children:c}),Object(o.jsxs)("div",{className:"Explanation",children:[Object(o.jsx)("h1",{children:"How Does This Work?"}),Object(o.jsx)("p",{children:"Xbox Games With Gold are monthly free titles included in the Xbox Live Gold subscription. Users can claim games that are marked as available through Gold. Different regions may have different games available through the Gold programme - however users can simply login using that region\u2019s Microsoft store and claim the game. This website shows every game available in each region through the Games with Gold programme."})]}),Object(o.jsxs)("div",{className:"Footer",children:[Object(o.jsx)("a",{href:"https://www.mikozyz.dev",children:"mikozyz.dev"}),Object(o.jsx)("a",{href:"mailto:mikolajzyzanski@gmail.com",children:"Contact Me"})]})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()},5:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.06c55cfe.chunk.js.map