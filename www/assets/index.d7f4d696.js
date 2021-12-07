var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;"undefined"!=typeof require&&require;import{l as c,u as n,a as d,d as i,g as u}from"./index.f1292d63.js";import{g as m,s as p}from"./dictFormat.b2531267.js";import{u as f}from"./useDrawer.6ddc8ed7.js";import{a as y}from"./index.2c6e8c15.js";import{_ as h}from"./index.440d206b.js";import{u as v}from"./useI18n.94ac6758.js";import{d as g,c as b,r as k,a as C,f as T,a6 as w,M as _,n as S,q as x,a3 as N,t as R,A as j,B as O,k as P,x as F,a4 as D,V as K,U,v as q,H as z}from"./ant-design-vue.5cd75ca8.js";const{t:I}=v(),A=[{title:I("routes.dict.dictName"),dataIndex:"dictName",key:"dictName",align:"center"},{title:I("routes.dict.dictType"),dataIndex:"dictType",key:"dictType",align:"center",slots:{customRender:"dictType"}},{title:I("routes.dict.status"),dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:I("routes.dict.remark"),dataIndex:"remark",key:"remark",align:"center"},{title:I("routes.dict.createdAt"),dataIndex:"createdAt",key:"createdAt",align:"center"},{title:I("routes.dict.action"),key:"action",align:"center",slots:{customRender:"action"}}];var L=g({components:{FormSearch:h},setup(){const e=b((()=>y().loading)),h=k([]),v=k([]),g={dictName:[{required:!0,message:I("routes.dict.dictNameCannotBeRmpty"),trigger:"blur"}],dictType:[{required:!0,message:I("routes.dict.dictTypeCannotBeRmpty"),trigger:"blur"}],status:[{required:!0,message:I("routes.dict.statusCannotBeRmpty"),trigger:"change"}]},x=C([{type:"input",label:I("routes.dict.dictName"),name:"dictName",value:"",placeholder:"请输入字典名称"},{type:"input",label:I("routes.dict.dictType"),name:"dictType",value:"",placeholder:"请输入字典类型"},{type:"select",label:I("routes.dict.status"),name:"status",value:void 0,placeholder:I("routes.dict.statusPlaceholder"),normalizer:{value:"dictValue",label:"dictLabel"},options:v}]),N=C({pageNum:1,pageSize:10,dictName:"",dictType:"",status:""}),R=k([]),j=k({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),O=C({selectedRowKeys:[]}),P=b((()=>O.selectedRowKeys.length>0)),F=e=>{c(e).then((e=>{R.value=e.data.rows,j.value.total=e.data.count,O.selectedRowKeys=[]}))},D=k(),K=C({id:void 0,dictName:void 0,dictType:void 0,status:"1",remark:void 0}),{open:U,drawerTitle:q}=f();return T((async()=>{h.value=await m("sys_normal_disable"),h.value.forEach((e=>{e.label=e.dictLabel,e.value=e.dictValue})),v.value=await m("sys_normal_disable"),F(N)})),z=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&r(e,a,t[a]);return e})({t:I,loading:e,queryParams:N,formFields:x,handleQuery:e=>{j.value.current=1,N.pageNum=j.value.current,N.dictName=e.dictName,N.dictType=e.dictType,N.status=e.status,F(N)},typeList:R,columns:A,pagination:j,handleTableChange:e=>{j.value=e,N.pageNum=j.value.current,N.pageSize=j.value.pageSize,F(N)},selectDictLabel:p,statusOptions:v},w(O)),t(z,a({hasSelected:P,onSelectChange:e=>{O.selectedRowKeys=e},open:U,drawerTitle:q,formState:K,labelCol:{span:6},wrapperCol:{span:18},rules:g,formRef:D,handleClose:()=>{K.id=void 0,D.value.resetFields(),U.value=!1},handleSubmit:()=>{D.value.validate().then((()=>{K.id?n(K).then((e=>{_.success(e.message),F(N),K.id=void 0,D.value.resetFields(),U.value=!1})):d(K).then((e=>{_.success(e.message),F(N),K.id=void 0,D.value.resetFields(),U.value=!1}))})).catch((e=>{}))},confirm:e=>{const t=e.id||O.selectedRowKeys;i(t).then((()=>{(t.length&&t.length===R.value.length||1===R.value.length)&&Math.ceil(j.value.total/N.pageSize)===N.pageNum&&N.pageNum>1&&N.pageNum--,F(N),_.success(I("common.deleteSuccess"))}))},cancel:e=>{_.success(I("common.cancelDelete"))},handleAdd:()=>{U.value=!0,q.value=I("common.add")},handleUpdate:e=>{u(e.id).then((e=>{U.value=!0,q.value=I("common.update"),S((()=>{Object.keys(K).forEach((t=>{K[t]=e.data[t]}))}))}))},disableOptions:h}));var z}});const B={class:"p-4"},E={class:"mb-3"},Q={class:"text-[#1890ff]"};L.render=function(e,t,a,l,o,s){const r=x("form-search"),c=x("a-button"),n=x("a-col"),d=x("a-popconfirm"),i=x("a-row"),u=x("router-link"),m=x("a-table"),p=x("a-input"),f=x("a-form-item"),y=x("a-radio-group"),h=x("a-textarea"),v=x("a-form"),g=x("a-drawer"),b=N("has-permi");return R(),j("div",B,[O("div",E,[P(r,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),P(i,{gutter:10,class:"mb-2"},{default:F((()=>[D(P(n,null,{default:F((()=>[P(c,{color:"success",onClick:e.handleAdd},{default:F((()=>[K(U(e.t("common.add")),1)])),_:1},8,["onClick"])])),_:1},512),[[b,["system:dictType:add"]]]),D(P(n,null,{default:F((()=>[P(d,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:F((()=>[P(c,{disabled:!e.hasSelected,color:"error"},{default:F((()=>[K(U(e.t("common.delete")),1)])),_:1},8,["disabled"])])),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])])),_:1},512),[[b,["system:dictType:delete"]]])])),_:1}),P(m,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.typeList,pagination:e.pagination,onChange:e.handleTableChange},{dictType:F((({record:e})=>[P(u,{to:"dictData/"+e.id},{default:F((()=>[O("span",Q,U(e.dictType),1)])),_:2},1032,["to"])])),status:F((({record:t})=>[O("span",null,U(e.selectDictLabel(e.statusOptions,t.status)),1)])),action:F((({record:t})=>[O("span",null,[D(P(c,{type:"link",color:"success",class:"mr-3",onClick:a=>e.handleUpdate(t)},{default:F((()=>[K(U(e.t("common.update")),1)])),_:2},1032,["onClick"]),[[b,["system:dictType:update"]]]),P(d,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:a=>e.confirm(t),onCancel:e.cancel},{default:F((()=>[D(P(c,{type:"link",color:"error"},{default:F((()=>[K(U(e.t("common.delete")),1)])),_:1},512),[[b,["system:dictType:delete"]]])])),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),P(g,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":t[4]||(t[4]=t=>e.open=t),maskClosable:!1,onClose:e.handleClose},{default:F((()=>[e.open?(R(),q(v,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:F((()=>[P(i,null,{default:F((()=>[P(n,{span:12},{default:F((()=>[P(f,{label:e.t("routes.dict.dictName"),name:"dictName"},{default:F((()=>[P(p,{value:e.formState.dictName,"onUpdate:value":t[0]||(t[0]=t=>e.formState.dictName=t),placeholder:e.t("routes.dict.dictNamePlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),P(n,{span:12},{default:F((()=>[P(f,{label:e.t("routes.dict.dictType"),name:"dictType"},{default:F((()=>[P(p,{value:e.formState.dictType,"onUpdate:value":t[1]||(t[1]=t=>e.formState.dictType=t),placeholder:e.t("routes.dict.dictTypePlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),P(n,{span:12},{default:F((()=>[P(f,{label:e.t("routes.dict.status"),name:"status"},{default:F((()=>[P(y,{value:e.formState.status,"onUpdate:value":t[2]||(t[2]=t=>e.formState.status=t),options:e.disableOptions},null,8,["value","options"])])),_:1},8,["label"])])),_:1}),P(n,{span:12},{default:F((()=>[P(f,{label:e.t("routes.dict.remark"),name:"remark"},{default:F((()=>[P(h,{rows:3,value:e.formState.remark,"onUpdate:value":t[3]||(t[3]=t=>e.formState.remark=t),placeholder:e.t("routes.dict.remarkPlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),P(n,{span:24},{default:F((()=>[P(f,null,{default:F((()=>[P(c,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:F((()=>[K(U(e.t("common.okText")),1)])),_:1},8,["onClick"]),P(c,{onClick:e.handleClose},{default:F((()=>[K(U(e.t("common.cancelText")),1)])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","label-col","wrapper-col"])):z("",!0)])),_:1},8,["title","visible","onClose"])])};export{L as default};