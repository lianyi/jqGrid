/**
 * @license jqGrid Chinese Translation
 * 咖啡兔 yanhonglei@gmail.com
 * http://www.kafeitu.me
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b||window)),a(c),c}:a(jQuery)}(function(a){"use strict";var b={isRTL:!1,defaults:{recordtext:"{0} - {1}　共 {2} 条",emptyrecords:"无数据显示",loadtext:"读取中...",pgtext:" {0} 共 {1} 页",pgfirst:"First Page",pglast:"Last Page",pgnext:"Next Page",pgprev:"Previous Page",pgrecs:"Records per Page",showhide:"Toggle Expand Collapse Grid",savetext:"正在保存..."},search:{caption:"搜索...",Find:"查找",Reset:"重置",odata:[{oper:"eq",text:"等于　　"},{oper:"ne",text:"不等　　"},{oper:"lt",text:"小于　　"},{oper:"le",text:"小于等于"},{oper:"gt",text:"大于　　"},{oper:"ge",text:"大于等于"},{oper:"bw",text:"开始于"},{oper:"bn",text:"不开始于"},{oper:"in",text:"属于　　"},{oper:"ni",text:"不属于"},{oper:"ew",text:"结束于"},{oper:"en",text:"不结束于"},{oper:"cn",text:"包含　　"},{oper:"nc",text:"不包含"},{oper:"nu",text:"不存在"},{oper:"nn",text:"存在"}],groupOps:[{op:"AND",text:"所有"},{op:"OR",text:"任一"}],addGroupTitle:"Add subgroup",deleteGroupTitle:"Delete group",addRuleTitle:"Add rule",deleteRuleTitle:"Delete rule",operandTitle:"Click to select search operation.",resetTitle:"Reset Search Value"},edit:{addCaption:"添加记录",editCaption:"编辑记录",bSubmit:"提交",bCancel:"取消",bClose:"关闭",saveData:"数据已改变，是否保存？",bYes:"是",bNo:"否",bExit:"取消",msg:{required:"此字段必需",number:"请输入有效数字",minValue:"输值必须大于等于 ",maxValue:"输值必须小于等于 ",email:"这不是有效的e-mail地址",integer:"请输入有效整数",date:"请输入有效时间",url:"无效网址。前缀必须为 ('http://' 或 'https://')",nodefined:" 未定义！",novalue:" 需要返回值！",customarray:"自定义函数需要返回数组！",customfcheck:"必须有自定义函数!"}},view:{caption:"查看记录",bClose:"关闭"},del:{caption:"删除",msg:"删除所选记录？",bSubmit:"删除",bCancel:"取消"},nav:{edittext:"",edittitle:"编辑所选记录",addtext:"",addtitle:"添加新记录",deltext:"",deltitle:"删除所选记录",searchtext:"",searchtitle:"查找",refreshtext:"",refreshtitle:"刷新表格",alertcap:"注意",alerttext:"请选择记录",viewtext:"",viewtitle:"查看所选记录",savetext:"",savetitle:"Save row",canceltext:"",canceltitle:"Cancel row editing"},col:{caption:"选择列",bSubmit:"确定",bCancel:"取消"},errors:{errcap:"错误",nourl:"没有设置url",norecords:"没有要处理的记录",model:"colNames 和 colModel 长度不等！"},formatter:{integer:{thousandsSeparator:",",defaultValue:"0"},number:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,defaultValue:"0.00"},currency:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0.00"},date:{dayNames:["日","一","二","三","四","五","六","星期日","星期一","星期二","星期三","星期四","星期五","星期六"],monthNames:["一","二","三","四","五","六","七","八","九","十","十一","十二","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],AmPm:["am","pm","上午","下午"],S:function(){return""},srcformat:"Y-m-d",newformat:"Y-m-d",masks:{ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",YearMonth:"F, Y"}}}};a.jgrid=a.jgrid||{},a.extend(!0,a.jgrid,{defaults:{locale:"cn"},locales:{cn:a.extend({},b,{name:"中文",nameEnglish:"Chinese"}),zh:a.extend({},b,{name:"中文",nameEnglish:"Chinese"}),"zh-CN":a.extend({},b,{name:"中文(中华人民共和国)",nameEnglish:"Chinese (Simplified, PRC)"})}})});
//# sourceMappingURL=grid.locale-cn.js.map