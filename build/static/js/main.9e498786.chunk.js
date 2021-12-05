(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),s=a.n(o),c=(a(61),a(8)),r=a(9),l=a(11),h=a(10),j=(a.p,a(62),a(1)),u=(i.a.Component,i.a.Component,function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"hello world!"}),Object(j.jsxs)("h2",{children:["It is ",(new Date).toLocaleTimeString()]})]})}}]),a}(i.a.Component)),b=(a(64),a(93)),d=a(92),p=a(94),v=a(30),m=a(7),O=a(13),f=a(22),x=a.n(f),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSubmit=e.onSubmit.bind(Object(O.a)(e)),e.onChangeTitle=e.onChangeTitle.bind(Object(O.a)(e)),e.onChangeYear=e.onChangeYear.bind(Object(O.a)(e)),e.onChangePoster=e.onChangePoster.bind(Object(O.a)(e)),e.state={Title:"",Year:"",Poster:""},e}return Object(r.a)(a,[{key:"onChangeTitle",value:function(e){this.setState({Title:e.target.value})}},{key:"onChangeYear",value:function(e){this.setState({Year:e.target.value})}},{key:"onChangePoster",value:function(e){this.setState({Poster:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),alert("Movie:"+this.state.Title+" "+this.state.Year+" "+this.state.Poster);var t={Title:this.state.Title,Year:this.state.Year,Poster:this.state.Poster};x.a.post("http://localhost:4000/api/movies",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Add Movie Title"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.Title,onChange:this.onChangeTitle})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Add Movie Year"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.Year,onChange:this.onChangeYear})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Add Movie Poster"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.Poster,onChange:this.onChangePoster})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"submit",value:"Add Movie",className:"btn btn-primary"})})]})})}}]),a}(i.a.Component),C=a(32),y=a(52),T=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).DeleteMovie=e.DeleteMovie.bind(Object(O.a)(e)),e}return Object(r.a)(a,[{key:"DeleteMovie",value:function(e){var t=this;e.preventDefault(),console.log("Delete: "+this.props.movie._id),x.a.delete("http://localhost:4000/api/movies/"+this.props.movie._id).then((function(){t.props.ReloadData()})).catch((function(e){console.log(e+" error in delete")}))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(C.a,{children:[Object(j.jsxs)(C.a.Header,{children:[" ",Object(j.jsx)("h4",{children:this.props.movie.Title})]}),Object(j.jsx)(C.a.Body,{children:Object(j.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(j.jsx)("img",{src:this.props.movie.Poster,width:"200",height:"200"}),Object(j.jsx)("p",{children:this.props.movie.Year})]})}),Object(j.jsx)(v.b,{to:"/edit/"+this.props.movie._id,className:"btn btn-primary",children:"Edit"}),Object(j.jsx)(y.a,{variant:"danger",onClick:this.DeleteMovie,children:"Delete"})]})})}}]),a}(i.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return this.props.movies.map((function(t){return Object(j.jsx)(T,{movie:t,ReloadData:e.props.ReloadData})}))}}]),a}(i.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={movies:[]},e.ReloadData=e.ReloadData.bind(Object(O.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:4000/api/movies").then((function(t){e.setState({movies:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"This is the read Component"}),Object(j.jsx)(k,{movies:this.state.movies,ReloadData:this.ReloadData})]})}},{key:"ReloadData",value:function(){var e=this;x.a.get("http://localhost:4000/api/movies").then((function(t){e.setState({movies:t.data})})).catch((function(e){console.log(e)}))}}]),a}(i.a.Component),Y=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSubmit=e.onSubmit.bind(Object(O.a)(e)),e.onChangeTitle=e.onChangeTitle.bind(Object(O.a)(e)),e.onChangeYear=e.onChangeYear.bind(Object(O.a)(e)),e.onChangePoster=e.onChangePoster.bind(Object(O.a)(e)),e.state={Title:"",Year:"",Poster:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),x.a.put("http://localhost:4000/api/movies/"+this.props.match.params.id).then((function(t){e.setState({_id:t.data._id,Title:t.data.Title,Year:t.data.Year,Poster:t.data.Poster})})).catch((function(e){console.log(e+" Error in mount")}))}},{key:"onChangeTitle",value:function(e){this.setState({Title:e.target.value})}},{key:"onChangeYear",value:function(e){this.setState({Year:e.target.value})}},{key:"onChangePoster",value:function(e){this.setState({Poster:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),alert("Movie:"+this.state.Title+" "+this.state.Year+" "+this.state.Poster+" "+this.state._id);var t={Title:this.state.Title,Year:this.state.Year,Poster:this.state.Poster,_id:this.state._id};x.a.put("http://localhost:4000/api/movies/"+this.state._id,t).then((function(e){console.log(e.data._id)})).catch((function(e){console.log(e+" Error in submit")}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Add Movie Title"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.Title,onChange:this.onChangeTitle})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Add Movie Year"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.Year,onChange:this.onChangeYear})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Add Movie Poster"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.Poster,onChange:this.onChangePoster})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"submit",value:"Edit Movie",className:"btn btn-primary"})})]})})}}]),a}(i.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)(v.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b.a,{bg:"primary",variant:"dark",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b.a.Brand,{href:"#home",children:"Navbar"}),Object(j.jsxs)(p.a,{className:"me-auto",children:[Object(j.jsx)(p.a.Link,{href:"/",children:"Home"}),Object(j.jsx)(p.a.Link,{href:"/read",children:"read"}),Object(j.jsx)(p.a.Link,{href:"/create",children:"Create"})]})]})}),Object(j.jsx)("br",{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/",component:u,exact:!0}),Object(j.jsx)(m.a,{path:"/Create",component:g,exact:!0}),Object(j.jsx)(m.a,{path:"/read",component:P,exact:!0}),Object(j.jsx)(m.a,{path:"/edit/:id",component:Y,exact:!0})]})]})})}}]),a}(n.Component),S=N,D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),D()}},[[89,1,2]]]);
//# sourceMappingURL=main.9e498786.chunk.js.map