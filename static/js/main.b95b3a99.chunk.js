(this["webpackJsonppinshengjuan.github.io"]=this["webpackJsonppinshengjuan.github.io"]||[]).push([[0],{22:function(e,s,c){},44:function(e,s,c){"use strict";c.r(s);var n=c(0),a=c(1),t=c.n(a),i=c(16),l=c.n(i),r=(c(22),c(2)),j=c(3),o=c(5),d=c(4),h=c(9),b=c.n(h),m=function(e){Object(o.a)(c,e);var s=Object(d.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=(this.props.data.occupation,this.props.data.description,this.props.data.social.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.url,children:Object(n.jsx)("i",{className:e.className})})},e.name)})));return Object(n.jsxs)("header",{id:"home",children:[Object(n.jsxs)("nav",{id:"nav-wrap",children:[Object(n.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(n.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(n.jsxs)("ul",{id:"nav",className:"nav",children:[Object(n.jsx)("li",{className:"current",children:Object(n.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(n.jsx)("div",{className:"row banner",children:Object(n.jsxs)("div",{className:"banner-text",children:[Object(n.jsx)("h1",{className:"responsive-headline",children:Object(n.jsx)("span",{class:"hellocolor",children:Object(n.jsxs)(b.a,{speed:80,children:[Object(n.jsx)("span",{children:"Hello,1"}),Object(n.jsx)(b.a.Delay,{ms:2e5})]})})}),Object(n.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(n.jsx)("hr",{}),Object(n.jsx)("ul",{className:"social",children:s})]})}),Object(n.jsx)("p",{className:"scrolldown",children:Object(n.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(n.jsx)("i",{className:"fa fa-angle-down"})})})]})}}]),c}(a.Component),p=function(e){Object(o.a)(c,e);var s=Object(d.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)this.props.data.social.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.url,children:Object(n.jsx)("i",{className:e.className})})},e.name)}));return Object(n.jsxs)("footer",{children:[Object(n.jsx)("div",{className:"row"}),Object(n.jsx)("div",{id:"go-top",children:Object(n.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(n.jsx)("i",{className:"icon-up-open"})})})]})}}]),c}(a.Component),O=function(e){Object(o.a)(c,e);var s=Object(d.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,c=this.props.data.bio,a=this.props.data.phone,t=this.props.data.email;return Object(n.jsx)("section",{id:"about",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"three columns",children:Object(n.jsx)("img",{className:"profile-pic",src:s,alt:"Profile Pic"})}),Object(n.jsxs)("div",{className:"nine columns main-col",children:[Object(n.jsx)("h2",{children:"About Me"}),Object(n.jsx)("p",{children:c}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"columns contact-details",children:[Object(n.jsx)("h2",{children:"Contact Details"}),Object(n.jsxs)("p",{className:"address",children:[Object(n.jsx)("span",{children:e}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:a}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:t})]})]}),Object(n.jsx)("div",{className:"columns download",children:Object(n.jsx)("p",{})})]})]})]})})}}]),c}(a.Component),u=function(e){Object(o.a)(c,e);var s=Object(d.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.school}),Object(n.jsxs)("p",{className:"info",children:[e.degree," ",Object(n.jsx)("span",{children:"\u2022"}),Object(n.jsx)("em",{className:"date",children:e.graduated})]}),Object(n.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.company}),Object(n.jsxs)("p",{className:"info",children:[e.title,Object(n.jsx)("span",{children:"\u2022"})," ",Object(n.jsx)("em",{className:"date",children:e.years})]}),Object(n.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{style:{width:e.level},className:s}),Object(n.jsx)("em",{children:e.name})]},e.name)}));return Object(n.jsxs)("section",{id:"resume",children:[Object(n.jsxs)("div",{className:"row education",children:[Object(n.jsx)("div",{className:"three columns header-col",children:Object(n.jsx)("h1",{children:Object(n.jsx)("span",{children:"Education"})})}),Object(n.jsx)("div",{className:"nine columns main-col",children:Object(n.jsx)("div",{className:"row item",children:Object(n.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(n.jsxs)("div",{className:"row work",children:[Object(n.jsx)("div",{className:"three columns header-col",children:Object(n.jsx)("h1",{children:Object(n.jsx)("span",{children:"Work"})})}),Object(n.jsx)("div",{className:"nine columns main-col",children:c})]}),Object(n.jsxs)("div",{className:"row skill",children:[Object(n.jsx)("div",{className:"three columns header-col",children:Object(n.jsx)("h1",{children:Object(n.jsx)("span",{children:"Skills"})})}),Object(n.jsxs)("div",{className:"nine columns main-col",children:[Object(n.jsx)("p",{children:e}),Object(n.jsx)("div",{className:"bars",children:Object(n.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),c}(a.Component),x=c(6);var v=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{data:x.personalinfo}),Object(n.jsx)(O,{data:x.personalinfo}),Object(n.jsx)(u,{data:x.resume}),Object(n.jsx)(p,{data:x.personalinfo})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(s){var c=s.getCLS,n=s.getFID,a=s.getFCP,t=s.getLCP,i=s.getTTFB;c(e),n(e),a(e),t(e),i(e)}))};l.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),f()},6:function(e){e.exports=JSON.parse('{"personalinfo":{"name":"PinSheng Juan","description":"","image":"","bio":"","email":"pinshengjuan@gmail.com","phone":"+886-972-373-720","website":"http://pinshengjuan.github.io","social":[{"name":"email","url":"mailto:pinshengjuan@gmail.com","className":"fa fa-envelope"},{"name":"linkedin","url":"http://linkedin.com/in/pinshengjuan","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/pinshengjuan","className":"fa fa-github"}]},"resume":{"skillmessage":"","education":[{"school":"National Chung Cheng University","degree":"Masters in Communication Engineering","graduated":"October 2017","description":""},{"school":"Feng Chia University","degree":"Bachelor in Communication Engineering","graduated":"June 2015","description":""}],"work":[{"company":"ASRock Inc.","title":"Senior Engineer","years":"December 2017 - Present","description":""}],"skills":[{"name":"Git","level":"60%"},{"name":"C","level":"70%"},{"name":"ReactJs","level":"50%"},{"name":"Electron","level":"30%"},{"name":"Python","level":"50%"}]}}')}},[[44,1,2]]]);
//# sourceMappingURL=main.b95b3a99.chunk.js.map