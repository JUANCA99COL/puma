(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["discover"],{"0051":function(t,e,a){"use strict";var i=a("e698"),s=a.n(i);s.a},"036e":function(t,e,a){},"0618":function(t,e,a){},"181a":function(t,e,a){t.exports=a.p+"img/gadgets.ef797724.png"},2962:function(t,e,a){t.exports=a.p+"img/phone-watch.eace0861.png"},"5b60":function(t,e,a){},6079:function(t,e,a){t.exports=a.p+"img/play-store.76e56e32.svg"},6723:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"discover"},[a("Slider",{attrs:{slides:t.slides,slidesReady:t.slidesReady}}),t.user?[t.opportunitiesLoaded?a("div",t._l(t.opportunities.sections,(function(e){return a("div",{key:e.id},["card"===e.style?a("div",[t.oppSections[e.id]&&t.oppSections[e.id].length>0?a("WorkoutPreview",{attrs:{title:e.title,workouts:t.oppSections[e.id],contentId:e.id}}):t._e()],1):"circle"===e.style?a("div",[t.oppSections[e.id]&&t.oppSections[e.id].length>0?a("TrainerPreview",{attrs:{trainers:t.oppSections[e.id],title:e.title}}):t._e()],1):t._e()])})),0):a("div",{staticClass:"module module--space-default"},[a("div",{staticClass:"discover__loader"},[a("Loader")],1)])]:[t.opportunities.length>0&&t.opportunitiesLoaded?a("div",[a("div",{staticClass:"container"},[a("h1",[a("translate",[t._v("opportunities")])],1)]),a("div",{staticClass:"spacer spacer--50"}),a("WorkoutList",{attrs:{workouts:t.opportunities}}),a("div",{staticClass:"spacer spacer--50"})],1):t._e(),a("div",{staticClass:"container"},[a("h1",[a("translate",[t._v("workouts")]),a("span",{staticClass:"up-text text text--large"},[t._v("12")])],1)]),a("div",{staticClass:"spacer spacer--50"}),a("WorkoutList",{attrs:{workouts:t.workouts}}),a("div",{staticClass:"spacer spacer--50"}),a("div",{staticClass:"container"},[a("router-link",{attrs:{to:{name:"Login"}}},[a("div",{staticClass:"discover__more"},[a("div",{staticClass:"discover__more__inner"},[a("div",{staticClass:"discover__more__text"},[a("strong",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("login_now")]),t._v(" "),a("translate",[t._v("for_more_workouts")])],1),a("puma-button",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{icon:"profile",type:"light"}},[t._v("login")])],1)])])],1)],t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"discover__banners"},[a("div",{staticClass:"discover__banners__item"},[a("BannerApp")],1),a("div",{staticClass:"discover__banners__item"},[a("BannerAd",{attrs:{type:"light"}})],1)])]),a("div",{staticClass:"spacer spacer--150"}),a("Footer")],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module module--space-default"},[a("div",{staticClass:"container"},[a("div",{attrs:{id:"pixlee_container"}})])])}],n=(a("4160"),a("c975"),a("d81d"),a("159b"),a("96cf"),a("1da1")),r=a("5530"),o=a("365c"),l=a("2f62"),c=a("2a97"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-teaser",class:"banner-teaser--"+t.type},[a("a",{staticClass:"banner-teaser__inner",style:"background-image:url("+t.banner_bg+");",attrs:{href:"https://go.puma.com/svobs-ci",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.outboundLinkClicked("https://go.puma.com/svobs-ci")}}},[a("div",{staticClass:"banner-teaser__content"},[a("div",{staticClass:"banner-teaser__text"},[a("span",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"h3"},[t._v("banner_ad_title")]),a("span",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"text"},[t._v("banner_ad_text")]),a("puma-button",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"banner-teaser__button",attrs:{small:!0,type:t.type}},[a("translate",[t._v("banner_ad_button")])],1)],1)])])])},p=[],u=a("d156"),_=a.n(u),v=a("aa11"),m={name:"BannerAd",data:function(){return{banner_bg:_.a}},props:{type:String},methods:{outboundLinkClicked:function(t){return Object(v["b"])(t,{navigation:{subSection:"home",screenName:"opportunities"},event:{type:"outbound",value:"web_shop_now_ecom"}}),!1}}},g=m,f=(a("da14"),a("2877")),w=Object(f["a"])(g,d,p,!1,null,"54a46d5a",null),b=w.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner-app"},[i("div",{staticClass:"banner-app__inner"},[i("div",{staticClass:"banner-app__background"},[i("v-lazy-image",{attrs:{src:a("be30")}})],1),i("div",{staticClass:"banner-app__content"},[i("div",{staticClass:"banner-app__content__image"},[i("v-lazy-image",{attrs:{src:a("2962")}})],1),i("div",{staticClass:"banner-app__content__text"},[i("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"h3"},[t._v("banner_app_title")]),i("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"text"},[t._v("banner_app_text")]),i("div",{staticClass:"banner-app__buttons"},[i("a",{attrs:{href:"https://apps.apple.com/us/app/pumatrac-training-running/id698298978",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.downloadLinkClick("https://apps.apple.com/us/app/pumatrac-training-running/id698298978","apple")}}},[i("v-lazy-image",{attrs:{src:a("fea6")}})],1),i("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.pumapumatrac",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.downloadLinkClick("https://play.google.com/store/apps/details?id=com.pumapumatrac","android")}}},[i("v-lazy-image",{attrs:{src:a("6079")}})],1)])])])])])},k=[],C={methods:{downloadLinkClick:function(t,e){Object(v["b"])(t,{navigation:{subSection:"home",screenName:"opportunities"},event:{type:"download",value:"web_download_".concat(e)}})}}},x=C,y=(a("78ae"),Object(f["a"])(x,h,k,!1,null,"003bf8af",null)),I=y.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider cloakable",class:{cloaked:!t.slidesReady}},[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions},on:{slideChangeTransitionStart:t.updateNavigationColor}},[t._l(t.slides,(function(e,i){return a("swiper-slide",{key:i,staticClass:"slider__slide swiper-slide-active"},[a("div",{staticClass:"slider__content"},[e.background?a("div",{staticClass:"slider__content__background"},[a("v-lazy-image",{attrs:{src:e.background}})],1):t._e(),e.alternateImage||e.coverImageUrl?a("div",{staticClass:"slider__content__image"},[a("v-lazy-image",{attrs:{src:e.alternateImage?e.alternateImage:e.coverImageUrl}})],1):t._e(),e.image?a("div",{staticClass:"slider__content__display"},[a("v-lazy-image",{attrs:{src:e.image}})],1):t._e(),a("div",{staticClass:"slider__content__text",class:[{transparent:e.background},{padded:!e.coverImageUrl&&!e.image},{"mobile-centered":e.betweenTitle}]},[e.containsRun?a("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"running running-batch running-batch--white",class:{"running--invisible":!e.containsRun}},[t._v("includes_running")]):t._e(),a("span",{staticClass:"hl h1"},[t._v(t._s(e.title))]),e.betweenTitle?a("div",{staticClass:"between text text--bold"},[t._v(t._s(e.betweenTitle))]):t._e(),a("span",{staticClass:"hl h1 h1--normal"},[t._v(t._s(e.subtitle))]),e.intro?a("div",{staticClass:"intro text text--bold"},[t._v(t._s(e.intro))]):t._e(),e.id?a("span",{staticClass:"info text text--large"},[t._v(t._s(Math.round(e.duration/60))+" min — "),a("span",{staticClass:"capitalize"},[t._v(t._s(e.difficulty))]),t._v(" — "+t._s(e.trainer.name))]):a("div",{staticClass:"info text text--large",domProps:{innerHTML:t._s(e.description)}}),e.id?a("puma-button",{staticClass:"slider__content__button",attrs:{link:"/workout/"+e.id,type:"dark"}},[a("translate",[t._v("start_workout")])],1):t._e(),e.appButtons?a("div",{staticClass:"slider__content__buttons"},t._l(e.appButtons,(function(e,i){return a("a",{key:i,attrs:{href:e.link,title:e.title,target:"_blank"},on:{click:function(a){return a.preventDefault(),t.downloadLinkClick(e.link,e.type)}}},[a("v-lazy-image",{attrs:{src:e.image}})],1)})),0):t._e()],1)])])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),a("div",{staticClass:"swiper-navigation swiper-navigation--prev"},[a("Icon",{attrs:{name:"slider-left"}})],1),a("div",{staticClass:"swiper-navigation swiper-navigation--next",class:{black:t.navigationBlack}},[a("Icon",{attrs:{name:"slider-right"}})],1)],1)},P=[],N={name:"Slider",props:{slides:Array,slidesReady:{type:Boolean,default:!0}},data:function(){return{workouts:[],swiperOptions:{speed:400,autoHeight:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-navigation--next",prevEl:".swiper-navigation--prev"}},navigationBlack:!1}},methods:{updateNavigationColor:function(){void 0!==this.slides[this.$refs.mySwiper.$swiper.activeIndex].id?this.navigationBlack=!0:this.navigationBlack=!1},downloadLinkClick:function(t,e){Object(v["b"])(t,{navigation:{subSection:"home",screenName:"opportunities"},event:{type:"download",value:"web_download_".concat(e)}})}}},S=N,L=(a("6afe"),Object(f["a"])(S,O,P,!1,null,null,null)),T=L.exports,W=a("fd2d"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module module--space-default"},[a("div",{staticClass:"trainer-preview"},[a("div",{staticClass:"container container--nooverflow"},[a("div",{staticClass:"trainer-preview__inner"},[a("div",{staticClass:"trainer-preview__top"},[a("h3",{staticClass:"trainer-preview__title h5"},[t._v(t._s(t.title))]),a("router-link",{attrs:{to:{name:"Trainers"}}},[a("div",{staticClass:"trainer-preview__all more-link"},[a("span",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("more")]),a("Icon",{attrs:{name:"arrow-right"}})],1)])],1),a("swiper",{staticClass:"trainer-preview__slider",attrs:{options:t.sliderOptions}},[t._l(t.tenTrainers,(function(t){return a("swiper-slide",{key:t.id,staticClass:"trainer-preview__slide"},[a("router-link",{attrs:{to:{name:"Trainer",params:{id:t.id}}}},[a("TrainerIcon",{attrs:{trainer:t}})],1)],1)})),a("swiper-slide",[a("router-link",{attrs:{to:{name:"Trainers"}}},[a("TrainerIcon",{attrs:{trainer:!1}})],1)],1)],2)],1)])])])},$=[],B=(a("fb6a"),a("8145")),R={components:{TrainerIcon:B["a"]},props:{title:{type:String},trainers:{type:Array}},data:function(){return{sliderOptions:{speed:400,slidesPerView:2,spaceBetween:10,breakpoints:{450:{slidesPerView:3,slidesPerGroup:2,spaceBetween:20},760:{slidesPerView:4,slidesPerGroup:3,spaceBetween:32},980:{slidesPerView:5,slidesPerGroup:4,spaceBetween:32},1180:{slidesPerView:7,slidesPerGroup:6,spaceBetween:32}}}}},computed:{tenTrainers:function(){return this.trainers.slice(0,10)}}},A=R,E=(a("cbc6"),Object(f["a"])(A,j,$,!1,null,"07f47586",null)),z=E.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module module--space-default"},[i("div",{staticClass:"workout-preview"},[i("div",{staticClass:"container container--nooverflow"},[i("div",{staticClass:"workout-preview__inner"},[i("div",{staticClass:"workout-preview__top"},[i("h3",{staticClass:"workout-preview__title h5"},[t._v(t._s(t.title))]),t.contentId?i("router-link",{attrs:{to:{name:"Workouts",params:{filter:t.contentId}}}},[i("div",{staticClass:"more-link"},[i("span",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("more")]),i("Icon",{attrs:{name:"arrow-right"}})],1)]):t._e()],1),i("swiper",{staticClass:"workout-preview__slider",attrs:{options:t.sliderOptions}},[t._l(t.tenWorkouts,(function(t){return i("swiper-slide",{key:t.id,staticClass:"workout-preview__slide"},[i("WorkoutCard",{staticClass:"workout-card--full",attrs:{carddata:t}})],1)})),t.workouts.length>10&&t.contentId?i("swiper-slide",[i("router-link",{attrs:{to:{name:"Workouts",params:{filter:t.contentId}}}},[i("div",{staticClass:"workout-preview__more"},[i("div",{staticClass:"workout-preview__more__inner"},[i("img",{attrs:{alt:"PUMATRAC",src:a("596f")}}),i("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"h5"},[t._v("find_more")]),i("Icon",{attrs:{name:"arrow-right"}})],1)])])],1):t._e()],2)],1)])])])},V=[],D=a("2f8d"),M={components:{WorkoutCard:D["a"]},props:{title:{type:String},workouts:{type:Array,required:!0},contentId:{type:String,default:""}},data:function(){return{sliderOptions:{speed:400,slidesPerView:1,spaceBetween:12,breakpoints:{760:{slidesPerView:2},980:{slidesPerView:3},1440:{slidesPerView:4}}}}},computed:{filteredWorkouts:function(){return this.workouts},tenWorkouts:function(){return this.filteredWorkouts.slice(0,10)}}},G=M,F=(a("d43a"),Object(f["a"])(G,U,V,!1,null,"7237068b",null)),q=F.exports,H={name:"Discover",components:{WorkoutList:c["a"],BannerAd:b,Slider:T,Footer:W["a"],BannerApp:I,TrainerPreview:z,WorkoutPreview:q},data:function(){return{slidesReady:!1,slides:[{background:a("e263"),title:this.$gettext("home_slide_1_title"),subtitle:this.$gettext("home_slide_1_subtitle"),intro:this.$gettext("home_slide_1_intro"),description:this.$gettext("home_slide_1_description")},{background:a("d776"),image:a("181a"),title:this.$gettext("home_slide_2_title"),betweenTitle:this.$gettext("home_slide_2_between_title"),subtitle:this.$gettext("home_slide_2_subtitle"),description:this.$gettext("home_slide_2_description"),appButtons:[{link:"https://apps.apple.com/us/app/pumatrac-training-running/id698298978",image:a("fea6"),title:this.$gettext("download_on_app_store"),type:"apple"},{link:"https://play.google.com/store/apps/details?id=com.pumapumatrac",image:a("6079"),title:this.$gettext("download_on_google_play"),type:"android"}]}],workouts:[],sliderWorkoutIds:["3ff3276f-b565-4c72-83a3-3b7b03dbc2d3"],allWorkouts:[],opportunities:!1,opportunitiesLoaded:!1,oppSections:{},pixleeLoaded:!1}},mounted:function(){var t=this;this.fetchData(),this.getOpportunities(),setTimeout((function(){t.initPixlee()}),10),Object(v["a"])({subSection:"home",screenName:"opportunities"},{type:"home",value:"web_landing_page"})},computed:Object(r["a"])({},Object(l["b"])(["user","staticWorkoutIds"])),methods:{initPixlee:function(){if(this.pixleeLoaded||"undefined"!==typeof Pixlee)Pixlee.addSimpleWidget({widgetId:2635749,setMetaTags:!0,subscribedEvents:["widgetNumPhotos","photoOpened","ctaClicked","widgetLoaded"]}),Pixlee.resizeWidget();else{var t=document.createElement("script");t.setAttribute("src","https://assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js"),document.body.appendChild(t),window.PixleeAsyncInit=function(){Pixlee.init({apiKey:"ySWccITl1I4L66al8tWm"}),Pixlee.addSimpleWidget({widgetId:2635749,setMetaTags:!0,subscribedEvents:["widgetNumPhotos","photoOpened","ctaClicked","widgetLoaded"]}),this.pixleeLoaded=!0}}},fetchData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["i"].all();case 3:i=e.sent,t.allWorkouts=i.data.data,i.data.data.forEach((function(e){t.staticWorkoutIds.indexOf(e.id)>=0&&t.workouts.push(e),t.sliderWorkoutIds.indexOf(e.id)>=0&&(e.alternateImage=a("ef7f"),t.slides.push(e))})),setTimeout((function(){t.slidesReady=!0}),100),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getOpportunities:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.user){e.next=7;break}return e.next=4,o["c"].lists();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,o["c"].global();case 9:e.t0=e.sent;case 10:a=e.t0,i=a.data.data,t.opportunities=i,i&&t.user?(s=i.sections,s.map(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["c"].lists({sectionType:a.id});case 2:i=e.sent,s=i.data.data,t.$set(t.oppSections,a.id,s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.opportunitiesLoaded=!0):t.opportunitiesLoaded=!0,e.next=19;break;case 16:e.prev=16,e.t1=e["catch"](0),console.error(e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()}}},J=H,K=(a("970e"),Object(f["a"])(J,i,s,!1,null,"70da8e36",null));e["default"]=K.exports},6775:function(t,e,a){},"6afe":function(t,e,a){"use strict";var i=a("76fa"),s=a.n(i);s.a},"6f7d":function(t,e,a){"use strict";var i=a("dde5"),s=a.n(i);s.a},"76fa":function(t,e,a){},"78ae":function(t,e,a){"use strict";var i=a("036e"),s=a.n(i);s.a},8145:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"trainer"},[i("div",{staticClass:"trainer__image",class:{"trainer__image--more":!t.trainer}},[t.trainer.coverImageUrl||t.trainer.profileImageUrl?i("v-lazy-image",{attrs:{src:t.trainer.coverImageUrl?t.trainer.coverImageUrl:t.trainer.profileImageUrl}}):t._e(),t.trainer?t._e():i("img",{attrs:{alt:"PUMATRAC",src:a("596f")}}),t.trainer?t._e():i("Icon",{attrs:{name:"arrow-right"}})],1),i("div",{staticClass:"trainer__name text text--large"},[t.trainer.title||t.trainer.name?i("span",[t._v(t._s(t.trainer.title?t.trainer.title:t.trainer.name))]):i("span",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("find_more")])])])},s=[],n={props:{trainer:{type:[Object,Boolean]}}},r=n,o=(a("6f7d"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,"58717aa5",null);e["a"]=l.exports},"970e":function(t,e,a){"use strict";var i=a("0618"),s=a.n(i);s.a},be30:function(t,e,a){t.exports=a.p+"img/bg-download.4ce8712e.jpg"},cbc6:function(t,e,a){"use strict";var i=a("6775"),s=a.n(i);s.a},d156:function(t,e,a){t.exports=a.p+"img/banner.3bb4ef32.jpg"},d43a:function(t,e,a){"use strict";var i=a("5b60"),s=a.n(i);s.a},d776:function(t,e,a){t.exports=a.p+"img/amanda.a00892c2.jpg"},da14:function(t,e,a){"use strict";var i=a("edba"),s=a.n(i);s.a},dde5:function(t,e,a){},e263:function(t,e,a){t.exports=a.p+"img/shane.f42d9871.jpg"},e698:function(t,e,a){},edba:function(t,e,a){},ef7f:function(t,e,a){t.exports=a.p+"img/pamela.6e81ccc7.png"},fd2d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer__inner"},[a("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"footer__item footer__item--copy"},[t._v("footer_copyright")]),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"footer__item",attrs:{href:"https://pumatrac.puma.com/privacy/",target:"_blank"}},[t._v("privacy_policy")]),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"footer__item",attrs:{href:"https://pumatrac.puma.com/terms/",target:"_blank"}},[t._v("terms_and_conditions")]),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"footer__item",attrs:{href:"mailto:pumatrachelp@puma.com",target:"_blank"}},[t._v("contact")]),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"footer__item",attrs:{href:"https://about.puma.com/en/imprint",target:"_blank"}},[t._v("imprint_and_legal_data")]),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"optanon-toggle-display cookie-settings-button footer__item",attrs:{href:"#"}},[t._v("cookie_settings")]),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"footer__item",attrs:{href:"https://pumatrac.puma.com/faq/",target:"_blank"}},[t._v("FAQ")])])])])},s=[],n=(a("0051"),a("2877")),r={},o=Object(n["a"])(r,i,s,!1,null,"1feabd84",null);e["a"]=o.exports},fea6:function(t,e,a){t.exports=a.p+"img/appstore.ef7e0f43.svg"}}]);
//# sourceMappingURL=discover.f945fd59.js.map