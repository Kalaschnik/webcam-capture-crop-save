(this["webpackJsonpreact-photo-processing"]=this["webpackJsonpreact-photo-processing"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),c=a.n(s),r=(a(49),a(24)),o=a(25),l=a(29),d=a(27),j=(a(50),a(80)),b=a(33),h=a.n(b),m=a(79),u=a(36),p=a.n(u),O=a(38),g=a.n(O),x=a(37),v=a.n(x),y=a(41),f=a.n(y),C=a(39),w=a.n(C),I=a(40),k=a.n(I),D=a(34),S=a.n(D),E=a(2),B=a(57),z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).setRef=function(e){n.webcam=e},n.capture=function(){var e=n.webcam.getScreenshot();n.setState({imageData:e})},n.crop=function(){var e=document.getElementById("demo-basic");console.log(e);var t=new S.a(e,{viewport:{width:400,height:400,type:"circle"},boundary:{width:640,height:480},showZoomer:!0,enableOrientation:!1,enableResize:!1});t.bind({url:n.state.imageData,orientation:1});var a=document.getElementById("doCrop"),i=document.getElementById("saveBtn");a.style.display="inline-flex",console.log("\ud83d\udccb: WebcamCapture -> crop -> doCropBtn",a),a.addEventListener("click",(function(){t.result({type:"base64",format:"png",size:"original"}).then((function(e){document.getElementById("imgbase64").setAttribute("src",e),n.setState({imageData:e}),a.style.display="none",i.style.display="inline-flex"}))}))},n.state={camIsOn:!1,imageData:null,saved:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=Object(E.jsx)("div",{id:"webcam",children:Object(E.jsx)(h.a,{audio:!1,width:1280,height:720,ref:this.setRef,screenshotFormat:"image/webp",videoConstraints:{width:1280,height:720}})}),a=Object(E.jsx)("div",{id:"still-photo",children:Object(E.jsx)("img",{id:"photo",alt:"",src:this.state.imageData})}),n=null===this.state.imageData?t:a,i=null===this.state.imageData?Object(E.jsxs)(m.a,{onClick:this.capture,variant:"contained",color:"primary",children:[Object(E.jsx)(p.a,{}),"\xa0","CAPTURE"]}):Object(E.jsxs)(m.a,{onClick:function(){return e.setState({imageData:null})},variant:"contained",color:"primary",children:[Object(E.jsx)(v.a,{}),"\xa0","Undo"]}),s=Object(E.jsxs)(m.a,{style:{display:"none"},id:"doCrop",variant:"contained",color:"primary",children:[Object(E.jsx)(g.a,{}),"\xa0","Crop Selection"]}),c=Object(E.jsxs)(m.a,{style:{display:"none"},onClick:function(){B(e.state.imageData,prompt("Please enter your Pizzagame ID"),"image/png"),e.setState({saved:!0})},id:"saveBtn",variant:"contained",color:"primary",children:[Object(E.jsx)(w.a,{}),"\xa0","Save A Copy"]}),r=Object(E.jsxs)(m.a,{onClick:function(){return e.setState({imageData:null,camIsOn:!1,saved:!1})},variant:"contained",color:"secondary",size:"large",children:[Object(E.jsx)(k.a,{}),"\xa0","Upload & Reset"]});return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"1. CAPTURE"}),Object(E.jsxs)("p",{id:"webcam-text",children:[Object(E.jsx)(j.a,{className:"svg-icons",checked:this.state.camIsOn,onChange:function(){return e.setState((function(e){return{camIsOn:!e.camIsOn}}))}}),"\xa0\xa0","Enable Camera"]}),this.state.camIsOn&&n,this.state.camIsOn&&i,this.state.imageData&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"2. CROP"}),Object(E.jsxs)(m.a,{onClick:function(){return e.crop()},variant:"contained",color:"primary",children:[Object(E.jsx)(f.a,{}),"\xa0","Crop Photo..."]}),Object(E.jsx)("div",{id:"demo-basic"}),Object(E.jsx)("img",{alt:"",id:"imgbase64"}),s,c,this.state.saved&&r]})]})}}]),a}(i.a.Component),A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)("header",{className:"App-header",children:[Object(E.jsxs)("h1",{children:["\ud83c\udf55 Pizzagame & Cyberball \u26be",Object(E.jsx)("br",{}),"Network"]}),Object(E.jsx)("h2",{children:"Avatar Creator"}),Object(E.jsxs)("p",{children:["Follow the 3 steps:",Object(E.jsx)("br",{}),"(1) Capture",Object(E.jsx)("br",{}),"(2) Crop",Object(E.jsx)("br",{}),"(3) Send"]}),Object(E.jsx)(z,{})]})})}}]),a}(n.Component);c.a.render(Object(E.jsx)(A,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4d611efc.chunk.js.map