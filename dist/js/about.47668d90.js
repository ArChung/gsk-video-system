(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"87a5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("setUp")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"text"},domProps:{value:e.key},on:{input:function(t){t.target.composing||(e.key=t.target.value)}}}),a("input",{attrs:{type:"button",value:"setup"},on:{click:e.setUp}})])},s=[],o=(a("cadf"),a("551c"),a("097d"),a("8aa5")),i=a.n(o),c={name:"SetUp",data:function(){return{key:"0465465645"}},created:function(){if(console.log("create"),console.log("firebase.apps.length: ",i.a.apps.length),!i.a.apps.length){var e={apiKey:"AIzaSyAfSyBKDOds7c5qRLRHHg2Ug3RHLpNj_HE",authDomain:"gsk-319c7.firebaseapp.com",databaseURL:"https://gsk-319c7.firebaseio.com",projectId:"gsk-319c7",storageBucket:"gsk-319c7.appspot.com",messagingSenderId:"735059452550"};i.a.initializeApp(e)}this.database=i.a.database()},methods:{setUp:function(){var e=this.database.ref("gsk-video-system/hospitals/"+this.key);e.set({pw:this.key,hospitalName:"阿忠醫院",videos:{polident_experience:0,polident_instructions_tw:0,polident_instructions_zh:0,sensodyne_discovery:0,sensodyne_technology:0,parodontax:0},mansArr:[]}).then(function(){console.log("set up done")})}}},p=c,r=(a("d3ab"),a("2877")),l=Object(r["a"])(p,n,s,!1,null,"399ac9b4",null);l.options.__file="SetUp.vue";t["default"]=l.exports},b35d:function(e,t,a){},d3ab:function(e,t,a){"use strict";var n=a("b35d"),s=a.n(n);s.a},e8e2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dataPage"},[a("h1",[e._v("data page")])])}],o=(a("cadf"),a("551c"),a("097d"),{name:"dataPage",components:{}}),i=o,c=a("2877"),p=Object(c["a"])(i,n,s,!1,null,null,null);p.options.__file="DataPage.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=about.47668d90.js.map