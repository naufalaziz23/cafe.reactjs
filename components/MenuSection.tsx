"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const foods = [
  { id: 1, name: "Nasi Goreng Spesial", price: "Rp 35.000", badge: "Best Seller", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Spaghetti Carbonara", price: "Rp 45.000", badge: "New", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Roti Bakar Coklat Keju", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "French Fries", price: "Rp 20.000", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Sandwich Ayam", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Chicken Cordon Bleu", price: "Rp 55.000", badge: "Promo", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Caesar Salad", price: "Rp 35.000", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800" },
];

const drinks = [
  { id: 1, name: "Es Kopi Susu Gula Aren", price: "Rp 25.000", badge: "Best Seller", img: "/images/es kopi gula ren.jpeg" },
  { id: 2, name: "Americano Dingin", price: "Rp 20.000", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Matcha Latte", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Red Velvet Latte", price: "Rp 30.000", badge: "New", img: "/images/red-velvet latte.jpg" },
  { id: 5, name: "Lemon Tea", price: "Rp 18.000", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Lychee Mojito", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Caramel Macchiato", price: "Rp 35.000", badge: "Promo", img: "/images/caramel macchiatto.jpg" },
];

function MenuCard({ name, price, img, index, badge }: { name: string; price: string; img: string; index: number; badge?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-brand-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-brand-coffee/10 transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2 relative"
    >
      {badge && (
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-md ${
            badge === 'Best Seller' ? 'bg-brand-coffee text-white' : 
            badge === 'New' ? 'bg-brand-yellow text-brand-coffee' : 
            'bg-red-500 text-white'
          }`}>
            {badge}
          </span>
        </div>
      )}
      
      <div className="relative h-56 w-full overflow-hidden bg-brand-yellow-light/30">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow relative bg-white">
        <h3 className="text-xl font-semibold text-brand-black mb-2 line-clamp-1 group-hover:text-brand-coffee transition-colors">{name}</h3>
        <p className="text-brand-yellow-dark font-bold text-xl mt-auto">{price}</p>
        
        {/* Floating Add to Cart Button */}
        <div className="absolute right-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <button className="w-10 h-10 rounded-full bg-brand-yellow text-brand-coffee flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="w-full bg-brand-gray py-24 pb-32 overflow-hidden relative">
      {/* Aesthetic Background Detail */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow-light/20 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-brand-yellow-dark uppercase font-bold tracking-widest text-sm mb-3">
             <span className="w-8 h-px bg-brand-yellow-dark"></span>
             Pilihan Terbaik
             <span className="w-8 h-px bg-brand-yellow-dark"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-black">Menu Favorit Kami</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Dibuat dari biji kopi pilihan dan bahan berkualitas tinggi untuk menyempurnakan hari Anda.
          </p>
        </motion.div>

        {/* Makanan Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <h4 className="text-3xl font-bold text-brand-coffee">🍽️ Makanan</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-coffee/20 to-transparent" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {foods.map((item, idx) => (
              <MenuCard key={item.id} name={item.name} price={item.price} img={item.img} index={idx} badge={item.badge} />
            ))}
          </div>
        </div>

        {/* Minuman Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <h4 className="text-3xl font-bold text-brand-coffee">🥤 Minuman</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-coffee/20 to-transparent" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {drinks.map((item, idx) => (
              <MenuCard key={item.id} name={item.name} price={item.price} img={item.img} index={idx} badge={item.badge} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
