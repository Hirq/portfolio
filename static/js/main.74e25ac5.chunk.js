(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{56:function(e,t,a){},72:function(e,t,a){e.exports=a(86)},81:function(e,t,a){},82:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),s=a(9),o=a.n(s),r=(a(56),a(44)),i=a(61),c=a(126),m=a(131),d=a(128),u=a(130),p=a(129),h=a(127),E=a(17),g=a(15),b=a(135),v=a(132),f=a(87),x=a(27),w=a(28),C=a(32),N=a(29),k=a(16),I=a(31),y={apiKey:"AIzaSyClyE0UJ3w8Geg1wx0uVhvrH2HL6oxs5zs",authDomain:"portfolio-97e9c.firebaseapp.com",databaseURL:"https://portfolio-97e9c.firebaseio.com",projectId:"portfolio-97e9c",storageBucket:"portfolio-97e9c.appspot.com",messagingSenderId:"782221753301",appId:"1:782221753301:web:3d4a39abf64291c40f1b5c",measurementId:"G-DFV0QB6MSX"},B=a(45),H=a.n(B),T=(a(78),a(81),l.Component,a(48)),j=(a(82),a(5)),q=a(133),S=a(136),W=a(134);function O(e){return n.a.createElement(W.a,Object.assign({elevation:6,variant:"filled"},e))}var P=Object(i.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2),textDecoration:"none !important"}},buttonSubmit:{textAlign:"center",minWidth:"90px",color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh",marginRight:"20px","&:hover":{backgroundColor:"#fff",color:"#20693C",border:"1px solid #20693C",borderRadius:"1vh"}}}}));function A(){var e=P(),t=n.a.useState(!1),a=Object(r.a)(t,2),l=a[0],s=a[1],o=function(e,t){"clickaway"!==t&&s(!1)};return n.a.createElement("div",{className:e.root,href:"/portfolio"},n.a.createElement("a",{variant:"outlined",onClick:function(){s(!0)}},"Submit"),n.a.createElement(S.a,{open:l,autoHideDuration:2e3,onClose:o},n.a.createElement(O,{onClose:o,severity:"success"},"Message sent!")))}var R=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={newNameContent:"",newTitleContent:"",newEmailContent:"",newPhoneContent:"",newMessageContent:""},a.handleNameInput=a.handleNameInput.bind(Object(k.a)(a)),a.handleTitleInput=a.handleTitleInput.bind(Object(k.a)(a)),a.handleEmailInput=a.handleEmailInput.bind(Object(k.a)(a)),a.handlePhoneInput=a.handlePhoneInput.bind(Object(k.a)(a)),a.handleMessageInput=a.handleMessageInput.bind(Object(k.a)(a)),a.writeNote=a.writeNote.bind(Object(k.a)(a)),a}return Object(I.a)(t,e),Object(w.a)(t,[{key:"handleNameInput",value:function(e){this.setState({newNameContent:e.target.value})}},{key:"handleTitleInput",value:function(e){this.setState({newTitleContent:e.target.value})}},{key:"handleEmailInput",value:function(e){this.setState({newEmailContent:e.target.value})}},{key:"handlePhoneInput",value:function(e){this.setState({newPhoneContent:e.target.value})}},{key:"handleMessageInput",value:function(e){this.setState({newMessageContent:e.target.value})}},{key:"writeNote",value:function(){this.props.addNote(this.state.newNameContent,this.state.newTitleContent,this.state.newEmailContent,this.state.newPhoneContent,this.state.newMessageContent),this.setState({newNameContent:"",newTitleContent:"",newEmailContent:"",newPhoneContent:"",newMessageContent:""})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.newNameContent.length>0&&this.state.newTitleContent.length>0&&this.state.newMessageContent.length>0&&this.state.newEmailContent.length>0;return n.a.createElement("div",null,n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col"},n.a.createElement(q.a,{required:!0,id:"outlined-basic",label:"Name",variant:"outlined",className:e.textInput,InputLabelProps:{style:{color:"#20693C"}},InputProps:{classes:{notchedOutline:e.notchedOutline}},value:this.state.newNameContent,onChange:this.handleNameInput}),n.a.createElement(q.a,{required:!0,id:"outlined-basic",label:"Title",variant:"outlined",className:e.textInput,InputLabelProps:{style:{color:"#20693C"}},InputProps:{classes:{notchedOutline:e.notchedOutline}},value:this.state.newTitleContent,onChange:this.handleTitleInput})),n.a.createElement("div",{class:"col"},n.a.createElement(q.a,Object(T.a)({required:!0,id:"outlined-basic",label:"Email",variant:"outlined",className:e.textInput,InputLabelProps:{style:{color:"#20693C"}},InputProps:{classes:{notchedOutline:e.notchedOutline}},value:this.state.newEmailContent,onChange:this.handleEmailInput},"required",!0)),n.a.createElement(q.a,{id:"outlined-basic",label:"Phone",variant:"outlined",className:e.textInput,InputLabelProps:{style:{color:"#20693C"}},InputProps:{classes:{notchedOutline:e.notchedOutline}},value:this.state.newPhoneContent,onChange:this.handlePhoneInput,type:"number"}))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col"},n.a.createElement(q.a,{required:!0,id:"outlined-multiline-static",label:"Message",multiline:!0,rows:"3",variant:"outlined",className:e.textArea,value:this.state.newMessageContent,onChange:this.handleMessageInput,InputLabelProps:{style:{color:"#20693C"}},InputProps:{classes:{notchedOutline:e.notchedOutline}}}))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col "},n.a.createElement("div",{className:e.divSubmit},n.a.createElement("a",{className:e.deleteUnderlining,onClick:this.writeNote},n.a.createElement(h.a,{disabled:!t,className:e.buttonSubmit},n.a.createElement(A,null)))))))}}]),t}(l.Component),z=Object(j.a)((function(e){return Object(T.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"700px",overflowY:"auto",maxHeight:"100vh"},textInput:{width:"100%",maxWidth:"30rem",marginTop:10,marginBottom:10},notchedOutline:{borderWidth:"1px",borderColor:"#20693C !important"},textArea:{marginTop:15,marginBottom:10,padding:5,width:"100%",maxWidth:"60rem",borderRadius:"1vh","&:focus":{border:"1px solid #3449EF",borderRadius:"1vh"}},buttonSubmit:{textAlign:"center",minWidth:"90px",color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh",marginRight:"20px","&:hover":{backgroundColor:"#fff",color:"#20693C",border:"1px solid #20693C",borderRadius:"1vh"}},divNameContactForm:{textAlign:"center",fontSize:"30px",border:"1px solid #20693C",borderRadius:"10vh",fontWeight:"800"},closeContactForm:{right:0,position:"absolute",fontSize:"35px",marginRight:"-10px",fontWeight:"500",marginTop:"-5px","&:hover":{backgroundColor:"#fff",color:"#20693C",fontWeight:"800",marginTop:"-10px"}},divSubmit:{textAlign:"center"},deleteUnderlining:{textDecoration:"none !important"}},"buttonSubmit",{textAlign:"center",minWidth:"90px",color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh",marginRight:"20px","&:hover":{backgroundColor:"#fff",color:"#20693C",border:"1px solid #20693C",borderRadius:"1vh"}})}))(R),M=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).addNote=a.addNote.bind(Object(k.a)(a)),a.removeNote=a.removeNote.bind(Object(k.a)(a)),H.a.apps.length||H.a.initializeApp(y),a.database=H.a.database().ref().child("notes"),a.state={notes:[]},a}return Object(I.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.state.notes;this.database.on("child_added",(function(a){t.push({id:a.key,messageName:a.val().messageName,messageTitle:a.val().messageTitle,messageEmail:a.val().messageEmail,messagePhone:a.val().messagePhone,messageText:a.val().messageText}),e.setState({notes:t})})),this.database.on("child_removed",(function(a){for(var l=0;l<t.length;l++)t[l].id===a.key&&t.splice(l,1);e.setState({notes:t})}))}},{key:"addNote",value:function(e,t,a,l,n){this.database.push().set({messageName:e,messageTitle:t,messageEmail:a,messagePhone:l,messageText:n})}},{key:"removeNote",value:function(e){console.log("from the parent: "+e),this.database.child(e).remove()}},{key:"render",value:function(){return n.a.createElement("div",{className:"notesWrapper"},n.a.createElement("div",{className:"notesFooter"},n.a.createElement(z,{addNote:this.addNote})))}}]),t}(l.Component),F=Object(i.a)((function(e){return{topContainer:{minWidth:"100%",backgroundColor:"#2E576B",minHeight:"400px",height:"100%",border:"2px solid #fff",borderRadius:"5px"},bottomContainer:{backgroundColor:"",height:"100%",border:"3px solid #fff",borderRadius:"5px"},footer:{minWidth:"100%",padding:0,backgroundColor:"#2E576B",minHeight:"15vh",height:"100%",border:"2px solid #fff",borderRadius:"5px"},rootBottom:{width:"100%",padding:15,marginTop:"-100px"},rootTop:{width:"100%",padding:50},icons:{textAlign:"right"},iconsElement:{color:"white",marginLeft:"1vh","&:hover":{padding:"1px"}},name:{textAlign:"center",color:"white",fontSize:"25px",fontWeight:"700",marginTop:"5vh"},introduce:{textAlign:"center",color:"black",fontWeight:"450",marginTop:"5vh"},buttons:{textAlign:"center",marginTop:"5vh",marginBottom:"5vh"},buttonElement:{minWidth:"110px",marginLeft:"10px",marginRight:"10px",marginBottom:"5vh",padding:5,color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh","&:hover":{backgroundColor:"#fff",color:"#20693C",borderRadius:"2vh"}},footerButton:{textAlign:"center",marginTop:"3vh"},footerIcons:{textAlign:"center",marginTop:"3vh",color:"white"},list:{border:"2px solid #0A1526",borderRadius:"5px",padding:35,marginBottom:10,textAlign:"center",backgroundColor:"#2C3C52","&:hover":{backgroundColor:"#2C3C52"},"&:focus":{backgroundColor:"#2C3C52"},"&:active":{backgroundColor:"#2C3C52"}},listContent:{minWidth:"70%",textAlign:"left"},listPhoto:{minWidth:"30%",minHeight:"200px",maxHeight:"200px"},listHeader:{},listName:{fontWeight:"600",marginRight:"2vh",fontSize:"25px",display:"inline-block"},listIcons:{display:"inline-block"},listIconsElement:{color:"white"},listIconsElementDjango:{color:"white",fontSize:"30px",marginBottom:"-7px"},listDescribe:{marginTop:"3vh",fontWeight:"300"},listButton:{marginTop:"5vh"},listButtonElement:{minWidth:"90px",color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh",marginRight:"20px","&:hover":{backgroundColor:"#fff",color:"#20693C"}},listButtonElement2:{minWidth:"90px",color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh","&:hover":{backgroundColor:"#fff",color:"#20693C"}},listButtonIconsElement:{marginLeft:"10px"},deleteUnderlining:{textDecoration:"none !important"},buttonElementFooter:{minWidth:"110px",padding:5,color:"white",backgroundColor:"#20693C",border:"1px solid #fff",borderRadius:"1vh","&:hover":{backgroundColor:"#fff",color:"#20693C",borderRadius:"2vh"}},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"700px",overflowY:"auto",maxHeight:"100vh"},divNameContactForm:{textAlign:"center",fontSize:"30px",border:"1px solid #20693C",borderRadius:"10vh",fontWeight:"800"},closeContactForm:{right:0,position:"absolute",fontSize:"35px",marginRight:"-10px",fontWeight:"500",marginTop:"-5px","&:hover":{backgroundColor:"#fff",color:"#20693C",fontWeight:"800",marginTop:"-10px"}}}}));function L(){return n.a.createElement("img",{src:"https://raw.githubusercontent.com/Hirq/portfolio/master/src/redux.png",alt:"Redux",style:{tintColor:"red",maxWidth:"15px"}})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement((function(){var e=F(),t=n.a.useState(!1),a=Object(r.a)(t,2),l=a[0],s=a[1],o=function(){s(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null),n.a.createElement(p.a,{maxWidth:"sm",className:e.topContainer},n.a.createElement(p.a,{className:e.rootTop},n.a.createElement(u.a,{component:"div",className:e.icons},n.a.createElement("a",{href:"https://github.com/Hirq"},n.a.createElement(E.b,{className:e.iconsElement})),n.a.createElement("a",{href:"https://pl.linkedin.com/in/cezary-zabrocki/"},n.a.createElement(E.c,{className:e.iconsElement}))),n.a.createElement(u.a,{component:"div",className:e.name},"Hello My name is Cezary and this is my portfolio!"),n.a.createElement(u.a,{component:"h2",className:e.introduce},"Junior developer with basics react, angular and python."),n.a.createElement(u.a,{component:"h2",className:e.buttons},n.a.createElement("a",{href:"#bottomContainer",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",className:e.buttonElement},"Portfolio")),n.a.createElement("a",{href:"https://drive.google.com/file/d/1DoQU7gAMd7n7Tp5tQcZrWERKTVwlxTA-/view?usp=sharing",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",className:e.buttonElement},"CV"))))),n.a.createElement(p.a,{className:e.bottomContainer},n.a.createElement(u.a,{component:"div",id:"bottomContainer"},n.a.createElement("div",{className:e.rootBottom},n.a.createElement(c.a,{component:"nav","aria-label":"main mailbox folders"},n.a.createElement(m.a,{button:!0,className:e.list},n.a.createElement("div",{class:"listContent"},n.a.createElement("div",{className:e.listHeader},n.a.createElement("div",{className:e.listName},"Loquest"),n.a.createElement("div",{className:e.listIcons},n.a.createElement(g.e,{className:e.listIconsElement}),n.a.createElement(g.c,{className:e.listIconsElementDjango}),n.a.createElement(g.d,{className:e.listIconsElement}),n.a.createElement(g.b,{className:e.listIconsElement}))),n.a.createElement("div",{className:e.listDescribe},"Pierwsza moja aplikacja fullstack w ca\u0142o\u015bci zbudowana na bibliotece Django."),n.a.createElement("div",{className:e.listButton},n.a.createElement("a",{href:"https://github.com/Hirq/Loquest",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",class:"listButtonElement"},"GitHub",n.a.createElement(E.b,{className:e.listButtonIconsElement}))),n.a.createElement("a",{href:"http://hirq.ct8.pl/",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",class:"listButtonElement2"},"Online",n.a.createElement(E.a,{className:e.listButtonIconsElement}))))),n.a.createElement("div",{class:"listPhoto"},n.a.createElement("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{class:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"4"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"5"})),n.a.createElement("div",{class:"carousel-inner"},n.a.createElement("div",{class:"carousel-item active"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/log0.png",alt:"First slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/log1.png",alt:"Second slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/log2.png",alt:"Third slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/log4.png",alt:"Five slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/log01.png",alt:"Six slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/log66.png",alt:"Seven slide"}))),n.a.createElement("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},n.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Previous")),n.a.createElement("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},n.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Next"))))),n.a.createElement(m.a,{button:!0,className:e.list},n.a.createElement("div",{class:"listContent"},n.a.createElement("div",{className:e.listHeader},n.a.createElement("div",{className:e.listName},"Majshop"),n.a.createElement("div",{className:e.listIcons},n.a.createElement(g.e,{className:e.listIconsElement}),n.a.createElement(g.c,{className:e.listIconsElementDjango}),n.a.createElement(g.d,{className:e.listIconsElement}),n.a.createElement(g.b,{className:e.listIconsElement}))),n.a.createElement("div",{className:e.listDescribe},"Sklep internetowy z efektami gitarowymi."),n.a.createElement("div",{className:e.listButton},n.a.createElement("a",{href:"https://github.com/Hirq/Shop/tree/onlyDjango",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",class:"listButtonElement"},"GitHub",n.a.createElement(E.b,{className:e.listButtonIconsElement}))),n.a.createElement("a",{href:"http://hirq-shop.ct8.pl/",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",class:"listButtonElement2"},"Online",n.a.createElement(E.a,{className:e.listButtonIconsElement}))))),n.a.createElement("div",{class:"listPhoto"},n.a.createElement("div",{id:"carouselExampleIndicators1",class:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{class:"carousel-indicators",id:"carouselArrowsBlack"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators1","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators1","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators1","data-slide-to":"2"})),n.a.createElement("div",{class:"carousel-inner"},n.a.createElement("div",{class:"carousel-item active"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/shop2.png",alt:"First slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/shop1.png",alt:"Second slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/shop3.png",alt:"Third slide"}))),n.a.createElement("a",{class:"carousel-control-prev",id:"carouselArrowsBlack",href:"#carouselExampleIndicators1",role:"button","data-slide":"prev"},n.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Previous")),n.a.createElement("a",{class:"carousel-control-next",id:"carouselArrowsBlack",href:"#carouselExampleIndicators1",role:"button","data-slide":"next"},n.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Next"))))),n.a.createElement(m.a,{button:!0,className:e.list},n.a.createElement("div",{class:"listContent"},n.a.createElement("div",{className:e.listHeader},n.a.createElement("div",{className:e.listName},"FindDev"),n.a.createElement("div",{className:e.listIcons},n.a.createElement(g.a,{className:e.listIconsElement}),n.a.createElement(g.d,{className:e.listIconsElement}),n.a.createElement(g.g,{className:e.listIconsElement}))),n.a.createElement("div",{className:e.listDescribe},"W trakcie produkcji.",n.a.createElement("br",null),"Serwis dla programist\xf3w do poszukiwania pracy.",n.a.createElement("br",null)),n.a.createElement("div",{className:e.listButton},n.a.createElement("a",{href:"https://github.com/Hirq/FindDev",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",class:"listButtonElement"},"GitHub",n.a.createElement(E.b,{className:e.listButtonIconsElement}))),n.a.createElement(h.a,{size:"small",class:"listButtonElement2","data-toggle":"modal","data-target":"#FinddevModal"},"View",n.a.createElement(E.a,{className:e.listButtonIconsElement})),n.a.createElement("div",{class:"modal fade bd-example-modal-lg",id:"FinddevModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{class:"modal-dialog modal-lg",role:"document"},n.a.createElement("div",{class:"modal-content"},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title w-100  text-center",id:"modal-header"},"Add Worker"),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev11.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"List")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev22.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"Login")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev33.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"Register")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev44.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"Purpose")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("ul",null,n.a.createElement("li",null,"Map"),n.a.createElement("li",null,"Subpage for company")))))))),n.a.createElement("div",{class:"listPhoto"},n.a.createElement("div",{id:"carouselExampleIndicators3",class:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{class:"carousel-indicators",id:"carouselArrowsBlack"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators3","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators3","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators3","data-slide-to":"2"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators3","data-slide-to":"3"})),n.a.createElement("div",{class:"carousel-inner"},n.a.createElement("div",{class:"carousel-item active"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev11.png",alt:"First slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev22.png",alt:"Second slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev33.png",alt:"Third slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/dev44.png",alt:"Four slide"}))),n.a.createElement("a",{class:"carousel-control-prev",id:"carouselArrowsBlack",href:"#carouselExampleIndicators3",role:"button","data-slide":"prev"},n.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Previous")),n.a.createElement("a",{class:"carousel-control-next",id:"carouselArrowsBlack",href:"#carouselExampleIndicators3",role:"button","data-slide":"next"},n.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Next"))))),n.a.createElement(m.a,{button:!0,className:e.list},n.a.createElement("div",{class:"listContent"},n.a.createElement("div",{className:e.listHeader},n.a.createElement("div",{className:e.listName},"Woradd"),n.a.createElement("div",{className:e.listIcons},n.a.createElement(g.f,{className:e.listIconsElement}),n.a.createElement(L,null),n.a.createElement(g.d,{className:e.listIconsElement}),n.a.createElement(g.g,{className:e.listIconsElement}))),n.a.createElement("div",{className:e.listDescribe},"W trakcie produkcji.",n.a.createElement("br",null),"Apliakacja do nauki jezyka angielskiego. ",n.a.createElement("br",null)),n.a.createElement("div",{className:e.listButton},n.a.createElement("a",{href:"https://github.com/Hirq/Woradd",className:e.deleteUnderlining},n.a.createElement(h.a,{size:"small",class:"listButtonElement"},"GitHub",n.a.createElement(E.b,{className:e.listButtonIconsElement}))),n.a.createElement(h.a,{size:"small",class:"listButtonElement2","data-toggle":"modal","data-target":"#WoraddModal"},"View",n.a.createElement(E.a,{className:e.listButtonIconsElement}))),n.a.createElement("div",{class:"modal fade",id:"WoraddModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{class:"modal-dialog",role:"document"},n.a.createElement("div",{class:"modal-content"},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title w-100  text-center",id:"modal-header"},"Add word & Words list"),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word11.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"Create note & Note List")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word22.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"View Note")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word33.png",alt:"First slide"})),n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title  w-100  text-center",id:"exampleModalLabel"},"Purpose")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("ul",null,n.a.createElement("li",null,"Set diffucult word"),n.a.createElement("li",null,"Calendar history of using time"))))))),n.a.createElement("div",{class:"listPhoto"},n.a.createElement("div",{id:"carouselExampleIndicators2",class:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{class:"carousel-indicators",id:"carouselArrowsBlack"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"2"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators2","data-slide-to":"3"})),n.a.createElement("div",{class:"carousel-inner"},n.a.createElement("div",{class:"carousel-item active"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word11.png",alt:"First slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word22.png",alt:"Second slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word33.png",alt:"Third slide"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{class:"d-block w-100",src:"https://raw.githubusercontent.com/Hirq/portfolio/master/images/word55.png",alt:"Third slide"}))),n.a.createElement("a",{class:"carousel-control-prev",id:"carouselArrowsBlack",href:"#carouselExampleIndicators2",role:"button","data-slide":"prev"},n.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Previous")),n.a.createElement("a",{class:"carousel-control-next",id:"carouselArrowsBlack",href:"#carouselExampleIndicators2",role:"button","data-slide":"next"},n.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{class:"sr-only"},"Next"))))))))),n.a.createElement(p.a,{maxWidth:"sm",className:e.footer},n.a.createElement(u.a,{component:"div",className:e.footerButton},n.a.createElement(h.a,{size:"small",className:e.buttonElementFooter,onClick:function(){s(!0)}},"Contact"),n.a.createElement(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:l,onClose:o,closeAfterTransition:!0,BackdropComponent:v.a,BackdropProps:{timeout:500}},n.a.createElement(f.a,{in:l},n.a.createElement("div",{className:e.paper},n.a.createElement("form",null,n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col"},n.a.createElement("div",{className:e.closeContactForm,onClick:o},"X"),n.a.createElement("div",{className:e.divNameContactForm},"Contact Form"))),n.a.createElement(M,null)))))),n.a.createElement(u.a,{component:"div",className:e.footerIcons},n.a.createElement("a",{href:"https://github.com/Hirq/",className:e.deleteUnderlining},n.a.createElement(E.b,{className:e.iconsElement})),n.a.createElement("a",{href:"https://pl.linkedin.com/in/cezary-zabrocki/",className:e.deleteUnderlining},n.a.createElement(E.c,{className:e.iconsElement})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.74e25ac5.chunk.js.map