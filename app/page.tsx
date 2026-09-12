'use client';

import { useState } from 'react';
import Link from 'next/link';

// Content structure - easily translatable
const content = {
  brandName: 'Omnibus',
  nav: {
    welkom: 'Welkom',
    visie: 'Visie',
    aanbod: 'Aanbod',
    overMij: 'Over mij',
    praktisch: 'Praktisch',
    contact: 'Contact',
  },
  hero: {
    tagline: 'Omnibus helpt mensen op verhaal te komen, te verbinden en opnieuw in beweging te brengen.',
    intro: 'Welkom bij Omnibus, praktijk voor persoonlijke groei en psychotherapie.',
    body: 'Ik ben Jeroen Dekker: geboren in \'88, trotse papa, psycholoog en bewonderaar van het leven. Omnibus is mijn persoonlijke praktijk waarin ik de verschillende kwaliteiten van mezelf en mijn opleidingsachtergrond integreer tot een gedegen en uitnodigend aanbod voor persoonlijke groei en psychotherapie.',
    cta: 'Neem contact op',
  },
  visie: {
    title: 'Visie',
    intro: 'Zoals vele dingen in het leven heeft ook Omnibus niet één vaste betekenis. Zie het als een kunstwerk, iets dat je op verschillende manieren kan interpreteren.',
    metaphors: [
      {
        title: 'Voor allen',
        text: 'Omnibus staat "voor allen": breed toegankelijk, met een open, nieuwsgierige blik en voor alle aspecten van het mens-zijn. Een professionele en authentieke ontmoeting, van mens tot mens, waarin we samen onderzoeken en verkennen.',
      },
      {
        title: 'Verzamelbundel',
        text: 'Het is een "verzamelbundel", zoals elk mens een unieke verzameling is van persoonlijke ervaringen en verhalen. Niet één symptoom of probleem, maar al onze ervaringen, relaties, kwetsuren, krachten en verlangens in samenhang met elkaar.',
      },
      {
        title: 'Transportmiddel',
        text: 'En, het is een "transportmiddel", een veilig kader dat je uitnodigt op een gezelschapsreis om nieuw terrein te verkennen buiten het vertrouwde. Niet noodzakelijk "vooruitgang" in een lineaire betekenis, maar opnieuw ruimte krijgen om te bewegen, ontdekken en kiezen.',
      },
    ],
  },
  aanbod: {
    title: 'Aanbod',
    offerings: [
      {
        title: 'Persoonlijke groei en Psychotherapie',
        text: 'Een mens bestaat niet uit losse hoofdstukken. Verleden en heden, kwetsbaarheid en kracht, lichaam en geest, individu en relaties hangen samen. Therapie helpt om die verschillende delen te verbinden en ervaringen te integreren tot een betekenisvol geheel.\n\nAls klinisch en gezondheidspsycholoog werk ik persoonsgericht, vanuit een optimistische en groeigerichte kijk op het menselijk functioneren. Ik gebruik een ervaringsgerichte (experiëntiële) stijl, waarbij beleving en emoties fungeren als hefboom voor verandering.',
      },
      {
        title: 'Brainspotting',
        text: 'Verder ben ik bekwaamd in Brainspotting. Deze therapeutische methode maakt gebruik van bekende basisingrediënten uit het lichaamsgericht werk: een open houding, gerichte aandacht, wederzijdse afstemming en co-regulatie. De methode geeft toegang tot diepere lagen die via traditionele gesprekstherapie niet altijd bereikbaar zijn.',
        link: 'https://brainspotting.be/wat-we-doen/brainspotting-podcast',
        linkText: 'Beluister de Brainspotting Podcast',
      },
    ],
    themes: {
      title: 'Klachten & Thema\'s',
      intro: 'Bij Omnibus kan je onder andere terecht voor:',
      items: [
        'Emotionele blokkades, spanningen en angsten',
        'Somberheid, depressie en een laag zelfbeeld',
        'Verwerking van ingrijpende gebeurtenissen en rouwverwerking',
        'Relatieproblemen, moeite met contact en eenzaamheid',
        'Levensfaseproblemen, keuzestress en vastlopen in het leven',
        'Persoonlijke levensvragen, zingeving en zelfontplooiing',
      ],
    },
    intervisie: {
      title: 'Intervisie',
      text: 'Een intervisiegroep biedt ruimte om stil te staan bij aspecten die een wezenlijk onderdeel vormen van je werk, maar zelden aan bod komen tijdens reguliere casusbesprekingen. Het gaat niet zozeer om de praktische aanpak van een situatie, maar om wat deze bij jou teweegbrengt. Via uitwisseling ga je aan de slag met eigen thema\'s en valkuilen.',
    },
  },
  about: {
    title: 'Over mij',
    intro: 'Ik ben Jeroen',
    personal: 'Ik ben papa van twee kleine schatten. Het vaderschap was voor mij al vroeg een belangrijke richtingaanwijzer in het leven. Met ontzag en verwondering geniet ik dagelijks van deze bijzondere band die mij als persoon blijft uitdagen om te groeien.\n\nNaast een trotse huisvader investeer ik mijn passie en energie graag in het buitenleven, gezelschapsspellen, wandelen, hardlopen en het maken of beleven van muziek. Recent ontdekte ik samen met mijn zoon een gedeelde passie voor de traditionele Japanse krijgskunst, Aikido.',
    experience: {
      title: 'Werkervaring',
      intro: 'Sinds 2011 actief in de geestelijke gezondheidszorg',
      items: [
        'CGG Leuven',
        'Psychiatrisch verzorgingstehuis Tongeren',
        'Urgentiepsychiatrie en Verslavingszorg MC St-Jozef Munsterbilzen',
        'Mobiel Herstelteam ZOLim',
        'Herstelgroep ZOLim',
        'Groepspraktijk De Kiezel in Hasselt (sinds 2013)',
      ],
    },
    education: {
      title: 'Opleidingen & vormingen',
      items: [
        '2025: Brainspotting Fase 1 en 2 – Brainspotting Belgium',
        '2025: Intervisie, hoe doen we dat? – Rapunzel vzw',
        '2021: Specialisatie Existentiële psychotherapie – KUL/FMS',
        '2016: Postgraduaat Cliëntgerichte – Experiëntiële psychotherapie – KULeuven',
        '2011: Master Klinische & Gezondheidspsychologie – KULeuven',
      ],
    },
  },
  praktisch: {
    title: 'Praktisch',
    items: [
      {
        label: 'Wanneer',
        text: 'In overleg kijken we wat past. Neem contact op via het contactformulier om een kennismakingsgesprek in te plannen.',
      },
      {
        label: 'Duurtijd',
        text: '50 minuten per sessie',
      },
      {
        label: 'Locatie',
        text: 'Wirixstraat 10, 3700 Tongeren-Borgloon',
      },
      {
        label: 'Tarief',
        text: '€80 per sessie. Terugbetalingsmodaliteiten worden bepaald door de mutualiteiten.',
      },
      {
        label: 'Registratie',
        text: 'Eenmalige kost van €10 voor QITonline',
      },
      {
        label: 'Annulering',
        text: 'Verwittig minstens 48 uur op voorhand via e-mail',
      },
      {
        label: 'Taal & media',
        text: 'Nederlands en Engels. Ook online sessies mogelijk.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    name: 'Jeroen Dekker',
    address: 'Wirixstraat 10, 3700 Tongeren-Borgloon',
    phone: '+32 468 17 48 16',
    email: 'jeroendekker@live.be',
    formTitle: 'Neem contact op',
    formSubtitle: 'Ik help je graag verder',
    registration: {
      label: 'Registratie:',
      info: 'Erkenningsnummer: 881110551 | CM registratienummer: 09889842 | Visumnummer: 263826',
      membership: 'Lidmaatschap: BFP, VVKP',
    },
  },
  footer: {
    title: 'Inspiratie voor cliënten',
    links: [
      { label: 'vvcepc.be', url: 'https://vvcepc.be' },
      { label: 'brainspotting.be', url: 'https://brainspotting.be' },
      { label: 'vaardigleven.be', url: 'https://vaardigleven.be' },
      { label: 'psychosenet.be', url: 'https://psychosenet.be' },
      { label: 'ggzlimburg.be', url: 'https://ggzlimburg.be' },
      { label: 'awel.be', url: 'https://awel.be' },
      { label: 'zelfmoord1813.be', url: 'https://zelfmoord1813.be' },
      { label: 'drughulp.be', url: 'https://drughulp.be' },
      { label: 'lumi.be', url: 'https://lumi.be' },
    ],
  },
};

// Line art SVG components
function DividerLine() {
  return (
    <svg viewBox="0 0 100 20" className="w-full h-8 opacity-30">
      <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

function LineArtAccent({ type = 'circle' }: { type?: string }) {
  if (type === 'circle') {
    return (
      <svg viewBox="0 0 40 40" className="w-16 h-16 opacity-20">
        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 'wave') {
    return (
      <svg viewBox="0 0 100 40" className="w-full h-12 opacity-15">
        <path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  return null;
}

// Navigation component
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: content.nav.welkom, href: '#welkom' },
    { label: content.nav.visie, href: '#visie' },
    { label: content.nav.aanbod, href: '#aanbod' },
    { label: content.nav.overMij, href: '#over-mij' },
    { label: content.nav.praktisch, href: '#praktisch' },
    { label: content.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="#welkom" className="text-xl font-semibold text-slate-800 hover:text-slate-600 transition-colors">
          {content.brandName}
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-slate-800 transition ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-slate-800 transition ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-slate-800 transition ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-amber-50 border-b border-amber-100 md:hidden">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-700 hover:text-slate-900 transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Contact form component
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Naam</label>
        <input
          type="text"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">E-mailadres</label>
        <input
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Bericht</label>
        <textarea
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
      >
        Verzenden
      </button>
      {submitted && (
        <div className="p-3 bg-green-100 text-green-800 rounded-lg text-sm">
          Dank je! Ik neem binnenkort contact met je op.
        </div>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <Navigation />

      {/* Hero / Welkom */}
      <section id="welkom" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-sm tracking-wide text-blue-600 font-semibold">{content.nav.welkom}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight">
                {content.hero.intro}
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed">
                {content.hero.body}
              </p>
              <p className="text-sm italic text-slate-600 border-l-2 border-blue-400 pl-4 py-2">
                "{content.hero.tagline}"
              </p>
              <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                {content.hero.cta}
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm aspect-square bg-slate-200 rounded-lg overflow-hidden shadow-lg">
                {/* Placeholder for Jeroen's photo - will use local image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                  <span className="text-slate-400">Jeroen's foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visie */}
      <section id="visie" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-800 mb-4">{content.visie.title}</h2>
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">{content.visie.intro}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {content.visie.metaphors.map((metaphor, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border-2 ${
                  idx === 0 ? 'border-blue-200 bg-blue-50' :
                  idx === 1 ? 'border-purple-200 bg-purple-50' :
                  'border-rose-200 bg-rose-50'
                }`}
              >
                <h3 className="font-semibold text-slate-800 mb-3">{metaphor.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{metaphor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod */}
      <section id="aanbod" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-800 mb-12">{content.aanbod.title}</h2>

          {/* Main offerings */}
          <div className="space-y-10 mb-16">
            {content.aanbod.offerings.map((offering, idx) => (
              <div key={idx} className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-2xl font-serif text-slate-800 mb-4">{offering.title}</h3>
                <p className="text-slate-700 whitespace-pre-line leading-relaxed mb-4">{offering.text}</p>
                {offering.link && (
                  <a href={offering.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                    {offering.linkText} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Themes */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-slate-800 mb-4">{content.aanbod.themes.title}</h3>
            <p className="text-slate-700 mb-6">{content.aanbod.themes.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.aanbod.themes.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <p className="text-slate-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Intervisie */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-lg">
            <h3 className="text-2xl font-serif text-slate-800 mb-4">{content.aanbod.intervisie.title}</h3>
            <p className="text-slate-700 leading-relaxed">{content.aanbod.intervisie.text}</p>
          </div>
        </div>
      </section>

      {/* Over mij */}
      <section id="over-mij" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-800 mb-8">{content.about.title}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-serif text-slate-800 mb-4">{content.about.intro}</h3>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">{content.about.personal}</p>
            </div>
            <div className="bg-slate-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-slate-400">Foto bij Over mij</span>
            </div>
          </div>

          {/* Timeline sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-serif text-slate-800 mb-2">{content.about.experience.title}</h4>
              <p className="text-sm text-slate-600 mb-4">{content.about.experience.intro}</p>
              <ul className="space-y-2">
                {content.about.experience.items.map((item, idx) => (
                  <li key={idx} className="text-slate-700 text-sm flex items-start gap-3">
                    <span className="text-blue-600 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif text-slate-800 mb-4">{content.about.education.title}</h4>
              <ul className="space-y-2">
                {content.about.education.items.map((item, idx) => (
                  <li key={idx} className="text-slate-700 text-sm flex items-start gap-3">
                    <span className="text-purple-600 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Praktisch */}
      <section id="praktisch" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-800 mb-12">{content.praktisch.title}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {content.praktisch.items.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-slate-800 mb-2">{item.label}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-800 mb-12">{content.contact.title}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-800">{content.contact.name}</h3>
                <p className="text-slate-700 text-sm mt-1">{content.contact.address}</p>
              </div>
              <div>
                <p className="text-slate-700">
                  <a href={`tel:${content.contact.phone}`} className="hover:text-blue-600">
                    {content.contact.phone}
                  </a>
                </p>
                <p className="text-slate-700">
                  <a href={`mailto:${content.contact.email}`} className="hover:text-blue-600">
                    {content.contact.email}
                  </a>
                </p>
              </div>

              {/* Certificate embed - simplified for now */}
              <div className="border-t pt-6 mt-6">
                <p className="text-xs text-slate-600 mb-2">{content.contact.registration.label}</p>
                <p className="text-xs text-slate-600">{content.contact.registration.info}</p>
                <p className="text-xs text-slate-600 mt-1">{content.contact.registration.membership}</p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h3 className="text-xl font-serif text-slate-800 mb-2">{content.contact.formTitle}</h3>
              <p className="text-slate-600 text-sm mb-6">{content.contact.formSubtitle}</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800 text-slate-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold text-slate-200 mb-6">{content.footer.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {content.footer.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 text-sm transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-6 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Omnibus — {content.contact.name}</p>
            <p className="mt-2">Praktijk voor persoonlijke groei en psychotherapie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
