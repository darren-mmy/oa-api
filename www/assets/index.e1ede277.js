import{H as n}from"./index.da4ff793.js";function r(a={}){return n("/admin/finance/salary","GET",a)}function t(a){return n("/admin/finance/salary/"+a,"GET",{},!1)}function i(a){return n("/admin/finance/salary/"+a,"DELETE")}function l(a={}){return n("/admin/finance/salary","POST",a)}function f(a={}){return n("/admin/finance/salary/createEmployeeSalary","POST",a)}function y(a){return n("/admin/finance/salary/"+a.id,"PUT",a)}export{t as a,l as b,f as c,i as d,r as g,y as u};