(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],{13:function(e,t,n){e.exports={BreadBottom:"BurgerIngridient_BreadBottom__3xC0q",BreadTop:"BurgerIngridient_BreadTop__2aQry",Seeds1:"BurgerIngridient_Seeds1__1R38x",Seeds2:"BurgerIngridient_Seeds2__3_DGe",Meat:"BurgerIngridient_Meat__3sFFK",Cheese:"BurgerIngridient_Cheese__NNmxH",Salad:"BurgerIngridient_Salad__1KsxN",Bacon:"BurgerIngridient_Bacon__2Gk9p"}},16:function(e,t,n){e.exports={Input:"Input_Input__3lNpC",Label:"Input_Label__3tcZD",InputElement:"Input_InputElement__1AjWr"}},17:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__11VQR",Logo:"SideDrawer_Logo__2GVwt",Open:"SideDrawer_Open__3lXOK",Close:"SideDrawer_Close__2oHEL"}},20:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1vmsB",Label:"BuildControl_Label__lzGWe",Less:"BuildControl_Less__uAXBv",More:"BuildControl_More__kxkxH"}},22:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1m3Nj",Logo:"Toolbar_Logo__3m224",DesktopOnly:"Toolbar_DesktopOnly__2oaEG"}},25:function(e,t,n){e.exports={Content:"Layout_Content__3eMlP",Footer:"Layout_Footer__2AVX_"}},28:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3qGe2",active:"NavigationItem_active__3D1fM"}},29:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3rbQy",OrderButton:"BuildControls_OrderButton__1r02c",enable:"BuildControls_enable__2h0YZ"}},30:function(e,t,n){e.exports={Button:"Button_Button__vsKog",Success:"Button_Success__1_GEJ",Danger:"Button_Danger__15JOE"}},41:function(e,t,n){e.exports={Logo:"Logo_Logo__3230Y"}},43:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__8T0PU"}},44:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3UZPb"}},45:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__okGRE"}},46:function(e,t,n){e.exports={Burger:"Burger_Burger__2oWXP"}},47:function(e,t,n){e.exports={Modal:"Modal_Modal__34BAU"}},49:function(e,t,n){e.exports={Loader:"Spinner_Loader__2kMhQ",load6:"Spinner_load6__x6tza",round:"Spinner_round__1dU-T"}},51:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__H_ilj"}},52:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1Y3D9",Input:"ContactData_Input__3qo-I"}},53:function(e,t,n){e.exports={Order:"Order_Order__15rEl"}},60:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),i=n(40),s=n.n(i),o=(n(60),n(4)),l=n(5),d=n(7),u=n(6),j=n(25),p=n.n(j),h=function(e){return e.children},b=n(22),O=n.n(b),g=n(41),m=n.n(g),f=n.p+"static/media/burger-logo.ec69c7f6.png",x=n(14),v=function(e){return Object(r.jsx)("div",{className:m.a.Logo,children:Object(r.jsx)(x.b,{to:"/",children:Object(r.jsx)("img",{src:f,alt:"myBurger"})})})},_=n(43),C=n.n(_),y=n(28),k=n.n(y),S=function(e){return Object(r.jsx)("li",{className:k.a.NavigationItem,children:Object(r.jsx)(x.c,{activeClassName:k.a.active,to:e.link,exact:e.exact,children:e.children})})},B=function(e){return Object(r.jsxs)("ul",{className:C.a.NavigationItems,children:[Object(r.jsx)(S,{link:"/",exact:!0,children:"Burger Builder"}),Object(r.jsx)(S,{link:"/orders",children:"My Orders"})]})},N=n(44),I=n.n(N),w=function(e){return Object(r.jsxs)("div",{className:I.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},D=function(e){return Object(r.jsxs)("header",{className:O.a.Toolbar,children:[Object(r.jsx)(w,{clicked:e.menuClicked}),Object(r.jsx)("div",{className:O.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{className:O.a.DesktopOnly,children:Object(r.jsx)(B,{})})]})},T=n(17),L=n.n(T),P=n(45),H=n.n(P),F=function(e){return e.show?Object(r.jsx)("div",{className:H.a.Backdrop,onClick:e.clicked}):null},E=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),Object(r.jsxs)(h,{children:[Object(r.jsx)(F,{show:e.open,clicked:e.clicked}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:L.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(B,{})})]})]})},M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={sideDrawerShow:!1},e.sideDrawerCloseHandler=function(){e.setState({sideDrawerShow:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{sideDrawerShow:!e.sideDrawerShow}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(D,{menuClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(E,{open:this.state.sideDrawerShow,clicked:this.sideDrawerCloseHandler}),Object(r.jsx)("main",{className:p.a.Content,children:this.props.children}),Object(r.jsx)("footer",{className:p.a.Footer,children:Object(r.jsx)("p",{children:"Under development by cu4nt0m Arsalan H."})})]})}}]),n}(a.Component),A=n(3),U=n(54),R=n(13),Y=n.n(R),G=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:Y.a.BreadBottom});break;case"bread-top":e=Object(r.jsxs)("div",{className:Y.a.BreadTop,children:[Object(r.jsx)("div",{className:Y.a.Seeds1}),Object(r.jsx)("div",{className:Y.a.Seeds2})]});break;case"meat":e=Object(r.jsx)("div",{className:Y.a.Meat});break;case"cheese":e=Object(r.jsx)("div",{className:Y.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:Y.a.Salad});break;case"bacon":e=Object(r.jsx)("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),q=n(46),V=n.n(q),W=function(e){var t=Object.keys(e.ingridients).map((function(t){return Object(U.a)(Array(e.ingridients[t])).map((function(e,n){return Object(r.jsx)(G,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please add ingredients."})),console.log(t),Object(r.jsxs)("div",{className:V.a.Burger,children:[Object(r.jsx)(G,{type:"bread-top"}),t,Object(r.jsx)(G,{type:"bread-bottom"})]})},z=n(29),J=n.n(z),K=n(20),Q=n.n(K),X=function(e){return Object(r.jsxs)("div",{className:Q.a.BuildControl,children:[Object(r.jsx)("div",{className:Q.a.Label,children:e.label}),Object(r.jsx)("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:Q.a.More,onClick:e.added,children:"More"})]})},Z=[{label:"Salad:",type:"salad"},{label:"Bacon:",type:"bacon"},{label:"Cheese:",type:"cheese"},{label:"Meat:",type:"meat"}],$=function(e){return Object(r.jsxs)("div",{className:J.a.BuildControls,children:[Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Burger Price: ",e.price.toFixed(2),"$"]})}),Z.map((function(t){return Object(r.jsx)(X,{label:t.label,added:function(){return e.addIg(t.type)},removed:function(){return e.removeIg(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:J.a.OrderButton,disabled:!e.orderDisabled,onClick:e.orderBtn,children:"PROCEED!"})]})},ee=n(47),te=n.n(ee),ne=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(F,{show:this.props.show,clicked:this.props.purchaseCancel}),Object(r.jsx)("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(a.Component),re=n(30),ae=n.n(re),ce=function(e){return Object(r.jsx)("button",{className:[ae.a.Button,ae.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ie=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingridients).map((function(t){return Object(r.jsxs)("li",{children:[t.charAt(0).toUpperCase()+t.slice(1),": ",e.props.ingridients[t]]},t)}));return Object(r.jsxs)(h,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"Your burger includes the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2),"$"]})}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)(ce,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"Cancel"}),Object(r.jsx)(ce,{btnType:"Success",clicked:this.props.purchaseContinued,children:"Continue"})]})}}]),n}(a.Component),se=n(48),oe=n.n(se).a.create({baseURL:"https://burgershpear-default-rtdb.firebaseio.com/"}),le=n(49),de=n.n(le),ue=function(){return Object(r.jsx)("div",{className:de.a.Loader,children:"Loading..."})},je=function(e,t){return function(n){Object(d.a)(c,n);var a=Object(u.a)(c);function c(){var e;return Object(o.a)(this,c),(e=a.call(this)).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(l.a)(c,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(ne,{show:this.state.error,purchaseCancel:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(A.a)({},this.props))]})}}]),c}(a.Component)},pe={salad:.5,cheese:.4,meat:1.5,bacon:2},he=je(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingridients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},e.updatePurchaseState=function(t){var n=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t>0}),0);e.setState({purchasable:n>0})},e.addIngridientHandler=function(t){var n=e.state.ingridients[t]+1,r=Object(A.a)({},e.state.ingridients);r[t]=n;var a=pe[t],c=e.state.totalPrice+a;e.setState({ingridients:r,totalPrice:c}),e.updatePurchaseState(r)},e.removeIngridient=function(t){var n=e.state.ingridients[t];if(!(n<=0)){var r=n-1,a=Object(A.a)({},e.state.ingridients);a[t]=r;var c=pe[t],i=e.state.totalPrice-c;e.setState({ingridients:a,totalPrice:i}),e.updatePurchaseState(a)}},e.orderPurchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){var t=[];for(var n in e.state.ingridients)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e.state.ingridients[n]));t.push("price="+e.state.totalPrice);var r=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+r})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),oe.get("https://burgershpear-default-rtdb.firebaseio.com/ingridients.json").then((function(t){e.setState({ingridients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingridients);for(var t in e)e[t]=e[t]<=0;var n=this.state.error?Object(r.jsx)("p",{style:{textAlign:"center"},children:"Ingredients can not load. Network error!"}):Object(r.jsx)(ue,{}),a=null;return this.state.ingridients&&(n=Object(r.jsxs)(h,{children:[Object(r.jsx)(W,{ingridients:this.state.ingridients}),Object(r.jsx)($,{addIg:this.addIngridientHandler,removeIg:this.removeIngridient,disabled:e,price:this.state.totalPrice,orderDisabled:this.state.purchasable,orderBtn:this.orderPurchaseHandler})]}),a=Object(r.jsx)(ie,{ingridients:this.state.ingridients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(a=Object(r.jsx)(ue,{})),Object(r.jsxs)(h,{children:[Object(r.jsx)(ne,{show:this.state.purchasing,purchaseCancel:this.purchaseCancelHandler,children:a}),n]})}}]),n}(a.Component),oe),be=n(50),Oe=n(2),ge=n(51),me=n.n(ge),fe=function(e){return Object(r.jsxs)("div",{className:me.a.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"Hope we get fat together!"}),Object(r.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(r.jsx)(W,{ingridients:e.ingridients})}),Object(r.jsx)(ce,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(r.jsx)(ce,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},xe=n(52),ve=n.n(xe),_e=n(16),Ce=n.n(_e),ye=function(e){var t=null;switch(e.elementType){case"input":t=Object(r.jsx)("input",Object(A.a)(Object(A.a)({className:Ce.a.InputElement},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(r.jsx)("textarea",Object(A.a)(Object(A.a)({className:Ce.a.InputElement},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",{className:Ce.a.InputElement,value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{children:e.displayValue},e.value)}))});break;default:t=Object(r.jsx)("input",Object(A.a)(Object(A.a)({className:Ce.a.InputElement},e.elementConfig),{},{value:e.value}))}return Object(r.jsxs)("div",{className:Ce.a.Input,children:[Object(r.jsx)("label",{className:Ce.a.Label,children:e.label}),t]})},ke=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name..."},value:""},address:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name..."},value:""},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:""},zipcode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP code"},value:""},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:""},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:""},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:""}},loading:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingridients:e.props.ingridients,price:e.props.price,orderData:n};oe.post("/orders.json",a).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})}))},e.inputChangedHandler=function(t,n){var r=Object(A.a)({},e.state.orderForm),a=Object(A.a)({},r[n]);a.value=t.target.value,r[n]=a,e.setState({orderForm:r})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(r.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(r.jsx)(ye,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(r.jsx)(ce,{btnType:"Success",children:"ORDER"})]});return this.state.loading&&(a=Object(r.jsx)(ue,{})),Object(r.jsxs)("div",{className:ve.a.ContactData,children:[Object(r.jsx)("h4",{children:"Enter your contact data:"}),a]})}}]),n}(a.Component),Se=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingridients:null,totalPrice:0},e.checkoutCancelled=function(){e.props.history.goBack()},e.checkoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(l.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),n={},r=0,a=Object(be.a)(t.entries());try{for(a.s();!(e=a.n()).done;){var c=e.value;"price"===c[0]?r=c[1]:n[c[0]]=+c[1]}}catch(i){a.e(i)}finally{a.f()}this.setState({ingridients:n,totalPrice:r})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(fe,{ingridients:this.state.ingridients,checkoutCancelled:this.checkoutCancelled,checkoutContinued:this.checkoutContinued}),Object(r.jsx)(Oe.a,{path:this.props.match.url+"/contact-data",render:function(t){return Object(r.jsx)(ke,Object(A.a)({ingridients:e.state.ingridients,price:e.state.totalPrice},t))}})]})}}]),n}(a.Component),Be=n(53),Ne=n.n(Be),Ie=function(e){var t=[];for(var n in e.ingridients)t.push({name:n,amount:e.ingridients[n]});var a=t.map((function(e){return Object(r.jsxs)("span",{style:{display:"inline-block",textTransform:"capitalize",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(r.jsxs)("div",{className:Ne.a.Order,children:[Object(r.jsxs)("p",{children:["Ingredients: ",a]}),Object(r.jsxs)("p",{children:["Price: ",Object(r.jsxs)("strong",{children:["USD ",Number.parseFloat(e.price).toFixed(2)]})]})]})},we=je(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={orders:[],loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;oe.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(Object(A.a)(Object(A.a)({},t.data[r]),{},{id:r}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return console.log(this.state.orders),Object(r.jsx)("div",{children:this.state.orders.map((function(e){return Object(r.jsx)(Ie,{ingridients:e.ingridients,price:e.price},e.id)})).reverse()})}}]),n}(a.Component),oe),De=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(M,{children:Object(r.jsxs)(Oe.c,{children:[Object(r.jsx)(Oe.a,{path:"/checkout",component:Se}),Object(r.jsx)(Oe.a,{path:"/orders",component:we}),Object(r.jsx)(Oe.a,{path:"/",component:he})]})})})}}]),n}(a.Component),Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},Le=Object(r.jsx)(x.a,{children:Object(r.jsx)(De,{})});s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Le}),document.getElementById("root")),Te()}},[[83,1,2]]]);
//# sourceMappingURL=main.c36d1226.chunk.js.map