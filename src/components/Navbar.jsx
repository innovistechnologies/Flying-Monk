import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Phone, MapPin, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, reservationCount, onOpenCart, onOpenReservation, onOpenSavedReservations }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Top Banner Ribbon - Unified Centered Mobile Responsive Row */}
      <div style={{
        backgroundColor: '#4A1725',
        color: '#FAF7F2',
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '7px 12px',
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
          gap: '8px', 
          flexWrap: 'wrap',
          lineHeight: '1.4'
        }}>
          {/* Address */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={11} color="#E0A855" style={{ flexShrink: 0 }} />
            <span>College Rd, Nashik</span>
          </span>

          <span style={{ color: '#E0A855', opacity: 0.6 }}>•</span>

          {/* Phone */}
          <a 
            href="tel:+919561705405" 
            style={{ 
              color: '#FAF7F2', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              fontWeight: '600'
            }}
          >
            <Phone size={11} color="#E0A855" style={{ flexShrink: 0 }} />
            <span>+91 9561705405</span>
          </a>

          <span style={{ color: '#E0A855', opacity: 0.6 }}>•</span>

          {/* Tagline */}
          <span style={{ color: '#E0A855', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <Sparkles size={11} style={{ flexShrink: 0 }} /> ROOFTOP KITCHEN & HOTEL
          </span>
        </div>
      </div>

      {/* Main CHARIS Style Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(246, 242, 235, 0.98)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--color-border)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 0' : '16px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          
          {/* CHARIS Style Brand Logo */}
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="20" r="11" stroke="#4A1725" strokeWidth="1.5" strokeOpacity="0.85"/>
                <circle cx="25" cy="20" r="11" stroke="#4A1725" strokeWidth="1.5" strokeOpacity="0.85"/>
                <circle cx="20" cy="15" r="7" stroke="#C88D42" strokeWidth="1" strokeDasharray="2 2"/>
              </svg>
            </div>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(18px, 4vw, 22px)', 
                fontWeight: '600', 
                letterSpacing: '0.1em',
                lineHeight: '1',
                textTransform: 'uppercase'
              }}>
                FLYING MONK
              </div>
              <div style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '8px', 
                fontWeight: '600', 
                letterSpacing: '0.18em', 
                color: 'var(--color-text-muted)',
                marginTop: '2px',
                textTransform: 'uppercase'
              }}>
                ROOF KITCHEN & HOTEL
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
            <a href="#home" style={navLinkStyle}>HOME</a>
            <a href="#ambience" style={navLinkStyle}>AMBIENCE</a>
            <a href="#menu" style={navLinkStyle}>MENU</a>
            <a href="#stays" style={navLinkStyle}>STAYS</a>
            <a href="#contact" style={navLinkStyle}>LOCATION</a>
          </nav>

          {/* Mobile Right Controls & Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            
            {/* Saved Reservations Counter Pill */}
            {reservationCount > 0 && (
              <button 
                onClick={onOpenSavedReservations}
                style={{
                  background: 'rgba(74, 23, 37, 0.06)',
                  border: '1px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  padding: '6px 10px',
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Calendar size={12} />
                <span>({reservationCount})</span>
              </button>
            )}

            {/* Cart Trigger Button */}
            <button 
              onClick={onOpenCart}
              style={{
                background: 'transparent',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                padding: '7px 12px',
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
            >
              <ShoppingBag size={13} />
              <span>CART ({cartCount})</span>
            </button>

            {/* Reserve Table Primary Button */}
            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary"
              style={{ padding: '8px 14px', fontSize: '10px', letterSpacing: '0.08em' }}
            >
              <span>RESERVE</span>
              <span>→</span>
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-primary)',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
              className="mobile-only-menu-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'var(--color-card)',
            borderBottom: '1px solid var(--color-border)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            animation: 'fadeIn 0.2s ease'
          }}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>HOME</a>
            <a href="#ambience" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>THE AMBIENCE</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>ROOFTOP MENU</a>
            <a href="#stays" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>LUXURY STAYS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>LOCATION</a>
          </div>
        )}

      </header>
    </>
  );
}

const navLinkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '0.16em',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  position: 'relative',
  transition: 'color 0.2s ease',
  padding: '4px 0'
};

const mobileNavLinkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '12px',
  fontWeight: '700',
  letterSpacing: '0.15em',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '6px 0',
  borderBottom: '1px dashed rgba(74, 23, 37, 0.1)'
};
