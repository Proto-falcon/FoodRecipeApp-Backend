(this.webpackJsonp=this.webpackJsonp||[]).push([[8,12],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"AccountCtx",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(40),i=n.n(r),s=n(11),c=n.n(s),a=n(217),o=n(0),l=n(16),u=Object(o.createContext)({loggedIn:!1,username:"",email:"",setLoginStatus:function(){},setUsername:function(e){},setEmail:function(e){},checkCred:function(e,t){}});function d(e){var t=Object(o.useState)(!1),n=c()(t,2),r=n[0],s=n[1],d=Object(o.useState)(""),f=c()(d,2),h=f[0],p=f[1],b=Object(o.useState)(""),j=c()(b,2),g=j[0],O=j[1];function y(){return(y=i()((function*(e,t){if(!r)try{var n=yield a.default.get(t+"/api/checkLogin/"),i=yield n.data;e.setCsrfToken(i.token),0!=i.user&&(x(),v(i.user.username),m(i.user.email))}catch(s){}}))).apply(this,arguments)}function x(){s((function(e){return!e}))}function m(e){""==e?O(""):e.match(/^([a-zA-Z0-9]+\.?[a-zA-Z0-9]*)@[a-zA-Z0-9^\.]+\.([a-zA-Z]+\.?[a-zA-Z]*)$/)&&O(e)}function v(e){e.length>0?p(e):p("")}return Object(l.jsx)(u.Provider,{value:{loggedIn:r,username:h,email:g,setLoginStatus:x,setUsername:v,setEmail:m,checkCred:function(e,t){return y.apply(this,arguments)}},children:e.children})}},216:function(e,t,n){"use strict";n.r(t),n.d(t,"CsrfCtx",(function(){return a})),n.d(t,"default",(function(){return o}));var r=n(11),i=n.n(r),s=n(0),c=n(16),a=Object(s.createContext)({token:"",setCsrfToken:function(e){}});function o(e){var t=Object(s.useState)(""),n=i()(t,2),r=n[0],o=n[1];return Object(c.jsx)(a.Provider,{value:{token:r,setCsrfToken:function(e){o(e)}},children:e.children})}},218:function(e,t,n){"use strict";n.r(t);t.default=""},222:function(e,t,n){e.exports=n.p+"static/media/favicon.fa4783d1.png"},224:function(e,t,n){"use strict";n.r(t),n.d(t,"RecipeResultsCtx",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(11),i=n.n(r),s=n(0),c=n(215),a=n(216),o=n(16),l=Object(s.createContext)({moreRecipesLink:"",setAddRecipesLink:function(e){},exclusions:[""],updateExclusions:function(e){},results:[{uri:"",name:"No Recipe Name Available",image:n(222),ingredients:[""],source:""}],getRecipes:function(e){},addRecipes:function(e,t){},isLoading:!1,setIsLoading:function(e){}});function u(e){var t=Object(s.useState)([{uri:"",name:"No Recipe Name Available",image:"",ingredients:["None"],source:""}]),n=i()(t,2),r=n[0],u=n[1],d=Object(s.useState)([]),f=i()(d,2),h=f[0],p=f[1];var b=Object(s.useState)(""),j=i()(b,2),g=j[0],O=j[1],y=Object(s.useState)(!1),x=i()(y,2),m=x[0],v=x[1];function S(e){O(e)}return Object(o.jsx)(a.default,{children:Object(o.jsx)(c.default,{children:Object(o.jsx)(l.Provider,{value:{moreRecipesLink:g,exclusions:h,updateExclusions:function(e){p(e)},results:r,getRecipes:function(e){""!=e[0].uri&&(u([{id:"",name:"No Recipe Name Available",image:"",ingredients:["None"],source:""}]),u(e))},setAddRecipesLink:S,addRecipes:function(e,t){for(var n=[],i=0;i<r.length;i++)n.push(r[i]);for(var s=0;s<e.length;s++)n.push(e[s]);u(n),S(t)},isLoading:m,setIsLoading:v},children:e.children})})})}},241:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchOptionsStyle",(function(){return r}));var r=n(7).default.create({container:{flex:1,alignItems:"center",marginTop:10,marginLeft:"auto",marginRight:"auto"},textButtonContainer:{flexDirection:"row",flexBasis:50,maxHeight:50},searchIcon:{height:25,marginTop:7,width:"100%",resizeMode:"contain"},imgContainer:{flexBasis:20,height:30,justifyContent:"center",paddingTop:10},input:{height:40,marginLeft:10,padding:15,paddingBottom:10,borderColor:"black",borderWidth:1,borderRadius:20},exclude:{flexDirection:"row",padding:5,paddingLeft:7,marginLeft:5,marginTop:5,marginBottom:5,backgroundColor:"#ff5c5c",borderRadius:10},excludedHeader:{fontWeight:"bold",fontSize:20,textAlign:"center"},excludeList:{paddingLeft:5,justifyContent:"center"},excluded:{width:"100%",borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2},optionsContainer:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",minWidth:400,width:"30%"},optionTypesContainer:{borderWidth:2,marginBottom:5,height:99},optionTypes:{width:100,backgroundColor:"#ff9100",alignItems:"center"},text:{textAlign:"center",padding:5},optionTypeHeader:{backgroundColor:"#ffee00",fontWeight:"bold"},selectedMetaText:{fontSize:25},selectedOptionsContainer:{height:"80%",minHeight:"80%",maxHeight:"80%",borderWidth:2,marginBottom:5}})},278:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(17),i=n.n(r),s=n(40),c=n.n(s),a=n(6),o=n.n(a),l=n(11),u=n.n(l),d=n(217),f=n(0),h=n(97),p=n(96),b=n(30),j=n(219),g=n(220),O=n(8),y=n(29),x=n(241),m=n(212),v=n(232),S=n(215),k=n(216),C=n(224),L={diet:["balanced","high-fiber","high-protein","low-carb","low-fat","low-sodium"],health:["alcohol-cocktail","alcohol-free","celery-free","crustacean-free","dairy-free","DASH","egg-free","fish-free","fodmap-free","gluten-free","immuno-supportive","keto-friendly","kidney-friendly","kosher","low-potassium","low-sugar","lupine-free","Mediterranean","mollusk-free","mustard-free","No-oil-added","paleo","peanut-free","pecatarian","pork-free","red-meat-free","sesame-free","shellfish-free","soy-free","sugar-conscious","sulfite-free","tree-nut-free","vegan","vegetarian","wheat-free"],mealType:["breakfast","brunch","lunch/dinner","snack","teatime"],dishType:["alcohol cocktail","biscuits and cookies","bread","cereals","condiments and sauces","desserts","drinks","egg","ice cream and custard","main course","pancake","pasta","pastry","pies and tarts","pizza","preps","preserve","salad","sandwiches","seafood","side dish","soup","special occasions","starter","sweets"],cuisineType:["american","asian","british","caribbean","central europe","eastern europe","chinese","french","greek","indian","italian","japanese","korean","kosher","mediterranean","mexican","middle eastern","nordic","south american","south east asia","world"]},w=n(218),T=n(16);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=Object(f.lazy)((function(){return n.e(20).then(n.bind(null,280))})),E=Object(f.lazy)((function(){return n.e(3).then(n.bind(null,269))})),P=Object(f.lazy)((function(){return n.e(2).then(n.bind(null,266))})),I=Object(f.lazy)((function(){return n.e(4).then(n.bind(null,268))})),H=Object(f.lazy)((function(){return n.e(21).then(n.bind(null,275))})),W=Object(f.lazy)((function(){return n.e(22).then(n.bind(null,276))}));function D(e){var t=e.navigation,n=Object(f.useContext)(C.RecipeResultsCtx),r=Object(f.useContext)(S.AccountCtx),s=Object(f.useContext)(k.CsrfCtx),a=Object(f.useState)({diet:[],health:[],cuisineType:[],mealType:[],dishType:[]}),o=u()(a,2),l=o[0],R=o[1],D=Object(f.useState)((function(){var e=[];for(var t in l)e.push(t);return e})),B=u()(D,2),N=B[0],U=(B[1],Object(f.useState)(N[0])),Z=u()(U,2),M=Z[0],F=Z[1],J=Object(f.useState)(""),q=u()(J,2),$=q[0],G=q[1],K=Object(f.useState)(""),Q=u()(K,2),V=Q[0],X=Q[1],Y=Object(f.useState)([]),_=u()(Y,2),ee=_[0],te=_[1],ne=Object(f.useState)(!1),re=u()(ne,2),ie=re[0],se=re[1],ce=Object(f.useState)(""),ae=u()(ce,2),oe=ae[0],le=ae[1],ue=Object(f.useState)(!0),de=u()(ue,2),fe=de[0];de[1];function he(){var e=0;for(var t in l)l[t].length<=0&&(e+=1);return e>=N.length}function pe(){return be.apply(this,arguments)}function be(){return(be=c()((function*(){if($.length<=0&&he()&&ee.length<=0)return se(!0),void le("Please enter food name/ingredients");se(!1);var e="";if(!he()){var r=0,i=function(t){e.length>0&&r<N.length-1&&l[t].length>0&&(e+="&"),l[t].forEach((function(n,r){e+=t+"="+n,r<l[t].length-1&&(e+="&")})),r+=1};for(var s in l)i(s)}ee.length>0&&(n.updateExclusions(ee),e.length>0&&(e+="&"),ee.forEach((function(t,n){e+="excluded="+t.trim(),n<ee.length-1&&(e+="&")}))),$.trim().length>0&&(e.length>0&&(e+="&"),e+="ingredients="+$.trim());try{console.log("hi");var c=yield Object(d.default)({method:"get",url:w.default+"/api/fetchRecipes/?"+e,responseType:"json"}),a=yield c.data;n.getRecipes(a.results),n.setAddRecipesLink(a.addRecipesLink),n.setIsLoading(!0),t.navigate("Home")}catch(o){console.log(o.request),se(!0),le("Unable to retrieve any recipes")}}))).apply(this,arguments)}function je(){""!==V&&(te((function(e){return[].concat(i()(e),[V])})),X(""))}return Object(f.useEffect)((function(){r.checkCred(s,w.default)}),[fe]),Object(f.useEffect)((function(){r.loggedIn?t.setOptions({headerLeft:function(){return Object(T.jsxs)(P,{children:[Object(T.jsx)(m.default,{style:y.styles.navLink,to:{screen:"Home"},children:Object(T.jsx)(b.default,{style:y.styles.navText,children:"Home"})}),Object(T.jsx)(m.default,{style:y.styles.navLink,to:{screen:"Profile"},children:Object(T.jsx)(b.default,{style:y.styles.navText,children:"Profile"})}),Object(T.jsxs)(b.default,{style:y.styles.usernameText,children:["Username: ",r.username]})]})},headerRight:function(){return Object(T.jsx)(I,{})}}):t.setOptions({headerLeft:function(){return Object(T.jsx)(m.default,{style:y.styles.navLink,to:{screen:"Home"},children:Object(T.jsx)(b.default,{style:y.styles.navText,children:"Home"})})},headerRight:function(){return Object(T.jsxs)(P,{children:[Object(T.jsx)(m.default,{to:{screen:"Login",params:{toLogin:!0}},style:y.styles.navLink,children:Object(T.jsx)(b.default,{style:y.styles.navText,children:"Login"})}),Object(T.jsx)(m.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:y.styles.navLink,children:Object(T.jsx)(b.default,{style:y.styles.navText,children:"Sign Up"})})]})}})}),[r.loggedIn]),Object(T.jsxs)(O.default,{style:A(A(A({},x.SearchOptionsStyle.container),y.styles.pageContainer),{},{width:Object(g.default)().width<700?"100%":"70%"}),children:[Object(T.jsxs)(O.default,{style:x.SearchOptionsStyle.textButtonContainer,children:[Object(T.jsx)(p.default,{style:x.SearchOptionsStyle.imgContainer,onPress:pe,children:Object(T.jsx)(v.FontAwesomeIcon,{icon:"magnifying-glass",size:20})}),Object(T.jsx)(j.default,{style:[x.SearchOptionsStyle.input,{borderColor:ie?"red":"black"}],onChangeText:function(e){G(e)},placeholder:"Enter recipe names/ingredients",onSubmitEditing:pe})]}),Object(T.jsxs)(O.default,{style:x.SearchOptionsStyle.textButtonContainer,children:[Object(T.jsx)(p.default,{onPress:je,style:{paddingTop:12},children:Object(T.jsx)(v.FontAwesomeIcon,{icon:"ban",size:20})}),Object(T.jsx)(j.default,{style:[x.SearchOptionsStyle.input,{borderColor:ie?"red":"black"}],onChangeText:function(e){X(e)},value:V,placeholder:"Enter ingredients to exclude",onSubmitEditing:je})]}),Object(T.jsx)(E,{hasError:ie,style:y.styles.errorMsg,message:oe}),Object(T.jsxs)(O.default,{style:A(A({},x.SearchOptionsStyle.optionsContainer),{},{maxHeight:Object(g.default)().height/2.5,flexDirection:"row"}),children:[Object(T.jsxs)(O.default,{style:x.SearchOptionsStyle.excluded,children:[Object(T.jsx)(b.default,{style:A(A({},x.SearchOptionsStyle.excludedHeader),{},{borderBottomWidth:ee.length<=0?0:2}),children:"Excluded"}),Object(T.jsx)(W,{style:x.SearchOptionsStyle.excludeList,items:ee,renderItems:function(e){var t=e.item,n=e.index;return Object(T.jsxs)(O.default,{style:x.SearchOptionsStyle.exclude,children:[Object(T.jsx)(b.default,{style:{textAlign:"center"},children:t}),Object(T.jsx)(p.default,{onPress:function(){return function(e){te((function(t){var n=[];return t.forEach((function(t,r){r!=e&&n.push(t)})),n}))}(n)},children:Object(T.jsx)(v.FontAwesomeIcon,{icon:"xmark",size:20})})]},n)}})]}),Object(T.jsx)(H,{options:l}),Object(T.jsx)(O.default,{style:x.SearchOptionsStyle.optionTypesContainer,children:Object(T.jsx)(h.default,{data:N,renderItem:function(e){var t=e.item;return Object(T.jsx)(p.default,{style:x.SearchOptionsStyle.optionTypes,onPress:function(){return F(t)},children:Object(T.jsx)(b.default,{style:{fontWeight:"bold"},children:t})})}})}),Object(T.jsx)(z,{style:{height:99},type:M,data:L[M],selectedData:l[M],updateData:function(e,t){R((function(n){var r=A({},n);return r[e]=t,r}))}})]})]})}}}]);
//# sourceMappingURL=8.b1cb7592.chunk.js.map