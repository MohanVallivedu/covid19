(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{102:function(e,a,t){},15:function(e,a,t){e.exports={container:"Card_container__1e-hy",card:"Card_card__3xPQZ",confirmed:"Card_confirmed__2_3hu",recovered:"Card_recovered__2npDe",deaths:"Card_deaths__2lQd4"}},221:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),l=(t(102),t(9)),u=t.n(l),i=t(12),s=t(82),d=t(83),m=t(93),p=t(92),h=t(84),f=t.n(h),v=t(55),E=t.n(v),g=t(43),b=t.n(g),y="https://covid19.mathdro.id/api",C=function(){var e=Object(i.a)(u.a.mark((function e(a){var t,n,r,c,o,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=y,a&&(t="".concat(y,"/countries/").concat(a)),e.next=5,b.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.deaths,l=r.recovered,i=r.lastUpdate,e.abrupt("return",{confirmed:c,deaths:o,recovered:l,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(a){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(u.a.mark((function e(){var a,t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=t(245),w=t(246),j=t(255),O=t(247),S=t(222),D=t(248),N=t(249),P=t(15),B=t.n(P),R=t(44),F=t.n(R),I=t(45),M=t.n(I),L=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement("div",{className:B.a.container},r.a.createElement(w.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:M()(B.a.confirmed,B.a.card)},r.a.createElement(O.a,null,r.a.createElement(S.a,{color:"primary",variant:"h6",gutterBottom:!0},"Confirmed"),r.a.createElement(S.a,{variant:"h6"},r.a.createElement(F.a,{start:0,end:t.value,duration:1.6,separator:","})),r.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(S.a,{variant:"subtitle1"}," Number of Confirmed cases ")),r.a.createElement(D.a,null,r.a.createElement(N.a,{size:"small",target:"_blank",href:"https://coronavirus.jhu.edu/map.html"},"Learn More"))),r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:M()(B.a.deaths,B.a.card)},r.a.createElement(O.a,null,r.a.createElement(S.a,{color:"secondary",variant:"h6",gutterBottom:!0},"Deaths"),r.a.createElement(S.a,{variant:"h6"},r.a.createElement(F.a,{start:0,end:c.value,duration:1.8,separator:","})),r.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(S.a,{variant:"subtitle1"}," Number of deaths caused")),r.a.createElement(D.a,null,r.a.createElement(N.a,{size:"small",target:"_blank",href:"https://coronavirus.jhu.edu/map.html"},"Learn More"))),r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:M()(B.a.recovered,B.a.card)},r.a.createElement(O.a,null,r.a.createElement(S.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Recovered"),r.a.createElement(S.a,{variant:"h6"},r.a.createElement(F.a,{start:0,end:n.value,duration:1.6,separator:","})),r.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(S.a,{variant:"subtitle1"}," Total Recovered")),r.a.createElement(D.a,null,r.a.createElement(N.a,{size:"small",target:"_blank",href:"https://coronavirus.jhu.edu/map.html"},"Learn More"))))):r.a.createElement(k.a,null)},U=t(42),z=t(31),A=t(89),Q=t.n(A),J=function(e){var a=e.data,t=a.confirmed,n=a.deaths,c=a.recovered,o=e.country,l=e.checked,u=t?r.a.createElement(z.Doughnut,{data:{datasets:[{data:[t.value,n.value,c.value],backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(255, 0, 0, 0.5)","rgba(0, 255, 0, 0.5)"]}],labels:["Infected","Deaths","Recovered"]},options:{legend:{display:!1},title:{display:!0,text:"Showing ".concat(o," country")}}}):null,i=t?r.a.createElement(z.Bar,{data:{labels:["Cofirmed","Deaths","Recovered"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(255, 0, 0, 0.5)","rgba(0, 255, 0, 0.5)"],data:[t.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Showing ".concat(o," country")}}}):null;return r.a.createElement(r.a.Fragment,null,l?i:u)},T=function(e){var a=e.data,t=e.country,c=e.checked;console.log("Default checked "+t);var o=Object(n.useState)([]),l=Object(U.a)(o,2),s=l[0],d=l[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=void 0!==s?r.a.createElement(z.Line,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"confirmed",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:Q.a.container},t?r.a.createElement(J,{data:a,country:t,checked:c}):m)},V=t(256),Z=t(253),q=t(90),G=t.n(q),W=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(U.a)(t,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{className:G.a.FormControl},r.a.createElement(Z.a,{defaultValue:"",onChange:function(e){a(e.target.value)}},r.a.createElement("option",{value:""},"Global (Worldwide)"),o.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))))},X=t(250),Y=t(254),H=t(251),K=t(252),$=t(91),ee=t.n($),ae=function(e){var a=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(X.a,{component:"legend"},"Chart Type"),r.a.createElement(Y.a,{"aria-label":"Chart",name:"chartSelect",defaultValue:"Pie",onChange:function(e){a(e.target.value)},className:ee.a.Radio},r.a.createElement(H.a,{value:"Pie",id:"Pie",control:r.a.createElement(K.a,{value:"Pie"}),label:"Pie"}),r.a.createElement(H.a,{value:"Bar",id:"Bar",control:r.a.createElement(K.a,{value:"Bar"}),label:"Bar"}))))},te=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:"",checked:!1},e.handleCountryChange=function(){var a=Object(i.a)(u.a.mark((function a(t){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleChange=function(a){console.log(a),"Pie"===a?e.setState({checked:!1}):"Bar"===a&&e.setState({checked:!0})},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country,n=e.checked;return r.a.createElement("div",{className:E.a.container},r.a.createElement("img",{src:f.a,className:E.a.Image,alt:"Covid-19"}),r.a.createElement(L,{data:a}),r.a.createElement(W,{handleCountryChange:this.handleCountryChange}),t?r.a.createElement(ae,{handleChange:this.handleChange}):null,r.a.createElement(T,{data:a,country:t,checked:n}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root"))},55:function(e,a,t){e.exports={container:"App_container__25P4O",Image:"App_Image__2MZ4q"}},84:function(e,a,t){e.exports=t.p+"static/media/Covid19.8cfd2951.jpg"},89:function(e,a,t){e.exports={container:"Chart_container__1h3pQ"}},90:function(e,a,t){e.exports={FormControl:"PickCountry_FormControl__1YySU"}},91:function(e,a,t){e.exports={Radio:"ChartSwitch_Radio__3IcXd"}},97:function(e,a,t){e.exports=t(221)}},[[97,1,2]]]);
//# sourceMappingURL=main.626e27e4.chunk.js.map