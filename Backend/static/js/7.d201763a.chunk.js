(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return i}));var i=n(9).default.create({searchIcon:{height:20,width:20,resizeMode:"contain",marginRight:10},navLink:{padding:5},navText:{color:"white",fontSize:18,fontWeight:"500",marginLeft:10},usernameText:{color:"black",fontSize:20,fontWeight:"bold",marginLeft:10,marginTop:5},pageContainer:{flex:1,backgroundColor:"#ffffff"},errorMsg:{color:"white",backgroundColor:"red",padding:10,fontWeight:"bold",fontSize:20,borderRadius:20}})},239:function(e,t,n){"use strict";n.r(t);t.default=""},241:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchStyle",(function(){return i}));var i=n(9).default.create({container:{alignItems:"center"},imgContainer:{margin:7}})},242:function(e,t,n){"use strict";n.r(t),n.d(t,"NavBarStyle",(function(){return i}));var i=n(9).default.create({container:{backgroundColor:"#fd5d00",flexDirection:"column",flexBasis:75,padding:10,justifyContent:"center",alignItems:"flex-start"}})},244:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var i=n(7),r=n.n(i),c=n(272),a=n(0),s=n(14),l=n(108),o=n(10),d=n(240),u=n(238),f=n(109),j=n(38),b=n.n(j),g=n(29),h=n(112),y=n(110),O=n(111),x=n(239),p=n(25);function m(){var e=Object(a.useContext)(O.CsrfCtx),t=Object(a.useContext)(f.AccountCtx),n=Object(g.useNavigation)();function i(){return(i=b()((function*(){var i=yield h.default.get(x.default+"/api/logout/"),r=yield i.data;r.loggedOut&&(t.logOut(),t.setUsername(""),t.setEmail(""),e.setCsrfToken(r.token),n.navigate("Home"))}))).apply(this,arguments)}return Object(p.jsx)(y.default,{style:{padding:5},onPress:function(){return i.apply(this,arguments)},children:Object(p.jsx)(l.default,{style:u.styles.navText,children:"Sign Out"})})}var v=n(243),w=n(241);function C(e){return e.show?Object(p.jsx)(c.default,{to:{screen:"Search"},style:w.SearchStyle.imgContainer,children:Object(p.jsx)(v.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}):void 0}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=Object(a.useContext)(f.AccountCtx);function n(e){return e.show?Object(p.jsx)(c.default,{to:{screen:"Login",params:{toLogin:!0}},style:u.styles.navLink,children:Object(p.jsx)(l.default,{style:u.styles.navText,children:"Login"})}):void 0}function i(e){return e.show?Object(p.jsx)(c.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:u.styles.navLink,children:Object(p.jsx)(l.default,{style:u.styles.navText,children:"Sign Up"})}):void 0}return Object(p.jsxs)(o.default,{style:R(R({},e.style),{},{paddingTop:"web"===s.default.OS?10:40,flex:1,maxHeight:100}),children:[Object(p.jsx)(o.default,{children:t.loggedIn&&Object(p.jsxs)(l.default,{style:u.styles.usernameText,children:["Username: ",t.username]})}),Object(p.jsxs)(o.default,{style:{flexDirection:"row"},children:[Object(p.jsxs)(o.default,{style:{flexDirection:"row",width:.5*Object(d.default)().width},children:["Home"!==e.routeName&&Object(p.jsx)(c.default,{style:u.styles.navLink,to:{screen:"Home"},children:Object(p.jsx)(l.default,{style:u.styles.navText,children:"Home"})}),t.loggedIn&&"Profile"!==e.routeName&&Object(p.jsx)(c.default,{style:u.styles.navLink,to:{screen:"Profile"},children:Object(p.jsx)(l.default,{style:u.styles.navText,children:"Profile"})})]}),Object(p.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"flex-end",width:.48*Object(d.default)().width},children:[Object(p.jsx)((function(e){return e.isLoggedIn?Object(p.jsx)(m,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n,{show:"Login"!==e.route}),Object(p.jsx)(i,{show:"SignUp"!==e.route})]})}),{isLoggedIn:t.loggedIn,route:e.routeName}),Object(p.jsx)(C,{show:"Search"!==e.routeName})]})]})]})}},246:function(e,t,n){"use strict";n.r(t),n.d(t,"recipeListStyle",(function(){return i}));var i=n(9).default.create({foodPicContainer:{alignItems:"center"},foodPic:{height:200,width:"100%",resizeMode:"contain"},nameRatingContainer:{marginTop:20,marginBottom:20,borderWidth:1,padding:10},foodName:{fontWeight:"bold",textAlign:"center"}})},278:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var i=n(7),r=n.n(i),c=n(38),a=n.n(c),s=n(8),l=n.n(s),o=n(112),d=n(0),u=n(113),f=n(48),j=n(248),b=n(110),g=n(64),h=n(108),y=n(240),O=n(10),x=n(238),p=n(246),m=n(109),v=n(239),w=n(244),C=n(111),S=n(242),R=n(243),I=n(9).default.create({recipeName:{textAlign:"center",fontSize:30,fontWeight:"bold",textDecorationLine:"underline"},srcRatingContainer:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"flex-end",width:"70%"},source:{backgroundColor:"#fd5d00",margin:10,padding:10,borderRadius:20,alignItems:"center",maxHeight:45},cautionsText:{color:"#951831",fontWeight:"bold"},ratingsContainer:{alignItems:"center",borderWidth:2},cautionsHeader:{fontSize:30,textDecorationLine:"underline",textAlign:"center"},nutrientRow:{flexDirection:"row",justifyContent:"space-between"},nutrientCell:{padding:3,flex:1,flexBasis:150},ratingButton:{width:33,padding:10},ingredientsHeader:{fontWeight:"bold",fontSize:20,textDecorationLine:"underline",textAlign:"center"}}),P=n(114),W=n(70),L=n(25);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=Object(d.lazy)((function(){return n.e(3).then(n.bind(null,255))})),N=Object(d.lazy)((function(){return n.e(2).then(n.bind(null,275))}));function z(e){var t=e.route,n=e.navigation,i=Object(d.useContext)(m.AccountCtx),r=Object(d.useContext)(C.CsrfCtx),c=Object(d.useContext)(P.RecipeResultsCtx),s=Object(d.useState)(!1),k=l()(s,2),z=k[0],A=k[1],U=Object(d.useState)(!0),B=l()(U,2),H=B[0],E=(B[1],Object(d.useState)("Recipe Unavailable")),F=l()(E,2),q=F[0],M=F[1],J=Object(d.useState)("Recipe Unavailable"),Q=l()(J,2),X=Q[0],G=Q[1],K=Object(d.useState)(W.defaultImage),V=l()(K,2),Y=V[0],Z=V[1],$=Object(d.useState)([]),_=l()($,2),ee=_[0],te=_[1],ne=Object(d.useState)(""),ie=l()(ne,2),re=ie[0],ce=ie[1],ae=Object(d.useState)([]),se=l()(ae,2),le=se[0],oe=se[1],de=Object(d.useState)([]),ue=l()(de,2),fe=ue[0],je=ue[1],be=Object(d.useState)("0.0"),ge=l()(be,2),he=ge[0],ye=ge[1],Oe=Object(d.useState)([]),xe=l()(Oe,2),pe=xe[0],me=xe[1],ve=Object(d.useState)([0,1]),we=l()(ve,2),Ce=we[0],Se=we[1],Re=Object(d.useState)("0.0"),Ie=l()(Re,2),Pe=Ie[0],We=Ie[1],Le=Object(d.useState)(0),ke=l()(Le,2),Te=ke[0],De=ke[1];function Ne(e,t){if(e>t)Se([e]);else{for(var n=[],i=e;i<=t;i++)n.push(i);Se(n)}}function ze(){return(ze=a()((function*(e){De(e);try{yield o.default.put(v.default+"/api/setRating/",{id:t.params.id,rating:e},{headers:{"X-CSRFToken":r.token,credentials:"include"},withCredentials:!0,responseType:"json"})}catch(n){}}))).apply(this,arguments)}function Ae(){return(Ae=a()((function*(){re.length>0&&((yield j.default.canOpenURL(re))&&A(!0))}))).apply(this,arguments)}function Ue(){return(Ue=a()((function*(){try{var e=yield o.default.get(v.default+"/api/getRecipe/?id="+t.params.id),n=yield e.data;if(M(n.name),G(n.sourceName),n.image.length>0){var r=W.defaultImage;r=n.image.startsWith("http")?""+n.image:""+v.default+n.image,Z({uri:r,height:"100%",width:"100%"})}else Z(W.defaultImage);te(n.ingredients),ce(n.source),oe(n.cautions),je([{category:"Diets",values:n.diets},{category:"Healths",values:n.healths},{category:"Cuisines",values:n.cuisineTypes},{category:"Meals Types",values:n.mealTypes},{category:"Dish Types",values:n.dishTypes}]);var c=[];n.nutrients.forEach((function(e){"Energy"===e.label?ye(Math.round(e.quantity)+" "+e.unit):c.push(e)})),me(c),Ne(n.minRating,n.maxRating),i.loggedIn&&De(n.userRating),null!==n.rating?We(n.rating):We("No Ratings")}catch(a){}}))).apply(this,arguments)}return Object(d.useEffect)((function(){i.checkCred(r,v.default),""!==c.currentRecipeURI&&c.currentRecipeURI!==t.params.id&&n.setParams({id:c.currentRecipeURI}),function(){Ue.apply(this,arguments)}()}),[H,t.key,c.currentRecipeURI,t.params.id]),Object(d.useEffect)((function(){!function(){Ae.apply(this,arguments)}()}),[re]),Object(L.jsxs)(O.default,{style:x.styles.pageContainer,children:[Object(L.jsx)(w.default,{routeName:t.name,style:T({},S.NavBarStyle.container)}),Object(L.jsx)(d.Suspense,{fallback:Object(L.jsx)(u.default,{size:"large"}),children:Object(L.jsxs)(g.default,{contentContainerStyle:{alignItems:"center"},children:[Object(L.jsx)(h.default,{style:T(T({},I.recipeName),{},{fontSize:50}),children:q}),Object(L.jsx)(O.default,{style:T(T({},p.recipeListStyle.foodPicContainer),p.recipeListStyle.foodPic),children:Object(L.jsx)(f.default,{style:p.recipeListStyle.foodPic,source:Y})}),Object(L.jsxs)(h.default,{children:["Source Name: ",X]}),Object(L.jsxs)(O.default,{style:I.srcRatingContainer,children:[Object(L.jsx)(b.default,{style:I.source,onPress:a()((function*(){if(z)return yield j.default.openURL(re)})),children:Object(L.jsx)(h.default,{style:{fontWeight:"bold",fontSize:15},children:z?"Source":"No Source"})}),Object(L.jsx)((function(e){return e.show?Object(L.jsxs)(O.default,{style:{alignItems:"center"},children:[Object(L.jsxs)(h.default,{style:{fontSize:20},children:[Object(L.jsx)(R.FontAwesomeIcon,{icon:"star"})," Overal Rating:"," ",e.avgRating]}),Object(L.jsx)(O.default,{style:I.ratingsContainer,children:Object(L.jsx)(D,{items:e.ratingRange,renderItems:e.renderRatingChoices})})]}):void 0}),{show:i.loggedIn,avgRating:Pe,ratingRange:Ce,renderRatingChoices:function(e){var t=e.item,n=e.index;return Object(L.jsx)(b.default,{style:T(T({},I.ratingButton),{},{backgroundColor:Te!==t?"#fd5d00":"#00ff0d"}),onPress:function(){return function(e){return ze.apply(this,arguments)}(t)},children:Object(L.jsx)(h.default,{style:{fontWeight:"bold",fontSize:20},children:t})},n)}})]}),Object(L.jsxs)(O.default,{style:{paddingTop:10,alignItems:"center",width:Object(y.default)().width<700?"100%":"50%"},children:[Object(L.jsx)(h.default,{style:I.recipeName,children:"Ingredients"}),Object(L.jsx)(O.default,{style:{borderWidth:2,width:"100%"},children:Object(L.jsx)(N,{data:ee,renderItem:function(e){var t=e.item,n=e.index;return Object(L.jsxs)(h.default,{style:{textAlign:"center",width:"100%"},children:[n+1,". ",t]},n)}})})]}),Object(L.jsxs)(O.default,{style:{alignItems:"center"},children:[le.length>0?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(h.default,{style:T(T({},I.cautionsText),I.cautionsHeader),children:"Cautions"}),Object(L.jsx)(D,{style:{borderWidth:2,backgroundColor:"#951831"},items:le,renderItems:function(e){var t=e.item,n=e.index;return Object(L.jsx)(h.default,{style:{color:"white",fontWeight:"bold",textAlign:"center",flex:1,padding:3,fontSize:20},children:t},n)}})]}):void 0,Object(L.jsxs)(h.default,{style:T(T({},I.recipeName),{},{textDecorationLine:"none"}),children:["Calories: ",he]}),Object(L.jsx)(O.default,{style:{borderWidth:2,borderBottomWidth:0,width:Object(y.default)().width<700?"100%":"50%"},children:Object(L.jsx)(N,{data:fe,renderItem:function(e){var t=e.item,n=e.index;return Object(L.jsxs)(O.default,{style:{borderBottomWidth:1},children:[Object(L.jsx)(h.default,{style:T(T({},I.recipeName),{},{fontSize:20}),children:t.category}),Object(L.jsx)(O.default,{style:{justifyContent:"center",alignItems:"center"},children:Object(L.jsx)(D,{style:{justifyContent:"center"},items:t.values,renderItems:function(e){var t=e.item,n=e.index;return Object(L.jsx)(h.default,{style:{padding:3},children:t},n)}})})]},n)}})})]}),Object(L.jsx)(O.default,{children:Object(L.jsx)(h.default,{style:T({},I.recipeName),children:"Nutrient Information"})}),Object(L.jsx)(O.default,{style:{borderWidth:2,borderBottomWidth:0,marginTop:10,width:Object(y.default)().width<700?"100%":"50%"},children:Object(L.jsx)(N,{data:[{label:"Label",quantity:"Quantity",unit:"(Units)"}].concat(pe),renderItem:function(e){var t=e.item,n=e.index;return"number"===typeof t.quantity?Object(L.jsxs)(O.default,{style:T(T({},I.nutrientRow),{},{borderBottomWidth:1}),children:[Object(L.jsx)(h.default,{style:T(T({},I.nutrientCell),{},{textAlign:"left",borderRightWidth:2}),children:t.label}),Object(L.jsxs)(h.default,{style:T(T({},I.nutrientCell),{},{textAlign:"right"}),children:[t.quantity.toFixed(1),t.unit]})]},n):Object(L.jsxs)(O.default,{style:{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:2},children:[Object(L.jsx)(h.default,{style:T(T({},I.nutrientCell),{},{textAlign:"left",fontWeight:"bold",borderRightWidth:2}),children:t.label}),Object(L.jsxs)(h.default,{style:T(T({},I.nutrientCell),{},{textAlign:"right",fontWeight:"bold"}),children:[t.quantity,t.unit]})]},n)}})})]})})]})}}}]);
//# sourceMappingURL=7.d201763a.chunk.js.map