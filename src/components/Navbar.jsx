import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, reservationCount, onOpenCart, onOpenReservation, onOpenSavedReservations }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Ribbon - Unified Centered Row */}
      <div style={{
        backgroundColor: '#4A1725',
        color: '#FAF7F2',
        fontSize: '11px',
        fontWeight: '500',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '9px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '20px', 
          flexWrap: 'wrap' 
        }}>
          {/* Address */}
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={13} color="#E0A855" />
            <span>3rd floor, College Rd, behind Big Bazaar, Ramdas Colony, Nashik</span>
          </span>

          <span style={{ color: '#E0A855', opacity: 0.6 }}>•</span>

          {/* Phone */}
          <a 
            href="tel:+919561705405" 
            style={{ 
              color: '#FAF7F2', 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              fontWeight: '600',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.8'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            <Phone size={13} color="#E0A855" />
            <span>+91 9561705405</span>
          </a>

          <span style={{ color: '#E0A855', opacity: 0.6 }}>•</span>

          {/* Tagline */}
          <span style={{ color: '#E0A855', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
            <Sparkles size={12} /> ROOFTOP KITCHEN & HOTEL
          </span>
        </div>
      </div>

      {/* Main CHARIS Style Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(246, 242, 235, 0.96)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--color-border)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '16px 0' : '22px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* CHARIS Style Brand Logo */}
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Interlocking Rings Emblem (Matching CHARIS logo) */}
            <div style={{ position: 'relative', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="20" r="11" stroke="#4A1725" strokeWidth="1.5" strokeOpacity="0.85"/>
                <circle cx="25" cy="20" r="11" stroke="#4A1725" strokeWidth="1.5" strokeOpacity="0.85"/>
                <circle cx="20" cy="15" r="7" stroke="#C88D42" strokeWidth="1" strokeDasharray="2 2"/>
              </svg>
            </div>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '24px', 
                fontWeight: '600', 
                letterSpacing: '0.12em',
                lineHeight: '1',
                textTransform: 'uppercase'
              }}>
                FLYING MONK
              </div>
              <div style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '9px', 
                fontWeight: '600', 
                letterSpacing: '0.22em', 
                color: 'var(--color-text-muted)',
                marginTop: '3px',
                textTransform: 'uppercase'
              }}>
                ROOF KITCHEN & HOTEL
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <a href="#home" style={navLinkStyle}>HOME</a>
            <a href="#ambience" style={navLinkStyle}>THE AMBIENCE</a>
            <a href="#menu" style={navLinkStyle}>ROOFTOP MENU</a>
            <a href="#stays" style={navLinkStyle}>LUXURY STAYS</a>
            <a href="#contact" style={navLinkStyle}>LOCATION</a>
          </nav>

          {/* Action Buttons & LocalStorage Drawers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            
            {/* Saved Reservations Counter Pill */}
            {reservationCount > 0 && (
              <button 
                onClick={onOpenSavedReservations}
                style={{
                  background: 'rgba(74, 23, 37, 0.06)',
                  border: '1px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  padding: '8px 14px',
                  fontSize: '10px',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Calendar size={13} />
                <span>BOOKINGS ({reservationCount})</span>
              </button>
            )}

            {/* Cart Drawer Trigger */}
            <button 
              onClick={onOpenCart}
              style={{
                background: 'transparent',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                padding: '9px 16px',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
            >
              <ShoppingBag size={14} />
              <span>PRE-ORDER ({cartCount})</span>
            </button>

            {/* Reserve Primary Button */}
            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '11px' }}
            >
              <span>RESERVE TABLE</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

const navLinkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '0.18em',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  position: 'relative',
  transition: 'color 0.2s ease',
  padding: '4px 0'
};
