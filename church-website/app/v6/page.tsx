"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Play, ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-amber-400">
            DDM
          </Link>
          
          <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide">
            <Link href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">ABOUT</Link>
            <Link href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">SERMONS</Link>
            <Link href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">GIVE</Link>
            <button className="bg-amber-500 text-black px-6 py-3 font-bold hover:bg-amber-400 transition-all transform hover:scale-105">
              VISIT US
            </button>
          </div>

          <button className="md:hidden text-neutral-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 z-40 pt-32 px-8 md:hidden">
          <div className="flex flex-col gap-8 text-3xl font-bold tracking-tight">
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors">ABOUT</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors">SERMONS</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors">GIVE</Link>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">Welcome Home</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-600">FIND YOUR</span>
            <br />
            <span className="text-amber-400">LIGHT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
            A place where faith meets community. Experience the warmth of belonging at De Deur Maasluis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-amber-500 text-black px-8 py-4 font-bold hover:bg-amber-400 transition-all transform hover:scale-105 flex items-center gap-3">
              PLAN YOUR VISIT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-neutral-700 text-neutral-300 px-8 py-4 font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all flex items-center gap-3">
              <Play className="w-5 h-5" />
              WATCH SERMONS
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-amber-500' : 'bg-neutral-700'}`} />
          ))}
        </div>
      </section>

      <section className="relative py-32 px-6 bg-neutral-900">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-transparent h-32" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-amber-500 text-sm font-bold tracking-widest uppercase">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Guiding souls toward <span className="text-amber-400">eternal hope</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                For over 40 years, we have been a beacon of light in Maassluis, welcoming all who seek meaning, community, and a deeper connection with God.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-amber-500 pl-6">
                  <p className="text-3xl font-black text-amber-400">40+</p>
                  <p className="text-neutral-500 text-sm">Years of Ministry</p>
                </div>
                <div className="border-l-2 border-amber-500 pl-6">
                  <p className="text-3xl font-black text-amber-400">300+</p>
                  <p className="text-neutral-500 text-sm">Weekly Attendees</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-800 overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507692049790-dea2d389c47c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 flex items-center justify-center">
                <span className="text-black font-black text-4xl">✟</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-500 text-sm font-bold tracking-widest uppercase">Join Us</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Service Times</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { day: "Sunday", time: "10:30 AM", type: "Main Service" },
              { day: "Sunday", time: "6:00 PM", type: "Evening Service" },
              { day: "Wednesday", time: "7:30 PM", type: "Bible Study" },
            ].map((service, i) => (
              <div key={i} className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <Clock className="w-6 h-6 text-amber-500" />
                  <span className="text-neutral-600 text-sm">{service.type}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.day}</h3>
                <p className="text-amber-400 text-xl font-medium">{service.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-neutral-400">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span>Streetname 123, 3140 AA Maassluis</span>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 border-t border-neutral-800 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-amber-400 mb-2">DDM</p>
            <p className="text-neutral-500 text-sm">Evangeliegemeente De Deur Maasluis</p>
          </div>
          <div className="flex gap-8 text-sm text-neutral-400">
            <Link href="#" className="hover:text-amber-400 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">YouTube</Link>
          </div>
          <p className="text-neutral-600 text-sm">© {new Date().getFullYear()} De Deur Maasluis</p>
        </div>
      </footer>
    </div>
  );
}
