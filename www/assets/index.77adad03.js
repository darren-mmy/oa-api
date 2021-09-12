var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,d=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&r(e,l,a[l]);return e},n=(e,t)=>a(e,l(t));import{g as i,s as u}from"./dictFormat.fa6d45c4.js";import{g as c}from"./index.996b9bbd.js";import{g as p,d as m,l as f,u as v,e as h,r as g}from"./index.4eed7447.js";import{g as b}from"./index.240953cf.js";import{u as w,a as _,h as y}from"./index.e0281189.js";import{u as S}from"./useDrawer.60140d94.js";import{T as k,f as I}from"./validate.af74362d.js";import{_ as C}from"./index.a3f94848.js";import{_ as N}from"./index.d425032d.js";import{d as O,c as x,r as R,a as U,f as j,a6 as T,n as P,M as F,l as z,a3 as q,m as L,A as K,v as D,t as A,B as V,a4 as E,V as M,q as Q,a5 as B,H as $,F as H,Z,U as G}from"./ant-design-vue.8fffeee5.js";const J=[{title:"用户名",dataIndex:"userName",key:"userName",align:"center"},{title:"昵称",dataIndex:"nickName",key:"nickName",align:"center"},{title:"角色",key:"roles",align:"center",slots:{customRender:"roles"}},{title:"部门",key:"department",align:"center",slots:{customRender:"department"}},{title:"岗位",key:"position",align:"center",slots:{customRender:"position"}},{title:"手机号",key:"mobile",dataIndex:"mobile",align:"center"},{title:"状态",dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",align:"center"},{title:"操作",key:"action",align:"center",slots:{customRender:"action"}}];var W=O({components:{Treeselect:k,DeptSearch:C,FormSearch:N},setup(){const e=w(),a=x((()=>_().loading)),l=R([]),t=R([]),o=R([]),s=R([]),r=R([]),k=R([]),C=R(),N=R([]),O=R([]),z=R(),q=U({userName:"",deptId:0,roleId:"",pageNum:1,pageSize:10}),L=U([{type:"input",label:"用户名",name:"userName",value:void 0,placeholder:"请输入用户名"},{type:"select",label:"角色",name:"roleId",value:void 0,placeholder:"请选择角色",normalizer:{value:"id",label:"roleName"},options:l}]),K=e=>{V.value.current=1,q.pageNum=V.value.current,q.userName=e.userName,q.roleId=e.roleId,Q(q)},D=U({selectedRowKeys:[]}),A=R([]),V=R({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),E=x((()=>D.selectedRowKeys.length>0)),M=R([]),Q=a=>{f(a).then((e=>{A.value=e.data.rows,V.value.total=e.data.count})),c().then((a=>{const l=y(a.data.rows,"deptId","parentId","children",e.userInfo.deptId).tree,t=a.data.rows.filter((a=>a.deptId===e.userInfo.deptId));t[0].children=l,M.value=t,console.log(M)}))},B=R(),$=U({id:void 0,deptId:void 0,nickName:void 0,userName:void 0,password:void 0,sex:"1",roleIds:[],mobile:void 0,status:"1",email:void 0,salary:void 0,position:"1",entryTime:void 0,birthday:void 0,education:void 0,remark:void 0}),H={deptId:[{required:!0,validator:I.number,message:"归属部门不能为空",trigger:"change"}],nickName:[{required:!0,message:"昵称不能为空",trigger:"blur"}],userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],roleIds:[{required:!0,validator:I.checkRoleLength,trigger:"change"}],position:[{required:!0,message:"岗位不能为空",trigger:"change"}],salary:[{required:!0,validator:I.number,message:"薪资不能为空",trigger:"blur"}]},{open:Z,drawerTitle:G}=S(),W=R(!1),X=R(),Y=R(!1),ee=U({id:0,newPassword:""}),ae=()=>{c().then((e=>{N.value=e.data.rows,O.value=y(e.data.rows,"deptId","parentId","children",0).tree,C.value.expandedKeys.value=N.value.map((e=>e.id))})),Q(q),b().then((e=>{l.value=e.data.rows}))};return j((async()=>{t.value=await i("sys_normal_disable"),o.value=await i("sys_user_position"),s.value=await i("sys_user_education"),r.value=await i("sys_normal_disable"),k.value=await i("sys_user_sex"),r.value.forEach((e=>{e.label=e.dictLabel,e.value=e.dictValue})),k.value.forEach((e=>{e.label=e.dictLabel,e.value=e.dictValue})),ae()})),n(d(n(d({loading:a,replaceFields:{children:"children",title:"deptName",key:"deptId"},deptSearchRef:C,originalTree:N,deptTreeOption:O,handleSelect:e=>{q.deptId=e[0],K(q)},queryRef:z,queryParams:q,formFields:L,handleQuery:K,statusOptions:t,columns:J},T(D)),{userList:A,pagination:V,handleTableChange:e=>{V.value=e,q.pageNum=V.value.current,q.pageSize=V.value.pageSize,Q(q)},selectDictLabel:u,hasSelected:E,onSelectChange:e=>{D.selectedRowKeys=e},getRoles:e=>e.roles.map((e=>e.roleName)).join(","),confirm:e=>{const a=e.id||D.selectedRowKeys;console.log(a),m(a).then((()=>{(a.length&&a.length===A.value.length||1===A.value.length)&&Math.ceil(V.value.total/q.pageSize)===q.pageNum&&q.pageNum>1&&q.pageNum--,Q(q),F.success("删除成功")}))},cancel:e=>{console.log(e),F.success("取消删除")},handleAdd:()=>{Z.value=!0,W.value=!1,G.value="添加用户"},handleUpdate:e=>{p(e.id).then((e=>{Z.value=!0,W.value=!0,G.value="修改用户",P((()=>{Object.keys($).forEach((a=>{$[a]=e.data[a]})),$.roleIds=e.data.roles.map((e=>e.id)),B.value.forest.selectedNodeIds.push(e.data.deptId),console.log($)}))}))},treeRef:B,formRef:X,rules:H,isUpdate:W,open:Z,drawerTitle:G,deptOptions:M,normalizer:e=>(e.children&&!e.children.length&&delete e.children,{id:e.deptId,label:e.deptName,children:e.children}),handleClose:()=>{$.id=void 0,$.deptId=void 0,$.password=void 0,$.userName=void 0,X.value.resetFields(),console.log($),Z.value=!1},handleSubmit:()=>{console.log($),X.value.validate().then((()=>{$.id?v($).then((e=>{F.success(e.message),$.id=void 0,$.deptId=void 0,$.password=void 0,$.userName=void 0,$.roleIds=void 0,X.value.resetFields(),Z.value=!1,Q(q)})):h($).then((e=>{F.success(e.message),$.id=void 0,$.deptId=void 0,$.password=void 0,$.userName=void 0,$.roleIds=void 0,X.value.resetFields(),Z.value=!1,Q(q)}))})).catch((e=>{console.log("error",e)}))},labelCol:{span:6},wrapperCol:{span:18},formState:$,roleOptions:l,handleTreeSelect:e=>{$.deptId=e.deptId},positionOptions:o,educationOptions:s,disableOptions:r,sexOptions:k,visible:Y}),T(ee)),{handleResetPwd:()=>{ee.newPassword?g(ee.id,{newPassword:ee.newPassword}).then((e=>{F.success(e.message),ee.newPassword="",Y.value=!1})):F.error("新密码不能为空")},handleResetClose:()=>{ee.newPassword="",Y.value=!1},showModal:e=>{ee.id=e.id,Y.value=!0}})}});const X={class:"p-4"},Y={class:"mb-3"},ee=G(" 新增 "),ae=G(" 删除 "),le=G("导入"),te=G("导出"),oe=G(" 修改 "),se=G(" 重置密码 "),re=G(" 删除 "),de=G(" 确认 "),ne=G("取消"),ie={class:"flex items-center"},ue=V("span",{class:"whitespace-nowrap"},"新密码：",-1);W.render=function(e,a,l,t,o,s){const r=z("dept-search"),d=z("a-col"),n=z("form-search"),i=z("a-button"),u=z("a-popconfirm"),c=z("a-row"),p=z("a-table"),m=z("treeselect"),f=z("a-form-item"),v=z("a-input"),h=z("a-input-password"),g=z("a-select-option"),b=z("a-select"),w=z("a-radio-group"),_=z("a-input-number"),y=z("a-date-picker"),S=z("a-textarea"),k=z("a-form"),I=z("a-drawer"),C=z("a-modal"),N=q("has-permi");return L(),K("div",X,[D(c,{gutter:15},{default:A((()=>[D(d,{span:4},{default:A((()=>[D(r,{ref:"deptSearchRef",original:e.originalTree,data:e.deptTreeOption,baseFields:e.replaceFields,onSelect:e.handleSelect},null,8,["original","data","baseFields","onSelect"])])),_:1}),D(d,{span:20},{default:A((()=>[V("div",Y,[D(n,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),D(c,{gutter:10,class:"mb-2"},{default:A((()=>[E(D(d,null,{default:A((()=>[D(i,{color:"success",onClick:e.handleAdd},{default:A((()=>[ee])),_:1},8,["onClick"])])),_:1},512),[[N,["system:user:add"]]]),E(D(d,null,{default:A((()=>[D(u,{title:"确定要删除选中数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:e.confirm,onCancel:e.cancel},{default:A((()=>[D(i,{disabled:!e.hasSelected,color:"error"},{default:A((()=>[ae])),_:1},8,["disabled"])])),_:1},8,["onConfirm","onCancel"])])),_:1},512),[[N,["system:user:delete"]]]),D(d,null,{default:A((()=>[D(i,{color:"warning"},{default:A((()=>[le])),_:1})])),_:1}),D(d,null,{default:A((()=>[D(i,{color:"normal"},{default:A((()=>[te])),_:1})])),_:1})])),_:1}),D(p,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.userList,pagination:e.pagination,onChange:e.handleTableChange},{department:A((({record:e})=>[V("span",null,M(e.department.deptName),1)])),status:A((({record:a})=>[V("span",null,M(e.selectDictLabel(e.statusOptions,a.status)),1)])),roles:A((({record:a})=>[V("span",null,M(e.getRoles(a)),1)])),position:A((({record:a})=>[V("span",null,M(e.selectDictLabel(e.positionOptions,a.position)),1)])),action:A((({record:a})=>[V("span",null,[E(D(i,{type:"link",color:"success",class:"mr-3",onClick:l=>e.handleUpdate(a)},{default:A((()=>[oe])),_:2},1032,["onClick"]),[[N,["system:user:update"]]]),E(D(i,{type:"link",color:"success",class:"mr-3",onClick:l=>e.showModal(a)},{default:A((()=>[se])),_:2},1032,["onClick"]),[[N,["system:user:resetPwd"]]]),D(u,{title:"确定要删除该数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:l=>e.confirm(a),onCancel:e.cancel},{default:A((()=>[E(D(i,{type:"link",color:"error"},{default:A((()=>[re])),_:1},512),[[N,["system:user:delete"]]])])),_:2},1032,["onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"])])),_:1})])),_:1}),D(I,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[15]||(a[15]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:A((()=>[e.open?(L(),Q(k,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:A((()=>[D(c,null,{default:A((()=>[E(D(d,{span:12},{default:A((()=>[D(f,{label:"归属部门",name:"deptId"},{default:A((()=>[D(m,{ref:"treeRef",class:"!mt-[3px]",value:e.formState.deptId,"onUpdate:value":a[0]||(a[0]=a=>e.formState.deptId=a),normalizer:e.normalizer,placeholder:"请选择归属部门",options:e.deptOptions,onSelect:e.handleTreeSelect},null,8,["value","normalizer","options","onSelect"])])),_:1})])),_:1},512),[[B,0!==e.formState.deptId]]),D(d,{span:12},{default:A((()=>[D(f,{label:"昵称",name:"nickName"},{default:A((()=>[D(v,{value:e.formState.nickName,"onUpdate:value":a[1]||(a[1]=a=>e.formState.nickName=a),placeholder:"请输入昵称"},null,8,["value"])])),_:1})])),_:1}),e.isUpdate?$("",!0):(L(),Q(d,{key:0,span:12},{default:A((()=>[D(f,{label:"用户名",name:"userName"},{default:A((()=>[D(v,{value:e.formState.userName,"onUpdate:value":a[2]||(a[2]=a=>e.formState.userName=a),placeholder:"请输入用户名"},null,8,["value"])])),_:1})])),_:1})),e.isUpdate?$("",!0):(L(),Q(d,{key:1,span:12},{default:A((()=>[D(f,{label:"密码",name:"password"},{default:A((()=>[D(h,{value:e.formState.password,"onUpdate:value":a[3]||(a[3]=a=>e.formState.password=a),placeholder:"请输入密码"},null,8,["value"])])),_:1})])),_:1})),D(d,{span:12},{default:A((()=>[D(f,{label:"角色",name:"roleIds"},{default:A((()=>[D(b,{mode:"multiple",value:e.formState.roleIds,"onUpdate:value":a[4]||(a[4]=a=>e.formState.roleIds=a),placeholder:"请选择角色"},{default:A((()=>[(L(!0),K(H,null,Z(e.roleOptions,(e=>(L(),Q(g,{key:e.id},{default:A((()=>[G(M(e.roleName),1)])),_:2},1024)))),128))])),_:1},8,["value"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"岗位",name:"position"},{default:A((()=>[D(b,{value:e.formState.position,"onUpdate:value":a[5]||(a[5]=a=>e.formState.position=a),placeholder:"请选择岗位"},{default:A((()=>[(L(!0),K(H,null,Z(e.positionOptions,(e=>(L(),Q(g,{value:e.dictValue,key:e.id},{default:A((()=>[G(M(e.dictLabel),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"性别",name:"sex"},{default:A((()=>[D(w,{value:e.formState.sex,"onUpdate:value":a[6]||(a[6]=a=>e.formState.sex=a),options:e.sexOptions},null,8,["value","options"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"手机号码",name:"mobile"},{default:A((()=>[D(v,{value:e.formState.mobile,"onUpdate:value":a[7]||(a[7]=a=>e.formState.mobile=a),placeholder:"请输入手机号码"},null,8,["value"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"状态",name:"status"},{default:A((()=>[D(w,{value:e.formState.status,"onUpdate:value":a[8]||(a[8]=a=>e.formState.status=a),options:e.disableOptions},null,8,["value","options"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"邮箱",name:"email"},{default:A((()=>[D(v,{value:e.formState.email,"onUpdate:value":a[9]||(a[9]=a=>e.formState.email=a),placeholder:"请输入邮箱"},null,8,["value"])])),_:1})])),_:1}),"1"!==e.formState.position?(L(),Q(d,{key:2,span:12},{default:A((()=>[D(f,{label:"薪资",name:"salary"},{default:A((()=>[D(_,{class:"!w-[100%]",value:e.formState.salary,"onUpdate:value":a[10]||(a[10]=a=>e.formState.salary=a),placeholder:"请输入薪资",precision:2,formatter:e=>`￥ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\￥\s?|(,*)/g,"")},null,8,["value","formatter","parser"])])),_:1})])),_:1})):$("",!0),"1"!==e.formState.position?(L(),Q(d,{key:3,span:12},{default:A((()=>[D(f,{label:"入职时间",name:"entryTime"},{default:A((()=>[D(y,{class:"!w-[100%]",value:e.formState.entryTime,"onUpdate:value":a[11]||(a[11]=a=>e.formState.entryTime=a),placeholder:"请输入入职时间"},null,8,["value"])])),_:1})])),_:1})):$("",!0),D(d,{span:12},{default:A((()=>[D(f,{label:"出生日期",name:"birthday"},{default:A((()=>[D(y,{class:"!w-[100%]",value:e.formState.birthday,"onUpdate:value":a[12]||(a[12]=a=>e.formState.birthday=a),placeholder:"请输入出生日期"},null,8,["value"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"学历",name:"education"},{default:A((()=>[D(b,{allowClear:"",value:e.formState.education,"onUpdate:value":a[13]||(a[13]=a=>e.formState.education=a),placeholder:"请选择学历"},{default:A((()=>[(L(!0),K(H,null,Z(e.educationOptions,(e=>(L(),Q(g,{value:e.dictValue,key:e.id},{default:A((()=>[G(M(e.dictLabel),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1})])),_:1}),D(d,{span:12},{default:A((()=>[D(f,{label:"备注",name:"remark"},{default:A((()=>[D(S,{rows:3,value:e.formState.remark,"onUpdate:value":a[14]||(a[14]=a=>e.formState.remark=a),placeholder:"请输入备注"},null,8,["value"])])),_:1})])),_:1}),D(d,{span:24},{default:A((()=>[D(f,null,{default:A((()=>[D(i,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:A((()=>[de])),_:1},8,["onClick"]),D(i,{onClick:e.handleClose},{default:A((()=>[ne])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","label-col","wrapper-col"])):$("",!0)])),_:1},8,["title","visible","onClose"]),D(C,{visible:e.visible,"onUpdate:visible":a[17]||(a[17]=a=>e.visible=a),title:"重置密码",onOk:e.handleResetPwd,onCancel:e.handleResetClose},{default:A((()=>[V("div",ie,[ue,D(h,{value:e.newPassword,"onUpdate:value":a[16]||(a[16]=a=>e.newPassword=a),placeholder:"请输入密码"},null,8,["value"])])])),_:1},8,["visible","onOk","onCancel"])])};export{W as default};
