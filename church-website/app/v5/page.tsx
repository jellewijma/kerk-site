"use client";

import Link from "next/link";
import { Sun, Leaf, Droplets, Wind, ArrowRight, Menu } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 text-teal-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      
      {/* Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/60 backdrop-blur-xl rounded-full shadow-sm z-50 px-8 py-4 flex justify-between items-center border border-white/50">
        <Link href="/" className="font-semibold text-xl tracking-tight text-teal-800 flex items-center gap-2">
           <Leaf className="w-5 h-5 text-emerald-500" />
           De Deur
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-teal-700/80">
          <Link href="#" className="hover:text-teal-900 transition-colors">Our Vision</Link>
          <Link href="#" className="hover:text-teal-900 transition-colors">Growth</Link>
          <Link href="#" className="hover:text-teal-900 transition-colors">Gatherings</Link>
        </div>
        <button className="bg-teal-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors shadow-lg shadow-teal-900/10">
          Visit Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/50 text-teal-700 text-sm font-medium animate-fade-in-up">
            <Sun className="w-4 h-4 text-amber-400" /> A place of new beginnings
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-teal-950">
            Breathe in <br/> <span className="text-emerald-600 font-serif italic">Hope.</span>
          </h1>
          <p className="text-xl text-teal-700/80 max-w-xl mx-auto leading-relaxed">
             Discover peace, purpose, and a fresh start at Evangeliegemeente De Deur Maasluis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-white rounded-full shadow-xl shadow-emerald-100/50 text-teal-900 font-medium hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Plan Your Visit <ArrowRight className="w-4 h-4 text-emerald-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Refresh", icon: <Droplets className="w-6 h-6 text-blue-400" />, text: "Experience refreshing worship and authentic community." },
            { title: "Grow", icon: <Leaf className="w-6 h-6 text-emerald-400" />, text: "Deepen your roots in faith through our Bible studies." },
            { title: "Restore", icon: <Wind className="w-6 h-6 text-teal-400" />, text: "Find healing and restoration for your soul." },
          ].map((card, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/60 hover:bg-white/80 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-100/50 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-medium text-teal-900 mb-3">{card.title}</h3>
              <p className="text-teal-700/70 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto h-[60vh] rounded-[3rem] overflow-hidden relative shadow-2xl shadow-emerald-900/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[20s] hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent flex items-end p-12">
             <div className="text-white max-w-xl">
               <h2 className="text-4xl font-serif italic mb-4">Come as you are.</h2>
               <p className="text-lg text-emerald-50/90">We are saving a seat for you this Sunday at 10:30 AM.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-teal-700/60 text-sm">
        <div className="flex justify-center gap-6 mb-8">
          <Link href="#" className="hover:text-teal-900 transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-teal-900 transition-colors">Facebook</Link>
          <Link href="#" className="hover:text-teal-900 transition-colors">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} De Deur Maasluis</p>
      </footer>
    </div>
  );
}
