import{H as s,M as t}from"./index.d05841f9.js";function e(e={}){return s("/admin/system/user",t.get,e)}function n(e){return s("/admin/system/user/"+e,t.get,{},!1)}function u(e=[]){return s("/admin/system/user/"+e,t.del)}function r(e={}){return s("/admin/system/user",t.post,e)}function a(e){return s("/admin/system/user/"+e.id,t.put,e)}function i(e,n={}){return s(`/admin/system/user/${e}/updateUserImg`,t.put,n)}function m(e,n={}){return s(`/admin/system/user/${e}/resetPwd`,t.put,n)}function d(e,n={}){return s(`/admin/system/user/${e}/updateUserPwd`,t.put,n)}function o(e={}){return s("/upload",t.post,e)}export{o as a,i as b,d as c,u as d,r as e,n as g,e as l,m as r,a as u};
