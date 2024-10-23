/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dal-hXxL.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DeXoNeJC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Impressum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20 py-10"> <div class="text-center"> <h1 class="text-5xl font-medium">Impressum</h1> </div> <section class="container mx-auto space-y-6"> <p class="text-xl"> <strong>Angestellt GmbH</strong><br>
Musterstraße 1<br>
12345 Musterstadt<br>
Deutschland
</p> <p class="text-xl"> <strong>Vertreten durch:</strong><br>
Max Mustermann, Geschäftsführer
</p> <p class="text-xl"> <strong>Kontakt:</strong><br>
Telefon: +49 (0)123 456 789<br>
E-Mail: info@angestellt.de
</p> <p class="text-xl"> <strong>Registereintrag:</strong><br>
Eintragung im Handelsregister.<br>
Registergericht: Amtsgericht Musterstadt<br>
Registernummer: HRB 12345
</p> <p class="text-xl"> <strong>Umsatzsteuer-ID:</strong><br>
Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 123456789
</p> <p class="text-xl"> <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
Max Mustermann<br>
Musterstraße 1<br>
12345 Musterstadt
</p> <p class="text-xl"> <strong>Haftungsausschluss:</strong><br>
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
</p> </section> </main> ` })}`;
}, "/Users/siyargulmez/Positivus/src/pages/impressum/index.astro", void 0);

const $$file = "/Users/siyargulmez/Positivus/src/pages/impressum/index.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
