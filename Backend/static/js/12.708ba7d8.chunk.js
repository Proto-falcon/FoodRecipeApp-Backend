(this.webpackJsonp=this.webpackJsonp||[]).push([[12,2,14],{246:function(e,t,i){"use strict";i.r(t),i.d(t,"recipeListStyle",(function(){return n}));var n=i(9).default.create({foodPicContainer:{alignItems:"center"},foodPic:{height:200,width:"100%",resizeMode:"contain"},nameRatingContainer:{marginTop:20,marginBottom:20,borderWidth:1,padding:10},foodName:{fontWeight:"bold",textAlign:"center"}})},251:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return m}));var n=i(38),r=i.n(n),c=i(8),s=i.n(c),o=i(29),a=i(111),d=i(0),u=i(48),l=i(109),f=i(108),p=i(10),h=i(112),j=i(239),b=i(246),O=i(115),y=i(243),g=i(70),x=i(25);function m(e){var t=e.item,i=e.height,n=e.width,c=e.flexGrow,m=Object(o.useNavigation)(),w=Object(d.useContext)(h.CsrfCtx),v=Object(d.useContext)(O.RecipeResultsCtx),L=Object(d.useState)((function(){return null===t.rating?"No Rating":t.rating})),S=s()(L,2),R=S[0],P=(S[1],Object(d.useState)((function(){return""!==t.image?t.image.startsWith("http")?{uri:t.image,height:"100%",width:"100%"}:{uri:""+j.default+t.image,height:"100%",width:"100%"}:g.defaultImage}))),k=s()(P,2),C=k[0];k[1];function D(){return(D=r()((function*(e){try{yield a.default.post(j.default+"/api/setRecentRecipe/",{id:e.id},{headers:{"X-CSRFToken":w.token,credentials:"include"},withCredentials:!0,responseType:"json"})}catch(t){}v.setCurrentRecipeURI(e.id),m.navigate("RecipeInfo",{id:e.id})}))).apply(this,arguments)}return""===t.id?Object(x.jsxs)(p.default,{style:{width:n,height:i,flexGrow:c},children:[Object(x.jsx)(p.default,{style:b.recipeListStyle.foodPicContainer,children:Object(x.jsx)(u.default,{style:b.recipeListStyle.foodPic,source:C})}),Object(x.jsx)(f.default,{style:b.recipeListStyle.foodName,children:t.name})]},t.id):Object(x.jsxs)(l.default,{onPress:function(){return function(e){return D.apply(this,arguments)}(t)},style:{width:n,height:i,flexGrow:c},children:[Object(x.jsx)(p.default,{style:b.recipeListStyle.foodPicContainer,children:Object(x.jsx)(u.default,{style:b.recipeListStyle.foodPic,source:C})}),Object(x.jsxs)(p.default,{style:b.recipeListStyle.nameRatingContainer,children:[Object(x.jsx)(f.default,{style:b.recipeListStyle.foodName,children:t.name}),Object(x.jsxs)(f.default,{style:b.recipeListStyle.foodName,children:[Object(x.jsx)(y.FontAwesomeIcon,{icon:"star"})," ",R]})]})]},t.id)}},252:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var n=i(7),r=i.n(n),c=i(10),s=i(25);function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e){var t=e.items,i=e.renderItems,n=e.style;return Object(s.jsx)(c.default,{style:a(a({},n),{},{flexDirection:"row",flexWrap:"wrap"}),children:Object(s.jsx)((function(){var e=[];return t.forEach((function(t,n){e.push(i({item:t,index:n}))})),e}),{})})}},270:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return v}));var n=i(17),r=i.n(n),c=i(38),s=i.n(c),o=i(8),a=i.n(o),d=i(111),u=i(0),l=i(114),f=i(14),p=i(109),h=i(64),j=i(108),b=i(240),O=i(10),y=i(239),g=i(251),x=i(252),m=i(70),w=i(25);function v(e){var t=Object(u.useState)(e.recipes),i=a()(t,2),n=i[0],c=i[1],o=Object(u.useState)(!1),v=a()(o,2),L=v[0],S=v[1];function R(e){return P.apply(this,arguments)}function P(){return(P=s()((function*(t){t.distanceFromEnd;if(void 0!==e.setData)if(void 0==e.recipeLink||""==e.recipeLink||L)""!=n[n.length-1].id&&L&&c((function(e){var t=r()(e);return t.push(m.NoMoreRecipes),t}));else try{var i=yield Object(d.default)({method:"get",url:y.default+"/api/addRecipes/?nextLink="+e.recipeLink,responseType:"json"}),s=yield i.data;e.setData(s.results,s.addRecipesLink)}catch(o){S(!0)}}))).apply(this,arguments)}Object(u.useEffect)((function(){e.recipes.length<20&&(""!==e.recipeLink||void 0!==e.recipeLink)&&""!==e.recipes[e.recipes.length-1].id&&(S(!0),c((function(){var t=e.recipes;return t.push(m.NoMoreRecipes),t}))),c(e.recipes)}),[e.recipes]);var k=Object(b.default)().width;Math.floor(k/300);return Object(w.jsx)(O.default,{style:{width:"100%"},children:"web"!=f.default.OS?Object(w.jsx)(l.default,{data:n,renderItem:function(e){var t=e.item;return Object(w.jsx)(g.default,{height:300,width:"100%",item:t})},onEndReached:R,onEndReachedThreshold:2,extraData:n}):Object(w.jsxs)(h.default,{children:[Object(w.jsx)(x.default,{items:n,renderItems:function(e){var t=e.item,i=e.index;return Object(w.jsx)(g.default,{height:300,width:300,item:t,flexGrow:1},i)}}),Object(w.jsx)((function(e){if(e.loadMore)return Object(w.jsx)(p.default,{style:{backgroundColor:"ff6e00",padding:5},onPress:R,children:Object(w.jsx)(j.default,{style:{textAlign:"center",fontWeight:"bold",fontSize:50},children:"Load More"})})}),{loadMore:!L&&""!==e.recipeLink})]})})}}}]);
//# sourceMappingURL=12.708ba7d8.chunk.js.map