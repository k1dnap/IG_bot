(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{O40h:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a("eVuF"),o=a.n(n);function r(t,e,a,n,r,l,i){try{var s=t[l](i),c=s.value}catch(u){return void a(u)}s.done?e(c):o.a.resolve(c).then(n,r)}function l(t){return function(){var e=this,a=arguments;return new o.a(function(n,o){var l=t.apply(e,a);function i(t){r(l,n,o,i,s,"next",t)}function s(t){r(l,n,o,i,s,"throw",t)}i(void 0)})}}},"W+IF":function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return v});var n=a("d04V"),o=a.n(n),r=a("ln6h"),l=a.n(r),i=a("O40h"),s=a("0iUn"),c=a("sLSF"),u=a("MI3g"),d=a("a7VT"),f=a("Tit0"),p=a("q1tI"),b=a.n(p),h=a("4J7I"),m=(a("YFqc"),b.a.createElement),v=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={data:{},scraped_accounts:[],isFetching:!0,error:null},a}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.loadProfileData()}},{key:"loadProfileData",value:function(){var t=Object(i.a)(l.a.mark(function t(){var e,a,n,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=window.location.search.split("login=")[1].split("&")[0],t.next=4,fetch("/api/profile_data?login="+e);case 4:return a=t.sent,t.next=7,a.json();case 7:return n=t.sent,this.setState({data:n,isFetching:!1}),t.next=11,fetch("/api/scraped_accounts");case 11:return a=t.sent,t.next=14,a.json();case 14:o=t.sent,this.setState({scraped_accounts:o,isFetching:!1}),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),this.setState({isFetching:!1,error:t.t0});case 21:case"end":return t.stop()}},t,this,[[0,18]])}));return function(){return t.apply(this,arguments)}}()},{key:"submitForm",value:function(){var t=Object(i.a)(l.a.mark(function t(){var e,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.search.split("login=")[1].split("&")[0],a=o()(document.querySelectorAll('input[name="subcategories[]"]')).filter(function(t){return t.checked}).map(function(t){return t.value}).join("|"),t.next=4,fetch("/api/manage_followers_list?login="+e+"&arr="+a);case 4:t.sent;case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"followAll",value:function(){var t=Object(i.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.search.split("login=")[1].split("&")[0],t.next=3,fetch("/api/start_following?login="+e);case 3:t.sent;case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"deleteProfile",value:function(){var t=Object(i.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.search.split("login=")[1].split("&")[0],t.next=3,fetch("/api/delete_profile?login="+e);case 3:t.sent,window.location="/";case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"openModal",value:function(){var t=Object(i.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"closeModal",value:function(){var t=Object(i.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this;if(this.state.isFetching)t=m("p",null,"Loading data");else if(this.state.error)t=m("p",null,"Error on loading data");else{var a=this.state.data,n=this.state.scraped_accounts;n=0===n.length?"no scraped_accounts":n.map(function(t,n){return m("label",{key:n,onClick:e.submitForm},m("input",{type:"checkbox",name:"subcategories[]",value:t.from,defaultChecked:!!a.followers_list.includes(t.from)})," "+t.from)}),t=m("div",{className:"container"},m("h4",null,"Profile: "+a.login),m("button",{type:"button",class:"btn btn-secondary","data-toggle":"modal","data-target":"#exampleModal"},"Manage follow list"),m("br",null),m("br",null),m("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},m("div",{class:"modal-dialog",role:"document"},m("div",{class:"modal-content"},m("div",{class:"modal-header"},m("h5",{class:"modal-title",id:"exampleModalLabel"},"Manage follow list"),m("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},m("span",{"aria-hidden":"true"},"\xd7"))),m("div",{class:"modal-body"},n),m("div",{class:"modal-footer"},m("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),m("button",{onClick:this.followAll,className:"btn btn-secondary",role:"button"},"Start followAll()"),m("br",null),m("br",null),m("button",{type:"button",class:"btn btn-danger","data-toggle":"modal","data-target":"#deleteProfileModal"},"Delete profile"),m("br",null),m("br",null),m("div",{class:"modal fade",id:"deleteProfileModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},m("div",{class:"modal-dialog",role:"document"},m("div",{class:"modal-content"},m("div",{class:"modal-header"},m("h5",{class:"modal-title",id:"exampleModalLabel"},"Are you sure that you want delete profile?"),m("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},m("span",{"aria-hidden":"true"},"\xd7"))),m("div",{class:"modal-footer"},m("button",{type:"button",onClick:this.deleteProfile,class:"btn btn-danger"},"Yes"),m("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"No"))))))}return m("div",null,t,m(h.a,{title:"Profiles",nav:"Profiles"}))}}]),e}(b.a.Component)},u1GD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){var t=a("W+IF");return{page:t.default||t}}])}},[["u1GD",1,0]]]);