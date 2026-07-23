import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const HOTEL_SUITES = [
  {
    id: 'suite-1',
    name: 'Skyline Terrace Suite',
    price: 3499,
    rating: 4.9,
    tag: 'POPULAR STAY',
    image: '/Hotel4.jpg',
    specs: ['King Bed', 'Star Balcony', 'Breakfast'],
    description: 'Luxury suite featuring plush bedding, direct rooftop balcony deck access, and panoramic city views.'
  },
  {
    id: 'suite-2',
    name: 'Gen-Z Studio Room',
    price: 2799,
    rating: 4.8,
    tag: 'BOUTIQUE STAY',
    image: '/Hotel2.webp',
    specs: ['Queen Bed', 'Smart TV + OTT', 'Workstation'],
    description: 'Minimalist chic studio designed for digital creators, equipped with high-speed fiber internet & smart TV.'
  },
  {
    id: 'suite-3',
    name: 'Botanical Master Suite',
    price: 4199,
    rating: 5.0,
    tag: 'PREMIUM STAY',
    image: '/Hotel3.jpg',
    specs: ['King Suite', 'Drink Vouchers', '24/7 Service'],
    description: 'Our finest suite located adjacent to the botanical lantern lounge, featuring complimentary rooftop drinks.'
  }
];

export default function HotelStaysSection({ onOpenReservation }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Display 3 suites on PC / Desktop, and 2 suites in 2:2 grid on Mobile
  const displayedSuites = isMobile ? HOTEL_SUITES.slice(0, 2) : HOTEL_SUITES;

  return (
    <section id="stays" style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line"></span>
            <span>BOUTIQUE HOTEL & SUITES</span>
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
            Rest elevated in our{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic' }}>
              chic boutique suites.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5'
          }}>
            Located right below the rooftop kitchen deck on College Road, Nashik.
          </p>
        </div>

        {/* Responsive Suites Grid: 3-column on PC, 2-column on Mobile */}
        <div 
          className="mobile-grid-2"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
            gap: isMobile ? '14px' : '28px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {displayedSuites.map(suite => (
            <div
              key={suite.id}
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-subtle)',
                overflow: 'hidden'
              }}
            >
              <div>
                <div className="img-zoom-container mobile-card-img" style={{ height: isMobile ? '140px' : '220px', position: 'relative' }}>
                  <img src={suite.image} alt={suite.name} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="badge" style={{ fontSize: isMobile ? '8px' : '9px', padding: isMobile ? '2px 6px' : '3px 8px' }}>{suite.tag}</span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    padding: isMobile ? '4px 8px' : '6px 12px',
                    fontSize: isMobile ? '11px' : '13px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '600'
                  }}>
                    ₹{suite.price}
                  </div>
                </div>

                <div className="mobile-card-padding" style={{ padding: isMobile ? '12px' : '20px' }}>
                  <h3 className="mobile-card-title" style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? '15px' : '22px',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    marginBottom: '6px'
                  }}>
                    {suite.name}
                  </h3>

                  <p className="mobile-card-desc line-clamp-2" style={{ fontSize: isMobile ? '11px' : '12px', color: 'var(--color-text-muted)', lineHeight: '1.4', marginBottom: '12px' }}>
                    {suite.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {suite.specs.map((spec, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: isMobile ? '10px' : '11px', color: 'var(--color-primary)' }}>
                        <ShieldCheck size={isMobile ? 11 : 12} color="var(--color-gold)" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mobile-card-padding" style={{ padding: isMobile ? '0 12px 12px 12px' : '0 20px 20px 20px' }}>
                <button
                  onClick={() => onOpenReservation('stay', suite)}
                  className="btn-outline"
                  style={{ width: '100%', justifyContent: 'center', padding: isMobile ? '8px 4px' : '12px', fontSize: isMobile ? '9px' : '11px' }}
                >
                  <span>INQUIRE / BOOK</span>
                  <ArrowRight size={isMobile ? 12 : 14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
