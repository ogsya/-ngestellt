import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_m6Yk4ZMO.mjs';
import { manifest } from './manifest_CMQ4zzez.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page4 = () => import('./pages/articles/api/send.mail.astro.mjs');
const _page5 = () => import('./pages/articles.astro.mjs');
const _page6 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page7 = () => import('./pages/bewerber.astro.mjs');
const _page8 = () => import('./pages/chancen.astro.mjs');
const _page9 = () => import('./pages/impressum.astro.mjs');
const _page10 = () => import('./pages/pricing.astro.mjs');
const _page11 = () => import('./pages/unternehmen.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/api/search.json.ts", _page3],
    ["src/pages/articles/api/Send.Mail.js", _page4],
    ["src/pages/articles/index.astro", _page5],
    ["src/pages/articles/[...slug].astro", _page6],
    ["src/pages/bewerber/index.astro", _page7],
    ["src/pages/chancen/index.astro", _page8],
    ["src/pages/impressum/index.astro", _page9],
    ["src/pages/pricing.astro", _page10],
    ["src/pages/unternehmen/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2fdf3846-bc9c-44c4-9857-8b866690bf7f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
