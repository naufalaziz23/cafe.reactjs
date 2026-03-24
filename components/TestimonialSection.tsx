"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Food Blogger",
    content: "Suasana di sini luar biasa nyaman. Kopi Susu Gula Aren-nya adalah yang terbaik di kota ini! Sangat direkomendasikan untuk tempat kerja atau hangout.",
    image: "11"
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Freelancer",
    content: "WiFi super cepat dan croissant-nya sangat buttery. Sering ke sini hampir setiap minggu untuk menyelesaikan proyek. Pelayanannya juga sangat ramah.",
    image: "15"
  },
  {
    id: 3,
    name: "Amanda Putra",
    role: "Mahasiswa",
    content: "Tempat favorit untuk nugas sama teman-teman! Harganya mahasiswa banget tapi kualitas rasanya bintang lima. Roti Bakarnya juara wajib coba.",
    image: "25"
  }
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-brand-yellow py-24 relative overflow-hidden">
      {/* Dekorasi Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-coffee uppercase mb-2">Suara Mereka</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-black">Apa Kata Pelanggan Kami?</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-coffee/5 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-brand-yellow/20">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.439 12.618H10.053V3H21.017V12.618L18.675 21H14.017ZM3.017 21L5.439 12.618H-0.947V3H10.017V12.618L7.675 21H3.017Z" />
                </svg>
              </div>
              
              <div className="flex gap-1 text-brand-yellow-dark mb-6">
                {[1,2,3,4,5].map(star => (
                   <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic relative z-10">"{t.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image src={`https://i.pravatar.cc/150?img=${t.image}`} alt={t.name} width={48} height={48} unoptimized />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
