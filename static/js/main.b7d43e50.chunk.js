(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],{11:function(e,t,n){e.exports={activeNav:"hm5_activeNav__2nsb_",navbar:"hm5_navbar__3LPYV",error:"hm5_error__OS4mp",sideBar:"hm5_sideBar__3PNB1",headerNavbar:"hm5_headerNavbar__2ioWb",button:"hm5_button__4TDyL"}},12:function(e,t,n){e.exports={homeWork2:"HW2_homeWork2__2rCsE",button:"HW2_button__200rX",putButton:"HW2_putButton__303HG",buttonX:"HW2_buttonX__1JbIw",nameN:"HW2_nameN__3MCc9"}},15:function(e,t,n){e.exports={message:"Message_message__8uNVK",avatar:"Message_avatar__3iyx7",name:"Message_name__3xA-F",messageText:"Message_messageText__2sPm1",time:"Message_time__fxNFr"}},19:function(e,t,n){e.exports={buttonAddUser:"Greeting_buttonAddUser__2g3ND",counterUser:"Greeting_counterUser__2NbDZ",inputClass:"Greeting_inputClass__c2xDF"}},20:function(e,t,n){e.exports={errorInput:"SuperInputText_errorInput__2539u",error:"SuperInputText_error__hXM3J",superInput:"SuperInputText_superInput__3sCHQ"}},26:function(e,t,n){e.exports={blue:"HW4_blue__NungY",column:"HW4_column__2bK_N",testSpanError:"HW4_testSpanError__2g7TO",input:"HW4_input__2wRV3",buttonDefault:"HW4_buttonDefault__xV0TZ"}},27:function(e,t,n){e.exports={default:"SuperButton_default__3jaPd",red:"SuperButton_red__2LIWV",blink:"SuperButton_blink__3uGHp"}},28:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1J60V",spanClassName:"SuperCheckbox_spanClassName__1jH7E"}},31:function(e,t,n){e.exports={select:"select_select__2_34_",opinion:"select_opinion__XNRh2"}},35:function(e,t,n){e.exports={App:"App_App__3dqMd"}},37:function(e,t,n){e.exports={span:"SuperSpan_span__1Qn3m"}},38:function(e,t,n){e.exports={radio:"radio_radio__3XxxJ"}},39:function(e,t,n){e.exports={users:"hw_users__28FB7"}},45:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(21),s=n.n(r),i=(n(45),n(35)),o=n.n(i),j=n(13),u=n(11),l=n.n(u),b=n(4),d=n(0);var O=function(){return Object(d.jsx)("div",{className:l.a.error})},h=n(15),x=n.n(h);var m=function(e){return Object(d.jsxs)("div",{className:x.a.message,children:[Object(d.jsx)("div",{className:x.a.avatar,children:Object(d.jsx)("img",{src:e.avatar})}),Object(d.jsxs)("div",{className:x.a.messageText,children:[Object(d.jsx)("div",{className:x.a.name,children:e.name}),Object(d.jsx)("div",{className:x.a.messageText,children:e.message}),Object(d.jsx)("div",{className:x.a.time,children:e.time})]})]})},p="https://i.pinimg.com/736x/a8/53/87/a85387440d54d8536c1f66b8eb8b2268--line-sketch-pencil.jpg",v="Alice",f="Hey there! How are you doing?",_="22:00";var g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m,{avatar:p,name:v,message:f,time:_})})},N=n(3),C=n(12),k=n.n(C);var y=function(e){return Object(d.jsxs)("div",{className:k.a.nameN,children:[e.affair.name,Object(d.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},className:k.a.buttonX,children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?k.a.putButton:k.a.button};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:n("all"),children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:n("high"),children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:n("middle"),children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:n("low"),children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(c.useState)(w),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(N.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):[]}(n,i);return Object(d.jsx)("div",{className:k.a.homeWork2,children:Object(d.jsx)(S,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})})},I=n(23),H=n(19),A=n.n(H),B=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=e.onOff,i=e.enterButton;A.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,onKeyPress:i,className:A.a.inputClass}),Object(d.jsx)("button",{onClick:c,disabled:s,className:A.a.buttonAddUser,children:"add"}),Object(d.jsx)("span",{className:A.a.counterUser,children:r}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:a})})]})},E=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(N.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),j=Object(N.a)(o,2),u=j[0],l=j[1],b=Object(c.useState)(!1),O=Object(N.a)(b,2),h=O[0],x=O[1],m=h,p=function(){""===s&&(x(!0),l("    Enter the correct name!!!")),""!==s&&(l(""),x(!1),n(s),alert("Hello ".concat(s," !")),i(""))},v=t.length;return Object(d.jsx)(B,{name:s,setNameCallback:function(e){x(!1),i(e.currentTarget.value)},addUser:p,error:u,totalUsers:v,onOff:m,enterButton:function(e){"Enter"===e.key&&p()}})},W=n(62);var F=function(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(W.a)(),name:e};a([t].concat(Object(I.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},P=n(6),D=n(7),L=n(20),M=n.n(L),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(M.a.error," ").concat(i||""),u="".concat(M.a.input," ").concat(r?M.a.errorInput:M.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:u},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},J=n(26),X=n.n(J),G=n(27),K=n.n(G),V=function(e){var t=e.red,n=e.className,c=Object(D.a)(e,["red","className"]),a="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(d.jsx)("button",Object(P.a)({className:a},c))},R=n(28),Q=n.n(R),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(c||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(d.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var Z=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(N.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:X.a.column,children:[Object(d.jsx)(U,{value:n,onChangeText:a,onEnter:s,error:r}),Object(d.jsx)(U,{className:X.a.blue}),Object(d.jsx)(V,{children:"default"}),Object(d.jsx)(V,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(V,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var q=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(T,{}),Object(d.jsx)(F,{}),Object(d.jsx)(Z,{})]})};function z(){return Object(d.jsx)("div",{})}function $(){return Object(d.jsx)("div",{})}var ee="/pre-junior",te="/junior",ne="/juniorPlus";var ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(b.a,{to:ee})}}),Object(d.jsx)(b.b,{path:ee,render:function(){return Object(d.jsx)(q,{})}}),Object(d.jsx)(b.b,{path:te,render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(b.b,{path:ne,render:function(){return Object(d.jsx)($,{})}}),Object(d.jsx)(b.b,{render:function(){return Object(d.jsx)(O,{})}})]})})};var ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:l.a.headerNavbar,children:[Object(d.jsx)(j.b,{to:ee,activeClassName:l.a.activeNav,className:l.a.navbar,children:"PreJunior "}),Object(d.jsx)(j.b,{to:te,activeClassName:l.a.activeNav,className:l.a.navbar,children:"Junior "}),Object(d.jsx)(j.b,{to:ne,activeClassName:l.a.activeNav,className:l.a.navbar,children:"Junior+"}),Object(d.jsx)("div",{className:l.a.button,children:"Push me"})]})})};var re=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(ae,{}),Object(d.jsx)(ce,{})]})})},se=n(37),ie=n.n(se),oe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(N.a)(s,2),o=i[0],j=i[1],u=a||{},l=u.children,b=u.onDoubleClick,O=u.className,h=Object(D.a)(u,["children","onDoubleClick","className"]),x="".concat(ie.a.span," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(U,Object(P.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)("span",Object(P.a)(Object(P.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:l||r.value}))})};function je(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ue(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}je("test",{x:"A",y:1});ue("test",{x:"",y:0});var le=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)(oe,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(V,{onClick:function(){je("editable-span-value",n)},children:"save"}),Object(d.jsx)(V,{onClick:function(){a(ue("restore-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},be=n(31),de=n.n(be),Oe=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(D.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(d.jsx)("option",{className:de.a.option,value:e,children:e},t)})):[];return Object(d.jsx)("select",Object(P.a)(Object(P.a)({className:de.a.select,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r}))},he=n(38),xe=n.n(he),me=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=(e.onChange,e.onChangeOption),r=Object(D.a)(e,["type","name","options","value","onChange","onChangeOption"]),s=function(e){a&&a(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(P.a)({className:xe.a.radio,onChange:s,name:t,checked:e===c,value:e,type:"radio"},r)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},pe=["x","y","z"];var ve=function(){var e=Object(c.useState)(pe[1]),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)(Oe,{options:pe,value:n,onChangeOption:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(me,{name:"radio",options:pe,value:n,onChangeOption:a})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},fe=function(e,t){switch(t.type){case"sort":var n=Object(I.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},_e=n(39),ge=n.n(_e),Ne=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Ce=function(){var e=Object(c.useState)(Ne),t=Object(N.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:ge.a.users,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsx)("div",{children:Object(d.jsx)(V,{onClick:function(){return a(fe(Ne,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(V,{onClick:function(){return a(fe(Ne,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(V,{onClick:function(){return a(fe(Ne,{type:"check",payload:18}))},children:"check 18"})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ke=function(){var e=Object(c.useState)(0),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(N.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(N.a)(j,2),l=u[0],b=u[1],O=function(){clearTimeout(n)},h=i?[i.getHours(),":",i.getMinutes(),":",i.getSeconds()<10?"0"+i.getSeconds():i.getSeconds()]:Object(d.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),l?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(V,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(d.jsx)(V,{onClick:O,children:"stop"})]})};var ye=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(ke,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Se=n(18),we={IsLoading:!1},Te=function(e){return{type:"SET_LOADING",IsLoading:e}};var Ie=function(){var e=Object(Se.b)(),t=Object(Se.c)((function(e){return e.loading.IsLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsxs)("div",{children:["\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430...",Object(d.jsx)("img",{src:"https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif",width:"100",height:"100"})]}):Object(d.jsx)("div",{children:Object(d.jsx)(V,{onClick:function(){var t=Te(!0);e(t),setTimeout((function(){e(Te(!1))}),1500),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var He=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(re,{}),Object(d.jsx)(le,{}),Object(d.jsx)(ve,{}),Object(d.jsx)(Ce,{}),Object(d.jsx)(ye,{}),Object(d.jsx)(Ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=n(33),Be=Object(Ae.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(P.a)(Object(P.a)({},e),{},{IsLoading:t.IsLoading});default:return e}}}),Ee=Object(Ae.b)(Be),We=Ee;window.store=Ee,s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Se.a,{store:We,children:Object(d.jsx)(He,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.b7d43e50.chunk.js.map