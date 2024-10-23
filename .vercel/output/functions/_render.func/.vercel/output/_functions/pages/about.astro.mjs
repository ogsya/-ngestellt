/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dal-hXxL.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DeXoNeJC.mjs';
import { $ as $$Team } from '../chunks/Team_DYNSXfjj.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to My site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-0"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl text-center md:text-left">Wir navigieren dich <br> durch die Welt der Arbeitgeber <br> für deinen Erfolg!</h1> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12 text-center md:text-left">Wir glauben: um den passenden Job zu finden muss man manchmal über den Tellerrand hinausblicken. Das haben wir uns zur Mission gemacht und wollen dir in deiner Karriere den nächsten Schritt ermöglichen.</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://github.com/manulthanura/Positivus" target="_blank" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Kontaktiere uns
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero2.svg" width="100%" alt="Hero"> </div> </div>  ` })} <br> ${renderComponent($$result2, "Team", $$Team, {})} <br> </main> ` })}`;
}, "/Users/siyargulmez/Positivus/src/pages/about.astro", void 0);

const $$file = "/Users/siyargulmez/Positivus/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
