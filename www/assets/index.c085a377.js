import{u as F}from"./useI18n.25a437e0.js";import{_}from"./index.da4ff793.js";import{d as j,r as d,c as f,b as K,q as h,t as y,y as m,k as v,x as V,S as g,R as c,z as C,F as T}from"./ant-design-vue.27440fdb.js";const $=j({props:{data:{type:Array,required:!0},original:{type:Array,default:()=>[]},baseFields:{type:Object,default:()=>({children:"children",title:"title",key:"id"})}},emits:["select"],setup(e,{emit:t}){const{t:x}=F(),o=d(""),p=d([]),l=d([]),n=d(!0),i=f(()=>e.data),u=f(()=>e.baseFields),a=f(()=>e.original),b=s=>{l.value=s,n.value=!1},O=s=>{t("select",s)};return K(o,s=>{const S=a.value.map(r=>r.deptName.indexOf(s)>-1?r.deptId:null).filter((r,k,E)=>r&&E.indexOf(r)===k);l.value=S,o.value=s,n.value=!0}),K(p,s=>{console.log("selectedKeys",s)}),{t:x,searchValue:o,expandedKeys:l,autoExpandParent:n,deptTreeOption:i,replaceFields:u,selectedKeys:p,onExpand:b,handleSelect:O}}}),w={key:0},B={class:"text-red-400"},D={key:1};function I(e,t,x,o,p,l){const n=h("svg-icon"),i=h("a-input"),u=h("a-tree");return y(),m(T,null,[v(i,{allowClear:!0,value:e.searchValue,"onUpdate:value":t[0]||(t[0]=a=>e.searchValue=a),placeholder:e.t("component.deptSearch.placeholder")},{prefix:V(()=>[v(n,{name:"search",class:"text-[#d9d9d9]"})]),_:1},8,["value","placeholder"]),v(u,{blockNode:!0,expandedKeys:e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"replace-fields":e.replaceFields,"tree-data":e.deptTreeOption,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=a=>e.selectedKeys=a),onExpand:e.onExpand,onSelect:e.handleSelect},{title:V(({deptName:a})=>[a.indexOf(e.searchValue)>-1?(y(),m("span",w,[g(c(a.substr(0,a.indexOf(e.searchValue)))+" ",1),C("span",B,c(e.searchValue),1),g(" "+c(a.substr(a.indexOf(e.searchValue)+e.searchValue.length)),1)])):(y(),m("span",D,c(a),1))]),_:1},8,["expandedKeys","auto-expand-parent","replace-fields","tree-data","selectedKeys","onExpand","onSelect"])],64)}var U=_($,[["render",I]]);export{U as D};