(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/favicon.fa4783d1.png"},116:function(e,t,n){e.exports=n.p+"static/media/searchIcon.498a808b.png"},163:function(e,t,n){e.exports=n(205)},205:function(e,t,n){"use strict";n.r(t);var r=n(220),i=n(219),a=n(218),c=n(156),o=n(5),s=n.n(o),l=n(9),u=n.n(l),d=n(0),f=n(10),j=n(31),b=n.n(j),h=n(39),p=n(1),g=Object(d.createContext)({loggedIn:!1,username:"",email:"",setLoginStatus:function(){},setUsername:function(e){},setEmail:function(e){},checkCred:function(e,t){}});function O(e){var t=Object(d.useState)(!1),n=u()(t,2),r=n[0],i=n[1],a=Object(d.useState)(""),c=u()(a,2),o=c[0],s=c[1],l=Object(d.useState)(""),f=u()(l,2),j=f[0],O=f[1];function m(){return(m=b()((function*(e,t){if(!r){var n=yield h.default.get(t+"/api/checkLogin/"),i=yield n.data;e.setCsrfToken(i.token),0!=i.user&&(y(),v(i.user.username),x(i.user.email))}}))).apply(this,arguments)}function y(){i((function(e){return!e}))}function x(e){""==e?O(""):e.match(/^([a-zA-Z0-9]+\.?[a-zA-Z0-9]*)@[a-zA-Z0-9^\.]+\.([a-zA-Z]+\.?[a-zA-Z]*)$/)&&O(e)}function v(e){e.length>0?s(e):s("")}return Object(p.jsx)(g.Provider,{value:{loggedIn:r,username:o,email:j,setLoginStatus:y,setUsername:v,setEmail:x,checkCred:function(e,t){return m.apply(this,arguments)}},children:e.children})}var m=g,y=Object(d.createContext)({token:"",setCsrfToken:function(e){}});function x(e){var t=Object(d.useState)(""),n=u()(t,2),r=n[0],i=n[1];return Object(p.jsx)(y.Provider,{value:{token:r,setCsrfToken:function(e){i(e)}},children:e.children})}var v=y,S=Object(d.createContext)({moreRecipesLink:"",setAddRecipesLink:function(e){},results:[{name:"No Recipe Name Available",image:n(104),ingredients:["None"],source:""}],getRecipes:function(e){},addRecipes:function(e,t){},isLoading:!1,setIsLoading:function(e){}});function w(e){var t=Object(d.useState)([{name:"No Recipe Name Available",image:"",ingredients:["None"],source:""}]),n=u()(t,2),r=n[0],i=n[1],a=Object(d.useState)(""),c=u()(a,2),o=c[0],s=c[1],l=Object(d.useState)(!1),f=u()(l,2),j=f[0],b=f[1];function h(e){s(e)}return Object(p.jsx)(x,{children:Object(p.jsx)(O,{children:Object(p.jsx)(S.Provider,{value:{moreRecipesLink:o,results:r,getRecipes:function(e){""!=e[0].source&&(i([{name:"No Recipe Name Available",image:"",ingredients:["None"],source:""}]),i(e))},setAddRecipesLink:h,addRecipes:function(e,t){for(var n=[],a=0;a<r.length;a++)n.push(r[a]);for(var c=0;c<e.length;c++)n.push(e[c]);i(n),h(t)},isLoading:j,setIsLoading:b},children:e.children})})})}var P=S,k=n(18),C=n.n(k),T=n(54),L=n(36),R=n(25),D=n(73);var E=n(11),I=E.default.create({list:{flex:1,width:"50%",maxWidth:300},foodPicContainer:{alignItems:"center"},foodPic:{height:200,width:"100%",resizeMode:"contain"},foodName:{marginTop:20,marginBottom:20,fontWeight:"bold",padding:10,borderWidth:1,textAlign:"center"}});function H(e){var t=Object(d.useState)(e.recipes),r=u()(t,2),i=r[0],a=r[1],c=Object(d.useState)(!0),o=u()(c,2),s=o[0],l=o[1],j=Object(d.useState)(!1),g=u()(j,2),O=g[0],m=g[1],y=Object(d.useState)(Object(D.default)().width),x=u()(y,2),v=x[0];x[1];function S(){return(S=b()((function*(t){t.distanceFromEnd;if(void 0!=e.recipeLink&&""!=e.recipeLink&&s)try{var n=yield Object(h.default)({method:"get",url:"/api/addRecipes/?nextLink="+e.recipeLink,responseType:"json"}),r=yield n.data;e.setData(r.results,r.addRecipesLink)}catch(c){l(!1)}else""==i[i.length-1].source||O||(a((function(e){var t=C()(e);return t.push({name:"No more Recipes",image:"",ingredients:[],source:""}),t})),m((function(e){return!e})))}))).apply(this,arguments)}Object(d.useEffect)((function(){a(e.recipes)}),[e.recipes]);var w={flex:1,width:v>700?"30%":"100%"};return Object(p.jsx)(f.default,{style:[w],children:Object(p.jsx)(T.default,{data:i,renderItem:function(e){var t=e.item,r="";return r=""!=t.image?{uri:t.image,height:v,width:"100%"}:n(104),Object(p.jsxs)(f.default,{children:[Object(p.jsx)(f.default,{style:I.foodPicContainer,children:Object(p.jsx)(L.default,{style:I.foodPic,source:r})}),Object(p.jsx)(R.default,{style:I.foodName,children:t.name})]})},onEndReached:function(e){return S.apply(this,arguments)},onEndReachedThreshold:2,extraData:i})})}var A=E.default.create({container:{flex:2,alignItems:"center"},imgContainer:{flexBasis:30,height:30,marginTop:7,marginBottom:7}}),W=E.default.create({searchIcon:{height:20,width:20,resizeMode:"contain",marginRight:10},navText:{color:"white",fontSize:18,fontWeight:"500",marginLeft:10},pageContainer:{marginTop:10,textAlign:"center"},errorMsg:{color:"white",backgroundColor:"red",padding:10,fontWeight:"bold",fontSize:20,borderRadius:20}}),z=n(27),N=n(35);function B(){var e=Object(d.useContext)(v),t=Object(d.useContext)(m),n=Object(z.useNavigation)();function r(){return(r=b()((function*(){var r=yield h.default.get("/api/logout/"),i=yield r.data;i.loggedOut&&(t.setLoginStatus(!1),t.setUsername(""),t.setEmail(""),e.setCsrfToken(i.token),n.navigate("Home"))}))).apply(this,arguments)}return Object(p.jsx)(N.default,{style:{padding:5},onPress:function(){return r.apply(this,arguments)},children:Object(p.jsx)(R.default,{style:W.navText,children:"Sign Out"})})}function U(e){return Object(p.jsx)(f.default,{style:{flexDirection:"row",flexWrap:"wrap"},children:e.children})}var M=n(217);function Z(){var e=n(116);return Object(p.jsx)(M.default,{to:{screen:"Search"},style:A.imgContainer,children:Object(p.jsx)(L.default,{style:W.searchIcon,source:e})})}function F(){return Object(p.jsx)(M.default,{to:{screen:"Login",params:{toLogin:!0}},style:{padding:5},children:Object(p.jsx)(R.default,{style:W.navText,children:"Login"})})}function J(){return Object(p.jsx)(M.default,{to:{screen:"SignUp",params:{toLogin:!1}},style:{padding:5},children:Object(p.jsx)(R.default,{style:W.navText,children:"Sign Up"})})}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e){var t=e.navigation,n=Object(d.useContext)(P),r=Object(d.useContext)(v),i=Object(d.useContext)(m),a=Object(d.useState)(!0),c=u()(a,2),o=c[0];c[1];return Object(d.useEffect)((function(){return n.setIsLoading(!1)}),[n.isLoading]),Object(d.useEffect)((function(){i.checkCred(r,"")}),[o]),Object(d.useEffect)((function(){i.loggedIn?t.setOptions({headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(B,{}),Object(p.jsx)(Z,{})]})}}):t.setOptions({headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(F,{}),Object(p.jsx)(J,{}),Object(p.jsx)(Z,{})]})}})}),[i.loggedIn]),Object(p.jsx)(f.default,{style:G(G({},A.container),W.pageContainer),children:!n.isLoading&&Object(p.jsx)(H,{recipes:n.results,setData:n.addRecipes,recipeLink:n.moreRecipesLink})})}var q=n(99),K=n(90),Q=E.default.create({listContainer:{borderWidth:2}});function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){var t=Object(d.useState)(e.selectedData),n=u()(t,2),r=n[0],i=n[1];function a(e){var t=!1;return r.forEach((function(n){n==e&&(t=!0)})),t}function c(e){var t;a(e)?(t=e,i((function(e){var n=[];return e.forEach((function(e){return e!=t?n.push(e):null})),n}))):function(e){i((function(t){var n=[];return(n=n.concat(t)).push(e),n}))}(e)}return Object(d.useEffect)((function(){return i(e.selectedData)}),[e.type]),Object(d.useEffect)((function(){return e.updateData(e.type,r)}),[r]),Object(p.jsx)(f.default,{style:Y(Y({},Q.listContainer),e.style),children:Object(p.jsx)(T.default,{data:e.data,renderItem:function(e){var t=e.item;return Object(p.jsx)(N.default,{onPress:function(e){return c(t)},style:{width:175,backgroundColor:a(t)?"#00ff0d":"#fd5d00",padding:5,alignItems:"center"},children:Object(p.jsx)(R.default,{style:{fontWeight:"bold"},children:t})})},extraData:r})})}var ee=E.default.create({container:{flex:1,alignItems:"center",marginTop:10,marginLeft:"auto",marginRight:"auto"},textButtonContainer:{flexDirection:"row",flexBasis:50,maxHeight:50},searchIcon:{height:25,marginTop:7,width:"100%",resizeMode:"contain"},imgContainer:{flexBasis:20,height:30},input:{height:40,marginLeft:10,padding:15,paddingBottom:10,borderColor:"black",borderWidth:1,borderRadius:20},optionsContainer:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",minWidth:400,width:"30%"},optionTypes:{width:100,backgroundColor:"#ff9100",alignItems:"center"},text:{textAlign:"center",padding:5},optionTypeHeader:{backgroundColor:"#ffee00",fontWeight:"bold"},selectedMetaText:{fontSize:25},selectedOptionsContainer:{height:"100%",minHeight:"100%",maxHeight:"100%",borderWidth:2,marginBottom:5}}),te={diet:["balanced","high-fiber","high-protein","low-carb","low-fat","low-sodium"],health:["alcohol-cocktail","alcohol-free","celery-free","crustacean-free","dairy-free","DASH","egg-free","fish-free","fodmap-free","gluten-free","immuno-supportive","keto-friendly","kidney-friendly","kosher","low-potassium","low-sugar","lupine-free","Mediterranean","mollusk-free","mustard-free","No-oil-added","paleo","peanut-free","pecatarian","pork-free","red-meat-free","sesame-free","shellfish-free","soy-free","sugar-conscious","sulfite-free","tree-nut-free","vegan","vegetarian","wheat-free"],mealType:["breakfast","brunch","lunch/dinner","snack","teatime"],dishType:["alcohol cocktail","biscuits and cookies","bread","cereals","condiments and sauces","desserts","drinks","egg","ice cream and custard","main course","pancake","pasta","pastry","pies and tarts","pizza","preps","preserve","salad","sandwiches","seafood","side dish","soup","special occasions","starter","sweets"],cuisineType:["american","asian","british","caribbean","central europe","eastern europe","chinese","french","greek","indian","italian","japanese","korean","kosher","mediterranean","mexican","middle eastern","nordic","south american","south east asia","world"]};function ne(e){return e.hasError?Object(p.jsx)(R.default,{style:e.style,children:e.message}):null}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e){var t=e.navigation,r=Object(d.useContext)(P),i=Object(d.useContext)(m),a=Object(d.useState)({diet:[],health:[],cuisineType:[],mealType:[],dishType:[]}),c=u()(a,2),o=c[0],s=c[1],l=Object(d.useState)((function(){var e=[];for(var t in o)e.push(t);return e})),j=u()(l,2),g=j[0],O=(j[1],Object(d.useState)(g[0])),y=u()(O,2),x=y[0],v=y[1],S=Object(d.useState)(""),w=u()(S,2),k=w[0],C=w[1],E=Object(d.useState)(!1),I=u()(E,2),H=I[0],A=I[1],z=Object(d.useState)(Object(D.default)().width),M=u()(z,2),Z=M[0],$=(M[1],Object(d.useState)(Object(D.default)().height)),G=u()($,2),X=G[0];G[1];function Q(){var e=0;for(var t in o)o[t].length<=0&&(e+=1);return e>=g.length}function V(){return(V=b()((function*(){if(!(k.length<=0&&Q())){A(!1);var e="";if(Q){var i=0,a=function(t){o[t].forEach((function(n,r){e+=t+"="+n,r<o[t].length-1&&(e+="&")})),e.length>0&&i<g.length&&(e+="&"),i+=1};for(var c in o)a(c)}var s="";k.trim().length>0&&e.length>0?s="ingredients="+k.trim()+"&"+e:k.trim().length>0?s="ingredients="+k.trim():e.length>0&&(s=e);try{var l=yield Object(h.default)({method:"get",url:"/api/fetchRecipes/?"+s,responseType:"json"});if(199<l.status<300){var u=yield l.data;r.getRecipes(u.results),r.setAddRecipesLink(u.addRecipesLink)}}catch(d){r.getRecipes([{name:"No Recipe Name Available",image:n(104),ingredients:["None"],source:""}])}return r.setIsLoading(!0),t.navigate("Home")}A(!0)}))).apply(this,arguments)}return Object(d.useEffect)((function(){i.loggedIn?t.setOptions({headerRight:function(){return Object(p.jsx)(U,{children:Object(p.jsx)(B,{})})}}):t.setOptions({headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(F,{}),Object(p.jsx)(J,{})]})}})}),[i.loggedIn]),Object(p.jsxs)(f.default,{style:ie(ie(ie({},ee.container),W.pageContainer),{},{width:Z<700?"100%":"70%"}),children:[Object(p.jsxs)(f.default,{style:ee.textButtonContainer,children:[Object(p.jsx)(N.default,{style:ee.imgContainer,onPress:function(){return V.apply(this,arguments)},children:Object(p.jsx)(L.default,{style:ee.searchIcon,source:n(116)})}),Object(p.jsx)(K.default,{style:[ee.input,{borderColor:H?"red":"black"}],onChangeText:function(e){C(e)},placeholder:"Search"})]}),Object(p.jsx)(ne,{hasError:H,style:W.errorMsg,message:"Please enter food name/ingredients"}),Object(p.jsxs)(f.default,{style:ie(ie({},ee.optionsContainer),{},{maxHeight:X/2.5,flexDirection:"row"}),children:[Object(p.jsx)((function(){var e=[];for(var t in o)e.push({optionType:t,data:o[t]});return Object(p.jsxs)(f.default,{style:ie(ie({},ee.selectedOptionsContainer),{},{width:"100%"}),children:[Object(p.jsx)(R.default,{style:ie(ie(ie({},ee.text),ee.selectedMetaText),{},{fontWeight:"bold"}),children:"Selected Options"}),Object(p.jsx)(q.default,{style:{width:"100%"},sections:e,renderItem:function(e){var t=e.item;return Object(p.jsx)(R.default,{style:ie({},ee.text),children:t})},renderSectionHeader:function(e){var t=e.section.optionType;return Object(p.jsx)(R.default,{style:ie(ie(ie({},ee.optionTypeHeader),ee.selectedMetaText),ee.text),children:t})}})]})}),{}),Object(p.jsx)(f.default,{style:{borderWidth:2,marginBottom:5,height:99},children:Object(p.jsx)(T.default,{data:g,renderItem:function(e){var t=e.item;return Object(p.jsx)(N.default,{style:ee.optionTypes,onPress:function(){return v(t)},children:Object(p.jsx)(R.default,{style:{fontWeight:"bold"},children:t})})}})}),Object(p.jsx)(_,{style:{height:"55%",maxHeight:"55%"},type:x,data:te[x],selectedData:o[x],updateData:function(e,t){s((function(n){var r=ie({},n);return r[e]=t,r}))}})]})]})}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e){var t=e.label,n=e.placeholder,r=void 0===n?"":n,i=e.isPassword,a=void 0!==i&&i,c=e.onChangeTextHandler,o=void 0===c?void 0:c,s=e.inputStyle,l=void 0===s?{}:s,u=e.labelStyle,d=void 0===u?{}:u,j=e.containerStyle,b=void 0===j?{}:j;return Object(p.jsxs)(f.default,{style:oe({},b),children:[Object(p.jsx)(R.default,{style:oe({},d),children:t}),Object(p.jsx)(K.default,{style:oe({},l),secureTextEntry:a,onChangeText:o,placeholder:r})]})}var le=E.default.create({formContainer:{width:"25%",minWidth:"25%",maxWidth:"25%"},formInput:{padding:5,marginTop:10,borderWidth:2,borderRadius:20},formLabel:{marginRight:10,textAlign:"left",fontWeight:"bold"},submitButton:{padding:10,margin:10,borderRadius:15,backgroundColor:"#fd5d00"}});function ue(){return Object(p.jsx)(M.default,{style:{backgroundColor:"none"},to:{screen:"Home"},children:Object(p.jsx)(R.default,{style:W.navText,children:"Home"})})}function de(e){return e.toLogin?Object(p.jsx)(se,{label:"Username/Email:",placeholder:"Enter either username/email:",onChangeTextHandler:e.usernameHandler,containerStyle:e.containerStyle,labelStyle:e.labelStyle,inputStyle:e.inputStyle}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(se,{label:"Username:",placeholder:"Please enter username:",onChangeTextHandler:e.usernameHandler,containerStyle:e.containerStyle,labelStyle:e.labelStyle,inputStyle:e.inputStyle}),Object(p.jsx)(se,{label:"Email:",placeholder:"Please enter email:",onChangeTextHandler:e.emailHandler,containerStyle:e.containerStyle,labelStyle:e.labelStyle,inputStyle:e.inputStyle})]})}function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=/^([a-zA-Z0-9]+\.?[a-zA-Z0-9]*)@[a-zA-Z0-9^\.]+\.([a-zA-Z]+\.?[a-zA-Z]*)$/;function he(e){var t=e.route,n=e.navigation,r=Object(d.useContext)(v),i=Object(d.useContext)(m),a=Object(d.useState)(t.params.toLogin),c=u()(a,2),o=c[0],s=(c[1],Object(d.useState)("")),l=u()(s,2),j=l[0],g=l[1],O=Object(d.useState)(""),y=u()(O,2),x=y[0],S=y[1],w=Object(d.useState)(""),P=u()(w,2),k=P[0],C=P[1],T=Object(d.useState)(!0),L=u()(T,2),D=L[0],E=L[1],I=Object(d.useState)(""),H=u()(I,2),A=H[0],z=H[1];function B(){return(B=b()((function*(){if(o&&(j.length<=0||k<=0))z("Please fill all the fields/ enter corretly."),E(!1);else if(!o&&(j.length<=0||x.length<=0||k<=0))z("Please fill all the fields/ enter corretly."),E(!1);else{E(!0);var e="post",t="signup/";o&&(e="put",t="login/");var a=yield Object(h.default)({method:e,headers:{"X-CSRFToken":r.token,credentials:"include"},withCredentials:!0,url:"/api/"+t,responseType:"json",data:{username:j,email:x,password:k}}),c=yield a.data;199<a.status<300?(c.signUpSuccess||c.loginSuccess)&&(i.setLoginStatus(!0),i.setUsername(j),i.setEmail(x),n.navigate("Home")):(z(c.message),E(!1))}}))).apply(this,arguments)}return Object(p.jsxs)(f.default,{style:je(je({},W.pageContainer),{},{alignItems:"center"}),children:[Object(p.jsx)(de,{toLogin:o,usernameHandler:function(e){g(e)},emailHandler:function(e){null!=e.match(be)?S(e):S("")},containerStyle:le.formContainer,labelStyle:le.formLabel,inputStyle:le.formInput}),Object(p.jsx)(se,{label:"Password:",placeholder:"Please enter password:",isPassword:!0,onChangeTextHandler:function(e){C(e)},containerStyle:le.formContainer,labelStyle:le.formLabel,inputStyle:le.formInput}),Object(p.jsx)(N.default,{style:le.submitButton,onPress:function(){return B.apply(this,arguments)},children:Object(p.jsx)(R.default,{style:{fontWeight:"bold"},children:"Sign Up"})}),Object(p.jsx)(ne,{hasError:!D,style:W.errorMsg,message:A})]})}Object(r.default)((function(){var e=Object(a.default)();return Object(p.jsxs)(w,{children:[Object(p.jsx)(i.default,{linking:{config:{screens:{Home:"Home",Search:"Search",SignIn:"SignUp",Login:"Login"}}},children:Object(p.jsxs)(e.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#fd5d00"},headerTitleStyle:{color:"white"},headerTitleAlign:"center",headerLeft:function(){},headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(F,{}),Object(p.jsx)(J,{}),Object(p.jsx)(Z,{})]})}},children:[Object(p.jsx)(e.Screen,{name:"Home",component:X}),Object(p.jsxs)(e.Group,{screenOptions:function(e){e.route,e.navigation;return{headerLeft:function(){return Object(p.jsx)(ue,{})}}},children:[Object(p.jsx)(e.Screen,{name:"Search",component:ae,options:{headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(F,{}),Object(p.jsx)(J,{})]})}}}),Object(p.jsx)(e.Screen,{name:"SignUp",component:he,options:{headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(F,{}),Object(p.jsx)(Z,{})]})}}}),Object(p.jsx)(e.Screen,{name:"Login",component:he,options:{headerRight:function(){return Object(p.jsxs)(U,{children:[Object(p.jsx)(J,{}),Object(p.jsx)(Z,{})]})}}})]})]})}),Object(p.jsx)(c.StatusBar,{})]})}))}},[[163,1,2]]]);
//# sourceMappingURL=app.b7a5dcac.chunk.js.map