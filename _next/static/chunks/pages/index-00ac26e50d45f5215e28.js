_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return a}));var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),c=t.n(o),a=!0;n.default=function(e){var n=e.slugs;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"SSG"}),Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:e,children:e})},e)}))})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var c,a=o(t("q1tI")),u=t("elyg"),i=t("nOHt"),l=new Map,f=window.IntersectionObserver,s={};var d=function(e,n){var t=c||(f?c=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var n=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}l.delete(e)}):function(){}};function p(e,n,t,r){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),s[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",c=a.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,u.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),l=c.href,h=c.as,v=e.children,w=e.replace,y=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),E=g&&"object"===typeof g&&g.ref,j=a.default.useRef(),R={ref:a.default.useCallback((function(e){(j.current&&(j.current(),j.current=void 0),n&&f&&e&&e.tagName&&(0,u.isLocalURL)(l))&&(s[l+"%"+h]||(j.current=d(e,(function(){p(t,l,h,{locale:"undefined"!==typeof b?b:t&&t.locale})}))));E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[n,E,l,h,t,b]),onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,l,h,w,y,_,b)}};return n&&(R.onMouseEnter=function(e){(0,u.isLocalURL)(l)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),p(t,l,h,{priority:!0}))}),(e.passHref||"a"===g.type&&!("href"in g.props))&&(R.href=(0,u.addBasePath)((0,u.addLocale)(h,"undefined"!==typeof b?b:t&&t.locale,t&&t.defaultLocale))),a.default.cloneElement(g,R)};n.default=h},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2]]]);