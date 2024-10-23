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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/siyargulmez/Positivus/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CntnL8WP.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/search\\.json\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/search.json.ts","pathname":"/articles/api/search.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/send.mail","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/Send\\.Mail\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"Send.Mail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/Send.Mail.js","pathname":"/articles/api/Send.Mail","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/bewerber","isIndex":true,"type":"page","pattern":"^\\/bewerber\\/?$","segments":[[{"content":"bewerber","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bewerber/index.astro","pathname":"/bewerber","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/chancen","isIndex":true,"type":"page","pattern":"^\\/chancen\\/?$","segments":[[{"content":"chancen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chancen/index.astro","pathname":"/chancen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/impressum","isIndex":true,"type":"page","pattern":"^\\/impressum\\/?$","segments":[[{"content":"impressum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/impressum/index.astro","pathname":"/impressum","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CmkSwYHY.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/unternehmen","isIndex":true,"type":"page","pattern":"^\\/unternehmen\\/?$","segments":[[{"content":"unternehmen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unternehmen/index.astro","pathname":"/unternehmen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CntnL8WP.js"}],"styles":[{"type":"external","src":"/_astro/about.CSexeDuL.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/Positivus/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/Positivus/src/pages/articles/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/Positivus/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/siyargulmez/Positivus/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/bewerber/index.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/chancen/index.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/impressum/index.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["/Users/siyargulmez/Positivus/src/pages/unternehmen/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/api/search.json@_@ts":"pages/articles/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/api/Send.Mail@_@js":"pages/articles/api/send.mail.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/bewerber/index@_@astro":"pages/bewerber.astro.mjs","\u0000@astro-page:src/pages/chancen/index@_@astro":"pages/chancen.astro.mjs","\u0000@astro-page:src/pages/impressum/index@_@astro":"pages/impressum.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/unternehmen/index@_@astro":"pages/unternehmen.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/siyargulmez/Positivus/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/siyargulmez/Positivus/src/content/blog/fachkraeftemangel-deutschland.md?astroContentCollectionEntry=true":"chunks/fachkraeftemangel-deutschland_COTz7t35.mjs","/Users/siyargulmez/Positivus/src/content/blog/herausforderungen-des-personalwesens.md?astroContentCollectionEntry=true":"chunks/herausforderungen-des-personalwesens_DgUATFqM.mjs","/Users/siyargulmez/Positivus/src/content/blog/zukunft-der-arbeit.md?astroContentCollectionEntry=true":"chunks/zukunft-der-arbeit_D8qO7k_7.mjs","/Users/siyargulmez/Positivus/src/content/blog/fachkraeftemangel-deutschland.md?astroPropagatedAssets":"chunks/fachkraeftemangel-deutschland_bCE30bzQ.mjs","/Users/siyargulmez/Positivus/src/content/blog/herausforderungen-des-personalwesens.md?astroPropagatedAssets":"chunks/herausforderungen-des-personalwesens_CDazwCs9.mjs","/Users/siyargulmez/Positivus/src/content/blog/zukunft-der-arbeit.md?astroPropagatedAssets":"chunks/zukunft-der-arbeit_CkSWvQQm.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/siyargulmez/Positivus/src/content/blog/fachkraeftemangel-deutschland.md":"chunks/fachkraeftemangel-deutschland_BBixjIzL.mjs","/Users/siyargulmez/Positivus/src/content/blog/herausforderungen-des-personalwesens.md":"chunks/herausforderungen-des-personalwesens_oRJ_kjxw.mjs","/Users/siyargulmez/Positivus/src/content/blog/zukunft-der-arbeit.md":"chunks/zukunft-der-arbeit_BZdBnyW8.mjs","\u0000@astrojs-manifest":"manifest_CMQ4zzez.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.CntnL8WP.js","/astro/hoisted.js?q=0":"_astro/hoisted.CmkSwYHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.CSexeDuL.css","/02_01.jpg","/02_02.jpg","/02_03.jpg","/03_01.jpg","/03_02.jpg","/03_03.jpg","/04_01.jpg","/04_02.jpg","/04_03.jpg","/404.svg","/Hero.svg","/Hero2.svg","/Logo.svg","/Logo2.svg","/Logo3.svg","/cover.png","/favicon.svg","/_astro/hoisted.CmkSwYHY.js","/_astro/hoisted.CntnL8WP.js","/blog/image1.png","/blog/image2.png","/blog/image3.png","/blog/image4.png","/blog/image5.png","/clients/01.svg","/clients/02.svg","/clients/03.svg","/clients/04.svg","/clients/05.svg","/clients/06.svg","/clients/bubble.svg","/clients/contact.svg","/services/01.svg","/services/02.svg","/services/03.svg","/services/04.svg","/services/05.svg","/services/06.svg","/services/Illustration.svg","/services/ag.svg","/services/agc.svg","/services/aw.svg","/team/c1.png","/team/c2.png","/team/c3.jpeg","/team/c4.JPG","/team/c4.png","/team/c5.jpeg","/team/contact.svg","/team/ln.svg","/team/lng.svg","/team/minus.svg","/team/plus.svg","/team/prof.png","/team/vector.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Ht53ttxSG9ze8pdu5WjabFNQz8yqce4TiBC217EsfYw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
