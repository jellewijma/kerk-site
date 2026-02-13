"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-300 selection:text-stone-900">
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-stone-900 rounded-full" />
            <span className="text-sm font-medium tracking-wide">DE DEUR</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-12">
            <Link href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Over ons</Link>
            <Link href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Diensten</Link>
            <Link href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Contact</Link>
          </div>

          <button className="group flex items-center gap-2 text-sm font-medium">
            <span>Bezoek ons</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-stone-400 text-sm tracking-[0.3em] uppercase">Welkom bij</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-12">
            Evangeliegemeente
            <br />
            <span className="font-medium">De Deur</span>
          </h1>
          
          <div className="w-16 h-px bg-stone-300 mx-auto mb-12" />
          
          <p className="text-xl text-stone-500 max-w-xl mx-auto leading-relaxed mb-16">
            Een plek om thuis te komen. Ontdek geloof, gemeenschap en betekenis in het hart van Maassluis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-stone-900 text-white px-10 py-4 text-sm font-medium hover:bg-stone-800 transition-all flex items-center gap-3">
              Zondag 10:30
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium">
              Bekijk diensten →
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/5] bg-stone-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <span className="text-stone-400 text-sm tracking-[0.2em] uppercase">Onze visie</span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Een gemeenschap van
                <br />
                <span className="font-medium">hope en verbinding</span>
              </h2>
              <p className="text-stone-500 leading-relaxed">
                Wij geloven in de kracht van gemeenschap. Bij De Deur vind je een warm welkom, 
                echte gesprekken en een plek om te groeien in je geloof.
              </p>
              <div className="pt-4">
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-stone-300 hover:border-stone-900 transition-colors pb-1">
                  Lees meer over ons
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-stone-400 text-sm tracking-[0.2em] uppercase">Wat wij bieden</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 mx-auto border border-stone-200 rounded-full flex items-center justify-center mb-8 group-hover:border-stone-900 transition-colors">
                <Calendar className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-4">Wekelijkse diensten</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Zondagochtend en -avond, woensdagavond bijbelstudie.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 mx-auto border border-stone-200 rounded-full flex items-center justify-center mb-8 group-hover:border-stone-900 transition-colors">
                <Users className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-4">Kleine groepen</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Connectie en gesprek in huiskringen door de hele week.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 mx-auto border border-stone-200 rounded-full flex items-center justify-center mb-8 group-hover:border-stone-900 transition-colors">
                <MapPin className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-4">Centraal in Maassluis</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Makkelijk bereikbaar, met voldoende parkeerplaats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-stone-600">
            "Ik ben de deur; als iemand door Mij binnenkomt, zal hij behouden worden."
          </blockquote>
          <p className="mt-8 text-stone-400 text-sm tracking-[0.2em] uppercase">Johannes 10:9</p>
        </div>
      </section>

      <footer className="py-16 px-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-stone-900 rounded-full" />
            <span className="text-sm text-stone-500">De Deur Maassluis</span>
          </div>
          
          <div className="flex gap-8 text-sm text-stone-400">
            <Link href="#" className="hover:text-stone-900 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-stone-900 transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-stone-900 transition-colors">Contact</Link>
          </div>
          
          <p className="text-stone-400 text-sm">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
