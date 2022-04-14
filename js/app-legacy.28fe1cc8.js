(function(){"use strict";var t={543:function(t,e,n){var i=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Profile"),n("Beer")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",[t._v("Loading...")]):n("div",{staticClass:"profile"},[n("img",{staticClass:"profile-pic",attrs:{src:t.profilePic,alt:"Profile picture"},on:{error:t.imageLoadFailed}}),n("div",{staticClass:"info"},[n("div",[t._v("Name: "+t._s(t.name))]),n("div",[t._v("Age: "+t._s(t.age))]),n("div",[t._v("Position: "+t._s(t.position))])])])},l=[],s=n.p+"img/default-avatar-300x300.18819703.png",u={name:"Profile",data(){return{loading:!0,profilePic:null,name:null,age:null,position:null}},methods:{async fetchUserProfile(){return this.loading=!0,fetch("https://random-data-api.com/api/users/random_user").then((t=>t.json()))},birthdateToAge(t){const e=new Date,n=new Date(t);let i=e.getFullYear()-n.getFullYear();const r=e.getMonth()-n.getMonth();return(r<0||0===r&&e.getDate()<n.getDate())&&i--,i},imageLoadFailed(){console.error("Profile pic failed to load."),this.profilePic=s}},created(){this.fetchUserProfile().then((t=>{this.profilePic=t.avatar,this.name=t.first_name+" "+t.last_name,this.age=this.birthdateToAge(t.date_of_birth),this.position=t.employment.title,this.loading=!1}))}},c=u,d=n(1),f=(0,d.Z)(c,o,l,!1,null,null,null),h=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"beer"},[t.loading?n("div",[t._v("Loading...")]):n("div",{staticClass:"info"},[n("div",[t._v("Alcohol: "+t._s(t.alcohol))]),n("div",[t._v("Brand: "+t._s(t.brand))]),n("div",[t._v("Hop: "+t._s(t.hop))]),n("div",[t._v("Malts: "+t._s(t.malts))]),n("div",[t._v("Name: "+t._s(t.name))]),n("div",[t._v("Style: "+t._s(t.style))]),n("div",[t._v("Yeast: "+t._s(t.yeast))])]),n("button",{staticClass:"roll-beer",on:{click:function(e){return t.displayData()}}},[t._v("Roll")])])},v=[],m={name:"Beer",data(){return{loading:!0,alcohol:null,brand:null,hop:null,malts:null,name:null,style:null,yeast:null}},methods:{async getRandomBeer(){return this.loading=!0,fetch("https://random-data-api.com/api/beer/random_beer").then((t=>t.json()))},displayData(){this.getRandomBeer().then((t=>{this.alcohol=t.alcohol,this.brand=t.brand,this.hop=t.hop,this.malts=t.malts,this.name=t.name,this.style=t.style,this.yeast=t.yeast,this.loading=!1}))}},created(){this.displayData()}},g=m,_=(0,d.Z)(g,p,v,!1,null,null,null),b=_.exports,y={name:"App",components:{Profile:h,Beer:b}},P=y,w=(0,d.Z)(P,r,a,!1,null,null,null),O=w.exports;i.Z.config.productionTip=!1,new i.Z({render:function(t){return t(O)}}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,a){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],a=t[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(l=!1,a<o&&(o=a));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,r,a]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/random-beer/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],l=i[1],s=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(e&&e(i);u<o.length;u++)a=o[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},i=self["webpackChunkrandom_beer"]=self["webpackChunkrandom_beer"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(543)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.28fe1cc8.js.map