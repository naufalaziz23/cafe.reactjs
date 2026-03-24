"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ReservationSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservasi" className="w-full bg-brand-coffee py-24 relative overflow-hidden">
      {/* Decorative text background */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none">
        BOOK A TABLE
      </h2>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-brand-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3">Reservasi Tempat</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Momen Spesial Menanti Anda</h3>
              <p className="text-brand-gray/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pastikan kursi Anda tersedia. Baik itu untuk makan malam romantis, pertemuan bisnis, atau sekedar bersantai di akhir pekan, kami siap memberikan pelayanan terbaik.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Buka Setiap Hari</p>
                    <p className="font-semibold text-white">08:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Hubungi Cepat</p>
                    <p className="font-semibold text-brand-yellow">+62 812 3456</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Form decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow-light/30 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold text-brand-black mb-8 border-b border-gray-100 pb-4">Formulir Reservasi</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-brand-black mb-2">Reservasi Berhasil!</h4>
                  <p className="text-gray-500">Terima kasih, tim kami akan segera menghubungi Anda untuk konfirmasi meja.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600">Nama Lengkap</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600">No. WhatsApp</label>
                      <input required type="tel" placeholder="0812 3456 7890" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600">Tanggal</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600">Jam / Waktu</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-gray-700 bg-white">
                        <option value="">Pilih Jam</option>
                        <option value="10:00">10:00 Pagi</option>
                        <option value="12:00">12:00 Siang</option>
                        <option value="15:00">15:00 Sore</option>
                        <option value="19:00">19:00 Malam</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-600">Jumlah Orang</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-gray-700 bg-white">
                      <option value="2">2 Orang</option>
                      <option value="4">4 Orang</option>
                      <option value="6">6 Orang</option>
                      <option value="8+">8+ Orang</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-brand-yellow text-brand-coffee font-bold text-lg hover:bg-brand-yellow-dark hover:text-white transition-all transform active:scale-[0.98] shadow-lg shadow-brand-yellow/30">
                    Konfirmasi Reservasi
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
