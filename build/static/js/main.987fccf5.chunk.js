(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{103:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(1),s=n.n(a),i=n(17),r=n.n(i),o=(n(97),n(79)),l=n(10);n(98),n(99);var d=function(){return Object(c.jsx)("div",{className:"landingPage",children:Object(c.jsx)("img",{className:"landingPage__image",src:"https://i.pinimg.com/originals/ec/eb/79/eceb7990b39fa62d4189f57f2076712f.png",alt:""})})},j=n(16),u=n(29),b=n(21),O=b.a.initializeApp({apiKey:"AIzaSyDpGwE3zql0N9hJBOrQIFhCCk1VPftQzWo",authDomain:"todo-list-23.firebaseapp.com",projectId:"todo-list-23",storageBucket:"todo-list-23.appspot.com",messagingSenderId:"445112306926",appId:"1:445112306926:web:1c7bb5dddab86e2fe637ff",measurementId:"G-QJW26D514Q"}).firestore(),h=b.a.auth();b.a.storage(),n(103);var p=function(){var e=Object(j.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),d=o[0],b=o[1];return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("div",{className:"login__header",children:Object(c.jsx)("h1",{className:"logo__text",children:"To-Do List"})}),Object(c.jsx)("div",{className:"login__container",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("h5",{children:"Email"}),Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})," ",Object(c.jsx)("h5",{children:"Password"}),Object(c.jsx)("input",{type:"password",value:d,onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),h.signInWithEmailAndPassword(s,d).then((function(t){e.push("/tasks")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"}),Object(c.jsx)("p",{children:"----or----"}),Object(c.jsx)(u.b,{to:"/register",children:Object(c.jsx)("button",{type:"register",className:"clickregister__Button",children:"Create your Account"})})]})})]})};n(108);var x=function(){var e=Object(j.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(null),o=Object(l.a)(r,2),d=o[0],b=o[1],O=Object(a.useState)(""),p=Object(l.a)(O,2),x=p[0],m=p[1],f=Object(a.useState)(""),v=Object(l.a)(f,2),g=v[0],_=v[1];return Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){e?(console.log(e),b(e)):b(null)}));return function(){e()}}),[d,s]),Object(c.jsxs)("div",{className:"register",children:[Object(c.jsx)("div",{className:"register__header",children:Object(c.jsx)("h1",{className:"logo__text",children:"To-Do List"})}),Object(c.jsx)("div",{className:"register__container",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("h5",{children:"Username"}),Object(c.jsx)("input",{className:"username__text",type:"text",name:"fname",required:!0,value:s,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("h5",{children:"Email"}),Object(c.jsx)("input",{type:"text",value:x,onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("h5",{children:"Password"}),Object(c.jsx)("input",{type:"password",value:g,onChange:function(e){return _(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),h.createUserWithEmailAndPassword(x,g).then((function(t){return e.push("/tasks"),t.user.updateProfile({displayName:s})})).catch((function(e){return alert(e.message)}))},className:"register__button",children:"Sign Up"}),Object(c.jsx)("p",{children:" ----or---- "}),Object(c.jsxs)("p",{children:["Already have an account?",Object(c.jsx)(u.b,{to:"/login",children:Object(c.jsx)("p",{className:"signIn__again",children:"Sign In"})})]})]})})]})},m=(n(109),Object(a.createContext)()),f=function(e){var t=e.reducer,n=e.initialState,s=e.children;return Object(c.jsx)(m.Provider,{value:Object(a.useReducer)(t,n),children:s})},v=function(){return Object(a.useContext)(m)},g=n(145),_=n(150),N=n(151),k=n(158),S=n(159),w=n(152),y=n(39),C=n.n(y),E=(n(110),n(62)),I=n.n(E),P=n(63),T=n.n(P),A=n(64),z=n.n(A),D=n(53),B=n.n(D),L=n(147),F=n(157),W=n(149);var U=function(e){var t=e.location,n=Object(a.useState)([]),s=Object(l.a)(n,2),i=s[0],r=s[1],o=Object(a.useState)([]),d=Object(l.a)(o,2),u=d[0],b=d[1],p=Object(a.useState)([]),x=Object(l.a)(p,2),m=x[0],f=x[1],N=Object(j.f)(),k=v(),S=Object(l.a)(k,1)[0].user,w=Object(g.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,marginTop:47,opacity:.7}}}))();return Object(a.useEffect)((function(){O.collection("users").doc(null===S||void 0===S?void 0:S.uid).collection("important").onSnapshot((function(e){f(e.docs.map((function(e){return e.data()})))}))}),[S]),Object(a.useEffect)((function(){O.collection("users").doc(null===S||void 0===S?void 0:S.uid).collection("planned").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))}),[S]),Object(a.useEffect)((function(){O.collection("users").doc(null===S||void 0===S?void 0:S.uid).collection("tasks").onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))}))}),[S]),Object(c.jsx)("div",{class:"Left_container",children:Object(c.jsxs)(F.a,{className:w.drawer,variant:"permanent",classes:{paper:w.drawerPaper},anchor:"left",children:[Object(c.jsx)(W.a,{className:"Logout__option",children:Object(c.jsxs)(L.a,{children:["Hello, ",null===S||void 0===S?void 0:S.displayName,Object(c.jsx)("button",{className:"exit__button",onClick:function(){S&&(h.signOut(),N.push("/"))},children:Object(c.jsx)(I.a,{})})]})}),Object(c.jsx)(_.a,{}),Object(c.jsxs)(W.a,{children:[Object(c.jsxs)(L.a,{button:!0,selected:"Tasks"==t,onClick:function(e){return N.push("/tasks")},children:[Object(c.jsx)(B.a,{className:"user__homeIcon"}),"Tasks (",null===i||void 0===i?void 0:i.length,")"]}),Object(c.jsxs)(L.a,{button:!0,selected:"Planned"==t,onClick:function(e){return N.push("/planned")},children:[Object(c.jsx)(T.a,{className:"user__calenderIcon"}),"Planned (",null===u||void 0===u?void 0:u.length,")"]}),Object(c.jsxs)(L.a,{button:!0,selected:"Important"==t,onClick:function(e){return N.push("/important")},children:[Object(c.jsx)(z.a,{className:"user__starIcon"}),"Important (",null===m||void 0===m?void 0:m.length,")"]}),Object(c.jsx)(L.a,{children:"Any feedback will be highly appreciated. \ud83d\ude42"})]}),Object(c.jsx)(_.a,{})]})})};var G=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],i=v(),r=Object(l.a)(i,1)[0].user,o=Object(a.useState)([]),d=Object(l.a)(o,2),j=d[0],u=d[1],h=Object(g.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},toolbar:e.mixins.toolbar,content:{marginLeft:252,flexGrow:1,padding:e.spacing(3),color:"white"}}}))();return Object(a.useEffect)((function(){O.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("tasks").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return{id:e.id,tasks:e.data().tasks}})))}))}),[r]),Object(c.jsxs)("div",{className:"tasks",children:[Object(c.jsx)("img",{className:"background__image",src:"https://images3.alphacoders.com/102/thumb-1920-1028801.jpg",alt:""}),Object(c.jsx)(U,{location:"Tasks"}),Object(c.jsxs)("div",{className:h.content,children:[Object(c.jsx)("h2",{children:"Tasks"}),Object(c.jsx)(_.a,{}),Object(c.jsxs)("p",{children:["Number of tasks for today: ",null===j||void 0===j?void 0:j.length]}),Object(c.jsxs)("form",{className:"input__container",children:[Object(c.jsxs)(N.a,{className:"input__field",children:[Object(c.jsx)(k.a,{children:"Write a Tasks\ud83d\udcdd\ud83d\udd8b"}),Object(c.jsx)(S.a,{value:n,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsx)(w.a,{disabled:!n,type:"submit",onClick:function(e){e.preventDefault(),O.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("tasks").add({tasks:n,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),s("")},children:"Add"})]}),Object(c.jsx)("p",{children:j.map((function(e){return Object(c.jsxs)("p",{className:"task_line",children:[" - ",e.tasks,Object(c.jsx)(w.a,{className:"remove__task",onClick:function(t){return O.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("tasks").doc(e.id).delete()},children:Object(c.jsx)(C.a,{})})]})}))})]})]})};n(112);var R=function(){Object(j.f)();var e=v();return Object(l.a)(e,1)[0].user,Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"header__container",children:Object(c.jsx)(u.b,{to:"/tasks",children:Object(c.jsx)("h2",{className:"header__text",children:"To-Do List"})})})})},H=n(65),J=n(153),Q=n(154),V=n(67),q=n(155),K=n(156),M=n(83),X=n.n(M),Y=n(84),Z=n.n(Y),$=Object(g.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:Object(H.a)({width:240},"width",240),toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));function ee(){var e=$();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(J.a,{position:"fixed",className:e.appBar,children:Object(c.jsx)(Q.a,{children:Object(c.jsx)(V.a,{variant:"h6",noWrap:!0,children:"Permanent drawer"})})}),Object(c.jsxs)(F.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"left",children:[Object(c.jsx)("div",{className:e.toolbar}),Object(c.jsx)(_.a,{}),Object(c.jsx)(W.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(c.jsxs)(L.a,{button:!0,children:[Object(c.jsx)(q.a,{children:t%2===0?Object(c.jsx)(X.a,{}):Object(c.jsx)(Z.a,{})}),Object(c.jsx)(K.a,{primary:e})]},e)}))}),Object(c.jsx)(_.a,{})]}),Object(c.jsxs)("div",{className:e.content,children:[Object(c.jsx)("div",{className:e.toolbar}),Object(c.jsx)(V.a,{paragraph:!0,children:"Hello this is a test.."}),Object(c.jsx)(V.a,{paragraph:!0,children:"Heloooooooooooooooooooooo"})]})]})}n(113);var te=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],j=v(),u=Object(l.a)(j,1)[0].user,h=Object(g.a)((function(e){return{toolbar:e.mixins.toolbar,content:{marginLeft:252,flexGrow:1,padding:e.spacing(3),color:"white"}}}))();return Object(a.useEffect)((function(){O.collection("users").doc(null===u||void 0===u?void 0:u.uid).collection("planned").orderBy("timestamp","desc").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,planned:e.data().planned}})))}))}),[u]),Object(c.jsxs)("div",{className:"planned",children:[Object(c.jsx)("img",{className:"background__image",src:"https://images7.alphacoders.com/858/thumb-1920-858181.jpg",alt:""}),Object(c.jsx)(U,{location:"Planned"}),Object(c.jsxs)("div",{className:h.content,children:[Object(c.jsx)("h2",{children:"Planned Tasks"}),Object(c.jsx)(_.a,{}),Object(c.jsxs)("p",{children:["Number of planned tasks: ",null===n||void 0===n?void 0:n.length]}),Object(c.jsxs)("form",{className:"input__container",children:[Object(c.jsxs)(N.a,{className:"input__field",children:[Object(c.jsx)(k.a,{children:"Write a planned event..."}),Object(c.jsx)(S.a,{value:o,onChange:function(e){return d(e.target.value)}})]}),Object(c.jsx)(w.a,{disabled:!o,type:"submit",onClick:function(e){e.preventDefault(),O.collection("users").doc(null===u||void 0===u?void 0:u.uid).collection("planned").add({planned:o,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),d("")},children:"Add"})]}),Object(c.jsx)("p",{children:n.map((function(e){return Object(c.jsxs)("p",{className:"task_line",children:[" \ud83d\udcc5  ",e.planned,Object(c.jsx)(w.a,{className:"remove__task",onClick:function(t){return O.collection("users").doc(null===u||void 0===u?void 0:u.uid).collection("planned").doc(e.id).delete()},children:Object(c.jsx)(C.a,{})})]})}))})]})]})};n(114);var ne=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],j=v(),u=Object(l.a)(j,1)[0].user,h=Object(g.a)((function(e){return{toolbar:e.mixins.toolbar,content:{marginLeft:252,flexGrow:1,padding:e.spacing(3),color:"white"}}}))();return Object(a.useEffect)((function(){O.collection("users").doc(null===u||void 0===u?void 0:u.uid).collection("important").orderBy("timestamp","desc").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,important:e.data().important}})))}))}),[u]),Object(c.jsxs)("div",{className:"important",children:[Object(c.jsx)("img",{className:"background__image",src:"https://img.buzzfeed.com/buzzfeed-static/static/2017-04/6/16/asset/buzzfeed-prod-fastlane-03/sub-buzz-6808-1491510468-8.jpg?downsize=1600%3A%2A&output-quality=auto&output-format=auto",alt:""}),Object(c.jsx)(U,{location:"Important"}),Object(c.jsxs)("div",{className:h.content,children:[Object(c.jsx)("h2",{children:"Important Tasks"}),Object(c.jsx)(_.a,{}),Object(c.jsxs)("p",{children:["Number of important tasks: ",null===n||void 0===n?void 0:n.length]}),Object(c.jsxs)("form",{className:"input__container",children:[Object(c.jsxs)(N.a,{className:"input__field",children:[Object(c.jsx)(k.a,{children:"Write a Important Event \u2757\u2757\u2757"}),Object(c.jsx)(S.a,{value:o,onChange:function(e){return d(e.target.value)}})]}),Object(c.jsx)(w.a,{disabled:!o,type:"submit",onClick:function(e){e.preventDefault(),O.collection("users").doc(null===u||void 0===u?void 0:u.uid).collection("important").add({important:o,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),d("")},children:"Add"})]}),Object(c.jsx)("p",{children:n.map((function(e){return Object(c.jsxs)("p",{className:"task_line",children:[" \u2b50 ",e.important,Object(c.jsx)(w.a,{className:"remove__task",onClick:function(t){return O.collection("users").doc(null===u||void 0===u?void 0:u.uid).collection("important").doc(e.id).delete()},children:Object(c.jsx)(C.a,{})})]})}))})]})]})};n(115),n(85);var ce=function(){var e=v(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var n=t[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),n(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[G]),Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j.c,{children:[Object(c.jsxs)(j.a,{path:"/important",children:[Object(c.jsx)(R,{}),Object(c.jsx)(ne,{})]}),Object(c.jsxs)(j.a,{path:"/planned",children:[Object(c.jsx)(R,{}),Object(c.jsx)(te,{})]}),Object(c.jsxs)(j.a,{path:"/tasks",children:[Object(c.jsx)(R,{}),Object(c.jsx)(G,{})]}),Object(c.jsx)(j.a,{path:"/test",children:Object(c.jsx)(ee,{})}),Object(c.jsxs)(j.a,{path:"/register",children:[Object(c.jsx)(d,{}),Object(c.jsx)(x,{})]}),Object(c.jsxs)(j.a,{path:"/",children:[Object(c.jsx)(d,{}),Object(c.jsx)(p,{})]})]})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},se=n(72),ie=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(se.a)(Object(se.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{initialState:{user:null},reducer:ie,children:Object(c.jsx)(ce,{})})}),document.getElementById("root")),ae()},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.987fccf5.chunk.js.map