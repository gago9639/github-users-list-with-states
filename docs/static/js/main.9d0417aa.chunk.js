(this["webpackJsonpgithub-users-list"]=this["webpackJsonpgithub-users-list"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t.n(l),i=t(2),s=t(3),c=t(1),d=t(5),u=t(4);function m(e){var a={classList:"",text:""};switch(e.action){case"SEE_MORE":a={classList:"btn-success",text:"See moore"};break;case"DELETE":a={classList:"btn-danger",text:"Delete"};break;case"EDIT":a={classList:"btn-warning",text:"Edit"};break;case"CANCEL":a={classList:"btn-dark",text:"Cancel"};break;case"SAVE":a={classList:"btn-success",text:"Save"}}return r.a.createElement("button",{type:"button",className:"btn btn-action btn-success ".concat(a.classList),title:a.text,onClick:e.onClick},a.text)}var h=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={isEditorOpen:!1,login:e.login,nodeId:e.nodeId},n.handleOnLoginChange=n.handleOnLoginChange.bind(Object(c.a)(n)),n.handleOnNodeIdChange=n.handleOnNodeIdChange.bind(Object(c.a)(n)),n.handleOnCancel=n.handleOnCancel.bind(Object(c.a)(n)),n}return Object(s.a)(t,[{key:"handleOnLoginChange",value:function(e){this.setState({login:e})}},{key:"handleOnNodeIdChange",value:function(e){this.setState({nodeId:e})}},{key:"handleOnCancel",value:function(){this.setState({isEditorOpen:!1,login:this.props.login,nodeId:this.props.nodeId})}},{key:"render",value:function(){var e=this,a=this.state,t=a.isEditorOpen,n=a.login,l=a.nodeId;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("a",{href:this.props.profileUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:this.props.avatarUrl,className:"card-img",alt:"user avatar"}))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row-75 card-body"},t?r.a.createElement(g,{login:this.props.login,nodeId:this.props.nodeId,onLoginChange:this.handleOnLoginChange,onNodeIdChange:this.handleOnNodeIdChange}):r.a.createElement(p,{profileUrl:this.props.profileUrl,login:this.props.login,nodeId:this.props.nodeId})),r.a.createElement("div",{className:"row-25 button-bar"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{action:"CANCEL",onClick:function(){e.handleOnCancel()}}),r.a.createElement(m,{action:"SAVE",onClick:function(){e.setState({isEditorOpen:!1}),e.props.onSave(n,l)}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{action:"SEE_MORE",onClick:this.props.onSeeMore}),r.a.createElement(m,{action:"EDIT",onClick:function(){e.setState({isEditorOpen:!0})}}),r.a.createElement(m,{action:"DELETE",onClick:this.props.onDelete}))))))}}]),t}(r.a.Component),g=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={login:e.login,nodeId:e.nodeId},n.handleLoginChange=n.handleLoginChange.bind(Object(c.a)(n)),n.handleNodeIdChange=n.handleNodeIdChange.bind(Object(c.a)(n)),n}return Object(s.a)(t,[{key:"handleLoginChange",value:function(e){this.setState({login:e.target.value}),this.props.onLoginChange(e.target.value)}},{key:"handleNodeIdChange",value:function(e){this.setState({nodeId:e.target.value}),this.props.onNodeIdChange(e.target.value)}},{key:"render",value:function(){var e=this.state,a=e.login,t=e.nodeId;return r.a.createElement("div",{className:"user-info-display"},r.a.createElement("a",{href:this.props.profileUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h5",{className:"card-title"},"Login:",r.a.createElement("span",null," "),r.a.createElement("input",{type:"text",onChange:this.handleLoginChange,value:a}))),r.a.createElement("span",{className:"text-muted"},"Node Id:",r.a.createElement("span",null," "),r.a.createElement("input",{type:"text",onChange:this.handleNodeIdChange,value:t})))}}]),t}(r.a.Component);function p(e){return r.a.createElement("div",{className:"user-info-display"},r.a.createElement("a",{className:"text-body",href:e.profileUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h5",{className:"card-title"},"Login: ",e.login)),r.a.createElement("span",{className:"text-muted"},"Node Id: ",e.nodeId))}function f(e){return r.a.createElement("div",{className:"User-list app-body bg-light"},e.users.map((function(a){return r.a.createElement(h,{key:a.id,avatarUrl:a.avatar_url,profileUrl:a.html_url,login:a.login,nodeId:a.node_id,onSeeMore:function(){e.onSeeMore(e.users.find((function(e){return e.id===a.id})).login)},onSave:function(t,n){e.onSave(t,n,a.id)},onDelete:function(){e.onDelete(a.id)}})})))}function E(e){return r.a.createElement("div",{className:"Searchbar bg-light fixed-top app-header"},r.a.createElement("div",{className:"input-group md-form form-sm form-1 pl-0 search-box"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text bg-info",id:"basic-text1"},r.a.createElement("i",{className:"fas fa-search text-white","aria-hidden":"true"}))),r.a.createElement("input",{className:"form-control my-0 search-input",type:"text",placeholder:"Search login","aria-label":"Search login",onChange:function(a){e.onSearch(a.target.value)}})))}t(13),t(14);function v(){return r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}var b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:{isLoading:!0,user:null}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.client.getUserProfile(this.props.login,(function(a){e.setState({data:{isLoading:!1,user:a}})}))}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:"About-user"},r.a.createElement(N,{user:e.user,isLoading:e.isLoading,onBack:this.props.onBack}))}}]),t}(r.a.Component);function N(e){var a,t,n=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-header"},r.a.createElement("i",{className:"fas fa-arrow-left back-button",onClick:e.onBack}),r.a.createElement("div",{className:"about-user-header-cap"},"About User")),e.isLoading?r.a.createElement(v,null):r.a.createElement("div",{className:"app-body about-user-body"},r.a.createElement("div",{className:"main-info row-container"},r.a.createElement("span",{className:"user-name-location"},null!==(a=n.name)&&void 0!==a?a:"none"," | ",null!==(t=n.location)&&void 0!==t?t:"none"),r.a.createElement("img",{className:"user-image",src:n.avatar_url,alt:"user_avatar"})),r.a.createElement("div",{className:"more-info "},r.a.createElement("div",{className:"followers-repos row-container"},r.a.createElement("span",{className:"more-info-text"},"Followers: ",n.followers," "),r.a.createElement("span",{className:"more-info-text"},"Following: ",n.following),r.a.createElement("span",{className:"more-info-text"},"Public repos: ",n.public_repos),r.a.createElement("span",{className:"more-info-text"},"Public gists: ",n.public_gists),r.a.createElement("span",{className:"more-info-text"},"Last update: ",n.updated_at.slice(0,10))))))}function S(e){return r.a.createElement("div",{className:"App"},e.aboutUserPage.isOpen?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{login:e.aboutUserPage.login,onBack:e.onCloseAboutUserPage})):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onSearch:e.onSearch}),r.a.createElement(f,{users:e.users,onSeeMore:e.onSeeMore,onSave:e.onSave,onDelete:e.onDelete})))}var O=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).render=function(){return r.a.createElement(r.a.Fragment,null,n.state.data.isLoading?r.a.createElement(v,null):r.a.createElement(S,{onSearch:n.handleSearch,users:n.state.filteredData,onSeeMore:n.handleSeeMore,onSave:n.handleSave,onDelete:n.handleDelete,aboutUserPage:n.state.aboutUserPage,onCloseAboutUserPage:function(){n.setState({aboutUserPage:{isOpen:!1,login:null}})}}))},n.state={aboutUserPage:{isOpen:!1,login:null},data:{isLoading:!0,users:[]},filteredData:[]},n.handleSearch=n.handleSearch.bind(Object(c.a)(n)),n.handleSeeMore=n.handleSeeMore.bind(Object(c.a)(n)),n.handleSave=n.handleSave.bind(Object(c.a)(n)),n.handleDelete=n.handleDelete.bind(Object(c.a)(n)),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.client.getUsers((function(a){e.setState({data:{isLoading:!1,users:a},filteredData:a})}))}},{key:"handleSearch",value:function(e){this.setState({filteredData:this.state.data.users.filter((function(a){return""===e||a.login.includes(e)}))})}},{key:"handleSeeMore",value:function(e){this.setState({aboutUserPage:{isOpen:!0,login:e}})}},{key:"handleSave",value:function(e,a,t){var n=this.state,r=n.data,l=n.filteredData;function o(n){return n.id===t?(n.login=e,n.node_id=a,n):n}this.setState({data:{isLoading:!1,users:r.users.map(o)},filteredData:l.map(o)})}},{key:"handleDelete",value:function(e){var a=this.state.filteredData.filter((function(a){return a.id!==e}));this.setState({data:{isLoading:!1,users:a},filteredData:a})}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9d0417aa.chunk.js.map