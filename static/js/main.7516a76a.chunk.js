(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],[,,,function(e,t,n){e.exports={homeWork2:"HW2_homeWork2__2rCsE",button:"HW2_button__200rX",putButton:"HW2_putButton__303HG",buttonX:"HW2_buttonX__1JbIw",nameN:"HW2_nameN__3MCc9"}},function(e,t,n){e.exports={message:"Message_message__8uNVK",avatar:"Message_avatar__3iyx7",name:"Message_name__3xA-F",messageText:"Message_messageText__2sPm1",time:"Message_time__fxNFr"}},,,,function(e,t,n){e.exports={buttonAddUser:"Greeting_buttonAddUser__2g3ND",counterUser:"Greeting_counterUser__2NbDZ",inputClass:"Greeting_inputClass__c2xDF"}},function(e,t,n){e.exports={errorInput:"SuperInputText_errorInput__2539u",error:"SuperInputText_error__hXM3J",superInput:"SuperInputText_superInput__3sCHQ"}},,,function(e,t,n){e.exports={blue:"HW4_blue__NungY",column:"HW4_column__2bK_N",testSpanError:"HW4_testSpanError__2g7TO",input:"HW4_input__2wRV3",buttonDefault:"HW4_buttonDefault__xV0TZ"}},function(e,t,n){e.exports={default:"SuperButton_default__3jaPd",red:"SuperButton_red__2LIWV",blink:"SuperButton_blink__3uGHp"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1J60V",spanClassName:"SuperCheckbox_spanClassName__1jH7E"}},,function(e,t,n){e.exports={App:"App_App__3dqMd"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(15),s=n.n(c),i=(n(22),n(16)),o=n.n(i),l=n(4),u=n.n(l),j=n(0);var d=function(e){return Object(j.jsxs)("div",{className:u.a.message,children:[Object(j.jsx)("div",{className:u.a.avatar,children:Object(j.jsx)("img",{src:e.avatar})}),Object(j.jsxs)("div",{className:u.a.messageText,children:[Object(j.jsx)("div",{className:u.a.name,children:e.name}),Object(j.jsx)("div",{className:u.a.messageText,children:e.message}),Object(j.jsx)("div",{className:u.a.time,children:e.time})]})]})},b="https://i.pinimg.com/736x/a8/53/87/a85387440d54d8536c1f66b8eb8b2268--line-sketch-pencil.jpg",h="Alice",m="Hey there! How are you doing?",x="22:00";var _=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(d,{avatar:b,name:h,message:m,time:x})})},O=n(2),p=n(3),f=n.n(p);var g=function(e){return Object(j.jsxs)("div",{className:f.a.nameN,children:[e.affair.name,Object(j.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},className:f.a.buttonX,children:"X"})]})};var v=function(e){var t=e.data.map((function(t){return Object(j.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?f.a.putButton:f.a.button};return Object(j.jsxs)("div",{children:[t,Object(j.jsx)("button",{onClick:function(){e.setFilter("all")},className:n("all"),children:"All"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("high")},className:n("high"),children:"High"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("middle")},className:n("middle"),children:"Middle"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("low")},className:n("low"),children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(a.useState)(N),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(O.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):[]}(n,i);return Object(j.jsx)("div",{className:f.a.homeWork2,children:Object(j.jsx)(v,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})})},k=n(17),y=n(8),w=n.n(y),S=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onOff,i=e.enterButton;w.a.error;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:t,onChange:n,onKeyPress:i,className:w.a.inputClass}),Object(j.jsx)("button",{onClick:a,disabled:s,className:w.a.buttonAddUser,children:"add"}),Object(j.jsx)("span",{className:w.a.counterUser,children:c}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:r})})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(O.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(O.a)(o,2),u=l[0],d=l[1],b=Object(a.useState)(!1),h=Object(O.a)(b,2),m=h[0],x=h[1],_=m,p=function(){""===s&&(x(!0),d("    Enter the correct name!!!")),""!==s&&(d(""),x(!1),n(s),alert("Hello ".concat(s," !")),i(""))},f=t.length;return Object(j.jsx)(S,{name:s,setNameCallback:function(e){x(!1),i(e.currentTarget.value)},addUser:p,error:u,totalUsers:f,onOff:_,enterButton:function(e){"Enter"===e.key&&p()}})},T=n(26);var W=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)(H,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};r([t].concat(Object(k.a)(n)))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},A=n(5),I=n(6),U=n(9),E=n.n(U),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(E.a.error," ").concat(i||""),u="".concat(E.a.input," ").concat(c?E.a.errorInput:E.a.superInput," ").concat(s);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(A.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},o)),c&&Object(j.jsx)("span",{className:l,children:c})]})},M=n(12),F=n.n(M),K=n(13),P=n.n(K),X=function(e){var t=e.red,n=e.className,a=Object(I.a)(e,["red","className"]),r="".concat(t?P.a.red:P.a.default," ").concat(n);return Object(j.jsx)("button",Object(A.a)({className:r},a))},D=n(14),G=n.n(D),J=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(a||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(A.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(j.jsx)("span",{className:G.a.spanClassName,children:r})]})};var V=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(O.a)(i,2),l=o[0],u=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:F.a.column,children:[Object(j.jsx)(B,{value:n,onChangeText:r,onEnter:s,error:c}),Object(j.jsx)(B,{className:F.a.blue}),Object(j.jsx)(X,{children:"default"}),Object(j.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(X,{disabled:!0,children:"disabled"}),Object(j.jsx)(J,{checked:l,onChangeChecked:u,children:"some text "}),Object(j.jsx)(J,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var L=function(){return Object(j.jsx)("div",{children:"// add NavLinks"})};var R=function(){return Object(j.jsx)("div",{children:"// add routes"})};var Z=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(L,{}),Object(j.jsx)(R,{})]})};var q=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)(_,{}),Object(j.jsx)(C,{}),Object(j.jsx)(W,{}),Object(j.jsx)(V,{}),Object(j.jsx)(Z,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.7516a76a.chunk.js.map