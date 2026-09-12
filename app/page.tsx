'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', background: '#fff' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', textDecoration: 'none' }}>
            Omnibus
          </a>
          <div style={{ display: 'none' }} className="nav-links">
            <a href="#welkom" style={{ marginRight: '2rem', color: '#555', textDecoration: 'none' }}>Welkom</a>
            <a href="#visie" style={{ marginRight: '2rem', color: '#555', textDecoration: 'none' }}>Visie</a>
            <a href="#aanbod" style={{ marginRight: '2rem', color: '#555', textDecoration: 'none' }}>Aanbod</a>
            <a href="#over-mij" style={{ marginRight: '2rem', color: '#555', textDecoration: 'none' }}>Over mij</a>
            <a href="#praktisch" style={{ marginRight: '2rem', color: '#555', textDecoration: 'none' }}>Praktisch</a>
            <a href="#contact" style={{ color: '#555', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="welkom" style={{
        paddingTop: '8rem',
        paddingBottom: '4rem',
        background: 'linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#2563eb', letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Welkom bij Omnibus
              </p>
              <h1 style={{
                fontSize: '3.5rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '2rem'
              }}>
                Praktijk voor persoonlijke groei en psychotherapie
              </h1>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                Ik ben Jeroen Dekker, psycholoog en bewonderaar van het leven. Omnibus integreert verschillende kwaliteiten van mijn opleidingsachtergrond tot een gedegen en uitnodigend aanbod.
              </p>
              <p style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#666',
                borderLeft: '4px solid #3b82f6',
                paddingLeft: '1.5rem',
                marginBottom: '2rem'
              }}>
                "Omnibus helpt mensen op verhaal te komen, te verbinden en opnieuw in beweging te brengen."
              </p>
              <a href="#contact" style={{
                display: 'inline-block',
                background: '#2563eb',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'background 0.3s'
              }} onMouseOver={(e) => (e.currentTarget.style.background = '#1d4ed8')}
                 onMouseOut={(e) => (e.currentTarget.style.background = '#2563eb')}>
                Neem contact op
              </a>
            </div>
            <div style={{ position: 'relative', height: '400px' }}>
              <Image
                src="/images/jeroen.jpg"
                alt="Jeroen Dekker"
                fill
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visie Section */}
      <section id="visie" style={{ padding: '4rem 0', background: '#fafafa' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            Visie
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '3rem', maxWidth: '600px' }}>
            Omnibus is niet één vaste betekenis. Het is een kunstwerk dat je op verschillende manieren kan interpreteren.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {[
              { emoji: '🌍', title: 'Voor allen', desc: 'Breed toegankelijk, met open blik. Een professionele en authentieke ontmoeting, van mens tot mens.' },
              { emoji: '📚', title: 'Verzamelbundel', desc: 'Alle ervaringen, relaties, kwetsuren en krachten in samenhang met elkaar verbonden.' },
              { emoji: '🚢', title: 'Transportmiddel', desc: 'Een veilig kader om nieuw terrein te verkennen en opnieuw in beweging te komen.' }
            ].map((point, i) => (
              <div key={i} style={{ padding: '0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{point.emoji}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  {point.title}
                </h3>
                <p style={{ color: '#555' }}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod Section */}
      <section id="aanbod" style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem'
          }}>
            Aanbod
          </h2>

          {[
            { icon: '✨', title: 'Persoonlijke groei & Psychotherapie', desc: 'Vanuit een optimistische, groeigerichte blik. Ik werk ervaringsgeoriënteerd met beleving en emoties als hefboom voor verandering.' },
            { icon: '🧠', title: 'Brainspotting', desc: 'Therapeutische methode met lichaamsgericht werk. Geeft toegang tot diepere lagen dan traditionele therapie.', link: 'https://brainspotting.be' },
            { icon: '🔄', title: 'Intervisie', desc: 'Groepsruimte voor reflectie op werkgerelateerde thema\'s en persoonlijke groei.' }
          ].map((service, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '3rem',
              paddingBottom: '3rem',
              borderBottom: i < 2 ? '1px solid #e5e7eb' : 'none'
            }}>
              <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{service.icon}</div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#555', marginBottom: '1rem' }}>{service.desc}</p>
                {service.link && <a href={service.link} style={{ color: '#2563eb', fontWeight: '600' }}>Meer weten →</a>}
              </div>
            </div>
          ))}

          <div style={{ marginTop: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontFamily: "'Crimson Text', serif",
              fontWeight: '700',
              marginBottom: '2rem'
            }}>
              Klachten & Thema's
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                'Emotionele blokkades, spanningen en angsten',
                'Somberheid, depressie en laag zelfbeeld',
                'Verwerking van ingrijpende gebeurtenissen',
                'Relatieproblemen en eenzaamheid',
                'Levensfaseproblemen en keuzestress',
                'Zingeving en zelfontplooiing'
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: '#eff6ff',
                  borderRadius: '0.5rem'
                }}>
                  <span style={{ color: '#2563eb', fontWeight: '700', flexShrink: 0 }}>•</span>
                  <p style={{ margin: 0, color: '#555' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Over Mij Section */}
      <section id="over-mij" style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem'
          }}>
            Over mij
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Ik ben Jeroen
              </h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Ik ben papa van twee kleine schatten. Het vaderschap was voor mij al vroeg een belangrijke richtingaanwijzer. Met ontzag en verwondering geniet ik dagelijks van deze bijzondere band.
              </p>
              <p style={{ color: '#555', lineHeight: '1.8' }}>
                Naast mijn gezin investeer ik passie in buitenleven, gezelschapsspellen, wandelen, hardlopen en muziek. Recent een gedeelde passie met mijn zoon: Aikido.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: '700',
                  marginBottom: '1.5rem'
                }}>
                  Werkervaring
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#999', marginBottom: '1rem' }}>Sinds 2011</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['CGG Leuven', 'Psychiatrisch verzorgingstehuis', 'Urgentiepsychiatrie MC St-Jozef', 'Mobiel Herstelteam ZOLim', 'Groepspraktijk De Kiezel'].map((item, i) => (
                    <li key={i} style={{ color: '#555', marginBottom: '0.75rem', fontSize: '0.95rem' }}>› {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: '700',
                  marginBottom: '1.5rem'
                }}>
                  Opleidingen
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Brainspotting Fase 1 & 2', 'Existentiële psychotherapie', 'Cliëntgerichte therapie', 'Master Klinische Psychologie'].map((item, i) => (
                    <li key={i} style={{ color: '#555', marginBottom: '0.75rem', fontSize: '0.95rem' }}>› {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktisch Section */}
      <section id="praktisch" style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem'
          }}>
            Praktisch
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {[
              { label: 'Wanneer', text: 'In overleg. Neem contact op voor een kennismakingsgesprek.' },
              { label: 'Sessie', text: '50 minuten' },
              { label: 'Locatie', text: 'Wirixstraat 10, 3700 Tongeren-Borgloon' },
              { label: 'Tarief', text: '€80 per sessie' },
              { label: 'Taal', text: 'Nederlands en Engels. Ook online mogelijk.' },
              { label: 'Annulering', text: 'Minstens 48 uur van tevoren' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.5rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {item.label}
                </h4>
                <p style={{ color: '#555', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem'
          }}>
            Contact
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Jeroen Dekker
              </h3>
              <p style={{ color: '#555', marginBottom: '2rem' }}>
                Wirixstraat 10<br />
                3700 Tongeren-Borgloon
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <a href="tel:+32468174816" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
                  +32 468 17 48 16
                </a>
              </p>
              <p>
                <a href="mailto:jeroendekker@live.be" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
                  jeroendekker@live.be
                </a>
              </p>
            </div>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                marginBottom: '2rem'
              }}>
                Neem contact op
              </h3>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Naam</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontFamily: 'inherit'
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>E-mailadres</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontFamily: 'inherit'
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Bericht</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#1d4ed8')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#2563eb')}
                >
                  Verzenden
                </button>
              </form>

              {formSubmitted && (
                <div style={{
                  padding: '1rem',
                  background: '#f0fdf4',
                  border: '1px solid #86efac',
                  borderRadius: '0.5rem',
                  color: '#166534',
                  fontSize: '0.875rem'
                }}>
                  Dank je! Ik neem binnenkort contact met je op.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        color: '#d1d5db',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #1f2937'
      }}>
        <p style={{ margin: '0.5rem 0', fontSize: '0.875rem', color: '#9ca3af' }}>
          © 2026 Omnibus — Jeroen Dekker
        </p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.875rem', color: '#9ca3af' }}>
          Praktijk voor persoonlijke groei en psychotherapie
        </p>
      </footer>
    </div>
  );
}
