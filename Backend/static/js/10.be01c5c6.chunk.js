(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return r}));var r=n(9).default.create({searchIcon:{height:20,width:20,resizeMode:"contain",marginRight:10},navLink:{padding:5},navText:{color:"white",fontSize:18,fontWeight:"500",marginLeft:10},usernameText:{color:"black",fontSize:12,fontWeight:"400",marginLeft:10,marginTop:5},pageContainer:{flex:1,backgroundColor:"#ffffff"},errorMsg:{color:"white",backgroundColor:"red",padding:10,fontWeight:"bold",fontSize:20,borderRadius:20}})},238:function(e,t,n){"use strict";n.r(t);t.default=""},239:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchStyle",(function(){return r}));var r=n(9).default.create({container:{alignItems:"center"},imgContainer:{margin:7}})},240:function(e,t,n){"use strict";n.r(t),n.d(t,"NavBarStyle",(function(){return r}));var r=n(9).default.create({container:{backgroundColor:"#fd5d00",flexDirection:"row",flexBasis:75,padding:10,justifyContent:"space-between"}})},242:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(271),i=n(0),o=n(97),s=n(10),a=n(237),c=n(108),l=n(38),d=n.n(l),u=n(29),f=n(111),h=n(109),g=n(110),j=n(238),b=n(25);function p(){var e=Object(i.useContext)(g.CsrfCtx),t=Object(i.useContext)(c.AccountCtx),n=Object(u.useNavigation)();function r(){return(r=d()((function*(){var r=yield f.default.get(j.default+"/api/logout/"),i=yield r.data;i.loggedOut&&(t.logOut(),t.setUsername(""),t.setEmail(""),e.setCsrfToken(i.token),n.navigate("Home"))}))).apply(this,arguments)}return Object(b.jsx)(h.default,{style:{padding:5},onPress:function(){return r.apply(this,arguments)},children:Object(b.jsx)(o.default,{style:a.styles.navText,children:"Sign Out"})})}var y=n(241),O=n(239);function x(e){return e.show?Object(b.jsx)(r.default,{to:{screen:"Search"},style:O.SearchStyle.imgContainer,children:Object(b.jsx)(y.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}):void 0}function m(e){var t=Object(i.useContext)(c.AccountCtx);function n(e){return e.show?Object(b.jsx)(r.default,{to:{screen:"Login",params:{toLogin:!0}},style:a.styles.navLink,children:Object(b.jsx)(o.default,{style:a.styles.navText,children:"Login"})}):void 0}function l(e){return e.show?Object(b.jsx)(r.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:a.styles.navLink,children:Object(b.jsx)(o.default,{style:a.styles.navText,children:"Sign Up"})}):void 0}return Object(b.jsxs)(s.default,{style:e.style,children:[Object(b.jsxs)(s.default,{style:{flexDirection:"row"},children:[Object(b.jsx)((function(e){return e.show?Object(b.jsx)(r.default,{style:a.styles.navLink,to:{screen:"Home"},children:Object(b.jsx)(o.default,{style:a.styles.navText,children:"Home"})}):void 0}),{show:"Home"!==e.routeName}),Object(b.jsx)((function(e){if(e.isLoggedIn&&"Profile"!==e.route)return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.default,{style:a.styles.navLink,to:{screen:"Profile"},children:Object(b.jsx)(o.default,{style:a.styles.navText,children:"Profile"})}),Object(b.jsxs)(o.default,{style:a.styles.usernameText,children:["Username: ",t.username]})]})}),{isLoggedIn:t.loggedIn,route:e.routeName})]}),Object(b.jsxs)(s.default,{style:{flexDirection:"row"},children:[Object(b.jsx)((function(e){return e.isLoggedIn?Object(b.jsx)(p,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(n,{show:"Login"!==e.route}),Object(b.jsx)(l,{show:"SignUp"!==e.route})]})}),{isLoggedIn:t.loggedIn,route:e.routeName}),Object(b.jsx)(x,{show:"Search"!==e.routeName})]})]})}},252:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchOptionsStyle",(function(){return r}));var r=n(9).default.create({container:{flex:1,alignItems:"center",paddingTop:10,marginLeft:"auto",marginRight:"auto"},textButtonContainer:{flexDirection:"row",justifyContent:"center",flexBasis:50,maxHeight:50},searchIcon:{height:25,marginTop:7,width:"100%",resizeMode:"contain"},imgContainer:{flexBasis:20,height:30,justifyContent:"center",paddingTop:10},input:{height:40,marginLeft:10,padding:15,paddingBottom:10,borderColor:"black",borderWidth:1,borderRadius:20},exclude:{flexDirection:"row",padding:5,paddingLeft:7,marginLeft:5,marginTop:5,marginBottom:5,backgroundColor:"#ff5c5c",borderRadius:10},excludedHeader:{fontWeight:"bold",fontSize:20,textAlign:"center"},excludeList:{paddingLeft:5,justifyContent:"center"},excluded:{width:"100%",borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2},optionsContainer:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",minWidth:400,width:"30%"},optionTypesContainer:{borderWidth:2,marginBottom:5,height:99},optionTypes:{width:100,backgroundColor:"#ff9100",alignItems:"center"},text:{textAlign:"center",padding:5},optionTypeHeader:{backgroundColor:"#ffee00",fontWeight:"bold"},selectedMetaText:{fontSize:25},selectedOptionsContainer:{height:"80%",minHeight:"80%",maxHeight:"80%",borderWidth:2,marginBottom:5}})},276:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n(17),i=n.n(r),o=n(38),s=n.n(o),a=n(7),c=n.n(a),l=n(8),d=n.n(l),u=n(111),f=n(0),h=n(112),g=n(114),j=n(14),b=n(109),p=n(97),y=n(244),O=n(243),x=n(10),m=n(237),S=n(252),v=n(241),w=n(108),C=n(110),k=n(113),T={diet:["balanced","high-fiber","high-protein","low-carb","low-fat","low-sodium"],health:["alcohol-cocktail","alcohol-free","celery-free","crustacean-free","dairy-free","DASH","egg-free","fish-free","fodmap-free","gluten-free","immuno-supportive","keto-friendly","kidney-friendly","kosher","low-potassium","low-sugar","lupine-free","Mediterranean","mollusk-free","mustard-free","No-oil-added","paleo","peanut-free","Pescatarian","pork-free","red-meat-free","sesame-free","shellfish-free","soy-free","sugar-conscious","sulfite-free","tree-nut-free","vegan","vegetarian","wheat-free"],mealType:["breakfast","brunch","lunch/dinner","snack","teatime"],dishType:["alcohol cocktail","biscuits and cookies","bread","cereals","condiments and sauces","desserts","drinks","egg","ice cream and custard","main course","pancake","pasta","pastry","pies and tarts","pizza","preps","preserve","salad","sandwiches","seafood","side dish","soup","special occasions","starter"],cuisineType:["american","asian","british","caribbean","central europe","eastern europe","chinese","french","greek","indian","italian","japanese","korean","kosher","mediterranean","mexican","middle eastern","nordic","south american","south east asia","world"]},L=n(238),I=n(240),z=n(242),P=n(25);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=Object(f.lazy)((function(){return n.e(17).then(n.bind(null,279))})),E=Object(f.lazy)((function(){return n.e(1).then(n.bind(null,268))})),H=Object(f.lazy)((function(){return n.e(18).then(n.bind(null,273))})),A=Object(f.lazy)((function(){return n.e(3).then(n.bind(null,254))}));function R(e){var t=e.route,n=e.navigation,r=Object(f.useContext)(k.RecipeResultsCtx),o=Object(f.useContext)(w.AccountCtx),a=Object(f.useContext)(C.CsrfCtx),c=Object(f.useState)(Object(O.default)().width),l=d()(c,2),W=l[0],R=(l[1],Object(f.useState)({diet:[],health:[],cuisineType:[],mealType:[],dishType:[]})),N=d()(R,2),F=N[0],M=N[1],U=Object(f.useState)((function(){var e=[];for(var t in F)e.push(t);return e})),J=d()(U,2),q=J[0],G=(J[1],Object(f.useState)(q[0])),K=d()(G,2),Q=K[0],V=K[1],X=Object(f.useState)(""),Y=d()(X,2),Z=Y[0],$=Y[1],_=Object(f.useState)(""),ee=d()(_,2),te=ee[0],ne=ee[1],re=Object(f.useState)([]),ie=d()(re,2),oe=ie[0],se=ie[1],ae=Object(f.useState)(!1),ce=d()(ae,2),le=ce[0],de=ce[1],ue=Object(f.useState)(""),fe=d()(ue,2),he=fe[0],ge=fe[1],je=Object(f.useState)(!0),be=d()(je,2),pe=be[0];be[1];function ye(){var e=0;for(var t in F)F[t].length<=0&&(e+=1);return e>=q.length}function Oe(){return xe.apply(this,arguments)}function xe(){return(xe=s()((function*(){if(Z.length<=0&&ye()&&oe.length<=0)return de(!0),void ge("Please enter food name/ingredients");de(!1);var e="";if(!ye()){var t=function(t){e.length>0&&F[t].length>0&&(e+="&"),F[t].forEach((function(n,r){e+=t+"="+n,r<F[t].length-1&&(e+="&")})),1};for(var i in F)t(i)}oe.length>0&&(e.length>0&&(e+="&"),oe.forEach((function(t,n){e+="excluded="+t.trim(),n<oe.length-1&&(e+="&")}))),Z.trim().length>0&&(e.length>0&&(e+="&"),e+="ingredients="+Z.trim());try{var o=yield Object(u.default)({method:"get",url:L.default+"/api/fetchRecipes/?"+e,responseType:"json"}),s=yield o.data;r.getRecipes(s.results),r.setAddRecipesLink(s.addRecipesLink),r.setIsLoading(!0),n.navigate("Home")}catch(a){de(!0),ge("Unable to retrieve any recipes")}}))).apply(this,arguments)}function me(){""!==te&&(se((function(e){return[].concat(i()(e),[te])})),ne(""))}return Object(f.useEffect)((function(){o.checkCred(a,L.default)}),[pe]),Object(P.jsxs)(x.default,{style:m.styles.pageContainer,children:[Object(P.jsx)(z.default,{routeName:t.name,style:D(D({},I.NavBarStyle.container),{},{alignItems:"web"===j.default.OS?"center":"flex-end"})}),Object(P.jsx)(f.Suspense,{fallback:Object(P.jsx)(h.default,{size:"large"}),children:Object(P.jsxs)(x.default,{style:D(D({},S.SearchOptionsStyle.container),{},{width:W,height:Object(O.default)().height}),children:[Object(P.jsxs)(x.default,{style:D(D({},S.SearchOptionsStyle.textButtonContainer),{},{width:.7*W}),children:[Object(P.jsx)(b.default,{style:S.SearchOptionsStyle.imgContainer,onPress:Oe,children:Object(P.jsx)(v.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}),Object(P.jsx)(y.default,{style:[S.SearchOptionsStyle.input,{borderColor:le?"red":"black"}],onChangeText:function(e){$(e)},placeholder:"Enter recipe names/ingredients",onSubmitEditing:Oe})]}),Object(P.jsxs)(x.default,{style:D(D({},S.SearchOptionsStyle.textButtonContainer),{},{width:.7*W}),children:[Object(P.jsx)(b.default,{onPress:me,style:{paddingTop:12},children:Object(P.jsx)(v.FontAwesomeIcon,{icon:"ban",size:20})}),Object(P.jsx)(y.default,{style:[S.SearchOptionsStyle.input,{borderColor:le?"red":"black"}],onChangeText:function(e){ne(e)},value:te,placeholder:"Enter ingredients to exclude",onSubmitEditing:me})]}),Object(P.jsx)(E,{hasError:le,style:m.styles.errorMsg,message:he}),Object(P.jsxs)(x.default,{style:D(D({},S.SearchOptionsStyle.optionsContainer),{},{maxHeight:Object(O.default)().height/2.5,flexDirection:"row"}),children:[Object(P.jsxs)(x.default,{style:S.SearchOptionsStyle.excluded,children:[Object(P.jsx)(p.default,{style:D(D({},S.SearchOptionsStyle.excludedHeader),{},{borderBottomWidth:oe.length<=0?0:2}),children:"Excluded"}),Object(P.jsx)(A,{style:S.SearchOptionsStyle.excludeList,items:oe,renderItems:function(e){var t=e.item,n=e.index;return Object(P.jsxs)(x.default,{style:S.SearchOptionsStyle.exclude,children:[Object(P.jsx)(p.default,{style:{textAlign:"center"},children:t}),Object(P.jsx)(b.default,{onPress:function(){return function(e){se((function(t){var n=[];return t.forEach((function(t,r){r!=e&&n.push(t)})),n}))}(n)},children:Object(P.jsx)(v.FontAwesomeIcon,{icon:"xmark",size:20})})]},n)}})]}),Object(P.jsx)(H,{options:F}),Object(P.jsx)(x.default,{style:S.SearchOptionsStyle.optionTypesContainer,children:Object(P.jsx)(g.default,{data:q,renderItem:function(e){var t=e.item;return Object(P.jsx)(b.default,{style:S.SearchOptionsStyle.optionTypes,onPress:function(){return V(t)},children:Object(P.jsx)(p.default,{style:{fontWeight:"bold"},children:t})})}})}),Object(P.jsx)(B,{style:{height:99},type:Q,data:T[Q],selectedData:F[Q],updateData:function(e,t){M((function(n){var r=D({},n);return r[e]=t,r}))}})]})]})})]})}}}]);
//# sourceMappingURL=10.be01c5c6.chunk.js.map