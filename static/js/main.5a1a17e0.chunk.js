(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){e.exports={App:"App_App__8BQt3",App_logo:"App_App_logo__FA8ex","App-logo-spin":"App_App-logo-spin__12IdZ",App_header:"App_App_header__1fCLs",App_link:"App_App_link__4DPhX"}},134:function(e,t,a){e.exports={Container:"Container_Container__2nkrZ"}},135:function(e,t,a){e.exports={Table:"Table_Table__QTi4Y"}},136:function(e,t,a){},137:function(e,t,a){e.exports={Item:"Item_Item__2XqEX"}},139:function(e,t,a){e.exports=a(362)},226:function(e,t,a){},227:function(e,t,a){},290:function(e,t,a){},295:function(e,t,a){e.exports={AddEditModel:"EditModel_AddEditModel__4jQq5"}},360:function(e,t,a){e.exports={AddModal:"AddModal_AddModal__2I3Jh"}},362:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(47),l=a(66),o="ADD_MOVIE",s="UPDATE_MOVIE",c="DELETE_MOVIE",u="SET_MOVIES";var m=function(e){fetch("http://www.omdbapi.com/?apikey=".concat("887c425e","&s=").concat("war","&page=").concat(1)).then(function(e){return e.json()}).then(function(t){var a=[];t.Search.map(function(e){a.push(fetch("http://www.omdbapi.com/?i=".concat(e.imdbID,"&apikey=").concat("887c425e")))}),Promise.all(a).then(function(t){var a=[];console.log("values");var n=[];t.map(function(e){var t=e.body.getReader();n.push(t.read().then(function e(n){var r=n.done,i=n.value;if(!r){var l=new TextDecoder("utf-8").decode(i),o=JSON.parse(l);return a.push(o),t.read().then(e)}console.log("Stream complete")}))}),Promise.all(n).then(function(){e({type:u,payload:a})})})},function(e){alert(e)})},d={isLoaded:!1,items:[],open:!1};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=0,n=[];switch(t.type){case o:return(n=Object(l.a)(e.items)).push(t.payload),Object(i.a)({},e,{items:n});case s:return a=(n=Object(l.a)(e.items)).map(function(e){return e.imdbID}).indexOf(t.payload.imdbID),n[a]=t.payload,Object(i.a)({},e,{items:n});case c:return a=(n=Object(l.a)(e.items)).map(function(e){return e.imdbID}).indexOf(t.payload),n.splice(a,1),Object(i.a)({},e,{items:n});case u:return Object(i.a)({},e,{items:t.payload});default:return e}},p=a(16),b=a(64),v=a(41),f=a(363),E=a(128),g=a(129),C=a(130),O=a.n(C),j=Object(v.d)(Object(v.c)({form:f.a,moviesReducer:h}),{},Object(v.a)(O.a,E.a,g.a)),y=(a(226),a(20)),D=a(21),_=a(24),k=a(22),S=a(23),T=a(133),I=a.n(T),A=a(134),M=a.n(A),w=a(135),x=a.n(w),R=a(136),Y=a.n(R),G=function(e){return r.a.createElement("div",{className:Y.a.TableHeader})},q=a(137),P=a.n(q),W=(a(227),a(17)),L=a.n(W),V=a(138),N=a.n(V),F=(a(290),a(39)),J=a.n(F),B=a(40),Q=a.n(B),U=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{id:"form-dialog-title"},"Delete ",e.movie.Title,"?"),r.a.createElement(Q.a,null,r.a.createElement(L.a,{onClick:function(){e.handleClose()},color:"primary"},"Cancel"),r.a.createElement(L.a,{onClick:function(){e.click(e.movie.imdbID),e.handleClose()},color:"primary"},"Delete")))},X=a(38),Z=a(18),z=(a(295),a(46)),H=a.n(z),$=a(15),K=a.n($),ee=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(_.a)(this,Object(k.a)(t).call(this,e))).state={titles:j.getState().moviesReducer.items.map(function(e){return e.Title}),error:"",imdbID:a.props.movie.imdbID,Title:a.props.movie.Title,Year:a.props.movie.Year,Runtime:a.props.movie.Runtime,Genre:a.props.movie.Genre,Director:a.props.movie.Director},a.handleChange=a.handleChange.bind(Object(Z.a)(Object(Z.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(Z.a)(Object(Z.a)(a))),a}return Object(S.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(X.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){this.state.Title?this.state.Year<1900||this.state.Year>2019?this.setState({error:"Error : Year must be between 1900 and 2019"}):this.state.Runtime?this.state.Genre?this.state.Director?this.state.titles.includes(this.state.Title)?this.setState({error:"Error : ".concat(this.state.Title," already exists.")}):(this.props.click(this.state),this.props.handleClose()):this.setState({error:"Error : Director is not set"}):this.setState({error:"Error : Genre is not set"}):this.setState({error:"Error : Runtime is not set"}):this.setState({error:"Error : Title is not set"}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{id:"form-dialog-title"}," Editing ",this.props.movie.Title),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(H.a,null,r.a.createElement("p",{style:{color:"red"}},this.state.error),r.a.createElement(K.a,{disabled:!0,fullWidth:!0,name:"imdbID",id:"outlined-required",label:"imdbID",defaultValue:this.props.movie.imdbID,margin:"normal",variant:"outlined"}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Title",id:"outlined-required",label:"Title",defaultValue:this.props.movie.Title,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{fullWidth:!0,type:"number",name:"Year",id:"outlined-required",label:"Year",defaultValue:this.props.movie.Year,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Runtime",id:"outlined-required",label:"Runtime",defaultValue:this.props.movie.Runtime,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Genre",id:"outlined-required",label:"Genre",defaultValue:this.props.movie.Genre,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Director",id:"outlined-required",label:"Director",defaultValue:this.props.movie.Director,margin:"normal",variant:"outlined",onChange:this.handleChange})),r.a.createElement(Q.a,null,r.a.createElement(L.a,{onClick:function(){e.props.handleClose()},color:"primary"},"Cancel"),r.a.createElement(L.a,{type:"submit",color:"primary"},"Update"))))}}]),t}(r.a.Component),te=(a(360),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(_.a)(this,Object(k.a)(t).call(this,e))).state={titles:j.getState().moviesReducer.items.map(function(e){return e.Title}),error:"",imdbID:"",Title:"",Year:0,Runtime:"",Genre:"",Director:""},console.log(a.state.titles),a.handleChange=a.handleChange.bind(Object(Z.a)(Object(Z.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(Z.a)(Object(Z.a)(a))),a}return Object(S.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(X.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){this.state.imdbID?9!=this.state.imdbID.length?this.setState({error:"Error : imdbID must be 9 characters long"}):this.state.Title?this.state.Year<1900||this.state.Year>2019?this.setState({error:"Error : Year must be between 1900 and 2019"}):this.state.Runtime?this.state.Genre?this.state.Director?this.state.titles.includes(this.state.Title)?this.setState({error:"Error : ".concat(this.state.Title," already exists.")}):(this.props.click(this.state),this.props.handleClose()):this.setState({error:"Error : Director is not set"}):this.setState({error:"Error : Genre is not set"}):this.setState({error:"Error : Runtime is not set"}):this.setState({error:"Error : Title is not set"}):this.setState({error:"Error : imdbID is not set"}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{id:"form-dialog-title"}," Adding a new movie"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(H.a,null,r.a.createElement("p",{style:{color:"red"}},this.state.error),r.a.createElement(K.a,{fullWidth:!0,name:"imdbID",id:"outlined-required",label:"imdbID",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Title",id:"outlined-required",label:"Title",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{fullWidth:!0,type:"number",name:"Year",id:"outlined-required",label:"Year",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Runtime",id:"outlined-required",label:"Runtime",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Genre",id:"outlined-required",label:"Genre",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(K.a,{inputProps:{maxLength:50},fullWidth:!0,name:"Director",id:"outlined-required",label:"Director",margin:"normal",variant:"outlined",onChange:this.handleChange})),r.a.createElement(Q.a,null,r.a.createElement(L.a,{onClick:function(){e.props.handleClose()},color:"primary"},"Cancel"),r.a.createElement(L.a,{type:"submit",color:"primary"},"Create"))))}}]),t}(r.a.Component)),ae=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(_.a)(this,Object(k.a)(t).call(this,e))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.model=null,a}return Object(S.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return"Delete"==this.props.value?this.model=r.a.createElement(U,{click:this.props.click,movie:this.props.movie,handleClose:this.handleClose}):"Edit"==this.props.value?this.model=r.a.createElement(ee,{click:this.props.click,movie:this.props.movie,handleClose:this.handleClose}):"Add"==this.props.value&&(this.model=r.a.createElement(te,{click:this.props.click,handleClose:this.handleClose})),r.a.createElement("div",null,r.a.createElement(L.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},this.props.value),r.a.createElement(N.a,{open:this.state.open,"aria-labelledby":"form-dialog-title"},this.model))}}]),t}(r.a.Component),ne=function(e){var t=null;return e.header||(t=r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{movie:e.movie,click:e.updateMovie,value:"Edit"}),r.a.createElement(ae,{movie:e.movie,click:e.deleteMovie,value:"Delete"}))),r.a.createElement("div",{className:P.a.Item},r.a.createElement("p",null,e.movie.imdbID),r.a.createElement("p",null,e.movie.Title.toLowerCase().match(/([a-z\s])+/g).join("")),r.a.createElement("p",null,e.movie.Year),r.a.createElement("p",null,e.movie.Runtime),r.a.createElement("p",null,e.movie.Genre),r.a.createElement("p",null,e.movie.Director),t)},re=function(e){function t(){return Object(y.a)(this,t),Object(_.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.props.initMovies()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:x.a.Table},r.a.createElement(G,null),r.a.createElement(ne,{movie:{imdbID:"imdbID",Title:"Title",Year:"Year",Runtime:"Runtime",Genre:"Genre",Director:"Director"},header:!0}),(this.props.movies||[]).map(function(t){return r.a.createElement(ne,{movie:t,updateMovie:e.props.updateMovie,deleteMovie:e.props.deleteMovie})}),r.a.createElement(ae,{click:this.props.addMovie,value:"Add"}))}}]),t}(n.Component),ie=Object(b.b)(function(e){return{movies:e.moviesReducer.items}},function(e){return{addMovie:function(t){return e(function(e){return{type:o,payload:e}}(t))},updateMovie:function(t){return e(function(e){return{type:s,payload:e}}(t))},deleteMovie:function(t){return e(function(e){return{type:c,payload:e}}(t))},initMovies:function(){return e(function(e){m(e)})}}})(re),le=function(e){return r.a.createElement("div",{className:M.a.Container},r.a.createElement("h1",null,"\u2605 \u2605 \u2605 ","Movies"," \u2605 \u2605 \u2605"),r.a.createElement("br",null),r.a.createElement(ie,null),r.a.createElement("br",null),"Application made by Ivan Solobear | Photo by Tyler Callahan on Unsplash")},oe=function(e){function t(){return Object(y.a)(this,t),Object(_.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:I.a.App},r.a.createElement(le,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(63),ce=Object(se.createMuiTheme)({palette:{primary:{main:"#613C24"}}});Object(p.render)(r.a.createElement(b.a,{store:j},r.a.createElement(se.MuiThemeProvider,{theme:ce},r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[139,1,2]]]);
//# sourceMappingURL=main.5a1a17e0.chunk.js.map