(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{PXP5:function(t,e,i){"use strict";i.r(e),i.d(e,"TaskModule",function(){return j});var a=i("ofXK"),n=i("tyNb"),c=i("mrSG"),s=i("90At"),o=i("fXoL"),r=i("qc5V"),b=i("2Vo4"),p=i("vkgz");let l=(()=>{class t{constructor(t){this.api=t,this.dataSource=new b.a(null),this.data$=this.dataSource.asObservable(),this.paginationSource=new b.a(null),this.pagination$=this.paginationSource.asObservable()}fetch(t,e=1,i=50){let a;switch(t){case"share_link":a=`/articles?page=${e}&per_page=${i}`;break;case"join_group":a=`/fbgroups?page=${e}`}return this.api.get(a).pipe(Object(p.a)(t=>{this.dataSource.next(t.data);const e=Object.assign(Object.assign({},t.meta.pagination),{page:t.meta.pagination.current_page,pageSize:t.meta.pagination.per_page});this.paginationSource.next(e)}))}shareArticle(t){return this.api.get(`/articles?page=${t}`).pipe(Object(p.a)(t=>{this.dataSource.next(t.data),this.paginationSource.next(t.meta.pagination)}))}joinGroup(t){return this.api.get(`/fbgroups?page=${t}`).pipe(Object(p.a)(t=>{this.dataSource.next(t.data),this.paginationSource.next(t.meta.pagination)}))}}return t.\u0275fac=function(e){return new(e||t)(o.fc(r.a))},t.\u0275prov=o.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=i("tmEo"),u=i("tH/4"),g=i("iQdX"),h=i("gBr1"),f=i("sYmb");const m=function(t){return{active:t}};function v(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",9),o.Yb(1,"a",10),o.ic("click",function(){o.Cc(t);const i=e.$implicit;return o.mc().onSelectType(i.name)}),o.Yb(2,"span",11),o.Nc(3),o.nc(4,"translate"),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=e.$implicit,i=o.mc();o.Fb(1),o.sc("ngClass",o.wc(4,m,t.name===i.type)),o.Fb(2),o.Pc(" ",o.oc(4,2,"RESPONSE."+t.name)," ")}}function y(t,e){1&t&&(o.Wb(0),o.Nc(1,"Open"),o.Vb())}function X(t,e){1&t&&(o.Wb(0),o.Nc(1,"Shared"),o.Vb())}function Y(t,e){1&t&&(o.Wb(0),o.Nc(1,"Closed"),o.Vb())}function S(t,e){if(1&t){const t=o.Zb();o.Yb(0,"tr"),o.Yb(1,"td"),o.Yb(2,"a",23),o.Nc(3),o.Xb(),o.Xb(),o.Yb(4,"td",20),o.Nc(5),o.Xb(),o.Yb(6,"td",20),o.Nc(7),o.Xb(),o.Yb(8,"td",20),o.Yb(9,"span",24),o.Lc(10,y,2,0,"ng-container",25),o.Lc(11,X,2,0,"ng-container",25),o.Lc(12,Y,2,0,"ng-container",25),o.Xb(),o.Xb(),o.Yb(13,"td"),o.Nc(14),o.nc(15,"date"),o.Xb(),o.Yb(16,"td"),o.Yb(17,"a",26),o.ic("click",function(){o.Cc(t);const i=e.$implicit;return o.mc(2).saveAction(i)}),o.Nc(18),o.nc(19,"translate"),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=e.$implicit,i=o.mc().ngIf;o.Fb(2),o.tc("href",t.link,o.Ec),o.Fb(1),o.Pc(" ",t.name," "),o.Fb(2),o.Oc(t.receive||0),o.Fb(2),o.Qc("",t.remain,"/",t.budget||0,""),o.Fb(2),o.Kb("label-light-primary",0===t.status)("label-light-success",1===t.status)("label-mute",2===t.status),o.Fb(1),o.sc("ngIf",0===t.status),o.Fb(1),o.sc("ngIf",1===t.status),o.Fb(1),o.sc("ngIf",2===t.status),o.Fb(2),o.Oc(o.pc(15,17,t.created_at,"dd/MM/yyyy")),o.Fb(3),o.sc("url",t.link+"?utm_source=FanLike&utm_medium="+i.hash_id),o.Fb(1),o.Oc(o.oc(19,20,"RESPONSE."+t.action_type))}}function w(t,e){if(1&t){const t=o.Zb();o.Yb(0,"app-paginator",27),o.ic("paginate",function(e){return o.Cc(t),o.mc(2).paginate(e)}),o.Xb()}if(2&t){const t=e.ngIf,i=o.mc(2);o.sc("paginator",t)("isLoading",i.isLoading)}}function k(t,e){if(1&t&&(o.Yb(0,"div",12),o.Yb(1,"div",13),o.Yb(2,"div",14),o.Yb(3,"div",15),o.Yb(4,"h3",16),o.Nc(5,"Tasks list"),o.Xb(),o.Xb(),o.Xb(),o.Yb(6,"div",17),o.Yb(7,"div",18),o.Yb(8,"table",19),o.Yb(9,"thead"),o.Yb(10,"th"),o.Nc(11," Title "),o.Xb(),o.Yb(12,"th",20),o.Nc(13," Receive "),o.Xb(),o.Yb(14,"th",20),o.Nc(15," Remaining "),o.Xb(),o.Yb(16,"th",20),o.Nc(17," Status "),o.Xb(),o.Yb(18,"th"),o.Nc(19," Date "),o.Xb(),o.Yb(20,"th"),o.Nc(21," Actions "),o.Xb(),o.Xb(),o.Yb(22,"tbody"),o.Lc(23,S,20,22,"tr",21),o.nc(24,"async"),o.Xb(),o.Xb(),o.Xb(),o.Lc(25,w,1,2,"app-paginator",22),o.nc(26,"async"),o.Xb(),o.Xb(),o.Xb()),2&t){const t=o.mc();o.Fb(12),o.Ic("width",100,"px"),o.Fb(2),o.Ic("width",100,"px"),o.Fb(2),o.Ic("width",100,"px"),o.Fb(2),o.Ic("width",100,"px"),o.Fb(2),o.Ic("width",160,"px"),o.Fb(3),o.sc("ngForOf",o.oc(24,12,t.data$)),o.Fb(2),o.sc("ngIf",o.oc(26,14,t.pagination$))}}const F=[{path:"",component:(()=>{class t{constructor(t,e,i){this.apiService=t,this.taskService=e,this.auth=i,this.type="share_link",this.currentPage=1,this.pageSize=s.a.table.rows,this.typeData=[{name:"share_link"},{name:"join_group"},{name:"like_post"},{name:"comment_post"}],this.data$=this.taskService.data$,this.pagination$=this.taskService.pagination$,this.user$=this.auth.currentUserSubject.asObservable()}ngOnInit(){this.taskService.fetch(this.type,this.currentPage,this.pageSize).subscribe()}ngAfterViewInit(){}onSelectType(t){return Object(c.a)(this,void 0,void 0,function*(){this.type!==t&&(this.type=t,this.currentPage=1,yield this.getData())})}getData(){return Object(c.a)(this,void 0,void 0,function*(){try{yield this.taskService.fetch(this.type,this.currentPage,this.pageSize).toPromise()}catch(t){}})}saveAction(t){return Object(c.a)(this,void 0,void 0,function*(){try{const e={item_type:t.type,item_id:t.hash_id,type:t.action_type},i=yield this.apiService.post("/histories",e).toPromise();console.log(i)}catch(e){console.log(e)}})}paginate(t){return Object(c.a)(this,void 0,void 0,function*(){console.log(t),this.currentPage=t.page,this.pageSize=t.pageSize,yield this.getData()})}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(r.a),o.Sb(l),o.Sb(d.a))},t.\u0275cmp=o.Mb({type:t,selectors:[["app-task"]],decls:12,vars:4,consts:[[1,"d-flex","flex-row"],[1,"flex-row-auto","offcanvas-mobile","w-200px","w-xxl-275px"],[1,"card","card-custom","card-stretch"],[1,"card-body","px-5"],[1,"navi-section","mb-2","font-size-h6","font-weight-bold","pb-0","d-flex"],[1,"flaticon2-console","ml-auto"],[1,"navi","navi-hover","navi-active","navi-link-rounded","navi-bold","navi-icon-center","navi-light-icon"],["class","navi-item my-2",4,"ngFor","ngForOf"],["class","flex-row-fluid ml-lg-8",4,"ngIf"],[1,"navi-item","my-2"],["href","#",1,"navi-link",3,"ngClass","click"],[1,"navi-text","font-weight-bolder","font-size-lg"],[1,"flex-row-fluid","ml-lg-8"],[1,"card","card-custom","gutter-b","mb-0"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],[1,"table-responsive","angular-bootstrap-table"],[1,"table","table-head-custom","table-vertical-center","overflow-hidden"],[1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-between align-items-center flex-wrap",3,"paginator","isLoading","paginate",4,"ngIf"],["target","_blank",3,"href"],[1,"label","label-lg","label-inline"],[4,"ngIf"],["shareButton","facebook",1,"btn","btn-primary",3,"url","click"],[1,"d-flex","justify-content-between","align-items-center","flex-wrap",3,"paginator","isLoading","paginate"]],template:function(t,e){1&t&&(o.Yb(0,"div",0),o.Yb(1,"div",1),o.Yb(2,"div",2),o.Yb(3,"div",3),o.Yb(4,"div",4),o.Yb(5,"span"),o.Nc(6,"Filter"),o.Xb(),o.Tb(7,"i",5),o.Xb(),o.Yb(8,"div",6),o.Lc(9,v,5,6,"div",7),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Lc(10,k,27,16,"div",8),o.nc(11,"async"),o.Xb()),2&t&&(o.Fb(9),o.sc("ngForOf",e.typeData),o.Fb(1),o.sc("ngIf",o.oc(11,2,e.user$)))},directives:[a.m,a.n,u.a,a.l,g.a,h.a],pipes:[a.b,f.c,a.e],styles:[""]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({factory:function(e){return new(e||t)},imports:[[n.k.forChild(F)],n.k]}),t})();var O=i("Br0f"),N=i("3Pt+"),_=i("e8Ap"),$=i("PCNd"),I=i("tM0M");let j=(()=>{class t{}return t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({factory:function(e){return new(e||t)},imports:[[a.c,x,O.a,N.t,_.b,g.b,$.a,I.a]]}),t})()}}]);