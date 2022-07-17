(function(t){function e(e){for(var o,i,n=e[0],c=e[1],l=e[2],h=0,d=[];h<n.length;h++)i=n[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},s={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0418":function(t,e,a){"use strict";var o=a("df39"),s=a("ad21"),r=a("2877"),i=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basepage",attrs:{id:"app"}},[a("router-view"),a("vue-progress-bar"),a("notifications",{attrs:{classes:"my-notification",position:"right bottom"}})],1)},r=[],i={},n=i,c=(a("034f"),a("2877")),l=Object(c["a"])(n,s,r,!1,null,null,null),u=l.exports,h=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Header"),a("Hero",{attrs:{page:"Home",location:t.location.locationName}}),t.weather.hourData&&t.weather.fiveDayData?a("div",{staticClass:"content fullheight centerpage",attrs:{id:"content"}},[a("div",{staticClass:"temperature-holder"},[a("span",{staticClass:"value"},[t._v(t._s(t.weather.hourData.Temperature.Value)+"°C")]),a("h1",{staticClass:"phrase"},[t._v(t._s(t.weather.hourData.IconPhrase))])]),a("div",{staticClass:"days"},t._l(t.weather.fiveDayData.DailyForecasts,(function(e,o){return a("span",{key:o,staticClass:"day"},[a("span",{staticClass:"temperature-value"},[t._v(t._s(e.Temperature.Maximum.Value)+"°C")]),a("span",{staticClass:"day-date"},[t._v(t._s(new Date(1e3*e.EpochDate).toLocaleString("en-US",{day:"2-digit",year:"2-digit",month:"2-digit"})))])])})),0)]):a("Loading"),a("Footer")],1)},p=[],f=a("0418"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("a",{staticClass:"accessibility-btn",attrs:{href:"#content"}},[t._v("Skip Header")]),a("a",{staticClass:"accessibility-btn",attrs:{href:"#footer"}},[t._v("Skip to Footer")]),a("div",{staticClass:"location-holder"},[t.location?a("a",{staticClass:"location",attrs:{href:"https://www.google.com/maps/place/"+t.location,rel:"noopener noreferrer",target:"_blank"},domProps:{textContent:t._s(t.location)}}):a("router-link",{staticClass:"location",attrs:{to:"/"},domProps:{textContent:t._s(t.page)}})],1),a("nav",[a("ul",[a("li",[a("a",{attrs:{href:"#"},on:{click:t.changeMode}},[a("span",{staticClass:"mode-icon"},[a("svg",{class:t.mode?"sun":"moon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[a("path")])])])]),"Home"!=t.page?a("li",[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"icon home-icon"},[a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714",stroke:"#130F26","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1):a("li",[a("router-link",{attrs:{to:"/search"}},[a("span",{staticClass:"icon search-icon"},[a("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("ellipse",{attrs:{cx:"24.5138",cy:"24.5137",rx:"18.7262",ry:"18.7262",stroke:"#222222","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M37.5381 38.5107L44.8799 45.8333",stroke:"#222222","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1)])])])},v=[],m={props:{location:null,page:null},data(){return{mode:!1}},methods:{changeMode:function(){var t=document.querySelector("body");this.mode?(this.mode=!1,t.classList.remove("dark"),this.$cookies.set("theme","default")):(this.mode=!0,t.classList.add("dark"),this.$cookies.set("theme","dark"))}},mounted(){var t=document.querySelector("body");this.$cookies.get("theme")?"default"==this.$cookies.get("theme")?(this.mode=!1,t.classList.remove("dark")):(this.mode=!0,t.classList.add("dark")):this.$cookies.set("theme","default")}},y=m,w=Object(c["a"])(y,g,v,!1,null,null,null),C=w.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[a("span",{staticClass:"feature"},[t._v("Made By "),a("a",{attrs:{href:"https://itaycode.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("itaycode")])]),a("span",{staticClass:"line"}),a("span",{staticClass:"feature"},[t._v("Api By "),a("a",{attrs:{href:"https://www.accuweather.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AccuWeather")])])])}],b=a("9224"),x={data(){return{version:b["a"]}}},D=x,$=Object(c["a"])(D,k,_,!1,null,null,null),L=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content fullheight centerpage"},[a("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 40 40"}},[a("circle",{attrs:{cx:"20",cy:"20",r:"18"}})])])},O=[],K={},N=K,F=Object(c["a"])(N,j,O,!1,null,null,null),H=F.exports,P=a("2f62"),S=a("2b27"),V=a.n(S);o["default"].use(P["a"],V.a);var M=new P["a"].Store({state:{location:{locationKey:$cookies.get("locationKey")?$cookies.get("locationKey"):null,locationName:$cookies.get("locationName")?$cookies.get("locationName"):null,latitude:null,longitude:null,search:!1},user:{ipAddress:null},notification:{error:!1,succ:!1,msg:""},api:{apiKey:"aePP6ikUk45AOaVMrkptmgejFOJZVAz6",lang:"en-en"},weather:{hourData:null,fiveDayData:null}},mutations:{},actions:{},modules:{}}),A=a("bc3a"),E=a.n(A),W={components:{Hero:C,Header:f["default"],Footer:L,Loading:H,Header:f["default"]},computed:{location(){return M.state.location},user(){return M.state.user},api(){return M.state.api},weather(){return M.state.weather}},mounted(){this.location.search?(this.location.search=!1,this.checkLocation()):navigator.geolocation?navigator.geolocation.getCurrentPosition(this.success,this.error):this.location.locationKey||this.location.locationName?this.checkLocation():this.getIpAddress(!0)},methods:{getIpAddress(t=!1){E.a.get("https://api.ipify.org?format=json").then(e=>{this.user.ipAddress=e.data.ip,t&&this.getIpLocation()}).catch(t=>{this.$notify({type:"error",text:t})})},getIpLocation(){E.a.get("http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey="+this.api.apiKey+"&q="+this.user.ipAddress+"&language="+this.api.lang+"&details=false").then(t=>{this.location.locationKey=t.data.ParentCity.Key,this.location.locationName=t.data.ParentCity.EnglishName,this.getWeatherData(),this.get5DayWeatherData()}).catch(t=>{this.$notify({type:"error",text:t})})},getMeridianLocation(){E.a.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="+this.api.apiKey+"&q="+this.location.latitude+","+this.location.longitude+"&language="+this.api.lang+"&details=false&toplevel=false").then(t=>{this.location.locationKey=t.data.Key,this.location.locationName=t.data.LocalizedName,this.getWeatherData(),this.get5DayWeatherData()}).catch(t=>{this.$notify({type:"error",text:t})})},getWeatherData(){E.a.get("https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/"+this.location.locationKey+"?apikey="+this.api.apiKey+"&language="+this.api.lang+"&details=false&metric=true").then(t=>{this.weather.hourData=t.data[0]}).catch(t=>{this.$notify({type:"error",text:t})})},get5DayWeatherData(){E.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+this.location.locationKey+"?apikey="+this.api.apiKey+"&language="+this.api.lang+"&details=false&metric=true").then(t=>{this.weather.fiveDayData=t.data}).catch(t=>{this.$notify({type:"error",text:t})})},checkLocation(){null!=this.weather.hourData&&-1==this.weather.hourData.Link.search(this.location.locationKey)?(this.weather.hourData=null,this.weather.fiveDayData=null,this.getWeatherData(),this.get5DayWeatherData()):(this.getWeatherData(),this.get5DayWeatherData())},success(t){this.location.latitude=t.coords.latitude,this.location.longitude=t.coords.longitude,this.getMeridianLocation()},error(){this.$notify({type:"error",text:"Could not get location"}),this.location.locationKey||this.location.locationName?this.checkLocation():this.getIpAddress(!0)}}},B=W,I=Object(c["a"])(B,d,p,!1,null,null,null),R=I.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Header",{attrs:{page:"Search",location:!1}}),a("Hero",{attrs:{page:"Search",location:!1}}),a("div",{staticClass:"content basepage fullheight searchPage",attrs:{id:"content"}},[a("div",{staticClass:"search-input-holder",class:{focus:t.inputFocus}},[a("span",{staticClass:"icon input-icon"},[a("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.2083 21.8761C30.2083 18.9984 27.8766 16.6667 25.001 16.6667C22.1234 16.6667 19.7917 18.9984 19.7917 21.8761C19.7917 24.7516 22.1234 27.0833 25.001 27.0833C27.8766 27.0833 30.2083 24.7516 30.2083 21.8761Z",stroke:"#222222","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.999 43.75C22.5022 43.75 9.375 33.1216 9.375 22.0069C9.375 13.3055 16.369 6.25 24.999 6.25C33.629 6.25 40.625 13.3055 40.625 22.0069C40.625 33.1216 27.4958 43.75 24.999 43.75Z",stroke:"#222222","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-input",attrs:{autocomplete:"off",type:"text",id:"search",placeholder:"Search Location"},domProps:{value:t.searchValue},on:{focus:function(e){t.inputFocus=!0},blur:function(e){t.inputFocus=!1},input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})]),t.searchResult?a("div",{staticClass:"search-result-holder"},[0==t.searchResult.length?a("span",{staticClass:"search-result no-result"},[t._v("No Result Found")]):t._l(t.searchResult,(function(e,o){return a("button",{key:o,staticClass:"search-result",on:{click:function(a){return t.changeLocation(e.Key,e.LocalizedName)}}},[t._v(" "+t._s(e.LocalizedName)+" / "+t._s(e.Country.LocalizedName))])}))],2):t._e()]),a("Footer")],1)},z=[],T={components:{Footer:L,Hero:C,Header:f["default"]},data(){return{searchValue:null,searchResult:null,inputFocus:!1}},computed:{location(){return M.state.location},api(){return M.state.api}},watch:{searchValue(t){null!=t&&t.length>=3&&E.a.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+this.api.apiKey+"&language="+this.api.lang+"&q="+t).then(t=>{this.searchResult=t.data}).catch(t=>{this.$notify({type:"error",text:t})})}},methods:{changeLocation:function(t,e){this.location.locationKey=t,this.location.locationName=e,this.location.search=!0,this.$cookies.set("locationKey",t),this.$cookies.set("locationName",e),this.$notify({type:"success",text:"Location changed"}),this.$router.push("/")}}},J=T,Z=Object(c["a"])(J,q,z,!1,null,null,null),U=Z.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Header",{attrs:{page:"Favorites",location:!1}}),t._m(0),a("Footer")],1)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content basepage favoritesPage centerpage halfheight",attrs:{id:"content"}},[a("h1",[t._v("Favorites")]),a("div",{staticClass:"days"},[a("span",{staticClass:"day"},[a("span",{staticClass:"temperature-value"},[t._v("32°C")]),a("span",{staticClass:"day-date"},[t._v("07/14/22")])]),a("span",{staticClass:"day"},[a("span",{staticClass:"temperature-value"},[t._v("32°C")]),a("span",{staticClass:"day-date"},[t._v("07/14/22")])]),a("span",{staticClass:"day"},[a("span",{staticClass:"temperature-value"},[t._v("32°C")]),a("span",{staticClass:"day-date"},[t._v("07/14/22")])]),a("span",{staticClass:"day"},[a("span",{staticClass:"temperature-value"},[t._v("32°C")]),a("span",{staticClass:"day-date"},[t._v("07/14/22")])])])])}],X={components:{Footer:L,Header:f["default"]},computed:{},watch:{},methods:{}},Y=X,tt=Object(c["a"])(Y,G,Q,!1,null,null,null),et=tt.exports;o["default"].use(h["a"]);const at=[{path:"/",component:R},{path:"/search",component:U},{path:"/favorites",component:et}],ot=new h["a"]({mode:"history",base:"/",routes:at});var st=ot,rt=a("ee98"),it=a.n(rt),nt=a("26b9"),ct=a.n(nt);const lt={color:"var(--color)",failedColor:"#ff0000",thickness:"2px",transition:{speed:"0.25s",opacity:"0.25s",termination:300},autoRevert:!0,location:"top",inverse:!1};o["default"].use(ct.a,lt);var ut=a("9483");Object(ut["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),o["default"].use(it.a),o["default"].use(V.a),o["default"].config.productionTip=!1,new o["default"]({router:st,store:M,render:function(t){return t(u)}}).$mount("#app")},8387:function(t,e){},"85ec":function(t,e,a){},9224:function(t){t.exports=JSON.parse('{"a":"0.4.5"}')},ad21:function(t,e,a){"use strict";var o=a("8387"),s=a.n(o);e["default"]=s.a},df39:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"flex"},[a("div",{staticClass:"logo"},[t._v(" Itay's Weather App ")]),a("nav",[a("ul",["Home"!=t.page?a("li",[a("router-link",{attrs:{to:"/"}},[a("span",[t._v(" Home ")])])],1):t._e(),"Home"!=t.page?a("li",[a("router-link",{attrs:{to:"/favorites"}},[a("span",[t._v(" Favorites ")])])],1):t._e()])])])},s=[]}});
//# sourceMappingURL=app.65942245.js.map