'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    intro: 'Praktijk voor persoonlijke groei en psychotherapie',
    body: 'Ik ben Jeroen Dekker, psycholoog en bewonderaar van het leven. Omnibus integreert verschillende kwaliteiten van mijn opleidingsachtergrond tot een gedegen en uitnodigend aanbod voor persoonlijke groei.',
    cta: 'Neem contact op',
  },
  visie: {
    title: 'Visie',
    intro: 'Omnibus is niet één vaste betekenis. Het is een kunstwerk dat je op verschillende manieren kan interpreteren.',
    points: [
      {
        title: 'Voor allen',
        emoji: '🌍',
        desc: 'Breed toegankelijk, met open blik. Een professionele en authentieke ontmoeting, van mens tot mens.',
      },
      {
        title: 'Verzamelbundel',
        emoji: '📚',
        desc: 'Alle ervaringen, relaties, kwetsuren en krachten in samenhang met elkaar verbonden.',
      },
      {
        title: 'Transportmiddel',
        emoji: '🚢',
        desc: 'Een veilig kader om nieuw terrein te verkennen en opnieuw in beweging te komen.',
      },
    ],
  },
  aanbod: {
    title: 'Aanbod',
    services: [
      {
        title: 'Persoonlijke groei & Psychotherapie',
        icon: '✨',
        desc: 'Vanuit een optimistische, groeigerichte blik. Ik werk ervaringsgeoriënteerd met beleving en emoties als hefboom voor verandering.',
      },
      {
        title: 'Brainspotting',
        icon: '🧠',
        desc: 'Therapeutische methode met lichaamsgericht werk. Geeft toegang tot diepere lagen dan traditionele therapie.',
        link: 'https://brainspotting.be/wat-we-doen/brainspotting-podcast',
      },
      {
        title: 'Intervisie',
        icon: '🔄',
        desc: 'Groepsruimte voor reflectie op werkgerelateerde thema\'s en persoonlijke groei.',
      },
    ],
    themes: {
      title: 'Klachten & Thema\'s',
      items: [
        'Emotionele blokkades, spanningen en angsten',
        'Somberheid, depressie en laag zelfbeeld',
        'Verwerking van ingrijpende gebeurtenissen',
        'Relatieproblemen en eenzaamheid',
        'Levensfaseproblemen en keuzestress',
        'Zingeving en zelfontplooiing',
      ],
    },
  },
  about: {
    title: 'Over mij',
    personal: 'Ik ben papa van twee kleine schatten. Het vaderschap was voor mij al vroeg een belangrijke richtingaanwijzer. Met ontzag en verwondering geniet ik dagelijks van deze bijzondere band.\n\nNaast mijn gezin investeer ik passie in buitenleven, gezelschapsspellen, wandelen, hardlopen en muziek. Recent een gedeelde passie met mijn zoon: Aikido.',
    experience: ['CGG Leuven', 'Psychiatrisch verzorgingstehuis Tongeren', 'Urgentiepsychiatrie MC St-Jozef', 'Mobiel Herstelteam ZOLim', 'Groepspraktijk De Kiezel (sinds 2013)'],
    education: ['2025: Brainspotting Fase 1 en 2', '2021: Specialisatie Existentiële psychotherapie', '2016: Cliëntgerichte – Experiëntiële psychotherapie', '2011: Master Klinische & Gezondheidspsychologie'],
  },
  praktisch: {
    title: 'Praktisch',
    info: [
      { label: 'Wanneer', text: 'In overleg. Neem contact op voor een kennismakingsgesprek.' },
      { label: 'Sessie', text: '50 minuten' },
      { label: 'Locatie', text: 'Wirixstraat 10, 3700 Tongeren-Borgloon' },
      { label: 'Tarief', text: '€80 per sessie' },
      { label: 'Taal', text: 'Nederlands en Engels. Ook online mogelijk.' },
    ],
  },
  contact: {
    title: 'Contact',
    name: 'Jeroen Dekker',
    address: 'Wirixstraat 10, 3700 Tongeren-Borgloon',
    phone: '+32 468 17 48 16',
    email: 'jeroendekker@live.be',
  },
};

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-5">
        <a href="#" className="text-2xl font-serif font-bold text-gray-900">
          {content.nav.brand}
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`w-5 h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-800 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <div className="hidden md:flex gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-700"
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Naam</label>
        <input
          type="text"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">E-mailadres</label>
        <input
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Bericht</label>
        <textarea
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Verzenden
      </button>
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded text-green-900 text-sm">
          Dank je! Ik neem binnenkort contact met je op.
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
      <section id="welkom" className="pt-32 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="py-20">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-6">Welkom bij Omnibus</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                {content.hero.intro}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {content.hero.body}
              </p>
              <p className="text-lg italic text-gray-600 border-l-4 border-blue-400 pl-6 py-4 mb-8">
                "{content.hero.tagline}"
              </p>
              <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                {content.hero.cta}
              </a>
            </div>
            <div className="relative h-96 md:h-full">
              <Image
                src="/images/jeroen.jpg"
                alt="Jeroen Dekker"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100"></div>

      {/* Visie */}
      <section id="visie" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8">Visie</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              {content.visie.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.visie.points.map((point, idx) => (
              <div key={idx} className="group">
                <div className="text-5xl mb-6">{point.emoji}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-700 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod */}
      <section id="aanbod" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-20">Aanbod</h2>

          {/* Services */}
          <div className="space-y-16 mb-24">
            {content.aanbod.services.map((service, idx) => (
              <div key={idx} className="group">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">{service.desc}</p>
                    {service.link && (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold inline-block">
                        Meer weten →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-20"></div>

          {/* Themes */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">{content.aanbod.themes.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {content.aanbod.themes.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="over-mij" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-16">Over mij</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Ik ben Jeroen</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {content.about.personal}
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6">Werkervaring</h4>
              <p className="text-sm text-gray-600 mb-6">Sinds 2011 in de geestelijke gezondheidszorg</p>
              <ul className="space-y-3">
                {content.about.experience.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex gap-3">
                    <span className="text-blue-600 font-bold text-xl">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6">Opleidingen</h4>
              <ul className="space-y-3">
                {content.about.education.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Praktisch */}
      <section id="praktisch" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-16">Praktisch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {content.praktisch.info.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.label}</h4>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-16">Contact</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{content.contact.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{content.contact.address}</p>
                </div>
                <div className="space-y-3">
                  <a href={`tel:${content.contact.phone}`} className="text-blue-600 hover:text-blue-800 font-semibold text-lg block">
                    {content.contact.phone}
                  </a>
                  <a href={`mailto:${content.contact.email}`} className="text-blue-600 hover:text-blue-800 font-semibold text-lg block">
                    {content.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Neem contact op</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-t border-gray-800 pt-12">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Omnibus — {content.contact.name}</p>
            <p className="text-sm text-gray-400 mt-2">Praktijk voor persoonlijke groei en psychotherapie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
