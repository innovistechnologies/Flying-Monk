import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AmbienceSection from './components/AmbienceSection';
import HotelStaysSection from './components/HotelStaysSection';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';
import SavedReservationsModal from './components/SavedReservationsModal';
import Footer from './components/Footer';

export default function App() {
  // LocalStorage state management
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('flyingmonk_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [reservations, setReservations] = useState(() => {
    try {
      const saved = localStorage.getItem('flyingmonk_reservations');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Modal Visibility States
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationType, setReservationType] = useState('table');
  const [selectedSuite, setSelectedSuite] = useState(null);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSavedReservationsOpen, setIsSavedReservationsOpen] = useState(false);
  const [addedItemId, setAddedItemId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('flyingmonk_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('flyingmonk_reservations', JSON.stringify(reservations));
  }, [reservations]);

  // Toast message auto dismiss
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500);
    showToast(`Added "${item.name}" to Pre-order!`);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Reservation Handlers
  const handleOpenReservation = (type = 'table', suite = null) => {
    setReservationType(type);
    setSelectedSuite(suite);
    setIsReservationOpen(true);
  };

  const handleSaveReservation = (newBooking) => {
    setReservations((prev) => [newBooking, ...prev]);
    showToast(`Reservation #${newBooking.refCode} saved!`);
  };

  const handleDeleteReservation = (id) => {
    setReservations((prev) => prev.filter((r) => r.id !== id));
    showToast('Reservation removed.');
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: 'var(--color-primary)',
          color: '#FFFFFF',
          padding: '14px 24px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.12em',
          zIndex: 10000,
          boxShadow: 'var(--shadow-hover)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderLeft: '4px solid #E0A855',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <span>✦</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* CHARIS Theme Navbar */}
      <Navbar 
        cartCount={cartTotalCount}
        reservationCount={reservations.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={handleOpenReservation}
        onOpenSavedReservations={() => setIsSavedReservationsOpen(true)}
      />

      {/* Main Page Sections */}
      <main style={{ flex: 1 }}>
        <Hero 
          onOpenReservation={handleOpenReservation} 
        />

        <MenuSection 
          onAddToCart={handleAddToCart}
          addedItemId={addedItemId}
        />

        <AmbienceSection 
          onOpenReservation={handleOpenReservation}
        />

        <HotelStaysSection 
          onOpenReservation={handleOpenReservation}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenReservation={handleOpenReservation}
      />

      {/* Interactive LocalStorage Modals */}
      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialType={reservationType}
        initialSuite={selectedSuite}
        onSaveReservation={handleSaveReservation}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <SavedReservationsModal 
        isOpen={isSavedReservationsOpen}
        onClose={() => setIsSavedReservationsOpen(false)}
        reservations={reservations}
        onDeleteReservation={handleDeleteReservation}
      />

    </div>
  );
}
