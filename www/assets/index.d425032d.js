import{d as e,r as a,b as l,c as t,l as o,m as r,q as n,t as m,A as u,Z as p,F as d,U as s,V as c,H as f,v as i}from"./ant-design-vue.8fffeee5.js";var v=e({props:{formFields:{type:Array,required:!0}},emits:["search","reset"],setup(e,{emit:o,attrs:r}){console.log(e,o,r);const n=a(),m={};e.formFields.forEach((e=>{m[e.name]=e.value}));const u=a(m);l(e.formFields,(()=>{e.formFields.forEach((e=>{u.value[e.name]=e.value}))}),{deep:!0});return{formDataList:t((()=>e.formFields)),formState:u,formRef:n,handleQuery:()=>{o("search",u.value)},handleReset:()=>{n.value.resetFields(),o("reset",u.value)}}}});const h=s("搜索"),k=s("重置");v.render=function(e,a,l,t,v,y){const S=o("a-input"),U=o("a-cascader"),_=o("a-date-picker"),b=o("a-month-picker"),F=o("a-range-picker"),C=o("a-week-picker"),g=o("a-time-picker"),w=o("a-select-option"),z=o("a-select"),R=o("a-form-item"),H=o("a-button"),q=o("a-space"),x=o("a-form");return r(),n(x,{ref:"formRef",layout:"inline",model:e.formState},{default:m((()=>[(r(!0),u(d,null,p(e.formDataList,((a,l)=>(r(),n(R,{key:l,label:a.label,name:a.name},{default:m((()=>["input"===a.type?(r(),n(S,{key:0,allowClear:!0,value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):"cascader"===a.type?(r(),n(U,{key:1,options:a.options?a.options:[],value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l,placeholder:a.placeholder},null,8,["options","value","onUpdate:value","placeholder"])):"date-picker"===a.type?(r(),n(_,{key:2,value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):"month-picker"===a.type?(r(),n(b,{key:3,value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):"range-picker"===a.type?(r(),n(F,{key:4,value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l},null,8,["value","onUpdate:value"])):"week-picker"===a.type?(r(),n(C,{key:5,value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l,placeholder:a.placeholder},null,8,["value","onUpdate:value","placeholder"])):"time-picker"===a.type?(r(),n(g,{key:6,value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l,format:a.format?a.format:"HH:mm"},null,8,["value","onUpdate:value","format"])):"select"===a.type?(r(),n(z,{key:7,placeholder:a.placeholder,style:{width:"200px"},value:e.formState[a.name],"onUpdate:value":l=>e.formState[a.name]=l},{default:m((()=>[(r(!0),u(d,null,p(a.options,((e,l)=>(r(),n(w,{value:e[a.normalizer?a.normalizer.value:"value"],key:l},{default:m((()=>[s(c(e[a.normalizer?a.normalizer.label:"label"]),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["placeholder","value","onUpdate:value"])):f("",!0)])),_:2},1032,["label","name"])))),128)),i(R,null,{default:m((()=>[i(q,null,{default:m((()=>[i(H,{type:"primary",onClick:e.handleQuery},{default:m((()=>[h])),_:1},8,["onClick"]),i(H,{onClick:e.handleReset},{default:m((()=>[k])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["model"])};export{v as _};
