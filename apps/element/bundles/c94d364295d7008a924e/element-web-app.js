(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1276:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(1),a=n.n(o),r=n(0),i=n.n(r),l=n(29),s=n(2);var c=()=>{var e;const t=l.b.getObject("branding"),n=null!==(e=null==t?void 0:t.get("auth_footer_links"))&&void 0!==e?e:[{text:"Blog",url:"https://element.io/blog"},{text:"Twitter",url:"https://twitter.com/element_hq"},{text:"GitHub",url:"https://github.com/vector-im/element-web"}],o=[];for(const e of n)o.push(i.a.createElement("a",{href:e.url,key:e.text,target:"_blank",rel:"noreferrer noopener"},e.text));return i.a.createElement("footer",{className:"mx_AuthFooter",role:"contentinfo"},o,i.a.createElement("a",{href:"https://matrix.org",target:"_blank",rel:"noreferrer noopener"},Object(s.b)("Powered by Matrix")))};class d extends r.PureComponent{static getWelcomeBackgroundUrl(){if(d.welcomeBackgroundUrl)return d.welcomeBackgroundUrl;const e=l.b.getObject("branding");d.welcomeBackgroundUrl="themes/element/img/backgrounds/lake.jpg";const t=null==e?void 0:e.get("welcome_background_url");if(t)if(Array.isArray(t)){const e=Math.floor(Math.random()*t.length);d.welcomeBackgroundUrl=t[e]}else d.welcomeBackgroundUrl=t;return d.welcomeBackgroundUrl}render(){const e={background:`center/cover fixed url(${d.getWelcomeBackgroundUrl()})`},t={position:"absolute",top:0,right:0,bottom:0,left:0,filter:"blur(40px)",background:e.background};return r.createElement("div",{className:"mx_AuthPage",style:e},r.createElement("div",{className:"mx_AuthPage_modal",style:{position:"relative",background:"initial"}},r.createElement("div",{className:"mx_AuthPage_modalBlur",style:t}),r.createElement("div",{className:"mx_AuthPage_modalContent",style:{display:"flex",zIndex:1,background:"rgba(255, 255, 255, 0.59)",borderRadius:"8px"}},this.props.children)),r.createElement(c,null))}}a()(d,"welcomeBackgroundUrl",void 0)},1504:function(e,t,n){var o={"./":[405,9],"./ICanvasEffect":[1400,7,11],"./ICanvasEffect.ts":[1400,7,11],"./confetti":[1296,9,1],"./confetti/":[1296,9,1],"./confetti/index":[1296,9,1],"./confetti/index.ts":[1296,9,1],"./effect":[1401,9,12],"./effect.ts":[1401,9,12],"./fireworks":[1297,9,2],"./fireworks/":[1297,9,2],"./fireworks/index":[1297,9,2],"./fireworks/index.ts":[1297,9,2],"./hearts":[1298,9,3],"./hearts/":[1298,9,3],"./hearts/index":[1298,9,3],"./hearts/index.ts":[1298,9,3],"./index":[405,9],"./index.ts":[405,9],"./rainfall":[1299,9,4],"./rainfall/":[1299,9,4],"./rainfall/index":[1299,9,4],"./rainfall/index.ts":[1299,9,4],"./snowfall":[1300,9,5],"./snowfall/":[1300,9,5],"./snowfall/index":[1300,9,5],"./snowfall/index.ts":[1300,9,5],"./spaceinvaders":[1301,9,6],"./spaceinvaders/":[1301,9,6],"./spaceinvaders/index":[1301,9,6],"./spaceinvaders/index.ts":[1301,9,6],"./utils":[610,9],"./utils.ts":[610,9]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(o)},a.id=1504,e.exports=a},1515:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),a=n(29);class r extends o.PureComponent{render(){var e;const t=a.b.getObject("branding"),n=null!==(e=null==t?void 0:t.get("auth_header_logo_url"))&&void 0!==e?e:"themes/element/img/logos/element-logo.svg";return o.createElement("aside",{className:"mx_AuthHeaderLogo"},o.createElement("img",{src:n,alt:"Element"}))}}},1554:function(e,t,n){"use strict";n.r(t),n.d(t,"loadApp",(function(){return U}));n(1426);var o=n(0),a=n.n(o),r=n(64),i=n(2),l=n(1279),s=n(410),c=n(1289),d=n(29),u=n(3),g=n(14),f=n(247),w=n(1437),m=n(6),h=n(625);let v=null;function p(e){const t=Object(h.b)(e);return{screen:t.location.substring(1),params:t.params}}function _(){decodeURIComponent(window.location.hash)!==v&&function(e){if(!window.matrixChat)return;u.a.log("Routing URL ",e.href);const t=p(e);window.matrixChat.showScreen(t.screen,t.params)}(window.location)}function b(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.a.log("newscreen "+e);const n="#/"+e;v=n,e.startsWith("room/")&&window.location.hash.includes("/$")===n.includes("/$")&&window.location.hash.startsWith(n)&&(t=!0),t?window.location.replace(n):window.location.assign(n)}function x(e){let t;t="vector:"===window.location.protocol?"https://app.element.io/#/register":window.location.protocol+"//"+window.location.host+window.location.pathname+"#/register";const n=Object(m.n)(e);return n&&(t+="?"+n),t}function k(){const e=new URL(window.location.href);e.searchParams.delete("loginToken"),u.a.log(`Redirecting to ${e.href} to drop loginToken from queryparams`),window.history.replaceState(null,"",e.href)}async function U(e){var t;window.addEventListener("hashchange",_);const n=r.a.get(),o=Object(h.a)(window.location),m=window.location.protocol+"//"+window.location.host+window.location.pathname;u.a.log("Vector starting at "+m),n.startUpdater();const v=await async function(){let e;try{u.a.log("Verifying homeserver configuration");const t=d.b.get();let n=t.default_server_config;const o=t.default_server_name,a=t.default_hs_url,r=t.default_is_url,c=[n,o,a].filter((e=>!!e));if(c.length>1)throw new i.a("Invalid configuration: can only specify one of default_server_config, default_server_name, or default_hs_url.");if(c.length<1)throw new i.a("Invalid configuration: no default server specified.");let g;a&&(u.a.log("Config uses a default_hs_url - constructing a default_server_config using this information"),u.a.warn("DEPRECATED CONFIG OPTION: In the future, default_hs_url will not be accepted. Please use default_server_config instead."),n={"m.homeserver":{base_url:a}},r&&(n["m.identity_server"]={base_url:r})),n&&(u.a.log("Config uses a default_server_config - validating object"),g=await s.a.fromDiscoveryConfig(n)),o&&(u.a.log("Config uses a default_server_name - doing .well-known lookup"),u.a.warn("DEPRECATED CONFIG OPTION: In the future, default_server_name will not be accepted. Please use default_server_config instead."),g=await s.a.findClientConfig(o)),e=l.a.buildValidatedConfigFromDiscovery(o,g,!0)}catch(t){const{hsUrl:n,isUrl:o,userId:a}=await c.c();if(!n||!a)throw t;u.a.error(t),u.a.warn("A session was found - suppressing config error and using the session's homeserver"),u.a.log("Using pre-existing hsUrl and isUrl: ",{hsUrl:n,isUrl:o}),e=await l.a.validateServerConfigWithStaticUrls(n,o,!0)}return e.isDefault=!0,u.a.log("Using homeserver config:",e),u.a.log("Updating SdkConfig with validated discovery information"),d.b.add({validated_server_config:e}),d.b.get()}(),U=new f.a(v),[y]=await c.b(),C=!!y,E=!!o.loginToken,O=Object(d.c)(v);let P=!0===O.immediate;const N="#/welcome"===window.location.hash||"#"===window.location.hash||""===window.location.hash;if(!P&&O.on_welcome_page&&N&&(P=!0),!C&&!E&&P){u.a.log("Bypassing app load to redirect to SSO");const e=Object(g.createClient)({baseUrl:v.validated_server_config.hsUrl,idBaseUrl:v.validated_server_config.isUrl});return r.a.get().startSingleSignOn(e,"sso",`/${p(window.location).screen}`),a.a.createElement(a.a.Fragment,null)}const A=null!==(t=U.get("default_device_display_name"))&&void 0!==t?t:null==n?void 0:n.getDefaultDeviceDisplayName();return a.a.createElement(w.a,{onNewScreen:b,makeRegistrationUrl:x,config:v,realQueryParams:o,startingFragmentQueryParams:e,enableGuest:!v.disable_guests,onTokenLoginCompleted:k,initialScreenAfterLogin:p(window.location),defaultDeviceDisplayName:A})}window.React=a.a,u.a.log("Application is running in production mode"),window.matrixLogger=u.a}}]);
//# sourceMappingURL=element-web-app.js.map