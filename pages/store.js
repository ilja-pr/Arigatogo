'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import HeroDefault from '@/components/HeroDefault';
import ItemCard from '@/components/ItemCard';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const dummyItems = [
  {
    id: 1,
    name: 'JR-Pass',
    description: 'Unbegrenzte Zugfahrten mit JR in ganz Japan. Perfekt für Rundreisen.',
    price: 249,
    image: `${basePath}/assets/store/jrPass.webp`,
  },
  {
    id: 2,
    name: 'Japan SIM-Karte – 4G/5G',
    description: 'Mobiles Internet in Japan – einfach einlegen und lossurfen.',
    price: 29.99,
    image: `${basePath}/assets/store/simCard.webp`,
  },
  {
    id: 3,
    name: 'Japanisches Pocket WiFi',
    description: 'Mobiles WLAN für bis zu 5 Geräte – ideal für Gruppenreisen.',
    price: 59,
    image: `${basePath}/assets/store/pocketWifi.webp`,
  },
  {
    id: 4,
    name: 'Japan Reiseführer (Printausgabe)',
    description: 'Alles für deine Japanreise: Highlights, Karten & Tipps kompakt im Buch.',
    price: 19.99,
    image: `${basePath}/assets/store/reiseplaner.webp`,
  },
  {
    id: 5,
    name: 'Japanisches Tee-Set (Matcha Starter)',
    description: 'Traditionelles Matcha-Set mit Schale, Bambusbesen & grünem Tee.',
    price: 34.9,
    image: `${basePath}/assets/store/teeSet.webp`,
  },
  {
    id: 6,
    name: 'Arigato-Go Regenschirm',
    description: 'Stylischer Reisebegleiter – bleibt trocken bei jedem Wetter.',
    price: 9.99,
    image: `${basePath}/assets/store/regenschirm.webp`,
  },
];

export default function Store() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeItem = (index) =>
    setCart((prev) => prev.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2);

  return (
    <LayoutWrapper>
      <HeroDefault
        title="Reisebedarf für Japan"
        textLines={[
          'Entdecke unsere besten Reise-Tools für Japan.',
          'Von SIM-Karten über JR-Pässe bis zu Souvenirs.',
        ]}
        buttonText="Jetzt shoppen"
        buttonLink="#shop"
      />

      <div id="shop" className="my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-accentLight dark:text-accentDark pb-4" >
          Reisebedarf & Souvenirs
          </h1>
          <button
            onClick={() => setShowCart(true)}
            className="relative bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-5 py-2 rounded-full hover:opacity-90 transition text-sm font-semibold mb-3"
          >
            🛒 Warenkorb
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-4">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyItems.map((item) => (
            <ItemCard key={item.id} item={item} onAdd={addToCart} />
          ))}
        </div>
      </div>

      {/* Warenkorb Modal */}
      {showCart && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setShowCart(false)}
          />
          <div className="fixed z-50 inset-0 flex items-center justify-center px-4">
            <div className="bg-white dark:bg-bgDark text-textLight dark:text-textDark rounded-xl p-6 w-full max-w-md shadow-2xl relative">
              <button
                className="absolute top-2 right-2 text-2xl font-bold hover:opacity-70"
                onClick={() => setShowCart(false)}
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold mb-4 text-accentLight dark:text-accentDark">
                Dein Warenkorb
              </h2>

              {cart.length === 0 ? (
                <p className="opacity-70">Noch nichts im Warenkorb.</p>
              ) : (
                <>
                  <ul className="space-y-2 mb-4 max-h-64 overflow-y-auto pr-1">
                    {cart.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-sm border-b border-border py-1"
                      >
                        <span>{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span>{Number(item.price).toFixed(2)} €</span>
                          <button
                            className="text-red-500 text-xs"
                            onClick={() => removeItem(index)}
                          >
                            Entfernen
                          </button>
                        </div>
                      </li>
                    ))}
                    <li className="flex justify-between font-bold mt-3 pt-2 text-base border-t">
                      <span>Gesamt</span>
                      <span>{total} €</span>
                    </li>
                  </ul>

                  <button
                    className="w-full bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-4 py-2 rounded-full hover:opacity-90 transition"
                    onClick={() => alert('Checkout kommt bald!')}
                  >
                    Jetzt kaufen
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </LayoutWrapper>
  );
}
