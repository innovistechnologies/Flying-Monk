import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--color-card)',
          borderLeft: '1px solid var(--color-primary)',
          width: '100%',
          maxWidth: '440px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-hover)',
          animation: 'slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--color-bg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={18} color="var(--color-primary)" />
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: '600', color: 'var(--color-primary)' }}>
              PRE-ORDER SELECTIONS
            </span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Cart Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-text-muted)' }}>
              <ShoppingBag size={48} strokeWidth={1} style={{ margin: '0 auto 16px auto', opacity: 0.5 }} />
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '8px' }}>
                Your Pre-order List is Empty
              </p>
              <p style={{ fontSize: '13px', lineHeight: '1.4' }}>
                Explore our rooftop food and mixology items and add your favorites before your visit!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map(item => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--color-border-light)',
                    alignItems: 'center'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '64px', height: '64px', objectFit: 'cover', border: '1px solid var(--color-border)' }}
                  />

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                      {item.categoryLabel}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      {item.name}
                    </h4>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-primary)' }}>
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)' }}>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      style={{ padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ padding: '0 8px', fontSize: '12px', fontWeight: '600' }}>
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      style={{ padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    style={{ background: 'none', border: 'none', color: '#B71C1C', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '20px', paddingTop: '10px', borderTop: '1px dashed var(--color-border)' }}>
              <span>ESTIMATED TOTAL</span>
              <span>₹{total}</span>
            </div>

            <button 
              onClick={() => {
                alert('Pre-order saved in browser local storage! Mention reference code upon seating.');
                onClose();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>CONFIRM PRE-ORDER</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
