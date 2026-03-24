"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="tentang" className="w-full bg-brand-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                alt="Proses pembuatan kopi" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-coffee/10 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5"
            >
              <div className="text-brand-yellow-dark text-4xl mb-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-black">5+</p>
                <p className="text-sm text-gray-500 font-medium">Tahun <br/>Pengalaman</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-yellow-dark uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-yellow-dark"></span> Cerita Kami
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight">Secangkir Kopi, <br/>Sejuta Inspirasi</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Berawal dari kecintaan kami terhadap biji kopi Nusantara, The Yellow Bean didirikan pada tahun 2021 dengan satu tujuan: menyajikan pengalaman menikmati kopi yang tak terlupakan di tengah hiruk-pikuk kota.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Kami percaya bahwa kopi yang baik harus diimbangi dengan suasana yang nyaman. Karena itu, kami merancang ruang kami untuk memercikkan kreativitas, kehangatan, dan kebahagiaan bagi setiap tamu yang datang.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow-dark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">Premium Roasts</h4>
                    <p className="text-sm text-gray-500">Biji kopi pilihan terbaik</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow-dark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">Cozy Space</h4>
                    <p className="text-sm text-gray-500">Nyaman untuk gaya hidupmu</p>
                  </div>
                </div>
              </div>

              <a href="#menu" className="inline-flex items-center gap-2 text-brand-coffee font-bold hover:text-brand-yellow-dark transition-colors group">
                Jelajahi Menu Kami
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
