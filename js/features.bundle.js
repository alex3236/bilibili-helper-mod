(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[110],{89865:(e,t,i)=>{"use strict";i.d(t,{g:()=>v});var n=i(47874),o=i(33385),a=i(68630),r=i.n(a),s=i(27921),l=i.n(s),c=i(73473),d=i.n(c),h=i(18433),u=i.n(h),p=i(43562),m=i.n(p),g=i(25911),b=i(94604);const f=869==i.j?["target","event"]:null;class v extends(869==i.j?b.Item:null){constructor(){super(null,"app"),(0,o.Z)(this,"__itemType","app"),(0,o.Z)(this,"initialStatuses",{}),(0,o.Z)(this,"onReceivedMessageByChromeInterface",(e,t,i)=>{if(!r()(e)||!e.target)return!0;const{target:o,event:a}=e,s=(0,n.Z)(e,f);return this.emit(o,a,s,i,t),!0})}async onBeforeLaunch(){chrome.runtime.onMessage.addListener(this.onReceivedMessageByChromeInterface),this.addListener("setInitialStatus",(e,t,i)=>{this.logger.log("setInitialStatus",e,t),e.name&&e.value&&(this.initialStatuses[e.name]=e.value),i()}),this.addListener("getInitialStatus",(e,t,i)=>{i(this.initialStatuses)}),this.addListener("getSetting",(e,t,i)=>{if(0===e.filter(e=>"string"===typeof e).length)return i(g.APP_PERMISSION_ERRORS.INVALID_ITEM_NAME);if(1===e.length){const t=b.Item.loadedItems.get(e);return i(t?t.settings:g.APP_PERMISSION_ERRORS.UNDEFINED_ITEM)}if(e.length>1){const t=e.map(e=>b.Item.loadedItems.has(e)?[e,b.Item.loadedItems.get(e).settings]:(this.logger.warn(g.APP_PERMISSION_ERRORS.UNDEFINED_ITEM,e),!1)).filter(Boolean);return i(t)}}),this.addListener("getSettingsForUpload",(e,t,i)=>{const n=l()(b.Item.loadedItems.values());d().all(n.map(async e=>{const t=await e.getSettingsForUpload();if(t)return{[e.names.item]:t}})).then(e=>e.filter(Boolean)).then(e=>{const t=u()(e).reduce((e,t)=>{if(t){const[i,n]=m()(t)[0];n&&(e[i]=n)}return e},{});i(t)})}),this.addListener("setSettingsFromCloud",(e,t,i)=>{const{settings:n}=e;if(!n)return i(!1);d().all(l()(b.Item.loadedItems.values()).map(e=>{if(e.names.item in n&&e.setSettingsFromCloud)return e.setSettingsFromCloud(n[e.names.item])})).then(()=>{i(!0)})})}async onUninstall(){super.onUninstall(),chrome.runtime.onMessage.addListener(this.onReceivedMessageByChromeInterface)}}},72406:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ClockController:()=>R,CookieController:()=>M,DownloadController:()=>G,GraphqlController:()=>xe,NetworkController:()=>s,NotificationController:()=>H,PermissionController:()=>u,RequestController:()=>E,TabController:()=>p.TabController,WebRequestController:()=>W});var n=i(33385),o=i(73473),a=i.n(o),r=i(93417);class s extends r.Controller{constructor(e){super(e,"networkController",{settings:{on:!0}}),(0,n.Z)(this,"online",navigator.onLine),(0,n.Z)(this,"getOnline",async(e,t,i)=>i(this.online)),(0,n.Z)(this,"onlineCallback",async()=>{this.checkOnline().then(e=>{e!==this.online&&(this.online=e,this.emit("*","networkOnlineChange",this.online))})}),(0,n.Z)(this,"offlineCallback",async()=>{this.checkOnline().then(e=>{e!==this.online&&(this.online=e,this.emit("*","networkOnlineChange",this.online))})}),(0,n.Z)(this,"connectionTest",async(e,t,i)=>{const{url:n,options:o={}}=e;fetch(n,o).then(()=>{i(!0)}).catch(()=>{i(!1)})}),(0,n.Z)(this,"checkOnline",async()=>new(a())(e=>fetch("https://www.bilibili.com",{method:"get"}).then(t=>{e(t.ok)}).catch(()=>e(!1))))}async onBeforeLaunch(){this.addListener("getOnline",this.getOnline),this.addListener("connectionTest",this.connectionTest),window.addEventListener("online",this.onlineCallback),window.addEventListener("offline",this.offlineCallback)}async onLaunch(){navigator.onLine||this.checkOnline().then(e=>{this.online=e,this.emit("*","networkOnlineChange",this.online)})}}var l=i(90487),c=i.n(l),d=i(80172);const h=new d.ItemErrorFactory("permissionController");h.create("lackPermission");class u extends r.Controller{constructor(e){super(e,"permissionController",{settings:{on:!0}}),(0,n.Z)(this,"initPermissions",new(c())),(0,n.Z)(this,"origins",new(c())),(0,n.Z)(this,"permissions",new(c())),(0,n.Z)(this,"lackOrigins",new(c())),(0,n.Z)(this,"lackPermissions",new(c())),(0,n.Z)(this,"onPermissionsChange",(e,{origins:t,permissions:i})=>{"remove"===e?(t.forEach(e=>{this.lackOrigins.add(e),this.origins.delete(e)}),i.forEach(e=>{this.lackPermissions.add(e),this.permissions.delete(e)})):(t.forEach(e=>{this.lackOrigins.delete(e),this.origins.add(e)}),i.forEach(e=>{this.lackPermissions.delete(e),this.permissions.add(e)})),this.emit("*","permissionUpdated",{command:e,permissions:this.permissions,origins:this.origins})}),(0,n.Z)(this,"contains",async(e,t)=>new(a())(i=>{chrome.permissions.contains({origins:e,permissions:t},e=>{i(e)})})),(0,n.Z)(this,"request",async(e,t)=>new(a())(i=>{chrome.permissions.request({origins:e,permissions:t},e=>{i(e)})})),(0,n.Z)(this,"remove",async(e,t)=>new(a())(i=>{chrome.permissions.remove({origins:e,permissions:t},e=>{i(e)})})),this.store=this.getStore("list-of-missing-permissions"),this.store||(this.setStore("list-of-missing-permissions",[]),this.store=[])}async onBeforeLaunch(){this.addListener("containOrigins",(e,t,i)=>{this.contains(e,null).then(i)}),this.addListener("containPermissions",(e,t,i)=>{this.contains(null,e).then(i)}),this.addListener("contains",({origins:e,permissions:t},i,n)=>{this.contains(e,t).then(n)}),this.addListener("request",({origins:e,permissions:t},i,n)=>{this.request(e,t).then(n)}),this.addListener("remove",({origins:e,permissions:t},i,n)=>{this.remove(e,t).then(n)}),chrome.permissions.onAdded.addListener(({origins:e,permissions:t})=>{this.onPermissionsChange("add",{origins:e,permissions:t})}),chrome.permissions.onRemoved.addListener(({origins:e,permissions:t})=>{this.onPermissionsChange("remove",{origins:e,permissions:t})})}async onLaunch(){await this.initOwnPermission(),await this.updateCurrentPermissions()}async initOwnPermission(){const{permissions:e}=chrome.runtime.getManifest();e.forEach(e=>{/^\*/.test(e)||this.initPermissions.add(e)})}async updateCurrentPermissions(){return new(a())(e=>{chrome.permissions.getAll(({origins:t,permissions:i})=>{t.forEach(e=>this.origins.add(e)),i.forEach(e=>this.permissions.add(e)),e(!0)})})}}var p=i(48311),m=i(68630),g=i.n(m),b=i(18281),f=i.n(b),v=i(27921),y=i.n(v),k=i(43562),w=i.n(k),x=i(53709);const S=6e4,C=3,L=1500;class _{constructor({url:e,options:t={},retryMax:i=C,retryDelay:o=L,timeout:a=S,sendResponse:r}){(0,n.Z)(this,"abortTimer",0),(0,n.Z)(this,"timeout",S),(0,n.Z)(this,"retryMax",3),(0,n.Z)(this,"retryDelay",1500),(0,n.Z)(this,"retryCount",0),(0,n.Z)(this,"abortController",new AbortController),this.url=e,this.options=t,this.retryMax=i,this.retryDelay=o,this.timeout=a,this.sendResponse=r,t.signal=this.abortController.signal}get controlPassword(){return this.options.controlPassword}}class I{constructor(e,t,i,o,a,r){(0,n.Z)(this,"logger",new x.Logger("Request Queue")),(0,n.Z)(this,"list",[]),(0,n.Z)(this,"caughtMaxTimes",0),(0,n.Z)(this,"sleeping",!1),(0,n.Z)(this,"sleepTimer",0),(0,n.Z)(this,"suddenlyDuration",500),(0,n.Z)(this,"suddenlyTimer",0),(0,n.Z)(this,"suddenlyFetchCounter",0),(0,n.Z)(this,"locked",!1),(0,n.Z)(this,"pushTask",e=>!this.sleeping&&(this.suddenlyFetchCounter>=this.suddenlyQueueFetchMax&&(this.logger.log("Request Queue ~ Suddenly fetch counter: "+this.suddenlyFetchCounter),this.caughtMaxTimes+=1),this.suddenlyFetchCounter+=1,this.suddenlyTimer||(this.suddenlyTimer=setTimeout(()=>{this.suddenlyFetchCounter=0,this.suddenlyTimer=0},this.suddenlyDuration)),this.isSaturation&&(this.caughtMaxTimes+=1),this.needSleep?(this.sleepTimer||(this.sleeping=!0,this.logger.log("Request Queue ~ Go to sleep: "+this.url),this.sleepTimer=setTimeout(()=>{this.logger.log("Request Queue ~ Wake up: "+this.url),this.sleeping=!1,this.caughtMaxTimes=0,this.suddenlyFetchCounter=0},this.sleepDuration)),!1):(this.list.push(e),!0))),(0,n.Z)(this,"getTask",()=>this.list.shift()),this.url=e,this.queueMaxLength=t,this.fetchTimeout=i,this.maxCatchTimes=o,this.suddenlyQueueFetchMax=a,this.sleepDuration=r}get isSaturation(){return this.list.length>=this.queueMaxLength}get needSleep(){return this.caughtMaxTimes>=this.maxCatchTimes}}class E extends r.Controller{constructor(e){super(e,"requestController",{dependencies:["permissionController","networkController"],settings:{on:!0}}),(0,n.Z)(this,"queueMaxLength",3),(0,n.Z)(this,"suddenlyQueueFetchMax",10),(0,n.Z)(this,"fetchTimeout",3e4),(0,n.Z)(this,"maxCatchTimes",1),(0,n.Z)(this,"sleepTime",3e4),(0,n.Z)(this,"queues",new(f())),(0,n.Z)(this,"requestRegExp",new RegExp("requestFrom=$BILIBILI_HELPER_2.5.17.4")),(0,n.Z)(this,"clearQueueTimer",0),(0,n.Z)(this,"clearQueueDuration",3e4),(0,n.Z)(this,"fetchingList",new(f())),(0,n.Z)(this,"online",!0),(0,n.Z)(this,"create",(e,t,i)=>{if(!this.checkNetworkStatus())return i(!1);if(e.url){const t=new _({url:e.url,options:e.options,retryMax:e.retryMax,retryDelay:e.retryDelay,timeout:e.timeout,sendResponse:i});this.addTask(t)?this.dealWithTaskList(!0):i(!1)}else i(!1)}),(0,n.Z)(this,"createGraphQL",(e,t,i)=>this.emit("graphqlController","create",e,i)),(0,n.Z)(this,"cancel",(e,t,i)=>{if(e.controlPassword&&this.fetchingList.has(e.controlPassword)){const t=this.fetchingList.get(e.controlPassword);t.abortController.abort(),i(!0)}else i(!0)}),(0,n.Z)(this,"onNetworkOnline",e=>{this.online=e}),(0,n.Z)(this,"onFetch",async e=>{let t,{url:i,options:n,retryMax:o,retryDelay:r,timeout:s,abortController:l,controlPassword:c,abortTimer:d}=e,h=!1,u=new(a())(a=>{t=s&&setTimeout(()=>{l.abort(),e.retryCount<o?h=!0:a("timeout")},s),fetch(decodeURIComponent(i),n).then(e=>(clearTimeout(d),clearTimeout(t),this.fetchingList.delete(c),e)).then(e=>{a(e)}).catch(i=>{clearTimeout(d),clearTimeout(t),this.fetchingList.delete(c),h||"The user aborted a request."!==i.message||a("aborted"),h||"Failed to fetch"===i.message?e.retryCount<o?(e.retryCount+=1,setTimeout(()=>{a(this.onFetch(e))},r)):a("Failed to fetch"):a(i)})});return u||!1}),(0,n.Z)(this,"generateResponseObject",e=>{const{bodyUsed:t,headers:i,ok:n,redirected:o,status:a,statusText:r,type:s,url:l}=e;return{bodyUsed:t,headers:i,ok:n,redirected:o,status:a,statusText:r,type:s,url:l}}),(0,n.Z)(this,"dealWithError",async e=>({error:{status:e.status}})),(0,n.Z)(this,"checkNetworkStatus",()=>!!this.online)}async onLaunch(){this.addListener("create",this.create),this.addListener("createGraphQL",this.createGraphQL),this.addListener("cancel",this.cancel),this.addListener("networkOnlineChange",this.onNetworkOnline)}addTask(e){if(this.queues.has(e.url)){const t=this.queues.get(e.url);return t.pushTask(e)}{const t=new I(e.url,this.queueMaxLength,this.fetchTimeout,this.maxCatchTimes,this.suddenlyQueueFetchMax,this.sleepTime);return this.queues.set(e.url,t),t.pushTask(e)}}getTaskQueue(){const e=y()(this.queues.values()).filter(e=>e.list.length);if(e&&e.length>0)return e[0]}async onBeforeDealWithTaskList(){return this.queues.size>0}async onDealWithTaskList(){const e=this.getTaskQueue();if(e){const t=e.getTask();if(t){const e=await this.dealWithTask(t);await t.sendResponse(e)}clearTimeout(this.clearQueueTimer),this.clearQueueTimer=setTimeout(()=>{e&&0===e.list.length&&this.queues.delete(e.url)},this.clearQueueDuration)}}async onAfterDealWithTaskList(){this.getTaskQueue()&&await this.dealWithTaskList(!0)}async onBeforeDealWithTask(e){e.options||(e.options={}),e.abortController&&(e.abortTimer=setTimeout(()=>{e.abortController.abort()},this.fetchTimeout))}async onDealWithTask(e){return await this.fetch(e)}async onAfterDealWithTask(e){e.abortTimer&&clearTimeout(e.abortTimer)}async fetch(e){if(await this.onBeforeFetch(e)){const t=await this.onFetch(e);return await this.onAfterFetch(e,t)}}async onBeforeFetch(e){var t;let{url:i,options:n}=e,o=!1;const a=new Headers({From:"BILIBILI_HELPER_2.5.17.4"});null!==n&&void 0!==n&&n.headers&&void 0!==(null===(t=n.headers)||void 0===t?void 0:t.noRequestFrom)&&(o=Boolean(n.headers.noRequestFrom),delete n.headers.noRequestFrom),n&&(n.headers instanceof Headers?y()(n.headers.entries()).forEach(([e,t])=>{a.append(e,t)}):g()(n.headers)&&y()(w()(n.headers)).forEach(([e,t])=>{a.append(e,t)})),e.options.headers=a;const r=new URL(i);this.requestRegExp.test(i)||o||(r.search&&"?"===r.search[0]?e.url+="&":e.url+="?",e.url+="requestFrom=BILIBILI_HELPER_2.5.17.4");const s=e.controlPassword;return s&&this.fetchingList.set(s,e),!0}async onAfterFetch(e,t){let{options:i}=e,n=t;if("string"!==typeof t&&i.contentType in t){if(t.status>=400)return this.dealWithError(t);switch(i.contentType.toLowerCase()){case"json":n=await t.json();break;case"blob":n=await t.blob();break;case"text":n=await t.text();break;case"arraybuffer":n=await t.arrayBuffer();break;default:n=this.generateResponseObject(t)}return{data:n}}return{data:this.generateResponseObject(t)}}}var A=i(66130),D=i.n(A),O=i(14050);class T extends O.i{constructor(e,t,i,n,o){super(e,t,i,n,o)}onBeforeRunCallback({removed:e,cookie:t,cause:i}){if(this.data&&this.data.filter){const{name:i,domain:n}=t,o=!this.data.filter.removed||e,a=!this.data.filter.names||this.data.filter.names.includes(i),r=!this.data.filter.domain||this.data.filter.domain.match(n);return o&&a&&r&&this.active}return this.active}async onLaunch(){chrome.cookies.onChanged.addListener(this.runCallback)}async onPause(){this.active=!1}async onClear(){chrome.cookies.onChanged.removeListener(this.runCallback)}}class M extends r.Controller{constructor(e){super(e,"cookieController",{dependencies:["permissionController"],settings:{on:!0}}),(0,n.Z)(this,"hasPermission",!1),(0,n.Z)(this,"tasks",new(f())),(0,n.Z)(this,"onLaunch",async()=>{}),(0,n.Z)(this,"create",async(e,t,i)=>{const{name:n,data:o,callback:a,options:r}=e;if(n){const e=new T(this,n,o,a,r);this.tasks.set(n,e),await e.launch(),i(!0)}else i(!1)}),(0,n.Z)(this,"clear",async(e,t,i)=>{const{name:n}=e,o=this.tasks.get(n);o&&await o.clear(),i(!0)})}async onBeforeLaunch(){await this.emit("permissionController","containPermissions",["cookies"],async e=>{this.hasPermission=e}),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("cookies")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("get",(e,t,i)=>{const{url:n,name:o}=e;this.getLocalCookie(n,o).then(e=>i(e))}),this.addListener("create",this.create),this.addListener("clear",this.clear),this.addListener("getLocalUId",(e,t,i)=>{this.hasPermission?this.getLocalUserId().then(i):i(!1)})}async getLocalUserId(){return this.getLocalCookie("https://www.bilibili.com/","DedeUserID")}async getLocalCookie(e,t){return new(a())(i=>{chrome.cookies.get({url:e,name:t},e=>{e&&1e3*e.expirationDate>D()()?i(e.value):i(!1)})})}}const N=new d.ItemErrorFactory("clockController"),B={LACK_OF_PERMISSION:N.create("lackPermission"),CREATE_FOCUS_FAILED:N.create("createFocusFailed")};class P extends O.i{constructor(e,t,i,n,o){super(e,t,i,n,o)}async onBeforeLaunch(){return new(a())(e=>{chrome.alarms.get(this.name,async t=>{if(t){const t=await this.clear();e(!t)}else e(!1)})})}async onLaunch(e){chrome.alarms.create(this.name,this.data)}async onPause(){await this.clear()}async onClear(){return new(a())(e=>{chrome.alarms.clear(this.name,t=>{t&&(this.active=!1),e(t)})})}}class R extends r.Controller{constructor(e){super(e,"clockController",{dependencies:["permissionController"],settings:{on:!0}}),(0,n.Z)(this,"hasPermission",!1),(0,n.Z)(this,"tasks",new(f())),(0,n.Z)(this,"create",async(e,t,i)=>{if(!this.hasPermission)return i(B.LACK_OF_PERMISSION);const{name:n,alarmInfo:o,tags:a=[],focus:r=!1,callback:s}=e,l=this.tasks.has(n)?this.tasks.get(n):null;if(l)if(l.active){if(r)return this.__clear(n).then(e=>{if(e){const e=new P(this,n,o,s,{tags:a});e.launch(),this.tasks.set(n,e)}i(e)}).catch(()=>{i(B.CREATE_FOCUS_FAILED)});i(!1)}else l.setDataMap(o),l.setCallback(o),l.launch(),i(!0);else{const e=new P(this,n,o,s,{tags:a});e.launch(),this.tasks.set(n,e),i(!0)}}),(0,n.Z)(this,"query",async(e,t,i)=>{const{name:n,tags:o}=e,a=[];if(this.tasks.has(n)&&a.push(this.tasks.get(n)),o&&o.length>0){const e=y()(this.tasks.values()).filter(e=>{if(e.tags&&e.tags.length>0)return o.filter(t=>e.tags.includes(t)).length>0});a.push(...e)}a.length>0?i(a):i(!1)}),(0,n.Z)(this,"clear",async(e,t,i)=>this.__clear(e.name).then(e=>{i(e)})),(0,n.Z)(this,"pause",async(e,t,i)=>{const{filterTags:n=[],name:o}=e;o||n&&n.length>0?await this.query({name:o,tags:n},t,e=>{e&&e.length>0&&e.forEach(e=>e.pause()),i(!0)}):i(!1)}),(0,n.Z)(this,"relaunch",async(e,t,i)=>{if(!this.hasPermission)return i(B.LACK_OF_PERMISSION);let n=e.tags||[],o=e.name;n.length>0?await this.query({name:o,tags:n},t,e=>{e&&e.length>0&&e.forEach(e=>e.launch()),i(!0)}):(y()(this.tasks.values()).forEach(e=>{e.launch()}),i(!0))}),(0,n.Z)(this,"onAlarmCallback",e=>{const t=this.tasks.get(e.name);t&&t.active&&(this.logger.log(`clock controller's clock: ${e.name} is activated`,e),t.runCallback())}),(0,n.Z)(this,"__clear",async e=>{if(this.tasks.has(e)){const t=this.tasks.get(e);return this.tasks.delete(e),t.clear()}return!0})}async onBeforeLaunch(){await this.emit("permissionController","containPermissions",["alarms"],async e=>{this.hasPermission=e}),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("alarms")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("create",this.create),this.addListener("query",this.query),this.addListener("clear",this.clear),this.addListener("pause",this.pause),this.addListener("relaunch",this.relaunch)}async onLaunch(){chrome.alarms.onAlarm.addListener(this.onAlarmCallback)}}var Z=i(47874),F=i(48950);const q=["target","event"],j=new d.ItemErrorFactory("notificationController"),U={LACK_OF_PERMISSION:j.create("lackPermission"),SERVICE_WORKER_NOT_SUPPORT:j.create("swNotSupport"),SERVICE_WORKER_NOT_WORKING:j.create("swNotWorking")};class H extends r.Controller{constructor(e){super(e,"notificationController",{dependencies:["permissionController"],settings:{on:!0,useActions:!1,autoClose:!1,apiType:"native"}}),(0,n.Z)(this,"currentList",[]),(0,n.Z)(this,"swOn",!1),(0,n.Z)(this,"onLaunch",async()=>{chrome.notifications.onButtonClicked.addListener((e,t)=>{this.currentList[e]&&0===t&&this.emit("tabController","create",{url:this.currentList[e],focus:!1},()=>{chrome.notifications.clear(e),delete this.currentList[e]})}),chrome.notifications.onClicked.addListener(e=>{this.currentList[e]&&this.emit("tabController","create",{url:this.currentList[e],focus:!0},()=>{chrome.notifications.clear(e),delete this.currentList[e]})})}),(0,n.Z)(this,"post",(...e)=>{switch(this.settings.apiType){case"native":return this.postByNative(...e);case"chrome":return this.postByChrome(...e)}}),(0,n.Z)(this,"postByNative",(e,t,i)=>{if(!this.swOn)return i(U.SERVICE_WORKER_NOT_WORKING);const{title:n,dir:o="auto",lang:a,badge:r,body:s,tag:l,icon:c,image:d,data:h={},vibrate:u,renotify:p=!1,requireInteraction:m=!1,actions:g,silent:b=!1,autoCloseInterval:f=0}=e;if(navigator.serviceWorker.controller){const e={type:"notification",title:n,dir:o,lang:a,badge:r,body:s,tag:l,icon:c,image:d,data:h,vibrate:u,renotify:p,requireInteraction:m,actions:g,silent:b,autoCloseInterval:f};h.useActions=this.settings.useActions,h.autoClose=this.settings.autoClose,navigator.serviceWorker.controller.postMessage(e),i(!0)}else i(!1)}),(0,n.Z)(this,"postByWeb",e=>{const{title:t,dir:i="auto",lang:n,badge:o,body:a,tag:r,icon:s,image:l,data:c={},vibrate:d,renotify:h=!1,requireInteraction:u=!1,actions:p,silent:m=!1,autoCloseInterval:g=0}=e,b=new Notification(t,e);c.url&&(b.onclick=e=>{e.preventDefault(),this.emit("tabController","create",{url:c.url,strict:!1}),b.close(),this.emit("googleAnalytics","send",{event:"send",hitType:"event",category:"notification_by_web_api",action:"open_notification"})}),c.autoClose&&options.autoCloseInterval&&setTimeout(()=>{b.close()},options.autoCloseInterval)}),(0,n.Z)(this,"postByChrome",(e,t,i)=>{const{title:n,dir:o="auto",lang:a,badge:r,body:s,tag:l,icon:c,image:d,data:h={},vibrate:u,renotify:p=!1,requireInteraction:m=!1,actions:g,silent:b=!1,autoCloseInterval:f=0}=e,v={type:"notification",title:n,dir:o,lang:a,badge:r,body:s,tag:l,icon:c,image:d,data:h,vibrate:u,renotify:p,requireInteraction:m,actions:g,silent:b,autoCloseInterval:f},y=h.url?[{title:"\u67e5\u770b"}]:null,k="bilibili-helper-dynamic-check"+String(Math.random()).slice(2);(0,F.sc)(k,{type:"basic",iconUrl:v.picture||chrome.runtime.getURL("/statics/images/bilibili-cat-256.png"),title:"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u63d0\u9192\u60a8",message:v.title,buttons:y},e=>{this.currentList[e]=h.url,h.autoClose&&v.autoCloseInterval&&setTimeout(()=>{chrome.notifications.clear(e)},v.autoCloseInterval)})}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onBeforeLaunch(){await this.emit("permissionController","containPermissions",["notifications"],async e=>{this.hasPermission=e}),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("notifications")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),"serviceWorker"in navigator&&navigator.serviceWorker&&"native"===this.settings.apiType&&navigator.serviceWorker.register("../notification.sw.js",{scope:"./"}).then(()=>{this.swOn=!0}).then(()=>{navigator.serviceWorker.addEventListener("message",e=>{const{data:t={}}=e,{target:i,event:n}=t,o=(0,Z.Z)(t,q);"tabController"===i?this.emit(i,n,{queryURL:o.url,strict:!1}):this.emit(i,n,o)})}).catch(e=>{}),this.addListener("post",this.post)}async onAfterSetSetting(e,t){}}var $=i(48903);class V extends O.i{constructor(e,t,i,o,a){super(e,t,i,o,a),(0,n.Z)(this,"active",!1),(0,n.Z)(this,"onLaunch",async()=>{const{eventName:e,filter:t,options:i}=this.data,n=i.findIndex(e=>"extraHeaders"===e);(0,$.getChromeVersion)()>72?-1===n&&i.push("extraHeaders"):n>=0&&i.splice(n,1),this.manager.logger.log("create web request task",this.name,e,t,i),chrome.webRequest[e].addListener(this.runCallback,t,i)}),(0,n.Z)(this,"onPause",async()=>{await this.clear()});const{eventName:r,filter:s,options:l}=this.data;if(!(r in chrome.webRequest))throw"error event name "+r;if(!s||!l||!a)throw"error params in webRequest task: "+t}async onClear(e){const{eventName:t,filter:i,options:n}=this.data;this.manager.logger.log("clear web request task",this.name,t,i,n),chrome.webRequest[t].removeListener(this.runCallback)}}class W extends r.Controller{constructor(e){super(e,"webRequestController",{dependencies:["permissionController","networkController"],settings:{on:!0}}),(0,n.Z)(this,"hasPermission",!1),(0,n.Z)(this,"tasks",new(f())),(0,n.Z)(this,"onLaunch",async()=>{this.addListener("create",this.create),this.addListener("clear",this.clear)}),(0,n.Z)(this,"create",(e,t,i)=>{const{name:n,tags:o=[],eventName:a,filter:r,options:s,callback:l}=e,c=this.tasks.has(n)?this.tasks.get(n):null;if(c)this.logger.warn("exist webRequest task",c,e),c.active?i instanceof Function&&i(!1):(c.setDataMap({filter:r,options:s}),c.setCallback(l),c.launch(),i instanceof Function&&i(!0));else{const e=new V(this,n,{eventName:a,filter:r,options:s},l,{tags:o});e.launch(),this.tasks.set(n,e),i instanceof Function&&i(!0)}}),(0,n.Z)(this,"clear",async(e,t,i)=>{const{name:n}=e;return this.__clear(n).then(e=>{i(e)})}),(0,n.Z)(this,"__clear",async e=>{if(this.tasks.has(e)){const t=this.tasks.get(e);return this.tasks.delete(e),t.clear()}return!0})}async onBeforeLaunch(){await this.emit("permissionController","containPermissions",["webRequest"],async e=>{this.hasPermission=e}),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("webRequest")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}})}}class z extends O.i{constructor(e,t,i,o,a){super(e,t,i,o,a),(0,n.Z)(this,"downloadItemId",void 0),(0,n.Z)(this,"onLaunch",async()=>{chrome.downloads.download(this.data,e=>{this.downloadItemId=e,this.callback instanceof Function&&this.callback(e)})}),(0,n.Z)(this,"cancel",async()=>{chrome.downloads.cancel(this.downloadItemId,this.cancelCallback)}),this.cancelCallback=i.cancelCallback}}class G extends r.Controller{constructor(e){super(e,"downloadController",{dependencies:["permissionController"],settings:{on:!0}}),(0,n.Z)(this,"hasPermission",!1),(0,n.Z)(this,"tasks",new(f())),(0,n.Z)(this,"onLaunch",async()=>{}),(0,n.Z)(this,"create",(e,t,i)=>{const{name:n,data:o,callback:a}=e,r=this.tasks.get(n);if(!r){const e=new z(this,n,o,a);this.tasks.set(n,e),i(!0),e.launch().then(()=>{this.tasks.delete(n)})}}),(0,n.Z)(this,"clear",async(e,t,i)=>{const{name:n}=e;return this.__clear(n).then(e=>{i(e)})}),(0,n.Z)(this,"__clear",async e=>{if(this.tasks.has(e)){const t=this.tasks.get(e);return this.tasks.delete(e),t.clear()}return!0})}async onBeforeLaunch(){await this.emit("permissionController","containPermissions",["downloads"],async e=>{this.hasPermission=e}),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("downloads")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("create",this.create),this.addListener("clear",this.clear)}}var J=i(8450),Q=i.n(J),Y=i(26243),X=i.n(Y),K=i(62680),ee=i.n(K),te=i(95366),ie=i.n(te),ne=i(6919),oe=i.n(ne),ae=i(93364),re=i.n(ae),se=i(26771),le=i.n(se),ce=i(69055);function de(e,t){var i=X()(e);if(ee()){var n=ee()(e);t&&(n=n.filter((function(t){return ie()(e,t).enumerable}))),i.push.apply(i,n)}return i}function he(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?de(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):oe()?re()(e,oe()(i)):de(Object(i)).forEach((function(t){le()(e,t,ie()(i,t))}))}return e}class ue{constructor(e,t){this.message=e,(0,ce.Z)(this,t)}toJSON(){return he({},this)}}class pe{constructor(e){this.moduleName=e,pe.map[e]={}}create(e,t,i){const n=new ue(i);return n.module=this.moduleName,n.type=e,n.code=t,pe.map[this.moduleName][e]=n,n}}(0,n.Z)(pe,"map",{});new pe("AD"),new pe("APP");const me=new pe("BILIBILI_ACCOUNT"),ge=(me.create("ID_NOT_BINDED",-1,"\u672a\u6ce8\u518c"),me.create("ID_BINDED",-2,"\u8be5b\u7ad9\u8d26\u53f7\u5df2\u7ecf\u6ce8\u518c\u8fc7\u52a9\u624b\u8d26\u53f7"),me.create("BIND_ERROR",-4,"\u6ce8\u518c\u9519\u8bef"),me.create("COOKIE_ERROR",-5,"Cookie\u9519\u8bef"),me.create("REBIND_ERROR",-6,"\u91cd\u65b0\u6ce8\u518c\u5931\u8d25"),me.create("UNBIND_ERROR",-7,"\u89e3\u7ed1\u5931\u8d25"),me.create("ID_COOLIE_ARE_MISMATCH",-8,"UID\u4e0eCookie\u4e0d\u5339\u914d"),me.create("NEED_SIGNOUT",-9,"\u672a\u767b\u51fa"),me.create("NEED_SIGNIN",-10,"\u672a\u767b\u5f55"),me.create("NEED_REBIND",-11,"\u9700\u8981\u91cd\u65b0\u7ed1\u5b9a"),me.create("LOGIN_ERROR",-12,"\u767b\u5f55\u5931\u8d25"),me.create("WRONG_PASSWORD",-13,"\u5bc6\u7801\u9519\u8bef"),me.create("NEED_FILL_PASSWORD",-14,"\u9700\u8981\u8865\u5145\u5bc6\u7801"),new pe("BILIBILI_HELPER_ACCOUNT")),be=(ge.create("ID_NOT_BOUND",-1,"\u672a\u6ce8\u518c"),ge.create("ID_BOUND",-2,"\u8be5b\u7ad9\u8d26\u53f7\u5df2\u7ecf\u6ce8\u518c\u8fc7\u52a9\u624b\u8d26\u53f7"),ge.create("BIND_ERROR",-4,"\u6ce8\u518c\u9519\u8bef"),ge.create("COOKIE_ERROR",-5,"Cookie\u9519\u8bef"),ge.create("REBIND_ERROR",-6,"\u91cd\u7ed1\u9519\u8bef"),ge.create("UNBIND_ERROR",-7,"\u89e3\u7ed1\u9519\u8bef"),ge.create("ID_COOLIE_ARE_MISMATCH",-8,"UID\u4e0eCookie\u4e0d\u5339\u914d"),ge.create("NEED_SIGNOUT",-9,"\u672a\u767b\u51fa"),ge.create("NEED_SIGNIN",-10,"\u672a\u767b\u5f55"),ge.create("NEED_REBIND",-11,"\u9700\u91cd\u7ed1"),ge.create("LOGIN_ERROR",-12,"\u767b\u5f55\u5931\u8d25"),ge.create("WRONG_PASSWORD",-13,"\u5bc6\u7801\u9519\u8bef"),ge.create("NO_ACCESS",-14,"\u65e0\u6743\u9650"),ge.create("NO_ACCESS_TO_RESET_PASSWORD",-15,"\u65e0\u6743\u91cd\u7f6e\u5bc6\u7801"),ge.create("REPEAT_EMAIL",-16,"\u8be5E-mail\u5df2\u88ab\u4f7f\u7528"),ge.create("NO_EMAIL",-17,"\u672a\u8bbe\u7f6eE-mail"),ge.create("UNCHECKED_EMAIL",-18,"\u5df2\u8bbe\u7f6eE-mail\u672a\u6821\u9a8c"),ge.create("HAS_BOUND_EMAIL",-19,"\u8be5\u8d26\u53f7\u5df2\u7ecf\u7ed1\u5b9a\u8fc7E-mail"),ge.create("EMAIL_CHECK_FAILED",-20,"E-mail\u6821\u9a8c\u5931\u8d25"),ge.create("SAVE_REDEEM_FAILED",-21,"\u4fdd\u5b58\u5151\u6362\u7801\u5931\u8d25"),ge.create("USE_REDEEM_FAILED",-22,"\u4f7f\u7528\u5151\u6362\u7801\u5931\u8d25"),ge.create("NO_REDEEM",-23,"\u6ca1\u6709\u53ef\u4ee5\u4f7f\u7528\u7684\u5e8f\u5217\u53f7"),ge.create("INVALID_PRODUCT_NAME",-24,"\u9519\u8bef\u7684\u4ea7\u54c1\u7801"),new pe("BILIBILI_HELPER_SETTING")),fe=(be.create("INVALID_VALUE",-1,"\u975e\u6cd5\u7684\u503c"),new pe("ACCOUNT")),ve=(fe.create("INVALID_EMAIL",-1,"\u975e\u6cd5\u7684 e-mail"),fe.create("INVALID_CAPTCHA",-2,"\u975e\u6cd5\u7684\u9a8c\u8bc1\u7801"),fe.create("WRONG_CAPTCHA",-3,"\u9519\u8bef\u7684\u9a8c\u8bc1\u7801"),fe.create("NO_CAPTCHA",-4,"\u4e0d\u5b58\u5728\u9a8c\u8bc1\u7801"),fe.create("NO_ACCESS",-5,"\u6ca1\u6709\u6743\u9650"),fe.create("INVALID_VALUE",-6,"\u975e\u6cd5\u7684\u503c"),new pe("IDENTITY")),ye=(ve.create("CHECK_FAILED",-1,"\u8eab\u4efd\u6821\u9a8c\u9519\u8bef"),ve.create("IDENTITY_ADDED",-2,"\u8eab\u4efd\u5df2\u88ab\u6dfb\u52a0"),new pe("INTERNET")),ke=(ye.create("ENOTFOUND",-1,"ENOTFOUND"),new pe("JWT")),we=(ke.create("NONE_JWT",-1,"\u9700\u8981JWT\u7528\u4e8e\u68c0\u67e5"),ke.create("INVALID_JWT",-2,"\u975e\u6cd5\u7684\u7684JWT"),new pe("MESSAGE"),new pe("REDEEM"));we.create("REDEEM_CODE_HAS_EXISTED",-1,"\u91cd\u590d\u751f\u6210\u5151\u6362\u7801"),we.create("REDEEM_CODE_HAS_USED",-2,"\u5151\u6362\u7801\u4ee5\u88ab\u4f7f\u7528"),we.create("REDEEM_CODE_CREATE_FAILED",-3,"\u5151\u6362\u7801\u751f\u6210\u5931\u8d25"),we.create("INVALID_REDEEM",-4,"\u65e0\u6548\u7684\u5151\u6362\u7801"),we.create("INACTIVE_REDEEM",-5,"\u4e0d\u53ef\u7528\u7684\u5151\u6362\u7801");class xe extends r.Controller{constructor(e){super(e,"graphqlController",{dependencies:["requestController"],settings:{on:!0}}),(0,n.Z)(this,"create",(e,t,i)=>{e.url="https://bilibilihelper.com/g",e.options||(e.options={query:null,variables:null}),e.options.query,e.options.graphql=!0;const n=new Headers;return e.options.headers instanceof Headers?y()(e.options.headers.entries()).forEach(([e,t])=>{n.append(e,t)}):g()(e.options.headers)&&w()(e.options.headers).forEach(([e,t])=>{n.append(e,t)}),n.append("Content-Type","application/json"),e.options.headers=n,e.options.method="POST",e.options.contentType="json",e.options.body=Q()({query:e.options.query.replace(/\s{2,}/g," "),variables:e.options.variables}),this.emit("requestController","create",e,async e=>{const{error:t,data:n}=e;if(!t&&!n)return i(!1);let o=null;n.errors&&(o=this.dealWithErrors(n.errors)),i({data:n?n.data:null,errors:t||o})})}),(0,n.Z)(this,"dealWithErrors",e=>{try{return e.map(e=>{if(!pe.map[e.module])throw"no module names "+e.module;if(!pe.map[e.module][e.type])throw`no type ${e.module} in module ${e.module}`;return pe.map[e.module][e.type]})}catch(t){}})}async onLaunch(){this.addListener("create",this.create)}}},93611:(e,t,i)=>{"use strict";i.r(t),i.d(t,{BILIBILI_ACCOUNT_PREFIX:()=>j,BilibiliAccount:()=>U});var n=i(69055),o=i(33385),a=i(68630),r=i.n(a),s=i(26243),l=i.n(s),c=i(18281),d=i.n(c),h=i(27921),u=i.n(h),p=i(73473),m=i.n(p),g=i(94604),b=i(66130),f=i.n(b),v=i(8450),y=i.n(v),k=i(62680),w=i.n(k),x=i(95366),S=i.n(x),C=i(6919),L=i.n(C),_=i(93364),I=i.n(_),E=i(26771),A=i.n(E),D=i(84564),O=i.n(D),T=i(48903),M=i(26516);function N(e,t){var i=l()(e);if(w()){var n=w()(e);t&&(n=n.filter((function(t){return S()(e,t).enumerable}))),i.push.apply(i,n)}return i}function B(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(Object(i),!0).forEach((function(t){(0,o.Z)(e,t,i[t])})):L()?I()(e,L()(i)):N(Object(i)).forEach((function(t){A()(e,t,S()(i,t))}))}return e}const P=()=>"bh"+String(Math.random()).slice(2,+String(Math.round(10*(Math.random()+5))));class R{constructor(e,t=[],i,n={}){(0,o.Z)(this,"id",f()()),(0,o.Z)(this,"tabs",[]),(0,o.Z)(this,"cookieMap",new(d())),(0,o.Z)(this,"cookiesStringMap",new(d())),(0,o.Z)(this,"cookieExpired",!1),(0,o.Z)(this,"cookiePrefix",P()),(0,o.Z)(this,"stringifyCookieIntervalTime",2e3),(0,o.Z)(this,"stringifyCookieSetTimeOutId",void 0),(0,o.Z)(this,"blockURLs",M.BLOCK_URLS),(0,o.Z)(this,"toString",()=>y()(u()(this.cookieMap.entries()))),(0,o.Z)(this,"containTab",e=>this.tabs.includes(e)),(0,o.Z)(this,"generateCookieStringByDomain",e=>{let t=[];return e instanceof Array?t=e.map(e=>e[1]):e instanceof d()?t=u()(e.values()):e.name&&e.domain&&(t=[e]),t.map(({name:e,value:t})=>`${e}=${t}`).join("; ")}),(0,o.Z)(this,"cookieHeaders2CookieArray",(e,t)=>t.map(({value:t})=>{const i=t.split(";").map(e=>e.trim().split("=")),[n,o]=i.shift();if(M.DISABLED_COOKIE_LIST.includes(n))return!1;let a={};if(n.match(/\(\)<>@,;:"\/\[\]\?=\{\}/))throw`wrong cookie name: ${n}, value ${o}`;return a.name=n,a.value=o,i.reduce((t,[i,n])=>{switch(i.toLowerCase()){case"secure":t.secure=!0;break;case"httponly":t.httpOnly=!0;break;case"hostonly":t.hostOnly=!0;break;case"domain":t.domain=n;break;case"path":t.path=n;break;case"samesite":t.sameSite=n;break;case"max-age":{let i=new Date(e.getTime());i.setSeconds(i.getSeconds()+Number(n)),t.expirationDateOptional=i.getTime()/1e3;break}case"expires":t.expirationDateOptional=new Date(n).getTime()/1e3;break;default:}return t},a)}).filter(Boolean)),(0,o.Z)(this,"setCookie",e=>{e=e.filter(({name:e})=>!M.DISABLED_COOKIE_LIST.includes(e)),this.setCookieMap(e)}),(0,o.Z)(this,"addTabs",(...e)=>{e.forEach(e=>{"number"===typeof e&&(this.tabs.includes(e)||this.tabs.push(e))})}),(0,o.Z)(this,"setBaseCookie",(e,t,i)=>{const n=u()(this.cookiesStringMap.entries()),o=n.map(([t,i])=>!!e.match(t)&&i).filter(Boolean).join("; "),a={runAt:"document_start",frameId:t,code:`\n                (() => {\n                    const f = () => {\n                        const currentScript = document.getElementById('bilibiliHelperCookieScript');\n                        currentScript && currentScript.remove();\n                        const scriptDOM = document.createElement('script');\n                        scriptDOM.id = 'bilibiliHelperCookieScript';\n                        scriptDOM.innerHTML = \` \n                            window.addEventListener('popstate', (e) => console.log(1, e));\n                            const cookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');\n                            if (cookieDesc && cookieDesc.configurable) {\n                                Object.defineProperty(document, 'cookie', {\n                                    get: function () {\n                                        return '${o}';\n                                    },\n                                    set: function (val) {\n                                        if (val) {\n                                            const cookieArray = val.split(';').map((text) => text.split('='));\n                                            const [[key, value], ...rest] = cookieArray;\n                                            cookieArray.push(['name', key]);\n                                            value && cookieArray.push(['value', value]);\n                                            const cookie = cookieArray.reduce((t,[k,v])=>(t[k.trim()]=v.trim(),t),{});\n                                            console.log('set cookie', cookie);\n                                            window.postMessage({\n                                                target: 'sandBox${this.id}',\n                                                command: 'sendEditedCookie',\n                                                cookie,\n                                            }, '*');\n                                        }\n                                    }\n                                });\n                            }\n                        \`;\n                        document.head.appendChild(scriptDOM);\n                        setTimeout(() => scriptDOM.remove(), 100);\n                    };\n                    const t = setInterval(() => {\n                        if (document.head) {\n                            clearInterval(t);\n                            f();\n                        }\n                    }, 10);\n                })();\n            `};chrome.tabs.executeScript(i,a)}),(0,o.Z)(this,"filterCookieByURL",e=>{const t=e.split("#")[0].split("?")[0].replace(/(^https?:\/\/|\/\/)/,"").split("/")[0];return u()(this.cookiesStringMap.entries()).map(([[e,i],n])=>t.indexOf(e)>=0&&n).filter(Boolean).join("; ")}),(0,o.Z)(this,"setCookieMap",e=>{e&&e.forEach(e=>{const{domain:t=".bilibili.com",name:i}=e;this.cookieMap.has(t)?this.cookieMap.set(t,new(d())(this.cookieMap.get(t))):this.cookieMap.set(t,new(d())),this.cookieMap.get(t).set(i,e)}),clearTimeout(this.stringifyCookieSetTimeOutId),new(m())(e=>{this.cookiesStringMap.size>0?this.stringifyCookieSetTimeOutId=setTimeout(()=>{e()}):e()}).then(()=>{for(let[e,t]of this.cookieMap){const i=this.generateCookieStringByDomain(t);this.cookiesStringMap.set(e,i)}this.account.saveCookie()})}),(0,o.Z)(this,"initListener",()=>{const e=["blocking","requestHeaders"],t=["blocking","responseHeaders"];(0,T.getChromeVersion)()>72&&(e.push("extraHeaders"),t.push("extraHeaders")),chrome.webRequest.onBeforeSendHeaders.addListener(this.onBeforeSendHeadersCallback,this.blockURLs,e),chrome.webRequest.onHeadersReceived.addListener(this.onHeaderReceivedCallback,this.blockURLs,t),chrome.webNavigation.onCreatedNavigationTarget.addListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.addListener(this.onCommittedCallback),chrome.tabs.onCreated.addListener(this.onCreatedCallback),chrome.tabs.onUpdated.addListener(this.onUpdatedCallback),chrome.tabs.onRemoved.addListener(this.onRemovedCallback),chrome.runtime.onMessage.addListener(this.handleOnEditLocalCookieListener)}),(0,o.Z)(this,"bindingMessageCallback",(e,t,i)=>{const{command:n}=e;if(t.tab&&this.containTab(t.tab.id))if("queryBinding"===n){let e=!1;M.UNBOUND_STATE.includes(this.account.bindState)&&(this.account.bindState=M.BIND_STATE.BINDING,e=!0),i(e)}else"queryBound"===n&&(i(this.account.bindState),this.account.bindState===M.BIND_STATE.BOUND&&this.completeBind());return!0}),(0,o.Z)(this,"bindingOnCompletedCallback",e=>{const{tabId:t,parentFrameId:i,responseHeaders:n}=e;this.tabs.includes(t)&&-1===i&&this.checkCookieValid().then(e=>{e&&this.account.update(B(B({},e),{},{bindState:M.BIND_STATE.BOUND}))})}),(0,o.Z)(this,"bindingOnRemoveTabCallback",e=>{const t=this.tabs.indexOf(e);-1!==t&&this.tabs.splice(t,1),0===this.tabs.length&&this.destroy()}),(0,o.Z)(this,"bindingOnBeforeSendHeadersCallback",e=>{const{requestHeaders:t,url:i,tabId:n}=e,o=new(O())(i,!0),{query:a={}}=o,{type:r=null,sandBoxID:s}=a;if("checkCookie"===r&&+s===this.id||this.tabs.includes(n)){const e=t.find(e=>"cookie"===e.name.toLowerCase()),n=this.filterCookieByURL(i);return e?e.value=n:t.push({name:"Set-Cookie",value:n}),{requestHeaders:t}}return{requestHeaders:t}}),(0,o.Z)(this,"initBindListener",()=>{chrome.runtime.onMessage.addListener(this.bindingMessageCallback);const e=["blocking","requestHeaders"],t=["blocking","responseHeaders"];(0,T.getChromeVersion)()>72&&(e.push("extraHeaders"),t.push("extraHeaders")),chrome.webRequest.onHeadersReceived.addListener(this.onHeaderReceivedCallback,this.blockURLs,t),chrome.webRequest.onCompleted.addListener(this.bindingOnCompletedCallback,{urls:["*://api.bilibili.com/x/web-interface/nav"]},["responseHeaders","extraHeaders"]),chrome.webNavigation.onCreatedNavigationTarget.addListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.addListener(this.onCommittedCallback),chrome.webRequest.onBeforeSendHeaders.addListener(this.bindingOnBeforeSendHeadersCallback,this.blockURLs,e),chrome.tabs.onRemoved.addListener(this.bindingOnRemoveTabCallback)}),(0,o.Z)(this,"completeBind",()=>{chrome.runtime.onMessage.removeListener(this.bindingMessageCallback),chrome.webRequest.onHeadersReceived.removeListener(this.onHeaderReceivedCallback),chrome.webRequest.onCompleted.removeListener(this.bindingOnCompletedCallback),chrome.webRequest.onBeforeSendHeaders.removeListener(this.bindingOnBeforeSendHeadersCallback),chrome.webNavigation.onCreatedNavigationTarget.removeListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.removeListener(this.onCommittedCallback),chrome.tabs.onRemoved.removeListener(this.bindingOnRemoveTabCallback),this.initListener(),this.account.emit("bilibiliAccountController","completeBind")}),(0,o.Z)(this,"destroyListener",()=>{chrome.webRequest.onBeforeSendHeaders.removeListener(this.onBeforeSendHeadersCallback),chrome.webRequest.onHeadersReceived.removeListener(this.onHeaderReceivedCallback),chrome.webNavigation.onCreatedNavigationTarget.removeListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.removeListener(this.onCommittedCallback),chrome.tabs.onUpdated.removeListener(this.onUpdatedCallback),chrome.tabs.onRemoved.removeListener(this.onRemovedCallback),chrome.runtime.onMessage.removeListener(this.handleOnEditLocalCookieListener)}),(0,o.Z)(this,"onBeforeSendHeadersCallback",(0,T.webRequestCallbackWrapper)(e=>{const{tabId:t,requestHeaders:i,url:n}=e,o=new(O())(n,!0),{query:a={}}=o;if(this.tabs.includes(t)||"checkCookie"===a.type&&+a.sandBoxID===this.id){const e=u()(this.cookiesStringMap.entries()),t=e.map(([e,t])=>!!n.match(e)&&t).filter(Boolean).join("; "),o=[...i],a=o.find(e=>"cookie"===e.name.toLowerCase());return a&&t?a.value=t:t&&o.push({name:"Cookie",value:t}),{requestHeaders:o}}return{requestHeaders:i}})),(0,o.Z)(this,"onHeaderReceivedCallback",(0,T.webRequestCallbackWrapper)(e=>{let{tabId:t,responseHeaders:i}=e;if(this.tabs.includes(t)){if(i){const e=i.filter(e=>"set-cookie"===e.name.toLowerCase());let t=i.find(e=>"expires"===e.name.toLowerCase());if(t=t?new Date(t.value):new Date,e&&e.length>0){const n=this.cookieHeaders2CookieArray(t,e);this.setCookie(n);const o=i.length;for(let e=0;e<o;++e)i[e]&&"set-cookie"===i[e].name.toLowerCase()&&delete i[e];i=i.filter(Boolean)}}return{responseHeaders:i}}})),(0,o.Z)(this,"onCreatedNavigationTargetCallback",e=>{const{sourceTabId:t,tabId:i}=e;this.tabs.includes(t)&&!this.tabs.includes(i)&&(this.tabs.push(i),this.setBaseCookie(e.url,e.sourceFrameId,e.tabId))}),(0,o.Z)(this,"onCommittedCallback",e=>{this.tabs.includes(e.tabId)&&(["about:blank"].includes(e.url)||this.setBaseCookie(e.url,e.frameId,e.tabId))}),(0,o.Z)(this,"onDOMContentLoadedCallback",e=>{this.tabs.includes(e.tabId)&&(["about:blank"].includes(e.url)||this.setBaseCookie(e.url,e.frameId,e.tabId))}),(0,o.Z)(this,"onCreatedCallback",e=>{}),(0,o.Z)(this,"onUpdatedCallback",(e,t,i)=>{if(this.tabs.includes(e)&&"loading"===t.status){const t=new(O())(i.url,!0),{query:n}=t;if(!n.uid){n.uid=this.account.uid;const i=t.toString();chrome.tabs.update(e,{url:i})}}}),(0,o.Z)(this,"onRemovedCallback",e=>{const t=this.tabs.indexOf(e);-1!==t&&this.tabs.splice(t,1)}),(0,o.Z)(this,"handleOnEditLocalCookieListener",e=>(e.sandBox==="sandBox"+this.id&&this.setCookie([e.cookie]),!0)),(0,o.Z)(this,"checkCookieValid",()=>{const e=`https://api.bilibili.com/x/web-interface/nav?type=checkCookie&sandBoxID=${this.id}&passWrapper=true`;return(0,T.fetchFromHelper)(e).then(e=>e.json()).then(e=>{const{code:t,data:i}=e;return 0===t?(this.cookieExpired=!1,i):m().reject(e)}).catch(e=>(this.cookieExpired=!0,m().resolve(!1)))}),(0,o.Z)(this,"checkLoginExpired",()=>this.checkCookieValid()),(0,o.Z)(this,"checkBindState",e=>{try{const t={query:"query queryBind ($uid: UID!) {\n                    account {\n                        hasBound(id: $uid) {\n                            active\n                        }\n                    }\n                }",variables:{uid:+e}};return(0,T.sendGraphQLRequest)(t).then(({errors:t,data:i}={})=>{if(t)return new(m())(e=>{let i=!1;t.forEach(e=>{switch(e.code){case-1:"IDENTITY"===e.module||"ACCOUNT"===e.module&&(i=!0);break;case-2:e.module;break}}),e(i)}).then(t=>{if(t){const t=this.filterCookieByURL("www.bilibili.com");return this.bindRequest(e,t)}return!1});if(!i.account)return!1;if(i.account.hasBound){if(i.account.hasBound.active)return!0;{const t=this.filterCookieByURL("www.bilibili.com");return this.bindRequest(e,t)}}})}catch(t){return m().reject(!1)}}),(0,o.Z)(this,"bindRequest",async(e,t)=>{const i={query:"mutation bindAccount ($uid: UID!, $cookies: String!) {\n                        account {\n                            bind(id: $uid, cookie: $cookies)\n                        }\n                    }",variables:{uid:+e,cookies:t}};return(0,T.sendGraphQLRequest)(i).then(({errors:e,data:t}={})=>!e&&(!!t.account&&!!t.account.bind))}),this.account=e,this.tabs=[...t],this.onDestroy=n.onDestroy,this.rebind=n.rebind,i instanceof d()?this.cookieMap=i:i instanceof Array&&this.setCookieMap(i),this.init()}init(){M.UNBOUND_STATE.includes(this.account.bindState)?this.initBindListener():(this.setCookieMap(),this.initListener())}destroy(){this.destroyListener(),"function"===typeof this.onDestroy&&this.onDestroy(),this.account.bindState===M.BIND_STATE.BINDING&&(this.account.bindState=M.BIND_STATE.UNBOUND,this.account.emit("bilibiliAccountController","cancelBind"))}}const Z=["uname","uid","face","bindState","money","levelInfo","hasShop","mobileVerified","emailVerified","moral","official","officialVerify","pendant","vipDueDate","vipStatus","vipType","vip","vipAvatarSubscript","vipLabel","vipNicknameColor","vipPayType","vipThemeType","answerStatus","allowanceCount","isLogin","scores","wallet","shopUrl"],F={mid:"uid",level_info:"levelInfo",has_shop:"hasShop",mobile_verified:"mobileVerified",email_verified:"emailVerified",answer_status:"answerStatus",allowance_count:"allowanceCount",vip_label:"vipLabel",vip_nickname_color:"vipNicknameColor",vip_avatar_subscript:"vipAvatarSubscript",vip_pay_type:"vipPayType",vip_theme_type:"vipThemeType",shop_url:"shopUrl"},q=["uid","username","face","sign","sex","level","isLocal","hasLogin","vip","cookieMap","bindState"],j="bilibiliAccount_";class U extends g.Item{constructor(e,t,{username:i="",face:a="",sign:s="",sex:c="\u4fdd\u5bc6",isSpecialAttention:h=!1,vip:p=null,useSandBox:g}={username:"",face:"",sign:"",sex:"\u4fdd\u5bc6",isSpecialAttention:!1,vip:null,useSandBox:!1}){if(super(e,j+String(t),{dependencies:["bilibiliAccountController"],settings:{on:!0},cache:{limit:{duration:864e5}}}),(0,o.Z)(this,"__initing",!1),(0,o.Z)(this,"initialized",!1),(0,o.Z)(this,"sandBox",void 0),(0,o.Z)(this,"useSandBox",!1),(0,o.Z)(this,"cookieMap",void 0),(0,o.Z)(this,"bindState",M.BIND_STATE.UNBOUND),(0,o.Z)(this,"hasLogin",!1),(0,o.Z)(this,"hasLocalData",!1),(0,o.Z)(this,"isLocal",!1),(0,o.Z)(this,"isSpecialAttention",!1),(0,o.Z)(this,"uid",void 0),(0,o.Z)(this,"username",void 0),(0,o.Z)(this,"sex",void 0),(0,o.Z)(this,"sign",void 0),(0,o.Z)(this,"face",void 0),(0,o.Z)(this,"level",void 0),(0,o.Z)(this,"roomId",void 0),(0,o.Z)(this,"emailVerified",void 0),(0,o.Z)(this,"mobileVerified",void 0),(0,o.Z)(this,"specialAttentionUidList",[]),(0,o.Z)(this,"videos",[]),(0,o.Z)(this,"vip",void 0),(0,o.Z)(this,"update",(e,t)=>{r()(e)?l()(e).forEach(t=>{this.update(t,e[t])}):"string"===typeof e&&(e in F&&(e=F[e]),Z.includes(e)&&void 0!==t&&(this[e]=t))}),(0,o.Z)(this,"initBindProgress",()=>{chrome.tabs.create({url:M.URLS.LOGIN},e=>{this.sandBox=new R(this,[e.id],[],{rebind:!1,bindState:M.BIND_STATE.UNBOUND})})}),(0,o.Z)(this,"createTab",()=>{chrome.tabs.create({url:M.URLS.MAIN},e=>{this.addTabs2SandBox(e.id)})}),(0,o.Z)(this,"addTabs2SandBox",(...e)=>{this.sandBox?this.sandBox.addTabs(...e):this.sandBox=new R(this,[...e],new(d())(this.cookieMap),{rebind:!1,bindState:M.BIND_STATE.BOUND})}),(0,o.Z)(this,"saveCookie",()=>{this.cookieMap=u()(this.sandBox.cookieMap.entries()),this.saveAccountData()}),(0,o.Z)(this,"saveAccountData",()=>{this.setStore("default",this)}),(0,o.Z)(this,"getSpaceInfo",e=>new(m())(t=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/space/acc/info?mid="+e,options:{contentType:"json"}},t)}).then(({data:e={}})=>{const{code:t,message:i,data:n}=e;if(0===t){const{mid:e,name:t,sex:i,face:o,sign:a,level:r,live_room:s,vip:l}=n;return{uid:e,username:t,sex:i,face:o,sign:a,level:r,vip:l,roomId:s?+s.roomid:void 0}}return m().reject(i)})),(0,o.Z)(this,"checkLogin",async()=>{const e=await this.getSESSIONDATA(),t=await this.getLocalUID();e&&+t===+this.uid?(this.isLocal=!0,this.hasLogin=!0):(this.isLocal=!1,this.hasLogin=!1)}),(0,o.Z)(this,"completeBind",async()=>{const e=await this.initAccountData(!0);this.update(e),this.rename(j+String(this.uid)),this.saveCookie()}),(0,o.Z)(this,"getLocalUID",async()=>new(m())(e=>{this.emit("cookieController","get",{name:"DedeUserID",url:"https://www.bilibili.com/"},t=>{t?e(t):e()})})),(0,o.Z)(this,"getSESSIONDATA",()=>new(m())(e=>{this.emit("cookieController","get",{name:"SESSDATA",url:"https://www.bilibili.com/"},t=>{t?e(t):e()})})),(0,o.Z)(this,"destroySandBox",()=>{this.sandBox&&this.sandBox.destroy()}),this.uid=t,this.username=i,this.face=a,this.sign=s,this.sex=c,this.vip=p,this.isSpecialAttention=h,this.useSandBox=!!g,"bind"===t)this.bindState=M.BIND_STATE.UNBOUND,this.initBindProgress();else{const e=this.getStore("default");e&&(e.name&&!e.username&&(e.username=e.name,delete e.name),(0,n.Z)(this,e),this.hasLocalData=!0,this.useSandBox&&this.cookieMap&&(this.sandBox=new R(this,[],new(d())(this.cookieMap))))}this.app.accountMap.set(this.name,this)}get expired(){return!this.sandBox||this.sandBox.cookieExpired}async initAccountData(e=!1){if(!this.__initing||e)return this.__initing=!0,await this.checkLogin(),e&&this.getSpaceInfo(this.uid).then(e=>{(0,n.Z)(this,e)}).then(this.saveAccountData).catch(e=>{}),this.initialized=!0,this}async onLaunch(){super.onLaunch(),this.checkLogin()}updateInfoDetails(){}checkExpired(){return this.sandBox.checkCookieValid().then(e=>this.update(e))}toJSON(){return q.reduce((e,t)=>(void 0!==this[t]&&("username"===t&&!this[t]&&this.names.item||(e[t]=this[t])),e),{})}}},26516:(e,t,i)=>{"use strict";i.r(t),i.d(t,{BIND_STATE:()=>n,BLOCK_URLS:()=>r,DISABLED_COOKIE_LIST:()=>s,UNBOUND_STATE:()=>o,URLS:()=>a});const n={UNBOUND:0,BINDING:1,BOUND:2,REBIND:3},o=[n.UNBOUND,n.REBIND],a={LOGIN:"https://passport.bilibili.com/login?gourl=https%3A%2F%2Fpassport.bilibili.com%2F",MAIN:"https://www.bilibili.com/"},r={urls:["*://*.bilibili.com/*"]},s=869==i.j?[]:null},47121:(e,t,i)=>{"use strict";i.r(t),i.d(t,{BilibiliAccountController:()=>n.BilibiliAccountController,BilibiliHelperAccountController:()=>N});var n=i(96656),o=i(26243),a=i.n(o),r=i(62680),s=i.n(r),l=i(95366),c=i.n(l),d=i(6919),h=i.n(d),u=i(93364),p=i.n(u),m=i(26771),g=i.n(m),b=i(33385),f=i(13311),v=i.n(f),y=i(41609),k=i.n(y),w=i(23493),x=i.n(w),S=i(73473),C=i.n(S),L=i(8450),_=i.n(L),I=i(93417),E=i(48903),A=i(47622),D=i(80172);function O(e,t){var i=a()(e);if(s()){var n=s()(e);t&&(n=n.filter((function(t){return c()(e,t).enumerable}))),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach((function(t){(0,b.Z)(e,t,i[t])})):h()?p()(e,h()(i)):O(Object(i)).forEach((function(t){g()(e,t,c()(i,t))}))}return e}const M=new D.ItemErrorFactory("bilibiliHelperAccountController");M.create("notLogin"),M.create("loginFailed"),M.create("getStatusFailed");class N extends I.Controller{constructor(e){super(e,"bilibiliHelperAccountController",{dependencies:["bilibiliAccountController"],settings:{on:!0},cache:{type:"local",dataType:"boolean",delayDuration:0}}),(0,b.Z)(this,"hasLogin",!1),(0,b.Z)(this,"hasRegister",!1),(0,b.Z)(this,"bilibiliAccount",null),(0,b.Z)(this,"needFillPassword",!1),(0,b.Z)(this,"uploadSettingsDuration",1e3),(0,b.Z)(this,"downloadSettingsDuration",2e3),(0,b.Z)(this,"downloadingSettings",!1),(0,b.Z)(this,"needDownloadSettings",!1),(0,b.Z)(this,"settingsNeedUpload",{}),(0,b.Z)(this,"accountDataInitialized",!1),(0,b.Z)(this,"onNetworkOnline",async e=>{e&&(await this.initLocalBilibiliAccount(),await this.checkSettingNeedUpdate(!0))}),(0,b.Z)(this,"onLaunch",async()=>{await this.initLocalBilibiliAccount().then(()=>{this.emit("app","setInitialStatus",{name:"bilibiliHelperAccount",value:!0})})}),(0,b.Z)(this,"getBHAccountState",async()=>{const e=this.bilibiliAccount?this.bilibiliAccount.uid:null,t={query:"query ($blid: BLID!) {\n                        bilibiliHelperAccount {\n                            hasRegister(blid: $blid)\n                            getState {\n                                bhid\n                                boundBlid\n                                email\n                                identities {\n                                    name\n                                    from\n                                    to\n                                    hasDateTimeLimit\n                                }\n                            }\n                        }\n                    }",variables:{blid:+e}};return await this.emit("requestController","createGraphQL",{options:t,retryMax:30,retryDelay:1500},async e=>{const{errors:t,data:i}=e;return this.accountDataInitialized=!0,!(!t&&!i)&&(this.hasRegister=!!i.bilibiliHelperAccount.hasRegister,t&&t.length>0?(this.setStore("default",null),this.bhAccount=null,this.hasLogin=!1,t[0].message):(this.bhAccount=e.data.bilibiliHelperAccount.getState,this.bhAccount.isVIP=(0,E.isVIP)(this.bhAccount),this.bhAccount.isSuperVIP=(0,E.isSuperVIP)(this.bhAccount),this.setStore("default",this.bhAccount),this.hasLogin=!0,this.bhAccount))})}),(0,b.Z)(this,"login",async(e,t,i)=>{const{uid:n,password:o}=e;if(!n||!o)return;const a={query:"mutation ($blid: BLID!, $password: String) {\n                        bilibiliHelperAccount {\n                            login(blid: $blid, password: $password) {\n                                bhid\n                                bhName\n                                email\n                                identities {\n                                    name\n                                    from\n                                    to\n                                    hasDateTimeLimit\n                                }\n                            }\n                        }\n                    }\n                    ",variables:{blid:n,password:e.password}};await this.emit("requestController","createGraphQL",{options:a},async e=>{const{errors:t,data:n}=e;t&&t.length>0?(await this.emit("*","accountChanged",{hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:null}),await this.emit("*","bhAccountChange",{bhAccount:null}),t.forEach(e=>i&&i(e))):e&&n&&(this.bhAccount=n.bilibiliHelperAccount.login,this.bhAccount.isVIP=(0,E.isVIP)(this.bhAccount),this.bhAccount.isSuperVIP=(0,E.isSuperVIP)(this.bhAccount),this.setStore("default",this.bhAccount),this.hasLogin=!0,this.bilibiliAccount&&await this.initLocalBilibiliAccount(),await this.emit("*","accountChanged",{hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:this.bhAccount}),await this.emit("*","bhAccountChange",{bhAccount:this.getStore("default")}),await this.checkSettingNeedUpdate(!1),i&&i({hasLogin:!0,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount.toJSON()}))})}),(0,b.Z)(this,"resetPassword",async(e,t,i)=>{const{uid:n,password:o}=e;if(!n||!o)return;const a={query:"mutation ($blid: BLID!, $password: String!) {\n                      bilibiliHelperAccount {\n                        resetPassword(blid: $blid, password: $password)\n                      }\n                    }",variables:{blid:n,password:o}};await this.emit("requestController","createGraphQL",{options:a},async e=>{const{errors:t,data:n}=e;t&&t.length>0?t.forEach(e=>{switch(e.module){case"BILIBILI_HELPER_ACCOUNT":switch(e.type){case"NO_ACCESS_TO_RESET_PASSWORD":return this.needFillPassword=!0,i&&i("NO_ACCESS_TO_RESET_PASSWORD");case"BIND_ERROR":return this.hasLogin=!1,i&&i("LOGIN_ERROR")}break;default:break}}):e&&n&&i&&i(n.bilibiliHelperAccount.resetPassword)})}),(0,b.Z)(this,"initLocalBilibiliAccount",async()=>(await this.emit("bilibiliAccountController","getLocalAccount",null,e=>{this.bilibiliAccount=e}),await this.getBHAccountState(),await this.emit("*","accountChanged",{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,hasRegister:this.hasRegister}),this.bilibiliAccount)),(0,b.Z)(this,"signOut",async(e,t,i)=>{const n={query:"mutation {\n                      bilibiliHelperAccount {\n                        signOut\n                      }\n                    }"};await this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;t&&t.length>0?i instanceof Function&&i(!1):e&&(this.hasLogin=!1,this.bhAccount=null,await this.emit("*","accountChanged",{hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:this.bhAccount}),await this.emit("*","bhAccountChange",{bhAccount:null}),i instanceof Function&&i(!0))})}),(0,b.Z)(this,"sendCaptchaForBindEmail",(e,t,i)=>{const n={query:"mutation sendCaptchaForBindEmail($email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForBindEmail(email: $email)\n                      }\n                    }",variables:{email:e.email}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})}),(0,b.Z)(this,"validateCaptchaForEmailBind",(e,t,i)=>{const n={query:"mutation validateCaptchaForEmailBind($captcha: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForEmailBind(captcha: $captcha)\n                      }\n                    }",variables:{captcha:e.captcha+""}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):(await this.initLocalBilibiliAccount(),i&&i("\u7ed1\u5b9a\u6210\u529f"))})}),(0,b.Z)(this,"sendCaptchaForChangePassword",(e,t,i)=>{const n={query:"mutation changePassword($email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForChangePassword(email: $email)\n                      }\n                    }",variables:{email:e.email}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})}),(0,b.Z)(this,"validateCaptchaForChangePassword",(e,t,i)=>{const n={query:"mutation changePassword($captcha: String!, $password: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForChangePassword(captcha: $captcha, password: $password)\n                      }\n                    }",variables:{captcha:e.captcha+"",password:e.password}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u4fee\u6539\u6210\u529f")})}),(0,b.Z)(this,"sendCaptchaForSignUp",(e,t,i)=>{const n={query:"mutation signUp($blid: BLID!, $email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForSignUp(blid: $blid, email: $email)\n                      }\n                    }",variables:{blid:e.blid,email:e.email}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})}),(0,b.Z)(this,"validateCaptchaForSignUp",(e,t,i)=>{const n={query:"mutation signUp($blid: BLID!, $email: String!, $captcha: String!, $password: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForSignUp(blid: $blid, email: $email, captcha: $captcha, password: $password)\n                      }\n                    }",variables:{blid:e.blid,email:e.email,captcha:e.captcha+"",password:e.password}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u6ce8\u518c\u6210\u529f")})}),(0,b.Z)(this,"sendCaptchaForResetPassword",(e,t,i)=>{const n={query:"mutation resetPassword($blid: BLID!, $email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForResetPassword(blid: $blid, email: $email)\n                      }\n                    }",variables:{blid:e.blid,email:e.email}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})}),(0,b.Z)(this,"validateCaptchaForResetPassword",(e,t,i)=>{const n={query:"mutation resetPassword($blid: BLID!, $captcha: String!, $password: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForResetPassword(blid: $blid, captcha: $captcha, password: $password)\n                      }\n                    }",variables:{blid:e.blid,captcha:e.captcha+"",password:e.password}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u4fee\u6539\u6210\u529f")})}),(0,b.Z)(this,"queryTradeNoComplete",(e,t,i)=>{const n={query:"query queryTrade ($outTradeNo: String!) {\n                        payment {\n                            queryTradeByOutTradeNo(outTradeNo: $outTradeNo) {\n                                code\n                                sub_msg\n                                sub_code\n                                trade_status\n                            }\n                        }\n                    }",variables:{outTradeNo:e.outTradeNo}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):("10000"===n.payment.queryTradeByOutTradeNo.code&&await this.initLocalBilibiliAccount(),i&&i(T(T({},n.payment.queryTradeByOutTradeNo),{},{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount})))})}),(0,b.Z)(this,"useRedeem",(e,t,i)=>{const n={query:"mutation useRedeem ($code: String!) {\n                        bilibiliHelperAccount {\n                            useRedeem(code: $code)\n                        }\n                    }",variables:{code:e.code}};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):(await this.initLocalBilibiliAccount(),i&&i({message:"\u5151\u6362\u6210\u529f",hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount}))})}),(0,b.Z)(this,"queryOrderAndRedeemList",(e,t,i)=>{const n={query:"query queryOrderList {\n                        bilibiliHelperAccount {\n                            queryOrderList {\n                              redeemList {\n                                active\n                                used\n                                generateType\n                                name\n                                code\n                                days\n                                to\n                                createDateTime\n                              }\n                              orderList {\n                                gmt_create\n                                out_trade_no\n                                total_amount\n                                product_id\n                                duration\n                              }\n                            }\n                        }\n                    }"};this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;return t&&t.length>0?i&&i(t[0].message):i&&i(n.bilibiliHelperAccount.queryOrderList)})}),(0,b.Z)(this,"uploadSettings2Cloud",async(e,t,i)=>{const{featureName:n}=e;this.settingsNeedUpload[n]=await new(C())(e=>this.emit(n,"getSettingsForUpload",null,e)),clearTimeout(this.uploadSettingIntervalNumber),this.uploadSettingIntervalNumber=setTimeout(()=>{const e={query:"mutation ($bhVersion: String!, $modelVersion: Int!, $value: String!) {\n                      bilibiliHelperSetting {\n                        setByFragment(bhVersion: $bhVersion, modelVersion: $modelVersion, value: $value)\n                      }\n                    }\n                    ",variables:_()({bhVersion:A.i8,modelVersion:2,value:_()(this.settingsNeedUpload)})};this.settingsNeedUpload={},this.emit("requestController","createGraphQL",{options:e},async e=>{const{errors:t}=e;t&&t.length>0?i instanceof Function&&i(!1):e&&i instanceof Function&&i(!0)})},this.uploadSettingsDuration)}),(0,b.Z)(this,"checkSESSIONDATA",async e=>new(C())(t=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/web-interface/nav",options:{contentType:"json",credential:"omit",headers:{"bilibili-helper-header-action-set-cookie":e}}},({data:e})=>{t(!!e&&(0===e.code&&e.data.isLogin))})})),(0,b.Z)(this,"modifyReferer",e=>{const{initiator:t,requestHeaders:i}=e,n=!k()(v()(i,({name:e})=>e.match("bilibili-helper-header-action"))),o=[...i];if(n){const e=o.findIndex(({name:e})=>"bilibili-helper-header-action-set-cookie"===e);e>-1&&(o.push({name:"cookie",value:o[e].value}),o.splice(e,1))}return{requestHeaders:o}}),(0,b.Z)(this,"syncSettingsFromCloud",async(e,t=!1)=>{if(this.downloadingSettings&&this.cache.get()&&!(this.cache.get()<e)&&!t)return!1;this.downloadingSettings=!0,e&&this.cache.set(e),this.downloadSettings().then(()=>{this.downloadingSettings=!1})}),(0,b.Z)(this,"downloadSettings",(e,t,i)=>{const n={query:"query ($bhVersion: String!, $modelVersion: Int!) {\n                      bilibiliHelperSetting {\n                        get(bhVersion: $bhVersion, modelVersion: $modelVersion) {\n                            value\n                            bhVersion\n                            modelVersion\n                            lastUpdateTime\n                        }\n                      }\n                    }",variables:_()({bhVersion:A.i8,modelVersion:2})};return this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;t&&t.length>0?i instanceof Function&&i(!1):e&&n&&(i instanceof Function&&i(!0),n.bilibiliHelperSetting.get&&(this.cache.set(n.bilibiliHelperSetting.get.lastUpdateTime),this.emit("app","setSettingsFromCloud",{settings:JSON.parse(n.bilibiliHelperSetting.get.value)})))})}),(0,b.Z)(this,"checkSettingNeedUpdate",async(e=!1)=>{this.needDownloadSettings=!1,this.hasLogin&&await this.getSettingLastUpdateTime().then(t=>{(this.cache.get()!==t||e)&&this.syncSettingsFromCloud(t,e)})}),(0,b.Z)(this,"getSettingLastUpdateTime",async(e,t,i)=>{const n={query:"query ($bhVersion: String!, $modelVersion: Int!) {\n                      bilibiliHelperSetting {\n                        get(bhVersion: $bhVersion, modelVersion: $modelVersion) {\n                            lastUpdateTime\n                        }\n                      }\n                    }",variables:_()({bhVersion:A.i8,modelVersion:2})};return await this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:n}=e;if(t&&t.length>0)i instanceof Function&&i(!1);else if(e&&n){const{lastUpdateTime:e}=n.bilibiliHelperSetting.get||{};return i instanceof Function&&i(e),e}})})}async onInitStore(){const e=this.getStore("default");this.store=e?{hasLogin:!1,bhid:null,blidList:[],identities:[]}:e,this.settingStore=this.getStore("settings")||{}}async onBeforeLaunch(){this.addListener("networkOnlineChange",this.onNetworkOnline),this.addListener("login",this.login),this.addListener("signOut",this.signOut),this.addListener("getStatus",(e,t,i)=>{let n;if(this.accountDataInitialized)return i({hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:this.bhAccount}),clearInterval(n),!0;i(null)}),this.addListener("initBHAccount",(e,t,i)=>{this.initLocalBilibiliAccount().then(()=>{i({hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount})})}),this.addListener("getBHAccount",(e,t,i)=>{i(this.getStore("default"))}),this.addListener("uploadSettings",this.uploadSettings2Cloud),this.addListener("downloadSettings",x()(this.downloadSettings,this.downloadSettingsDuration)),this.addListener("resetPassword",this.resetPassword),this.addListener("allHasLoaded",({firstInstall:e},t,i)=>{this.checkSettingNeedUpdate(e||this.needDownloadSettings),i()}),this.addListener("queryTradeNoComplete",this.queryTradeNoComplete),this.addListener("sendCaptchaForSignUp",this.sendCaptchaForSignUp),this.addListener("validateCaptchaForSignUp",this.validateCaptchaForSignUp),this.addListener("sendCaptchaForBindEmail",this.sendCaptchaForBindEmail),this.addListener("validateCaptchaForEmailBind",this.validateCaptchaForEmailBind),this.addListener("sendCaptchaForChangePassword",this.sendCaptchaForChangePassword),this.addListener("validateCaptchaForChangePassword",this.validateCaptchaForChangePassword),this.addListener("sendCaptchaForResetPassword",this.sendCaptchaForResetPassword),this.addListener("validateCaptchaForResetPassword",this.validateCaptchaForResetPassword),this.addListener("useRedeem",this.useRedeem),this.addListener("queryOrderAndRedeemList",this.queryOrderAndRedeemList),this.addListener("localBilibiliAccountLoginStateChange",async({login:e})=>{e?(await this.initLocalBilibiliAccount(),await this.emit("*","accountChanged",{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,hasRegister:this.hasRegister,downloadingSettings:this.downloadingSettings})):(this.bilibiliAccount=null,await this.emit("*","accountChanged",{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,hasRegister:this.hasRegister,downloadingSettings:this.downloadingSettings}),await this.signOut())})}async onAfterLaunch(){}}},58225:(e,t,i)=>{"use strict";i.d(t,{T:()=>r});var n=i(19755),o=i.n(n),a=i(48903);const r=()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{const{hasLogin:t}=e;e&&chrome.runtime.sendMessage({target:"cvImageDownload",event:"getSetting"},e=>{if(!e.on||!t)return;let i=null;o()(".page-container .img-box > img").wrap('<div class="bilibili-ct-wrapper"></div>');const n=document.createElement("button");n.innerText=(0,a.__)("cvImageDownload_downloadBtn"),o()(document).on("mouseenter",".banner-img-holder",(function(e){e.preventDefault(),i=o()(this)[0].style.backgroundImage.split('"')[1],o()(this).append(n),o()(n).on("click",(function(){i&&chrome.runtime.sendMessage({target:"cvImageDownload",event:"cvDownloadImage",src:i,filename:o()(".title-container h1").text()+"_cover"})}))})),o()(document).on("mouseenter",".bilibili-ct-wrapper",(function(e){e.preventDefault();const t=o()(this).children("img");i="https:"+t.attr("src");const a=/.(jpg|jpeg|gif|webp)/.exec(i);o()(this).append(n),o()(this).css({width:"auto",height:t.height()});let r="",s=o()(this).next("figcaption");s&&(r=s.text()),o()(n).on("click",(function(){i&&chrome.runtime.sendMessage({target:"cvImageDownload",event:"cvDownloadImage",src:i,filename:r||null,extension:a?a[1]:"jpg"})}))})),o()(document).on("mouseleave",".bilibili-ct-wrapper, .banner-img-holder",(function(e){e.preventDefault(),o()(this).children("button").remove()}))})})}},83377:(e,t,i)=>{"use strict";i.d(t,{q:()=>c,J:()=>d});var n=i(33385),o=i(73473),a=i.n(o),r=i(66130),s=i.n(r),l=i(69759);class c extends l.Feature{constructor(e){super(e,"cvImageDownload",{settings:{on:!0}}),(0,n.Z)(this,"getMineStr",e=>{switch(e){case"jpg":case"jpeg":case"webp":return"image/jpeg";case"gif":return"image/gif"}}),(0,n.Z)(this,"getData",(e,t)=>new(a())(i=>{const n=this;this.imageMap[e]?i(this.imageMap[e]):this.image.onload=function(){n.canvas.width=this.width,n.canvas.height=this.height,n.canvas.getContext("2d").drawImage(this,0,0),n.imageMap[e]=n.canvas.toDataURL(t),i(n.imageMap[e])}})),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})}),this.imageMap={},this.canvas=document.createElement("canvas"),this.image=new Image}async onLaunch(){this.addListener("cvDownloadImage",e=>(this.image.src=e.src,chrome.downloads.download({saveAs:!0,url:e.src,filename:(e.filename||s()())+"."+e.extension}),!0))}}class d extends l.Feature{constructor(e){super(e,"removeSelectionLimit",{settings:{on:!0}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},25110:(e,t,i)=>{"use strict";i.d(t,{j:()=>o});var n=i(48903);const o=()=>{chrome.runtime.sendMessage({target:"removeSelectionLimit",event:"getSetting"},e=>{e.on&&(0,n.interval)(".article-holder").then(e=>{e&&e.setAttribute("style","user-select: unset!important")})})}},38574:(e,t,i)=>{"use strict";i.r(t);var n=i(52081),o={};for(const a in n)"default"!==a&&(o[a]=()=>n[a]);i.d(t,o)},69063:(e,t,i)=>{"use strict";i.r(t);var n=i(38574),o={};for(const a in n)"default"!==a&&(o[a]=()=>n[a]);i.d(t,o)},70939:(e,t,i)=>{"use strict";i.d(t,{p:()=>N,L:()=>E});var n=i(26243),o=i.n(n),a=i(62680),r=i.n(a),s=i(95366),l=i.n(s),c=i(6919),d=i.n(c),h=i(93364),u=i.n(h),p=i(26771),m=i.n(p),g=i(33385),b=i(13311),f=i.n(b),v=i(69759),y=i(30381),k=i.n(y),w=i(84564),x=i.n(w),S=i(48903);function C(e,t){var i=o()(e);if(r()){var n=r()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),i.push.apply(i,n)}return i}function L(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?C(Object(i),!0).forEach((function(t){(0,g.Z)(e,t,i[t])})):d()?u()(e,d()(i)):C(Object(i)).forEach((function(t){m()(e,t,l()(i,t))}))}return e}const _={TITLE:e=>e.title,AID:e=>e.aid,CID:e=>e.cid,BVID:e=>e.bvid,QUALITY:e=>e.quality,UPPER:e=>e.owner.name,UID:e=>e.owner.mid,FORMAT:e=>e.format,PN:e=>e.pageNumber,PRE_TITLE:e=>e.preTitle,SUBTITLE:e=>e.subTitle||!1,DATE:e=>e.pubdate?k()(new Date(Number(e.pubdate+"000"))).format("YYYY-MM-DD"):"",TIME:e=>e.pubdate?k()(new Date(Number(e.pubdate+"000"))).format("HH:mm:ss"):"",NOW_DATE:e=>k()().format("YYYY-MM-DD"),NOW_TIME:e=>k()().format("HH:mm:ss"),ROOM_ID:e=>e.roomId,LANG:e=>e.lang},I={videoFilename:"__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",videoCoverFilename:"videoCover-__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",videoScreenshotFilename:"screenshot-__TITLE__.__SUBTITLE__.__CID__.__NOW_DATE__ __NOW_TIME__.__FORMAT__",videoDanmuFilename:"__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",audioFilename:"__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",liveScreenshotFilename:"liveScreenshot-__TITLE__.__NOW_DATE__ __NOW_TIME__.__FORMAT__",subtitleFilename:"__TITLE__.__CID__.__LANG__.__FORMAT__"};class E extends v.Feature{constructor(e){super(e,"renameDownloadFile",{settings:L({on:!0},I)}),(0,g.Z)(this,"downloadFilenames",{}),(0,g.Z)(this,"reset",()=>{this.settings=L(L({},this.settings),I),this.setStore("shortcuts",this.settings)}),(0,g.Z)(this,"videoRenameCallback",(0,S.webRequestCallbackWrapper)(e=>{const{initiator:t,responseHeaders:i,url:n}=e;if(/^chrome-extension:\/\//.test(t))return;const o=new(x())(n,"",!0),{query:a}=o;if(!a||!a.requestFrom)return{responseHeaders:i};const r=this.downloadFilenames[o.pathname];if(r){delete this.downloadFilenames[o.pathname];const e=this.generateFilename("video",r),t=f()(i,e=>"content-disposition"===e.name.toLowerCase()),n=`attachment; filename="${e}"; filename*="utf-8' '${e}"`.replace("/","%2f");t?t.value=n:i.push({name:"Content-Disposition",value:n})}return{responseHeaders:i}})),(0,g.Z)(this,"audioRenameCallback",(0,S.webRequestCallbackWrapper)(e=>{const{initiator:t,responseHeaders:i,url:n}=e;if(/^chrome-extension:\/\//.test(t))return;const o=new(x())(n,"",!0),{query:a}=o;if(!a||!a.requestFrom)return{responseHeaders:i};const r=this.downloadFilenames[o.pathname];if(r){delete this.downloadFilenames[o.pathname];const e=this.generateFilename("audio",r),t=f()(i,e=>"content-disposition"===e.name.toLowerCase()),n=`attachment; filename="${e}"; filename*="utf-8' '${e}"`;t?t.value=n:i.push({name:"Content-Disposition",value:n})}return{responseHeaders:i}})),(0,g.Z)(this,"generateFilename",(e,t)=>{let i=this.settings[e+"Filename"];const n=[...i.matchAll("__.+?__")].flat();return n.forEach(e=>{const n=e.slice(2,-2);if(_[n]){const o=_[n](t);i=i.replace(e,o||"")}}),(0,S.ToCDB)(i.replace(/\s/g,"_")).replace(/[\\/:*?"<>|]/g,"_")}),(0,g.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}onAfterSetSetting(e,t){this.emit("*","renameSettingChange",this.settings)}async onBHAccountChange(){this.bhAccount&&(0,S.isVIP)(this.bhAccount)||this.reset()}async onBeforeLaunch(){this.addListener("sendVideoFilename",(e,t,i)=>{const n=new(x())(e.url,"",!0);this.downloadFilenames[n.pathname]=e,i()}),this.addListener("renameFileName",(e,t,i)=>{const{type:n,data:o,pathname:a}=e,r=this.settings[n+"Filename"];if(r){if(o){const e=this.generateFilename(n,o);i(e)}else if(!o&&a){const e=this.downloadFilenames[a];if(e){const t=this.generateFilename(n,e);i(t)}else i(!1)}}else i(!1)})}async onLaunch(){this.emit("webRequestController","create",{name:"videoDownloadFlvRenameFilename",eventName:"onHeadersReceived",filter:{urls:["*://*.bilivideo.com/upgcxcode/**/*.*?*","*://*.mcdn.bilivideo.cn:*/upgcxcode/**/*.*?*"]},options:["responseHeaders","blocking"],callback:this.videoRenameCallback}),this.emit("webRequestController","create",{name:"videoDownloadAudioRenameFilename",eventName:"onHeadersReceived",filter:{urls:["*://*.bilivideo.com/upgcxcode/**/*.m4s?*"]},options:["responseHeaders","blocking"],callback:this.audioRenameCallback})}}var A=i(8450),D=i.n(A),O=i(66130),T=i.n(O);const M=[];class N extends v.Feature{constructor(e){super(e,"aria2c",{settings:{on:!1,host:"localhost",port:"6800",path:"/jsonrpc",secret:"",protocol:"http"}}),(0,g.Z)(this,"__messageId",0),(0,g.Z)(this,"__connected",!1),(0,g.Z)(this,"ws",null),(0,g.Z)(this,"downloadFilenames",{}),(0,g.Z)(this,"getGlobalStat",async(e,t,i)=>{await this.send("aria2.getGlobalStat",["token:"+this.settings.secret])}),(0,g.Z)(this,"wrapMessage",(e,t)=>({method:e,"json-rpc":"2.0",id:this.messageId,params:t})),(0,g.Z)(this,"initWs",()=>{this.ws=new WebSocket(this.url),this.ws.onclose=(...e)=>{},this.ws.onmessage=e=>{const t=JSON.parse(e.data);if(this.__connected=!0,t.result&&M.push(t.result),t.method&&t.params){const e=t.params.filter(e=>M.includes(e));if(e)switch(t.method){case"aria2.onDownloadStart":this.emit("notificationController","post",{title:"\u89c6\u9891\u5df2\u5f00\u59cb\u4e0b\u8f7d",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadComplete":this.emit("notificationController","post",{title:"\u89c6\u9891\u5df2\u4e0b\u8f7d\u5b8c\u6bd5",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadPause":this.emit("notificationController","post",{title:"\u89c6\u9891\u4e0b\u8f7d\u5df2\u6682\u505c",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadStop":this.emit("notificationController","post",{title:"\u89c6\u9891\u4e0b\u8f7d\u5df2\u7ec8\u6b62",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadError":this.emit("notificationController","post",{title:"\u89c6\u9891\u4e0b\u8f7d\u51fa\u9519",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break}}},this.ws.onopen=(...e)=>{this.connectedTest()},this.ws.onerror=(...e)=>{this.emit("notificationController","post",{title:"aria2c RPC \u8fde\u63a5\u5931\u8d25",tag:"aria2c connect failed"})}}),(0,g.Z)(this,"closeWs",async()=>{this.ws&&await this.ws.close(),this.ws=null}),(0,g.Z)(this,"send",async(e,t)=>{const i=this.wrapMessage(e,t);this.useWs?await this.sendByWs(i):await this.sendByHttp(i)}),(0,g.Z)(this,"sendByHttp",async e=>{fetch(this.url,{method:"post",body:D()(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>(e.error?this.emit("notificationController","post",{title:"aria2c RPC Error"+e.error.message,tag:"aria2c"+e.error.id+T()()}):this.__connected=!0,e)).catch(e=>{this.emit("notificationController","post",{title:"aria2c RPC \u8fde\u63a5\u5931\u8d25",tag:"aria2c connect failed"})})}),(0,g.Z)(this,"sendByWs",async e=>{await this.ws.send(D()(e))}),(0,g.Z)(this,"connectedTest",async()=>{await this.getGlobalStat()}),(0,g.Z)(this,"download",async(e,t,i)=>{if(!this.settings.on||!this.__connected)return this.emit("notificationController","post",{title:"Aria2c \u8c03\u7528\u5931\u8d25\u6216\u672a\u8fde\u63a5",tag:"aria2c connected failed"+T()()});if(this.bhAccount&&((0,S.isVIP)(this.bhAccount)||(0,S.isSuperVIP)(this.bhAccount))){const t=new(x())(e.uri),i=await this.emit("renameDownloadFile","renameFileName",{type:"video",pathname:t.pathname});await this.send("aria2.addUri",["token:"+this.settings.secret,[e.uri],{out:i,header:["referer: https://www.bilibili.com"]}])}else this.emit("notificationController","post",{title:"Aria2c\uff1a\u5f00\u901a\u52a9\u624b\u4f1a\u5458\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd",tag:"aria2c no vip"+T()()});i()}),(0,g.Z)(this,"onAfterSetSettingsFromCloud",async()=>{this.isVIP||(this.settings.on=!1,await this.closeWs())}),(0,g.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})}),window.aria2c=this}get url(){let e=this.settings.protocol+"://"+this.settings.host;return this.settings.port&&(e+=":"+this.settings.port),e+this.settings.path}get messageId(){return++this.__messageId}get useWs(){return["ws","wss"].includes(this.settings.protocol)}async onAfterSetSetting(e,t){this.settings.on?(await this.closeWs(),this.useWs?await this.initWs():await this.connectedTest()):await this.closeWs()}async onBeforeLaunch(){this.settings.on&&(this.useWs?await this.initWs():await this.connectedTest())}async onLaunch(){this.addListener("getConnectedStat",(e,t,i)=>i(this.__connected)),this.addListener("getGlobalStat",this.getGlobalStat),this.addListener("download",this.download)}}},35867:(e,t,i)=>{"use strict";i.d(t,{$9:()=>K,PF:()=>U,nr:()=>J,A3:()=>j,pE:()=>F,cJ:()=>q,Ue:()=>Y,gX:()=>W,NO:()=>$,cE:()=>H,Fp:()=>V,bF:()=>X,ZN:()=>z,ch:()=>Q,_l:()=>G});var n=i(33385),o=i(27921),a=i.n(o),r=i(67294),s=i(48903),l=i(60677),c=i(71338),d=i(48950);const h=l.createGlobalStyle`
  html {
    --dark-0: #101010;
    --dark-1: #141414;
    --dark-2: #131313;
    --dark-3: #1f1f1f;
    --dark-4: #2b2b2b;
    --dark-5: #333333;
    --dark-6: #393939;
    --dark-card: #151515;

    --bg: #1c2022;
    --divider: rgb(47 47 47 / 75%);

    --dark-font-0: #e8e8e8;
    --dark-font-1: #99a2aa;
    --dark-font-2: #879199;
    --dark-font-3: #d9d9d9;
  }

  :root {
    ${c.p};
  }

  body.bilibili-helper-dark-mode {
    background-color: var(--bg) !important;
    color: var(--dark-font-0)!important;
  }
`,u=l.createGlobalStyle`
  .international-header .mini-type, .mini-header {
    background: var(--dark-card) !important;
  }

  .nav-link .nav-link-ul .nav-link-item .link,
  .nav-user-center .user-con .item .name {
    color: var(--dark-font-0) !important;
  }
`,p=l.createGlobalStyle`
  // 搜索框
  .international-header .nav-search #nav_searchform {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    input:focus {
      color: var(--dark-font-0) !important;
    }

    .nav-search-btn {
      background: var(--dark-4) !important;
    }
  }

  .international-header .nav-search-box {
    .header-search-suggest {
      border-color: var(--dark-1) !important;
      background: var(--dark-3) !important;
      color: var(--dark-font-2) !important;

      .trending-item {
        :hover {
          background-color: var(--dark-3) !important;
        }
      }

      .rank.top, .rank.search-rank-top {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .i-frame {
    &::before {
      background-color: var(--bg) !important;
    }

    iframe {
      background-color: unset !important;
    }
  }

  .bilibili-search-history, .bilibili-search-suggest {
    background: var(--dark-card) !important;
    border-color: var(--dark-card) !important;

    li {
      &:hover, &.focus {
        background-color: var(--dark-3) !important;
      }

      a {
        color: var(--dark-font-0) !important;
      }
    }
  }

  //弹出Popper
  .channel-menu-mini, .van-popper-avatar, .van-popper-avatar .level-intro, .van-popper-avatar .coins .info .login-award, .van-popper-avatar .lang-change .lang-intro,
  .van-popper-vip, .van-popper-favorite, .van-popper-favorite .view-all, .van-popper-favorite .play-all, .van-popper-history, .van-popper-upload {
    background-color: var(--dark-3) !important;
  }

  //文字 轻
  .van-popper-avatar .level-info .progress, .van-popper-avatar .count-item .item-key,
  .van-popper-favorite .tab-item--normal, .van-popper-favorite .tab-item--normal .num, .van-popper-favorite .empty-list,
  .header-video-card .video-info .info,
  .header-video-card .video-info .desc,
  .van-popper-history .tab-item,
  .van-popper-history .date-title {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .van-popover a,
  .van-popper-avatar .level-info .grade, .van-popper-avatar .level-intro, .van-popper-avatar .coins,
  .van-popper-avatar .lang-change .lang-title, .van-popper-avatar .count-item .item-value, .van-popper-avatar .links .link-title,
  .van-popper-avatar .lang-change .lang-intro, .van-popper-avatar .logout, .van-popper-avatar .logout span:hover,
  .van-popper-avatar .nickname,
  .van-popper-avatar .coins .contact-tips,
  .vip-m .bubble-traditional .recommand .title,
  .van-popper-favorite .view-all, .van-popper-favorite .play-all,
  .header-video-card .video-info .line-1,
  .header-video-card .video-info .line-2,
  .van-popper-history .tab-item.tab-item--active,
  .van-popper-history .tab-item.tab-item--active:hover {
    color: var(--dark-font-0) !important;
  }

  //框线
  .van-popper-avatar .coins,
  .van-popper-avatar .counts,
  .van-popper-avatar .links,
  .van-popper-avatar .lang-change,
  .channel-menu-mini .r-box,
  .van-popper-favorite .tabs-panel,
  .van-popper-favorite .play-all,
  .van-popper-history .tab-header {
    border-color: var(--divider) !important;
  }

  //hover蓝
  .van-popover a:hover,
  .van-popper-avatar .coins .info a:hover,
  .van-popper-avatar .counts .count-item:hover .item-key,
  .van-popper-avatar .counts .count-item:hover .item-value .item-num,
  .van-popper-avatar .level-intro__link,
  .van-popper-history .tab-item:hover {
    color: #00A1D6 !important;
  }

  //hover深
  .channel-menu-mini .box a:hover,
  .van-popper-avatar .links .link-item:hover,
  .van-popper-avatar .logout a:hover,
  .van-popper-avatar .lang-change .lang-item:hover,
  .van-popper-avatar .lang-change .lang-intro-item:hover,
  .van-popper-avatar .logout span:hover,
  .van-popper-favorite .tab-item--normal:hover,
  .van-popper-favorite .view-all:hover,
  .van-popper-favorite .play-all:hover,
  .header-video-card:hover,
  .van-popper-upload .upload-item:hover {
    background: var(--dark-2) !important;
  }

  //经验条
  .van-popper-avatar .level-bar {
    background: var(--dark-0) !important;
  }

  //Card顶上的小尖尖
  .van-popper-vip, .van-popper-favorite, .van-popper-history, .van-popper-upload, .popover-app-download {
    .popper__arrow, .popper__arrow::after {
      border-bottom-color: var(--dark-3) !important;
    }
  }

  //下载App
  .popover-app-download {
    background: url(${(0,d.Ax)("/statics/imgs/app-download.png")}) !important;
    background-size: cover !important;

    .txt {
      color: var(--dark-font-0) !important;
    }
  }

  //历史查看更多
  .van-popper-history .view-all {
    background: var(--dark-5) !important;
  }

  //邮箱、手机绑定的悬浮提示框
  .van-popper-avatar .coins .contact-tips {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;
    //箭头
    &::after {
      transform: rotate(45deg);
      background: var(--dark-5) !important;
    }

    &.email-tips::after {
      right: -5px !important;
    }

    &.phone-tips::after {
      left: -5px !important;
    }
  }
`,m=l.createGlobalStyle`
  .international-footer {
    background-color: var(--bg) !important;

    .link-box .link-item {
      border-color: var(--divider);

      .bt {
        color: var(--dark-font-2);
      }
    }

    .link-box .link-item.link-c p, .link-box .link-item.link-c a.weixin:hover p,
    a, .partner, .partner a {
      color: var(--dark-font-0);
    }
  }
`,g=l.createGlobalStyle`
  .bili-footer {
    .footer-wrp {
      background-color: var(--bg) !important;
      padding-bottom: 70px !important;
    }

    .boston-postcards li {
      border-color: var(--divider);

      .tips {
        color: var(--dark-font-2);
      }
    }

    a {
      color: var(--dark-font-0);
    }

    .partner a:hover {
      color: #00a1d6 !important;
    }
  }
`,b=l.createGlobalStyle`
  .user-card, .user-card-m, .userinfo-content {
    background: var(--dark-3) !important;

    .face {
      border-color: var(--dark-3) !important;
    }

    .btn-box {
      a.like {
        color: #fff !important;
        border-color: #00a1d6 !important;
        background-color: #00a1d6 !important;
      }

      a.like:hover {
        border-color: #00b5e5 !important;
        background-color: #00b5e5 !important;
      }

      a, a.liked {
        background: var(--dark-5) !important;
        color: var(--dark-font-1) !important;
        border-color: var(--dark-5) !important;

        &:hover {
          background: var(--dark-4) !important;
        }
      }
    }

    .info {
      .user .name, .social {
        color: var(--dark-font-1) !important;

        &.vip, &.vip-red-name {
          color: #fb7299 !important;
        }

        &:hover {
          color: #00A1D6 !important;
        }
      }

      .social a, .sign {
        color: var(--dark-font-1) !important;
      }
    }
  }

  .user-card, .user-card-m, .userinfo-wrapper {
    border-color: var(--dark-3) !important;
  }

  .user-card-m .loading div {
    background: var(--dark-3) !important;
  }

  .nameplate-card {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .nameplate-text {
      border-color: var(--dark-1) !important;

      .n-name, .n-title {
        color: var(--dark-font-0) !important;
      }
    }
  }
`,f="\n    .international-header a {\n      color: var(--dark-font-0);\n    }\n    .tab-line-itnl {\n      border-color: var(--divider)!important;\n    }\n    .page-tab .con li {\n      border-color: var(--bg)!important;\n    }\n    .van-popover.van-popper-channel {\n      background: var(--dark-2)!important;\n      border-color: var(--dark-2)!important;\n      .popper__arrow, .popper__arrow::after {\n        border-top-color: var(--dark-2)!important;\n        border-bottom-color: var(--dark-2)!important;\n      }\n    }\n    .bili-banner .taper-line {\n      z-index: 2!important;\n      height: 180px!important;\n    }\n    ",v="\n    .b-head {\n      color: var(--dark-font-3)!important;\n    }\n    .bb-comment {\n      background-color: unset!important;\n      .comment-header {\n        border-color: var(--divider)!important;\n        .tabs-order li:not(.on):not(:hover) {\n          color: var(--dark-font-3)!important;\n        }\n      }\n      .comment-send .comment-emoji {\n        border: 1px solid var(--dark-3);\n        background-color: var(--dark-3);\n      }\n      .comment-list .list-item {\n        .user-face .hot-follow .follow-btn.followed {\n          background-color: var(--dark-5);\n          color: var(--dark-font-2);\n        }\n        .con {\n          border-color: var(--divider)!important;\n          .user .name {\n            color: var(--dark-font-1);\n          }\n          .text, div .text-area .text-content {\n            color: var(--dark-font-3);\n          }\n          .vote-container {\n            border-color: var(--dark-4)!important;\n            &:hover .text-area {\n              box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n            }\n          }\n          .info {\n            .reply:hover {\n              background: var(--dark-1);\n            }\n            .reply-tags span {\n              background-color: var(--dark-1) !important;\n              color: var(--dark-font-1) !important;\n            }\n            .operation .opera-list {\n              background-color: var(--dark-3);\n              color: var(--dark-font-0);\n              li:hover {\n                background-color: var(--dark-2);\n              }\n            }\n          }\n          .reply-box {\n            .reply-item {\n              border-color: var(--dark-4);\n              .reply-con {\n                .user .text-con {\n                  color: var(--dark-font-0);\n                }\n                .info .reply:hover {\n                  background: var(--dark-1);\n                }\n              }\n            }\n            .view-more {\n              color: var(--dark-font-1);\n              .btn-more:hover {\n                background: var(--dark-1);\n              }\n            }\n          }\n        }\n      }\n      .bottom-page.center {\n        border-color: var(--dark-2)!important;\n      }\n      .paging-box {\n        span.result, span.dian {\n          color: var(--dark-font-1);\n        }\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          &:hover {\n            color: #00a1d6;\n          }\n        }\n      }\n      .paging-box-big {\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          background-color: var(--dark-2);\n          border-color: var(--dark-3);\n          &:hover {\n            color: white;\n            background-color: #00a1d6;\n            border-color: var(--dark-3);\n          }\n        }\n        .dian, .dian:hover {\n          color: var(--dark-font-1);\n          background-color: var(--bg);\n          border-color: var(--bg);\n        }\n        .page-jump {\n          input {\n            border-color: var(--dark-3);\n            background-color: var(--dark-2);\n            color: white;\n          }\n        }\n      }\n    }\n    .textarea-container {\n      textarea {\n        background-color: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n        color: var(--dark-font-1)!important;\n      }\n      &:hover textarea, &.focus textarea {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .emoji-box {\n      background: var(--dark-3)!important;\n      border-color: var(--dark-3)!important;\n      box-shadow: 0 11px 12px 0 var(--dark-1)!important;\n      &:before {\n        background: unset!important;\n      }\n      .emoji-text {\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-text:hover {\n        background-color: var(--dark-5)!important;\n      }\n      .emoji-notice {\n        background-color: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-tabs {\n        background: var(--dark-4)!important;\n        .tab-link.on {\n          background: var(--dark-3)!important;\n        }\n        .tab-link:hover {\n          background: var(--dark-5)!important;\n        }\n        .emoji-tab-slider {\n          .prev {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow.svg)!important;\n          }\n          .next {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow.svg)!important;\n          }\n          .prev.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow-disable.svg)!important;\n          }\n          .next.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow-disable.svg)!important;\n          }\n        }\n      }\n    }\n    ",y=`\n    //\u6587\u5b57\n    .text-area .view-danmaku {\n      color: var(--dark-font-2)!important;\n    }\n    \n    .text-area .content,\n    .bili-dyn-card-video__title,\n    .bili-dyn-card-pgc__title,\n    .imagesbox .boost-control li,\n    .text-box .count-box  .text,\n    .bili-dyn-card-article__desc,\n    .item-detail .text,\n    .desc,\n    .bili-rich-text__content {\n      color: var(--dark-font-1)!important;\n    }\n    \n    .text-area .title,\n    .user-name,\n    .user-name a,\n    .text-box .title,\n    .bili-dyn-card-article__title,\n    .bili-dyn-card-live__title,\n    .bili-dyn-title__text,\n    .dyn-vote__detail__title,\n    .vote-title, // \u62bd\u5956\u6807\u9898\n    .dyn-additional-common__detail__title,\n    .dyn-goods__one__detail__name {\n      color: var(--dark-font-0)!important;\n    }\n    \n    .user-name.big-vip a {\n      color: #fb7299!important;\n    }\n    \n    .imagesbox .boost-control li:hover {\n      color: #23ade5!important;\n    }\n    \n    .video-container.can-hover:hover .text-area .title,\n    .bili-dyn-card-video:hover .bili-dyn-card-video__body .bili-dyn-card-video__title,\n    .bili-dyn-card-pgc:hover .bili-dyn-card-pgc__body .bili-dyn-card-pgc__title,\n    .bangumi-container.can-hover:hover .text-area .title,\n    .article-container:hover .text-area .title,\n    .bili-dyn-card-article:hover .bili-dyn-card-article__title,\n    .vote-container:hover .text-area .text-content {\n      color: #00a1d6!important;\n    }\n    \n    .dynamic-link-hover-bg:hover {\n      background: var(--dark-4)!important;\n    }\n    \n    //\u5173\u6ce8\u7684\u4eba\u70b9\u8d5e\n    .like-users-panel::before {\n      background: var(--dark-1)!important;\n    }\n    .like-users-panel {\n      color: var(--dark-font-2)!important;\n      .users-box {\n        color: var(--dark-font-1)!important;\n      }\n    }\n    .users-box .like-users-list:link, .users-box .like-users-list:visited {\n      color: var(--dark-font-1);\n    }\n    \n    //Card\u6309\u94ae\n    .card .more-panel, .bili-dyn-item__more .bili-popover {\n      background: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      -webkit-box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      .bili-dyn-more__menu {\n        color: var(--dark-font-0)!important;\n      }\n      &:after, .bili-popover__arrow {\n        background: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n      }\n    }\n    \n    //\u89c6\u9891Card, \u756a\u5267Card, \u6587\u7ae0Card, \u6536\u85cfCard\n    .video-container,\n    .bangumi-container,\n    .article-container,\n    .bili-dyn-card-article,\n    .live-container,\n    .media-list .content,\n    .bili-dyn-card-video, .bili-dyn-card-video__body,\n    .bili-dyn-card-live, .bili-dyn-card-live__body,\n    .bili-dyn-card-pgc,\n    .bili-dyn-content__orig__major,\n    .bili-dyn-card-pgc__body {\n      border-color: var(--dark-3)!important;\n      background: var(--dark-card)!important;\n    }\n    \n    // \u62bd\u5956\n    .bili-popup__wrap {\n      background-color: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      .bili-popup__header {\n        border-color: var(--dark-2)!important;\n      }\n      .bili-popup__header__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    #bp-app {\n      background-color: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      .result, .result-wrapper {\n        background-color: var(--dark-3) !important;\n        .prize-winner-block {\n          background-color: var(--dark-3) !important;\n        }\n        .row {\n          background-color: var(--dark-3)!important;\n          ::after {\n            border-color: var(--dark-3)!important;\n          }\n        }\n      }\n    }\n\n    // \u62bd\u5956\n    .vote-info-wrapper {\n      .vote-creator {\n        .vote-user-name {\n          color: var(--dark-font-0)!important;\n        }\n      }\n    }\n    .vote-options {\n      .option-li {\n        border-color: var(--dark-6)!important;\n      }\n    }\n    \n    //\u8f6c\u53d1Card\n    .repost, .reference {\n      background: var(--dark-3)!important;\n      .deleted {\n        background: unset!important;\n      }\n    }\n    \n    // \u6295\u7968\n    .dyn-vote {\n      border-color: var(--dark-2)!important;\n      .dyn-vote__cover {\n        background-color: rgb(27 27 27)!important;\n      }\n      .dyn-vote__body {\n        background-color: var(--dark-2)!important;\n        :hover {\n              box-shadow: 0 3px 10px 0 var(--dark-2)!important;\n        }\n      }\n    }\n    \n    //\u56fe\u7247\u9884\u89c8Card\n    .imagesbox .boost-control, .imagesbox .boost-img {\n      background: var(--dark-3)!important;\n    }\n    \n    //\u6d3b\u52a8Card, \u6295\u7968Card, \u97f3\u4e50Card\n    .h5share-container, .vote-container, .music-container {\n      border-color: var(--dark-3)!important;\n    }\n    \n    //\u6536\u85cfCard\u56fe\u7247\u80cc\u666f\n    .media-list .content .cover-box {\n      background: var(--dark-card)!important;\n    }\n    \n    //Card\u9634\u5f71\n    .article-container:hover, .vote-container:hover, .h5share-container:hover, .music-container:hover {\n      .text-area {\n        -webkit-box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n        box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n      }\n    }\n    \n    //\u76f8\u5173\u4f5c\u54c1\n    .shop-panel {\n      .shop-list {\n        background: var(--dark-3)!important;\n      }\n    }\n    .dyn-reserve__card,\n    .dyn-goods__wrap {\n      background-color: var(--dark-card)!important;\n      .dyn-reserve__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    .bili-dyn-content__forw__additional {\n      .dyn-vote {\n        border-color: var(--dark-card)!important;\n        .dyn-vote__body {\n          background-color: var(--dark-3)!important;\n        }\n      }\n    }\n    .bili-dyn-list__item {\n      .bili-dyn-content__orig__additional {\n        .dyn-additional-common__wrap {\n          background-color: var(--dark-3)!important;\n        }\n      }\n    }\n    \n    \n    //\u8868\u60c5\u6309\u94ae\n    .comm-emoji {\n      border-color:  var(--dark-1)!important;\n      background-color: var(--dark-1)!important;\n    }\n    \n    //\u8bc4\u8bba\u8f6c\u53d1\n    .panel-area {\n      .forw-area {\n        background-color: unset!important;\n      }\n      ${v}\n    }\n    \n    //\u5f39\u51fa\u6846\n    .bp-popup-panel {\n      background: var(--dark-4)!important;\n      .title-ctnr .popup-title, .popup-content-ctnr {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .dynamic-list-item-wrap, .forw-more {\n      border-color: var(--dark-2)!important;\n    }\n    \n    //\u5c55\u5f00\u76f8\u5173\u52a8\u6001 \n    .fold-box {\n      border-color: var(--divider)!important;\n    }\n    .bili-modal {\n      background-color: var(--dark-1)!important;\n      .bili-modal__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    `,k=l.css`
  // 导航条
  .bili-header__bar .slide-down {
    
  }
`,w=l.createGlobalStyle`
  ${f}
  .home-slide .item, .card-pic a, .video-card-reco, .pic {
    &:before {
      z-index: 1;
    }
  }

  .video-card-common .card-pic a .count, .live-card .pic .count {
    z-index: 1;
    color: var(--dark-font-0);
  }

  .first-screen img, .storey-box img {
    filter: contrast(0.93) brightness(0.89);
  }

  a, .storey-title .no-link, .manga-panel .manga-list-box .manga-card .manga-title, .rank-header .name {
    color: var(--dark-font-0);
  }

  body, .storey-title .text-info, .storey-title .text-info a, .live-card .up .txt .desc {
    color: var(--dark-font-1);
  }

  .rank-wrap .number, .pgc-rank-wrap .number, .manga-rank-item .rank-number {
    background: var(--dark-4);
  }

  //按钮
  .bypb-window .online {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
  }

  .exchange-btn .btn, .rank-header .more {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-1);

    &:hover {
      background: var(--dark-5) !important;
    }
  }

  .time-line .tl-link {
    background: var(--dark-5);
  }

  //联系客服
  .contact-help {
    background: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
    box-shadow: 0 6px 10px 0 var(--dark-2) !important;
    color: var(--dark-font-1) !important;
  }

  //电梯
  .elevator {
    .ear {
      color: var(--dark-4);
    }

    .list-box {
      background: var(--dark-4) !important;
      border-color: var(--dark-6) !important;

      .item {
        background: var(--dark-4);
        color: var(--dark-font-0);

        &.sort, &.back-top {
          border-color: var(--dark-6) !important;
        }
      }
    }
  }

  ${k}
`,x=l.createGlobalStyle`
  ${f}
  html {
    background: unset !important;
    color: var(--dark-font-0);
  }

  .watch-later-list header {
    .s-btn {
      background: var(--bg);
    }

    .d-btn {
      background: var(--bg);
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }

  .watch-later-list .list-box .av-item .av-about {
    border-color: var(--divider) !important;

    .t {
      color: var(--dark-font-0);
    }

    .info .user {
      color: var(--dark-font-1);
    }
  }

  .bili-dialog {
    color: unset !important;

    header {
      border-color: var(--dark-1) !important;
    }

    .con {
      background: var(--dark-3) !important;

      .btn-cancel {
        background-color: var(--dark-5) !important;

        &:not(:hover) {
          color: var(--dark-font-1) !important;
          border-color: var(--dark-5) !important;
        }
      }
    }
  }
`,S=l.createGlobalStyle`
  .history-wrap .b-head {
    .b-head-t {
      color: var(--dark-font-0);
    }

    .history-btn .btn {
      border-color: #00a1d6 !important;
    }
  }
  .b-head-search_input {
    background: initial;
    color: var(--dark-font-0);
  }

  .history-list {
    .l-info {
      border-color: var(--dark-6);

      .lastplay-time .history-red-round {
        border-color: transparent var(--dark-6) transparent;
      }
    }

    .r-info {
      background: unset !important;

      .r-txt {
        border-color: var(--divider) !important;

        .title:not(:hover) {
          color: var(--dark-font-0);
        }

        .username {
          color: var(--dark-font-1);
        }
      }
    }
  }

  .history-dlg {
    background-color: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .dlg-txt {
      color: var(--dark-font-0) !important;
    }

    .cancel {
      height: 32px !important;
      background-color: var(--dark-5) !important;

      &:not(:hover) {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-5) !important;
      }
    }
  }

  .go-top-m .go-top {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }
  
  .bili-header .slide-down {
    box-shadow: inset 0 -1px var(--bg) !important;
  }
`,C=l.createGlobalStyle`
    //底层背景
    #app, #app:before, .fixed-bg, #app > .bg {
      background: none!important;
    }
    
    //所有Card背景
    .user-panel, .live-panel, .section-block, .bili-dyn-publishing, .publish-panel,
    .core-style, .bili-rich-textarea__inner, .most-viewed-panel, .bili-dyn-up-list,
    .tab-bar, .bili-dyn-list-tabs, .card, .notice-panel, .new-topic-panel, .bili-dyn-banner,
    .bili-dyn-my-info, .bili-dyn-live-users,
    .feed-topic .publish-panel-container, .feed-topic .empty-content, .topic-panel,
    .sticky-bar, .bili-dyn-item {
      background: var(--dark-card)!important;
    }
    
    //特殊背景
    .bg-white {
      background: var(--dark-card)!important;
    }
    
    .live-panel-item .live-up-img {
      background-color: var(--dark-card)!important;
      border-color: var(--dark-3)!important;
    }
    
    .notice-panel .img-container .notice-img {
      background-color: var(--dark-card)!important;
    }
    
    //文字 轻
    .tc-slate, .text-content, .time, .live-name, .count, .dynamic-repost, .shop-desc .desc-box .sub-title {
      color: var(--dark-font-2)!important;
    }
    
    //文字 中
    .most-viewed-item .name, .tag-item .label, .shop-panel .panel-desc {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    .tc-black, .numbers,
    .up-name,
    .bili-dyn-live-users__item__uname,
    .text .content,
    .tag-item .content,
    .item-detail .text, .core-style,
    .shop-desc .desc-box .title,
    .bili-dyn-my-info__name,
    .bili-dyn-my-info__stat__item__count,
    .bili-dyn-live-users__title,
    .bili-dyn-banner__title,
    .bili-rich-textarea__inner,
    .bili-dyn-card-music__title
    {
      color: var(--dark-font-0)!important;
    }
    
    //hover蓝
    .more-button .more:hover,
    .most-viewed-panel .list-content .most-viewed-item .name.active,
    .most-viewed-panel .list-content .most-viewed-item:hover .name,
    .tab-bar .tab .tab-text.selected,
    .tab-bar .tab .tab-text:hover {
      color: #00b5e5!important;
    }
    
    .user-panel .content .bottom .number-part:hover .numbers,
    
    .new-topic-panel .tag-item .content:hover {
      color: #00a1d6!important;
    }
    
    //输入框
    .hash-popup {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      .topic-container .item.is-selected {
        background: var(--dark-2)!important;
      }
    }
    .bili-dyn-up-list__item__face {
      border-color: var(--dark-0)!important;
      box-shadow: 0 0 0 1px var(--dark-5)!important;
    } 

    // 新话题
    .bili-topic-selector {
      .bili-topic-selector__bulletin {
        background-color: var(--dark-card)!important;
        .bili-topic-item__normal:hover {
          background-color: var(--dark-card)!important;
        }
      }
    }
    .bili-topic-search__popover {
      background-color: var(--dark-3)!important;
      border: 1px solid var(--dark-3)!important;
      box-shadow: none!important;
      &.active {
        background-color: var(--dark-3)!important;
        border: 1px solid var(--dark-3)!important;
        
        .bili-topic-search__input {
          background-color: var(--dark-5) !important;
          .bili-topic-search__input__inner {
            color: var(--dark-font-1) !important;
          }
        }
        
        .bili-topic-item__cloud {
          :hover {
            background-color: var(--dark-1) !important;
          }
          .bili-topic-item__cloud__name {
            color: var(--dark-font-1) !important;
          }
        }
      }
    }
    .topic-panel {
      .topic-panel__nav-title, .relevant-topic__title {
        color: var(--dark-font-1);
      }
    }
    
    //新动态
    .new-notice-bar {
      background: #d7d4b8!important;
      .message {
        color: #cf8612!important;
      }
    }
    
    //常看列表
    .card-list .most-viewed-panel .list-content .most-viewed-item .section {
      .icon-all, .avatar {
        border-color: var(--dark-5);
        -webkit-box-shadow: 0 0 0 1px var(--dark-0);
        box-shadow: 0 0 0 1px var(--dark-0);
        .active {
          -webkit-box-shadow: 0 0 0 1px #00a1d6!important;
          box-shadow: 0 0 0 1px #00a1d6!important;
        }
      }
    }
    
    //话题标签
    .new-topic-panel .tag-item .label {
      background: var(--dark-3)!important;
    }
    
    //feed
    .feed-topic .separater-line, .feed-topic .card, .card-offset {
      border-color: var(--dark-card)!important;
    }
    
    .card .focus-btn .unfocus {
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
    }
    
    .active-panel {
      .tc-dark-slate {
        color: var(--dark-font-1);
      }
      .show-more-button {
        background-color: unset!important;
      }
    }
    
    //动态详情
    .sticky-bar {
      -webkit-box-shadow: 0 2px 4px 0 var(--dark-card)!important;
      box-shadow: 0 2px 4px 0 var(--dark-card)!important;
      .bar-content {
        .title {
          color: var(--dark-font-0)!important;
        }
        .message {
          color: var(--dark-font-2)!important;
          &:hover {
            color: #00b5e5 !important;
          }
        }
      }
    }
    .detail-content .card {
      border-color: var(--dark-card)!important;
    }
    
    ${y}
    ${v}
    
    // 评论
    .comment-send-lite {
      background: var(--dark-card)!important;
    }

    .vote-result-comment {
      background: var(--dark-card)!important;
      border-radius: 8px!important;
    }
  `,L=l.createGlobalStyle`
  //文字 轻
  .article-item .item-holder .article-desc, .info-holder .dynamic, .more .info {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .info-holder .dynamic .arc-title {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  body, .nav-tab-bar .tab-item, .partitio-name, .article-item .item-holder .article-title-holder, .rank-module .rank-tabs-bar label, .rank-module .rank-list .item a, .up-list .title, .info-holder .head .nick-name, .more .top-bar, .more .title, .categories-bar .tag-item {
    color: var(--dark-font-3) !important;
  }

  //hover蓝
  .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .item-holder .article-title-holder:hover, .rank-module .rank-tabs-bar .rank-tabs-list li.on, .rank-module .rank-list .item a:hover, .info-holder .head .nick-name:hover, .info-holder .dynamic .arc-title:hover, .more .title:hover, .categories-bar .tag-item.on {
    color: #00a1d6 !important;
  }

  //背景
  .article-item, .rank-module .rank-list .item, .up-list {
    background-color: var(--bg) !important;
  }

  .page-content .right-side .rank-module .rank-list .item .rank-index {
    background: var(--dark-4);
  }

  //框线
  .article-item, .rank-module .rank-tabs-bar, .up-list .title, .more .top-bar, .categories-bar {
    border-color: var(--divider) !important;
  }

  //按钮
  .rank-module .complete-rank, .up-list .fresh-btn {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-0) !important;

    &:hover {
      color: #00a1d6 !important;
    }
  }

  //搜索
  .search-module .search-block {
    border-color: var(--dark-6) !important;
    background-color: var(--dark-2) !important;

    input {
      background-color: var(--dark-2) !important;
      color: var(--dark-font-0) !important;
    }

    .search-word-panel {
      border-color: var(--dark-card) !important;
      background-color: var(--dark-card) !important;

      .panel-title {
        .split-line {
          border-color: var(--dark-6) !important;
        }

        p span {
          background-color: var(--dark-card) !important;
          color: var(--dark-font-2) !important;
        }
      }

      .suggest-item, .history-item {
        color: var(--dark-font-0);

        &:hover, &.focus {
          background-color: var(--dark-3) !important;
        }
      }
    }
  }

  //侧边按钮
  .to-top {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }

  //帮助按钮修正
  .more .help .icon {
    background-image: url(${(0,d.Ax)("/statics/imgs/read-help.png")}) !important;
  }

  //游戏按钮修正
  .nav-tab-bar .tab-item[data-tab-id="1"]:before {
    background-image: url(${(0,d.Ax)("/statics/images/read-game.png")});
  }

  // read list
  .list-info-block {
    background-color: var(--dark-card) !important;

    .right-side {
      .title {
        color: var(--dark-font-0) !important;
      }

      .up-name {
        color: var(--dark-font-1) !important;
      }
    }
  }

  .list-container .article-list-block {
    background-color: var(--dark-card) !important;

    .article-item {
      background-color: var(--dark-card) !important;

      .article-left-block {
        border-bottom: 1px solid var(--divider) !important;

        .article-title {
          color: var(--dark-font-1) !important;
        }
      }
    }
  }
  
  .article-card {
    .title-wrap .title {
      color: inherit!important;
    }
  }
`,_=l.createGlobalStyle`
  .page-container, .article-action .more .more-ops-list, .view-note .editor-innter, .view-note .editor-innter .ql-editor {
    background: unset !important;
  }

  //文字 轻
  .up-info-right-block .fans-num, .up-info-right-block .view-num .follow-btn-holder .follow-btn.followed, .rightside-article-list-btn .title, .article-item .article-title .info, .more .info, .right-side-bar .to-comment .comment-num, .article-list-plane .button .title {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .article-action, .article-action .ops i, .article-action .more .more-ops-list {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .nav-tab-bar .tab-item, .follow-btn-holder .follow-btn, .up-info-right-block .up-name, .article-up-info .up-name, .rightside-article-list-btn .label, .up-article-list-block .block-title, .article-item .article-title, .more .top-bar, .more .title,
  .title-container .title, .article-holder, .article-holder h1, .article-holder .color-default, .article-list-plane .button .label, .article-holder .card-container .title,
  .article-left-tab .tab-item,
  .view-note .editor-innter .ql-editor {
    color: var(--dark-font-3) !important;
  }

  //hover蓝
  .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .article-title:hover, .more .title:hover,
  .article-action .ops .on, .article-action .ops .on i, .article-action .ops i:hover,
  .article-action .ops .coin-btn:hover, .article-action .ops .fav-btn:hover, .article-action .ops .like-btn:hover,
  .article-action .ops .coin-btn:hover i, .article-action .ops .fav-btn:hover i, .article-action .ops .like-btn:hover i {
    color: #00a1d6 !important;
  }

  //框线
  .up-article-list-block .block-title, .more .top-bar, .article-action, #article-list-btn .title, #article-list-btn .label, .rightside-article-list-btn .label {
    border-color: var(--divider) !important;
  }

  //文章视频引用
  .article-holder .card-container {
    .card, .video-info {
      background-color: #1515154d !important;
    }

    a:after, .slim-video-card {
      border-color: var(--dark-4) !important;
    }
  }

  //关注按钮
  .follow-btn-holder .follow-btn {
    background-color: #00a1d6 !important;
    border-color: #00a1d6 !important;

    &:hover {
      background-color: #00b5e5 !important;
      border-color: #00b5e5 !important;
    }

    &.followed, &.followed:hover {
      background-color: var(--dark-5) !important;
      border-color: var(--dark-5) !important;
    }
  }

  //文章目录
  .rightside-article-list-btn {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;

    &:hover {
      background-color: var(--dark-card) !important;
      border-color: var(--dark-card) !important;
    }

    .icon-list {
      background-image: url(${(0,d.Ax)("/statics/imgs/article-list.png")}) !important;
    }
  }

  .article-list-plane {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;

    .button:hover {
      background-color: var(--dark-card) !important;
      border-color: var(--dark-card) !important;
    }
  }

  //更多按钮
  .up-info-holder .fixed-box .up-article-list-block .more-article {
    background-color: var(--dark-5);
    border-color: var(--dark-5);
    color: var(--dark-font-0);
  }

  //帮助按钮修正
  .up-info-holder .fixed-box .more .help .icon {
    background-image: url(${(0,d.Ax)("/statics/imgs/read-help.png")});
  }

  //游戏按钮修正
  .nav-tab-bar .tab-item[data-tab-id="1"]:before, .article-left-tab .tab-item[data-tab-id="1"]:before {
    background-image: url(${(0,d.Ax)("/statics/images/read-game.png")});
  }

  // 侧边按钮
  .right-side-bar .to-comment, .right-side-bar .to-top, .right-side-bar .to-comment .comment-num {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }

  //评论区
  .comment-title-block span {
    color: var(--dark-font-1);
  }

  .comment-send-lite, .comment-m {
    background: var(--bg) !important;
  }

  ${v}
  .textarea-container {
    textarea {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;
      color: var(--dark-font-1) !important;
    }

    &:hover textarea, &.focus textarea {
      color: var(--dark-font-0) !important;
    }
  }

  .comment-emoji {
    border: 1px solid var(--dark-1) !important;
    background-color: var(--dark-1) !important;
  }

  .interaction-info {
    border-color: var(--dark-4) !important;
  }

  // 新专栏
  #app {
    background-color: var(--bg) !important;
  }

  #read-article-holder {
    color: var(--dark-font-1) !important;

    .img-box.loaded {
      filter: brightness(.8) !important;
    }

    &.normal-article-holder {
      h1, h2, h3, h4, h5, h6 {
        filter: invert(1);
      }

      .color-default {
        color: var(--dark-font-1) !important;
      }
    }
  }

  #readRecommendInfo {
    background-color: var(--dark-2) !important;

    .recommend-header {
      border-bottom-color: var(--divider) !important;

      .title, .more {
        color: var(--dark-font-0) !important;
      }
    }

    .article-item {
      border-color: var(--divider) !important;
    }
  }

  .catalog {
    background-color: var(--dark-0) !important;

    &:hover:after {
      background-color: var(--dark-0) !important;
    }

    .catalog-panel {
      background-color: var(--dark-0) !important;

      .catalog-panel__title {
        color: var(--dark-font-1) !important;
      }
    }

    .catalog-panel__list {
      background-color: var(--dark-0) !important;

      .catalog-item {
        color: var(--dark-font-2) !important;

        &:hover {
          background-color: var(--bg) !important;
        }

        .item-ul {
          background-color: var(--divider) !important;
        }
      }
    }


  }

  .side-toolbar {
    background-color: var(--dark-2) !important;

    .toolbar-item {
      color: var(--dark-font-2) !important;
    }
  }

  .article-detail {
    .fixed-top-header {
      background-color: var(--dark-card) !important;

      .up-info {
        .up-info__name {
          color: var(--dark-font-1) !important;
        }
      }

      .inner-title {
        color: var(--dark-font-3) !important;
      }
    }

    .article-breadcrumb {
      .breadcrumb-name {
        color: var(--dark-font-0) !important;
      }
    }

    .article-container {
      background-color: var(--dark-2) !important;

      .article-container__content {
        border-color: var(--divider) !important;

        .article-up-info {
          background-color: var(--dark-2) !important;
        }
      }
    }
  }

`,I=l.createGlobalStyle`
  #App, .tips, .article-title {
    color: var(--dark-font-3) !important;
  }

  .article-desc {
    color: var(--dark-font-2) !important;
  }

  .article-title:hover {
    color: #00a1d6 !important;
  }

  .article-item, .rank-module .rank-list .item, .up-list {
    background-color: var(--bg) !important;
  }

  #App .rank-module .tips {
    background: var(--dark-4);
  }

  .article-content {
    border-color: var(--dark-1) !important;
  }
`,E="\n    .message-list {\n      background-color: var(--dark-3)!important;\n      .msg-item .message {\n        color: var(--dark-font-0);\n        .message-content {\n          background-color: var(--dark-4)!important;\n          &.is-me {\n            background-color: #6f9dca!important;\n          }\n        }\n      }\n      .msg-notify, .msg-push {\n        background: var(--dark-4)!important;\n        .content {\n          color: var(--dark-font-1);\n        }\n        .modules .module {\n          .mtitle {\n            color: var(--dark-font-1);\n          }\n          .detail {\n            color: var(--dark-font-0);\n          }  \n        }\n        hr {\n          background: var(--dark-1)!important;\n        }\n        .link {\n          color: var(--dark-font-0);\n        }\n      }\n    }\n    ",A=l.createGlobalStyle`
  html {
    background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;

    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: rgba(21, 21, 21, 0.8) !important;
    }
  }

  //左栏
  .space-left {
    background-color: #151515cc !important;

    .side-bar {
      .title {
        color: var(--dark-font-0);

        .icon {
          filter: brightness(4);
          margin-left: -30px;
        }
      }

      .item {
        color: var(--dark-font-1);

        &:hover, &.active {
          color: #2faee3;
        }
      }

      .divided-line {
        border-color: var(--divider);
      }
    }
  }

  //右栏
  .space-right {
    background-color: #1f1f1f80 !important;

    .space-right-top {
      .title {
        background-color: var(--dark-card) !important;
        color: var(--dark-font-1) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;
      }

      .group-helper-msg-list {
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .tab-list {
          color: var(--dark-font-1) !important;

          .tab-item.active[data-v-29e10985]::before {
            background-color: var(--dark-card) !important;
          }
        }

        .nothing {
          color: var(--dark-font-2) !important;
        }

        .name-box {
          .name {
            color: var(--dark-font-0) !important;
          }

          .status {
            color: var(--dark-font-2) !important;
          }
        }

        &::after {
          background-color: var(--dark-card) !important;
        }
      }
    }

    .space-right-bottom {
      .card {
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .header::after {
          background: var(--divider) !important;
        }

        .loading .link-progress-tv {
          background-color: unset !important;
        }

        .line-1 {
          color: var(--dark-font-1) !important;

          .name-field {
            color: var(--dark-font-0) !important;
          }
        }

        .line-2 {
          color: var(--dark-font-0) !important;

          .orginal-reply {
            border-color: var(--dark-1) !important;
            color: var(--dark-font-2) !important;
          }
        }

        .line-3 {
          color: var(--dark-font-2) !important;
        }

        .text-box {
          color: var(--dark-font-2) !important;
        }

        &.detail .content:not(:hover) span {
          color: var(--dark-font-0) !important;
        }

        .follow-btn {
          color: var(--dark-font-1);

          &.active {
            background: var(--dark-6);
            border-color: var(--dark-6);
          }

          &.inactive {
            background: var(--dark-4);
          }
        }

        .reply-box {
          textarea {
            background-color: var(--dark-3);
            border-color: var(--dark-3);
            color: var(--dark-font-1);
          }

          &:hover textarea {
            color: var(--dark-font-0);
          }
        }

        .divider, div::after {
          border-color: var(--divider) !important;
        }

        .divider-last::before, .divider-last::after {
          background-color: var(--divider) !important;
        }

        //系统通知
        &.system-item {
          .title {
            color: var(--dark-font-0);
          }

          .time {
            color: var(--dark-font-1);
          }

          .bottom {
            color: var(--dark-font-2);
          }
        }

        //私信存档
        &.whisper {
          .list {
            border-color: var(--dark-1);

            .list-title {
              color: var(--dark-font-0);
              border-color: var(--dark-1);
            }

            .list-content .list-item {
              border-color: var(--dark-1);

              .name {
                color: var(--dark-font-0);
              }

              .last-word {
                color: var(--dark-font-2);
              }

              &.active, &:hover {
                background-color: var(--dark-3) !important;
              }
            }
          }

          .dialog {
            .title {
              color: var(--dark-font-0);
              border-color: var(--dark-1);
            }

            ${E}
          }
        }
      }

      //我的消息
      .bili-im {
        color: var(--dark-font-1);
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .left, .left .title {
          border-color: var(--dark-1);
        }

        .list {
          .list-item {
            .name {
              color: var(--dark-font-0);
            }

            .last-word {
              color: var(--dark-font-2);
            }

            &.top {
              background-color: var(--dark-3);
            }

            &.active, &:hover {
              background-color: var(--dark-3) !important;
            }
          }

          .lds-spinner div:after {
            background-color: var(--dark-font-0) !important;
          }
        }

        .dialog {
          .title {
            color: var(--dark-font-0);
            border-color: var(--dark-1);

            .action-menu .menu-list {
              border-color: var(--dark-card);
              background-color: var(--dark-card) !important;
              -webkit-box-shadow: 0 6px 12px 0 var(--dark-card);
              box-shadow: 0 6px 12px 0 var(--dark-card);

              a {
                color: var(--dark-font-0);

                .tips {
                  color: var(--dark-font-2);
                }

                &:hover {
                  background-color: var(--dark-0) !important;
                }
              }

              &:before {
                border-color: var(--dark-card);
                background-color: var(--dark-card) !important;
              }
            }
          }

          ${E}
          .new-message-tip {
            .text, &::after {
              background-color: var(--dark-4) !important;
            }
          }

          .send-box {
            border-color: var(--dark-0);
            background-color: var(--dark-3) !important;

            .btn-box.send-btn {
              border-color: var(--dark-5) !important;
              background-color: var(--dark-5) !important;
              color: var(--dark-font-2) !important;

              &.active {
                background-color: #1389bf !important;
                border-color: #1389bf !important;
                color: #fff !important;
              }
            }

            .input-box #editor {
              color: var(--dark-font-0);
            }
          }

          .im-popup .im-popup-shell {
            background-color: var(--dark-3);

            .content {
              .content-text {
                color: var(--dark-font-0);
              }

              .selector-box .type-selector {
                color: var(--dark-font-0);

                .css-1xneiug {
                  .content {
                    fill: var(--dark-5);
                  }

                  .border {
                    fill-opacity: 0.5;
                  }
                }
              }

              .report-tip {
                color: var(--dark-font-1);
              }

              .input-box {
                border-color: var(--dark-5);
                background-color: var(--dark-5);

                textarea {
                  color: var(--dark-font-0);
                }
              }
            }

            .popup-btn-ctnr .bl-button--primary:disabled {
              background-color: var(--dark-4);
              color: var(--dark-font-2);
            }
          }
        }
      }

      //消息设置
      .config {
        color: var(--dark-font-0);
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .tip {
          color: var(--dark-font-2);
        }

        .config-item {
          .css-1xneiug {
            .content {
              fill: var(--dark-5);
            }

            .border {
              fill-opacity: 0.5;
            }
          }

          &::before {
            background: var(--dark-1) !important;
          }

          .radio-selector {
            color: var(--dark-font-0);
          }
        }
      }
    }
  }

  // 自动回复设置
  #link-message-container {
    .header {
      .tab {
        color: var(--Ba0_s) !important;
      }
    }

    .title {
      color: var(--Ba0_s) !important;
    }

    textarea {
      color: var(--Ga4_u) !important;
    }

    .btn.disabled {
      background-color: var(--Ga9_u) !important;
      color: var(--Ga7_u) !important;
    }
  }

  // 关键词回复
  .kw-search {
    background-color: var(--Ba0) !important;
    color: var(--Br10) !important;
  }
`,D=l.createGlobalStyle`
    html {
      background: unset!important;
    }
    //文字 轻
    .n .n-data .n-data-k, .sec-empty-hint, .channel .empty-state p, .fav-item .state, .small-item .meta, .section.empty:after, .section .user-auth.no-auth .no-auth-title span,
    #page-fav .fav-sidenav .favlist-title, #page-fav .fav-sidenav .watch-later, #page-fav .fav-main .search-types,
    .i-live .i-live-unfo-btn, .section .operation, #page-channel-detail .watch-later-btn {
      color: var(--dark-font-2);
    }
    
    //文字 中
    .private-hint, .i-m-btn, .user .info .meta .row, .tc-slate, #page-fav .fav-main .fav-action-bottom .select-counter, #page-fav .fav-main .fav-meta, #page-setting .setting-privacy-item .setting-privacy-switcher .be-switch-label,
    .i-live .i-live-fo-count {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    body, .n .n-data .n-data-v, .section-title, .video-title, .info-title, .large-item .title, #page-video .play-all-btn,
    .breadcrumb .follow-tabs, .breadcrumb .batch, .breadcrumb .play-all-btn, #page-follows .follow-main .follow-action-top .back-to-info, #page-follows .follow-main .follow-action-bottom li, #page-follows .follow-main .follow-action-bottom ul.filter-disable li:hover,
    #page-follows .follow-tabs span,
    #page-fav .fav-main .fav-action-top .back-to-info, #page-fav .fav-main .fav-action-bottom li, #page-fav .fav-main .fav-action-bottom li:hover,
    .article-title, #page-fav .fav-main .fav-content .fav-pugv-list .pugv-item .item-infos p.main-title,
    .sub-tabs span, .sub-tabs .filter-content, .tc-black {
      color: var(--dark-font-0)!important;
    }
    
    //高优先
    .feed-title, .section .user-auth.no-auth .no-auth-title .goto-auth, .user-auth .auth-description,
    .contribution-sidenav, .breadcrumb .item, .album-list__title
    .my-album .tab-list .tab:not(.active) .name, .my-album .title, .fav-sidenav, .nav-title .text,.i-live .i-live-text, .live-text,
    .fav-main .filter-item, .fav-main .filter-item .filter-type .be-dropdown-item span, .favInfo-box .favInfo-details .fav-name, .my-notebook .note-header .note-title .note-text,
    .pgc-item-title, .pgc-item-desc, .setting-privacy-item .setting-privacy-name, .channel-title .channel-name, .album-title, .follow-item,
    .g-search input {
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .pgc-item-info .type-and-area, .pgc-space-follow-item .pgc-item-info .pgc-item-state, .favInfo-box .favInfo-details .fav-options .meta {
      color: var(--dark-font-1)!important;
    }
    
    // 投稿搜索后
    .search-page {
      background-color: var(--dark-card)!important;
      .search-nav {
        color: var(--dark-font-0)!important;
      }
    }
    
    
    
    
    
    //Card背景 
    .h .h-forbid, .n .n-inner, .bg-white,
    #page-index .col-1, .col-2 .section,
    .feed-title,
    .card,
    .col-full,
    .channel-option.no-channel, .channel-add-video,
    .follow-main .follow-action-bottom .follow-action-fixtop,
    #page-fav .fav-main .fav-action-bottom .fav-action-fixtop, #page-fav .fav-main .small-item:hover,
    .bili-dyn-item{
      background-color: var(--dark-card)!important;
    }
    .bili-dyn-item__tag {
      box-shadow: inset 0 -1px 0 var(--dark-3)!important;
    }
    
    //Card边框
    .col-1, .col-2 .section, .fav-covers, .card, .fav-main .small-item {
      border-color: var(--dark-card)!important;
    }

    .user-info-title{
      border-color: var(--dark-3)!important;
    }
    
    //Card阴影
    .n .n-inner, .large-item .cover img, .mini-item .cover img, .col-full, .i-pin-c{
      box-shadow: 0 0 0 1px #1313138a!important;
    }
    
    //框线
    .section, .section-title, .i-pin-v .be-tab, .i-m-upload, .i-m-r2, .user .tags, .contribution-sidenav, .contribution-sidenav~.main-content,
    .album-content, .filter, .channel-detail .channel-action-row .be-dropdown, .follow-main .follow-action-top, .follow-main .follow-action-top .back-to-info,
    .fav-sidenav,.fav-sidenav .nav-container, .fav-sidenav .watch-later, .fav-main .favList-info,
    .fav-main .filter-item.search, .fav-main .search-types, .fav-main .fav-action-top .back-to-info, .fav-main .fav-action-top,
    .article-content, .s-content, .setting-index-container, .setting-index-module,
    .i-live .i-live-unfo-btn, .i-live .i-live-fo-count, .section .operation, .channel .channel-item, .watch-later-btn, .mini-item,
    .follow-sidenav, .follow-sidenav .nav-container.follow-container, .follow-main, .follow-main .follow-header.follow-header-info, .list-item, .fans-action-btn.follow {
      border-color: var(--divider)!important;
    }
    
    .my-album .line {
      background-color: var(--dark-1)!important;
    }
    
    //hover深
    #submit-video-type-filter, .my-album .tab-list,
    .contribution-sidenav .contribution-item:hover,
    .fav-item:hover,
    .follow-item:hover {
      background-color: var(--dark-3)!important;
    }
    
    //搜索
    .g-search input, #page-fav .fav-main .search-input input {
      background: var(--dark-card)!important;
      color: var(--dark-font-0);
    }
    .g-search input {
      border-color: var(--divider);
    }
    
    //置顶视频，代表作
    .list-create {
      background-color: unset!important;
      .text {
        color: var(--dark-font-1);
      }
    }
    
    .feed-title {
      border-bottom: 1px solid var(--divider);
    }
    
    //空收藏夹
    .fav-covers.empty {
      background-image: url(${(0,d.Ax)("/statics/imgs/playlistbg.png")})!important;
    }
    
    //角标
    .section .count {
      background-color: var(--dark-2)!important;
      border-color: var(--dark-1)!important;
      color: var(--dark-font-1);
      &:before {
        background: url(${(0,d.Ax)("/statics/imgs/count-before.png")})!important;
        left: -6px!important;
        top: -1px!important;
      }
    }
    
    //更多
    .section .more {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
      background-position: -310px -404.5px!important;
      &:hover {
        background-position: -438px -404.5px!important;
      }
    }
    
    //公告
    #i-ann-content {
      textarea {
        background-color: var(--dark-3);
        border-color: var(--dark-3);
        color: var(--dark-font-1)!important;
      }
      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0)!important;
      }
    }
    
    // 他的频道
    
    .channel-list {
      .channel-name {
        color: var(--dark-font-1)!important;
      }
    }
    
    ${y}
    
    //更多操作
    #page-channel-detail .channel-detail .channel-action-row .be-dropdown {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
    }
    .be-dropdown {
      color: var(--dark-font-1);
      .be-dropdown-menu {
        background: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        box-shadow: 0 11px 12px 0 var(--dark-3)!important;
        li:hover {
          background-color: var(--dark-2)!important;
        }
        .be-dropdown-item {
          color: var(--dark-font-0);
          &.be-dropdown-item-delimiter {
            border-color: var(--dark-1)!important;
          }
        }
      }
      &.filter-item {
        color: var(--dark-font-0);
      }
      .icon-arrow {
        background-position: -1369px -215px;
      }
    }
    
    .album-card .btn {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .bangumi-options .opt-list {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      li {
        color: var(--dark-font-0)!important;
        &:hover {
          color: #00a1d6!important;
          background-color: var(--dark-2)!important;
        }
        &.disabled, &.disabled:hover {
          color: #666666!important;
        }
      }
    }
    
    //拖动排序
    #page-fav .fav-sidenav .icon-cursor {
      background-color: var(--dark-1)!important;
    }
    
    //分页
    .be-pager {
      li.be-pager-item, li.be-pager-prev, li.be-pager-next {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .be-pager-options-elevator input {
        border-color: var(--dark-3);
        background-color: var(--dark-2);
        color: var(--dark-font-0);
      }
    }
    
    .bangumi-pagelistbox {
       a.p, a.prev-page, a.next-page {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .custom-right .custom-right-inner.custompage {
        border-color: var(--dark-3)!important;
        background-color: var(--dark-2)!important;
        color: var(--dark-font-0)!important;
      }
    }
    
    //笔记
    .my-notebook {
      .note-header, .note-single-item {
        border-color: var(--divider)!important;
      }
      .note-single-item {
        .note-item__detail--title {
          color: var(--dark-font-0)!important;
        }
        .note-item__detail--summary {
          color: var(--dark-font-1)!important;
        }
        .note-item__detail--info .update-mtime {
          color: var(--dark-font-2)!important;
        }
      }
      .note-single-item--selected {
        background: var(--dark-3)!important;
      }
    }
    .note-editor {
      color: #222;
    }
    
    //个人标签
    #page-setting {
      #setting-new-tag, #setting-new-tag-btn {
        border-color: var(--dark-3)!important;
        background: var(--dark-2)!important;
      }
      #setting-new-tag {
        color: var(--dark-font-0)!important;
      }
    }
    
    //认证标识修正
    #page-index .col-2 .section .user-auth .auth-icon {
      &.organization-auth {
        background-position: -2px -50px!important;
      }
      &.personal-auth {
        background-position: -36px -50px!important;
      }
    }
    
    //充电图片
    .elec {
      .elec-status {
        color: var(--dark-font-0)!important;
        .elec-count {
          color: var(--dark-font-1)!important;
        }
        background-image: url(${(0,d.Ax)("/statics/imgs/charging_unfocus.png")})!important
      }
      .elec-status-bg-grey {
        background: var(--dark-card)!important;
      }
      &:hover .elec-status {
        background-image: url(${(0,d.Ax)("/statics/imgs/charging_focus.gif")})!important
      }
      .elec-avatar {
        border-color: var(--dark-5)!important;
      }
    }
    
    //弹出框
    .modal-wrapper {
      background-color: var(--dark-3)!important;
      .modal-title, .title {
        border-color: var(--dark-1)!important;
      }
      .modal-title p {
        color: var(--dark-font-0)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
      .be-input_inner, .be-textarea_inner {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .target-followitem {
        color: var(--dark-font-0)!important;
      }
    }
    
    .h .report-popup-item-text {
      color: unset!important;
    }
    
    .edit-media-list .edit-mask {
      .edit-board, .default-edit {
        background-color: var(--dark-3)!important;
        .head {
          color: unset!important;
          border-color: var(--dark-1)!important;
        }
        .info-wrap {
          .name-input, .media-list-intro{
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .title {
            color: unset!important;
          }
        }
        .media-list-type {
          color: var(--dark-font-1)!important;
        }
        .default-btn-wrap .default-btn.cancel {
          background-color: var(--dark-5)!important;
          border-color: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
        }
      }
    }
    
    #pin-wrapper {
      #pin-layer {
        background-color: var(--dark-3)!important;
      }
      .pin-layer-header {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      #pin-layer-search {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .pin-layer-order-tip {
        color: unset!important;
      }
      .btn.btn-disabled {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
    }
    
    .follow-dialog-wrap .follow-dialog-window {
      background-color: var(--dark-3)!important;
      .title {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      .content .group-list {
        li {
          color: unset!important;
        }
        .add-group {
          .add-btn {
            color: var(--dark-font-1)!important;
            border-color: var(--dark-1)!important;
          }
          .input-group {
            background-color: var(--dark-2)!important;
            input {
              background: var(--dark-2)!important;
              border-color: var(--dark-1)!important;
              color: var(--dark-font-0);
            }
            .submit {
              background: #d9f1f933!important;
            }
          }
        }
        ul .follow-group-mask {
          background: unset!important;
        }
      }
      .bottom {
        border-color: var(--dark-1)!important;
        .btn:disabled {
          background-color: var(--dark-4)!important;
          border-color: var(--dark-4)!important;
          color: var(--dark-font-2)!important;
        }
      }
    }
    
    .wrapper .edit-video-modal {
      .target-favlist {
        .target-favitem .target-fav-title .fav-meta .fav-name, .target-fav-count {
          color: unset!important;
        }
      }
      .addfav-container {
        .fake-fav-input {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-1)!important;
        }
        .fav-container {
          background-color: var(--dark-2)!important;
          input {
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .fav-add-btn {
            background: #d9f1f933!important;
          }
        }
      }
      .favlist-body:after {
        background: var(--dark-1)!important;
      }
      .btn.ghost {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
    }
    
    .fans-action-btn {
      color: var(--dark-font-1);
    }
    
    .fans-action-follow {
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
    }
    
    #id-card {
      background: var(--dark-3)!important;
      .idc-meta, .idc-auth-description {
        color: var(--dark-font-1)!important;
      }
      .idc-avatar {
        border-color: var(--dark-3)!important;
      }
      .btn-center {
        a.primary {
          color: #fff!important;
          border-color: #00a1d6!important;
          background-color: #00a1d6!important;
        }
        a.primary:hover {
          border-color: #00b5e5!important;
          background-color: #00b5e5!important;
        }
        a, a.ghost {
          background: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
          border-color: var(--dark-5)!important;
          &:hover {
            background: var(--dark-4)!important;
          }
        }
      }
      .idc-content {
        a .idc-uname{
          color: var(--dark-font-0)!important;
          &.this-is-vip {
            color: #fb7299!important;
          }
          &:hover {
            color: #00A1D6!important;
          }
        }
      }
    }
    .album-list {
      .album-list__title {
        color: var(--dark-font-1);
      }
      .album-list__tabs {
        background-color: var(--bg);
        .album-list__tab {
          .album-list__tab-name {
            color: var(--dark-font-1);
          }
        }
      }
      .album-card {
        .album-card__title {
          color: var(--dark-font-1);
        }
      }
    }
    ${v}
  `,O=l.css`
  :root {
    --Ga0: #0D0D0E !important;
    --Ga0_s: #1E2022 !important;
    --Ga0_t: #1E2022 !important;
    --Ga1: #000000 !important;
    --Ga1_s: #232527 !important;
    --Ga1_t: #232527 !important;
    --Ga1_e: #232527 !important;
    --Ga2: #2F3134 !important;
    --Ga2_t: #2F3134 !important;
    --Ga3: #46494D !important;
    --Ga3_t: #46494D !important;
    --Ga4: #5E6267 !important;
    --Ga4_t: #5E6267 !important;
    --Ga5: #757A81 !important;
    --Ga5_t: #757A81 !important;
    --Ga6: #8B9097 !important;
    --Ga6_t: #8B9097 !important;
    --Ga7: #A2A7AE !important;
    --Ga7_t: #A2A7AE !important;
    --Ga8: #B9BDC2 !important;
    --Ga8_t: #B9BDC2 !important;
    --Ga9: #D0D3D7 !important;
    --Ga9_t: #D0D3D7 !important;
    --Ga10: #E7E9EB !important;
    --Ga10_t: #E7E9EB !important;
    --Ga11: #242628 !important;
    --Ga12: #1F2022 !important;
    --Wh0: #17181A !important;
    --Wh0_t: #17181A !important;
    --Ba0: #000000 !important;
    --Ba0_s: #FFFFFF !important;
    --Ba0_t: #000000 !important;
    --Pi0: #26161C !important;
    --Pi1: #2F1A22 !important;
    --Pi2: #472030 !important;
    --Pi3: #76304B !important;
    --Pi4: #A73E65 !important;
    --Pi5: #D44E7D !important;
    --Pi5_t: #D44E7D !important;
    --Pi6: #DC6D94 !important;
    --Pi7: #E38CAA !important;
    --Pi8: #EBABC1 !important;
    --Pi9: #F2CAD8 !important;
    --Pi10: #FAE9EF !important;
    --Ma0: #261525 !important;
    --Ma1: #2E182D !important;
    --Ma2: #461C43 !important;
    --Ma3: #72296C !important;
    --Ma4: #A13396 !important;
    --Ma5: #CB41BB !important;
    --Ma6: #D462C7 !important;
    --Ma7: #DD83D3 !important;
    --Ma8: #E6A4DE !important;
    --Ma9: #EFC5EA !important;
    --Ma10: #F8E6F6 !important;
    --Re0: #261314 !important;
    --Re1: #2E1617 !important;
    --Re2: #471A1C !important;
    --Re3: #742728 !important;
    --Re4: #A63131 !important;
    --Re5: #D1403E !important;
    --Re6: #D9615F !important;
    --Re7: #E18281 !important;
    --Re8: #E9A3A2 !important;
    --Re9: #F1C5C4 !important;
    --Re10: #F9E5E5 !important;
    --Or0: #28180F !important;
    --Or1: #301B10 !important;
    --Or2: #4A230E !important;
    --Or3: #783610 !important;
    --Or4: #A9490D !important;
    --Or5: #D66011 !important;
    --Or6: #DD7C3A !important;
    --Or7: #E49764 !important;
    --Or8: #EBB38D !important;
    --Or9: #F2CEB6 !important;
    --Or10: #FAEADF !important;
    --Ye0: #2A1E0F !important;
    --Ye1: #342410 !important;
    --Ye2: #4D300B !important;
    --Ye3: #7C4C08 !important;
    --Ye4: #AD6800 !important;
    --Ye5: #DB8700 !important;
    --Ye6: #E19C2C !important;
    --Ye7: #E7B158 !important;
    --Ye8: #EEC584 !important;
    --Ye9: #F4DAB1 !important;
    --Ye10: #FAEFDD !important;
    --Ly0: #2A2310 !important;
    --Ly1: #332A11 !important;
    --Ly2: #49390C !important;
    --Ly3: #745909 !important;
    --Ly4: #A27C00 !important;
    --Ly5: #CCA000 !important;
    --Ly6: #D5B02C !important;
    --Ly7: #DEC158 !important;
    --Ly8: #E7D184 !important;
    --Ly9: #EFE2B1 !important;
    --Ly10: #F8F2DD !important;
    --Lg0: #19220F !important;
    --Lg1: #1E2911 !important;
    --Lg2: #273C0E !important;
    --Lg3: #3C600F !important;
    --Lg4: #50840B !important;
    --Lg5: #67A70E !important;
    --Lg6: #81B638 !important;
    --Lg7: #9CC562 !important;
    --Lg8: #B6D58B !important;
    --Lg9: #D0E4B5 !important;
    --Lg10: #EBF3DF !important;
    --Gr0: #102017 !important;
    --Gr1: #11271B !important;
    --Gr2: #123923 !important;
    --Gr3: #175C34 !important;
    --Gr4: #198042 !important;
    --Gr5: #1FA251 !important;
    --Gr6: #46B26F !important;
    --Gr7: #6DC28D !important;
    --Gr8: #93D2AB !important;
    --Gr9: #BAE2C9 !important;
    --Gr10: #E1F3E8 !important;
    --Cy0: #0C1F20 !important;
    --Cy1: #0D2627 !important;
    --Cy2: #093739 !important;
    --Cy3: #085B5C !important;
    --Cy4: #028080 !important;
    --Cy5: #03A29F !important;
    --Cy6: #2FB2B0 !important;
    --Cy7: #5AC2C0 !important;
    --Cy8: #86D2D1 !important;
    --Cy9: #B2E2E1 !important;
    --Cy10: #DDF3F3 !important;
    --Lb0: #0A1B23 !important;
    --Lb1: #0B202A !important;
    --Lb2: #082D40 !important;
    --Lb3: #064A69 !important;
    --Lb4: #006996 !important;
    --Lb5: #0087BD !important;
    --Lb6: #2C9CC8 !important;
    --Lb7: #58B1D4 !important;
    --Lb8: #84C5DF !important;
    --Lb9: #B1DBEB !important;
    --Lb10: #DDEFF6 !important;
    --Bl0: #151826 !important;
    --Bl1: #181C2F !important;
    --Bl2: #1F2748 !important;
    --Bl3: #2E3C76 !important;
    --Bl4: #3B53A8 !important;
    --Bl5: #4B6BD4 !important;
    --Bl6: #6A85DB !important;
    --Bl7: #899EE3 !important;
    --Bl8: #A9B8EA !important;
    --Bl9: #C8D2F2 !important;
    --Bl10: #E7EBF9 !important;
    --Pu0: #1D1628 !important;
    --Pu1: #221A31 !important;
    --Pu2: #31214C !important;
    --Pu3: #4E317D !important;
    --Pu4: #6D3FB1 !important;
    --Pu5: #8C50E0 !important;
    --Pu6: #A06EE5 !important;
    --Pu7: #B48DEB !important;
    --Pu8: #C8ABF0 !important;
    --Pu9: #DBC9F5 !important;
    --Pu10: #F0E8FB !important;
    --Br0: #211D1B !important;
    --Br1: #282320 !important;
    --Br2: #382F2A !important;
    --Br3: #59483F !important;
    --Br4: #7A6154 !important;
    --Br5: #9A7C6A !important;
    --Br6: #AC9384 !important;
    --Br7: #BDA99E !important;
    --Br8: #CEBFB7 !important;
    --Br9: #E0D7D1 !important;
    --Br10: #F2EEEB !important;
    --Si0: #212325 !important;
    --Si1: #27292C !important;
    --Si2: #36393F !important;
    --Si3: #535962 !important;
    --Si4: #6F7987 !important;
    --Si5: #8C99AA !important;
    --Si6: #A0ABB9 !important;
    --Si7: #B4BCC7 !important;
    --Si8: #C8CED6 !important;
    --Si9: #DCE0E5 !important;
    --Si10: #F0F2F4 !important;
  }

  #app {
    background-color: var(--Ga12) !important;

    .video-title {
      color: var(--Bl0_u) !important;
    }

    .bilibili-player-video-sendbar {
      background: var(--Ga0) !important;

      .bilibili-player-video-info {
        color: var(--Ga5_u) !important;
      }

      .bilibili-player-video-inputbar {
        background: var(--dark-4) !important;

        .bilibili-player-video-inputbar-wrap {
          border-color: var(--Ba0_t) !important;
        }
      }
    }

    #bilibiliPlayer {
      box-shadow: 0 0 8px var(--Ba0) !important;
    }
  }

  body.player-fullscreen-fix {
    #app .bilibili-player-video-sendbar {
      background-color: transparent !important;
    }
  }
`,T=l.createGlobalStyle`
  body {
    color: var(--dark-font-0);
  }

  // 播放器mini窗口
  #bofqi.mini-player:before {
    box-shadow: #000000 0 0 8px;
  }

  // 视频信息
  #v_desc {
    .info, .desc-info {
      color: #879199;
    }
  }

  // 新合集
  .base-video-sections, .base-video-sections-v1 {
    background-color: #131313 !important;

    .first-line-title, .video-episode-card__info-title {
      color: var(--dark-font-1) !important;
    }

    .video-episode-card__info-playing {
      background-color: var(--paper-grey-900) !important;
    }
  }

  // 创作团队
  .members-info {
    .members-info__header {
      background-color: var(--dark-1);

      .title, .btn {
        color: var(--dark-font-1);
      }
    }

    .up-card {
      .avatar .info-tag {
        background-color: var(--dark-4) !important;
      }

      .avatar-name__container .name-text {
        color: var(--dark-font-0);
      }

      .attention {
        background-color: var(--dark-5) !important;
      }
    }

    .wide-members {
      .wide-members__title {
        color: var(--dark-font-1);
      }

      .avatar {
        border-color: var(--dark-5);

        .info-tag {
          background-color: var(--dark-4) !important;
        }

        .up-name {
          color: var(--dark-font-0);
        }
      }

      .van-icon-general_back_s, .van-icon-general_enter_s {
        &:before {
          background-color: var(--dark-6);
        }
      }

      .van-icon-general_back_s:after {
        background: linear-gradient(-270deg, #000, hsla(0, 0%, 100%, 0)) !important;
      }

      .van-icon-general_enter_s:after {
        background: linear-gradient(270deg, #000, hsla(0, 0%, 100%, 0)) !important;
      }
    }
  }

  // up信息
  .up-info {
    .btn .b-cd {
      background: var(--dark-3) !important;
    }

    .up-info_right {
      .name {
        .username {
          color: var(--dark-font-0);
        }

        .message {
          color: var(--dark-font-1);
        }
      }
      .btn-panel {
        .charge-btn {
          background: var(--dark-3) !important;
        }
      }
    }

    .btn-panel {
      .following {
        background-color: var(--dark-5);
        border-color: var(--dark-5);
      }

      .default-btn:not(.btn-transition) {
        background-color: var(--dark-1);
      }
    }
  }

  .bili-header-m .nav-menu .nav-mask {
    background-color: var(--dark-1) !important;
  }

  .nav-wrapper .nav-con ul li a {
    color: var(--dark-font-1) !important;
  }

  #viewbox_report .video-title .tit, .media-wrapper > h1,
  .media-right > *:not(.media-tool-bar),
  .media-right > *:not(.media-tool-bar) a, .media-right > *:not(.media-tool-bar) span {
    color: var(--dark-font-0) !important;
  }

  .main-container .media-info .media-right .media-tool-bar {
    .btn-rating {
      background-color: var(--dark-5);
      border-color: var(--dark-5);
      color: var(--dark-font-1) !important;

      &:hover {
        background-color: var(--dark-4);
      }
    }

    .btn-follow.active {
      background-color: var(--dark-5) !important;
    }

    .bangumi-options .opt-list {
      background: var(--dark-3) !important;
      border-color: var(--dark-3) !important;

      li {
        color: var(--dark-font-0) !important;

        &:hover {
          color: #00a1d6 !important;
          background-color: var(--dark-2) !important;
        }

        &.disabled, &.disabled:hover {
          color: #666666 !important;
        }
      }
    }
  }

  .main-container .plp-l .player-mask .player-limit-mask {
    background-color: var(--dark-0) !important;
  }

  .main-container .plp-l .player-mask .bar-wrapper {
    background-color: var(--dark-5) !important;
  }

  .main-container .pre-mask, .main-container .season-list .ss-list-wrapper .ss-item .ss-cover, .main-container .media-info .media-cover, .main-container .plp-l .player-mask .bar-wrapper .left-bar, .main-container .plp-l .player-mask .bar-wrapper .right-bar {
    background-color: var(--dark-1) !important;
  }

  .player-module .player-tool-bar {
    background: unset !important;
  }

  #bilibiliPlayer, .bpx-player-container {
    box-shadow: 0 0 8px var(--dark-1) !important;
  }

  #bilibili-player.mini-player:before {
    box-shadow: 0 0 5px var(--dark-1) !important;
  }

  #paybar_module {
    .vip a.btn-pay.active {
      background-color: var(--dark-1) !important;
      border: 1px solid var(--dark-3);
    }
  }

  #member-container {
    .up-card {
      .info-name {
        color: #c7c7c7;
      }
    }
  }

  // tags
  #v_tag {
    border-color: var(--divider) !important;

    ul li {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;

      .tag-item {
        border-color: var(--dark-0);
        background-color: var(--dark-1);
      }

      .tag-info-pane, a, .text {
        background-color: var(--dark-1) !important;
        color: var(--dark-font-1) !important;
      }
    }

    .btn-add, .ipt {
      background-color: var(--dark-2) !important;
      border-color: var(--dark-1) !important;
      color: var(--dark-font-1) !important;
    }
  }

  // 新版播放器
  .bpx-player-filter, .bpx-player-dm-wrap {
    background-color: var(--dark-2) !important;
  }

  .bpx-player-sending-area .bpx-player-sending-bar {
    background-color: var(--dark-0) !important;
  }

  .bpx-player-video-inputbar {
    background-color: var(--dark-5) !important;
  }

  .bpx-player-video-inputbar-wrap {
    border-color: var(--dark-5) !important;
  }

  .bpx-player-dm-btn-footer {
    background-color: var(--dark-0) !important;

    &:hover {
      color: var(--dark-font-2) !important;
    }
  }

  .bpx-player-dm-btn-history {
    background-color: var(--dark-0) !important;
  }

  .bpx-player-date-picker {
    border-color: var(--dark-0) !important;
    background-color: var(--dark-3) !important;
  }

  .bpx-player-date-picker-header {
    border-color: var(--dark-4) !important;
  }

  .bpx-player-date-picker-day {
    border-color: transparent !important;
    color: var(--dark-6) !important;

    &.day-enable {
      color: var(--dark-font-1) !important;
    }
  }

  .bpx-player-dm-load-status {
    background-color: var(--dark-0) !important;
    color: var(--dark-font-1) !important;
  }

  .dm-info-dm {
    color: var(--dark-font-1) !important;
  }

  .bui-long-list-item {
    &.bui-long-list-item-selected {
      .dm-info-row {
        background-color: var(--dark-3) !important;
      }
    }

    .dm-info-block-btn, .dm-info-report-btn {
      background-color: var(--dark-3) !important;
    }
  }

  // 举报窗口 
  .bpx-player-report-box {
    background-color: var(--dark-3) !important;
    box-shadow: none !important;
    border: 1px solid var(--dark-0) !important;

    .bpx-player-report-title {
      border-bottom-color: var(--dark-4) !important;
    }

    .bpx-player-report-content {
      color: var(--dark-font-0) !important;
    }
  }

  // 弹幕列表
  .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],
  .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,
  .danmaku-wrap,
    // 新版番剧播放器
  .bpx-player-dm-function,
  .bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-date, .bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-dm, .bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-time {
    background: #191919 !important;
    color: var(--dark-font-1) !important;

    .player-auxiliary-area {
      .player-auxiliary-danmaku-wrap, .player-auxiliary-danmaku-btn-history, .player-auxiliary-danmaku-btn-footer {
        background: #191919 !important;
      }
    }

    .player-auxiliary-danmaku-contaner {
      .player-auxiliary-danmaku-load-status {
        background: #191919 !important;
        color: #fff;
      }
    }
  }

  .player-auxiliary-area {
    background: #191919 !important;
  }

  .player-auxiliary-danmaku-load-status {
    background: unset !important;

    &.disabled {
      color: var(--dark-font-1) !important;
    }
  }

  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .bscroll-vertical-scrollbar {
    background-color: black !important;
  }

  .danmaku-info-row {
    .danmaku-info-danmaku, span {
      color: var(--dark-font-1) !important;
    }

    &.danmaku-info-row-block {
      opacity: 0.3 !important;
    }
  }

  .player-auxiliary-area .player-auxiliary-filter {
    .player-auxiliary-filter-title {
      color: var(--dark-font-1) !important;
    }

    .player-auxiliary-setting-menu-wrap, .player-auxiliary-viewpointlist {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;

      .player-auxiliary-setting-menu-list {
        background-color: var(--dark-1) !important;
        color: var(--dark-font-1) !important;

        &:hover {
          background-color: var(--dark-3) !important;
        }
      }
    }
  }

  .player-auxiliary-collapse-viewpointlist {
    background: none !important;
  }

  .player-auxiliary-filter-wrap {
    background-color: #191919 !important;
  }

  .player-auxiliary-viewpointlist-item {
    .player-auxiliary-viewpointlist-info {
      .player-auxiliary-viewpointlist-content {
        color: var(--dark-font-1) !important;
      }

      .player-auxiliary-viewpointlist-time {
        color: var(--dark-font-2) !important;
      }
    }
  }

  .player-auxiliary-playlist-item-p-item-active {
    color: #00a1d6 !important;
  }

  .player-auxiliary-playlist-bottom {
    border-color: var(--dark-3) !important;
  }

  .danmaku-wrap .player-auxiliary-block .player-auxiliary-block-tabpanel {
    .player-auxiliary-block-tabpanel-row {
      &.special-title .player-auxiliary-block-label {
        color: var(--dark-font-1) !important;
      }

      &.player-auxiliary-border {
        background-color: var(--dark-3) !important;
      }
    }

    .player-auxiliary-block-string-short {
      background: var(--dark-4) !important;
      border-color: var(--dark-4) !important;

      &:focus {
        color: var(--dark-font-0) !important;
      }
    }

    .bui-button.bui-button-gray:not(:hover) {
      background: var(--dark-5) !important;
      color: var(--dark-font-1) !important;
    }

    .bui-tabs .bui-tabs-header .bui-tabs-header-item:not(.bui-tabs-header-item-active) {
      color: var(--dark-font-1);
    }

    .player-auxiliary-block-list-wrap .player-auxiliary-block-list .player-auxiliary-block-line {
      color: var(--dark-font-3) !important;
      background: var(--dark-4) !important;
    }
  }

  // 弹幕列表管理菜单
  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-management {
    background-color: var(--dark-3) !important;

    & > * {
      border-color: var(--dark-1) !important;
    }

    .player-auxiliary-danmaku-wrap .player-auxiliary-danmaku-load-status {
      background: transparent !important;
    }
  }


  .v-wrap {
    background: none !important;

    .danmaku-wrap {
      background-color: var(--dark-2) !important;
    }
  }

  .bui-collapse-wrap {
    background-color: var(--dark-2) !important;

    .bui-collapse-header, .player-auxiliary-filter {
      background-color: var(--dark-2) !important;
    }

    .bui-collapse-body {
      background-color: var(--dark-2) !important;

      .player-auxiliary-playlist-item-active, .player-auxiliary-playlist-item:hover {
        .player-auxiliary-playlist-item-title {
          color: #00a1d6;
        }
      }

      .player-auxiliary-playlist-item-title {
        color: var(--dark-font-1);
      }
    }

    .player-auxiliary-playlist-item-p-list {
      .player-auxiliary-playlist-item-p-item {
        color: inherit;

        :hover {
          background-color: var(--paper-grey-900) !important;
        }
      }
    }
  }

  .bui-collapse .bui-collapse-header, .player-auxiliary-filter {
    background: var(--dark-2);

    span {
      color: var(--dark-font-1);
    }
  }

  // 选集列表
  #eplist_module, #multi_page, .ep-section-module {
    background-color: var(--dark-2);

    .list-wrapper.longlist {
      padding-right: 6px;
    }

    .list-wrapper.simple li {
      width: 64px;
    }

    .list-title, .head-con {
      h4, h3 {
        color: var(--dark-font-1);
      }
    }

    .section-title {
      color: var(--dark-font-1);
    }

    .module-box {
      li {
        &:not(.on):not(:hover) {
          border-color: var(--dark-3);
          background-color: #232323;

          a {
            color: var(--dark-font-1);
          }
        }

        &:not(.on):hover {
          background-color: #232323;
        }
      }
    }

    .list-wrapper, .cur-list .list-box, .section-ep-wrapper {
      &.simple {
        .ep-item:not(.cursor) {
          color: var(--dark-font-1);
          border-color: var(--dark-3);
          background-color: #232323;
        }
      }

      .ep-item, li {
        width: auto;
        margin-right: 5px;
        color: var(--dark-font-1);

        a {
          color: var(--dark-font-1);
        }

        &.cursor, & {
          background-color: #232323;
        }

        &.visited, &.watched {
          color: #757575;
        }

        &:hover {
          background-color: var(--dark-3);
          color: var(--dark-font-1);
        }
      }
    }
  }

  .video-sections {
    background-color: var(--dark-2) !important;

    .video-sections-head {
      .first-line-left {
        .first-line-title {
          color: var(--dark-font-1) !important;
        }
      }

      .video-sections-head_second-line {
        button {
          background: transparent !important;
        }
      }

      .border-bottom-line {
        background: var(--dark-4) !important;
      }
    }

    .video-sections-content-list {
      .video-sections-item {
        background-color: var(--dark-2) !important;
        border-color: var(--dark-1) !important;

        .video-section-title {
          background: var(--dark-1) !important;
          color: var(--dark-font-1) !important;
        }

        .video-episode-card {
          .video-episode-card__info-title {
            color: var(--dark-font-1) !important;

            &.video-episode-card__info-title-playing, &:hover {
              color: #00a1d6 !important;
            }
          }
        }
      }
    }
  }

  //广告
  .slide-ad .slide-gg {
    background: var(--dark-1) !important;
  }

  a.ad-report {
    color: var(--dark-font-3);

    .vcd {
      .cover {
        background: var(--dark-1) !important;
      }
    }
  }

  // 播放器工具栏
  .bilibili-player {
    background: unset !important;
  }

  .bilibili-player-video-bottom-area {
    :before {
      background: var(--dark-2) !important;
    }
  }

  .bilibili-player-video-sendbar {
    background: transparent !important;

    .bilibili-player-video-inputbar {
      background-color: unset !important;

      .bilibili-player-video-inputbar-wrap {
        border-color: var(--dark-4) !important;
        background-color: var(--dark-4);
      }

      .bilibili-player-video-danmaku-input {
        color: var(--dark-font-1) !important;
      }
    }

    .bilibili-player-video-sendbar-left, .bilibili-player-video-sendbar-right {
      background-color: var(--dark-1) !important;
    }
  }

  // 交互栏
  #arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {
    border-color: var(--divider) !important;

    .more-ops-list {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;
      box-shadow: unset !important;
      color: var(--dark-font-1) !important;

      li:hover {
        background-color: var(--dark-3) !important;
      }
    }

    .media-desc i {
      background-color: var(--bg);
    }
  }

  .media-tool-bar {
    .btn-rating {
      background-color: var(--dark-1);
      border-color: var(--dark-1);
    }
  }

  // 活动
  .activity-m {
    .onlytip {
      color: var(--dark-font-1);
    }

    .inside-wrp {
      border-color: var(--dark-1);
      background-color: var(--dark-1);

      .left {
        color: var(--dark-font-1);
      }

      .right .inside-bg:before {
        background-image: linear-gradient(90deg, var(--dark-1), transparent 30%);
      }
    }
  }

  // 评价
  #review_module {
    border-color: var(--divider) !important;

    .review-list .review-item .review-body {
      background-color: var(--dark-1) !important;

      .review-header .review-author, .review-title {
        color: var(--dark-font-1)
      }

      .review-content {
        color: var(--dark-font-1) !important;
      }
    }
  }

  // 承包榜
  #sponsor_module {
    border-color: var(--divider) !important;

    .sponsor-rank-header {
      h3, .sponsor-rank-tab li {
        color: var(--dark-font-1) !important;
      }
    }

    .sponsor-rank-item {
      .sp-right .sp-msg {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-1) !important;
        background-color: var(--dark-1) !important;
      }
    }
  }

  // 右侧视频推荐区
  #recom_module {
    .recom-title, .recom-list .video-title {
      color: var(--dark-font-3);
    }

    .expand-more {
      background-color: var(--dark-1);
      color: var(--dark-font-1);
    }
  }

  #reco_list {
    .rec-title {
      color: var(--dark-font-3);
    }

    .card-box {
      .pic-box {
        background: var(--dark-1) !important;
      }

      .info .title {
        color: var(--dark-font-3);
      }
    }

    a:hover {
      color: #00a1d6 !important;
    }

    .rec-footer {
      background-color: var(--dark-1);
    }
  }

  // 收藏页面右侧推荐区
  .rcmd-list {
    .remd-video-card {
      .info {
        .title {
          color: var(--dark-font-1) !important;
        }

        .count a {
          color: var(--dark-font-2) !important;
        }
      }
    }
  }

  // 番剧剧集信息
  #seasonlist_module {
    .series-title, .ss-list-wrapper .ss-item .ss-info .ss-title {
      color: var(--dark-font-3);
    }

    .ss-list-wrapper .ss-item .ss-info {
      .ss-title {
        color: var(--dark-font-3);
      }

      .pub-info {
        color: var(--dark-font-3);
      }
    }

    .expand-more {
      background-color: var(--dark-1);
      color: var(--dark-font-1);
    }
  }

  // 直播推荐 
  #live_recommand_report .pl__card {
    border-color: var(--dark-1);
    background-color: var(--dark-1);

    .pl__info .pl__title {
      color: var(--dark-font-1);
    }
  }

  // 侧边按钮
  .float-nav .nav-menu .item, .main-container .nav-tools .tool-item {
    background-color: var(--dark-4);
    border-color: var(--dark-4);
  }

  //投币弹出
  .coin-operated-m {
    background-color: var(--dark-3);

    .coin-title, .like-checkbox {
      color: var(--dark-font-0);
    }

    .mc-box {
      background-color: #fff;
    }
  }

  //收藏弹出
  .collection-m {
    background-color: var(--dark-3);

    .title {
      border-color: var(--dark-1) !important;
      color: var(--dark-font-0) !important;
    }

    .content .group-list {
      li .fav-title {
        color: var(--dark-font-0);
      }

      ul .collection-mask {
        background-color: unset !important;
      }
    }

    .add-group {
      .add-btn {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-1) !important;
      }

      .input-group {
        background-color: var(--dark-2) !important;

        input {
          background: var(--dark-2) !important;
          border-color: var(--dark-1) !important;
          color: var(--dark-font-0);
        }

        .submit {
          background: #d9f1f933 !important;
        }
      }
    }

    .bottom {
      border-color: var(--dark-1) !important;

      .btn.disable {
        background-color: var(--dark-4) !important;
        border-color: var(--dark-4) !important;
        color: var(--dark-font-2) !important;
      }
    }
  }

  //转发弹出
  .video-toolbar .ops .share .share-pos {
    background-color: var(--dark-card) !important;
    border-color: var(--dark-card) !important;
    color: var(--dark-font-1);

    .box-a .share-down .share-btn {
      color: var(--dark-font-1);
    }

    .share-address .t {
      color: var(--dark-font-3);
    }

    .box-b {
      border-color: var(--dark-6) !important;
    }
  }

  //笔记
  .video-editor .ql-toolbar {
    color: #222;
  }

  // 抽奖
  .comment-vote-bilibili {
    background-color: var(--dark-3) !important;

    .t {
      color: var(--dark-font-0) !important;
      border-color: var(--dark-4) !important;
    }
  }

  //评论区
  #comment_module, #comment .common, #comment .comment {
    border-color: var(--divider) !important;

    .b-head {
      color: var(--dark-font-1);
    }

    .comment-send-lite {
      background: var(--Ga12) !important;
      border-color: var(--Ga12) !important;
    }

    .comment-emoji {
      box-shadow: none !important;
    }
  }

  .comm, .comment {
    ${v}
    .textarea-container {
      textarea {
        background-color: var(--dark-1) !important;
        border-color: var(--dark-1) !important;
        color: var(--dark-font-1) !important;
      }

      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0) !important;
      }
    }

    .comment-emoji {
      border: 1px solid var(--dark-1) !important;
      background-color: var(--dark-1) !important;
    }
  }

  // 笔记功能
  .ql-editor {
    color: initial;
  }

  ${O}
  
  .svg-icon[class*=user-level] svg rect.st0 {
    fill: transparent !important;
  }
`,M=l.createGlobalStyle`
    .room-bg.p-fixed:after {
      background: #1c2022d9!important;
    }
    
    .link-navbar-ctnr,
    .link-navbar-vm,
    .link-navbar,
    .head-info-section,
    .gift-control-section,
    .rank-list-section,
    .rank-list-ctnr,
    .chat-history-panel,
    .announcement-cntr,
    .chat-control-panel,
    .control-panel-ctnr,
    .gift-sender-panel,
    .count-choice,
    .gift-panel-box,
    .content-wrapper,
    .link-progress-tv,
    .pay-note-panel,
    .feed-title,
    .card,
    .live-record-list-cntr,
    .flip-view-image,
    .bg-white,
    .live-player-ctnr.minimal,
    .user-panel,
    .link-panel-ctnr,
    .calendar-checkin,
    .calendar-checkin .title,
    .calendar-checkin .calendar-wrapper,
    .download-panel-ctnr,
    .side-bar-popup-cntr {
      background-color: var(--dark-card)!important;
    }
    
    .daily-record-title, .choice-item.active, .choice-item:hover, .divider, .more-btn-cntr,  .animation-list .icon-arrow-left, .animation-list .icon-arrow-right {
      background-color: var(--dark-5)!important;
    }
    
    .choice-item, .danmaku-menu, .logout-btn, .load-more-btn, .checkin-btn, .link-popup-panel {
      background-color: var(--dark-3)!important;
    }
    
    .danmaku-item .user-name {
      color: var(--dark-font-1)!important;
    }
    
    body{
      color: var(--dark-font-0);
    }
    
    .selector-box, .feed-title, .glory-name {
      color: var(--dark-font-0)!important;
    }
    
    .common-popup-wrap, .gVPoeh,
    .gift-item.buy:hover, .gift-panel-switch:hover, .download-item:hover, .item.self, .rank-list-ctnr .own {
      background-color: var(--dark-3)!important;
    }
    
    //.rank:not(.rank-1):not(.rank-2):not(.rank-3) {
    //  background: var(--dark-6)!important;
    //}
    
    .item, .daily-record-title, .daily-text, .gift-info-expScore, .seeds-wrap, .tab-candidate, .room-introduction-scroll-wrapper,
    .username-info, .calendar-checkin .calendar-wrapper, .download-panel-ctnr a, .list-unit {
      color: var(--dark-font-1)!important;
    }
    
    .gift-info-desc {
      color: var(--dark-font-2)!important;
    }
    
    .link-navbar .main-ctnr .nav-logo, .link-navbar .nav-item, .shortcuts-ctnr, .room-title, .tab-list .item.active, .rank-list-box a.live-skin-main-a-text, .chat-item.danmaku-item,
    .gift-item .label, .gift-info-title, .choice-item, .announcement-cntr .content, .record-title, .live-player-ctnr, .area-list-panel .list-item, .username, .user-row,
    .gift-component-effect-rule, .share-addr-name, th.list-head-text {
      color: var(--dark-font-0)!important;
    }
    
    .calendar-checkin .calendar-wrapper .calendar .date-ctnr .day-item {
      color: var(--dark-5)!important;
      &.checked {
        color: #fff!important;
      }
    }
    
    .rank-list-box a:hover, .chat-item.danmaku-item .danmaku-content:hover, .area-list-panel .list-item:hover, .user-item:hover .username, .download-item:hover {
      color: #23ade5!important;
    }
    
    .head-info-section,
    .gift-control-section,
    .aside-area,
    .announcement-cntr,
    .gift-sender-panel.arrow-bottom:before,
    .gift-panel-box,
    .content-wrapper,
    .card,
    .live-record-list-cntr,
    .side-bar-popup-cntr {
      border-color: var(--dark-card)!important;
    }
    
    .tab-list .item, .l-line, .r-line, .rank-list-ctnr, .count-choice, .choice-item, .gift-reveal-header, .announcement-cntr .content, .room-introduction-tags, .info-item-ctnr, .footer-line, .edit-button {
      border-color: var(--dark-5)!important;
    }
    
    #rank-list-ctnr-box {
      .gift-rank-list-item, .top3-item {
        .top3-name, .top3-score {
          color: var(--dark-font-3)!important;
        }
        .name, .rank, .score {
          color: var(--dark-font-3)!important;
        }
      }
    }
    
    .common-popup-wrap {
      border-color: var(--dark-3)!important;
    }
    
    .common-popup-wrap.arrow-bottom:after, .common-popup-wrap.arrow-bottom:before {
      border-color: var(--dark-3) transparent transparent !important;
    }
  
    .common-popup-wrap.arrow-top:after, .common-popup-wrap.arrow-top:before {
      border-color: transparent transparent var(--dark-3) !important;
    }
    
    .arrow {
      border-color: transparent transparent transparent var(--dark-card)!important;
    }
    
    .link-navbar-ctnr {
      box-shadow: 0 0 5px 1px var(--dark-card)!important;
    }
    
    .gift-sender-panel, .common-popup-wrap, .side-bar-popup-cntr, .gVPoeh {
      box-shadow: 0 6px 12px 0 var(--dark-1)!important;
    }
    .link-navbar {
      box-shadow: none !important;
    }
    .link-navbar .panel-shadow {
      box-shadow: 0 8px 20px 0 var(--dark-card)!important;
    }
    
    .live-player-ctnr.minimal {
      box-shadow: 0 0 30px 1px var(--dark-card)!important;
    }
    
    .chat-input-ctnr {
      border-color: var(--divider)!important;
      background-color: var(--dark-3)!important;
      .medal-section {
        border-color: var(--divider)!important;
      }
      .chat-input, .count-choice .count-input {
        background-color: var(--dark-3)!important;
        color: var(--dark-font-0)!important;
        border-color: var(--dark-4)!important;
      }
    }
    
    .bl-button--primary:disabled {
      background-color: var(--dark-4)!important;
      color: var(--dark-font-2)!important;
    }
    
    .area-list-panel {
      background-color: var(--dark-3)!important;
      .list-item:hover {
        background-color: var(--dark-2)!important;
      }
    }
    
    .search-bar-ctnr .search-bar {
      background-color: var(--dark-3)!important;
      input {
        color: var(--dark-font-1)!important;
        &:focus {
          color: var(--dark-font-0)!important;
        }
      }
    }
    
    .live-room-app .app-content .link-footer-ctnr {
      background-color: unset!important;
      .link-footer {
        background-color: unset!important;
        border-color: var(--divider)!important;
        .footer-linker-line {
          background-color: var(--divider)!important;
        }
      }
    }
    
    .record-download button {
      background: var(--dark-5)!important;
      border-color: var(--dark-6)!important;
      color: var(--dark-font-1)!important;
    }
    
    .side-bar-cntr {
      background-color: var(--dark-card)!important;
      border-color: var(--dark-card)!important;
    }
    
    .flip-view-image-ctnr {
      filter: brightness(0.9);
    }
    
    .pophover>p:first-child {
      color: var(--dark-font-1)!important;
    }
    
    .feed-title {
      border-bottom: 1px solid var(--divider);
    }
    
    ${y}
    `,N=l.createGlobalStyle`
  html {
    background: unset!important;
  }
  body {
    color: var(--dark-font-0);
  }
  input {
    border-color: var(--dark-4)!important;
    outline: none!important;
    color: var(--dark-font-0)!important;
  }
  .suggest-wrap {
    background: var(--dark-card)!important;
    border-color: var(--dark-card)!important;
    color: var(--dark-font-1)!important;
    .horizontal .hz-text:not(:hover) {
      border-color: var(--dark-6);
      color: var(--dark-font-0);
    }
    .title {
      border-color: var(--dark-6);
      span {
        background: var(--dark-card);
      }
    }
    .histories-wrap .histories .history-item {
      background-color: var(--dark-3) !important;
    }
    .trending-item {
      :hover {
        background-color: var(--dark-3) !important;
      }
      .rank.top, .rank.search-rank-top {
        color: var(--dark-font-3) !important;
      }
    }
    .vt-text {
      color: var(--dark-font-0);
      &:hover {
        background-color: var(--dark-3);
      }
    }
    .keyword-wrap .keyword {
      color: var(--dark-font-0);
      &.focus {
        background-color: var(--dark-3);
      }
    }
  }
  //主页
  .home-wrap {
    .home-input {
      .type {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        &.selected, &:hover {
          background-image: linear-gradient(0deg,var(--dark-3),var(--dark-4));
        }
      }
      .list {
        background-color: var(--dark-4);
        border-color: var(--dark-4);
        li:hover {
          background-color: var(--dark-3);
        }
      }
      .content {
        background-color: var(--dark-3)!important;
      }
    }
    .home-suggest {
      .hot-search, .history {
        border-color: var(--dark-5);
      }
      .hotlist {
        .num {
          background-color: var(--dark-4);
          &:not(.special) {
            color: var(--dark-font-1);
          }
        }
        .item {
          border-color: var(--dark-6);
        }
      }
      .history .list .item {
        border-color: var(--dark-6);
        a {
          color: var(--dark-font-0);
        }
      }
    }
  }
  //结果
  .total-wrap .total-text {
    color: var(--dark-font-2);
  }
  .user-list {
    .user-info, .video-info {
      a {
        color: var(--dark-font-0) !important;
      }
    }
  }
  .search-wrap .search-block .input-wrap {
    background-color: var(--dark-3)!important;
  }
  #navigator .v-switcher-header-item {
    border-color: var(--divider);
    a {
      color: var(--dark-font-1);
    }
  }
  .filter-wrap {
    border-color: var(--divider);
    .filter-item:not(active) a {
      color: var(--dark-font-1);
    }
    .fold:hover {
      background-color: var(--dark-2);
    }
    .sub-filter {
      background-color: var(--dark-2);
      border-color: var(--dark-2);
    }
    .filter-wrap_bottom {
      background-color: var(--divider);
    }
  }
  #all-list .mixin-list ul:not(:last-child) {
    border-color: var(--divider);
  }
  .activity-item .info {
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
    .title {
      color: var(--dark-font-0);
    }
    .desc {
      color: var(--dark-font-1);
    }
  }
  .fixed-top {
    background: hsla(0,100%,0%,.9)!important;
  }
  .page-wrap .pager {
    background: unset!important;
    .pages .page-item:not(.active) button:not(:hover) {
      color: var(--dark-font-1);
      background-color: var(--dark-2);
      border-color: var(--dark-3);
    }
  }
  .error-wrap {
    border-color: var(--divider);
    background-color: unset!important;
  }
  //视频
  .video-item.matrix, .video-item.list {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }
  //番剧，影视
  .bangumi-item, .pgc-item {
    border-color: var(--divider);
    .right-info {
      .headline {
        span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2)!important;
        }
        .title {
          color: var(--dark-font-0);
        }
      }
      .intros .value {
        color: var(--dark-font-0);
      }
      .ep-box .ep-sub .ep-item {
        border-color: var(--divider)!important;
        &:not(:hover) {
          color: var(--dark-font-2)!important;
        }
      }
    }
  }
  //直播
  #live-list {
    .live-tabs a {
      color: var(--dark-font-0);
    }
    .headline-live, .headline-room {
      h3 {
        color: var(--dark-font-1);
        .num-txt {
          color: var(--dark-font-2);
        }
      }
    }
    .live-user-wrap .live-user-item {
      box-shadow: 0 0 3px var(--dark-6);
      .item-right {
        .uname {
          color: var(--dark-font-1);
        }
        .status.free {
          background-color: var(--dark-4);
          color: var(--dark-font-1);
        }
        .info .star, .info .type {
          color: var(--dark-font-1);
        }
        .tags>span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2);
        }
      }
    }
    .headline-room .filter a {
      color: var(--dark-font-0);
    }
    .live-room-item {
      .item-title {
        color: var(--dark-font-0);
      }
      .item-info .live-num, .item-info .uname {
        color: var(--dark-font-1);
      }
    }
  }
  //专栏
  .article-item {
    border-color: var(--divider);
    .content .title {
      color: var(--dark-font-0);
    }
  }
  //话题
  .topic-item {
    border-color: var(--divider);
    .content .headline a {
      color: var(--dark-font-0);
    }
  }
  // 游戏
  .game-list {
    .game-item {
      
    }
    .info {
      .headline {
        .title {
          color: var(--dark-font-3);
        }
      }
    }
  }
  //用户
  
  #user-list {
    .dropdown-wrap .select-wrap {
      border-color: var(--divider);
      .bili-dropdown {
        color: var(--dark-font-0);
        .selected {
          color: var(--dark-font-2);
        }
        .dropdown-list {
          background: var(--dark-3);
          border-color: var(--dark-3);
          .dropdown-item:hover {
            background: var(--dark-2);
          }
        }
      }
    }
  }
  .user-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .attention-btn.followed, .attention-btn.followed:hover {
      background: var(--dark-5);
      color: var(--dark-font-1);
    }
    .up-info>span, .desc {
      color: var(--dark-font-1);
    }
    .up-videos .video-item .video-desc {
      color: var(--dark-font-0);
    }
  }
  //相簿
  .photo-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
  }
`,B=l.createGlobalStyle`
  body {
    background-color: unset!important;
  }
  .out-container {
    background-color: var(--dark-3)!important;
    .tab-bar {
      border-color: var(--divider)!important;
    }
  }
  .split-line {
    &:before {
      border-color: var(--divider)!important;
    }
  }
  .history-tip {
    background-color: var(--divider)!important;
  }
  .list-item {
    &:hover {
      background-color: var(--dark-2) !important;
    }
    .center-box {
      .name-line {
        color: var(--dark-font-1)!important;
      }
      .content {
        color: var(--dark-font-1)!important;
      }
    }
  }
`,P=l.createGlobalStyle`
  html {
    background-image: none!important;
  }
  body {
    background-color: unset!important;
  }
  .im-list-box {
    background-color: var(--dark-3)!important;
    color: var(--dark-font-1) !important;
    
    .im-list {
      &:hover {
        background-color: var(--dark-6)!important;
        color: var(--dark-font-0)!important;
      }
    }
  }
`;class R extends r.Component{constructor(e){super(e),(0,n.Z)(this,"hackedCSS",null),(0,n.Z)(this,"copyedHackedCSS",null),(0,n.Z)(this,"state",{showDark:!0}),(0,n.Z)(this,"sysDark",matchMedia("(prefers-color-scheme: dark)")),(0,n.Z)(this,"updateDarkModeListener",()=>{!0===this.props.followSystem?(this.sysDark.matches?(document.body.classList.add("bilibili-helper-dark-mode"),this.inactiveHackedCSS()):(document.body.classList.remove("bilibili-helper-dark-mode"),this.activeHackedCSS()),this.setState({showDark:this.sysDark.matches}),this.sysDark.onchange=()=>{this.setState({showDark:this.sysDark.matches})}):this.sysDark.onchange=null}),(0,n.Z)(this,"activeHackedCSS",()=>{this.copyedHackedCSS&&document.head.appendChild(this.copyedHackedCSS)}),(0,n.Z)(this,"inactiveHackedCSS",()=>{this.hackedCSS&&(this.copyedHackedCSS=this.hackedCSS.cloneNode(),this.hackedCSS.remove())})}componentDidMount(){this.updateDarkModeListener(),new MutationObserver((e,t)=>{for(let i=0;i<e.length;++i){const t=e[i];if(t.addedNodes.length>0){const e=a()(t.addedNodes.values()).filter(e=>"LINK"===e.tagName)[0];e&&"__css-map__"===e.id&&(this.hackedCSS=e,this.state.showDark?this.inactiveHackedCSS():this.activeHackedCSS())}}}).observe(document.head,{childList:!0})}componentDidUpdate(e,t,i){null===e.followSystem&&this.updateDarkModeListener()}}const Z=(e,t=!1,i=!0,n=!0)=>r.createElement(r.Fragment,null,r.createElement(h,null),n?r.createElement(p,null):null,i?r.createElement(u,null):null,t?r.createElement(m,null):null,e);class F extends(875==i.j?R:null){render(){const e=Z([r.createElement(B,{key:"iframeDynamic"})]);return this.state.showDark?e:null}}class q extends(875==i.j?R:null){render(){const e=Z([r.createElement(P,{key:"iframeMessage"})]);return this.state.showDark?e:null}}class j extends(875==i.j?R:null){render(){const e=Z([r.createElement(w,{key:"home"})],!0,!1);return this.state.showDark?((0,s.removeInjectedStyleLink)("homeLight"),(0,s.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):((0,s.removeInjectedStyleLink)("homeDark"),(0,s.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)),this.state.showDark?e:null}}class U extends(875==i.j?R:null){render(){const e=Z([r.createElement(C,{key:"dynamic"}),r.createElement(b,{key:"userPopper"})]);return this.state.showDark?e:null}}class H extends(875==i.j?R:null){render(){const e=Z([r.createElement(L,{key:"read"})]);return this.state.showDark?e:null}}class $ extends(875==i.j?R:null){render(){const e=Z([r.createElement(_,{key:"cv"}),r.createElement(b,{key:"userPopper"})],!0);return this.state.showDark?e:null}}class V extends(875==i.j?R:null){render(){const e=Z([r.createElement(I,{key:"readRank"})],!0);return this.state.showDark?e:null}}class W extends(875==i.j?R:null){render(){const e=Z([r.createElement(A,{key:"message"})]);return this.state.showDark?e:null}}class z extends(875==i.j?R:null){componentDidMount(){super.componentDidMount()}render(){const e=Z([r.createElement(D,{key:"space"}),r.createElement(b,{key:"userPopper"})]);return this.state.showDark?((0,s.removeInjectedStyleLink)("homeLight"),(0,s.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):((0,s.removeInjectedStyleLink)("homeDark"),(0,s.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)),this.state.showDark?e:null}}class G extends(875==i.j?R:null){render(){const e=Z([r.createElement(x,{key:"watchLater"})],!0,!1);return this.state.showDark?e:null}}class J extends(875==i.j?R:null){render(){const e=Z([r.createElement(S,{key:"history"}),r.createElement(g,{key:"footer2"})],!1,!1);return this.state.showDark?e:null}}class Q extends(815==i.j?R:null){componentDidMount(){this.props.showDark&&(0,s.interval)("#__css-map__",200).then(e=>{null===e||void 0===e||e.remove()})}componentDidUpdate(e,t,i){var n;this.props.showDark?(null===(n=document.getElementById("__css-map__"))||void 0===n||n.remove(),(0,s.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):(0,s.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)}render(){const e=Z([r.createElement(T,{key:"videoPlay"}),r.createElement(b,{key:"userPopper"})]);return this.props.showDark?e:null}}class Y extends(875==i.j?R:null){render(){return this.state.showDark?r.createElement(r.Fragment,null,r.createElement(h,null),r.createElement(M,null)," ",r.createElement(b,null)):null}}class X extends(875==i.j?R:null){render(){const e=Z([r.createElement(N,{key:"search"})],!0);return this.state.showDark?e:null}}class K extends(875==i.j?R:null){render(){return(0,s.injectStyleLink)("basicCssMap","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/map.css",!0),this.state.showDark?((0,s.removeInjectedStyleLink)("homeLight"),(0,s.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):((0,s.removeInjectedStyleLink)("homeDark"),(0,s.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)),null}}},67878:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var n=i(33385),o=i(67294),a=i(58971),r=i.n(a);if(815==i.j)var s=i(60677);var l=i(59158),c=i(35867);const d=()=>{const e=(0,s["default"])(l.Button).attrs({className:"bilibili-helper-video-dark-mode-btn"})`
      margin-left: auto;
      height: 22px;
      border-radius: 4px;

      button {
        padding: 0 4px;
        min-width: unset;
        font-size: 12px;
        border: 1px solid #fb7299;
        border-radius: 4px;
        color: ${({active:e})=>e?"#fff":"#fb7299"};
        background-color: ${({active:e})=>e?"#fb7299":"#fff"};
        cursor: pointer;
      }
    `;return class extends o.Component{constructor(e){super(e),(0,n.Z)(this,"handleOnClick",()=>{const e=!this.state.showDark;this.setState({showDark:e}),r().set("videoDark",e),e||!1!==this.darkStore||!this.darkGlobal||this.darkTwoFactor||r().set("videoDarkTwoFactor",!0),e&&!this.darkGlobal&&this.darkTwoFactor&&r().set("videoDarkTwoFactor",!1)}),this.darkStore=r().get("videoDark"),this.darkTwoFactor=r().get("videoDarkTwoFactor"),this.state={showDark:this.darkStore},this.isOldPageOrWatchLater=!!document.querySelector("#__bofqi,.view-later-module, #bangumi_detail")}componentDidMount(){chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{if(this.darkGlobal=e.on,e.on&&!this.darkTwoFactor){if(e.darkFollowSystem){const e=matchMedia("(prefers-color-scheme: dark)");this.setState({showDark:e.matches}),e.onchange=()=>{this.setState({showDark:e.matches})}}else this.setState({showDark:!0});if(!1===this.darkStore){let e=r().get("videoDarkTime");e=void 0!==e?++e:1,e>3?(r().remove("videoDark"),r().remove("videoDarkTime")):r().set("videoDarkTime",e)}}})}render(){const t=this.state.showDark;return o.createElement(o.Fragment,null,o.createElement(e,{active:t&&!this.isOldPageOrWatchLater,onClick:this.handleOnClick},"\u6df1\u8272\u6a21\u5f0f"),o.createElement(c.ch,{showDark:t}))}}}},15402:(e,t,i)=>{"use strict";i.d(t,{J:()=>c});var n=i(33385),o=i(67294),a=i(73935),r=i(35867);const s={iframeDynamic:/t\.bilibili\.com\/pages\/nav\/index_new/,iframeMessage:/message\.bilibili.com\/pages\/nav\/index_new_pc_sync/,home:/^https?:\/\/www\.bilibili\.com\/(\?(spm_id_from|uid)(.*)$|$)/,dynamic:/^https?:\/\/(t\.bilibili\.com\/|www\.bilibili\.com\/opus\/)/,videoPlay:/^https?:\/\/www\.bilibili\.com\/(video\/(av|bv|BV)|bangumi\/play\/(ss|ep))(.*)/,livePlay:/^https?:\/\/live\.bilibili\.com\/(blanc\/)?([0-9]+)/,live:/^https?:\/\/live\.bilibili\.com\//,readCV:/^https?:\/\/www\.bilibili\.com\/read\/cv(.*)/i,readRank:/^https?:\/\/www\.bilibili\.com\/read\/ranking(.*)/,read:/^https?:\/\/www\.bilibili\.com\/read\//,space:/^https?:\/\/space\.bilibili\.com\//,message:/^https?:\/\/message\.bilibili\.com\//,watchLater:/^https?:\/\/www\.bilibili\.com\/watchlater\//,history:/^https?:\/\/www\.bilibili\.com\/account\/history/,search:/^https?:\/\/search\.bilibili\.com\//,blackboardComment:/^https:\/\/www\.bilibili\.com\/blackboard\/comemnt-activity\.html/},l=(e=!1)=>{const t=window.location.href;if(e){if(!s[e])return!1;const i=new RegExp(s[e]);return i.test(t)}for(const i in s){const e=new RegExp(s[i]);if(e.test(t))return i}return!1},c=()=>{class e extends o.Component{constructor(e){super(e),(0,n.Z)(this,"state",{active:!1,pageName:l(),followSystem:null})}componentDidMount(){chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{if(e){var t;const{on:i,followSystem:n}=e;i||n&&null!==(t=matchMedia("(prefers-color-scheme: dark)"))&&void 0!==t&&t.matches?document.body.classList.contains("bilibili-helper-dark-mode")||document.body.classList.add("bilibili-helper-dark-mode"):document.body.classList.remove("bilibili-helper-dark-mode"),this.setState({active:i,followSystem:n})}})}render(){const{active:e,pageName:t,followSystem:i}=this.state;if(!e)return null;switch(t){case"iframeDynamic":return o.createElement(r.pE,{followSystem:i});case"iframeMessage":return o.createElement(r.cJ,{followSystem:i});case"home":return o.createElement(r.A3,{followSystem:i});case"dynamic":return o.createElement(r.PF,{followSystem:i});case"readCV":return o.createElement(r.NO,{followSystem:i});case"readRank":return o.createElement(r.Fp,{followSystem:i});case"read":return o.createElement(r.cE,{followSystem:i});case"message":return o.createElement(r.gX,{followSystem:i});case"space":return o.createElement(r.ZN,{followSystem:i});case"watchLater":return o.createElement(r._l,{followSystem:i});case"history":return o.createElement(r.nr,{followSystem:i});case"livePlay":return e?o.createElement(r.Ue,{followSystem:i}):null;case"search":return o.createElement(r.bF,{followSystem:i});case"blackboardComment":return o.createElement(r.$9,{followSystem:i});default:return null}}}const t=document.createElement("div");a.render(o.createElement(e,null),t)}},20449:(e,t,i)=>{"use strict";i.d(t,{t:()=>a,p:()=>N});var n=i(33385),o=i(69759);class a extends o.Feature{constructor(e){super(e,"darkMode",{settings:{on:!1,followSystem:!0}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}var r=i(26243),s=i.n(r),l=i(62680),c=i.n(l),d=i(95366),h=i.n(d),u=i(6919),p=i.n(u),m=i(93364),g=i.n(m),b=i(26771),f=i.n(b),v=i(90487),y=i.n(v),k=i(18281),w=i.n(k),x=i(73473),S=i.n(x),C=i(54805),L=i(84564),_=i.n(L);class I extends o.Feature{constructor(e,t){super(e,"sniffer"+t,{}),(0,n.Z)(this,"tabId",void 0),(0,n.Z)(this,"dataMap",{pathnameList:[],data:{},categories:{image:{},application:{},text:{},directory:{},size:{}},sortList:{image:null,application:null,text:null,directory:null,size:null}}),(0,n.Z)(this,"pathnameList",new(y())),(0,n.Z)(this,"initialized",!1),(0,n.Z)(this,"categoriesCacheList",new(y())),(0,n.Z)(this,"createObjectByPath",(e,t,i={})=>{if(this.categoriesCacheList.has(t))return e;const n=t.split("|");let o=e;for(const a of n){if(void 0===o[a]){if(n.length===n.indexOf(a)+1)return o[a]=i,e;o[a]={}}o=o[a]}return this.categoriesCacheList.add(t),e}),this.tabId=t}get isInitialized(){return this.initialized}async onLaunch(){chrome.tabs.onRemoved.addListener(this.onRemovedCallback)}frontendInitialized(){this.initialized=!0}add(e,t,i){return new(S())(n=>{this.dealWithURLObject(i),this.pathnameList.has(i.pathname)?n(!1):(this.pathnameList.add(i.pathname),this.dealWith(e,t,i).then(i=>{const{size:n,directory:o,pathname:a}=i;this.createObjectByPath(this.dataMap,`categories|${e}|${t}`,[]),n&&this.createObjectByPath(this.dataMap,"categories|size|"+n,[]),this.createObjectByPath(this.dataMap,"categories|directory|"+o,[]),this.pushData(`categories|${e}|${t}`,a),n&&this.pushData("categories|size|"+n,a),this.pushData("categories|directory|"+o,a),this.dataMap.data[a]=i,this.dataMap.pathnameList.unshift(a)}).then(()=>{n(!0)}).catch(()=>{n(!1)}))})}dealWithURLObject(e){try{const{pathname:t}=e,i=t.split("/").filter(Boolean),n="/"+i.slice(0,-1).join("/"),o=i.slice(-1).pop();if(o){const t=o,i=t?t.split(".").slice(-1).pop():void 0;e.filename=t,e.extension=i}if(e.directory=n,e.urlObject){for(const t in e.urlObject)e[t]=e.urlObject[t];delete e.urlObject}}catch(t){}}async dealWith(e,t,i){switch(e){case"image":return this.dealWithImage(i);default:return i}}dealWithWEBP(e){try{const[t,i]=e.filename.split("@");if(!i)return;const n=e.origin+"/"+e.directory+"/"+t;e.originUrl=e.url,e.webpFilename=e.filename,e.url=n,e.urlObject=new(_())(n,"",!0),this.dealWithURLObject(e)}catch(t){}}async dealWithImage(e){return new(S())(t=>{const i=new Image;i.onload=()=>{e.width=i.naturalWidth,e.height=i.naturalHeight;const n=[e.width,e.height].join("\xd7");e.size=n,t(e)},i.src=e.originUrl||e.url})}sendData(){this.sortCategory(),chrome.tabs.sendMessage(this.tabId,{command:"snifferData",data:this.dataMap})}pushData(e,t){const i=e.split("|");let n=this.dataMap;for(const o of i){if(i.length===i.indexOf(o)+1)return n[o].unshift(t),!0;n=n[o]}}sortCategory(){const e=s()(this.dataMap.categories.size),t=e.sort((e,t)=>{const[i,n]=e.split("\xd7"),[o,a]=t.split("\xd7");return+i<+o?-1:1});this.dataMap.sortList.size=t;const i=s()(this.dataMap.categories.directory),n=i.sort((e,t)=>e in C.z&&!(t in C.z)?-1:1);this.dataMap.sortList.directory=n}onRemovedCallback(e){e===this.tabId&&this.destroy()}destroy(){chrome.tabs.onRemoved.removeListener(this.onRemovedCallback),this.app.destroySnifferCache(this.tabId)}toJSON(){return{tabId:this.tabId,data:this.dataMap}}}function E(e,t){var i=s()(e);if(c()){var n=c()(e);t&&(n=n.filter((function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function A(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):p()?g()(e,p()(i)):E(Object(i)).forEach((function(t){f()(e,t,h()(i,t))}))}return e}const D=["data.bilibili.com","api.bilibili.com","api.live.bilibili.com","cm.bilibili.com"],O=["video"],T=["image"],M=["css","x-javascript","javascript","html","json","octet-stream","plain"];class N extends o.Feature{constructor(e){super(e,"sniffer",{settings:{on:!1}}),(0,n.Z)(this,"startTabIdList",new(y())),(0,n.Z)(this,"snifferCaches",new(w())),(0,n.Z)(this,"sentTimerMap",new(w())),(0,n.Z)(this,"completedWatcher",e=>{if(this.settings.on)try{const t=this.filterRequest2Sniffer(e);if(!t)return;const{url:i,tabId:n,type:o,subType:a,urlObject:r}=t;this.snifferCaches.has(n)||this.snifferCaches.set(n,new I(this,n));const s=this.snifferCaches.get(n),l=A({url:i,tabId:n,type:o,subType:a},r);s.add(o,a,l).then(e=>{if(s.isInitialized&&e){this.sentTimerMap.has(n)&&clearTimeout(this.sentTimerMap.get(n));const e=setTimeout(()=>{s.sendData(),clearTimeout(this.sentTimerMap.get(n)),this.sentTimerMap.delete(n)},400);this.sentTimerMap.set(n,e)}})}catch(t){}}),(0,n.Z)(this,"filterRequest2Sniffer",e=>{var t,i;const{statusCode:n,tabId:o,frameId:a,url:r,initiator:s,responseHeaders:l}=e,c=new(_())(r,"",!0),d=s?new URL(s):null;if(!d||"chrome-extension:"===(null===d||void 0===d?void 0:d.protocol)||D.includes(c.host))return!1;let h=null===(t=l.find(({name:e})=>"content-type"===e.toLowerCase()))||void 0===t?void 0:t.value;if(!h)return!1;h.includes("charset")&&(h=(h.split(";")[0]||"").trim());const[u,p]=null===(i=h)||void 0===i?void 0:i.split("/");return!!T.includes(u)&&(!O.includes(u)&&!M.includes(p)&&A(A({},e),{},{type:u,subType:p,contentType:h,urlObject:c}))}),(0,n.Z)(this,"startGetCurrentTabSnifferData",async()=>{if(!this.settings.on)return;const e=await this.getCurrentTab();null!==e&&void 0!==e&&e.id&&(this.snifferCaches.has(e.id)||await chrome.tabs.reload(e.id),this.startTabIdList.add(e.id),chrome.tabs.sendMessage(e.id,{command:"showSnifferViewer"}))}),(0,n.Z)(this,"getCurrentTab",async()=>new(S())(e=>{chrome.tabs.query({active:!0,currentWindow:!0,windowType:"normal"},([t])=>{e(t||null)})})),(0,n.Z)(this,"destroySnifferCache",e=>{this.snifferCaches.delete(e)}),(0,n.Z)(this,"domInitialized",(e,t)=>{var i,n;if(!this.settings.on)return;const o=this.snifferCaches.get(null===t||void 0===t||null===(i=t.tab)||void 0===i?void 0:i.id);null!==t&&void 0!==t&&t.tab&&null!==t&&void 0!==t&&null!==(n=t.tab)&&void 0!==n&&n.id&&o&&(o.initialized||this.snifferCaches.get(t.tab.id).frontendInitialized(),this.startTabIdList.has(t.tab.id)&&(this.startTabIdList.delete(t.tab.id),chrome.tabs.sendMessage(t.tab.id,{command:"showSnifferViewer"})))}),(0,n.Z)(this,"checkPermission",(e,t,i)=>{if(!this.settings.on)return i(!1);this.getCurrentTab().then(e=>{if(e){const t=new URL(e.url);if("chrome-extension:"===t.protocol)return void i(!1);this.emit("permissionController","containOrigins",[e.url],i)}else i(!1)})}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})}),window.snifferCaches=this.snifferCaches}async onLaunch(){this.addListener("startGetCurrentTabSnifferData",()=>{this.settings.on&&this.startGetCurrentTabSnifferData()}),this.addListener("snifferDOMInitialized",this.domInitialized),this.addListener("getCurrentTabSnifferData",(e,t)=>{var i;t.tab&&this.snifferCaches.has(t.tab.id)&&(null===(i=this.snifferCaches.get(t.tab.id))||void 0===i||i.sendData())}),this.addListener("checkPermission",this.checkPermission),await this.emit("webRequestController","create",{name:"snifferNormalType",eventName:"onCompleted",filter:{urls:["*://*.bilibili.com/*","*://*.hdslb.com/*"]},options:["responseHeaders","extraHeaders"],callback:this.completedWatcher})}async onPause(){await this.emit("webRequestController","clear",{name:"snifferNormalType"})}}},7085:(e,t,i)=>{"use strict";i.d(t,{C:()=>A});var n=i(69055),o=i(33385),a=i(26243),r=i.n(a),s=i(67294),l=i(60677),c=i(88686),d=i(54805),h=i(71338),u=i(48903);const p=s.createContext({});(0,u.injectIconfont)("font_1690169_snaprnjkjk");const m=(e,t)=>{chrome.runtime.sendMessage({target:"downloadController",event:"create",name:t||e,data:{filename:t,url:e}})},g=(0,l["default"])(c.Modal)`
  ${h.$};

  &.sniffer-viewer-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: auto;
    max-width: calc(100% - 64px);
    max-height: calc(100% - 64px);
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  }


  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode &.sniffer-viewer-modal {
  //  background-color: var(--dark-1);
  //  color: var(--dark-font-3);
  //}

  //}

  .modal-body {
    padding: 0;
  }

  .viewer-header {
    display: flex;
    padding: 8px 8px 8px 16px;

    .title {
      margin-right: 6px;
      line-height: 36px;
      font-size: 22px;
      font-weight: 300;

      .bilibili-helper-2-icon-cat {
        margin-right: 4px;
        width: fit-content;
        line-height: 22px;
        color: var(--bilibili-pink);
      }

      .bilibili-helper-2-icon-bigData {
        vertical-align: baseline;
        margin-right: 4px;
      }
    }
  }

  .dev-sign {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    background-color: var(--google-yellow-700);
    padding: 2px 0 0 6px;
    color: white;
    font-weight: 300;
    border-radius: 4px 0 0 0;

    a {
      margin-left: 4px;
      color: white;
    }
  }
`,b=l["default"].div`
  display: flex;
  align-items: center;
  margin-right: auto;

  .filter-list-header {
    margin: 4px;
  }
`,f=l["default"].div`
  display: flex;
  margin: 0 4px;
  font-size: 12px;
  cursor: pointer;

  .filter-name {
    margin-right: 2px;
  }
`,v={add:"+",minus:"-"},y=({title:e,name:t,value:i,operate:n})=>{const{removeFilter:o}=(0,s.useContext)(p),a=(0,s.useCallback)(()=>{o(t,i)},[e,t,i,n]);return s.createElement(f,{onClick:a},v[n],s.createElement("span",{className:"filter-name"},e),"[ ",s.createElement("span",{className:"filter-value"},i)," ]")},k=l["default"].div`
  position: sticky;
  top: 0;
  margin-right: 4px;
  padding: 0px 16px 6px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 160px;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--paper-grey-50);
  user-select: none;
  -webkit-user-drag: none;
  overflow: hidden auto;

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  background-color: var(--paper-grey-900);
  //}

  //}

  .type-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .category-name {
      //font-weight: bold;
      margin-top: 6px;
      margin-bottom: 4px;
      font-size: 12px;
    }

    .type-item-title {
      margin-bottom: 1px;
      padding: 2px 4px;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;

      :hover {
        background-color: var(--google-grey-300);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: #303030;;
        //}

        //}
      }
    }

    .type-item {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      cursor: pointer;
      margin-bottom: 6px;

      &.active {
        .type-item-title {
          //font-weight: bold;
          background-color: var(--google-grey-300);
          //@media (prefers-color-scheme: dark) {
          //.bilibili-helper-dark-mode & {
          //  background-color: #303030;;
          //}

          //}
        }
      }
    }
  }

  .sub-type-list {
    display: flex;
    flex-direction: column;
    //padding: 4px 20px;

    .sub-type-item {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      margin-left: 8px;
      margin-bottom: 1px;
      padding: 2px 2px 2px 0;
      border-radius: 4px;
      font-size: 14px;
      white-space: break-spaces;
      word-break: break-all;
      cursor: pointer;
      overflow: hidden;

      :hover {
        background-color: var(--google-grey-300);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: #303030;;
        //}

        //}
      }

      .name {
        display: -webkit-box;
        margin-right: auto;
        padding: 0px 4px;
        border-radius: 4px;
        font-size: 12px;
        text-align: justify;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        overflow: hidden;
      }

      .count {
        flex-shrink: 0;
        display: block;
        margin-left: 3px;
        min-width: 16px;
        width: fit-content;
        height: 16px;
        line-height: 16px;
        border-radius: 2px;
        font-size: 12px;
        text-align: center;
        background-color: var(--bilibili-gray);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: var(--paper-grey-900);
        //}

        //}
      }

      &.active {
        //font-weight: bold;
        background-color: var(--google-grey-300);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: #303030;;
        //}

        //}
      }
    }
  }
`,w=l["default"].div`
  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;
  display: flex;
  height: calc(100% - 116px + 32px + 32px - 20px);
  overflow: auto;

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  color: var(--dark-font-3);
  //}

  //}
`,x=l["default"].div`
  flex-grow: 1;
  padding: 8px 8px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  //grid-template-rows: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 8px;

  .type-container {
    margin-bottom: 16px;

    :last-of-type {
      margin-bottom: 0;
      padding-bottom: 50px;
    }

    .container-name {
      position: sticky;
      top: 0;
      display: block;
      align-items: center;
      margin-right: 8px;
      padding: 4px 4px 4px;
      height: 20px;
      line-height: 20px;
      text-indent: 12px;
      background-color: #f1f1f1;
      z-index: 1;
    }

    .container-items {
      padding: 8px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      grid-gap: 8px;

      :empty:after {
        content: '没有内容';
        font-size: 12px;
      }
    }
  }

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  .type-container {
  //    .container-name {
  //      background-color: #222;
  //    }
  //  }
  //}

  //}
`,S=l["default"].div`
  display: flex;
  flex-direction: column;
  margin: 4px 4px 8px;
  padding: 8px;
  height: fit-content;
  border-radius: 4px;
  //overflow: hidden;

  &.selected {

  }

  :hover {
    box-shadow: inset 0 0 1px var(--paper-grey-900);

    .param-list {
      opacity: 1;
    }

    //@media (prefers-color-scheme: dark) {
    

    //}
  }
  //.bilibili-helper-dark-mode &:hover {
  //  box-shadow: inset 0 0 1px var(--paper-grey-500);
  //}

  .img-wrapper {
    position: relative;
    display: flex;
    //flex-grow: 1;
    align-items: center;
    justify-content: center;
    min-height: 120px;

    :hover {
      .action-wrapper {
        opacity: 1;
      }

      .img, .no-image-preview {
        filter: blur(4px);
      }
    }

    .img {
      display: block;
      margin: 0 auto;
      max-width: 200px;
      min-width: 10px;
      width: auto;
      max-height: 120px;
      min-height: 10px;
      height: initial;
      object-fit: contain;
      background-color: var(--bilibili-gray);
      box-shadow: inset 0 0 1px #bbb;
      -webkit-user-drag: none;
      image-rendering: pixelated;
      
      //@media (prefers-color-scheme: dark) {
      //.bilibili-helper-dark-mode & {
      //  background-color: var(--paper-grey-900);
      //}
      //}
    }

    

    .no-image-preview {
      text-align: center;

      .file-sub-type {
        font-size: 12px;
      }
    }

    .action-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      //visibility: hidden;
      z-index: 1;
      //backdrop-filter: blur(4px);
      opacity: 0;
      transition: opacity .2s;

      .button {
        margin-right: 8px;
        box-shadow: 0 0 1px var(--paper-grey-900);
        color: var(--paper-grey-1000);
        background-color: var(--bilibili-gray);

        :last-of-type {
          margin-right: 0;
        }
      }
    }
  }


  .param-list {
    margin-top: 4px;
    font-size: 12px;
    opacity: .7;
    //color: var(--paper-grey-500);
    //@media (prefers-color-scheme: dark) {
    //.bilibili-helper-dark-mode & {
    //  color: var(--paper-grey-600);
    //}

    //}
  }

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  //:hover {
  //  //  background-color: var(--paper-grey-900);
  //  //}
  //  .img {
  //    box-shadow: inset 0 0 1px #555;
  //  }
  //
  //  .img-wrapper {
  //    .action-wrapper {
  //      //background-color: var(--paper-grey-900);
  //      .button {
  //        color: var(--bilibili-gray);
  //        background-color: var(--paper-grey-1000);
  //        box-shadow: 0 0 1px var(--paper-grey-400);
  //      }
  //    }
  //  }
  //}

  //}
`,C=l["default"].div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 4px;
  line-height: 16px;
  font-family: sans-serif;
  user-select: none;
  -webkit-user-drag: none;

  &.filter {
    .param-value {
      margin: 0px -3px;
      padding: 0px 3px;
      border-radius: 2px;
      cursor: pointer;

      :hover {
        background-color: var(--paper-grey-300);
      }

      //.bilibili-helper-dark-mode &:hover {
      //  background-color: var(--paper-grey-800);
      //}
    }
  }

  :last-of-type {
    margin-bottom: 0;
  }

  .param-name {
    margin-right: 4px;
    //transform: scale(0.9);
    //transform-origin: bottom;
  }

  .param-value-wrapper {
    display: flex;
    flex-wrap: wrap;

    .param-value {
      margin-right: 3px;
      display: -webkit-box;
      width: fit-content;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      white-space: break-spaces;

      :last-of-type {
        margin-right: 0;
      }
    }
  }

`,L=({title:e,name:t,value:i,data:n,isFilter:o})=>{const{addFilter:a}=(0,s.useContext)(p),r=(0,s.useCallback)((n,r)=>{o&&a(e,n||t,r||i,"add")},[e,t,i,o]);return s.createElement(C,{className:o?"filter":""},s.createElement("span",{className:"param-name",title:e},e,":"),s.createElement("div",{className:"param-value-wrapper"},n?n.map(({name:e,value:t},i)=>s.createElement("span",{key:i,className:"param-value",title:t,onClick:()=>r(e,t)},t)):s.createElement("span",{className:"param-value",title:i,onClick:()=>r()},i)))},_=e=>{const{url:t,originUrl:i,type:n,subType:o,size:a,directory:r,filename:l,pathname:h}=e,u=(0,s.useRef)(null),[g,b]=(0,s.useState)(!0),f=(0,s.useContext)(p),{filters:v,setPreview:y}=f,k=((0,s.useCallback)(()=>{y(h)},[]),(0,s.useCallback)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"sniffer",action:"click_download"}),m(t,l)},[t,l]));return(0,s.useEffect)(()=>{if(v.length>0){let t=!0;for(const{name:i,value:n,operate:o}of v)t="add"===o?t&&(e[i]===n||d.z[e[i]]===n):t&&!(e[i]===n||d.z[e[i]]===n);g!==t&&b(t)}else g||b(!0)},[f,g]),g?s.createElement(S,{key:t},s.createElement("div",{className:"img-wrapper"},"image"===n?s.createElement(c.Image,{url:i||t,ref:u}):s.createElement("div",{className:"no-image-preview"},s.createElement(c.Icon,{icon:"file",size:40}),s.createElement("div",{className:"file-sub-type"},o)),s.createElement("div",{className:"action-wrapper"},s.createElement(c.Button,{className:"download-btn",icon:"cloud-download",iconSize:26,onClick:k}))),s.createElement("div",{className:"param-list"},s.createElement(L,{title:"\u7c7b\u578b",data:[{name:"type",value:n},{name:"subType",value:o}],isFilter:!0}),a?s.createElement(L,{title:"\u5c3a\u5bf8",name:"size",value:a,isFilter:!0}):null,s.createElement(L,{title:"\u8def\u5f84",data:[{name:"directory",value:d.z[r]},{name:"directory",value:r}],isFilter:!0}))):null},I=(0,l["default"])(c.Modal)`
  ${h.$};

  &.previewer-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: auto;
    max-width: calc(100% - 64px);
    max-height: calc(100% - 64px);
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  }

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode &.previewer-modal {
  //  background-color: var(--dark-1);
  //  color: var(--dark-font-3);
  //}

  //}

  .modal-body {
    display: flex;
    padding: 0;
    height: 100%;
    max-height: 100%;
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
  }

  .left-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 12px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);

    .img {
      object-fit: contain;
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
    }
  }

  .right-container {
    flex-shrink: 0;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: var(--Pi0);
    border-radius: 0 4px 4px 0;
  }

  .side {

    .header {

    }

    .info-wrapper {

    }
  }
`,E=()=>{const e=(0,s.useContext)(p),[t,i]=(0,s.useState)(null),{previewPathname:n,clearPreview:o,data:a}=e,r=(0,s.useCallback)(()=>{o()},[e]);return(0,s.useEffect)(()=>{!!n!==!!t&&i(n?a[n]:null)},[e]),s.createElement(I,{className:"previewer-modal",open:!!t,onClickMask:r},s.createElement(c.Button,{className:"close-btn",icon:"close",iconSize:26,onClick:r}),s.createElement("div",{className:"left-container"},s.createElement("div",{className:"header"}),s.createElement("div",{className:"image-wrapper"},t&&"image"===(null===t||void 0===t?void 0:t.type)?s.createElement(c.Image,{url:t.url,width:t.width,height:t.height}):null)),s.createElement("div",{className:"side"},s.createElement("div",{className:"header"}),s.createElement("div",{className:"info-wrapper"})))};class A extends s.Component{constructor(e){super(e),(0,o.Z)(this,"state",{show:!1,categories:{},pathnameList:[],data:{},currentType:null,currentSubType:null,sortList:{},previewPathname:null,filters:[{title:"\u7c7b\u578b",name:"type",value:"image",operate:"add"}],addFilter:(e,t,i,n="add")=>{this.shiftDown&&(n="minus");const{filters:o}=this.state,a=o.find(({name:e,value:n})=>t===e&&i===n);a?a.operate!==n?(a.operate=n,this.setState({filters:o})):this.state.removeFilter(t,i):(o.push({title:e,name:t,value:i,operate:n}),this.setState({filters:o}))},removeFilter:(e,t)=>{const{filters:i}=this.state,n=i.findIndex(({name:i,value:n})=>e===i&&t===n);n>=0&&(i.splice(n,1),this.setState({filters:i}))},setPreview:(e=null)=>{this.setState({previewPathname:e})},clearPreview:()=>{this.setState({previewPathname:null})}}),(0,o.Z)(this,"shiftDown",!1),(0,o.Z)(this,"handleOnClickCloseBtn",()=>{this.setState({show:!1},()=>{document.body.style.overflow=""})}),(0,o.Z)(this,"handleOnClickType",e=>{switch(e){case"size":case"directory":return;default:return this.state.addFilter("\u7c7b\u522b","type",e)}}),(0,o.Z)(this,"handleOnClickSubType",(e,t)=>{switch(e){case"size":return this.state.addFilter("\u7c7b\u522b",e,t);case"directory":return this.state.addFilter("\u8def\u5f84",e,t);default:return this.state.addFilter("\u5b50\u7c7b\u522b","subType",t)}})}componentDidMount(){document.addEventListener("keydown",e=>{"Shift"===e.key&&(this.shiftDown=!0)}),document.addEventListener("keyup",e=>{"Shift"===e.key&&(this.shiftDown=!1)}),window.addEventListener("message",e=>{var t;"showSnifferViewer"===(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.command)&&this.setState({show:!0},()=>{document.body.style.overflow="hidden"})}),chrome.runtime.onMessage.addListener((e,t,i)=>{if("showSnifferViewer"===e.command)this.setState({show:!0},()=>{document.body.style.overflow="hidden"}),chrome.runtime.sendMessage({target:"sniffer",event:"getCurrentTabSnifferData"});else if("getViewerState"===e.command)i(this.state.show);else if("snifferData"===e.command&&e.data){const{categories:t,data:n,sortList:o,pathnameList:a}=e.data,r={categories:t,data:n,sortList:o,pathnameList:a};this.setState(r),i(!0)}return!0}),chrome.runtime.sendMessage({target:"sniffer",event:"snifferDOMInitialized"})}render(){const{show:e,categories:t,data:i,sortList:o,pathnameList:a,filters:l,currentType:h,currentSubType:u}=this.state;return s.createElement(p.Provider,{value:this.state},s.createElement(g,{open:e,className:"sniffer-viewer-modal",onClickMask:this.handleOnClickCloseBtn},s.createElement("header",{className:"viewer-header"},s.createElement("div",{className:"title"},s.createElement(c.Icon,{icon:"cat",size:28}),"\u8d44\u6e90\u7ba1\u7406\u5668"),s.createElement(b,{className:"filter-list"},l.length>0?s.createElement("span",{className:"filter-list-header"},"\u8fc7\u6ee4\u5668:"):null,l.length>0?l.map(e=>s.createElement(y,(0,n.Z)({key:e.key+e.value},e))):null),s.createElement(c.Button,{icon:"close",iconSize:26,onClick:this.handleOnClickCloseBtn})),s.createElement(w,{className:"sniffer-viewer-content"},s.createElement(k,{className:"sniffer-viewer-side"},s.createElement("div",{className:"type-list"},s.createElement("div",{className:"category-name"},"\u7c7b\u578b / \u683c\u5f0f:"),r()(t).map(e=>s.createElement("div",{key:e,className:["type-item",e===h?"active":null].filter(Boolean).join(" ")},s.createElement("div",{className:"type-item-title",onClick:()=>this.handleOnClickType(e)},e),s.createElement("div",{className:"sub-type-list"},e?(o[e]||r()(t[e])).map(i=>s.createElement("div",{key:i,className:["sub-type-item",i===u?"active":null].filter(Boolean).join(" "),onClick:()=>this.handleOnClickSubType(e,i)},s.createElement("span",{className:"name",title:i},d.z[i]||i),s.createElement("span",{className:"count"},t[e][i].length))):null))))),s.createElement(x,{className:"sniffer-viewer-item-container"},e?a.map(e=>{const t=i[e];return s.createElement(_,(0,n.Z)({key:e},t))}):null)),s.createElement("div",{className:"dev-sign"},"\u6253\u5305\u4e0b\u8f7d\u529f\u80fd\u6682\u672a\u5f00\u653e\u3002\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u5982\u6709\u95ee\u9898\u6216\u5efa\u8bae\u8bf7",s.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u8054\u7cfb\u300c\u52a9\u624b\u732b\u300d"))),s.createElement(E,null))}}},54805:(e,t,i)=>{"use strict";i.d(t,{z:()=>n});const n={"/bfs/archive":"\u89c6\u9891\u5c01\u9762","/bfs/bangumi/image":"\u756a\u5267\u5c01\u9762","/bfs/vip":"VIP\u76f8\u5173","/bfs/static/blive/blfe-dynamic-web/static/img":"\u52a8\u6001\u8d44\u6e90","/bfs/album":"\u76f8\u518c","/bfs/face":"\u7528\u6237\u5934\u50cf","/bfs/emote":"\u8868\u60c5","/bfs/garb/item":"\u88c5\u626e","/bfs/article":"\u6587\u7ae0\u8d44\u6e90","/bfs/static/jinkela/article-web/asserts":"\u9875\u9762\u8d44\u6e90","/bfs/seed/jinkela/commentpc/static/img":"\u4e00\u822c\u9759\u6001\u8d44\u6e90","/bfs/article/banner":"\u6587\u7ae0\u5934\u56fe","/bfs/space":"\u7a7a\u95f4","/bfs/static/jinkela/space/assets":"\u4e2a\u4eba\u7a7a\u95f4\u8d44\u6e90","/bfs/seed/jinkela/header-v2/images":"\u5934\u56fe","/bfs/music":"\u97f3\u4e50","/bfs/live/new_room_cover":"\u76f4\u64ad\u95f4\u5c01\u9762"}},29008:()=>{},33718:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Aria2c:()=>m.p,BilibiliLiveBroadcast:()=>a.Th,BilibiliMessage:()=>a.p6,CvImageDownload:()=>h.q,DEFAULT_CUSTOM_SECTION_LIST:()=>n.v0,DarkMode:()=>p.t,HistoryWatched:()=>n.pU,MESSAGE_TYPE_STRING:()=>a.tC,MainAnime:()=>n.TI,MainCreator:()=>n.jk,MainFavlist:()=>n.cw,MainHome:()=>n.qA,MainLive:()=>n.ss,MainManga:()=>n.Zm,NEW_DEFAULT_CUSTOM_SECTION_LIST:()=>n.zO,Popup:()=>n.GI,PopupMain:()=>n.W8,PopupMenu:()=>n.ZE,PopupSearcher:()=>n.d_,RemoveSelectionLimit:()=>h.J,RenameDownloadFile:()=>m.L,Sniffer:()=>p.p,SpecialAttention:()=>o.M,SubscriptionDynamic:()=>a.vN,VideoShortcuts:()=>r.J});var n=i(27144),o=i(76063),a=i(99837),r=i(68399),s=i(97754),l={};for(const b in s)["default","DEFAULT_CUSTOM_SECTION_LIST","HistoryWatched","MainAnime","MainCreator","MainFavlist","MainHome","MainLive","MainManga","NEW_DEFAULT_CUSTOM_SECTION_LIST","Popup","PopupMain","PopupMenu","PopupSearcher","SpecialAttention","BilibiliLiveBroadcast","BilibiliMessage","MESSAGE_TYPE_STRING","SubscriptionDynamic","VideoShortcuts"].indexOf(b)<0&&(l[b]=()=>s[b]);i.d(t,l);var c=i(28792);l={};for(const b in c)["default","DEFAULT_CUSTOM_SECTION_LIST","HistoryWatched","MainAnime","MainCreator","MainFavlist","MainHome","MainLive","MainManga","NEW_DEFAULT_CUSTOM_SECTION_LIST","Popup","PopupMain","PopupMenu","PopupSearcher","SpecialAttention","BilibiliLiveBroadcast","BilibiliMessage","MESSAGE_TYPE_STRING","SubscriptionDynamic","VideoShortcuts","AutoMedal","AutoSignIn","ChatFilter","Incognito","LiveAutoQuality","LiveAutoWiden","LiveChatMode","LiveEmoji","Silver2coin"].indexOf(b)<0&&(l[b]=()=>c[b]);i.d(t,l);var d=i(15866);l={};for(const b in d)["default","DEFAULT_CUSTOM_SECTION_LIST","HistoryWatched","MainAnime","MainCreator","MainFavlist","MainHome","MainLive","MainManga","NEW_DEFAULT_CUSTOM_SECTION_LIST","Popup","PopupMain","PopupMenu","PopupSearcher","SpecialAttention","BilibiliLiveBroadcast","BilibiliMessage","MESSAGE_TYPE_STRING","SubscriptionDynamic","VideoShortcuts","AutoMedal","AutoSignIn","ChatFilter","Incognito","LiveAutoQuality","LiveAutoWiden","LiveChatMode","LiveEmoji","Silver2coin","AutoLikeCoinCollect","VideoAutoPlayMode","VideoAutoPlaySpeed","VideoAutoQuality","VideoDanmu","VideoDownload","VideoHideDanmu","VideoSubtitleDownload","VideoWiden","WatchLater"].indexOf(b)<0&&(l[b]=()=>d[b]);i.d(t,l);var h=i(83377);if(869==i.j)var u=i(29008);l={};for(const b in u)["default","DEFAULT_CUSTOM_SECTION_LIST","HistoryWatched","MainAnime","MainCreator","MainFavlist","MainHome","MainLive","MainManga","NEW_DEFAULT_CUSTOM_SECTION_LIST","Popup","PopupMain","PopupMenu","PopupSearcher","SpecialAttention","BilibiliLiveBroadcast","BilibiliMessage","MESSAGE_TYPE_STRING","SubscriptionDynamic","VideoShortcuts","AutoMedal","AutoSignIn","ChatFilter","Incognito","LiveAutoQuality","LiveAutoWiden","LiveChatMode","LiveEmoji","Silver2coin","AutoLikeCoinCollect","VideoAutoPlayMode","VideoAutoPlaySpeed","VideoAutoQuality","VideoDanmu","VideoDownload","VideoHideDanmu","VideoSubtitleDownload","VideoWiden","WatchLater","AutoTakeVipPrivilege","CustomWhisperMessage","Omnibox","QuickSearch","CvImageDownload","RemoveSelectionLimit"].indexOf(b)<0&&(l[b]=()=>u[b]);i.d(t,l);var p=i(20449),m=i(70939),g=i(73614);l={};for(const b in g)["default","DEFAULT_CUSTOM_SECTION_LIST","HistoryWatched","MainAnime","MainCreator","MainFavlist","MainHome","MainLive","MainManga","NEW_DEFAULT_CUSTOM_SECTION_LIST","Popup","PopupMain","PopupMenu","PopupSearcher","SpecialAttention","BilibiliLiveBroadcast","BilibiliMessage","MESSAGE_TYPE_STRING","SubscriptionDynamic","VideoShortcuts","AutoMedal","AutoSignIn","ChatFilter","Incognito","LiveAutoQuality","LiveAutoWiden","LiveChatMode","LiveEmoji","Silver2coin","AutoLikeCoinCollect","VideoAutoPlayMode","VideoAutoPlaySpeed","VideoAutoQuality","VideoDanmu","VideoDownload","VideoHideDanmu","VideoSubtitleDownload","VideoWiden","WatchLater","AutoTakeVipPrivilege","CustomWhisperMessage","Omnibox","QuickSearch","CvImageDownload","RemoveSelectionLimit","DarkMode","Sniffer","Aria2c","RenameDownloadFile"].indexOf(b)<0&&(l[b]=()=>g[b]);i.d(t,l)},15141:(e,t,i)=>{"use strict";var n=i(73473),o=i.n(n),a=i(88686),r=i(48903);const s=async()=>{const e="sendRoomData";return await(0,r.getPageDataInWindow)(`(() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window.__SSR_INITIAL_STATE__ || window.__NEPTUNE_IS_MY_WAIFU__ || window.__STORE__) {\n                    window.postMessage({command: '${e}', pageData: {...(\n                        window.__SSR_INITIAL_STATE__ ||\n                        window.__NEPTUNE_IS_MY_WAIFU__ ||\n                        window.__STORE__\n                    )\n                }}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()`,e)},l=async()=>{var e;const t=await s();if(!t)return a.Message.error("\u76f4\u64ad\u95f4\u6570\u636e\u89e3\u6790\u5931\u8d25");const i=(null===t||void 0===t?void 0:t.baseInfoRoom)||(null===t||void 0===t||null===(e=t.roomInfoRes)||void 0===e?void 0:e.data),n=null===t||void 0===t?void 0:t.baseInfoAnchor;if(null!==i&&void 0!==i&&i.anchor_info){const{medal_info:e}=i.anchor_info;return(null===e||void 0===e?void 0:e.medal_id)||!1}return n&&(null===n||void 0===n?void 0:n.medalId)||!1},c=()=>(0,r.interval)("#chat-control-panel-vm").then(e=>{if(e.childElementCount)return(0,r.interval)(".medal-section > span").then(e=>{if(!e)return a.Message.error("\u5207\u6362\u76f4\u64ad\u95f4\u663e\u793a\u52cb\u7ae0\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u52a9\u624b\u732b");const t=(0,r.injectStyle)("updateLocalMedalShow","\n                .dialog-ctnr.common-popup-wrap.medal {\n                    display: none;\n                }\n            ");null===e||void 0===e||e.click(),setTimeout(()=>{null===e||void 0===e||e.click()}),setTimeout(()=>{t.remove()},600)})}),d=e=>new(o())(t=>{chrome.runtime.sendMessage({target:"autoMedal",event:"wearMadel",medalId:e},e=>{t(e)})}),h=()=>new(o())(e=>{chrome.runtime.sendMessage({target:"autoMedal",event:"takeOff"},t=>{e(t)})});(0,r.inLiveRoom)()&&(()=>{chrome.runtime.sendMessage({target:"autoMedal",event:"getSetting"},e=>{null!==e&&void 0!==e&&e.on&&l().then(e=>{e?d(e).then(e=>{if(!e)return h();a.Message.info("\u66f4\u6362\u7c89\u4e1d\u52cb\u7ae0\u6210\u529f")}).then(c):h()})})})()},74184:(e,t,i)=>{"use strict";i.d(t,{G:()=>a});var n=i(33385),o=i(69759);i(29178);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"autoMedal",{settings:{on:!1}}),(0,n.Z)(this,"getJCT",async()=>await this.emit("cookieController","get",{url:"http://www.bilibili.com",name:"bili_jct"},e=>e)),(0,n.Z)(this,"wearMadel",async(e,t,i)=>{const n=await this.getJCT();if(!n)return i(!1);const{medalId:o}=e;await this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",options:{method:"post",contentType:"json",body:`csrf_token=${n}&csrf=${n}&medal_id=${o}`,headers:{"content-type":"application/x-www-form-urlencoded"}}},async({data:e})=>{i(0===e.code)})}),(0,n.Z)(this,"takeOff",async(e,t,i)=>{const n=await this.getJCT();if(!n)return i(!1);await this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/take_off",options:{method:"post",contentType:"json",body:`csrf_token=${n}&csrf=${n}&visit_id=`,headers:{"content-type":"application/x-www-form-urlencoded"}}},async({data:e})=>{i(0===e.code)})}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){this.addListener("wearMadel",this.wearMadel),this.addListener("takeOff",this.takeOff)}}},24429:(e,t,i)=>{"use strict";i.d(t,{X:()=>r});var n=i(33385),o=i(69759);const a={doSign:"https://api.live.bilibili.com/sign/doSign"};class r extends o.Feature{constructor(e){super(e,"autoSignIn",{settings:{on:!1,pushNotification:!0},cache:{type:"local",dataType:"number"}}),(0,n.Z)(this,"online",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"notificationControllerOn",!1),(0,n.Z)(this,"onBeforeLaunch",async()=>{this.addListener("networkOnlineChange",e=>this.online=e),await this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e}),this.emit("networkController","getOnline",null,e=>this.online=e)}),(0,n.Z)(this,"onLaunch",async()=>{this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request())}),(0,n.Z)(this,"onPause",async()=>{this.clearClock()}),(0,n.Z)(this,"createClock",()=>{this.emit("clockController","create",{name:"autoSignIn",alarmInfo:{periodInMinutes:5},focus:!0,callback:this.request})}),(0,n.Z)(this,"clearClock",()=>{this.emit("clockController","pause",{name:"autoSignIn"})}),(0,n.Z)(this,"request",async()=>{if(this.online&&!chrome.extension.inIncognitoContext&&this.settings.on)return!this.todayPassed&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.emit("requestController","create",{url:""+a.doSign,options:{contentType:"json"}},async({data:e})=>{!1===e?this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u7b7e\u5230\u5931\u8d25",tag:"autoSignIn"}):0===e.code?(this.cache.set((new Date).getDate()),this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u7b7e\u5230\u6210\u529f",tag:"autoSignIn"})):1011040===e.code?this.cache.set((new Date).getDate()):this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u7b7e\u5230\u5931\u8d25",tag:"autoSignIn"})}):void 0}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}get todayPassed(){return this.cache.get()===(new Date).getDate()}async onAfterSetSetting(e,t){t.on&&!this.__launched&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.launch():t.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||!this.__launched||this.pause()}async onBHAccountChange(e){await super.onBHAccountChange(e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request()):this.pause()}}},85815:(e,t,i)=>{"use strict";i.d(t,{I:()=>T});var n=i(62680),o=i.n(n),a=i(95366),r=i.n(a),s=i(6919),l=i.n(s),c=i(93364),d=i.n(c),h=i(26771),u=i.n(h),p=i(33385),m=i(41609),g=i.n(m),b=i(26243),f=i.n(b),v=i(67294),y=i(60677),k=i(88686),w=i(48903),x=i(71338);function S(e,t){var i=f()(e);if(o()){var n=o()(e);t&&(n=n.filter((function(t){return r()(e,t).enumerable}))),i.push.apply(i,n)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){(0,p.Z)(e,t,i[t])})):l()?d()(e,l()(i)):S(Object(i)).forEach((function(t){u()(e,t,r()(i,t))}))}return e}const L=y.createGlobalStyle`
  //html {
  //  ${x.$}
  //}

  .chat-history-panel .chat-history-list .chat-item.danmaku-item, .chat-history-panel .chat-history-list .chat-item.danmaku-item * {
    pointer-events: auto !important;
  }
`,_=y["default"].div.attrs({className:"chat-helper-panel ctrl-panel bilibili-chat-filter-panel"})`
  padding: 0 4px 0 0;
  //width: 100%;
`,I=((0,y["default"])(k.Icon)`
  margin: 0 4px 0 7px;
  font-size: 20px;
  vertical-align: middle;
  color: #c8c8c8;
  transition: color .4s cubic-bezier(.22, .58, .12, .98);
  user-select: none;

  &:hover {
    color: #23ade5;
  }
`,y["default"].h1`
  width: 100%;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`),E=y["default"].div.attrs({className:"filter-item"})`
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px;
  padding: 3px 0 4px 4px;
  line-height: 16px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #eee;
  }
`,A=y["default"].span.attrs({className:"filter-item-title"})`
  margin-right: 34px;
`,D=(0,y["default"])(k.CheckBoxButton)`
  user-select: none;

  & .radio-knob {
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
  }
`,O={chat:".chat-item.danmaku-item, .chat-item.chat-colorful-bubble{display:none !important;}",small:".chat-item:not(.system-msg) > a, .chat-item .guard-icon{display:none !important;}",gift:".chat-item.top3-notice, .chat-item.gift-item, #chat-gift-bubble-vm {display:none !important;}",medal:".chat-item .fans-medal-item-ctnr,.chat-item .title-label{display:none !important;}",pk:"#chaos-pk-vm{display:none !important;}",announcement:".chat-item.system-msg, .chat-item.convention-msg{display:none !important;}",n2233:"#my-dear-haruna-vm{display:none !important;}",emoji:".chat-item.chat-emoticon{display:none !important;}",flowEmoji:".danmaku-item-container .bilibili-danmaku img{display:none !important;}"};class T extends v.Component{constructor(e){super(e),(0,p.Z)(this,"state",{globalOption:{},localOption:{}}),(0,p.Z)(this,"roomId",(()=>{const e=location.pathname.slice(1).match(/\d+/);return e?e[0]:null})()),(0,p.Z)(this,"handleOnClickRadio",(e,t)=>{const{localOption:i,globalOption:n}=this.state;let o=C({},i);n[e]===t&&o[this.roomId]&&void 0!==o[this.roomId][e]?delete o[this.roomId][e]:(o[this.roomId]||(o[this.roomId]={}),o[this.roomId][e]=t),g()(o[this.roomId])&&delete o[this.roomId],chrome.runtime.sendMessage({target:"chatFilter",event:"setFilterMap",filterMap:o},()=>{this.setState({localOption:o})})})}componentDidMount(){chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},e=>{this.setState({globalOption:e.options})}),chrome.runtime.sendMessage({target:"chatFilter",event:"getFilterMap"},e=>{this.setState({localOption:e})})}render(){const{localOption:e,globalOption:t}=this.state;return v.createElement(_,null,v.createElement(L,null),v.createElement(I,null,(0,w.__)("chatFilter_UI_listName")),f()(t).map(i=>{const n=O[i],o=e[this.roomId]?e[this.roomId][i]:void 0,a=void 0!==o?o:t[i];return v.createElement(E,{key:i,onClick:()=>this.handleOnClickRadio(i,!a)},v.createElement(A,null,(0,w.__)("chatFilter_options_"+i)),v.createElement(D,{on:a}),n&&a?v.createElement("style",null,n):null)}))}}},88793:(e,t,i)=>{"use strict";i.d(t,{I:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"chatFilter",{settings:{on:!0,options:{chat:!1,small:!0,gift:!0,medal:!0,emoji:!1,flowEmoji:!1,n2233:!0,pk:!1,announcement:!1}}}),(0,n.Z)(this,"filterMap",{}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{filterMap:this.getStore("filterMap")}})})}async onInitStore(){const e=this.getStore("filterMap");void 0===e?(this.filterMap={},this.setStore("filterMap",this.filterMap)):this.filterMap=e}async onLaunch(){this.addListener("getFilterMap",(e,t,i)=>{i(this.filterMap)}),this.addListener("setFilterMap",(e,t,i)=>{this.filterMap=e.filterMap,this.setStore("filterMap",this.filterMap),i(!0)})}}},87261:(e,t,i)=>{"use strict";i.d(t,{L:()=>k});var n=i(33385),o=i(23493),a=i.n(o),r=i(13218),s=i.n(r),l=i(88686),c=i(67294),d=i(60677),h=i(58971),u=i.n(h),p=i(48903),m=i(32699);const{color:g}=m.theme,b=(0,d["default"])(l.Button)`
  width: max-content;
  height: 22px;
  border-radius: 4px;

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    border: 1px solid ${g("bilibili-blue")};
    background-color: white;
    color: ${g("bilibili-blue")};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on button, & button:hover {
    background-color: var(--bilibili-blue);
    color: white;
  }

  .chat-area-btn {
    padding-left: 4px;
    border-left: 1px solid;
    margin-left: 4px;
  }
`,f=d.createGlobalStyle`
  .fullscreen-fix .aside-area,
  .player-full-win.hide-aside-area .aside-area {
    display: block;
  }

  .hide-aside-area {
    .live-room-app {
      .app-content {
        &:hover {
          .chat-input-ctnr, .control-panel-icon-row {
            visibility: visible !important;
          }
        }

        .app-body {
          #head-info-vm, #rank-list-ctnr-box {
            background-image: none !important;
          }

          .player-and-aside-area {
            .aside-area {
              display: block !important;
              background-color: transparent;
              z-index: 1001 !important;
              pointer-events: auto;

              .chat-history-panel {
                position: fixed;
                left: 0;
                bottom: 180px;
                display: inline-block;
                width: auto;
                height: calc(50% - 20px);
                border-radius: 4px;
                pointer-events: auto;
                background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 15%, transparent 75%) !important;
                background-color: transparent !important;
                background-color: unset;
                overflow: hidden;

                .chat-history-list {
                  margin-right: 8px;
                  height: 100%;
                  padding: 0;
                  overflow: -moz-scrollbars-none;
                  scrollbar-width: none;

                  &::-webkit-scrollbar {
                    display: none;
                  }

                  .chat-item {
                    margin-left: 6px;

                    &.danmaku-item {
                      margin: 0 0 4px 0;
                      padding: 3px 8px;
                      //width: fit-content;
                      height: auto;
                      font-size: 14px;
                      //border-radius: 4px;
                      //background-color: rgb(0 0 0 / 60%);
                      color: #e8e8e8 !important;
                    }

                    //&.chat-colorful-bubble {
                    //  backdrop-filter: saturate(0) brightness(0.7);
                    //}
                  }
                }

                .danmaku-buffer-prompt {
                  bottom: 0;
                  width: 100%;
                  margin-left: -10px;
                  border-radius: 4px;
                }

                #chat-history-list {
                  border-bottom: 1px solid transparent;
                  border-left: 1px solid transparent;
                  border-radius: 0 0 0 4px;
                }

                &:hover #chat-history-list {
                  border-bottom-color: var(--bilibili-blue);
                  border-left-color: var(--bilibili-blue);
                }
              }

              #chat-control-panel-vm {
                position: fixed;
                left: 0;
                bottom: 10px;
                margin-bottom: 3px;
                width: 100%;
                height: auto;
                background-color: transparent !important;
                background-image: none !important;
                pointer-events: none !important;
                z-index: 10;

                .control-panel-ctnr {
                  height: auto;
                  padding: 0 3px;
                  background: none !important;
                  border-radius: 0;

                  .chat-input-ctnr {
                    position: fixed;
                    bottom: 8px;
                    left: 440px;
                    right: 440px;
                    border: none;
                    background-color: transparent !important;

                    // 默认不隐藏, 避免在输入拼音光标被遮挡时数去焦点自动隐藏而中断输入的问题
                    &:not(.chat-input-focus) {
                      visibility: hidden;
                    }

                    .medal-section {
                      height: 36px;
                    }

                    .chat-input, textarea {
                      min-width: 200px;
                      height: 32px;
                      line-height: 16px;
                      background-color: rgba(0 0 0 / 80%) !important;
                      border-radius: 4px;
                      border-color: #2b2b2b;
                      color: #fff;
                      pointer-events: auto;

                      ::placeholder {
                        color: #fff;
                      }
                    }

                    .input-limit-hint {
                      bottom: 6px;
                      right: 12px;
                    }
                  }
                }

                .control-panel-icon-row {
                  visibility: hidden;

                  .icon-left-part {
                    margin-left: 8px;
                  }

                  &.superChat {
                    display: flex !important;
                    margin-top: -22px;
                    height: 21px;

                    .icon-right-part {
                      float: right !important;
                      margin-left: auto;
                      margin-right: 13px;
                      order: 0;
                    }

                    .icon-right-end-part {
                      float: right !important;
                      order: 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //#bilibiliHelper2HandleButtonWrapper,
    #chat-control-panel-vm .chat-input-ctnr .medal-section,
    .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel::-webkit-scrollbar,
    .live-room-app .app-content .app-body .player-and-aside-area .aside-area .rank-list-section,
    #penury-gift-msg,
    #chat-control-panel-vm .bottom-actions,
    .chat-history-panel #chat-history-list .chat-item.danmaku-item:before,
    .chat-history-panel #chat-history-list .chat-item.danmaku-item.guard-danmaku:after {
      display: none;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item,
    #chat-control-panel-vm .control-panel-ctnr,
    .control-panel-icon-row {
      pointer-events: none;
    }

    .web-player-controller-wrap {
      bottom: 0px !important;
      padding: 0 0 4px 110px !important;

      & > div {
        margin-right: 200px;
        background: none !important;
      }
    }

    //#background-manage-vm,
    //#ema-wishing-vm,
    //#enter-failure,
    //#gold-store-vm,
    //#guard-store-vm,
    //#head-info-vm.head-info-section,
    //#link-footer-vm,
    //#link-navbar-vm,
    //#player-effect-vm,
    //#room-background-vm,
    //#sidebar-vm,
    //body.fullscreen-fix section#sections-vm {
    //  display: block !important
    //}

    .live-room-app .app-content .app-body .chat-history-panel .chat-item span,
    #chat-popup-area-vm,
    .chat-small-icon-box,
    .control-panel-icon-row > *,
    .danmaku-menu,
    .dialog-ctnr {
      pointer-events: auto;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item .user-name {
      //text-shadow: 0px 1px 1px #000;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item .danmaku-content {
      color: #eee;
      //text-shadow: 0px 1px 1px #000;
    }

    .dialog-ctnr {
      width: fit-content !important;

      .yan-ctnr {
        width: 300px;
      }

      &.common-popup-wrap {
        bottom: 30px !important;
        right: auto !important;
        right: 0 !important;
        width: fit-content;
        margin: 0 0 0 2px !important;
      }

      // 优化emoji表情弹窗初始弹出方向和位置
      &.emoticons {
        left: unset !important;
        right: 0 !important;
      }

      .superchat-content {
        max-width: 300px;
      }
    }

    //.bilibili-live-player-video video, #live-player video, .web-player-danmaku {
    //  height: calc(100% - 40px) !important;
    //}

    .bilibili-live-player-video-controller {
      bottom: 38px;

      .control-area {
        padding-left: 140px !important;
        padding-right: 40px !important;
      }
    }

    .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container {
      padding: 0 130px 0 80px;
    }

    .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container .bilibili-live-player-video-controller-right {
      margin-right: 22px;
    }

    .live-chat-mode-width-bar {
      position: absolute;
      top: 14px;
      right: 0;
      width: 8px;
      height: calc(100% - 14px);
      z-index: 1;
      cursor: ew-resize;
    }

    .live-chat-mode-height-bar {
      position: absolute;
      top: 0;
      width: calc(100% - 14px);
      height: 9px;
      z-index: 1;
      cursor: ns-resize;
    }

    .live-chat-mode-move-bar {
      display: block;
      position: absolute;
      top: -1px;
      right: -1px;
      width: 14px;
      height: 14px;
      border-radius: 0 4px 0 6px;
      font-size: 14px;
      color: transparent;
      z-index: 2;
      cursor: move;
    }

    .chat-history-panel:hover .live-chat-mode-width-bar,
    .chat-history-panel:hover .live-chat-mode-height-bar,
    .chat-history-panel:hover .live-chat-mode-move-bar {
      background-color: var(--bilibili-blue);
      user-select: none;
    }

    #aside-area-vm {
      pointer-events: none !important;

      #pay-note-panel-vm {
        .pay-note-panel {
          background-color: transparent !important;
        }
      }
    }

    #aside-area-vm > * {
      pointer-events: initial;
    }

    .chat-history-panel:hover {
      .live-chat-mode-width-bar::after {
        content: '';
        display: block;
        width: 1px;
        height: 14px;
        background-color: #a8dbf0;
        position: absolute;
        left: 2px;
        top: calc(50% - 7.5px);
        transform: translate(-50%);
        box-shadow: 2px 0px 0px #a8dbf0, 4px 0px 0px #a8dbf0;
      }

      .live-chat-mode-height-bar::after {
        content: '';
        display: block;
        width: 14px;
        height: 1px;
        background-color: #a8dbf0;
        position: absolute;
        top: 2px;
        left: calc(50% - 7.5px);
        transform: translate(-50%);
        box-shadow: 0px 2px 0px #a8dbf0, 0px 4px 0px #a8dbf0;
      }
    }

    #bilibiliHelper2HandleButtonWrapper {
      opacity: 0.2;
      transition: opacity .3s;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .hide-aside-area:hover {
      #live-player {
        video {
          height: calc(100% - 30px) !important;
        }
      }

      #chat-control-panel-vm {
        bottom: 36px !important;
        margin: 0;
      }

      .web-player-controller-wrap {
        bottom: 24px !important;
      }

      .chat-input-ctnr {
        left: 35px !important;
        right: 0 !important;
        bottom: 0 !important;
      }
    }

    [class^="_mute-play-tip-container_"] {
      bottom: 70px !important;
    }
  }
`,v=d.createGlobalStyle`
  body.player-full-win.hide-aside-area .chat-history-panel {
    visibility: hidden;

    .danmaku-content {
      transition: none;
    }
  }
`,y=u().get("bilibili-helper-live-chat-mode")||{};class k extends c.Component{constructor(e){super(e),(0,n.Z)(this,"initDraggableBar",()=>{const e=this,t=document.querySelector(".app-content");let i=document.querySelector("#live-player video");const n=document.querySelector(".chat-history-panel");if(!t||!i||!n)return;const o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div");o.setAttribute("class","live-chat-mode-height-bar"),r.setAttribute("class","live-chat-mode-width-bar"),l.setAttribute("class","live-chat-mode-move-bar"),s()(y[this.roomId])?(e.originWidth=y[this.roomId].width,e.originHeight=y[this.roomId].height,e.originOffectLeft=y[this.roomId].offsetLeft,e.originOffectBottom=y[this.roomId].offsetBottom):y[e.roomId]||(y[this.roomId]={}),r.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(i=document.querySelector("#live-player video"),e.widthMouseDown=!0,e.originWidth=n.clientWidth,e.originX=t.clientX)})),o.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(i=document.querySelector("#live-player video"),e.heightMouseDown=!0,e.originHeight=n.clientHeight,e.originY=t.clientY)})),l.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(i=document.querySelector("#live-player video"),e.moveMouseDown=!0,e.originOffectLeft=n.offsetLeft,e.originOffectBottom=i.offsetHeight-n.offsetTop-n.offsetHeight,e.originX=t.clientX,e.originY=t.clientY)})),t.addEventListener("mousemove",a()((function(t){if(e.state.on||e.state.defaultOpen)if(e.widthMouseDown){const o=e.originX-t.clientX,a=e.originWidth-o;a>25&&a<i.clientWidth&&a<i.offsetWidth&&(n.style.width=a+"px")}else if(e.heightMouseDown){const o=e.originY-t.clientY,a=e.originHeight+o;a>25&&a<i.clientHeight&&a<i.offsetHeight&&(n.style.height=a+"px")}else if(e.moveMouseDown){const i=e.originX-t.clientX,o=e.originY-t.clientY;let a=e.originOffectLeft-i,r=e.originOffectBottom+o;a<0&&(a=0),r<48&&(r=48),n.style.left=a+"px",n.style.bottom=r+"px"}}),25),!0),t.addEventListener("mouseup",(function(){(e.widthMouseDown||e.heightMouseDown||e.moveMouseDown)&&(e.state.on||e.state.defaultOpen)&&(y[e.roomId]||(y[e.roomId]={}),y[e.roomId].width=e.originWidth=n.clientWidth,y[e.roomId].height=e.originHeight=n.clientHeight,y[e.roomId].offsetLeft=e.originOffectLeft=n.offsetLeft,y[e.roomId].offsetBottom=e.originOffectBottom=i.offsetHeight-n.offsetTop-n.offsetHeight,u().set("bilibili-helper-live-chat-mode",y),e.widthMouseDown=!1,e.heightMouseDown=!1,e.moveMouseDown=!1)}),!0),n.appendChild(r),n.appendChild(o),n.appendChild(l)}),(0,n.Z)(this,"addListener",()=>{this.bodyDOM||(this.bodyDOM=document.querySelector("body")),new MutationObserver(()=>{this.dealWith()}).observe(this.bodyDOM,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0})}),(0,n.Z)(this,"dealWith",()=>{const e=document.querySelector(".chat-history-panel"),t=this.bodyDOM.classList,{on:i,currentState:n}=this.state;i&&t.contains("player-full-win")&&1!==n?t.contains("hide-aside-area")?this.setState({currentState:1},()=>{e&&(this.originWidth?e.style.width=this.originWidth+"px":e.style.width="30%"),e&&this.originHeight&&(e.style.height=this.originHeight+"px"),e&&this.originOffectLeft&&(e.style.left=this.originOffectLeft+"px"),e&&this.originOffectBottom&&(e.style.bottom=this.originOffectBottom+40+"px")}):document.querySelector(".aside-area-toggle-btn button").click():i&&t.contains("fullscreen-fix")?this.setState({currentState:0},()=>{e.style.width="",e.style.height=""}):this.setState({currentState:0},()=>{e&&(e.style.width="",e.style.height="")})}),(0,n.Z)(this,"handleOnClick",()=>{const e=!this.state.on;this.setState({on:e},()=>{const t=u().get("bilibili-helper-live-chat-mode")||{};this.dealWith(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"click_chat_mode",label:e}),t[this.roomId]?(t[this.roomId].on=e,t[this.roomId].showChatArea=!0):t[this.roomId]={on:!0,showChatArea:!0},u().set("bilibili-helper-live-chat-mode",t)})}),(0,n.Z)(this,"handleOnClickChatAreaStateBtn",()=>{const e=!this.state.showChatArea;this.setState({showChatArea:e},()=>{const t=u().get("bilibili-helper-live-chat-mode")||{};t[this.roomId]?(t[this.roomId].on=e,t[this.roomId].showChatArea=!0):t[this.roomId]={on:!0,showChatArea:!0},u().set("bilibili-helper-live-chat-mode",t)})}),(0,n.Z)(this,"handleOnClick2Login",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html#/")})}),this.roomId=location.pathname.substr(1),"boolean"===typeof y[this.roomId]?(this.state={on:!!y[this.roomId],showChatArea:!0,currentState:0,hasLogin:!1,defaultOpen:!1},y[this.roomId]={on:!0,showChatArea:!0},u().set("bilibili-helper-live-chat-mode",y)):this.state={on:!!y[this.roomId]&&!!y[this.roomId].on,showChatArea:!y[this.roomId]||!!y[this.roomId].showChatArea,currentState:0,hasLogin:!1,defaultOpen:!1},this.addListener(),this.widthMouseDown=!1,this.heightMouseDown=!1,this.moveMouseDown=!1,this.originOffectLeft=0,this.originOffectBottom=0,this.originX=0,this.originY=0,this.originWidth=0,this.originHeight=0}componentDidMount(){this.bodyDOM=document.querySelector("body"),chrome.runtime.sendMessage({target:"liveChatMode",event:"getSetting"},e=>{this.setState({defaultOpen:e.defaultOpen}),y[this.roomId]||this.setState({on:e.defaultOpen})});const e=setInterval(()=>{const t=document.querySelector(".app-content"),i=document.querySelector("#live-player video"),n=document.querySelector(".chat-history-panel");t&&i&&n&&(clearInterval(e),this.initDraggableBar())},1e3);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{this.setState({hasLogin:e.hasLogin})})}render(){const{on:e,showChatArea:t,currentState:i,hasLogin:n}=this.state;return n?c.createElement(c.Fragment,null,e&&c.createElement(b,{className:"on"},c.createElement("span",{onClick:this.handleOnClick},(0,p.__)("liveChatMode_buttonOFF")),0!==i&&c.createElement("span",{className:"chat-area-btn",onClick:this.handleOnClickChatAreaStateBtn},t?(0,p.__)("liveChatMode_hideChatArea"):(0,p.__)("liveChatMode_showChatArea"),t?null:c.createElement(v,null))),!e&&c.createElement(b,{onClick:this.handleOnClick},(0,p.__)("liveChatMode_buttonON")),0!==i&&e&&c.createElement(f,null)):c.createElement(b,{onClick:this.handleOnClick2Login},"\u767b\u5f55\u52a9\u624b\u5f00\u542f\u7248\u804a\u6a21\u5f0f")}}},54932:(e,t,i)=>{"use strict";i.d(t,{L:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"liveChatMode",{settings:{on:!0,defaultOpen:!1}}),(0,n.Z)(this,"getSettingsForUpload",async()=>({settings:this.simplifyConfig(this.settings)}))}}},66602:(e,t,i)=>{"use strict";var n=i(27921),o=i.n(n),a=i(90487),r=i.n(a),s=i(88686),l=i(67294),c=i(60677),d=i(15364),h=i(48903),u=i(58971),p=i.n(u);const m=p().get("bilibili-helper-2-live-emoji-commonly-used")||[],g=c["default"].span`
  position: absolute;
  left: 90px;
  top: -33px;

  .icon-button {
    cursor: pointer;
    color: var(--Ga3);
  }

  body:not(.hide-aside-area) &.emoji-wrapper {
    border-radius: 4px;

    .icon-button {
      color: var(--Ga3);
      text-shadow: 0.5px 0px, 0px 0.5px;
    }
  }

  body.player-full-win.hide-aside-area &.emoji-wrapper {
    top: 0px;
    left: -34px;
    background-color: rgba(0, 0, 0, 0.8);
    width: fit-content;
    padding: 4.5px;
    pointer-events: auto;

    .icon-button {
      color: #c8c8c8;
      cursor: pointer;
    }
  }

  body.fullscreen-fix &.emoji-wrapper {
    top: 0px;
    left: -36px;
    width: fit-content;
    padding: 0;
    pointer-events: auto;

    .icon-button {
      cursor: pointer;
      background-color: rgba(255, 255, 255, .4);
      color: #fff;
      text-shadow: white 0px 0px 0.3px;
      padding: 5.5px;
      border-radius: 3px;
      vertical-align: baseline;
    }
  }
`,b=c["default"].div`
  position: absolute;
  bottom: 32px;
  left: -218px;
  text-align: center;

  padding: 12px;
  width: 420px;
  max-height: 300px;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid rgb(0 0 0 / 20%);
  border-radius: 8px;
  color: #383838;

  opacity: 0.6;
  transform: translateY(0) scale(0);
  transition: opacity 0.3s, transform 0.3s;
  transform-origin: 200px bottom;

  background-color: rgb(255 255 255 / 60%);
  backdrop-filter: blur(20px);

  overflow: auto;
  z-index: 1000;

  body.player-full-win:not(.hide-aside-area) & {
    transform-origin: 400px bottom;
    left: -384px;
  }

  body.player-full-win.hide-aside-area & {
    transform-origin: 0px bottom;
    left: -40px;
    bottom: 36px;
  }

  body.fullscreen-fix.hide-aside-area & {
    transform-origin: 10px bottom;
    left: -8px;
    bottom: 36px;
  }

  &.show {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .emoji-list, .commonly-used-list {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-rows: 22px;
    grid-row-gap: 6px;
  }

  .emoji-list {
    max-height: 202px;
    overflow: auto;
  }

  .commonly-used-list {
    margin: 10px 0 0;
    padding: 10px 0 0;
    border-top: 1px dashed rgb(0 0 0 / 22%);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(0 0 0 / 40%);
    background-color: rgb(0 0 0 / 80%);
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 6px 12px 0 var(--dark-1);

    .commonly-used-list {
      border-top: 1px dashed rgb(255 255 255 / 15%);
    }
  }
  @media screen and (max-width: 1100px) {
    body.player-full-win.hide-aside-area & {
      left: 3px;
    }
  }
`,f=c["default"].span`
  position: relative;
  display: block;
  align-self: center;
  height: 22px;
  //line-height: 22px;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: #f1f1f1;
  }

  .text-emoji-content {
    line-height: 18px;
    white-space: nowrap;

    :hover {
      opacity: .8;
    }

    :active {
      opacity: .5;
    }

    &.hide {
      visibility: hidden;
    }

    &.position-adjust {
      text-indent: -6px;
    }
  }

  .state {
    position: absolute;
    left: 0;
    right: 0;
    height: 22px;
    line-height: 18px;
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      background-color: #333;
    }
  }
`,v=({inFullscreen:e=!1,text:t,onClick:i})=>{const[n,o]=(0,l.useState)(null),a=(0,l.useCallback)(()=>{i instanceof Function&&i(t);const n=e?document.querySelector(".web-player-inject-wrap"):document.body;(0,h.copy2Clipboard)(t,n).then(i=>{o(i);const n=e?".fullscreen-danmaku input.chat-input":"textarea.chat-input",a=document.querySelector(n),r=new Event("input",{bubbles:!0,cancelable:!0,composed:!0});a.value=a.value+t,a.dispatchEvent(r),null===a||void 0===a||a.focus(),setTimeout(()=>{o(null)},600)})},[t]);return l.createElement(f,{onClick:a},l.createElement("span",{className:["text-emoji-content",null===n?null:"hide"].join(" ")},t),l.createElement("span",{className:"state"},null===n?null:n?"\u5df2\u590d\u5236":"\u590d\u5236\u5931\u8d25"))};let y;const k=c.createGlobalStyle`
  /*
   * 还不错的脚本，由于位置和emoji图标重合，故做一下适配
   * https://greasyfork.org/zh-CN/scripts/387120-bilibili%E7%9B%B4%E6%92%AD%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%AE%E8%82%A4%E8%83%8C%E6%99%AF
   */
  body:not(.player-full-win), body.player-full-win:not(.hide-aside-area) {
    #skin-setting-icon {
      margin-left: 30px;
    }
  }

  .fullscreen-danmaku {
    overflow: visible !important;
    line-height: initial;
  }
`,w=({inFullscreen:e=!1})=>{const[t,i]=(0,l.useState)(!1),[n,a]=(0,l.useState)(m),c=(0,l.useRef)(null),h=(0,l.useRef)(null),u=(0,l.useCallback)(()=>{t||(i(!0),setTimeout(()=>{var e;null===(e=h.current)||void 0===e||e.classList.add("a-scale-in-ease","v-enter-to"),setTimeout(()=>{var e;null===(e=h.current)||void 0===e||e.classList.remove("a-scale-in-ease","v-enter-to")},500)}))},[t]),f=(0,l.useCallback)((e=!1)=>{t&&(y=setTimeout(()=>{var e;i(!1),null===(e=h.current)||void 0===e||e.classList.add("a-scale-out","v-leave-to"),setTimeout(()=>{var e;null===(e=h.current)||void 0===e||e.classList.remove("a-scale-out","v-leave-to")},500)},e?300:0))},[t]),w=(0,l.useCallback)(()=>{clearTimeout(y),t||u()},[t]),x=(0,l.useCallback)(()=>{clearTimeout(y),t?f():w()},[t]),S=(0,l.useCallback)(e=>{if(n instanceof Array&&!n.includes(e)){n.unshift(e);const t=o()(new(r())(n)).slice(0,8);a(t),p().set("bilibili-helper-2-live-emoji-commonly-used",t)}},[n]);return(0,l.useEffect)(()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&t&&f()};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[t]),l.createElement(g,{className:"emoji-wrapper live-skin-coloration-area",ref:e=>c.current=e},l.createElement(k,null),l.createElement(s.Icon,{className:"icon-button live-skin-main-text",icon:"cat",size:23,onClick:x}),l.createElement(b,{ref:e=>h.current=e,className:["emoji-popup",t?"show":null].join(" ")},l.createElement("div",{className:"emoji-list"},d.TEXT_EMOJI.map((t,i)=>l.createElement(v,{inFullscreen:e,key:i,text:t,onClick:S}))),n&&n.length>0?l.createElement("div",{className:"commonly-used-list"},n.map((t,i)=>l.createElement(v,{inFullscreen:e,key:i,text:t}))):null))};var x=i(73935);(0,h.inLiveRoom)()&&(()=>{chrome.runtime.sendMessage({target:"liveEmoji",event:"getSetting"},e=>{e.on&&((0,h.interval)(".chat-input-ctnr",2e3).then(t=>{if(t){const i=document.createElement("span");i.setAttribute("class","icon-item icon-font"),i.setAttribute("id","bilibili-helper-live-emoji"),t.prepend(i),x.render(l.createElement(w,{settings:e}),i)}}),(0,h.interval)(".fullscreen-danmaku",2e3).then(t=>{if(t){const i=document.createElement("span");i.setAttribute("class","icon-item icon-font"),i.setAttribute("id","bilibili-helper-live-fullscreen-emoji"),t.appendChild(i),x.render(l.createElement(w,{settings:e,inFullscreen:!0}),i)}}))})})()},48405:(e,t,i)=>{"use strict";i.d(t,{e:()=>o});var n=i(69759);class o extends(869==i.j?n.Feature:null){constructor(e){super(e,"liveEmoji",{settings:{on:!0}})}}},87747:(e,t,i)=>{"use strict";i.d(t,{K:()=>l});var n=i(33385),o=i(69759),a=i(84564),r=i.n(a),s=i(48903);class l extends(869==i.j?o.Feature:null){constructor(e){super(e,"incognito",{settings:{on:!1}}),(0,n.Z)(this,"onLaunch",async()=>{this.settings.on&&this.isVIP&&(await this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeRequest"}),await this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeSendHeaders"}),await this.emit("webRequestController","create",{name:"liveIncognitoOnBeforeRequest",eventName:"onBeforeRequest",filter:{urls:["*://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?*"]},options:["blocking"],callback:this.redirect}),await this.emit("webRequestController","create",{name:"liveIncognitoOnBeforeSendHeaders",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyHeader}))}),(0,n.Z)(this,"redirect",(0,s.webRequestCallbackWrapper)(e=>{const{initiator:t,url:i}=e;if(!this.settings.on)return;if(/^chrome-extension:\/\//.test(t))return;const n=new(r())(i,"",!0),{query:o}=n;return o&&o.requestFrom?void 0:{redirectUrl:"https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=0&requestFrom=BILIBILI_HELPER_2.5.17.4"}})),(0,n.Z)(this,"modifyHeader",(0,s.webRequestCallbackWrapper)(e=>{const{requestHeaders:t,initiator:i,url:n}=e;if(!this.settings.on)return{requestHeaders:t};if(/^chrome-extension:\/\//.test(i))return{requestHeaders:t};const o=new(r())(n,"",!0),{query:a}=o;if(a&&a.requestFrom)return{requestHeaders:t};const s=t.findIndex(e=>"cookie"===e.name.toLowerCase());return s&&t.splice(s,1),{requestHeaders:t}})),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{this.isVIP&&this.settings.on?this.__launched||await this.launch():this.__launched&&await this.pause()}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onBHAccountChange(e){this.isVIP?this.__firstLaunched&&!this.__launched&&this.settings.on&&await this.launch():await this.pause()}async onPause(){await this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeRequest"}),await this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeSendHeaders"})}}},97754:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AutoMedal:()=>h.G,AutoSignIn:()=>n.X,ChatFilter:()=>a.I,Incognito:()=>c.K,LiveAutoQuality:()=>l.L,LiveAutoWiden:()=>s.N,LiveChatMode:()=>r.L,LiveEmoji:()=>d.e,Silver2coin:()=>o.g});var n=i(24429),o=i(77931),a=i(88793),r=i(54932),s=i(17570),l=i(42144),c=i(87747),d=i(48405),h=i(74184),u=i(37207),p={};for(const m in u)["default","AutoSignIn","Silver2coin","ChatFilter","LiveChatMode","LiveAutoWiden","LiveAutoQuality","Incognito","LiveEmoji","AutoMedal"].indexOf(m)<0&&(p[m]=()=>u[m]);i.d(t,p)},55332:(e,t,i)=>{"use strict";var n=i(73473),o=i.n(n),a=i(27921),r=i.n(a),s=i(48903),l=i(15364),c=i(25498);new Event("click",{bubbles:!0,cancelable:!1});const d=()=>new(o())(e=>(0,c.setLivePlayerControllerVisible)(!0).then(()=>{const t=document.querySelector(".control-area .right-area .quality-wrap");if(t){const e=new Event("mouseenter",{bubbles:!0,cancelable:!1});t.dispatchEvent(e)}else setTimeout(()=>{(0,c.setLivePlayerControllerVisible)(!1)},1e3);setTimeout(()=>{e(!!t)},700)})),h=(e,t,i)=>{var n;const o=l.QUALITY_NAME_LIST.findIndex(t=>t===e);if(-1===o)return null;let a=i.find(e=>e.textContent===l.QUALITY_NAME_LIST[o]);if(!a){if(e=l.QUALITY_NAME_LIST[o+1],null===e)return null;a=i.find(t=>t.textContent.trim()===e)}return t&&null!==(n=a)&&void 0!==n&&n.textContent.toLowerCase().match("pro")&&(a=null),a||h(e,t,i)},u=async(e,t,i)=>d().then(e=>{var n,o;if(!e)return;const a=r()(document.querySelectorAll(".control-area .right-area .quality-wrap .quality-it"));let s=a.find(e=>e.textContent.trim()===t);if(s||(s=h(t,i,a)),null!==(n=s)&&void 0!==n&&n.click&&(null===(o=s)||void 0===o||!o.classList.contains("selected"))){s.click();const e=new Event("mouseout",{bubbles:!0,cancelable:!1});s.dispatchEvent(e)}(0,c.setLivePlayerControllerVisible)(!1)});chrome.runtime.sendMessage({target:"liveAutoQuality",event:"getSetting"},e=>{e.on&&(0,c.checkLivePlayerInitialized)().then(t=>{t&&(0,s.interval)("#live-player-ctnr .web-player-controller-wrap",1500).then(t=>{t&&u(t,e.quality,e.skipHVC)})})})},42144:(e,t,i)=>{"use strict";i.d(t,{L:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"liveAutoQuality",{settings:{on:!1,quality:"\u84dd\u5149",skipHVC:!1}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},55136:(e,t,i)=>{"use strict";var n=i(27921),o=i.n(n),a=i(48903);const r=new Event("mousemove",{bubbles:!0,cancelable:!1}),s=new Event("click",{bubbles:!0,cancelable:!1}),l=e=>{e.dispatchEvent(r)},c=async(e,t)=>{let i=null;switch(t){case"web":l(e),setTimeout(()=>{i=o()(document.querySelectorAll(".control-area .right-area .tip-wrap svg")).find(e=>{if(e.querySelector("#icon_\u7f51\u9875\u5168\u5c4f"))return!0}),i&&i.dispatchEvent(s)});break;case"full":l(e),setTimeout(()=>{i=o()(document.querySelectorAll(".control-area .right-area .tip-wrap svg")).find(e=>{if(e.querySelector("#icon_\u5168\u5c4f"))return!0}),i&&i.dispatchEvent(s)})}i&&i.click&&i.click()};chrome.runtime.sendMessage({target:"liveAutoWiden",event:"getSetting"},e=>{e.on&&(0,a.interval)("#live-player-ctnr .web-player-controller-wrap").then(t=>{t&&setTimeout(()=>{c(t,e.widenType)},1e3)})})},17570:(e,t,i)=>{"use strict";i.d(t,{N:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"liveAutoWiden",{settings:{on:!1,widenType:"default"}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},45153:(e,t,i)=>{"use strict";i.d(t,{p:()=>w});var n=i(33385),o=i(73473),a=i.n(o),r=i(67294),s=i(73935),l=i(59158),c=i(57563),d=i(90631),h=i(60677),u=i(32699),p=i(92593);const{color:m}=u.theme,g=(0,h["default"])(l.Button).attrs({className:"bilibili-helper-screenshot-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${m("bilibili-blue")};
  box-sizing: border-box;
  background-color: white;
  color: ${m("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${m("bilibili-blue")};
    color: white;
  }
`,b=(0,h["default"])(d.u)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
`,f=h["default"].div`
`,v=h["default"].div`
  .button:first-of-type, .button:nth-child(2) {
    margin-right: 8px;
  }
`,y=document.createElement("div");document.body.appendChild(y);const k=()=>new(a())(e=>{const t="window.postMessage({command: 'sendInitData', pageData: window.__STORE__}, '*');",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const n=t=>{const{data:o}=t;"sendInitData"===o.command&&(e(o.pageData),i.remove(),window.removeEventListener("message",n))};window.addEventListener("message",n)});class w extends r.Component{constructor(e){super(e),(0,n.Z)(this,"state",{imgSrc:null,showModal:!1}),(0,n.Z)(this,"handleOnClick",()=>{const e=document.querySelector(".bilibili-live-player-video video, .blrp-video video, #live-player video, bwp-video");if(e){chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"click_screenshot"});const t=document.createElement("canvas");t.width=e.videoWidth,t.height=e.videoHeight;const i=t.getContext("2d");i.drawImage(e,0,0,e.videoWidth,e.videoHeight),this.setState({imgSrc:t.toDataURL("image/jpeg",100),showModal:!0})}}),(0,n.Z)(this,"handleOnCloseModal",()=>{this.setState({showModal:!1})}),(0,n.Z)(this,"handleOnDownloadImage",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"download_screenshot"});const e=document.querySelector(".room-owner-username").textContent;new(a())(e=>{k().then(t=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},i=>{if(!i||!i.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"liveScreenshot",data:{title:t.baseInfoRoom.roomTitle,roomId:t.baseInfoRoom.roomID,format:"jpeg",owner:{mid:t.baseInfoAnchor.uid,name:t.baseInfoAnchor.username}}},t=>{e(t||!1)})})})}).then(t=>{const i=t||`${e} ${(new Date).toLocaleString()}.jpeg`,n=document.createElement("a");n.target="__blank",n.setAttribute("target","__blank"),n.setAttribute("download",i),n.href=this.state.imgSrc,n.click(),this.setState({showModal:!1})})}),(0,n.Z)(this,"handleOnCopyImage",()=>{(0,p.copyImage2Clipboard)(this.state.imgSrc).then(e=>{c.Message.info("\u590d\u5236\u622a\u56fe"+(e?"\u6210\u529f":"\u5931\u8d25"))})})}render(){return r.createElement(r.Fragment,null,r.createElement(g,{onClick:()=>this.handleOnClick()},"\u622a\u53d6\u753b\u9762"),s.createPortal(r.createElement(b,{open:this.state.showModal,className:"preview-modal",title:"\u76f4\u64ad\u622a\u56fe\u9884\u89c8",onClickMask:this.handleOnCloseModal,buttons:r.createElement(v,null,r.createElement(l.Button,{className:"border",onClick:this.handleOnCloseModal},"\u5173\u95ed"),r.createElement(l.Button,{className:"primary",onClick:this.handleOnDownloadImage},"\u4e0b\u8f7d"),r.createElement(l.Button,{className:"primary",onClick:this.handleOnCopyImage},"\u590d\u5236"))},r.createElement(f,null,r.createElement("img",{className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),y))}}},29178:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n={silver2coin:"https://api.live.bilibili.com/xlive/revenue/v1/wallet/silver2coin"}},77931:(e,t,i)=>{"use strict";i.d(t,{g:()=>r});var n=i(33385),o=i(69759),a=i(29178);class r extends(869==i.j?o.Feature:null){constructor(e){super(e,"silver2coin",{settings:{on:!1,pushNotification:!0},cache:{type:"local",dataType:"number"}}),(0,n.Z)(this,"online",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"notificationControllerOn",!1),(0,n.Z)(this,"onBeforeLaunch",async()=>{this.addListener("networkOnlineChange",e=>this.online=e),await this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e}),this.emit("networkController","getOnline",null,e=>this.online=e)}),(0,n.Z)(this,"onPause",async()=>{this.clearClock()}),(0,n.Z)(this,"createClock",()=>{this.emit("clockController","create",{name:"silver2coin",alarmInfo:{periodInMinutes:5},focus:!0,callback:this.request})}),(0,n.Z)(this,"clearClock",()=>{this.emit("clockController","pause",{name:"silver2coin"})}),(0,n.Z)(this,"getJCT",async()=>await this.emit("cookieController","get",{url:"http://www.bilibili.com",name:"bili_jct"},e=>e)),(0,n.Z)(this,"request",async()=>{if(this.online&&!chrome.extension.inIncognitoContext&&this.settings.on&&!this.todayPassed&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin){const e=await this.getJCT();if(!e)return!1;this.emit("requestController","create",{url:a.Z.silver2coin,options:{method:"post",contentType:"json",body:`csrf_token=${e}&csrf=${e}`,headers:{"content-type":"application/x-www-form-urlencoded"}}},async({data:e})=>{!1===e&&this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u94f6\u74dc\u5b50\u81ea\u52a8\u5151\u6362\u5931\u8d25",tag:"silver2coin"}),0===e.code?(this.cache.set((new Date).getDate()),this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u94f6\u74dc\u5b50\u81ea\u52a8\u5151\u6362\u6210\u529f",tag:"silver2coin"})):403===e.code&&this.cache.set((new Date).getDate())})}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}get todayPassed(){return this.cache.get()===(new Date).getDate()}async onAfterSetSetting(e,t){this.notificationControllerOn&&t.on&&!this.__launched&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.launch():t.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||!this.__launched||this.pause()}async onLaunch(){this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request())}async onBHAccountChange(e){await super.onBHAccountChange(e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.createClock():this.pause()}}},51887:(e,t,i)=>{"use strict";i.d(t,{e:()=>p});var n=i(33385),o=i(13311),a=i.n(o),r=i(73473),s=i.n(r),l=i(66130),c=i.n(l),d=i(69759),h=i(48903);const u={getStatus:"https://api.bilibili.com/x/vip/privilege/my",receive:"https://api.bilibili.com/x/vip/privilege/receive"};class p extends d.Feature{constructor(e){super(e,"autoTakeVipPrivilege",{settings:{on:!1,pushNotification:!0},cache:{type:"local",dataType:"number"}}),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"notificationControllerOn",!1),(0,n.Z)(this,"onBeforeLaunch",async()=>{await this.addListener("allHasLoaded",({firstInstall:e,updated:t})=>{(e||t)&&this.cache.clearCache(!0)}),await this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e}),this.emit("webRequestController","create",{name:"autoTakeVipPrivilegeModifyHeader",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/vip/privilege/receive*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyHeaders})}),(0,n.Z)(this,"onLaunch",async()=>{this.notificationControllerOn&&this.settings.on&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request())}),(0,n.Z)(this,"onPause",async()=>{this.clearClock()}),(0,n.Z)(this,"createClock",()=>{this.emit("clockController","create",{name:"autoTakeVipPrivilege",alarmInfo:{periodInMinutes:5},focus:!0,callback:this.request})}),(0,n.Z)(this,"clearClock",()=>{this.emit("clockController","pause",{name:"autoTakeVipPrivilege"})}),(0,n.Z)(this,"modifyHeaders",(0,h.webRequestCallbackWrapper)(e=>{const{requestHeaders:t,url:i}=e,{query:n}=i;if(n&&n.requestFrom)return;const o=a()(t,e=>"origin"===e.name.toLowerCase());return o?o.value="https://account.bilibili.com/":t.push({name:"Origin",value:"https://account.bilibili.com/"}),{requestHeaders:t}})),(0,n.Z)(this,"checkout",()=>new(s())((e,t)=>{(0,h.fetchFromHelper)(u.getStatus,{credentials:"include",mode:"cors"}).then(e=>e.json()).then(i=>{0===i.code&&i.data&&i.data.list?e(i.data.list.map(e=>1!==e.state?e.type:-1).reduce((e,t)=>(-1!==t&&e.push(t),e),[])):t("\u83b7\u53d6\u4f1a\u5458\u798f\u5229\u72b6\u6001\u6570\u636e\u5931\u8d25")})})),(0,n.Z)(this,"request",async()=>{if(chrome.extension.inIncognitoContext)return s().reject(this.names.item+": \u8bf7\u9000\u51fa\u9690\u79c1\u6a21\u5f0f");if(this.settings.on){if(!this.thisMonthPassed&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin){const e=await this.emit("cookieController","get",{url:"http://www.bilibili.com",name:"bili_jct"}),t=await this.checkout();return t.length>0&&this.get(t,e)}return!1}}),(0,n.Z)(this,"get",async(e,t)=>s().all(e.map(e=>this.emit("requestController","create",{url:u.receive+"?passWrapper=true",options:{method:"post",body:`type=${e}&csrf=${t}`,credentials:"include",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},contentType:"json"}},({data:e})=>0===e.code))).then(t=>{const i=t.filter(Boolean).length;i===e.length&&e.length>0&&(this.cache.set(c()()),this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u9886\u53d6\u5927\u4f1a\u5458\u798f\u5229\u6210\u529f",tag:"autoTakeVipPrivilege"}))})),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}get thisMonthPassed(){return this.cache.get()+864e5>c()()}async onAfterSetSetting(e,t){this.notificationControllerOn&&t.on&&!this.__launched&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.launch():t.on&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||!this.__launched||this.pause()}async onBHAccountChange(e){await super.onBHAccountChange(e),this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.createClock():this.pause()}}},68624:(e,t,i)=>{"use strict";i.d(t,{v:()=>h});var n=i(33385),o=i(8450),a=i.n(o),r=i(88686),s=i(67294),l=i(60677),c=i(48903);const d=l["default"].div.attrs({className:"custom-whisper-message"})`
  header {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .custom-message {
    display: flex;
    align-items: flex-start;
    //margin-bottom: 4px;
    padding: 4px 4px 4px 8px;
    //border-radius: 4px;
    border-bottom: 1px solid var(--google-grey-100);
    opacity: .3;
    //cursor: not-allowed;
    user-select: none;

    :last-of-type {
      border-bottom: none;
    }

    :hover {
      background-color: var(--google-grey-300);
    }

    &.on {
      opacity: 1;
      //cursor: pointer;

      :active {
        background-color: var(--google-grey-400);
      }
    }

    .text {
      display: block;
      margin-right: auto;
      max-width: 300px;
      white-space: break-spaces;
    }

    .button {
      margin-left: 8px;
    }
  }
`;class h extends s.Component{constructor(e){super(e),(0,n.Z)(this,"state",{messages:[]}),(0,n.Z)(this,"handleOnClick",(e,t,i)=>{if(!e)return r.Message.info("\u8be5\u77ed\u8bed\u5df2\u88ab\u7981\u7528",1e3);chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"message_center",action:"enter"}),(0,c.injectScript)(`\n            (() => {\n                const targets = Array.from(document.querySelectorAll('.dialog')).filter((d) => {\n                    return d.style.display !== 'none';\n                });\n                if (targets.length === 1) {\n                    let target = targets[0];\n                    const input = target.querySelector('#editor');\n                    if (input) {\n                        // \u4f7f\u7528\u5168\u9009+\u9000\u683c\u952e\u6e05\u7406\u73b0\u6709\u5185\u5bb9\n                        window.getSelection().selectAllChildren(input);\n                        \n                        // \u51c6\u5907\u76ee\u6807\u5185\u5bb9\n                        window.clipboardData = new DataTransfer();\n                        window.clipboardData.setData('Text', ${a()(t)});\n                        \n                        // \u7c98\u8d34\u5185\u5bb9\u5230\u8f93\u5165\u6846\n                        input.focus();\n                        const inputEvent = new Event('paste', {bubbles: true, cancelable: true, composed: true});\n                        input.dispatchEvent(inputEvent);\n                        \n                        if (${i}) {\n                            setTimeout(() => target.querySelector('.send-btn')?.click());\n                        } else {\n                            // \u5c06\u5149\u6807\u7f6e\u4e8e\u6587\u672c\u6700\u540e\u653e\n                            window.getSelection().selectAllChildren(input);\n                            window.getSelection().collapseToEnd();\n                        }\n                    }\n                }\n            })();\n        `)})}componentDidMount(){chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getMessages"},e=>{this.setState({messages:e})})}render(){const{messages:e}=this.state;return s.createElement(d,null,s.createElement("header",null,"\u5feb\u6377\u56de\u590d\u77ed\u8bed"),e.map(({on:e,text:t,autoEnter:i},n)=>s.createElement("div",{key:n,className:["custom-message",e?"on":null].join(" "),onClick:()=>this.handleOnClick(e,t,i)},s.createElement("span",{className:"text"},t),s.createElement(r.Button,{className:"primary"},i?"\u53d1\u9001":"\u586b\u5165"))))}}},68009:(e,t,i)=>{"use strict";i.d(t,{v:()=>s});var n=i(33385),o=i(69759),a=i(15364);const r=[{on:!0,text:"\u975e\u5e38\u62b1\u6b49\uff0c\u6211\u73b0\u5728\u6709\u4e8b\u6b63\u5728\u5904\u7406\uff0c\u7a0d\u540e\u56de\u590d\u60a8\u3002",autoEnter:!1},{on:!0,text:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u521a\u624d\u53d1\u9001\u7684\u4fe1\u606f\u7531\u4e8e\u670d\u52a1\u5668\u800c\u4e22\u5931\u3002\u8bf7\u91cd\u65b0\u53d1\u9001\u3002",autoEnter:!1},{on:!0,text:"\u60a8\u547c\u53eb\u7684\u7528\u6237\u4ecd\u5728\u5395\u6240\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u7ed9\u4ed6\u5395\u7eb8\uff01",autoEnter:!1},{on:!0,text:"\u8fd9\u662f\u7b2c\u56db\u6761\u5feb\u6377\u56de\u590d\u77ed\u8bed\uff0c\u5b83\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u957f",autoEnter:!1},{on:!1,text:"\u8fd9\u662f\u7b2c\u4e94\u6761\u5feb\u6377\u56de\u590d\u77ed\u8bed\uff0c\u9ed8\u8ba4\u88ab\u7981\u7528",autoEnter:!1},{on:!1,text:"\u8fd9\u662f\u7b2c\u516d\u6761\u5feb\u6377\u56de\u590d\u77ed\u8bed\uff0c\u9ed8\u8ba4\u88ab\u7981\u7528",autoEnter:!1}];class s extends(869==i.j?o.Feature:null){constructor(e){super(e,"customWhisperMessage",{dependencies:["bilibiliHelperAccountController"],settings:{on:!0}}),(0,n.Z)(this,"messages",[]),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{this.messages=this.getStore("messages")}),(0,n.Z)(this,"getMessages",(e,t,i)=>{const n=this.messages.map((e,t)=>!(!this.isVIP&&t>a.CUSTOM_WHISPER_MESSAGE.FREE_NUMBER)&&e).filter(Boolean);i(n)}),(0,n.Z)(this,"setMessage",(e,t,i)=>{let{on:n=!1,text:o,index:r,autoEnter:s=!1}=e;if(void 0===e.index||void 0===e.text)return i(!1);o=this.isVIP?o.substring(0,a.CUSTOM_WHISPER_MESSAGE.VIP_MAX_LENGTH):o.substring(0,a.CUSTOM_WHISPER_MESSAGE.FREE_MAX_LENGTH),void 0!==r&&void 0!==this.messages[r]?(this.messages[r]={on:n,text:o,autoEnter:s},this.setStore("messages",this.messages),i(!0)):this.messages.length<a.CUSTOM_WHISPER_MESSAGE.MAX_NUMBER&&(this.isVIP||this.messages.length<a.CUSTOM_WHISPER_MESSAGE.FREE_NUMBER)?(this.messages.push({on:n,text:o,autoEnter:s}),this.setStore("messages",this.messages),i(!0)):i(!1)}),(0,n.Z)(this,"setMessageList",(e,t,i)=>{this.messages=e.list,this.setStore("messages",this.messages),i(!0)}),(0,n.Z)(this,"deleteMessage",(e,t,i)=>{void 0!==this.messages[e.index]&&this.messages.splice(e.index,1),this.setStore("messages",this.messages),i(!0)}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{messages:this.getStore("messages")}})})}async onInitStore(){this.messages=this.getStore("messages"),this.messages||(this.messages=r,this.setStore("messages",this.messages))}async onBeforeLaunch(){this.addListener("getMessages",this.getMessages),this.addListener("setMessage",this.setMessage),this.addListener("deleteMessage",this.deleteMessage),this.addListener("setMessageList",this.setMessageList)}async onLaunch(){}}},15866:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AutoTakeVipPrivilege:()=>o.e,CustomWhisperMessage:()=>l.v,Omnibox:()=>s.b,QuickSearch:()=>n._});var n=i(36567),o=i(51887),a=i(77131),r={};for(const c in a)["default","QuickSearch","AutoTakeVipPrivilege"].indexOf(c)<0&&(r[c]=()=>a[c]);i.d(t,r);var s=i(97109),l=i(68009)},97109:(e,t,i)=>{"use strict";i.d(t,{b:()=>c});var n=i(33385),o=i(69759),a=i(84618);const r=869==i.j?["v","u","l","a","b"]:null,s={v:"video",u:"bili_user",l:"live",a:"article",b:"media_bangumi"},l=(e,t)=>`https://api.bilibili.com/x/web-interface/search/type?context=&search_type=${e}&page=1&keyword=${t}`;class c extends(869==i.j?o.Feature:null){constructor(e){super(e,"omnibox",{settings:{on:!0}}),(0,n.Z)(this,"onInputChanged",(0,a.throttle)(async(e,t)=>{if(e){e=e.trim();const i=/^(\S+)\s+([\S\s]+)$/,n=i.exec(e);if(n){const i=n[1],o=n[2];if(r.includes(i)){const e=await this.getSearchByType(s[i],o);e?this.suggestListByType(i,e,t):this.suggestNormalList(o,t,t)}else this.suggestNormalList(e,t,t)}else this.suggestNormalList(e,t,t)}},500)),(0,n.Z)(this,"suggestListByType",(e,t,i)=>{if(e&&t)switch(e){case"v":i(t.slice(0,6).map(({author:e,title:t,bvid:i,play:n})=>{const o="https://www.bilibili.com/video/"+i;return{content:`$$create$$${o}$$`,description:`${e} - ${t} - view: ${n}`}}));break;case"a":i(t.slice(0,6).map(({id:e,title:t,view:i})=>{const n="https://www.bilibili.com/read/cv"+e;return{content:`$$create$$${n}$$`,description:`${t} - view: ${i}`}}));break;case"u":i(t.slice(0,6).map(({mid:e,uname:t,level:i,usign:n})=>{const o="https://space.bilibili.com/"+e;return{content:`$$create$$${o}$$`,description:`LV${i} ${t} - ${n}`}}));break;case"l":i(t.slice(0,6).map(({roomid:e,uname:t,title:i})=>{const n="https://live.bilibili.com/"+e;return{content:`$$create$$${n}$$`,description:`${t} - ${i}`}}));break;case"b":i(t.slice(0,6).map(({title:e,url:t,desc:i})=>{const n=t;return{content:`$$create$$${n}$$`,description:`${e} - ${i}`}}));break}}),(0,n.Z)(this,"suggestNormalList",(e,t)=>{t([{content:`$$video$$${e}$$`,description:"\u641c\u89c6\u9891 "+e},{content:`$$bangumi$$${e}$$`,description:"\u641c\u756a\u5267 "+e},{content:`$$live$$${e}$$`,description:"\u641c\u76f4\u64ad "+e},{content:`$$user$$${e}$$`,description:"\u641c\u7528\u6237 "+e},{content:`$$article$$${e}$$`,description:"\u641c\u4e13\u680f "+e}])}),(0,n.Z)(this,"getSearchByType",async(e,t)=>this.emit("requestController","create",{url:l(e,t),options:{contentType:"json"}},t=>{if(t&&t.data&&t.data.data&&t.data.data.result){let i=t.data.data.result;if("live"===e&&(i=t.data.data.result.live_room),i)return i.map(e=>(e.title&&(e.title=e.title.replace('<em class="keyword">',"").replace("</em>","")),e))}})),(0,n.Z)(this,"onInputEnteredCallback",(e,t)=>{const i=/^\$\$(.+)\$\$(.+)\$\$$/;let n=i.exec(e),o="all",a=e;if(n){const e=n[1];switch(a=n[2],e){case"video":o="video";break;case"user":o="upuser";break;case"bangumi":o="bangumi";break;case"live":o="live";break;case"article":o="article";break;case"create":o="create";break}}const s=/^(\S+)\s+([\S\s]+)$/;if(n=s.exec(e),n){const e=n[1],t=n[2];r.includes(e)&&(o="all",a=t)}"create"===o?this.emit("tabController","create",{url:a,strict:!1}):this.emit("tabController","create",{url:`https://search.bilibili.com/${o}?keyword=${a}`,strict:!1})}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){chrome.omnibox.setDefaultSuggestion({description:"\u4f7f\u7528 \u54d4\u54e9\u54d4\u54e9\u52a9\u624b \u641c\u7d22"}),chrome.omnibox.onInputEntered.addListener(this.onInputEnteredCallback),chrome.omnibox.onInputChanged.addListener(this.onInputChanged)}async onPause(){chrome.omnibox.onInputEntered.removeListener(this.onInputEnteredCallback)}}},36567:(e,t,i)=>{"use strict";i.d(t,{_:()=>r});var n=i(33385),o=i(69759),a=i(44943);class r extends(869==i.j?o.Feature:null){constructor(e){super(e,"quickSearch",{dependencies:["tabController"],settings:{on:!0}}),(0,n.Z)(this,"onLaunch",async()=>{if(this.settings.on)try{chrome.contextMenus.create({id:"bilibili-searchBili",title:(0,a.__)("quickSearch_menuTitle"),contexts:["selection"],onclick:e=>{chrome.runtime.sendMessage({command:"setGAEvent",action:"click",category:"quickSearch",label:"quickSearch"}),/^(av\d+|bv.+)/i.test(e.selectionText)?this.emit("tabController","create",{url:"https://www.bilibili.com/video/"+e.selectionText,strict:!1}):this.emit("tabController","create",{url:"https://search.bilibili.com/all?keyword="+encodeURIComponent(e.selectionText)})}})}catch(e){}}),(0,n.Z)(this,"onPause",()=>{chrome.contextMenus.remove("bilibili-searchBili",null)}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onAfterSetSetting(e,t){t.on?this.launch():this.pause()}}},27144:(e,t,i)=>{"use strict";i.d(t,{v0:()=>L,pU:()=>x,TI:()=>b,jk:()=>S,cw:()=>f,qA:()=>p,ss:()=>v,Zm:()=>w,zO:()=>_,GI:()=>K,W8:()=>I,ZE:()=>Y,d_:()=>X});var n=i(33385),o=i(69759),a=i(47874),r=i(48903),s=i(73473),l=i.n(s),c=i(58971),d=i.n(c),h=i(25498),u=i(15558);class p extends o.Feature{constructor(e){super(e,"mainHome",{dependencies:["bilibiliAccountController"],settings:{on:!0,showCarousel:!0,showLiveBar:!0,openMethod:"direct",videoType:"recentVideo"},cache:{type:"local",dataType:"array",limit:{duration:18e5}}}),(0,n.Z)(this,"getNewHotVideos",(e=!1,t=!1)=>{const{expired:i}=this.cache.checkExpired();(e||i)&&this.cache.clearCache(!0);const n=this.cache.get();return t||null===n||void 0===n||!n.length||i?new(l())(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/web-interface/index/top/rcmd?fresh_type=3",options:{contentType:"json"}},e)}).then(e=>{let i=[];return e&&e.data&&e.data.data&&e.data.data.item&&(i=e.data.data.item.map(e=>(e.publishDate=e.pubdate?(0,u.S1)(1e3*e.pubdate):"",{videoInfo:{aid:(0,h.bv2av)(e.bvid),cid:e.cid,bvid:e.bvid,cover:e.pic,duration:(0,u.TD)(1e3*e.duration),publishDate:e.pubdate?(0,u.S1)(1e3*e.pubdate):"",title:e.title,stat:e.stat,description:null,tageName:null},userInfo:{name:e.owner.name,face:e.owner.face,uid:e.owner.mid}})),n.push(...i),this.cache.set(n)),t?i:n}):l().resolve(n)}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onInitStore(){const e=this.cache.get();e instanceof Array||this.cache.set([],!0)}async onLaunch(){this.addListener("clearPopupScrollPosition",(e,t,i)=>{d().remove("popupScrollPosition"),i(!0)}),this.addListener("clearCache",(e,t,i)=>{this.cache.clearCache(!0),i(!0)}),this.addListener("getNewHotVideos",(e,t,i)=>{this.getNewHotVideos(e.clearCache,e.continuous).then(e=>i(e))})}}var m=i(13311),g=i.n(m);class b extends o.Feature{constructor(e){super(e,"mainAnime",{dependencies:["bilibiliAccountController"],settings:{on:!0,toggle:!1}}),(0,n.Z)(this,"getAnimaTimeline",()=>new(l())(e=>{this.emit("requestController","create",{url:"https://bangumi.bilibili.com/web_api/timeline_global",options:{contentType:"json"}},e)}).then(({data:e})=>(0===e.code&&e.result.forEach((t,i)=>{1===t.is_today&&(e.result[i-1].is_yesterday=1),t.seasons=t.seasons.sort((e,t)=>e.follow>t.follow?-1:1)}),e.result))),(0,n.Z)(this,"getAnimaTimelineCN",()=>new(l())(e=>{this.emit("requestController","create",{url:"https://bangumi.bilibili.com/web_api/timeline_cn",options:{contentType:"json"}},e)}).then(({data:e})=>(0===e.code&&e.result.forEach((t,i)=>{1===t.is_today&&(e.result[i-1].is_yesterday=1),t.seasons=t.seasons.sort((e,t)=>e.follow>t.follow?-1:1)}),e.result))),(0,n.Z)(this,"onBeforeSendHeadersCallback",e=>{const{requestHeaders:t}=e,i=g()(t,e=>"referer"===e.name.toLowerCase());return i?i.value="https://www.bilibili.com/":t.push({name:"referer",value:"https://www.bilibili.com/"}),{requestHeaders:t}}),(0,n.Z)(this,"getFeedData",(e=1,t=1,i=20)=>new(l())(n=>this.emit("requestController","create",{url:`https://api.bilibili.com/pgc/web/follow/list?season_type=${e}&pn=${t}&ps=${i}`,options:{contentType:"json"}},n)).then(({data:e})=>0===e.code&&e.result))}async onBeforeLaunch(){this.addListener("getAnimaTimeline",(e,t,i)=>{this.getAnimaTimeline().then(e=>i(e))}),this.addListener("getAnimaTimelineCN",(e,t,i)=>{this.getAnimaTimelineCN().then(e=>i(e))}),this.addListener("getFeedData",(e,t,i)=>{this.getFeedData(e.type,e.pn,e.ps).then(e=>i(e))}),this.emit("webRequestController","create",{name:"animeFollowList",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/pgc/web/follow/list?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.onBeforeSendHeadersCallback})}async onLaunch(){}}class f extends o.Feature{constructor(e){super(e,"mainFavlist",{dependencies:["bilibiliAccountController"],settings:{on:!0,openMethod:"direct"}}),(0,n.Z)(this,"onBeforeLaunch",async()=>{this.addListener("getMediaList",(e,t,i)=>{this.getMediaList().then(e=>i(e))}),this.addListener("getVideoList",(e,t,i)=>{this.getVideoList(e.id,e.pn).then(e=>i(e))})}),(0,n.Z)(this,"getMediaList",()=>new(l())(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid="+this.bilibiliAccount.uid,options:{contentType:"json"}},({data:t})=>{t&&t.data&&(t.data.list=t.data.list.map((e,t)=>(e.videos=[],e.pn=1,e.hasMore=!0,e)),e(t.data.list))})})),(0,n.Z)(this,"getVideoList",(e,t=1)=>new(l())(i=>{this.emit("requestController","create",{url:`https://api.bilibili.com/x/v3/fav/resource/list?media_id=${e}&pn=${t}&ps=20&keyword=&order=mtime&type=0&tid=0`,options:{contentType:"json"}},({data:e})=>{e&&e.data&&(e.data.medias=e.data.medias.map(e=>({videoInfo:{bvid:e.bvid,aid:(0,r.bv2av)(e.bvid),cid:e.ugc.first_cid,description:e.intro,cover:e.cover.replace("http://","https://"),title:e.title,url:e.link.replace("bilibili://video/","https://www.bilibili.com/video/av").replace("http://","https://"),duration:(0,r.parseTime)(1e3*e.duration),publishDate:e.pubtime?(0,r.videoPublishDescription)(1e3*e.pubtime):""},userInfo:{face:e.upper.face,uid:e.upper.mid,name:e.upper.name}})),i(e.data))})})),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){}}class v extends o.Feature{constructor(e){super(e,"mainLive",{dependencies:["bilibiliAccountController","bilibiliLiveBroadcast"],settings:{on:!0,openMethod:"direct"},cache:{type:"local",dataType:"object",delayDuration:2e3,limit:{duration:18e4}}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){this.addListener("getLiveFeedList",(e,t,i)=>{this.emit("bilibiliLiveBroadcast","getLiveFeedList",e,i)})}}var y=i(41609),k=i.n(y);class w extends o.Feature{constructor(e){super(e,"mainManga",{dependencies:["bilibiliAccountController"],settings:{on:!0,openMethod:"direct"}}),(0,n.Z)(this,"modifyOrigin",e=>{const{initiator:t,requestHeaders:i}=e,n=!k()(g()(i,({name:e})=>e.match("bilibili-helper-header-action"))),o=[...i];if(n){const e=o.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e);e>-1&&(o.push({name:"Origin",value:o[e].value}),o.splice(e,1))}return{requestHeaders:o}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){this.emit("webRequestController","create",{name:"mainMangaSetOrigin",eventName:"onBeforeSendHeaders",filter:{urls:["*://manga.bilibili.com/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyOrigin})}}class x extends o.Feature{constructor(e){super(e,"historyWatched",{dependencies:["bilibiliAccountController"],settings:{on:!0,toggle:!1}}),(0,n.Z)(this,"getList",({type:e,viewAt:t,ps:i=20})=>{const n="https://api.bilibili.com/x/web-interface/history/cursor",o={type:e,view_at:t,ps:i},a=(0,r.generateURLByParams)(n,o);return new(l())(e=>{this.emit("requestController","create",{url:a,options:{contentType:"json"}},e)}).then(({data:e})=>0===e.code&&e.data)}),(0,n.Z)(this,"getSearchList",({pn:e=1,keyword:t,business:i="all",ps:n=20})=>{const o="https://api.bilibili.com/x/web-interface/history/cursor",a={pn:e,keyword:t,view_at:i,ps:n},s=(0,r.generateURLByParams)(o,a);return new(l())(e=>{this.emit("requestController","create",{url:s,options:{contentType:"json"}},e)}).then(({data:e})=>0===e.code&&e.data)})}async onBeforeLaunch(){this.addListener("getList",(e,t,i)=>{this.getList(e).then(e=>i(e))}),this.addListener("getSearchList",(e,t,i)=>{this.getSearchList().then(e=>i(e))})}}class S extends o.Feature{constructor(e){super(e,"mainCreator",{dependencies:["bilibiliAccountController"],settings:{on:!0}}),(0,n.Z)(this,"getData",()=>new(l())(e=>{this.emit("requestController","create",{url:"https://member.bilibili.com/x/web/index/stat",options:{contentType:"json"}},e)}).then(({data:e})=>{if(e&&e.data)return e.data})),(0,n.Z)(this,"getArticleData",()=>new(l())(e=>{this.emit("requestController","create",{url:"https://member.bilibili.com/x/web/data/article",options:{contentType:"json"}},e)}).then(({data:e})=>{if(e&&e.data){const{view:t,reply:i,like:n,coin:o,fav:a,share:r,incr_view:s,incr_reply:l,incr_like:c,incr_coin:d,incr_fav:h,incr_share:u}=e.data;return{articleView:t,articleReply:i,articleLike:n,articleCoin:o,articleFav:a,articleShare:r,articleIncrView:s,articleIncrReply:l,articleIncrLike:c,articleIncrCoin:d,articleIncrFav:h,articleIncrShare:u}}})),(0,n.Z)(this,"getRatingData",()=>new(l())(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/studio/up-rating/v3/rating/info",options:{contentType:"json"}},e)}).then(({data:e})=>{if(e&&e.data){const{credit:t,level:i,score:n}=e.data;return{ratingCredit:t,ratingLevel:i,ratingScore:n,ratingString:n<800?`${n} / ${100*i}`:n}}}))}async onLaunch(){this.addListener("getData",(e,t,i)=>{this.getData().then(e=>i(e))}),this.addListener("getArticleData",(e,t,i)=>{this.getArticleData().then(e=>i(e))}),this.addListener("getRatingData",(e,t,i)=>{this.getRatingData().then(e=>i(e))})}}const C=["bhAccount"],L=[{key:"home",on:!0},{key:"animeTimeTable",on:!0},{key:"anime",on:!0},{key:"live",on:!0},{key:"favlist",on:!0},{key:"watchLater",on:!0},{key:"manga",on:!0}],_=[{key:"home",on:!0,defaultIndex:0},{key:"specialAttention",on:!0,defaultIndex:1},{key:"history",on:!0,defaultIndex:-2},{key:"recommend",on:!0,defaultIndex:-4},{key:"creator",on:!0,defaultIndex:-1}];class I extends o.Feature{constructor(e){super(e,"popupMain",{dependencies:["bilibiliAccountController"],settings:{on:!0,columns:1,videoCardType:"simple",videoOpenMethod:"direct",activeIfExist:!0,sectionShow:[],rememberRecentReadPosition:!0,showTag:!0,temporaryShowLatestSection:!1}}),(0,n.Z)(this,"isVIP",!1),(0,n.Z)(this,"requireSection",async(e=!1)=>{const t=this.getStore("requireSections");this.settings.sectionShow.length>0&&this.isVIP?(t!==r.version||e)&&(this.setStore("requireSections",r.version),this.settings.sectionShow=this.insectSection(this.settings.sectionShow,_,!1),await this.setSetting(this.settings)):await this.resetSections()}),(0,n.Z)(this,"resetSections",async()=>{this.setStore("requireSections",r.version),this.settings.sectionShow=this.insectSection([],L),this.settings.sectionShow=this.insectSection(this.settings.sectionShow,_,!1),await this.setSetting(this.settings)}),(0,n.Z)(this,"insectSection",(e,t,i=!0)=>{const n=[...e],o=e.reduce((e,t)=>(e[t.key]=t,e),{});return t.forEach(e=>{o[e.key]||(void 0!==e.defaultIndex?n.splice(e.defaultIndex,0,e):i?n.push(e):n.unshift(e))}),n}),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{await this.requireSection(!0)}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{const n=this.settings,{bhAccount:o}=n,r=(0,a.Z)(n,C);i({settings:this.simplifyConfig(r)})})}async onBeforeLaunch(){await this.emit("bilibiliHelperAccountController","getStatus",null,({bhAccount:e,hasLogin:t,bilibiliAccount:i})=>{this.hasLogin=t,this.bhAccount=e,this.bilibiliAccount=i,this.settings.bhAccount=this.bhAccount,this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin,this.isVIP=(0,r.isVIP)(this.bhAccount)})}async onLaunch(){await this.requireSection()}async onBHAccountChange(e){this.bhAccount=e,this.bhAccount?this.isVIP=(0,r.isVIP)(this.bhAccount):this.isVIP=!1,await this.requireSection(!0)}}var E=i(62680),A=i.n(E),D=i(95366),O=i.n(D),T=i(6919),M=i.n(T),N=i(93364),B=i.n(N),P=i(26771),R=i.n(P),Z=i(68630),F=i.n(Z),q=i(78149),j=i.n(q),U=i(26243),H=i.n(U),$=i(44943),V=i(72045);function W(e,t){var i=H()(e);if(A()){var n=A()(e);t&&(n=n.filter((function(t){return O()(e,t).enumerable}))),i.push.apply(i,n)}return i}function z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):M()?B()(e,M()(i)):W(Object(i)).forEach((function(t){R()(e,t,O()(i,t))}))}return e}const G=[{key:"home",on:!0,toggle:!0,needLogin:!1},{key:"live",on:!0,toggle:!0,needLogin:!1},{key:"dynamic",on:!0,toggle:!0,needLogin:!0},{key:"favourite",on:!0,toggle:!0,needLogin:!0},{key:"history",on:!0,toggle:!0,needLogin:!0},{key:"article",on:!0,toggle:!0,needLogin:!1},{key:"anime",on:!0,toggle:!0,needLogin:!1},{key:"audio",on:!0,toggle:!0,needLogin:!1}],J=[{title:"\u7a0d\u540e",url:"https://www.bilibili.com/watchlater/#/list",on:!0},{title:"\u6f2b\u753b",url:"https://manga.bilibili.com/",on:!0},{title:"\u9891\u9053",url:"https://www.bilibili.com/v/channel/",on:!0}],Q=[];class Y extends o.Feature{constructor(e){super(e,"popupMenu",{dependencies:["bilibiliAccountController"],settings:{on:!0,menuOptions:G}}),(0,n.Z)(this,"hasPermission",!0),(0,n.Z)(this,"defaultTabMap",{home:()=>"https://www.bilibili.com/",live:()=>"https://live.bilibili.com/",dynamic:()=>"https://t.bilibili.com/",favourite:async()=>await this.emit("bilibiliAccountController","getLocalUID",null,e=>`https://space.bilibili.com/${e}/favlist`),history:()=>"https://www.bilibili.com/account/history",article:()=>"https://www.bilibili.com/read/home",anime:()=>"https://www.bilibili.com/anime",audio:()=>"https://www.bilibili.com/v/music"}),(0,n.Z)(this,"onBeforeSetSettingsFromCloud",async({settings:e,stores:t})=>{null!==t&&void 0!==t&&t.customMenu&&(t.customMenu=t.customMenu.map(e=>(void 0===e.key&&(e.key=this.generateMenuKey()),void 0===e.on&&(e.on=!0),e)).filter(Boolean)),j()(e.menuOptions)?e.menuOptions=e.menuOptions.map(e=>(void 0===e.key&&(e.key=this.generateMenuKey()),void 0===e.on&&(e.on=!0),z(z({},e),{},{title:(0,$.__)("popupMenu_kinds_"+e.key)}))):F()(e.menuOptions)&&(e.menuOptions=H()(e.menuOptions).map(t=>({key:t,title:(0,$.__)("popupMenu_kinds_"+t),on:e.menuOptions[t].on,needLogin:e.menuOptions[t].needLogin,toggle:e.menuOptions[t].toggle})))}),(0,n.Z)(this,"openNewTab",async(e,t,i)=>{const{url:n,key:o,active:a=!0,activeIfExist:r=!0}=e;let s=!1;if(this.hasPermission){let e;if(o&&!this.defaultTabMap[o])return void this.logger.warn("undefined popup menu key",o);e=o?await this.defaultTabMap[o]():n,"home"!==o&&"live"!==o||(s=!0),this.emit("tabController","create",{url:e,strict:s,active:a,activeIfExist:r},()=>{i(!0)})}else i(!1)}),(0,n.Z)(this,"initNewCustomMenu",()=>{const e=this.getStore("hasSetNewCustomMenu");return e?[]:(this.setStore("newCustomMenuList",Q.map(e=>(e.key=this.generateMenuKey(),e.on=!0,e))),this.setStore("hasSetNewCustomMenu",!0),Q)}),(0,n.Z)(this,"generateMenuKey",()=>(0,V.Z)().split("-").join("").slice(5,10)),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{this.customMenuStore=this.getStore("customMenu")}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{customMenu:this.customMenuStore}})})}async onInitStore(){this.customMenuStore=this.getStore("customMenu");const e=this.initNewCustomMenu(),t=J;if(this.customMenuStore){let t=!1;this.customMenuStore=this.customMenuStore.map(e=>{if(null!==e)return void 0===e.on&&(e.on=!0,t=!0),void 0===e.key&&(e.key=this.generateMenuKey(),t=!0),e;t=!0}).filter(Boolean),this.customMenuStore=[...this.customMenuStore,...e],t&&this.setStore("customMenu",this.customMenuStore)}else this.setStore("customMenu",t),this.customMenuStore=t;F()(this.settings.menuOptions)&&(this.settings.menuOptions=H()(this.settings.menuOptions).map(e=>({key:e,title:(0,$.__)("popupMenu_kinds_"+e),on:this.settings.menuOptions[e].on,needLogin:this.settings.menuOptions[e].needLogin,toggle:this.settings.menuOptions[e].toggle})),this.setSetting(this.settings)),this.settings.menuOptions.forEach(e=>{e.title=(0,$.__)("popupMenu_kinds_"+e.key)})}async onBeforeSetSetting(e){return F()(e.menuOptions)&&(e.menuOptions=H()(e.menuOptions).map(t=>({key:t,title:(0,$.__)("popupMenu_kinds_"+t),on:e.menuOptions[t].on,needLogin:e.menuOptions[t].needLogin,toggle:e.menuOptions[t].toggle}))),e}async onBeforeLaunch(){this.addListener("setSystemMenuState",(e,t,i)=>{if(e.key&&void 0!==e.on){const t=this.settings.menuOptions.find(({key:t})=>t===e.key);t&&(t.on=e.on),this.setSetting(this.settings)}i(!0)}),this.addListener("setOptionsMenuList",(e,t,i)=>{this.settings.menuOptions=e.list,this.setSetting(this.settings),i(!0)}),this.addListener("setCustomMenuList",(e,t,i)=>{this.customMenuStore=e.list.map(e=>(void 0===e.key&&(e.key=this.generateMenuKey()),void 0===e.on&&(e.on=!0),e)),this.setStore("customMenu",this.customMenuStore),i(!0)}),this.addListener("updateCustomMenu",(e,t,i)=>{void 0!==e.index&&void 0!==e.title&&void 0!==e.url?(this.customMenuStore[e.index]={title:e.title,url:e.url},this.setStore("customMenu",this.customMenuStore),i(!0)):i(!1)}),this.addListener("deleteCustomMenu",(e,t,i)=>{this.customMenuStore[e.index]?(this.customMenuStore.splice(e.index,1),this.setStore("customMenu",this.customMenuStore),i(!0)):i(!1)}),this.addListener("getMenuList",(e,t,i)=>{i({options:this.settings.menuOptions,custom:this.customMenuStore})}),this.addListener("openNewTab",this.openNewTab)}}class X extends o.Feature{constructor(e){super(e,"popupSearcher",{dependencies:["bilibiliAccountController"],settings:{on:!0}}),(0,n.Z)(this,"search",(e,t,i)=>{this.emit("tabController","create",{url:"https://search.bilibili.com/all?keyword="+e.keyword},()=>{const t=this.store.indexOf(e.keyword);t>=0&&this.store.splice(t,1),this.store.push(e.keyword),this.store=this.store.slice(-10),this.setStore("searchHistory",this.store)}),i(!0)}),(0,n.Z)(this,"getHistory",(e,t,i)=>{i(this.store)}),(0,n.Z)(this,"clearAll",(e,t,i)=>{this.store=[],this.setStore("searchHistory",this.store),i(!0)}),(0,n.Z)(this,"clearKeywordByIndex",(e,t,i)=>{this.store.splice(e.index,1),this.setStore("searchHistory",this.store),i(this.store)})}async onInitStore(){const e=this.getStore("searchHistory");void 0===e?(this.store=[],this.setStore("searchHistory",this.store)):this.store=e}async onLaunch(){this.addListener("go2Search",this.search),this.addListener("getSearchHistory",this.getHistory),this.addListener("clearAll",this.clearAll),this.addListener("clearKeywordByIndex",this.clearKeywordByIndex)}}class K extends o.Feature{constructor(e){super(e,"popup",{settings:{on:!0,resizeRate:1}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},76063:(e,t,i)=>{"use strict";i.d(t,{M:()=>m});var n=i(33385),o=i(90487),a=i.n(o),r=i(27921),s=i.n(r),l=i(73473),c=i.n(l),d=i(66130),h=i.n(d),u=i(69759),p=i(15558);class m extends(869==i.j?u.Feature:null){constructor(e){super(e,"specialAttention",{settings:{on:!0,toggle:!1},cache:{type:"local",dataType:"object",limit:{duration:6e4}}}),(0,n.Z)(this,"attentionList",new(a())),(0,n.Z)(this,"needRefresh",!1),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"setSpecialAttentionList",(e,t,i)=>{e.uidList&&e.uidList instanceof Array?(this.attentionList=new(a())(e.uidList),this.setStore("attentionList",s()(this.attentionList)),i(!0)):i(!1)}),(0,n.Z)(this,"getSpecialAttentionList",(e,t,i)=>{i(s()(this.attentionList))}),(0,n.Z)(this,"getSpecialAttentionAccountList",async(e,t,i)=>{const n=await this.emit("bilibiliAccountController","getAccountList",{uidList:s()(this.attentionList)});i(n.map(e=>e.toJSON()))}),(0,n.Z)(this,"addSpecialAttention",async(e,t,i)=>{if(e.uid){const{uid:t}=e;this.attentionList.has(+t)?i(!1):(this.attentionList.add(+t),this.setStore("attentionList",s()(this.attentionList)),await this.emit("bilibiliAccountController","create",{uid:t},e=>{this.needRefresh=!0,i(e)}))}else i(!1)}),(0,n.Z)(this,"removeSpecialAttention",(e,t,i)=>{e.uid?(this.attentionList.delete(+e.uid),this.setStore("attentionList",s()(this.attentionList)),i(!0)):i(!1)}),(0,n.Z)(this,"fetchSpecialAccountVideoData",async(e,t,i)=>{if(e.uid){const t=await this.getAccountVideos(e.uid,"publishDate",e.pn||1,e.ps||20);i(t)}else i(!1)}),(0,n.Z)(this,"fetchSpecialAccountLiveData",async(e,t,i)=>{e.uid?this.getAccountLiveStatus(e.uid).then(i):i(!1)}),(0,n.Z)(this,"getAccountVideos",(e,t="publishDate",i=1,n=25)=>new(c())(o=>{this.emit("requestController","create",{url:`https://api.bilibili.com/x/space/arc/search?mid=${e}&pn=${i}&ps=${n}&order=${t}`,options:{contentType:"json"}},o)}).then(({data:e})=>{const{code:t,data:i}=e;if(0===t&&i.list){const e=i.list.vlist.map(e=>({videoInfo:{aid:e.aid,bvid:e.bvid,cover:e.pic.replace("http://","https://"),duration:e.length,title:e.title,publishDate:(0,p.S1)(1e3*e.created),description:e.description,isNew:h()()-1e3*e.created<864e5},userInfo:{name:e.author,uid:e.mid,face:e.pic}}));return{list:e||[],page:i.page||!1}}return!1})),(0,n.Z)(this,"getAccountLiveStatus",e=>new(c())(t=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/space/acc/info?mid="+e,options:{contentType:"json"}},t)}).then(({data:e={}})=>{const{code:t,data:i}=e;return!(0!==t||!i.live_room)&&(i.live_room||{})})),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{let e=this.getStore("attentionList");e&&("string"===typeof e&&(e=JSON.parse(e.replaceAll("'","")),this.setStore("attentionList",e)),this.attentionList=new(a())(e),this.emit("*","updateSpecialAttentionList",{list:s()(this.attentionList)}))}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings,["on"]),stores:{attentionList:this.getStore("attentionList")}})})}async onInitStore(){var e;let t=this.getStore("attentionList");"string"===typeof t&&(null===(e=t)||void 0===e?void 0:e.length)>=2&&(t=JSON.parse(t.replaceAll("'","")),this.setStore("attentionList",t)),void 0===t?(this.attentionList=new(a()),this.setStore("attentionList",[])):this.attentionList=new(a())(t.map(e=>+e))}async onBeforeLaunch(){this.addListener("setSpecialAttentionList",this.setSpecialAttentionList),this.addListener("getSpecialAttentionList",this.getSpecialAttentionList),this.addListener("getSpecialAttentionAccountList",this.getSpecialAttentionAccountList),this.addListener("addSpecialAttention",this.addSpecialAttention),this.addListener("removeSpecialAttention",this.removeSpecialAttention),this.addListener("fetchSpecialAccountVideoData",this.fetchSpecialAccountVideoData),this.addListener("fetchSpecialAccountLiveData",this.fetchSpecialAccountLiveData)}async onBHAccountChange(e){this.hasLogin||(this.attentionList=new(a()))}}},99837:(e,t,i)=>{"use strict";i.d(t,{Th:()=>M,p6:()=>j,tC:()=>F,vN:()=>A});var n=i(33385),o=i(90487),a=i.n(o),r=i(27921),s=i.n(r),l=i(73473),c=i.n(l),d=i(26243),h=i.n(d),u=i(62680),p=i.n(u),m=i(95366),g=i.n(m),b=i(6919),f=i.n(b),v=i(93364),y=i.n(v),k=i(26771),w=i.n(k),x=i(63334),S=i(69759),C=i(44943),L=i(42151),_=i(49675),I=i(25498),E=i(19607);class A extends S.Feature{constructor(e){super(e,"subscriptionDynamic",{dependencies:["specialAttention"],settings:{on:!1,rangeType:"all",numberType:"theLatestThree",useWhiteList:!1,useBlackList:!1,duration:10,showCover:!1,showBadge:!0,noNotification:!1,notifyTypes:["8"]},cache:{type:"local",dataType:"object",limit:{duration:18e5}}}),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"notificationControllerOn",!1),(0,n.Z)(this,"specialAttentionList",[]),(0,n.Z)(this,"typeList",[8]),(0,n.Z)(this,"defaultTypeList",[8]),(0,n.Z)(this,"offsetDynamicId",0),(0,n.Z)(this,"offsetDynamicIdMap",{}),(0,n.Z)(this,"list",[]),(0,n.Z)(this,"newCardsIdList",new(a())),(0,n.Z)(this,"sentList",[]),(0,n.Z)(this,"recentDynamicId",0),(0,n.Z)(this,"onBeforeLaunch",async()=>{this.addListener("updateSpecialAttentionList",e=>{this.specialAttentionList=e.list||[]}),this.addListener("clearCache",(e,t,i)=>{this.clearCache(),i(!0)}),this.addListener("getDynamic",(e,t,i)=>{if(this.bilibiliAccount&&this.bilibiliAccount.hasLogin){const{typeList:t,offsetDynamicId:n,clearCache:o,continuous:a}=e,r=String(t||this.defaultTypeList).split(",").map(e=>e.trim()).sort().join(","),s=void 0===n?this.offsetDynamicIdMap[t]:n;this.getDynamic(this.bilibiliAccount.uid,r,s,o,a).then(i)}else i(!1)}),this.addListener("notificationControllerStateChange",e=>{e.on&&"off"!==this.settings.rangeType&&this.createVideoDynamicClock(),this.notificationControllerOn=e.on}),this.addListener("getBlackList",(e,t,i)=>{i(s()(this.blackList))}),this.addListener("setBlackList",(e,t,i)=>{this.blackList=new(a())(e.blackList),this.setStore("blackList",s()(this.blackList)),i(!0)}),this.addListener("getWhiteList",(e,t,i)=>{i(s()(this.whiteList))}),this.addListener("setWhiteList",(e,t,i)=>{this.whiteList=new(a())(e.whiteList),this.setStore("whiteList",s()(this.whiteList)),i(!0)}),this.addListener("getNewList",(e,t,i)=>{i([...this.newCardsIdList])}),this.addListener("clearNewList",(e,t,i)=>{this.newCardsIdList=new(a()),chrome.browserAction.setBadgeText({text:""}),i(!0)})}),(0,n.Z)(this,"getLocalAccount",()=>new(c())(e=>{this.emit("bilibiliAccountController","getLocalAccount",null,e)})),(0,n.Z)(this,"createVideoDynamicClock",async()=>{this.emit("clockController","create",{name:"dynamic",alarmInfo:{periodInMinutes:this.hasLogin&&(0,_.isVIP)(this.bhAccount)?this.settings.duration:10},focus:!0,callback:()=>{this.checkNewCallback()}})}),(0,n.Z)(this,"clearCache",()=>{this.cache.set({cards:[],hasMore:!0,videoIdList:new(a())},!0)}),(0,n.Z)(this,"checkNewCallback",()=>{this.getLocalAccount().then(({uid:e})=>{const t=String(this.defaultTypeList),i=this.offsetDynamicIdMap[t];return i?this.checkNew(e,this.defaultTypeList,i,i).then(e=>e&&0===e.code?e.data.new_num:c().reject(e)).then(i=>{if(i)return this.getNew(e,this.defaultTypeList).then(e=>{if(0===e.code&&e.data.cards.length>0&&i>0){var n,o;const a=e.data.cards.slice(0,+i).map(e=>new E.X(e).toJSON()).filter(e=>!this.newCardsIdList.has(e.dynamicInfo.dynamicIdStr)&&(this.newCardsIdList.add(e.dynamicInfo.dynamicIdStr),!0)),r=a?null===(n=a[0])||void 0===n||null===(o=n.dynamicInfo)||void 0===o?void 0:o.dynamicIdStr:null;if(r&&(this.logger.log("checkNewCallback",r),this.offsetDynamicIdMap[t]=r,!this.settings.noNotification)){const e=a.filter(e=>{var t,i;if(!this.sentList.includes(null===e||void 0===e||null===(t=e.dynamicInfo)||void 0===t?void 0:t.dynamicIdStr))return this.sentList.push(null===e||void 0===e||null===(i=e.dynamicInfo)||void 0===i?void 0:i.dynamicIdStr),this.sentList=this.sentList.slice(-100),!0});e.length>0&&this.sendNotificationByList(e)}this.settings.showBadge&&chrome.browserAction.setBadgeText({text:String(this.newCardsIdList.size)})}})}):this.getNew(e,this.defaultTypeList).then(e=>{if(e&&0===e.code){if(e.data.cards&&e.data.cards.length>0){var i,n,o;this.logger.log("getNewList",e.data.cards);const a=null===(i=e.data)||void 0===i||null===(n=i.cards[0])||void 0===n||null===(o=n.desc)||void 0===o?void 0:o.dynamic_id_str;a&&(this.logger.log("getNew",a),this.offsetDynamicIdMap[t]=a)}}else this.logger.error(e)})})}),(0,n.Z)(this,"getDynamic",(e,t,i=0,n=!1,o=!1)=>{var r;const{expired:s}=this.cache.checkExpired();this.cache.clearCache(n);const l=this.cache.get();return l.videoIdList instanceof Array?l.videoIdList=new(a())(l.videoIdList):l.videoIdList||(l.videoIdList=new(a())),null!==l&&void 0!==l&&l.cards||(l.cards=[]),o||null===l||void 0===l||null===(r=l.cards)||void 0===r||!r.length||s?new(c())(n=>{(i?this.getHistory(e,i,t):this.getNew(e,t)).then(e=>new(c())((t,i)=>{const{code:n,data:o}=e||{};0===n?t(o):i(e)})).then(e=>{const{cards:t=[],has_more:a}=e,r=t.slice(-1),s=void 0!==a?!!a:20===t.length;if(r&&r[0]){let e=t.map(e=>new E.X(e).toJSON()),i=e[0].dynamicInfo.dynamicIdStr;if(e=e.map(e=>(e.userInfo.uid&&(e.isSpecialAttention=this.specialAttentionList.includes(e.userInfo.uid)),e)).filter(e=>{if(!l.videoIdList.has(e.dynamicInfo.dynamicIdStr))return l.videoIdList.add(e.dynamicInfo.dynamicIdStr),!0}),0===e.length)return n(l);l.hasMore=s,l.offsetDynamicId=r[0].desc.dynamic_id_str,o||(this.getStore("recentDynamicId")!==i&&(this.recentDynamicId=this.getStore("recentDynamicId")||"0"),this.recentDynamicId!==i&&i>this.recentDynamicId&&this.setStore("recentDynamicId",i));const a=e.findIndex(e=>e.dynamicInfo.dynamicIdStr===this.recentDynamicId);(0===a&&l.cards.length>0||a>0)&&(l.cards=l.cards.filter(({type:e})=>"recentReadPosition"!==e),e.splice(a,0,{type:"recentReadPosition"})),l.cards.push(...e),this.cache.set(l),n(o?{hasMore:s,offsetDynamicId:r[0].desc.dynamic_id_str,cards:e}:l)}else n({hasMore:!1,cards:[],offsetDynamicId:i})}).catch(e=>{n({hasMore:!1,cards:[],offsetDynamicId:i})})}):c().resolve(l)}),(0,n.Z)(this,"checkNew",(e,t,i,n)=>{const o="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_num",a={uid:e,type:t,rsp_type:1,current_dynamic_id:i||n};return new(c())(e=>this.emit("requestController","create",{url:(0,L.generateURLByParams)(o,a),options:{contentType:"json"}},({data:t})=>e(t)))}),(0,n.Z)(this,"getHistory",(e,t,i)=>{const n="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history",o={uid:e,offset_dynamic_id:t,type:i};return new(c())(e=>this.emit("requestController","create",{url:(0,L.generateURLByParams)(n,o),options:{contentType:"json"}},e)).then(({data:e})=>e)}),(0,n.Z)(this,"getNew",(e,t)=>{const i="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new",n={uid:e,type_list:t};return new(c())(e=>this.emit("requestController","create",{url:(0,L.generateURLByParams)(i,n),options:{contentType:"json"}},e)).then(({data:e})=>!1===e?(this.emit("notificationController","post",{title:"\u6700\u65b0\u6295\u7a3f\u68c0\u6d4b\u5931\u8d25",tag:"subscriptionDynamic"}),c().reject()):e)}),(0,n.Z)(this,"sendNotificationByList",e=>{const{on:t,rangeType:i,numberType:n,useBlackList:o,useWhiteList:a}=this.settings;if(!t||"off"===i||e&&0===e.length)return;let r=[...e];if(this.hasLogin&&(0,_.isVIP)(this.bhAccount)&&(a?r=r.filter(e=>this.whiteList.has(String(e.userInfo.uid))):("specialAttention"===i&&(r=e.filter(e=>this.specialAttentionList.includes(e.userInfo.uid))),o&&(r=r.filter(e=>!this.blackList.has(String(e.userInfo.uid)))))),0!==r.length)if(this.hasLogin&&"merge"===n&&(0,_.isVIP)(this.bhAccount)){const e=(0,C.__)("subscriptionDynamic_videoNumberType_merge",[r.length]);this.emit("notificationController","post",{title:e,icon:chrome.runtime.getURL("statics/images/bilibili-cat-256.png"),data:{url:"https://t.bilibili.com/?tab=8"},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4})}else{let e=r;this.hasLogin&&"theLatestThree"===n&&(0,_.isVIP)(this.bhAccount)&&(e=e.slice(-3)),e.forEach(({type:e,dynamicInfo:t,videoInfo:i,userInfo:n,musicInfo:o,articleInfo:a,originInfo:r})=>{const s=(null===i||void 0===i?void 0:i.title)||(null===o||void 0===o?void 0:o.title)||(null===a||void 0===a?void 0:a.title)||t.content||"",l=1===e?"\u521a\u8f6c\u53d1\u4e86 "+(1===r.type?"\u52a8\u6001":x.Ik[r.type]):"\u521a\u53d1\u4e86 "+x.Ik[e],c=null!==i&&void 0!==i&&i.aid?"https://www.bilibili.com/video/"+(0,I.av2bv)(+i.aid):"https://t.bilibili.com/"+t.dynamicIdStr;this.emit("notificationController","post",{title:`${n.name} ${l}`,body:s,icon:n.face,image:this.settings.showCover?null===i||void 0===i?void 0:i.cover:null,data:{url:c},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4})})}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{whiteList:this.getStore("whiteList"),blackList:this.getStore("blackList"),recentDynamicId:this.getStore("recentDynamicId")}})}),this.cache.remove()}async onInitStore(){const e=this.getStore("blackList");void 0===e?(this.blackList=new(a())([]),this.setStore("blackList",s()(this.blackList))):this.blackList=new(a())(e);const t=this.getStore("whiteList");void 0===t?(this.whiteList=new(a())([]),this.setStore("whiteList",s()(this.whiteList))):this.whiteList=new(a())(t),this.defaultTypeList=String(this.settings.notifyTypes).split(",").map(e=>+e),(23===this.defaultTypeList.length||this.defaultTypeList.includes(+x.xk.ALL))&&(this.defaultTypeList=[x.xk.ALL]);const i=this.cache.get();i&&i.cards||this.cache.set({cards:[],newOffsetDynamicId:-1,hasMore:!0,videoIdList:new(a())},!0),this.recentDynamicId=this.getStore("recentDynamicId")||"0"}async onAfterSetSetting(e,t){this.defaultTypeList=String(this.settings.notifyTypes).split(",").map(e=>+e),(23===this.defaultTypeList.length||this.defaultTypeList.includes(+x.xk.ALL))&&(this.defaultTypeList=[x.xk.ALL]),this.emit("clockController","query",{name:"dynamic"},e=>{!t.on&&e?this.pause():e||this.createVideoDynamicClock()})}async onLaunch(){this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.settings.on&&c().all([this.emit("notificationController","getSetting",null,({on:e})=>e),this.emit("specialAttention","getSpecialAttentionList",{},e=>e||[])]).then(([e,t])=>{this.notificationControllerOn=e,this.specialAttentionList=t}).then(()=>{this.notificationControllerOn&&"off"!==this.settings.rangeType&&this.createVideoDynamicClock()})}async onPause(){this.emit("clockController","clear",{name:"dynamic"},null)}async onBHAccountChange(e){await super.onBHAccountChange(e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&await this.createVideoDynamicClock():await this.pause()}}var D=i(66130),O=i.n(D),T=i(48903);class M extends S.Feature{constructor(e){super(e,"bilibiliLiveBroadcast",{dependencies:["specialAttention"],settings:{on:!1,rangeType:"all",useBlackList:!1,useWhiteList:!1,duration:10,showCover:!1},cache:{dataType:"array",limit:{duration:12e4}}}),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"notificationControllerOn",!1),(0,n.Z)(this,"specialAttentionList",[]),(0,n.Z)(this,"currentList",[]),(0,n.Z)(this,"lastList",[]),(0,n.Z)(this,"needRecreatedClock",!1),(0,n.Z)(this,"onBeforeLaunch",async()=>{this.addListener("updateSpecialAttentionList",e=>{this.specialAttentionList=e.list||[]}),this.addListener("getLiveFeedList",(e,t,i)=>{const{pn:n,ps:o}=e;this.getLiveFeedBroadcastingList(n,o).then(e=>i(e))}),this.addListener("getFullSimpleLiveList",(e,t,i)=>{const{expired:n}=this.cache.checkExpired(),o=this.cache.get();!n&&o.length>0?i(this.cache.get()):this.getSimpleLiveFeedBroadcastingList([],1,29,!0).then(e=>{e&&e.length>0&&this.cache.set(e),i(e)})}),this.addListener("notificationControllerStateChange",e=>{e.on&&"off"!==this.settings.rangeType&&this.createLiveClock(),this.notificationControllerOn=e.on}),this.addListener("getBlackList",(e,t,i)=>{i(s()(this.blackList))}),this.addListener("setBlackList",(e,t,i)=>{e.blackList=e.blackList.map(e=>+e),this.blackList=new(a())(e.blackList),this.setStore("blackList",s()(this.blackList)),i(!0)}),this.addListener("getWhiteList",(e,t,i)=>{i(s()(this.whiteList))}),this.addListener("setWhiteList",(e,t,i)=>{e.whiteList=e.whiteList.map(e=>+e),this.whiteList=new(a())(e.whiteList),this.setStore("whiteList",s()(this.whiteList)),i(!0)})}),(0,n.Z)(this,"createLiveClock",()=>{this.emit("clockController","create",{name:"live",alarmInfo:{periodInMinutes:this.hasLogin&&(0,T.isVIP)(this.bhAccount)?this.settings.duration:10},focus:!0,callback:()=>{this.checkNew()}})}),(0,n.Z)(this,"getLocalUserId",()=>new(c())(e=>{this.emit("cookieController","message",{command:"getLocalUserId"},e)})),(0,n.Z)(this,"checkNew",async(e=!1)=>{if(this.hasLogin)return await this.getSimpleLiveFeedBroadcastingList([],1,29,!0).then(t=>{const{current:i,list:n,count:o}=this.getDifferent(this.currentList,t);return this.currentList=i,o>0&&!e?n:[]}).then(e=>{0!==e.length&&this.sendNotificationByList(e)}).catch(e=>{})}),(0,n.Z)(this,"getDifferent",(e,t)=>{const i=[];let n=0;return t.forEach(({owner:o},a)=>{let r=!1;e.forEach(({owner:e})=>{o.mid===e.mid&&(r=!0)}),r||(i.push(t[a]),n+=1)}),{current:t,list:i,count:n}}),(0,n.Z)(this,"getSimpleLiveFollowList",(e=1,t=29,i=!1)=>new(c())(i=>{setTimeout(()=>{this.emit("requestController","create",{url:`https://api.live.bilibili.com/xlive/web-ucenter/user/following?page=${e}&page_size=${t}&_=`+O()(),options:{contentType:"json"}},i)},500)}).then(({data:e})=>{if(!1===e)return this.emit("notificationController","post",{title:"\u5f00\u64ad\u68c0\u6d4b\u5931\u8d25",tag:"bilibiliLiveBroadcast"}),c().reject();if(0===e.code){let t=!1,n=e.data.list.map(({face:e,title:i,uname:n,uid:o,roomid:a,live_status:r})=>(r||(t=!0),{title:i,owner:{name:n,mid:o,face:e},roomId:a,living:!!r}));return i&&(n=n.filter(({living:e})=>e)),{rooms:n,count:e.data.count,toEnd:i?t:i}}return c().reject()})),(0,n.Z)(this,"getSimpleLiveFeedBroadcastingList",async(e=[],t=1,i=29,n=!1)=>await this.getSimpleLiveFollowList(t,i,n).then(({rooms:o,count:a,toEnd:r})=>r?(o=o.filter(e=>!!e.living),e.push(...o),e):(e.push(...o),e.length<a?this.getSimpleLiveFeedBroadcastingList(e,t+1,i,n):e))),(0,n.Z)(this,"getLiveFeedBroadcastingList",(e=1,t=10)=>new(c())(i=>this.emit("requestController","create",{url:`https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/GetWebList?page=${e}&page_size=${t}0&_=1616494848160`+O()(),options:{contentType:"json"}},i)).then(({data:e})=>{if(0===e.code)return{rooms:e.data.rooms.map(({keyframe:e,cover_from_user:t,title:i,nickname:n,uid:o,face:a,roomid:r,link:s,area_v2_name:l,tags:c})=>({cover:t||e,title:i,owner:{name:n,mid:o,face:a},roomId:r,link:s,areaName:l,tag:c})),count:e.data.count}})),(0,n.Z)(this,"sendNotificationByList",e=>{const{on:t,rangeType:i,useBlackList:n,useWhiteList:o}=this.settings;if(!t||"off"===i||!this.hasLogin)return;let a=[...e];(0,T.isVIP)(this.bhAccount)&&(o?a=a.filter(e=>this.whiteList.has(e.owner.mid)):("specialAttention"===i&&(a=e.filter(e=>this.specialAttentionList.includes(e.owner.mid))),n&&(a=a.filter(e=>!this.blackList.has(e.owner.mid))))),0!==a.length&&a.forEach(e=>{const{title:t,roomId:i,owner:n}=e;this.getRoomInfo(n.mid).then(e=>{this.emit("notificationController","post",{title:`\u4e3b\u64ad\u300c${n.name}\u300d\u5f00\u64ad\u5566! `,icon:n.face,image:this.settings.showCover?e:null,body:t,data:{url:"https://live.bilibili.com/"+i},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4})})})}),(0,n.Z)(this,"getRoomInfo",e=>new(c())(t=>{this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom?room_id="+e,options:{contentType:"json"}},({data:e})=>{e&&0===e.code&&e.data.room_info?t(e.data.room_info.cover||e.data.room_info.keyframe||null):t(null)})})),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{whiteList:this.getStore("whiteList"),blackList:this.getStore("blackList")}})})}async onInitStore(){const e=this.getStoreByCompleteName("subscriptionLiveBroadcast-config");e&&(await this.setSetting(e),this.deleteStoreByCompleteName("subscriptionLiveBroadcast-config"));let t=this.getStore("blackList");const i=this.getStoreByCompleteName("subscriptionLiveBroadcast-data_blackList");i&&(this.deleteStoreByCompleteName("subscriptionLiveBroadcast-data_blackList"),t=s()(new(a())([...i,...t||[]]))),void 0===t?(this.blackList=new(a())([]),this.setStore("blackList",s()(this.blackList))):(t=t.map(e=>+e),this.blackList=new(a())(t));let n=this.getStore("whiteList");const o=this.getStoreByCompleteName("subscriptionLiveBroadcast-data_whiteList");o&&(this.deleteStoreByCompleteName("subscriptionLiveBroadcast-data_whiteList"),n=s()(new(a())([...o,...n||[]]))),void 0===n?(this.whiteList=new(a())([]),this.setStore("whiteList",s()(this.whiteList))):(n=n.map(e=>+e),this.whiteList=new(a())(n))}async onAfterSetSetting(e,t){this.emit("clockController","query",{name:"live"},e=>{!t.on&&e?this.pause():e||this.createLiveClock()})}async onLaunch(){this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.hasLogin&&this.settings.on&&c().all([this.emit("notificationController","getSetting",null,({on:e})=>e),this.emit("specialAttention","getSpecialAttentionList",{},e=>e||[])]).then(([e,t])=>{this.notificationControllerOn=e,this.specialAttentionList=t}).then(()=>{this.lastList=this.cache.get(),this.notificationControllerOn&&"off"!==this.settings.rangeType&&this.createLiveClock(),this.checkNew(!0)})}async onPause(){this.emit("clockController","clear",{name:"live"},null)}async onBHAccountChange(e){await super.onBHAccountChange(e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.createLiveClock():this.pause()}}var N=i(47874);const B=["follow_unread","unfollow_unread"];function P(e,t){var i=h()(e);if(p()){var n=p()(e);t&&(n=n.filter((function(t){return g()(e,t).enumerable}))),i.push.apply(i,n)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?P(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):f()?y()(e,f()(i)):P(Object(i)).forEach((function(t){w()(e,t,g()(i,t))}))}return e}const Z={at:0,like:0,reply:0,sys_msg:0,follow_unread:0,unfollow_unread:0},F={at:"@\u6211\u7684",like:"\u70b9\u8d5e",reply:"\u56de\u590d",sys_msg:"\u7cfb\u7edf\u6d88\u606f",unread:"\u79c1\u4fe1"},q={at:"at",like:"love",reply:"reply",sys_msg:"system",unread:"whisper"};class j extends S.Feature{constructor(e){super(e,"bilibiliMessage",{settings:{on:!1,rangeType:{at:!0,like:!0,reply:!0,sys_msg:!0,unread:!0},useBlackList:!1,duration:5,speech:!1},cache:{type:"local",dataType:"object"}}),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"bhAccount",null),(0,n.Z)(this,"notificationControllerOn",!1),(0,n.Z)(this,"latestList",[]),(0,n.Z)(this,"newList",R({},Z)),(0,n.Z)(this,"needRecreatedClock",!1),(0,n.Z)(this,"onBeforeLaunch",async()=>{this.addListener("notificationControllerStateChange",e=>{e.on?this.settings.on&&this.createBilibiliMessageClock():this.pause(),this.notificationControllerOn=e.on}),this.addListener("getUnreadInfo",(e,t,i)=>{this.update().then(e=>i(e))})}),(0,n.Z)(this,"createBilibiliMessageClock",()=>{(0,T.isVIP)(this.bhAccount)&&(this.emit("clockController","create",{name:"bilibiliMessage",alarmInfo:{periodInMinutes:this.hasLogin&&(0,T.isVIP)(this.bhAccount)?this.settings.duration:5},focus:!0,callback:()=>{this.update().then(this.sendNotification)}}),this.update())}),(0,n.Z)(this,"update",()=>this.getLatestData().then(e=>{const t=R({},Z);let i=["at","like","reply","sys_msg","follow_unread","unfollow_unread"].reduce((i,n)=>(void 0!==e[n]&&void 0!==this.latestList[n]&&e[n]!==this.latestList[n]&&(e[n]<this.latestList[n]?t[n]=0:(t[n]=e[n]-this.latestList[n],i+=1)),i),0);return this.newList=i?t:R({},Z),this.latestList=e,{newList:this.newList,hasNew:i,latestList:this.latestList}})),(0,n.Z)(this,"getLatestData",()=>c().all([this.getUnreadInfo(),this.getSingleUnread()]).then(([e,t])=>R(R({},e),t))),(0,n.Z)(this,"getUnreadInfo",()=>this.bilibiliAccount&&this.bilibiliAccount.hasLogin?new(c())(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/msgfeed/unread?build=0&mobi_app=web",options:{contentType:"json"}},({data:t})=>{t&&0===t.code&&t.data?e(t.data||null):e(null)})}):c().resolve(null)),(0,n.Z)(this,"getSingleUnread",(e=!0)=>this.bilibiliAccount&&this.bilibiliAccount.hasLogin?new(c())(t=>{this.emit("requestController","create",{url:`https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread?unread_type=${e?0:1}&build=0&mobi_app=web`,options:{contentType:"json"}},({data:e})=>{e&&0===e.code&&e.data?t(e.data||null):t(null)})}):c().resolve(null)),(0,n.Z)(this,"sendNotification",({newList:e,hasNew:t})=>{const{on:i,rangeType:n}=this.settings;if(!i||!t)return;const{follow_unread:o,unfollow_unread:a}=e,r=(0,N.Z)(e,B);r.unread=o+a;const s=h()(r).map(e=>!(!r[e]||!n[e])&&e).filter(Boolean),l=s.map(e=>!!r[e]&&F[e]+":"+r[e]).filter(Boolean).join(", ");if(s.length>0){const e=q[s[0]];this.emit("notificationController","post",{title:"\u60a8\u6709\u65b0\u7684\u6d88\u606f\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536",icon:chrome.runtime.getURL("statics/images/bilibili-cat-256.png"),body:l,data:{url:"https://message.bilibili.com/#/"+e||"https://message.bilibili.com/#/reply"},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4},()=>{if(this.settings.speech){const e=window.speechSynthesis,t=new SpeechSynthesisUtterance(`\u60a8\u6709${s.length}\u6761\u65b0\u7684\u6d88\u606f`);e.speak(t)}})}}),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{this.isVIP||(this.settings.on=!1,this.pause())}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onInitStore(){const e=this.getStore("blackList");void 0===e?(this.blackList=new(a())([]),this.setStore("blackList",s()(this.blackList))):this.blackList=new(a())(e)}async onAfterSetSetting(e,t){this.emit("clockController","query",{name:"bilibiliMessage"},e=>{!t.on&&e||!this.isVIP?this.pause():e||this.createBilibiliMessageClock()})}async onLaunch(){this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.settings.on&&this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e,this.notificationControllerOn&&this.settings.on&&this.createBilibiliMessageClock()})}async onPause(){this.emit("clockController","clear",{name:"bilibiliMessage"},null)}async onBHAccountChange(e){await super.onBHAccountChange(e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.createBilibiliMessageClock():this.pause()}}},57945:(e,t,i)=>{"use strict";var n=i(48903);i(25498);const o=".bilibili-player-video-control .bilibili-player-iconfont.bilibili-player-iconfont-danmaku",a=".bilibili-player-video-danmaku-switch input[type=checkbox], .bpx-player-dm-root .bui-switch-input, .bui-danmaku-switch-input";let r,s;const l=async()=>{r=document.querySelector(o),r&&!r.getAttribute("bilibili-helper-data")?(r.setAttribute("bilibili-helper-data",!0),r.click()):(0,n.interval)(a).then(e=>{setTimeout(()=>{e&&e.click&&e.checked&&e.click()},1e3)})};chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},e=>{e.on&&(0,n.interval)(".bpx-player-sending-bar .bpx-player-dm-root,\n         .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root,\n         .bpx-player-sending-bar .bpx-player-dm-root").then(async e=>{e&&(await l(),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.length>0&&e.addedNodes.forEach(e=>{"VIDEO"!==e.tagName&&"INPUT"!==e.tagName||(r=document.querySelector(o),s=document.querySelector(a),setTimeout(l,1e3))})})}).observe(e,{subtree:!0,childList:!0}))})})},49363:(e,t,i)=>{"use strict";i.d(t,{G:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"videoHideDanmu",{settings:{on:!1}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},28051:(e,t,i)=>{"use strict";var n=i(73473),o=i.n(n),a=i(27921),r=i.n(a),s=i(18281),l=i.n(s),c=i(88686),d=i(48903),h=i(25498);const u=()=>new(o())(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},t=>{e(null===t||void 0===t?void 0:t.boundBlid)})}),p=()=>new(o())(e=>{(0,d.interval)("#v_upinfo .u-face .fa, .members-info .up-card a.avatar, .avatar-list .scroll-inside a, .up-info_right .username, .wide-members-container .scroll-inside a, .up-info_right .name a",1e3).then(t=>{if(t){const t=r()(document.querySelectorAll("#v_upinfo .u-face .fa, .members-info .up-card a.avatar, .avatar-list .scroll-inside a, .up-info_right .username, .wide-members-container .scroll-inside a, .up-info_right .name a, #member-container .up-card a")).map(e=>{const t=e.href.match(/space\.bilibili\.com\/(\d+?)$/);return!!t&&t[1]}).filter(Boolean);e(t)}else e([])})}),m=async()=>{const e="getUserCoins";return await(0,d.getPageDataInWindow)(`(() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window?.UserStatus?.userInfo?.money !== undefined) {\n                    window.postMessage({command: '${e}', pageData: window?.UserStatus?.userInfo?.money}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()`,e)},g=()=>(0,d.injectStyle)("bilibiliHelperAutoLikeCoinCollectStyle","\n        .bili-dialog-m, .bili-dialog-m {\n            display: none;\n        }\n    "),b=async e=>new(o())(t=>{if(!e)return t(!1);(0,d.interval)("#arc_toolbar_report .like, #toolbar_module .like-info").then(e=>e?e.classList.contains("on")?t(!1):(e.click(),void t(!0)):t(!1))}),f=async(e,t)=>{const i=await m();return new(o())(n=>e?void 0!==i&&i<t?(c.Message.info(`\u786c\u5e01\u4e0d\u591f\u5566(${i}/${t})`),n(!1)):void(0,d.interval)("#arc_toolbar_report .coin, #toolbar_module .coin-info").then(e=>e?e.classList.contains("on")?n(!1):(e.click(),void(0,d.interval)(".coin-operated-m .like-checkbox, .bili-dialog-m .like-checkbox, .coin-operated .like-checkbox").then(e=>{if(!e)return n(!1);e.click(),document.querySelector(".coin-operated-m .like-checkbox input, .bili-dialog-m .like-checkbox input, .coin-operated .like-checkbox input").click(),1===t?document.querySelector(".coin-operated-m .left-con, .bili-dialog-m .left-con, .coin-operated .left-con").click():document.querySelector(".coin-operated-m .right-con, .bili-dialog-m .right-con, .coin-operated .right-con").click(),setTimeout(()=>{document.querySelector(".coin-operated-m .coin-bottom .bi-btn, .bili-dialog-m .bi-btn, .coin-operated .coin-btn").click(),n(!0)},500)})):n(!1)):n(!1))},v=async(e,t)=>new(o())(i=>{if(!e)return i(!1);(0,d.interval)("#arc_toolbar_report .collect").then(e=>e?e.classList.contains("on")?i(!1):(e.click(),void chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},e=>{(0,d.interval)(".collection-m .group-list label, .collection-m-exp .group-list label",400).then(n=>{n||i(!1);const o=e.find(({id:e})=>e===+t),a=r()(document.querySelectorAll(".collection-m .group-list label, .collection-m-exp .group-list label")),s=a.find(e=>{const t=e.querySelector(".fav-title").textContent;return t===o.title});s?(s.click(),setTimeout(()=>{const e=document.querySelector(".collection-m .bottom .submit-move, .collection-m-exp .bottom .submit-move");e.click(),i(!0)},300)):i(!1)})})):i(!1))});chrome.runtime.onMessage.addListener((e,t,i)=>("initAutoLikeCoinCollect"===e.command?(u().then(e=>{(0,h.onVideoChange)(()=>{p().then((t=[])=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},async i=>{i=new(l())(i);let n=!1;for await(let o of t){const t=i.get(+o);if(t&&(!e||+o!==e)){const e=g(),i=await b(t.like).catch(e=>{}),o=await f(t.coin,t.coinNumber),a=await v(t.collect,t.collectionId);if((i||o||a)&&(c.Message.info("\u52a9\u624b\u732b\u4e00\u952e\u4e09\u8fde\u54af"),n=!0),setTimeout(()=>{e.remove()},1e3),n)break}}})})})}),i(!0)):i(!1),!0)),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getSetting"},e=>{e.on&&chrome.runtime.sendMessage({command:"autoLikeCoinCollectDOMInitialized"})})},47595:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var n=i(33385),o=i(18281),a=i.n(o),r=i(27921),s=i.n(r),l=i(16203),c=i(84564),d=i.n(c),h=i(48903);class u extends(869==i.j?l.Feature:null){constructor(e){super(e,"autoLikeCoinCollect",{dependencies:["specialAttention"],settings:{on:!0,pushNotification:!0}}),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"bilibiliAccount",void 0),(0,n.Z)(this,"featureConfigMap",new(a())),(0,n.Z)(this,"messageStore",new l.MessageStore("autoLikeCoinCollectDOMInitialized")),(0,n.Z)(this,"setFeatureConfig",async(e,t,i)=>{const{uid:n,type:o,value:a,extraValue:r}=e;if(n){let e=this.featureConfigMap.get(+n)||{};e[o]=a,a&&("coin"!==o||isNaN(r)?"collect"!==o||isNaN(r)||(e.collectionId=r):e.coinNumber=r>2?2:r),this.featureConfigMap.set(+n,e),this.setStore("featureConfigMap",this.featureConfigMap),i(!0)}else i(!1)}),(0,n.Z)(this,"getFeatureConfig",async(e,t,i)=>{i(s()(this.featureConfigMap.entries()))}),(0,n.Z)(this,"removeUserConfig",async(e,t,i)=>{const{uid:n}=e;n?(this.featureConfigMap.delete(+n),this.setStore("featureConfigMap",this.featureConfigMap),i(!0)):i(!1)}),(0,n.Z)(this,"fetchCollectionList",async(e,t,i)=>{this.bilibiliAccount?this.emit("requestController","create",{url:"https://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid="+this.bilibiliAccount.uid,options:{contentType:"json"}},({data:e})=>{0===e.code&&i(e.data.list)}):i([])}),(0,n.Z)(this,"watcherCallback",(0,h.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new(d())(e.url,"",!0),{pathname:n,query:o}=i;if(o.passWrapper)return;if(o&&o.requestFrom)return;const a=this.messageStore.createData(t);a.queue.push({command:"initAutoLikeCoinCollect",type:"init",data:o}),this.messageStore.dealWith(t)})),(0,n.Z)(this,"onAfterSetSettingsFromCloud",async()=>{const e=this.getStore("featureConfigMap");e&&(this.featureConfigMap=new(a())(e))}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{featureConfigMap:this.getStore("featureConfigMap")}})})}async onInitStore(){const e=this.getStore("featureConfigMap");void 0===e?(this.featureConfigMap=new(a()),this.setStore("featureConfigMap",[])):this.featureConfigMap=new(a())(e.map(([e,t])=>[+e,t]))}async onBeforeLaunch(){this.addListener("setFeatureConfig",this.setFeatureConfig),this.addListener("getFeatureConfig",this.getFeatureConfig),this.addListener("removeUserConfig",this.removeUserConfig),this.addListener("fetchCollectionList",this.fetchCollectionList)}async onLaunch(){await this.emit("specialAttention","getSpecialAttentionList",null,e=>{const t=this.featureConfigMap.size;e.forEach(e=>{this.featureConfigMap.has(e)||this.featureConfigMap.delete(e)}),t!==e.length&&(this.setStore("featureConfigMap",this.featureConfigMap),this.emit("bilibiliHelperAccountController","uploadSettings",{featureName:"autoLikeCoinCollect"}))}),this.emit("webRequestController","create",{name:"autoLikeCoinCollectVideoWatcher",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/web-interface/archive/relation?*"]},options:["requestHeaders"],callback:this.watcherCallback})}}},85995:(e,t,i)=>{"use strict";var n=i(73473),o=i.n(n),a=i(48903),r=i(25498);let s=!1;const l=!!location.pathname.match("medialist/play/watchlater"),c=()=>{if(l){const t=document.querySelector(".player-auxiliary-btn-playlist-order.player-tooltips-trigger");var e;if(t)return"reverse"===(null===(e=t.dataset)||void 0===e?void 0:e.order)?-1:1}return 1},d=async()=>new(o())(e=>{(0,a.interval)(".player-auxiliary-collapse-playlist .player-auxiliary-playlist-count,.video-sections-content-list",500,5).then(t=>{const i=!!t;let n="close"!==localStorage.getItem("recommend_auto_play");if(i){const t=document.querySelector(".player-auxiliary-collapse-playlist .player-auxiliary-playlist-count,.video-sections-head .cur-page,.base-video-sections .cur-page"),[o,a]=t.textContent.slice(1,-1).split("/"),r=c()>0?o===a:1===+o;e([n,i,r])}else e([n,i,!0])})}),h=async()=>new(o())(e=>{(0,a.interval)("\n        #multi_page,\n        #eplist_module .list-wrapper ul\n        ",500,5).then(t=>{s=!!t;let i="close"!==localStorage.getItem("recommend_auto_play");if(s){const t=document.querySelector("#multi_page .cur-page, #eplist_module .ep-list-progress");if(null!==t&&void 0!==t&&t.textContent){const[n,o]=t.textContent.replace(/[()]/g,"").split("/"),a=c()>0?n===o:1===+n;e([i,s,a])}else e([i,s,!1])}else e([i,s,!0])})});let u=null;const p=async(e,t)=>u||(e=void 0!==e?await d():e,!1!==e&&(u=document.querySelector(".player-auxiliary-autoplay-switch input,.video-sections .first-line-right .switch-button,.video-sections-head .switch-button")),t=void 0!==t?await h():t,u||!1===t||(u=document.querySelector("#multi_page .head-right .switch-button"),u||(u=await(0,r.getAutoPlayModeButtons)())),u||(u=document.querySelector("#reco_list .rec-title .switch-button")),u);let m=null,g=0;const b=async(e,t=!0,i)=>{if(i||(i=await p()),i instanceof Array){const[e,n]=i;e.classList.contains("active")^t&&(t?e.click():n.click())}else{var n;if(i&&e!==t)if(i.classList.contains("switch-button"))m=setInterval(()=>{const t=i.classList.contains("on");var n;e===t?(null===(n=i)||void 0===n||n.click(),clearInterval(m)):g+=1;g>=30&&clearInterval(m)},500);else null===(n=i)||void 0===n||n.click()}},f=async()=>o().race([d(),h()]).then(async([e,t,i])=>{const n=await p();t?await b(e,!i,n):await b(e,!1,n)});chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"getSetting"},e=>{if(e.on){if(l)return void(0,a.interval)(".player-auxiliary-btn-playlist-order.player-tooltips-trigger").then(e=>{e&&e.addEventListener("click",()=>{f()})});(0,r.onVideoChange)(async e=>{e&&await f()})}})},84149:(e,t,i)=>{"use strict";i.d(t,{m:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"videoAutoPlayMode",{settings:{on:!1}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},88622:(e,t,i)=>{"use strict";var n=i(73473),o=i.n(n),a=i(92593),r=i(25498);let s=null,l=!1;const c=async e=>{await new(o())(e=>{l?e(!0):(0,a.interval)("#bilibiliPlayer .bilibili-player-video-control-bottom-right, .squirtle-controller-wrap-right, .bpx-player-control-bottom-right",400,-1).then(t=>{l=!!t,e(l)})}).then(async t=>{const i=await(0,r.getCurrentWideType)();if(!t||i===e)return;let n=null;switch(e){case"wide":n=await(0,r.getNormalWidenButton)(!1,!1);break;case"web":n=await(0,r.getWebWidenButton)(!1,!1);break;case"full":n=await(0,r.getFullFillWidenButton)(!1,!1)}n&&n.click&&s!==e&&(s=e,n.click())})};chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},async e=>{e.on&&await(0,r.onVideoChange)(async t=>{t&&(l=!1,s=await(0,r.getCurrentWideType)(),s!==e.widenType&&"full"!==s&&await c(e.widenType))})})},10210:(e,t,i)=>{"use strict";i.d(t,{R:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"videoWiden",{settings:{on:!1,widenType:"default"}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},28211:(e,t,i)=>{"use strict";i.d(t,{S:()=>ie});var n=i(62680),o=i.n(n),a=i(95366),r=i.n(a),s=i(6919),l=i.n(s),c=i(93364),d=i.n(c),h=i(26771),u=i.n(h),p=i(33385),m=i(41609),g=i.n(m),b=i(35161),f=i.n(b),v=i(70894),y=i.n(v),k=i(39693),w=i.n(k),x=i(73473),S=i.n(x),C=i(79529),L=i.n(C),_=i(26243),I=i.n(_),E=i(76873),A=i(59158),D=i(19755),O=i.n(D),T=i(88540),M=i(52874),N=i(67294),B=i(80482),P=i(60677),R=i(73226),Z=i(84564),F=i.n(Z),q=i(48903);const j={list:"https://api.bilibili.com/x/v1/dm/list.so",historyList:"https://api.bilibili.com/x/v2/dm/history",card:"https://api.bilibili.com/x/web-interface/card",seg:"https://api.bilibili.com/x/v2/dm/web/seg.so",historySeg:"https://api.bilibili.com/x/v2/dm/web/history/seg.so",view:"https://api.bilibili.com/x/v2/dm/web/view"};function U(e,t){var i=I()(e);if(o()){var n=o()(e);t&&(n=n.filter((function(t){return r()(e,t).enumerable}))),i.push.apply(i,n)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?U(Object(i),!0).forEach((function(t){(0,p.Z)(e,t,i[t])})):l()?d()(e,l()(i)):U(Object(i)).forEach((function(t){u()(e,t,r()(i,t))}))}return e}const{color:$}=R.rS,V=new T.f,W=P["default"].div`
  position: relative;

  .danmu-wrapper {
    position: relative;
  }
`,z=P["default"].div.attrs({className:"bilibili-helper-danmu-title"})`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #222;

  .count {
    margin-left: 10px;
    color: ${$("google-grey-500")};
  }
`,G=(0,P["default"])(B.List).attrs({className:"bilibili-helper-danmu-list"})`
  position: relative;
  min-height: 100px;
  max-height: 230px;
  margin-left: 4px;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  overflow: hidden;
  outline: none;
  width: 100%;

  & .no-data {
  }
`,J=P["default"].div.attrs({className:"bilibili-helper-danmu-list"})`
  position: relative;
  min-height: 60px;
  max-height: 200px;
  margin-left: 4px;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  overflow: hidden;
  outline: none;

  .load-danmuku-button {
    height: 32px;
  }

  button {
    display: block;
    position: relative;
    margin: 4px;
    padding: 3px 12px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    letter-spacing: 0.3px;
    word-break: break-all;
    background-color: rgb(234, 244, 255);
    color: rgb(0, 161, 214);
    transition: all 0.3s ease 0s, visibility 0s ease 0s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      color: #004c65;
      background-color: #d4eaff;
    }
  }
`,Q=P["default"].div`
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 5px;
  box-sizing: border-box;
  padding: 6px;
  background-color: #fff;
  visibility: hidden;
  font-size: 12px;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  overflow: auto;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  .reason-radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
    margin: 8px 0;

    label {
      padding-left: 8px;
      height: 24px;
      line-height: 20px;
      cursor: pointer;

      input[type="radio"] {
        margin-right: 4px;
        appearance: auto;
        vertical-align: middle;
      }
    }
  }

  .report-content {
    margin: 4px 0 16px;
    padding: 4px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }

  .action-box {
    display: flex;
    flex-direction: row-reverse;

    .button {
      height: 28px;
      line-height: 28px;
    }

    .confirm-report {
      margin-left: 8px;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    .cancel {
      box-sizing: border-box;
      border: 1px solid #eee;
    }
  }
`,Y=P["default"].input.attrs({className:"bilibili-helper-danmu-input"})`
  display: block;
  width: calc(100% - 4px);
  margin-left: 4px;
  padding: 4px 6px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 4px 4px;
  font-size: 12px;
`,X=P["default"].div`
  display: flex;
  margin-bottom: 1px;
  padding: 0 8px 1px;
  line-height: 20px;
  background-color: ${({hasQueried:e})=>e?"#d6e8f5":"white"};
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00a1d6;

    .target-words {
      color: #fff;
    }
  }

  & .time {
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 30px;
    padding-right: 6px;
  }

  & .danmu {
    position: relative;
    flex-grow: 1;
    margin: 0 7px 0 3px;
    padding: 0 7px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    .button {
      position: absolute;
      top: 2px;
      right: 2px;
      height: 18px;
      line-height: 18px;
      vertical-align: bottom;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      zoom: 0.9;
      visibility: hidden;
    }

    &:hover {
      .button {
        visibility: visible;
      }
    }
  }

  & .author {
    flex-shrink: 0;
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & .target-words {
    font-weight: bold;
    color: #00a1d6;
  }
`,K=P["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: no-drop;
  user-select: none;
`,ee=(0,P["default"])(A.Button)`
  margin-left: 10px;
  padding: 0;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  font-weight: normal;
  border: 1px solid ${$("bilibili-blue")};
  border-radius: 4px;
  color: ${({on:e})=>e?"#fff":$("bilibili-blue")};
  background-color: ${({on:e})=>e?$("bilibili-blue"):"#fff"};

  button {
    min-width: 35px;
  }
`,te={1:"\u8fdd\u6cd5\u8fdd\u7981",2:"\u8272\u60c5\u4f4e\u4fd7",9:"\u6076\u610f\u5237\u5c4f",3:"\u8d4c\u535a\u8bc8\u9a97",4:"\u4eba\u8eab\u653b\u51fb",5:"\u4fb5\u72af\u9690\u79c1",6:"\u5783\u573e\u5e7f\u544a",10:"\u89c6\u9891\u65e0\u5173",7:"\u5f15\u6218",8:"\u5267\u900f",12:"\u9752\u5c11\u5e74\u4e0d\u826f\u4fe1\u606f",11:"\u5176\u5b83"};class ie extends N.Component{constructor(e){super(e),(0,p.Z)(this,"state",{loaded:!1,loadedXMLDANMU:!1,loading:!1,loadingText:null,danmuJSON:{list:[]},filterText:"",queryUserMode:null,currentCid:NaN,segmentDanmu:[],needLoadByHandle:!0,showDanmuReport:!1,reportDanmu:null,reportType:null,reportContent:"",dmid:null}),(0,p.Z)(this,"currentPid",null),(0,p.Z)(this,"addListener",()=>{const e=this;let t,i;chrome.runtime.onMessage.addListener(async(e,t,i)=>("loadNewTypeDanmu"===e.command?(this.getNewDANMUList(e.oid,e.pid,e.segmentIndex),i(!0)):"loadNewTypeHistoryDanmu"===e.command&&(this.getDanmuData(e.oid,1,e.date),i(!0)),!0)),window.addEventListener("message",(function(e){"pakku_ajax_request"===e.data.type&&/x\/v2\/dm\/history/.test(e.data.arg)&&chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"pakkuGetHistoryDanmu",url:e.data.arg})})),O()(document).on("mouseenter","[helper-data-usercard-mid]",(function(){e.createCard(this,O()(this).attr("helper-data-usercard-mid"))})),O()(document).on("mouseenter","[helper-data-usercard-mid], #helper-card",(function(){e.removeCardSign=!1,i&&(clearTimeout(i),i=null),i=setTimeout(()=>{document.querySelector("#helper-card")&&(document.querySelector("#helper-card").style.display="block")},300),t&&(clearTimeout(t),t=null),t=setTimeout(()=>{e.removeCardSign=!0},300)})),O()(document).on("mouseleave","[helper-data-usercard-mid], #helper-card, .bilibili-helper-danmu-wrapper",(function(){setTimeout(()=>{const t=document.querySelector("#helper-card");e.removeCardSign&&t&&(t.style.display="none")},200)}))}),(0,p.Z)(this,"getNewDanmuOption",(e,t,i)=>new(S())(n=>{const o=new(F())(j.view);o.set("query",{type:i,oid:e,pid:t}),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmuOption",url:o.toString(),oid:e},e=>{n(e)})})),(0,p.Z)(this,"getNewDANMUList",(e,t,i=1)=>this.getVideoDuration().then(n=>new(S())((o,a)=>{e?1===i&&this.segmentDanmuOid!==e?(this.segmentDanmuOid=e,this.segmentDanmuList=[],this.getNewDanmuOption(e,t,1).then(({pageSize:i,total:a})=>{this.segmentDanmuPageSize=i,this.segmentSize=(i?Math.ceil(n/L()(i/1e3,10)):25)||1,this.segmentSize>a&&(this.segmentSize=a),this.currentOid=e,this.currentPid=t,this.setState({needLoadByHandle:!0,loading:!1,loadingText:""},()=>o())})):o():(this.setState({needLoadByHandle:!0,loading:!1,loadingText:""}),a())}))),(0,p.Z)(this,"getDanmuData",async(e,t,i)=>{const n=new(F())(i?j.historySeg:j.seg);if(n.set("query",{type:1,oid:e,date:i,segment_index:t}),1===t){this.segmentDanmuList=[];const t={count:0,list:[],cid:e};this.orderedJSON=H({},t),this.setState({danmuJSON:t,loaded:!1,loading:!0,currentCid:e})}return new(S())(i=>{chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmu",url:n.toString(),oid:e,segmentIndex:t},e=>{1===t&&(this.state.danmuJSON.length=0);const n=t-1;this.segmentDanmuList[n]=e,this.state.danmuJSON.count+=e.length,this.setState({danmuJSON:H({},this.state.danmuJSON)}),i(!0)})}).then(i=>{if(i&&t<this.segmentSize)return this.getDanmuData(e,t+1);{this.orderedJSON.list=this.segmentDanmuList.filter(Boolean).flat();const t=[...this.orderedJSON.list],i={count:t.length,list:t,cid:e};this.orderedJSON=H({},i),this.setState({danmuJSON:i,loaded:!0,loading:!1,currentCid:e})}})}),(0,p.Z)(this,"getVideoInitialData",()=>new(S())((e,t)=>{this.injectScript("\n                (()=>{\n                    if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.epInfo) {\n                        const pid = window.__INITIAL_STATE__.epInfo.aid;\n                        const oid = window.__INITIAL_STATE__.epInfo.cid;\n                        window.postMessage({command: 'setVideoInitialData', pid, oid}, '*');\n                    } else if (window.__INITIAL_STATE__ && window.playerInfo) {\n                        const pid = window.playerInfo.aid;\n                        const oid = window.playerInfo.cid;\n                        window.postMessage({command: 'setVideoInitialData', pid, oid}, '*');\n                    }\n                })();\n            ",5e3);const i=n=>{const{data:o}=n;"setVideoInitialData"===o.command&&(window.removeEventListener("message",i),o?e(o):t())};window.addEventListener("message",i)})),(0,p.Z)(this,"getVideoDuration",()=>this.context.videoInfo&&this.context.videoInfo.duration&&1===this.context.videoInfo.videos?S().resolve(this.context.videoInfo.duration):new(S())((e,t)=>{this.injectScript("\n                    (()=>{\n                        const messageCallback = (event) => {\n                            const {data} = event;\n                            if (data.command === 'getVideoDuration') {\n                                let duration;\n                                if (window.__playinfo__ && window.__playinfo__.data && window.__playinfo__.data.dash) {\n                                    duration = parseInt(window.__playinfo__.data.dash.duration, 10);\n                                } else if (window.player) {\n                                    duration = window.player.getDuration();\n                                }\n                                window.postMessage({command: 'setDuration', duration: duration || null}, '*');\n                                window.removeEventListener('message', messageCallback);\n                            }\n                        };\n                        window.addEventListener('message', messageCallback);\n                    })()\n                ",5e3);const i=n=>{const{data:o}=n;"setDuration"===o.command&&(window.removeEventListener("message",i),o.duration?e(o.duration):t())};window.addEventListener("message",i),window.postMessage({command:"getVideoDuration"},"*")})),(0,p.Z)(this,"injectScript",(e,t=0)=>{const i=document.createElement("script");i.innerHTML=e,document.body.appendChild(i),t&&setTimeout(()=>{i.remove()},t)}),(0,p.Z)(this,"getUserInfoByUid",e=>new(S())(t=>{const i=new(F())(j.card);i.set("query",{mid:e,photo:1}),e&&chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchUserCard",url:i.toString()},i=>{if(i){const{code:n,data:o}=JSON.parse(i);if(0===n){const{card:i,space:n,follower:a,following:r}=o;this.userMap[e]=H(H(H({},i),n),{},{follower:a,following:r}),t(e)}else this.setState({loadingText:"\u67e5\u8be2\u5931\u8d25!"},()=>{setTimeout(()=>this.setState({loading:!1}),3e3)}),t(!1)}else this.setState({loadingText:"\u67e5\u8be2\u5931\u8d25!"},()=>{setTimeout(()=>this.setState({loading:!1}),3e3)}),t(!1)})})),(0,p.Z)(this,"isRobotUser",(e={})=>{const{card:t}=e,{level_info:i}=t,{current_level:n}=i;return 0===n}),(0,p.Z)(this,"getRowHeight",({index:e})=>{const{danmuJSON:t}=this.state,i=t.list[e],n=this.authorHashMap[i.authorHash];return n&&20*n.length||20}),(0,p.Z)(this,"handleInputChange",e=>{const t=e.target.value,{danmuJSON:i}=this.state,{cid:n}=i;if(e.target.value){const e=[];this.orderedJSON.list.forEach(i=>{var n;if(null===(n=i.danmu)||void 0===n||!n.indexOf)return;const o=i.danmu.indexOf(t);if(o>=0)if(i.danmu===t)e.push(H(H({},i),{},{danmu:N.createElement("span",{className:"target-words"},t)}));else{const n=i.danmu.split(t),o=n.reduce((e,i,o)=>(""===i?e.push(N.createElement("span",{key:o,className:"target-words"},t)):void 0!==n[o+1]&&""!==n[o+1]?e.push(i,N.createElement("span",{key:o,className:"target-words"},t)):e.push(i),e),[]);e.push(H(H({},i),{},{danmu:o}))}}),this.setState({danmuJSON:{cid:n,count:e.length,list:e}})}else{const{count:e,list:t}=this.orderedJSON;this.setState({danmuJSON:{cid:n,count:e,list:t}})}}),(0,p.Z)(this,"handleDanmuLineClick",e=>{let t=/^b(\d+)$/.exec(e),i=[];i=t&&t[1]?[t[1]]:V.crack(L()(e,16)),this.setState({loading:!0,loadingText:"\u52aa\u529b\u67e5\u8be2\u4e2d~(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648"});let n=[];S().all(i.map(e=>this.getUserInfoByUid(e))).then(e=>{n=n.concat(w()(e))}).then(()=>{n.length>0&&(this.authorHashMap[e]=n),this.setState({loading:!1},()=>{this.danmuListRef.recomputeRowHeights(),this.danmuListRef.forceUpdate()})})}),(0,p.Z)(this,"handleAuthorClick",(e,t)=>{if(this.state.queryUserMode)this.setState({queryUserMode:!1,danmuJSON:this.queryUserModeTemplateMap},()=>{this.danmuListRef.scrollToRow(this.currentRowIndex)});else{const i=[];this.queryUserModeTemplateMap=H({},this.state.danmuJSON);const n=t.map(e=>y()(this.authorHashMap,t=>!!~t.indexOf(e)));this.orderedJSON.list.forEach(e=>{n.includes(e.authorHash)&&i.push(H({},e))}),this.setState({queryUserMode:!0,danmuJSON:{cid:this.orderedJSON.cid,count:i.length,list:i}},()=>{this.currentRowIndex=e})}}),(0,p.Z)(this,"handleDownloadClick",e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_danmu",label:e}),new(S())(t=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},i=>{if(!i||!i.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoDanmu",data:H(H({},this.props.videoInfo),{},{format:e})},e=>{t(e||!1)})})}).then(t=>{this.state.danmuJSON.count>2e4&&E.Message.info("\u5b57\u5e55\u6587\u4ef6\u8f83\u5927\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"ass"===e?"downloadDanmuASS":"downloadDanmuXML",cid:this.state.currentCid,date:this.danmuDate,renamedFilename:t,filename:(0,q.getFilename)(document),origin:"ass"===e?document.location.href:null})})}),(0,p.Z)(this,"handleOnClickLoadDanmu",()=>{this.state.loadedXMLDANMU?this.setState({loading:!1,needLoadByHandle:!1}):new(S())(e=>{this.currentPid&&this.currentOid?e():this.getVideoInitialData().then(({oid:t,pid:i})=>{this.currentOid=t,this.currentPid=i,e()})}).then(()=>{this.setState({loading:!0,loadingText:"\u5f39\u5e55\u52a0\u8f7d\u4e2d~(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648",needLoadByHandle:!1},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_load_danmu_button"}),this.getNewDANMUList(this.currentOid,this.currentPid).then(()=>this.getDanmuData(this.currentOid,1))})}).then(()=>{this.setState({loading:!1,needLoadByHandle:!1})}).catch(e=>{this.setState({loading:!1,needLoadByHandle:!1})})}),(0,p.Z)(this,"createCardDOM",e=>{if(!e)return;const{mid:t,face:i,s_img:n,name:o,sign:a,level_info:r,following:s}=e;let l,c,d,h,u,p,m,g,b,f,v;c=document.querySelector(".helper-card-header")||document.createElement("div"),d=document.querySelector(".helper-card-container")||document.createElement("div"),h=document.querySelector(".helper-card-face")||document.createElement("img"),u=document.querySelector(".helper-card-user")||document.createElement("p"),p=document.querySelector(".helper-card-name")||document.createElement("a"),m=document.querySelector(".helper-card-sign")||document.createElement("p"),g=document.querySelector(".helper-card-level")||document.createElement("a"),b=document.querySelector(".helper-card-feed")||document.createElement("div"),f=document.querySelector(".helper-card-like-btn")||document.createElement("a"),v=document.querySelector(".helper-card-like-btn")||document.createElement("a"),l=document.querySelector("#helper-card"),l||(l=document.createElement("div"),c.setAttribute("class","helper-card-header bg"),d.setAttribute("class","helper-card-container info"),h.setAttribute("class","helper-card-face face"),u.setAttribute("class","helper-card-user user"),p.setAttribute("class","helper-card-name name"),p.setAttribute("target","_blank"),m.setAttribute("class","helper-card-sign sign"),b.setAttribute("class","helper-card-btn btn-box"),l.setAttribute("id","helper-card"),l.setAttribute("class","user-card"),g.setAttribute("class","helper-card-level level"),g.setAttribute("href","//www.bilibili.com/html/help.html#k_2"),g.setAttribute("target","_blank"),f.setAttribute("class","like"),f.innerHTML='<span class="hover-text">\u53d6\u6d88\u5173\u6ce8</span><span class="default-text">+\u5173\u6ce8</span>',v.setAttribute("class","message"),v.setAttribute("target","_blank"),v.innerText="\u53d1\u6d88\u606f",u.appendChild(p),u.appendChild(g),d.appendChild(u),d.appendChild(m),b.appendChild(f),b.appendChild(v),l.appendChild(c),l.appendChild(h),l.appendChild(d),l.appendChild(b)),c.setAttribute("style",`background-image: url(${n.replace(/^http:/,"https:")});`),h.setAttribute("src",i.replace(/^http:/,"https:"));const y=document.createElement("i");return y.setAttribute("class","level l"+r.current_level),g.innerHTML="",g.appendChild(y),f.setAttribute("mid",t),f.setAttribute("uname",o),f.onclick=function(){this.userMap[t].following=!s},s&&f.setAttribute("class","like liked"),v.setAttribute("href","//message.bilibili.com/#whisper/mid"+t),p.innerText=o,p.setAttribute("href","https://space.bilibili.com/"+t),m.innerText=a,l}),(0,p.Z)(this,"createCard",(e,t)=>{const i=this.userMap[t],n=this.createCardDOM(i);document.querySelector("#helper-card")||document.querySelector("body").appendChild(n),this.setTargetPosition(e,n)}),(0,p.Z)(this,"setTargetPosition",(e,t)=>{const{height:i,top:n,left:o}=e.getBoundingClientRect(),{height:a}=t.getBoundingClientRect();a&&(this.lastHeight=a),t.style.top=n>=a?n-this.lastHeight-2+"px":n+i+2+"px",o+377<=window.innerWidth?t.style.left=o+"px":t.style.left=window.innerWidth-377+"px"}),(0,p.Z)(this,"handleOnClickSetReportType",e=>{this.setState({reportType:+e.target.value})}),(0,p.Z)(this,"handleOnClickPostRepost",()=>{const{currentCid:e,reportType:t,dmid:i,reportContent:n}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_report_danmu_confirm_button"}),chrome.runtime.sendMessage({target:"videoDanmu",event:"postReport",cid:e,reason:t,dmid:i,content:n},e=>{this.setState({showDanmuReport:!1})})}),(0,p.Z)(this,"handleOnClickReportDanmu",(e,t,i)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_report_danmu_button"}),this.setState({showDanmuReport:!0,reportType:null,reportContent:"",reportDanmu:t,dmid:i})}),(0,p.Z)(this,"handleOnChangeReportContext",e=>{this.setState({reportContent:e.target.value})}),(0,p.Z)(this,"onScroll",({clientHeight:e,scrollHeight:t,scrollTop:i})=>{}),(0,p.Z)(this,"renderHeader",(e=this.state.danmuJSON)=>N.createElement(z,null,N.createElement("span",{style:{marginRight:"auto"}},"\u5f39\u5e55\u53d1\u9001\u8005\u67e5\u8be2 \u4e0e \u5f39\u5e55\u4e0b\u8f7d",e.count&&!this.state.needLoadByHandle?N.createElement("span",{className:"count"},e.count," \u6761"):null),this.state.needLoadByHandle?null:N.createElement(N.Fragment,null,N.createElement(ee,{title:"\u4e0b\u8f7d ASS \u683c\u5f0f\u5f39\u5e55\u6587\u4ef6",onClick:()=>this.handleDownloadClick("ass")},"ASS"),N.createElement(ee,{title:"\u4e0b\u8f7d XML \u683c\u5f0f\u5f39\u5e55\u6587\u4ef6",onClick:()=>this.handleDownloadClick("xml")},"XML")))),(0,p.Z)(this,"renderLine",({index:e,style:t})=>{const{danmuJSON:i}=this.state,n=i.list[e],{rowId:o,danmu:a,authorHash:r,time:s}=n,l=this.authorHashMap[r];let c=l?f()(l,e=>this.userMap[e]?this.userMap[e].name:""):null;return N.createElement(X,{key:o,title:`[${s}] ${a} ${c?"by:"+c.join(","):""}`,onClick:()=>l?this.handleAuthorClick(e,l):this.handleDanmuLineClick(r),hasQueried:!g()(c),style:t},N.createElement("span",{className:"time"},s),N.createElement("span",{className:"danmu"},a,N.createElement(A.Button,{onClick:e=>this.handleOnClickReportDanmu(e,a,o)},"\u4e3e\u62a5")),N.createElement("span",{className:"author"},c?c.map((e,t)=>N.createElement("div",{key:e,"helper-data-usercard-mid":l[t]},e)):null))}),(0,p.Z)(this,"renderList",()=>N.createElement(B.AutoSizer,{disableHeight:!0},({width:e})=>N.createElement(G,{ref:e=>this.danmuListRef=e,width:e,height:this.state.danmuJSON&&this.state.danmuJSON.list.length>0?250:100,rowCount:this.state.danmuJSON.list.length,rowHeight:this.getRowHeight,rowRenderer:this.renderLine,noRowsRenderer:()=>N.createElement(X,{key:"none"},"\u65e0\u6570\u636e"),scrollToAlignment:"center",data:this.state.danmuJSON?this.state.danmuJSON.list:[]}))),(0,p.Z)(this,"renderDanmuReport",()=>{const{showDanmuReport:e,reportDanmu:t,reportType:i,reportContent:n,needLoadByHandle:o}=this.state,a=11===i&&!!n||!!i&&11!==i;return N.createElement(Q,{className:!o&&e?"show":""},N.createElement("div",null,N.createElement("b",null,"\u4e3e\u62a5\u5f39\u5e55: "),N.createElement("span",null,t)),N.createElement("div",{className:"report-body"},N.createElement("div",{className:"reason-radio-group"},I()(te).map(e=>N.createElement("label",{key:e},N.createElement("input",{type:"radio",name:"reportDanmu",value:e,checked:!!i&&i===+e,onChange:this.handleOnClickSetReportType}),N.createElement("span",null,te[e])))),11===i&&N.createElement("textarea",{className:"report-content",value:n,onChange:this.handleOnChangeReportContext})),N.createElement("div",{className:"action-box"},N.createElement(A.Button,{className:"confirm-report",disabled:!a,onClick:this.handleOnClickPostRepost},"\u786e\u5b9a"),N.createElement(A.Button,{className:"cancel",onClick:()=>this.setState({showDanmuReport:!1})},"\u53d6\u6d88")))}),this.orderedJSON={},this.userMap={},this.userCardMap={},this.queryUserModeTemplateMap={},this.danmuDocumentStr=null;const t=new Date;this.danmuDate=`${t.getMonth()+1}-${t.getDate()}`,this.addListener(),this.danmuListRef=null,this.currentRowIndex=0,this.authorHashMap={},this.segmentDanmuList=[],this.segmentDanmuOid=null,this.segmentSize=1,this.segmentDanmuPageSize=36e4,this.removeCardSign=null,this.lasetHeight=null,this.currentOid=null}componentDidMount(){chrome.runtime.sendMessage({command:"danmuDOMInitialized"});const e=document.querySelectorAll(".player-sidebar-list-item-inner, .bnj-player-single-item-mask");e.length>0&&e[0].addEventListener("click",()=>{setTimeout(()=>{chrome.runtime.sendMessage({command:"danmuDOMInitialized"})},500)})}render(){const{needLoadByHandle:e,loading:t}=this.state;return N.createElement(W,null,this.renderHeader(),N.createElement("div",{className:"danmu-wrapper"},!e&&this.renderList(),e&&N.createElement(J,null,N.createElement("button",{className:"load-danmuku-button",onClick:this.handleOnClickLoadDanmu},"\u70b9\u51fb\u52a0\u8f7d\u5b8c\u6574\u5f39\u5e55\uff0c\u5f00\u59cb\u67e5\u8be2\u6216\u4e0b\u8f7d")),this.renderDanmuReport()),N.createElement(Y,{placeholder:"\u8bf7\u8f93\u5165\u9700\u8981\u67e5\u8be2\u7684\u5f39\u5e55\u5185\u5bb9",onChange:this.handleInputChange}),t&&N.createElement(K,null,this.state.loadingText))}}(0,p.Z)(ie,"contextType",M.y)},45158:(e,t,i)=>{"use strict";i.d(t,{r:()=>D});var n=i(33385),o=i(89734),a=i.n(o),r=i(18281),s=i.n(r),l=i(79529),c=i.n(l),d=i(27921),h=i.n(d),u=i(73473),p=i.n(u),m=i(84564),g=i.n(m),b=i(16203),f=i(12611),v=i(48903),y=i(26243),k=i.n(y),w=i(78149),x=i.n(w),S=i(43281),C=i.n(S);const L=function(e){var t=e.Reader,i=e.Writer,n=e.util,o=e.roots["default"]||(e.roots["default"]={});return o.bilibili=function(){var a={};return a.community=function(){var a={};return a.service=function(){var a={};return a.dm=function(){var a={};return a.v1=function(){var a={};return a.DmWebViewReply=function(){function a(e){if(this.specialDms=[],this.commandDms=[],e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.state=0,a.prototype.text="",a.prototype.textSide="",a.prototype.dmSge=null,a.prototype.flag=null,a.prototype.specialDms=n.emptyArray,a.prototype.checkBox=!1,a.prototype.count=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.commandDms=n.emptyArray,a.prototype.dmSetting=null,a.create=function(e){return new a(e)},a.encode=function(e,t){if(t||(t=i.create()),null!=e.state&&Object.hasOwnProperty.call(e,"state")&&t.uint32(8).int32(e.state),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(18).string(e.text),null!=e.textSide&&Object.hasOwnProperty.call(e,"textSide")&&t.uint32(26).string(e.textSide),null!=e.dmSge&&Object.hasOwnProperty.call(e,"dmSge")&&o.bilibili.community.service.dm.v1.DmSegConfig.encode(e.dmSge,t.uint32(34).fork()).ldelim(),null!=e.flag&&Object.hasOwnProperty.call(e,"flag")&&o.bilibili.community.service.dm.v1.DanmakuFlagConfig.encode(e.flag,t.uint32(42).fork()).ldelim(),null!=e.specialDms&&e.specialDms.length)for(var n=0;n<e.specialDms.length;++n)t.uint32(50).string(e.specialDms[n]);if(null!=e.checkBox&&Object.hasOwnProperty.call(e,"checkBox")&&t.uint32(56).bool(e.checkBox),null!=e.count&&Object.hasOwnProperty.call(e,"count")&&t.uint32(64).int64(e.count),null!=e.commandDms&&e.commandDms.length)for(n=0;n<e.commandDms.length;++n)o.bilibili.community.service.dm.v1.CommandDm.encode(e.commandDms[n],t.uint32(74).fork()).ldelim();return null!=e.dmSetting&&Object.hasOwnProperty.call(e,"dmSetting")&&o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.encode(e.dmSetting,t.uint32(82).fork()).ldelim(),t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.DmWebViewReply;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.state=e.int32();break;case 2:a.text=e.string();break;case 3:a.textSide=e.string();break;case 4:a.dmSge=o.bilibili.community.service.dm.v1.DmSegConfig.decode(e,e.uint32());break;case 5:a.flag=o.bilibili.community.service.dm.v1.DanmakuFlagConfig.decode(e,e.uint32());break;case 6:a.specialDms&&a.specialDms.length||(a.specialDms=[]),a.specialDms.push(e.string());break;case 7:a.checkBox=e.bool();break;case 8:a.count=e.int64();break;case 9:a.commandDms&&a.commandDms.length||(a.commandDms=[]),a.commandDms.push(o.bilibili.community.service.dm.v1.CommandDm.decode(e,e.uint32()));break;case 10:a.dmSetting=o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.decode(e,e.uint32());break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.state&&e.hasOwnProperty("state")&&!n.isInteger(e.state))return"state: integer expected";if(null!=e.text&&e.hasOwnProperty("text")&&!n.isString(e.text))return"text: string expected";if(null!=e.textSide&&e.hasOwnProperty("textSide")&&!n.isString(e.textSide))return"textSide: string expected";if(null!=e.dmSge&&e.hasOwnProperty("dmSge")){var t=o.bilibili.community.service.dm.v1.DmSegConfig.verify(e.dmSge);if(t)return"dmSge."+t}if(null!=e.flag&&e.hasOwnProperty("flag")){t=o.bilibili.community.service.dm.v1.DanmakuFlagConfig.verify(e.flag);if(t)return"flag."+t}if(null!=e.specialDms&&e.hasOwnProperty("specialDms")){if(!x()(e.specialDms))return"specialDms: array expected";for(var i=0;i<e.specialDms.length;++i)if(!n.isString(e.specialDms[i]))return"specialDms: string[] expected"}if(null!=e.checkBox&&e.hasOwnProperty("checkBox")&&"boolean"!==typeof e.checkBox)return"checkBox: boolean expected";if(null!=e.count&&e.hasOwnProperty("count")&&!n.isInteger(e.count)&&!(e.count&&n.isInteger(e.count.low)&&n.isInteger(e.count.high)))return"count: integer|Long expected";if(null!=e.commandDms&&e.hasOwnProperty("commandDms")){if(!x()(e.commandDms))return"commandDms: array expected";for(i=0;i<e.commandDms.length;++i){t=o.bilibili.community.service.dm.v1.CommandDm.verify(e.commandDms[i]);if(t)return"commandDms."+t}}if(null!=e.dmSetting&&e.hasOwnProperty("dmSetting")){t=o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.verify(e.dmSetting);if(t)return"dmSetting."+t}return null},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.DmWebViewReply)return e;var t=new o.bilibili.community.service.dm.v1.DmWebViewReply;if(null!=e.state&&(t.state=0|e.state),null!=e.text&&(t.text=String(e.text)),null!=e.textSide&&(t.textSide=String(e.textSide)),null!=e.dmSge){if("object"!==typeof e.dmSge)throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.dmSge: object expected");t.dmSge=o.bilibili.community.service.dm.v1.DmSegConfig.fromObject(e.dmSge)}if(null!=e.flag){if("object"!==typeof e.flag)throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.flag: object expected");t.flag=o.bilibili.community.service.dm.v1.DanmakuFlagConfig.fromObject(e.flag)}if(e.specialDms){if(!x()(e.specialDms))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.specialDms: array expected");t.specialDms=[];for(var i=0;i<e.specialDms.length;++i)t.specialDms[i]=String(e.specialDms[i])}if(null!=e.checkBox&&(t.checkBox=Boolean(e.checkBox)),null!=e.count&&(n.Long?(t.count=n.Long.fromValue(e.count)).unsigned=!1:"string"===typeof e.count?t.count=c()(e.count,10):"number"===typeof e.count?t.count=e.count:"object"===typeof e.count&&(t.count=new n.LongBits(e.count.low>>>0,e.count.high>>>0).toNumber())),e.commandDms){if(!x()(e.commandDms))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.commandDms: array expected");t.commandDms=[];for(i=0;i<e.commandDms.length;++i){if("object"!==typeof e.commandDms[i])throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.commandDms: object expected");t.commandDms[i]=o.bilibili.community.service.dm.v1.CommandDm.fromObject(e.commandDms[i])}}if(null!=e.dmSetting){if("object"!==typeof e.dmSetting)throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.dmSetting: object expected");t.dmSetting=o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.fromObject(e.dmSetting)}return t},a.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.specialDms=[],i.commandDms=[]),t.defaults){if(i.state=0,i.text="",i.textSide="",i.dmSge=null,i.flag=null,i.checkBox=!1,n.Long){var a=new n.Long(0,0,!1);i.count=t.longs===String?a.toString():t.longs===Number?a.toNumber():a}else i.count=t.longs===String?"0":0;i.dmSetting=null}if(null!=e.state&&e.hasOwnProperty("state")&&(i.state=e.state),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.textSide&&e.hasOwnProperty("textSide")&&(i.textSide=e.textSide),null!=e.dmSge&&e.hasOwnProperty("dmSge")&&(i.dmSge=o.bilibili.community.service.dm.v1.DmSegConfig.toObject(e.dmSge,t)),null!=e.flag&&e.hasOwnProperty("flag")&&(i.flag=o.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject(e.flag,t)),e.specialDms&&e.specialDms.length){i.specialDms=[];for(var r=0;r<e.specialDms.length;++r)i.specialDms[r]=e.specialDms[r]}if(null!=e.checkBox&&e.hasOwnProperty("checkBox")&&(i.checkBox=e.checkBox),null!=e.count&&e.hasOwnProperty("count")&&("number"===typeof e.count?i.count=t.longs===String?String(e.count):e.count:i.count=t.longs===String?n.Long.prototype.toString.call(e.count):t.longs===Number?new n.LongBits(e.count.low>>>0,e.count.high>>>0).toNumber():e.count),e.commandDms&&e.commandDms.length){i.commandDms=[];for(r=0;r<e.commandDms.length;++r)i.commandDms[r]=o.bilibili.community.service.dm.v1.CommandDm.toObject(e.commandDms[r],t)}return null!=e.dmSetting&&e.hasOwnProperty("dmSetting")&&(i.dmSetting=o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.toObject(e.dmSetting,t)),i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a.CommandDm=function(){function a(e){if(e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.id=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.oid=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.mid=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.command="",a.prototype.content="",a.prototype.progress=0,a.prototype.ctime="",a.prototype.mtime="",a.prototype.extra="",a.prototype.idStr="",a.create=function(e){return new a(e)},a.encode=function(e,t){return t||(t=i.create()),null!=e.id&&Object.hasOwnProperty.call(e,"id")&&t.uint32(8).int64(e.id),null!=e.oid&&Object.hasOwnProperty.call(e,"oid")&&t.uint32(16).int64(e.oid),null!=e.mid&&Object.hasOwnProperty.call(e,"mid")&&t.uint32(24).int64(e.mid),null!=e.command&&Object.hasOwnProperty.call(e,"command")&&t.uint32(34).string(e.command),null!=e.content&&Object.hasOwnProperty.call(e,"content")&&t.uint32(42).string(e.content),null!=e.progress&&Object.hasOwnProperty.call(e,"progress")&&t.uint32(48).int32(e.progress),null!=e.ctime&&Object.hasOwnProperty.call(e,"ctime")&&t.uint32(58).string(e.ctime),null!=e.mtime&&Object.hasOwnProperty.call(e,"mtime")&&t.uint32(66).string(e.mtime),null!=e.extra&&Object.hasOwnProperty.call(e,"extra")&&t.uint32(74).string(e.extra),null!=e.idStr&&Object.hasOwnProperty.call(e,"idStr")&&t.uint32(82).string(e.idStr),t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.CommandDm;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.id=e.int64();break;case 2:a.oid=e.int64();break;case 3:a.mid=e.int64();break;case 4:a.command=e.string();break;case 5:a.content=e.string();break;case 6:a.progress=e.int32();break;case 7:a.ctime=e.string();break;case 8:a.mtime=e.string();break;case 9:a.extra=e.string();break;case 10:a.idStr=e.string();break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){return"object"!==typeof e||null===e?"object expected":null==e.id||!e.hasOwnProperty("id")||n.isInteger(e.id)||e.id&&n.isInteger(e.id.low)&&n.isInteger(e.id.high)?null==e.oid||!e.hasOwnProperty("oid")||n.isInteger(e.oid)||e.oid&&n.isInteger(e.oid.low)&&n.isInteger(e.oid.high)?null==e.mid||!e.hasOwnProperty("mid")||n.isInteger(e.mid)||e.mid&&n.isInteger(e.mid.low)&&n.isInteger(e.mid.high)?null!=e.command&&e.hasOwnProperty("command")&&!n.isString(e.command)?"command: string expected":null!=e.content&&e.hasOwnProperty("content")&&!n.isString(e.content)?"content: string expected":null!=e.progress&&e.hasOwnProperty("progress")&&!n.isInteger(e.progress)?"progress: integer expected":null!=e.ctime&&e.hasOwnProperty("ctime")&&!n.isString(e.ctime)?"ctime: string expected":null!=e.mtime&&e.hasOwnProperty("mtime")&&!n.isString(e.mtime)?"mtime: string expected":null!=e.extra&&e.hasOwnProperty("extra")&&!n.isString(e.extra)?"extra: string expected":null!=e.idStr&&e.hasOwnProperty("idStr")&&!n.isString(e.idStr)?"idStr: string expected":null:"mid: integer|Long expected":"oid: integer|Long expected":"id: integer|Long expected"},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.CommandDm)return e;var t=new o.bilibili.community.service.dm.v1.CommandDm;return null!=e.id&&(n.Long?(t.id=n.Long.fromValue(e.id)).unsigned=!1:"string"===typeof e.id?t.id=c()(e.id,10):"number"===typeof e.id?t.id=e.id:"object"===typeof e.id&&(t.id=new n.LongBits(e.id.low>>>0,e.id.high>>>0).toNumber())),null!=e.oid&&(n.Long?(t.oid=n.Long.fromValue(e.oid)).unsigned=!1:"string"===typeof e.oid?t.oid=c()(e.oid,10):"number"===typeof e.oid?t.oid=e.oid:"object"===typeof e.oid&&(t.oid=new n.LongBits(e.oid.low>>>0,e.oid.high>>>0).toNumber())),null!=e.mid&&(n.Long?(t.mid=n.Long.fromValue(e.mid)).unsigned=!1:"string"===typeof e.mid?t.mid=c()(e.mid,10):"number"===typeof e.mid?t.mid=e.mid:"object"===typeof e.mid&&(t.mid=new n.LongBits(e.mid.low>>>0,e.mid.high>>>0).toNumber())),null!=e.command&&(t.command=String(e.command)),null!=e.content&&(t.content=String(e.content)),null!=e.progress&&(t.progress=0|e.progress),null!=e.ctime&&(t.ctime=String(e.ctime)),null!=e.mtime&&(t.mtime=String(e.mtime)),null!=e.extra&&(t.extra=String(e.extra)),null!=e.idStr&&(t.idStr=String(e.idStr)),t},a.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(n.Long){var o=new n.Long(0,0,!1);i.id=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.id=t.longs===String?"0":0;if(n.Long){o=new n.Long(0,0,!1);i.oid=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.oid=t.longs===String?"0":0;if(n.Long){o=new n.Long(0,0,!1);i.mid=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.mid=t.longs===String?"0":0;i.command="",i.content="",i.progress=0,i.ctime="",i.mtime="",i.extra="",i.idStr=""}return null!=e.id&&e.hasOwnProperty("id")&&("number"===typeof e.id?i.id=t.longs===String?String(e.id):e.id:i.id=t.longs===String?n.Long.prototype.toString.call(e.id):t.longs===Number?new n.LongBits(e.id.low>>>0,e.id.high>>>0).toNumber():e.id),null!=e.oid&&e.hasOwnProperty("oid")&&("number"===typeof e.oid?i.oid=t.longs===String?String(e.oid):e.oid:i.oid=t.longs===String?n.Long.prototype.toString.call(e.oid):t.longs===Number?new n.LongBits(e.oid.low>>>0,e.oid.high>>>0).toNumber():e.oid),null!=e.mid&&e.hasOwnProperty("mid")&&("number"===typeof e.mid?i.mid=t.longs===String?String(e.mid):e.mid:i.mid=t.longs===String?n.Long.prototype.toString.call(e.mid):t.longs===Number?new n.LongBits(e.mid.low>>>0,e.mid.high>>>0).toNumber():e.mid),null!=e.command&&e.hasOwnProperty("command")&&(i.command=e.command),null!=e.content&&e.hasOwnProperty("content")&&(i.content=e.content),null!=e.progress&&e.hasOwnProperty("progress")&&(i.progress=e.progress),null!=e.ctime&&e.hasOwnProperty("ctime")&&(i.ctime=e.ctime),null!=e.mtime&&e.hasOwnProperty("mtime")&&(i.mtime=e.mtime),null!=e.extra&&e.hasOwnProperty("extra")&&(i.extra=e.extra),null!=e.idStr&&e.hasOwnProperty("idStr")&&(i.idStr=e.idStr),i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a.DmSegConfig=function(){function a(e){if(e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.pageSize=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.total=n.Long?n.Long.fromBits(0,0,!1):0,a.create=function(e){return new a(e)},a.encode=function(e,t){return t||(t=i.create()),null!=e.pageSize&&Object.hasOwnProperty.call(e,"pageSize")&&t.uint32(8).int64(e.pageSize),null!=e.total&&Object.hasOwnProperty.call(e,"total")&&t.uint32(16).int64(e.total),t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.DmSegConfig;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.pageSize=e.int64();break;case 2:a.total=e.int64();break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){return"object"!==typeof e||null===e?"object expected":null==e.pageSize||!e.hasOwnProperty("pageSize")||n.isInteger(e.pageSize)||e.pageSize&&n.isInteger(e.pageSize.low)&&n.isInteger(e.pageSize.high)?null==e.total||!e.hasOwnProperty("total")||n.isInteger(e.total)||e.total&&n.isInteger(e.total.low)&&n.isInteger(e.total.high)?null:"total: integer|Long expected":"pageSize: integer|Long expected"},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.DmSegConfig)return e;var t=new o.bilibili.community.service.dm.v1.DmSegConfig;return null!=e.pageSize&&(n.Long?(t.pageSize=n.Long.fromValue(e.pageSize)).unsigned=!1:"string"===typeof e.pageSize?t.pageSize=c()(e.pageSize,10):"number"===typeof e.pageSize?t.pageSize=e.pageSize:"object"===typeof e.pageSize&&(t.pageSize=new n.LongBits(e.pageSize.low>>>0,e.pageSize.high>>>0).toNumber())),null!=e.total&&(n.Long?(t.total=n.Long.fromValue(e.total)).unsigned=!1:"string"===typeof e.total?t.total=c()(e.total,10):"number"===typeof e.total?t.total=e.total:"object"===typeof e.total&&(t.total=new n.LongBits(e.total.low>>>0,e.total.high>>>0).toNumber())),t},a.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(n.Long){var o=new n.Long(0,0,!1);i.pageSize=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.pageSize=t.longs===String?"0":0;if(n.Long){o=new n.Long(0,0,!1);i.total=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.total=t.longs===String?"0":0}return null!=e.pageSize&&e.hasOwnProperty("pageSize")&&("number"===typeof e.pageSize?i.pageSize=t.longs===String?String(e.pageSize):e.pageSize:i.pageSize=t.longs===String?n.Long.prototype.toString.call(e.pageSize):t.longs===Number?new n.LongBits(e.pageSize.low>>>0,e.pageSize.high>>>0).toNumber():e.pageSize),null!=e.total&&e.hasOwnProperty("total")&&("number"===typeof e.total?i.total=t.longs===String?String(e.total):e.total:i.total=t.longs===String?n.Long.prototype.toString.call(e.total):t.longs===Number?new n.LongBits(e.total.low>>>0,e.total.high>>>0).toNumber():e.total),i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a.DanmakuFlagConfig=function(){function a(e){if(e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.recFlag=0,a.prototype.recText="",a.prototype.recSwitch=0,a.create=function(e){return new a(e)},a.encode=function(e,t){return t||(t=i.create()),null!=e.recFlag&&Object.hasOwnProperty.call(e,"recFlag")&&t.uint32(8).int32(e.recFlag),null!=e.recText&&Object.hasOwnProperty.call(e,"recText")&&t.uint32(18).string(e.recText),null!=e.recSwitch&&Object.hasOwnProperty.call(e,"recSwitch")&&t.uint32(24).int32(e.recSwitch),t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.DanmakuFlagConfig;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.recFlag=e.int32();break;case 2:a.recText=e.string();break;case 3:a.recSwitch=e.int32();break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){return"object"!==typeof e||null===e?"object expected":null!=e.recFlag&&e.hasOwnProperty("recFlag")&&!n.isInteger(e.recFlag)?"recFlag: integer expected":null!=e.recText&&e.hasOwnProperty("recText")&&!n.isString(e.recText)?"recText: string expected":null!=e.recSwitch&&e.hasOwnProperty("recSwitch")&&!n.isInteger(e.recSwitch)?"recSwitch: integer expected":null},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.DanmakuFlagConfig)return e;var t=new o.bilibili.community.service.dm.v1.DanmakuFlagConfig;return null!=e.recFlag&&(t.recFlag=0|e.recFlag),null!=e.recText&&(t.recText=String(e.recText)),null!=e.recSwitch&&(t.recSwitch=0|e.recSwitch),t},a.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.recFlag=0,i.recText="",i.recSwitch=0),null!=e.recFlag&&e.hasOwnProperty("recFlag")&&(i.recFlag=e.recFlag),null!=e.recText&&e.hasOwnProperty("recText")&&(i.recText=e.recText),null!=e.recSwitch&&e.hasOwnProperty("recSwitch")&&(i.recSwitch=e.recSwitch),i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a.DmSegMobileReply=function(){function a(e){if(this.elems=[],e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.elems=n.emptyArray,a.create=function(e){return new a(e)},a.encode=function(e,t){if(t||(t=i.create()),null!=e.elems&&e.elems.length)for(var n=0;n<e.elems.length;++n)o.bilibili.community.service.dm.v1.DanmakuElem.encode(e.elems[n],t.uint32(10).fork()).ldelim();return t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.DmSegMobileReply;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.elems&&a.elems.length||(a.elems=[]),a.elems.push(o.bilibili.community.service.dm.v1.DanmakuElem.decode(e,e.uint32()));break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.elems&&e.hasOwnProperty("elems")){if(!x()(e.elems))return"elems: array expected";for(var t=0;t<e.elems.length;++t){var i=o.bilibili.community.service.dm.v1.DanmakuElem.verify(e.elems[t]);if(i)return"elems."+i}}return null},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.DmSegMobileReply)return e;var t=new o.bilibili.community.service.dm.v1.DmSegMobileReply;if(e.elems){if(!x()(e.elems))throw TypeError(".bilibili.community.service.dm.v1.DmSegMobileReply.elems: array expected");t.elems=[];for(var i=0;i<e.elems.length;++i){if("object"!==typeof e.elems[i])throw TypeError(".bilibili.community.service.dm.v1.DmSegMobileReply.elems: object expected");t.elems[i]=o.bilibili.community.service.dm.v1.DanmakuElem.fromObject(e.elems[i])}}return t},a.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.elems=[]),e.elems&&e.elems.length){i.elems=[];for(var n=0;n<e.elems.length;++n)i.elems[n]=o.bilibili.community.service.dm.v1.DanmakuElem.toObject(e.elems[n],t)}return i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a.DanmakuElem=function(){function a(e){if(e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.id=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.progress=0,a.prototype.mode=0,a.prototype.fontsize=0,a.prototype.color=0,a.prototype.midHash="",a.prototype.content="",a.prototype.ctime=n.Long?n.Long.fromBits(0,0,!1):0,a.prototype.weight=0,a.prototype.action="",a.prototype.pool=0,a.prototype.idStr="",a.prototype.attr=0,a.create=function(e){return new a(e)},a.encode=function(e,t){return t||(t=i.create()),null!=e.id&&Object.hasOwnProperty.call(e,"id")&&t.uint32(8).int64(e.id),null!=e.progress&&Object.hasOwnProperty.call(e,"progress")&&t.uint32(16).int32(e.progress),null!=e.mode&&Object.hasOwnProperty.call(e,"mode")&&t.uint32(24).int32(e.mode),null!=e.fontsize&&Object.hasOwnProperty.call(e,"fontsize")&&t.uint32(32).int32(e.fontsize),null!=e.color&&Object.hasOwnProperty.call(e,"color")&&t.uint32(40).uint32(e.color),null!=e.midHash&&Object.hasOwnProperty.call(e,"midHash")&&t.uint32(50).string(e.midHash),null!=e.content&&Object.hasOwnProperty.call(e,"content")&&t.uint32(58).string(e.content),null!=e.ctime&&Object.hasOwnProperty.call(e,"ctime")&&t.uint32(64).int64(e.ctime),null!=e.weight&&Object.hasOwnProperty.call(e,"weight")&&t.uint32(72).int32(e.weight),null!=e.action&&Object.hasOwnProperty.call(e,"action")&&t.uint32(82).string(e.action),null!=e.pool&&Object.hasOwnProperty.call(e,"pool")&&t.uint32(88).int32(e.pool),null!=e.idStr&&Object.hasOwnProperty.call(e,"idStr")&&t.uint32(98).string(e.idStr),null!=e.attr&&Object.hasOwnProperty.call(e,"attr")&&t.uint32(104).int32(e.attr),t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.DanmakuElem;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.id=e.int64();break;case 2:a.progress=e.int32();break;case 3:a.mode=e.int32();break;case 4:a.fontsize=e.int32();break;case 5:a.color=e.uint32();break;case 6:a.midHash=e.string();break;case 7:a.content=e.string();break;case 8:a.ctime=e.int64();break;case 9:a.weight=e.int32();break;case 10:a.action=e.string();break;case 11:a.pool=e.int32();break;case 12:a.idStr=e.string();break;case 13:a.attr=e.int32();break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){return"object"!==typeof e||null===e?"object expected":null==e.id||!e.hasOwnProperty("id")||n.isInteger(e.id)||e.id&&n.isInteger(e.id.low)&&n.isInteger(e.id.high)?null!=e.progress&&e.hasOwnProperty("progress")&&!n.isInteger(e.progress)?"progress: integer expected":null!=e.mode&&e.hasOwnProperty("mode")&&!n.isInteger(e.mode)?"mode: integer expected":null!=e.fontsize&&e.hasOwnProperty("fontsize")&&!n.isInteger(e.fontsize)?"fontsize: integer expected":null!=e.color&&e.hasOwnProperty("color")&&!n.isInteger(e.color)?"color: integer expected":null!=e.midHash&&e.hasOwnProperty("midHash")&&!n.isString(e.midHash)?"midHash: string expected":null!=e.content&&e.hasOwnProperty("content")&&!n.isString(e.content)?"content: string expected":null==e.ctime||!e.hasOwnProperty("ctime")||n.isInteger(e.ctime)||e.ctime&&n.isInteger(e.ctime.low)&&n.isInteger(e.ctime.high)?null!=e.weight&&e.hasOwnProperty("weight")&&!n.isInteger(e.weight)?"weight: integer expected":null!=e.action&&e.hasOwnProperty("action")&&!n.isString(e.action)?"action: string expected":null!=e.pool&&e.hasOwnProperty("pool")&&!n.isInteger(e.pool)?"pool: integer expected":null!=e.idStr&&e.hasOwnProperty("idStr")&&!n.isString(e.idStr)?"idStr: string expected":null!=e.attr&&e.hasOwnProperty("attr")&&!n.isInteger(e.attr)?"attr: integer expected":null:"ctime: integer|Long expected":"id: integer|Long expected"},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.DanmakuElem)return e;var t=new o.bilibili.community.service.dm.v1.DanmakuElem;return null!=e.id&&(n.Long?(t.id=n.Long.fromValue(e.id)).unsigned=!1:"string"===typeof e.id?t.id=c()(e.id,10):"number"===typeof e.id?t.id=e.id:"object"===typeof e.id&&(t.id=new n.LongBits(e.id.low>>>0,e.id.high>>>0).toNumber())),null!=e.progress&&(t.progress=0|e.progress),null!=e.mode&&(t.mode=0|e.mode),null!=e.fontsize&&(t.fontsize=0|e.fontsize),null!=e.color&&(t.color=e.color>>>0),null!=e.midHash&&(t.midHash=String(e.midHash)),null!=e.content&&(t.content=String(e.content)),null!=e.ctime&&(n.Long?(t.ctime=n.Long.fromValue(e.ctime)).unsigned=!1:"string"===typeof e.ctime?t.ctime=c()(e.ctime,10):"number"===typeof e.ctime?t.ctime=e.ctime:"object"===typeof e.ctime&&(t.ctime=new n.LongBits(e.ctime.low>>>0,e.ctime.high>>>0).toNumber())),null!=e.weight&&(t.weight=0|e.weight),null!=e.action&&(t.action=String(e.action)),null!=e.pool&&(t.pool=0|e.pool),null!=e.idStr&&(t.idStr=String(e.idStr)),null!=e.attr&&(t.attr=0|e.attr),t},a.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(n.Long){var o=new n.Long(0,0,!1);i.id=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.id=t.longs===String?"0":0;if(i.progress=0,i.mode=0,i.fontsize=0,i.color=0,i.midHash="",i.content="",n.Long){o=new n.Long(0,0,!1);i.ctime=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.ctime=t.longs===String?"0":0;i.weight=0,i.action="",i.pool=0,i.idStr="",i.attr=0}return null!=e.id&&e.hasOwnProperty("id")&&("number"===typeof e.id?i.id=t.longs===String?String(e.id):e.id:i.id=t.longs===String?n.Long.prototype.toString.call(e.id):t.longs===Number?new n.LongBits(e.id.low>>>0,e.id.high>>>0).toNumber():e.id),null!=e.progress&&e.hasOwnProperty("progress")&&(i.progress=e.progress),null!=e.mode&&e.hasOwnProperty("mode")&&(i.mode=e.mode),null!=e.fontsize&&e.hasOwnProperty("fontsize")&&(i.fontsize=e.fontsize),null!=e.color&&e.hasOwnProperty("color")&&(i.color=e.color),null!=e.midHash&&e.hasOwnProperty("midHash")&&(i.midHash=e.midHash),null!=e.content&&e.hasOwnProperty("content")&&(i.content=e.content),null!=e.ctime&&e.hasOwnProperty("ctime")&&("number"===typeof e.ctime?i.ctime=t.longs===String?String(e.ctime):e.ctime:i.ctime=t.longs===String?n.Long.prototype.toString.call(e.ctime):t.longs===Number?new n.LongBits(e.ctime.low>>>0,e.ctime.high>>>0).toNumber():e.ctime),null!=e.weight&&e.hasOwnProperty("weight")&&(i.weight=e.weight),null!=e.action&&e.hasOwnProperty("action")&&(i.action=e.action),null!=e.pool&&e.hasOwnProperty("pool")&&(i.pool=e.pool),null!=e.idStr&&e.hasOwnProperty("idStr")&&(i.idStr=e.idStr),null!=e.attr&&e.hasOwnProperty("attr")&&(i.attr=e.attr),i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a.DanmuWebPlayerConfig=function(){function a(e){if(e)for(var t=k()(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return a.prototype.dmSwitch=!1,a.prototype.aiSwitch=!1,a.prototype.aiLevel=0,a.prototype.blocktop=!1,a.prototype.blockscroll=!1,a.prototype.blockbottom=!1,a.prototype.blockcolor=!1,a.prototype.blockspecial=!1,a.prototype.preventshade=!1,a.prototype.dmask=!1,a.prototype.opacity=0,a.prototype.dmarea=0,a.prototype.speedplus=0,a.prototype.fontsize=0,a.prototype.screensync=!1,a.prototype.speedsync=!1,a.prototype.fontfamily="",a.prototype.bold=!1,a.prototype.fontborder=0,a.prototype.drawType="",a.create=function(e){return new a(e)},a.encode=function(e,t){return t||(t=i.create()),null!=e.dmSwitch&&Object.hasOwnProperty.call(e,"dmSwitch")&&t.uint32(8).bool(e.dmSwitch),null!=e.aiSwitch&&Object.hasOwnProperty.call(e,"aiSwitch")&&t.uint32(16).bool(e.aiSwitch),null!=e.aiLevel&&Object.hasOwnProperty.call(e,"aiLevel")&&t.uint32(24).int32(e.aiLevel),null!=e.blocktop&&Object.hasOwnProperty.call(e,"blocktop")&&t.uint32(32).bool(e.blocktop),null!=e.blockscroll&&Object.hasOwnProperty.call(e,"blockscroll")&&t.uint32(40).bool(e.blockscroll),null!=e.blockbottom&&Object.hasOwnProperty.call(e,"blockbottom")&&t.uint32(48).bool(e.blockbottom),null!=e.blockcolor&&Object.hasOwnProperty.call(e,"blockcolor")&&t.uint32(56).bool(e.blockcolor),null!=e.blockspecial&&Object.hasOwnProperty.call(e,"blockspecial")&&t.uint32(64).bool(e.blockspecial),null!=e.preventshade&&Object.hasOwnProperty.call(e,"preventshade")&&t.uint32(72).bool(e.preventshade),null!=e.dmask&&Object.hasOwnProperty.call(e,"dmask")&&t.uint32(80).bool(e.dmask),null!=e.opacity&&Object.hasOwnProperty.call(e,"opacity")&&t.uint32(93).float(e.opacity),null!=e.dmarea&&Object.hasOwnProperty.call(e,"dmarea")&&t.uint32(96).int32(e.dmarea),null!=e.speedplus&&Object.hasOwnProperty.call(e,"speedplus")&&t.uint32(109).float(e.speedplus),null!=e.fontsize&&Object.hasOwnProperty.call(e,"fontsize")&&t.uint32(117).float(e.fontsize),null!=e.screensync&&Object.hasOwnProperty.call(e,"screensync")&&t.uint32(120).bool(e.screensync),null!=e.speedsync&&Object.hasOwnProperty.call(e,"speedsync")&&t.uint32(128).bool(e.speedsync),null!=e.fontfamily&&Object.hasOwnProperty.call(e,"fontfamily")&&t.uint32(138).string(e.fontfamily),null!=e.bold&&Object.hasOwnProperty.call(e,"bold")&&t.uint32(144).bool(e.bold),null!=e.fontborder&&Object.hasOwnProperty.call(e,"fontborder")&&t.uint32(152).int32(e.fontborder),null!=e.drawType&&Object.hasOwnProperty.call(e,"drawType")&&t.uint32(162).string(e.drawType),t},a.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},a.decode=function(e,i){e instanceof t||(e=t.create(e));var n=void 0===i?e.len:e.pos+i,a=new o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig;while(e.pos<n){var r=e.uint32();switch(r>>>3){case 1:a.dmSwitch=e.bool();break;case 2:a.aiSwitch=e.bool();break;case 3:a.aiLevel=e.int32();break;case 4:a.blocktop=e.bool();break;case 5:a.blockscroll=e.bool();break;case 6:a.blockbottom=e.bool();break;case 7:a.blockcolor=e.bool();break;case 8:a.blockspecial=e.bool();break;case 9:a.preventshade=e.bool();break;case 10:a.dmask=e.bool();break;case 11:a.opacity=e.float();break;case 12:a.dmarea=e.int32();break;case 13:a.speedplus=e.float();break;case 14:a.fontsize=e.float();break;case 15:a.screensync=e.bool();break;case 16:a.speedsync=e.bool();break;case 17:a.fontfamily=e.string();break;case 18:a.bold=e.bool();break;case 19:a.fontborder=e.int32();break;case 20:a.drawType=e.string();break;default:e.skipType(7&r);break}}return a},a.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},a.verify=function(e){return"object"!==typeof e||null===e?"object expected":null!=e.dmSwitch&&e.hasOwnProperty("dmSwitch")&&"boolean"!==typeof e.dmSwitch?"dmSwitch: boolean expected":null!=e.aiSwitch&&e.hasOwnProperty("aiSwitch")&&"boolean"!==typeof e.aiSwitch?"aiSwitch: boolean expected":null!=e.aiLevel&&e.hasOwnProperty("aiLevel")&&!n.isInteger(e.aiLevel)?"aiLevel: integer expected":null!=e.blocktop&&e.hasOwnProperty("blocktop")&&"boolean"!==typeof e.blocktop?"blocktop: boolean expected":null!=e.blockscroll&&e.hasOwnProperty("blockscroll")&&"boolean"!==typeof e.blockscroll?"blockscroll: boolean expected":null!=e.blockbottom&&e.hasOwnProperty("blockbottom")&&"boolean"!==typeof e.blockbottom?"blockbottom: boolean expected":null!=e.blockcolor&&e.hasOwnProperty("blockcolor")&&"boolean"!==typeof e.blockcolor?"blockcolor: boolean expected":null!=e.blockspecial&&e.hasOwnProperty("blockspecial")&&"boolean"!==typeof e.blockspecial?"blockspecial: boolean expected":null!=e.preventshade&&e.hasOwnProperty("preventshade")&&"boolean"!==typeof e.preventshade?"preventshade: boolean expected":null!=e.dmask&&e.hasOwnProperty("dmask")&&"boolean"!==typeof e.dmask?"dmask: boolean expected":null!=e.opacity&&e.hasOwnProperty("opacity")&&"number"!==typeof e.opacity?"opacity: number expected":null!=e.dmarea&&e.hasOwnProperty("dmarea")&&!n.isInteger(e.dmarea)?"dmarea: integer expected":null!=e.speedplus&&e.hasOwnProperty("speedplus")&&"number"!==typeof e.speedplus?"speedplus: number expected":null!=e.fontsize&&e.hasOwnProperty("fontsize")&&"number"!==typeof e.fontsize?"fontsize: number expected":null!=e.screensync&&e.hasOwnProperty("screensync")&&"boolean"!==typeof e.screensync?"screensync: boolean expected":null!=e.speedsync&&e.hasOwnProperty("speedsync")&&"boolean"!==typeof e.speedsync?"speedsync: boolean expected":null!=e.fontfamily&&e.hasOwnProperty("fontfamily")&&!n.isString(e.fontfamily)?"fontfamily: string expected":null!=e.bold&&e.hasOwnProperty("bold")&&"boolean"!==typeof e.bold?"bold: boolean expected":null!=e.fontborder&&e.hasOwnProperty("fontborder")&&!n.isInteger(e.fontborder)?"fontborder: integer expected":null!=e.drawType&&e.hasOwnProperty("drawType")&&!n.isString(e.drawType)?"drawType: string expected":null},a.fromObject=function(e){if(e instanceof o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig)return e;var t=new o.bilibili.community.service.dm.v1.DanmuWebPlayerConfig;return null!=e.dmSwitch&&(t.dmSwitch=Boolean(e.dmSwitch)),null!=e.aiSwitch&&(t.aiSwitch=Boolean(e.aiSwitch)),null!=e.aiLevel&&(t.aiLevel=0|e.aiLevel),null!=e.blocktop&&(t.blocktop=Boolean(e.blocktop)),null!=e.blockscroll&&(t.blockscroll=Boolean(e.blockscroll)),null!=e.blockbottom&&(t.blockbottom=Boolean(e.blockbottom)),null!=e.blockcolor&&(t.blockcolor=Boolean(e.blockcolor)),null!=e.blockspecial&&(t.blockspecial=Boolean(e.blockspecial)),null!=e.preventshade&&(t.preventshade=Boolean(e.preventshade)),null!=e.dmask&&(t.dmask=Boolean(e.dmask)),null!=e.opacity&&(t.opacity=Number(e.opacity)),null!=e.dmarea&&(t.dmarea=0|e.dmarea),null!=e.speedplus&&(t.speedplus=Number(e.speedplus)),null!=e.fontsize&&(t.fontsize=Number(e.fontsize)),null!=e.screensync&&(t.screensync=Boolean(e.screensync)),null!=e.speedsync&&(t.speedsync=Boolean(e.speedsync)),null!=e.fontfamily&&(t.fontfamily=String(e.fontfamily)),null!=e.bold&&(t.bold=Boolean(e.bold)),null!=e.fontborder&&(t.fontborder=0|e.fontborder),null!=e.drawType&&(t.drawType=String(e.drawType)),t},a.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.dmSwitch=!1,i.aiSwitch=!1,i.aiLevel=0,i.blocktop=!1,i.blockscroll=!1,i.blockbottom=!1,i.blockcolor=!1,i.blockspecial=!1,i.preventshade=!1,i.dmask=!1,i.opacity=0,i.dmarea=0,i.speedplus=0,i.fontsize=0,i.screensync=!1,i.speedsync=!1,i.fontfamily="",i.bold=!1,i.fontborder=0,i.drawType=""),null!=e.dmSwitch&&e.hasOwnProperty("dmSwitch")&&(i.dmSwitch=e.dmSwitch),null!=e.aiSwitch&&e.hasOwnProperty("aiSwitch")&&(i.aiSwitch=e.aiSwitch),null!=e.aiLevel&&e.hasOwnProperty("aiLevel")&&(i.aiLevel=e.aiLevel),null!=e.blocktop&&e.hasOwnProperty("blocktop")&&(i.blocktop=e.blocktop),null!=e.blockscroll&&e.hasOwnProperty("blockscroll")&&(i.blockscroll=e.blockscroll),null!=e.blockbottom&&e.hasOwnProperty("blockbottom")&&(i.blockbottom=e.blockbottom),null!=e.blockcolor&&e.hasOwnProperty("blockcolor")&&(i.blockcolor=e.blockcolor),null!=e.blockspecial&&e.hasOwnProperty("blockspecial")&&(i.blockspecial=e.blockspecial),null!=e.preventshade&&e.hasOwnProperty("preventshade")&&(i.preventshade=e.preventshade),null!=e.dmask&&e.hasOwnProperty("dmask")&&(i.dmask=e.dmask),null!=e.opacity&&e.hasOwnProperty("opacity")&&(i.opacity=t.json&&!isFinite(e.opacity)?String(e.opacity):e.opacity),null!=e.dmarea&&e.hasOwnProperty("dmarea")&&(i.dmarea=e.dmarea),null!=e.speedplus&&e.hasOwnProperty("speedplus")&&(i.speedplus=t.json&&!isFinite(e.speedplus)?String(e.speedplus):e.speedplus),null!=e.fontsize&&e.hasOwnProperty("fontsize")&&(i.fontsize=t.json&&!isFinite(e.fontsize)?String(e.fontsize):e.fontsize),null!=e.screensync&&e.hasOwnProperty("screensync")&&(i.screensync=e.screensync),null!=e.speedsync&&e.hasOwnProperty("speedsync")&&(i.speedsync=e.speedsync),null!=e.fontfamily&&e.hasOwnProperty("fontfamily")&&(i.fontfamily=e.fontfamily),null!=e.bold&&e.hasOwnProperty("bold")&&(i.bold=e.bold),null!=e.fontborder&&e.hasOwnProperty("fontborder")&&(i.fontborder=e.fontborder),null!=e.drawType&&e.hasOwnProperty("drawType")&&(i.drawType=e.drawType),i},a.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},a}(),a}(),a}(),a}(),a}(),a}(),o}(C()),_=L.bilibili.community.service.dm.v1.DmSegMobileReply,I=L.bilibili.community.service.dm.v1.DmWebViewReply,E=e=>{const t=I.decode(new Uint8Array(e));return I.toObject(t)},A=e=>{const t=_.decode(new Uint8Array(e));return _.toObject(t)};class D extends b.Feature{constructor(e){super(e,"videoDanmu",{dependencies:["renameDownloadFile"],settings:{on:!0}}),(0,n.Z)(this,"messageStore",new b.MessageStore("danmuDOMInitialized")),(0,n.Z)(this,"tempDanmuMap",new(s())),(0,n.Z)(this,"onMessageReceived",(e,t,i)=>{if("fetchCardInfo"===e.command&&e.url&&this.emit("requestController","create",{url:e.url,options:{contentType:"json"}},({data:e})=>{i(e)}),"fetchNewTypeDanmuOption"===e.command&&e.url)this.emit("requestController","create",{url:e.url,options:{contentType:"arrayBuffer"}},({data:e})=>{const t=E(e);i(t.dmSge)});else{if("fetchNewTypeDanmu"===e.command&&e.url)return this.fetchNewTypeDanmu(e,t,i);if("fetchUserCard"===e.command&&e.url)this.emit("requestController","create",{url:e.url,options:{contentType:"text"}},({data:e})=>{i(e)});else if("downloadDanmuXML"===e.command&&e.cid){if(!this.tempDanmuMap.has(t.tab.id))return;const{pieces:i,oid:n}=this.tempDanmuMap.get(t.tab.id);this.tempDanmuMap.get(t.tab.id);const o=i.filter(Boolean).flat();let a=`<?xml version="1.0" encoding="UTF-8"?><i><chatserver></chatserver><chatid>${n}</chatid><mission></mission><maxlimit></maxlimit><state></state><real_name></real_name><source></source>`;a+=o.reduce((e,t)=>{const{danmu:i,authorHash:n,mode:o,progress:a,fontsize:r,color:s,ctime:l,idStr:c,weight:d}=t;return i?e+`<d p="${(a||0)/1e3},${o},${r},${s},${l},${d},${n},${c}">${(0,v.encodeHTMLEntries)(i)}</d>`:e},"")+"</i>";const r=(window.URL?URL:window.webkitURL).createObjectURL(new Blob([a],{type:"application/xml"}));let s=e.renamedFilename||`${e.filename?e.filename+".":""}${e.cid}.${e.date}.xml`;s=(0,v.ToCDB)(s.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),chrome.downloads.download({saveAs:!0,url:r,filename:s,headers:[{name:"Content-Disposition",value:`attachment; filename="${s}"; filename*="utf-8' '${s}"`.replace("/","%2f")}]})}else if("downloadDanmuASS"===e.command&&e.cid){if(!this.tempDanmuMap.has(t.tab.id))return!0;const{pieces:i}=this.tempDanmuMap.get(t.tab.id);this.tempDanmuMap.get(t.tab.id);const n=i.filter(Boolean).flat();(0,f.G)(n,{title:e.filename,ori:e.origin}).then(t=>{const i=(window.URL?URL:window.webkitURL).createObjectURL(new Blob(["\ufeff"+t],{type:"application/octet-stream"}));let n=e.renamedFilename||`${e.filename?e.filename+".":""}${e.cid}.${e.date}.ass`;n=(0,v.ToCDB)(n.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),chrome.downloads.download({saveAs:!0,url:i,filename:n,headers:[{name:"Content-Disposition",value:`attachment; filename="${n}"; filename*="utf-8' '${n}"`.replace("/","%2f")}]})})}else if("pakkuGetHistoryDanmu"===e.command){const i=this.messageStore.createData(t.id),n=new(g())(e.url,"",!0);i.queue.push({command:"loadHistoryDanmu",cid:i.data.cid,date:n.query.date}),this.messageStore.dealWith(t.id)}}return!0}),(0,n.Z)(this,"watcher",(0,v.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new(g())(e.url,"",!0),{pathname:n,query:o}=i;if(!o||!o.requestFrom)if("/x/v2/dm/web/view"===n){const e=this.messageStore.createData(t);e.data.cid=o.oid,e.queue.push({command:"loadNewTypeDanmu",oid:o.oid,pid:o.pid,type:o.type}),this.messageStore.dealWith(t)}else if("/x/v2/dm/web/seg.so"===n){const e=this.messageStore.createData(t);e.data.cid=o.oid,e.queue.push({command:"loadNewTypeDanmu",oid:o.oid,pid:o.pid,segmentIndex:o.segment_index}),this.messageStore.dealWith(t)}else if("/x/v2/dm/web/history/seg.so"===n){const e=this.messageStore.createData(t);e.data.cid=o.oid,e.queue.push({command:"loadNewTypeHistoryDanmu",oid:o.oid,date:o.date}),this.messageStore.dealWith(t)}else if("/x/player.so"===n||"/player"===n){const e=this.messageStore.createData(t);e.data.cid=o.id.slice(4),e.queue.push({command:"loadCurrentDanmu",cid:e.data.cid}),this.messageStore.dealWith(t)}else if("/x/v1/dm/list.so"===n){const e=this.messageStore.createData(t);e.data.cid=o.oid,e.queue.push({command:"loadCurrentDanmu",cid:e.data.cid}),this.messageStore.dealWith(t)}else if("/x/v2/dm/history"===n&&o.date){const e=this.messageStore.createData(t);e.queue.push({command:"loadHistoryDanmu",cid:e.data.cid,date:o.date}),this.messageStore.dealWith(t)}})),(0,n.Z)(this,"fetchNewTypeDanmu",async({url:e,oid:t,segmentIndex:i},n,o)=>(this.emit("requestController","create",{url:e,options:{contentType:"arrayBuffer"}},({data:e})=>{if(e){const r=A(e);if(r&&r.elems){let e=this.tempDanmuMap.get(n.tab.id);if(1!==i&&this.tempDanmuMap.has(n.tab.id)||(e={length:0,pieces:[],oid:t},this.tempDanmuMap.set(n.tab.id,e)),r.elems){let t=r.elems.filter(e=>!!e.content).reduce((e,t)=>{let{id:i,content:n,midHash:o,mode:a,progress:r,fontsize:s,color:l,ctime:d,idStr:h,weight:u}=t;r=c()(r||0,10);let p=n.replace(/[\u0000-\u001f\u007f]/g,"");try{"["===p[0]&&(p=JSON.parse(p),p=p instanceof Array?p[4]:n)}catch(m){}finally{""===p&&void 0===p||e.push({authorHash:o,color:l,danmu:(0,v.decodeHTMLEntries)(p),ctime:d,fontsize:s,idStr:h,mode:a,progress:r,rowId:i,weight:+u>1?u:1,time:(0,v.parseTime)(r,10)})}return e},[]);return t=a()(t,"time"),e.pieces[i-1]=t,e.length+=t.length,this.tempDanmuMap.set(n.tab.id,e),void o(t)}}o([])}else o(e)}),!0)),(0,n.Z)(this,"postReport",async(e,t,i)=>{const n=await this.updateCSRF(),{cid:o,dmid:a,reason:r,content:s}=e,l={cid:o,dmid:a,reason:r,content:s,csrf:n,block:!0},c=new FormData;for(let d in l)c.append(d,l[d]);n?this.emit("requestController","create",{url:"https://api.bilibili.com/x/dm/report/add",options:{method:"post",contentType:"json",body:h()(c.entries()).map(([e,t])=>void 0!==t&&`${e}=${t}`).filter(Boolean).join("&"),headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}},()=>{i(!0)}):i(!1)}),(0,n.Z)(this,"updateCSRF",async()=>new(p())(e=>{this.emit("cookieController","get",{url:"http://www.bilibili.com",name:"bili_jct"},t=>{e(t)})}))}async onLaunch(){this.emit("webRequestController","create",{name:"videoDanmuWatcher",eventName:"onSendHeaders",filter:{urls:["*://api.bilibili.com/x/v2/dm/history?type=*","*://api.bilibili.com/x/v1/dm/list.so?oid=*","*://api.bilibili.com/x/player.so?id=cid:*","*://interface.bilibili.com/player?id=cid:*","*://api.bilibili.com/x/v2/dm/web/view?*","*://api.bilibili.com/x/v2/dm/web/seg.so?*","*://api.bilibili.com/x/v2/dm/web/history/seg.so*"]},options:["requestHeaders"],callback:this.watcher}),this.addListener("postReport",this.postReport),chrome.tabs.onRemoved.addListener(e=>{const t=this.tempDanmuMap.get(e);t&&this.tempDanmuMap.delete(e)}),this.updateCSRF()}}},28792:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AutoLikeCoinCollect:()=>h.Z,VideoAutoPlayMode:()=>u.m,VideoAutoPlaySpeed:()=>d.i,VideoAutoQuality:()=>c.H,VideoDanmu:()=>s.r,VideoDownload:()=>r.F,VideoHideDanmu:()=>o.G,VideoSubtitleDownload:()=>l.v,VideoWiden:()=>n.R,WatchLater:()=>a.v});var n=i(10210),o=i(49363),a=i(98810),r=i(97884),s=i(45158),l=i(6),c=i(69635),d=i(90743),h=i(47595),u=i(84149),p=i(81666),m={};for(const b in p)["default","VideoWiden","VideoHideDanmu","WatchLater","VideoDownload","VideoDanmu","VideoSubtitleDownload","VideoAutoQuality","VideoAutoPlaySpeed","AutoLikeCoinCollect","VideoAutoPlayMode"].indexOf(b)<0&&(m[b]=()=>p[b]);i.d(t,m);var g=i(85870);m={};for(const b in g)["default","VideoWiden","VideoHideDanmu","WatchLater","VideoDownload","VideoDanmu","VideoSubtitleDownload","VideoAutoQuality","VideoAutoPlaySpeed","AutoLikeCoinCollect","VideoAutoPlayMode"].indexOf(b)<0&&(m[b]=()=>g[b]);i.d(t,m)},69927:(e,t,i)=>{"use strict";i.d(t,{v:()=>O});var n=i(33385),o=i(73473),a=i.n(o),r=i(26243),s=i.n(r),l=i(62680),c=i.n(l),d=i(95366),h=i.n(d),u=i(6919),p=i.n(u),m=i(93364),g=i.n(m),b=i(26771),f=i.n(b),v=i(52874),y=i(67294),k=i(60677),w=i(73226),x=i(42151);function S(e,t){var i=s()(e);if(c()){var n=c()(e);t&&(n=n.filter((function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):p()?g()(e,p()(i)):S(Object(i)).forEach((function(t){f()(e,t,h()(i,t))}))}return e}const{color:L}=w.rS,_=k["default"].div`
  margin-bottom: 12px;
`,I=k["default"].div.attrs({className:"bilibili-helper-subtitle-title"})`
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;

  .count {
    margin-left: 10px;
    color: ${L("google-grey-500")};
  }
`,E=k["default"].div`
  display: flex;
  flex-wrap: wrap;
`,A=k["default"].div`
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  margin: 4px;
  padding: 3px;
  width: 100%;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.3px;
  transition: all 0.3s;

  a {
    position: relative;
    top: -2px;
    padding: 0 3px;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,D=k["default"].span`
  position: relative;
  display: inline-block;
  //padding: 0 8px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  border-right: 1px solid #fff;
  background-color: #eaf4ff;
  text-align: center;
  cursor: pointer;

  &:last-of-type {
    border-right: none;
  }

  &:hover {
    background-color: #d4eaff;
  }

  p {
    color: ${L("google-grey-900")};
    font-size: 12px;
  }

  .format {
    position: absolute;
    zoom: 0.7;
    right: 0;
    bottom: 2px;
    left: 0;
    height: 16px;
    line-height: 16px;
    color: var(--bilibili-pink);
    text-align: center;
  }
`;class O extends y.Component{constructor(e){super(e),(0,n.Z)(this,"handleDownloadSubtitle",(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_subtitle",label:e}),new(a())(i=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},n=>{if(!n||!n.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"subtitle",data:C(C({},this.props.videoInfo),{},{lang:t.lan,format:e})},e=>{i(e||!1)})})}).then(i=>{chrome.runtime.sendMessage({target:"videoSubtitleDownload",event:"downloadSubtitle",subtitleObject:t,type:e,filename:i||(0,x.getFilename)(document)})})}),this.state={subtitleData:[]}}componentDidMount(){chrome.runtime.sendMessage({command:"videoSubtitleDownloadDOMInitialized"}),chrome.runtime.onMessage.addListener((e,t,i)=>("loadSubtitle"===e.command&&e.subtitles&&(this.setState({subtitleData:e.subtitles}),i(!0)),!0))}render(){var e,t;const{subtitle:i}=this.props.videoInfo||{};return null!==(e=this.props.videoInfo)&&void 0!==e&&e.subtitle&&0!==(null===(t=this.props.videoInfo.subtitle)||void 0===t?void 0:t.list.length)?y.createElement(_,null,y.createElement(I,null,"\u5b57\u5e55\u4e0b\u8f7d"),y.createElement(E,null,null!==i&&void 0!==i&&i.list&&0!==(null===i||void 0===i?void 0:i.list.length)?y.createElement(A,null,null===i||void 0===i?void 0:i.list.map(e=>{const{id:t,lan_doc:i}=e;return y.createElement(y.Fragment,{key:t},y.createElement(D,{onClick:()=>this.handleDownloadSubtitle("srt",e)},y.createElement("a",null,i.replace("\uff08"," (").replace("\uff09",")")),y.createElement("i",{className:"format"},"SRT")),y.createElement(D,{onClick:()=>this.handleDownloadSubtitle("json",e)},y.createElement("a",null,i.replace("\uff08"," (").replace("\uff09",")")),y.createElement("i",{className:"format"},"JSON")))})):y.createElement(D,null,y.createElement("p",null,"\u672a\u767b\u5f55")))):null}}(0,n.Z)(O,"contextType",v.y)},13461:(e,t,i)=>{"use strict";i.d(t,{d:()=>a});const n=e=>{const[t=0,i=0]=String(e).split(".");let n=Math.trunc(t/3600),o=Math.trunc((t-3600*n)/60),a=Math.trunc((t-3600*n-60*o)%60),r=String(i).padEnd(3,"0");return`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")},${r}`},o=(e,t,i,o,a)=>{const{from:r,to:s,location:l,content:c}=a,d=n(r),h=n(s);return`${d} --\x3e ${h}\n<font color="${t}" size="${40*e}">${c}</font>\n`},a=e=>{const{body:t,font_size:i=.4,font_color:n="#FFFFFF",background_color:a="#9C27B0",background_alpha:r=.5,Stroke:s="none"}=e;return t.map((e,t)=>`${t}\n${o(i,n,a,r,e)}`).join("\n")}},6:(e,t,i)=>{"use strict";i.d(t,{v:()=>S});var n=i(26243),o=i.n(n),a=i(62680),r=i.n(a),s=i(95366),l=i.n(s),c=i(6919),d=i.n(c),h=i(93364),u=i.n(h),p=i(26771),m=i.n(p),g=i(33385),b=i(84564),f=i.n(b),v=i(16203),y=i(48903);if(869==i.j)var k=i(13461);function w(e,t){var i=o()(e);if(r()){var n=r()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),i.push.apply(i,n)}return i}function x(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach((function(t){(0,g.Z)(e,t,i[t])})):d()?u()(e,d()(i)):w(Object(i)).forEach((function(t){m()(e,t,l()(i,t))}))}return e}class S extends(869==i.j?v.Feature:null){constructor(e){super(e,"videoSubtitleDownload",{dependencies:["webRequestController","requestController"],settings:{on:!0}}),(0,g.Z)(this,"messageStore",new v.MessageStore("videoSubtitleDownloadDOMInitialized")),(0,g.Z)(this,"subtitleWatcher",(0,y.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new(f())(e.url,"",!0),{pathname:n,query:o}=i;"/x/player/v2"===n&&this.getSubtitle(e.url).then(e=>{const i=this.messageStore.createData(t),{queue:n}=i;i.data.cid=o.cid,n.push({command:"loadSubtitle",subtitles:e.subtitles}),this.messageStore.dealWith(t)})})),(0,g.Z)(this,"getSubtitle",async(e,t)=>this.emit("requestController","create",{url:e,options:x(x({},t),{},{contentType:"json"})},({data:e})=>e&&0===e.code?e.data.subtitle:[])),(0,g.Z)(this,"downloadSubtitle",(e,t,i)=>{"srt"===e.type?this.downloadSRT(e,t,i):"json"===e.type&&this.downloadJSON(e,t,i)}),(0,g.Z)(this,"downloadSRT",(e,t,i)=>{const n=this.messageStore.createData(t.tab.id||t.id);if(n){const{filename:t,subtitleObject:n}=e,{subtitle_url:o}=n;this.getJSONSubtitle(o.replace(/^(?:http?:)?\/\//,"https://")).then(e=>{const n=(0,k.d)(e),o=URL.createObjectURL(new Blob([n],{type:"text/srt"}));chrome.downloads.download({saveAs:!0,url:o,filename:(0,y.ToCDB)(t.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),headers:[{name:"Content-Disposition",value:`attachment; filename="${t}"; filename*="utf-8' '${t}"`.replace("/","%2f")}]}),i(!0)})}else i(!1)}),(0,g.Z)(this,"downloadJSON",(e,t,i)=>{const n=this.messageStore.createData(t.tab.id||t.id);if(n){const{filename:t,subtitleObject:o}=e,{lan:a,subtitle_url:r}=o,{cid:s}=n.data;chrome.downloads.download({saveAs:!0,url:"https:"+r,filename:(0,y.ToCDB)(t.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),headers:[{name:"Content-Disposition",value:`attachment; filename="${t}"; filename*="utf-8' '${t}"`.replace("/","%2f")}]}),i(!0)}else i(!1)}),(0,g.Z)(this,"getJSONSubtitle",e=>this.emit("requestController","create",{url:e,options:{contentType:"json"}},({data:e})=>e))}async onLaunch(){this.addListener("downloadSubtitle",this.downloadSubtitle)}}},270:(e,t,i)=>{"use strict";var n=i(92593),o=i(25498);(0,n.interval)("#bilibiliPlayer .bilibili-player-video-btn-speed-menu,.squirtle-speed-select-list,.bpx-player-ctrl-playbackrate-menu",1e3).then(()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},async e=>{e&&e.on&&1!==+e.speed&&await(0,o.onVideoChange)(t=>{const i=(0,o.getSpeedBtn)(+e.speed);i?i.click():t&&(t.playbackRate=Number(e.speed).toFixed(2))})})}).catch(e=>e)},90743:(e,t,i)=>{"use strict";i.d(t,{i:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"videoAutoPlaySpeed",{settings:{on:!1,speed:1}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},40402:(e,t,i)=>{"use strict";var n=i(73473),o=i.n(n),a=i(48903),r=i(25498);const s=(e,t)=>{let i,n=+e,o=r.VIDEO_QUALITY_NUMBER_LIST.findIndex(e=>+e===n);do{n=r.VIDEO_QUALITY_NUMBER_LIST[o];const e=`.bilibili-player-video-quality-menu .bui-select-item[data-value="${n}"],.squirtle-quality-wrap .squirtle-select-item [data-value="${n}"],.bpx-player-ctrl-quality-menu .bpx-player-ctrl-quality-menu-item[data-value="${n}"]`;i=document.querySelector(e);let s=n>80;var a;if(i)s=!(null===(a=i.querySelector('[class*="bigvip"]'))||void 0===a||!a.textContent.includes("\u5927\u4f1a\u5458"));o+=1,t||!s||!(n>80)&&n||i&&(i=null)}while(!i&&o<r.VIDEO_QUALITY_NUMBER_LIST.length&&n);return i},l=()=>new(o())(e=>{const t="\n        (() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window.UserStatus && window.UserStatus.userInfo) {\n                    window.postMessage({command: 'sendInitUserData', pageData: {...window.UserStatus.userInfo}}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()\n        ",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const n=t=>{const{data:o}=t;"sendInitUserData"===o.command&&(e(o.pageData),i.remove(),window.removeEventListener("message",n))};window.addEventListener("message",n)});(0,a.interval)(".bilibili-player-video-quality-menu,#bilibili-player .squirtle-quality-wrap,.bpx-player-control-wrap .bpx-player-ctrl-quality",1e3).then(e=>{e&&chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},e=>{e&&e.on&&setTimeout(()=>{l().then(t=>{const i=s(e.quality,!!t.vipStatus);i&&i.click()})},1500)})}).catch(e=>e)},69635:(e,t,i)=>{"use strict";i.d(t,{H:()=>a});var n=i(33385),o=i(69759);class a extends(869==i.j?o.Feature:null){constructor(e){super(e,"videoAutoQuality",{settings:{on:!1,quality:80}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}}},23977:(e,t,i)=>{"use strict";i.d(t,{F:()=>re});var n=i(26243),o=i.n(n),a=i(62680),r=i.n(a),s=i(95366),l=i.n(s),c=i(6919),d=i.n(c),h=i(93364),u=i.n(h),p=i(26771),m=i.n(p),g=i(33385),b=i(73473),f=i.n(b),v=i(88686),y=i(59158);var k=i(70799),w=i(67294),x=i(60677),S=i(92593),C=i(49355),L=i(42151),_=i(49675),I=i(73226),E=i(73935),A=i(32699),D=i(48903);function O(e,t){var i=o()(e);if(r()){var n=r()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach((function(t){(0,g.Z)(e,t,i[t])})):d()?u()(e,d()(i)):O(Object(i)).forEach((function(t){m()(e,t,l()(i,t))}))}return e}const{color:M}=A.theme,N=(0,x["default"])(y.Button).attrs({className:"bilibili-helper-cover-download-btn"})`
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 28px;
  border-radius: 3px;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.3px;
  background-color: #eaf4ff;
  transition: background-color .3s, color .3s;
  cursor: pointer;
  word-break: break-all;
  overflow: hidden;

  &:hover {
    background-color: #d4eaff;
  }

  .button-view {
    border-right: 1px solid #fff;
    height: inherit;
    font-size: 12px;
    font-weight: normal;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,B=(0,x["default"])(v.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    max-height: 500px;
    border-radius: 4px;
  }
`,P=x["default"].div`
`,R=x["default"].div`
  .button:first-of-type {
    margin-right: 8px;
  }
  .button {
    font-size: 12px;
  }
`,Z=document.createElement("div");document.body.appendChild(Z);class F extends w.Component{constructor(e){super(e),(0,g.Z)(this,"handleOnClick",()=>{const e=document.querySelector("#bofqi video, #bilibiliPlayer video, .bilibili-player-video video, #bilibili-player video");e?this.setState({imgSrc:this.props.imgSrc,showModal:!0},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_cover_download_button"})}):window.postMessage({command:"showCheckHEVCModal"},"*")}),(0,g.Z)(this,"handleOnCloseModal",()=>{this.setState({showModal:!1})}),(0,g.Z)(this,"handleOnDownloadImage",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_video_cover"});const e=(0,D.getFilename)(document),t=encodeURIComponent(`${e} ${(new Date).toLocaleString().replace(/\//g,"-")}.jpeg`.replace(/[|"*:<>]/g,"_"));new(f())(e=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},t=>{if(!t||!t.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoCover",data:T(T({},this.props.videoInfo),{},{format:"jpeg"})},t=>{e(t||!1)})})}).then(e=>{const i=(0,D.ToCDB)((e||t).replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_");chrome.runtime.sendMessage({target:"downloadController",event:"create",name:i,data:{saveAs:!0,url:this.state.imgSrc.replace(/^\/\//,"https://").replace(/http:/,"https:"),filename:i,headers:[{name:"Content-Disposition",value:`attachment; filename="${i}"; filename*="utf-8' '${i}"`.replace("/","%2f")}]}},()=>{this.setState({showModal:!1})})})}),this.state={imgSrc:null,showModal:!1}}render(){return w.createElement(w.Fragment,null,w.createElement(N,{onClick:this.handleOnClick},"\u89c6\u9891\u5c01\u9762\u4e0b\u8f7d"),E.createPortal(w.createElement(B,{open:this.state.showModal,className:"preview-modal",title:"\u89c6\u9891\u5c01\u9762\u9884\u89c8",onClickMask:this.handleOnCloseModal,buttons:w.createElement(R,null,w.createElement(y.Button,{className:"border",onClick:this.handleOnCloseModal},"\u5173\u95ed"),w.createElement(y.Button,{className:"primary",onClick:this.handleOnDownloadImage},"\u4e0b\u8f7d"))},w.createElement(P,null,w.createElement("img",{className:"preview-img",src:this.props.imgSrc,alt:"preview"}))),Z))}}var q=i(52874),j=i(58971),U=i.n(j);function H(e,t){var i=o()(e);if(r()){var n=r()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),i.push.apply(i,n)}return i}function $(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?H(Object(i),!0).forEach((function(t){(0,g.Z)(e,t,i[t])})):d()?u()(e,d()(i)):H(Object(i)).forEach((function(t){m()(e,t,l()(i,t))}))}return e}const V=(0,k.t)();(0,L.injectIconfont)(),(0,S.injectScript)("\n(() => {\n    if (window.historyHacked) {\n        return;\n    }\n    window.historyHacked = true;\n    \n    const sendInfo = () => {\n        let isP = !!__INITIAL_STATE__?.p;\n        let data = window?.__INITIAL_STATE__?.videoData || window?.__INITIAL_STATE__?.epInfo || window;\n        \n        if (isP) {\n            const tempData = __INITIAL_STATE__.cidMap[__INITIAL_STATE__.bvid].cids;\n            data.cid = tempData[__INITIAL_STATE__.p];\n        }\n        window.postMessage({\n            command: 'videoChange',\n            aid: data.aid,\n            bvid: data.bvid,\n            cid: data.cid,\n            isEP: !!window?.__INITIAL_STATE__?.epInf,\n            isP,\n        }, '*');\n    };\n    \n    // \u64ad\u653e\u5408\u96c6\u6309\u94ae\u5f00\u6253\u7684\u9875\u9762\u5730\u5740\u4e0d\u4f1a\u56e0\u4e3a\u89c6\u9891\u5207\u6362\u800c\u53d8\u5316\uff0c\u9700\u8981\u5355\u72ec\u505a\u68c0\u6d4b\n    if (location.href.match('https://www.bilibili.com/medialist')) {\n        Object.defineProperty(window, 'bvid', {\n            get: function () {\n                return this._bvid;\n            },\n            set: function (value) {\n                this._bvid = value;\n                sendInfo();\n            },\n        });\n        return;\n    } else if (location.href.match('https://www.bilibili.com/list/')) {\n        const tempCidMap = {...window.__INITIAL_STATE__.cidMap};\n        Object.defineProperty(window.__INITIAL_STATE__, 'cidMap', {\n            get: function () {\n                return this._cidMap || tempCidMap;\n            },\n            set: function (value) {\n                this._cidMap = value;\n                sendInfo();\n            },\n        });\n        return;\n    }/*  else if (/https:\\/\\/www\\.bilibili\\.com\\/video\\/BV(?:.+)\\/?p=\\d+/) {\n    \n    } */\n    \n    sendInfo();\n    \n    let oldPushState = history.pushState;\n    history.pushState = function pushState() {\n        let ret = oldPushState.apply(this, arguments);\n        window.dispatchEvent(new Event('pushstate'));\n        window.dispatchEvent(new Event('locationchange'));\n        return ret;\n    };\n\n    let oldReplaceState = history.replaceState;\n    history.replaceState = function replaceState() {\n        let ret = oldReplaceState.apply(this, arguments);\n        window.dispatchEvent(new Event('replacestate'));\n        window.dispatchEvent(new Event('locationchange'));\n        return ret;\n    };\n\n    window.addEventListener('replacestate', () => {\n        sendInfo();\n    });\n})();\n");const W=e=>e,z=()=>new(f())(e=>{const t="window.postMessage({command: 'sendInitData', pageData: window.__INITIAL_STATE__}, '*');",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const n=t=>{const{data:o}=t;"sendInitData"===o.command&&(e(o.pageData),i.remove(),window.removeEventListener("message",n))};window.addEventListener("message",n)}),G=()=>new(f())(e=>{const t="window.postMessage({command: 'sendDashInfo', pageData: window.__playinfo__?.data}, '*');",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const n=t=>{const{data:o}=t;"sendDashInfo"===o.command&&(e(o.pageData),i.remove(),window.removeEventListener("message",n))};window.addEventListener("message",n)}),J=()=>new(f())(e=>{const t="\n        (() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window.UserStatus && window.UserStatus.userInfo) {\n                    window.postMessage({command: 'sendInitUserData', pageData: {...window.UserStatus.userInfo}}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()\n        ",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const n=t=>{const{data:o}=t;"sendInitUserData"===o.command&&(e(o.pageData),i.remove(),window.removeEventListener("message",n))};window.addEventListener("message",n)});let Q={};const Y=()=>z().then(e=>(Q=e,!0)),{color:X}=I.rS,K=(x.keyframes`
  0% {
    opacity: 0;
    z-index: 1;
  }
  100% {
    opacity: 1;
  }
`,x["default"].div`
  margin-bottom: 12px;

  .basic-info {
    display: grid;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 4px 0;
    padding: 3px;
    width: calc(100% - 10px);
    font-weight: normal;

    .button:not(.bilibili-helper-cover-download-btn) {
      position: relative;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid #fff;
      border-radius: 3px;
      font-size: 12px;
      background-color: #eaf4ff;
      color: #00a1d6;
      transition: background-color .3s, color .3s;

      &:hover {
        color: #004c65;
        background-color: #d4eaff;
      }

      &:last-of-type {
        border: none;
      }

      &::after {
        content: '复制成功';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin-left: -5%;
        margin-top: -1%;
        width: 110%;
        height: 110%;
        text-align: center;
        background-color: #eaf4ff;
        border-radius: 4px;
        opacity: 0;
        transition: opacity .3s .75s;
        pointer-events: none;
      }

      &:focus::after {
        transition: opacity .3s;
      }

      .format {
        position: absolute;
        right: 0;
        top: 15px;
        left: 0;
        height: 16px;
        line-height: 16px;
        color: var(--bilibili-pink);
        transform: scale(.7);
      }

      .description {
        position: relative;
        top: -2px;
      }
    }

    b {
      position: absolute;
      right: 0;
      bottom: 2px;
      left: 0;
      height: 16px;
      line-height: 16px;
      font-weight: normal;
      color: var(--bilibili-pink);
      text-align: center;
      transform: scale(.7);
    }
  }

  .space-cat-banner {
    font-size: 12px;
    min-width: unset;
    color: rgb(255, 255, 255);
    background-color: rgb(251, 114, 153);
    margin: 0px 6px 4px;
    padding: 0px 4px;
    border: 1px solid rgb(251, 114, 153);
    border-radius: 4px;
    word-break: break-word;

    .introduction {
      margin-right: 8px;
      //text-indent: 3px;
    }

    .button {
      height: 14px;

      .button-view {
        vertical-align: bottom;
        line-height: 6px;
        padding: 4px 8px;
        border-radius: 5px;
        //background-color: #fff;
        color: #fff;
      }
    }
  }
`),ee=x["default"].div.attrs({className:"bilibili-helper-video-download-title"})`
  position: relative;
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #222;

  .count {
    margin-left: 10px;
    color: ${X("google-grey-500")};
  }

  .helper-link, .ad-link {
    margin-left: 12px;
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
    color: var(--bilibili-blue);
  }
`,te=x["default"].p`
  font-size: 12px;
  min-width: unset;
  color: rgb(255, 255, 255);
  background-color: rgb(251, 114, 153);
  margin-bottom: 4px;
  margin: 0 6px 4px;
  padding: 0px 4px;
  border: 1px solid rgb(251, 114, 153);
  border-radius: 4px;
  word-break: break-word;
`,ie=x["default"].div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .bilibili-helper-2-icon-cat-paw {
    margin-right: 8px;
    width: 12px;
    height: 12px;
    line-height: 12px;
    transform: rotate(-45deg);
    color: var(--bilibili-pink);
    transform: scale(.7);

  }
`,ne=x["default"].div`
  position: relative;
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: border-box;
  margin: 0 4px 0;
  padding: 3px;
  width: calc(100% - 6px);
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.3px;
  transition: all 0.3s, visibility 0s;
  word-break: break-all;
  overflow: hidden;


  .button {
    position: relative;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-right: 1px solid #fff;
    border-radius: 3px;
    font-size: 12px;
    background-color: #eaf4ff;
    color: #00a1d6;
    transition: background-color .3s, color .3s;
    outline: none;

    &:hover {
      color: #004c65;
      background-color: #d4eaff;
    }

    &:last-of-type {
      border: none;
    }

    //&.vip {
    //  background-color: var(--bilibili-pink);
    //  color: var(--bilibili-gray);
    //
    //  .download-link {
    //    color: var(--bilibili-pink);
    //  }
    //}

    &.has-link {
      height: 48px;
      line-height: 48px;

      .format {
        top: 11px;
      }

      .description {
        top: 0;
      }

      .link-group {
        display: grid;
        grid-column-gap: 2px;
        grid-row-gap: 2px;
        grid-template-columns: repeat(4, 1fr);
        margin: 0 auto;
        padding: 26px 2px 2px;
        max-width: 120px;
        width: 100%;
        box-sizing: border-box;

        .download-link {
          width: 100%;
          padding: 0 2px;
          box-sizing: border-box;

          :hover {
            color: var(--bilibili-pink);
          }
        }
      }
    }

    &.fragment-button {
      height: auto;
    }

    .format {
      position: absolute;
      right: 0;
      top: 15px;
      left: 0;
      height: 16px;
      line-height: 16px;
      color: var(--bilibili-pink);
      transform: scale(.7);
    }

    .description {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 20px;
      line-height: 24px;
    }

    &.vip {
      .vip-tag {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        top: -3px;
        left: -3px;
        background-size: 20px;
        background-image: url(https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png@40w_40h_1c.webp);
        z-index: -1;
      }
    }

    //.description {
    //  position: relative;
    //  top: -2px;
    //}

    .download-link {
      position: absolute;
      top: 24px;
      left: 3px;
      padding: 0 2px;
      box-sizing: border-box;
      display: block;
      width: 94%;
      height: 20px;
      line-height: 20px;
      border-radius: 2px;
      background-color: #fff;
      color: var(--bilibili-blue);
    }

    .fragment-download-link {
      position: relative;
      padding: 0 2px;
      box-sizing: border-box;
      display: block;
      height: 18px;
      line-height: 18px;
      border-radius: 2px;
      background-color: #fff;
      color: var(--bilibili-blue);
    }
  }

  .can-not-download {
    grid-column-end: span 4;
  }
`,oe=(0,x["default"])(y.Button).attrs({className:"bilibili-helper-audio-download-btn"})`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 30px;
  line-height: 26px;
  border-radius: 3px;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.3px;
  background-color: #eaf4ff;
  transition: background-color .3s, color .3s;
  cursor: pointer;
  word-break: break-all;
  overflow: hidden;

  &:hover {
    background-color: #d4eaff;
  }

  .button-view {
    border-right: 1px solid #fff;
    height: inherit;
    font-size: 12px;
    font-weight: normal;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,ae=U().get("spaceCatOn");class re extends w.Component{constructor(e){super(e),(0,g.Z)(this,"state",{currentVideoInfo:null,qualityMap:{},pageData:null,settings:null,errorStr:"",loading:!1,canDownload:!1,userData:null,videoSrc:null,audioSrc:null,hiResSrc:null,ad:null,hasLogin:!1,bhAccount:null,isVIP:!1,isSuperVIP:!1,aria2cConnected:!1,spaceCatActive:!1,spaceCatOn:void 0!==ae&&ae}),(0,g.Z)(this,"addListener",()=>{window.addEventListener("message",e=>{const{data:t}=e;return"videoChange"===t.command&&(chrome.runtime.sendMessage({target:"videoDownload",event:"bindVideo2Tab",bvid:t.bvid,cid:t.cid,idEP:t.isEP,isP:t.isP},e=>{e&&this.setState({errorStr:"",currentVideoInfo:$($({},this.state.currentVideoInfo),e),canDownload:!0},()=>{this.context.setVideoInfo(this.state.currentVideoInfo)})}),this.getVideoBasicInfo(t.cid,t.aid)),!0}),chrome.runtime.onMessage.addListener((e,t,i)=>{if("initNewVideoIds"===e.command)e.data&&this.setState({currentVideoInfo:$($({},this.state.currentVideoInfo),e.data),loading:!0},()=>{this.context.setVideoInfo(this.state.currentVideoInfo),this.getVideoBasicInfo(e.data.cid,e.data.aid)}),i(!0);else if("initNewVideoPlayInfo"===e.command)e.data?(J().then(e=>{this.setState({userData:e})}),Y().then(t=>{this.setState({errorStr:"",currentVideoInfo:$($({},this.state.currentVideoInfo),e.data),canDownload:t},()=>{this.context.setVideoInfo(this.state.currentVideoInfo)})})):this.setState({loading:!1,errorStr:"\u8be5\u89c6\u9891\u5df2\u88ab\u9650\u5236\u4e0b\u8f7d"}),i(!0);else if("initDashVideoPlayInfo"===e.command&&e.data&&e.data.dash){var n,o,a,r,s,l,c,d,h,u,p,m;const t=e.data.dash,i=W(null!==(n=t.audio[0])&&void 0!==n&&n.backupUrl?null===(o=t.audio[0])||void 0===o?void 0:o.backupUrl[0]:null===(a=t.audio[0])||void 0===a?void 0:a.baseUrl),g=W(null!==(r=t.video[0])&&void 0!==r&&r.backupUrl?null===(s=t.video[0])||void 0===s?void 0:s.backupUrl[0]:null===(l=t.video[0])||void 0===l?void 0:l.baseUrl),b=W(null!==t&&void 0!==t&&null!==(c=t.flac)&&void 0!==c&&null!==(d=c.audio)&&void 0!==d&&d.backupUrl?null===t||void 0===t||null===(h=t.flac)||void 0===h||null===(u=h.audio)||void 0===u?void 0:u.backupUrl[0]:null===t||void 0===t||null===(p=t.flac)||void 0===p||null===(m=p.audio)||void 0===m?void 0:m.baseUrl);this.setState({videoSrc:g+"&requestFrom=BILIBILI_HELPER_2.5.17.4",audioSrc:i+"&requestFrom=BILIBILI_HELPER_2.5.17.4",hiResSrc:b?b+"&requestFrom=BILIBILI_HELPER_2.5.17.4":null})}return!0})}),(0,g.Z)(this,"getVideoBasicInfo",(e,t)=>new(f())(i=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:`https://api.bilibili.com/x/web-interface/view?aid=${t}&cid=${e}`,options:{contentType:"json"}},({data:e,error:t})=>{if(e&&0===e.code){var n;const{currentVideoInfo:t}=this.state;null!==(n=e.data)&&void 0!==n&&n.pages&&delete e.data.cid,this.setState({currentVideoInfo:$($($({},t),e.data),{},{pic:e.data.pic}),loading:!1,qualityMap:{}},()=>{this.context.setVideoInfo(this.state.currentVideoInfo),this.getAudioInfo(),i()})}else this.setState({loading:!1}),i()})})),(0,g.Z)(this,"getAudioInfo",()=>{fetch(location.href,{method:"GET",headers:{"content-type":"text/html; charset=utf-8"}}).then(e=>e.text()).then(e=>{const t=/<script>window\.__playinfo__=(.+?)<\/script>/.exec(e);new(f())(e=>{t&&t[1]||e(!1);try{const i=JSON.parse(t[1]);e(i.data||!1)}catch(i){e(!1)}}).then(({dash:e,support_formats:t})=>{if(e){if(!this.state.audioSrc&&e.audio){const t=e.audio[0].backupUrl?e.audio[0].backupUrl[0]:e.audio[0].baseUrl,i=W(t);this.setState({audioSrc:i+"&requestFrom=BILIBILI_HELPER_2.5.17.4"})}if(!this.state.videoSrc&&e.video){const t=e.video[0].backupUrl?e.video[0].backupUrl[0]:e.video[0].baseUrl,i=W(t);this.setState({videoSrc:i+"&requestFrom=BILIBILI_HELPER_2.5.17.4"})}if(!this.state.hiResSrc&&e.flac){var i,n;const t=null===e||void 0===e||null===(i=e.flac)||void 0===i||null===(n=i.audio)||void 0===n?void 0:n.baseUrl,o=W(t);this.setState({hiResSrc:o?o+"&requestFrom=BILIBILI_HELPER_2.5.17.4":null})}}})})}),(0,g.Z)(this,"getVideoFilename",(e,t,i)=>new(f())(n=>{const{currentVideoInfo:o}=this.state,a=document.querySelector(".player-auxiliary-playlist-item-p-item-active");let r,s,l;a&&([,s,l,r]=a.textContent.match(/^(P(\d+?))\s+(.+)/),l-=1),void 0===l&&Q&&(void 0!==Q.p?l=Q.p:Q.epInfo&&Q.epList.length>0&&(l=Q.epInfo.i+1)),void 0===r&&Q&&(o.pages&&o.pages[Q.p-1]?r=o.pages[Q.p-1].part:Q.epInfo&&(r=Q.epInfo.longTitle)),void 0===s&&Q&&(void 0!==Q.p?s="P"+Q.p:Q.epInfo&&(s=Q.epInfo.titleFormat)),chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"video",data:{url:t+"&requestFrom=bilibili_helper_2",sign:t.split("?")[0],cid:o.cid,aid:o.aid,bvid:o.bvid,pubdate:o.pubdate,quality:o.quality,owner:o.owner,title:o.title,subTitle:r,size:e,preTitle:s,pageNumber:l,format:i}},e=>{n(e)})})),(0,g.Z)(this,"handleOnClickDownloadAndSendFilename",(e,t,i)=>{const{currentVideoInfo:n}=this.state,o=document.querySelector(".player-auxiliary-playlist-item-p-item-active");let a,r,s;o&&([,r,s,a]=o.textContent.match(/^(P(\d+?))\s+(.+)/),s-=1),void 0===s&&Q&&(void 0!==Q.p?s=Q.p:Q.epInfo&&Q.epList.length>0&&(s=Q.epInfo.i+1)),void 0===a&&Q&&(n.pages&&n.pages[Q.p-1]?a=n.pages[Q.p-1].part:Q.epInfo&&(a=Q.epInfo.longTitle)),void 0===r&&Q&&(void 0!==Q.p?r="P"+Q.p:Q.epInfo&&(r=Q.epInfo.titleFormat)),chrome.runtime.sendMessage({target:"renameDownloadFile",event:"sendVideoFilename",url:t+"&requestFrom=BILIBILI_HELPER_2.5.17.4",sign:t.split("?")[0],cid:n.cid,aid:n.aid,bvid:n.bvid,pubdate:n.pubdate,quality:n.quality,owner:n.owner,title:n.title,subTitle:a,size:e,preTitle:r,pageNumber:s,format:i})}),(0,g.Z)(this,"handleOnClickQualityButton",(e=127)=>{const{currentVideoInfo:t,qualityMap:i,spaceCatOn:n}=this.state;if(t){if(i[e])return void this.downloadByUrl(i[e]);const{cid:n,aid:o,bvid:a}=t;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_video",label:e}),chrome.runtime.sendMessage({target:"videoDownload",event:"getPlayUrl",cid:n,aid:o,bvid:a,quality:e},t=>{t?(i[e]=t,this.setState({qualityMap:i})):alert("\u83b7\u53d6\u4e0b\u8f7d\u94fe\u63a5\u5931\u8d25")})}}),(0,g.Z)(this,"handleOnClickID",(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"copy_id",label:e}),(0,C.u)(t).then(e=>v.Message.info("\u4fe1\u606f\u590d\u5236"+(e?"\u6210\u529f":"\u5931\u8d25")))}),(0,g.Z)(this,"handleOnClickConvertLink",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_convert_link"})}),(0,g.Z)(this,"handleOnClickHelpLink",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_helper_link"})}),(0,g.Z)(this,"handleOnClickADLink",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_video_ad"})}),(0,g.Z)(this,"handleOnClickGotoPayment",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html?showPaymentModal=1")})}),(0,g.Z)(this,"handleOnClickOnSpaceCat",()=>{const{spaceCatOn:e}=this.state;this.setState({spaceCatOn:!e}),U().set("spaceCatOn",!e)}),(0,g.Z)(this,"downloadByUrl",(e,t)=>{const i=document.createElement("a"),n=(0,L.getFilename)(document);i.innerText=n,i.style.display="none",i.setAttribute("referrerPolicy","unsafe-url"),i.setAttribute("download",n+".flv"),i.setAttribute("target","_blank"),i.href=t.replace(/^http:\/\//,"https://"),this.handleOnClickDownloadAndSendFilename(e,i.href,"flv"),i.click(),i.remove()}),(0,g.Z)(this,"downloadBySpaceCat",(e=127)=>{G().then(t=>{if(null!==t&&void 0!==t&&t.dash){const i=null===t||void 0===t?void 0:t.dash;let n=i.video.sort((e,t)=>e.bandwidth>=t.bandwidth?0:1).filter(({id:t})=>e>=t)[0];n||(n=i.video.sort((e,t)=>e.bandwidth>=t.bandwidth?0:1)[0]);const o=i.audio.sort((e,t)=>e.bandwidth>t.bandwidth)[0],a=n.backup_url[0];o.backup_url[0];this.getVideoFilename(0,a,"mp4").then(e=>{n.codecs,o.codecs,location.href})}})}),(0,g.Z)(this,"renderAD",()=>{const{ad:e}=this.state;return e?w.createElement("a",{className:"ad-link",href:e.link,onClick:this.handleOnClickADLink,target:"_blank",rel:"noreferrer"},e.title):null}),(0,g.Z)(this,"renderVideoBasicInfo",()=>{const{currentVideoInfo:e}=this.state;return w.createElement(K,null,w.createElement(ee,null,"\u89c6\u9891\u4fe1\u606f - \u70b9\u51fb\u590d\u5236"),w.createElement(ie,null,null!==e&&void 0!==e&&e.aid?null:w.createElement("div",{className:"basic-info"},w.createElement(y.Button,null,"\u6682\u65e0\u6570\u636e")),null!==e&&void 0!==e&&e.aid?w.createElement(w.Fragment,null,w.createElement("div",{className:"basic-info"},w.createElement(F,{imgSrc:e.pic,videoInfo:e}),w.createElement(y.Button,{tabIndex:"0",onClick:()=>this.handleOnClickID("aid","av"+e.aid)},w.createElement("b",{className:"format"},"aid"),w.createElement("i",{className:"description"},"av",e.aid)),w.createElement(y.Button,{tabIndex:"1",onClick:()=>this.handleOnClickID("bvid",e.bvid)},w.createElement("b",{className:"format"},"bvid"),w.createElement("i",{className:"description"},e.bvid)),w.createElement(y.Button,{tabIndex:"2",onClick:()=>this.handleOnClickID("cid",e.cid)},w.createElement("b",{className:"format"},"cid"),w.createElement("i",{className:"description"},e.cid)))):null))}),(0,g.Z)(this,"renderFlvButton",(e,t)=>{var i,n;const{aria2cConnected:o,spaceCatOn:a}=this.state,r=W(e[0].url||(null===(i=e[0])||void 0===i||null===(n=i.backup_url)||void 0===n?void 0:n.pop())),s=e[0].size;return this.handleOnClickDownloadAndSendFilename(s,r,t),o?w.createElement("a",{className:"download-link",onClick:()=>{chrome.runtime.sendMessage({target:"aria2c",event:"download",uri:r})}},"\u70b9\u51fb\u4e0b\u8f7d"):w.createElement("a",{className:"download-link",href:r+"&requestFrom=BILIBILI_HELPER_2.5.17.4",target:"__blank",referrerPolicy:"unsafe-url",download:!0},"\u70b9\u51fb\u4e0b\u8f7d")}),(0,g.Z)(this,"renderFlvFragmentButton",(e,t)=>w.createElement("div",{className:"link-group"},e?e.map((e,i)=>{const n=W(e.url);return this.state.aria2cConnected?w.createElement("a",{key:i,className:"download-link",onClick:()=>{this.handleOnClickDownloadAndSendFilename(e.size,n,t),chrome.runtime.sendMessage({target:"aria2c",event:"download",uri:n})}},"\u70b9\u51fb\u4e0b\u8f7d"):w.createElement("a",{key:i,className:"fragment-download-link",href:n+"&requestFrom=BILIBILI_HELPER_2.5.17.4",target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>this.handleOnClickDownloadAndSendFilename(e.size,n,t)},i)}):null)),(0,g.Z)(this,"renderTitle",()=>w.createElement(ee,null,"\u89c6\u9891\u4e0b\u8f7d",w.createElement("a",{className:"helper-link",href:"https://helper.bilibilihelper.com/",target:"_blank",rel:"noreferrer",onClick:this.handleOnClickHelpLink},"\u4f7f\u7528\u5e2e\u52a9"),this.renderAD())),(0,g.Z)(this,"renderBanner",()=>{const{spaceCatOn:e}=this.state;return w.createElement("div",{className:"space-cat-banner"},w.createElement("span",{className:"introduction"},"\u662f\u5426\u7531SpaceCat\u63a5\u7ba1\u89c6\u9891\u4e0b\u8f7d\u4efb\u52a1"),w.createElement(y.Button,{onClick:this.handleOnClickOnSpaceCat},e?"\u70b9\u51fb\u5173\u95ed":"\u70b9\u51fb\u542f\u7528"))}),(0,g.Z)(this,"renderFLV",()=>{const{loading:e,currentVideoInfo:t,canDownload:i,errorStr:n,qualityMap:o,userData:a}=this.state;let r;return a&&a&&a.level_info&&a.level_info.current_level<=1?r="\u60a8\u7684b\u7ad9\u8d26\u53f7\u7b49\u7ea7\u767b\u5f55\u4f4e\u4e8e2\u7ea7\uff0c\u5df2\u88ab\u7981\u6b62\u4e0b\u8f7d":a&&!a.mobile_verified&&(r="\u60a8\u7684b\u7ad9\u8d26\u53f7\u6ca1\u6709\u7ed1\u5b9a\u624b\u673a\uff0c\u5df2\u88ab\u7981\u6b62\u4e0b\u8f7d"),i||t&&t.rights&&t.rights.download||!t||!t.support_formats||(r="\u8be5\u89c6\u9891\u5df2\u88abUP\u4e3b\u9650\u5236\u4e0b\u8f7d"),r?w.createElement(w.Fragment,null,w.createElement(K,null,this.renderTitle(),w.createElement(ne,null,w.createElement(y.Button,{className:"can-not-download"},r))),this.renderSplit()):w.createElement(w.Fragment,null,w.createElement(K,null,this.renderTitle(),w.createElement(te,null,"\u7531\u4e8e\u7f51\u7ad9\u4e0d\u518d\u63d0\u4f9b\u5176\u4ed6\u4e0b\u8f7d\u9009\u9879\uff0c\u6211\u4eec\u5df2\u7740\u624b\u5f00\u53d1\u65b0\u5ba2\u6237\u7aef\u6765\u63d0\u4f9b\u66f4\u591a\u670d\u52a1\uff0c",w.createElement("br",null),"\u611f\u8c22\u60a8\u7684\u7406\u89e3\u4e0e\u652f\u6301"),w.createElement(ie,null,!e&&t&&t.support_formats?w.createElement(ne,null,t.support_formats.map(({display_desc:e,format:t,new_description:i,quality:n})=>{const a=o[n],r=t.includes("mp4")?"mp4":"flv";return w.createElement(y.Button,{key:n,className:[a?"has-link":"",n>80?"vip":null,a&&a.length>1?"fragment-button":null].join(" "),onClick:()=>a?null:this.handleOnClickQualityButton(n)},w.createElement("i",{className:"format"},t),w.createElement("i",{className:"vip-tag"}),w.createElement("span",{className:"description"},i),a&&1===a.length?this.renderFlvButton(a,r):this.renderFlvFragmentButton(a,r))})):w.createElement(ne,{style:{gridTemplateColumns:"repeat(1,1fr)"}},w.createElement(y.Button,null,n||"\u6570\u636e\u8f7d\u5165\u4e2d")))),!V&&this.renderSplit())})}componentDidMount(){this.addListener(),chrome.runtime.sendMessage({command:"videoDownloadDOMInitialized"}),chrome.runtime.sendMessage({target:"videoDownload",event:"getSetting"},e=>{this.setState({settings:e})}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{e&&null!==e&&void 0!==e&&e.hasLogin&&null!==e&&void 0!==e&&e.bhAccount&&this.setState({hasLogin:e.hasLogin,bhAccount:e.bhAccount,isVIP:!!e.hasLogin&&(0,_.isVIP)(e.bhAccount),isSuperVIP:!!e.hasLogin&&(0,_.isSuperVIP)(e.bhAccount)})}),chrome.runtime.sendMessage({target:"aria2c",event:"getConnectedStat"},e=>{this.setState({aria2cConnected:e})})}renderSplit(){const{videoSrc:e,audioSrc:t,hiResSrc:i,isVIP:n,isSuperVIP:o,loading:a}=this.state;return!e&&!t||a?null:w.createElement(K,null,w.createElement(ie,{className:"split-download"},w.createElement(ee,null,w.createElement(v.Icon,{icon:"cat-paw",size:16}),"\u89c6\u97f3\u9891\u5206\u522b\u4e0b\u8f7d\uff08\u53f3\u952e\u53e6\u5b58\u4e3a\uff09"),w.createElement(ne,null,e?w.createElement(w.Fragment,null,w.createElement("a",{href:n||o?e+"requestFrom=$BILIBILI_HELPER_2.5.17.4":null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>n||o?this.handleOnClickDownloadAndSendFilename(0,e,"mp4"):this.handleOnClickGotoPayment()},w.createElement(oe,null,w.createElement("i",{className:"format"},"M4S\u683c\u5f0f"),w.createElement("span",{className:"description"},"\u4e0b\u8f7d\u753b\u9762")))):null,t?w.createElement(w.Fragment,null,w.createElement("a",{href:n||o?t:null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>n||o?this.handleOnClickDownloadAndSendFilename(0,t,"mp3"):this.handleOnClickGotoPayment()},w.createElement(oe,null,w.createElement("i",{className:"format"},"M4S\u683c\u5f0f"),w.createElement("span",{className:"description"},"\u4e0b\u8f7d\u58f0\u97f3")))):null,i?w.createElement(w.Fragment,null,w.createElement("a",{href:n||o?i:null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>n||o?this.handleOnClickDownloadAndSendFilename(0,i,"flac"):this.handleOnClickGotoPayment()},w.createElement(oe,{className:"vip"},w.createElement("i",{className:"format"},"M4S\u683c\u5f0f"),w.createElement("i",{className:"vip-tag"}),w.createElement("span",{className:"description"},"\u4e0b\u8f7dHi-Res\u97f3\u6e90")))):null)))}render(){return w.createElement(w.Fragment,null,this.renderVideoBasicInfo(),this.renderFLV())}}(0,g.Z)(re,"contextType",q.y)},97884:(e,t,i)=>{"use strict";i.d(t,{F:()=>g});var n=i(33385),o=i(41609),a=i.n(o),r=i(73473),s=i.n(r),l=i(66130),c=i.n(l),d=i(16203),h=i(84564),u=i.n(h),p=i(42151),m=i(25498);class g extends(869==i.j?d.Feature:null){constructor(e){super(e,"videoDownload",{dependencies:["renameDownloadFile"],settings:{on:!0,showFLVSegment:!0}}),(0,n.Z)(this,"messageStore",new d.MessageStore("videoDownloadDOMInitialized")),(0,n.Z)(this,"fetchingSignalMap",{}),(0,n.Z)(this,"downloadVideoMap",{}),(0,n.Z)(this,"tabVideoMap",{}),(0,n.Z)(this,"playurlCache",{}),(0,n.Z)(this,"videoDataCache",{}),(0,n.Z)(this,"modifyReferer",e=>{const{initiator:t,requestHeaders:i}=e,n=!a()(i.find(({name:e})=>e.match("bilibili-helper-header-action"))),o=[...i];if(n){const e=o.findIndex(({name:e})=>"bilibili-helper-header-action-set-referer"===e);e>-1&&(o.push({name:"Referer",value:o[e].value}),o.splice(e,1))}return{requestHeaders:o}}),(0,n.Z)(this,"modifyOrigin",e=>{const{initiator:t,requestHeaders:i,url:n}=e,o=new URL(n),a=[...i],r=a.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e);if(r>-1&&(a.push({name:"Origin",value:a[r].value}),a.splice(r,1)),t===o.origin){const e=a.findIndex(({name:e})=>"origin"===e.toLowerCase());e>-1&&a.splice(e,1),a.push({name:"Origin",value:"https://www.bilibili.com"});const t=a.findIndex(({name:e})=>"referer"===e.toLowerCase());t>-1&&a.splice(t,1),a.push({name:"Referer",value:"https://www.bilibili.com"})}return{requestHeaders:a}}),(0,n.Z)(this,"videoWatcherCallback",(0,p.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new(u())(e.url,"",!0),{pathname:n,query:o}=i;if(o.passWrapper)return;if(o&&o.requestFrom)return;const a=this.messageStore.createData(t);if("/x/player/v2"===n||"/player.html"===n){let{cid:e,aid:i,bvid:n}=o;i&&!n?n=(0,m.av2bv)(+i):n&&!i&&(i=(0,m.bv2av)(n)),a.queue.length>0&&(a.queue=[]),this.tabVideoMap[t]&&this.tabVideoMap[t].cid===+e||!this.tabVideoMap[t]?(a.queue.push({command:"initNewVideoIds",type:"init",data:{cid:+e,aid:i,bvid:n}}),this.messageStore.dealWith(t)):this.videoDataCache[+e]={cid:+e,aid:i,bvid:n},this.tabVideoMap[t]={cid:+e,aid:i,bvid:n},this.cancelFetchPlayUrl(e).then(()=>{this.fetchPlayUrl(e,i,n).then(i=>{this.tabVideoMap[t]&&this.tabVideoMap[t].cid===+e||!this.tabVideoMap[t]?(a.queue.push({command:"initNewVideoPlayInfo",type:"initVideoData",data:!(!i||0!==i.code)&&(i.data||i.result)}),this.messageStore.dealWith(t)):this.playurlCache[+e]=!(!i||0!==i.code)&&(i.data||i.result)})})}else if("/pgc/player/web/playurl"===n||"/x/player/wbi/playurl"===n||"/x/player/playurl"===n){let{cid:e,aid:n,avid:r,bvid:s}=o;!n&&!r||s||(s=(0,m.av2bv)(+(n||r))),this.tabVideoMap[t]||(this.tabVideoMap[t]={cid:+e,aid:n,bvid:s}),a.queue.length>0&&(a.queue=[]),(this.tabVideoMap[t]&&this.tabVideoMap[t].cid===+e||!this.tabVideoMap[t])&&this.messageStore.dealWith(t),this.cancelFetchPlayUrl(e+"dash").then(()=>{this.fetchPlayDashByUrl(e+"dash",i).then(i=>{this.tabVideoMap[t]&&this.tabVideoMap[t].cid===+e||!this.tabVideoMap[t]?(a.queue.push({command:"initDashVideoPlayInfo",type:"initVideoData",data:!(!i||0!==i.code)&&(i.data||i.result)}),this.messageStore.dealWith(t)):this.videoDataCache[+e]={cid:+e,aid:n,bvid:s}})})}})),(0,n.Z)(this,"getPlayUrl",async(e,t,i)=>this.fetchPlayUrl(e.cid,e.aid,e.bvid,e.quality).then(t=>{var n,o,a,r,s,l;t&&0===t.code&&null!==t&&void 0!==t&&null!==(n=t.result)&&void 0!==n&&n.durl&&(null===t||void 0===t||null===(o=t.result)||void 0===o?void 0:o.durl.length)>0&&+e.quality===(null===t||void 0===t||null===(a=t.result)||void 0===a?void 0:a.quality)?i(t.result.durl):t&&0===t.code&&null!==t&&void 0!==t&&null!==(r=t.data)&&void 0!==r&&r.durl&&(null===t||void 0===t||null===(s=t.data)||void 0===s?void 0:s.durl.length)>0&&+e.quality===(null===t||void 0===t||null===(l=t.data)||void 0===l?void 0:l.quality)?i(t.data.durl):i(!1)})),(0,n.Z)(this,"fetchPlayDashByUrl",async(e,t)=>new(s())(i=>{this.fetchingSignalMap[e]=e+c()(),this.emit("requestController","create",{url:t.toString(),options:{contentType:"json",credential:"include",headers:{noRequestFrom:!0,passWrapper:"/x/player/wbi/playurl"===t.pathname,"bilibili-helper-header-action-set-referer":"https://www.bilibili.com/","bilibili-helper-header-action-set-origin":"https://www.bilibili.com/"},controlPassword:this.fetchingSignalMap[e]}},({data:e})=>i(e))})),(0,n.Z)(this,"fetchPlayUrl",async(e,t,i,n=120)=>new(s())(o=>{let a=`https://api.bilibili.com/x/player/playurl?cid=${e}&bvid=${i}&aid=${t}&qn=${n}&type=flv&fourk=1`;this.fetchingSignalMap[e]=e+c()(),this.emit("requestController","create",{url:a,options:{contentType:"json",credential:"include",headers:{"bilibili-helper-header-action-set-referer":a},controlPassword:this.fetchingSignalMap[e]}},({data:r})=>{-404===r.code?(a=`https://api.bilibili.com/pgc/player/web/playurl?cid=${e}&bvid=${i}&aid=${t}&qn=${n}&type=flv&fourk=1`,this.emit("requestController","create",{url:a,options:{contentType:"json",credential:"include",headers:{"bilibili-helper-header-action-set-referer":a},controlPassword:this.fetchingSignalMap[e]}},({data:e})=>{o(e)})):o(r)})})),(0,n.Z)(this,"cancelFetchPlayUrl",async e=>this.fetchingSignalMap[e]?new(s())(t=>{this.emit("requestController","cancel",{signal:this.fetchingSignalMap[e]},e=>t(e))}):s().resolve(!0)),(0,n.Z)(this,"fetchPlayDash",async e=>new(s())(t=>{fetch(e,{method:"GET",headers:{"content-type":"text/html; charset=utf-8"}}).then(e=>e.text()).then(e=>{const i=/<script>window\.__playinfo__=(.+?)<\/script>/.exec(e);i&&i[1]||t(!1);try{const e=JSON.parse(i[1]);t(e.data||!1)}catch(n){t(!1)}})})),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){this.emit("webRequestController","create",{name:"videoDownloadVideoWatcher",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/player/playurl*","*://api.bilibili.com/pgc/player/web/playurl*","*://api.bilibili.com/x/player/wbi/playurl*","*://api.bilibili.com/x/player/v2?*"]},options:["requestHeaders"],callback:(0,p.webRequestCallbackWrapper)(this.videoWatcherCallback)}),this.emit("webRequestController","create",{name:"videoDownloadVideoFetchAgain",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/pgc/player/web/playurl*","*://api.bilibili.com/x/player/playurl*","*://api.bilibili.com/x/player/wbi/playurl*","*://*.bilivideo.com/upgcxcode/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:(0,p.webRequestCallbackWrapper)(this.modifyReferer)}),this.emit("webRequestController","create",{name:"videoDownloadVideoModifyOrigin",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/pgc/player/web/playurl*","*://api.bilibili.com/x/player/playurl*","*://api.bilibili.com/x/player/wbi/playurl*","*://*.bilivideo.cn/upgcxcode/*","*://*.mcdn.bilivideo.cn:*/upgcxcode/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:(0,p.webRequestCallbackWrapper)(this.modifyOrigin)}),this.addListener("getPlayUrl",this.getPlayUrl),this.addListener("fetchPlayUrl",(e,t,i)=>{this.fetchPlayUrl(e.cid,e.aid,e.bvid,e.quality).then(e=>{i(!!e&&(e.data||e.result))})}),this.addListener("bindVideo2Tab",async(e,t,i)=>{var n;if(null!==t&&void 0!==t&&null!==(n=t.tab)&&void 0!==n&&n.id&&this.tabVideoMap[t.tab.id]||e.isP){if(this.tabVideoMap[t.tab.id]=e,e.cid in this.videoDataCache){const i=this.messageStore.createData(t.tab.id);i.queue.push({command:"initNewVideoIds",type:"init",data:this.videoDataCache[e.cid]}),this.messageStore.dealWith(t.tab.id)}e.cid in this.playurlCache&&i(this.playurlCache[e.cid])}else i(!1)}),this.addListener("getDashData",async(e,t,i)=>{e.url&&this.fetchPlayDash(e.url).then(e=>{i(e)})})}}},62316:(e,t,i)=>{"use strict";i.d(t,{E:()=>c});var n=i(33385),o=i(67294),a=i(60677),r=(i(58971),i(88686));const s=location.pathname.match("player.html$"),l=a["default"].p`
  margin: 12px 30px;
  color: #fff;
  font-size: 14px;
  white-space: break-spaces;

  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class c extends o.Component{constructor(e){super(e),(0,n.Z)(this,"state",{show:!1}),(0,n.Z)(this,"handleOnClose",()=>{this.setState({show:!1},()=>{chrome.runtime.sendMessage({target:"videoGuide",event:"setSetting",show:!1})})})}componentDidMount(){chrome.runtime.sendMessage({target:"videoGuide",event:"getSetting"},({show:e})=>{this.setState({show:!s&&e})})}render(){return o.createElement(r.BilibiliHelperButtonGuide,{show:this.state.show,onClose:this.handleOnClose,sections:[o.createElement(o.Fragment,null,o.createElement(r.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-1.jpg")}),o.createElement(l,null,"\u611f\u8c22\u60a8\u4f7f\u7528",o.createElement(r.Icon,{icon:"bilibilihelper",size:16}),"\uff08\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\uff0c\u7b80\u79f0\u52a9\u624b\uff09\uff0c\u8fd9\u662f\u4e00\u6b3e\u7b2c\u4e09\u65b9\u6269\u5c55\u7a0b\u5e8f\uff0c\u4e3a\u60a8\u5728\u5404\u4e2a\u65b9\u9762\u589e\u5f3a\u6d4f\u89c8B\u7ad9\u7684\u4f53\u9a8c~"),o.createElement(l,null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u8981\u7684\u6982\u8ff0\uff0c\u5411\u60a8\u4ecb\u7ecd\u52a9\u624b\u5728\u89c6\u9891\u64ad\u653e\u9875\u9762\u4e2d\u53ef\u4ee5\u505a\u54ea\u4e9b\u4e8b\u3002"),o.createElement(l,null,"\u6211\u4eec\u5c06\u529f\u80fd\u7684\u5165\u53e3\u6309\u94ae\u505a\u4e86\u6539\u8fdb\uff0c\u4ece\u4e00\u4e2a\u56fa\u5b9a\u4e0e\u7f51\u9875\u67d0\u4e2a\u4f4d\u7f6e\u7684\u6309\u94ae\u53d8\u6210\u4e86\u4e00\u4e2a\u60ac\u6d6e\u7403\u300c\u52a9\u624b\u732b\u300d\u3002\u60a8\u53ef\u4ee5\u62d6\u62fd\u52a9\u624b\u732b\u5230\u81ea\u5df1\u559c\u6b22\u7684\u4f4d\u7f6e\u3002")),o.createElement(o.Fragment,null,o.createElement(r.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-2.jpg")}),o.createElement(l,null,"\u5c06\u9f20\u6807\u79fb\u52a8\u5230\u52a9\u624b\u732b\u4e0a\u65f6\uff0c\u52a9\u624b\u732b\u7684\u4e0b\u65b9\u4f1a\u51fa\u73b0\u300c\u5df2\u4e0a\u9501\u300d\u56fe\u6807\u6309\u94ae"),o.createElement(l,null,"\u70b9\u51fb\u300c\u9501\u300d\u56fe\u6807\u53ef\u4ee5\u5207\u6362\u56fa\u5b9a\u6a21\u5f0f\u3002"),o.createElement(l,null,"\u4e0a\u9501\u65f6\uff0c\u52a9\u624b\u732b\u4e0d\u4f1a\u968f\u7740\u7f51\u9875\u7684\u6eda\u52a8\u800c\u79fb\u52a8\u4f4d\u7f6e\u3002")),o.createElement(o.Fragment,null,o.createElement(r.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-3.jpg")}),o.createElement(l,null,"\u6211\u4eec\u5bf9\u529f\u80fd\u754c\u9762\u8fdb\u884c\u4e86\u91cd\u65b0\u8bbe\u8ba1\u3002\u89c6\u9891\u4e0b\u8f7d\u529f\u80fd\u5c06\u4f1a\u76f4\u63a5\u663e\u793a\u5404\u4e2a\u6e05\u6670\u5ea6\u7684\u4e0b\u8f7d\u6309\u94ae\uff0c\u70b9\u51fb\u5373\u4e0b\u8f7d"),o.createElement(l,null,"\u9664\u6b64\u4e4b\u5916\u8fd8\u589e\u52a0\u4e86\u300c\u622a\u5c4f\u300d\uff0c\u590d\u5236\u89c6\u9891ID\u7b49\u529f\u80fd"),o.createElement(l,null,"\u672a\u6765\u6211\u4eec\u8fd8\u4f1a\u7ee7\u7eed\u7ef4\u62a4\u589e\u52a0\u66f4\u591a\u529f\u80fd\uff0c\u5c3d\u8bf7\u671f\u5f85~")),o.createElement(o.Fragment,null,o.createElement(r.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-4.jpg")}),o.createElement(l,null,"\u6700\u540e\uff0c\u6211\u4eec\u8fd8\u5bf9\u5d4c\u5165\u5f0f\u89c6\u9891\u505a\u4e86\u652f\u6301\uff0c\u73b0\u5728\u52a9\u624b\u732b\u4f1a\u51fa\u73b0\u5728\u6240\u6709b\u7ad9\u89c6\u9891\u64ad\u653e\u5668\u4e0a\u5566~"),o.createElement(l,null,"\u9664\u4e86\u756a\u5267\u3001\u663e\u793a\u89c2\u770b\u7535\u5f71\u4e4b\u7c7b\u7684\uff0c\u90fd\u53ef\u4ee5\u4e0b\u8f7d\u54e6"))]})}}},61793:(e,t,i)=>{"use strict";i.d(t,{w:()=>f});var n=i(33385),o=i(88686),a=i(52874),r=i(59158),s=i(67294),l=i(60677),c=i(32699),d=i(48903),h=i(84564),u=i.n(h);const{color:p}=c.theme,m=(0,l["default"])(r.Button).attrs({className:"bilibili-helper-play-position-link-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${p("bilibili-blue")};
  box-sizing: border-box;
  font-size: 12px;
  background-color: white;
  color: ${p("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${p("bilibili-blue")};
    color: white;
  }
`,g=document.createElement("div");document.body.appendChild(g);const b=["s","m","h"];class f extends s.Component{constructor(e){super(e),(0,n.Z)(this,"handleOnClick",()=>{const e=document.querySelector(".bilibili-player-video-time-now, .squirtle-video-time-now, .bpx-player-ctrl-time-current");if(e&&e.textContent){const t=e.textContent.split(":").reverse().map((e,t)=>{const i=b[t];return e+i}).reverse().join(""),i=new(u())(location.href,!0);i.query.t=t,chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"copy_play_position_link"}),(0,d.copy2Clipboard)(i.toString()).then(e=>o.Message.info("\u590d\u5236\u7a7a\u964d\u94fe\u63a5"+(e?"\u6210\u529f":"\u5931\u8d25")))}}),this.state={imgSrc:null,showModal:!1}}render(){return s.createElement(m,{onClick:()=>this.handleOnClick()},"\u590d\u5236\u7a7a\u964d\u94fe\u63a5")}}(0,n.Z)(f,"contextType",a.y)},64790:(e,t,i)=>{"use strict";i.d(t,{g:()=>B});var n=i(33385),o=i(73473),a=i.n(o),r=i(26243),s=i.n(r),l=i(62680),c=i.n(l),d=i(95366),h=i.n(d),u=i(6919),p=i.n(u),m=i(93364),g=i.n(m),b=i(26771),f=i.n(b),v=i(88686),y=i(52874),k=i(73935),w=i(59158),x=i(67294),S=i(60677),C=i(32699),L=i(48903),_=i(25498);function I(e,t){var i=s()(e);if(c()){var n=c()(e);t&&(n=n.filter((function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function E(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?I(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):p()?g()(e,p()(i)):I(Object(i)).forEach((function(t){f()(e,t,h()(i,t))}))}return e}const{color:A}=C.theme,D=(0,S["default"])(w.Button).attrs({className:"bilibili-helper-screenshot-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${A("bilibili-blue")};
  box-sizing: border-box;
  font-size: 12px;
  background-color: white;
  color: ${A("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${A("bilibili-blue")};
    color: white;
  }
`,O=(0,S["default"])(v.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    max-height: 500px;
    border-radius: 4px;
  }

  .button {
    padding: 0 10px;
  }
`,T=S["default"].div`
`,M=S["default"].div`
  .button:first-of-type, .button:nth-child(2) {
    margin-right: 8px;
  }
`,N=document.createElement("div");document.body.appendChild(N);class B extends x.Component{constructor(e){super(e),(0,n.Z)(this,"imgRef",x.createRef()),(0,n.Z)(this,"handleOnClick",()=>{(0,_.getCurrentFrame)().then(e=>{e?this.setState({imgSrc:e,showModal:!0}):window.postMessage({command:"showCheckHEVCModal"},"*")})}),(0,n.Z)(this,"handleOnCloseModal",()=>{this.setState({showModal:!1})}),(0,n.Z)(this,"handleOnCopyImage",()=>{this.setState({copying:!0}),(0,L.copyImage2Clipboard)(this.imgRef.current.src).then(e=>{this.setState({copying:!1}),v.Message.info(e?"\u590d\u5236\u6210\u529f":"\u590d\u5236\u5931\u8d25")})}),(0,n.Z)(this,"handleOnDownloadImage",()=>{new(a())(e=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},t=>{if(!t||!t.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoScreenshot",data:E(E({},this.props.videoInfo),{},{format:"jpeg"})},t=>{e(t||!1)})})}).then(e=>{const t=(0,L.getFilename)(document)+(new Date).toLocaleString()+".jpeg",i=document.createElement("a");i.setAttribute("target","__blank"),i.setAttribute("download",""+(e||t)),i.href=this.state.imgSrc,i.click(),this.setState({showModal:!1})})}),this.state={imgSrc:null,showModal:!1,copying:!1}}render(){const{copying:e}=this.state;return x.createElement(x.Fragment,null,x.createElement(D,{onClick:()=>this.handleOnClick()},"\u622a\u53d6\u753b\u9762"),k.createPortal(x.createElement(O,{open:this.state.showModal,className:"preview-modal",title:"\u89c6\u9891\u622a\u56fe\u9884\u89c8",onClickMask:this.handleOnCloseModal,buttons:x.createElement(M,null,x.createElement(w.Button,{className:"border",onClick:this.handleOnCloseModal},"\u5173\u95ed"),x.createElement(w.Button,{className:"primary",onClick:this.handleOnDownloadImage},"\u4e0b\u8f7d"),x.createElement(w.Button,{className:"primary",disabled:e,onClick:this.handleOnCopyImage},"\u590d\u5236"))},x.createElement(T,null,x.createElement("img",{ref:this.imgRef,className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),N))}}(0,n.Z)(B,"contextType",y.y)},71992:(e,t,i)=>{"use strict";var n=i(26243),o=i.n(n),a=i(27921),r=i.n(a),s=i(73473),l=i.n(s),c=i(18281),d=i.n(c),h=i(48903),u=i(25498);const p=function(e){(0,u.getNormalWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})},m=function(e){(0,u.getWebWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})},g=function(e){(0,u.getFullFillWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})},b=function(e){const t=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-volume button, .squirtle-volume .squirtle-volume-icon");t&&(e.stopPropagation(),t.click())},f=function(e){const t=document.querySelector(".bilibili-player-video-danmaku-switch .bui-switch-input, .bpx-player-dm-switch .bui-switch-input");t&&(e.stopPropagation(),t.click())};let v=!1;const y=function(e){const t=document.querySelector(".bilibili-player-video-btn-setting-left-videomirror .bui-switch-input,.squirtle-setting-mirror,.bilibili-player-video-btn-setting .bui-switch-input,.bpx-player-ctrl-setting-menu-left .bpx-player-ctrl-setting-mirror .bui-switch-input");if(t)e.stopPropagation(),t.click();else if(!v){var i,n;v=!0,null===(i=document.querySelector(".bilibili-player-video-btn-setting .bp-svgicon, .bpx-player-ctrl-btn-icon"))||void 0===i||i.dispatchEvent(new Event("mouseover",{bubbles:!0,cancelable:!1})),null===(n=document.querySelector(".bilibili-player-video-btn-setting .bp-svgicon, .bpx-player-ctrl-btn-icon"))||void 0===n||n.dispatchEvent(new Event("mouseout",{bubbles:!0,cancelable:!1})),y(e)}},k=function(){const e=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-pip, .squirtle-video-pip,.bpx-player-control-bottom-right .bpx-player-ctrl-pip");e&&e.click()},w=function(){const e=document.querySelector("#arc_toolbar_report .more-ops-list .ops-watch-later, .more_dropdown .ops-watch-later");e&&e.click()},x=()=>document.querySelector("#bilibiliPlayer .bilibili-player-video video, #bilibili-player video"),S=async()=>new(l())(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})}),C=async function(e){const t=await x();t?t.currentTime>0&&(e.preventDefault(),e.stopPropagation(),S().then(({playJumpChangeRange:e})=>{t.currentTime-=e})):window.postMessage({command:"showCheckHEVCModal"},"*")},L=async function(e){const t=await x();t?(e.preventDefault(),e.stopPropagation(),S().then(({playJumpChangeRange:e})=>{t.currentTime+=e})):window.postMessage({command:"showCheckHEVCModal"},"*")},_=async()=>new(l())(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})}),I=async function(e){await(0,h.injectScript)(`player?.setPlaybackRate(${e});`)},E=async function(e){const t=await(0,u.getVideoElement)();if(t){e.preventDefault(),e.stopPropagation();const t=(0,u.getSpeedBtn)(1);t?t.click():await I(1)}},A=4,D=async function(e){e.preventDefault(),e.stopPropagation();const t=await(0,u.getVideoElement)();t?(e.preventDefault(),e.stopPropagation(),_().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:i,bhAccount:n})=>{(!n||n&&!(0,h.isVIP)(n))&&(e=.25,i=!0);const o=i?4:A;if(t.playbackRate<o){let n;i?e=.25:t.playbackRate+e>=o&&(e=o-t.playbackRate),n=1.5===t.playbackRate&&i?t.playbackRate+.5:t.playbackRate+e,n=+n.toFixed(2);const a=(0,u.getSpeedBtn)(n);a&&n?a.click():I(n),(0,u.showPlaySpeedTip)(n)}})):window.postMessage({command:"showCheckHEVCModal"},"*")},O=async function(e){const t=await(0,u.getVideoElement)();t?t.playbackRate>.5&&(e.preventDefault(),e.stopPropagation(),_().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:i,bhAccount:n})=>{let o;(!n||n&&!(0,h.isVIP)(n))&&(e=.25,i=!0),i?e=.25:t.playbackRate-e<=.5&&(e=t.playbackRate-.5),o=2===t.playbackRate&&i?t.playbackRate-.5:t.playbackRate-e,o=+o.toFixed(2);const a=(0,u.getSpeedBtn)(o);a&&o?a.click():I(o),(0,u.showPlaySpeedTip)(o)})):window.postMessage({command:"showCheckHEVCModal"},"*")},T=async function(e){const t=await(0,u.getCurrentQuality)(),i=await(0,u.getVideoElement)();i?(e.preventDefault(),e.stopPropagation(),!isNaN(t)&&[116,74].includes(t)?i.currentTime-=1/60:i.currentTime-=1/30):window.postMessage({command:"showCheckHEVCModal"},"*")},M=async function(e){const t=await(0,u.getCurrentQuality)(),i=await(0,u.getVideoElement)();i?(e.preventDefault(),e.stopPropagation(),i&&!isNaN(t)&&[116,74].includes(t)?i.currentTime+=1/60:i.currentTime+=1/30):window.postMessage({command:"showCheckHEVCModal"},"*")};var N=i(13871),B=i(97465);const P={fillWiden:g,webWiden:m,normalWiden:p,mute:b,danmuToggle:f,mirrorToggle:y,pip:k,watchLater:w,previousFiveSeconds:C,nextFiveSeconds:L,resetPlaySpeed:E,addPlaySpeed:D,minusPlaySpeed:O,previousFrame:T,nextFrame:M,playPositionLink:N.k,copyScreenShot:B.Y},R=["TEXTAREA","INPUT"],Z=[".video-editor",".bili-note",".note-editor"],F={},q=()=>(Z.length>o()(F).length&&Z.forEach(e=>{if(!F[e]||0===F[e].length){const t=r()(document.querySelectorAll(e));t.length>0&&(F[e]=t)}}),F);(0,h.interval)("#bilibiliPlayer, .bpx-player, #bilibili-player",1e3).then(()=>new(l())((e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},i=>{i.on&&i.bilibiliHelperAccountLogin?chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},t=>{e(t)}):t()})})).then(e=>{const t=new(d())(e.map(([,e])=>[e[1],e[2]]));document.addEventListener("keydown",i=>{const{target:n,code:a,key:r,ctrlKey:s,shiftKey:l,altKey:c,metaKey:d}=i;if(R.includes(n.tagName))return;if(Z.length>0){const e=q();let t=!1;if(o()(e).forEach(i=>{const o=e[i];o.forEach(e=>{e.contains(n)&&(t=!0)})}),t)return}const u=(0,h.generateShortcutValue)(a,r,s,l,c,d);if(!u||!t.has(u)||!t.get(u))return;const p=e.find(([,e])=>{const[,t]=e;return""!==t&&t===u});if(!p)return;const m=P[p[0]];return m?m(i):void 0},!0)}).catch(e=>e)},68399:(e,t,i)=>{"use strict";i.d(t,{J:()=>p});var n=i(47874),o=i(33385),a=i(18281),r=i.n(a),s=i(27921),l=i.n(s),c=i(69759),d=i(48903);const h=869==i.j?["states","bhAccount","bilibiliAccount","bilibiliHelperAccountLogin"]:null,u=869==i.j?[["normalWiden",["\u5bbd\u5c4f","t",!0]],["webWiden",["\u7f51\u9875\u5168\u5c4f","y",!0]],["fillWiden",["\u5168\u5c4f","f",!0]],["mute",["\u9759\u97f3","m",!0]],["danmuToggle",["\u5f39\u5e55\u5f00\u5173","d",!0]],["mirrorToggle",["\u955c\u50cf\u5f00\u5173","n",!0]],["pip",["\u753b\u4e2d\u753b","p",!0]],["watchLater",["\u7a0d\u540e\u518d\u770b","b",!0]],["playPositionLink",["\u590d\u5236\u7a7a\u964d\u94fe\u63a5","c",!0]],["copyScreenShot",["\u590d\u5236\u622a\u56fe\u81f3\u526a\u5207\u677f","s",!0]],["previousFiveSeconds",["\u8df3\u8f6c\u5230\u51e0\u79d2\u524d",",",!0]],["nextFiveSeconds",["\u8df3\u8f6c\u5230\u51e0\u79d2\u540e",".",!0]],["resetPlaySpeed",["\u91cd\u7f6e\u64ad\u653e\u901f\u5ea6","x",!0]],["addPlaySpeed",["\u589e\u52a0\u64ad\u653e\u901f\u5ea6","Shift + ArrowUp",!0]],["minusPlaySpeed",["\u51cf\u5c0f\u64ad\u653e\u901f\u5ea6","Shift + ArrowDown",!0]],["previousFrame",["\u9010\u5e27\u5411\u524d\u8c03\u6574","Shift + ArrowLeft",!0]],["nextFrame",["\u9010\u5e27\u5411\u540e\u8c03\u6574","Shift + ArrowRight",!0]]]:null;class p extends(869==i.j?c.Feature:null){constructor(e){super(e,"videoShortcuts",{settings:{on:!0,playSpeedChangeRange:.25,playJumpChangeRange:5,useDefaultSpeedChangeRange:!1}}),(0,o.Z)(this,"states",{}),(0,o.Z)(this,"hasLogin",!1),(0,o.Z)(this,"bilibiliAccount",null),(0,o.Z)(this,"bhAccount",null),(0,o.Z)(this,"onBeforeLaunch",async()=>{this.addListener("getShortcuts",this.getShortcuts),this.addListener("setShortcut",this.setShortcut),this.addListener("reset",this.reset),await this.emit("bilibiliHelperAccountController","getStatus",null,({bhAccount:e,hasLogin:t,bilibiliAccount:i})=>{this.hasLogin=t,this.bhAccount=e,this.bilibiliAccount=i,this.settings.bhAccount=this.bhAccount,this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin})}),(0,o.Z)(this,"initShortcuts",()=>{let e=this.getStore("shortcuts");e?(this.store=new(r())(u),e=e.filter(([e])=>{const t=u.find(([t])=>t===e);return!!t}),e.forEach(([e,t])=>{"webWiden"===e&&"w"===t[1]&&(t=["\u7f51\u9875\u5168\u5c4f","y"]),void 0===t[2]&&(t[2]=!0),this.store.set(e,t)}),this.setStore("shortcuts",this.store)):(this.store=new(r())(u),this.setStore("shortcuts",this.store))}),(0,o.Z)(this,"getShortcuts",(e,t,i)=>{i(l()(this.store))}),(0,o.Z)(this,"setShortcut",(e,t,i)=>{const{key:n,value:o,on:a}=e;if(this.store.has(n)){const e=this.store.get(n);e[1]=void 0!==o?o:e[1],e[2]=void 0!==a?a:e[2],this.setStore("shortcuts",this.store)}i(!0)}),(0,o.Z)(this,"reset",(e,t,i)=>{this.store=new(r())(u),this.setStore("shortcuts",this.store),i&&i()}),(0,o.Z)(this,"onAfterSetSettingsFromCloud",()=>{this.initShortcuts(),this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin}),(0,o.Z)(this,"getSettingsForUpload",async(e,t,i)=>{const o=this.settings,{states:a,bhAccount:r,bilibiliAccount:s,bilibiliHelperAccountLogin:l}=o,c=(0,n.Z)(o,h);i({settings:this.simplifyConfig(c),stores:{shortcuts:this.getStore("shortcuts")}})})}async onInitStore(){this.initShortcuts()}async onLaunch(){}async onBHAccountChange(e){await super.onBHAccountChange(e),this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin,this.bhAccount&&(0,d.isVIP)(this.bhAccount)||this.reset()}}},98810:(e,t,i)=>{"use strict";i.d(t,{v:()=>m});var n=i(33385),o=i(23279),a=i.n(o),r=i(13311),s=i.n(r),l=i(41609),c=i.n(l),d=i(18281),h=i.n(d),u=i(69759),p=i(48903);class m extends(869==i.j?u.Feature:null){constructor(e){super(e,"watchLater",{settings:{on:!0}}),(0,n.Z)(this,"currentList",new(h())),(0,n.Z)(this,"hasLogin",!1),(0,n.Z)(this,"bilibiliAccount",null),(0,n.Z)(this,"refreshCSRF",async()=>this.emit("cookieController","get",{url:"http://www.bilibili.com",name:"bili_jct"},e=>e)),(0,n.Z)(this,"onBeforeSendHeadersCallback",e=>{const{initiator:t,requestHeaders:i,tabId:n}=e,o=!c()(s()(i,({name:e,value:t})=>"from"===e.toLowerCase()&&t.toLowerCase().includes("bilibili_helper_2"))),a=!c()(s()(i,({name:e})=>e.match("bilibili-helper-header-action")));if((/^chrome-extension:\/\//.test(t)||-1===n)&&o&&"https://www.bilibili.com"!==t&&a){const e=[...i],t=e.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e.toLowerCase());if(t>-1){const i=e.find(({name:e})=>"origin"===e.toLowerCase());i?i.value="https://www.bilibili.com":e.push({name:"Origin",value:e[t].value}),e.splice(t,1)}return{requestHeaders:e}}return{requestHeaders:i}}),(0,n.Z)(this,"bilibiliWatchLaterWatcher",(0,p.webRequestCallbackWrapper)(e=>{this.updateWatchLaterList()})),(0,n.Z)(this,"getList",(e,t,i)=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/web",options:{contentType:"json",controlPassword:"updateWatchLater"}},({data:e={}})=>{0===e.code&&(e.data.list&&e.data.list.length>0?(e.data.list.map(e=>{this.currentList.set(e.aid,e)}),e.data.list=e.data.list.map(e=>({videoInfo:{aid:e.aid,bvid:e.bvid,cid:e.cid,cover:e.pic.replace("http://","https://"),duration:(0,p.parseTime)(1e3*e.duration),description:e.desc,tagName:e.tname,url:e.uri,shortLink:e.short_link_v2,title:e.title,publishDate:e.pubdate?(0,p.videoPublishDescription)(1e3*e.pubdate):""},userInfo:{name:e.owner.name,uid:e.owner.mid,face:e.owner.face}})),i(e.data.list)):(this.currentList.clear(),i(!1)))})}),(0,n.Z)(this,"queryVideoInWatchLaterList",(e,t,i)=>{e.aid?i(this.currentList.has(e.aid)):i(!1)}),(0,n.Z)(this,"setWatchLater",async(e,t,i)=>{const{aid:n}=e;this.currentList.has(n)&&i(!0);const o=await this.refreshCSRF(),a=new FormData;a.append("csrf",o),a.append("aid",n);const r=new Headers;r.append("bilibili-helper-header-action-set-origin","https://www.bilibili.com"),this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/add",options:{method:"post",credential:"include",headers:r,body:a,contentType:"json"}},async({data:e})=>{e&&0===e.code?(this.updateWatchLaterList(),i(!0)):e&&90005===e.code?i("notSupport"):i(!1)})}),(0,n.Z)(this,"removeWatchLater",async(e,t,i)=>{const{aid:n}=e;this.currentList.has(n)&&i(!0);const o=await this.refreshCSRF(),a=new FormData;a.append("csrf",o),a.append("aid",n);const r=new Headers;r.append("bilibili-helper-header-action-set-origin","https://www.bilibili.com"),this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/del",options:{method:"post",credential:"include",headers:r,body:a,contentType:"json"}},async({data:e})=>{e&&0===e.code?(this.updateWatchLaterList(),i(!0)):i(!1)})}),(0,n.Z)(this,"updateWatchLaterList",a()(()=>{this.emit("requestController","cancel",{controlPassword:"updateWatchLater"}),this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/web",options:{contentType:"json",controlPassword:"updateWatchLater"}},({data:e={}})=>{0===e.code&&(e.data.list&&e.data.list.length>0?e.data.list.map(e=>{this.currentList.set(e.aid,e)}):this.currentList.clear())})},1e3))}async onBeforeLaunch(){this.addListener("update",this.updateWatchLaterList),this.addListener("set",this.setWatchLater),this.addListener("remove",this.removeWatchLater),this.addListener("query",this.queryVideoInWatchLaterList),this.addListener("getList",this.getList)}async onLaunch(){let e=navigator.userAgent;const t=["blocking","requestHeaders"];-1!==e.indexOf("Chrome/")&&(0,p.getChromeVersion)()>72&&t.push("extraHeaders"),this.updateWatchLaterList(),this.emit("webRequestController","create",{name:"watchLater",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/v2/history/toview/add?*","*://api.bilibili.com/x/v2/history/toview/del?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.onBeforeSendHeadersCallback}),this.emit("webRequestController","create",{name:"watchLaterFromBilibili",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/v2/history/toview*"]},options:["requestHeaders"],callback:this.bilibiliWatchLaterWatcher})}async onBHAccountChange(e){await super.onBHAccountChange(e),this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||this.pause()}}},74539:(e,t,i)=>{var n=i(8450),o=i(79529);(function(){var e,t,i,n=this||self,o=function(e,t){e=e.split(".");var i,o=n;e[0]in o||"undefined"==typeof o.execScript||o.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)e.length||void 0===t?o=o[i]&&o[i]!==Object.prototype[i]?o[i]:o[i]={}:o[i]=t},a=function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])},r=function(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1},s=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,l=window,c=document,d=function(e,t){c.addEventListener?c.addEventListener(e,t,!1):c.attachEvent&&c.attachEvent("on"+e,t)},h={},u=function(){h.TAGGING=h.TAGGING||[],h.TAGGING[1]=!0},p=/:[0-9]+$/,m=function(e,t,i){e=e.split("&");for(var n=0;n<e.length;n++){var o=e[n].split("=");if(decodeURIComponent(o[0]).replace(/\+/g," ")===t)return t=o.slice(1).join("="),i?t:decodeURIComponent(t).replace(/\+/g," ")}},g=function(e,t){return t&&(t=String(t).toLowerCase()),"protocol"!==t&&"port"!==t||(e.protocol=f(e.protocol)||f(l.location.protocol)),"port"===t?e.port=String(Number(e.hostname?e.port:l.location.port)||("http"==e.protocol?80:"https"==e.protocol?443:"")):"host"===t&&(e.hostname=(e.hostname||l.location.hostname).replace(p,"").toLowerCase()),b(e,t,void 0,void 0,void 0)},b=function(e,t,i,n,o){var a=f(e.protocol);switch(t&&(t=String(t).toLowerCase()),t){case"url_no_fragment":n="",e&&e.href&&(n=e.href.indexOf("#"),n=0>n?e.href:e.href.substr(0,n)),e=n;break;case"protocol":e=a;break;case"host":e=e.hostname.replace(p,"").toLowerCase(),i&&(n=/^www\d*\./.exec(e))&&n[0]&&(e=e.substr(n[0].length));break;case"port":e=String(Number(e.port)||("http"==a?80:"https"==a?443:""));break;case"path":e.pathname||e.hostname||u(),e="/"==e.pathname.substr(0,1)?e.pathname:"/"+e.pathname,e=e.split("/");e:if(n=n||[],i=e[e.length-1],Array.prototype.indexOf)n=n.indexOf(i),n="number"==typeof n?n:-1;else{for(o=0;o<n.length;o++)if(n[o]===i){n=o;break e}n=-1}0<=n&&(e[e.length-1]=""),e=e.join("/");break;case"query":e=e.search.replace("?",""),o&&(e=m(e,o,void 0));break;case"extension":e=e.pathname.split("."),e=1<e.length?e[e.length-1]:"",e=e.split("/")[0];break;case"fragment":e=e.hash.replace("#","");break;default:e=e&&e.href}return e},f=function(e){return e?e.replace(":","").toLowerCase():""},v=function(e){var t=c.createElement("a");e&&(t.href=e);var i=t.pathname;return"/"!==i[0]&&(e||u(),i="/"+i),e=t.hostname.replace(p,""),{href:t.href,protocol:t.protocol,host:t.host,hostname:e,pathname:i,search:t.search,hash:t.hash,port:t.port}};function y(){for(var t=e,i={},n=0;n<t.length;++n)i[t[n]]=n;return i}function k(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return e+=e.toLowerCase()+"0123456789-_",e+"."}function w(i){e=e||k(),t=t||y();for(var n=[],o=0;o<i.length;o+=3){var a=o+1<i.length,r=o+2<i.length,s=i.charCodeAt(o),l=a?i.charCodeAt(o+1):0,c=r?i.charCodeAt(o+2):0,d=s>>2;s=(3&s)<<4|l>>4,l=(15&l)<<2|c>>6,c&=63,r||(c=64,a||(l=64)),n.push(e[d],e[s],e[l],e[c])}return n.join("")}function x(i){function n(e){for(;a<i.length;){var n=i.charAt(a++),o=t[n];if(null!=o)return o;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}e=e||k(),t=t||y();for(var o="",a=0;;){var r=n(-1),s=n(0),l=n(64),c=n(64);if(64===c&&-1===r)return o;o+=String.fromCharCode(r<<2|s>>4),64!=l&&(o+=String.fromCharCode(s<<4&240|l>>2),64!=c&&(o+=String.fromCharCode(l<<6&192|c)))}}var S=function(){var e=j,t=U,i=_(),n=function(t){e(t.target||t.srcElement||{})},o=function(e){t(e.target||e.srcElement||{})};if(!i.init){d("mousedown",n),d("keyup",n),d("submit",o);var a=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){t(this),a.call(this)},i.init=!0}},C=function(e,t,i,n,o){e={callback:e,domains:t,fragment:2===i,placement:i,forms:n,sameHost:o},_().decorators.push(e)},L=function(e,t,i){for(var n=_().decorators,o={},r=0;r<n.length;++r){var s,l=n[r];if(s=!i||l.forms)e:{s=l.domains;var d=e,h=!!l.sameHost;if(s&&(h||d!==c.location.hostname))for(var u=0;u<s.length;u++)if(s[u]instanceof RegExp){if(s[u].test(d)){s=!0;break e}}else if(0<=d.indexOf(s[u])||h&&0<=s[u].indexOf(d)){s=!0;break e}s=!1}s&&(s=l.placement,void 0==s&&(s=l.fragment?2:1),s===t&&a(o,l.callback()))}return o},_=function(){var e={},t=l.google_tag_data;return l.google_tag_data=void 0===t?e:t,e=l.google_tag_data,t=e.gl,t&&t.decorators||(t={decorators:[]},e.gl=t),t},I=/(.*?)\*(.*?)\*(.*)/,E=/([^?#]+)(\?[^#]*)?(#.*)?/;function A(e){return new RegExp("(.*?)(^|&)"+e+"=([^&]*)&?(.*)")}var D=function(e){var t,i=[];for(t in e)if(e.hasOwnProperty(t)){var n=e[t];void 0!==n&&n===n&&null!==n&&"[object Object]"!==n.toString()&&(i.push(t),i.push(w(String(n))))}return e=i.join("*"),["1",O(e),e].join("*")},O=function(e,t){if(e=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1e3)-(void 0===t?0:t),e].join("*"),!(t=i)){t=Array(256);for(var n=0;256>n;n++){for(var o=n,a=0;8>a;a++)o=1&o?o>>>1^3988292384:o>>>1;t[n]=o}}for(i=t,t=4294967295,n=0;n<e.length;n++)t=t>>>8^i[255&(t^e.charCodeAt(n))];return((-1^t)>>>0).toString(36)},T=function(e){return function(t){var i=v(l.location.href),n=i.search.replace("?",""),o=m(n,"_gl",!0);t.query=B(o||"")||{},o=g(i,"fragment");var a=o.match(A("_gl"));t.fragment=B(a&&a[3]||"")||{},e&&N(i,n,o)}};function M(e,t){if(e=A(e).exec(t)){var i=e[2],n=e[4];t=e[1],n&&(t=t+i+n)}return t}var N=function(e,t,i){function n(e,t){return e=M("_gl",e),e.length&&(e=t+e),e}if(l.history&&l.history.replaceState){var o=A("_gl");(o.test(t)||o.test(i))&&(e=g(e,"path"),t=n(t,"?"),i=n(i,"#"),l.history.replaceState({},void 0,""+e+t+i))}},B=function(e){var t=void 0===t?3:t;try{if(e){e:{for(var i=0;3>i;++i){var n=I.exec(e);if(n){var o=n;break e}e=decodeURIComponent(e)}o=void 0}if(o&&"1"===o[1]){var a=o[2],r=o[3];e:{for(o=0;o<t;++o)if(a===O(r,o)){var s=!0;break e}s=!1}if(s){t={};var l=r?r.split("*"):[];for(r=0;r<l.length;r+=2)t[l[r]]=x(l[r+1]);return t}}}}catch(c){}};function P(e,t,i,n){function o(t){t=M(e,t);var i=t.charAt(t.length-1);return t&&"&"!==i&&(t+="&"),t+s}n=void 0!==n&&n;var a=E.exec(i);if(!a)return"";i=a[1];var r=a[2]||"";a=a[3]||"";var s=e+"="+t;return n?a="#"+o(a.substring(1)):r="?"+o(r.substring(1)),""+i+r+a}function R(e,t){var i="FORM"===(e.tagName||"").toUpperCase(),n=L(t,1,i),o=L(t,2,i);for(var a in t=L(t,3,i),r(n)&&(n=D(n),i?q("_gl",n,e):F("_gl",n,e,!1)),!i&&r(o)&&(i=D(o),F("_gl",i,e,!0)),t)t.hasOwnProperty(a)&&Z(a,t[a],e)}function Z(e,t,i,n){if(i.tagName){if("a"===i.tagName.toLowerCase())return F(e,t,i,n);if("form"===i.tagName.toLowerCase())return q(e,t,i)}if("string"==typeof i)return P(e,t,i,n)}function F(e,t,i,n){i.href&&(e=P(e,t,i.href,void 0!==n&&n),s.test(e)&&(i.href=e))}function q(e,t,i){if(i&&i.action){var n=(i.method||"").toLowerCase();if("get"===n){n=i.childNodes||[];for(var o=!1,a=0;a<n.length;a++){var r=n[a];if(r.name===e){r.setAttribute("value",t),o=!0;break}}o||(n=c.createElement("input"),n.setAttribute("type","hidden"),n.setAttribute("name",e),n.setAttribute("value",t),i.appendChild(n))}else"post"===n&&(e=P(e,t,i.action),s.test(e)&&(i.action=e))}}var j=function(e){try{e:{for(var t=100;e&&0<t;){if(e.href&&e.nodeName.match(/^a(?:rea)?$/i)){var i=e;break e}e=e.parentNode,t--}i=null}if(i){var n=i.protocol;"http:"!==n&&"https:"!==n||R(i,i.hostname)}}catch(o){}},U=function(e){try{if(e.action){var t=g(v(e.action),"host");R(e,t)}}catch(i){}};o("google_tag_data.glBridge.auto",(function(e,t,i,n){S(),C(e,t,"fragment"===i?2:1,!!n,!1)})),o("google_tag_data.glBridge.passthrough",(function(e,t,i){S(),C(e,[b(l.location,"host",!0)],t,!!i,!0)})),o("google_tag_data.glBridge.decorate",(function(e,t,i){return e=D(e),Z("_gl",e,t,!!i)})),o("google_tag_data.glBridge.generate",D),o("google_tag_data.glBridge.get",(function(e,t){var i=T(!!t);return t=_(),t.data||(t.data={query:{},fragment:{}},i(t.data)),i={},(t=t.data)&&(a(i,t.query),e&&a(i,t.fragment)),i}))})(window),function(){function e(e){var t,i=1;if(e)for(i=0,t=e.length-1;0<=t;t--){var n=e.charCodeAt(t);i=(i<<6&268435455)+n+(n<<14),n=266338304&i,i=0!=n?i^n>>21:i}return i}var t=function(e){this.C=e||[]};t.prototype.set=function(e){this.C[e]=!0},t.prototype.encode=function(){for(var e=[],t=0;t<this.C.length;t++)this.C[t]&&(e[Math.floor(t/6)]^=1<<t%6);for(t=0;t<e.length;t++)e[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t]||0);return e.join("")+"~"};var i,a,r=window.GoogleAnalyticsObject;if((i=void 0!=r)&&(i=-1<(r.constructor+"").indexOf("String")),a=i){var s=window.GoogleAnalyticsObject;a=s?s.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""}var l=a||"ga",c=/^(?:utma\.)?\d+\.\d+$/,d=/^amp-[\w.-]{22,64}$/,h=!1,u=new t;function p(e){u.set(e)}var m=function(e){e=g(e),e=new t(e);for(var i=u.C.slice(),n=0;n<e.C.length;n++)i[n]=i[n]||e.C[n];return new t(i).encode()},g=function(e){return e=e.get(Wt),f(e)||(e=[]),e},b=function(e){return"function"==typeof e},f=function(e){return"[object Array]"==Object.prototype.toString.call(Object(e))},v=function(e){return void 0!=e&&-1<(e.constructor+"").indexOf("String")},y=function(e,t){return 0==e.indexOf(t)},k=function(e){return e?e.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},w=function(){for(var t=q.navigator.userAgent+(j.cookie?j.cookie:"")+(j.referrer?j.referrer:""),i=t.length,n=q.history.length;0<n;)t+=n--^i++;return[Oe()^2147483647&e(t),Math.round((new Date).getTime()/1e3)].join(".")},x=function(e){var t=j.createElement("img");return t.width=1,t.height=1,t.src=e,t},S=function(){},C=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(p(28),e)},L=function(e,t,i,n){try{e.addEventListener?e.addEventListener(t,i,!!n):e.attachEvent&&e.attachEvent("on"+t,i)}catch(o){p(27)}},_=/^[\w\-:/.?=&%!\[\]]+$/,I=/^[\w+/_-]+[=]{0,2}$/,E=function(e,t,i){if(e){var n=j.querySelector&&j.querySelector("script[nonce]")||null;if(n=n&&(n.nonce||n.getAttribute&&n.getAttribute("nonce"))||"",i){var o=i="";t&&_.test(t)&&(i=' id="'+t+'"'),n&&I.test(n)&&(o=' nonce="'+n+'"'),_.test(e)&&j.write("<script"+i+o+' src="'+e+'"><\/script>')}else i=j.createElement("script"),i.type="text/javascript",i.async=!0,i.src=e,t&&(i.id=t),n&&i.setAttribute("nonce",n),e=j.getElementsByTagName("script")[0],e.parentNode.insertBefore(i,e)}},A=function(e,t){return D(j.location[t?"href":"search"],e)},D=function(e,t){return(e=e.match("(?:&|#|\\?)"+C(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==e.length?e[1]:""},O=function(){var e=""+j.location.hostname;return 0==e.indexOf("www.")?e.substring(4):e},T=function(e,t){var i=e.indexOf(t);return(5==i||6==i)&&(e=e.charAt(i+t.length),"/"==e||"?"==e||""==e||":"==e)},M=function(e,t){var i=j.referrer;if(/^(https?|android-app):\/\//i.test(i)){if(e)return i;if(e="//"+j.location.hostname,!T(i,e))return t&&(t=e.replace(/\./g,"-")+".cdn.ampproject.org",T(i,t))?void 0:i}},N=function(e,t){if(1==t.length&&null!=t[0]&&"object"===typeof t[0])return t[0];for(var i={},n=Math.min(e.length+1,t.length),o=0;o<n;o++){if("object"===typeof t[o]){for(var a in t[o])t[o].hasOwnProperty(a)&&(i[a]=t[o][a]);break}o<e.length&&(i[e[o]]=t[o])}return i},B=function(){this.b=[],this.ea={},this.m={}};B.prototype.set=function(e,t,i){this.b.push(e),i?this.m[":"+e]=t:this.ea[":"+e]=t},B.prototype.get=function(e){return this.m.hasOwnProperty(":"+e)?this.m[":"+e]:this.ea[":"+e]},B.prototype.map=function(e){for(var t=0;t<this.b.length;t++){var i=this.b[t],n=this.get(i);n&&e(i,n)}};var P,R,Z,F,q=window,j=document,U=function(e,t){return setTimeout(e,t)},H=window,$=document,V=function(e){var t=H._gaUserPrefs;if(t&&t.ioo&&t.ioo()||e&&!0===H["ga-disable-"+e])return!0;try{var i=H.external;if(i&&i._gaUserPrefs&&"oo"==i._gaUserPrefs)return!0}catch(a){}for(e=[],t=String($.cookie).split(";"),i=0;i<t.length;i++){var n=t[i].split("="),o=n[0].replace(/^\s*|\s*$/g,"");o&&"AMP_TOKEN"==o&&((n=n.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&(n=decodeURIComponent(n)),e.push(n))}for(t=0;t<e.length;t++)if("$OPT_OUT"==e[t])return!0;return!!$.getElementById("__gaOptOutExtension")},W=function(e){var t=[],i=j.cookie.split(";");e=new RegExp("^\\s*"+e+"=\\s*(.*?)\\s*$");for(var n=0;n<i.length;n++){var o=i[n].match(e);o&&t.push(o[1])}return t},z=function(e,t,i,n,o,a,r){if(o=!V(o)&&!(Q.test(j.location.hostname)||"/"==i&&J.test(n)),!o)return!1;if(t&&1200<t.length&&(t=t.substring(0,1200)),i=e+"="+t+"; path="+i+"; ",a&&(i+="expires="+new Date((new Date).getTime()+a).toGMTString()+"; "),n&&"none"!==n&&(i+="domain="+n+";"),r&&(i+=r+";"),n=j.cookie,j.cookie=i,!(n=n!=j.cookie))e:{for(e=W(e),n=0;n<e.length;n++)if(t==e[n]){n=!0;break e}n=!1}return n},G=function(e){return encodeURIComponent?encodeURIComponent(e).replace(/\(/g,"%28").replace(/\)/g,"%29"):e},J=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Q=/(^|\.)doubleclick\.net$/i,Y=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,X=/^(?:www\.|m\.|amp\.)+/,K=[],ee=function(e){if(se(e[Mi])){var t;if(void 0===F)(t=(t=_n.get())&&t._ga||void 0)&&(F=t,p(81));if(void 0!==F)return e[ui]||(e[ui]=F),!1}if(e[Mi]){if(p(67),e[Li]&&"cookie"!=e[Li])return!1;if(void 0!==F)e[ui]||(e[ui]=F);else{e:{t=String(e[vi]||O());var i=String(e[yi]||"/"),n=W(String(e[fi]||"_ga"));if(t=bn(n,t,i),!t||c.test(t))t=!0;else if(t=W("AMP_TOKEN"),0==t.length)t=!0;else{if(1==t.length&&(t=decodeURIComponent(t[0]),"$RETRIEVING"==t||"$OPT_OUT"==t||"$ERROR"==t||"$NOT_FOUND"==t)){t=!0;break e}t=!1}}if(t&&ie(te,String(e[bi])))return!0}}return!1},te=function(){Io.D([S])},ie=function(e,t){var i=W("AMP_TOKEN");return 1<i.length?(p(55),!1):(i=decodeURIComponent(i[0]||""),"$OPT_OUT"==i||"$ERROR"==i||V(t)?(p(62),!1):Y.test(j.referrer)||"$NOT_FOUND"!=i?void 0!==F?(p(56),U((function(){e(F)}),0),!0):P?(K.push(e),!0):"$RETRIEVING"==i?(p(57),U((function(){ie(e,t)}),1e4),!0):(P=!0,i&&"$"!=i[0]||(ae("$RETRIEVING",3e4),setTimeout(oe,3e4),i=""),!!ne(i,t)&&(K.push(e),!0)):(p(68),!1))},ne=function(e,t,i){if(!window.JSON)return p(58),!1;var o=q.XMLHttpRequest;if(!o)return p(59),!1;var a=new o;return"withCredentials"in a?(a.open("POST",(i||"https://ampcid.google.com/v1/publisher:getClientId")+"?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",!0),a.withCredentials=!0,a.setRequestHeader("Content-Type","text/plain"),a.onload=function(){if(P=!1,4==a.readyState){try{200!=a.status&&(p(61),re("","$ERROR",3e4));var n=JSON.parse(a.responseText);n.optOut?(p(63),re("","$OPT_OUT",31536e6)):n.clientId?re(n.clientId,n.securityToken,31536e6):!i&&n.alternateUrl?(R&&clearTimeout(R),P=!0,ne(e,t,n.alternateUrl)):(p(64),re("","$NOT_FOUND",36e5))}catch(o){p(65),re("","$ERROR",3e4)}a=null}},o={originScope:"AMP_ECID_GOOGLE"},e&&(o.securityToken=e),a.send(n(o)),R=U((function(){p(66),re("","$ERROR",3e4)}),1e4),!0):(p(60),!1)},oe=function(){P=!1},ae=function(e,t){if(void 0===Z){Z="";for(var i=yn(),n=0;n<i.length;n++){var o=i[n];if(z("AMP_TOKEN",encodeURIComponent(e),"/",o,"",t))return void(Z=o)}}z("AMP_TOKEN",encodeURIComponent(e),"/",Z,"",t)},re=function(e,t,i){for(R&&clearTimeout(R),t&&ae(t,i),F=e,t=K,K=[],i=0;i<t.length;i++)t[i](e)},se=function(e){e:{if(Y.test(j.referrer)){var t=j.location.hostname.replace(X,"");t:{var i=j.referrer;i=i.replace(/^https?:\/\//,"");var n=i.replace(/^[^/]+/,"").split("/"),o=n[2];if(n=(n="s"==o?n[3]:o)?decodeURIComponent(n):n,!n){if(0==i.indexOf("xn--")){i="";break t}(i=i.match(/(.*)\.cdn\.ampproject\.org\/?$/))&&2==i.length&&(n=i[1].replace(/-/g,".").replace(/\.\./g,"-"))}i=n?n.replace(X,""):""}if((n=t===i)||(i="."+i,n=t.substring(t.length-i.length,t.length)===i),n){t=!0;break e}p(78)}t=!1}return t&&!1!==e},le=function(e){return(e||h||"https:"==j.location.protocol?"https:":"http:")+"//www.google-analytics.com"},ce=function(e){switch(e){default:case 1:return"https://www.google-analytics.com/gtm/js?id=";case 2:return"https://www.googletagmanager.com/gtag/js?id="}},de=function(e){this.name="len",this.message=e+"-8192"},he=function(e,t,i){if(i=i||S,2036>=t.length)pe(e,t,i);else{if(!(8192>=t.length))throw ve("len",t.length),new de(t.length);fe(e,t,i)||me(e,t,i)||pe(e,t,i)}},ue=function(e,t,i,n){n=n||S,me(e+"?"+t,"",n,i)},pe=function(e,t,i){var n=x(e+"?"+t);n.onload=n.onerror=function(){n.onload=null,n.onerror=null,i()}},me=function(e,t,i,n){var o=q.XMLHttpRequest;if(!o)return!1;var a=new o;return"withCredentials"in a&&(e=e.replace(/^http:/,"https:"),a.open("POST",e,!0),a.withCredentials=!0,a.setRequestHeader("Content-Type","text/plain"),a.onreadystatechange=function(){if(4==a.readyState){if(n&&"text/plain"===a.getResponseHeader("Content-Type"))try{ge(n,a.responseText,i)}catch(e){ve("xhr","rsp"),i()}else i();a=null}},a.send(t),!0)},ge=function(e,t,i){if(1>t.length)ve("xhr","ver","0"),i();else if(3<e.count++)ve("xhr","tmr",""+e.count),i();else{var n=t.charAt(0);if("1"===n)be(e,t.substring(1),i);else if(e.V&&"2"===n){var o=t.substring(1).split(","),a=0;for(t=function(){++a===o.length&&i()},n=0;n<o.length;n++)be(e,o[n],t)}else ve("xhr","ver",String(t.length)),i()}},be=function(e,t,i){if(0===t.length)i();else{var n=t.charAt(0);switch(n){case"d":ue("https://stats.g.doubleclick.net/j/collect",e.U,e,i);break;case"g":pe("https://www.google.%/ads/ga-audiences".replace("%","com"),e.google,i),(t=t.substring(1))&&(/^[a-z.]{1,6}$/.test(t)?pe("https://www.google.%/ads/ga-audiences".replace("%",t),e.google,S):ve("tld","bcc",t));break;case"G":if(e.V){e.V("G-"+t.substring(1)),i();break}case"x":if(e.V){e.V(),i();break}default:ve("xhr","brc",n),i()}}},fe=function(e,t,i){return!!q.navigator.sendBeacon&&(!!q.navigator.sendBeacon(e,t)&&(i(),!0))},ve=function(e,t,i){1<=100*Math.random()||V("?")||(e=["t=error","_e="+e,"_v=j87","sr=1"],t&&e.push("_f="+t),i&&e.push("_m="+C(i.substring(0,100))),e.push("aip=1"),e.push("z="+Oe()),pe(le(!0)+"/u/d",e.join("&"),S))},ye=function(){return q.gaData=q.gaData||{}},ke=function(e){var t=ye();return t[e]=t[e]||{}},we=function(){this.M=[]};function xe(t){if(100!=t.get(Ei)&&e(Be(t,ui))%1e4>=100*Pe(t,Ei))throw"abort"}function Se(e){if(V(Be(e,bi)))throw"abort"}function Ce(){var e=j.location.protocol;if("http:"!=e&&"https:"!=e)throw"abort"}function Le(e){try{q.navigator.sendBeacon?p(42):q.XMLHttpRequest&&"withCredentials"in new q.XMLHttpRequest&&p(40)}catch(i){}e.set(Vt,m(e),!0),e.set(tt,Pe(e,tt)+1);var t=[];Ze.map((function(i,n){n.F&&(i=e.get(i),void 0!=i&&i!=n.defaultValue&&("boolean"==typeof i&&(i*=1),t.push(n.F+"="+C(""+i))))})),!1===e.get(Qi)&&t.push("npa=1"),t.push("z="+Te()),e.set(Xe,t.join("&"),!0)}function _e(e){var t=Be(e,et);!t&&e.get(Ke)&&(t="beacon");var i=Be(e,$i),n=Be(e,Fi),o=i||(n||le(!1)+"")+"/collect";switch(Be(e,Gi)){case"d":o=i||(n||le(!1)+"")+"/j/collect",t=e.get(zi)||void 0,ue(o,Be(e,Xe),t,e.Z(Ye));break;default:t?(i=Be(e,Xe),n=(n=e.Z(Ye))||S,"image"==t?pe(o,i,n):"xhr"==t&&me(o,i,n)||"beacon"==t&&fe(o,i,n)||he(o,i,n)):he(o,Be(e,Xe),e.Z(Ye))}o=Be(e,bi),o=ke(o),t=o.hitcount,o.hitcount=t?t+1:1,o.first_hit||(o.first_hit=(new Date).getTime()),o=Be(e,bi),delete ke(o).pending_experiments,e.set(Ye,S,!0)}function Ie(e){ye().expId&&e.set(Bt,ye().expId),ye().expVar&&e.set(Pt,ye().expVar);var t=Be(e,bi);if(t=ke(t).pending_experiments){var i=[];for(n in t)t.hasOwnProperty(n)&&t[n]&&i.push(encodeURIComponent(n)+"."+encodeURIComponent(t[n]));var n=i.join("!")}else n=void 0;n&&((t=e.get(Rt))&&(n=t+"!"+n),e.set(Rt,n,!0))}function Ee(){if(q.navigator&&"preview"==q.navigator.loadPurpose)throw"abort"}function Ae(e){var t=q.gaDevIds||[];if(f(t)){var i=e.get("&did");v(i)&&0<i.length&&(t=t.concat(i.split(","))),i=[];for(var n=0;n<t.length;n++){var o;e:{for(o=0;o<i.length;o++)if(t[n]==i[o]){o=!0;break e}o=!1}o||i.push(t[n])}0!=i.length&&e.set("&did",i.join(","),!0)}}function De(e){if(!e.get(bi))throw"abort"}we.prototype.add=function(e){this.M.push(e)},we.prototype.D=function(e){try{for(var t=0;t<this.M.length;t++){var i=e.get(this.M[t]);i&&b(i)&&i.call(q,e)}}catch(n){}t=e.get(Ye),t!=S&&b(t)&&(e.set(Ye,S,!0),setTimeout(t,10))};var Oe=function(){return Math.round(2147483647*Math.random())},Te=function(){try{var e=new Uint32Array(1);return q.crypto.getRandomValues(e),2147483647&e[0]}catch(t){return Oe()}};function Me(e){var t=Pe(e,jt);500<=t&&p(15);var i=Be(e,Qe);if("transaction"!=i&&"item"!=i){i=Pe(e,Ht);var n=(new Date).getTime(),o=Pe(e,Ut);if(0==o&&e.set(Ut,n),o=Math.round(2*(n-o)/1e3),0<o&&(i=Math.min(i+o,20),e.set(Ut,n)),0>=i)throw"abort";e.set(Ht,--i)}e.set(jt,++t)}var Ne=function(){this.data=new B};Ne.prototype.get=function(e){var t=je(e),i=this.data.get(e);return t&&void 0==i&&(i=b(t.defaultValue)?t.defaultValue():t.defaultValue),t&&t.Z?t.Z(this,e,i):i};var Be=function(e,t){return e=e.get(t),void 0==e?"":""+e},Pe=function(e,t){return e=e.get(t),void 0==e||""===e?0:Number(e)};Ne.prototype.Z=function(e){return(e=this.get(e))&&b(e)?e:S},Ne.prototype.set=function(e,t,i){if(e)if("object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&Re(this,n,e[n],i);else Re(this,e,t,i)};var Re=function(e,t,i,n){if(void 0!=i)switch(t){case bi:ro.test(i)}var o=je(t);o&&o.o?o.o(e,t,i,n):e.data.set(t,i,n)},Ze=new B,Fe=[],qe=function(e,t,i,n,o){this.name=e,this.F=t,this.Z=n,this.o=o,this.defaultValue=i},je=function(e){var t=Ze.get(e);if(!t)for(var i=0;i<Fe.length;i++){var n=Fe[i],o=n[0].exec(e);if(o){t=n[1](o),Ze.set(t.name,t);break}}return t},Ue=function(e){var t;return Ze.map((function(i,n){n.F==e&&(t=n)})),t&&t.name},He=function(e,t,i,n,o){return e=new qe(e,t,i,n,o),Ze.set(e.name,e),e.name},$e=function(e,t){Fe.push([new RegExp("^"+e+"$"),t])},Ve=function(e,t,i){return He(e,t,i,void 0,We)},We=function(){},ze=Ve("apiVersion","v"),Ge=Ve("clientVersion","_v");He("anonymizeIp","aip");var Je=He("adSenseId","a"),Qe=He("hitType","t"),Ye=He("hitCallback"),Xe=He("hitPayload");He("nonInteraction","ni"),He("currencyCode","cu"),He("dataSource","ds");var Ke=He("useBeacon",void 0,!1),et=He("transport");He("sessionControl","sc",""),He("sessionGroup","sg"),He("queueTime","qt");var tt=He("_s","_s");He("screenName","cd");var it=He("location","dl",""),nt=He("referrer","dr"),ot=He("page","dp","");He("hostname","dh");var at=He("language","ul"),rt=He("encoding","de");He("title","dt",(function(){return j.title||void 0})),$e("contentGroup([0-9]+)",(function(e){return new qe(e[0],"cg"+e[1])}));var st=He("screenColors","sd"),lt=He("screenResolution","sr"),ct=He("viewportSize","vp"),dt=He("javaEnabled","je"),ht=He("flashVersion","fl");He("campaignId","ci"),He("campaignName","cn"),He("campaignSource","cs"),He("campaignMedium","cm"),He("campaignKeyword","ck"),He("campaignContent","cc");var ut=He("eventCategory","ec"),pt=He("eventAction","ea"),mt=He("eventLabel","el"),gt=He("eventValue","ev"),bt=He("socialNetwork","sn"),ft=He("socialAction","sa"),vt=He("socialTarget","st"),yt=He("l1","plt"),kt=He("l2","pdt"),wt=He("l3","dns"),xt=He("l4","rrt"),St=He("l5","srt"),Ct=He("l6","tcp"),Lt=He("l7","dit"),_t=He("l8","clt"),It=He("l9","_gst"),Et=He("l10","_gbt"),At=He("l11","_cst"),Dt=He("l12","_cbt"),Ot=He("timingCategory","utc"),Tt=He("timingVar","utv"),Mt=He("timingLabel","utl"),Nt=He("timingValue","utt");He("appName","an"),He("appVersion","av",""),He("appId","aid",""),He("appInstallerId","aiid",""),He("exDescription","exd"),He("exFatal","exf");var Bt=He("expId","xid"),Pt=He("expVar","xvar"),Rt=He("exp","exp"),Zt=He("_utma","_utma"),Ft=He("_utmz","_utmz"),qt=He("_utmht","_utmht"),jt=He("_hc",void 0,0),Ut=He("_ti",void 0,0),Ht=He("_to",void 0,20);$e("dimension([0-9]+)",(function(e){return new qe(e[0],"cd"+e[1])})),$e("metric([0-9]+)",(function(e){return new qe(e[0],"cm"+e[1])})),He("linkerParam",void 0,void 0,An,We);var $t=Ve("_cd2l",void 0,!1),Vt=He("usage","_u"),Wt=He("_um");He("forceSSL",void 0,void 0,(function(){return h}),(function(e,t,i){p(34),h=!!i}));var zt=He("_j1","jid"),Gt=He("_j2","gjid");$e("\\&(.*)",(function(e){var t=new qe(e[0],e[1]),i=Ue(e[0].substring(1));return i&&(t.Z=function(e){return e.get(i)},t.o=function(e,t,n,o){e.set(i,n,o)},t.F=void 0),t}));var Jt=Ve("_oot"),Qt=He("previewTask"),Yt=He("checkProtocolTask"),Xt=He("validationTask"),Kt=He("checkStorageTask"),ei=He("historyImportTask"),ti=He("samplerTask"),ii=He("_rlt"),ni=He("buildHitTask"),oi=He("sendHitTask"),ai=He("ceTask"),ri=He("devIdTask"),si=He("timingTask"),li=He("displayFeaturesTask"),ci=He("customTask"),di=He("fpsCrossDomainTask"),hi=Ve("name"),ui=Ve("clientId","cid"),pi=Ve("clientIdTime"),mi=Ve("storedClientId"),gi=He("userId","uid"),bi=Ve("trackingId","tid"),fi=Ve("cookieName",void 0,"_ga"),vi=Ve("cookieDomain"),yi=Ve("cookiePath",void 0,"/"),ki=Ve("cookieExpires",void 0,63072e3),wi=Ve("cookieUpdate",void 0,!0),xi=Ve("cookieFlags",void 0,""),Si=Ve("legacyCookieDomain"),Ci=Ve("legacyHistoryImport",void 0,!0),Li=Ve("storage",void 0,"cookie"),_i=Ve("allowLinker",void 0,!1),Ii=Ve("allowAnchor",void 0,!0),Ei=Ve("sampleRate","sf",100),Ai=Ve("siteSpeedSampleRate",void 0,1),Di=Ve("alwaysSendReferrer",void 0,!1),Oi=Ve("_gid","_gid"),Ti=Ve("_gcn"),Mi=Ve("useAmpClientId"),Ni=Ve("_gclid"),Bi=Ve("_gt"),Pi=Ve("_ge",void 0,7776e6),Ri=Ve("_gclsrc"),Zi=Ve("storeGac",void 0,!0),Fi=He("_x_19"),qi=He("_fplc","_fplc"),ji=Ve("_cs"),Ui=Ve("_useUp",void 0,!1),Hi=He("up","up"),$i=He("transportUrl"),Vi=He("_r","_r"),Wi=He("_slc","_slc"),zi=He("_dp"),Gi=He("_jt",void 0,"n"),Ji=He("allowAdFeatures",void 0,!0),Qi=He("allowAdPersonalizationSignals",void 0,!0);function Yi(e,t,i,n){t[e]=function(){try{return n&&p(n),i.apply(this,arguments)}catch(t){throw ve("exc",e,t&&t.name),t}}}function Xi(){var e,t;if((t=(t=q.navigator)?t.plugins:null)&&t.length)for(var i=0;i<t.length&&!e;i++){var n=t[i];-1<n.name.indexOf("Shockwave Flash")&&(e=n.description)}if(!e)try{var o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");e=o.GetVariable("$version")}catch(a){}if(!e)try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",o.AllowScriptAccess="always",e=o.GetVariable("$version")}catch(a){}if(!e)try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=o.GetVariable("$version")}catch(a){}return e&&(o=e.match(/[\d]+/g))&&3<=o.length&&(e=o[0]+"."+o[1]+" r"+o[2]),e||void 0}var Ki=function(e){if("cookie"==e.get(Li))return e=W("FPLC"),0<e.length?e[0]:void 0},en=function(e){var t;(t=Be(e,Fi)&&e.get($t))&&(t=_n.get(e.get(Ii)),t=!(t&&t._fplc)),t&&e.set(qi,Ki(e)||"0")},tn=function(t){var i=Math.min(Pe(t,Ai),100);return!(e(Be(t,ui))%100>=i)},nn=function(e){var t={};if(on(t)||an(t)){var i=t[yt];void 0==i||1/0==i||isNaN(i)||(0<i?(rn(t,wt),rn(t,Ct),rn(t,St),rn(t,kt),rn(t,xt),rn(t,Lt),rn(t,_t),rn(t,It),rn(t,Et),rn(t,At),rn(t,Dt),U((function(){e(t)}),10)):L(q,"load",(function(){nn(e)}),!1))}},on=function(e){var t=q.performance||q.webkitPerformance;if(t=t&&t.timing,!t)return!1;var i=t.navigationStart;return 0!=i&&(e[yt]=t.loadEventStart-i,e[wt]=t.domainLookupEnd-t.domainLookupStart,e[Ct]=t.connectEnd-t.connectStart,e[St]=t.responseStart-t.requestStart,e[kt]=t.responseEnd-t.responseStart,e[xt]=t.fetchStart-i,e[Lt]=t.domInteractive-i,e[_t]=t.domContentLoadedEventStart-i,e[It]=Eo.L-i,e[Et]=Eo.ya-i,q.google_tag_manager&&q.google_tag_manager._li&&(t=q.google_tag_manager._li,e[At]=t.cst,e[Dt]=t.cbt),!0)},an=function(e){if(q.top!=q)return!1;var t=q.external,i=t&&t.onloadT;return t&&!t.isValidLoadTime&&(i=void 0),2147483648<i&&(i=void 0),0<i&&t.setPageReadyTime(),void 0!=i&&(e[yt]=i,!0)},rn=function(e,t){var i=e[t];(isNaN(i)||1/0==i||0>i)&&(e[t]=void 0)},sn=function(e){return function(t){if("pageview"==t.get(Qe)&&!e.I){e.I=!0;var i=tn(t),n=0<D(Be(t,it),"gclid").length;(i||n)&&nn((function(t){i&&e.send("timing",t),n&&e.send("adtiming",t)}))}}},ln=!1,cn=function(e){if("cookie"==Be(e,Li)){if(e.get(wi)||Be(e,mi)!=Be(e,ui)){var t=1e3*Pe(e,ki);dn(e,ui,fi,t),e.data.set(mi,Be(e,ui))}if((e.get(wi)||hn(e)!=Be(e,Oi))&&dn(e,Oi,Ti,864e5),e.get(Zi)){var i=Be(e,Ni);if(i){var n=Math.min(Pe(e,Pi),1e3*Pe(e,ki));n=Math.min(n,1e3*Pe(e,Bi)+n-(new Date).getTime()),e.data.set(Pi,n),t={};var o=Be(e,Bi),a=Be(e,Ri),r=kn(Be(e,yi)),s=vn(Be(e,vi)),l=Be(e,bi);e=Be(e,xi),a&&"aw.ds"!=a?t&&(t.ua=!0):(i=["1",o,G(i)].join("."),0<n&&(t&&(t.ta=!0),z("_gac_"+G(l),i,r,s,l,n,e))),xn(t)}}else p(75)}},dn=function(e,t,i,n){var o=mn(e,t);if(o){i=Be(e,i);var a=kn(Be(e,yi)),r=vn(Be(e,vi)),s=Be(e,xi),l=Be(e,bi);if("auto"!=r)z(i,o,a,r,l,n,s)&&(ln=!0);else{p(32);for(var c=yn(),d=0;d<c.length;d++)if(r=c[d],e.data.set(vi,r),o=mn(e,t),z(i,o,a,r,l,n,s))return void(ln=!0);e.data.set(vi,"auto")}}},hn=function(e){var t=W(Be(e,Ti));return gn(e,t)},un=function(e){if("cookie"==Be(e,Li)&&!ln&&(cn(e),!ln))throw"abort"},pn=function(e){if(e.get(Ci)){var t=Be(e,vi),i=Be(e,Si)||O(),n=Sn("__utma",i,t);n&&(p(19),e.set(qt,(new Date).getTime(),!0),e.set(Zt,n.R),(t=Sn("__utmz",i,t))&&n.hash==t.hash&&e.set(Ft,t.R))}},mn=function(e,t){t=G(Be(e,t));var i=vn(Be(e,vi)).split(".").length;return e=wn(Be(e,yi)),1<e&&(i+="-"+e),t?["GA1",i,t].join("."):""},gn=function(e,t){return bn(t,Be(e,vi),Be(e,yi))},bn=function(e,t,i){if(!e||1>e.length)p(12);else{for(var n=[],o=0;o<e.length;o++){var a=e[o],r=a.split("."),s=r.shift();("GA1"==s||"1"==s)&&1<r.length?(a=r.shift().split("-"),1==a.length&&(a[1]="1"),a[0]*=1,a[1]*=1,r={H:a,s:r.join(".")}):r=d.test(a)?{H:[0,0],s:a}:void 0,r&&n.push(r)}if(1==n.length)return p(13),n[0].s;if(0!=n.length)return p(14),n=fn(n,vn(t).split(".").length,0),1==n.length?n[0].s:(n=fn(n,wn(i),1),1<n.length&&p(41),n[0]&&n[0].s);p(12)}},fn=function(e,t,i){for(var n,o=[],a=[],r=0;r<e.length;r++){var s=e[r];s.H[i]==t?o.push(s):void 0==n||s.H[i]<n?(a=[s],n=s.H[i]):s.H[i]==n&&a.push(s)}return 0<o.length?o:a},vn=function(e){return 0==e.indexOf(".")?e.substr(1):e},yn=function(){var e=[],t=O().split(".");if(4==t.length){var i=t[t.length-1];if(o(i,10)==i)return["none"]}for(i=t.length-2;0<=i;i--)e.push(t.slice(i).join("."));return t=j.location.hostname,Q.test(t)||J.test(t)||e.push("none"),e},kn=function(e){return e?(1<e.length&&e.lastIndexOf("/")==e.length-1&&(e=e.substr(0,e.length-1)),0!=e.indexOf("/")&&(e="/"+e),e):"/"},wn=function(e){return e=kn(e),"/"==e?1:e.split("/").length},xn=function(e){e.ta&&p(77),e.na&&p(74),e.pa&&p(73),e.ua&&p(69)};function Sn(e,t,i){"none"==t&&(t="");var n=[],o=W(e);e="__utma"==e?6:2;for(var a=0;a<o.length;a++){var r=(""+o[a]).split(".");r.length>=e&&n.push({hash:r[0],R:o[a],O:r})}if(0!=n.length)return 1==n.length?n[0]:Cn(t,n)||Cn(i,n)||Cn(null,n)||n[0]}function Cn(t,i){if(null==t)var n=t=1;else n=e(t),t=e(y(t,".")?t.substring(1):"."+t);for(var o=0;o<i.length;o++)if(i[o].hash==n||i[o].hash==t)return i[o]}var Ln=new RegExp(/^https?:\/\/([^\/:]+)/),_n=q.google_tag_data.glBridge,In=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,En=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;function An(e){if(e.get($t))return p(35),_n.generate(Rn(e));var t=Be(e,ui),i=Be(e,Oi)||"";return t="_ga=2."+C(On(i+t,0)+"."+i+"-"+t),(e=Zn(e))?(p(44),e="&_gac=1."+C([On(e.qa,0),e.timestamp,e.qa].join("."))):e="",t+e}function Dn(t,i){var n=new Date,o=q.navigator,a=o.plugins||[];for(t=[t,o.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+i],i=0;i<a.length;++i)t.push(a[i].description);return e(t.join("."))}function On(t,i){var n=new Date,o=q.navigator,a=n.getHours()+Math.floor((n.getMinutes()+i)/60);return e([t,o.userAgent,o.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(a/24),(24+a)%24,(60+n.getMinutes()+i)%60].join("."))}var Tn=function(e){p(48),this.target=e,this.T=!1};Tn.prototype.ca=function(e,t){if(e){if(this.target.get($t))return _n.decorate(Rn(this.target),e,t);if(e.tagName){if("a"==e.tagName.toLowerCase())return void(e.href&&(e.href=Mn(this,e.href,t)));if("form"==e.tagName.toLowerCase())return Nn(this,e)}if("string"==typeof e)return Mn(this,e,t)}};var Mn=function(e,t,i){var n=In.exec(t);n&&3<=n.length&&(t=n[1]+(n[3]?n[2]+n[3]:"")),(n=En.exec(t))&&3<=n.length&&(t=n[1]+(n[3]?n[2]+n[3]:"")),e=e.target.get("linkerParam");var o=t.indexOf("?");return n=t.indexOf("#"),i?t+=(-1==n?"#":"&")+e:(i=-1==o?"?":"&",t=-1==n?t+(i+e):t.substring(0,n)+i+e+t.substring(n)),t=t.replace(/&+_ga=/,"&_ga="),t.replace(/&+_gac=/,"&_gac=")},Nn=function(e,t){if(t&&t.action)if("get"==t.method.toLowerCase()){e=e.target.get("linkerParam").split("&");for(var i=0;i<e.length;i++){var n=e[i].split("="),o=n[1];n=n[0];for(var a=t.childNodes||[],r=!1,s=0;s<a.length;s++)if(a[s].name==n){a[s].setAttribute("value",o),r=!0;break}r||(a=j.createElement("input"),a.setAttribute("type","hidden"),a.setAttribute("name",n),a.setAttribute("value",o),t.appendChild(a))}}else"post"==t.method.toLowerCase()&&(t.action=Mn(e,t.action))};function Bn(e,t){if(t==j.location.hostname)return!1;for(var i=0;i<e.length;i++)if(e[i]instanceof RegExp){if(e[i].test(t))return!0}else if(0<=t.indexOf(e[i]))return!0;return!1}function Pn(e,t){return t!=Dn(e,0)&&t!=Dn(e,-1)&&t!=Dn(e,-2)&&t!=On(e,0)&&t!=On(e,-1)&&t!=On(e,-2)}function Rn(e){var t=Zn(e),i={};return i._ga=e.get(ui),i._gid=e.get(Oi)||void 0,i._gac=t?[t.qa,t.timestamp].join("."):void 0,t=e.get(qi),e=Ki(e),i._fplc=t&&"0"!==t?t:e,i}function Zn(e){function t(e){return void 0==e||""===e?0:Number(e)}var i=e.get(Ni);if(i&&e.get(Zi)){var n=t(e.get(Bi));if(!(1e3*n+t(e.get(Pi))<=(new Date).getTime()))return{timestamp:n,qa:i};p(76)}}Tn.prototype.S=function(e,t,i){function n(i){try{i=i||q.event;e:{var n=i.target||i.srcElement;for(i=100;n&&0<i;){if(n.href&&n.nodeName.match(/^a(?:rea)?$/i)){var a=n;break e}n=n.parentNode,i--}a={}}("http:"==a.protocol||"https:"==a.protocol)&&Bn(e,a.hostname||"")&&a.href&&(a.href=Mn(o,a.href,t))}catch(r){p(26)}}var o=this;this.target.get($t)?_n.auto((function(){return Rn(o.target)}),e,t?"fragment":"",i):(this.T||(this.T=!0,L(j,"mousedown",n,!1),L(j,"keyup",n,!1)),i&&L(j,"submit",(function(t){if(t=t||q.event,(t=t.target||t.srcElement)&&t.action){var i=t.action.match(Ln);i&&Bn(e,i[1])&&Nn(o,t)}})))},Tn.prototype.$=function(e){if(e){var t=this,i=t.target.get(ji);void 0!==i&&_n.passthrough((function(){if(i("analytics_storage"))return{};var e={};return e._ga=t.target.get(ui),e._up="1",e}),1,!0)}};var Fn=/^(GTM|OPT)-[A-Z0-9]+$/,qn=/^G-[A-Z0-9]+$/,jn=/;_gaexp=[^;]*/g,Un=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Hn=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,$n=function(e){function t(e,t){t&&(i+="&"+e+"="+C(t))}var i=ce(e.type)+C(e.id);return"dataLayer"!=e.B&&t("l",e.B),t("cx",e.context),t("t",e.target),t("cid",e.clientId),t("cidt",e.ka),t("gac",e.la),t("aip",e.ia),e.sync&&t("m","sync"),t("cycle",e.G),e.qa&&t("gclid",e.qa),Hn.test(j.referrer)&&t("cb",String(Oe())),i},Vn=function(e,t){var i=(new Date).getTime();q[e.B]=q[e.B]||[],i={"gtm.start":i},e.sync||(i.event="gtm.js"),q[e.B].push(i),2===e.type&&function(t,i,n){q[e.B].push(arguments)}("config",e.id,t)},Wn=function(e,t,i,n){i=i||{};var o=1;qn.test(t)&&(o=2);var a={id:t,type:o,B:i.dataLayer||"dataLayer",G:!1},r=void 0;return e.get("&gtm")==t&&(a.G=!0),1===o?(a.ia=!!e.get("anonymizeIp"),a.sync=n,t=String(e.get("name")),"t0"!=t&&(a.target=t),V(String(e.get("trackingId")))||(a.clientId=String(e.get(ui)),a.ka=Number(e.get(pi)),i=i.palindrome?Un:jn,i=(i=j.cookie.replace(/^|(; +)/g,";").match(i))?i.sort().join("").substring(1):void 0,a.la=i,a.qa=D(Be(e,it),"gclid"))):2===o&&(a.context="c",r={allow_google_signals:e.get(Ji),allow_ad_personalization_signals:e.get(Qi)}),Vn(a,r),$n(a)},zn={},Gn=function(e,t){t||(t=(t=Be(e,hi))&&"t0"!=t?io.test(t)?"_gat_"+G(Be(e,bi)):"_gat_"+G(t):"_gat"),this.Y=t},Jn=function(e,t){var i=t.get(ni);t.set(ni,(function(t){Qn(e,t,zt),Qn(e,t,Gt);var n=i(t);return Yn(e,t),n}));var n=t.get(oi);t.set(oi,(function(e){var t=n(e);if(Xn(e)){p(80);var i={U:eo(e,1),google:eo(e,2),count:0};ue("https://stats.g.doubleclick.net/j/collect",i.U,i),e.set(zt,"",!0)}return t}))},Qn=function(e,t,i){!1===t.get(Ji)||t.get(i)||("1"==W(e.Y)[0]?t.set(i,"",!0):t.set(i,""+Oe(),!0))},Yn=function(e,t){Xn(t)&&z(e.Y,"1",Be(t,yi),Be(t,vi),Be(t,bi),6e4,Be(t,xi))},Xn=function(e){return!!e.get(zt)&&!1!==e.get(Ji)},Kn=function(e){return!zn[Be(e,bi)]&&void 0===e.get("&gtm")&&void 0===e.get(et)&&void 0===e.get($i)&&void 0===e.get(Fi)},eo=function(e,t){var i=new B,n=function(t){je(t).F&&i.set(je(t).F,e.get(t))};n(ze),n(Ge),n(bi),n(ui),n(zt),1==t&&(n(gi),n(Gt),n(Oi)),!1===e.get(Qi)&&i.set("npa","1"),i.set(je(Vt).F,m(e));var o="";return i.map((function(e,t){o+=C(e)+"=",o+=C(""+t)+"&"})),o+="z="+Oe(),1==t?o="t=dc&aip=1&_r=3&"+o:2==t&&(o="t=sr&aip=1&_r=4&slf_rd=1&"+o),o},to=function(e){if(Kn(e))return zn[Be(e,bi)]=!0,function(t){if(t&&!zn[t]){var i=Wn(e,t);E(i),zn[t]=!0}}},io=/^gtm\d+$/,no=function(e,i){if(e=e.model,!e.get("dcLoaded")){var n,o=new t(g(e));o.set(29),e.set(Wt,o.C),i=i||{},i[fi]&&(n=G(i[fi])),i=new Gn(e,n),Jn(i,e),e.set("dcLoaded",!0)}},oo=function(e){if(!e.get("dcLoaded")&&"cookie"==e.get(Li)){var t=new Gn(e);Qn(t,e,zt),Qn(t,e,Gt),Yn(t,e),t=Xn(e);var i=Kn(e);t&&e.set(Vi,1,!0),i&&e.set(Wi,1,!0),(t||i)&&(e.set(Gi,"d",!0),p(79),e.set(zi,{U:eo(e,1),google:eo(e,2),V:to(e),count:0},!0))}},ao=function(){var e=q.gaGlobal=q.gaGlobal||{};return e.hid=e.hid||Oe()},ro=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,so=function(e){function t(e,t){n.model.data.set(e,t)}function i(e,i){t(e,i),n.filters.add(e)}var n=this;this.model=new Ne,this.filters=new we,t(hi,e[hi]),t(bi,k(e[bi])),t(fi,e[fi]),t(vi,e[vi]||O()),t(yi,e[yi]),t(ki,e[ki]),t(wi,e[wi]),t(xi,e[xi]),t(Si,e[Si]),t(Ci,e[Ci]),t(_i,e[_i]),t(Ii,e[Ii]),t(Ei,e[Ei]),t(Ai,e[Ai]),t(Di,e[Di]),t(Li,e[Li]),t(gi,e[gi]),t(pi,e[pi]),t(Mi,e[Mi]),t(Zi,e[Zi]),t($t,e[$t]),t(Fi,e[Fi]),t(Ui,e[Ui]),t(ji,e[ji]),t(ze,1),t(Ge,"j87"),i(Jt,Se),i(ci,S),i(Qt,Ee),i(Yt,Ce),i(Xt,De),i(Kt,un),i(ei,pn),i(ti,xe),i(ii,Me),i(ai,Ie),i(ri,Ae),i(li,oo),i(di,en),i(ni,Le),i(oi,_e),i(si,sn(this)),mo(this.model),po(this.model,e[ui]),this.model.set(Je,ao())};so.prototype.get=function(e){return this.model.get(e)},so.prototype.set=function(e,t){this.model.set(e,t)},so.prototype.send=function(e){if(!(1>arguments.length)){if("string"===typeof arguments[0])var t=arguments[0],i=[].slice.call(arguments,1);else t=arguments[0]&&arguments[0][Qe],i=arguments;t&&(i=N(go[t]||[],i),i[Qe]=t,this.model.set(i,void 0,!0),this.filters.D(this.model),this.model.data.m={})}},so.prototype.ma=function(e,t){var i=this;wo(e,i,t)||(So(e,(function(){wo(e,i,t)})),xo(String(i.get(hi)),e,void 0,t,!0))};var lo,co,ho,uo,po=function(e,t){var i=Be(e,fi);if(e.data.set(Ti,"_ga"==i?"_gid":i+"_gid"),"cookie"==Be(e,Li)){if(ln=!1,i=W(Be(e,fi)),i=gn(e,i),!i){i=Be(e,vi);var n=Be(e,Si)||O();i=Sn("__utma",n,i),void 0!=i?(p(10),i=i.O[1]+"."+i.O[2]):i=void 0}if(i&&(ln=!0),n=i&&!e.get(wi))if(n=i.split("."),2!=n.length)n=!1;else if(n=Number(n[1])){var o=Pe(e,ki);n=n+o<(new Date).getTime()/1e3}else n=!1;if(n&&(i=void 0),i&&(e.data.set(mi,i),e.data.set(ui,i),(i=hn(e))&&e.data.set(Oi,i)),e.get(Zi)&&(i=e.get(Ni),n=e.get(Ri),!i||n&&"aw.ds"!=n)){if(i={},j){n=[],o=j.cookie.split(";");for(var a=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,r=0;r<o.length;r++){var s=o[r].match(a);s&&n.push({ja:s[1],value:s[2]})}if(o={},n&&n.length)for(a=0;a<n.length;a++)r=n[a].value.split("."),"1"!=r[0]||3!=r.length?i&&(i.na=!0):r[1]&&(o[n[a].ja]?i&&(i.pa=!0):o[n[a].ja]=[],o[n[a].ja].push({timestamp:r[1],qa:r[2]}));n=o}else n={};n=n[Be(e,bi)],xn(i),n&&0!=n.length&&(i=n[0],e.data.set(Bi,i.timestamp),e.data.set(Ni,i.qa))}}if(e.get(wi)&&(i=A("_ga",!!e.get(Ii)),a=A("_gl",!!e.get(Ii)),n=_n.get(e.get(Ii)),o=n._ga,a&&0<a.indexOf("_ga*")&&!o&&p(30),t||!e.get(Ui)?a=!1:(a=e.get(ji),void 0===a||a("analytics_storage")?a=!1:(p(84),e.data.set(Hi,1),(a=n._up)&&((a=Ln.exec(j.referrer))?(a=a[1],r=j.location.hostname,a=r===a||0<=r.indexOf("."+a)||0<=a.indexOf("."+r)):a=!1),a=!!a)),r=n.gclid,s=n._gac,i||o||r||s))if(i&&o&&p(36),e.get(_i)||se(e.get(Mi))||a){if(o&&(p(38),e.data.set(ui,o),n._gid&&(p(51),e.data.set(Oi,n._gid))),r?(p(82),e.data.set(Ni,r),n.gclsrc&&e.data.set(Ri,n.gclsrc)):s&&(o=s.split("."))&&2===o.length&&(p(37),e.data.set(Ni,o[0]),e.data.set(Bi,o[1])),(n=n._fplc)&&(p(83),e.data.set(qi,n)),i)e:if(n=i.indexOf("."),-1==n)p(22);else{if(o=i.substring(0,n),a=i.substring(n+1),n=a.indexOf("."),i=a.substring(0,n),a=a.substring(n+1),"1"==o){if(n=a,Pn(n,i)){p(23);break e}}else{if("2"!=o){p(22);break e}if(n=a.indexOf("-"),o="",0<n?(o=a.substring(0,n),n=a.substring(n+1)):n=a.substring(1),Pn(o+n,i)){p(53);break e}o&&(p(2),e.data.set(Oi,o))}p(11),e.data.set(ui,n),(i=A("_gac",!!e.get(Ii)))&&(i=i.split("."),"1"!=i[0]||4!=i.length?p(72):Pn(i[3],i[1])?p(71):(e.data.set(Ni,i[3]),e.data.set(Bi,i[2]),p(70)))}}else p(21);t&&(p(9),e.data.set(ui,C(t))),e.get(ui)||(t=(t=q.gaGlobal)&&t.from_cookie&&"cookie"!==Be(e,Li)?void 0:(t=t&&t.vid)&&-1!==t.search(c)?t:void 0,t?(p(17),e.data.set(ui,t)):(p(8),e.data.set(ui,w()))),e.get(Oi)||(p(3),e.data.set(Oi,w())),cn(e),t=q.gaGlobal=q.gaGlobal||{},i=Be(e,ui),e=i===Be(e,mi),(void 0==t.vid||e&&!t.from_cookie)&&(t.vid=i,t.from_cookie=e)},mo=function(e){var t=q.navigator,i=q.screen,n=j.location;if(e.set(nt,M(!!e.get(Di),!!e.get(Mi))),n){var o=n.pathname||"";"/"!=o.charAt(0)&&(p(31),o="/"+o),e.set(it,n.protocol+"//"+n.hostname+o+n.search)}i&&e.set(lt,i.width+"x"+i.height),i&&e.set(st,i.colorDepth+"-bit"),i=j.documentElement;var a=(o=j.body)&&o.clientWidth&&o.clientHeight,r=[];if(i&&i.clientWidth&&i.clientHeight&&("CSS1Compat"===j.compatMode||!a)?r=[i.clientWidth,i.clientHeight]:a&&(r=[o.clientWidth,o.clientHeight]),i=0>=r[0]||0>=r[1]?"":r.join("x"),e.set(ct,i),e.set(ht,Xi()),e.set(rt,j.characterSet||j.charset),e.set(dt,t&&"function"===typeof t.javaEnabled&&t.javaEnabled()||!1),e.set(at,(t&&(t.language||t.browserLanguage)||"").toLowerCase()),e.data.set(Ni,A("gclid",!0)),e.data.set(Ri,A("gclsrc",!0)),e.data.set(Bi,Math.round((new Date).getTime()/1e3)),n&&e.get(Ii)&&(t=j.location.hash)){for(t=t.split(/[?&#]+/),n=[],i=0;i<t.length;++i)(y(t[i],"utm_id")||y(t[i],"utm_campaign")||y(t[i],"utm_source")||y(t[i],"utm_medium")||y(t[i],"utm_term")||y(t[i],"utm_content")||y(t[i],"gclid")||y(t[i],"dclid")||y(t[i],"gclsrc"))&&n.push(t[i]);0<n.length&&(t="#"+n.join("&"),e.set(it,e.get(it)+t))}},go={pageview:[ot],event:[ut,pt,mt,gt],social:[bt,ft,vt],timing:[Ot,Tt,Nt,Mt]},bo=function(e){return"prerender"!=j.visibilityState&&(e(),!0)},fo=function(e){if(!bo(e)){p(16);var t=!1,i=function(){if(!t&&bo(e)){t=!0;var n=i,o=j;o.removeEventListener?o.removeEventListener("visibilitychange",n,!1):o.detachEvent&&o.detachEvent("onvisibilitychange",n)}};L(j,"visibilitychange",i)}},vo=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,yo=function(e){if(b(e[0]))this.u=e[0];else{var t=vo.exec(e[0]);if(null!=t&&4==t.length&&(this.c=t[1]||"t0",this.K=t[2]||"",this.methodName=t[3],this.a=[].slice.call(e,1),this.K||(this.A="create"==this.methodName,this.i="require"==this.methodName,this.g="provide"==this.methodName,this.ba="remove"==this.methodName),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(v(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),t=e[1],e=e[2],!this.methodName)throw"abort";if(this.i&&(!v(t)||""==t))throw"abort";if(this.g&&(!v(t)||""==t||!b(e)))throw"abort";if(ko(this.c)||ko(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};function ko(e){return 0<=e.indexOf(".")||0<=e.indexOf(":")}lo=new B,ho=new B,uo=new B,co={ec:45,ecommerce:46,linkid:47};var wo=function(e,t,i){t==Eo||t.get(hi);var n=lo.get(e);return!!b(n)&&(t.plugins_=t.plugins_||new B,t.plugins_.get(e)||t.plugins_.set(e,new n(t,i||{})),!0)},xo=function(e,t,i,n,o){if(!b(lo.get(t))&&!ho.get(t)){if(co.hasOwnProperty(t)&&p(co[t]),e=Eo.j(e),Fn.test(t)){if(p(52),!e)return!0;i=Wn(e.model,t,n,o)}if(!i&&co.hasOwnProperty(t)?(p(39),i=t+".js"):p(43),i){if(e){var a=e.get(Fi);v(a)||(a=void 0)}i&&0<=i.indexOf("/")||(i=(a||le(!1))+"/plugins/ua/"+i),n=_o(i),a=n.protocol,i=j.location.protocol,("https:"==a||a==i||"http:"==a&&"http:"==i)&&Lo(n)&&(E(n.url,void 0,o),ho.set(t,!0))}}},So=function(e,t){var i=uo.get(e)||[];i.push(t),uo.set(e,i)},Co=function(e,t){lo.set(e,t),t=uo.get(e)||[];for(var i=0;i<t.length;i++)t[i]();uo.set(e,[])},Lo=function(e){var t=_o(j.location.href);return!(!y(e.url,ce(1))&&!y(e.url,ce(2)))||!(e.query||0<=e.url.indexOf("?")||0<=e.path.indexOf("://"))&&(e.host==t.host&&e.port==t.port||(t="http:"==e.protocol?80:443,!("www.google-analytics.com"!=e.host||(e.port||t)!=t||!y(e.path,"/plugins/"))))},_o=function(e){function t(e){var t=e.hostname||"",i=0<=t.indexOf("]");return t=t.split(i?"]":":")[0].toLowerCase(),i&&(t+="]"),i=(e.protocol||"").toLowerCase(),i=1*e.port||("http:"==i?80:"https:"==i?443:""),e=e.pathname||"",y(e,"/")||(e="/"+e),[t,""+i,e]}var i=j.createElement("a");i.href=j.location.href;var n=(i.protocol||"").toLowerCase(),o=t(i),a=i.search||"",r=n+"//"+o[0]+(o[1]?":"+o[1]:"");return y(e,"//")?e=n+e:y(e,"/")?e=r+e:!e||y(e,"?")?e=r+o[2]+(e||a):0>e.split("/")[0].indexOf(":")&&(e=r+o[2].substring(0,o[2].lastIndexOf("/"))+"/"+e),i.href=e,n=t(i),{protocol:(i.protocol||"").toLowerCase(),host:n[0],port:n[1],path:n[2],query:i.search||"",url:e||""}},Io={ga:function(){Io.f=[]}};Io.ga(),Io.D=function(e){var t=Io.J.apply(Io,arguments);for(t=Io.f.concat(t),Io.f=[];0<t.length&&!Io.v(t[0])&&(t.shift(),!(0<Io.f.length)););Io.f=Io.f.concat(t)},Io.J=function(e){for(var t=[],i=0;i<arguments.length;i++)try{var n=new yo(arguments[i]);n.g?Co(n.a[0],n.a[1]):(n.i&&(n.ha=xo(n.c,n.a[0],n.X,n.W)),t.push(n))}catch(o){}return t},Io.v=function(e){try{if(e.u)e.u.call(q,Eo.j("t0"));else{var t=e.c==l?Eo:Eo.j(e.c);if(e.A){if("t0"==e.c&&(t=Eo.create.apply(Eo,e.a),null===t))return!0}else if(e.ba)Eo.remove(e.c);else if(t)if(e.i){if(e.ha&&(e.ha=xo(e.c,e.a[0],e.X,e.W)),!wo(e.a[0],t,e.W))return!0}else if(e.K){var i=e.methodName,n=e.a,o=t.plugins_.get(e.K);o[i].apply(o,n)}else t[e.methodName].apply(t,e.a)}}catch(a){}};var Eo=function(e){p(1),Io.D.apply(Io,[arguments])};Eo.h={},Eo.P=[],Eo.L=0,Eo.ya=0,Eo.answer=42;var Ao=[bi,vi,hi];Eo.create=function(e){var t=N(Ao,[].slice.call(arguments));t[hi]||(t[hi]="t0");var i=""+t[hi];if(Eo.h[i])return Eo.h[i];if(ee(t))return null;if(t=new so(t),Eo.h[i]=t,Eo.P.push(t),i=ye().tracker_created,b(i))try{i(t)}catch(n){}return t},Eo.remove=function(e){for(var t=0;t<Eo.P.length;t++)if(Eo.P[t].get(hi)==e){Eo.P.splice(t,1),Eo.h[e]=null;break}},Eo.j=function(e){return Eo.h[e]},Eo.getAll=function(){return Eo.P.slice(0)},Eo.N=function(){"ga"!=l&&p(49);var e=q[l];if(!e||42!=e.answer){Eo.L=e&&e.l,Eo.ya=1*new Date,Eo.loaded=!0;var t=q[l]=Eo;if(Yi("create",t,t.create),Yi("remove",t,t.remove),Yi("getByName",t,t.j,5),Yi("getAll",t,t.getAll,6),t=so.prototype,Yi("get",t,t.get,7),Yi("set",t,t.set,4),Yi("send",t,t.send),Yi("requireSync",t,t.ma),t=Ne.prototype,Yi("get",t,t.get),Yi("set",t,t.set),"https:"!=j.location.protocol&&!h){e:{t=j.getElementsByTagName("script");for(var i=0;i<t.length&&100>i;i++){var n=t[i].src;if(n&&0==n.indexOf(le(!0)+"/analytics")){t=!0;break e}}t=!1}t&&(h=!0)}(q.gaplugins=q.gaplugins||{}).Linker=Tn,t=Tn.prototype,Co("linker",Tn),Yi("decorate",t,t.ca,20),Yi("autoLink",t,t.S,25),Yi("passthrough",t,t.$,25),Co("displayfeatures",no),Co("adfeatures",no),e=e&&e.q,f(e)?Io.D.apply(Eo,e):p(50)}};var Do=Eo.N,Oo=q[l];Oo&&Oo.r?Do():fo(Do),fo((function(){Io.D(["provide","render",S])}))}(window)},42254:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AD:()=>V,GoogleAnalytics:()=>I,Language:()=>U,Message:()=>L,ProxyForWebsite:()=>j,States:()=>x,SystemDataInit:()=>_});var n=i(33385),o=i(41609),a=i.n(o),r=i(26243),s=i.n(r),l=i(62680),c=i.n(l),d=i(95366),h=i.n(d),u=i(6919),p=i.n(u),m=i(93364),g=i.n(m),b=i(26771),f=i.n(b),v=i(69759),y=i(48903);function k(e,t){var i=s()(e);if(c()){var n=c()(e);t&&(n=n.filter((function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?k(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):p()?g()(e,p()(i)):k(Object(i)).forEach((function(t){f()(e,t,h()(i,t))}))}return e}class x extends v.Feature{constructor(e){super(e,"states",{settings:{on:!0},cache:{type:"local",dataType:"object",delayDuration:0,limit:{duration:36e5}}}),(0,n.Z)(this,"states",null),(0,n.Z)(this,"shouldUpdate",!1),(0,n.Z)(this,"needUpdate",!1),(0,n.Z)(this,"onNetworkOnline",async e=>{e&&(await this.getVersionInfo(!0),await this.getStates(!1))}),(0,n.Z)(this,"getStates",async(e=!0)=>{let t=this.cache.checkExpired().expired;const i=this.cache.get(e);if(!t&&i&&!a()(i)&&e)return i;const n={query:"query get($names: [String!]!) {\n                        app {\n                            get(names: $names) {\n                                latestVersion\n                                publishState\n                                minVersion\n                                paymentLink\n                                paymentIframe\n                            }\n                        }\n                    }\n                    ",variables:{names:["latestVersion","publishState","minVersion","paymentLink","paymentIframe"]}};return await this.emit("requestController","createGraphQL",{options:n},async e=>{const{errors:t,data:i}=e;return!(t||!e)&&(e&&i?this.dealWithStateData(i.app.get):void 0)})}),(0,n.Z)(this,"dealWithStateData",e=>(this.states=s()(e).reduce((t,i)=>(e[i].length&&["{","["].includes(e[i][0])&&["}","]"].includes(e[i][e[i].length-1])?t[i]=JSON.parse(e[i]):t[i]=e[i],t),{}),this.shouldUpdate=(0,y.isBiggerThan)(this.states.minVersion,y.version)>0,this.needUpdate=(0,y.isBiggerThan)(this.states.latestVersion,y.version)>0,this.cache.set(this.states),this.states)),(0,n.Z)(this,"getVersionInfo",async(e=!1)=>{const t=this.getStore("currentVersionInfo");if(!t||e){const e={query:"query get($version: String!) {\n                        version {\n                            get(version: $version) {\n                                version\n                                available\n                                publishType\n                            }\n                        }\n                    }\n                    ",variables:{version:y.version}};await this.emit("requestController","createGraphQL",{options:e},e=>{const{errors:t,data:i}=e;if(!t&&!i)return!1;if(t)return!1;{const e=i.version.get;return e&&this.setStore("currentVersionInfo",e),e}})}})}async onBeforeLaunch(){this.addListener("networkOnlineChange",this.onNetworkOnline),this.addListener("getStates",(e,t,i)=>{this.getStates().then(e=>i(w(w({},e),{},{shouldUpdate:this.shouldUpdate,needUpdate:this.needUpdate})))}),this.addListener("getVersionInfo",(e,t,i)=>{const n=this.getStore("currentVersionInfo");void 0!==n?i(n):this.getVersionInfo().then(e=>i(e))}),this.addListener("initData",(e,t,i)=>{const{state:n,version:o}=e;n&&this.dealWithStateData(n),o&&this.setStore("currentVersionInfo",o),i()})}async onLaunch(){}}function S(e,t){var i=s()(e);if(c()){var n=c()(e);t&&(n=n.filter((function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):p()?g()(e,p()(i)):S(Object(i)).forEach((function(t){f()(e,t,h()(i,t))}))}return e}class L extends v.Feature{constructor(e){super(e,"message",{settings:{on:!0,announcementNotification:!0},cache:{type:"local",dataType:"object",delayDuration:0}}),(0,n.Z)(this,"onNetworkOnline",async e=>{e&&this.checkNewAnnouncement().then(this.sendNotification)}),(0,n.Z)(this,"createAnnouncementCheckClock",()=>{this.emit("clockController","create",{name:"message",alarmInfo:{periodInMinutes:180},focus:!0,callback:()=>{this.checkNewAnnouncement().then(this.sendNotification)}})}),(0,n.Z)(this,"checkNewAnnouncement",async e=>{const t={query:"query ($type: String!, $id: Int){\n                      message {\n                        getLatest(type: $type, id: $id) {\n                          latestUpdateDateTime\n                        }\n                      }\n                    }",variables:{type:"announcement",id:e}};return await this.emit("requestController","createGraphQL",{options:t},t=>{const{errors:i,data:n}=t;return!i&&(t&&n?this.dealWithMessageData(e,n.message.getLatest||{}):void 0)})}),(0,n.Z)(this,"dealWithMessageData",(e,t)=>{const{latestUpdateDateTime:i}=t,n=this.cache.get();if(!n||a()(n)||!n.announcement||n.announcement.latestUpdateDateTime<i)return this.getLatestAnnouncement(e,!1)}),(0,n.Z)(this,"getLatestAnnouncement",async(e,t=!0)=>this.getLatestMessage("announcement",e,t)),(0,n.Z)(this,"getLatestMessage",async(e,t,i=!0)=>{if(i){const e=this.cache.get(i);if(!a()(e))return e}const n={query:"query ($type: String!, $id: Int) {\n                        message {\n                            getLatest(type: $type, id: $id) {\n                                id\n                                title\n                                type\n                                content\n                                latestUpdateDateTime\n                            }\n                        }\n                    }",variables:{type:e,id:t}};return this.emit("requestController","createGraphQL",{options:n},t=>{const{errors:i,data:n}=t;if(i)return!1;{const t=this.cache.get();if(void 0===t[e])t[e]={list:[n.message.getLatest],latestUpdateDateTime:n.message.getLatest.latestUpdateDateTime,hasNew:!0};else{if(!(t[e].latestUpdateDateTime<n.message.getLatest.latestUpdateDateTime))return!1;t[e].latestUpdateDateTime=n.message.getLatest.latestUpdateDateTime,t[e].list.unshift(n.message.getLatest),t[e].hasNew=!0}return this.cache.set(t),t}})}),(0,n.Z)(this,"sendNotification",e=>{const{announcementNotification:t}=this.settings;if(!t)return;if(!e||!e.announcement||!e.announcement.hasNew)return;const i=e.announcement.list[0];this.emit("notificationController","post",{title:"\u6536\u5230\u65b0\u516c\u544a\uff0c\u70b9\u51fb\u67e5\u9605",icon:chrome.runtime.getURL("statics/images/bilibili-cat-256.png"),body:i.title,autoCloseInterval:1e4,data:{url:("production".match("dev")?"http://bilibilihelper.com:8000":"https://bilibilihelper.com")+"/announcement?id="+i.id},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}]})}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onInitStore(){const e=this.cache.get();if(e&&e.latestUpdateDateTime){const t={},i=C({},e);t.announcement={latestUpdateDateTime:e.latestUpdateDateTime,list:[i],hasNew:!1},this.cache.set(t)}}async onBeforeLaunch(){this.addListener("networkOnlineChange",this.onNetworkOnline),this.addListener("getLatestAnnouncement",(e,t,i)=>{this.getLatestAnnouncement(null,!0).then(e=>i(e))}),this.addListener("setAnnouncementRead",(e,t,i)=>{const n=this.cache.get();n.announcement.hasNew=!1,this.cache.set(n),i(!0)}),this.addListener("initData",(e,t,i)=>{e&&this.dealWithMessageData(null,e),i()})}async onLaunch(){this.createAnnouncementCheckClock()}}class _ extends v.Feature{constructor(e){super(e,"systemDataInit",{dependencies:["states","message"],settings:{on:!0}}),(0,n.Z)(this,"getInitData",async()=>{const e={query:"query ($app: [String!]!, $version: String!, $messageType: String!, $adTags: [String!]!) {\n                        app {\n                            get(names: $app) {\n                                latestVersion\n                                publishState\n                                minVersion\n                                paymentLink\n                                paymentIframe\n                            }\n                        }\n                        version {\n                            get(version: $version) {\n                                version\n                                available\n                                publishType\n                            }\n                        }\n                        message {\n                            getLatest(type: $messageType) {\n                                latestUpdateDateTime\n                            }\n                        }\n                        ad {\n                            get(tags: $adTags) {\n                                id\n                                title\n                                content\n                                cover\n                                link\n                                to\n                                tags\n                                position\n                                available\n                                system\n                            }\n                        }\n                    }\n                    ",variables:{app:["latestVersion","publishState","minVersion","paymentLink","paymentIframe"],version:y.version,messageType:"announcement",adTags:["test"]}};return await this.emit("requestController","createGraphQL",{options:e},async e=>{const{errors:t,data:i}=e;if(t||!e)return!1;if(e&&i){const{app:e,version:t,message:n,ad:o}=i;this.emit("states","initData",{state:e.get||{},version:t.get||{}}),this.emit("message","initData",n.getLatest||{}),this.emit("ad","initData",o.get||[])}})})}async onLaunch(){await this.getInitData()}}i(74539);class I extends v.Feature{constructor(e){super(e,"googleAnalytics",{settings:{on:!0},cache:{type:"local",dataType:"number"}}),(0,n.Z)(this,"__send",({hitType:e="event",eventAction:t,eventCategory:i,eventLabel:n,nonInteraction:o})=>{window.ga&&window.ga("send",{hitType:e,eventAction:t,eventCategory:i,eventLabel:n,nonInteraction:o})}),(0,n.Z)(this,"__sendPageView",e=>{window.ga&&window.ga("send",{hitType:"pageview",page:e})}),(0,n.Z)(this,"sendGA",(e,t,i)=>{if(this.settings.on&&e.action&&e.category){const{hitType:t,action:n,label:o,category:a="",nonInteraction:r=!1}=e;this.insertGAScriptTag(),this.__send({hitType:t,eventAction:n,eventCategory:a,eventLabel:o,nonInteraction:r}),i(!0)}else i(!1)}),(0,n.Z)(this,"sendPage",(e,t,i)=>{if(this.settings.on&&e.pathname){const{pathname:t}=e;this.insertGAScriptTag(),this.__sendPageView(t),i(!0)}else i(!1)}),(0,n.Z)(this,"insertGAScriptTag",(e="UA-39765420-8")=>{0===document.getElementsByClassName("ga-script").length&&(window["GoogleAnalyticsObject"]="ga",window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=1*new Date,window.ga("create",e,"auto"),window.ga("set","dimension1",y.version),window.ga("set","checkProtocolTask"),window.ga("set","userId",this.store.uid||this.store.randomUserId))}),(0,n.Z)(this,"localBilibiliAccountLoginStateChange",({login:e},t,i)=>{void 0!==e?(e?this.emit("bilibiliAccountController","getLocalAccount",null,e=>{e?(this.store.uid=e.uid,window.ga("set","userId",this.store.uid)):(this.store.uid="",this.store.randomUserId||(this.store.randomUserId=String(Math.random()).slice(2),window.ga("set","userId",this.store.randomUserId))),this.setStore("default",this.store)}):(this.store.uid="",this.store.randomUserId||(this.store.randomUserId=String(Math.random()).slice(2),window.ga("set","userId",this.store.randomUserId),this.setStore("default",this.store))),i(!0)):i(!1)}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings),stores:{default:this.getStore("default")}})})}get todayPassed(){return this.cache.get()===(new Date).getDate()}async onInitStore(){this.store=this.getStore("default"),this.store={},await this.emit("bilibiliHelperAccountController","getStatus",null,(e={})=>{const{bilibiliAccount:t}=e||{};t&&t.uid?this.store.uid=t.uid:this.store.randomUserId=String(Math.random()).slice(2),this.setStore("default",this.store)})}async onLaunch(){this.addListener("localBilibiliAccountLoginStateChange",this.localBilibiliAccountLoginStateChange),this.addListener("send",this.sendGA),this.addListener("sendPage",this.sendPage),this.insertGAScriptTag();const e=this.getSetting("debug")||{};this.todayPassed||(this.__send({hitType:"event",eventCategory:"initialization",eventAction:"init",eventLabel:`${e.on?"official":"dev"}_${y.version}`}),this.cache.set((new Date).getDate()))}}var E=i(47874),A=i(13311),D=i.n(A),O=i(84564),T=i.n(O);const M=(e,{model:t,sign:i})=>{e.postMessage({command:"returnApp",data:{code:0,data:{connected:!0,version:y.version}},from:"helperProxy",model:t,sign:i})};var N=i(37462);const B=["body"],P=["type"];function R(e,t){var i=s()(e);if(c()){var n=c()(e);t&&(n=n.filter((function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function Z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?R(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):p()?g()(e,p()(i)):R(Object(i)).forEach((function(t){f()(e,t,h()(i,t))}))}return e}const F=e=>{const t=[].slice.call(new Uint8Array(e));let i="";return t.forEach(e=>i+=String.fromCharCode(e)),window.btoa(i)},q={};class j extends v.Feature{constructor(e){super(e,"proxyForWebsite",{dependencies:["requestController","webRequestController"],settings:{on:!0}}),(0,n.Z)(this,"callback",e=>{const{initiator:t,requestHeaders:i}=e,n=!a()(D()(i,({name:e,value:t})=>"From"===e&&"bilibili-helper"===t));if(/^chrome-extension:\/\//.test(t)||n){const e=i.find(e=>"origin"===e.name.toLowerCase());return e?e.value="https://h.bilibili.com":i.push({name:"Origin",value:"https://h.bilibili.com"}),{requestHeaders:i}}}),(0,n.Z)(this,"fetchJSON",async(e,{url:t,options:i,sign:n,model:o})=>{if(!o)throw"fetch from Model "+o;const a=new(T())(t,!0);return this.emit("requestController","create",{url:t,options:Z(Z({},i),{},{contentType:"json"})},({data:t})=>{e.postMessage({command:"returnFetch",data:Z(Z({},t),{},{receipt:a.query}),from:"helperProxy",model:o,sign:n})})}),(0,n.Z)(this,"fetchImage",async(e,{url:t,options:i,sign:n,model:o,mine:a})=>{let r="";r=q[n]?q[n]:await this.emit("requestController","create",{url:t,options:i},({data:e})=>e.arrayBuffer().then(e=>q[n]=`data:${a};base64,`+F(e))),e.postMessage({command:"returnFetch",data:r,from:"helperProxy",model:o,sign:n})}),(0,n.Z)(this,"fetchPOST",async(e,{url:t,options:i,sign:n,model:o})=>{if(!o)throw"fetch from Model "+o;const{body:a}=i,r=(0,E.Z)(i,B),s=new FormData;for(let l in a)s.append(l,a[l]);return i.body=s,r.body=s,this.emit("requestController","create",{url:t,options:Z(Z({},r),{},{contentType:"json"})},({data:t})=>{e.postMessage({command:"returnFetch",data:Z(Z({},t),{},{receipt:a}),from:"helperProxy",model:o,sign:n})})})}async onLaunch(){this.emit("webRequestController","create",{name:"proxyForWebsite",eventName:"onBeforeSendHeaders",filter:{urls:["https://api.bilibili.com/x/v2/reply/action?*","https://api.bilibili.com/x/v2/reply/add?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.callback}),chrome.runtime.onConnect.addListener(e=>{e.onMessage.addListener((t,i)=>{const{command:n,data:o}=t;switch(n){case"connect":M(i,o);break;case"fetch":{const{type:e}=o,t=(0,E.Z)(o,P);"json"===e?this.fetchJSON(i,t):"image"===e?this.fetchImage(i,t):"post"===e&&this.fetchPOST(i,t);break}case"cookie":(0,N.p)(i,o);break;case"actionInParent":chrome.tabs.sendMessage(e.sender.tab.id,o);break;case"actionInOrigin":chrome.tabs.sendMessage(e.sender.tab.id,o,{frameId:e.sender.frameId})}})})}}class U extends v.Feature{constructor(e){super(e,"language",{settings:{on:!0,lang:"zh_CN"}}),(0,n.Z)(this,"getSettingsForUpload",async(e,t,i)=>{i({settings:this.simplifyConfig(this.settings)})})}async onLaunch(){this.addListener("getI18nMap",(e,t,i)=>{i(window.i18nMap)})}}var H=i(73473),$=i.n(H);class V extends v.Feature{constructor(e){super(e,"ad",{settings:{on:!0}}),(0,n.Z)(this,"adMap",[]),(0,n.Z)(this,"clearIntervalDuration",18e5),(0,n.Z)(this,"clearIntervalTimer",null),(0,n.Z)(this,"systemType",y.isMacOS?"mac":"win"),(0,n.Z)(this,"onNetworkOnline",async e=>{e&&(this.adMap=await this.getADs(["test"]))}),(0,n.Z)(this,"clearCache",()=>{clearTimeout(this.clearIntervalTimer),this.clearIntervalTimer=setTimeout(()=>{this.adMap=[]},this.clearIntervalDuration)}),(0,n.Z)(this,"getADs",async(e=["test"])=>{const t={query:"query get($tags: [String!]!) {\n                        ad {\n                            get(tags: $tags) {\n                                id\n                                title\n                                content\n                                cover\n                                link\n                                to\n                                tags\n                                position\n                                available\n                                system\n                            }\n                        }\n                    }\n                    ",variables:{tags:e}};return await this.emit("requestController","createGraphQL",{options:t},async e=>{const{errors:t,data:i}=e;return!(t||!e)&&(e&&i?i.ad.get:void 0)})})}async onBeforeLaunch(){this.addListener("networkOnline",this.onNetworkOnline),this.addListener("initData",(e,t,i)=>{this.adMap=e,i()}),this.addListener("getAds",(e,t,i)=>{this.clearCache(),new($())(t=>{this.adMap&&0===this.adMap.length?this.getADs(e.tags).then(e=>{e&&(this.adMap=e),t(this.adMap)}):t(this.adMap)}).then(t=>{let n=[];t&&e.position&&(n=t.filter(t=>t.position===e.position)),n=n.filter(e=>e.system===this.systemType||"all"===e.system),i(n)})})}async onLaunch(){}}},37462:(e,t,i)=>{"use strict";i.d(t,{p:()=>n});const n=async(e,t)=>{const{detail:i,model:n,sign:o}=t;if(!n)throw"fetch from Model "+n;chrome.cookies.get(i,t=>{e.postMessage({command:"returnCookie",data:null===t||void 0===t?void 0:t.value,from:"helperProxy",model:n,sign:o})})}},48311:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.TabController=t.TAB_PERMISSION_ERRORS=t.tabErrorFactory=void 0;const o=i(93417),a=i(80172);t.tabErrorFactory=new a.ItemErrorFactory("tabController"),t.TAB_PERMISSION_ERRORS={LACK_OF_PERMISSION:t.tabErrorFactory.create("lackPermission")};class r extends o.Controller{constructor(e){super(e,"tabController",{dependencies:["permissionController"],settings:{on:!0}}),this.hasPermission=!1,this.getChromeWindow=()=>n(this,void 0,void 0,(function*(){return new Promise(e=>{chrome.windows.getAll({windowTypes:["normal"]},t=>{e(t||[])})})})),this.create=(e,t,i)=>n(this,void 0,void 0,(function*(){if(this.hasPermission&&(e.url||e.queryURL)){let t,n,o,a,r,s,l,c,d;({url:t,redirect:n="",focus:o=!1,strict:a=!0,queryURL:r=e.url,queryPattern:s="*",windowType:l="normal",active:c=!0,activeIfExist:d=!1}=e||{}),void 0===t&&(t=r);let h=r;r&&!1===a&&(h=r+s),h=h.replace(/^https?/,"*");const u=yield this.getChromeWindow();if(0===u.length)return yield chrome.windows.create({url:t});chrome.tabs.query({windowType:"normal"},e=>{if(0===e.length){const e=window.open("about:blank","emptyWindow");e.close()}}),o?chrome.tabs.create({url:n||t||r,active:c},e=>{i(e)}):chrome.tabs.query({url:h,windowType:l,currentWindow:!0},e=>{if(e&&e.length>0){const o=e[0],a={active:c};n&&(a.url=n),void 0!==t&&o.url,!o.active&&d&&(a.active=!0),chrome.tabs.update(e[0].id,a,e=>{i(e)})}else chrome.tabs.create({url:n||t||r,active:c},e=>{i(e)})})}}))}onBeforeLaunch(){return n(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["tabs"],e=>n(this,void 0,void 0,(function*(){this.hasPermission=e}))),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("tabs")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("create",this.create),chrome.tabs.onCreated.addListener(e=>{this.emit("*","onTabCreated",e)}),chrome.tabs.onUpdated.addListener((e,t,i)=>{this.emit("*","onTabUpdated",{tabId:e,changeInfo:t,tab:i})})}))}}t.TabController=r},96656:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliAccountController=void 0;const a=i(49675),r=i(26516),s=o(i(84564)),l=i(93611),c=i(93417),d=i(96486),h=o(i(58971)),u=i(77050);class p extends c.Controller{constructor(e){super(e,"bilibiliAccountController",{settings:{on:!0}}),this.accountMap=new Map,this.bindingAccount=null,this.isLocalBilibiliAccountLogin=!1,this.onLaunch=()=>n(this,void 0,void 0,(function*(){const e=this.getStore("uidList")||[],t=e.reduce((e,t)=>(e[t]=l.BilibiliAccount,e),{});yield this.loadItems(t),yield this.initLocalAccount()})),this.getLocalAccountLoginState=(e,t,i)=>{i(!!this.localAccount&&this.localAccount.hasLogin)},this.create=(e,t,i)=>n(this,void 0,void 0,(function*(){if(e.uid){const{uid:t}=e,n=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(t));if(n)return yield n.initAccountData(!0),i(n);{const e=new l.BilibiliAccount(this,String(t));return yield e.initAccountData(!0),this.setStore("uidList",[...new Set(Array.from(this.accountMap.values()).map(e=>e.uid))]),i(e)}}i(!1)})),this.onTabCreated=(e,t,i)=>{const{url:n,id:o}=e;this.onTabCreateORUpdateCallback(n,o)},this.onTabUpdated=(e,t,i)=>{const{tabId:n,changeInfo:o,tab:a}=e;"loading"===o.status&&this.onTabCreateORUpdateCallback(a.url,n)},this.onTabCreateORUpdateCallback=(e,t)=>{const i=new s.default(e,!0),{host:n,query:o}=i;if(n.match(/\.bilibili\.com/)&&void 0!==o.uid){const e=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(o.uid));e&&e.addTabs2SandBox(t)}},this.bind=(e,t,i)=>{this.emit("bilibiliHelperAccountController","getStatus",null,({hasLogin:e,bhAccount:t})=>{if(e&&(0,a.isVIP)(t)){const e=Array.from(this.accountMap.values()).filter(e=>e.bindState===r.BIND_STATE.BOUND);e.length<u.MAX_BIND_NUMBER&&(this.bindingAccount=new l.BilibiliAccount(this,"bind",{useSandBox:!0}),window.bindingAccount=this.bindingAccount,this.bindingAccount.manager=this)}}),i()},this.unbind=(e,t,i)=>{this.deleteAccount(e.uid),i(!0)},this.getLocalAccount=(e,t,i)=>{i(this.localAccount)},this.getAccount=(e,t,i)=>{this.accountMap.has(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid))?i(this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid))):i(!1)},this.getAccountList=(e,t,i)=>{if(e.uidList)Promise.all(e.uidList.map(e=>n(this,void 0,void 0,(function*(){const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e));return t||(yield this.create({uid:e},this,e=>e))})))).then(e=>{i(e)}).catch(()=>{i([])});else{const e=Array.from(this.accountMap.values()).filter(e=>e.bindState===r.BIND_STATE.BOUND).map(e=>e.toJSON());i(e)}},this.createTabByAccount=(e,t,i)=>{if(e){const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid));t.createTab()}i()},this.cancelBind=()=>{this.bindingAccount&&(this.bindingAccount.destroySandBox(),this.bindingAccount.cleanStore()),this.bindingAccount=null},this.completeBind=()=>n(this,void 0,void 0,(function*(){yield this.bindingAccount.completeBind(),this.accountMap.has("bilibiliAccount_bind")&&(this.accountMap.set(l.BILIBILI_ACCOUNT_PREFIX+String(this.bindingAccount.uid),this.bindingAccount),this.accountMap.delete("bilibiliAccount_bind")),this.setStore("uidList",[...new Set(Array.from(this.accountMap.values()).map(e=>e.uid))]),h.default.remove("bilibiliAccount_bind-data_default"),this.bindingAccount=null,chrome.tabs.query({url:chrome.runtime.getURL("html/config.html")},e=>{e&&e.length&&e.forEach(e=>{chrome.tabs.sendMessage(e.id,{action:"boundAccount"})})})})),this.deleteAccount=e=>{const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e));t&&(t.bindState=r.BIND_STATE.UNBOUND,t.saveAccountData(),t.cleanStore(),this.accountMap.delete(e),this.setStore("uidList",[...new Set(Array.from(this.accountMap.values()).map(e=>e.uid))]))},this.updateAccount=(e,t,i)=>{const n=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid));n&&e.videos},this.initNewAccount=e=>{},this.updateBaseInfo=e=>{},this.initLocalAccount=()=>n(this,void 0,void 0,(function*(){return new Promise(e=>{this.emit("cookieController","get",{name:"DedeUserID",url:"https://www.bilibili.com/"},t=>{e(t||null)})}).then(e=>new Promise(t=>this.create({uid:e},null,t)))})),this.getLocalUID=(e,t,i)=>{i(this.localAccount?this.localAccount.uid:void 0)},this.localBilibiliAccountLoginChange=({removed:e,cookie:t,cause:i})=>n(this,void 0,void 0,(function*(){const{name:n}=t;"explicit"!==i||e||"SESSDATA"!==n?e&&"SESSDATA"===n&&(this.localAccount&&(yield this.localAccount.initAccountData(!0)),yield this.emit("*","localBilibiliAccountLoginStateChange",{login:!1})):(yield this.initLocalAccount(),yield this.emit("*","localBilibiliAccountLoginStateChange",{login:t.expirationDate>Date.now()/1e3}))}))}get localAccount(){return Array.from(this.accountMap.values()).find(e=>e.isLocal)}get accountList(){return Array.from(this.accountMap.values())}onInitStore(){return n(this,void 0,void 0,(function*(){let e=this.getStore("uidList");e&&e.length>0&&(e=e.filter(e=>"bind"!==e),this.setStore("uidList",[...new Set(e)]))}))}onBeforeLaunch(){return n(this,void 0,void 0,(function*(){yield this.emit("cookieController","create",{name:"watchLocalBilibiliAccountLoginState",data:{filter:{names:["SESSDATA"],domain:".bilibili.com"}},callback:(0,d.debounce)(this.localBilibiliAccountLoginChange,50)}),this.addListener("create",this.create),this.addListener("getAccount",this.getAccount),this.addListener("getAccountList",this.getAccountList),this.addListener("getLocalAccount",this.getLocalAccount),this.addListener("getLocalUID",this.getLocalUID),this.addListener("getLocalAccountLoginState",this.getLocalAccountLoginState),this.addListener("bind",this.bind),this.addListener("unbind",this.unbind),this.addListener("createTabByAccount",this.createTabByAccount),this.addListener("cancelBind",this.cancelBind),this.addListener("completeBind",this.completeBind),this.addListener("onTabCreated",this.onTabCreated),this.addListener("onTabUpdated",this.onTabUpdated)}))}}t.BilibiliAccountController=p},41461:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataController=void 0;const o=i(94604),a=n(i(49520));class r extends o.Item{constructor(e,t,i){super(e,t,i),this.__itemType="dataController",this.dataMap=new Map}get db(){return void 0===this._db&&(this._db=new a.default(this.platform)),this._db}}t.DataController=r},64545:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaResult=void 0;class i{constructor(e,t,i){Object.assign(this,{code:e,message:t,data:i})}}t.MediaResult=i},73614:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return o(t,e),t},r=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;const s=i(69759),l=a(i(69063));class c extends s.Feature{constructor(e){super(e,"database"),this.getSettingsForUpload=(e,t,i)=>r(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onBeforeLaunch(){const e=Object.create(null,{onBeforeLaunch:{get:()=>super.onBeforeLaunch}});return r(this,void 0,void 0,(function*(){yield e.onBeforeLaunch.call(this),yield this.loadItems(l)}))}onLaunch(){const e=Object.create(null,{onLaunch:{get:()=>super.onLaunch}});return r(this,void 0,void 0,(function*(){yield e.onLaunch.call(this)}))}}t.Database=c},52081:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliLiveController=t.BilibiliLiveDatabase=void 0;const a=o(i(49520)),r=i(42151),s=i(64545),l=i(41461);class c extends a.default{constructor(){super("BilibiliLiveDatabase"),this.version(1).stores({live:"&roomId, shortId",record:"&roomId"})}}t.BilibiliLiveDatabase=c;class d extends l.DataController{constructor(e){super(e,"bilibiliLiveController",{platform:"bilibili",dataType:"live"}),this.dataMap=new Map,this.creatingTempList=new Map,this.requestQueue=new Map,this.getLiveRoomData=e=>n(this,void 0,void 0,(function*(){return this.emit("requestController","create",{url:"https://api.live.bilibili.com/room/v1/Room/room_init?id="+e,options:{contentType:"json"}},({data:e})=>0===e.code&&(null===e||void 0===e?void 0:e.data)?new s.MediaResult(0,"\u83b7\u53d6\u76f4\u64ad\u95f4\u6570\u636e\u6210\u529f",null===e||void 0===e?void 0:e.data):new s.MediaResult(-1,"\u83b7\u53d6\u76f4\u64ad\u95f4\u6570\u636e\u5931\u8d25",null===e||void 0===e?void 0:e.data))}))}onBeforeLaunch(){return n(this,void 0,void 0,(function*(){this.addListener("getLiveSteamConfig",(e,t,i)=>n(this,void 0,void 0,(function*(){if(e.roomId){const t=yield this.getSteamConfig(e.roomId,null===e||void 0===e?void 0:e.onlyVideo,null===e||void 0===e?void 0:e.onAudio);i(null===t||void 0===t?void 0:t.data)}else i(!1)}))),this.addListener("getLiveRoomData",(e,t,i)=>n(this,void 0,void 0,(function*(){if(e.roomId){const t=yield this.getLiveRoomData(e.roomId);i(null===t||void 0===t?void 0:t.data)}else i(!1)})))}))}getSteamConfig(e,t=!1,i=!1){const n="https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo",o={room_id:e,protocol:"0,1",format:"0,2",codec:"0,1",qn:3e4,platform:"web",ptype:16,only_video:Number(t),only_audio:Number(i)},a=(0,r.generateURLByParams)(n,o),l=this.emit("requestController","create",{url:a,options:{contentType:"json"}},({data:e})=>0===e.code&&(null===e||void 0===e?void 0:e.data)?new s.MediaResult(0,"\u83b7\u53d6\u76f4\u64ad\u95f4\u63a8\u6d41\u914d\u7f6e\u6210\u529f",null===e||void 0===e?void 0:e.data):new s.MediaResult(-1,"\u83b7\u53d6\u76f4\u64ad\u95f4\u63a8\u6d41\u914d\u7f6e\u5931\u8d25",null===e||void 0===e?void 0:e.data));return l||!1}parseParamsFromURL(e){const t=new URL(e),i=/^\/(?:blanc\/)?(\d+)/.exec(t.pathname);return!(!i||!i[1])&&+i[1]}turnCreateInterval(e){this.creatingTempList.delete(e);const t=setTimeout(()=>{this.creatingTempList.delete(e)},3e4);this.creatingTempList.set(e,t)}}t.BilibiliLiveController=d},65839:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return o(t,e),t},r=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveDanmukuButton=void 0;const l=a(i(67294)),c=s(i(60677)),d=i(76873),h=i(67294),u=i(42151),p=i(92593),m=(0,c.default)(d.Button)`
  width: max-content;
  height: 22px;
  border-radius: 4px;

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    border: 1px solid var(--bilibili-blue);
    background-color: white;
    color: var(--bilibili-blue);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on button, & button:hover {
    background-color: var(--bilibili-blue);
    color: white;
  }
`,g=()=>r(void 0,void 0,void 0,(function*(){var e,t;const i="sendRoomDanmukuData",n=yield(0,p.getPageDataInWindow)(`(() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window.__STORE__?.baseInfoUser) {\n                    window.postMessage({command: '${i}', pageData: {...window.__STORE__}}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()`,i);return{isAdmin:null===(e=null===n||void 0===n?void 0:n.baseInfoUser)||void 0===e?void 0:e.isAdmin,roomId:null===(t=null===n||void 0===n?void 0:n.baseInfoRoom)||void 0===t?void 0:t.roomID}})),b=()=>{const[e,t]=(0,h.useState)(!1),[i,n]=(0,h.useState)(null),[o,a]=(0,h.useState)(!1),r=(0,l.useCallback)(()=>{chrome.runtime.sendMessage({target:"liveDanmuku",event:e?"closeDanmuku":"createDanmuku",roomId:i},i=>{const n=(e?"\u5173\u95ed":"\u5f00\u542f")+"\u76d1\u63a7";d.Message.info(n+"\u76d1\u63a7"+(i?"\u6210\u529f":"\u5931\u8d25")),i&&t(!e)})},[e,o,i]);return(0,h.useEffect)(()=>{(0,u.inLiveRoom)()&&!(0,u.inActivityLiveParentRoom)()&&g().then(({isAdmin:e,roomId:i})=>{a(e),n(i),chrome.runtime.sendMessage({target:"liveDanmuku",event:"getDanmuku",roomId:i},e=>{t(!!e)})})},[]),l.default.createElement(m,{className:e?"on":null,onClick:r},e?"\u5173\u95ed\u76d1\u63a7":"\u5f00\u542f\u76d1\u63a7")};t.LiveDanmukuButton=b},10461:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.danmuParser=t.danmuUserParser=void 0;const i=e=>!(e.length<1)&&{level:e[0]||0,label:e[1]||"--",anchorUsername:e[2]||"--",shortRoomID:e[3]||0,medalColor:e[4]||null,special:e[5]||"",iconId:e[6]||0,medalColorBorder:e[7],medalColorStart:e[8],medalColorEnd:e[9],guardLevel:e[10]||0,isLight:e[11],anchorId:e[12]},n=e=>({username:e[2][1]||"",uid:e[2][0]||0,isAdmin:!!e[2][2],isVip:!!e[2][3],isSvip:!!e[2][4],fansMedal:i(e[3]),title:e[5][1]||"",userLevel:e[4][0]||0,guardLevel:e[7]||0,chatBubbleType:e[0][10],chatBubbleColor:e[0][11],lpl:e[14]||0});t.danmuUserParser=n;const o=e=>{const i=(0,t.danmuUserParser)(e),n=e[9].ts||0;return{ts:n,userInfo:i,content:e[1]||"",validation:{ts:n,ct:e[9].ct||""},rnd:("number"===typeof e[0][5]?e[0][5]:parseInt(e[0][5]))||0,dmType:e[0][12]}};t.danmuParser=o},91787:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return o(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveRecord=void 0;const s=a(i(67294)),l=r(i(60677)),c=i(76873),d=i(49675),h=i(72912),u=i(42151),p=l.default.div`
  @font-face {
    font-family: "lato";
    font-weight: 300;
    src: url(${chrome.runtime.getURL("statics/fonts/Lato-Light.ttf")}) format('truetype');
  }

  @font-face {
    font-family: "lato";
    font-weight: 400;
    src: url(${chrome.runtime.getURL("statics/fonts/Lato-Regular.ttf")}) format('truetype');
  }
  margin-bottom: 12px;

  .declaration {
    margin: 8px 0 0;
    line-height: 18px;
    font-weight: 100;
    color: var(--google-grey-700);

    span {
      color: red;
    }
  }
`,m=l.default.h1`
  //display: flex;
  width: 100%;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`,g=l.default.div`
  position: relative;

  padding: 10px 14px 10px 10px;
  background-color: #fff;
  //background-image: linear-gradient(135deg, hsl(0deg 0% 99%), hsl(0deg 0% 95%));
  box-shadow: 0px 2px 6px rgb(0 0 0 / 16%);
  border-radius: 4px;

  &.error::after {
    content: '直播间解析错误，请联系客服「助手猫」喵';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(229 229 229 / 95%);
    border-radius: 4px;
  }

  &.init::after {
    content: '初始化中，请耐心等待喵';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(229 229 229 / 95%);
    border-radius: 4px;
  }

  .go-2-payment {
    margin-top: -1px;
    margin-left: auto;
    padding: 2px 3px;
    height: 13px;
    line-height: 14px;
    border-radius: 4px;
    font-weight: bold;
    background-color: var(--bilibili-pink);
    color: var(--bilibili-gray);
    transform: scale(0.8);
    cursor: pointer;
  }

  .login-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);

    .button {
      .button-view {
        padding: 0 22px;
      }
    }
  }

  .recorder {
    margin-right: auto;
    font-family: lato;

    @keyframes blink {
      0%, to {
        color: transparent;
      }

      50% {
        color: var(--google-red-500);
      }
    }

    &.playing {
      .recording-sign {
        color: var(--google-red-500);

        .bilibili-helper-2-icon-record {
          animation: blink 1s step-end infinite;
        }
      }
    }

    .line-select-wrapper {
      padding: 0 0 4px;
      display: flex;
      align-items: center;
      height: 12px;
      font-size: 12px;
      font-weight: normal;
      color: #999;
      border-bottom: 1px dashed rgb(231 231 231);

      .line-selector {
        flex-grow: 1;
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        background: none;
        color: #222;
      }
    }

    .main {
      margin-top: 8px;
      display: flex;
      align-items: center;

      .recorder-left {
        margin-right: auto;
      }
    }

    .recording-sign {
      margin-bottom: 2px;
      font-weight: bold;
      //visibility: hidden;
      color: var(--google-grey-400);

      //&.show {
      //  visibility: visible;
      //}

      .bilibili-helper-2-icon-record {
        margin-right: 2px;
        line-height: 10px;
      }
    }

    .current, .limit {
      display: flex;
      align-items: center;
    }

    .file-size {

    }

    .current {
      margin-bottom: 8px;

      :last-of-type {
        margin-bottom: 0;
      }

      .timer {
        line-height: 20px;
        font-size: 26px;
      }

      .file-size {
        align-self: flex-end;
        margin-left: 8px;
        line-height: 14px;
        font-size: 14px;
      }
    }

    .limit {
      font-size: 12px;
      color: #999;

      .timer {
      }

      .file-size {
        transform: scale(0.8);
        transform-origin: 0px 10px;
        line-height: 12px;
      }
    }
  }
`,b=(0,l.default)(c.Button)`
  transition: opacity .3s;

  &.disabled {
    opacity: .5;
  }
`,f=((0,l.default)(b)`
  margin-right: 12px;
  box-shadow: 0px 2px 5px #bcbcbc;
`,(0,l.default)(b)`
  margin-right: 12px;
  box-shadow: 0px 2px 5px #bcbcbc;
`,l.default.button`
  padding: 0;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 38px;
  background-color: #fff;
  cursor: pointer;
  transform: scale(1);
  transition: transform .3s, box-shadow .3s;

  :active {
    transform: scale(0.9);
  }

  &.stopped {
    color: var(--google-red-500);
    box-shadow: 0px 2px 5px #c48d88;
  }

  &.playing {
    color: rgb(59 59 59);
    box-shadow: rgb(179 178 178) 0px 1px 3px;
  }

  &[disabled] {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`),v=(l.default.div`
`,e=>{const t=new URL(e),i=/^\/(?:blanc\/)?(\d+)/.exec(t.pathname);return!(!i||!i[1])&&+i[1]}),y=v(location.href),k=3600,w=60,x=e=>{const t=Math.floor(e/k),i=Math.floor((e-t*k)/w),n=Math.round(e-t*k-i*w);return{hours:t,minutes:i,seconds:n}},S=()=>{const[e,t]=(0,s.useState)(!y),[i,n]=(0,s.useState)(!1),[o,a]=(0,s.useState)({live_time:Date.now()}),[r,l]=(0,s.useState)(!1),[b,v]=(0,s.useState)([]),[k,w]=(0,s.useState)(0),[S,C]=(0,s.useState)(!1),[L,_]=(0,s.useState)(!1),[I,E]=(0,s.useState)({number:0,unit:"Byte"}),[A,D]=(0,s.useState)({hours:0,minutes:0,seconds:0}),[O,T]=(0,s.useState)({hours:0,minutes:0,seconds:0}),[M,N]=(0,s.useState)(!1),[B,P]=(0,s.useState)(!1),[R,Z]=(0,s.useState)(!1),F=(0,s.useCallback)(e=>{w(e.target.selectedIndex),E((0,u.parseFileSize)(0)),T(x(0))},[]),q=(0,s.useCallback)(()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html#/")})},[]),j=(0,s.useCallback)(()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html?showPaymentModal=1")})},[]),U=(0,s.useCallback)(()=>{setTimeout(()=>{Z(!1)},300)},[]),H=(0,s.useCallback)(()=>{var e;if(Z(!0),setTimeout(()=>{Z(!1)},3e4),!S)return c.Message.info("\u8bf7\u5148\u767b\u5f55\u52a9\u624b\u8d26\u53f7");if(r)chrome.runtime.sendMessage({target:"liveRecord",event:"stopRecord",roomId:y},()=>{Z(!1)});else{const t=b[k];if(!t)return c.Message.error("\u5df2\u9009\u62e9\u7684\u7ebf\u8def\u65e0\u6548");chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record"});const{url:i,format:n}=t,a=null===(e=document.querySelector(".room-owner-username"))||void 0===e?void 0:e.textContent,r=new Date,s=r.toLocaleDateString().replace(/[/:]/g,"-"),d=Object.values(x((Date.now()-1e3*o.live_time)/1e3)).map(e=>String(e).padStart(2,"0")).join("-");chrome.runtime.sendMessage({target:"liveRecord",event:"startRecord",roomId:y,filename:`${a}_${s}_${d}`,url:i,format:n},e=>{Z(!1),U(),e?(E((0,u.parseFileSize)(0)),T(x(0)),l(e)):(l(!1),c.Message.error("\u5f55\u5236\u5931\u8d25/\u53d6\u6d88\u5f55\u5236"))})}},[r,o,b,k,S]);return(0,s.useEffect)(()=>{chrome.runtime.onMessage.addListener((e,t,i)=>{if("liveRecordSecondData"===e.command){const{size:t,recordTime:i}=e;E((0,u.parseFileSize)(t)),T(x(i))}else if("stopLiveRecord"===e.command){const{size:t,recordTime:i}=e,n=x(i);E((0,u.parseFileSize)(t)),T(n),!n.hours&&n.minutes<=10?chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record-time",label:Math.round(n.minutes)}):chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record-time",label:5*Math.round((60*n.hours+n.minutes)/5)}),l(!1),U(),c.Message.error("\u5f55\u5236\u7ed3\u675f")}return i(!0),!0})},[]),(0,s.useEffect)(()=>{Z(!0),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{e&&e.hasLogin&&e.bhAccount&&(C(e.hasLogin),_((0,d.isVIP)(e.bhAccount)))}),chrome.runtime.sendMessage({target:"liveRecord",event:"getSetting"},({limitSize:e})=>{D(x(600))}),chrome.runtime.sendMessage({target:"liveRecord",event:"getCurrentRecord",roomId:y},e=>{l(e)}),chrome.runtime.sendMessage({target:"liveRecord",event:"getSteamOption",roomId:y},e=>{e&&v(e)}),chrome.runtime.sendMessage({target:"liveRecord",event:"initRecord",roomId:y},e=>{Z(!1),e?(n(!0),a(e)):(n(!1),t(!0),c.Message.info("\u76f4\u64ad\u95f4\u5f55\u5236\u53c2\u6570\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u300c\u52a9\u624b\u732b\u300d\u5657"))})},[]),s.default.createElement(p,null,s.default.createElement(m,null,"\u76f4\u64ad\u89c6\u9891\u5f55\u5236"),s.default.createElement(g,{className:[R?null:e?"error":"",i?null:"init"].filter(Boolean).join(" ")},s.default.createElement("div",{className:["recorder",r?"playing":null].filter(Boolean).join(" ")},s.default.createElement("div",{className:"line-select-wrapper"},"\u9009\u62e9",s.default.createElement("select",{className:"line-selector",disabled:r,onChange:F,placeholder:"\u6ca1\u6709\u53ef\u9009\u7ebf\u8def"},b.length>0?b.map(({format:e,codecName:t,rate:i},n)=>s.default.createElement("option",{key:n,value:n},"\u7ebf\u8def",n+1,", ",h.LIVE_FORMAT_NAME_MAP[i],", ",e,", ",t)):s.default.createElement("option",null,"\u6ca1\u6709\u53ef\u9009\u7ebf\u8def"))),s.default.createElement("div",{className:"main"},s.default.createElement("div",{className:"recorder-left"},s.default.createElement("div",{className:["recording-sign",!!r&&"show"].filter(Boolean).join(" ")},s.default.createElement(c.Icon,{icon:"record",size:12}),"REC"),s.default.createElement("div",{className:"current"},s.default.createElement("div",{className:"timer"},L?s.default.createElement("span",null,String(O.hours).padStart(2,"0"),":"):null,s.default.createElement("span",null,String(O.minutes).padStart(2,"0"),":"),s.default.createElement("span",null,String(O.seconds).padStart(2,"0"))),s.default.createElement("div",{className:"file-size"},s.default.createElement("span",{className:"size"},I.number.toFixed(2)),s.default.createElement("span",{className:"unit"},I.unit))),L?null:s.default.createElement("div",{className:"limit"},"Limit:\xa0",s.default.createElement("div",{className:"timer"},L?null:s.default.createElement("span",null,String(A.hours).padStart(2,"0"),":"),s.default.createElement("span",null,String(A.minutes).padStart(2,"0"),":"),s.default.createElement("span",null,String(A.seconds).padStart(2,"0"))),S&&!L?s.default.createElement("span",{className:"go-2-payment",onClick:j},"\u89e3\u9501\u9650\u5236"):null)),s.default.createElement(f,{className:r?"playing":"stopped",disabled:R||!i||0===b.length,onClick:H},s.default.createElement(c.Icon,{className:"record-icon",icon:r?"stop":"record",size:16})))),S?null:s.default.createElement("div",{className:"login-wrapper"},s.default.createElement(c.Button,{className:"primary",onClick:q},"\u70b9\u51fb\u767b\u5f55\u540e\u542f\u7528"))),s.default.createElement("p",{className:"declaration"},"\u203b \u5b9e\u9645\u5f55\u5236\u65f6\u957f\u4e0e\u6587\u4ef6\u5927\u5c0f\u53ef\u80fd\u7565\u6709\u6240\u51fa\u5165",s.default.createElement("br",null),s.default.createElement("span",null,"\u203b \u6b63\u5f0f\u7248(v3.0.0)\u540e\u5c06\u4e0d\u518d\u652f\u6301\u540e\u53f0\u5f55\u5236")))};t.LiveRecord=S},37207:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveRecord=void 0;const o=i(69759),a=600;class r extends o.Feature{constructor(e){super(e,"liveRecord",{settings:{on:!0,limitSize:314572800}}),this.recordConfigMap=new Map,this.recordingMap=new Map,this.getCurrentRecord=(e,t,i)=>n(this,void 0,void 0,(function*(){var n;e.roomId||i(!1);let o=this.recordingMap.get(e.roomId);o&&!(null===o||void 0===o?void 0:o.stop)&&(null===(n=null===t||void 0===t?void 0:t.tab)||void 0===n?void 0:n.id)?(o.tabId=t.tab.id,i(!0)):i(!1)})),this.initRecord=(e,t,i)=>n(this,void 0,void 0,(function*(){e.roomId||i(!1);const t=yield this.emit("bilibiliLiveController","getLiveRoomData",e);i(t||!1)})),this.parseURLSFromConfig=(e,t="flv")=>n(this,void 0,void 0,(function*(){var t,i;let n;n=this.recordConfigMap.has(e)?this.recordConfigMap.get(e):yield this.emit("bilibiliLiveController","getLiveSteamConfig",{roomId:e});let o="http_stream";const a=null===(i=null===(t=null===n||void 0===n?void 0:n.playurl_info)||void 0===t?void 0:t.playurl)||void 0===i?void 0:i.stream;let r=[];if(a){const e=a.find(({protocol_name:e})=>e===o);for(const t of null===e||void 0===e?void 0:e.format)null===t||void 0===t||t.codec.forEach(e=>{if(e){const{base_url:i,url_info:n,codec_name:o,current_qn:a}=e;r.push(...null===n||void 0===n?void 0:n.map(({host:e,extra:n})=>{let r="fmp4"===t.format_name?"mp4":t.format_name;return{url:e+i+n,format:r,codecName:o,rate:a}}))}})}return r.sort((e,t)=>e.rate>=t.rate?1:0).sort(e=>"fmp4"===e.type?1:0)})),this.startRecord=(e,t,i)=>n(this,void 0,void 0,(function*(){var o;e.roomId&&e.url&&e.format||i(!1);const{url:r,format:s,roomId:l,filename:c=l+"_"+Date.now()}=e;let d=this.recordingMap.get(l);d&&(clearInterval(d.recordTimer),this.recordingMap.delete(l));const h=new AbortController,u=10;let p,m,g,b=0,f=0,v=0;d={roomId:l,tabId:null===(o=null===t||void 0===t?void 0:t.tab)||void 0===o?void 0:o.id,recordTimer:0,stop:!1,disconnected:!1},this.recordingMap.set(l,d),window.showSaveFilePicker({suggestedName:c+"."+s,types:[{accept:{["video/"+s]:["."+s]}}]}).then(e=>n(this,void 0,void 0,(function*(){return p=e,m=yield p.createWritable()}))).then(()=>n(this,void 0,void 0,(function*(){g=yield fetch(r,{signal:h.signal}).then(e=>e.body.getReader()).catch(e=>{throw new Error(e.message)}),d.recordTimer=setInterval(()=>{b+=1,d.disconnected&&(f+=1),chrome.tabs.sendMessage(d.tabId,{command:"liveRecordSecondData",size:v,recordTime:b})},1e3),i(!0)}))).then(()=>n(this,void 0,void 0,(function*(){do{try{if(d=this.recordingMap.get(l),d){(!this.isVIP&&!this.isSuperVIP&&b>=a||d.disconnected&&f>=u)&&(d.stop=!0);const{done:e,value:t}=yield g.read();if(e||!t?d.disconnected=!0:(d.disconnected=!1,f=0),t){const e=new Blob([t],{type:"application/octet-stream"});yield m.write(e),v+=e.size}}}catch(t){d.stop=!0}}while(d&&!d.stop);h.abort(),clearInterval(d.recordTimer),yield m.close();const e=yield p.getFile();chrome.tabs.sendMessage(d.tabId,{command:"stopLiveRecord",size:e.size,recordTime:b})}))).catch(e=>n(this,void 0,void 0,(function*(){if(i(!1),d.stop=!0,clearInterval(d.recordTimer),h&&h.abort(),m)try{yield null===m||void 0===m?void 0:m.close()}catch(e){}if(p){const e=yield p.getFile();chrome.tabs.sendMessage(d.tabId,{command:"stopLiveRecord",size:e.size,recordTime:b})}})))})),this.stopRecord=(e,t,i)=>{e.roomId||i(!1);const n=this.recordingMap.get(e.roomId);n?(n.stop=!0,i(!0)):i(!1)},this.getSteamOption=(e,t,i)=>n(this,void 0,void 0,(function*(){if(!e.roomId)return i(!1);const t=yield this.parseURLSFromConfig(e.roomId);i(t||!1)})),this.checkLiveSteamUsable=e=>n(this,void 0,void 0,(function*(){yield this.emit("requestController","create",{url:e,options:{abortController:new AbortController,controlPassword:e}},e=>!(e.status>=400)),setTimeout(()=>{this.emit("requestController","cancel",{controlPassword:e})},1e3)})),this.modifyOriginAndReferer=e=>{const{initiator:t,requestHeaders:i}=e;if(/^chrome-extension:\/\//.test(t)){const e=[...i],t=e.findIndex(({name:e})=>"origin"===e.toLowerCase());return-1===t&&(e.push({name:"Origin",value:"https://live.bilibili.com"}),e.push({name:"Referer",value:"https://live.bilibili.com"})),{requestHeaders:e}}return{requestHeaders:i}},this.getSettingsForUpload=(e,t,i)=>n(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onBHAccountChange(e){return n(this,void 0,void 0,(function*(){this.isVIP?this.__firstLaunched&&!this.__launched&&this.settings.on&&(yield this.launch()):yield this.pause()}))}onBeforeLaunch(){return n(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"liveRecordModifyOriginAndReferer",eventName:"onBeforeSendHeaders",filter:{urls:["*://*.mcdn.bilivideo.cn/live-bvc/*","*://*.bilivideo.com/live-bvc/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyOriginAndReferer}),this.addListener("getCurrentRecord",this.getCurrentRecord),this.addListener("initRecord",this.initRecord),this.addListener("startRecord",this.startRecord),this.addListener("stopRecord",this.stopRecord),this.addListener("download",this.stopRecord),this.addListener("getSteamOption",this.getSteamOption)}))}}t.LiveRecord=r},77131:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Cat=void 0;const o=i(69759),a={top:100,right:24,direction:"right",locked:!0};class r extends o.Feature{constructor(e){super(e,"cat",{settings:{on:!0,catType:"default",showWhenFullWiden:!1,showInInjectPlayer:!1,autoClose:!1}}),this.handleConfigMap=new Map,this.getHandleConfig=(e,t,i)=>n(this,void 0,void 0,(function*(){return(null===e||void 0===e?void 0:e.type)&&this.handleConfigMap.has(e.type)?i(this.handleConfigMap.get(e.type)):i(a)})),this.setHandleConfig=(e,t,i)=>n(this,void 0,void 0,(function*(){if(null===e||void 0===e?void 0:e.type){const{left:t,right:n,top:o=100,direction:a="right",locked:r=!0}=e;return this.handleConfigMap.set(e.type,{left:t,right:n,top:o,direction:a,locked:r}),this.setStore("handleConfigMap",Array.from(this.handleConfigMap)),i(!0)}return i(!1)})),this.getTypeList=(e,t,i)=>n(this,void 0,void 0,(function*(){i(Array.from(this.handleConfigMap.keys()))})),this.resetPosition=(e,t,i)=>n(this,void 0,void 0,(function*(){this.handleConfigMap.has(e.type)?(this.handleConfigMap.set(e.type,{left:void 0,right:24,top:100,direction:"right",locked:!0}),i(!0)):i(!1)})),this.onAfterSetSettingsFromCloud=()=>n(this,void 0,void 0,(function*(){const e=this.getStore("handleConfigMap");e&&(this.handleConfigMap=new Map(e))})),this.getSettingsForUpload=(e,t,i)=>n(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{handleConfigMap:this.getStore("handleConfigMap")}})}))}onInitStore(){return n(this,void 0,void 0,(function*(){const e=this.getStore("handleConfigMap");e?this.handleConfigMap=new Map(e):(this.handleConfigMap=new Map,this.setStore("handleConfigMap",[]))}))}onBeforeLaunch(){return n(this,void 0,void 0,(function*(){this.addListener("getHandleConfig",this.getHandleConfig),this.addListener("setHandleConfig",this.setHandleConfig),this.addListener("getTypeList",this.getTypeList),this.addListener("resetPosition",this.resetPosition)}))}}t.Cat=r},81666:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectSSR=void 0;const o=i(69759),a=i(42151);class r extends o.Feature{constructor(e){super(e,"redirectSSR",{settings:{on:!1}}),this.watcher=e=>{const{url:t}=e,i=t.replace("bilibili.com/s/video/","bilibili.com/video/");return{redirectUrl:i}},this.getSettingsForUpload=(e,t,i)=>n(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onAfterSetSetting(e,t){return n(this,void 0,void 0,(function*(){e.on!==t.on&&(t.on?this.createWatcher():this.clearWatcher())}))}onLaunch(){return n(this,void 0,void 0,(function*(){this.settings.on&&this.createWatcher()}))}onPause(){return n(this,void 0,void 0,(function*(){this.settings.on||this.clearWatcher()}))}createWatcher(){this.emit("webRequestController","create",{name:"redirectSSRWatcher",eventName:"onBeforeRequest",filter:{urls:["*://*.bilibili.com/s/video/*"]},options:["blocking"],callback:(0,a.webRequestCallbackWrapper)(this.watcher)})}clearWatcher(){this.emit("webRequestController","clear",{name:"redirectSSRWatcher"})}}t.RedirectSSR=r},85870:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):o(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoGuide=void 0;const o=i(69759);class a extends o.Feature{constructor(e){super(e,"videoGuide",{settings:{on:!0,show:!0}}),this.getSettingsForUpload=(e,t,i)=>n(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoGuide=a},97465:(e,t,i)=>{"use strict";t.Y=void 0;const n=i(25498),o=i(92593),a=i(57563),r=()=>(0,n.getCurrentFrame)().then(e=>(0,o.copyImage2Clipboard)(e).then(e=>{a.Message.info("\u590d\u5236\u622a\u56fe"+(e?"\u6210\u529f":"\u5931\u8d25"))}));t.Y=r},13871:(e,t)=>{"use strict";t.k=void 0;const i=()=>{const e=document.querySelector(".bilibili-helper-play-position-link-btn button");e&&(null===e||void 0===e||e.click())};t.k=i}}]);