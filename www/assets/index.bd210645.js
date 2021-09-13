import{u as e,a,d as t,g as l,b as d}from"./index.996b9bbd.js";import{a as s,u as r,h as o}from"./index.e0281189.js";import{T as n,f as u}from"./validate.af74362d.js";import{u as i}from"./useDrawer.60140d94.js";import{g as c}from"./dictFormat.fa6d45c4.js";import{d as p,c as m,r as f,a as v,f as I,M as h,n as b,l as g,a3 as _,m as C,A as w,v as k,t as y,a4 as N,B as S,V as x,q as j,a5 as U,H as A,U as R}from"./ant-design-vue.8fffeee5.js";const T=[{title:"部门名称",dataIndex:"deptName",key:"deptName"},{title:"排序",dataIndex:"orderNum",key:"orderNum",align:"center"},{title:"状态",dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",align:"center"},{title:"操作",key:"action",align:"center",slots:{customRender:"action"}}];var E=p({components:{Treeselect:n},setup(){const n=m((()=>s().loading)),p=f([]),g=r(),_=f(),C={parentId:[{required:!0,validator:u.number,message:"上级部门不能为空",trigger:"change"}],deptName:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],orderNum:[{required:!0,validator:u.number,message:"显示排序不能为空",trigger:"blur"}]},w=f(),k=f([]),y=f([]),N=()=>{l().then((e=>{const a=o(e.data.rows,"deptId","parentId","children",g.userInfo.deptId).tree,t=e.data.rows.filter((e=>e.deptId===g.userInfo.deptId));t[0].children=a,y.value=t,k.value=t}))},S=v({deptId:void 0,parentId:void 0,deptName:void 0,orderNum:"1",status:"1"}),{open:x,drawerTitle:j}=i();return I((async()=>{p.value=await c("sys_normal_disable"),p.value.forEach((e=>{e.label=e.dictLabel,e.value=e.dictValue})),N()})),{loading:n,deptList:y,confirm:e=>{t(e.deptId).then((()=>{N(),h.success("删除成功")}))},cancel:e=>{console.log(e),h.success("取消删除")},columns:T,handleAdd:e=>{l().then((a=>{a.data.rows.forEach((e=>{e.isDisabled=!1}));const t=o(a.data.rows,"deptId","parentId","children",g.userInfo.deptId).tree,l=a.data.rows.filter((e=>e.deptId===g.userInfo.deptId));l[0].children=t,y.value=l,k.value=l,x.value=!0,j.value="添加部门",null!=e&&e.deptId&&b((()=>{S.parentId=e.deptId,_.value&&_.value.forest.selectedNodeIds.push(e.deptId)}))}))},handleUpdate:e=>{l().then((a=>{a.data.rows.forEach((a=>{a.deptId===e.deptId?a.isDisabled=!0:a.isDisabled=!1}));const t=o(a.data.rows,"deptId","parentId","children",g.userInfo.deptId).tree,l=a.data.rows.filter((e=>e.deptId===g.userInfo.deptId));l[0].children=t,y.value=l,k.value=l,d(e.deptId).then((e=>{x.value=!0,j.value="修改部门",b((()=>{Object.keys(S).forEach((a=>{S[a]=e.data[a]})),_.value.forest.selectedNodeIds.push(e.data.parentId)}))}))}))},open:x,drawerTitle:j,handleClose:()=>{S.deptId=void 0,w.value.resetFields(),console.log(S),x.value=!1},handleSubmit:()=>{console.log(S),w.value.validate().then((()=>{S.deptId?e(S).then((e=>{h.success(e.message),N(),S.deptId=void 0,w.value.resetFields(),x.value=!1})):a(S).then((e=>{h.success(e.message),N(),S.deptId=void 0,w.value.resetFields(),x.value=!1}))})).catch((e=>{console.log("error",e)}))},formState:S,labelCol:{span:6},wrapperCol:{span:18},normalizer:e=>(e.children&&!e.children.length&&delete e.children,{id:e.deptId,label:e.deptName,children:e.children}),deptOptions:k,rules:C,formRef:w,treeRef:_,handleTreeSelect:e=>{S.parentId=e.deptId},disableOptions:p}}});const O={class:"p-4"},q=R("新增"),z={class:"flex justify-center"},D={class:"flex justify-center"},F=R(" 新增 "),L=R(" 修改 "),V=R(" 删除 "),B=R(" 确认 "),H=R("取消");E.render=function(e,a,t,l,d,s){const r=g("a-button"),o=g("a-col"),n=g("a-row"),u=g("svg-icon"),i=g("a-popconfirm"),c=g("a-table"),p=g("treeselect"),m=g("a-form-item"),f=g("a-input"),v=g("a-input-number"),I=g("a-radio-group"),h=g("a-form"),b=g("a-drawer"),R=_("has-permi");return C(),w("div",O,[k(n,{gutter:10,class:"mb-2"},{default:y((()=>[N(k(o,null,{default:y((()=>[k(r,{color:"success",onClick:e.handleAdd},{default:y((()=>[q])),_:1},8,["onClick"])])),_:1},512),[[R,["system:department:add"]]])])),_:1}),k(c,{loading:e.loading,rowKey:"deptId",columns:e.columns,"data-source":e.deptList,defaultExpandAllRows:!0,pagination:!1},{icon:y((({record:e})=>[S("div",z,[k(u,{name:e.icon},null,8,["name"])])])),status:y((({record:e})=>[S("div",D,[S("span",null,x("1"===e.status?"正常":"停用"),1)])])),action:y((({record:a})=>[S("span",null,[N(k(r,{type:"link",color:"success",class:"mr-3",onClick:t=>e.handleAdd(a)},{default:y((()=>[F])),_:2},1032,["onClick"]),[[R,["system:department:add"]]]),N(k(r,{type:"link",color:"success",class:"mr-3",onClick:t=>e.handleUpdate(a)},{default:y((()=>[L])),_:2},1032,["onClick"]),[[R,["system:department:update"]]]),k(i,{title:"确定要删除该数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:t=>e.confirm(a),onCancel:e.cancel},{default:y((()=>[N(k(r,{type:"link",color:"error"},{default:y((()=>[V])),_:1},512),[[R,["system:department:delete"]]])])),_:2},1032,["onConfirm","onCancel"])])])),_:1},8,["loading","columns","data-source"]),k(b,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[4]||(a[4]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:y((()=>[e.open?(C(),j(h,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:y((()=>[k(n,null,{default:y((()=>[N(k(o,{span:12},{default:y((()=>[k(m,{label:"上级部门",name:"parentId"},{default:y((()=>[k(p,{ref:"treeRef",class:"!mt-[3px]",value:e.formState.parentId,"onUpdate:value":a[0]||(a[0]=a=>e.formState.parentId=a),normalizer:e.normalizer,placeholder:"请选择上级部门",options:e.deptOptions,onSelect:e.handleTreeSelect},null,8,["value","normalizer","options","onSelect"])])),_:1})])),_:1},512),[[U,0!==e.formState.parentId]]),k(o,{span:12},{default:y((()=>[k(m,{label:"部门名称",name:"deptName"},{default:y((()=>[k(f,{value:e.formState.deptName,"onUpdate:value":a[1]||(a[1]=a=>e.formState.deptName=a),placeholder:"请输入部门名称"},null,8,["value"])])),_:1})])),_:1}),k(o,{span:12},{default:y((()=>[k(m,{label:"显示排序",name:"orderNum"},{default:y((()=>[k(v,{class:"!w-[100%]",value:e.formState.orderNum,"onUpdate:value":a[2]||(a[2]=a=>e.formState.orderNum=a),placeholder:"请输入显示排序"},null,8,["value"])])),_:1})])),_:1}),k(o,{span:12},{default:y((()=>[k(m,{label:"部门状态",name:"status"},{default:y((()=>[k(I,{value:e.formState.status,"onUpdate:value":a[3]||(a[3]=a=>e.formState.status=a),options:e.disableOptions},null,8,["value","options"])])),_:1})])),_:1}),k(o,{span:24},{default:y((()=>[k(m,null,{default:y((()=>[k(r,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:y((()=>[B])),_:1},8,["onClick"]),k(r,{onClick:e.handleClose},{default:y((()=>[H])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","label-col","wrapper-col"])):A("",!0)])),_:1},8,["title","visible","onClose"])])};export{E as default};