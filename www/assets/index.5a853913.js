var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,r=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&s(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&s(e,l,a[l]);return e};import{H as c,M as i,m as d,a as u}from"./index.b4c50d36.js";import{_ as m,g as p,s as g}from"./index.b7715d33.js";import{u as y}from"./useDrawer.8fe26ed9.js";import{d as h,r as f,a as b,c as v,f as w,a3 as C,j,t as O,a2 as k,l as _,m as S,v as x,q as R,a0 as K,Q as A,A as B,O as z}from"./ant-design-vue.10f2c163.js";const I=[{title:"操作人员",dataIndex:"createdBy",key:"createdBy",align:"center"},{title:"请求地址",dataIndex:"url",key:"url",align:"center"},{title:"请求方式",dataIndex:"method",key:"method",align:"center"},{title:"ip",dataIndex:"ip",key:"ip",align:"center"},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",align:"center"},{title:"操作",key:"action",align:"center",slots:{customRender:"action"}}];var L=h({components:{FormSearch:m},setup(){const e=f([]),t=b({pageNum:1,pageSize:10,createdBy:"",method:""}),o=b([{type:"input",label:"操作人员",name:"createdBy",value:"",placeholder:"请输入操作人员"},{type:"select",label:"请求方式",name:"method",value:void 0,placeholder:"请选择请求方式",normalizer:{value:"dictValue",label:"dictLabel"},options:e}]),n=f([]),s=f({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),d=b({selectedRowKeys:[]}),u=v((()=>d.selectedRowKeys.length>0)),m=e=>{(function(e={}){return c("/admin/system/logs",i.get,e,!1)})(e).then((e=>{console.log(e),n.value=e.data.rows,s.value.total=e.data.count,d.selectedRowKeys=[]}))},{open:h,drawerTitle:O}=y(),k=f(null);return w((async()=>{e.value=await p("sys_method_type"),m(t)})),_=r({queryParams:t,formFields:o,handleQuery:e=>{s.value.current=1,t.pageNum=s.value.current,t.createdBy=e.createdBy,t.method=e.method,m(t)},logsList:n,columns:I,pagination:s,handleTableChange:e=>{s.value=e,t.pageNum=s.value.current,t.pageSize=s.value.pageSize,m(t)},selectDictLabel:g,methodOptions:e,confirm:e=>{(function(e){return c("/admin/system/logs/"+e,i.del)})(e.id||d.selectedRowKeys).then((()=>{m(t),j.success("删除成功")}))},cancel:e=>{console.log(e),j.success("取消删除")},hasSelected:u,onSelectChange:e=>{console.log("selectedRowKeys changed: ",e),d.selectedRowKeys=e}},C(d)),a(_,l({showDetail:e=>{h.value=!0,O.value="详细信息",k.value=e,console.log(e)},open:h,drawerTitle:O,handleClose:()=>{h.value=!1},detailObj:k,clearAll:()=>{c("/admin/system/logs/deleteAllLogs",i.del).then((()=>{m(t),j.success("清除成功")}))}}));var _},computed:r({},d(u,["loading"]))});const P={class:"p-4"},T={class:"mb-3"},D=z("导出"),F=z("清空"),Q=z(" 删除 "),N=z(" 详细 "),q=z(" 删除 "),E={key:0};L.render=function(e,a,l,t,o,n){const s=O("form-search"),r=O("a-button"),c=O("a-col"),i=O("a-popconfirm"),d=O("a-row"),u=O("a-table"),m=O("a-drawer"),p=k("has-permi");return _(),S("div",P,[x("div",T,[x(s,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),x(d,{gutter:10,class:"mb-2"},{default:R((()=>[x(c,null,{default:R((()=>[x(r,{color:"normal"},{default:R((()=>[D])),_:1})])),_:1}),K(x(c,null,{default:R((()=>[x(r,{color:"warning",onClick:e.clearAll},{default:R((()=>[F])),_:1},8,["onClick"])])),_:1},512),[[p,["system:logs:deleteAllLogs"]]]),K(x(c,null,{default:R((()=>[x(i,{title:"确定要删除选中数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:e.confirm,onCancel:e.cancel},{default:R((()=>[x(r,{disabled:!e.hasSelected,color:"error"},{default:R((()=>[Q])),_:1},8,["disabled"])])),_:1},8,["onConfirm","onCancel"])])),_:1},512),[[p,["system:logs:delete"]]])])),_:1}),x(u,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.logsList,pagination:e.pagination,onChange:e.handleTableChange},{action:R((({record:a})=>[x("span",null,[x(r,{type:"link",color:"success",class:"mr-3",onClick:l=>e.showDetail(a)},{default:R((()=>[N])),_:2},1032,["onClick"]),x(i,{title:"确定要删除该数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:l=>e.confirm(a),onCancel:e.cancel},{default:R((()=>[K(x(r,{type:"link",color:"error"},{default:R((()=>[q])),_:1},512),[[p,["system:logs:delete"]]])])),_:2},1032,["onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),x(m,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[1]||(a[1]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:R((()=>[e.detailObj?(_(),S("div",E,[x("p",null,"操作人员: "+A(e.detailObj.createdBy),1),x("p",null,"请求地址: "+A(e.detailObj.url),1),x("p",null,"请求方式: "+A(e.detailObj.method),1),x("p",null,"请求参数: "+A(e.detailObj.data),1),x("p",null,"ip: "+A(e.detailObj.ip),1),x("p",null,"创建时间: "+A(e.detailObj.createdAt),1)])):B("",!0)])),_:1},8,["title","visible","onClose"])])};export default L;
