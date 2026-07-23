import React from 'react';
import { ArrowDown, ArrowRight, Star, Sparkles, MapPin } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  return (
    <section id="home" style={{ padding: '80px 0 60px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'left' }}>
          
          {/* CHARIS Eyebrow accent with line */}
          <div className="eyebrow" style={{ opacity: 0.9 }}>
            <span className="eyebrow-line"></span>
            <span>ROOFTOP KITCHEN & HOTEL ADVISORY</span>
          </div>

          {/* CHARIS Typography: Big Serif Headline with Italic Accent */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(42px, 6.5vw, 76px)',
            fontWeight: '400',
            lineHeight: '1.08',
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '28px'
          }}>
            The right vibe begins with{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--color-primary)' }}>
              atmosphere & altitude.
            </span>
          </h1>

          {/* CHARIS Paragraph Subtitle */}
          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 21px)',
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-text-muted)',
            fontWeight: '400',
            lineHeight: '1.55',
            maxWidth: '760px',
            marginBottom: '42px'
          }}>
            FLYING MONK pairs open-air rooftop dining, Gen-Z aesthetic craft mixology, and boutique luxury stays high above Nashik — curated for the moment, not an ordinary night out.
          </p>

          {/* CHARIS Action Buttons Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '64px' }}>
            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary"
            >
              <span>RESERVE A TABLE</span>
              <ArrowRight size={16} />
            </button>

            <a 
              href="#ambience" 
              className="btn-secondary"
            >
              <span>SEE THE ROOFTOP AMBIENCE</span>
              <ArrowDown size={14} />
            </a>
          </div>
        </div>

        {/* Hero Featured Rooftop Visual - Hotel.webp (Restored to previous Edison bulb hero image) */}
        <div style={{
          position: 'relative',
          width: '100%',
          borderRadius: '2px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-hover)',
          border: '1px solid var(--color-border-light)'
        }}>
          <div className="img-zoom-container" style={{ height: '520px' }}>
            <img 
              src="/Hotel.webp" 
              alt="Flying Monk Rooftop Kitchen Ambience" 
              style={{ objectPosition: 'center 45%' }}
            />
          </div>
          
          {/* Floating Luxury Overlay Badges */}
          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            right: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '16px',
            pointerEvents: 'none'
          }}>
            <div style={{
              backgroundColor: 'rgba(246, 242, 235, 0.94)',
              backdropFilter: 'blur(8px)',
              padding: '16px 24px',
              borderLeft: '3px solid var(--color-primary)',
              maxWidth: '420px'
            }}>
              <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                NIGHTTIME SKYLINE DECK
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-text-dark)', marginTop: '4px' }}>
                Warm Edison Glow & Open Air Canopy
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(74, 23, 37, 0.92)',
              color: '#FAF7F2',
              backdropFilter: 'blur(8px)',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', color: '#E0A855' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#E0A855" stroke="none" />
                ))}
              </div>
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em' }}>
                4.9 ★ RATING (850+ REVIEWS)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
