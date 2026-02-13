"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Calendar, Users, ChevronRight, PlayCircle, ArrowRight } from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase border-2 border-black p-1 px-2">
            DDM
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#" className="hover:text-zinc-600 transition-colors">About</Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">Ministries</Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">Events</Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">Sermons</Link>
            <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all transform hover:scale-105 active:scale-95">
              Plan Your Visit
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden animate-in slide-in-from-top-10 fade-in duration-200">
          <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight">
            <Link href="#" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Ministries</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Sermons</Link>
            <hr className="border-zinc-100" />
            <Link href="#" className="text-zinc-500 text-lg">Plan Your Visit</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden">
        {/* Abstract Background Placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black opacity-80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wide uppercase">
            Welcome to Maassluis
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            Welcome <br/> Home.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            A place where you can know Jesus and make Him known. Join us this Sunday at 10:30 AM.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
            <button className="w-full md:w-auto bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all flex items-center justify-center gap-2">
              Plan Your Visit <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full md:w-auto border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" /> Watch Latest Sermon
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement (High Contrast) */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            "We exist to help people find their way back to God and experience a life-changing relationship with Jesus."
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mt-8" />
        </div>
      </section>

      {/* The Grid (Formula 1/2) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-zinc-50 rounded-2xl p-8 hover:bg-zinc-100 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-900">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">New Here?</h3>
              <p className="text-zinc-600 leading-relaxed">
                We know visiting a new church can be intimidating. We've planned everything to make your visit seamless.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-semibold border-b-2 border-zinc-200 hover:border-zinc-900 transition-all pb-0.5">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-zinc-50 rounded-2xl p-8 hover:bg-zinc-100 transition-colors overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-900">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Events</h3>
              <p className="text-zinc-600 leading-relaxed">
                See what's happening at De Deur. From youth nights to prayer meetings, there's a place for you.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-semibold border-b-2 border-zinc-200 hover:border-zinc-900 transition-all pb-0.5">
                View Calendar <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-zinc-50 rounded-2xl p-8 hover:bg-zinc-100 transition-colors overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MapPin className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-900">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Location</h3>
              <p className="text-zinc-600 leading-relaxed">
                We are located in the heart of Maassluis. Click below for directions and service times.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-semibold border-b-2 border-zinc-200 hover:border-zinc-900 transition-all pb-0.5">
                Get Directions <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold">De Deur Maasluis</h4>
            <p className="text-sm">A Christian Fellowship Church</p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors" />
              <div className="w-8 h-8 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors" />
              <div className="w-8 h-8 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Service Times</h4>
            <ul className="space-y-2 text-sm">
              <li>Sunday: 10:30 AM</li>
              <li>Sunday: 18:00 PM</li>
              <li>Wednesday: 19:30 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Streetname 123</li>
              <li>3140 AA Maassluis</li>
              <li>info@dedeurmaassluis.nl</li>
            </ul>
          </div>

           <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
             <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Plan Your Visit</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sermons</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Evangeliegemeente De Deur Maasluis. All rights reserved.
        </div>
      </footer>

      {/* Floating Launcher (Formula Requirement) */}
      <button className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all hover:scale-110 flex items-center gap-2 pr-6 group">
        <div className="bg-white text-black p-2 rounded-full">
           <MapPin className="w-5 h-5" />
        </div>
        <span className="font-bold">Plan Your Visit</span>
      </button>
    </div>
  );
}
