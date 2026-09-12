'use client';

import { useState } from 'react';

// Content structure for easy translation
const content = {
  nav: {
    brand: 'Omnibus',
    links: [
      { label: 'Welkom', href: '#welkom' },
      { label: 'Visie', href: '#visie' },
      { label: 'Aanbod', href: '#aanbod' },
      { label: 'Over mij', href: '#over-mij' },
      { label: 'Praktisch', href: '#praktisch' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    tagline: 'Omnibus helpt mensen op verhaal te komen, te verbinden en opnieuw in beweging te brengen.',
    intro: 'Welkom bij Omnibus',
    body: 'Praktijk voor persoonlijke groei en psychotherapie.\n\nIk ben Jeroen Dekker: geboren in \'88, trotse papa, psycholoog en bewonderaar van het leven. Omnibus is mijn persoonlijke praktijk waarin ik de verschillende kwaliteiten van mezelf en mijn opleidingsachtergrond integreer tot een gedegen en uitnodigend aanbod.',
    cta: 'Neem contact op',
  },
  visie: {
    title: 'Visie',
    intro: 'Zoals vele dingen in het leven heeft ook Omnibus niet één vaste betekenis. Zie het als een kunstwerk, iets dat je op verschillende manieren kan interpreteren.',
    points: [
      {
        title: 'Voor allen',
        desc: 'Omnibus staat "voor allen": breed toegankelijk, met een open, nieuwsgierige blik en voor alle aspecten van het mens-zijn. Een professionele en authentieke ontmoeting, van mens tot mens, waarin we samen onderzoeken en verkennen.',
      },
      {
        title: 'Verzamelbundel',
        desc: 'Het is een "verzamelbundel", zoals elk mens een unieke verzameling is van persoonlijke ervaringen en verhalen. Niet één symptoom of probleem, maar al onze ervaringen, relaties, kwetsuren, krachten en verlangens in samenhang.',
      },
      {
        title: 'Transportmiddel',
        desc: 'En, het is een "transportmiddel", een veilig kader dat je uitnodigt op een gezelschapsreis om nieuw terrein te verkennen. Niet noodzakelijk "vooruitgang" in een lineaire betekenis, maar opnieuw ruimte krijgen om te bewegen, ontdekken en kiezen.',
      },
    ],
  },
  aanbod: {
    title: 'Aanbod',
    intro: 'Een praktijk voor persoonlijke groei en psychotherapie',
    services: [
      {
        title: 'Persoonlijke groei & Psychotherapie',
        desc: 'Een mens bestaat niet uit losse hoofdstukken. Therapie helpt om die verschillende delen te verbinden en ervaringen te integreren tot een betekenisvol geheel.\n\nAls klinisch en gezondheidspsycholoog werk ik persoonsgericht, vanuit een optimistische en groeigerichte kijk op het menselijk functioneren. Ik gebruik een ervaringsgerichte (experiëntiële) stijl, waarbij beleving en emoties fungeren als hefboom voor verandering.',
      },
      {
        title: 'Brainspotting',
        desc: 'Ik ben bekwaamd in Brainspotting. Deze therapeutische methode maakt gebruik van bekende basisingrediënten uit het lichaamsgericht werk: een open houding, gerichte aandacht, wederzijdse afstemming en co-regulatie. De methode geeft toegang tot diepere lagen die via traditionele gesprekstherapie niet altijd bereikbaar zijn.',
        link: 'https://brainspotting.be/wat-we-doen/brainspotting-podcast',
      },
      {
        title: 'Intervisie',
        desc: 'Een intervisiegroep biedt ruimte om stil te staan bij aspecten die een wezenlijk onderdeel vormen van je werk. Het gaat niet zozeer om de praktische aanpak van een situatie, maar om wat deze bij jou teweegbrengt. Vraag vrijblijvend meer informatie.',
      },
    ],
    themes: {
      title: 'Klachten & Thema\'s',
      intro: 'Bij Omnibus kan je onder andere terecht voor:',
      items: [
        'Emotionele blokkades, spanningen en angsten',
        'Somberheid, depressie en een laag zelfbeeld',
        'Verwerking van ingrijpende gebeurtenissen',
        'Relatieproblemen en eenzaamheid',
        'Levensfaseproblemen en keuzestress',
        'Zingeving en zelfontplooiing',
      ],
    },
  },
  about: {
    title: 'Over mij',
    name: 'Ik ben Jeroen',
    personal: 'Ik ben papa van twee kleine schatten. Het vaderschap was voor mij al vroeg een belangrijke richtingaanwijzer in het leven. Met ontzag en verwondering geniet ik dagelijks van deze bijzondere band.\n\nNaast mijn gezin investeer ik mijn passie graag in het buitenleven, gezelschapsspellen, wandelen, hardlopen en muziek. Recent ontdekte ik samen met mijn zoon een gedeelde passie voor de traditionele Japanse krijgskunst, Aikido.',
    experience: {
      title: 'Werkervaring',
      intro: 'Sinds 2011 actief in de geestelijke gezondheidszorg',
      items: ['CGG Leuven', 'Psychiatrisch verzorgingstehuis Tongeren', 'Urgentiepsychiatrie MC St-Jozef', 'Mobiel Herstelteam ZOLim', 'Groepspraktijk De Kiezel (sinds 2013)'],
    },
    education: {
      title: 'Opleidingen',
      items: [
        '2025: Brainspotting Fase 1 en 2',
        '2021: Specialisatie Existentiële psychotherapie',
        '2016: Cliëntgerichte – Experiëntiële psychotherapie',
        '2011: Master Klinische & Gezondheidspsychologie',
      ],
    },
  },
  praktisch: {
    title: 'Praktisch',
    info: [
      { label: 'Wanneer', text: 'In overleg kijken we wat past. Neem contact op voor een kennismakingsgesprek.' },
      { label: 'Sessie', text: '50 minuten' },
      { label: 'Locatie', text: 'Wirixstraat 10, 3700 Tongeren-Borgloon' },
      { label: 'Tarief', text: '€80 per sessie' },
      { label: 'Taal', text: 'Nederlands en Engels. Ook online sessies mogelijk.' },
    ],
  },
  contact: {
    title: 'Contact',
    name: 'Jeroen Dekker',
    address: 'Wirixstraat 10, 3700 Tongeren-Borgloon',
    phone: '+32 468 17 48 16',
    email: 'jeroendekker@live.be',
    cta: 'Neem contact op',
    form: {
      name: 'Naam',
      email: 'E-mailadres',
      message: 'Bericht',
      submit: 'Verzenden',
      success: 'Dank je! Ik neem binnenkort contact met je op.',
    },
  },
  footer: {
    resources: 'Hulpbronnen voor cliënten',
    links: [
      { label: 'vvcepc.be', url: 'https://vvcepc.be' },
      { label: 'brainspotting.be', url: 'https://brainspotting.be' },
      { label: 'vaardigleven.be', url: 'https://vaardigleven.be' },
      { label: 'psychosenet.be', url: 'https://psychosenet.be' },
    ],
  },
};

// Navigation Component
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container flex items-center justify-between py-4">
        <a href="#welkom" className="text-xl font-serif font-bold text-gray-900">
          {content.nav.brand}
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-800 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Contact Form Component
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
        <label className="text-sm font-medium text-gray-900">{content.contact.form.name}</label>
        <input
          type="text"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900">{content.contact.form.email}</label>
        <input
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900">{content.contact.form.message}</label>
        <textarea
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          rows={5}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        {content.contact.form.submit}
      </button>
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded text-green-900 text-sm">
          {content.contact.form.success}
        </div>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero */}
      <section id="welkom" className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm tracking-wide text-blue-600 font-semibold uppercase mb-6">
              Welkom
            </p>
            <h1 className="mb-8">{content.hero.intro}</h1>
            <p className="text-xl leading-relaxed mb-8 text-gray-700">
              {content.hero.body}
            </p>
            <p className="text-lg italic text-gray-600 border-l-4 border-blue-600 pl-6 py-4 mb-8">
              "{content.hero.tagline}"
            </p>
            <a href="#contact" className="btn btn-primary">
              {content.hero.cta}
            </a>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Visie */}
      <section id="visie" className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-8">{content.visie.title}</h2>
          <p className="text-lg leading-relaxed mb-12 text-gray-700 max-w-3xl">
            {content.visie.intro}
          </p>

          <div className="grid-3">
            {content.visie.points.map((point, idx) => (
              <div key={idx} className="card">
                <h4 className="mb-4">{point.title}</h4>
                <p className="text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Aanbod */}
      <section id="aanbod" className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-8">{content.aanbod.title}</h2>

          {/* Services */}
          <div className="mb-16 space-y-12">
            {content.aanbod.services.map((service, idx) => (
              <div key={idx}>
                <h3 className="mb-6">{service.title}</h3>
                <p className="prose-text mb-4 whitespace-pre-line">{service.desc}</p>
                {service.link && (
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 inline-block">
                    Meer weten →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="divider my-16"></div>

          {/* Themes */}
          <div>
            <h3 className="mb-6">{content.aanbod.themes.title}</h3>
            <p className="prose-text mb-8">{content.aanbod.themes.intro}</p>
            <div className="grid-2">
              {content.aanbod.themes.items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0 mt-1">•</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Over mij */}
      <section id="over-mij" className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-8">{content.about.title}</h2>

          <div className="mb-12">
            <h3 className="mb-6">{content.about.name}</h3>
            <p className="prose-text whitespace-pre-line">{content.about.personal}</p>
          </div>

          <div className="grid-2">
            <div>
              <h4 className="mb-6">{content.about.experience.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{content.about.experience.intro}</p>
              <ul className="space-y-3">
                {content.about.experience.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex gap-3">
                    <span className="text-blue-600 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6">{content.about.education.title}</h4>
              <ul className="space-y-3">
                {content.about.education.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex gap-3">
                    <span className="text-blue-600 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Praktisch */}
      <section id="praktisch" className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12">{content.praktisch.title}</h2>
          <div className="grid-2">
            {content.praktisch.info.map((item, idx) => (
              <div key={idx}>
                <h4 className="mb-3">{item.label}</h4>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12">{content.contact.title}</h2>

          <div className="grid-2">
            <div>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2">{content.contact.name}</h4>
                  <p className="text-gray-700">{content.contact.address}</p>
                </div>
                <div>
                  <a href={`tel:${content.contact.phone}`} className="text-blue-600 font-semibold hover:text-blue-800 block mb-2">
                    {content.contact.phone}
                  </a>
                  <a href={`mailto:${content.contact.email}`} className="text-blue-600 font-semibold hover:text-blue-800 block">
                    {content.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-8">{content.contact.cta}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="mb-8">
            <h4 className="text-white mb-4">{content.footer.resources}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.footer.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Omnibus — {content.contact.name}</p>
            <p className="mt-2">Praktijk voor persoonlijke groei en psychotherapie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
