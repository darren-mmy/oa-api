var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{H as s,a as i}from"./index.e0281189.js";import{g as d,s as c}from"./dictFormat.fa6d45c4.js";import{_ as u}from"./index.d425032d.js";import{_ as m}from"./index.b57edad9.js";import{u as p}from"./useDrawer.60140d94.js";import{d as v,c as f,r as g,a as h,f as k,a6 as b,M as w,n as y,l as T,a3 as A,m as C,A as O,B as x,v as S,t as R,a4 as _,V as D,F as j,Z as F,q as E,U as N}from"./ant-design-vue.8fffeee5.js";function K(e){return s("/admin/examineAndApprove/workOverTime/"+e,"GET",{},!1)}function I(e){return s("/admin/examineAndApprove/workOverTime/"+e.id,"PUT",e)}const L=[{title:"姓名",key:"user",align:"center",slots:{customRender:"user"}},{title:"加班时长",dataIndex:"workOverTimeDuration",key:"workOverTimeDuration",align:"center",slots:{customRender:"workOverTimeDuration"}},{title:"加班原因",dataIndex:"workOverTimeReason",key:"workOverTimeReason",align:"center"},{title:"开始时间",dataIndex:"startTime",key:"startTime",align:"center"},{title:"结束时间",dataIndex:"endTime",key:"endTime",align:"center"},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",align:"center"},{title:"审批状态",dataIndex:"status",key:"status",slots:{customRender:"status"},align:"center"},{title:"审批备注",dataIndex:"remark",key:"remark",align:"center"},{title:"操作",key:"action",align:"center",slots:{customRender:"action"}}];var P=v({components:{FormSearch:u,BaseForm:m},setup(){const e=f((()=>i().loading)),u=g([]),m=g(),v=h({pageNum:1,pageSize:10,nickName:"",type:"",status:""}),T=h([{type:"input",label:"姓名",name:"nickName",value:"",placeholder:"请输入姓名"},{type:"select",label:"审批状态",name:"status",value:void 0,placeholder:"请选择审批状态",normalizer:{value:"dictValue",label:"dictLabel"},options:u}]),A=g([]),C=g({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),O=g(),x=h({selectedRowKeys:[]}),S=f((()=>x.selectedRowKeys.length>0)),R=e=>{(function(e={}){return s("/admin/examineAndApprove/workOverTime","GET",e)})(e).then((e=>{console.log(e),A.value=e.data.rows,C.value.total=e.data.count,x.selectedRowKeys=[]}))},{open:_,drawerTitle:D}=p(),j=h({id:void 0,type:void 0,workOverTimeReason:void 0,time:[],startTime:"",endTime:""}),F=h({time:[{required:!0,message:"请选择加班时间"}]}),E=e=>{j.startTime=e[0],j.endTime=e[1]},N=h([{name:"time",label:"选择时间",type:"range-picker",value:void 0,span:24,props:{format:"YYYY-MM-DD HH:mm",placeholder:["开始时间","结束时间"],valueFormat:"YYYY-MM-DD HH:mm"},fn:{ok:E,change:E}},{name:"workOverTimeReason",label:"加班原因",type:"textarea",value:void 0,span:24,placeholder:"请输入加班原因"}]);return k((async()=>{u.value=await d("sys_examineAndApprove_status"),u.value.forEach((e=>{e.value=e.dictValue,e.lable=e.dictLabel})),R(v)})),P=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&r(e,t,a[t]);if(n)for(var t of n(a))o.call(a,t)&&r(e,t,a[t]);return e})({loading:e,queryParams:v,formFields:T,handleQuery:e=>{C.value.current=1,v.pageNum=C.value.current,v.nickName=e.nickName,v.status=e.status,R(v)},tableList:A,columns:L,pagination:C,hasSelected:S,handleTableChange:e=>{C.value=e,v.pageNum=C.value.current,v.pageSize=C.value.pageSize,R(v)},selectDictLabel:c,confirm:e=>{const a=e.id||x.selectedRowKeys;(function(e){return s("/admin/examineAndApprove/workOverTime/"+e,"DELETE")})(a).then((()=>{(a.length&&a.length===A.value.length||1===A.value.length)&&Math.ceil(C.value.total/v.pageSize)===v.pageNum&&v.pageNum>1&&v.pageNum--,R(v),w.success("删除成功")}))},cancel:e=>{console.log(e),w.success("取消删除")},onSelectChange:e=>{console.log("selectedRowKeys changed: ",e),x.selectedRowKeys=e}},b(x)),a(P,t({handleExamineAndApprove:async({key:e})=>{console.log(e,O),O.value&&(await K(O.value.id).then((e=>{Object.keys(j).forEach((a=>{j[a]=e.data[a]}))})),j.status=e,I(j).then((e=>{w.success(e.message),R(v)})))},handleClickDropdown:e=>{O.value=e},BaseFormRef:m,open:_,drawerTitle:D,examineAndApproveStatusOptions:u,formState:j,formDataObj:N,rules:F,handleClose:()=>{j.id=void 0,m.value.resetFields(),_.value=!1},handleAdd:()=>{_.value=!0,D.value="添加"},onOkTime:E,handleUpdate:e=>{K(e.id).then((e=>{_.value=!0,D.value="修改",y((()=>{Object.keys(j).forEach((a=>{j[a]=e.data[a],j.time=["",""],"startTime"===a&&y((()=>{j.time[0]=e.data[a]})),"endTime"===a&&y((()=>{j.time[1]=e.data[a]}))}))}))}))},handleSubmit:()=>{console.log(j),j.id?I(j).then((e=>{w.success(e.message),R(v),j.id=void 0,m.value.resetFields(),_.value=!1})):function(e={}){return s("/admin/examineAndApprove/workOverTime","POST",e)}(j).then((e=>{w.success(e.message),R(v),j.id=void 0,m.value.resetFields(),_.value=!1}))}}));var P}});const Y={class:"p-4"},z={class:"mb-3"},M=N(" 新增 "),B=N(" 删除 "),H=N("导出"),U=x("span",{class:"mr-3 text-[#faad14] cursor-pointer"}," 审批 ",-1),V=N(" 修改 "),q=N(" 删除 ");P.render=function(e,a,t,n,l,o){const r=T("form-search"),s=T("a-button"),i=T("a-col"),d=T("a-popconfirm"),c=T("a-row"),u=T("a-menu-item"),m=T("a-menu"),p=T("a-dropdown"),v=T("a-table"),f=T("BaseForm"),g=T("a-drawer"),h=A("has-permi");return C(),O("div",Y,[x("div",z,[S(r,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),S(c,{gutter:10,class:"mb-2"},{default:R((()=>[_(S(i,null,{default:R((()=>[S(s,{color:"success",onClick:e.handleAdd},{default:R((()=>[M])),_:1},8,["onClick"])])),_:1},512),[[h,["examineAndApprove:workOverTime:add"]]]),_(S(i,null,{default:R((()=>[S(d,{title:"确定要删除选中数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:e.confirm,onCancel:e.cancel},{default:R((()=>[S(s,{disabled:!e.hasSelected,color:"error"},{default:R((()=>[B])),_:1},8,["disabled"])])),_:1},8,["onConfirm","onCancel"])])),_:1},512),[[h,["examineAndApprove:workOverTime:delete"]]]),S(i,null,{default:R((()=>[S(s,{color:"normal"},{default:R((()=>[H])),_:1})])),_:1})])),_:1}),S(v,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.tableList,pagination:e.pagination,onChange:e.handleTableChange},{user:R((({record:e})=>[x("span",null,D(e.user.nickName),1)])),status:R((({record:a})=>[x("span",null,D(e.selectDictLabel(e.examineAndApproveStatusOptions,a.status)),1)])),action:R((({record:a})=>[x("span",null,[S(p,{trigger:["click"],onClick:t=>e.handleClickDropdown(a)},{overlay:R((()=>[S(m,{onClick:e.handleExamineAndApprove},{default:R((()=>[(C(!0),O(j,null,F(e.examineAndApproveStatusOptions,(e=>(C(),E(u,{disabled:"0"===e.dictValue,key:e.dictValue},{default:R((()=>[N(D(e.dictLabel),1)])),_:2},1032,["disabled"])))),128))])),_:1},8,["onClick"])])),default:R((()=>[U])),_:2},1032,["onClick"]),_(S(s,{type:"link",color:"success",class:"mr-3",onClick:t=>e.handleUpdate(a)},{default:R((()=>[V])),_:2},1032,["onClick"]),[[h,["examineAndApprove:workOverTime:update"]]]),S(d,{title:"确定要删除该数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:t=>e.confirm(a),onCancel:e.cancel},{default:R((()=>[_(S(s,{type:"link",color:"error"},{default:R((()=>[q])),_:1},512),[[h,["examineAndApprove:workOverTime:delete"]]])])),_:2},1032,["onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),S(g,{width:"540px",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[0]||(a[0]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:R((()=>[S(f,{ref:"BaseFormRef",formData:e.formDataObj,data:e.formState,rules:e.rules,onSubmit:e.handleSubmit,onClose:e.handleClose},null,8,["formData","data","rules","onSubmit","onClose"])])),_:1},8,["title","visible","onClose"])])};export{P as default};