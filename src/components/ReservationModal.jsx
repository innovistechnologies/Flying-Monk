import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, CheckCircle, Sparkles, MapPin } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose, initialType = 'table', initialSuite = null, onSaveReservation }) {
  const [bookingType, setBookingType] = useState(initialType);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    seating: 'Open Sky Deck',
    notes: '',
    suiteName: initialSuite ? initialSuite.name : 'Rooftop Executive Suite'
  });

  const [submittedRef, setSubmittedRef] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const refCode = 'FM-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking = {
      id: Date.now(),
      refCode,
      type: bookingType,
      ...formData,
      createdAt: new Date().toLocaleString()
    };

    onSaveReservation(newBooking);
    setSubmittedRef(refCode);
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div 
        className="animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--color-card)',
          border: '1px solid var(--color-primary)',
          maxWidth: '560px',
          width: '100%',
          padding: '36px',
          boxShadow: 'var(--shadow-hover)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-primary)',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <X size={20} />
        </button>

        {submittedRef ? (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(74, 23, 37, 0.1)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle size={32} />
            </div>

            <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>
              RESERVATION SAVED IN BROWSER LOCALSTORAGE
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--color-primary)', marginBottom: '12px' }}>
              Thank You, {formData.name}!
            </h3>

            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '24px' }}>
              Your {bookingType === 'table' ? 'rooftop table' : 'hotel suite'} reservation request has been logged. Our host will confirm via call/WhatsApp.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px border-dashed var(--color-primary)',
              padding: '16px',
              marginBottom: '24px',
              fontSize: '13px'
            }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '0.1em' }}>
                BOOKING REFERENCE: <span style={{ color: 'var(--color-gold)' }}>{submittedRef}</span>
              </div>
              <div style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {formData.date} at {formData.time} • {formData.guests} Guest(s) • {formData.seating}
              </div>
            </div>

            <button 
              onClick={resetAndClose}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>CLOSE & CONTINUE EXPLORING</span>
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <div>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              <span className="eyebrow-line"></span>
              <span>DIRECT RESERVATION</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--color-primary)', marginBottom: '20px' }}>
              Reserve Your {bookingType === 'table' ? 'Rooftop Table' : 'Luxury Stay'}
            </h3>

            {/* Type Switcher Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <button
                type="button"
                onClick={() => setBookingType('table')}
                style={{
                  flex: 1,
                  padding: '10px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  border: '1px solid var(--color-primary)',
                  backgroundColor: bookingType === 'table' ? 'var(--color-primary)' : 'transparent',
                  color: bookingType === 'table' ? '#FFFFFF' : 'var(--color-primary)',
                  cursor: 'pointer'
                }}
              >
                ROOFTOP TABLE
              </button>
              <button
                type="button"
                onClick={() => setBookingType('stay')}
                style={{
                  flex: 1,
                  padding: '10px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  border: '1px solid var(--color-primary)',
                  backgroundColor: bookingType === 'stay' ? 'var(--color-primary)' : 'transparent',
                  color: bookingType === 'stay' ? '#FFFFFF' : 'var(--color-primary)',
                  cursor: 'pointer'
                }}
              >
                HOTEL SUITE
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div>
                <label style={labelStyle}>YOUR FULL NAME *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>MOBILE NUMBER (WHATSAPP CONFIRMATION) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>DATE *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>PREFERRED TIME *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="18:00">06:00 PM (Sunset)</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="20:00">08:00 PM (Peak Vibe)</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="22:00">10:00 PM (Late Stargazing)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>NO. OF GUESTS *</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Couple/Friends)</option>
                    <option value="4">4 Persons (Group)</option>
                    <option value="6">6+ Persons (Party Deck)</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>SEATING AREA</label>
                  <select
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="Open Sky Deck">Open Sky Deck</option>
                    <option value="Fairy Light Canopy Lounge">Canopy Lounge</option>
                    <option value="Projector Screen Nook">Projector Lounge</option>
                    <option value="Private Booth">Private Booth</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>SPECIAL CELEBRATION / REQUESTS</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday surprise, Candlelight dinner, Quiet nook..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
              >
                <span>CONFIRM & SAVE RESERVATION</span>
                <span>→</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '0.15em',
  color: 'var(--color-primary)',
  marginBottom: '6px',
  textTransform: 'uppercase'
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontSize: '13px',
  fontFamily: 'var(--font-sans)',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-primary)',
  outline: 'none'
};
