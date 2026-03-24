"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-yellow min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-brand-white rounded-full mix-blend-overlay filter blur-3xl opacity-60" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-brand-coffee rounded-full mix-blend-overlay filter blur-[100px] opacity-20" 
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 lg:py-0">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-brand-coffee text-sm font-bold tracking-wider mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-coffee animate-pulse" />
            #1 Kopi Arabica Premium
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-black tracking-tight mb-6 leading-[1.1]"
          >
            Awali Harimu <br />
            Dengan <span className="text-brand-white drop-shadow-md relative">
              Sempurna
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-coffee opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-brand-coffee font-medium max-w-xl mb-10 leading-relaxed"
          >
            Nikmati sajian kopi Nusantara terbaik dan aneka hidangan lezat dalam suasana yang ceria, modern, dan menenangkan. Tempat sempurna untuk cerita barumu.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-brand-black px-8 py-4 text-base font-bold text-brand-white shadow-xl shadow-brand-black/20 hover:bg-gray-800 hover:scale-105 transition-all active:scale-95 group"
            >
              Lihat Menu Kami
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center rounded-full bg-brand-yellow-light/50 backdrop-blur-sm border border-brand-coffee/10 px-8 py-4 text-base font-bold text-brand-coffee hover:bg-brand-white hover:text-brand-black transition-all"
            >
              Pesan Meja
            </a>
          </motion.div>

          {/* User Reviews floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-yellow overflow-hidden bg-white">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} width={40} height={40} alt="User" unoptimized />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-brand-coffee text-sm">
                {[1,2,3,4,5].map((i) => <span key={i}>★</span>)}
              </div>
              <span className="text-sm font-bold text-brand-black">Ribuan Pelanggan Puas</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white/20 backdrop-blur-sm"
          >
            <Image 
              src="/images/kafe-homey-1748272373964.png" 
              alt="Cafe Interior" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={true}
              className="object-cover"
            />
          </motion.div>

          {/* Floating detail box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-8 bottom-24 p-5 rounded-2xl bg-white shadow-2xl z-20 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-yellow/20 rounded-lg text-brand-coffee">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <p className="font-bold text-brand-black">Promo<br/>Spesial</p>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-snug">Diskon 20% untuk semua varian Latte hari ini!</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
