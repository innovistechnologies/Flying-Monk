import React from 'react';
import { ArrowDown, ArrowRight, Star } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  return (
    <section id="home" style={{ padding: '40px 0 30px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'left' }}>
          
          {/* CHARIS Eyebrow accent with line */}
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>ROOFTOP KITCHEN & HOTEL ADVISORY</span>
          </div>

          {/* CHARIS Typography: Big Serif Headline with Italic Accent */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 6vw, 76px)',
            fontWeight: '400',
            lineHeight: '1.1',
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '20px'
          }}>
            The right vibe begins with{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--color-primary)' }}>
              atmosphere & altitude.
            </span>
          </h1>

          {/* CHARIS Paragraph Subtitle */}
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 21px)',
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-text-muted)',
            fontWeight: '400',
            lineHeight: '1.5',
            maxWidth: '760px',
            marginBottom: '28px'
          }}>
            FLYING MONK pairs open-air rooftop dining, Gen-Z aesthetic craft mixology, and boutique luxury stays high above Nashik — curated for the moment.
          </p>

          {/* CHARIS Action Buttons Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary"
            >
              <span>RESERVE A TABLE</span>
              <ArrowRight size={14} />
            </button>

            <a 
              href="#ambience" 
              className="btn-secondary"
            >
              <span>SEE AMBIENCE</span>
              <ArrowDown size={12} />
            </a>
          </div>
        </div>

        {/* Hero Featured Rooftop Visual - Hotel.webp */}
        <div style={{
          position: 'relative',
          width: '100%',
          borderRadius: '2px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-hover)',
          border: '1px solid var(--color-border-light)'
        }}>
          <div className="img-zoom-container mobile-hero-img" style={{ height: '420px' }}>
            <img 
              src="/Hotel.webp" 
              alt="Flying Monk Rooftop Kitchen Ambience" 
              style={{ objectPosition: 'center 45%' }}
            />
          </div>
          
          {/* Floating Mobile Responsive Overlay Badges */}
          <div 
            className="mobile-hero-overlay"
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '12px'
            }}
          >
            <div style={{
              backgroundColor: 'rgba(246, 242, 235, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '10px 16px',
              borderLeft: '3px solid var(--color-primary)',
              maxWidth: '360px'
            }}>
              <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                NIGHTTIME SKYLINE DECK
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-text-dark)', marginTop: '2px' }}>
                Warm Edison Glow & Open Air Canopy
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(74, 23, 37, 0.95)',
              color: '#FAF7F2',
              backdropFilter: 'blur(8px)',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', color: '#E0A855' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#E0A855" stroke="none" />
                ))}
              </div>
              <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                4.9 ★ (850+ REVIEWS)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
