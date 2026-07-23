import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const HOTEL_SUITES = [
  {
    id: 'suite-1',
    name: 'Skyline Terrace Balcony Suite',
    price: 3499,
    rating: 4.9,
    tag: 'MOST POPULAR',
    image: '/Hotel4.jpg',
    specs: ['King Bed', 'Star-lit Balcony', 'Free Breakfast', 'Rain Shower'],
    description: 'Luxury suite featuring plush bedding, direct rooftop balcony deck access, and panoramic city views.'
  },
  {
    id: 'suite-2',
    name: 'Gen-Z Aesthetic Studio Room',
    price: 2799,
    rating: 4.8,
    tag: 'BOUTIQUE STAY',
    image: '/Hotel2.webp',
    specs: ['Queen Bed', 'Ambient LED Setup', 'Smart TV + OTT', 'Workstation'],
    description: 'Minimalist chic studio designed for digital creators, equipped with high-speed fiber internet & smart TV.'
  },
  {
    id: 'suite-3',
    name: 'Botanical Master Suite',
    price: 4199,
    rating: 5.0,
    tag: 'PREMIUM LUXURY',
    image: '/Hotel3.jpg',
    specs: ['King Suite', 'Private Lounge', 'Drink Vouchers', '24/7 Service'],
    description: 'Our finest suite located adjacent to the botanical lantern lounge, featuring complimentary rooftop drinks on arrival.'
  }
];

export default function HotelStaysSection({ onOpenReservation }) {
  return (
    <section id="stays" style={{ padding: '90px 0', backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line"></span>
            <span>BOUTIQUE HOTEL & SUITES</span>
            <span className="eyebrow-line" style={{ marginLeft: '12px', marginRight: 0 }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            fontWeight: '400',
            color: 'var(--color-primary)',
            lineHeight: '1.15',
            marginBottom: '18px'
          }}>
            Rest elevated in our{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic' }}>
              chic boutique suites.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5'
          }}>
            Extend your evening experience with a stay in our thoughtfully designed hotel rooms, located right below the rooftop kitchen deck in College Road, Nashik.
          </p>
        </div>

        {/* Suites Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {HOTEL_SUITES.map(suite => (
            <div
              key={suite.id}
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <div>
                <div className="img-zoom-container" style={{ height: '220px', position: 'relative' }}>
                  <img src={suite.image} alt={suite.name} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span className="badge">{suite.tag}</span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '600'
                  }}>
                    ₹{suite.price} / night
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    marginBottom: '10px'
                  }}>
                    {suite.name}
                  </h3>

                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
                    {suite.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                    {suite.specs.map((spec, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--color-primary)' }}>
                        <ShieldCheck size={13} color="var(--color-gold)" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: '0 24px 24px 24px' }}>
                <button
                  onClick={() => onOpenReservation('stay', suite)}
                  className="btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>INQUIRE / BOOK SUITE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
