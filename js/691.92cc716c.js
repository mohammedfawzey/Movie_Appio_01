"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[691],{8691:function(t,e,i){i.r(e),i.d(e,{default:function(){return T}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",{staticClass:"pt-4",staticStyle:{"background-color":"#111722"}},[i("section",{attrs:{id:"Singlemovie"}},[i("section",{staticClass:"pb-12",attrs:{id:"Movie"}},[i("v-container",[i("v-row",[i("v-col",[i("div",{staticClass:"main_heading mb-12"},[i("h1",[i("span",[t._v("Search Result")])]),i("span",{staticClass:"special_design"},[i("i"),i("i"),i("i")])])])],1),i("v-divider",{staticStyle:{"border-color":"#8080802e"}}),t.$store.state.movie.isImageLoaded?i("v-row",t._l(t.S_searchResult,(function(e,a){return i("v-col",{directives:[{name:"show",rawName:"v-show",value:null!==e.poster_path,expression:"movie.poster_path !== null"}],key:a,staticClass:"my-5",attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[i("v-hover",{attrs:{"open-delay":"50"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.hover;return[null!==e.poster_path?i("v-card",{staticClass:"mx-auto",staticStyle:{cursor:"pointer"},attrs:{"max-width":"200","max-height":"250"},on:{click:function(i){t.saveToLocal(e),t.redirectTo(e.id)}}},[i("v-img",{attrs:{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,"min-width":t.C_img.width,"min-height":t.C_img.height},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-card",{attrs:{color:"#111722"}},[i("v-skeleton-loader",t._b({attrs:{type:"image, list-item-three-line","min-height":"300",loading:!0,height:"300"}},"v-skeleton-loader",t.attrs,!1))],1)]},proxy:!0}],null,!0)},[i("div",{staticClass:"d-flex flex-column justify-space-between",staticStyle:{height:"100%"}},[i("v-card-text",{staticClass:"py-2 px-1 d-flex justify-space-between"},[i("h4",{staticClass:"caption rating_box white--text font-weight-light px-4 py-0"},[t._v(" WEB-DL ")]),i("div",{staticClass:"rating rating_box white--text font-weight-light px-2 py-0"},[i("v-icon",{attrs:{left:"",small:"",color:"#ffab31"}},[t._v("mdi-star")]),i("span",{staticClass:"caption"},[t._v(t._s(e.vote_average))])],1)]),i("v-slide-y-reverse-transition",[s?i("v-card",{staticClass:"background transparent"},[i("v-card-text",{staticClass:"text-center"},[i("v-btn",{staticStyle:{cursor:"pointer"},attrs:{small:"",color:"#ffab31",dark:""},on:{click:function(i){t.saveToLocal(e),t.redirectTo(e.id)}}},[i("v-icon",[t._v("mdi-play-outline")]),i("span",{staticClass:"text-capitalize d-block"},[t._v("watch")])],1)],1),i("v-divider",{staticClass:"pb-1 pt-3 divider_animation",staticStyle:{"border-color":"rgb(255 255 255 / 25%)"}}),i("v-card-subtitle",{staticClass:"caption white--text text-center pt-0",staticStyle:{cursor:"pointer"},attrs:{to:{name:"movieproduct",params:{item:e.id}}},on:{click:function(i){return t.saveToLocal(e)}}},[t._v(t._s(e.title))]),i("v-card-text",{staticClass:"d-flex align-center justify-center px-2"},[i("div",{staticClass:"parent_chip",staticStyle:{display:"flex",gap:"2px","flex-wrap":"wrap"}},t._l(e.genre_ids,(function(e,a){return i("div",{key:a},t._l(t.chips,(function(s,r){return i("v-chip",{directives:[{name:"show",rawName:"v-show",value:s.id==e&&a<2,expression:"item.id == mov && ind < 2"}],key:r,class:[{"white--text":16==s.id},0==r?"hidden-sm-and-down":""],attrs:{small:"",color:28==s.id?"error":35==s.id?"yellow":16==s.id?"indigo":""}},[t._v(" "+t._s(s.name)+" ")])})),1)})),0)])],1):t._e()],1)],1)])],1):t._e()]}}],null,!0)})],1)})),1):i("div",{staticStyle:{width:"100px",height:"1570px"}})],1)],1),0==t.S_searchResult.length?i("section",{attrs:{id:"Notfound"}},[i("v-container",[i("h1",{staticClass:"text-center text-h2 white--text"},[t._v("Not Found!")])])],1):t._e()])])],1)},s=[],r=i(9669),n=i.n(r),o=i(629),c={props:["id"],data:()=>({loading:!1,firstLoad:!0,isImageLoaded:!0,attrs:{class:"mb-6",elevation:2,boilerplote:!1},chips:[],text:"",apiKey:"194d8a67379374e13e12c99420c19098",searchResult:[]}),mounted(){this.text=this.$route.params.id,this.getGenres()},computed:{newText(){return this.$route.params.id},...(0,o.rn)({S_searchResult:t=>t.movie.S_searchResult,S_skeletonLoading:t=>t.movie.S_skeletonLoading}),C_img(){return this.$vuetify.breakpoint.lgAndUp?{width:173,height:300}:this.$vuetify.breakpoint.mdOnly?{width:200,height:300}:this.$vuetify.breakpoint.mdOnly?{width:175,height:260}:{width:155,height:230}}},methods:{redirectTo(t){this.$router.push({name:"movieproduct",params:{item:t}}).then((()=>{this.$vuetify.goTo(0,{duration:750})})).catch((t=>t))},async fetchSearch(){await n().get(`https://api.themoviedb.org/3/search/movie?query=${this.newText}&api_key=${this.apiKey}`).then((t=>{this.searchResult=t.data.results}))},saveToLocal(t){localStorage.setItem("currentItem",JSON.stringify(t))},skeletonLoading(){this.firstLoad=!0,setTimeout((()=>{this.firstLoad=!1}),2e3)},getGenres(){this.$MAIN_API.genres().then((t=>{this.chips=t.data.genres}))},...(0,o.nv)(["A_changeSkeletonLoading"])},created(){const t=()=>{"complete"==document.readyState&&(document.removeEventListener("readystatechange",t),setTimeout((()=>{this.A_changeSkeletonLoading(!1)}),1500))};document.addEventListener("readystatechange",t),t()}},l=c,d=i(1001),h=i(3453),p=i.n(h),v=i(7524),u=i(680),m=i(3237),g=i(7118),_=i(5424),f=i(2102),y=i(9846),x=i(1418),w=i(5189),b=i(6428),C=i(7047),k=i(7877),S=i(2877),L=i(2177),V=i(5827),Z=(0,d.Z)(l,a,s,!1,null,"56730b6b",null),T=Z.exports;p()(Z,{VApp:v.Z,VBtn:u.Z,VCard:m.Z,VCardSubtitle:g.Qq,VCardText:g.ZB,VChip:_.Z,VCol:f.Z,VContainer:y.Z,VDivider:x.Z,VHover:w.Z,VIcon:b.Z,VImg:C.Z,VMain:k.Z,VRow:S.Z,VSkeletonLoader:L.Z,VSlideYReverseTransition:V.V})}}]);
//# sourceMappingURL=691.92cc716c.js.map