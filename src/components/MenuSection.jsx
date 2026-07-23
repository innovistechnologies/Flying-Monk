import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export const MENU_ITEMS = [
  {
    id: 'item-1',
    name: 'Artisanal Mint Lime Julep',
    category: 'drink',
    categoryLabel: 'Craft Mixology',
    price: 240,
    rating: 4.9,
    image: '/item1.jpg',
    isPopular: true,
    tag: 'SIGNATURE BEVERAGE',
    description: 'Fresh crushed garden mint, key lime juice, cane elixir, crushed ice, and sparkling mineral water served chilled.',
    ingredients: ['Fresh Mint', 'Key Lime', 'Sparkling Soda', 'Crushed Ice']
  },
  {
    id: 'item-2',
    name: 'Golden Cheese Stuffed Bombs',
    category: 'food',
    categoryLabel: 'Rooftop Starter',
    price: 360,
    rating: 4.8,
    image: '/item2.jpg',
    isPopular: true,
    tag: 'GOURMET BITES',
    description: 'Crispy artisanal stuffed bites filled with melted cheese, garnished with maraschino cherry and micro-greens.',
    ingredients: ['Mozzarella Cheese', 'Herbed Crumbs', 'Cherry Top']
  },
  {
    id: 'item-3',
    name: 'Sizzling Garlic Chili Boat',
    category: 'food',
    categoryLabel: 'Indo-Asian Fusion',
    price: 340,
    rating: 4.9,
    image: '/item3.webp',
    isPopular: false,
    tag: 'WOK SPECIALTY',
    description: 'Wok-tossed charred paneer and crisp scallions glazed in dark garlic chili sauce served in a traditional boat dish.',
    ingredients: ['Cottage Cheese', 'Bell Peppers', 'Garlic Glaze']
  },
  {
    id: 'item-4',
    name: 'Royal Tandoori Tangdi Platter',
    category: 'food',
    categoryLabel: 'Chef Signature',
    price: 480,
    rating: 5.0,
    image: '/item4.webp',
    isPopular: true,
    tag: 'CHEF CHOICE',
    description: 'Clay-oven roasted chicken drumsticks marinated in hand-ground spices, served with fresh cabbage salad & mint chutney.',
    ingredients: ['Tandoori Spices', 'Shredded Salad', 'Lime & Mint']
  }
];

export default function MenuSection({ onAddToCart, addedItemId }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = MENU_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'food') return item.category === 'food';
    if (activeTab === 'drink') return item.category === 'drink';
    return true;
  });

  return (
    <section id="menu" style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line"></span>
            <span>FEATURED 4 MENU SELECTIONS</span>
            <span className="eyebrow-line" style={{ marginLeft: '12px', marginRight: 0 }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: '400',
            color: 'var(--color-primary)',
            lineHeight: '1.15',
            marginBottom: '12px'
          }}>
            Crafted for the{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic' }}>
              palate & rooftop night.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5'
          }}>
            Freshly prepared live to order with handpicked artisanal ingredients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'ALL 4 DISHES' },
            { id: 'food', label: 'FOOD STARTERS (3)' },
            { id: 'drink', label: 'BEVERAGES (1)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                padding: '8px 16px',
                border: '1px solid var(--color-primary)',
                backgroundColor: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--color-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid - Responsive 2:2 Grid on Mobile Screens */}
        <div 
          className="mobile-grid-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredItems.map(item => {
            const isJustAdded = addedItemId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: 'var(--shadow-subtle)',
                  overflow: 'hidden'
                }}
              >
                <div>
                  {/* Image Container */}
                  <div className="img-zoom-container mobile-card-img" style={{ height: '180px', position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                    />
                    
                    {/* Badge */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                      <span className="badge" style={{ fontSize: '8px', padding: '2px 6px' }}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Price Tag Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: '600'
                    }}>
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mobile-card-padding" style={{ padding: '16px' }}>
                    <div style={{
                      fontSize: '9px',
                      fontWeight: '700',
                      letterSpacing: '0.12em',
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}>
                      {item.categoryLabel}
                    </div>

                    <h3 className="mobile-card-title" style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: '6px',
                      lineHeight: '1.2'
                    }}>
                      {item.name}
                    </h3>

                    <p className="mobile-card-desc line-clamp-2" style={{
                      fontSize: '12px',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.4',
                      marginBottom: '12px'
                    }}>
                      {item.description}
                    </p>

                    {/* Ingredient Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '14px' }}>
                      {item.ingredients.slice(0, 2).map((ing, idx) => (
                        <span key={idx} style={{
                          fontSize: '9px',
                          padding: '2px 6px',
                          backgroundColor: 'rgba(74, 23, 37, 0.05)',
                          color: 'var(--color-primary)',
                          borderRadius: '2px'
                        }}>
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <div className="mobile-card-padding" style={{ padding: '0 16px 16px 16px' }}>
                  <button
                    onClick={() => onAddToCart(item)}
                    style={{
                      width: '100%',
                      padding: '10px 4px',
                      backgroundColor: isJustAdded ? '#2E7D32' : 'transparent',
                      color: isJustAdded ? '#FFFFFF' : 'var(--color-primary)',
                      border: isJustAdded ? '1px solid #2E7D32' : '1px solid var(--color-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '9px',
                      fontWeight: '700',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {isJustAdded ? (
                      <>
                        <Check size={12} />
                        <span>ADDED TO ORDER</span>
                      </>
                    ) : (
                      <>
                        <Plus size={12} />
                        <span>PRE-ORDER DISH</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
