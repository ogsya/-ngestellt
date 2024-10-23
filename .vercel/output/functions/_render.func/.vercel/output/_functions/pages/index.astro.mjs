/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, b as createAstro } from '../chunks/astro/server_Dal-hXxL.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DeXoNeJC.mjs';
import { a as $$Topic, $ as $$Team } from '../chunks/Team_DYNSXfjj.mjs';
import { s as servicesData } from '../chunks/services_DCLNxvef.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl text-center md:text-left">Du liebst Wasser? <br> Wir finden den passenden <br> Job der dich glücklich macht</h1> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12 text-center md:text-left">Wir als Recruiter und Headhunter helfen dir bei deiner Jobsuche bei führenden Unternehmen in der Wasserwirtschaft. Und das alles - kostenlos!</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://github.com/manulthanura/Positivus" target="_blank" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Kontaktiere uns
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" width="100%" alt="Hero"> </div> </div>  ` })}`;
}, "/Users/siyargulmez/Positivus/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Karrierem\xF6glichkeiten", "description": "Wir glauben fest daran: Der passende Job wartet auf dich, aber wie findest du diesen? Genau dorthin m\xF6chten wir dich f\xFChren \u2013 denn dein n\xE4chster Karriereschritt ist unser gemeinsames Ziel." })}</div> <div class="flex-row items-center py-5"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> <!-- card start--> ${servicesData.map(({ background, name1, name2, arrow, link, image }) => renderTemplate`<div${addAttribute(background, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class=" text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name2}</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex"${addAttribute(link, "href")}> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute"${addAttribute(arrow, "src")}> </div> <div class="text-xl font-normal leading-7">Erfahre mehr</div> </a> </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block"${addAttribute(image, "src")}> </div> </div>`)} <!-- card end--> </div> </div> <div class="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="justify-start items-center gap-[275px] flex"> <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black"> <div class="text-3xl font-medium">Lass uns dich nach vorne bringen!</div> <div class="text-lg font-normal">"Wir glauben: um den passenden Job zu finden muss man manchmal über den Tellerrand hinausblicken. Das haben wir uns zur Mission gemacht und wollen dir in deiner Karriere den nächsten Schritt ermöglichen."</div> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAv1b7wiozjBvVMwfzk8jOXinqDolvzVhFQcW18D9769K4aQ/viewform?usp=sf_link" class="px-[35px] py-5 bg-zinc-900 hover:bg-lime text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex" target="_blank" rel="noopener noreferrer"> <div class="text-center text-xl font-normal leading-7">Kontaktiere uns</div> </a> </div> </div> <div class="hidden md:grid justify-items-center -m-20"> <img src="/services/Illustration.svg" width="50%" alt="cat"> </div> </div> </div> ` })}`;
}, "/Users/siyargulmez/Positivus/src/components/Services.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--
<Container>
<div class="relative flex flex-col items-center md:flex-row">
    <Topic title="Erfahrungsberichte" description="Erfahre, was unsere zufriedenen Bewerber sagen: Lies unsere Referenzen und finde heraus, wie wir dich bei deiner Jobsuche unterstützen können." />
</div>

<div class="rounded-[45px] bg-black mb-[150px] text-white">
    <SwiperSlider />
</div>

</Container>
-->`;
}, "/Users/siyargulmez/Positivus/src/components/Testimonial.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Kontakt", "description": "Verbinde dich mit uns und lass uns \xFCber deine n\xE4chsten Schritte sprechen. Wir kontaktieren dich innerhalb 24 Stunden - versprochen!" })} </div> <div class="relative flex flex-col items-center md:flex-row my-6 bg-zinc-100 rounded-[45px]"> <div class="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10"> <!-- Google Form embedded starts here --> <div style="max-width: 100%; overflow: hidden;"> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAv1b7wiozjBvVMwfzk8jOXinqDolvzVhFQcW18D9769K4aQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0" style="border-radius: 10px; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                Wird geladen…
            </iframe> </div> <!-- Google Form embedded ends here --> </div> <div class="hidden md:grid md:justify-items-end md:w-4/12 md:py-2"> <img src="./clients/contact.svg" alt="c" width="80%"> </div> </div> ` })}`;
}, "/Users/siyargulmez/Positivus/src/components/Contact.astro", void 0);

const $$Case = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="projects"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Blog", "description": "Erfahre was uns voran treibt." })} </div> <div class="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white"> <div class="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0"> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">Der Fachkräftemangel in der deutschen Wasserwirtschaft gefährdet sowohl die kurz- als auch langfristige Funktionsfähigkeit der Branche. Ohne ausreichend qualifiziertes Personal drohen Verzögerungen bei wichtigen Projekten, eine Verschlechterung der Wasserqualität und steigende Kosten für Verbraucher. Gleichzeitig wird die Modernisierung der alternden Infrastruktur erschwert, was die Nachhaltigkeit und Innovationskraft der Branche hemmt. Um diesen Herausforderungen zu begegnen, sind gezielte Investitionen in Bildung, Umschulung und die Attraktivität der Branche unerlässlich, um die Zukunft der Wasserversorgung zu sichern.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Lerne mehr</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">Die Arbeitswelt befindet sich in einem tiefgreifenden Wandel, der vor allem durch die digitale Transformation vorangetrieben wird. Technologien wie künstliche Intelligenz (KI), Automatisierung und das Internet der Dinge (IoT) haben bereits Einzug in zahlreiche Branchen gehalten und verändern die Art und Weise, wie wir arbeiten, grundlegend. Doch was bedeutet das für die Zukunft der Arbeit? Welche Chancen und Herausforderungen bringt die digitale Transformation mit sich?</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Lerne mehr</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">In den letzten Jahren steht das deutsche Personalwesen vor zunehmend komplexeren Herausforderungen. Der Fachkräftemangel zieht sich durch nahezu alle Branchen und macht es Unternehmen schwer, geeignete Talente zu finden, um die Lücken in ihren Teams zu schließen. Gerade in einer Zeit, in der technologische Entwicklungen rasant voranschreiten und der Bedarf an spezialisierten Fachkräften steigt, wird es immer schwieriger, die richtigen Mitarbeiter zu gewinnen und langfristig zu halten.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Lerne mehr</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> </div> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> </div> ` })}`;
}, "/Users/siyargulmez/Positivus/src/components/Case.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- POSITIVUS Official Astro theme -->${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Case", $$Case, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "/Users/siyargulmez/Positivus/src/pages/index.astro", void 0);

const $$file = "/Users/siyargulmez/Positivus/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
