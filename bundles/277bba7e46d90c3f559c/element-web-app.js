(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1632:function(e,t,o){"use strict";o.r(t),o.d(t,"loadApp",(function(){return m}));var n=o(83),a=o.n(n),i=o(131),r=o(122),s=o(85),l=o(296),c=o(273),d=o(312),g=o(95),u=o(1),f=o(125),w=o(8),_=o(23),h=o(1035);function p(e){let t;t="vector:"===window.location.protocol?"https://app.element.io/#/register":window.location.protocol+"//"+window.location.host+window.location.pathname+"#/register";const o=Object.keys(e);for(let n=0;n<o.length;++n){t+=0===n?"?":"&";const a=o[n];t+=a+"="+encodeURIComponent(e[a])}return t}function v(){const e=new URL(window.location.href);e.searchParams.delete("loginToken"),u.a.log(`Redirecting to ${e.href} to drop loginToken from queryparams`),window.history.replaceState(null,"",e.href)}async function m(e){var t;Object(h.b)();const o=r.a.get(),n=Object(_.a)(window.location),m=window.location.protocol+"//"+window.location.host+window.location.pathname;u.a.log("Vector starting at "+m),o.startUpdater();const b=await async function(){let e;try{u.a.log("Verifying homeserver configuration");const t=g.b.get();let o=t.default_server_config;const n=t.default_server_name,a=t.default_hs_url,i=t.default_is_url,r=[o,n,a].filter(e=>!!e);if(r.length>1)throw Object(s.i)(Object(s.c)("Invalid configuration: can only specify one of default_server_config, default_server_name, or default_hs_url."));if(r.length<1)throw Object(s.i)(Object(s.c)("Invalid configuration: no default server specified."));a&&(u.a.log("Config uses a default_hs_url - constructing a default_server_config using this information"),u.a.warn("DEPRECATED CONFIG OPTION: In the future, default_hs_url will not be accepted. Please use default_server_config instead."),o={"m.homeserver":{base_url:a}},i&&(o["m.identity_server"]={base_url:i}));let d=null;o&&(u.a.log("Config uses a default_server_config - validating object"),d=await c.a.fromDiscoveryConfig(o)),n&&(u.a.log("Config uses a default_server_name - doing .well-known lookup"),u.a.warn("DEPRECATED CONFIG OPTION: In the future, default_server_name will not be accepted. Please use default_server_config instead."),d=await c.a.findClientConfig(n)),e=l.a.buildValidatedConfigFromDiscovery(n,d,!0)}catch(t){const{hsUrl:o,isUrl:n,userId:a}=await d.c();if(!o||!a)throw t;u.a.error(t),u.a.warn("A session was found - suppressing config error and using the session's homeserver"),u.a.log("Using pre-existing hsUrl and isUrl: ",{hsUrl:o,isUrl:n}),e=await l.a.validateServerConfigWithStaticUrls(o,n,!0)}return e.isDefault=!0,u.a.log("Using homeserver config:",e),u.a.log("Updating SdkConfig with validated discovery information"),g.b.add({validated_server_config:e}),g.b.get()}(),y=new w.a(b),[O]=await d.b(),C=!!O,U=!!n.loginToken,j=Object(g.c)(b);let D=!0===j.immediate;const k="#/welcome"===window.location.hash||"#"===window.location.hash;if(!D&&j.on_welcome_page&&k&&(D=!0),!C&&!U&&D){u.a.log("Bypassing app load to redirect to SSO");const e=Object(f.createClient)({baseUrl:b.validated_server_config.hsUrl,idBaseUrl:b.validated_server_config.isUrl});return void r.a.get().startSingleSignOn(e,"sso","/"+Object(h.a)(window.location).screen)}const I=null!==(t=y.get("default_device_display_name"))&&void 0!==t?t:o.getDefaultDeviceDisplayName(),S=i.getComponent("structures.MatrixChat");return a.a.createElement(S,{onNewScreen:h.c,makeRegistrationUrl:p,config:b,realQueryParams:n,startingFragmentQueryParams:e,enableGuest:!b.disable_guests,onTokenLoginCompleted:v,initialScreenAfterLogin:Object(h.a)(window.location),defaultDeviceDisplayName:I})}window.React=a.a,u.a.log("Application is running in production mode"),window.matrixLogger=u.a}}]);
//# sourceMappingURL=element-web-app.js.map