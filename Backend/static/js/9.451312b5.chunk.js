(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return r}));var r=n(9).default.create({searchIcon:{height:20,width:20,resizeMode:"contain",marginRight:10},navLink:{padding:5},navText:{color:"white",fontSize:18,fontWeight:"500",marginLeft:10},usernameText:{color:"black",fontSize:20,fontWeight:"bold",marginLeft:10,marginTop:5},pageContainer:{flex:1,backgroundColor:"#ffffff"},errorMsg:{color:"white",backgroundColor:"red",padding:10,fontWeight:"bold",fontSize:20,borderRadius:20}})},239:function(e,t,n){"use strict";n.r(t);t.default=""},241:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchStyle",(function(){return r}));var r=n(9).default.create({container:{alignItems:"center"},imgContainer:{margin:7}})},242:function(e,t,n){"use strict";n.r(t),n.d(t,"NavBarStyle",(function(){return r}));var r=n(9).default.create({container:{backgroundColor:"#fd5d00",flexDirection:"column",flexBasis:75,padding:10,justifyContent:"center",alignItems:"flex-start"}})},244:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(7),a=n.n(r),s=n(272),i=n(0),l=n(14),o=n(108),c=n(10),d=n(240),u=n(238),f=n(109),b=n(38),j=n.n(b),p=n(29),h=n(112),y=n(110),g=n(111),O=n(239),m=n(25);function x(){var e=Object(i.useContext)(g.CsrfCtx),t=Object(i.useContext)(f.AccountCtx),n=Object(p.useNavigation)();function r(){return(r=j()((function*(){var r=yield h.default.get(O.default+"/api/logout/"),a=yield r.data;a.loggedOut&&(t.logOut(),t.setUsername(""),t.setEmail(""),e.setCsrfToken(a.token),n.navigate("Home"))}))).apply(this,arguments)}return Object(m.jsx)(y.default,{style:{padding:5},onPress:function(){return r.apply(this,arguments)},children:Object(m.jsx)(o.default,{style:u.styles.navText,children:"Sign Out"})})}var S=n(243),v=n(241);function w(e){return e.show?Object(m.jsx)(s.default,{to:{screen:"Search"},style:v.SearchStyle.imgContainer,children:Object(m.jsx)(S.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}):void 0}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=Object(i.useContext)(f.AccountCtx);function n(e){return e.show?Object(m.jsx)(s.default,{to:{screen:"Login",params:{toLogin:!0}},style:u.styles.navLink,children:Object(m.jsx)(o.default,{style:u.styles.navText,children:"Login"})}):void 0}function r(e){return e.show?Object(m.jsx)(s.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:u.styles.navLink,children:Object(m.jsx)(o.default,{style:u.styles.navText,children:"Sign Up"})}):void 0}var a="web"!==l.default.OS?{flex:1,maxHeight:100,minHeight:100}:{};return Object(m.jsxs)(c.default,{style:k(k({},e.style),{},{paddingTop:"web"===l.default.OS?10:40},a),children:[Object(m.jsx)(c.default,{children:t.loggedIn&&Object(m.jsxs)(o.default,{style:u.styles.usernameText,children:["Username: ",t.username]})}),Object(m.jsxs)(c.default,{style:{flexDirection:"row"},children:[Object(m.jsxs)(c.default,{style:{flexDirection:"row",width:.5*Object(d.default)().width},children:["Home"!==e.routeName&&Object(m.jsx)(s.default,{style:u.styles.navLink,to:{screen:"Home"},children:Object(m.jsx)(o.default,{style:u.styles.navText,children:"Home"})}),t.loggedIn&&"Profile"!==e.routeName&&Object(m.jsx)(s.default,{style:u.styles.navLink,to:{screen:"Profile"},children:Object(m.jsx)(o.default,{style:u.styles.navText,children:"Profile"})})]}),Object(m.jsxs)(c.default,{style:{flexDirection:"row",justifyContent:"flex-end",width:.48*Object(d.default)().width},children:[Object(m.jsx)((function(e){return e.isLoggedIn?Object(m.jsx)(x,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n,{show:"Login"!==e.route}),Object(m.jsx)(r,{show:"SignUp"!==e.route})]})}),{isLoggedIn:t.loggedIn,route:e.routeName}),Object(m.jsx)(w,{show:"Search"!==e.routeName})]})]})]})}},249:function(e,t,n){"use strict";n.r(t),n.d(t,"FormStyle",(function(){return r}));var r=n(9).default.create({formInput:{padding:5,marginTop:10,borderWidth:2,borderRadius:20},formLabel:{marginRight:10,textAlign:"left",fontWeight:"bold"},submitButton:{padding:10,margin:10,borderRadius:15,backgroundColor:"#fd5d00"}})},279:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var r=n(38),a=n.n(r),s=n(7),i=n.n(s),l=n(8),o=n.n(l),c=n(112),d=n(0),u=n(113),f=n(64),b=n(108),j=n(240),p=n(10),h=n(238),y=n(249),g=n(9).default.create({userField:{textAlign:"center",fontSize:25},submitButton:{backgroundColor:"#ff9100",fontWeight:"bold",padding:10,margin:10,borderRadius:15,backgroundColor:"#fd5d00",width:150},recentRecipes:{borderTopWidth:2,flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},subHeader:{fontSize:30,fontWeight:"bold",textAlign:"center"}}),O=n(109),m=n(111),x=n(239),S=n(244),v=n(242),w=n(70),C=n(25);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=Object(d.lazy)((function(){return n.e(2).then(n.bind(null,275))})),I=Object(d.lazy)((function(){return n.e(14).then(n.bind(null,254))})),T=Object(d.lazy)((function(){return n.e(16).then(n.bind(null,276))})),z=Object(d.lazy)((function(){return n.e(1).then(n.bind(null,269))})),N=/^([a-zA-Z0-9]+\.?[a-zA-Z0-9]*)@[a-zA-Z0-9^\.]+\.([a-zA-Z]+\.?[a-zA-Z]*)$/;function F(e){var t=e.route,n=(e.navigation,Object(d.useContext)(m.CsrfCtx)),r=Object(d.useContext)(O.AccountCtx),s=Object(d.useState)(""),i=o()(s,2),l=i[0],k=i[1],F=Object(d.useState)(""),H=o()(F,2),L=H[0],W=H[1],M=Object(d.useState)(""),U=o()(M,2),D=U[0],A=U[1],E=Object(d.useState)(Object(j.default)().width),B=o()(E,2),Y=B[0],V=(B[1],Object(d.useState)(!1)),Z=o()(V,2),X=Z[0],J=Z[1],$=Object(d.useState)(!1),q=o()($,2),G=q[0],K=q[1],Q=Object(d.useState)(!1),_=o()(Q,2),ee=_[0],te=_[1],ne=Object(d.useState)([P(P({},w.NoMoreRecipes),{},{name:"No recipes viewd Yet"})]),re=o()(ne,2),ae=re[0],se=re[1],ie=Object(d.useState)([P(P({},w.NoMoreRecipes),{},{name:"No recipes rated Yet"})]),le=o()(ie,2),oe=le[0],ce=le[1],de=Object(d.useState)([P(P({},w.NoMoreRecipes),{},{name:"No recipes rated Yet"})]),ue=o()(de,2),fe=ue[0],be=ue[1],je=Object(d.useState)("red"),pe=o()(je,2),he=pe[0],ye=pe[1],ge=Object(d.useState)(""),Oe=o()(ge,2),me=Oe[0],xe=Oe[1],Se=Object(d.useState)(!0),ve=o()(Se,2),we=ve[0];ve[1];function Ce(e,t,n){return ke.apply(this,arguments)}function ke(){return(ke=a()((function*(e,t,n){try{var r=yield c.default.get(x.default+"/api/"+e),a=yield r.data;a.results.length<=0?t(n):t(a.results)}catch(s){}}))).apply(this,arguments)}function Pe(){return(Pe=a()((function*(){if(""!==l)try{var e=yield c.default.put(x.default+"/api/updateUserInfo/",{username:l},{headers:{"X-CSRFToken":n.token,credentials:"include"},withCredentials:!0,responseType:"json"}),t=yield e.data;r.setUsername(l);var a="";for(var s in t)a=t[s];Te(a,0,!1)}catch(i){Te(i.response.data.message,0,!0)}else Te("You haven't entered a username",0,!0)}))).apply(this,arguments)}function Re(){return(Re=a()((function*(){if(""!==L&&null!==L.match(N))try{var e=yield c.default.put(x.default+"/api/updateUserInfo/",{email:L},{headers:{"X-CSRFToken":n.token,credentials:"include"},withCredentials:!0,responseType:"json"}),t=yield e.data;r.setEmail(L);var a="";for(var s in t)a=t[s];Te(a,1,!1)}catch(i){Te(i.response.data.message,1,!0)}else Te("You haven't entered a valid email",1,!0)}))).apply(this,arguments)}function Ie(){return(Ie=a()((function*(){if(""!==D)try{var e=yield c.default.put(x.default+"/api/updateUserInfo/",{password:D},{headers:{"X-CSRFToken":n.token,credentials:"include"},withCredentials:!0,responseType:"json"}),t=yield e.data,r="";for(var a in t)r=t[a];Te(r,2,!1)}catch(s){Te(s.response.data.message,2,!0)}else Te("You haven't entered a password",2,!0)}))).apply(this,arguments)}function Te(e,t,n){switch(ye(n?"red":"green"),t){case 0:J(!0),K(!1),te(!1);break;case 1:J(!1),K(!0),te(!1);break;case 2:J(!1),K(!1),te(!0);break;default:J(!1),K(!1),te(!1)}xe(e)}Object(d.useEffect)((function(){r.checkCred(n,x.default),Ce("getRecentRecipes/",se,[P(P({},w.NoMoreRecipes),{},{name:"No recipes viewd Yet"})]),Ce("getMostRatedRecipes/",ce,[P(P({},w.NoMoreRecipes),{},{name:"No recipes rated Yet"})]),Ce("recommend/",be,[P(P({},w.NoMoreRecipes),{},{name:"No recipes rated Yet"})])}),[we,t.key]);var ze=P(P(P({},{borderLeftWidth:Y<700?0:2,borderRightWidth:Y<700?0:2,borderBottomWidth:Y<700?0:2}),g.recentRecipes),{},{padding:Y<700?0:3,paddingBottom:Fe<=1?50:0}),Ne=Y<700?.7*Y:.3*Y,Fe=Math.floor(Y/300),He=Fe<=1?"100%":300,Le=function(e){var t=e.item;e.index;return Object(C.jsx)(I,{width:He,height:300,item:t},t.id)};function We(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.default,{style:e.headerStyle,children:e.header}),Object(C.jsx)(p.default,{style:e.listContainerStyle,children:e.data.length>0||e.responded?Object(C.jsx)(R,{data:e.data,renderItem:e.renderItems}):Object(C.jsx)(u.default,{size:"large"})})]})}return Object(C.jsxs)(p.default,{style:h.styles.pageContainer,children:[Object(C.jsx)(S.default,{routeName:t.name,style:P({},v.NavBarStyle.container)}),Object(C.jsx)(d.Suspense,{fallback:Object(C.jsx)(u.default,{size:"large"}),children:Object(C.jsx)(p.default,{children:Object(C.jsxs)(f.default,{children:[Object(C.jsxs)(p.default,{style:{alignItems:"center"},children:[Object(C.jsx)(T,{containerStyle:{alignItems:"center"},label:"Username:",labelStyle:P(P({},g.userField),{},{fontWeight:"bold"}),labelValueHidden:!1,labelValue:r.username,labelValueStyle:g.userField,placeholder:"Please enter new username",onChangeText:function(e){k(e)},inputPromptStyle:P(P({},y.FormStyle.formInput),{},{width:Ne}),submitText:"Update Username",submitHandler:function(){return Pe.apply(this,arguments)},submitStyle:g.submitButton}),Object(C.jsx)(z,{style:P(P({},h.styles.errorMsg),{},{backgroundColor:he}),hasError:X,message:me}),Object(C.jsx)(T,{containerStyle:{alignItems:"center"},label:"Email:",labelStyle:P(P({},g.userField),{},{fontWeight:"bold"}),labelValueHidden:!1,labelValue:r.email,labelValueStyle:g.userField,placeholder:"Please enter new email",onChangeText:function(e){W(e)},inputPromptStyle:P(P({},y.FormStyle.formInput),{},{width:Ne}),submitText:"Update Email",submitHandler:function(){return Re.apply(this,arguments)},submitStyle:g.submitButton}),Object(C.jsx)(z,{style:P(P({},h.styles.errorMsg),{},{backgroundColor:he}),hasError:G,message:me}),Object(C.jsx)(T,{containerStyle:{alignItems:"center"},label:"Password:",labelStyle:P(P({},g.userField),{},{fontWeight:"bold"}),labelValueHidden:!0,placeholder:"Please enter new Password",onChangeText:function(e){A(e)},inputPromptStyle:P(P({},y.FormStyle.formInput),{},{width:Ne}),submitText:"Update Password",submitHandler:function(){return Ie.apply(this,arguments)},submitStyle:g.submitButton}),Object(C.jsx)(z,{style:P(P({},h.styles.errorMsg),{},{backgroundColor:he}),hasError:ee,message:me})]}),Object(C.jsx)(d.Suspense,{fallback:Object(C.jsx)(u.default,{size:"large"}),children:Object(C.jsx)(We,{headerStyle:g.subHeader,listContainerStyle:ze,header:"Recommended Recipes",data:fe,renderItems:Le})}),Object(C.jsx)(d.Suspense,{fallback:Object(C.jsx)(u.default,{size:"large"}),children:Object(C.jsx)(We,{headerStyle:g.subHeader,listContainerStyle:ze,header:"Recent Recipes",data:ae,renderItems:Le})}),Object(C.jsx)(d.Suspense,{fallback:Object(C.jsx)(u.default,{size:"large"}),children:Object(C.jsx)(We,{headerStyle:g.subHeader,listContainerStyle:ze,header:"Most Rated Recipes",data:oe,renderItems:Le})})]})})})]})}}}]);
//# sourceMappingURL=9.451312b5.chunk.js.map