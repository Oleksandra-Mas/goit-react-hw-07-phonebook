(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{61:function(t,e,n){},66:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(13),u=n.n(c),o=(n(61),n(12)),i=(n(65),n(99)),s=n(31),l=(n(36),n(66),n(14)),b=n(17),p=n(23),d=n.n(p),j=n(100),f=n(51),h=n(18),O=n(19),x=n(11),m=n.n(x),v=n(16),w="contacts/add",y="contacts/get",k="contacts/delete",g="contacts/changeFilter",C=n(25),A=n.n(C);function L(){return F.apply(this,arguments)}function F(){return(F=Object(O.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(t){return D.apply(this,arguments)}function D(){return(D=Object(O.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}A.a.defaults.baseURL="https://61eb12c27ec58900177cdb91.mockapi.io";var q,E,J=Object(v.b)(g),V=Object(v.c)(y,function(){var t=Object(O.a)(m.a.mark((function t(e,n){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,L();case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),W=Object(v.c)(k,function(){var t=Object(O.a)(m.a.mark((function t(e,n){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,N(e);case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),Z=Object(v.c)(w,function(){var t=Object(O.a)(m.a.mark((function t(e,n){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,z(e);case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),B=function(t){return t.contacts.filter},I=function(t){var e=function(t){return t.contacts.items}(t),n=B(t);return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},M=n(1),P=h.a.form(q||(q=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto 20px;\n"])));function U(){var t=Object(r.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),i=u[0],b=u[1],p=d.a.generate(),h=d.a.generate(),O=Object(o.b)(),x=Object(o.c)(I),m=function(t){var e=t.target,n=e.value,r=e.name;switch(r){case"name":a(n);break;case"number":b(n);break;default:throw new Error("Unknown input ".concat(r))}},v=function(){a(""),b("")};return Object(M.jsxs)(P,{onSubmit:function(t){t.preventDefault(),-1===x.findIndex((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?(O(Z({name:n,number:i})),v()):Object(s.b)("".concat(n," is already in contacts"))},children:[Object(M.jsxs)(j.a.Label,{htmlFor:p,children:["Name",Object(M.jsx)(j.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:m,id:p})]}),Object(M.jsxs)(j.a.Label,{htmlFor:h,children:["Number",Object(M.jsx)(j.a.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:m,id:h})]}),Object(M.jsx)(f.a,{variant:"outline-dark",type:"sumbit",children:"Add contact"})]})}var R,$=h.a.li(E||(E=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n"])));function G(t){var e=t.contact,n=t.onDelete;return Object(M.jsxs)($,{children:[Object(M.jsx)("p",{children:e.name}),Object(M.jsx)("a",{href:"tel:"+e.phone,children:e.phone}),Object(M.jsx)(f.a,{variant:"outline-dark",type:"button",onClick:function(){n(e.id)},children:"Delete"})]})}var H,K=h.a.ul(R||(R=Object(b.a)(["\n    margin-top: 20px;\n"])));function Q(t){var e=t.contacts,n=Object(o.b)(),a=Object(r.useCallback)((function(t){return n(W(t))}),[n]);return Object(M.jsx)(K,{children:e.map((function(t){return Object(M.jsx)(G,{contact:t,onDelete:a},t.id)}))})}var T=h.a.label(H||(H=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto;\n"])));function X(t){var e=t.title,n=Object(o.b)(),r=Object(o.c)(B),a=d.a.generate();return Object(M.jsxs)(T,{htmlFor:a,children:[Object(M.jsx)("span",{children:e}),Object(M.jsx)(j.a.Control,{type:"text",name:"filter",required:!0,value:r,onChange:function(t){!function(t){n(J(t))}(t.target.value.toLowerCase())},placeholder:"Search...",id:a})]})}function Y(){var t=Object(o.c)(I),e=Object(o.b)();return Object(r.useEffect)((function(){return e(V())}),[e]),Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)("h1",{children:"Phonebook"}),Object(M.jsx)(U,{}),Object(M.jsx)("h2",{children:"Contacts"}),Object(M.jsx)(X,{title:"Find contacts by name"}),t.length?Object(M.jsx)(Q,{contacts:t}):Object(M.jsx)(i.a,{className:"Alert",variant:"dark",children:"Nothing found"}),Object(M.jsx)(s.a,{})]})}var _,tt=n(56),et=n(10),nt=n(15),rt=Object(v.d)("",Object(et.a)({},J,(function(t,e){return e.payload}))),at=Object(v.d)([],(_={},Object(et.a)(_,V.fulfilled,(function(t,e){return e.payload})),Object(et.a)(_,W.fulfilled,(function(t,e){var n=e.payload.id;return t.filter((function(t){return t.id!==n}))})),Object(et.a)(_,Z.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),_)),ct=Object(nt.b)({items:at,filter:rt}),ut=Object(v.a)({reducer:{contacts:ct}});u.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(o.a,{store:ut,children:Object(M.jsx)(Y,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.789a8ad0.chunk.js.map