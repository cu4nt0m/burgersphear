(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],{12:function(e,t,n){e.exports={BreadBottom:"BurgerIngridient_BreadBottom__3xC0q",BreadTop:"BurgerIngridient_BreadTop__2aQry",Seeds1:"BurgerIngridient_Seeds1__1R38x",Seeds2:"BurgerIngridient_Seeds2__3_DGe",Meat:"BurgerIngridient_Meat__3sFFK",Cheese:"BurgerIngridient_Cheese__NNmxH",Salad:"BurgerIngridient_Salad__1KsxN",Bacon:"BurgerIngridient_Bacon__2Gk9p"}},15:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__11VQR",Logo:"SideDrawer_Logo__2GVwt",Open:"SideDrawer_Open__3lXOK",Close:"SideDrawer_Close__2oHEL"}},17:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1vmsB",Label:"BuildControl_Label__lzGWe",Less:"BuildControl_Less__uAXBv",More:"BuildControl_More__kxkxH"}},18:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1m3Nj",Logo:"Toolbar_Logo__3m224",DesktopOnly:"Toolbar_DesktopOnly__2oaEG"}},22:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3qGe2",active:"NavigationItem_active__3D1fM"}},23:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3rbQy",OrderButton:"BuildControls_OrderButton__1r02c",enable:"BuildControls_enable__2h0YZ"}},24:function(e,t,n){e.exports={Button:"Button_Button__vsKog",Success:"Button_Success__1_GEJ",Danger:"Button_Danger__15JOE"}},37:function(e,t,n){e.exports={Content:"Layout_Content__3eMlP"}},38:function(e,t,n){e.exports={Logo:"Logo_Logo__3230Y"}},39:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__8T0PU"}},40:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3UZPb"}},41:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__okGRE"}},42:function(e,t,n){e.exports={Burger:"Burger_Burger__2oWXP"}},43:function(e,t,n){e.exports={Modal:"Modal_Modal__34BAU"}},45:function(e,t,n){e.exports={Loader:"Spinner_Loader__2kMhQ",load3:"Spinner_load3__3gT_a"}},46:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__H_ilj"}},54:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(36),i=n.n(s),o=(n(54),n(4)),l=n(5),d=n(7),u=n(6),j=n(37),h=n.n(j),b=function(e){return e.children},p=n(18),O=n.n(p),g=n(38),x=n.n(g),_=n.p+"static/media/burger-logo.ec69c7f6.png",f=function(e){return Object(r.jsx)("div",{className:x.a.Logo,children:Object(r.jsx)("img",{src:_,alt:"myBurger"})})},m=n(39),v=n.n(m),C=n(22),k=n.n(C),B=function(e){return Object(r.jsx)("li",{className:k.a.NavigationItem,children:Object(r.jsx)("a",{href:e.link,className:e.active?k.a.active:null,children:e.children})})},y=function(e){return Object(r.jsxs)("ul",{className:v.a.NavigationItems,children:[Object(r.jsx)(B,{link:"/",active:!0,children:"Burger Builder"}),Object(r.jsx)(B,{link:"/",children:"Checkout"})]})},S=n(40),N=n.n(S),w=function(e){return Object(r.jsxs)("div",{className:N.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},D=function(e){return Object(r.jsxs)("header",{className:O.a.Toolbar,children:[Object(r.jsx)(w,{clicked:e.menuClicked}),Object(r.jsx)("div",{className:O.a.Logo,children:Object(r.jsx)(f,{})}),Object(r.jsx)("nav",{className:O.a.DesktopOnly,children:Object(r.jsx)(y,{})})]})},I=n(15),L=n.n(I),T=n(41),P=n.n(T),H=function(e){return e.show?Object(r.jsx)("div",{className:P.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),Object(r.jsxs)(b,{children:[Object(r.jsx)(H,{show:e.open,clicked:e.clicked}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:L.a.Logo,children:Object(r.jsx)(f,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(y,{})})]})]})},A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={sideDrawerShow:!1},e.sideDrawerCloseHandler=function(){e.setState({sideDrawerShow:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{sideDrawerShow:!e.sideDrawerShow}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(b,{children:[Object(r.jsx)(D,{menuClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(M,{open:this.state.sideDrawerShow,clicked:this.sideDrawerCloseHandler}),Object(r.jsx)("main",{className:h.a.Content,children:this.props.children})]})}}]),n}(c.Component),E=n(14),F=n(48),G=n(12),U=n.n(G),q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:U.a.BreadBottom});break;case"bread-top":e=Object(r.jsxs)("div",{className:U.a.BreadTop,children:[Object(r.jsx)("div",{className:U.a.Seeds1}),Object(r.jsx)("div",{className:U.a.Seeds2})]});break;case"meat":e=Object(r.jsx)("div",{className:U.a.Meat});break;case"cheese":e=Object(r.jsx)("div",{className:U.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:U.a.Salad});break;case"bacon":e=Object(r.jsx)("div",{className:U.a.Bacon});break;default:e=null}return e}}]),n}(c.Component),R=n(42),Y=n.n(R),W=function(e){var t=Object.keys(e.ingridients).map((function(t){return Object(F.a)(Array(e.ingridients[t])).map((function(e,n){return Object(r.jsx)(q,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please add ingredients."})),console.log(t),Object(r.jsxs)("div",{className:Y.a.Burger,children:[Object(r.jsx)(q,{type:"bread-top"}),t,Object(r.jsx)(q,{type:"bread-bottom"})]})},J=n(23),K=n.n(J),Q=n(17),X=n.n(Q),V=function(e){return Object(r.jsxs)("div",{className:X.a.BuildControl,children:[Object(r.jsx)("div",{className:X.a.Label,children:e.label}),Object(r.jsx)("button",{className:X.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:X.a.More,onClick:e.added,children:"More"})]})},Z=[{label:"Salad:",type:"salad"},{label:"Bacon:",type:"bacon"},{label:"Cheese:",type:"cheese"},{label:"Meat:",type:"meat"}],$=function(e){return Object(r.jsxs)("div",{className:K.a.BuildControls,children:[Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Burger Price: ",e.price.toFixed(2),"$"]})}),Z.map((function(t){return Object(r.jsx)(V,{label:t.label,added:function(){return e.addIg(t.type)},removed:function(){return e.removeIg(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:K.a.OrderButton,disabled:!e.orderDisabled,onClick:e.orderBtn,children:"ORDER NOW!"})]})},z=n(43),ee=n.n(z),te=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(r.jsxs)(b,{children:[Object(r.jsx)(H,{show:this.props.show,clicked:this.props.purchaseCancel}),Object(r.jsx)("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(c.Component),ne=n(24),re=n.n(ne),ce=function(e){return Object(r.jsx)("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ae=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingridients).map((function(t){return Object(r.jsxs)("li",{children:[t.charAt(0).toUpperCase()+t.slice(1),": ",e.props.ingridients[t]]},t)}));return Object(r.jsxs)(b,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"Your burger includes the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2),"$"]})}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)(ce,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"Cancel"}),Object(r.jsx)(ce,{btnType:"Success",clicked:this.props.purchaseContinued,children:"Continue"})]})}}]),n}(c.Component),se=n(44),ie=n.n(se).a.create({baseURL:"https://burgershpear-default-rtdb.firebaseio.com/"}),oe=n(45),le=n.n(oe),de=function(){return Object(r.jsx)("div",{className:le.a.Loader,children:"Loading..."})},ue={salad:.5,cheese:.4,meat:1.5,bacon:2},je=function(e,t){return function(n){Object(d.a)(a,n);var c=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=c.call(this)).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(b,{children:[Object(r.jsx)(te,{show:this.state.error,purchaseCancel:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(E.a)({},this.props))]})}}]),a}(c.Component)}(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={ingridients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},e.updatePurchaseState=function(t){var n=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t>0}),0);e.setState({purchasable:n>0})},e.addIngridientHandler=function(t){var n=e.state.ingridients[t]+1,r=Object(E.a)({},e.state.ingridients);r[t]=n;var c=ue[t],a=e.state.totalPrice+c;e.setState({ingridients:r,totalPrice:a}),e.updatePurchaseState(r)},e.removeIngridient=function(t){var n=e.state.ingridients[t];if(!(n<=0)){var r=n-1,c=Object(E.a)({},e.state.ingridients);c[t]=r;var a=ue[t],s=e.state.totalPrice-a;e.setState({ingridients:c,totalPrice:s}),e.updatePurchaseState(c)}},e.orderPurchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.history.push("/checkout")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),ie.get("https://burgershpear-default-rtdb.firebaseio.com/ingridients.json").then((function(t){e.setState({ingridients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=Object(E.a)({},this.state.ingridients);for(var t in e)e[t]=e[t]<=0;var n=this.state.error?Object(r.jsx)("p",{style:{textAlign:"center"},children:"Ingredients can not load. Network error!"}):Object(r.jsx)(de,{}),c=null;return this.state.ingridients&&(n=Object(r.jsxs)(b,{children:[Object(r.jsx)(W,{ingridients:this.state.ingridients}),Object(r.jsx)($,{addIg:this.addIngridientHandler,removeIg:this.removeIngridient,disabled:e,price:this.state.totalPrice,orderDisabled:this.state.purchasable,orderBtn:this.orderPurchaseHandler})]}),c=Object(r.jsx)(ae,{ingridients:this.state.ingridients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(c=Object(r.jsx)(de,{})),Object(r.jsxs)(b,{children:[Object(r.jsx)(te,{show:this.state.purchasing,purchaseCancel:this.purchaseCancelHandler,children:c}),n]})}}]),n}(c.Component),ie),he=n(46),be=n.n(he),pe=function(e){return Object(r.jsxs)("div",{className:be.a.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"We hope it is delicious"}),Object(r.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(r.jsx)(W,{ingridients:e.ingridients})}),Object(r.jsx)(ce,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(r.jsx)(ce,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},Oe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={ingridients:{salad:1,meat:1,cheese:1,bacon:1}},e.checkoutCancelled=function(){e.props.history.goBack()},e.checkoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(pe,{ingridients:this.state.ingridients,checkoutCancelled:this.checkoutCancelled,checkoutContinued:this.checkoutContinued})})}}]),n}(c.Component),ge=n(2),xe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(A,{children:Object(r.jsxs)(ge.c,{children:[Object(r.jsx)(ge.a,{path:"/checkout",component:Oe}),Object(r.jsx)(ge.a,{path:"/",component:je})]})})})}}]),n}(c.Component),_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},fe=n(21),me=Object(r.jsx)(fe.a,{children:Object(r.jsx)(xe,{})});i.a.render(Object(r.jsx)(a.a.StrictMode,{children:me}),document.getElementById("root")),_e()}},[[77,1,2]]]);
//# sourceMappingURL=main.8eef14f3.chunk.js.map