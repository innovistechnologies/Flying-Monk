import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

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
          maxWidth: '520px',
          width: '94vw',
          padding: '24px 20px',
          boxShadow: 'var(--shadow-hover)',
          position: 'relative',
          maxHeight: '92vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
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
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(74, 23, 37, 0.1)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CheckCircle size={28} />
            </div>

            <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>
              SAVED IN LOCALSTORAGE
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '8px' }}>
              Thank You, {formData.name}!
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.4', marginBottom: '20px' }}>
              Your {bookingType === 'table' ? 'rooftop table' : 'hotel suite'} reservation has been logged.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px border-dashed var(--color-primary)',
              padding: '12px',
              marginBottom: '20px',
              fontSize: '12px'
            }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '0.08em' }}>
                BOOKING REF: <span style={{ color: 'var(--color-gold)' }}>{submittedRef}</span>
              </div>
              <div style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {formData.date} at {formData.time} • {formData.guests} Guest(s)
              </div>
            </div>

            <button 
              onClick={resetAndClose}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>CLOSE</span>
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <div>
            <div className="eyebrow" style={{ marginBottom: '6px' }}>
              <span className="eyebrow-line"></span>
              <span>DIRECT RESERVATION</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Reserve Your {bookingType === 'table' ? 'Rooftop Table' : 'Luxury Stay'}
            </h3>

            {/* Type Switcher Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
              <button
                type="button"
                onClick={() => setBookingType('table')}
                style={{
                  flex: 1,
                  padding: '8px',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
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
                  padding: '8px',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  border: '1px solid var(--color-primary)',
                  backgroundColor: bookingType === 'stay' ? 'var(--color-primary)' : 'transparent',
                  color: bookingType === 'stay' ? '#FFFFFF' : 'var(--color-primary)',
                  cursor: 'pointer'
                }}
              >
                HOTEL SUITE
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <div>
                <label style={labelStyle}>YOUR FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>MOBILE NUMBER *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
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
                  <label style={labelStyle}>TIME *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="18:00">06:00 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={labelStyle}>GUESTS *</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="6">6+ Persons</option>
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
                    <option value="Canopy Lounge">Canopy Lounge</option>
                    <option value="Projector Nook">Projector Nook</option>
                    <option value="Private Booth">Private Booth</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>SPECIAL REQUESTS</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday, Candlelight dinner..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
              >
                <span>CONFIRM & SAVE</span>
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
  fontSize: '9px',
  fontWeight: '700',
  letterSpacing: '0.12em',
  color: 'var(--color-primary)',
  marginBottom: '4px',
  textTransform: 'uppercase'
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  fontSize: '12px',
  fontFamily: 'var(--font-sans)',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-primary)',
  outline: 'none'
};
