(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1035:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return d}));var i=n(1),a=n(23);let r=null;function o(e){const t=Object(a.b)(e);return{screen:t.location.substring(1),params:t.params}}function s(e){decodeURIComponent(window.location.hash)!==r&&function(e){if(!window.matrixChat)return;i.a.log("Routing URL ",e.href);const t=o(e);window.matrixChat.showScreen(t.screen,t.params)}(window.location)}function c(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.a.log("newscreen "+e);const n="#/"+e;r=n,e.startsWith("room/")&&window.location.hash.includes("/$")===n.includes("/$")&&window.location.hash.startsWith(n)&&(t=!0),t?window.location.replace(n):window.location.assign(n)}function l(e){console.log("reloadPage to "+e),window.removeEventListener("hashchange",s),window.location.href=e}function d(){window.addEventListener("hashchange",s)}},1171:function(e,t){},1579:function(e,t,n){var i={"./":[229,9],"./ICanvasEffect":[1036,7,7],"./ICanvasEffect.ts":[1036,7,7],"./confetti":[433,9,0],"./confetti/":[433,9,0],"./confetti/index":[433,9,0],"./confetti/index.ts":[433,9,0],"./effect":[1037,9,8],"./effect.ts":[1037,9,8],"./fireworks":[434,9,1],"./fireworks/":[434,9,1],"./fireworks/index":[434,9,1],"./fireworks/index.ts":[434,9,1],"./index":[229,9],"./index.ts":[229,9],"./rainfall":[435,9,2],"./rainfall/":[435,9,2],"./rainfall/index":[435,9,2],"./rainfall/index.ts":[435,9,2],"./snowfall":[436,9,3],"./snowfall/":[436,9,3],"./snowfall/index":[436,9,3],"./snowfall/index.ts":[436,9,3],"./spaceinvaders":[437,9,4],"./spaceinvaders/":[437,9,4],"./spaceinvaders/index":[437,9,4],"./spaceinvaders/index.ts":[437,9,4],"./utils":[329,9],"./utils.ts":[329,9]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(i)},a.id=1579,e.exports=a},1606:function(e,t){},1608:function(e,t,n){"use strict";t.a=n.p+"i18n/languages.3256051.json"},1610:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var i=n(84),a=n.n(i);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const s={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontWeight:"bold",isUp:!1,isLeft:!1};class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,"browser",{ff:void 0!==window.InstallTrigger,opera:!!window.opera||navigator.userAgent.includes("Opera")}),a()(this,"params",void 0),a()(this,"canvas",void 0),a()(this,"baseImage",void 0),a()(this,"context",void 0),a()(this,"icons",void 0),a()(this,"isReady",!1),a()(this,"readyCb",()=>{}),this.params=o(o({},s),e),this.icons=c.getIcons(),this.canvas=document.createElement("canvas"),this.baseImage=document.createElement("img");const t=this.icons[this.icons.length-1];t.hasAttribute("href")?(this.baseImage.setAttribute("crossOrigin","anonymous"),this.baseImage.onload=()=>{this.canvas.height=this.baseImage.height>0?this.baseImage.height:32,this.canvas.width=this.baseImage.width>0?this.baseImage.width:32,this.context=this.canvas.getContext("2d"),this.ready()},this.baseImage.setAttribute("src",t.getAttribute("href"))):(this.canvas.height=this.baseImage.height=32,this.canvas.width=this.baseImage.width=32,this.context=this.canvas.getContext("2d"),this.ready())}reset(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height)}options(e,t){const n={n:"number"==typeof e?Math.abs(e):e,len:(""+e).length,x:.4,y:.4,w:.6,h:.6};return t.isUp&&(n.y<.6?n.y=n.y-.4:n.y=n.y-2*n.y+(1-n.w)),t.isLeft&&(n.x<.6?n.x=n.x-.4:n.x=n.x-2*n.x+(1-n.h)),n.x=this.canvas.width*n.x,n.y=this.canvas.height*n.y,n.w=this.canvas.width*n.w,n.h=this.canvas.height*n.h,n}circle(e,t){const n=o(o({},this.params),t),i=this.options(e,n);let a=!1;2===i.len?(i.x=i.x-.4*i.w,i.w=1.4*i.w,a=!0):i.len>=3&&(i.x=i.x-.65*i.w,i.w=1.65*i.w,a=!0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height),this.context.beginPath();const r=Math.floor(i.h*(i.n>99?.85:1))+"px";if(this.context.font=`${n.fontWeight} ${r} ${n.fontFamily}`,this.context.textAlign="center",a?(this.context.moveTo(i.x+i.w/2,i.y),this.context.lineTo(i.x+i.w-i.h/2,i.y),this.context.quadraticCurveTo(i.x+i.w,i.y,i.x+i.w,i.y+i.h/2),this.context.lineTo(i.x+i.w,i.y+i.h-i.h/2),this.context.quadraticCurveTo(i.x+i.w,i.y+i.h,i.x+i.w-i.h/2,i.y+i.h),this.context.lineTo(i.x+i.h/2,i.y+i.h),this.context.quadraticCurveTo(i.x,i.y+i.h,i.x,i.y+i.h-i.h/2),this.context.lineTo(i.x,i.y+i.h/2),this.context.quadraticCurveTo(i.x,i.y,i.x+i.h/2,i.y)):this.context.arc(i.x+i.w/2,i.y+i.h/2,i.h/2,0,2*Math.PI),this.context.fillStyle=n.bgColor,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.stroke(),this.context.fillStyle=n.textColor,"number"==typeof i.n&&i.n>999){const e=(i.n>9999?9:Math.floor(i.n/1e3))+"k+";this.context.fillText(e,Math.floor(i.x+i.w/2),Math.floor(i.y+i.h-.2*i.h))}else this.context.fillText(""+i.n,Math.floor(i.x+i.w/2),Math.floor(i.y+i.h-.15*i.h));this.context.closePath()}ready(){this.isReady||(this.isReady=!0,this.readyCb())}setIcon(t){e(()=>{this.setIconSrc(t.toDataURL("image/png"))})}setIconSrc(e){if(this.browser.ff||this.browser.opera){const t=this.icons[this.icons.length-1],n=window.document.createElement("link");this.icons=[n],n.setAttribute("rel","icon"),n.setAttribute("type","image/png"),window.document.getElementsByTagName("head")[0].appendChild(n),n.setAttribute("href",e),t.parentNode&&t.parentNode.removeChild(t)}else this.icons.forEach(t=>{t.setAttribute("href",e)})}badge(e,t){this.isReady?("string"==typeof e||e>0?this.circle(e,t):this.reset(),this.setIcon(this.canvas)):this.readyCb=()=>{this.badge(e,t)}}static getLinks(){const e=[],t=window.document.getElementsByTagName("head")[0].getElementsByTagName("link");for(let n=0;n<t.length;n++)/(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel"))&&e.push(t[n]);return e}static getIcons(){let e=c.getLinks();return 0===e.length&&(e=[window.document.createElement("link")],e[0].setAttribute("rel","icon"),window.document.getElementsByTagName("head")[0].appendChild(e[0])),e.forEach(e=>{e.setAttribute("type","image/png")}),e}}}).call(this,n(176).setImmediate)},465:function(e,t){},466:function(e,t){},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(4),a=n.n(i);async function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";""===e||e.endsWith("/")||(e+="/");const t=o(`${e}config.${document.domain}.json`),n=o(e+"config.json");try{const e=await t;if(0===Object.keys(e).length)throw new Error;return e}catch(e){return await n}}function o(e){return new Promise((function(t,n){a()({method:"GET",url:e,qs:{cachebuster:Date.now()}},(e,i,a)=>{try{if(e||i.status<200||i.status>=300)return i&&(404==i.status||0==i.status&&""==a)&&t({}),void n({err:e,response:i});t(JSON.parse(a))}catch(e){n({err:e})}})}))}},685:function(e,t){},689:function(e,t){},82:function(e,t,n){"use strict";n.r(t),n.d(t,"rageshakePromise",(function(){return G})),n.d(t,"preparePlatform",(function(){return J})),n.d(t,"setupLogStorage",(function(){return Y})),n.d(t,"loadConfig",(function(){return Q})),n.d(t,"loadOlm",(function(){return X})),n.d(t,"loadLanguage",(function(){return Z})),n.d(t,"loadSkin",(function(){return ee})),n.d(t,"loadTheme",(function(){return te})),n.d(t,"loadApp",(function(){return ne})),n.d(t,"showError",(function(){return ie})),n.d(t,"showIncompatibleBrowser",(function(){return ae})),n.d(t,"_t",(function(){return re}));var i=n(1067),a=n(1068),r=n.n(a),o=n(155),s=n(83),c=n.n(s),l=n(85),d=n(90),u=n(122),h=n(95),p=n(258),g=n(1),f=n(84),w=n.n(f),m=n(295),y=n(1609),b=n(88),v=n(505),C=n(92),x=n(198),O=n(97),I=n(220),E=n(93),k=n(608),S=n(160),P=n(1033),j=n(5),A=n(1610);class D extends m.e{constructor(){super(...arguments),w()(this,"_favicon",void 0)}async getConfig(){return Object(j.a)()}getHumanReadableName(){return"Vector Base Platform"}get favicon(){return this._favicon?this._favicon:this._favicon=new A.a}updateFavicon(){let e="#d00",t=this.notificationCount;this.errorDidOccur&&(t=t||"×",e="#f00"),this.favicon.badge(t,{bgColor:e})}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),this.updateFavicon())}setErrorStatus(e){this.errorDidOccur!==e&&(super.setErrorStatus(e),this.updateFavicon())}startUpdater(){}getDefaultDeviceDisplayName(){return Object(l.a)("Unknown device")}}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}const U=window.electron,T=navigator.platform.toUpperCase().includes("MAC");function L(e){["call_state"].includes(e.action)&&U.send("app_onAction",e)}class B extends y.a{constructor(){super(),w()(this,"pendingIpcCalls",{}),w()(this,"nextIpcCallId",0),w()(this,"onIpcReply",(e,t)=>{if(void 0===t.id)return void g.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void g.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)}),U.on("seshatReply",this.onIpcReply)}async ipcCall(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const a=++this.nextIpcCallId;return new Promise((t,i)=>{this.pendingIpcCalls[a]={resolve:t,reject:i},window.electron.send("seshat",{id:a,name:e,args:n})})}async supportsEventIndexing(){return this.ipcCall("supportsEventIndexing")}async initEventIndex(e,t){return this.ipcCall("initEventIndex",e,t)}async addEventToIndex(e,t){return this.ipcCall("addEventToIndex",e,t)}async deleteEvent(e){return this.ipcCall("deleteEvent",e)}async isEventIndexEmpty(){return this.ipcCall("isEventIndexEmpty")}async isRoomIndexed(e){return this.ipcCall("isRoomIndexed",e)}async commitLiveEvents(){return this.ipcCall("commitLiveEvents")}async searchEventIndex(e){return this.ipcCall("searchEventIndex",e)}async addHistoricEvents(e,t,n){return this.ipcCall("addHistoricEvents",e,t,n)}async addCrawlerCheckpoint(e){return this.ipcCall("addCrawlerCheckpoint",e)}async removeCrawlerCheckpoint(e){return this.ipcCall("removeCrawlerCheckpoint",e)}async loadFileEvents(e){return this.ipcCall("loadFileEvents",e)}async loadCheckpoints(){return this.ipcCall("loadCheckpoints")}async closeEventIndex(){return this.ipcCall("closeEventIndex")}async getStats(){return this.ipcCall("getStats")}async getUserVersion(){return this.ipcCall("getUserVersion")}async setUserVersion(e){return this.ipcCall("setUserVersion",e)}async deleteEventIndex(){return this.ipcCall("deleteEventIndex")}}class M extends D{constructor(){super(),w()(this,"eventIndexManager",new B),w()(this,"pendingIpcCalls",{}),w()(this,"nextIpcCallId",0),w()(this,"ssoID",Object(I.b)(32)),w()(this,"onUpdateDownloaded",async(e,t)=>{let{releaseNotes:n,releaseName:i}=t;b.a.dispatch({action:E.a.CheckUpdates,status:m.d.Ready}),this.shouldShowUpdate(i)&&Object(k.b)(await this.getAppVersion(),i,n)}),w()(this,"onIpcReply",(e,t)=>{if(void 0===t.id)return void g.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void g.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)}),b.a.register(L),U.on("check_updates",(e,t)=>{b.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:E.a.CheckUpdates},function(e){return!0===e?{status:m.d.Downloading}:!1===e?{status:m.d.NotAvailable}:{status:m.d.Error,detail:e}}(t)))}),U.on("before-quit",(function(){g.a.log("element-desktop closing"),v.b()})),U.on("ipcReply",this.onIpcReply),U.on("update-downloaded",this.onUpdateDownloaded),U.on("preferences",()=>{b.a.fire(E.a.ViewUserSettings)}),U.on("userDownloadCompleted",(e,t)=>{let{id:n,name:i}=t;const a="DOWNLOAD_TOAST_"+n;S.a.sharedInstance().addOrReplaceToast({key:a,title:Object(l.a)("Download Completed"),props:{description:i,acceptLabel:Object(l.a)("Open"),onAccept:()=>{U.send("userDownloadAction",{id:n,open:!0}),S.a.sharedInstance().dismissToast(a)},dismissLabel:Object(l.a)("Dismiss"),onDismiss:()=>{U.send("userDownloadAction",{id:n})},numSeconds:10},component:P.a,priority:99})}),this.ipcCall("startSSOFlow",this.ssoID)}async getConfig(){return this.ipcCall("getConfig")}getHumanReadableName(){return"Electron Platform"}supportsMultiLanguageSpellCheck(){return!T}allowOverridingNativeContextMenus(){return!0}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),U.send("setBadgeCount",e))}supportsNotifications(){return!0}maySendNotifications(){return!0}displayNotification(e,t,n,i,a){navigator.userAgent.includes("Linux")&&(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const r=super.displayNotification(e,t,n,i,a),o=r.onclick;return r.onclick=()=>{null==o||o(),this.ipcCall("focusWindow")},r}loudNotification(e,t){U.send("loudNotification")}async getAppVersion(){return this.ipcCall("getAppVersion")}supportsAutoLaunch(){return!0}async getAutoLaunchEnabled(){return this.ipcCall("getAutoLaunchEnabled")}async setAutoLaunchEnabled(e){return this.ipcCall("setAutoLaunchEnabled",e)}supportsWarnBeforeExit(){return!0}async shouldWarnBeforeExit(){return this.ipcCall("shouldWarnBeforeExit")}async setWarnBeforeExit(e){return this.ipcCall("setWarnBeforeExit",e)}supportsAutoHideMenuBar(){return!T}async getAutoHideMenuBarEnabled(){return this.ipcCall("getAutoHideMenuBarEnabled")}async setAutoHideMenuBarEnabled(e){return this.ipcCall("setAutoHideMenuBarEnabled",e)}supportsMinimizeToTray(){return!T}async getMinimizeToTrayEnabled(){return this.ipcCall("getMinimizeToTrayEnabled")}async setMinimizeToTrayEnabled(e){return this.ipcCall("setMinimizeToTrayEnabled",e)}async canSelfUpdate(){const e=await this.ipcCall("getUpdateFeedUrl");return Boolean(e)}startUpdateCheck(){super.startUpdateCheck(),U.send("check_updates")}installUpdate(){U.send("install_update")}getDefaultDeviceDisplayName(){const e=h.b.get().brand;return Object(l.a)("%(brand)s Desktop (%(platformName)s)",{brand:e,platformName:navigator.userAgent.includes("Macintosh")?"macOS":navigator.userAgent.includes("FreeBSD")?"FreeBSD":navigator.userAgent.includes("OpenBSD")?"OpenBSD":navigator.userAgent.includes("SunOS")?"SunOS":navigator.userAgent.includes("Windows")?"Windows":navigator.userAgent.includes("Linux")?"Linux":"Unknown"})}screenCaptureErrorString(){return null}requestNotificationPermission(){return Promise.resolve("granted")}reload(){window.location.reload()}async ipcCall(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const a=++this.nextIpcCallId;return new Promise((t,i)=>{this.pendingIpcCalls[a]={resolve:t,reject:i},window.electron.send("ipcCall",{id:a,name:e,args:n})})}getEventIndexingManager(){return this.eventIndexManager}async setLanguage(e){return this.ipcCall("setLanguage",e)}setSpellCheckLanguages(e){this.ipcCall("setSpellCheckLanguages",e).catch(e=>{g.a.log("Failed to send setSpellCheckLanguages IPC to Electron"),g.a.error(e)})}async getSpellCheckLanguages(){return this.ipcCall("getSpellCheckLanguages")}async getDesktopCapturerSources(e){return this.ipcCall("getDesktopCapturerSources",e)}supportsDesktopCapturer(){return!0}async getAvailableSpellCheckLanguages(){return this.ipcCall("getAvailableSpellCheckLanguages")}getSSOCallbackUrl(e){const t=super.getSSOCallbackUrl(e);return t.protocol="element",t.searchParams.set("element-desktop-ssoid",this.ssoID),t}startSingleSignOn(e,t,n,i){super.startSingleSignOn(e,t,n,i),C.a.createTrackedDialog("Electron","SSO",x.a,{title:Object(l.a)("Go to your browser to complete Sign In"),description:c.a.createElement(O.a,null)})}navigateForwardBack(e){this.ipcCall(e?"navigateBack":"navigateForward")}overrideBrowserShortcuts(){return!0}async getPickleKey(e,t){try{return await this.ipcCall("getPickleKey",e,t)}catch(e){return null}}async createPickleKey(e,t){try{return await this.ipcCall("createPickleKey",e,t)}catch(e){return null}}async destroyPickleKey(e,t){try{await this.ipcCall("destroyPickleKey",e,t)}catch(e){}}}var R=n(4),F=n.n(R),_=n(1611),W=n.n(_),V=n(23),H=n(1035);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}class q extends D{constructor(){super(),w()(this,"pollForUpdate",(e,t)=>this.getMostRecentVersion().then(n=>{const i=this.getNormalizedAppVersion("v1.10.10");return i!==n?(this.shouldShowUpdate(n)?(console.log("Update available to "+n+", will notify user"),e(i,n)):console.log("Update available to "+n+" but won't be shown"),{status:m.d.Ready}):(console.log("No update available, already on "+n),null==t||t(),{status:m.d.NotAvailable})},e=>(g.a.error("Failed to poll for update",e),{status:m.d.Error,detail:e.message||e.status?e.status.toString():"Unknown Error"}))),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}getHumanReadableName(){return"Web Platform"}supportsNotifications(){return Boolean(window.Notification)}maySendNotifications(){return"granted"===window.Notification.permission}requestNotificationPermission(){return new Promise((function(e,t){window.Notification.requestPermission(t=>{e(t)})}))}getMostRecentVersion(){return new Promise((e,t)=>{F()({method:"GET",url:"version",qs:{cachebuster:Date.now()}},(n,i,a)=>{if(n||i.status<200||i.status>=300)return null===n&&(n={status:i.status}),void t(n);e(this.getNormalizedAppVersion(a.trim()))})})}getNormalizedAppVersion(e){return new RegExp("^v[0-9]+.[0-9]+.[0-9]+(-.+)?$").test(e)?e.substr(1):e}getAppVersion(){return Promise.resolve(this.getNormalizedAppVersion("v1.10.10"))}startUpdater(){console.log("startUpdater, current version is "+this.getNormalizedAppVersion("v1.10.10")),this.pollForUpdate((e,t)=>{if("1"===Object(V.a)(location).updated)return console.log("Update reloaded but still on an old version, stopping"),void Object(k.b)(e,t);let n="updated=1";n=0===window.location.search.length?"?"+n:"&"+n,Object(H.d)(window.location.href+n)}),setInterval(()=>this.pollForUpdate(k.b,k.a),6e5)}async canSelfUpdate(){return!0}startUpdateCheck(){super.startUpdateCheck(),this.pollForUpdate(k.b,k.a).then(e=>{b.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:E.a.CheckUpdates},e))})}installUpdate(){window.location.reload()}getDefaultDeviceDisplayName(){const e=new URL(window.location.href),t=[e.host,e.pathname.replace(/\/$/,"")].join(""),n=new W.a,i=n.getBrowser().name||"unknown browser";let a=n.getOS().name||"unknown OS";return"Mac OS"===a&&(a="macOS"),Object(l.a)("%(appName)s (%(browserName)s, %(osName)s)",{appName:t,browserName:i,osName:a})}screenCaptureErrorString(){return"https:"!==window.location.protocol?Object(l.a)("You need to be using HTTPS to place a screen-sharing call."):null}reload(){window.location.reload()}}class z extends q{setNotificationCount(e){if(!navigator.setAppBadge)return super.setNotificationCount(e);this.notificationCount!==e&&(this.notificationCount=e,navigator.setAppBadge(e).catch(e=>{g.a.error("Failed to update PWA app badge",e)}))}}var K=n(321);window.mxSendRageshake=function(e,t){const n=h.b.get().bug_report_endpoint_url;n?(void 0===t&&(t=!0),e&&e.trim()?Object(K.a)(n,{userText:e,sendLogs:t,progressCallback:g.a.log.bind(console)}).then(()=>{g.a.log("Bug report sent!")},e=>{g.a.error(e)}):g.a.error("Cannot send a rageshake without a message - please tell us what went wrong")):g.a.error("Cannot send a rageshake - no bug_report_endpoint_url configured")};const G=function(){const e=v.d(!1);return e.then(()=>{g.a.log("Initialised rageshake."),g.a.log("To fix line numbers in Chrome: Meatball menu → Settings → Ignore list → Add /rageshake\\.js$"),window.addEventListener("beforeunload",e=>{g.a.log("element-web closing"),v.b()}),v.a()},e=>{g.a.error("Failed to initialise rageshake: "+e)}),e}();function J(){window.electron?(g.a.log("Using Electron platform"),u.a.set(new M)):window.matchMedia("(display-mode: standalone)").matches?(g.a.log("Using PWA platform"),u.a.set(new z)):(g.a.log("Using Web platform"),u.a.set(new q))}function Y(){return h.b.get().bug_report_endpoint_url?v.e():(g.a.warn("No bug report endpoint set - logs will not be persisted"),Promise.resolve())}async function Q(){const e=await u.a.get().getConfig();e?h.b.put(e):h.b.unset()}function X(){return r.a.init({locateFile:()=>i.a}).then(()=>{g.a.log("Using WebAssembly Olm")}).catch(e=>(g.a.log("Failed to load Olm: trying legacy version",e),new Promise((e,t)=>{const n=document.createElement("script");n.src="olm_legacy.js",n.onload=e,n.onerror=t,document.body.appendChild(n)}).then(()=>window.Olm.init()).then(()=>{g.a.log("Using legacy Olm")}).catch(e=>{g.a.log("Both WebAssembly and asm.js Olm failed!",e)})))}async function Z(){const e=d.b.getValue("language",null,!0);let t=[];e?t=[e]:l.f().forEach(e=>{t.push(...l.g(e))});try{await l.l(t),document.documentElement.setAttribute("lang",l.e())}catch(e){g.a.error("Unable to set language",e)}}async function ee(){g.a.log("Loading skin...");const[e,t]=await Promise.all([Promise.resolve().then(n.bind(null,131)),n.e(12).then(n.bind(null,1635))]);e.loadSkin(t),g.a.log("Skin loaded!")}async function te(){Object(p.h)()}async function ne(e){const t=await n.e(11).then(n.bind(null,1632));window.matrixChat=o.render(await t.loadApp(e),document.getElementById("matrixchat"))}async function ie(e,t){const i=(await n.e(13).then(n.bind(null,1633))).default;window.matrixChat=o.render(s.createElement(i,{title:e,messages:t}),document.getElementById("matrixchat"))}async function ae(e){const t=(await n.e(10).then(n.bind(null,1634))).default;window.matrixChat=o.render(s.createElement(t,{onAccept:e}),document.getElementById("matrixchat"))}const re=l.a}}]);
//# sourceMappingURL=init.js.map