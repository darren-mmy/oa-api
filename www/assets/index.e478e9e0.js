var e,t=Object.defineProperty,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(e,l,n)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,s=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&r(e,s,t[s]);if(l)for(var s of l(t))a.call(t,s)&&r(e,s,t[s]);return e};import{a as i,b as o,r as c,c as u,d,u as f}from"./index.e0281189.js";import{v,G as m,S as p,d as h,g,r as b,i as y,c as w,o as x,h as k,p as C,f as S,n as _,u as z,W as O,l as j,m as F,A as B,B as L,q as M,t as E,X as T,C as I,Y as H,F as R,H as U,I as W,U as P,V as N,Z as K,e as A,y as D,z as X,b as q,M as $,$ as V,a0 as Y,a1 as G,a2 as J}from"./ant-design-vue.8fffeee5.js";import Z from"./profile.717674ce.js";var Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};function ee(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var te=function(e,t){var l=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),n.forEach((function(t){ee(e,t,l[t])}))}return e}({},e,t.attrs);return v(p,m(l,{icon:Q}),null)};te.displayName="MenuFoldOutlined",te.inheritAttrs=!1;var le=te,ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};function ae(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var re=function(e,t){var l=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),n.forEach((function(t){ae(e,t,l[t])}))}return e}({},e,t.attrs);return v(p,m(l,{icon:ne}),null)};re.displayName="MenuUnfoldOutlined",re.inheritAttrs=!1;var se=re;const ie="undefined"==typeof window;function oe(e){for(const t of e){const e=t.target.__resizeListeners__||[];e.length&&e.forEach((e=>{e()}))}}const ce={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function ue({move:e,size:t,bar:l}){const n={},a=`translate${l.axis}(${e}%)`;return n[l.size]=t,n.transform=a,n.msTransform=a,n.webkitTransform=a,n}function de(e,t,l){e&&t&&l&&e.addEventListener(t,l,!1)}function fe(e,t,l){e&&t&&l&&e.removeEventListener(t,l,!1)}function ve(e,t){ie||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ResizeObserver(oe),e.__ro__.observe(e)),e.__resizeListeners__.push(t))}function me(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}var pe=h({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const t=g(),l=b(),n=y("scroll-bar-wrap",{}),a=w((()=>ce[e.vertical?"vertical":"horizontal"])),r=b({}),s=b(),i=e=>{e.ctrlKey||2===e.button||(c(e),r.value[a.value.axis]=e.currentTarget[a.value.offset]-(e[a.value.client]-e.currentTarget.getBoundingClientRect()[a.value.direction]))},o=e=>{var r;const s=100*(Math.abs(e.target.getBoundingClientRect()[a.value.direction]-e[a.value.client])-l.value[a.value.offset]/2)/(null==(r=null==t?void 0:t.vnode.el)?void 0:r[a.value.offset]);n.value[a.value.scroll]=s*n.value[a.value.scrollSize]/100},c=e=>{e.stopImmediatePropagation(),s.value=!0,de(document,"mousemove",u),de(document,"mouseup",d),document.onselectstart=()=>!1},u=e=>{var i,o;if(!1===s.value)return;const c=r.value[a.value.axis];if(!c)return;const u=100*(-1*((null==(i=null==t?void 0:t.vnode.el)?void 0:i.getBoundingClientRect()[a.value.direction])-e[a.value.client])-(l.value[a.value.offset]-c))/(null==(o=null==t?void 0:t.vnode.el)?void 0:o[a.value.offset]);n.value[a.value.scroll]=u*n.value[a.value.scrollSize]/100};function d(){s.value=!1,r.value[a.value.axis]=0,fe(document,"mousemove",u),document.onselectstart=null}return x((()=>{fe(document,"mouseup",d)})),()=>k("div",{class:["scrollbar__bar","is-"+a.value.key],onMousedown:o},k("div",{ref:l,class:"scrollbar__thumb",onMousedown:i,style:ue({size:e.size,move:e.move,bar:a.value})}))}});const{scrollbar:he}={table:{fetchSetting:{pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"},pageSizeOptions:["10","50","80","100"],defaultPageSize:10,defaultSortFn:e=>{const{field:t,order:l}=e;return{field:t,order:l}},defaultFilterFn:e=>e},scrollbar:{native:!1}};var ge=h({name:"Scrollbar",components:{Bar:pe},props:{native:{type:Boolean,default:null!=(e=null==he?void 0:he.native)&&e},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const t=b("0"),l=b("0"),n=b(0),a=b(0),r=b(),s=b();C("scroll-bar-wrap",r);const i=w((()=>Array.isArray(e.wrapStyle)?function(e){const t={};for(let a=0;a<e.length;a++)e[a]&&(l=t,n=e[a],Object.assign(l,n));var l,n;return t}(e.wrapStyle):e.wrapStyle)),o=()=>{if(!z(r))return;const e=100*z(r).clientHeight/z(r).scrollHeight,n=100*z(r).clientWidth/z(r).scrollWidth;l.value=e<100?e+"%":"",t.value=n<100?n+"%":""};return S((()=>{e.native||(_(o),e.noresize||(ve(z(s),o),ve(z(r),o),addEventListener("resize",o)))})),O((()=>{e.native||e.noresize||(me(z(s),o),me(z(r),o),removeEventListener("resize",o))})),{moveX:n,moveY:a,sizeWidth:t,sizeHeight:l,style:i,wrap:r,resize:s,update:o,handleScroll:()=>{e.native||(a.value=100*z(r).scrollTop/z(r).clientHeight,n.value=100*z(r).scrollLeft/z(r).clientWidth)}}}});const be={class:"scrollbar"};ge.render=function(e,t,l,n,a,r){const s=j("bar");return F(),B("div",be,[L("div",{ref:"wrap",class:T([e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"]),style:I(e.style),onScroll:t[0]||(t[0]=(...t)=>e.handleScroll&&e.handleScroll(...t))},[(F(),M(H(e.tag),{ref:"resize",class:T(["scrollbar__view",e.viewClass]),style:I(e.viewStyle)},{default:E((()=>[W(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?U("",!0):(F(),B(R,{key:0},[v(s,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),v(s,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])};var ye=h({name:"SidebarItem",props:{item:{type:Object,required:!0}},setup:()=>({})});const we={key:0,class:"anticon anticon-pie-chart"},xe={key:0,class:"anticon anticon-pie-chart"};ye.render=function(e,t,l,n,a,r){var s,i;const o=j("svg-icon"),c=j("SidebarItem",!0),u=j("a-sub-menu"),d=j("a-menu-item");return F(),B(R,null,[e.item.children&&e.item.children.length&&!e.item.hidden?(F(),M(u,{key:null==(s=e.item)?void 0:s.name},{icon:E((()=>{var t,l,n,a;return[(null==(l=null==(t=e.item)?void 0:t.meta)?void 0:l.icon)?(F(),B("span",we,[v(o,{name:null==(a=null==(n=e.item)?void 0:n.meta)?void 0:a.icon},null,8,["name"])])):U("",!0)]})),title:E((()=>{var t,l;return[P(N(null==(l=null==(t=e.item)?void 0:t.meta)?void 0:l.title),1)]})),default:E((()=>[(F(!0),B(R,null,K(e.item.children,(e=>(F(),M(c,{key:e.name,item:e},null,8,["item"])))),128))])),_:1})):U("",!0),e.item.children&&e.item.children.length||e.item.hidden?U("",!0):(F(),M(d,{key:null==(i=e.item)?void 0:i.name},{default:E((()=>{var t,l,n,a,r,s;return[(null==(l=null==(t=e.item)?void 0:t.meta)?void 0:l.icon)?(F(),B("span",xe,[v(o,{name:null==(a=null==(n=e.item)?void 0:n.meta)?void 0:a.icon},null,8,["name"])])):U("",!0),L("span",null,N(null==(s=null==(r=e.item)?void 0:r.meta)?void 0:s.title),1)]})),_:1}))],64)};var ke=h({components:{Scrollbar:ge,SidebarItem:ye},setup(){const e=i(),t=w((()=>e.isMobile)),l=w((()=>e.sidebarStatus)),n=w((()=>e.sideBarConfig)),a=w((()=>e.collapsed)),r=w((()=>u().sidebarRouters)),s=o(),d=b([""]),f=b([""]);d.value=[s.name],f.value=[s.matched[0].name],A((()=>{d.value=[s.name],f.value=[s.matched[0].name]}));return{isMobile:t,sidebarStatus:l,sideBarConfig:n,collapsed:a,sidebarRouters:r,changeMode:t=>{e.sideBarConfig.mode=t?"vertical":"inline"},changeTheme:t=>{e.sideBarConfig.theme=t?"dark":"light"},sidebarStyle:w((()=>{const t={};return e.isMobile?(t.width=e.sideBarConfig.width,e.sidebarStatus?t.transform="translateX(0px)":t.transform=`translateX(-${e.sideBarConfig.width}px)`):(t.transform="translateX(0px)",e.collapsed?t.width="80px":t.width=e.sideBarConfig.width+"px"),"dark"===e.sideBarConfig.theme?t.background="#001529":(t.background="#ffffff",t.borderRight="1px solid #f0f0f0"),t})),handleClick:({key:e})=>{c.push({name:e})},selectedKeys:d,openKeys:f}}});D("data-v-79ccae42");const Ce={key:0,class:"\r\n          flex\r\n          items-center\r\n          justify-center\r\n          text-red-200 text-size-20px text-center\r\n          h-50px\r\n        "};X(),ke.render=function(e,t,l,n,a,r){const s=j("SidebarItem"),i=j("a-menu"),o=j("Scrollbar");return F(),B("div",{class:"sidebar-container",style:I(e.sidebarStyle)},[v(o,null,{default:E((()=>[e.sideBarConfig.showLogo?(F(),B("h2",Ce," LOGO ")):U("",!0),v(i,{style:{width:"100%"},"inline-collapsed":e.collapsed,mode:e.sideBarConfig.mode,theme:e.sideBarConfig.theme,openKeys:e.openKeys,"onUpdate:openKeys":t[0]||(t[0]=t=>e.openKeys=t),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=t=>e.selectedKeys=t),onClick:e.handleClick},{default:E((()=>[(F(!0),B(R,null,K(e.sidebarRouters,(e=>(F(),M(s,{key:e.name,item:e},null,8,["item"])))),128))])),_:1},8,["inline-collapsed","mode","theme","openKeys","selectedKeys","onClick"])])),_:1})],4)},ke.__scopeId="data-v-79ccae42";var Se={sideTheme:"theme-dark",showSettings:!1,topNav:!1,tagsView:!0,fixedHeader:!0,sidebarLogo:!1,version:"1.0.1",companyName:"版权所有 ©2021 xxx公司",title:"xxx - 员工管理系统"};const _e="undefined"!=typeof window,ze=()=>{};const Oe=_e?window:void 0,je=_e?window.document:void 0;function Fe(...e){let t,l,n,a;if("string"==typeof e[0]?([l,n,a]=e,t=Oe):[t,l,n,a]=e,!t)return ze;let r=ze;const s=q((()=>z(t)),(e=>{r(),e&&(e.addEventListener(l,n,a),r=()=>{e.removeEventListener(l,n,a),r=ze})}),{immediate:!0,flush:"post"}),i=()=>{s(),r()};var o;return o=i,g()&&x(o),i}_e&&window.navigator;const Be=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];var Le,Me;(Me=Le||(Le={})).UP="UP",Me.RIGHT="RIGHT",Me.DOWN="DOWN",Me.LEFT="LEFT",Me.NONE="NONE";var Ee=h({components:{MenuFoldOutlined:le,MenuUnfoldOutlined:se},setup(){const e=b("right"),t=b(!1),l=d,n=i(),a=w((()=>n.collapsed)),r=w((()=>n.headerConfig)),s=w((()=>n.sideBarConfig)),o=f(),u=w((()=>o.userInfo)),{toggle:v,isFullscreen:m}=function(e,t={}){const{document:l=je}=t,n=b(e||(null==l?void 0:l.querySelector("html"))),a=b(!1);let r=!1,s=Be[0];if(l){for(const v of Be)if(v[1]in l){s=v,r=!0;break}}else r=!1;const[i,o,c,,u]=s;async function d(){r&&((null==l?void 0:l[c])&&await l[o](),a.value=!1)}async function f(){r&&(await d(),n.value&&(await n.value[i](),a.value=!0))}return l&&Fe(l,u,(()=>{a.value=!!(null==l?void 0:l[c])}),!1),{isSupported:r,isFullscreen:a,enter:f,exit:d,toggle:async function(){a.value?await d():await f()}}}();return{collapsed:a,headerConfig:r,sideBarConfig:s,userInfo:u,toggleCollapsed:()=>{n.isMobile?n.setSidebar(!n.sidebarStatus):n.collapsed=!n.collapsed},avatar:Z,baseImgUrl:l,settings:Se,handleMenuClick:async e=>{if(console.log(e),"1"===e.key&&c.push("/user/profile"),"3"===e.key){0===(await o.Logout()).code&&(c.replace("/redirect/login"),window.location.reload())}},handleLocaleClick:e=>{console.log(e.key),n.locale=e.key,localStorage.setItem("locale",e.key),window.location.reload()},toggle:v,isFullscreen:m,placement:e,openSetting:t,showDrawer:()=>{t.value=!0},onClose:()=>{t.value=!1},handleSaveSetting:()=>{const e={sideBarConfig:n.sideBarConfig,headerConfig:n.headerConfig};localStorage.setItem("sysSettings",JSON.stringify(e)),$.success("保存成功"),t.value=!1},handleResetSetting:()=>{localStorage.removeItem("sysSettings"),window.location.reload()}}}});D("data-v-63565eae");const Te={class:"navbar flex justify-between items-center h-50px"},Ie={class:"flex items-center"},He={key:0,class:"ml-2 text-size-18px"},Re={class:"flex"},Ue={key:0,class:"\r\n          flex\r\n          items-center\r\n          justify-center\r\n          cursor-pointer\r\n          h-[50px]\r\n          p-3\r\n          hover:bg-[rgba(0,0,0,0.05)]\r\n        "},We=P("搜索"),Pe=P("全屏"),Ne=P("退出全屏"),Ke=L("span",null,"中文",-1),Ae=L("span",null,"English",-1),De=["src"],Xe={class:"text-size-[18px] text-gray-600"},qe=L("span",null,"个人中心",-1),$e=P("退出登录"),Ve=P("设置"),Ye=P("侧边栏"),Ge={class:"flex justify-between items-center mb-3"},Je=L("span",null,"是否显示logo",-1),Ze={class:"flex justify-between items-center mb-3"},Qe=L("span",null,"菜单类型",-1),et=P("inline"),tt=P("vertical"),lt={class:"flex justify-between items-center mb-3"},nt=L("span",null,"菜单主题",-1),at=P("dark"),rt=P("light"),st={class:"flex justify-between items-center mb-3"},it=L("span",null,"菜单宽度",-1),ot=P("头部"),ct={class:"flex justify-between items-center mb-3"},ut=L("span",null,"是否显示标题",-1),dt={class:"flex justify-between items-center mb-3"},ft=L("span",null,"是否显示搜索",-1),vt={class:"flex justify-between items-center mb-3"},mt=L("span",null,"是否显示全屏",-1),pt={class:"flex justify-between items-center mb-3"},ht=L("span",null,"是否显示语言",-1),gt={class:"flex justify-between items-center mb-3"},bt=L("span",null,"是否显示tabs",-1),yt={class:"flex justify-center items-center mb-3"},wt=P(" 保存设置 "),xt=P("重置");X(),Ee.render=function(e,t,l,n,a,r){const s=j("MenuUnfoldOutlined"),i=j("MenuFoldOutlined"),o=j("svg-icon"),c=j("a-tooltip"),u=j("a-menu-item"),d=j("a-menu"),f=j("a-dropdown"),m=j("a-menu-divider"),p=j("a-divider"),h=j("a-switch"),g=j("a-select-option"),b=j("a-select"),y=j("a-input-number"),w=j("a-button"),x=j("a-drawer");return F(),B("div",Te,[L("div",Ie,[L("div",{class:"\r\n          flex\r\n          text-size-20px\r\n          w-50px\r\n          h-50px\r\n          justify-center\r\n          items-center\r\n          cursor-pointer\r\n          hover:bg-[rgba(0,0,0,0.05)]\r\n        ",onClick:t[0]||(t[0]=(...t)=>e.toggleCollapsed&&e.toggleCollapsed(...t))},[e.collapsed?(F(),M(s,{key:0})):(F(),M(i,{key:1}))]),e.headerConfig.showTitle?(F(),B("p",He,N(e.settings.title),1)):U("",!0)]),L("div",Re,[e.headerConfig.showSearch?(F(),B("div",Ue,[v(c,null,{title:E((()=>[We])),default:E((()=>[v(o,{name:"search",size:"20px"})])),_:1})])):U("",!0),e.headerConfig.showFullScreen?(F(),B("div",{key:1,onClick:t[1]||(t[1]=(...t)=>e.toggle&&e.toggle(...t)),class:"\r\n          flex\r\n          items-center\r\n          justify-center\r\n          cursor-pointer\r\n          h-[50px]\r\n          p-3\r\n          hover:bg-[rgba(0,0,0,0.05)]\r\n        "},[e.isFullscreen?(F(),M(c,{key:1},{title:E((()=>[Ne])),default:E((()=>[v(o,{name:"exitFullScreen",size:"20px"})])),_:1})):(F(),M(c,{key:0},{title:E((()=>[Pe])),default:E((()=>[v(o,{name:"fullScreen",size:"20px"})])),_:1}))])):U("",!0),e.headerConfig.showLocale?(F(),M(f,{key:2,trigger:["click"],class:"\r\n          flex\r\n          items-center\r\n          justify-center\r\n          cursor-pointer\r\n          h-[50px]\r\n          p-3\r\n          hover:bg-[rgba(0,0,0,0.05)]\r\n        "},{overlay:E((()=>[v(d,{onClick:e.handleLocaleClick},{default:E((()=>[v(u,{key:"zh-cn"},{default:E((()=>[Ke])),_:1}),v(u,{key:"en"},{default:E((()=>[Ae])),_:1})])),_:1},8,["onClick"])])),default:E((()=>[L("a",{class:"flex items-center",onClick:t[2]||(t[2]=V((()=>{}),["prevent"]))},[v(o,{name:"language",size:"20px"})])])),_:1})):U("",!0),v(f,{class:"\r\n          flex\r\n          items-center\r\n          justify-center\r\n          cursor-pointer\r\n          h-[50px]\r\n          p-3\r\n          hover:bg-[rgba(0,0,0,0.05)]\r\n        "},{overlay:E((()=>[v(d,{onClick:e.handleMenuClick},{default:E((()=>[v(u,{key:"1"},{default:E((()=>[qe])),_:1}),v(m),v(u,{key:"3"},{default:E((()=>[$e])),_:1})])),_:1},8,["onClick"])])),default:E((()=>[L("a",{class:"flex items-center",onClick:t[3]||(t[3]=V((()=>{}),["prevent"]))},[L("img",{src:e.userInfo.avatar?e.baseImgUrl+e.userInfo.avatar:e.avatar,class:"w-8 h-8 rounded-full mr-2",alt:""},null,8,De),L("span",Xe,N(e.userInfo.nickName),1)])])),_:1}),L("div",{onClick:t[4]||(t[4]=(...t)=>e.showDrawer&&e.showDrawer(...t)),class:"\r\n          flex\r\n          items-center\r\n          justify-center\r\n          cursor-pointer\r\n          h-[50px]\r\n          p-3\r\n          hover:bg-[rgba(0,0,0,0.05)]\r\n        "},[v(c,null,{title:E((()=>[Ve])),default:E((()=>[v(o,{name:"setting",size:"20px"})])),_:1})]),v(x,{title:"系统配置",placement:e.placement,maskClosable:!1,visible:e.openSetting,onClose:e.onClose},{default:E((()=>[v(p,null,{default:E((()=>[Ye])),_:1}),L("div",Ge,[Je,v(h,{checked:e.sideBarConfig.showLogo,"onUpdate:checked":t[5]||(t[5]=t=>e.sideBarConfig.showLogo=t)},null,8,["checked"])]),L("div",Ze,[Qe,v(b,{value:e.sideBarConfig.mode,"onUpdate:value":t[6]||(t[6]=t=>e.sideBarConfig.mode=t),style:{width:"120px"}},{default:E((()=>[v(g,{value:"inline"},{default:E((()=>[et])),_:1}),v(g,{value:"vertical"},{default:E((()=>[tt])),_:1})])),_:1},8,["value"])]),L("div",lt,[nt,v(b,{value:e.sideBarConfig.theme,"onUpdate:value":t[7]||(t[7]=t=>e.sideBarConfig.theme=t),style:{width:"120px"}},{default:E((()=>[v(g,{value:"dark"},{default:E((()=>[at])),_:1}),v(g,{value:"light"},{default:E((()=>[rt])),_:1})])),_:1},8,["value"])]),L("div",st,[it,v(y,{value:e.sideBarConfig.width,"onUpdate:value":t[8]||(t[8]=t=>e.sideBarConfig.width=t),min:200,max:400},null,8,["value"])]),v(p,null,{default:E((()=>[ot])),_:1}),L("div",ct,[ut,v(h,{checked:e.headerConfig.showTitle,"onUpdate:checked":t[9]||(t[9]=t=>e.headerConfig.showTitle=t)},null,8,["checked"])]),L("div",dt,[ft,v(h,{checked:e.headerConfig.showSearch,"onUpdate:checked":t[10]||(t[10]=t=>e.headerConfig.showSearch=t)},null,8,["checked"])]),L("div",vt,[mt,v(h,{checked:e.headerConfig.showFullScreen,"onUpdate:checked":t[11]||(t[11]=t=>e.headerConfig.showFullScreen=t)},null,8,["checked"])]),L("div",pt,[ht,v(h,{checked:e.headerConfig.showLocale,"onUpdate:checked":t[12]||(t[12]=t=>e.headerConfig.showLocale=t)},null,8,["checked"])]),L("div",gt,[bt,v(h,{checked:e.headerConfig.showTabs,"onUpdate:checked":t[13]||(t[13]=t=>e.headerConfig.showTabs=t)},null,8,["checked"])]),v(p),L("div",yt,[v(w,{onClick:e.handleSaveSetting,type:"primary",class:"mr-3"},{default:E((()=>[wt])),_:1},8,["onClick"]),v(w,{onClick:e.handleResetSetting},{default:E((()=>[xt])),_:1},8,["onClick"])])])),_:1},8,["placement","visible","onClose"])])])},Ee.__scopeId="data-v-63565eae";var kt=h({setup(){const e=b(0),t=b(null),l=b(null),n=o(),a=i(),r=w((()=>a.tabs));q(n,(()=>{var e;(null==(e=n.meta)?void 0:e.title)&&(a.tabs.map((e=>e.name)).includes(n.name)||a.tabs.push(s({},n)))}));const u=b("");u.value=n.name,A((()=>{u.value=n.name}));return S((()=>{a.tabs.push(s({},n))})),{tabs:r,handleLeftScroll:()=>{var n;t.value.clientWidth<l.value.clientWidth||(e.value+=500,e.value>=0&&(e.value=0),(null==(n=t.value)?void 0:n.style).transform=`translateX(${e.value}px)`)},handleRightScroll:()=>{var n;t.value.clientWidth<l.value.clientWidth||(e.value-=500,Math.abs(e.value)>=t.value.clientWidth-l.value.clientWidth&&(e.value=-(t.value.clientWidth-l.value.clientWidth)),(null==(n=t.value)?void 0:n.style).transform=`translateX(${e.value}px)`)},tabsView:t,tabsBox:l,handleCloseTab:e=>{1!==a.tabs.length&&(a.tabs[e].name===u.value?(a.tabs.splice(e,1),c.push({name:a.tabs[0].name})):a.tabs.splice(e,1))},go:e=>{c.push({path:e.path})},active:u}}});D("data-v-1b153e04");const Ct={class:"tabs flex"},St={class:"h-30px overflow-x-hidden flex-1",ref:"tabsBox"},_t={class:"tabs-content h-30px box-border flex flex-nowrap items-center",ref:"tabsView"},zt=["onClick"],Ot=["onClick"],jt={key:1,class:"spot"};X(),kt.render=function(e,t,l,n,a,r){const s=j("svg-icon");return F(),B("div",Ct,[L("span",{class:"flex w-30px justify-center items-center cursor-pointer",onClick:t[0]||(t[0]=(...t)=>e.handleLeftScroll&&e.handleLeftScroll(...t))},[v(s,{name:"tabs-left",class:"hover:text-[#333333] text-gray-400"})]),L("div",St,[L("ul",_t,[(F(!0),B(R,null,K(e.tabs,((t,l)=>(F(),B("li",{class:T(["\r\n            h-24px\r\n            box-border\r\n            border-1 border-[#d8dce5]\r\n            pr-5\r\n            pl-2\r\n            mr-1\r\n            whitespace-nowrap\r\n            relative\r\n            cursor-pointer\r\n            hover:text-[#1890ff]\r\n            rounded-[2px]\r\n          ",e.active===t.name?"tabActive":""]),key:l,onClick:l=>e.go(t)},[L("span",null,N(t.meta.title),1),1!==e.tabs.length?(F(),B("span",{key:0,class:"closeTab",onClick:V((t=>e.handleCloseTab(l)),["stop"])},[v(s,{name:"close",size:"14px"})],8,Ot)):(F(),B("span",jt))],10,zt)))),128))],512)],512),L("span",{class:"flex w-30px justify-center items-center cursor-pointer",onClick:t[1]||(t[1]=(...t)=>e.handleRightScroll&&e.handleRightScroll(...t))},[v(s,{name:"tabs-right",class:"hover:text-[#333333] text-gray-400"})])])},kt.__scopeId="data-v-1b153e04";var Ft=h({components:{Sidebar:ke,Navbar:Ee,Tabs:kt},setup(){const e=i(),t=w((()=>e.isMobile)),l=w((()=>e.sidebarStatus)),n=w((()=>e.sideBarConfig)),a=w((()=>e.collapsed)),r=w((()=>e.headerConfig));return{toggleDrawer:()=>{e.isMobile&&e.setSidebar(!e.sidebarStatus)},toggleCollapsed:()=>{e.isMobile?e.setSidebar(!e.sidebarStatus):e.collapsed=!e.collapsed},headerStyle:w((()=>{console.log(e.isMobile);let t={};return t=e.isMobile?{width:"calc(100%)"}:e.collapsed?{width:"calc(100% - 80px)"}:{width:`calc(100% - ${e.sideBarConfig.width}px)`},t})),isMobile:t,sidebarStatus:l,collapsed:a,sideBarConfig:n,headerConfig:r}}});Ft.render=function(e,t,l,n,a,r){const s=j("sidebar"),i=j("navbar"),o=j("Tabs"),c=j("router-view");return F(),B(R,null,[(F(),M(Y,{to:"body"},[e.isMobile&&e.sidebarStatus?(F(),B("div",{key:0,onClick:t[0]||(t[0]=(...t)=>e.toggleDrawer&&e.toggleDrawer(...t)),class:"drawer-bg"})):U("",!0)])),v(s),L("div",{class:"main-container overflow-x-hidden",style:I({marginLeft:e.isMobile?"0px":e.collapsed?"80px":e.sideBarConfig.width+"px"})},[L("div",{class:"header",style:I(e.headerStyle)},[v(i),e.headerConfig.showTabs?(F(),M(o,{key:0})):U("",!0)],4),L("div",{class:"main-container-content",style:I({paddingTop:e.headerConfig.showTabs?"80px":"50px"})},[v(c,null,{default:E((({Component:e})=>[(F(),M(J,null,[v(G,{name:"fade-transform",mode:"out-in"},{default:E((()=>[(F(),M(H(e)))])),_:2},1024)],1024))])),_:1})],4)],4)],64)},Ft.__scopeId="data-v-440de1bc";export{Ft as default};
