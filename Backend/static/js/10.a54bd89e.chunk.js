(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return r}));var r=n(9).default.create({searchIcon:{height:20,width:20,resizeMode:"contain",marginRight:10},navLink:{padding:5},navText:{color:"white",fontSize:18,fontWeight:"500",marginLeft:10},usernameText:{color:"black",fontSize:20,fontWeight:"bold",marginLeft:10,marginTop:5},pageContainer:{flex:1,backgroundColor:"#ffffff"},errorMsg:{color:"white",backgroundColor:"red",padding:10,fontWeight:"bold",fontSize:20,borderRadius:20}})},239:function(e,t,n){"use strict";n.r(t);t.default=""},241:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchStyle",(function(){return r}));var r=n(9).default.create({container:{alignItems:"center"},imgContainer:{margin:7}})},242:function(e,t,n){"use strict";n.r(t),n.d(t,"NavBarStyle",(function(){return r}));var r=n(9).default.create({container:{backgroundColor:"#fd5d00",flexDirection:"column",flexBasis:75,padding:10,justifyContent:"center",alignItems:"flex-start"}})},244:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var r=n(7),i=n.n(r),o=n(272),a=n(0),s=n(14),c=n(108),l=n(10),d=n(240),u=n(238),f=n(109),h=n(38),j=n.n(h),g=n(29),b=n(112),p=n(110),O=n(111),y=n(239),x=n(25);function m(){var e=Object(a.useContext)(O.CsrfCtx),t=Object(a.useContext)(f.AccountCtx),n=Object(g.useNavigation)();function r(){return(r=j()((function*(){var r=yield b.default.get(y.default+"/api/logout/"),i=yield r.data;i.loggedOut&&(t.logOut(),t.setUsername(""),t.setEmail(""),e.setCsrfToken(i.token),n.navigate("Home"))}))).apply(this,arguments)}return Object(x.jsx)(p.default,{style:{padding:5},onPress:function(){return r.apply(this,arguments)},children:Object(x.jsx)(c.default,{style:u.styles.navText,children:"Sign Out"})})}var S=n(243),v=n(241);function w(e){return e.show?Object(x.jsx)(o.default,{to:{screen:"Search"},style:v.SearchStyle.imgContainer,children:Object(x.jsx)(S.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}):void 0}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=Object(a.useContext)(f.AccountCtx);function n(e){return e.show?Object(x.jsx)(o.default,{to:{screen:"Login",params:{toLogin:!0}},style:u.styles.navLink,children:Object(x.jsx)(c.default,{style:u.styles.navText,children:"Login"})}):void 0}function r(e){return e.show?Object(x.jsx)(o.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:u.styles.navLink,children:Object(x.jsx)(c.default,{style:u.styles.navText,children:"Sign Up"})}):void 0}var i="web"!==s.default.OS?{flex:1,maxHeight:100}:{};return Object(x.jsxs)(l.default,{style:k(k({},e.style),{},{paddingTop:"web"===s.default.OS?10:40},i),children:[Object(x.jsx)(l.default,{children:t.loggedIn&&Object(x.jsxs)(c.default,{style:u.styles.usernameText,children:["Username: ",t.username]})}),Object(x.jsxs)(l.default,{style:{flexDirection:"row"},children:[Object(x.jsxs)(l.default,{style:{flexDirection:"row",width:.5*Object(d.default)().width},children:["Home"!==e.routeName&&Object(x.jsx)(o.default,{style:u.styles.navLink,to:{screen:"Home"},children:Object(x.jsx)(c.default,{style:u.styles.navText,children:"Home"})}),t.loggedIn&&"Profile"!==e.routeName&&Object(x.jsx)(o.default,{style:u.styles.navLink,to:{screen:"Profile"},children:Object(x.jsx)(c.default,{style:u.styles.navText,children:"Profile"})})]}),Object(x.jsxs)(l.default,{style:{flexDirection:"row",justifyContent:"flex-end",width:.48*Object(d.default)().width},children:[Object(x.jsx)((function(e){return e.isLoggedIn?Object(x.jsx)(m,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(n,{show:"Login"!==e.route}),Object(x.jsx)(r,{show:"SignUp"!==e.route})]})}),{isLoggedIn:t.loggedIn,route:e.routeName}),Object(x.jsx)(w,{show:"Search"!==e.routeName})]})]})]})}},253:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchOptionsStyle",(function(){return r}));var r=n(9).default.create({container:{flex:1,alignItems:"center",paddingTop:10,marginLeft:"auto",marginRight:"auto"},textButtonContainer:{flexDirection:"row",justifyContent:"center",flexBasis:50,maxHeight:50},searchIcon:{height:25,marginTop:7,width:"100%",resizeMode:"contain"},imgContainer:{flexBasis:20,height:30,justifyContent:"center",paddingTop:10},input:{height:40,marginLeft:10,padding:15,paddingBottom:10,borderColor:"black",borderWidth:1,borderRadius:20},exclude:{flexDirection:"row",padding:5,paddingLeft:7,marginLeft:5,marginTop:5,marginBottom:5,backgroundColor:"#ff5c5c",borderRadius:10},excludedHeader:{fontWeight:"bold",fontSize:20,textAlign:"center"},excludeList:{paddingLeft:5,justifyContent:"center"},excluded:{width:"100%",borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2},optionsContainer:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",minWidth:400,width:"30%"},optionTypesContainer:{borderWidth:2,marginBottom:5,height:99},optionTypes:{width:100,backgroundColor:"#ff9100",alignItems:"center"},text:{textAlign:"center",padding:5},optionTypeHeader:{backgroundColor:"#ffee00",fontWeight:"bold"},selectedMetaText:{fontSize:25},selectedOptionsContainer:{height:"80%",minHeight:"80%",maxHeight:"80%",borderWidth:2,marginBottom:5}})},277:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(17),i=n.n(r),o=n(38),a=n.n(o),s=n(7),c=n.n(s),l=n(8),d=n.n(l),u=n(112),f=n(0),h=n(113),j=n(115),g=n(110),b=n(108),p=n(245),O=n(240),y=n(10),x=n(238),m=n(253),S=n(243),v=n(109),w=n(111),C=n(114),k={diet:["balanced","high-fiber","high-protein","low-carb","low-fat","low-sodium"],health:["alcohol-cocktail","alcohol-free","celery-free","crustacean-free","dairy-free","DASH","egg-free","fish-free","fodmap-free","gluten-free","immuno-supportive","keto-friendly","kidney-friendly","kosher","low-potassium","low-sugar","lupine-free","Mediterranean","mollusk-free","mustard-free","No-oil-added","paleo","peanut-free","Pescatarian","pork-free","red-meat-free","sesame-free","shellfish-free","soy-free","sugar-conscious","sulfite-free","tree-nut-free","vegan","vegetarian","wheat-free"],mealType:["breakfast","brunch","lunch/dinner","snack","teatime"],dishType:["alcohol cocktail","biscuits and cookies","bread","cereals","condiments and sauces","desserts","drinks","egg","ice cream and custard","main course","pancake","pasta","pastry","pies and tarts","pizza","preps","preserve","salad","sandwiches","seafood","side dish","soup","special occasions","starter"],cuisineType:["american","asian","british","caribbean","central europe","eastern europe","chinese","french","greek","indian","italian","japanese","korean","kosher","mediterranean","mexican","middle eastern","nordic","south american","south east asia","world"]},T=n(239),P=n(242),L=n(244),D=n(25);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=Object(f.lazy)((function(){return n.e(17).then(n.bind(null,280))})),W=Object(f.lazy)((function(){return n.e(1).then(n.bind(null,269))})),H=Object(f.lazy)((function(){return n.e(18).then(n.bind(null,274))})),B=Object(f.lazy)((function(){return n.e(3).then(n.bind(null,255))}));function A(e){var t=e.route,n=e.navigation,r=Object(f.useContext)(C.RecipeResultsCtx),o=Object(f.useContext)(v.AccountCtx),s=Object(f.useContext)(w.CsrfCtx),c=Object(f.useState)(Object(O.default)().width),l=d()(c,2),z=l[0],A=(l[1],Object(f.useState)({diet:[],health:[],cuisineType:[],mealType:[],dishType:[]})),R=d()(A,2),N=R[0],M=R[1],U=Object(f.useState)((function(){var e=[];for(var t in N)e.push(t);return e})),F=d()(U,2),J=F[0],q=(F[1],Object(f.useState)(J[0])),G=d()(q,2),K=G[0],Q=G[1],V=Object(f.useState)(""),X=d()(V,2),Y=X[0],Z=X[1],$=Object(f.useState)(""),_=d()($,2),ee=_[0],te=_[1],ne=Object(f.useState)([]),re=d()(ne,2),ie=re[0],oe=re[1],ae=Object(f.useState)(!1),se=d()(ae,2),ce=se[0],le=se[1],de=Object(f.useState)(""),ue=d()(de,2),fe=ue[0],he=ue[1],je=Object(f.useState)(!0),ge=d()(je,2),be=ge[0];ge[1];function pe(){var e=0;for(var t in N)N[t].length<=0&&(e+=1);return e>=J.length}function Oe(){return ye.apply(this,arguments)}function ye(){return(ye=a()((function*(){if(Y.length<=0&&pe()&&ie.length<=0)return le(!0),void he("Please enter food name/ingredients");le(!1);var e="";if(!pe()){var t=function(t){e.length>0&&N[t].length>0&&(e+="&"),N[t].forEach((function(n,r){e+=t+"="+n,r<N[t].length-1&&(e+="&")})),1};for(var i in N)t(i)}ie.length>0&&(e.length>0&&(e+="&"),ie.forEach((function(t,n){e+="excluded="+t.trim(),n<ie.length-1&&(e+="&")}))),Y.trim().length>0&&(e.length>0&&(e+="&"),e+="ingredients="+Y.trim());try{var o=yield Object(u.default)({method:"get",url:T.default+"/api/fetchRecipes/?"+e,responseType:"json"}),a=yield o.data;r.getRecipes(a.results),r.setAddRecipesLink(a.addRecipesLink),r.setIsLoading(!0),n.navigate("Home")}catch(s){le(!0),he("Unable to retrieve any recipes")}}))).apply(this,arguments)}function xe(){""!==ee&&(oe((function(e){return[].concat(i()(e),[ee])})),te(""))}return Object(f.useEffect)((function(){o.checkCred(s,T.default)}),[be]),Object(D.jsxs)(y.default,{style:x.styles.pageContainer,children:[Object(D.jsx)(L.default,{routeName:t.name,style:I({},P.NavBarStyle.container)}),Object(D.jsx)(f.Suspense,{fallback:Object(D.jsx)(h.default,{size:"large"}),children:Object(D.jsxs)(y.default,{style:I(I({},m.SearchOptionsStyle.container),{},{width:z,height:Object(O.default)().height}),children:[Object(D.jsxs)(y.default,{style:I(I({},m.SearchOptionsStyle.textButtonContainer),{},{width:.7*z}),children:[Object(D.jsx)(g.default,{style:m.SearchOptionsStyle.imgContainer,onPress:Oe,children:Object(D.jsx)(S.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}),Object(D.jsx)(p.default,{style:[m.SearchOptionsStyle.input,{borderColor:ce?"red":"black"}],onChangeText:function(e){Z(e)},placeholder:"Enter recipe names/ingredients",onSubmitEditing:Oe})]}),Object(D.jsxs)(y.default,{style:I(I({},m.SearchOptionsStyle.textButtonContainer),{},{width:.7*z}),children:[Object(D.jsx)(g.default,{onPress:xe,style:{paddingTop:12},children:Object(D.jsx)(S.FontAwesomeIcon,{icon:"ban",size:20})}),Object(D.jsx)(p.default,{style:[m.SearchOptionsStyle.input,{borderColor:ce?"red":"black"}],onChangeText:function(e){te(e)},value:ee,placeholder:"Enter ingredients to exclude",onSubmitEditing:xe})]}),Object(D.jsx)(W,{hasError:ce,style:x.styles.errorMsg,message:fe}),Object(D.jsxs)(y.default,{style:I(I({},m.SearchOptionsStyle.optionsContainer),{},{maxHeight:Object(O.default)().height/2.5,flexDirection:"row"}),children:[Object(D.jsxs)(y.default,{style:m.SearchOptionsStyle.excluded,children:[Object(D.jsx)(b.default,{style:I(I({},m.SearchOptionsStyle.excludedHeader),{},{borderBottomWidth:ie.length<=0?0:2}),children:"Excluded"}),Object(D.jsx)(B,{style:m.SearchOptionsStyle.excludeList,items:ie,renderItems:function(e){var t=e.item,n=e.index;return Object(D.jsxs)(y.default,{style:m.SearchOptionsStyle.exclude,children:[Object(D.jsx)(b.default,{style:{textAlign:"center"},children:t}),Object(D.jsx)(g.default,{onPress:function(){return function(e){oe((function(t){var n=[];return t.forEach((function(t,r){r!=e&&n.push(t)})),n}))}(n)},children:Object(D.jsx)(S.FontAwesomeIcon,{icon:"xmark",size:20})})]},n)}})]}),Object(D.jsx)(H,{options:N}),Object(D.jsx)(y.default,{style:m.SearchOptionsStyle.optionTypesContainer,children:Object(D.jsx)(j.default,{data:J,renderItem:function(e){var t=e.item;return Object(D.jsx)(g.default,{style:m.SearchOptionsStyle.optionTypes,onPress:function(){return Q(t)},children:Object(D.jsx)(b.default,{style:{fontWeight:"bold"},children:t})})}})}),Object(D.jsx)(E,{style:{height:99},type:K,data:k[K],selectedData:N[K],updateData:function(e,t){M((function(n){var r=I({},n);return r[e]=t,r}))}})]})]})})]})}}}]);
//# sourceMappingURL=10.a54bd89e.chunk.js.map