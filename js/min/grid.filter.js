(function(b){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],b):"object"===typeof exports?b(require("jquery")):b(jQuery)})(function(b){var p=b.jgrid;b.fn.jqFilter=function(k){if("string"===typeof k){var t=b.fn.jqFilter[k];if(!t)throw"jqFilter - No such method: "+k;var C=b.makeArray(arguments).slice(1);return t.apply(this,C)}var a=b.extend(!0,{filter:null,columns:[],onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,
sopt:null,ops:[],operands:null,numopts:"eq ne lt le gt ge nu nn in ni".split(" "),stropts:"eq ne bw bn ew en cn nc nu nn in ni".split(" "),strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},p.filter,k||{});return this.each(function(){if(!this.filter){this.p=a;if(null===a.filter||void 0===a.filter)a.filter={groupOp:a.groupOps[0].op,rules:[],groups:[]};var k,t=a.columns.length,e,E=/msie/i.test(navigator.userAgent)&&!window.opera,
z=function(){return b("#"+p.jqID(a.id))[0]||null},r=function(f,a){return b(z()).jqGrid("getGuiStyles",f,a||"")},A=function(f){return b(z()).jqGrid("getGridRes","search."+f)},D=r("states.error"),C=r("dialog.content");a.initFilter=b.extend(!0,{},a.filter);if(t){for(k=0;k<t;k++)e=a.columns[k],e.stype?e.inputtype=e.stype:e.inputtype||(e.inputtype="text"),e.sorttype?e.searchtype=e.sorttype:e.searchtype||(e.searchtype="string"),void 0===e.hidden&&(e.hidden=!1),e.label||(e.label=e.name),e.index&&(e.name=
e.index),e.hasOwnProperty("searchoptions")||(e.searchoptions={}),e.hasOwnProperty("searchrules")||(e.searchrules={});a.showQuery&&b(this).append("<table class='queryresult "+C+"' style='display:block;max-width:440px;border:0px none;' dir='"+a.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var F=function(f,l){var c=[!0,""],g=z();if(b.isFunction(l.searchrules))c=l.searchrules.call(g,f,l);else if(p&&p.checkValues)try{c=p.checkValues.call(g,f,-1,l.searchrules,l.label)}catch(u){}c&&
c.length&&!1===c[0]&&(a.error=!c[0],a.errmsg=c[1])};this.onchange=function(){a.error=!1;a.errmsg="";return b.isFunction(a.onChange)?a.onChange.call(this,a):!1};this.reDraw=function(){b("table.group:first",this).remove();var f=this.createTableForGroup(a.filter,null);b(this).append(f);b.isFunction(a.afterRedraw)&&a.afterRedraw.call(this,a)};this.createTableForGroup=function(f,l){var c=this,g,u=b("<table class='"+r("searchDialog.operationGroup","group")+"' style='border:0px none;'><tbody></tbody></table>"),
d="left";"rtl"===a.direction&&(d="right",u.attr("dir","rtl"));null===l&&u.append("<tr class='error' style='display:none;'><th colspan='5' class='"+D+"' align='"+d+"'></th></tr>");var h=b("<tr></tr>");u.append(h);d=b("<th colspan='5' align='"+d+"'></th>");h.append(d);if(!0===a.ruleButtons){var k=b("<select class='"+r("searchDialog.operationSelect","opsel")+"'></select>");d.append(k);var h="",e;for(g=0;g<a.groupOps.length;g++)e=f.groupOp===c.p.groupOps[g].op?" selected='selected'":"",h+="<option value='"+
c.p.groupOps[g].op+"'"+e+">"+c.p.groupOps[g].text+"</option>";k.append(h).bind("change",function(){f.groupOp=b(k).val();c.onchange()})}h="<span></span>";a.groupButton&&(h=b("<input type='button' value='+ {}' title='"+A("addGroupTitle")+"' class='"+r("searchDialog.addGroupButton","add-group")+"'/>"),h.bind("click",function(){void 0===f.groups&&(f.groups=[]);f.groups.push({groupOp:a.groupOps[0].op,rules:[],groups:[]});c.reDraw();c.onchange();return!1}));d.append(h);if(!0===a.ruleButtons){var h=b("<input type='button' value='+' title='"+
A("addRuleTitle")+"' class='"+r("searchDialog.addRuleButton","add-rule ui-add")+"'/>"),n;h.bind("click",function(){var a,d,h;void 0===f.rules&&(f.rules=[]);for(g=0;g<c.p.columns.length;g++)if(a=void 0===c.p.columns[g].search?!0:c.p.columns[g].search,d=!0===c.p.columns[g].hidden,(h=!0===c.p.columns[g].searchoptions.searchhidden)&&a||a&&!d){n=c.p.columns[g];break}a=n.searchoptions.sopt?n.searchoptions.sopt:c.p.sopt?c.p.sopt:-1!==b.inArray(n.searchtype,c.p.strarr)?c.p.stropts:c.p.numopts;f.rules.push({field:n.name,
op:a[0],data:""});c.reDraw();return!1});d.append(h)}null!==l&&(h=b("<input type='button' value='-' title='"+A("deleteGroupTitle")+"' class='"+r("searchDialog.deleteGroupButton","delete-group")+"'/>"),d.append(h),h.bind("click",function(){for(g=0;g<l.groups.length;g++)if(l.groups[g]===f){l.groups.splice(g,1);break}c.reDraw();c.onchange();return!1}));if(void 0!==f.groups)for(g=0;g<f.groups.length;g++)d=b("<tr></tr>"),u.append(d),h=b("<td class='first'></td>"),d.append(h),h=b("<td colspan='4'></td>"),
h.append(this.createTableForGroup(f.groups[g],f)),d.append(h);void 0===f.groupOp&&(f.groupOp=c.p.groupOps[0].op);if(void 0!==f.rules)for(g=0;g<f.rules.length;g++)u.append(this.createTableRowForRule(f.rules[g],f));return u};this.createTableRowForRule=function(f,l){var c=this,g=z(),k=b("<tr></tr>"),d,h,e,m="",n;k.append("<td class='first'></td>");var q=b("<td class='columns'></td>");k.append(q);var t=b("<select class='"+r("searchDialog.label","selectLabel")+"'></select>"),w,v=[];q.append(t);t.bind("change",
function(){f.field=b(t).val();var a=b(this).parents("tr:first"),d,l;for(l=0;l<c.p.columns.length;l++)if(c.p.columns[l].name===f.field){d=c.p.columns[l];break}if(d){var e=b.extend({},d.searchoptions||{},{id:p.randId(),name:d.name,mode:"search"});E&&"text"===d.inputtype&&!e.size&&(e.size=10);var k=p.createEl.call(g,d.inputtype,e,"",!0,c.p.ajaxSelectOptions||{},!0);b(k).addClass(r("searchDialog.elem","input-elm"));h=e.sopt?e.sopt:c.p.sopt?c.p.sopt:-1!==b.inArray(d.searchtype,c.p.strarr)?c.p.stropts:
c.p.numopts;d="";var u=0,m,n;v=[];b.each(c.p.ops,function(){v.push(this.oper)});c.p.cops&&b.each(c.p.cops,function(c){v.push(c)});for(l=0;l<h.length;l++)n=h[l],w=b.inArray(h[l],v),-1!==w&&(m=c.p.ops[w],m=void 0!==m?m.text:c.p.cops[n].text,0===u&&(f.op=n),d+="<option value='"+n+"'>"+m+"</option>",u++);b(".selectopts",a).empty().append(d);b(".selectopts",a)[0].selectedIndex=0;p.msie&&9>p.msiever()&&(l=parseInt(b("select.selectopts",a)[0].offsetWidth,10)+1,b(".selectopts",a).width(l),b(".selectopts",
a).css("width","auto"));b(".data",a).empty().append(k);p.bindEv.call(g,k,e);b(".input-elm",a).bind("change",function(a){a=a.target;f.data="SPAN"===a.nodeName.toUpperCase()&&e&&b.isFunction(e.custom_value)?e.custom_value.call(g,b(a).children(".customelement:first"),"get"):a.value;c.onchange()});setTimeout(function(){f.data=b(k).val();c.onchange()},0)}});var q=0,x,y;for(d=0;d<c.p.columns.length;d++)if(n=void 0===c.p.columns[d].search?!0:c.p.columns[d].search,x=!0===c.p.columns[d].hidden,(y=!0===c.p.columns[d].searchoptions.searchhidden)&&
n||n&&!x)n="",f.field===c.p.columns[d].name&&(n=" selected='selected'",q=d),m+="<option value='"+c.p.columns[d].name+"'"+n+">"+c.p.columns[d].label+"</option>";t.append(m);m=b("<td class='operators'></td>");k.append(m);e=a.columns[q];E&&"text"===e.inputtype&&!e.searchoptions.size&&(e.searchoptions.size=10);q=p.createEl.call(g,e.inputtype,b.extend({},e.searchoptions||{},{id:p.randId(),name:e.name}),f.data,!0,c.p.ajaxSelectOptions||{},!0);if("nu"===f.op||"nn"===f.op)b(q).attr("readonly","true"),b(q).attr("disabled",
"true");var B=b("<select class='"+r("searchDialog.operator","selectopts")+"'></select>");m.append(B);B.bind("change",function(){f.op=b(B).val();var a=b(this).parents("tr:first"),a=b(".input-elm",a)[0];"nu"===f.op||"nn"===f.op?(f.data="","SELECT"!==a.tagName.toUpperCase()&&(a.value=""),a.setAttribute("readonly","true"),a.setAttribute("disabled","true")):("SELECT"===a.tagName.toUpperCase()&&(f.data=a.value),a.removeAttribute("readonly"),a.removeAttribute("disabled"));c.onchange()});h=e.searchoptions.sopt?
e.searchoptions.sopt:c.p.sopt?c.p.sopt:-1!==b.inArray(e.searchtype,c.p.strarr)?c.p.stropts:c.p.numopts;m="";b.each(c.p.ops,function(){v.push(this.oper)});c.p.cops&&b.each(c.p.cops,function(c){v.push(c)});for(d=0;d<h.length;d++)y=h[d],w=b.inArray(h[d],v),-1!==w&&(x=c.p.ops[w],n=f.op===y?" selected='selected'":"",m+="<option value='"+y+"'"+n+">"+(void 0!==x?x.text:c.p.cops[y].text)+"</option>");B.append(m);m=b("<td class='data'></td>");k.append(m);m.append(q);p.bindEv.call(g,q,e.searchoptions);b(q).addClass(r("searchDialog.elem",
"input-elm")).bind("change",function(){f.data="custom"===e.inputtype?e.searchoptions.custom_value.call(g,b(this).children(".customelement:first"),"get"):b(this).val();c.onchange()});m=b("<td></td>");k.append(m);!0===a.ruleButtons&&(q=b("<input type='button' value='-' title='"+A("deleteRuleTitle")+"' class='"+r("searchDialog.deleteRuleButton","delete-rule ui-del")+"'/>"),m.append(q),q.bind("click",function(){for(d=0;d<l.rules.length;d++)if(l.rules[d]===f){l.rules.splice(d,1);break}c.reDraw();c.onchange();
return!1}));return k};this.getStringForGroup=function(a){var b="(",c;if(void 0!==a.groups)for(c=0;c<a.groups.length;c++){1<b.length&&(b+=" "+a.groupOp+" ");try{b+=this.getStringForGroup(a.groups[c])}catch(g){alert(g)}}if(void 0!==a.rules)try{for(c=0;c<a.rules.length;c++)1<b.length&&(b+=" "+a.groupOp+" "),b+=this.getStringForRule(a.rules[c])}catch(g){alert(g)}b+=")";return"()"===b?"":b};this.getStringForRule=function(f){var e="",c="",g,k,d=f.data,h;for(g=0;g<a.ops.length;g++)if(a.ops[g].oper===f.op){e=
a.operands.hasOwnProperty(f.op)?a.operands[f.op]:"";c=a.ops[g].oper;break}if(""===c&&null!=a.cops)for(h in a.cops)if(a.cops.hasOwnProperty(h)&&(c=h,e=a.cops[h].operand,b.isFunction(a.cops[h].buildQueryValue)))return a.cops[h].buildQueryValue.call(a,{cmName:f.field,searchValue:d,operand:e});for(g=0;g<a.columns.length;g++)if(a.columns[g].name===f.field){k=a.columns[g];break}if(null==k)return"";if("bw"===c||"bn"===c)d+="%";if("ew"===c||"en"===c)d="%"+d;if("cn"===c||"nc"===c)d="%"+d+"%";if("in"===c||
"ni"===c)d=" ("+d+")";a.errorcheck&&F(f.data,k);return-1!==b.inArray(k.searchtype,["int","integer","float","number","currency"])||"nn"===c||"nu"===c?f.field+" "+e+" "+d:f.field+" "+e+' "'+d+'"'};this.resetFilter=function(){a.filter=b.extend(!0,{},a.initFilter);this.reDraw();this.onchange()};this.hideError=function(){b("th."+D,this).html("");b("tr.error",this).hide()};this.showError=function(){b("th."+D,this).html(a.errmsg);b("tr.error",this).show()};this.toUserFriendlyString=function(){return this.getStringForGroup(a.filter)};
this.toString=function(){function b(c){var a="(",k;if(void 0!==c.groups)for(k=0;k<c.groups.length;k++)1<a.length&&(a="OR"===c.groupOp?a+" || ":a+" && "),a+=b(c.groups[k]);if(void 0!==c.rules)for(k=0;k<c.rules.length;k++){1<a.length&&(a="OR"===c.groupOp?a+" || ":a+" && ");var d=c.rules[k];if(e.p.errorcheck){for(var h=void 0,p=void 0,h=0;h<e.p.columns.length;h++)if(e.p.columns[h].name===d.field){p=e.p.columns[h];break}p&&F(d.data,p)}a+=d.op+"(item."+d.field+",'"+d.data+"')"}a+=")";return"()"===a?"":
a}var e=this;return b(a.filter)};this.reDraw();if(a.showQuery)this.onchange();this.filter=!0}}})};b.extend(b.fn.jqFilter,{toSQLString:function(){var b="";this.each(function(){b=this.toUserFriendlyString()});return b},filterData:function(){var b;this.each(function(){b=this.p.filter});return b},getParameter:function(b){return void 0!==b&&this.p.hasOwnProperty(b)?this.p[b]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(k){"string"===typeof k&&(k=b.parseJSON(k));
this.each(function(){this.p.filter=k;this.reDraw();this.onchange()})}})});
//# sourceMappingURL=grid.filter.map
