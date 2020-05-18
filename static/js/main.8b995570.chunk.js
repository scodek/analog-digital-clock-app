(this["webpackJsonpanalog-digital-clock-app"]=this["webpackJsonpanalog-digital-clock-app"]||[]).push([[0],{14:function(e,t,i){"use strict";i.r(t),t.default={Cities:[{city:"Kolkata",lattitude:22.572645,longitude:88.363892},{city:"Madrid",lattitude:40.416775,longitude:-3.70379},{city:"Melbourne",lattitude:-37.815018,longitude:144.946014},{city:"Moscow",lattitude:59.93863,longitude:30.31413},{city:"Beijing",lattitude:39.913818,longitude:116.363625},{city:"Bangkok",lattitude:13.736717,longitude:100.523186},{city:"London",lattitude:51.509865,longitude:-.118092},{city:"Berlin",lattitude:52.520008,longitude:13.404954},{city:"Paris",lattitude:48.864716,longitude:2.349014},{city:"Nairobi",lattitude:-1.28333,longitude:36.81667},{city:"Amsterdam",lattitude:52.377956,longitude:4.89707}]}},15:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(6),r=i.n(c),o=i(2),l=i(3),s=i(1),u=i(5),m=i(4),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).getInputValue=i.getInputValue.bind(Object(s.a)(i)),i.onSubmit=i.onSubmit.bind(Object(s.a)(i)),i}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=i(14).default.Cities;window.MyVars=e}},{key:"getInputValue",value:function(e){this.props.getCity(e.target.value)}},{key:"onSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=window.MyVars.map((function(e){return n.a.createElement("option",null,e.city)}));return n.a.createElement("div",{id:"cityDiv"},n.a.createElement("select",{id:"capitalSelect",name:"capital",value:this.props.sendCity,onChange:this.getInputValue},n.a.createElement("option",null,this.props.sendCity),e))}}]),a}(n.a.Component),p=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).onClockTypeSubmit=a.onClockTypeSubmit.bind(Object(s.a)(a)),a}return Object(l.a)(i,[{key:"onClockTypeSubmit",value:function(e){var t;t="digital"==e.target.value?"analog":"digital",e.target.value=t,this.props.getClockType(t)}},{key:"render",value:function(){return n.a.createElement("div",{id:"clockDiv"},n.a.createElement("input",{id:"clockType",type:"submit",onClick:this.onClockTypeSubmit,value:this.props.defaultClockType}))}}]),i}(n.a.Component),y=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.props.getCurrentTime(this.timeNow())}},{key:"timeNow",value:function(){var e="",t="",i="";if(this.props.cityCurrentTime){var a=this.props.cityCurrentTime.split(":");e=(e=a[0]).replace(/^0(\d)/,"$1"),parseInt(e)>=24&&(e=0),t=(t=a[1]).replace(/^0(\d)/,"$1"),parseInt(t)>=60&&(t=0,e=parseInt(e)+1),a[2]&&(i=(i=a[2]).replace(/^0(\d)/,"$1"),(i=parseInt(i)+1)>=60&&(i=0,t=parseInt(t)+1)),""==i&&(i="1")}else{var n=new Date;e=n.getHours(),t=n.getMinutes(),i=n.getSeconds()}var c="AM";return 0==e&&(e=12),(e>12||12==e&&t>=0&&i>=0)&&(c="PM"),e<10&&(e="0"+e),t<10&&(t="0"+t),i<10&&(i="0"+i),e+":"+t+":"+i+" "+c}},{key:"render",value:function(){var e=this.props.cityCurrentTime.split(":"),t=parseInt(e[0]),i=parseInt(e[1]),a=parseInt(e[2]);if("analog"==this.props.clockType){var c={transform:"rotate("+(360*t/12+30/3600)+"deg)"},r={transform:"rotate("+360*i/60+"deg)"},o={transform:"rotate("+360*a/60+"deg)"};return n.a.createElement("div",{class:"clockbox"},n.a.createElement("svg",{id:"clock",xmlns:"http://www.w3.org/2000/svg",width:"400",height:"400",viewBox:"-50 -50 700 700"},n.a.createElement("g",{id:"face"},n.a.createElement("circle",{class:"circle",cx:"300",cy:"300",r:"253.9"}),n.a.createElement("path",{class:"hour-marks",d:"M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"}),n.a.createElement("circle",{class:"mid-circle",cx:"300",cy:"300",r:"16.2"})),n.a.createElement("g",{id:"hour",style:c},n.a.createElement("path",{class:"hour-arm",d:"M300.5 298V142"}),n.a.createElement("circle",{class:"sizing-box",cx:"300",cy:"300",r:"253.9"})),n.a.createElement("g",{id:"minute",style:r},n.a.createElement("path",{class:"minute-arm",d:"M300.5 298V67"}),n.a.createElement("circle",{class:"sizing-box",cx:"300",cy:"300",r:"253.9"})),n.a.createElement("g",{id:"second",style:o},n.a.createElement("path",{class:"second-arm",d:"M300.5 350V55"}),n.a.createElement("circle",{class:"sizing-box",cx:"300",cy:"300",r:"253.9"}))))}return t=t<10?"0"+t:t,i=i<10?"0"+i:i,a=a<10?"0"+a:a,n.a.createElement("div",{id:"clockboxdigital"},n.a.createElement("div",{className:"display-screen"},t+":"+i+":"+a))}}]),i}(n.a.Component),v=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return n.a.createElement(y,{clockType:this.props.clockType,cityCurrentTime:this.props.cityCurrentTime,getCurrentTime:this.props.getCurrentTime})}}]),i}(n.a.Component),g=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={localTime:"",city:"",clockType:"digital"},a.receiveCityName=a.receiveCityName.bind(Object(s.a)(a)),a.receiveClockType=a.receiveClockType.bind(Object(s.a)(a)),a.showPosition=a.showPosition.bind(Object(s.a)(a)),a.receiveCurrentTime=a.receiveCurrentTime.bind(Object(s.a)(a)),a}return Object(l.a)(i,[{key:"showPosition",value:function(e,t){var i=this,a="",n="";if(e)a=e.coords.latitude,n=e.coords.longitude;else for(var c=0;c<window.MyVars.length;c++)window.MyVars[c].city==t&&(a=window.MyVars[c].lattitude,n=window.MyVars[c].longitude);fetch("http://api.geonames.org/timezone?lat="+a+"&lng="+n+"&username=skhalequ").then((function(e){return e.text()})).then((function(e){console.log(e);var t=e.match(/<time>.+?<\/time>/gm)[0].replace(/<time>.+?\s+(.+)<\/time>/,"$1");console.log("Time line#59 : "+t);var a=e.match(/<timezoneId>.+?<\/timezoneId>/gm)[0].replace(/<timezoneId>.+?\/([a-z]+)<\/timezoneId>/i,"$1");i.setState({city:a,localTime:t}),console.log("time = "+t+", "+a)}))}},{key:"componentDidMount",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):alert("navigator.geolocation failed: Geolocation is not supported by this browser.")}},{key:"receiveCityName",value:function(e){this.setState({city:e},(function(){var e=this.state.city;this.showPosition("",e)}))}},{key:"receiveClockType",value:function(e){this.setState({clockType:e})}},{key:"receiveCurrentTime",value:function(e){this.setState({localTime:e})}},{key:"render",value:function(){return n.a.createElement("div",{id:"main-body"},n.a.createElement(d,{sendCity:this.state.city,getCity:this.receiveCityName}),n.a.createElement(p,{defaultClockType:this.state.clockType,getClockType:this.receiveClockType}),n.a.createElement(v,{cityName:this.state.city,clockType:this.state.clockType,cityCurrentTime:this.state.localTime,getCurrentTime:this.receiveCurrentTime}))}}]),i}(n.a.Component);r.a.render(n.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,i){e.exports=i(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8b995570.chunk.js.map