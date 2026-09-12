'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const colors = {
  blue: '#3b73c0',
  lavender: '#c4c0d1',
  sage: '#878a7f',
  rust: '#a96b52',
  light: '#fafaf8',
  white: '#ffffff',
  dark: '#1a1a1a',
  gray: '#666666',
  lightGray: '#f0f0ed'
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 4000);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: colors.dark, background: colors.white, overflow: 'hidden' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: `rgba(255, 255, 255, 0.92)`,
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        borderBottom: `1px solid rgba(139, 138, 127, 0.1)`,
        padding: '1.25rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            background: `linear-gradient(135deg, ${colors.blue}, ${colors.rust})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            letterSpacing: '-1px'
          }}>
            Omnibus
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
            className="mobile-menu-btn"
          >
            ☰
          </button>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            {['Welkom', 'Visie', 'Aanbod', 'Over mij', 'Praktisch', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{
                  fontSize: '0.95rem',
                  color: colors.gray,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.blue)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.gray)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="welkom" style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        background: `linear-gradient(135deg, rgba(59, 115, 192, 0.04) 0%, rgba(196, 192, 209, 0.04) 100%)`,
        position: 'relative',
        overflow: 'hidden',
        marginTop: '60px'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${colors.lavender}15 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div style={{
              opacity: Math.min(1, (window.innerHeight - scrollY) / window.innerHeight + 0.5),
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: colors.blue,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                Welkom bij Omnibus
              </div>

              <h1 style={{
                fontSize: '3.5rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                lineHeight: '1.15',
                marginBottom: '2rem',
                color: colors.dark
              }}>
                Praktijk voor persoonlijke groei en psychotherapie
              </h1>

              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: colors.gray,
                marginBottom: '2rem'
              }}>
                Ik ben Jeroen Dekker: geboren in '88, trotse papa, psycholoog en bewonderaar van het leven. Omnibus integreert verschillende kwaliteiten tot een gedegen en uitnodigend aanbod.
              </p>

              <p style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: colors.gray,
                borderLeft: `4px solid ${colors.blue}`,
                paddingLeft: '1.5rem',
                marginBottom: '2.5rem',
                lineHeight: '1.8'
              }}>
                "Omnibus helpt mensen op verhaal te komen, te verbinden en opnieuw in beweging te brengen."
              </p>

              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  background: colors.blue,
                  color: 'white',
                  padding: '1.1rem 2.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 10px 30px rgba(59, 115, 192, 0.2)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.rust;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 15px 40px rgba(169, 107, 82, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.blue;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(59, 115, 192, 0.2)`;
                }}
              >
                Neem contact op
              </a>
            </div>

            <div style={{
              position: 'relative',
              height: '500px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.1)`
            }}>
              <Image
                src="/images/jeroen.jpg"
                alt="Jeroen Dekker"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${colors.blue}08, ${colors.rust}08)`
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Visie Section */}
      <section id="visie" style={{
        padding: '100px 0',
        background: colors.white,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: `radial-gradient(circle, ${colors.sage}10 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontFamily: "'Crimson Text', serif",
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: colors.dark
            }}>
              Visie
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: colors.gray,
              maxWidth: '600px',
              lineHeight: '1.8'
            }}>
              Zoals vele dingen in het leven heeft ook Omnibus niet één vaste betekenis. Zie het als een kunstwerk, iets dat je op verschillende manieren kan interpreteren.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem'
          }}>
            {[
              { icon: '🌍', title: 'Voor allen', text: 'Breed toegankelijk, met open, nieuwsgierige blik en voor alle aspecten van het mens-zijn.' },
              { icon: '📚', title: 'Verzamelbundel', text: 'Elk mens is een unieke verzameling van ervaringen en verhalen in samenhang met elkaar.' },
              { icon: '🚢', title: 'Transportmiddel', text: 'Veilig kader om nieuw terrein te verkennen en opnieuw in beweging te komen.' }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  background: `linear-gradient(135deg, ${[colors.blue, colors.lavender, colors.sage][i]}08 0%, transparent 100%)`,
                  borderRadius: '8px',
                  border: `1px solid ${[colors.blue, colors.lavender, colors.sage][i]}20`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 15px 40px rgba(59, 115, 192, 0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: colors.dark
                }}>
                  {item.title}
                </h3>
                <p style={{ color: colors.gray, lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod Section */}
      <section id="aanbod" style={{
        padding: '100px 0',
        background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.lightGray} 100%)`
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontFamily: "'Crimson Text', serif",
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: colors.dark
            }}>
              Aanbod
            </h2>
          </div>

          <div style={{ marginBottom: '5rem' }}>
            {[
              { icon: '✨', title: 'Persoonlijke groei & Psychotherapie', text: 'Een mens bestaat niet uit losse hoofdstukken. Therapie helpt om die verschillende delen te verbinden en ervaringen te integreren tot een betekenisvol geheel. Als klinisch en gezondheidspsycholoog werk ik persoonsgericht, vanuit een optimistische en groeigerichte kijk op het menselijk functioneren.' },
              { icon: '🧠', title: 'Brainspotting', text: 'Ik ben bekwaamd in Brainspotting. Deze therapeutische methode maakt gebruik van bekende basisingrediënten uit het lichaamsgericht werk: een open houding, gerichte aandacht, wederzijdse afstemming en co-regulatie.', link: 'https://brainspotting.be' },
              { icon: '🔄', title: 'Intervisie', text: 'Een intervisiegroep biedt ruimte om stil te staan bij aspecten die een wezenlijk onderdeel vormen van je werk, maar zelden aan bod komen tijdens reguliere casusbesprekingen.' }
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '3.5rem',
                  paddingBottom: '3.5rem',
                  borderBottom: i < 2 ? `1px solid ${colors.sage}20` : 'none'
                }}
              >
                <div style={{ fontSize: '2.5rem', flexShrink: 0, marginTop: '0.5rem' }}>{service.icon}</div>
                <div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontFamily: "'Crimson Text', serif",
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: colors.dark
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ color: colors.gray, lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
                    {service.text}
                  </p>
                  {service.link && (
                    <a
                      href={service.link}
                      style={{
                        color: colors.blue,
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.rust)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.blue)}
                    >
                      Beluister de Brainspotting Podcast →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{
              fontSize: '1.4rem',
              fontFamily: "'Crimson Text', serif",
              fontWeight: '700',
              marginBottom: '2rem',
              color: colors.dark
            }}>
              Klachten & Thema's
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              {[
                'Emotionele blokkades, spanningen en angsten',
                'Somberheid, depressie en een laag zelfbeeld',
                'Verwerking van ingrijpende gebeurtenissen en rouwverwerking',
                'Relatieproblemen, moeite met contact en eenzaamheid',
                'Levensfaseproblemen, keuzestress en vastlopen in het leven',
                'Persoonlijke levensvragen, zingeving en zelfontplooiing'
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: colors.white,
                    borderRadius: '6px',
                    border: `1px solid ${colors.blue}15`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.lightGray;
                    e.currentTarget.style.borderColor = `${colors.blue}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.white;
                    e.currentTarget.style.borderColor = `${colors.blue}15`;
                  }}
                >
                  <span style={{ color: colors.blue, fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>◆</span>
                  <p style={{ margin: 0, color: colors.gray, fontSize: '0.95rem', lineHeight: '1.6' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Over Mij Section */}
      <section id="over-mij" style={{
        padding: '100px 0',
        background: colors.white
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem',
            color: colors.dark
          }}>
            Over mij
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.6rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: colors.dark
              }}>
                Ik ben Jeroen
              </h3>
              <p style={{ color: colors.gray, lineHeight: '1.9', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Ik ben papa van twee kleine schatten. Het vaderschap was voor mij al vroeg een belangrijke richtingaanwijzer in het leven. Met ontzag en verwondering geniet ik dagelijks van deze bijzondere band die mij als persoon blijft uitdagen om te groeien.
              </p>
              <p style={{ color: colors.gray, lineHeight: '1.9', fontSize: '1rem' }}>
                Naast een trotse huisvader investeer ik mijn passie en energie graag in het buitenleven, gezelschapsspellen, wandelen, hardlopen en het maken of beleven van muziek. Recent ontdekte ik samen met mijn zoon een gedeelde passie voor de traditionele Japanse krijgskunst, Aikido.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem'
            }}>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: colors.dark,
                  marginBottom: '1.5rem'
                }}>
                  Werkervaring
                </h4>
                <p style={{ fontSize: '0.85rem', color: colors.sage, fontWeight: '600', marginBottom: '1rem', letterSpacing: '1px' }}>
                  SINDS 2011 IN DE GEESTELIJKE GEZONDHEIDSZORG
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['CGG Leuven', 'Psychiatrisch verzorgingstehuis Tongeren', 'Urgentiepsychiatrie MC St-Jozef Munsterbilzen', 'Mobiel Herstelteam ZOLim', 'Herstelgroep ZOLim', 'Groepspraktijk De Kiezel (sinds 2013)'].map((item, i) => (
                    <li key={i} style={{ color: colors.gray, fontSize: '0.95rem', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: colors.blue, fontWeight: '700', flexShrink: 0 }}>›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: colors.dark,
                  marginBottom: '1.5rem'
                }}>
                  Opleidingen & Vormingen
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['2025: Brainspotting Fase 1 en 2 – Brainspotting Belgium', '2025: Intervisie, hoe doen we dat? – Rapunzel vzw', '2021: Specialisatie Existentiële psychotherapie – KUL/FMS', '2016: Postgraduaat Cliëntgerichte – Experiëntiële psychotherapie – KULeuven', '2011: Master Klinische & Gezondheidspsychologie – KULeuven'].map((item, i) => (
                    <li key={i} style={{ color: colors.gray, fontSize: '0.95rem', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: colors.rust, fontWeight: '700', flexShrink: 0 }}>›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktisch Section */}
      <section id="praktisch" style={{
        padding: '100px 0',
        background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.lightGray} 100%)`
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem',
            color: colors.dark
          }}>
            Praktisch
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { label: 'Wanneer', text: 'In overleg kijken we wat past. Neem contact op via het contactformulier om een kennismakingsgesprek in te plannen.' },
              { label: 'Duurtijd', text: '50 minuten per sessie' },
              { label: 'Locatie', text: 'Wirixstraat 10, 3700 Tongeren-Borgloon' },
              { label: 'Tarief', text: '€80 per sessie. Terugbetalingsmodaliteiten bepaald door de mutualiteiten.' },
              { label: 'Taal & Media', text: 'Nederlands en Engels. Ook online sessies zijn mogelijk.' },
              { label: 'Annulering', text: 'Verwittig minstens 48 uur op voorhand via e-mail indien verhinderd.' }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: colors.white,
                  borderRadius: '8px',
                  border: `1px solid ${colors.sage}20`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(135, 138, 127, 0.1)`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: colors.blue,
                  marginBottom: '0.75rem'
                }}>
                  {item.label}
                </h4>
                <p style={{ color: colors.gray, fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '100px 0',
        background: colors.white,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${colors.rust}12 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontFamily: "'Crimson Text', serif",
            fontWeight: '700',
            marginBottom: '3rem',
            color: colors.dark
          }}>
            Contact
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.4rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                marginBottom: '2rem',
                color: colors.dark
              }}>
                Jeroen Dekker
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: colors.gray, lineHeight: '1.8', fontSize: '0.95rem', margin: 0 }}>
                  Wirixstraat 10<br />
                  3700 Tongeren-Borgloon
                </p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <a
                  href="tel:+32468174816"
                  style={{
                    display: 'block',
                    color: colors.blue,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'color 0.3s ease',
                    marginBottom: '0.5rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.rust)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.blue)}
                >
                  +32 468 17 48 16
                </a>
              </div>

              <div>
                <a
                  href="mailto:jeroendekker@live.be"
                  style={{
                    display: 'block',
                    color: colors.blue,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.rust)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.blue)}
                >
                  jeroendekker@live.be
                </a>
              </div>
            </div>

            <div style={{
              padding: '3rem',
              background: `linear-gradient(135deg, ${colors.blue}08 0%, ${colors.lavender}08 100%)`,
              borderRadius: '12px',
              border: `1px solid ${colors.blue}15`,
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontFamily: "'Crimson Text', serif",
                fontWeight: '700',
                marginBottom: '2rem',
                color: colors.dark
              }}>
                Neem contact op
              </h3>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: colors.dark,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.5px'
                  }}>
                    Naam
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      border: `1px solid ${colors.sage}30`,
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      background: colors.white
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.blue}15`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `${colors.sage}30`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: colors.dark,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.5px'
                  }}>
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      border: `1px solid ${colors.sage}30`,
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      background: colors.white
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.blue}15`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `${colors.sage}30`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: colors.dark,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.5px'
                  }}>
                    Bericht
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      border: `1px solid ${colors.sage}30`,
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      background: colors.white
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.blue}15`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `${colors.sage}30`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: `linear-gradient(135deg, ${colors.blue}, ${colors.rust})`,
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 10px 30px rgba(59, 115, 192, 0.2)`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 15px 40px rgba(59, 115, 192, 0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 10px 30px rgba(59, 115, 192, 0.2)`;
                  }}
                >
                  Verzenden
                </button>
              </form>

              {formSubmitted && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: `linear-gradient(135deg, #f0fdf4, #e0f5e5)`,
                  border: `1px solid #86efac`,
                  borderRadius: '6px',
                  color: '#166534',
                  fontSize: '0.9rem',
                  animation: 'fadeIn 0.3s ease',
                  lineHeight: '1.6'
                }}>
                  ✓ Dank je! Ik neem binnenkort contact met je op.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: `linear-gradient(135deg, ${colors.dark}, ${colors.dark}dd)`,
        color: '#d1d5db',
        padding: '3rem 0',
        borderTop: `1px solid ${colors.sage}15`,
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#9ca3af' }}>
            © 2026 Omnibus — Jeroen Dekker
          </p>
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#9ca3af' }}>
            Praktijk voor persoonlijke groei en psychotherapie
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          nav div {
            flex-direction: column;
            gap: 1rem;
          }

          nav div:last-child {
            display: none !important;
          }

          section {
            padding: 60px 0 !important;
          }

          h1 {
            font-size: 2.2rem !important;
          }

          h2 {
            font-size: 2rem !important;
          }

          #welkom > div > div {
            grid-template-columns: 1fr !important;
          }

          #visie div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }

          #over-mij > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }

          #contact > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
