'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Check, Star } from 'lucide-react';

const badgeStyles = {
  Bestseller: 'bg-accentLight dark:bg-accentDark text-white dark:text-bgDark',
  Neu: 'bg-indigo text-white',
  Angebot: 'bg-gold text-white',
};

const Rating = ({ value, count }) => (
  <div className="flex items-center gap-1.5" aria-label={`Bewertung: ${value} von 5 Sternen`}>
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={
            i <= Math.round(value)
              ? 'fill-gold text-gold'
              : 'text-textLight/20 dark:text-textDark/20'
          }
        />
      ))}
    </div>
    <span className="text-xs text-inkSoft dark:text-textDark/50">({count})</span>
  </div>
);

const ItemCard = ({ item, onAdd }) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const hasDiscount = item.oldPrice && item.oldPrice > item.price;

  return (
    <div className="group flex flex-col h-full rounded-2xl bg-paper dark:bg-paperDark ring-1 ring-black/5 dark:ring-white/10 hover:ring-accentLight/30 dark:hover:ring-accentDark/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 overflow-hidden transition-all duration-300">

      {/* Bild */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-bgLight dark:bg-bgDark">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md ${badgeStyles[item.badge] ?? 'bg-textLight text-bgLight'}`}>
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-grow p-5">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-inkSoft dark:text-textDark/50 mb-1">
          {item.category}
        </p>
        <h4 className="text-lg font-bold mb-1.5 leading-snug">{item.name}</h4>
        <Rating value={item.rating} count={item.reviews} />
        <p className="text-sm text-inkSoft dark:text-textDark/60 leading-relaxed mt-2.5 mb-4">
          {item.description}
        </p>

        <div className="mt-auto flex justify-between items-end gap-3">
          <div>
            {hasDiscount && (
              <span className="block text-xs text-inkSoft dark:text-textDark/45 line-through">
                {item.oldPrice.toFixed(2).replace('.', ',')} €
              </span>
            )}
            <span className="text-xl font-bold text-accentLight dark:text-accentDark">
              {item.price.toFixed(2).replace('.', ',')} €
            </span>
          </div>
          <button
            onClick={handleAdd}
            aria-label={`${item.name} in den Warenkorb legen`}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full shadow-md transition-all duration-200 ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-accentLight dark:bg-accentDark text-white dark:text-bgDark shadow-accentLight/20 dark:shadow-accentDark/20 hover:shadow-lg hover:-translate-y-px'
            }`}
          >
            {justAdded ? <Check size={15} /> : <ShoppingCart size={15} />}
            {justAdded ? 'Im Korb' : 'In den Korb'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
