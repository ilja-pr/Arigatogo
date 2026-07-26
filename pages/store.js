'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ShoppingBag, X, Plus, Minus, Trash2,
  Truck, RotateCcw, ShieldCheck, CreditCard, PackageCheck,
} from 'lucide-react';
import HeroDefault from '@/components/HeroDefault';
import ItemCard from '@/components/ItemCard';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const FREE_SHIPPING_FROM = 50;
const SHIPPING_COST = 4.9;

const products = [
  {
    id: 1,
    name: 'JR-Pass (7 Tage)',
    category: 'Transport',
    description: 'Unbegrenzte Zugfahrten mit JR in ganz Japan – inklusive Shinkansen. Perfekt für Rundreisen.',
    price: 249,
    rating: 4.8,
    reviews: 412,
    badge: 'Bestseller',
    image: `${basePath}/assets/store/jrPass.webp`,
  },
  {
    id: 2,
    name: 'Japan SIM-Karte – 4G/5G',
    category: 'Internet',
    description: 'Mobiles Internet für 15 Tage – einfach einlegen und lossurfen. eSIM-Option verfügbar.',
    price: 29.99,
    rating: 4.6,
    reviews: 287,
    image: `${basePath}/assets/store/simCard.webp`,
  },
  {
    id: 3,
    name: 'Pocket WiFi (Mietgerät)',
    category: 'Internet',
    description: 'Mobiles WLAN für bis zu 5 Geräte – ideal für Gruppen. Abholung am Flughafen möglich.',
    price: 59,
    oldPrice: 69,
    rating: 4.7,
    reviews: 198,
    badge: 'Angebot',
    image: `${basePath}/assets/store/pocketWifi.webp`,
  },
  {
    id: 4,
    name: 'Japan Reiseführer (Print)',
    category: 'Reiseführer',
    description: 'Highlights, Karten und Insider-Tipps kompakt im Buch – inklusive herausnehmbarer Metro-Karte.',
    price: 19.99,
    rating: 4.5,
    reviews: 156,
    image: `${basePath}/assets/store/reiseplaner.webp`,
  },
  {
    id: 5,
    name: 'Matcha Starter-Set',
    category: 'Souvenirs',
    description: 'Traditionelles Tee-Set mit Schale, Bambusbesen und Bio-Matcha aus Uji.',
    price: 34.9,
    rating: 4.9,
    reviews: 94,
    badge: 'Neu',
    image: `${basePath}/assets/store/teeSet.webp`,
  },
  {
    id: 6,
    name: 'Arigatogo Regenschirm',
    category: 'Souvenirs',
    description: 'Kompakter Reisebegleiter im Hinomaru-Design – bleibt trocken bei jedem Wetter.',
    price: 9.99,
    rating: 4.3,
    reviews: 61,
    image: `${basePath}/assets/store/regenschirm.webp`,
  },
];

const CATEGORIES = ['Alle', 'Transport', 'Internet', 'Reiseführer', 'Souvenirs'];

const SORT_OPTIONS = [
  { value: 'popular', label: 'Beliebteste' },
  { value: 'price-asc', label: 'Preis aufsteigend' },
  { value: 'price-desc', label: 'Preis absteigend' },
  { value: 'rating', label: 'Beste Bewertung' },
];

const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

const trustItems = [
  { icon: Truck, text: `Gratis Versand ab ${FREE_SHIPPING_FROM} €` },
  { icon: RotateCcw, text: '30 Tage Rückgaberecht' },
  { icon: ShieldCheck, text: 'Sicher einkaufen (SSL)' },
  { icon: CreditCard, text: 'Kauf auf Rechnung möglich' },
];

