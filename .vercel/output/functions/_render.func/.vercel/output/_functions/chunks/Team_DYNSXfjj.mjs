import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent } from './astro/server_Dal-hXxL.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Layout_DeXoNeJC.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-1.5 font-medium bg-lime rounded-md"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "/Users/siyargulmez/Positivus/src/components/Topic.astro", void 0);

const team = [
	{
		title: "Gründer und Geschäftsführer",
		name: "Siyar Süleyman",
		description: "Passionierter Wasseringenieur mit einem Auge für Lösungen - und nicht Problemen",
		profile: "/team/c5.jpeg",
		link: "/"
	},
	{
		title: "Key Account Manager",
		name: "Tim Lehmkühler",
		description: "Unsere Akquiseleitung - Hands-On Mentalität und ambitionierter Headhunter",
		profile: "/team/c4.JPG",
		link: "/"
	},
	{
		title: "Headhunter und Recruiter",
		name: "Michael Braun",
		description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		profile: "/team/c3.jpeg",
		link: "/"
	}
];
const process = [
	{
		index: 1,
		label: "Erstgespräch",
		content: "Im Erstgespräch lernen wir dich und deine beruflichen Ziele kennen. Wir besprechen deine bisherigen Erfahrungen, Erwartungen und welche Art von Position am besten zu dir passt. So können wir den nächsten Schritt in deiner Karriere optimal planen."
	},
	{
		index: 2,
		label: "Bewerbungsgespräch",
		content: "Während des Bewerbungsgesprächs bereiten wir dich gründlich auf die Anforderungen der Position und des Unternehmens vor. Wir unterstützen dich dabei, deine Stärken hervorzuheben und geben dir wertvolle Tipps, damit du im Gespräch überzeugen kannst."
	},
	{
		index: 3,
		label: "Arbeitsvertrag",
		content: "Nachdem du den Auswahlprozess erfolgreich durchlaufen hast, begleiten wir dich bei der Vertragsgestaltung. Wir sorgen dafür, dass die Konditionen fair und transparent sind und zu einer langfristigen, erfolgreichen Zusammenarbeit mit deinem zukünftigen Arbeitgeber führen."
	},
	{
		index: 4,
		label: "Weitere Betreuung",
		content: "Auch nach deinem Start im neuen Job bleiben wir an deiner Seite. Wir stehen dir für Fragen und Anliegen zur Verfügung, unterstützen dich bei der Einarbeitung und begleiten dich dabei, dich erfolgreich in deinem neuen Arbeitsumfeld einzuleben."
	}
];
const teamData = {
	team: team,
	process: process
};

const $$Astro = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-zinc-100 overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]"> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")}> <div class="flex items-center gap-[25px]"> <span class="hidden sm:block sm:text-6xl">0${index}</span> ${title} </div> <div class="bg-white w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark"> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true"></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]"> <div class="w-full h-[2px] bg-black"></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]"> ${description} </p> </div> </div> `;
}, "/Users/siyargulmez/Positivus/src/components/Accordion.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Prozess", "description": "Schritt f\xFCr Schritt Begleitung um deine Ziele zu erreichen!" })} </div> <div class="my-6"> <div class="space-y-10"> ${teamData.process.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Accordion", $$Accordion, { "index": item.index, "title": item.label, "description": item.content })}`;
  })} </div> </div> <div class="relative flex flex-col items-center md:flex-row pt-6"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Team", "description": "Triff das erfahrene und kompetente Team, das hinter unserem erfolgreichen Recruiting und Headhunting steht." })} </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"> ${teamData.team.map(({ title, description, name, link, profile }) => renderTemplate`<div class="h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow-card border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="self-stretch justify-start items-start inline-flex"> <div class="grow shrink basis-0 justify-start items-center gap-8 flex"> <div class="h-[102.82px] left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")}> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal">${title}</div> <div class="text-xl font-medium">${name}</div> </div> </div>  <a${addAttribute(link, "href")} class="text-blue-500 hover:underline">Link</a> </div> <hr class="w-full border border-black"> <p class="text-sm md:text-lg">${description}</p> </div> </div>`)} </div> </div> <div class="w-full justify-center md:justify-end items-center inline-flex"> <button class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Das ganze Team
</button> </div> ` })}`;
}, "/Users/siyargulmez/Positivus/src/components/Team.astro", void 0);

export { $$Team as $, $$Topic as a };
