"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Waves, Anchor, Compass, Heart } from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-cyan-50 text-slate-800 font-sans selection:bg-cyan-200 selection:text-slate-900">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-radial from-cyan-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/70 backdrop-blur-xl rounded-full shadow-lg shadow-blue-100/50 px-8 py-4 flex items-center gap-12 border border-white/50">
          <Link href="/" className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-cyan-600" />
            <span className="font-bold text-slate-800">De Deur</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-cyan-600 transition-colors">Over</Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">Diensten</Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">Contact</Link>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors">
            <Anchor className="w-4 h-4" />
            Bezoek
          </button>

          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-8 md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-medium">
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-600 transition-colors">Over</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-600 transition-colors">Diensten</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-600 transition-colors">Contact</Link>
          </div>
        </div>
      )}

      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 right-0 text-blue-100" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-cyan-200/50 text-cyan-700 text-sm font-medium mb-8">
            <Compass className="w-4 h-4" />
            Een haven van hoop
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-8">
            Vind je
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500">
              anker
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            In de stroom van het leven bieden wij een plek van rust, gemeenschap en geloof. 
            Welkom bij De Deur Maassluis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-cyan-200/50 transition-all flex items-center gap-3">
              Kom deze zondag
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
              Bekijk diensten →
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Waves className="w-6 h-6" />,
                title: "Diepgang",
                desc: "Groei in je geloof door Bijbelstudie en gemeenschap.",
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                icon: <Heart className="w-6 h-6" />,
                title: "Verbinding",
                desc: "Echte relaties in kleine groepen door de week.",
                gradient: "from-blue-500 to-indigo-500"
              },
              { 
                icon: <Anchor className="w-6 h-6" />,
                title: "Houvast",
                desc: "Vind rust en betekenis in een veranderende wereld.",
                gradient: "from-indigo-500 to-cyan-500"
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-white/80 hover:bg-white/90 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/50">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-slate-900/90" />
            
            <div className="relative z-10 py-24 px-12 md:px-24">
              <div className="max-w-2xl">
                <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase font-medium">Tijden</span>
                <h2 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-8">Onze diensten</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <p className="text-white font-medium">Zondagochtend</p>
                      <p className="text-slate-400 text-sm">Hoofddienst</p>
                    </div>
                    <p className="text-cyan-400 font-medium">10:30</p>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <p className="text-white font-medium">Zondagavond</p>
                      <p className="text-slate-400 text-sm">Avonddienst</p>
                    </div>
                    <p className="text-cyan-400 font-medium">18:00</p>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <p className="text-white font-medium">Woensdagavond</p>
                      <p className="text-slate-400 text-sm">Bijbelstudie</p>
                    </div>
                    <p className="text-cyan-400 font-medium">19:30</p>
                  </div>
                </div>

                <button className="mt-10 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Route plannen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-cyan-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-cyan-600" />
            <span className="font-medium text-slate-700">De Deur Maassluis</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-cyan-600 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">YouTube</Link>
          </div>
          
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
