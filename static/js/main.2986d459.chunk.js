(this["webpackJsonpchess-client"]=this["webpackJsonpchess-client"]||[]).push([[0],{13:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(2),s=t.n(r),o=t(14),c=t.n(o),i=t(4),l=t.n(i),u=t(15),h=t(16),p=t(17),d=t(22),f=t(21),j=t(18),v=t.n(j),b=t(19),g=t.n(b),m=(t(13),new v.a),O=function(e){Object(d.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).state={fen:m.fen()},e.onDrop=function(n){var t=n.sourceSquare,a=n.targetSquare;console.log(t,a),null!==m.move({from:t,to:a,promotion:"q"})&&(e.setState({fen:m.fen()}),e.sendMove())},e.sendMove=Object(u.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,OPTIONS"},method:"POST",url:"https://mugglechess.azurewebsites.net/api/move",data:{fen:e.state.fen},validateStatus:function(e){return!0}},n.next=3,g.a.request(t).catch((function(e){console.log("there was a problem validating move from server"),console.log(e),console.error(e)}));case 3:case"end":return n.stop()}}),n)}))),e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({fen:m.fen()})}},{key:"render",value:function(){return this.props.children({position:this.state.fen,onDrop:this.onDrop})}}]),t}(r.Component),x=t(20),w=t.n(x),y=function(){return Object(a.jsxs)("span",{children:[Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/",children:"Muggle Chess"}),Object(a.jsx)("a",{className:"nav-link active",href:"/","aria-current":"page",children:"Login"})]})}),Object(a.jsx)("div",{style:S,children:Object(a.jsx)(O,{children:function(e){var n=e.position,t=e.onDrop;return Object(a.jsx)(w.a,{id:"muggle-chess-1",position:n,onDrop:t})}})})]})},S={display:"flex",justifyContent:"space-around",alignItems:"center"};t(50);c.a.render(Object(a.jsx)(s.a.Fragment,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2986d459.chunk.js.map