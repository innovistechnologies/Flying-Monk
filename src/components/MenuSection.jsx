import React, { useState } from 'react';
import { ShoppingBag, Plus, Check, Star } from 'lucide-react';

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
    ingredients: ['Mozzarella & Cheddar', 'Herbed Breadcrumbs', 'Gourd Nest', 'Cherry Top']
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
    ingredients: ['Cottage Cheese', 'Charred Bell Peppers', 'Garlic Chili Glaze', 'Spring Onion']
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
    ingredients: ['Tandoori Spices', 'Foil Wrapped Legs', 'Shredded Salad', 'Lime & Mint']
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
    <section id="menu" style={{ padding: '90px 0', backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line"></span>
            <span>FEATURED 4 MENU SELECTIONS</span>
            <span className="eyebrow-line" style={{ marginLeft: '12px', marginRight: 0 }}></span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            fontWeight: '400',
            color: 'var(--color-primary)',
            lineHeight: '1.15',
            marginBottom: '18px'
          }}>
            Crafted for the{' '}
            <span className="italic-accent" style={{ fontStyle: 'italic' }}>
              palate & rooftop night.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5'
          }}>
            Every dish and beverage at Flying Monk is freshly prepared using handpicked ingredients, designed to complement our open-air ambient rooftop setting.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'ALL 4 DISHES' },
            { id: 'food', label: 'FOOD STARTERS & GRILLS (3)' },
            { id: 'drink', label: 'CRAFT DRINKS (1)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.18em',
                padding: '12px 24px',
                border: '1px solid var(--color-primary)',
                backgroundColor: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--color-primary)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid - 4 Distinct Dishes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px'
        }}>
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
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div>
                  {/* Image Container */}
                  <div className="img-zoom-container" style={{ height: '240px', position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                    />
                    
                    {/* Badge */}
                    <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                      <span className="badge">
                        {item.tag}
                      </span>
                    </div>

                    {/* Price Tag Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: '600'
                    }}>
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '24px' }}>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      marginBottom: '6px'
                    }}>
                      {item.categoryLabel}
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '22px',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: '10px',
                      lineHeight: '1.2'
                    }}>
                      {item.name}
                    </h3>

                    <p style={{
                      fontSize: '13px',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.5',
                      marginBottom: '16px'
                    }}>
                      {item.description}
                    </p>

                    {/* Ingredient Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {item.ingredients.map((ing, idx) => (
                        <span key={idx} style={{
                          fontSize: '10px',
                          padding: '3px 8px',
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
                <div style={{ padding: '0 24px 24px 24px' }}>
                  <button
                    onClick={() => onAddToCart(item)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: isJustAdded ? '#2E7D32' : 'transparent',
                      color: isJustAdded ? '#FFFFFF' : 'var(--color-primary)',
                      border: isJustAdded ? '1px solid #2E7D32' : '1px solid var(--color-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isJustAdded ? (
                      <>
                        <Check size={14} />
                        <span>ADDED TO PRE-ORDER</span>
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        <span>PRE-ORDER THIS DISH</span>
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
