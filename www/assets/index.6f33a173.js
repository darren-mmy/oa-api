import{d as e,r as a,ac as t,c as l,f as n,M as s,j as r,l as o,m as i,A as u,v as d,t as c,U as m,V as v,a4 as f,a5 as Y,B as h}from"./ant-design-vue.8fffeee5.js";import{H as D,r as g}from"./index.e0281189.js";import{c as M}from"./index.3ebd564c.js";var k=e({setup(){const e=a(t()),o=a(""),i=a(),u=a("month"),d=a(!1),c=a([]),m=()=>{d.value=!0},v=()=>{(function(e={}){return D("/admin/baseInfo/workingDaySettings","GET",e)})({day:t(e.value).format("YYYY-MM-DD")}).then((e=>{c.value=e.data.rows}))},f=l((()=>c.value.length));return n((()=>{v()})),{dateTime:e,visible:d,remark:o,selectDates:f,handleCreate:()=>{const a={dateTime:t(e.value).format("YYYY-MM-DD"),dateLists:c.value};M(a).then((e=>{s.success(e.message),g.push({name:"Salary"})}))},getListData:e=>c.value.filter((a=>a.day===e.format("YYYY-MM-DD"))).length?c.value.filter((a=>a.day===e.format("YYYY-MM-DD")))[0]:"",handleSelect:e=>{"month"===u.value&&(i.value=e,0===c.value.filter((a=>a.day===e.format("YYYY-MM-DD"))).length?m():r.confirm({title:"确定取消该工作日吗？",okText:"确认",cancelText:"取消",onOk:()=>{const a=c.value.filter((a=>a.day===e.format("YYYY-MM-DD")))[0].id;var t;(t=a,D("/admin/baseInfo/workingDaySettings/"+t,"DELETE")).then((e=>{s.success(e.message),v()}))}}))},showModal:m,handleCancel:()=>{o.value="",d.value=!1},handleSubmit:async()=>{d.value=!1,await function(e={}){return D("/admin/baseInfo/workingDaySettings","POST",e)}({day:t(i.value).format("YYYY-MM-DD"),remark:o.value}),o.value="",await v()},confirm:confirm,handlePanelChange:(e,a)=>{console.log(e,a),u.value=a,v()}}}});const p={class:"p-4"},b={class:"pl-2 pr-2"};k.render=function(e,a,t,l,n,s){const r=o("a-button"),D=o("a-badge"),g=o("a-calendar"),M=o("a-textarea"),k=o("a-modal");return i(),u("div",p,[d(r,{type:"primary",onClick:e.handleCreate},{default:c((()=>[m(" 生成当月工资数据("+v(e.selectDates)+"天) ",1)])),_:1},8,["onClick"]),d(g,{value:e.dateTime,"onUpdate:value":a[0]||(a[0]=a=>e.dateTime=a),onSelect:e.handleSelect,onPanelChange:e.handlePanelChange},{dateCellRender:c((({current:a})=>[f(h("div",b,[d(D,{status:"success",text:e.getListData(a).remark},null,8,["text"])],512),[[Y,e.getListData(a)]])])),_:1},8,["value","onSelect","onPanelChange"]),d(k,{visible:e.visible,"onUpdate:visible":a[2]||(a[2]=a=>e.visible=a),title:"设置为工作日","ok-text":"确认","cancel-text":"取消",onCancel:e.handleCancel,onOk:e.handleSubmit},{default:c((()=>[d(M,{value:e.remark,"onUpdate:value":a[1]||(a[1]=a=>e.remark=a),placeholder:"请输入备注信息","allow-clear":""},null,8,["value"])])),_:1},8,["visible","onCancel","onOk"])])};export{k as default};
