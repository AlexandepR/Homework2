(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],{21:function(e,t,n){e.exports={activeNav:"hm5_activeNav__2nsb_",navbar:"hm5_navbar__3LPYV",error:"hm5_error__OS4mp",sideBar:"hm5_sideBar__3PNB1",headerNavbar:"hm5_headerNavbar__2ioWb",button:"hm5_button__4TDyL"}},23:function(e,t,n){e.exports={range:"SuperRange_range__RRsZY",minMax:"SuperRange_minMax__3_3SQ",labelRange:"SuperRange_labelRange__1trS7",rangeWrap:"SuperRange_rangeWrap__3Teim",rangeSlider:"SuperRange_rangeSlider__31RFX"}},24:function(e,t,n){e.exports={homeWork2:"HW2_homeWork2__2rCsE",button:"HW2_button__200rX",putButton:"HW2_putButton__303HG",buttonX:"HW2_buttonX__1JbIw",nameN:"HW2_nameN__3MCc9"}},28:function(e,t,n){e.exports={message:"Message_message__8uNVK",avatar:"Message_avatar__3iyx7",name:"Message_name__3xA-F",messageText:"Message_messageText__2sPm1",time:"Message_time__fxNFr"}},34:function(e,t,n){e.exports={buttonAddUser:"Greeting_buttonAddUser__2g3ND",counterUser:"Greeting_counterUser__2NbDZ",inputClass:"Greeting_inputClass__c2xDF"}},35:function(e,t,n){e.exports={errorInput:"SuperInputText_errorInput__2539u",error:"SuperInputText_error__hXM3J",superInput:"SuperInputText_superInput__3sCHQ"}},45:function(e,t,n){e.exports={blue:"HW4_blue__NungY",column:"HW4_column__2bK_N",testSpanError:"HW4_testSpanError__2g7TO",input:"HW4_input__2wRV3",buttonDefault:"HW4_buttonDefault__xV0TZ"}},46:function(e,t,n){e.exports={default:"SuperButton_default__3jaPd",red:"SuperButton_red__2LIWV",blink:"SuperButton_blink__3uGHp"}},47:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1J60V",spanClassName:"SuperCheckbox_spanClassName__1jH7E"}},48:function(e,t,n){e.exports={select:"select_select__2_34_",opinion:"select_opinion__XNRh2"}},49:function(e,t,n){e.exports={dark:"HW12_dark__2gi5u","dark-text":"HW12_dark-text__2KCjO",red:"HW12_red__3t-D7","red-text":"HW12_red-text__2ty63",some:"HW12_some__r2iaD","some-text":"HW12_some-text__2sJgJ"}},54:function(e,t,n){e.exports={App:"App_App__3dqMd"}},58:function(e,t,n){e.exports={span:"SuperSpan_span__1Qn3m"}},59:function(e,t,n){e.exports={radio:"radio_radio__3XxxJ"}},60:function(e,t,n){e.exports={users:"hw_users__28FB7"}},74:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(37),s=n.n(r),i=(n(74),n(54)),o=n.n(i),j=n(26),l=n(21),u=n.n(l),b=n(10),d=n(0);var O=function(){return Object(d.jsx)("div",{className:u.a.error})},h=n(28),x=n.n(h);var p=function(e){return Object(d.jsxs)("div",{className:x.a.message,children:[Object(d.jsx)("div",{className:x.a.avatar,children:Object(d.jsx)("img",{src:e.avatar})}),Object(d.jsxs)("div",{className:x.a.messageText,children:[Object(d.jsx)("div",{className:x.a.name,children:e.name}),Object(d.jsx)("div",{className:x.a.messageText,children:e.message}),Object(d.jsx)("div",{className:x.a.time,children:e.time})]})]})},m="https://i.pinimg.com/736x/a8/53/87/a85387440d54d8536c1f66b8eb8b2268--line-sketch-pencil.jpg",v="Alice",_="Hey there! How are you doing?",f="22:00";var g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p,{avatar:m,name:v,message:_,time:f})})},N=n(6),C=n(24),k=n.n(C);var y=function(e){return Object(d.jsxs)("div",{className:k.a.nameN,children:[e.affair.name,Object(d.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},className:k.a.buttonX,children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?k.a.putButton:k.a.button};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:n("all"),children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:n("high"),children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:n("middle"),children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:n("low"),children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(w),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(N.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):[]}(n,i);return Object(d.jsx)("div",{className:k.a.homeWork2,children:Object(d.jsx)(S,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})})},W=n(12),H=n(34),A=n.n(H),E=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onOff,i=e.enterButton;A.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,onKeyPress:i,className:A.a.inputClass}),Object(d.jsx)("button",{onClick:a,disabled:s,className:A.a.buttonAddUser,children:"add"}),Object(d.jsx)("span",{className:A.a.counterUser,children:r}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:c})})]})},I=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(N.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(N.a)(o,2),l=j[0],u=j[1],b=Object(a.useState)(!1),O=Object(N.a)(b,2),h=O[0],x=O[1],p=h,m=function(){""===s&&(x(!0),u("    Enter the correct name!!!")),""!==s&&(u(""),x(!1),n(s),alert("Hello ".concat(s," !")),i(""))},v=t.length;return Object(d.jsx)(E,{name:s,setNameCallback:function(e){x(!1),i(e.currentTarget.value)},addUser:m,error:l,totalUsers:v,onOff:p,enterButton:function(e){"Enter"===e.key&&m()}})},R=n(105);var D=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(R.a)(),name:e};c([t].concat(Object(W.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},M=n(7),B=n(17),F=n(35),L=n.n(F),V=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(L.a.error," ").concat(i||""),l="".concat(L.a.input," ").concat(r?L.a.errorInput:L.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},P=n(45),J=n.n(P),U=n(46),X=n.n(U),K=function(e){var t=e.red,n=e.className,a=Object(B.a)(e,["red","className"]),c="".concat(t?X.a.red:X.a.default," ").concat(n);return Object(d.jsx)("button",Object(M.a)({className:c},a))},G=n(47),Q=n.n(G),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:Q.a.spanClassName,children:c})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(N.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:J.a.column,children:[Object(d.jsx)(V,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(V,{className:J.a.blue}),Object(d.jsx)(K,{children:"default"}),Object(d.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(K,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},q=n(58),z=n.n(q),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(N.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,h=Object(B.a)(l,["children","onDoubleClick","className"]),x="".concat(z.a.span," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(V,Object(M.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:u||r.value}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)($,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(K,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(d.jsx)(K,{onClick:function(){c(te("restore-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(T,{}),Object(d.jsx)(D,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(ne,{})]})},ce=n(48),re=n.n(ce),se=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(B.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(d.jsx)("option",{className:re.a.option,value:e,children:e},t)})):[];return Object(d.jsx)("select",Object(M.a)(Object(M.a)({className:re.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},ie=n(59),oe=n.n(ie),je=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=(e.onChange,e.onChangeOption),r=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),s=function(e){c&&c(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(M.a)({className:oe.a.radio,onChange:s,name:t,checked:e===a,value:e,type:"radio"},r)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},le=["x","y","z"];var ue=function(){var e=Object(a.useState)(le[1]),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(se,{options:le,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(je,{name:"radio",options:le,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"sort":var n=Object(W.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},de=n(60),Oe=n.n(de),he=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var xe=function(){var e=Object(a.useState)(he),t=Object(N.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:Oe.a.users,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsx)("div",{children:Object(d.jsx)(K,{onClick:function(){return c(be(he,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(K,{onClick:function(){return c(be(he,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(K,{onClick:function(){return c(be(he,{type:"check",payload:18}))},children:"check 18"})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var pe=function(){var e=Object(a.useState)(0),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(N.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(N.a)(j,2),u=l[0],b=l[1],O=function(){clearTimeout(n)},h=i?[i.getHours(),":",i.getMinutes(),":",i.getSeconds()<10?"0"+i.getSeconds():i.getSeconds()]:Object(d.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(K,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(K,{onClick:O,children:"stop"})]})};var me=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(pe,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ve=n(25),_e={IsLoading:!1},fe=function(e){return{type:"SET_LOADING",IsLoading:e}};var ge=function(){var e=Object(ve.b)(),t=Object(ve.c)((function(e){return e.loading.IsLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsxs)("div",{children:["\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430...",Object(d.jsx)("img",{src:"https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif",width:"100",height:"100"})]}):Object(d.jsx)("div",{children:Object(d.jsx)(K,{onClick:function(){var t=fe(!0);e(t),setTimeout((function(){e(fe(!1))}),1500),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Ne=n(23),Ce=n.n(Ne),ke=function(e){return Object(d.jsx)("div",{className:Ce.a.rangeWrap,children:Object(d.jsx)("div",{className:Ce.a.rangeSlider,children:Object(d.jsxs)("div",{className:Ce.a.labelRange,children:[Object(d.jsxs)("div",{className:Ce.a.minMax,children:[Object(d.jsx)("span",{children:e.value1}),Object(d.jsx)("span",{children:"100"})]}),Object(d.jsx)("input",{type:"range",value:e.value1,list:"tickmarks",min:"0",max:"100",onChange:function(t){e.setValue1(+t.currentTarget.value),e.setValue2([+t.currentTarget.value,e.value2[1]])}})]})})})},ye=n(104),Se=n(107);function we(e){return"".concat(e,"\xb0C")}var Te=function(e){var t=e.value2,n=e.setValue2;return Object(d.jsx)("div",{className:Ce.a.rangeWrap,children:Object(d.jsx)("div",{className:Ce.a.rangeSlider,children:Object(d.jsxs)("div",{className:Ce.a.labelRange,children:[Object(d.jsxs)("div",{className:Ce.a.minMax,children:[Object(d.jsx)("span",{children:"0"}),Object(d.jsx)("span",{children:"100"})]}),Object(d.jsx)(Se.a,{sx:{width:250},children:Object(d.jsx)(ye.a,{getAriaLabel:function(){return"Minimum distance"},value:t,onChange:function(t,a,c){Array.isArray(a)&&(n(a),e.setValue1(a[0]))},valueLabelDisplay:"on",getAriaValueText:we,color:"secondary",disableSwap:!0})})]})})})};var We=function(){var e=Object(a.useState)(3),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([0,50]),s=Object(N.a)(r,2),i=s[0],o=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 11",Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(ke,{setValue1:c,setValue2:o,value1:n,value2:i})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:i[0]}),Object(d.jsx)(Te,{setValue1:c,setValue2:o,value2:i,value1:n}),Object(d.jsx)("span",{children:i[0]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},He=n(49),Ae=n.n(He),Ee={value:"light"};var Ie=function(){var e=Object(ve.c)((function(e){return e.themeReducer})),t=Object(ve.b)(),n=e.value,a=function(e){t({type:"DARK",value:e.currentTarget.value}),console.log(e.target.value)};return Object(d.jsxs)("div",{className:Ae.a[n],children:[Object(d.jsx)("hr",{}),Object(d.jsx)("span",{className:Ae.a[n+"-text"],children:"homeworks 12"}),Object(d.jsx)("span",{children:"dark"}),Object(d.jsx)("input",{type:"radio",name:"change",value:"dark",onChange:a}),Object(d.jsx)("span",{children:"light"}),Object(d.jsx)("input",{type:"radio",name:"change",value:"light",onChange:a}),Object(d.jsx)("span",{children:"red"}),Object(d.jsx)("input",{type:"radio",name:"change",value:"red",onChange:a}),Object(d.jsx)("span",{children:"red-text"}),Object(d.jsx)("input",{type:"radio",name:"change",value:"red-text",onChange:a}),Object(d.jsx)("span",{children:"some"}),Object(d.jsx)("input",{type:"radio",name:"change",value:"some",onChange:a}),Object(d.jsx)("span",{children:"some-text"}),Object(d.jsx)("input",{type:"radio",name:"change",value:"some-text",onChange:a}),Object(d.jsx)("hr",{})]})};function Re(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ue,{}),Object(d.jsx)(xe,{}),Object(d.jsx)(me,{}),Object(d.jsx)(ge,{}),Object(d.jsx)(We,{}),Object(d.jsx)(Ie,{})]})}function De(){return Object(d.jsx)("div",{})}var Me="/pre-junior",Be="/junior",Fe="/juniorPlus";var Le=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(b.a,{to:Me})}}),Object(d.jsx)(b.b,{path:Me,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(b.b,{path:Be,render:function(){return Object(d.jsx)(Re,{})}}),Object(d.jsx)(b.b,{path:Fe,render:function(){return Object(d.jsx)(De,{})}}),Object(d.jsx)(b.b,{render:function(){return Object(d.jsx)(O,{})}})]})})};var Ve=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:u.a.headerNavbar,children:[Object(d.jsx)(j.b,{to:Me,activeClassName:u.a.activeNav,className:u.a.navbar,children:"PreJunior "}),Object(d.jsx)(j.b,{to:Be,activeClassName:u.a.activeNav,className:u.a.navbar,children:"Junior "}),Object(d.jsx)(j.b,{to:Fe,activeClassName:u.a.activeNav,className:u.a.navbar,children:"Junior+"}),Object(d.jsx)("div",{className:u.a.button,children:"Push me"})]})})};var Pe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(Ve,{}),Object(d.jsx)(Le,{})]})})};var Je=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Pe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=n(52),Xe=Object(Ue.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(M.a)(Object(M.a)({},e),{},{IsLoading:t.IsLoading});default:return e}},themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DARK":case"LIGHT":case"RED":case"RED-TEXT":case"SOME":case"SOME-TEXT":return Object(M.a)(Object(M.a)({},e),{},{value:t.value});default:return e}}}),Ke=Object(Ue.b)(Xe),Ge=Ke;window.store=Ke,s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ve.a,{store:Ge,children:Object(d.jsx)(Je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[89,1,2]]]);
//# sourceMappingURL=main.ac44e33f.chunk.js.map