export default function Store() {
  // Warenkorb: { [productId]: menge }
  const [cart, setCart] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [category, setCategory] = useState('Alle');
  const [sort, setSort] = useState('popular');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Warenkorb überlebt Seiten-Reloads
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arigatogo-cart');
      if (saved) setCart(JSON.parse(saved));
    } catch { /* ignorieren */ }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('arigatogo-cart', JSON.stringify(cart));
    } catch { /* ignorieren */ }
  }, [cart]);

  const addToCart = (item) =>
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] ?? 0) + 1 }));

  const setQty = (id, qty) =>
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const cartEntries = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const product = products.find((p) => p.id === Number(id));
          return product ? { ...product, qty } : null;
        })
        .filter(Boolean),
    [cart]
  );

  const itemCount = cartEntries.reduce((sum, e) => sum + e.qty, 0);
  const subtotal = cartEntries.reduce((sum, e) => sum + e.price * e.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;
  const missingForFree = Math.max(0, FREE_SHIPPING_FROM - subtotal);

  const visibleProducts = useMemo(() => {
    let list = category === 'Alle' ? [...products] : products.filter((p) => p.category === category);
    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      default: list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [category, sort]);

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart({});
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setOrderPlaced(false);
  };

  return (
    <>
      <HeroDefault
        title="Store"
        eyebrow="お店 · Reisebedarf"
        textLines={[
          'Praktisches für unterwegs und Schönes für zuhause.',
          'Von SIM-Karten über JR-Pässe bis zu Souvenirs.',
        ]}
        buttonText="Jetzt stöbern"
        buttonLink="#shop"
      />

      {/* Trust-Leiste */}
      <div className="border-b border-black/5 dark:border-white/5 bg-paper dark:bg-paperDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm text-inkSoft dark:text-textDark/70">
              <Icon size={18} className="text-accentLight dark:text-accentDark shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Kopfzeile */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h1 className="heading-rule text-3xl sm:text-4xl">Reisebedarf & Souvenirs</h1>
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative inline-flex items-center gap-2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-accentLight/20 dark:shadow-accentDark/20 hover:shadow-lg hover:-translate-y-px transition-all"
          >
            <ShoppingBag size={16} />
            Warenkorb
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[22px] h-[22px] flex items-center justify-center bg-textLight dark:bg-textDark text-bgLight dark:text-bgDark text-xs font-bold rounded-full px-1.5">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Filter & Sortierung */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Nach Kategorie filtern">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  category === cat
                    ? 'bg-textLight dark:bg-textDark border-transparent text-bgLight dark:text-bgDark font-semibold'
                    : 'border-textLight/20 dark:border-textDark/20 text-textLight/75 dark:text-textDark/75 hover:border-accentLight dark:hover:border-accentDark hover:text-accentLight dark:hover:text-accentDark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm text-inkSoft dark:text-textDark/60">
            Sortieren:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-textLight/15 dark:border-textDark/15 px-3 py-2 bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark text-sm outline-none focus:border-accentLight dark:focus:border-accentDark transition-colors"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </label>
        </div>

        {/* Produkt-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleProducts.map((item) => (
            <ItemCard key={item.id} item={item} onAdd={addToCart} />
          ))}
        </div>

        <p className="mt-10 text-xs text-inkSoft/70 dark:text-textDark/40">
          Demo-Shop: Bestellungen werden nicht wirklich ausgeführt. Preise inkl. MwSt.
        </p>
      </div>

      {/* Warenkorb-Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
            />
            <motion.aside
              role="dialog"
              aria-label="Warenkorb"
              className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-bgLight dark:bg-paperDark shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              {/* Kopf */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 dark:border-white/10">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingBag size={20} className="text-accentLight dark:text-accentDark" />
                  Warenkorb {itemCount > 0 && `(${itemCount})`}
                </h2>
                <button
                  onClick={closeDrawer}
                  aria-label="Warenkorb schließen"
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {orderPlaced ? (
                /* Bestell-Bestätigung */
                <div className="flex-grow flex flex-col items-center justify-center text-center px-8 gap-4">
                  <span className="w-16 h-16 rounded-full bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
                    <PackageCheck size={30} />
                  </span>
                  <h3 className="text-2xl font-bold">Danke für deine Bestellung!</h3>
                  <p className="text-inkSoft dark:text-textDark/60 text-sm leading-relaxed">
                    Das ist eine Demo – es wurde nichts berechnet und nichts verschickt.
                    In einem echten Shop bekämst du jetzt eine Bestellbestätigung per E-Mail.
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="mt-2 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Weiter stöbern
                  </button>
                </div>
              ) : cartEntries.length === 0 ? (
                /* Leerer Warenkorb */
                <div className="flex-grow flex flex-col items-center justify-center text-center px-8 gap-3">
                  <span className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-inkSoft dark:text-textDark/50">
                    <ShoppingBag size={28} />
                  </span>
                  <h3 className="text-lg font-bold">Noch nichts im Korb</h3>
                  <p className="text-sm text-inkSoft dark:text-textDark/60">
                    Leg los – der JR-Pass ist unser Bestseller.
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="mt-2 border border-accentLight dark:border-accentDark text-accentLight dark:text-accentDark px-6 py-2.5 rounded-full font-semibold hover:bg-accentLight hover:text-white dark:hover:bg-accentDark dark:hover:text-bgDark transition-colors"
                  >
                    Produkte ansehen
                  </button>
                </div>
              ) : (
                <>
                  {/* Gratis-Versand-Fortschritt */}
                  <div className="px-6 pt-5">
                    {missingForFree > 0 ? (
                      <p className="text-sm text-inkSoft dark:text-textDark/60 mb-2">
                        Noch <strong className="text-textLight dark:text-textDark">{eur(missingForFree)}</strong> bis zum Gratis-Versand
                      </p>
                    ) : (
                      <p className="text-sm font-semibold text-emerald-600 mb-2">
                        Gratis-Versand gesichert!
                      </p>
                    )}
                    <div className="h-1.5 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accentLight dark:bg-accentDark transition-all duration-500"
                        style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_FROM) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Positionen */}
                  <ul className="flex-grow overflow-y-auto px-6 py-5 space-y-5">
                    {cartEntries.map((entry) => (
                      <li key={entry.id} className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-paper dark:bg-bgDark ring-1 ring-black/5 dark:ring-white/10">
                          <Image src={entry.image} alt={entry.name} fill className="object-cover" sizes="80px" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between gap-2">
                            <h4 className="font-semibold text-sm leading-snug">{entry.name}</h4>
                            <button
                              onClick={() => setQty(entry.id, 0)}
                              aria-label={`${entry.name} entfernen`}
                              className="text-inkSoft/60 dark:text-textDark/40 hover:text-accentLight dark:hover:text-accentDark transition-colors shrink-0"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                          <p className="text-xs text-inkSoft dark:text-textDark/50 mt-0.5">{eur(entry.price)} / Stück</p>
                          <div className="flex items-center justify-between mt-2">
                            {/* Mengen-Stepper */}
                            <div className="inline-flex items-center rounded-full border border-textLight/15 dark:border-textDark/15">
                              <button
                                onClick={() => setQty(entry.id, entry.qty - 1)}
                                aria-label="Menge verringern"
                                className="p-1.5 hover:text-accentLight dark:hover:text-accentDark transition-colors"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="w-7 text-center text-sm font-semibold">{entry.qty}</span>
                              <button
                                onClick={() => setQty(entry.id, entry.qty + 1)}
                                aria-label="Menge erhöhen"
                                className="p-1.5 hover:text-accentLight dark:hover:text-accentDark transition-colors"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                            <span className="text-sm font-bold">{eur(entry.price * entry.qty)}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Summen + Checkout */}
                  <div className="border-t border-black/5 dark:border-white/10 px-6 py-5 space-y-2.5">
                    <div className="flex justify-between text-sm text-inkSoft dark:text-textDark/60">
                      <span>Zwischensumme</span>
                      <span>{eur(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-inkSoft dark:text-textDark/60">
                      <span>Versand</span>
                      <span>{shipping === 0 ? 'Gratis' : eur(shipping)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-1.5 border-t border-black/5 dark:border-white/10">
                      <span>Gesamt</span>
                      <span>{eur(total)}</span>
                    </div>
                    <p className="text-[11px] text-inkSoft/70 dark:text-textDark/40">
                      inkl. MwSt. · Demo-Bestellung, keine echte Zahlung
                    </p>
                    <button
                      onClick={placeOrder}
                      className="w-full mt-1 bg-accentLight dark:bg-accentDark text-white dark:text-bgDark px-6 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-accentLight/25 dark:shadow-accentDark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      Demo-Bestellung abschließen
                    </button>
                  </div>
                </>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
