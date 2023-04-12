(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return r}));var r=n(9).default.create({searchIcon:{height:20,width:20,resizeMode:"contain",marginRight:10},navLink:{padding:5},navText:{color:"white",fontSize:18,fontWeight:"500",marginLeft:10},usernameText:{color:"black",fontSize:20,fontWeight:"bold",marginLeft:10,marginTop:5},pageContainer:{flex:1,backgroundColor:"#ffffff"},errorMsg:{color:"white",backgroundColor:"red",padding:10,fontWeight:"bold",fontSize:20,borderRadius:20}})},239:function(e,t,n){"use strict";n.r(t);t.default=""},241:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchStyle",(function(){return r}));var r=n(9).default.create({container:{alignItems:"center"},imgContainer:{margin:7}})},242:function(e,t,n){"use strict";n.r(t),n.d(t,"NavBarStyle",(function(){return r}));var r=n(9).default.create({container:{backgroundColor:"#fd5d00",flexDirection:"column",flexBasis:75,padding:10,justifyContent:"center",alignItems:"flex-start"}})},244:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(7),o=n.n(r),s=n(272),i=n(0),a=n(14),l=n(108),c=n(10),u=n(240),d=n(238),f=n(109),b=n(38),j=n.n(b),g=n(29),O=n(112),h=n(110),y=n(111),p=n(239),m=n(25);function x(){var e=Object(i.useContext)(y.CsrfCtx),t=Object(i.useContext)(f.AccountCtx),n=Object(g.useNavigation)();function r(){return(r=j()((function*(){var r=yield O.default.get(p.default+"/api/logout/"),o=yield r.data;o.loggedOut&&(t.logOut(),t.setUsername(""),t.setEmail(""),e.setCsrfToken(o.token),n.navigate("Home"))}))).apply(this,arguments)}return Object(m.jsx)(h.default,{style:{padding:5},onPress:function(){return r.apply(this,arguments)},children:Object(m.jsx)(l.default,{style:d.styles.navText,children:"Sign Out"})})}var S=n(243),v=n(241);function w(e){return e.show?Object(m.jsx)(s.default,{to:{screen:"Search"},style:v.SearchStyle.imgContainer,children:Object(m.jsx)(S.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}):void 0}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=Object(i.useContext)(f.AccountCtx);function n(e){return e.show?Object(m.jsx)(s.default,{to:{screen:"Login",params:{toLogin:!0}},style:d.styles.navLink,children:Object(m.jsx)(l.default,{style:d.styles.navText,children:"Login"})}):void 0}function r(e){return e.show?Object(m.jsx)(s.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:d.styles.navLink,children:Object(m.jsx)(l.default,{style:d.styles.navText,children:"Sign Up"})}):void 0}return Object(m.jsxs)(c.default,{style:P(P({},e.style),{},{paddingTop:"web"===a.default.OS?10:40,flex:1,maxHeight:100}),children:[Object(m.jsx)(c.default,{children:t.loggedIn&&Object(m.jsxs)(l.default,{style:d.styles.usernameText,children:["Username: ",t.username]})}),Object(m.jsxs)(c.default,{style:{flexDirection:"row"},children:[Object(m.jsxs)(c.default,{style:{flexDirection:"row",width:.5*Object(u.default)().width},children:["Home"!==e.routeName&&Object(m.jsx)(s.default,{style:d.styles.navLink,to:{screen:"Home"},children:Object(m.jsx)(l.default,{style:d.styles.navText,children:"Home"})}),t.loggedIn&&"Profile"!==e.routeName&&Object(m.jsx)(s.default,{style:d.styles.navLink,to:{screen:"Profile"},children:Object(m.jsx)(l.default,{style:d.styles.navText,children:"Profile"})})]}),Object(m.jsxs)(c.default,{style:{flexDirection:"row",justifyContent:"flex-end",width:.48*Object(u.default)().width},children:[Object(m.jsx)((function(e){return e.isLoggedIn?Object(m.jsx)(x,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n,{show:"Login"!==e.route}),Object(m.jsx)(r,{show:"SignUp"!==e.route})]})}),{isLoggedIn:t.loggedIn,route:e.routeName}),Object(m.jsx)(w,{show:"Search"!==e.routeName})]})]})]})}},249:function(e,t,n){"use strict";n.r(t),n.d(t,"FormStyle",(function(){return r}));var r=n(9).default.create({formInput:{padding:5,marginTop:10,borderWidth:2,borderRadius:20},formLabel:{marginRight:10,textAlign:"left",fontWeight:"bold"},submitButton:{padding:10,margin:10,borderRadius:15,backgroundColor:"#fd5d00"}})},273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(7),o=n.n(r),s=n(38),i=n.n(s),a=n(8),l=n.n(a),c=n(112),u=n(0),d=n(113),f=n(110),b=n(108),j=n(240),g=n(10),O=n(238),h=n(249),y=n(239),p=n(111),m=n(109),x=n(244),S=n(242),v=n(25);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(u.lazy)((function(){return n.e(15).then(n.bind(null,250))})),k=Object(u.lazy)((function(){return n.e(1).then(n.bind(null,269))})),L=Object(u.lazy)((function(){return n.e(13).then(n.bind(null,270))})),T=/^([a-zA-Z0-9]+\.?[a-zA-Z0-9]*)@[a-zA-Z0-9^\.]+\.([a-zA-Z]+\.?[a-zA-Z]*)$/;function z(e){var t=e.route,n=e.navigation,r=Object(u.useContext)(p.CsrfCtx),o=Object(u.useContext)(m.AccountCtx),s=Object(u.useState)(t.params.toLogin),a=l()(s,2),w=a[0],z=(a[1],Object(u.useState)("")),I=l()(z,2),D=I[0],A=I[1],H=Object(u.useState)(""),U=l()(H,2),W=U[0],E=U[1],F=Object(u.useState)(""),N=l()(F,2),R=N[0],B=N[1],Z=Object(u.useState)(!0),M=l()(Z,2),J=M[0],X=M[1],$=Object(u.useState)(""),q=l()($,2),G=q[0],K=q[1],Q=Object(u.useState)(!0),V=l()(Q,2),Y=V[0],_=(V[1],Object(u.useState)(Object(j.default)().width)),ee=l()(_,2),te=ee[0],ne=(ee[1],Object(u.useState)({width:"25%",minWidth:"25%",maxWidth:"25%"})),re=l()(ne,2),oe=re[0],se=re[1];function ie(){return ae.apply(this,arguments)}function ae(){return(ae=i()((function*(){if(w&&(D.length<=0||R<=0))K("Please fill all the fields/ enter corretly."),X(!1);else if(!w&&(D.length<=0||W.length<=0||R<=0))K("Please fill all the fields/ enter corretly."),X(!1);else{X(!0);var e="post",t="signup/";w&&(e="put",t="login/");try{var s=yield Object(c.default)({method:e,headers:{"X-CSRFToken":r.token,credentials:"include"},withCredentials:!0,url:y.default+"/api/"+t,responseType:"json",data:{username:D,email:W,password:R}}),i=yield s.data;i.signUpSuccess?(o.login(),o.setUsername(D),o.setEmail(W),n.navigate("Home")):i.loginSuccess&&(o.login(),o.setUsername(i.user.username),o.setEmail(i.user.email),n.navigate("Home"))}catch(a){K(a.response.data.message),X(!1)}}}))).apply(this,arguments)}return Object(u.useEffect)((function(){o.checkCred(r,y.default),te<700&&se({width:"50%",minWidth:"50%",maxWidth:"50%"})}),[Y]),Object(v.jsxs)(g.default,{style:O.styles.pageContainer,children:[Object(v.jsx)(x.default,{routeName:t.name,style:C({},S.NavBarStyle.container)}),Object(v.jsx)(g.default,{style:{paddingTop:"5%",alignItems:"center"},children:Object(v.jsxs)(u.Suspense,{fallback:Object(v.jsx)(d.default,{size:"large"}),children:[Object(v.jsx)(L,{toLogin:w,usernameHandler:function(e){e.length>50?(X(!1),K("Username too long")):(X(!0),A(e))},emailHandler:function(e){null!=e.match(T)?E(e):E("")},containerStyle:oe,labelStyle:h.FormStyle.formLabel,inputStyle:C(C({},h.FormStyle.formInput),{},{borderColor:J?"black":"red"})}),Object(v.jsx)(P,{label:"Password:",placeholder:"Please enter password:",isPassword:!0,onChangeTextHandler:function(e){B(e)},containerStyle:oe,labelStyle:h.FormStyle.formLabel,inputStyle:C(C({},h.FormStyle.formInput),{},{borderColor:J?"black":"red"})}),Object(v.jsx)((function(){return Object(v.jsx)(f.default,{style:h.FormStyle.submitButton,onPress:ie,children:Object(v.jsx)(b.default,{style:{fontWeight:"bold"},children:w?"Login":"Sign Up"})})}),{}),Object(v.jsx)(k,{hasError:!J,style:O.styles.errorMsg,message:G})]})})]})}}}]);
//# sourceMappingURL=8.0cb5c6c4.chunk.js.map