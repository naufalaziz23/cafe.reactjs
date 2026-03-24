import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-black pt-20 pb-10 text-brand-gray relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coffee rounded-full mix-blend-screen filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">The Yellow Bean</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Membangkitkan semangat lewat setiap cangkir kopi dan hidangan istimewa. Temukan inspirasimu di sini.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Beranda</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-brand-yellow transition-colors">Menu Pilihan</a></li>
              <li><a href="#tentang" className="text-gray-400 hover:text-brand-yellow transition-colors">Tentang Kami</a></li>
              <li><a href="#galeri" className="text-gray-400 hover:text-brand-yellow transition-colors">Galeri Suasana</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Jl. Kemang Raya No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+62 812 3456</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>hello@theyellowbean.com</span>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6">Jam Operasional</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Senin - Jumat</span>
                <span className="text-brand-yellow font-medium">08:00 - 22:00</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sabtu - Minggu</span>
                <span className="text-brand-yellow font-medium">07:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 The Yellow Bean Cafe. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social SVGs here if needed, keeping empty circles for now */}
            {[1,2,3].map((i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-all">
                <span className="sr-only">Social {i}</span>
                <div className="w-4 h-4 bg-current rounded-[2px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
