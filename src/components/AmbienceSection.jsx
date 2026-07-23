import React from 'react';
import { Moon, Tv, Wifi, Utensils } from 'lucide-react';

export default function AmbienceSection({ onOpenReservation }) {
  const AMBIENCE_GALLERY = [
    {
      id: 'ambience-1',
      title: 'Open Sky Deck',
      subtitle: 'Edison Glow & Thatch Roof',
      image: '/Hotel.webp',
      badge: 'MAIN SKY DECK',
      description: 'Rustic wooden pillars, woven ceilings, soft ambient Edison bulbs, and artificial grass turf.'
    },
    {
      id: 'ambience-2',
      title: 'Projection Lounge',
      subtitle: 'Screenings & Greenery',
      image: '/Hotel2.webp',
      badge: 'SCREENING LOUNGE',
      description: 'Big-screen movie & sports screenings, fairy-lit ceilings, cozy leather seating, and lush hanging pothos.'
    },
    {
      id: 'ambience-3',
      title: 'Botanical Bar Lounge',
      subtitle: 'Leaf Canopy & Lanterns',
      image: '/Hotel3.jpg',
      badge: 'COCKTAIL DECK',
      description: 'Vibrant leaf-covered ceilings with warm hanging globe lanterns, stylish dining seating, and full bar service.'
    },
    {
      id: 'ambience-4',
      title: 'Skyline Terrace Deck',
      subtitle: 'Star Lights & City Views',
      image: '/Hotel4.jpg',
      badge: 'BALCONY DECK',
      description: 'Balcony deck featuring star-shaped hanging lights, night skyline views over College Road, and intimate tables.'
    }
  ];

  return (
    <section id="ambience" style={{ padding: '60px 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line"></span>
            <span>THE 4 AMBIENCE ZONES</span>
            <span className="eyebrow-line" style={{ marginLeft: '12px', marginRight: 0 }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: '400',
            color: 'var(--color-primary)',
            lineHeight: '1.15',
            marginBottom: '12px'
          }}>
            Four distinct rooftop zones under{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic' }}>
              one starlit sky.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5',
            marginBottom: '20px'
          }}>
            Open skies, live acoustics, and Gen-Z aesthetics high above Nashik.
          </p>

          <button 
            onClick={() => onOpenReservation('table')}
            className="btn-primary" 
            style={{ padding: '10px 20px', fontSize: '10px' }}
          >
            <span>RESERVE A ZONE TABLE</span>
            <span>→</span>
          </button>
        </div>

        {/* 4 Ambience Showcase Cards - 2:2 Grid on Mobile */}
        <div 
          className="mobile-grid-2"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '20px', 
            marginBottom: '40px' 
          }}
        >
          {AMBIENCE_GALLERY.map(item => (
            <div 
              key={item.id}
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
              }}
            >
              <div>
                <div className="img-zoom-container mobile-card-img" style={{ height: '160px', position: 'relative' }}>
                  <img src={item.image} alt={item.title} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="badge" style={{ fontSize: '8px', padding: '2px 6px' }}>{item.badge}</span>
                  </div>
                </div>
                
                <div className="mobile-card-padding" style={{ padding: '16px' }}>
                  <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.subtitle}
                  </div>
                  <h3 className="mobile-card-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p className="mobile-card-desc line-clamp-2" style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights Bar */}
        <div 
          className="mobile-grid-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            padding: '24px',
            backgroundColor: 'rgba(74, 23, 37, 0.03)',
            border: '1px solid var(--color-border)'
          }}
        >
          {[
            { icon: Moon, title: 'Nighttime Deck', desc: 'Cool evening breezes & stargazing.' },
            { icon: Tv, title: 'Screenings', desc: 'Live matches & movie screenings.' },
            { icon: Utensils, title: 'Fresh Kitchen', desc: 'Live artisanal dishes & spices.' },
            { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Ideal for creators & hangouts.' }
          ].map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <feat.icon size={14} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-primary)', marginBottom: '2px' }}>
                  {feat.title}
                </h4>
                <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: '1.3' }}>
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
