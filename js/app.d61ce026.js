(function(e){function t(t){for(var a,i,o=t[0],u=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/COVID-Support-For-CH/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),s=r.n(a);s.a},"0af1":function(e,t,r){},"1b3a":function(e,t,r){},"1fa5":function(e,t,r){"use strict";var a=r("661c"),s=r.n(a);s.a},"488f":function(e,t,r){"use strict";var a=r("ecb8"),s=r.n(a);s.a},"49f8":function(e,t,r){var a={"./en.json":"edd4","./es.json":"a306","./fr.json":"f693","./ko.json":"dd11"};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="49f8"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("app-header",{attrs:{language:e.language.name},on:{"language-selected":e.changeLanguage}}),e.entries?r("div",{staticClass:"d-flex",class:{toggled:e.isFilterOpen},attrs:{id:"wrapper"}},[r("search-filter",{attrs:{isFilterOpen:e.isFilterOpen,need:e.need,day:e.day,filteredMarkers:e.filteredMarkers},on:{toggle:function(t){e.isFilterOpen=!e.isFilterOpen},"need-selected":function(t){return e.need=t},"day-selected":function(t){return e.day=t}}}),r("div",{attrs:{id:"page-content-wrapper"}},[r("highlights",{class:{toggled:e.isFilterOpen},attrs:{need:e.need,filteredMarkers:e.filteredMarkers}}),r("resource-map",{attrs:{filteredMarkers:e.filteredMarkers}})],1)],1):e._e()],1)},n=[],i=(r("ac6a"),r("96cf"),r("3b8d")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",id:"topnav"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v(" "+e._s(e.$t("title"))+" ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("b-icon",{attrs:{icon:"gear-fill","aria-hidden":"true"}}),r("span",{staticClass:"language",domProps:{innerHTML:e._s(e.language)}})]},proxy:!0}])},e._l(e.languages,(function(t){return r("b-dropdown-item",{key:t.iso,attrs:{href:"#"}},[r("div",{domProps:{innerHTML:e._s(t.name)},on:{click:function(r){return e.$emit("language-selected",t)}}})])})),1)],1)],1)],1)},u=[],l={name:"app-header",props:{language:String},data:function(){return{languages:[{name:"English",iso:"en"},{name:"Espa&#241;ol",iso:"es"},{name:"Fran&#231;ais",iso:"fr"},{name:"한국어",iso:"ko"}]}}},c=l,d=(r("8baf"),r("2877")),p=Object(d["a"])(c,o,u,!1,null,null,null),f=p.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-light border-right",attrs:{id:"search-filter-wrapper"}},[r("div",{staticClass:"tab bg-light border-right border-top border-bottom",on:{click:function(t){return e.$emit("toggle")}}},[r("i",{staticClass:"fas fa-caret-down"})]),r("div",{staticClass:"list-group list-group-flush"},[r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[e._v(" "+e._s(e.$t("sidebar.what-do-you-need"))+" "),r("b-form-select",{attrs:{value:e.need,options:e.needOptions},on:{change:function(t){return e.$emit("need-selected",t)}}})],1),r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[e._v(" "+e._s(e.$t("sidebar.when-do-you-need-it"))+" "),r("b-form-select",{attrs:{value:e.day,options:e.dayOptions},on:{change:function(t){return e.$emit("day-selected",t)}}})],1)]),r("results-list",{attrs:{filteredMarkers:e.filteredMarkers}})],1)},g=[],m=(r("c5f6"),["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]),v="https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json",y='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resultWrapper"},[r("div",{staticClass:"resultList"},e._l(e.filteredMarkers,(function(t,a){return r("div",{key:a,staticClass:"resultItem"},[r("span",{staticClass:"resultTitle"},[r("a",{attrs:{href:t.gsx$weblink.$t}},[e._v(e._s(t.gsx$providername.$t))])]),r("span",{staticClass:"resultAddress"},[t.gsx$cuisine.$t?r("span",[e._v(e._s(t.gsx$cuisine.$t)+" - ")]):e._e(),t.gsx$provideraddloc.$t?[e._v(e._s(t.gsx$provideraddloc.$t)+", ")]:e._e(),e._v(e._s(t.gsx$address.$t)+", "+e._s(t.gsx$city.$t)+" ")],2)])})),0)])},x=[],$={name:"ResultsList",data:function(){return{selected:!1}},props:{filteredMarkers:Array}},_=$,k=(r("fe1f"),Object(d["a"])(_,b,x,!1,null,null,null)),O=k.exports,w={name:"search-filter",components:{ResultsList:O},props:{isFilterOpen:Boolean,need:String,day:Number,filteredMarkers:Array},computed:{needOptions:function(){return[{value:"restaurant",text:this.$tc("category.restaurant",2)},{value:"meal",text:this.$tc("category.meal",2)},{value:"grocery",text:this.$tc("category.grocery",2)},{value:"pharmacy",text:this.$tc("category.pharmacy",1)},{value:"pet",text:this.$tc("category.petsupplies",2)}]},dayOptions:function(){var e=this;return m.map((function(t,r){return{value:r,text:e.$t("dayofweek.".concat(t))}}))}}},B=w,M=(r("1fa5"),Object(d["a"])(B,h,g,!1,null,"2418e25b",null)),V=M.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row highlights"},[r("div",{staticClass:"col-6 col-md-3 order-md-1"},[r("value-box",{staticClass:"bg-blue",attrs:{icon:e.valueBoxes[0].icon,title:e.valueBoxes[0].title,value:e.valueBoxes[0].value}})],1),r("div",{staticClass:"col-6 col-md-3 order-md-2"},[r("value-box",{staticClass:"bg-green",attrs:{icon:e.valueBoxes[1].icon,title:e.valueBoxes[1].title,value:e.valueBoxes[1].value}})],1),r("div",{staticClass:"col-6 col-md-3 order-md-4"},[r("value-box",{staticClass:"bg-green",attrs:{icon:e.valueBoxes[2].icon,title:e.valueBoxes[2].title,value:e.valueBoxes[2].value}})],1),r("div",{staticClass:"col-6 col-md-3 order-md-3"},[r("value-box",{staticClass:"bg-blue",attrs:{icon:e.valueBoxes[3].icon,title:e.valueBoxes[3].title,value:e.valueBoxes[3].value}})],1)])},S=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"valuebox",class:{selected:e.selected}},[r("div",{staticClass:"number"},[e._v(e._s(e.value))]),r("div",{staticClass:"title"},[e._v(e._s(e.title))]),r("i",{staticClass:"fas",class:e.icon})])},L=[],D={name:"ValueBox",data:function(){return{selected:!1}},props:{title:{type:String},value:{type:Number},icon:{type:String}}},j=D,F=(r("a19b"),Object(d["a"])(j,P,L,!1,null,"7ddb83bc",null)),R=F.exports,E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(e||[]).reduce((function(e,r){return r.gsx$accesstype.$t.indexOf(t)>-1?e+1:e}),0)},T=function(e,t){return(e||[]).reduce((function(e,r){return"1"==r["gsx$"+t].$t?e+1:e}),0)},z={name:"Highlights",components:{ValueBox:R},props:{need:String,filteredMarkers:Array},methods:{buildBoxValue:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s="label.".concat(e);return{icon:t,color:"",value:r,title:a?this.$tc(s,r):this.$t(s)}}},computed:{countPickup:function(){return E(this.filteredMarkers,"pick-up")},countDriveUp:function(){return E(this.filteredMarkers,"drive-up")},countSenior:function(){return E(this.filteredMarkers,"senior shopping hours")},countFreeStudentMeal:function(){return T(this.filteredMarkers,"mealstudent")},countPublicMeal:function(){return T(this.filteredMarkers,"mealpublic")},countFamilyMeal:function(){return T(this.filteredMarkers,"mealfamily")},countOrderOnline:function(){return T(this.filteredMarkers,"orderonline")},countDiscountMedical:function(){return T(this.filteredMarkers,"discountmedical")},countDelivery:function(){return T(this.filteredMarkers,"delivery")},countProduce:function(){return T(this.filteredMarkers,"freeproduce")},countGroceries:function(){return T(this.filteredMarkers,"freegroceries")},orderOnlineValueBox:function(){return this.buildBoxValue("orderonline","fa-mouse",this.countOrderOnline)},curbsidePickupValueBox:function(){return this.buildBoxValue("curbsidepickup","fa-mouse",this.countPickup+this.countDriveUp,!0)},deliveryValueBox:function(){return this.buildBoxValue("delivery","fa-shipping-fast",this.countDelivery)},seniorShoppingValueBox:function(){return this.buildBoxValue("seniorshopping","fa-history",this.countSenior)},medicalDiscountsValueBox:function(){return this.buildBoxValue("discounts","fa-user-md",this.countDiscountMedical,!0)},openToPublicValueBox:function(){return this.buildBoxValue("opentopublic","fa-users",this.countPublicMeal,!0)},freeStudentMealsValueBox:function(){return this.buildBoxValue("mealsforstudents","fa-school",this.countFreeStudentMeal,!0)},freeProduceValueBox:function(){return this.buildBoxValue("freeproduce","fa-apple-alt",this.countProduce,!0)},freeGroceryValueBox:function(){return this.buildBoxValue("freegrocery","fa-shopping-basket",this.countGroceries,!0)},valueBoxes:function(){switch(this.need){case"grocery":return[this.orderOnlineValueBox,this.curbsidePickupValueBox,this.deliveryValueBox,this.seniorShoppingValueBox];case"restaurant":return[this.orderOnlineValueBox,this.curbsidePickupValueBox,this.medicalDiscountsValueBox,this.deliveryValueBox];case"family":return[this.orderOnlineValueBox,this.curbsidePickupValueBox,this.deliveryValueBox,this.medicalDiscountsValueBox];case"meal":return[this.openToPublicValueBox,this.freeStudentMealsValueBox,this.freeProduceValueBox,this.freeGroceryValueBox];case"pharmacy":return[this.orderOnlineValueBox,this.curbsidePickupValueBox,this.seniorShoppingValueBox,this.deliveryValueBox];case"pet":return[this.orderOnlineValueBox,this.curbsidePickupValueBox,this.medicalDiscountsValueBox,this.deliveryValueBox]}}}},N=z,I=(r("ce42"),Object(d["a"])(N,C,S,!1,null,null,null)),A=I.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row px-0",attrs:{fluid:""}},[r("div",{staticClass:"map"},[e.showMap?r("l-map",{staticStyle:{height:"100%",width:"100%"},attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{"update:center":function(t){return e.center=t},"update:zoom":function(t){return e.zoom=t}}},[r("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),e._l(e.filteredMarkers,(function(t,a){return r("l-marker",{key:a,attrs:{"lat-lng":e.latLng(t.gsx$lat.$t,t.gsx$lon.$t)}},[r("l-popup",[r("div",[r("a",{attrs:{href:t.gsx$weblink.$t}},[e._v(e._s(t.gsx$providername.$t))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showParagraph,expression:"showParagraph"}]},[r("b",[e._v(e._s(e.$t("label.address"))+":")]),t.gsx$provideraddloc.$t?r("span",[e._v(e._s(t.gsx$provideraddloc.$t)+", ")]):e._e(),e._v(e._s(t.gsx$address.$t)+", "+e._s(t.gsx$city.$t)+", "+e._s(t.gsx$state.$t)+" "+e._s(t.gsx$zip.$t)),r("br"),t.gsx$contact.$t?r("span",[r("b",[e._v(e._s(e.$t("label.phone"))+":")]),e._v(" "+e._s(t.gsx$contact.$t)),r("br")]):e._e(),t.gsx$instructions.$t||t.gsx$offers.$t?r("span",[r("hr")]):e._e(),t.gsx$instructions.$t?r("span",[r("b",[e._v(e._s(e.$t("label.instructions"))+":")]),r("br"),e._v(e._s(t.gsx$instructions.$t))]):e._e(),t.gsx$instructions.$t&&t.gsx$offers.$t?r("span",[r("br")]):e._e(),t.gsx$offers.$t?r("span",[r("b",[e._v(e._s(e.$t("label.offers"))+":")]),r("br"),e._v(e._s(t.gsx$offers.$t))]):e._e()])])])],1)}))],2):e._e()],1)])},H=[],J=r("2699"),U=r("a40a"),W=r("4e2b"),Q=r("f60f"),Z=r("31dc"),q=r("e11e");delete q["Icon"].Default.prototype._getIconUrl,q["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")});var K={name:"ResourceMap",props:{filteredMarkers:Array},mounted:function(){this.editZoomControl()},methods:{editZoomControl:function(){var e=this.$el.querySelector(".leaflet-top.leaflet-left");e.className="leaflet-bottom leaflet-right"},latLng:q["latLng"]},data:function(){return{center:Object(q["latLng"])(35.91371,-79.057919),zoom:13,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",showParagraph:!0,mapOptions:{zoomSnap:.5},showMap:!0,attribution:y}},components:{LMap:J["a"],LTileLayer:U["a"],LMarker:W["a"],LPopup:Q["a"],LTooltip:Z["a"]}},X=K,Y=(r("488f"),Object(d["a"])(X,G,H,!1,null,"7fa777fa",null)),ee=Y.exports,te={name:"app",props:{msg:String},watch:{currentPage:"fetchData"},created:function(){this.fetchData()},components:{AppHeader:f,Highlights:A,SearchFilter:V,ResourceMap:ee},data:function(){return{entries:null,need:"restaurant",day:(new Date).getDay(),isFilterOpen:!0,language:{name:"English",iso:"en"}}},methods:{changeLanguage:function(e){this.language=e,this.$root.updateLang(e.iso)},fetchData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,this.entries=r.feed.entry;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{filteredMarkers:function(){var e=this;if(null==this.entries)return null;var t=this.entries.filter((function(t){return t.gsx$resource.$t===e.need&&"active"===t.gsx$status.$t})),r=["sun","mon","tues","wed","thr","fri","sat"].map((function(e){return"gsx$".concat(e)})),a=r[this.day];return t.filter((function(e){return"0"!==e[a].$t}))}}},re=te,ae=(r("034f"),Object(d["a"])(re,s,n,!1,null,null,null)),se=ae.exports,ne=(r("4917"),r("a925"));function ie(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var a=r.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var s=a[1];t[s]=e(r)}})),t}a["default"].use(ne["a"]);var oe=new ne["a"]({locale:"en",fallbackLocale:"en",messages:ie()}),ue=r("5f5b"),le=r("b1e0");r("f9e3"),r("2dd8"),r("6cc5");a["default"].use(ue["a"]),a["default"].use(le["a"]),a["default"].config.productionTip=!0,new a["default"]({i18n:oe,render:function(e){return e(se)},methods:{updateLang:function(e){oe.locale=e}}}).$mount("#app")},"661c":function(e,t,r){},6860:function(e,t,r){},"85ec":function(e,t,r){},"8baf":function(e,t,r){"use strict";var a=r("6860"),s=r.n(a);s.a},a19b:function(e,t,r){"use strict";var a=r("0af1"),s=r.n(a);s.a},a306:function(e){e.exports=JSON.parse('{"category":{"childcare":"Cuidado de los niños","grocery":"Comestibles","meal":"Comida gratis | Comidas gratis","petsupplies":"Suministros de mascotas","pharmacy":"Farmacia | Farmacias","restaurant":"Restaurante | Restaurantes","school":"Comida escolar | Comidas escolares"},"dayofweek":{"friday":"Viernes","monday":"Lunes","saturday":"Sábado","sunday":"Domingo","thursday":"Jueves","tuesday":"Martes","wednesday":"Miércoles"},"label":{"address":"Dirección","curbsidepickup":"Negocio con recogida en la acera|Negocios con recogida en la acera","delivery":"Entrega","discounts":"Descuento para trabajadores médicos|Descuentos para trabajadores médicos","freegrocery":"Tienda de comestibles gratis|Tiendas de comestibles gratis","freemeals":"Lugar de comidas gratis|Lugares de comidas gratis","freeproduce":"Lugar de producción gratuito|Lugares de producción gratuito","instructions":"Instrucciones","mealsforstudents":"Comidas para estudiantes","offers":"Ofertas","opentopublic":"Comidas abiertas al público","orderonline":"Ordene y pague en línea","phone":"Teléfono","seniorshopping":"Horario comercial senior"},"sidebar":{"what-do-you-need":"¿Que necesitas?","when-do-you-need-it":"Cuando lo necesitas?"},"title":"COVID-19 Recursos de la comunidad"}')},ce42:function(e,t,r){"use strict";var a=r("1b3a"),s=r.n(a);s.a},dd11:function(e){e.exports=JSON.parse('{"category":{"childcare":"육아","grocery":"식료품 | 식료품 점","meal":"무료 식사 | 무료 식사","petsupplies":"애완 용품","pharmacy":"약국 | 약국","restaurant":"식당 | 레스토랑","school":"학교 급식 | 학교 급식"},"dayofweek":{"friday":"금요일","monday":"월요일","saturday":"토요일","sunday":"일요일","thursday":"목요일","tuesday":"화요일","wednesday":"수요일"},"label":{"address":"주소","curbsidepickup":"보도 픽업 레스토랑","delivery":"배달","discounts":"의료인 할인 장소","freegrocery":"무료 식료품 점","freemeals":"무료 식사 장소","freeproduce":"무료 농산물 위치","instructions":"방법","mealsforstudents":"학생들을위한 식사","offers":"서비스","opentopublic":"공개 식사","orderonline":"온라인 주문 및 결제","phone":"전화","seniorshopping":"노약자 쇼핑 시간"},"sidebar":{"what-do-you-need":"무엇이 필요합니까?","when-do-you-need-it":"언제 필요합니까?"},"title":"COVID-19 커뮤니티 지원 자료"}')},ecb8:function(e,t,r){},edd4:function(e){e.exports=JSON.parse('{"category":{"childcare":"Child care","grocery":"Grocery|Groceries","meal":"Free meal|Free meals","petsupplies":"Pet Supplies","pharmacy":"Pharmacy|Pharmacies","restaurant":"Restaurant|Restaurants","school":"School meal|School meals"},"dayofweek":{"friday":"Friday","monday":"Monday","saturday":"Saturday","sunday":"Sunday","thursday":"Thursday","tuesday":"Tuesday","wednesday":"Wednesday"},"label":{"address":"Address","curbsidepickup":"Curbside pick-up","delivery":"Delivery","discounts":"Medical worker discount|Medical worker discounts","freegrocery":"Free grocery location|Free grocery locations","freemeals":"Free meal location|Free meal locations","freeproduce":"Free produce location|Free produce locations","instructions":"Instructions","mealsforstudents":"Meals for students","offers":"Offers","opentopublic":"Meals open to public","orderonline":"Order & pay online","phone":"Phone","seniorshopping":"Senior shopping hours"},"sidebar":{"what-do-you-need":"What do you need?","when-do-you-need-it":"When do you need it?"},"title":"COVID-19 Community Resources"}')},f4ac:function(e,t,r){},f693:function(e){e.exports=JSON.parse('{"category":{"childcare":"Garde d\'enfants","grocery":"Épicerie | Épicerie","meal":"Repas gratuit | Repas gratuits","petsupplies":"Fournitures pour animaux","pharmacy":"Pharmacie | Pharmacies","restaurant":"Restaurant | Restaurants","school":"Repas scolaire | Repas scolaires"},"dayofweek":{"friday":"Vendredi","monday":"Lundi","saturday":"Samedi","sunday":"Dimanche","thursday":"Jeudi","tuesday":"Mardi","wednesday":"Mercredi"},"label":{"address":"Adresse","curbsidepickup":"Enterprise avec ramassage en bordure de rue|Enterprises avec ramassage en bordure de rue","delivery":"Livraison","discounts":"Réduction pour les travailleurs médicaux|Réductions pour les travailleurs médicaux","freegrocery":"Emplacement d\'épicerie gratuits|Emplacements d\'épicerie gratuits","freemeals":"Lieu de repas gratuits|Lieux de repas gratuits","freeproduce":"Lieu de production gratuit|Lieux de production gratuit","instructions":"Instructions","mealsforstudents":"Repas pour les étudiants","offers":"Des offres","opentopublic":"Repas ouverts au public","orderonline":"Commandez et payez en ligne","phone":"Téléphone","seniorshopping":"Heures de magasinage pour les seniors"},"sidebar":{"what-do-you-need":"De quoi avez-vous besoin?","when-do-you-need-it":"Quand en avez-vous besoin?"},"title":"Ressources communautaires COVID-19"}')},fe1f:function(e,t,r){"use strict";var a=r("f4ac"),s=r.n(a);s.a}});
//# sourceMappingURL=app.d61ce026.js.map