var he=Object.defineProperty;var G=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var Z=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&Z(e,n,t[n]);if(G)for(var n of G(t))be.call(t,n)&&Z(e,n,t[n]);return e};import{k as l,G as Q,Q as J,d as E,g as ee,r as S,i as ye,c as C,o as te,h as ne,p as _e,f as se,n as we,u as $,U as Se,q as g,t as h,y as w,z as u,v as F,x as d,E as Ce,V as A,A as j,W as oe,F as I,D as L,S as M,R as y,X as N,e as le,b as ae,M as ke,Y as D,Z as ze,$ as $e,a0 as Fe,a1 as Me,a2 as Oe}from"./ant-design-vue.27440fdb.js";import{_ as U,a as H,b as ie,c as Be,r as P,u as Le,d as Te}from"./index.da4ff793.js";import{d as Ee}from"./profile.33bddddf.js";import{u as je}from"./useI18n.25a437e0.js";var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},Ue=Ie;function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),o.forEach(function(s){Pe(e,s,n[s])})}return e}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(t,n){var o=Re({},t,n.attrs);return l(J,Q(o,{icon:Ue}),null)};x.displayName="MenuFoldOutlined";x.inheritAttrs=!1;var He=x,We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},Ae=We;function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),o.forEach(function(s){De(e,s,n[s])})}return e}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(t,n){var o=Ne({},t,n.attrs);return l(J,Q(o,{icon:Ae}),null)};X.displayName="MenuUnfoldOutlined";X.inheritAttrs=!1;var xe=X;const Xe=typeof window=="undefined";function Ke(e){for(const t of e){const n=t.target.__resizeListeners__||[];n.length&&n.forEach(o=>{o()})}}const Ve={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function qe({move:e,size:t,bar:n}){const o={},s=`translate${n.axis}(${e}%)`;return o[n.size]=t,o.transform=s,o.msTransform=s,o.webkitTransform=s,o}function Ye(e,t){return Object.assign(e,t)}function Ge(e){const t={};for(let n=0;n<e.length;n++)e[n]&&Ye(t,e[n]);return t}function re(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}function ue(e,t,n){e&&t&&n&&e.removeEventListener(t,n,!1)}function ce(e,t){Xe||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ResizeObserver(Ke),e.__ro__.observe(e)),e.__resizeListeners__.push(t))}function de(e,t){!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}var Ze={table:{fetchSetting:{pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"},pageSizeOptions:["10","50","80","100"],defaultPageSize:10,defaultSortFn:e=>{const{field:t,order:n}=e;return{field:t,order:n}},defaultFilterFn:e=>e},scrollbar:{native:!1}},Qe=E({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const t=ee(),n=S(),o=ye("scroll-bar-wrap",{}),s=C(()=>Ve[e.vertical?"vertical":"horizontal"]),a=S({}),i=S(),p=m=>{m.ctrlKey||m.button===2||(r(m),a.value[s.value.axis]=m.currentTarget[s.value.offset]-(m[s.value.client]-m.currentTarget.getBoundingClientRect()[s.value.direction]))},c=m=>{var O;const f=Math.abs(m.target.getBoundingClientRect()[s.value.direction]-m[s.value.client]),k=n.value[s.value.offset]/2,z=(f-k)*100/((O=t==null?void 0:t.vnode.el)==null?void 0:O[s.value.offset]);o.value[s.value.scroll]=z*o.value[s.value.scrollSize]/100},r=m=>{m.stopImmediatePropagation(),i.value=!0,re(document,"mousemove",b),re(document,"mouseup",v),document.onselectstart=()=>!1},b=m=>{var T,R;if(i.value===!1)return;const f=a.value[s.value.axis];if(!f)return;const k=(((T=t==null?void 0:t.vnode.el)==null?void 0:T.getBoundingClientRect()[s.value.direction])-m[s.value.client])*-1,z=n.value[s.value.offset]-f,O=(k-z)*100/((R=t==null?void 0:t.vnode.el)==null?void 0:R[s.value.offset]);o.value[s.value.scroll]=O*o.value[s.value.scrollSize]/100};function v(){i.value=!1,a.value[s.value.axis]=0,ue(document,"mousemove",b),document.onselectstart=null}return te(()=>{ue(document,"mouseup",v)}),()=>ne("div",{class:["scrollbar__bar","is-"+s.value.key],onMousedown:c},ne("div",{ref:n,class:"scrollbar__thumb",onMousedown:p,style:qe({size:e.size,move:e.move,bar:s.value})}))}});const{scrollbar:K}=Ze;var ve;const Je=E({name:"Scrollbar",components:{Bar:Qe},props:{native:{type:Boolean,default:(ve=K==null?void 0:K.native)!=null?ve:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const t=S("0"),n=S("0"),o=S(0),s=S(0),a=S(),i=S();_e("scroll-bar-wrap",a);const p=C(()=>Array.isArray(e.wrapStyle)?Ge(e.wrapStyle):e.wrapStyle),c=()=>{e.native||(s.value=$(a).scrollTop*100/$(a).clientHeight,o.value=$(a).scrollLeft*100/$(a).clientWidth)},r=()=>{if(!$(a))return;const b=$(a).clientHeight*100/$(a).scrollHeight,v=$(a).clientWidth*100/$(a).scrollWidth;n.value=b<100?b+"%":"",t.value=v<100?v+"%":""};return se(()=>{e.native||(we(r),e.noresize||(ce($(i),r),ce($(a),r),addEventListener("resize",r)))}),Se(()=>{e.native||e.noresize||(de($(i),r),de($(a),r),removeEventListener("resize",r))}),{moveX:o,moveY:s,sizeWidth:t,sizeHeight:n,style:p,wrap:a,resize:i,update:r,handleScroll:c}}}),et={class:"scrollbar"};function tt(e,t,n,o,s,a){const i=g("bar");return h(),w("div",et,[u("div",{ref:"wrap",class:A([e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"]),style:j(e.style),onScroll:t[0]||(t[0]=(...p)=>e.handleScroll&&e.handleScroll(...p))},[(h(),F(oe(e.tag),{ref:"resize",class:A(["scrollbar__view",e.viewClass]),style:j(e.viewStyle)},{default:d(()=>[Ce(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?L("",!0):(h(),w(I,{key:0},[l(i,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),l(i,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])}var nt=U(Je,[["render",tt]]);const st=E({name:"SidebarItem",props:{item:{type:Object,required:!0}},setup(){return{}}}),ot={key:0,class:"anticon anticon-pie-chart"},lt={key:0,class:"anticon anticon-pie-chart"};function at(e,t,n,o,s,a){var b,v;const i=g("svg-icon"),p=g("SidebarItem",!0),c=g("a-sub-menu"),r=g("a-menu-item");return h(),w(I,null,[e.item.children&&e.item.children.length&&!e.item.hidden?(h(),F(c,{key:(b=e.item)==null?void 0:b.name},{icon:d(()=>{var m,f,k,z;return[((f=(m=e.item)==null?void 0:m.meta)==null?void 0:f.icon)?(h(),w("span",ot,[l(i,{name:(z=(k=e.item)==null?void 0:k.meta)==null?void 0:z.icon},null,8,["name"])])):L("",!0)]}),title:d(()=>{var m,f;return[M(y((f=(m=e.item)==null?void 0:m.meta)==null?void 0:f.title),1)]}),default:d(()=>[(h(!0),w(I,null,N(e.item.children,m=>(h(),F(p,{key:m.name,item:m},null,8,["item"]))),128))]),_:1})):L("",!0),!(e.item.children&&e.item.children.length)&&!e.item.hidden?(h(),F(r,{key:(v=e.item)==null?void 0:v.name},{default:d(()=>{var m,f,k,z,O,T;return[((f=(m=e.item)==null?void 0:m.meta)==null?void 0:f.icon)?(h(),w("span",lt,[l(i,{name:(z=(k=e.item)==null?void 0:k.meta)==null?void 0:z.icon},null,8,["name"])])):L("",!0),u("span",null,y((T=(O=e.item)==null?void 0:O.meta)==null?void 0:T.title),1)]}),_:1})):L("",!0)],64)}var it=U(st,[["render",at]]);const rt=E({components:{Scrollbar:nt,SidebarItem:it},setup(){const e=H(),t=C(()=>e.isMobile),n=C(()=>e.sidebarStatus),o=C(()=>e.sideBarConfig),s=C(()=>e.collapsed),a=C(()=>Be().sidebarRouters),i=ie(),p=S([""]),c=S([""]);p.value=[i.name],c.value=[i.matched[0].name],le(()=>{p.value=[i.name],c.value=[i.matched[0].name]});const r=f=>{e.sideBarConfig.mode=f?"vertical":"inline"},b=f=>{e.sideBarConfig.theme=f?"dark":"light"},v=C(()=>{const f={};return e.isMobile?(f.width=e.sideBarConfig.width,e.sidebarStatus?f.transform="translateX(0px)":f.transform=`translateX(-${e.sideBarConfig.width}px)`):(f.transform="translateX(0px)",e.collapsed?f.width="80px":f.width=e.sideBarConfig.width+"px"),e.sideBarConfig.theme==="dark"?f.background="#001529":(f.background="#ffffff",f.borderRight="1px solid #f0f0f0"),f});return{isMobile:t,sidebarStatus:n,sideBarConfig:o,collapsed:s,sidebarRouters:a,changeMode:r,changeTheme:b,sidebarStyle:v,handleClick:({key:f})=>{/^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/i.test(f)?window.location.href=f:P.push({name:f})},selectedKeys:p,openKeys:c}}}),ut={key:0,class:"flex items-center justify-center text-red-200 text-size-20px text-center h-50px"};function ct(e,t,n,o,s,a){const i=g("SidebarItem"),p=g("a-menu"),c=g("Scrollbar");return h(),w("div",{class:"sidebar-container",style:j(e.sidebarStyle)},[l(c,null,{default:d(()=>[e.sideBarConfig.showLogo?(h(),w("h2",ut," LOGO ")):L("",!0),l(p,{style:{width:"100%"},"inline-collapsed":e.collapsed,mode:e.sideBarConfig.mode,theme:e.sideBarConfig.theme,openKeys:e.openKeys,"onUpdate:openKeys":t[0]||(t[0]=r=>e.openKeys=r),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=r=>e.selectedKeys=r),onClick:e.handleClick},{default:d(()=>[(h(!0),w(I,null,N(e.sidebarRouters,r=>(h(),F(i,{key:r.name,item:r},null,8,["item"]))),128))]),_:1},8,["inline-collapsed","mode","theme","openKeys","selectedKeys","onClick"])]),_:1})],4)}var dt=U(rt,[["render",ct],["__scopeId","data-v-5b45f8ca"]]);const ft={sideTheme:"theme-dark",showSettings:!1,topNav:!1,tagsView:!0,fixedHeader:!0,sidebarLogo:!1,version:"1.0.0",companyName:"\u7248\u6743\u6240\u6709 \xA92021 xxx\u516C\u53F8",title:"xxx - \u5458\u5DE5\u7BA1\u7406\u7CFB\u7EDF"},V=typeof window!="undefined",pt=e=>typeof e=="string",q=()=>{};function mt(e){ee()&&te(e)}const vt=V?window:void 0,ht=V?window.document:void 0;V&&window.navigator;function gt(...e){let t,n,o,s;if(pt(e[0])?([n,o,s]=e,t=vt):[t,n,o,s]=e,!t)return q;let a=q;const i=ae(()=>$(t),c=>{a(),!!c&&(c.addEventListener(n,o,s),a=()=>{c.removeEventListener(n,o,s),a=q})},{immediate:!0,flush:"post"}),p=()=>{i(),a()};return mt(p),p}const fe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function bt(e,t={}){const{document:n=ht}=t,o=S(e||(n==null?void 0:n.querySelector("html"))),s=S(!1);let a=!1,i=fe[0];if(!n)a=!1;else for(const k of fe)if(k[1]in n){i=k,a=!0;break}const[p,c,r,,b]=i;async function v(){!a||((n==null?void 0:n[r])&&await n[c](),s.value=!1)}async function m(){!a||(await v(),o.value&&(await o.value[p](),s.value=!0))}async function f(){s.value?await v():await m()}return n&&gt(n,b,()=>{s.value=!!(n==null?void 0:n[r])},!1),{isSupported:a,isFullscreen:s,enter:m,exit:v,toggle:f}}var pe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(pe||(pe={}));const yt=E({components:{MenuFoldOutlined:He,MenuUnfoldOutlined:xe},setup(){const{t:e}=je(),t=S("right"),n=S(!1),o=Te,s=H(),a=C(()=>s.collapsed),i=C(()=>s.headerConfig),p=C(()=>s.sideBarConfig),c=Le(),r=C(()=>c.userInfo),{toggle:b,isFullscreen:v}=bt();return{t:e,collapsed:a,headerConfig:i,sideBarConfig:p,userInfo:r,toggleCollapsed:()=>{s.isMobile?s.setSidebar(!s.sidebarStatus):s.collapsed=!s.collapsed},avatar:Ee,baseImgUrl:o,settings:ft,handleMenuClick:async B=>{console.log(B),B.key==="1"&&P.push("/user/profile"),B.key==="3"&&(await c.Logout()).code===0&&(P.replace("/redirect/login"),window.location.reload())},handleLocaleClick:B=>{console.log(B.key),s.locale=B.key,localStorage.setItem("locale",B.key),window.location.reload()},toggle:b,isFullscreen:v,placement:t,openSetting:n,showDrawer:()=>{n.value=!0},onClose:()=>{n.value=!1},handleSaveSetting:()=>{const B={sideBarConfig:s.sideBarConfig,headerConfig:s.headerConfig};localStorage.setItem("sysSettings",JSON.stringify(B)),ke.success(e("sys.api.operationSuccess")),n.value=!1},handleResetSetting:()=>{localStorage.removeItem("sysSettings"),window.location.reload()}}}}),me=e=>(ze("data-v-206de608"),e=e(),$e(),e),_t={class:"navbar flex justify-between items-center h-50px"},wt={class:"flex items-center"},St={key:0,class:"ml-2 text-size-18px"},Ct={class:"flex"},kt={key:0,class:"flex items-center justify-center cursor-pointer h-[50px] p-3 hover:bg-[rgba(0,0,0,0.05)]"},zt=me(()=>u("span",null,"\u4E2D\u6587",-1)),$t=me(()=>u("span",null,"English",-1)),Ft=["src"],Mt={class:"text-size-[18px] text-gray-600"},Ot={class:"flex justify-between items-center mb-3"},Bt={class:"flex justify-between items-center mb-3"},Lt=M("inline"),Tt=M("vertical"),Et={class:"flex justify-between items-center mb-3"},jt=M("dark"),It=M("light"),Ut={class:"flex justify-between items-center mb-3"},Rt={class:"flex justify-between items-center mb-3"},Pt={class:"flex justify-between items-center mb-3"},Ht={class:"flex justify-between items-center mb-3"},Wt={class:"flex justify-between items-center mb-3"},At={class:"flex justify-between items-center mb-3"},Nt={class:"flex justify-center items-center mb-3"};function Dt(e,t,n,o,s,a){const i=g("MenuUnfoldOutlined"),p=g("MenuFoldOutlined"),c=g("svg-icon"),r=g("a-tooltip"),b=g("a-menu-item"),v=g("a-menu"),m=g("a-dropdown"),f=g("a-menu-divider"),k=g("a-divider"),z=g("a-switch"),O=g("a-select-option"),T=g("a-select"),R=g("a-input-number"),B=g("a-button"),Y=g("a-drawer");return h(),w("div",_t,[u("div",wt,[u("div",{class:"flex text-size-20px w-50px h-50px justify-center items-center cursor-pointer hover:bg-[rgba(0,0,0,0.05)]",onClick:t[0]||(t[0]=(..._)=>e.toggleCollapsed&&e.toggleCollapsed(..._))},[e.collapsed?(h(),F(i,{key:0})):(h(),F(p,{key:1}))]),e.headerConfig.showTitle?(h(),w("p",St,y(e.settings.title),1)):L("",!0)]),u("div",Ct,[e.headerConfig.showSearch?(h(),w("div",kt,[l(r,null,{title:d(()=>[M(y(e.t("common.searchText")),1)]),default:d(()=>[l(c,{name:"search",size:"20px"})]),_:1})])):L("",!0),e.headerConfig.showFullScreen?(h(),w("div",{key:1,onClick:t[1]||(t[1]=(..._)=>e.toggle&&e.toggle(..._)),class:"flex items-center justify-center cursor-pointer h-[50px] p-3 hover:bg-[rgba(0,0,0,0.05)]"},[e.isFullscreen?(h(),F(r,{key:1},{title:d(()=>[M(y(e.t("layout.header.tooltipExitFull")),1)]),default:d(()=>[l(c,{name:"exitFullScreen",size:"20px"})]),_:1})):(h(),F(r,{key:0},{title:d(()=>[M(y(e.t("layout.header.tooltipEntryFull")),1)]),default:d(()=>[l(c,{name:"fullScreen",size:"20px"})]),_:1}))])):L("",!0),e.headerConfig.showLocale?(h(),F(m,{key:2,trigger:["click"],class:"flex items-center justify-center cursor-pointer h-[50px] p-3 hover:bg-[rgba(0,0,0,0.05)]"},{overlay:d(()=>[l(v,{onClick:e.handleLocaleClick},{default:d(()=>[l(b,{key:"zh-cn"},{default:d(()=>[zt]),_:1}),l(b,{key:"en"},{default:d(()=>[$t]),_:1})]),_:1},8,["onClick"])]),default:d(()=>[u("a",{class:"flex items-center",onClick:t[2]||(t[2]=D(()=>{},["prevent"]))},[l(c,{name:"language",size:"20px"})])]),_:1})):L("",!0),l(m,{class:"flex items-center justify-center cursor-pointer h-[50px] p-3 hover:bg-[rgba(0,0,0,0.05)]"},{overlay:d(()=>[l(v,{onClick:e.handleMenuClick},{default:d(()=>[l(b,{key:"1"},{default:d(()=>[u("span",null,y(e.t("layout.header.personalCenter")),1)]),_:1}),l(f),l(b,{key:"3"},{default:d(()=>[M(y(e.t("layout.header.dropdownItemLoginOut")),1)]),_:1})]),_:1},8,["onClick"])]),default:d(()=>[u("a",{class:"flex items-center",onClick:t[3]||(t[3]=D(()=>{},["prevent"]))},[u("img",{src:e.userInfo.avatar?e.baseImgUrl+e.userInfo.avatar:e.avatar,class:"w-8 h-8 rounded-full mr-2",alt:""},null,8,Ft),u("span",Mt,y(e.userInfo.nickName),1)])]),_:1}),u("div",{onClick:t[4]||(t[4]=(..._)=>e.showDrawer&&e.showDrawer(..._)),class:"flex items-center justify-center cursor-pointer h-[50px] p-3 hover:bg-[rgba(0,0,0,0.05)]"},[l(r,null,{title:d(()=>[M(y(e.t("layout.header.setting")),1)]),default:d(()=>[l(c,{name:"setting",size:"20px"})]),_:1})]),l(Y,{width:"360px",title:e.t("layout.setting.systemConfiguration"),placement:e.placement,maskClosable:!1,visible:e.openSetting,onClose:e.onClose},{default:d(()=>[l(k,null,{default:d(()=>[M(y(e.t("layout.setting.sidebar")),1)]),_:1}),u("div",Ot,[u("span",null,y(e.t("layout.setting.showLogo")),1),l(z,{checked:e.sideBarConfig.showLogo,"onUpdate:checked":t[5]||(t[5]=_=>e.sideBarConfig.showLogo=_)},null,8,["checked"])]),u("div",Bt,[u("span",null,y(e.t("layout.setting.sidebarType")),1),l(T,{value:e.sideBarConfig.mode,"onUpdate:value":t[6]||(t[6]=_=>e.sideBarConfig.mode=_),style:{width:"120px"}},{default:d(()=>[l(O,{value:"inline"},{default:d(()=>[Lt]),_:1}),l(O,{value:"vertical"},{default:d(()=>[Tt]),_:1})]),_:1},8,["value"])]),u("div",Et,[u("span",null,y(e.t("layout.setting.sidebarTheme")),1),l(T,{value:e.sideBarConfig.theme,"onUpdate:value":t[7]||(t[7]=_=>e.sideBarConfig.theme=_),style:{width:"120px"}},{default:d(()=>[l(O,{value:"dark"},{default:d(()=>[jt]),_:1}),l(O,{value:"light"},{default:d(()=>[It]),_:1})]),_:1},8,["value"])]),u("div",Ut,[u("span",null,y(e.t("layout.setting.expandedMenuWidth")),1),l(R,{value:e.sideBarConfig.width,"onUpdate:value":t[8]||(t[8]=_=>e.sideBarConfig.width=_),min:200,max:400},null,8,["value"])]),l(k,null,{default:d(()=>[M(y(e.t("layout.setting.header")),1)]),_:1}),u("div",Rt,[u("span",null,y(e.t("layout.setting.showTitle")),1),l(z,{checked:e.headerConfig.showTitle,"onUpdate:checked":t[9]||(t[9]=_=>e.headerConfig.showTitle=_)},null,8,["checked"])]),u("div",Pt,[u("span",null,y(e.t("layout.setting.showSearch")),1),l(z,{checked:e.headerConfig.showSearch,"onUpdate:checked":t[10]||(t[10]=_=>e.headerConfig.showSearch=_)},null,8,["checked"])]),u("div",Ht,[u("span",null,y(e.t("layout.setting.showFull")),1),l(z,{checked:e.headerConfig.showFullScreen,"onUpdate:checked":t[11]||(t[11]=_=>e.headerConfig.showFullScreen=_)},null,8,["checked"])]),u("div",Wt,[u("span",null,y(e.t("layout.setting.showLanguage")),1),l(z,{checked:e.headerConfig.showLocale,"onUpdate:checked":t[12]||(t[12]=_=>e.headerConfig.showLocale=_)},null,8,["checked"])]),u("div",At,[u("span",null,y(e.t("layout.setting.showTabs")),1),l(z,{checked:e.headerConfig.showTabs,"onUpdate:checked":t[13]||(t[13]=_=>e.headerConfig.showTabs=_)},null,8,["checked"])]),l(k),u("div",Nt,[l(B,{onClick:e.handleSaveSetting,type:"primary",class:"mr-3"},{default:d(()=>[M(y(e.t("common.saveText")),1)]),_:1},8,["onClick"]),l(B,{onClick:e.handleResetSetting},{default:d(()=>[M(y(e.t("common.resetText")),1)]),_:1},8,["onClick"])])]),_:1},8,["title","placement","visible","onClose"])])])}var xt=U(yt,[["render",Dt],["__scopeId","data-v-206de608"]]);const Xt=E({setup(){const e=S(0),t=S(null),n=S(null),o=()=>{var v;t.value.clientWidth<n.value.clientWidth||(e.value+=500,e.value>=0&&(e.value=0),((v=t.value)==null?void 0:v.style).transform=`translateX(${e.value}px)`)},s=()=>{var v;t.value.clientWidth<n.value.clientWidth||(e.value-=500,Math.abs(e.value)>=t.value.clientWidth-n.value.clientWidth&&(e.value=-(t.value.clientWidth-n.value.clientWidth)),((v=t.value)==null?void 0:v.style).transform=`translateX(${e.value}px)`)},a=ie(),i=H(),p=C(()=>i.tabs);ae(a,()=>{var v;((v=a.meta)==null?void 0:v.title)&&(i.tabs.map(m=>m.name).includes(a.name)||i.tabs.push(W({},a)))});const c=S("");c.value=a.name,le(()=>{c.value=a.name});const r=v=>{i.tabs.length!==1&&(i.tabs[v].name===c.value?(i.tabs.splice(v,1),P.push({name:i.tabs[0].name})):i.tabs.splice(v,1))},b=v=>{P.push({path:v.path})};return se(()=>{i.tabs.push(W({},a))}),{tabs:p,handleLeftScroll:o,handleRightScroll:s,tabsView:t,tabsBox:n,handleCloseTab:r,go:b,active:c}}}),Kt={class:"tabs flex"},Vt={class:"h-30px overflow-x-hidden flex-1",ref:"tabsBox"},qt={class:"tabs-content h-30px box-border flex flex-nowrap items-center",ref:"tabsView"},Yt=["onClick"],Gt=["onClick"],Zt={key:1,class:"spot"};function Qt(e,t,n,o,s,a){const i=g("svg-icon");return h(),w("div",Kt,[u("span",{class:"flex w-30px justify-center items-center cursor-pointer",onClick:t[0]||(t[0]=(...p)=>e.handleLeftScroll&&e.handleLeftScroll(...p))},[l(i,{name:"tabs-left",class:"hover:text-[#333333] text-gray-400"})]),u("div",Vt,[u("ul",qt,[(h(!0),w(I,null,N(e.tabs,(p,c)=>(h(),w("li",{class:A(["h-24px box-border border-1 border-[#d8dce5] pr-5 pl-2 mr-1 whitespace-nowrap relative cursor-pointer hover:text-[#1890ff] rounded-[2px]",e.active===p.name?"tabActive":""]),key:c,onClick:r=>e.go(p)},[u("span",null,y(p.meta.title),1),e.tabs.length!==1?(h(),w("span",{key:0,class:"closeTab",onClick:D(r=>e.handleCloseTab(c),["stop"])},[l(i,{name:"close",size:"14px"})],8,Gt)):(h(),w("span",Zt))],10,Yt))),128))],512)],512),u("span",{class:"flex w-30px justify-center items-center cursor-pointer",onClick:t[1]||(t[1]=(...p)=>e.handleRightScroll&&e.handleRightScroll(...p))},[l(i,{name:"tabs-right",class:"hover:text-[#333333] text-gray-400"})])])}var Jt=U(Xt,[["render",Qt],["__scopeId","data-v-90fbbd48"]]);const en=E({components:{Sidebar:dt,Navbar:xt,Tabs:Jt},setup(){const e=H(),t=C(()=>e.isMobile),n=C(()=>e.sidebarStatus),o=C(()=>e.sideBarConfig),s=C(()=>e.collapsed),a=C(()=>e.headerConfig),i=()=>{e.isMobile&&e.setSidebar(!e.sidebarStatus)},p=()=>{e.isMobile?e.setSidebar(!e.sidebarStatus):e.collapsed=!e.collapsed},c=C(()=>{console.log(e.isMobile);let r={};return e.isMobile?r={width:"calc(100%)"}:e.collapsed?r={width:"calc(100% - 80px)"}:r={width:`calc(100% - ${e.sideBarConfig.width}px)`},r});return{toggleDrawer:i,toggleCollapsed:p,headerStyle:c,isMobile:t,sidebarStatus:n,collapsed:s,sideBarConfig:o,headerConfig:a}}});function tn(e,t,n,o,s,a){const i=g("sidebar"),p=g("navbar"),c=g("Tabs"),r=g("router-view");return h(),w(I,null,[(h(),F(Fe,{to:"body"},[e.isMobile&&e.sidebarStatus?(h(),w("div",{key:0,onClick:t[0]||(t[0]=(...b)=>e.toggleDrawer&&e.toggleDrawer(...b)),class:"drawer-bg"})):L("",!0)])),l(i),u("div",{class:"main-container overflow-x-hidden",style:j({marginLeft:e.isMobile?"0px":e.collapsed?"80px":e.sideBarConfig.width+"px"})},[u("div",{class:"header",style:j(e.headerStyle)},[l(p),e.headerConfig.showTabs?(h(),F(c,{key:0})):L("",!0)],4),u("div",{class:"main-container-content",style:j({paddingTop:e.headerConfig.showTabs?"80px":"50px"})},[l(r,null,{default:d(({Component:b})=>[(h(),F(Oe,null,[l(Me,{name:"fade-transform",mode:"out-in"},{default:d(()=>[(h(),F(oe(b)))]),_:2},1024)],1024))]),_:1})],4)],4)],64)}var rn=U(en,[["render",tn],["__scopeId","data-v-440de1bc"]]);export{rn as default};