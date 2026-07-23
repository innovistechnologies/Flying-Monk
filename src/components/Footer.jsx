import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function Footer({ onOpenReservation }) {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" style={{ backgroundColor: '#2B121A', color: '#FAF7F2', paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="20" r="11" stroke="#E0A855" strokeWidth="1.5" strokeOpacity="0.9"/>
                <circle cx="25" cy="20" r="11" stroke="#FAF7F2" strokeWidth="1.5" strokeOpacity="0.9"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', letterSpacing: '0.12em', fontWeight: '600' }}>
                FLYING MONK
              </span>
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(250, 247, 242, 0.7)', lineHeight: '1.6', marginBottom: '24px' }}>
              Nashik's premier aesthetic rooftop kitchen & boutique hotel. Open skies, handcrafted mixology, and cozy skyline evenings.
            </p>

            <button 
              onClick={() => onOpenReservation('table')}
              className="btn-primary"
              style={{ backgroundColor: '#E0A855', color: '#2B121A', borderColor: '#E0A855', padding: '12px 24px', fontSize: '11px' }}
            >
              <span>RESERVE TABLE NOW</span>
              <span>→</span>
            </button>
          </div>

          {/* Exact Address & Contact Info Provided by User */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '0.05em', color: '#E0A855', marginBottom: '20px' }}>
              VISIT & CONNECT
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px', color: 'rgba(250, 247, 242, 0.8)' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#E0A855" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  3rd floor, College Rd, behind Big Bazaar, Ramdas Colony, Nashik, Maharashtra 422005
                </span>
              </li>

              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={16} color="#E0A855" style={{ flexShrink: 0 }} />
                <a 
                  href="tel:+919561705405" 
                  style={{ color: '#FAF7F2', textDecoration: 'none', fontWeight: '600', letterSpacing: '0.05em' }}
                >
                  +91 9561705405
                </a>
              </li>

              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={16} color="#E0A855" style={{ flexShrink: 0 }} />
                <span>Open Daily: 12:00 PM – 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '0.05em', color: '#E0A855', marginBottom: '20px' }}>
              QUICK NAVIGATION
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {['home', 'ambience', 'menu', 'stays', 'contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link}`} 
                    style={{ color: 'rgba(250, 247, 242, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.target.style.color = '#E0A855'}
                    onMouseOut={(e) => e.target.style.color = 'rgba(250, 247, 242, 0.75)'}
                  >
                    {link.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Newsletter */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '0.05em', color: '#E0A855', marginBottom: '16px' }}>
              JOIN THE SKY CLUB
            </h4>

            <p style={{ fontSize: '12px', color: 'rgba(250, 247, 242, 0.7)', lineHeight: '1.5', marginBottom: '16px' }}>
              Subscribe to get exclusive rooftop event invites, live music schedules & seasonal dish previews.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input 
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '12px 14px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(250, 247, 242, 0.2)',
                  color: '#FAF7F2',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />

              <button 
                type="submit"
                style={{
                  padding: '12px',
                  backgroundColor: '#E0A855',
                  color: '#2B121A',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                {emailSubmitted ? 'SUBSCRIBED!' : 'SUBSCRIBE FOR VIP ACCESS'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '11px',
          color: 'rgba(250, 247, 242, 0.5)'
        }}>
          <div>
            © {new Date().getFullYear()} FLYING MONK ROOF KITCHEN & HOTEL. ALL RIGHTS RESERVED.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span>DESIGN THEME: CHARIS SYMBOLIC LUXURY</span>
            <span>NASHIK, MAHARASHTRA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
