(this.webpackJsonpdario_sponchiado=this.webpackJsonpdario_sponchiado||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),a=n(15),s=n.n(a),c=n(57),r=n(16),l=n(17),d=n(28),u=n(27),m=n.p+"static/media/22028733.8d48d733.jpeg",f=(n(35),n(55)),h=n.p+"static/media/logo.a1b28a93.svg",j=(n(43),n(2)),p=Object(f.a)((function(e){return{root:{textAlign:"left",width:"10%",position:"absolute"}}})),b=function(){var e=p();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)("img",{src:h,className:"App-logo",alt:"loader"})})},v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).init(),i}return Object(l.a)(n,[{key:"init",value:function(){this.state={offsetX:"",offsetY:"",friction:1/32},this._mouseMove=this._mouseMove.bind(this)}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#96BAFF",document.body.style.opacity="0.9",document.addEventListener("mousemove",this._mouseMove)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this._mouseMove)}},{key:"_mouseMove",value:function(e){var t=window.innerWidth/2-e.clientX,n=window.innerHeight/2-e.clientY,i=0,o=0;i+=(-t-i)*this.state.friction,o+=(n-o)*this.state.friction,this.setState({offsetX:i,offsetY:o})}},{key:"render",value:function(){var e={transform:"translate(-50%, -50%) perspective(600px)\n                  rotateY(".concat(this.state.offsetX,"deg)\n                  rotateX(").concat(this.state.offsetY,"deg)")};return Object(j.jsxs)("div",{className:"wrapper",style:e,children:[Object(j.jsx)(b,{}),Object(j.jsx)("img",{style:{borderRadius:10},src:m,alt:"me"}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"100px"},children:[Object(j.jsx)("h1",{style:{textAlign:"center",fontFamily:"Raleway"},children:"Dario Sponchiado"}),Object(j.jsxs)("p",{style:{justifyContent:"center",textAlign:"center",fontSize:15,fontFamily:"Raleway"},children:["Hi.. \ud83d\ude0e i'm Dario, i am a fullstack developer, my works are based on realize dynamic website(html, css, javascript, php, with framework like: react, angular.js, node.js, laravel and yii2 ) and apps(react-native, flutter, xamarin). This year i start studying Information Technology at Ca Foscari university on 1\xb0 year,",Object(j.jsx)("br",{})," Contact me if you are interested at: ",Object(j.jsx)("br",{}),Object(j.jsx)("a",{style:{color:"#7C83FD"},href:"mailto:dario.sponchiadoo@gmail.com",children:"dario.sponchiadoo@gmail.com"}),Object(j.jsx)("p",{children:"Happy Coding to everyone! \ud83e\udd13\ud83d\udcbb"})]})]})]})}}]),n}(o.a.Component);var y=function(){return Object(j.jsx)(c.a,{children:Object(j.jsx)(v,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),g()}},[[42,1,2]]]);
//# sourceMappingURL=main.31367acc.chunk.js.map