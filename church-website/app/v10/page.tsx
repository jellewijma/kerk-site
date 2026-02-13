"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ArrowUpRight, BookOpen, Clock, MapPin } from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <div className="fixed top-0 left-0 w-1 h-full bg-neutral-900 hidden md:block" />
      
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between border-b border-neutral-200">
          <Link href="/" className="text-sm font-bold tracking-[0.3em] uppercase">
            De Deur
          </Link>
          
          <div className="hidden md:flex items-center gap-12">
            <Link href="#" className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors">Over</Link>
            <Link href="#" className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors">Diensten</Link>
            <Link href="#" className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors">Sermons</Link>
            <Link href="#" className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors">Contact</Link>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors group">
            Bezoek
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-32 px-8 md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-light tracking-wide">
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-neutral-500 transition-colors">Over</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-neutral-500 transition-colors">Diensten</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-neutral-500 transition-colors">Sermons</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-neutral-500 transition-colors">Contact</Link>
          </div>
        </div>
      )}

      <section className="pt-20">
        <div className="grid md:grid-cols-12 min-h-screen">
          <div className="col-span-12 md:col-span-5 flex items-center px-8 md:px-12 py-24 md:py-0 order-2 md:order-1">
            <div className="max-w-lg">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 block mb-8">Evangeliegemeente</span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
                Een plek om
                <br />
                <span className="font-medium italic">thuis te komen</span>
              </h1>
              
              <p className="text-neutral-500 leading-relaxed mb-12 max-w-md">
                Welkom bij De Deur Maasluis. Een gemeenschap van geloof, hoop en liefde 
                in het hart van de stad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors">
                  Zondag 10:30
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm tracking-wide border-b border-neutral-300 hover:border-neutral-900 pb-1">
                  Meer informatie
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 relative order-1 md:order-2 min-h-[50vh] md:min-h-0">
            <div className="absolute inset-0 bg-neutral-100">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1493809842364-78817addc593?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute bottom-8 left-8 bg-white p-6 shadow-lg hidden md:block">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">Locatie</p>
              <p className="font-medium">Maassluis, NL</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 block mb-4">01</span>
              <h2 className="text-3xl font-light">Wat wij geloven</h2>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Wij zijn een gemeente die gelooft in de transformerende kracht van het evangelie. 
                Een plek waar twijfel welkom is, waar vragen gesteld mogen worden, en waar 
                iedereen uitgenodigd is om de weg te ontdekken.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-neutral-300 hover:border-neutral-900 transition-colors pb-1">
                Lees onze visie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 block mb-8">Diensten</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                Kom langs
              </h2>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="space-y-0">
                {[
                  { day: "Zondag", time: "10:30", type: "Hoofddienst" },
                  { day: "Zondag", time: "18:00", type: "Avonddienst" },
                  { day: "Woensdag", time: "19:30", type: "Bijbelstudie" },
                ].map((service, i) => (
                  <div key={i} className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:border-neutral-700 transition-colors">
                    <div className="flex items-center gap-8">
                      <span className="text-5xl font-light text-neutral-700 group-hover:text-neutral-500 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="font-medium">{service.day}</p>
                        <p className="text-neutral-500 text-sm">{service.type}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-light text-neutral-400">{service.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-neutral-200 hover:border-neutral-900 transition-colors">
              <BookOpen className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors mb-8" />
              <h3 className="text-xl font-medium mb-3">Geloof</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Ontdek wat wij geloven en hoe dat ons vormt als gemeente.</p>
            </div>
            
            <div className="group p-8 border border-neutral-200 hover:border-neutral-900 transition-colors">
              <Clock className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors mb-8" />
              <h3 className="text-xl font-medium mb-3">Agenda</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Bekijk onze komende evenementen en activiteiten.</p>
            </div>
            
            <div className="group p-8 border border-neutral-200 hover:border-neutral-900 transition-colors">
              <MapPin className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors mb-8" />
              <h3 className="text-xl font-medium mb-3">Locatie</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Vind ons in het centrum van Maassluis.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 md:px-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4">De Deur</p>
            <p className="text-neutral-500 text-sm max-w-xs">
              Evangeliegemeente De Deur Maasluis. Een plek om thuis te komen.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">Social</p>
              <div className="space-y-3 text-sm text-neutral-600">
                <Link href="#" className="block hover:text-neutral-900 transition-colors">Instagram</Link>
                <Link href="#" className="block hover:text-neutral-900 transition-colors">Facebook</Link>
                <Link href="#" className="block hover:text-neutral-900 transition-colors">YouTube</Link>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">Contact</p>
              <div className="space-y-3 text-sm text-neutral-600">
                <p>Streetname 123</p>
                <p>3140 AA Maassluis</p>
                <p>info@dedeur.nl</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-200 flex justify-between items-center text-sm text-neutral-400">
          <p>© {new Date().getFullYear()}</p>
          <p className="text-xs tracking-widest uppercase">Soli Deo Gloria</p>
        </div>
      </footer>
    </div>
  );
}
