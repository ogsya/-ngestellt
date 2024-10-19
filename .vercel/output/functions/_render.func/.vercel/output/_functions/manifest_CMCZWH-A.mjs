import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D8XVjDz-.mjs';
import { e as decodeKey } from './chunks/astro/server_Dal-hXxL.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => {
      return "/" + segment.map((part) => {
        if (part.spread) {
          return `${sanitizedParams[part.content.slice(3)] || ""}`;
        } else if (part.dynamic) {
          return `${sanitizedParams[part.content] || ""}`;
        } else {
          return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
      }).join("");
    }).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/siyargulmez/visible-velocity/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.he4UvBhn.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CntnL8WP.js"}],"styles":[{"type":"external","src":"/_astro/about.he4UvBhn.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/search\\.json\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/search.json.ts","pathname":"/articles/api/search.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.he4UvBhn.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.he4UvBhn.css"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.he4UvBhn.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BSFXOkZ_.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.BswZJUt7.css"},{"type":"external","src":"/_astro/about.he4UvBhn.css"},{"type":"inline","content":".bubble[data-astro-cid-g42mys5r]{position:relative;padding:8%;background-color:#000;color:#fff;border-radius:45px;border:1px solid #B9FF66}.bubble[data-astro-cid-g42mys5r]:after{content:\"\";position:absolute;bottom:-20px;left:50px;border-width:22px;border-style:solid;border-color:black transparent transparent black}.bubble[data-astro-cid-g42mys5r]:before{content:\"\";position:absolute;bottom:-40px;left:48px;border-width:20px;border-style:solid;border-color:#B9FF66 transparent transparent #B9FF66}.swiper-wrapper[data-astro-cid-g42mys5r]{position:relative}.swiper-slide[data-astro-cid-g42mys5r]{display:flex;align-items:center;justify-content:center;transition:all .5s ease-in-out}.swiper-pagination[data-astro-cid-g42mys5r]{display:flex;align-items:center;width:auto!important;position:static!important}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/visible-velocity/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/visible-velocity/src/pages/articles/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/visible-velocity/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/visible-velocity/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/visible-velocity/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/visible-velocity/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/visible-velocity/src/pages/pricing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/api/search.json@_@ts":"pages/articles/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/siyargulmez/visible-velocity/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/How to quickly deploy a static website.md?astroContentCollectionEntry=true":"chunks/How to quickly deploy a static website_BcYT99Bj.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/cannon-excellence.md?astroContentCollectionEntry=true":"chunks/cannon-excellence_DHNYtN5Q.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/cutting-edge-tablets.md?astroContentCollectionEntry=true":"chunks/cutting-edge-tablets_C1ayHny6.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/elevate-your-mobile-experience.md?astroContentCollectionEntry=true":"chunks/elevate-your-mobile-experience_ed4u0hTW.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/guardian-of-the-digital-realm.md?astroContentCollectionEntry=true":"chunks/guardian-of-the-digital-realm_Dl8Pa3xj.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/How to quickly deploy a static website.md?astroPropagatedAssets":"chunks/How to quickly deploy a static website_BwkaN_WT.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/cannon-excellence.md?astroPropagatedAssets":"chunks/cannon-excellence_BdEm0MdA.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/cutting-edge-tablets.md?astroPropagatedAssets":"chunks/cutting-edge-tablets_DJ2PVlxi.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/elevate-your-mobile-experience.md?astroPropagatedAssets":"chunks/elevate-your-mobile-experience_CETjO5H_.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/guardian-of-the-digital-realm.md?astroPropagatedAssets":"chunks/guardian-of-the-digital-realm_b0If30GI.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/How to quickly deploy a static website.md":"chunks/How to quickly deploy a static website_joZkPNsV.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/cannon-excellence.md":"chunks/cannon-excellence_tVHvrnyY.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/cutting-edge-tablets.md":"chunks/cutting-edge-tablets_DJlMt1Tq.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/elevate-your-mobile-experience.md":"chunks/elevate-your-mobile-experience_PvfzFB6S.mjs","/Users/siyargulmez/visible-velocity/src/content/blog/guardian-of-the-digital-realm.md":"chunks/guardian-of-the-digital-realm_DVTuq-xp.mjs","\u0000@astrojs-manifest":"manifest_CMCZWH-A.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.CntnL8WP.js","/astro/hoisted.js?q=0":"_astro/hoisted.CmkSwYHY.js","/astro/hoisted.js?q=2":"_astro/hoisted.BSFXOkZ_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.he4UvBhn.css","/404.svg","/Hero.svg","/Logo.svg","/cover.png","/favicon.svg","/_astro/hoisted.BSFXOkZ_.js","/_astro/hoisted.BswZJUt7.css","/_astro/hoisted.CmkSwYHY.js","/_astro/hoisted.CntnL8WP.js","/blog/image1.png","/blog/image2.png","/blog/image3.png","/blog/image4.png","/blog/image5.png","/clients/01.svg","/clients/02.svg","/clients/03.svg","/clients/04.svg","/clients/05.svg","/clients/06.svg","/clients/bubble.svg","/clients/contact.svg","/services/01.svg","/services/02.svg","/services/03.svg","/services/04.svg","/services/05.svg","/services/06.svg","/services/Illustration.svg","/services/ag.svg","/services/agc.svg","/services/aw.svg","/team/c1.png","/team/c2.png","/team/c3.png","/team/contact.svg","/team/ln.svg","/team/lng.svg","/team/minus.svg","/team/plus.svg","/team/prof.png","/team/vector.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"3/HdoDRXOVCHj/nEPoVgihOm2G5eSkf7lk1ZJ/hhLng=","experimentalEnvGetSecretEnabled":false});

export { manifest };
