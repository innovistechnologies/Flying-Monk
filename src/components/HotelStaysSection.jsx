import React from 'react';
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
    specs: ['Queen Bed', 'Smart TV', 'Workstation'],
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

        {/* Suites Grid */}
        <div 
          className="mobile-grid-2"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}
        >
          {HOTEL_SUITES.map(suite => (
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
                <div className="img-zoom-container mobile-card-img" style={{ height: '160px', position: 'relative' }}>
                  <img src={suite.image} alt={suite.name} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="badge" style={{ fontSize: '8px', padding: '2px 6px' }}>{suite.tag}</span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '600'
                  }}>
                    ₹{suite.price}
                  </div>
                </div>

                <div className="mobile-card-padding" style={{ padding: '16px' }}>
                  <h3 className="mobile-card-title" style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    marginBottom: '6px'
                  }}>
                    {suite.name}
                  </h3>

                  <p className="mobile-card-desc line-clamp-2" style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: '1.4', marginBottom: '12px' }}>
                    {suite.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {suite.specs.map((spec, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'var(--color-primary)' }}>
                        <ShieldCheck size={11} color="var(--color-gold)" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mobile-card-padding" style={{ padding: '0 16px 16px 16px' }}>
                <button
                  onClick={() => onOpenReservation('stay', suite)}
                  className="btn-outline"
                  style={{ width: '100%', justifyContent: 'center', padding: '8px', fontSize: '9px' }}
                >
                  <span>INQUIRE / BOOK</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
