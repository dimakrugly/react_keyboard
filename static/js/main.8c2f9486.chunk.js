(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),p=n(1),d=n.n(p),u=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={keyPressed:""},e.handleKeyUp=function(t){e.setState({keyPressed:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state.keyPressed;return Object(u.jsx)("div",{className:"App",children:e?Object(u.jsxs)("p",{className:"App__message",children:["The last pressed key is [",e,"]"]}):Object(u.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);a.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c2f9486.chunk.js.map