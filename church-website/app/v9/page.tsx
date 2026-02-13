"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sun, Sunrise, Cloud, Sparkles } from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-orange-950 to-amber-50 text-white font-sans selection:bg-orange-300 selection:text-slate-900">
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sunrise className="w-6 h-6 text-orange-400" />
            <span className="font-bold text-lg">De Deur</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-orange-200/80">
            <Link href="#" className="hover:text-orange-300 transition-colors">Over ons</Link>
            <Link href="#" className="hover:text-orange-300 transition-colors">Diensten</Link>
            <Link href="#" className="hover:text-orange-300 transition-colors">Contact</Link>
            <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-400 transition-all font-medium">
              Bezoek ons
            </button>
          </div>

          <button className="md:hidden text-orange-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 pt-32 px-8 md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-medium text-orange-200">
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-300 transition-colors">Over ons</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-300 transition-colors">Diensten</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-300 transition-colors">Contact</Link>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium tracking-widest uppercase mb-8">
            <Sparkles className="w-4 h-4" />
            Nieuwe dag, nieuwe hoop
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400">
              Elke ochtend
            </span>
            <br />
            <span className="text-white">begint met genade</span>
          </h1>
          
          <p className="text-xl text-orange-100/80 max-w-xl mx-auto leading-relaxed mb-12">
            Ontdek een plek waar je kunt beginnen. Waar je verleden niet je toekomst bepaalt. 
            Welkom bij De Deur Maassluis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-orange-500/30 transition-all transform hover:scale-105 flex items-center gap-3">
              Kom deze zondag
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-orange-200 hover:text-white transition-colors font-medium flex items-center gap-2">
              <Sun className="w-5 h-5" />
              10:30 uur
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-orange-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">Onze visie</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Licht brengen in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-300">
                  elke duisternis
                </span>
              </h2>
              <p className="text-orange-100/70 text-lg leading-relaxed">
                Wij geloven dat iedereen een nieuwe start verdient. Bij De Deur vind je 
                een gemeenschap die je opvangt, bemoedigt en helpt groeien.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                  <p className="text-2xl font-bold text-orange-400">10:30</p>
                  <p className="text-orange-200/60 text-sm">Zondagochtend</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                  <p className="text-2xl font-bold text-orange-400">18:00</p>
                  <p className="text-orange-200/60 text-sm">Zondagavond</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                  <p className="text-2xl font-bold text-orange-400">19:30</p>
                  <p className="text-orange-200/60 text-sm">Woensdag</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-amber-500/10">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                <Sun className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-amber-50 text-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-orange-600 text-sm font-medium tracking-widest uppercase">Wat wij bieden</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Voor iedereen</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Sunrise className="w-6 h-6" />,
                title: "Nieuw begin",
                desc: "Iedere dag is een kans om opnieuw te beginnen.",
                color: "from-orange-500 to-amber-500"
              },
              { 
                icon: <Cloud className="w-6 h-6" />,
                title: "Veilige haven",
                desc: "Een plek waar je jezelf kunt zijn.",
                color: "from-amber-500 to-yellow-500"
              },
              { 
                icon: <Sparkles className="w-6 h-6" />,
                title: "Groei",
                desc: "Ontwikkel je geloof in gemeenschap.",
                color: "from-yellow-500 to-orange-500"
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl p-10 shadow-lg shadow-orange-100/50 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-amber-100 border-t border-amber-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sunrise className="w-5 h-5 text-orange-600" />
            <span className="font-bold text-slate-800">De Deur Maassluis</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-600">
            <Link href="#" className="hover:text-orange-600 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">Contact</Link>
          </div>
          
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
