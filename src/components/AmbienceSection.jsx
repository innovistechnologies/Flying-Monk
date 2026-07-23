import React from 'react';
import { Sparkles, Moon, Tv, Wifi, Utensils, Music, Shield } from 'lucide-react';

export default function AmbienceSection({ onOpenReservation }) {
  const AMBIENCE_GALLERY = [
    {
      id: 'ambience-1',
      title: 'Open Sky Deck',
      subtitle: 'Warm Edison Glow & Wooden Thatch Roof',
      image: '/Hotel.webp',
      badge: 'MAIN ROOFTOP DECK',
      description: 'Rustic wooden pillars, woven ceilings, soft ambient Edison bulbs, and artificial grass turf for open-air evening dining.'
    },
    {
      id: 'ambience-2',
      title: 'Projection Lounge',
      subtitle: 'Live Screenings & Hanging Greenery',
      image: '/Hotel2.webp',
      badge: 'SCREENING LOUNGE',
      description: 'Features big-screen movie & sports screenings, fairy-lit ceilings, cozy leather seating, and lush hanging pothos plants.'
    },
    {
      id: 'ambience-3',
      title: 'Botanical Bar Lounge',
      subtitle: 'Leaf Canopy & Orange Globe Lanterns',
      image: '/Hotel3.jpg',
      badge: 'COCKTAIL BAR DECK',
      description: 'Vibrant leaf-covered ceilings with warm hanging globe lanterns, stylish dining seating, and full bar counter service.'
    },
    {
      id: 'ambience-4',
      title: 'Skyline Terrace Deck',
      subtitle: 'Hanging Star Lights & City Vibe',
      image: '/Hotel4.jpg',
      badge: 'BALCONY STAR DECK',
      description: 'Balcony deck featuring star-shaped hanging lights, night skyline views over College Road, and cozy intimate tables.'
    }
  ];

  return (
    <section id="ambience" style={{ padding: '90px 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'end', marginBottom: '60px' }}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>THE 4 AMBIENCE ZONES</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: '400',
              color: 'var(--color-primary)',
              lineHeight: '1.12'
            }}>
              Four distinct rooftop zones under{' '}
              <span className="italic-accent" style={{ fontStyle: 'italic' }}>
                one starlit sky.
              </span>
            </h2>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              color: 'var(--color-text-muted)',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              Designed for long conversations, rooftop stargazing, live acoustics, and Gen-Z aesthetics. Flying Monk offers four distinct ambient zones across our 3rd-floor College Road rooftop.
            </p>
            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary" 
              style={{ padding: '12px 24px', fontSize: '11px' }}
            >
              <span>RESERVE A ZONE TABLE</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* 4 Ambience Showcase Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '60px' }}>
          {AMBIENCE_GALLERY.map(item => (
            <div 
              key={item.id}
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div className="img-zoom-container" style={{ height: '280px', position: 'relative' }}>
                  <img src={item.image} alt={item.title} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span className="badge">{item.badge}</span>
                  </div>
                </div>
                
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {item.subtitle}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          padding: '36px',
          backgroundColor: 'rgba(74, 23, 37, 0.03)',
          border: '1px solid var(--color-border)'
        }}>
          {[
            { icon: Moon, title: 'Nighttime Open Deck', desc: 'Enjoy cooler evening breezes and stargazing elevated above College Road.' },
            { icon: Tv, title: 'Screening Lounge', desc: 'Live match screenings, acoustic night performances, and movie sessions.' },
            { icon: Utensils, title: 'Fresh Artisanal Kitchen', desc: 'Prepared live to order with premium spices and artisanal techniques.' },
            { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Ideal for Gen-Z digital nomads, content creators, and evening hangouts.' }
          ].map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <feat.icon size={18} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-primary)', marginBottom: '4px' }}>
                  {feat.title}
                </h4>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
