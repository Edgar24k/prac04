(this.webpackJsonpcrudreact=this.webpackJsonpcrudreact||[]).push([[0],{21:function(e,a,t){e.exports=t(39)},26:function(e,a,t){},27:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},28:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(7),o=t.n(l),c=(t(26),t(9)),i=t(11),m=t(17),s=t(18),u=t(20),d=t(19),E=(t(27),t(28),t(29),t(41)),h=t(42),f=t(43),p=t(48),g=t(44),j=t(45),b=t(46),v=t(47),y=[{id:1,personaje:"Naruto",anime:"Naruto"},{id:2,personaje:"Goku",anime:"Dragon Ball"},{id:3,personaje:"Kenshin Himura",anime:"Rurouni Kenshin"},{id:4,personaje:"Monkey D. Luffy",anime:"One Piece"},{id:5,personaje:"Edward Elric",anime:"Fullmetal Alchemist: Brotherhood"},{id:6,personaje:"Seto Kaiba",anime:"Yu-Gi-Oh!"}],C=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:y,modalActualizar:!1,modalInsertar:!1,form:{id:"",personaje:"",anime:""}},e.mostrarModalActualizar=function(a){e.setState({form:a,modalActualizar:!0})},e.cerrarModalActualizar=function(){e.setState({modalActualizar:!1})},e.mostrarModalInsertar=function(){e.setState({modalInsertar:!0})},e.cerrarModalInsertar=function(){e.setState({modalInsertar:!1})},e.editar=function(a){var t=0,n=e.state.data;n.map((function(e){a.id==e.id&&(n[t].personaje=a.personaje,n[t].anime=a.anime),t++})),e.setState({data:n,modalActualizar:!1})},e.eliminar=function(a){if(1==window.confirm("Est\xe1s Seguro que deseas Eliminar el elemento "+a.id)){var t=0,n=e.state.data;n.map((function(e){a.id==e.id&&n.splice(t,1),t++})),e.setState({data:n,modalActualizar:!1})}},e.insertar=function(){var a=Object(i.a)({},e.state.form);a.id=e.state.data.length+1;var t=e.state.data;t.push(a),e.setState({modalInsertar:!1,data:t})},e.handleChange=function(a){e.setState({form:Object(i.a)({},e.state.form,Object(c.a)({},a.target.name,a.target.value))})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{color:"success",onClick:function(){return e.mostrarModalInsertar()}},"Crear"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Personaje"),r.a.createElement("th",null,"Anime"),r.a.createElement("th",null,"Acci\xf3n"))),r.a.createElement("tbody",null,this.state.data.map((function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.id),r.a.createElement("td",null,a.personaje),r.a.createElement("td",null,a.anime),r.a.createElement("td",null,r.a.createElement(h.a,{color:"primary",onClick:function(){return e.mostrarModalActualizar(a)}},"Editar")," ",r.a.createElement(h.a,{color:"danger",onClick:function(){return e.eliminar(a)}},"Eliminar")))}))))),r.a.createElement(p.a,{isOpen:this.state.modalActualizar},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Editar Registro"))),r.a.createElement(j.a,null,r.a.createElement(b.a,null,r.a.createElement("label",null,"Id:"),r.a.createElement("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.form.id})),r.a.createElement(b.a,null,r.a.createElement("label",null,"Personaje:"),r.a.createElement("input",{className:"form-control",name:"personaje",type:"text",onChange:this.handleChange,value:this.state.form.personaje})),r.a.createElement(b.a,null,r.a.createElement("label",null,"Anime:"),r.a.createElement("input",{className:"form-control",name:"anime",type:"text",onChange:this.handleChange,value:this.state.form.anime}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"primary",onClick:function(){return e.editar(e.state.form)}},"Editar"),r.a.createElement(h.a,{color:"danger",onClick:function(){return e.cerrarModalActualizar()}},"Cancelar"))),r.a.createElement(p.a,{isOpen:this.state.modalInsertar},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Insertar Personaje"))),r.a.createElement(j.a,null,r.a.createElement(b.a,null,r.a.createElement("label",null,"Id:"),r.a.createElement("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.data.length+1})),r.a.createElement(b.a,null,r.a.createElement("label",null,"Personaje:"),r.a.createElement("input",{className:"form-control",name:"personaje",type:"text",onChange:this.handleChange})),r.a.createElement(b.a,null,r.a.createElement("label",null,"Anime:"),r.a.createElement("input",{className:"form-control",name:"anime",type:"text",onChange:this.handleChange}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"primary",onClick:function(){return e.insertar()}},"Insertar"),r.a.createElement(h.a,{className:"btn btn-danger",onClick:function(){return e.cerrarModalInsertar()}},"Cancelar"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cfaddfb6.chunk.js.map