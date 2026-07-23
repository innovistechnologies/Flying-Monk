import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Phone, MapPin, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, reservationCount, onOpenCart, onOpenReservation, onOpenSavedReservations }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      {/* Top Banner Ribbon - Full Width Centered */}
      <div style={{
        backgroundColor: '#4A1725',
        color: '#FAF7F2',
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '7px 12px',
        width: '100%',
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
          lineHeight: '1.3',
          width: '100%'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={11} color="#E0A855" style={{ flexShrink: 0 }} />
            <span> 3rd floor, College Road, Ramdas Colony, Nashik</span>
          </span>

          <span style={{ color: '#E0A855', opacity: 0.6 }}>•</span>

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

          <span style={{ color: '#E0A855', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <Sparkles size={11} style={{ flexShrink: 0 }} /> ROOFTOP KITCHEN & HOTEL
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(246, 242, 235, 0.98)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--color-border)',
        transition: 'all 0.25s ease',
        padding: scrolled ? '10px 0' : '14px 0',
        width: '100%'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="20" r="11" stroke="#4A1725" strokeWidth="1.5" strokeOpacity="0.85"/>
                <circle cx="25" cy="20" r="11" stroke="#4A1725" strokeWidth="1.5" strokeOpacity="0.85"/>
                <circle cx="20" cy="15" r="7" stroke="#C88D42" strokeWidth="1" strokeDasharray="2 2"/>
              </svg>
            </div>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(16px, 3.8vw, 22px)', 
                fontWeight: '600', 
                letterSpacing: '0.1em',
                lineHeight: '1',
                textTransform: 'uppercase'
              }}>
                FLYING MONK
              </div>
              <div style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '7px', 
                fontWeight: '600', 
                letterSpacing: '0.16em', 
                color: 'var(--color-text-muted)',
                marginTop: '2px',
                textTransform: 'uppercase'
              }}>
                ROOF KITCHEN & HOTEL
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on PC >= 769px) */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-nav">
            <a href="#home" style={navLinkStyle}>HOME</a>
            <a href="#ambience" style={navLinkStyle}>AMBIENCE</a>
            <a href="#menu" style={navLinkStyle}>MENU</a>
            <a href="#stays" style={navLinkStyle}>STAYS</a>
            <a href="#contact" style={navLinkStyle}>LOCATION</a>
          </nav>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            
            {/* Saved Bookings Counter */}
            {reservationCount > 0 && (
              <button 
                onClick={onOpenSavedReservations}
                style={{
                  background: 'rgba(74, 23, 37, 0.06)',
                  border: '1px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  padding: '5px 8px',
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px'
                }}
              >
                <Calendar size={11} />
                <span>({reservationCount})</span>
              </button>
            )}

            {/* Cart Trigger */}
            <button 
              onClick={onOpenCart}
              style={{
                background: 'transparent',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                padding: '6px 10px',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap'
              }}
            >
              <ShoppingBag size={12} />
              <span>CART ({cartCount})</span>
            </button>

            {/* Desktop Reserve Button (Visible ONLY on PC >= 769px) */}
            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary desktop-only-btn"
              style={{ padding: '8px 14px', fontSize: '10px', letterSpacing: '0.06em' }}
            >
              <span>RESERVE</span>
              <span>→</span>
            </button>

            {/* Mobile Hamburger Toggle Icon (Visible ONLY on Mobile <= 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-only-btn"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-primary)',
                padding: '4px',
                cursor: 'pointer',
                alignItems: 'center'
              }}
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
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'fadeIn 0.2s ease'
          }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation('table');
              }}
              className="btn-primary"
              style={{ width: '100%', marginBottom: '4px' }}
            >
              <span>RESERVE A TABLE NOW →</span>
            </button>

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
  letterSpacing: '0.14em',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  position: 'relative',
  transition: 'color 0.2s ease',
  padding: '4px 0'
};

const mobileNavLinkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.12em',
  color: 'var(--color-primary)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '6px 0',
  borderBottom: '1px dashed rgba(74, 23, 37, 0.1)'
};
