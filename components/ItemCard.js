'use client';

import Image from 'next/image';

const ItemCard = ({ item, onAdd }) => {
  return (
    <div className="bg-white dark:bg-bgDark text-textLight dark:text-textDark rounded-2xl shadow-md p-4 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
      {/* Bild mit festem Seitenverhältnis */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="/assets/test.jpg"
        />
      </div>

      <h4 className="text-lg font-semibold mb-1">{item.name}</h4>
      <p className="text-sm opacity-70 mb-4">{item.description}</p>

      <div className="mt-auto flex justify-between items-center">
        <span className="font-bold text-accentLight dark:text-accentDark">
          {item.price.toFixed(2)} €
        </span>
        <button
          onClick={() => onAdd(item)}
          className="bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-3 py-1 rounded-full hover:opacity-90 transition"
        >
          🛒+
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
