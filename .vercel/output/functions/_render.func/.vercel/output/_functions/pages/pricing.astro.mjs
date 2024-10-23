/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dal-hXxL.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DeXoNeJC.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus - Pricing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Wir arbeiten daran die offenen Stellen auszuschreiben.</h2> <p class="mb-5 font-light text-gray-500 sm:text-xl">Bei Ångestellt konzentrieren wir uns auf Märkte, in denen Technologie, Innovation und spezialisierte Fachkräfte zusammenkommen, um langfristigen Erfolg zu sichern und nachhaltiges Wachstum zu fördern.</p> </div> <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"></div> </div> ` })}</main> ` })}`;
}, "/Users/siyargulmez/Positivus/src/pages/pricing.astro", void 0);

const $$file = "/Users/siyargulmez/Positivus/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Pricing,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
