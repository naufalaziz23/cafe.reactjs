"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section id="lokasi" className="w-full bg-brand-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Map Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-yellow/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.22891396262!2d106.78917335!3d-6.250567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e09880e609%3A0xc3fec8675d0b904c!2sKemang%2C%20Mampang%20Prpt.%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1711261234567!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-yellow-dark uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-yellow-dark"></span> Lokasi Kami
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight">Mampir Ke Rumah Kami</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 shrink-0 bg-brand-yellow text-brand-coffee rounded-2xl flex items-center justify-center shadow-lg shadow-brand-yellow/30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-black mb-2">Alamat</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Jl. Kemang Raya No. 123, <br />
                      Mampang Prapatan, Jakarta Selatan, <br />
                      DKI Jakarta 12730
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 shrink-0 bg-brand-coffee text-brand-yellow rounded-2xl flex items-center justify-center shadow-lg shadow-brand-coffee/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-black mb-2">Kontak Kami</h4>
                    <p className="text-gray-600 text-lg">halo@theyellowbean.com</p>
                    <p className="text-gray-600 text-lg font-bold mt-1">+62 812 3456</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 shrink-0 bg-brand-gray text-brand-coffee rounded-2xl flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-black mb-2">Jam Operasional</h4>
                    <p className="text-gray-600 text-lg italic">Senin - Minggu</p>
                    <p className="text-brand-coffee font-bold text-lg">08:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=The+Yellow+Bean+Cafe+Kemang+Jakarta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-black text-white rounded-full font-bold hover:bg-brand-coffee transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Buka di Google Maps
                </a>
                <a 
                  href="https://wa.me/628123456" 
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Tanya Via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
