import React from 'react';
import { X, Calendar, Clock, MapPin, Trash2, CheckCircle, Phone } from 'lucide-react';

export default function SavedReservationsModal({ isOpen, onClose, reservations, onDeleteReservation }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--color-card)',
          border: '1px solid var(--color-primary)',
          maxWidth: '600px',
          width: '100%',
          padding: '36px',
          boxShadow: 'var(--shadow-hover)',
          position: 'relative',
          maxHeight: '85vh',
          overflowY: 'auto'
        }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}>
          <X size={20} />
        </button>

        <div className="eyebrow" style={{ marginBottom: '8px' }}>
          <span className="eyebrow-line"></span>
          <span>LOCALSTORAGE SAVED DATA</span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--color-primary)', marginBottom: '20px' }}>
          Your Active Reservations ({reservations.length})
        </h3>

        {reservations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-text-muted)' }}>
            <Calendar size={40} style={{ margin: '0 auto 12px auto', opacity: 0.4 }} />
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>No active bookings found in your browser.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {reservations.map((res) => (
              <div 
                key={res.id}
                style={{
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  padding: '20px',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                      REF: {res.refCode} • {res.type.toUpperCase()}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-primary)', marginTop: '2px' }}>
                      {res.name}
                    </h4>
                  </div>
                  <button 
                    onClick={() => onDeleteReservation(res.id)}
                    style={{ background: 'none', border: 'none', color: '#B71C1C', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}
                  >
                    <Trash2 size={14} />
                    <span>CANCEL</span>
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  <div>📅 <strong>Date:</strong> {res.date}</div>
                  <div>⏰ <strong>Time:</strong> {res.time}</div>
                  <div>👥 <strong>Guests:</strong> {res.guests} Person(s)</div>
                  <div>🪑 <strong>Area:</strong> {res.seating}</div>
                  <div>📞 <strong>Phone:</strong> {res.phone}</div>
                  {res.notes && <div style={{ gridColumn: '1 / -1' }}>📝 <strong>Notes:</strong> {res.notes}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        <button 
          onClick={onClose}
          className="btn-outline"
          style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}
        >
          <span>CLOSE WINDOW</span>
        </button>

      </div>
    </div>
  );
}
