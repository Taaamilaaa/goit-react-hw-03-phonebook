(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"filter_label__2Opv7",input:"filter_input__2kd6n"}},13:function(t,e,n){t.exports={list:"contactList_list___5UEt"}},20:function(t,e,n){},21:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=(n(20),n(14)),o=n(5),l=n(6),u=n(8),m=n(7),b=(n(21),n(12)),d=n(26),p=n(3),j=n.n(p),h=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).nameId=Object(d.a)(),t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.contactId=Object(d.a)(),t.state={name:"",number:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{className:j.a.label,htmlFor:this.nameInputId,children:"Name"}),Object(h.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"",required:!0,onChange:this.handleChange}),Object(h.jsxs)("label",{className:j.a.label,htmlFor:this.numberInputId,children:[" ","Number"]}),Object(h.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:this.state.number,id:this.numberInputId,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"",required:!0,onChange:this.handleChange}),Object(h.jsx)("button",{className:j.a.submitBtn,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),O=n(4),_=n.n(O),v=n(2),x=n.n(v);function g(t){var e=t.contacts,n=t.clickOnBtn;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:_.a.contactItem,children:[Object(h.jsxs)("span",{id:"name",className:_.a.name,children:[a,":"]}),Object(h.jsx)("span",{className:_.a.number,children:c}),Object(h.jsx)("button",{className:_.a.btn,onClick:function(){return n(e)},children:"\u274c"})]},e)}))}g.propType={contacts:x.a.obj,clickOnBtn:x.a.func};var I=n(13),C=n.n(I);function N(t){var e=t.contacts,n=t.clickOnBtn;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:C.a.list,children:Object(h.jsx)(g,{contacts:e,clickOnBtn:n},e.id)})})}N.prototype={contacts:x.a.obj,clickOnBtn:x.a.func};var S=n(10),k=n.n(S);function y(t){var e=t.value,n=t.onChange;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{className:k.a.label,children:"Find contacts by name"}),Object(h.jsx)("input",{className:k.a.input,value:e,onChange:n})]})}y.propType={onChange:x.a.func,value:x.a.string};var B=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],_filter:""},t.formSubmitHandle=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toUpperCase()===c.name.toUpperCase()}))?alert("".concat(c.name," is already on contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.filterChange=function(e){console.log(e.currentTarget.value),t.setState({_filter:e.currentTarget.value})},t.contactsFilter=function(){var e=t.state,n=e.contacts,a=e._filter;return n.filter((function(t){return t.name.toUpperCase().includes(a.toUpperCase())}))},t.onBtnDelClick=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.render=function(){var e=t.state,n=e._filter,a=e.contacts,c=t.contactsFilter();return Object(h.jsxs)("div",{className:"phonebook",children:[Object(h.jsx)("h2",{className:"title",children:"Phonebook"}),Object(h.jsx)(f,{onSubmit:t.formSubmitHandle}),Object(h.jsx)("h2",{className:"title",children:"Contacts"}),a.length>1&&Object(h.jsx)(y,{value:n,onChange:t.filterChange}),a.length>0?Object(h.jsx)(N,{contacts:c,clickOnBtn:t.onBtnDelClick}):Object(h.jsx)("p",{className:"notification",children:"Please add your contacts."})]})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){if(this.state.contacts!==e.contacts){var n=JSON.stringify(this.state.contacts);localStorage.setItem("contacts",n)}}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}}]),n}(c.a.Component),F=B;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={label:"form_label__2t6xN",input:"form_input__2ENnP",form:"form_form__3ILK8",submitBtn:"form_submitBtn__3r2zn"}},4:function(t,e,n){t.exports={contactItem:"contactItem_contactItem__1SEUs",name:"contactItem_name__3inf2",number:"contactItem_number__2TnZF",btn:"contactItem_btn__m22Ji"}}},[[25,1,2]]]);
//# sourceMappingURL=main.2edfd578.chunk.js.map